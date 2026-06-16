import { browser } from 'wxt/browser';

import type { CollectionPlan } from './planning';
import { limitStringsByTotalChars, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';
import { getOrigin } from '../shared/url';

/** Value shape stored for a page-owned JavaScript global. */
export type JsGlobalSignalValue = string | boolean | number;

/** Summary logger used by the background entrypoint without coupling collectors to console output. */
export type CollectorLog = (event: string, details?: Record<string, unknown>) => void;

export type SourceContentSignals = Pick<PageSignals, 'scriptContents' | 'stylesheetContents'>;

export type BackgroundSignalCollectorInput = {
	/** Active tab id used when an injected script reads page-owned JavaScript globals. */
	tabId: number;
	/** Page signals returned by the content script before background-only data is added. */
	signals: PageSignals;
	/** Rule-aware plan that tells the background which injected globals matter. */
	collectionPlan: CollectionPlan;
	/** Optional logger supplied by the background entrypoint. */
	log?: CollectorLog;
};

const PASSIVE_FETCH_TIMEOUT_MS = 1_500;
const BACKGROUND_FETCH_CONCURRENCY = 4;

/**
 * Adds signals the content script cannot collect on its own.
 *
 * The content script can read the DOM, storage keys, visible cookie names, and
 * performance entries. The background adds the pieces that need extension-only
 * APIs: an injected script for JavaScript globals, a bounded HEAD request for
 * page headers, and bounded same-origin fetches for external script and CSS
 * text. This keeps those extension-only behaviors behind one collector module.
 */
export async function collectBackgroundPageSignals(
	input: BackgroundSignalCollectorInput,
): Promise<PageSignals> {
	const pageOrigin = getOrigin(input.signals.url);
	const [jsGlobals, headers, fetchedSourceContents] = await Promise.all([
		collectInjectedJsGlobals(input.tabId, input.collectionPlan.jsGlobalPropertyList, input.log),
		collectResponseHeaders(input.signals.url),
		collectSameOriginSourceContents(input.signals, pageOrigin),
	]);

	return {
		...input.signals,
		headers: {
			...input.signals.headers,
			...headers,
		},
		scriptContents: limitStringsByTotalChars(
			[...input.signals.scriptContents, ...fetchedSourceContents.scriptContents],
			SOURCE_LIMITS.scriptContentItems,
			SOURCE_LIMITS.scriptContentTotalChars,
		),
		stylesheetContents: limitStringsByTotalChars(
			[...input.signals.stylesheetContents, ...fetchedSourceContents.stylesheetContents],
			SOURCE_LIMITS.stylesheetContentItems,
			SOURCE_LIMITS.stylesheetContentTotalChars,
		),
		jsGlobals,
	};
}

/**
 * Reads page-owned JavaScript globals with a short injected script.
 *
 * A content script runs in its own isolated JavaScript environment. That means
 * it can see the DOM but not values like `window.__NEXT_DATA__` exactly as the
 * page's own scripts see them. The background uses `browser.scripting` to run a
 * tiny function in the page and returns only bounded primitive summaries.
 */
export async function collectInjectedJsGlobals(
	tabId: number,
	propertyPaths: string[],
	log?: CollectorLog,
): Promise<Record<string, JsGlobalSignalValue>> {
	if (!propertyPaths.length) {
		return {};
	}

	try {
		const results = await browser.scripting.executeScript({
			target: { tabId, frameIds: [0] },
			world: 'MAIN' as const,
			func: collectInjectedJsGlobalsFromPageContext,
			args: [propertyPaths, SOURCE_LIMITS.jsGlobalValueChars],
		});

		const firstResult = results[0]?.result;
		return isJsGlobalSignalRecord(firstResult) ? firstResult : {};
	} catch (error) {
		log?.('collect-js-globals-failed', {
			tabId,
			message: error instanceof Error ? error.message : 'Unknown JavaScript global collection failure',
		});
		return {};
	}
}

async function collectResponseHeaders(pageUrl: string): Promise<Record<string, string>> {
	try {
		const response = await fetchWithTimeout(pageUrl, {
			cache: 'force-cache',
			credentials: 'omit',
			method: 'HEAD',
		}, PASSIVE_FETCH_TIMEOUT_MS);

		return headersToSignalRecord(response.headers);
	} catch {
		return {};
	}
}

async function collectSameOriginSourceContents(
	signals: PageSignals,
	pageOrigin: string,
): Promise<SourceContentSignals> {
	const scriptUrls = uniqueStrings([
		...signals.scripts,
		...signals.resources
			.filter((resource) => resource.initiatorType === 'script')
			.map((resource) => resource.url),
	]);
	const stylesheetUrls = uniqueStrings([
		...signals.stylesheets,
		...signals.resources
			.filter((resource) =>
				resource.initiatorType === 'link' ||
				resource.initiatorType === 'css',
			)
			.map((resource) => resource.url),
	]);
	const [scriptContents, stylesheetContents] = await Promise.all([
		fetchBoundedTextSignals(
			scriptUrls,
			pageOrigin,
			SOURCE_LIMITS.scriptContentItems - signals.scriptContents.length,
			SOURCE_LIMITS.scriptContentChars,
			SOURCE_LIMITS.scriptContentTotalChars - totalChars(signals.scriptContents),
		),
		fetchBoundedTextSignals(
			stylesheetUrls,
			pageOrigin,
			SOURCE_LIMITS.stylesheetContentItems - signals.stylesheetContents.length,
			SOURCE_LIMITS.stylesheetContentChars,
			SOURCE_LIMITS.stylesheetContentTotalChars - totalChars(signals.stylesheetContents),
		),
	]);

	return { scriptContents, stylesheetContents };
}

async function fetchBoundedTextSignals(
	urls: readonly string[],
	allowedOrigin: string,
	maxItems: number,
	maxChars: number,
	maxTotalChars: number,
): Promise<string[]> {
	if (maxItems <= 0 || maxTotalChars <= 0) {
		return [];
	}

	const candidates = uniqueStrings(
		urls.filter((url) => isFetchableSameOriginUrl(url, allowedOrigin)),
	).slice(0, maxItems);

	const fetched: string[] = [];
	for (let index = 0; index < candidates.length; index += BACKGROUND_FETCH_CONCURRENCY) {
		const batch = candidates.slice(index, index + BACKGROUND_FETCH_CONCURRENCY);
		const values = await Promise.all(
			batch.map((url) => fetchBoundedText(url, maxChars)),
		);

		for (const value of values) {
			if (!value) {
				continue;
			}
			fetched.push(value);
			if (fetched.length >= maxItems) {
				return limitStringsByTotalChars(fetched, maxItems, maxTotalChars);
			}
		}
	}

	return limitStringsByTotalChars(fetched, maxItems, maxTotalChars);
}

function totalChars(values: readonly string[]): number {
	return values.reduce((total, value) => total + value.length, 0);
}

async function fetchBoundedText(url: string, maxChars: number): Promise<string> {
	let reader: ReadableStreamDefaultReader<Uint8Array<ArrayBuffer>> | null = null;

	try {
		const response = await fetchWithTimeout(url, {
			cache: 'force-cache',
			credentials: 'omit',
		}, PASSIVE_FETCH_TIMEOUT_MS);

		if (!response.ok || !response.body) {
			return '';
		}

		reader = response.body.getReader();
		const decoder = new TextDecoder();
		let text = '';

		while (text.length < maxChars) {
			const { done, value } = await reader.read();
			if (done) break;

			text += decoder.decode(value, { stream: true });
			if (text.length >= maxChars) {
				await reader.cancel();
				break;
			}
		}

		return text.slice(0, maxChars);
	} catch {
		return '';
	} finally {
		if (reader) {
			try {
				await reader.cancel();
			} catch {
				// The stream may already be closed after a short bounded read.
			}

			try {
				reader.releaseLock();
			} catch {
				// Some runtimes release the lock as part of canceling the reader.
			}
		}
	}
}

async function fetchWithTimeout(
	url: string,
	init: RequestInit,
	timeoutMs: number,
): Promise<Response> {
	const controller = new AbortController();
	const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
	try {
		return await fetch(url, {
			...init,
			signal: controller.signal,
		});
	} finally {
		globalThis.clearTimeout(timeoutId);
	}
}

function headersToSignalRecord(headers: Headers): Record<string, string> {
	const entries: Array<[string, string]> = [];
	for (const [key, value] of headers.entries()) {
		if (entries.length >= SOURCE_LIMITS.headers) {
			break;
		}

		entries.push([
			key.toLowerCase(),
			truncate(value, SOURCE_LIMITS.headerValueChars),
		]);
	}

	return Object.fromEntries(entries);
}

function isFetchableSameOriginUrl(url: string, allowedOrigin: string): boolean {
	try {
		const parsed = new URL(url);
		return parsed.origin === allowedOrigin && (parsed.protocol === 'http:' || parsed.protocol === 'https:');
	} catch {
		return false;
	}
}

function isJsGlobalSignalRecord(value: unknown): value is Record<string, JsGlobalSignalValue> {
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		return false;
	}

	return Object.values(value).every((item) =>
		typeof item === 'string' || typeof item === 'boolean' || typeof item === 'number',
	);
}

function collectInjectedJsGlobalsFromPageContext(
	propertyPaths: string[],
	maxValueChars: number,
): Record<string, JsGlobalSignalValue> {
	const values: Record<string, JsGlobalSignalValue> = {};
	const root = globalThis as Record<string, unknown>;

	function readGlobalPath(propertyPath: string): unknown {
		if (Object.hasOwn(root, propertyPath)) {
			return root[propertyPath];
		}

		let current: unknown = root;
		for (const segment of propertyPath.split('.')) {
			if (current === undefined || current === null) {
				return undefined;
			}

			current = (current as Record<string, unknown>)[segment];
		}

		return current;
	}

	function summarizeValue(value: unknown): JsGlobalSignalValue {
		const valueType = typeof value;
		if (valueType === 'string') {
			return (value as string).slice(0, maxValueChars);
		}
		if (valueType === 'number' || valueType === 'boolean') {
			return value as number | boolean;
		}
		if (valueType === 'function') {
			return 'function';
		}

		try {
			const constructorName = (value as { constructor?: { name?: string } }).constructor?.name;
			if (constructorName) {
				return constructorName.slice(0, maxValueChars);
			}
		} catch {
			// Fall through to String(value).
		}

		return String(value).slice(0, maxValueChars);
	}

	for (const propertyPath of propertyPaths) {
		try {
			const value = readGlobalPath(propertyPath);
			if (value === undefined || value === null) {
				continue;
			}

			values[propertyPath] = summarizeValue(value);
		} catch {
			// Some pages define getters with side effects or throwing accessors. Treat
			// those globals as unavailable rather than letting detection mutate the page.
		}
	}

	return values;
}
