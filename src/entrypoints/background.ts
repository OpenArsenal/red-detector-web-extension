import { defineProxy } from 'comctx';
import { browser } from 'wxt/browser';

import { canInspectTab, getActiveTab } from '../lib/browser/active-tab';
import {
	buildCollectionPlan,
	toCollectPageSignalsInput,
	type CollectionPlan,
} from '../lib/collectors/planning';
import { analyzeSite } from '../lib/detection/engine';
import { bundledTechnologyRegistryProvider } from '../lib/detection/registry-provider';
import { limitStringsByTotalChars, truncate, uniqueStrings } from '../lib/detection/normalizers';
import { SOURCE_LIMITS } from '../lib/detection/rules';

import type { ObservationSessionState } from '../lib/content/observed-page-signals';
import type {
	PageSignals,
	SiteAnalysis,
	TechnologyDefinition,
} from '../lib/detection/types';
import { validatePageSignals } from '../lib/detection/validate';

import type {
	AnalyzeActiveTabInput,
	AnalyzeActiveTabOutput,
	BackgroundApi,
	BeginObservationSessionInput,
	ContentApi,
} from '../lib/messaging';
import {
	CONTENT_SCRIPT_TIMEOUT_MS,
	contentScriptFailure,
	withTimeout,
} from '../lib/messaging/rpc';
import {
	BACKGROUND_RPC_NAMESPACE,
	CONTENT_RPC_NAMESPACE,
	createBackgroundServerAdapter,
	createContentClientAdapter,
} from '../lib/messaging';
import { errorResponse, ok, type AppResult } from '../lib/shared/result';
import { getOrigin, isSameDocumentUrl } from '../lib/shared/url';
import { STORAGE_LIMITS, getAnalysisCacheKey } from '../lib/storage/contracts';
import { getCachedAnalysis, getStatus, saveAnalysis } from '../lib/storage';

type InspectableTab = {
  id: number;
  url: string;
};

type JsGlobalSignalValue = string | boolean | number;

const CONTENT_SCRIPT_FILE = '/content-scripts/content.js';
const CONTENT_SCRIPT_PING_TIMEOUT_MS = 750;
const BACKGROUND_LOG_PREFIX = '[red-detector][background]';
const PASSIVE_FETCH_TIMEOUT_MS = 1_500;
const BACKGROUND_FETCH_CONCURRENCY = 4;
const OBSERVATION_POLICY: BeginObservationSessionInput['policy'] = {
	durationMs: 60_000,
	throttleMs: 1_500,
	maxPendingNodes: 100,
	maxMutations: 5_000,
};

const contentScriptInjectionByTab = new Map<number, Promise<AppResult<void>>>();

function logBackgroundEvent(event: string, details?: Record<string, unknown>): void {
	if (details) {
		console.log(BACKGROUND_LOG_PREFIX, event, details);
		return;
	}

	console.log(BACKGROUND_LOG_PREFIX, event);
}

function summarizeTab(tab: InspectableTab) {
	return {
		tabId: tab.id,
		hostname: new URL(tab.url).hostname,
	};
}

function summarizeSignals(signals: PageSignals) {
	return {
		hostname: signals.hostname,
		scriptCount: signals.scripts.length,
		stylesheetCount: signals.stylesheets.length,
		linkCount: signals.links.length,
		resourceCount: signals.resources.length,
		requestCount: signals.requests.length,
		scriptContentCount: signals.scriptContents.length,
		stylesheetContentCount: signals.stylesheetContents.length,
		headerCount: Object.keys(signals.headers).length,
		metaKeyCount: Object.keys(signals.meta).length,
		domSelectorCount: Object.keys(signals.dom.selectors).length,
		jsGlobalCount: Object.keys(signals.jsGlobals).length,
		htmlMatchCount: Object.keys(signals.htmlMatches ?? {}).length,
		textChars: signals.text.length,
		cookieNameCount: Object.keys(signals.cookies).length,
		localStorageKeyCount: Object.keys(signals.storage.localStorage).length,
		sessionStorageKeyCount: Object.keys(signals.storage.sessionStorage).length,
		collectedAt: signals.collectedAt,
	};
}

function summarizeSession(session: ObservationSessionState) {
	return {
		sessionId: session.sessionId,
		status: session.status,
		startedAt: session.startedAt,
		expiresAt: session.expiresAt,
		pendingMutationCount: session.pendingMutationCount,
		stopReason: session.stopReason,
	};
}

function createContentApiClient(tabId: number, frameId = 0): ContentApi {
  const [, injectContentApi] = defineProxy(() => ({}) as ContentApi, {
    namespace: CONTENT_RPC_NAMESPACE,
    heartbeatCheck: false,
    transfer: false,
  });

  return injectContentApi(createContentClientAdapter(tabId, frameId));
}

async function getInspectableActiveTab(): Promise<AppResult<InspectableTab>> {
  const tab = await getActiveTab();

  if (typeof tab?.id !== 'number' || !tab.url) {
		logBackgroundEvent('active-tab-missing');
    return errorResponse('NO_ACTIVE_TAB', 'No active tab found');
  }

  if (!canInspectTab(tab)) {
		logBackgroundEvent('active-tab-unsupported', {
			tabId: tab.id,
			url: tab.url,
		});
    return errorResponse(
      'UNSUPPORTED_URL',
      'Detection only works on normal http/https pages. Reload a website tab and try again.',
    );
  }

  return ok({ id: tab.id, url: tab.url });
}

async function pingContentScript(tabId: number): Promise<boolean> {
	const contentApi = createContentApiClient(tabId, 0);

	try {
		const response = await withTimeout(
			contentApi.getObservationSessionState(),
			CONTENT_SCRIPT_PING_TIMEOUT_MS,
			'Content script ping timed out.',
		);

		return response.ok;
	} catch {
		return false;
	}
}

async function injectContentScript(tabId: number): Promise<AppResult<void>> {
	try {
		await browser.scripting.executeScript({
			target: { tabId, frameIds: [0] },
			files: [CONTENT_SCRIPT_FILE],
		});

		return ok(undefined);
	} catch (error) {
		return contentScriptFailure(error);
	}
}

async function ensureContentScript(tabId: number): Promise<AppResult<void>> {
	if (await pingContentScript(tabId)) {
		logBackgroundEvent('content-runtime-ready', { tabId });
		return ok(undefined);
	}

	const existingInjection = contentScriptInjectionByTab.get(tabId);
	if (existingInjection) {
		logBackgroundEvent('content-runtime-await-existing-injection', { tabId });
		return existingInjection;
	}

	const injection = (async () => {
		logBackgroundEvent('content-runtime-inject-start', { tabId });
		const injectionResponse = await injectContentScript(tabId);
		if (!injectionResponse.ok) {
			logBackgroundEvent('content-runtime-inject-failed', {
				tabId,
				code: injectionResponse.error.code,
				message: injectionResponse.error.message,
			});
			return injectionResponse;
		}

		if (await pingContentScript(tabId)) {
			logBackgroundEvent('content-runtime-inject-ready', { tabId });
			return ok(undefined);
		}

		logBackgroundEvent('content-runtime-inject-timeout', { tabId });
		return errorResponse(
			'CONTENT_SCRIPT_UNAVAILABLE',
			'Injected content script did not register before the messaging timeout.',
		);
	})();

	contentScriptInjectionByTab.set(tabId, injection);

	try {
		return await injection;
	} finally {
		contentScriptInjectionByTab.delete(tabId);
	}
}

/**
 * Ask the content script for bounded PageSignals and reject stale responses from
 * a different origin. Navigation can happen while the service worker is active.
 */
async function collectFromTab(
	tabId: number,
	expectedUrl: string,
	registry: TechnologyDefinition[],
): Promise<AppResult<PageSignals>> {
	logBackgroundEvent('collect-start', {
		tabId,
		hostname: new URL(expectedUrl).hostname,
	});

	const contentScriptResponse = await ensureContentScript(tabId);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	const contentApi = createContentApiClient(tabId, 0);

	try {
		const collectionPlan = buildCollectionPlan(registry);
		const response = await withTimeout(
			contentApi.collectPageSignals(toCollectPageSignalsInput(collectionPlan)),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (!response.ok) {
			return response;
		}

		if (!isSameDocumentUrl(response.value.url, expectedUrl)) {
			logBackgroundEvent('collect-document-mismatch', {
				tabId,
				expectedUrl,
				actualUrl: response.value.url,
			});
			return errorResponse(
				'VALIDATION_ERROR',
				`Collected page signals do not match the active tab URL. Expected ${expectedUrl}, got ${response.value.url}.`,
			);
		}

		const enrichedSignals = await enrichBackgroundSignals(tabId, response.value, collectionPlan);
		const validationError = validatePageSignals(enrichedSignals);
		if (validationError) {
			logBackgroundEvent('collect-validation-failed', {
				tabId,
				hostname: enrichedSignals.hostname,
				error: validationError,
			});
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
		}

		logBackgroundEvent('collect-success', {
			tabId,
			...summarizeSignals(enrichedSignals),
		});

		return ok(enrichedSignals);
	} catch (error) {
		logBackgroundEvent('collect-failed', {
			tabId,
			hostname: new URL(expectedUrl).hostname,
			message: error instanceof Error ? error.message : 'Unknown content collection failure',
		});
		return contentScriptFailure(error);
	}
}

async function enrichBackgroundSignals(
	tabId: number,
	signals: PageSignals,
	collectionPlan: CollectionPlan,
): Promise<PageSignals> {
	const pageOrigin = getOrigin(signals.url);
	const [jsGlobals, headers, fetchedSourceContents] = await Promise.all([
		collectInjectedJsGlobals(tabId, collectionPlan.jsGlobalPropertyList),
		collectResponseHeaders(signals.url),
		collectSameOriginSourceContents(signals, pageOrigin),
	]);

	return {
		...signals,
		headers: {
			...signals.headers,
			...headers,
		},
		scriptContents: limitStringsByTotalChars(
			[...signals.scriptContents, ...fetchedSourceContents.scriptContents],
			SOURCE_LIMITS.scriptContentItems,
			SOURCE_LIMITS.scriptContentTotalChars,
		),
		stylesheetContents: limitStringsByTotalChars(
			[...signals.stylesheetContents, ...fetchedSourceContents.stylesheetContents],
			SOURCE_LIMITS.stylesheetContentItems,
			SOURCE_LIMITS.stylesheetContentTotalChars,
		),
		jsGlobals,
	};
}

async function collectInjectedJsGlobals(
	tabId: number,
	propertyPaths: readonly string[],
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
		logBackgroundEvent('collect-js-globals-failed', {
			tabId,
			message: error instanceof Error ? error.message : 'Unknown JavaScript global collection failure',
		});
		return {};
	}
}

type SourceContentSignals = Pick<PageSignals, 'scriptContents' | 'stylesheetContents'>;

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
				// Stop the stream early
				await reader.cancel();
				break;
			}
		}

		return text.slice(0, maxChars);
	} catch {
		return '';
	} finally {
		// Ensure the reader is released even if cancel() was already called
		if (reader) {
			try {
				// If the stream is still active, cancel it
				await reader.cancel();
			} catch {
				// Ignore errors from double-cancel or closed streams
			}

			try {
				reader.releaseLock();
			} catch {
				// releaseLock() can throw if already released
			}

			reader = null;
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

function createAnalysisOutput(
	analysis: SiteAnalysis,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
	session?: ObservationSessionState,
): AnalyzeActiveTabOutput {
	return {
		analysis,
		cache: {
			status: cacheStatus,
			key: getAnalysisCacheKey(analysis.url),
			expiresAt: analysis.analyzedAt + STORAGE_LIMITS.analysisTtlMs,
		},
		session,
	};
}

async function getObservationSessionStateForTab(
	tabId: number,
): Promise<AppResult<ObservationSessionState>> {
	const contentApi = createContentApiClient(tabId, 0);

	try {
		return await withTimeout(
			contentApi.getObservationSessionState(),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);
	} catch (error) {
		return contentScriptFailure(error);
	}
}

async function beginObservationSessionForTab(
	tabId: number,
	expectedUrl: string,
): Promise<AppResult<ObservationSessionState>> {
	logBackgroundEvent('observation-start-requested', {
		tabId,
		hostname: new URL(expectedUrl).hostname,
		policy: OBSERVATION_POLICY,
	});

	const contentScriptResponse = await ensureContentScript(tabId);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	const contentApi = createContentApiClient(tabId, 0);

	try {
		const response = await withTimeout(
			contentApi.beginObservationSession({
				sessionId: crypto.randomUUID(),
				expectedUrl,
				policy: OBSERVATION_POLICY,
			}),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (response.ok) {
			logBackgroundEvent('observation-started', {
				tabId,
				...summarizeSession(response.value),
			});
		}

		return response;
	} catch (error) {
		return contentScriptFailure(error);
	}
}

async function stopObservationSessionForTab(
	tabId: number,
): Promise<AppResult<ObservationSessionState>> {
	logBackgroundEvent('observation-stop-requested', { tabId });
	const contentApi = createContentApiClient(tabId, 0);

	try {
		const response = await withTimeout(
			contentApi.stopObservationSession(),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (response.ok) {
			logBackgroundEvent('observation-stopped', {
				tabId,
				...summarizeSession(response.value),
			});
		}

		return response;
	} catch (error) {
		return contentScriptFailure(error);
	}
}

async function analyzeFreshActiveTab(
	tab: InspectableTab,
	input: AnalyzeActiveTabInput,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	logBackgroundEvent('analysis-fresh-start', {
		...summarizeTab(tab),
		mode: input.mode,
		observe: input.observe,
		cacheStatus,
	});

	const registry = bundledTechnologyRegistryProvider.listTechnologies();
	const signalsResponse = await collectFromTab(tab.id, tab.url, registry);
	if (!signalsResponse.ok) {
		return signalsResponse;
	}

	const analysis = analyzeSite(signalsResponse.value, registry);
	const savedAnalysis = await saveAnalysis(analysis);
	logAnalysisSummary(savedAnalysis);

	let session: ObservationSessionState | undefined;
	if (input.observe !== 'none') {
		const sessionResponse = await beginObservationSessionForTab(tab.id, tab.url);
		if (sessionResponse.ok) {
			session = sessionResponse.value;
		} else {
			console.warn('[red-detector] observation session unavailable', {
				code: sessionResponse.error.code,
				message: sessionResponse.error.message,
			});
		}
	}

	logBackgroundEvent('analysis-fresh-complete', {
		...summarizeTab(tab),
		cacheStatus,
		resultCount: savedAnalysis.results.length,
		sessionStatus: session?.status ?? 'none',
	});

	return ok(createAnalysisOutput(savedAnalysis, cacheStatus, session));
}

/** Debug output is intentionally summary-only; never log raw page signals. */
function logAnalysisSummary(analysis: SiteAnalysis) {
	console.log('[red-detector] analysis summary', {
		hostname: analysis.hostname,
		resultCount: analysis.results.length,
		technologyIds: analysis.results.map((result) => result.technologyId),
		analyzedAt: analysis.analyzedAt,
	});
}

export function createBackgroundApi(): BackgroundApi {
	return {
		async getAnalysisStatus() {
			return ok(await getStatus());
		},

		async analyzeActiveTab(
			input,
		): Promise<AppResult<AnalyzeActiveTabOutput>> {
			try {
				const tabResponse = await getInspectableActiveTab();
				if (!tabResponse.ok) {
					return tabResponse;
				}

				const tab = tabResponse.value;
				logBackgroundEvent('analysis-requested', {
					...summarizeTab(tab),
					mode: input.mode,
					observe: input.observe,
				});
				if (input.mode === 'cache-first') {
					const cached = await getCachedAnalysis(tab.url);
					if (cached) {
						logBackgroundEvent('analysis-cache-hit', {
							...summarizeTab(tab),
							resultCount: cached.results.length,
							analyzedAt: cached.analyzedAt,
						});
						return ok(createAnalysisOutput(cached, 'hit'));
					}

					logBackgroundEvent('analysis-cache-miss', summarizeTab(tab));
				}

				return analyzeFreshActiveTab(
					tab,
					input,
					input.mode === 'refresh' ? 'bypassed' : 'miss',
				);
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message =
					error instanceof Error ? error.message : 'Unexpected runtime error';
				return errorResponse('UNKNOWN', message, stack);
			}
		},

		async refreshActiveObservationSession() {
			try {
				const tabResponse = await getInspectableActiveTab();
				if (!tabResponse.ok) {
					return tabResponse;
				}

				const tab = tabResponse.value;
				logBackgroundEvent('observation-refresh-requested', summarizeTab(tab));
				const sessionResponse = await getObservationSessionStateForTab(tab.id);
				if (!sessionResponse.ok) {
					return sessionResponse;
				}

				logBackgroundEvent('observation-refresh-session-state', {
					...summarizeTab(tab),
					...summarizeSession(sessionResponse.value),
				});

				if (
					sessionResponse.value.status !== 'observing' &&
					sessionResponse.value.status !== 'dirty'
				) {
					logBackgroundEvent('observation-refresh-unavailable', summarizeTab(tab));
					return errorResponse(
						'OBSERVATION_SESSION_UNAVAILABLE',
						'No active observation session exists for the current tab.',
					);
				}

				return analyzeFreshActiveTab(tab, {
					mode: 'refresh',
					observe: 'while-popup-open',
				}, 'bypassed');
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message =
					error instanceof Error ? error.message : 'Unexpected runtime error';
				return errorResponse('UNKNOWN', message, stack);
			}
    },

		async stopActiveObservationSession() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			logBackgroundEvent('observation-stop-api', summarizeTab(tabResponse.value));
			return stopObservationSessionForTab(tabResponse.value.id);
    },

		async getActiveObservationSessionState() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			return getObservationSessionStateForTab(tabResponse.value.id);
    },
	};
}

const [provideBackgroundApi] = defineProxy(() => createBackgroundApi(), {
	namespace: BACKGROUND_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

export default defineBackground(() => {
	provideBackgroundApi(createBackgroundServerAdapter());
});
