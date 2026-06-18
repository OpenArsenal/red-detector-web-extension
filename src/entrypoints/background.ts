import { defineProxy } from 'comctx';
import { browser } from 'wxt/browser';

import { canInspectTab, getActiveTab } from '../lib/browser/active-tab';
import { collectExtensionObservationBatch } from '../lib/collectors/extension-page-collector';
import { bundledTechnologyRegistryProvider } from '../lib/detection/registry-provider';
import {
	createDetectionReplayTrace,
	runObservationBatchPipeline,
} from '../lib/pipeline';

import type { ObservationSessionState } from '../lib/content/observed-page-signals';
import type { SiteAnalysis } from '../lib/detection/types';
import type {
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
import { isSameDocumentUrl } from '../lib/shared/url';
import { STORAGE_LIMITS, getAnalysisCacheKey } from '../lib/storage/contracts';
import {
	getCachedAnalysis,
	getCachedReplayTrace,
	getCachedReplayTraceHistory,
	getStatus,
	saveAnalysis,
	saveReplayTrace,
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
type CompiledRegistry = ReturnType<typeof bundledTechnologyRegistryProvider.getCompiledRegistry>;

const CONTENT_SCRIPT_FILE = '/content-scripts/content.js';
const CONTENT_SCRIPT_PING_TIMEOUT_MS = 750;
const BACKGROUND_LOG_PREFIX = '[red-detector][background]';

/**
 * In-flight runtime injections are deduplicated per tab.
 *
 * Popup refreshes and polling can ask for the content runtime at nearly the same
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
 * completes outside that observer. Marking the session dirty lets the popup poll
 * the existing refresh API and receive the saved enriched result without adding a
 * new push channel.
 */
const completedEnrichmentBySession = new Map<string, { readonly tabId: number; readonly completedAt: number }>();

function logBackgroundEvent(event: string, details?: Record<string, unknown>): void {
	if (details) {
		console.log(BACKGROUND_LOG_PREFIX, event, details);
		return;
	}

	console.log(BACKGROUND_LOG_PREFIX, event);
}

function summarizeTab(tab: InspectableTab): Record<string, unknown> {
	return {
		tabId: tab.id,
		hostname: new URL(tab.url).hostname,
	};
}

function summarizeSession(session: ObservationSessionState): Record<string, unknown> {
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
): Promise<AppResult<ObservationBatch>> {
	const contentScriptResponse = await ensureContentScript(tabId);
	if (!contentScriptResponse.ok) {
		return contentScriptResponse;
	}

	return collectExtensionObservationBatch({
		tabId,
		expectedUrl,
		collectionPlan: compiledRegistryArtifact.collectionPlan,
		tier,
		contentApi: createContentApiClient(tabId, 0),
		log: logBackgroundEvent,
	});
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
		sessionId: session.sessionId,
		expectedUrl: tab.url,
		...(tab.incognito ? { incognito: true } : {}),
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
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	if (!flush.batch || flush.batch.observations.length === 0) {
		const cached = await getCachedAnalysis(tab.url);
		const replayTrace = await getCachedReplayTrace(tab.url);
		if (cached) {
			const replayHistory = await getCachedReplayTraceHistory(tab.url);
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

		return analyzeFreshActiveTab(tab, { mode: 'refresh', observe: 'while-popup-open' }, 'bypassed');
	}

	const baseBatch = eventObservationBatchByTab.get(tab.id);
	const compiledRegistryArtifact = bundledTechnologyRegistryProvider.getCompiledRegistry();
	const batchResponse = baseBatch && isSameObservationTarget(baseBatch, flush.batch)
		? ok(mergeObservationBatches(baseBatch, flush.batch))
		: await recoverObservationBatchForRefresh(tab, flush.batch, compiledRegistryArtifact);
	if (!batchResponse.ok) {
		return batchResponse;
	}

	return analyzeAndPersistObservationBatch(tab, batchResponse.value, compiledRegistryArtifact, 'bypassed', flush.session, {
		refreshKind: enrichment?.status === 'complete' ? 'enrichment' : baseBatch ? 'incremental' : 'recovered',
		queuedCount: flush.stats.queuedCount,
		lateObservationCount: flush.batch.observations.length,
	}, enrichment);
}

async function recoverObservationBatchForRefresh(
	tab: InspectableTab,
	lateBatch: ObservationBatch,
	compiledRegistryArtifact: CompiledRegistry,
): Promise<AppResult<ObservationBatch>> {
	logBackgroundEvent('observation-refresh-recollect', {
		...summarizeTab(tab),
		lateObservationCount: lateBatch.observations.length,
	});

	return collectObservationBatchFromTab(tab.id, tab.url, compiledRegistryArtifact);
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
		pipeline: 'event',
	});

	const compiledRegistryArtifact = bundledTechnologyRegistryProvider.getCompiledRegistry();
	const batchResponse = await collectObservationBatchFromTab(tab.id, tab.url, compiledRegistryArtifact);
	if (!batchResponse.ok) {
		return batchResponse;
	}

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

	const enrichment = getInitialEnrichmentState(tab, compiledRegistryArtifact, session);
	const response = await analyzeAndPersistObservationBatch(tab, batchResponse.value, compiledRegistryArtifact, cacheStatus, session, {
		refreshKind: 'fresh',
	}, enrichment);

	if (response.ok && enrichment.status === 'pending') {
		scheduleDeferredEnrichment(tab, batchResponse.value, compiledRegistryArtifact, session);
	}

	return response;
}


function getInitialEnrichmentState(
	tab: InspectableTab,
	compiledRegistryArtifact: CompiledRegistry,
	session?: ObservationSessionState,
): AnalysisEnrichmentState {
	if (tab.incognito) {
		return { status: 'skipped', reason: 'incognito' };
	}
	if (!session?.sessionId) {
		return { status: 'skipped', reason: 'no-observation-session' };
	}
	if (!hasEnrichmentWork(compiledRegistryArtifact)) {
		return { status: 'not-needed' };
	}

	return { status: 'pending' };
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
	compiledRegistryArtifact: CompiledRegistry,
	session?: ObservationSessionState,
): void {
	if (!session?.sessionId || tab.incognito) {
		return;
	}

	void (async () => {
		logBackgroundEvent('analysis-enrichment-start', {
			...summarizeTab(tab),
			sessionId: session.sessionId,
		});

		const enrichmentBatch = await collectObservationBatchFromTab(
			tab.id,
			tab.url,
			compiledRegistryArtifact,
			'enrichment',
		);
		if (!enrichmentBatch.ok) {
			logBackgroundEvent('analysis-enrichment-failed', {
				...summarizeTab(tab),
				sessionId: session.sessionId,
				code: enrichmentBatch.error.code,
				message: enrichmentBatch.error.message,
			});
			return;
		}

		const mergedBatch = mergeObservationBatches(initialBatch, enrichmentBatch.value);
		const completedAt = Date.now();
		const sessionId = session.sessionId;
		if (!sessionId) {
			return;
		}
		const response = await analyzeAndPersistObservationBatch(
			tab,
			mergedBatch,
			compiledRegistryArtifact,
			'bypassed',
			session,
			{ refreshKind: 'enrichment' },
			{ status: 'complete', completedAt },
		);
		if (!response.ok) {
			logBackgroundEvent('analysis-enrichment-persist-failed', {
				...summarizeTab(tab),
				sessionId: session.sessionId,
				code: response.error.code,
				message: response.error.message,
			});
			return;
		}

		completedEnrichmentBySession.set(sessionId, { tabId: tab.id, completedAt });
		logBackgroundEvent('analysis-enrichment-complete', {
			...summarizeTab(tab),
			sessionId,
			completedAt,
			resultCount: response.value.analysis.results.length,
		});
	})();
}

async function analyzeAndPersistObservationBatch(
	tab: InspectableTab,
	batch: ObservationBatch,
	compiledRegistryArtifact: CompiledRegistry,
	cacheStatus: AnalyzeActiveTabOutput['cache']['status'],
	session?: ObservationSessionState,
	details: Record<string, unknown> = {},
	enrichment?: AnalysisEnrichmentState,
): Promise<AppResult<AnalyzeActiveTabOutput>> {
	const pipelineResult = runObservationBatchPipeline({
		batch,
		registry: compiledRegistryArtifact.technologies,
		compiledRegistryArtifact,
		source: 'fresh',
	});
	const replayTrace = createDetectionReplayTrace({ result: pipelineResult });
	const savedAnalysis = tab.incognito
		? Object.assign({}, pipelineResult.analysis, { source: 'fresh' as const })
		: await saveAnalysis(pipelineResult.analysis);
	const savedReplayTrace = tab.incognito ? replayTrace : await saveReplayTrace(replayTrace);
	const replayHistory = tab.incognito ? [] : await getCachedReplayTraceHistory(tab.url);
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
		...details,
	});

	return ok(createAnalysisOutput(savedAnalysis, cacheStatus, session, savedReplayTrace, replayHistory, sessionTarget, enrichment));
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
	logBackgroundEvent('observation-refresh-requested', summarizeTab(tab));
	const sessionResponse = knownSession ? ok(knownSession) : await getObservationSessionStateForTab(tab.id);
	if (!sessionResponse.ok) {
		return sessionResponse;
	}

	const targetValidation = validateObservationSessionTarget(sessionResponse.value, target);
	if (!targetValidation.ok) {
		return targetValidation;
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
				: 'No active observation session exists for the analyzed tab.',
		);
	}

	const completedEnrichment = target.sessionId
		? completedEnrichmentBySession.get(target.sessionId)
		: undefined;
	const batchResponse = await flushObservationBatchForTab(tab.id);
	if (!batchResponse.ok) {
		return batchResponse;
	}

	const response = await analyzeObservationBatchRefresh(
		tab,
		batchResponse.value,
		completedEnrichment ? { status: 'complete', completedAt: completedEnrichment.completedAt } : undefined,
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
	if (session.status !== 'observing' && session.status !== 'idle') {
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

/** Debug output is intentionally summary-only; never log raw page observations. */
function logAnalysisSummary(analysis: SiteAnalysis): void {
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

		async analyzeActiveTab(input): Promise<AppResult<AnalyzeActiveTabOutput>> {
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
					pipeline: 'event',
				});
				if (input.mode === 'cache-first' && !tab.incognito) {
					const cached = await getCachedAnalysis(tab.url);
					if (cached) {
						const replayTrace = await getCachedReplayTrace(tab.url);
						const replayHistory = await getCachedReplayTraceHistory(tab.url);
						logBackgroundEvent('analysis-cache-hit', {
							...summarizeTab(tab),
							resultCount: cached.results.length,
							analyzedAt: cached.analyzedAt,
						});
						return ok(createAnalysisOutput(cached, 'hit', undefined, replayTrace ?? undefined, replayHistory));
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
			eventObservationBatchByTab.delete(tabResponse.value.id);
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

const [provideBackgroundApi] = defineProxy(() => createBackgroundApi(), {
	namespace: BACKGROUND_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

export default defineBackground(() => {
	provideBackgroundApi(createBackgroundServerAdapter());
});
