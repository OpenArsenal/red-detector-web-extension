import { defineProxy } from 'comctx';
import { browser } from 'wxt/browser';

import { registerBackgroundLifecycleListeners } from '../lib/background/lifecycle';
import { canInspectTab, getActiveTab } from '../lib/browser/active-tab';
import { collectExtensionObservationBatch } from '../lib/collectors/extension-page-collector';
import { bundledTechnologyRegistryProvider } from '../lib/detection/registry-provider';
import { DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION } from '../lib/contracts/detection-session';
import { configureRedDetectorLogging, getRedDetectorLogger } from '../lib/diagnostics/logging';
import {
	createDetectionReplayTrace,
} from '../lib/pipeline';
import type { DetectionPipelineStage, DetectionReplayTrace } from '../lib/pipeline';
import {
	createTimingTraceId,
	endTimingSpan,
	startTimingSpan,
	timeAsyncSpan,
	timeSyncSpan,
	type TimingContext,
} from '../lib/diagnostics/timing';

import type { ObservationSessionState } from '../lib/content/observed-page-signals';
import type { ContentPageSessionSnapshotTarget } from '../lib/contracts/analysis';
import type {
	DetectionEnrichmentState,
	DetectionReplaySummary,
	DetectionSessionKey,
	DetectionSessionSnapshot,
	DetectionSessionSnapshotSource,
	DetectionSessionStatus,
} from '../lib/contracts/detection-session';
import type { SiteAnalysis } from '../lib/detection/types';
import type {
	ActiveTabIdentity,
	AnalysisEnrichmentState,
	AnalyzeActiveTabInput,
	AnalyzeActiveTabOutput,
	BackgroundApi,
	ContentApi,
	FlushObservationBatchOutput,
	ObservationSessionTarget,
} from '../lib/messaging';
import type { NormalizedObservation, ObservationBatch } from '../lib/observations';
import {
	CONTENT_SCRIPT_TIMEOUT_MS,
	RpcTimeoutError,
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
	DETECTION_STREAM_FRAME_DELAY_MS,
	createDetectionStreamFrameOutput,
	createDetectionStreamFrameSizes,
} from '../lib/lifecycle/detection-stream';
import {
	runMatcherJobWithOffscreenFallback,
} from '../lib/lifecycle/offscreen-matcher';
import {
	EXTENSION_OBSERVATION_POLICY,
	getObservationRefreshBlockReason,
	shouldStartObservationForAnalysis,
} from '../lib/lifecycle/observation';
import { errorResponse, ok, type AppResult } from '../lib/shared/result';
import {
	MATCHER_OFFSCREEN_CHANNEL,
	hasDeferredMatcherPartitions,
	type MatcherJobMode,
	type MatcherJobRecord,
	type MatcherPartitionProgressMessage,
} from '../lib/matcher';
import { getOrigin, isSameDocumentUrl } from '../lib/shared/url';
import {
	STORAGE_LIMITS,
	createDetectionStorageHash,
	getAnalysisCacheKey,
} from '../lib/storage/contracts';
import {
	getCachedAnalysis,
	getCachedReplayTrace,
	getCachedReplayTraceHistory,
	getLatestDetectionSessionSnapshot,
	getStatus,
	saveAnalysis,
	saveDetectionSessionSnapshot,
	saveMatcherJobRecord,
	saveReplayTrace,
	updateMatcherJobRecord,
} from '../lib/storage';

/** Active tab shape after unsupported URLs and missing ids have been rejected. */
type InspectableTab = {
	/** Browser tab id used for content-script RPC and MAIN-world injection. */
	id: number;
	/** Active document URL observed by the background before collection starts. */
	url: string;
	/** Whether analysis and replay results must avoid persistent storage. */
	incognito: boolean;
};

/** Compiled registry artifact reused across collection planning and matching. */
type CompiledRegistry = Awaited<ReturnType<typeof bundledTechnologyRegistryProvider.getCompiledRegistry>>;

configureRedDetectorLogging('background');

const backgroundLogger = getRedDetectorLogger('background');
const CONTENT_SCRIPT_FILE = '/content-scripts/content.js';
const CONTENT_SCRIPT_PING_TIMEOUT_MS = 750;

/** Background enrichment is a follow-up pass and must not leave the popup pending forever. */
const ENRICHMENT_TIMEOUT_MS = 10_000;

/**
 * In-flight runtime injections are deduplicated per tab.
 *
 * Popup refreshes and live-update requests can ask for the content runtime at nearly the same
 * time. The first request owns the injection; later requests await the same
 * promise instead of injecting duplicate runtime scripts into the page.
 */
const contentScriptInjectionByTab = new Map<number, Promise<AppResult<void>>>();

/**
 * Event observations collected during the current active popup session.
 *
 * Dirty refreshes use this in-memory batch as the baseline and append late
 * observer facts before rerunning graph refinement. If the Manifest V3 service
 * worker is suspended and this memory disappears, the refresh path recollects
 * the current document instead of merging final detections.
 */
const eventObservationBatchByTab = new Map<number, ObservationBatch>();

/**
 * Completed deferred enrichment runs keyed by observation session id.
 *
 * The content script owns DOM mutation state, but deeper background enrichment
 * completes outside that observer. Marking the session dirty lets the popup use
 * the existing refresh API and receive the saved enriched result without adding a
 * new push channel.
 */
const completedEnrichmentBySession = new Map<string, { readonly tabId: number; readonly completedAt: number }>();

/** Latest matcher job created for each tab while the background is alive. */
const latestMatcherJobByTab = new Map<number, string>();

/**
 * Drop volatile state that only makes sense while a tab can still answer RPC.
 *
 * Manifest V3 can restart the background at any time, so these maps are only
 * performance and lifecycle conveniences. Removing them when a tab closes keeps
 * stale observation batches or completed enrichment markers from being reused by
 * a later tab that receives the same browser id.
 */
function forgetTabRuntimeState(tabId: number): void {
	contentScriptInjectionByTab.delete(tabId);
	eventObservationBatchByTab.delete(tabId);
	latestMatcherJobByTab.delete(tabId);

	for (const [sessionId, completed] of completedEnrichmentBySession) {
		if (completed.tabId === tabId) {
			completedEnrichmentBySession.delete(sessionId);
		}
	}
}

function logBackgroundEvent(event: string, details?: Record<string, unknown>): void {
	backgroundLogger.debug('[red-detector][background] {event}', {
		event,
		...(details ?? {}),
	});
}

function summarizeTab(tab: InspectableTab): Record<string, unknown> {
	return {
		tabId: tab.id,
		hostname: new URL(tab.url).hostname,
	};
}

function createActiveTabIdentity(tab: InspectableTab): ActiveTabIdentity {
	const url = new URL(tab.url);
	const origin = getOrigin(tab.url);

	return {
		tabId: tab.id,
		frameId: 0,
		url: tab.url,
		hostname: url.hostname,
		originHash: createDetectionStorageHash(origin),
		urlHash: createDetectionStorageHash(tab.url),
		incognito: tab.incognito,
	};
}

function summarizeSession(session: ObservationSessionState): Record<string, unknown> {
	return {
		sessionId,
		status: session.status,
		startedAt: session.startedAt,
		expiresAt: session.expiresAt,
		pendingMutationCount: session.pendingMutationCount,
		stopReason: session.stopReason,
	};
}

function summarizeCompiledRegistryArtifact(artifact: CompiledRegistry): Record<string, unknown> {
	const ruleCount = Object.values(artifact.patternTables).reduce((total, count) => total + count, 0);
	return {
		technologyCount: artifact.technologies.length,
		ruleCount,
		diagnosticCount: artifact.diagnostics.length,
		initialSelectorProbeCount: artifact.collectionPlan.initial.selectorProbeList.length,
		initialJsGlobalProbeCount: artifact.collectionPlan.initial.jsGlobalPropertyList.length,
		enrichmentHtmlProbeCount: artifact.collectionPlan.enrichment.htmlProbeList.length,
	};
}

function waitForDetectionStreamFrame(): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(resolve, DETECTION_STREAM_FRAME_DELAY_MS);
	});
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

	return ok({ id: tab.id, url: tab.url, incognito: tab.incognito === true });
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
 * Ask the extension collector for normalized observations from the active tab.
 *
 * Fresh analysis no longer exposes the old page-snapshot detector path to the
 * background. The content script collects document facts, background enrichment
 * appends privileged facts, and the event pipeline consumes the enriched batch.
 */
async function collectObservationBatchFromTab(
	tabId: number,
	expectedUrl: string,
	compiledRegistryArtifact: CompiledRegistry,
	tier: 'initial' | 'enrichment' = 'initial',
	timingTraceId?: string,
): Promise<AppResult<ObservationBatch>> {
	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			tabId,
			hostname: new URL(expectedUrl).hostname,
			tier,
		},
	};
	const contentScriptResponse = await timeAsyncSpan(
		'background.content-runtime.ensure',
		timingContext,
		() => ensureContentScript(tabId),
		(response) => ({ ok: response.ok }),
	);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	return timeAsyncSpan(
		'background.collect-extension-observation-batch',
		timingContext,
		() => collectExtensionObservationBatch({
			tabId,
			expectedUrl,
			collectionPlan: compiledRegistryArtifact.collectionPlan,
			tier,
			contentApi: createContentApiClient(tabId, 0),
			log: logBackgroundEvent,
			timingTraceId,
		}),
		(response) => ({
			ok: response.ok,
			observationCount: response.ok ? response.value.observations.length : 0,
		}),
	);
}

/** Create the background response returned to the popup after analysis. */
function createAnalysisOutput(
	analysis: SiteAnalysis,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
	session?: ObservationSessionState,
	replayTrace?: AnalyzeActiveTabOutput['replayTrace'],
	replayHistory?: AnalyzeActiveTabOutput['replayHistory'],
	sessionTarget?: ObservationSessionTarget,
	enrichment?: AnalysisEnrichmentState,
): AnalyzeActiveTabOutput {
	return {
		analysis,
		cache: {
			status: cacheStatus,
			key: getAnalysisCacheKey(analysis.url),
			expiresAt: analysis.analyzedAt + STORAGE_LIMITS.analysisTtlMs,
		},
		session,
		...(sessionTarget ? { sessionTarget } : {}),
		...(replayTrace ? { replayTrace } : {}),
		...(replayHistory ? { replayHistory } : {}),
		...(enrichment ? { enrichment } : {}),
	};
}

function createObservationSessionTarget(
	tab: InspectableTab,
	session?: ObservationSessionState,
): ObservationSessionTarget | undefined {
	if (!session?.sessionId || !session.expectedUrl) {
		return undefined;
	}

	return {
		tabId: tab.id,
		sessionId,
		expectedUrl: tab.url,
		...(tab.incognito ? { incognito: true } : {}),
	};
}

/**
 * Build the content-side snapshot target from background-owned tab identity.
 *
 * The content script can observe the document, but only the background receives
 * the tab id from Chrome. Sharing the same key lets content publish revision 1
 * and background promote revision 2 for the exact same page session.
 */
function createContentPageSessionSnapshotTarget(
	tab: InspectableTab,
	sessionId: string,
): ContentPageSessionSnapshotTarget {
	return {
		key: {
			tabId: tab.id,
			frameId: 0,
			documentId: sessionId,
			originHash: createDetectionStorageHash(getOrigin(tab.url)),
		},
		url: tab.url,
		urlHash: createDetectionStorageHash(tab.url),
		hostname: new URL(tab.url).hostname,
		...(tab.incognito ? { incognito: true } : {}),
	};
}

/**
 * Persist the analysis response as the popup's storage update stream.
 *
 * The legacy analysis cache remains useful for compatibility, but snapshot
 * revisions are the durable channel that lets an open popup update without
 * a polling loop and lets a reopened popup recover state after background shutdown.
 */
async function saveDetectionSnapshotForPopup(
	tab: InspectableTab,
	output: AnalyzeActiveTabOutput,
	source: DetectionSessionSnapshotSource,
): Promise<void> {
	if (tab.incognito) {
		return;
	}

	const key = createDetectionSessionKeyForOutput(tab, output);
	const existing = await getLatestDetectionSessionSnapshot(key);
	const replaySummary = output.replayTrace ? createReplaySummary(output.replayTrace) : undefined;
	const snapshot: DetectionSessionSnapshot = {
		key,
		schemaVersion: DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION,
		revision: (existing?.revision ?? 0) + 1,
		urlHash: createDetectionStorageHash(output.analysis.url),
		hostname: output.analysis.hostname,
		status: getDetectionSnapshotStatus(output),
		source,
		updatedAt: Date.now(),
		detectionCount: output.analysis.results.length,
		analysis: output.analysis,
		enrichment: toDetectionEnrichmentState(output.enrichment),
		...(replaySummary ? { replaySummary } : {}),
	};

	await saveDetectionSessionSnapshot(snapshot);
}

async function saveDetectionSnapshotStreamForPopup(
	tab: InspectableTab,
	output: AnalyzeActiveTabOutput,
	source: DetectionSessionSnapshotSource,
): Promise<void> {
	const frameSizes = createDetectionStreamFrameSizes(output.analysis.results.length);
	if (frameSizes.length === 0) {
		await saveDetectionSnapshotForPopup(tab, output, source);
		return;
	}

	for (const size of frameSizes) {
		await saveDetectionSnapshotForPopup(tab, createDetectionStreamFrameOutput(output, size), source);
		await waitForDetectionStreamFrame();
	}

	await saveDetectionSnapshotForPopup(tab, output, source);
}

/**
 * Resolve the page-session key available from a background response.
 *
 * Observation sessions provide the strongest document identity. Cached responses
 * can lack a session, so the URL hash becomes a stable fallback until content
 * owns browser document ids in the later page-session runtime.
 */
function createDetectionSessionKeyForOutput(tab: InspectableTab, output: AnalyzeActiveTabOutput): DetectionSessionKey {
	return {
		tabId: tab.id,
		frameId: 0,
		documentId: output.sessionTarget?.sessionId ?? output.session?.sessionId ?? createDetectionStorageHash(output.analysis.url),
		originHash: createDetectionStorageHash(getOrigin(output.analysis.url)),
	};
}

/** Derive the popup-visible lifecycle state from the analysis response. */
function getDetectionSnapshotStatus(output: AnalyzeActiveTabOutput): DetectionSessionStatus {
	if (output.enrichment?.status === 'pending') return 'enriching';
	if (output.session?.status === 'observing' || output.session?.status === 'dirty') return 'observing';
	if (output.session?.status === 'stopped') return 'stopped';
	if (output.cache.status === 'hit') return 'cached';
	return 'complete';
}

/** Store enrichment outcomes with terminal states instead of leaving the popup pending forever. */
function toDetectionEnrichmentState(enrichment?: AnalysisEnrichmentState): DetectionEnrichmentState {
	const updatedAt = Date.now();
	if (!enrichment) return { status: 'not-needed', updatedAt, reason: 'no-enrichment-response' };
	return {
		status: enrichment.status === 'skipped' ? 'skipped' : enrichment.status,
		updatedAt,
		...(enrichment.completedAt ? { completedAt: enrichment.completedAt } : {}),
		...(enrichment.reason ? { reason: enrichment.reason } : {}),
	};
}

/** Keep only public-safe replay progress inside the visible snapshot record. */
function createReplaySummary(trace: DetectionReplayTrace): DetectionReplaySummary {
	const stages: DetectionPipelineStage[] = [];
	for (const event of trace.events) {
		if (!stages.includes(event.stage)) stages.push(event.stage);
	}
	return {
		analyzedAt: trace.analyzedAt,
		eventCount: trace.events.length,
		explanationCount: trace.explanations.length,
		resultCount: trace.resultCount,
		stages,
	};
}

function validateObservationSessionTarget(
	actual: ObservationSessionState,
	expected: ObservationSessionTarget,
): AppResult<void> {
	if (actual.sessionId !== expected.sessionId) {
		return errorResponse(
			'OBSERVATION_SESSION_UNAVAILABLE',
			'The requested observation session is no longer active in the target tab.',
		);
	}

	if (!actual.expectedUrl || !isSameDocumentUrl(actual.expectedUrl, expected.expectedUrl)) {
		return errorResponse(
			'OBSERVATION_SESSION_UNAVAILABLE',
			'The active tab navigated away from the observed document.',
		);
	}

	return ok(undefined);
}

function tabFromObservationSessionTarget(target: ObservationSessionTarget): InspectableTab {
	return {
		id: target.tabId,
		url: target.expectedUrl,
		incognito: target.incognito === true,
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
	enrichment?: AnalysisEnrichmentState,
	timingTraceId = createTimingTraceId(enrichment?.status === 'complete' ? 'refresh-enrichment' : 'refresh'),
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			...summarizeTab(tab),
			enrichmentStatus: enrichment?.status ?? 'none',
		},
	};
	const totalSpan = startTimingSpan('background.observation-refresh.total', timingContext);
	if (!flush.batch || flush.batch.observations.length === 0) {
		const cached = await timeAsyncSpan(
			'storage.get-cached-analysis',
			timingContext,
			() => getCachedAnalysis(tab.url),
			(value) => ({ cacheHit: Boolean(value) }),
		);
		const replayTrace = await timeAsyncSpan(
			'storage.get-cached-replay-trace',
			timingContext,
			() => getCachedReplayTrace(tab.url),
			(value) => ({ replayTraceHit: Boolean(value) }),
		);
		if (cached) {
			const replayHistory = await timeAsyncSpan(
				'storage.get-replay-history',
				timingContext,
				() => getCachedReplayTraceHistory(tab.url),
				(value) => ({ replayHistoryCount: value.length }),
			);
			endTimingSpan(totalSpan, { ok: true, cacheHit: true, lateObservationCount: 0 });
			return ok(createAnalysisOutput(
				cached,
				'hit',
				flush.session,
				replayTrace ?? undefined,
				replayHistory,
				createObservationSessionTarget(tab, flush.session),
				enrichment,
			));
		}

		const response = await analyzeFreshActiveTab(tab, { mode: 'refresh', observe: 'while-popup-open' }, 'bypassed');
		endTimingSpan(totalSpan, { ok: response.ok, cacheHit: false, fallback: 'fresh' });
		return response;
	}

	const lateBatch = flush.batch;
	const baseBatch = eventObservationBatchByTab.get(tab.id);
	const compiledRegistryArtifact = await timeAsyncSpan(
		'background.registry.get-bootstrap-compiled',
		timingContext,
		() => bundledTechnologyRegistryProvider.getCompiledBootstrapRegistry(),
		summarizeCompiledRegistryArtifact,
	);
	const batchResponse = baseBatch && isSameObservationTarget(baseBatch, lateBatch)
		? ok(timeSyncSpan(
			'background.observation-refresh.merge-late-batch',
			timingContext,
			() => mergeObservationBatches(baseBatch, lateBatch),
			(batch) => ({ observationCount: batch.observations.length }),
		))
		: await recoverObservationBatchForRefresh(tab, lateBatch, compiledRegistryArtifact, timingTraceId);
	if (!batchResponse.ok) {
		endTimingSpan(totalSpan, { ok: false, failedAt: 'recover-or-merge' });
		return batchResponse;
	}

	const response = await analyzeAndPersistObservationBatch(tab, batchResponse.value, compiledRegistryArtifact, 'bypassed', flush.session, {
		refreshKind: enrichment?.status === 'complete' ? 'enrichment' : baseBatch ? 'incremental' : 'recovered',
		queuedCount: flush.stats.queuedCount,
		lateObservationCount: lateBatch.observations.length,
	}, enrichment, timingTraceId);
	endTimingSpan(totalSpan, {
		ok: response.ok,
		resultCount: response.ok ? response.value.analysis.results.length : 0,
		lateObservationCount: lateBatch.observations.length,
	});
	return response;
}

async function recoverObservationBatchForRefresh(
	tab: InspectableTab,
	lateBatch: ObservationBatch,
	compiledRegistryArtifact: CompiledRegistry,
	timingTraceId?: string,
): Promise<AppResult<ObservationBatch>> {
	logBackgroundEvent('observation-refresh-recollect', {
		...summarizeTab(tab),
		lateObservationCount: lateBatch.observations.length,
	});

	const recoveredBatch = await collectObservationBatchFromTab(tab.id, tab.url, compiledRegistryArtifact, 'initial', timingTraceId);
	if (!recoveredBatch.ok) {
		return recoveredBatch;
	}

	return ok(mergeObservationBatches(recoveredBatch.value, lateBatch));
}

async function beginObservationSessionForTab(
	tabId: number,
	expectedUrl: string,
	incognito = false,
): Promise<AppResult<ObservationSessionState>> {
	const sessionId = crypto.randomUUID();
	const tab: InspectableTab = { id: tabId, url: expectedUrl, incognito };
	logBackgroundEvent('observation-start-requested', {
		tabId,
		hostname: new URL(expectedUrl).hostname,
		sessionId,
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
				sessionId,
				expectedUrl,
				snapshotTarget: createContentPageSessionSnapshotTarget(tab, sessionId),
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
	const timingTraceId = createTimingTraceId(input.mode === 'refresh' ? 'refresh' : 'analysis');
	const totalSpan = startTimingSpan('background.analysis-fresh.total', {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			...summarizeTab(tab),
			mode: input.mode,
			observe: input.observe,
			cacheStatus,
		},
	});
	logBackgroundEvent('analysis-fresh-start', {
		...summarizeTab(tab),
		mode: input.mode,
		observe: input.observe,
		cacheStatus,
		pipeline: 'event',
		timingTraceId,
	});

	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			...summarizeTab(tab),
			mode: input.mode,
			observe: input.observe,
		},
	};
	const compiledRegistryArtifact = await timeAsyncSpan(
		'background.registry.get-bootstrap-compiled',
		timingContext,
		() => bundledTechnologyRegistryProvider.getCompiledBootstrapRegistry(),
		summarizeCompiledRegistryArtifact,
	);
	const batchResponse = await collectObservationBatchFromTab(tab.id, tab.url, compiledRegistryArtifact, 'initial', timingTraceId);
	if (!batchResponse.ok) {
		endTimingSpan(totalSpan, { ok: false, failedAt: 'collect-initial' });
		return batchResponse;
	}

	let session: ObservationSessionState | undefined;
	if (shouldStartObservationForAnalysis(input)) {
		const sessionResponse = await timeAsyncSpan(
			'background.observation-session.begin',
			timingContext,
			() => beginObservationSessionForTab(tab.id, tab.url, tab.incognito),
			(response) => ({ ok: response.ok, status: response.ok ? response.value.status : undefined }),
		);
		if (sessionResponse.ok) {
			session = sessionResponse.value;
		} else {
			console.warn('[red-detector] observation session unavailable', {
				code: sessionResponse.error.code,
				message: sessionResponse.error.message,
			});
		}
	}

	const hasDeferredMatcherWork = hasDeferredMatcherPartitions(batchResponse.value);
	const enrichment = getInitialEnrichmentState(tab, session, hasDeferredMatcherWork);
	const response = await analyzeAndPersistObservationBatch(tab, batchResponse.value, compiledRegistryArtifact, cacheStatus, session, {
		refreshKind: 'bootstrap',
		matcherMode: session?.sessionId && !tab.incognito ? 'bootstrap' : 'complete',
	}, enrichment, timingTraceId);

	if (response.ok && enrichment.status === 'pending') {
		scheduleDeferredEnrichment(tab, batchResponse.value, session, response.value, timingTraceId, hasDeferredMatcherWork);
	}

	endTimingSpan(totalSpan, {
		ok: response.ok,
		resultCount: response.ok ? response.value.analysis.results.length : 0,
		enrichmentStatus: enrichment.status,
	});
	return response;
}


function getInitialEnrichmentState(
	tab: InspectableTab,
	session: ObservationSessionState | undefined,
	hasDeferredMatcherWork: boolean,
): AnalysisEnrichmentState {
	if (tab.incognito) {
		return { status: 'skipped', reason: 'incognito' };
	}
	if (!session?.sessionId) {
		return { status: 'skipped', reason: 'no-observation-session' };
	}
	return hasDeferredMatcherWork
		? { status: 'pending', reason: 'deferred-matcher-work' }
		: { status: 'pending' };
}

function hasEnrichmentWork(compiledRegistryArtifact: CompiledRegistry): boolean {
	const enrichment = compiledRegistryArtifact.collectionPlan.enrichment;
	return (
		enrichment.htmlProbeList.length > 0 ||
		enrichment.needsHeaders ||
		enrichment.needsScriptContent ||
		enrichment.needsStylesheetContent ||
		enrichment.needsText
	);
}

function scheduleDeferredEnrichment(
	tab: InspectableTab,
	initialBatch: ObservationBatch,
	session?: ObservationSessionState,
	initialOutput?: AnalyzeActiveTabOutput,
	initialTimingTraceId?: string,
	hasDeferredMatcherWork = false,
): void {
	if (!session?.sessionId || !initialOutput || tab.incognito) {
		return;
	}

	const sessionId = session.sessionId;
	void (async () => {
		const timingTraceId = initialTimingTraceId ? `${initialTimingTraceId}:enrichment` : createTimingTraceId('enrichment');
		const timingContext: TimingContext = {
			traceId: timingTraceId,
			surface: 'background',
			details: {
				...summarizeTab(tab),
				sessionId,
			},
		};
		const enrichmentSpan = startTimingSpan('background.analysis-enrichment.total', timingContext);
		logBackgroundEvent('analysis-enrichment-start', {
			...summarizeTab(tab),
			sessionId,
			timingTraceId,
		});
		try {

			const compiledRegistryArtifact = await timeAsyncSpan(
				'background.registry.get-enrichment-compiled',
				timingContext,
				() => bundledTechnologyRegistryProvider.getCompiledRegistry(),
				summarizeCompiledRegistryArtifact,
			);
			if (!hasEnrichmentWork(compiledRegistryArtifact)) {
				if (hasDeferredMatcherWork) {
					await runDeferredMatcherCompletion(tab, initialBatch, compiledRegistryArtifact, session, timingTraceId);
					endTimingSpan(enrichmentSpan, { ok: true, completedMatcher: true });
					return;
				}

				await persistTerminalEnrichmentSnapshot(tab, initialOutput, { status: 'not-needed', reason: 'no-enrichment-work' });
				endTimingSpan(enrichmentSpan, { ok: true, skipped: 'no-enrichment-work' });
				return;
			}

			const enrichmentBatch = await runEnrichmentWithTimeout(() => collectObservationBatchFromTab(
				tab.id,
				tab.url,
				compiledRegistryArtifact,
				'enrichment',
				timingTraceId,
			));
			if (!enrichmentBatch.ok) {
				logBackgroundEvent('analysis-enrichment-failed', {
					...summarizeTab(tab),
					sessionId,
					code: enrichmentBatch.error.code,
					message: enrichmentBatch.error.message,
				});
				await persistTerminalEnrichmentSnapshot(tab, initialOutput, {
					status: enrichmentBatch.error.message.includes('timed out') ? 'timed-out' : 'failed',
					reason: enrichmentBatch.error.message,
				});
				endTimingSpan(enrichmentSpan, { ok: false, failedAt: 'collect-enrichment' });
				return;
			}

			const mergedBatch = mergeObservationBatches(initialBatch, enrichmentBatch.value);
			const completedAt = Date.now();
			const response = await analyzeAndPersistObservationBatch(
				tab,
				mergedBatch,
				compiledRegistryArtifact,
				'bypassed',
				session,
				{ refreshKind: 'enrichment', matcherMode: 'enrichment' },
				{ status: 'complete', completedAt },
				timingTraceId,
			);
			if (!response.ok) {
				logBackgroundEvent('analysis-enrichment-persist-failed', {
					...summarizeTab(tab),
					sessionId,
					code: response.error.code,
					message: response.error.message,
				});
				await persistTerminalEnrichmentSnapshot(tab, initialOutput, { status: 'failed', reason: response.error.message });
				endTimingSpan(enrichmentSpan, { ok: false, failedAt: 'persist-enrichment' });
				return;
			}

			completedEnrichmentBySession.set(sessionId, { tabId: tab.id, completedAt });
			logBackgroundEvent('analysis-enrichment-complete', {
				...summarizeTab(tab),
				sessionId,
				completedAt,
				resultCount: response.value.analysis.results.length,
				timingTraceId,
			});
			endTimingSpan(enrichmentSpan, {
				ok: true,
				resultCount: response.value.analysis.results.length,
			});
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Deep evidence collection failed.';
			await persistTerminalEnrichmentSnapshot(tab, initialOutput, { status: 'failed', reason: message });
			endTimingSpan(enrichmentSpan, { ok: false, failedAt: 'unexpected-enrichment-error' });
		}
	})();
}


async function runDeferredMatcherCompletion(
	tab: InspectableTab,
	initialBatch: ObservationBatch,
	compiledRegistryArtifact: CompiledRegistry,
	session: ObservationSessionState,
	timingTraceId?: string,
): Promise<void> {
	const completedAt = Date.now();
	const response = await analyzeAndPersistObservationBatch(
		tab,
		initialBatch,
		compiledRegistryArtifact,
		'bypassed',
		session,
		{ refreshKind: 'matcher-complete', matcherMode: 'complete' },
		{ status: 'complete', completedAt },
		timingTraceId,
	);
	if (response.ok) {
		completedEnrichmentBySession.set(session.sessionId, { tabId: tab.id, completedAt });
		logBackgroundEvent('analysis-matcher-complete', {
			...summarizeTab(tab),
			sessionId: session.sessionId,
			resultCount: response.value.analysis.results.length,
			timingTraceId,
		});
	}
}

function createMatcherJobRecord(
	tab: InspectableTab,
	batch: ObservationBatch,
	mode: MatcherJobMode,
	session?: ObservationSessionState,
): MatcherJobRecord {
	const now = Date.now();
	const jobId = `matcher:${tab.id}:${now}:${Math.random().toString(36).slice(2)}`;
	return {
		jobId,
		tabId: tab.id,
		...(session?.sessionId ? { sessionId: session.sessionId } : {}),
		expectedUrl: tab.url,
		...(tab.incognito ? { incognito: true } : {}),
		status: 'queued',
		mode,
		target: batch.target,
		createdAt: now,
		updatedAt: now,
		observationCount: batch.observations.length,
		partitionCount: 0,
		completedPartitionCount: 0,
	};
}

function getMatcherJobMode(value: unknown, session?: ObservationSessionState): MatcherJobMode {
	if (value === 'enrichment' || value === 'complete' || value === 'bootstrap') {
		return value;
	}
	return session?.sessionId ? 'bootstrap' : 'complete';
}

async function canPersistMatcherResult(tab: InspectableTab, expectedUrl: string): Promise<boolean> {
	try {
		const current = await browser.tabs.get(tab.id);
		if (!current.url) {
			return true;
		}
		return isSameDocumentUrl(current.url, expectedUrl);
	} catch {
		return true;
	}
}

async function runEnrichmentWithTimeout<T>(
	operation: () => Promise<AppResult<T>>,
): Promise<AppResult<T>> {
	try {
		return await withTimeout(
			operation(),
			ENRICHMENT_TIMEOUT_MS,
			'Deep evidence collection timed out before it could update the popup.',
		);
	} catch (error) {
		if (error instanceof RpcTimeoutError) {
			return errorResponse('CONTENT_SCRIPT_UNAVAILABLE', error.message, error.stack);
		}

		const message = error instanceof Error ? error.message : 'Deep evidence collection failed.';
		const stack = error instanceof Error ? error.stack : undefined;
		return errorResponse('UNKNOWN', message, stack);
	}
}

async function persistTerminalEnrichmentSnapshot(
	tab: InspectableTab,
	output: AnalyzeActiveTabOutput,
	enrichment: AnalysisEnrichmentState,
): Promise<void> {
	await saveDetectionSnapshotForPopup(
		tab,
		Object.assign({}, output, { enrichment }),
		'background',
	);
}

async function analyzeAndPersistObservationBatch(
	tab: InspectableTab,
	batch: ObservationBatch,
	compiledRegistryArtifact: CompiledRegistry,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
	session?: ObservationSessionState,
	details: Record<string, unknown> = {},
	enrichment?: AnalysisEnrichmentState,
	timingTraceId?: string,
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	const matcherMode = getMatcherJobMode(details.matcherMode, session);
	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'pipeline',
		details: {
			...summarizeTab(tab),
			cacheStatus,
			observationCount: batch.observations.length,
			refreshKind: details.refreshKind,
			matcherMode,
		},
	};
	const matcherJob = createMatcherJobRecord(tab, batch, matcherMode, session);
	await saveMatcherJobRecord(matcherJob);
	latestMatcherJobByTab.set(tab.id, matcherJob.jobId);
	await updateMatcherJobRecord(matcherJob.jobId, { status: 'dispatching' });
	const matcherResult = await timeAsyncSpan(
		'pipeline.run-partitioned-matcher-job',
		timingContext,
		() => runMatcherJobWithOffscreenFallback({
			job: matcherJob,
			mode: matcherMode,
			batch,
			registry: compiledRegistryArtifact.technologies,
			index: compiledRegistryArtifact.matcherIndex,
			relationshipGraph: compiledRegistryArtifact.relationshipGraph,
			source: 'fresh',
		}),
		(result) => ({
			resultCount: result.result.analysis.results.length,
			eventCount: result.result.events.length,
			partitionCount: result.partitions.length,
			executor: result.executor,
		}),
	);
	const newestJobId = latestMatcherJobByTab.get(tab.id);
	if (newestJobId && newestJobId !== matcherJob.jobId) {
		await updateMatcherJobRecord(matcherJob.jobId, { status: 'stale', reason: 'newer-job' });
		return errorResponse('VALIDATION_ERROR', 'Matcher result was superseded by a newer analysis job.');
	}

	const cacheable = await canPersistMatcherResult(tab, batch.target.url);
	if (!cacheable) {
		await updateMatcherJobRecord(matcherJob.jobId, { status: 'stale', reason: 'navigation' });
		return errorResponse('VALIDATION_ERROR', 'Matcher result belongs to a document that is no longer active.');
	}
	await updateMatcherJobRecord(matcherJob.jobId, {
		status: 'completed',
		reason: 'completed',
		partitionCount: matcherResult.partitions.length,
		completedPartitionCount: matcherResult.partitions.length,
	});
	const pipelineResult = matcherResult.result;
	const replayTrace = timeSyncSpan(
		'pipeline.create-replay-trace',
		timingContext,
		() => createDetectionReplayTrace({ result: pipelineResult }),
		(trace) => ({ eventCount: trace.events.length }),
	);
	const savedAnalysis = await timeAsyncSpan(
		'storage.save-analysis',
		timingContext,
		async () => tab.incognito
			? Object.assign({}, pipelineResult.analysis, { source: 'fresh' as const })
			: await saveAnalysis(pipelineResult.analysis),
		(analysis) => ({ resultCount: analysis.results.length, incognito: tab.incognito }),
	);
	const savedReplayTrace = await timeAsyncSpan(
		'storage.save-replay-trace',
		timingContext,
		async () => tab.incognito ? replayTrace : await saveReplayTrace(replayTrace),
		() => ({ incognito: tab.incognito }),
	);
	const replayHistory = await timeAsyncSpan(
		'storage.get-replay-history',
		timingContext,
		async () => tab.incognito ? [] : await getCachedReplayTraceHistory(tab.url),
		(history) => ({ replayHistoryCount: history.length, incognito: tab.incognito }),
	);
	const sessionTarget = createObservationSessionTarget(tab, session);

	eventObservationBatchByTab.set(tab.id, batch);
	logAnalysisSummary(savedAnalysis);
	logBackgroundEvent('analysis-event-complete', {
		...summarizeTab(tab),
		cacheStatus,
		resultCount: savedAnalysis.results.length,
		observationCount: batch.observations.length,
		eventCount: pipelineResult.events.length,
		sessionStatus: session?.status ?? 'none',
		timingTraceId,
		...details,
	});

	const output = createAnalysisOutput(
		savedAnalysis,
		cacheStatus,
		session,
		savedReplayTrace,
		replayHistory,
		sessionTarget,
		enrichment,
	);
	await saveDetectionSnapshotStreamForPopup(tab, output, 'background');

	return ok(output);
}

/**
 * Append late observations to the baseline batch and remove duplicate facts.
 *
 * Graph refinement needs one candidate set built from everything known about the
 * page, not a final-result merge. The key deliberately ignores timestamps so a
 * repeated script URL observed later does not create a second evidence record.
 */
function mergeObservationBatches(base: ObservationBatch, next: ObservationBatch): ObservationBatch {
	const observations: NormalizedObservation[] = [];
	const seen = new Set<string>();
	for (const observation of [...base.observations, ...next.observations]) {
		const key = createObservationDeduplicationKey(observation);
		if (seen.has(key)) {
			continue;
		}

		seen.add(key);
		observations.push(observation);
	}

	return Object.assign({}, base, {
		observedAt: Math.max(base.observedAt, next.observedAt),
		observations,
	});
}

function createObservationDeduplicationKey(observation: NormalizedObservation): string {
	const attributes = observation.attributes
		? Object.entries(observation.attributes)
			.sort(([left], [right]) => left.localeCompare(right))
			.map(([key, value]) => `${key}:${String(value)}`)
			.join('|')
		: '';

	return [
		observation.kind,
		observation.collector,
		observation.key ?? '',
		String(observation.value),
		attributes,
	].join('\u001f');
}

function isSameObservationTarget(left: ObservationBatch, right: ObservationBatch): boolean {
	return left.target.hostname === right.target.hostname && left.target.url === right.target.url;
}

async function refreshObservationSessionTarget(
	target: ObservationSessionTarget,
	knownSession?: ObservationSessionState,
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	const tab = tabFromObservationSessionTarget(target);
	const timingTraceId = createTimingTraceId('refresh-session');
	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			...summarizeTab(tab),
			sessionId: target.sessionId,
		},
	};
	logBackgroundEvent('observation-refresh-requested', {
		...summarizeTab(tab),
		timingTraceId,
	});
	const sessionResponse = knownSession
		? ok(knownSession)
		: await timeAsyncSpan(
			'background.observation-refresh.get-session-state',
			timingContext,
			() => getObservationSessionStateForTab(tab.id),
			(response) => ({ ok: response.ok, status: response.ok ? response.value.status : undefined }),
		);
	if (!sessionResponse.ok) {
		return sessionResponse;
	}

	const resolvedSession = markSessionDirtyWhenEnrichmentCompleted(sessionResponse.value, target);
	const targetValidation = validateObservationSessionTarget(resolvedSession, target);
	if (!targetValidation.ok) {
		return targetValidation;
	}

	logBackgroundEvent('observation-refresh-session-state', {
		...summarizeTab(tab),
		...summarizeSession(resolvedSession),
	});

	const blockReason = getObservationRefreshBlockReason(resolvedSession, tab.url);
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
				: 'No active observation session exists for the analyzed tab.',
		);
	}

	const completedEnrichment = target.sessionId
		? completedEnrichmentBySession.get(target.sessionId)
		: undefined;
	const batchResponse = await timeAsyncSpan(
		'background.observation-refresh.flush-batch',
		timingContext,
		() => flushObservationBatchForTab(tab.id),
		(response) => ({
			ok: response.ok,
			queuedCount: response.ok ? response.value.stats.queuedCount : undefined,
			lateObservationCount: response.ok ? (response.value.batch?.observations.length ?? 0) : undefined,
		}),
	);
	if (!batchResponse.ok) {
		return batchResponse;
	}

	const response = await analyzeObservationBatchRefresh(
		tab,
		batchResponse.value,
		completedEnrichment ? { status: 'complete', completedAt: completedEnrichment.completedAt } : undefined,
		timingTraceId,
	);
	if (response.ok && target.sessionId) {
		completedEnrichmentBySession.delete(target.sessionId);
	}

	return response;
}

async function stopObservationSessionTarget(
	target: ObservationSessionTarget,
): Promise<AppResult<ObservationSessionState>> {
	const tab = tabFromObservationSessionTarget(target);
	logBackgroundEvent('observation-stop-api', summarizeTab(tab));
	const sessionResponse = await getObservationSessionStateForTab(tab.id);
	if (!sessionResponse.ok) {
		return sessionResponse;
	}

	const targetValidation = validateObservationSessionTarget(sessionResponse.value, target);
	if (!targetValidation.ok) {
		return targetValidation;
	}

	eventObservationBatchByTab.delete(tab.id);
	return stopObservationSessionForTab(tab.id);
}


/**
 * Surface completed background enrichment through the existing live-update contract.
 *
 * Deeper evidence collection runs after the first popup response and does not
 * come from the content-script mutation observer. Marking the targeted session
 * as dirty lets the popup reuse the same refresh path and receive the enriched
 * cached analysis. Expired sessions remain eligible because enrichment can take
 * longer than the observation window; manual stops, navigation, and invalidation
 * still keep their stopped state.
 */
function markSessionDirtyWhenEnrichmentCompleted(
	session: ObservationSessionState,
	target: ObservationSessionTarget,
): ObservationSessionState {
	if (!target.sessionId) {
		return session;
	}

	const completed = completedEnrichmentBySession.get(target.sessionId);
	if (!completed || completed.tabId !== target.tabId) {
		return session;
	}
	if (session.status === 'stopped' && session.stopReason !== 'expired') {
		return session;
	}

	return Object.assign({}, session, {
		status: 'dirty' as const,
		lastObservedAt: Math.max(session.lastObservedAt ?? 0, completed.completedAt),
	});
}

async function getObservationSessionStateForTarget(
	target: ObservationSessionTarget,
): Promise<AppResult<ObservationSessionState>> {
	const response = await getObservationSessionStateForTab(target.tabId);
	if (!response.ok) {
		return response;
	}

	const targetValidation = validateObservationSessionTarget(response.value, target);
	if (!targetValidation.ok) {
		return targetValidation;
	}

	return ok(markSessionDirtyWhenEnrichmentCompleted(response.value, target));
}

/**
 * Read the newest stored analysis for a known popup session target.
 *
 * Deferred enrichment writes the completed analysis to storage before the popup
 * can necessarily refresh the content-script observer. Reading storage by the
 * session target keeps progressive updates durable across observer expiry and
 * Manifest V3 service-worker restarts, where in-memory completion markers are
 * lost.
 */
async function getLatestAnalysisForObservationSession(
	input: ObservationSessionTarget & { readonly afterAnalyzedAt: number },
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	const tab = tabFromObservationSessionTarget(input);
	const timingTraceId = createTimingTraceId('latest-session-analysis');
	const timingContext: TimingContext = {
		traceId: timingTraceId,
		surface: 'background',
		details: {
			...summarizeTab(tab),
			sessionId: input.sessionId,
			afterAnalyzedAt: input.afterAnalyzedAt,
		},
	};
	const cached = await timeAsyncSpan(
		'storage.get-cached-analysis',
		timingContext,
		() => getCachedAnalysis(tab.url),
		(value) => ({
			cacheHit: Boolean(value),
			newerThanRendered: value ? value.analyzedAt > input.afterAnalyzedAt : false,
		}),
	);
	if (!cached || cached.analyzedAt <= input.afterAnalyzedAt) {
		return errorResponse(
			'OBSERVATION_SESSION_UNAVAILABLE',
			'No newer analysis has been stored for the observed document yet.',
		);
	}

	const replayTrace = await timeAsyncSpan(
		'storage.get-cached-replay-trace',
		timingContext,
		() => getCachedReplayTrace(tab.url),
		(value) => ({ replayTraceHit: Boolean(value) }),
	);
	const replayHistory = await timeAsyncSpan(
		'storage.get-replay-history',
		timingContext,
		() => getCachedReplayTraceHistory(tab.url),
		(value) => ({ replayHistoryCount: value.length }),
	);

	logBackgroundEvent('analysis-session-cache-advanced', {
		...summarizeTab(tab),
		sessionId: input.sessionId,
		previousAnalyzedAt: input.afterAnalyzedAt,
		nextAnalyzedAt: cached.analyzedAt,
		resultCount: cached.results.length,
		timingTraceId,
	});

	return ok(createAnalysisOutput(
		cached,
		'hit',
		undefined,
		replayTrace ?? undefined,
		replayHistory,
		input,
		{ status: 'complete', completedAt: cached.analyzedAt },
	));
}

/** Debug output is intentionally summary-only; never log raw page observations. */
function logAnalysisSummary(analysis: SiteAnalysis): void {
	backgroundLogger.info('[red-detector] analysis summary', {
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

		async getActiveTabIdentity() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			return ok(createActiveTabIdentity(tabResponse.value));
		},

		async analyzeActiveTab(input): Promise<AppResult<AnalyzeActiveTabOutput>> {
			try {
				const tabResponse = await getInspectableActiveTab();
				if (!tabResponse.ok) {
					return tabResponse;
				}

				const tab = tabResponse.value;
				const requestTimingTraceId = createTimingTraceId(input.mode === 'cache-first' ? 'popup-open' : 'popup-refresh');
				const requestTimingContext: TimingContext = {
					traceId: requestTimingTraceId,
					surface: 'background',
					details: {
						...summarizeTab(tab),
						mode: input.mode,
						observe: input.observe,
					},
				};
				logBackgroundEvent('analysis-requested', {
					...summarizeTab(tab),
					mode: input.mode,
					observe: input.observe,
					pipeline: 'event',
					timingTraceId: requestTimingTraceId,
				});
				if (input.mode === 'cache-first' && !tab.incognito) {
					const cached = await timeAsyncSpan(
						'storage.get-cached-analysis',
						requestTimingContext,
						() => getCachedAnalysis(tab.url),
						(value) => ({ cacheHit: Boolean(value) }),
					);
					if (cached) {
						const replayTrace = await timeAsyncSpan(
							'storage.get-cached-replay-trace',
							requestTimingContext,
							() => getCachedReplayTrace(tab.url),
							(value) => ({ replayTraceHit: Boolean(value) }),
						);
						const replayHistory = await timeAsyncSpan(
							'storage.get-replay-history',
							requestTimingContext,
							() => getCachedReplayTraceHistory(tab.url),
							(value) => ({ replayHistoryCount: value.length }),
						);
						logBackgroundEvent('analysis-cache-hit', {
							...summarizeTab(tab),
							resultCount: cached.results.length,
							analyzedAt: cached.analyzedAt,
							sessionStatus: 'none',
							timingTraceId: requestTimingTraceId,
						});
						const output = createAnalysisOutput(
							cached,
							'hit',
							undefined,
							replayTrace ?? undefined,
							replayHistory,
						);
						await saveDetectionSnapshotForPopup(tab, output, 'cache');

						return ok(output);
					}

					logBackgroundEvent('analysis-cache-miss', {
						...summarizeTab(tab),
						timingTraceId: requestTimingTraceId,
					});
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

		async refreshObservationSession(target) {
			try {
				return await refreshObservationSessionTarget(target);
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message =
					error instanceof Error ? error.message : 'Unexpected runtime error';
				return errorResponse('UNKNOWN', message, stack);
			}
		},

		async getObservationSessionLatestAnalysis(input) {
			try {
				return await getLatestAnalysisForObservationSession(input);
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message =
					error instanceof Error ? error.message : 'Unexpected runtime error';
				return errorResponse('UNKNOWN', message, stack);
			}
		},

		async refreshActiveObservationSession() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			const sessionResponse = await getObservationSessionStateForTab(tabResponse.value.id);
			if (!sessionResponse.ok) {
				return sessionResponse;
			}

			const target = createObservationSessionTarget(tabResponse.value, sessionResponse.value);
			if (!target) {
				return errorResponse('OBSERVATION_SESSION_UNAVAILABLE', 'No active observation session exists for the current tab.');
			}

			return refreshObservationSessionTarget(target, sessionResponse.value);
		},

		async stopObservationSession(target) {
			return stopObservationSessionTarget(target);
		},

		async stopActiveObservationSession() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			logBackgroundEvent('observation-stop-api', summarizeTab(tabResponse.value));
			forgetTabRuntimeState(tabResponse.value.id);
			return stopObservationSessionForTab(tabResponse.value.id);
		},

		async getObservationSessionState(target) {
			return getObservationSessionStateForTarget(target);
		},

		async getActiveObservationSessionState() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			return getObservationSessionStateForTab(tabResponse.value.id);
		},

		async getActiveReplayTraceHistory() {
			const tabResponse = await getInspectableActiveTab();
			if (!tabResponse.ok) {
				return tabResponse;
			}

			return ok(await getCachedReplayTraceHistory(tabResponse.value.url));
		},
	};
}


function isMatcherPartitionProgressMessage(message: unknown): message is MatcherPartitionProgressMessage {
	return Boolean(
		message &&
		typeof message === 'object' &&
		'channel' in message &&
		message.channel === MATCHER_OFFSCREEN_CHANNEL &&
		'type' in message &&
		message.type === 'matcher.partition-complete',
	);
}

function handleMatcherPartitionProgress(message: unknown): void {
	if (!isMatcherPartitionProgressMessage(message)) {
		return;
	}

	void updateMatcherJobRecord(message.partition.job.jobId, {
		status: 'streaming',
		partitionCount: message.partitionCount,
		completedPartitionCount: message.completedPartitionCount,
	});
}

const [provideBackgroundApi] = defineProxy(() => createBackgroundApi(), {
	namespace: BACKGROUND_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

export default defineBackground(() => {
	browser.runtime.onMessage.addListener(handleMatcherPartitionProgress);
	registerBackgroundLifecycleListeners({
		onTabRemoved: forgetTabRuntimeState,
		log: logBackgroundEvent,
	});
	provideBackgroundApi(createBackgroundServerAdapter());
});
