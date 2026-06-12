import { defineProxy } from 'comctx';
import { browser } from 'wxt/browser';

import { technologies } from '../data/technologies';
import { getActiveTab, canInspectTab } from '../lib/browser/active-tab';
import { analyzeSite } from '../lib/detection/engine';

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
	HtmlProbe,
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
import { ANALYSIS_CACHE_PREFIX, STORAGE_LIMITS } from '../lib/storage/contracts';
import { getCachedAnalysis, getStatus, saveAnalysis } from '../lib/storage';

type InspectableTab = {
  id: number;
  url: string;
};

const CONTENT_SCRIPT_FILE = '/content-scripts/content.js';
const CONTENT_SCRIPT_PING_TIMEOUT_MS = 750;
const BACKGROUND_LOG_PREFIX = '[red-detector][background]';
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
		metaKeyCount: Object.keys(signals.meta).length,
		domSelectorCount: Object.keys(signals.dom.selectors).length,
		jsGlobalCount: Object.keys(signals.jsGlobals).length,
		htmlMatchCount: Object.keys(signals.htmlMatches ?? {}).length,
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
		const response = await withTimeout(
			contentApi.collectPageSignals({
				includeHtml: true,
				selectorProbeList: buildSelectorProbeList(technologies),
				jsGlobalProbeList: buildJsGlobalProbeList(technologies),
				htmlProbeList: buildHtmlProbeList(technologies),
			}),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (!response.ok) {
			return response;
		}

		const validationError = validatePageSignals(response.value);
		if (validationError) {
			logBackgroundEvent('collect-validation-failed', {
				tabId,
				hostname: response.value.hostname,
				error: validationError,
			});
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
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

		logBackgroundEvent('collect-success', {
			tabId,
			...summarizeSignals(response.value),
		});

		return response;
  } catch (error) {
    logBackgroundEvent('collect-failed', {
      tabId,
      hostname: new URL(expectedUrl).hostname,
      message: error instanceof Error ? error.message : 'Unknown content collection failure',
    });
    return contentScriptFailure(error);
  }
}

function getAnalysisCacheKey(url: string): string {
	return `${ANALYSIS_CACHE_PREFIX}${getOrigin(url)}`;
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

	const signalsResponse = await collectFromTab(tab.id, tab.url);
	if (!signalsResponse.ok) {
		return signalsResponse;
	}

	const analysis = analyzeSite(signalsResponse.value, technologies);
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

/** Build the exact DOM selector probes needed by the active bundled rules. */
function buildSelectorProbeList(registry: TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules
					.filter((rule) => rule.kind === 'dom' && rule.selector)
					.map((rule) => rule.selector!),
			),
		),
	);
}

/** Build optional isolated-world global probes needed by the active rules. */
function buildJsGlobalProbeList(registry: TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules
					.filter((rule) => rule.kind === 'jsGlobal' && rule.property)
					.map((rule) => rule.property!),
			),
		),
	);
}


/** Build serializable HTML regex probes from the active bundled rules. */
function buildHtmlProbeList(registry: TechnologyDefinition[]): HtmlProbe[] {
	return registry.flatMap((technology) =>
		technology.rules.flatMap((rule, ruleIndex) => {
			if (rule.kind !== 'html' || !rule.pattern) {
				return [];
			}

			return [
				{
					technologyId: technology.id,
					ruleIndex,
					source: rule.pattern.source,
					flags: rule.pattern.flags,
				},
			];
		}),
	);
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
