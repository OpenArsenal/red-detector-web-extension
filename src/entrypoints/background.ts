import { defineProxy } from 'comctx';
import { browser } from 'wxt/browser';

import { canInspectTab, getActiveTab } from '../lib/browser/active-tab';
import {
	collectExtensionObservationBatch,
	collectExtensionPageSignals,
} from '../lib/collectors/extension-page-collector';
import { bundledTechnologyRegistryProvider } from '../lib/detection/registry-provider';
import {
	createDetectionReplayTrace,
	runDetectionPipeline,
	runObservationBatchPipeline,
} from '../lib/pipeline';

import type { ObservationSessionState } from '../lib/content/observed-page-signals';
import type { PageSignals, SiteAnalysis, TechnologyDefinition } from '../lib/detection/types';

import type {
	AnalyzeActiveTabInput,
	AnalyzeActiveTabOutput,
	BackgroundApi,
	ContentApi,
	FlushObservationBatchOutput,
} from '../lib/messaging';
import type { ObservationBatch } from '../lib/observations';
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
import {
	EXTENSION_OBSERVATION_POLICY,
	getObservationRefreshBlockReason,
	shouldStartObservationForAnalysis,
} from '../lib/lifecycle/observation';
import { errorResponse, ok, type AppResult } from '../lib/shared/result';
import { STORAGE_LIMITS, getAnalysisCacheKey } from '../lib/storage/contracts';
import {
	getCachedAnalysis,
	getCachedReplayTrace,
	getStatus,
	saveAnalysis,
	saveReplayTrace,
} from '../lib/storage';

type InspectableTab = {
	id: number;
	url: string;
};

const CONTENT_SCRIPT_FILE = '/content-scripts/content.js';
const CONTENT_SCRIPT_PING_TIMEOUT_MS = 750;
const BACKGROUND_LOG_PREFIX = '[red-detector][background]';

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
 * Ask the extension collector for the active tab's PageSignals. Content-script
 * readiness still belongs to the background lifecycle path; raw acquisition now
 * lives behind the collector boundary.
 */
async function collectFromTab(
	tabId: number,
	expectedUrl: string,
	registry: readonly TechnologyDefinition[],
): Promise<AppResult<PageSignals>> {
	const contentScriptResponse = await ensureContentScript(tabId);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	return collectExtensionPageSignals({
		tabId,
		expectedUrl,
		registry,
		contentApi: createContentApiClient(tabId, 0),
		log: logBackgroundEvent,
	});
}

/**
 * Ask the extension collector for normalized observations from the active tab.
 *
 * This path is used only by event-mode fresh analysis. The legacy path continues
 * to request `PageSignals` so cache parity and old analyzer fallback remain
 * reviewable while the extension runtime finishes its event cutover.
 */
async function collectObservationBatchFromTab(
	tabId: number,
	expectedUrl: string,
	registry: readonly TechnologyDefinition[],
): Promise<AppResult<ObservationBatch>> {
	const contentScriptResponse = await ensureContentScript(tabId);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	return collectExtensionObservationBatch({
		tabId,
		expectedUrl,
		registry,
		contentApi: createContentApiClient(tabId, 0),
		log: logBackgroundEvent,
	});
}

/**
 * Create the background response returned to the popup after analysis.
 *
 * The replay trace stays optional because older cache entries may not have a
 * paired trace. Fresh and cached responses attach it when storage has one.
 */
function createAnalysisOutput(
	analysis: SiteAnalysis,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
	session?: ObservationSessionState,
	replayTrace?: AnalyzeActiveTabOutput['replayTrace'],
): AnalyzeActiveTabOutput {
	return {
		analysis,
		cache: {
			status: cacheStatus,
			key: getAnalysisCacheKey(analysis.url),
			expiresAt: analysis.analyzedAt + STORAGE_LIMITS.analysisTtlMs,
		},
		session,
		...(replayTrace ? { replayTrace } : {}),
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

async function flushObservationBatchForTab(
	tabId: number,
): Promise<AppResult<FlushObservationBatchOutput>> {
	const contentApi = createContentApiClient(tabId, 0);

	try {
		return await withTimeout(
			contentApi.flushObservationBatch(),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);
	} catch (error) {
		return contentScriptFailure(error);
	}
}

async function analyzeObservationBatchRefresh(
	tab: InspectableTab,
	flush: FlushObservationBatchOutput,
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	if (!flush.batch || flush.batch.observations.length === 0) {
		const cached = await getCachedAnalysis(tab.url);
		const replayTrace = await getCachedReplayTrace(tab.url);
		if (cached) return ok(createAnalysisOutput(cached, 'hit', flush.session, replayTrace ?? undefined));

		return analyzeFreshActiveTab(tab, {
			mode: 'refresh',
			observe: 'while-popup-open',
			pipeline: 'event',
		}, 'bypassed');
	}

	const compiledRegistryArtifact = bundledTechnologyRegistryProvider.getCompiledRegistry();
	const batchResult = runObservationBatchPipeline({
		batch: flush.batch,
		registry: compiledRegistryArtifact.technologies,
		compiledRegistryArtifact,
		source: 'fresh',
	});
	const cached = await getCachedAnalysis(tab.url);
	const analysis = mergeIncrementalAnalysis(cached, batchResult.analysis);
	const replayTrace = createDetectionReplayTrace({
		result: Object.assign({}, batchResult, { analysis }),
	});
	const savedAnalysis = await saveAnalysis(analysis);
	const savedReplayTrace = await saveReplayTrace(replayTrace);

	logBackgroundEvent('observation-batch-refresh-complete', {
		...summarizeTab(tab),
		observationCount: flush.batch.observations.length,
		queuedCount: flush.stats.queuedCount,
		resultCount: savedAnalysis.results.length,
	});

	return ok(createAnalysisOutput(savedAnalysis, 'bypassed', flush.session, savedReplayTrace));
}

/**
 * Merge late batch detections without treating missing late evidence as removal.
 *
 * A late observation batch is append-oriented. It can prove that a new script,
 * link, resource, or meta tag appeared, but it cannot prove that previously
 * collected evidence disappeared. Existing detections therefore survive unless
 * the batch emits the same technology with equal or stronger confidence.
 */
function mergeIncrementalAnalysis(base: SiteAnalysis | null, incremental: SiteAnalysis): SiteAnalysis {
	if (!base || base.url !== incremental.url || base.hostname !== incremental.hostname) return incremental;

	const results = [...base.results];
	const resultIndexById = new Map(results.map((result, index) => [result.technologyId, index]));
	for (const result of incremental.results) {
		const existingIndex = resultIndexById.get(result.technologyId);
		if (existingIndex === undefined) {
			resultIndexById.set(result.technologyId, results.length);
			results.push(result);
			continue;
		}

		if (result.confidence.value >= results[existingIndex]!.confidence.value) results[existingIndex] = result;
	}

	return Object.assign({}, incremental, {
		results,
		errors: [...base.errors, ...incremental.errors],
	});
}

async function beginObservationSessionForTab(
	tabId: number,
	expectedUrl: string,
): Promise<AppResult<ObservationSessionState>> {
	logBackgroundEvent('observation-start-requested', {
		tabId,
		hostname: new URL(expectedUrl).hostname,
		policy: EXTENSION_OBSERVATION_POLICY,
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
				policy: EXTENSION_OBSERVATION_POLICY,
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
		pipeline: input.pipeline ?? 'legacy',
	});

	const compiledRegistryArtifact = bundledTechnologyRegistryProvider.getCompiledRegistry();
	const requestedPipeline = input.pipeline ?? 'legacy';
	const pipelineResult = requestedPipeline === 'event'
		? (() => {
			return collectObservationBatchFromTab(tab.id, tab.url, compiledRegistryArtifact.technologies)
				.then((batchResponse) => {
					if (!batchResponse.ok) return batchResponse;

					return ok(runObservationBatchPipeline({
						batch: batchResponse.value,
						registry: compiledRegistryArtifact.technologies,
						compiledRegistryArtifact,
						source: 'fresh',
					}));
				});
		})()
		: runLegacyOrSnapshotEventPipeline(tab, compiledRegistryArtifact, requestedPipeline);
	const resolvedPipelineResult = await pipelineResult;
	if (!resolvedPipelineResult.ok) {
		return resolvedPipelineResult;
	}
	const replayTrace = createDetectionReplayTrace({ result: resolvedPipelineResult.value });
	const savedAnalysis = await saveAnalysis(resolvedPipelineResult.value.analysis);
	const savedReplayTrace = await saveReplayTrace(replayTrace);
	logAnalysisSummary(savedAnalysis);
	logBackgroundEvent('analysis-pipeline-complete', {
		...summarizeTab(tab),
		requestedMode: resolvedPipelineResult.value.requestedMode,
		completedMode: resolvedPipelineResult.value.completedMode,
		eventCount: resolvedPipelineResult.value.events.length,
		fallbackReason: resolvedPipelineResult.value.fallback?.reason ?? 'none',
	});

	let session: ObservationSessionState | undefined;
	if (shouldStartObservationForAnalysis(input)) {
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

	return ok(createAnalysisOutput(savedAnalysis, cacheStatus, session, savedReplayTrace));
}

/** Run the compatibility snapshot collector for legacy mode and fallback checks. */
async function runLegacyOrSnapshotEventPipeline(
	tab: InspectableTab,
	compiledRegistryArtifact: ReturnType<typeof bundledTechnologyRegistryProvider.getCompiledRegistry>,
	requestedPipeline: AnalyzeActiveTabInput['pipeline'] | 'legacy',
) {
	const signalsResponse = await collectFromTab(tab.id, tab.url, compiledRegistryArtifact.technologies);
	if (!signalsResponse.ok) {
		return signalsResponse;
	}

	return ok(runDetectionPipeline({
		signals: signalsResponse.value,
		registry: compiledRegistryArtifact.technologies,
		compiledRegistryArtifact,
		mode: requestedPipeline,
	}));
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
					pipeline: input.pipeline ?? 'legacy',
				});
				if (input.mode === 'cache-first') {
					const cached = await getCachedAnalysis(tab.url);
					if (cached) {
						const replayTrace = await getCachedReplayTrace(tab.url);
						logBackgroundEvent('analysis-cache-hit', {
							...summarizeTab(tab),
							resultCount: cached.results.length,
							analyzedAt: cached.analyzedAt,
						});
						return ok(createAnalysisOutput(cached, 'hit', undefined, replayTrace ?? undefined));
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

				const blockReason = getObservationRefreshBlockReason(sessionResponse.value, tab.url);
				if (blockReason) {
					logBackgroundEvent('observation-refresh-unavailable', {
						...summarizeTab(tab),
						reason: blockReason,
						sessionExpectedUrl: sessionResponse.value.expectedUrl,
					});
					return errorResponse(
						'OBSERVATION_SESSION_UNAVAILABLE',
						blockReason === 'navigation'
							? 'The active tab navigated away from the observed document.'
							: 'No active observation session exists for the current tab.',
					);
				}

				const batchResponse = await flushObservationBatchForTab(tab.id);
				return batchResponse.ok ? analyzeObservationBatchRefresh(tab, batchResponse.value) : batchResponse;
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
