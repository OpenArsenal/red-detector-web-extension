import { browser } from 'wxt/browser';

import type { CollectionPlan } from './planning';
import { limitStringsByTotalChars, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';
import type { NormalizedObservation, ObservationBatch, ObservationTarget } from '../observations';
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

/** Input for adding background-only observations to an event-mode batch. */
export type BackgroundObservationCollectorInput = {
	/** Active tab id used when an injected script reads page-owned JavaScript globals. */
	tabId: number;
	/** Content-emitted observation batch that background observations should extend. */
	batch: ObservationBatch;
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
 * Adds background-only facts to an already-normalized event batch.
 *
 * Event-mode fresh analysis starts with content-script observations, but the
 * content script cannot see page-owned globals or response headers. This helper
 * restores parity with the legacy enriched snapshot path by appending those
 * facts as normal observations before pattern matching, evidence aggregation,
 * and graph refinement run.
 */
export async function collectBackgroundObservationBatch(
	input: BackgroundObservationCollectorInput,
): Promise<ObservationBatch> {
	const pageOrigin = getOrigin(input.batch.target.url);
	const sourceBudget = summarizeSourceContentObservationBudget(input.batch);
	const sourceUrls = collectSourceUrlsFromObservationBatch(input.batch);
	const [jsGlobals, headers, fetchedSourceContents] = await Promise.all([
		collectInjectedJsGlobals(input.tabId, input.collectionPlan.jsGlobalPropertyList, input.log),
		collectResponseHeaders(input.batch.target.url),
		collectSameOriginObservationSourceContents({
			pageOrigin,
			scriptUrls: sourceUrls.scriptUrls,
			stylesheetUrls: sourceUrls.stylesheetUrls,
			existingScriptContentCount: sourceBudget.scriptContentCount,
			existingStylesheetContentCount: sourceBudget.stylesheetContentCount,
			existingScriptContentChars: sourceBudget.scriptContentChars,
			existingStylesheetContentChars: sourceBudget.stylesheetContentChars,
		}),
	]);
	const observedAt = Date.now();
	const backgroundObservations = createBackgroundObservations({
		target: input.batch.target,
		observedAt,
		headers,
		jsGlobals,
		scriptContents: fetchedSourceContents.scriptContents,
		stylesheetContents: fetchedSourceContents.stylesheetContents,
	});

	input.log?.('collect-background-observations-success', {
		tabId: input.tabId,
		hostname: input.batch.target.hostname,
		backgroundObservationCount: backgroundObservations.length,
		headerCount: Object.keys(headers).length,
		jsGlobalCount: Object.keys(jsGlobals).length,
		scriptContentCount: fetchedSourceContents.scriptContents.length,
		stylesheetContentCount: fetchedSourceContents.stylesheetContents.length,
	});

	return {
		...input.batch,
		observations: [...input.batch.observations, ...backgroundObservations],
	};
}


type SourceContentObservationBudget = {
	/** Number of script-content observations already present before background fetches. */
	scriptContentCount: number;
	/** Number of stylesheet-content observations already present before background fetches. */
	stylesheetContentCount: number;
	/** Total script-content characters already present before background fetches. */
	scriptContentChars: number;
	/** Total stylesheet-content characters already present before background fetches. */
	stylesheetContentChars: number;
};

type ObservationSourceUrls = {
	/** Candidate script URLs observed by the content script or resource timings. */
	scriptUrls: string[];
	/** Candidate stylesheet URLs observed by the content script or resource timings. */
	stylesheetUrls: string[];
};

type ObservationSourceContentInput = ObservationSourceUrls & {
	/** Origin that passive background fetches must stay within. */
	pageOrigin: string;
	/** Number of script-content observations already present before background fetches. */
	existingScriptContentCount: number;
	/** Number of stylesheet-content observations already present before background fetches. */
	existingStylesheetContentCount: number;
	/** Total script-content characters already present before background fetches. */
	existingScriptContentChars: number;
	/** Total stylesheet-content characters already present before background fetches. */
	existingStylesheetContentChars: number;
};

type BackgroundObservationInput = SourceContentSignals & {
	/** Target shared by appended background observations. */
	target: ObservationTarget;
	/** Timestamp attached to background observations. */
	observedAt: number;
	/** Bounded response headers collected by the background. */
	headers: Record<string, string>;
	/** Bounded page-owned JavaScript globals collected from the main world. */
	jsGlobals: Record<string, JsGlobalSignalValue>;
};

/** Count existing source-content observations so background fetches respect budgets. */
function summarizeSourceContentObservationBudget(batch: ObservationBatch): SourceContentObservationBudget {
	let scriptContentCount = 0;
	let stylesheetContentCount = 0;
	let scriptContentChars = 0;
	let stylesheetContentChars = 0;

	for (const observation of batch.observations) {
		if (observation.kind === 'scriptContent') {
			scriptContentCount += 1;
			scriptContentChars += String(observation.value).length;
			continue;
		}
		if (observation.kind === 'stylesheetContent') {
			stylesheetContentCount += 1;
			stylesheetContentChars += String(observation.value).length;
		}
	}

	return {
		scriptContentCount,
		stylesheetContentCount,
		scriptContentChars,
		stylesheetContentChars,
	};
}

/** Extract same-origin fetch candidates from normalized content observations. */
function collectSourceUrlsFromObservationBatch(batch: ObservationBatch): ObservationSourceUrls {
	const scriptUrls: string[] = [];
	const stylesheetUrls: string[] = [];

	for (const observation of batch.observations) {
		if (typeof observation.value !== 'string') continue;

		if (observation.kind === 'scriptSrc') {
			scriptUrls.push(observation.value);
			continue;
		}
		if (observation.kind === 'stylesheetHref') {
			stylesheetUrls.push(observation.value);
			continue;
		}
		if (observation.kind !== 'resourceUrl') continue;

		const initiatorType = String(observation.attributes?.initiatorType ?? '');
		if (initiatorType === 'script') {
			scriptUrls.push(observation.value);
		} else if (initiatorType === 'link' || initiatorType === 'css') {
			stylesheetUrls.push(observation.value);
		}
	}

	return {
		scriptUrls: uniqueStrings(scriptUrls),
		stylesheetUrls: uniqueStrings(stylesheetUrls),
	};
}

/** Fetch source text for event observations without exceeding the same legacy budgets. */
async function collectSameOriginObservationSourceContents(
	input: ObservationSourceContentInput,
): Promise<SourceContentSignals> {
	const [scriptContents, stylesheetContents] = await Promise.all([
		fetchBoundedTextSignals(
			input.scriptUrls,
			input.pageOrigin,
			SOURCE_LIMITS.scriptContentItems - input.existingScriptContentCount,
			SOURCE_LIMITS.scriptContentChars,
			SOURCE_LIMITS.scriptContentTotalChars - input.existingScriptContentChars,
		),
		fetchBoundedTextSignals(
			input.stylesheetUrls,
			input.pageOrigin,
			SOURCE_LIMITS.stylesheetContentItems - input.existingStylesheetContentCount,
			SOURCE_LIMITS.stylesheetContentChars,
			SOURCE_LIMITS.stylesheetContentTotalChars - input.existingStylesheetContentChars,
		),
	]);

	return { scriptContents, stylesheetContents };
}

/** Convert background-only values into the same observation contract as content facts. */
function createBackgroundObservations(input: BackgroundObservationInput): NormalizedObservation[] {
	const observations: NormalizedObservation[] = [];
	const appendTextObservation = (kind: NormalizedObservation['kind'], value: string, key?: string): void => {
		if (!value) return;
		observations.push(createBackgroundObservation(input.target, input.observedAt, kind, value, key));
	};

	for (const [key, value] of sortedEntries(input.headers)) {
		appendTextObservation('header', value, key);
	}
	for (const content of input.scriptContents) {
		appendTextObservation('scriptContent', content);
	}
	for (const content of input.stylesheetContents) {
		appendTextObservation('stylesheetContent', content);
	}
	for (const [key, value] of sortedEntries(input.jsGlobals)) {
		observations.push(createBackgroundObservation(input.target, input.observedAt, 'jsGlobal', value, key, 'page-main-world'));
	}

	return observations;
}

/** Create one replay-safe background observation with stable target metadata. */
function createBackgroundObservation(
	target: ObservationTarget,
	observedAt: number,
	kind: NormalizedObservation['kind'],
	value: NormalizedObservation['value'],
	key?: string,
	collector: NormalizedObservation['collector'] = 'background-enrichment',
): NormalizedObservation {
	return {
		kind,
		interface: 'extension',
		collector,
		target,
		observedAt,
		value,
		...(key ? { key } : {}),
	};
}

/** Sort record entries for stable replay and test output. */
function sortedEntries<T>(record: Record<string, T>): [string, T][] {
	return Object.entries(record).sort(([left], [right]) => left.localeCompare(right));
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
