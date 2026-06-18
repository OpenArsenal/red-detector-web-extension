import {
	collectLinkTags,
	collectMetaTags,
	collectResourceTimings,
	collectScriptContents,
	collectScriptSources,
	collectStylesheetContents,
	collectStylesheetSources,
} from './collect-page-signals';
import { SOURCE_LIMITS } from '../detection/source-limits';
import { getRedDetectorLogger } from '../diagnostics/logging';
import type { PageSignals } from '../detection/types';
import { isObservationSessionForUrl } from '../lifecycle/observation';
import {
	createObservationBatchController,
	normalizeObservedPageSignalsSnapshot,
	type ObservationBatch,
	type ObservationBatchControllerStats,
	type ObservationTarget,
} from '../observations';

export type ObservedPageSignalsSnapshot = Pick<
	PageSignals,
	| 'scripts'
	| 'stylesheets'
	| 'links'
	| 'resources'
	| 'requests'
	| 'scriptContents'
	| 'stylesheetContents'
	| 'meta'
>;

export type ObservationSessionStatus = 'idle' | 'observing' | 'dirty' | 'stopped';

export type ObservationStopReason = 'manual' | 'expired' | 'navigation' | 'invalidated';

export type ObservationSessionState = {
	sessionId?: string;
	expectedUrl?: string;
	status: ObservationSessionStatus;
	throttleMs: number;
	startedAt?: number;
	expiresAt?: number;
	lastObservedAt?: number;
	lastScannedAt?: number;
	pendingMutationCount: number;
	stopReason?: ObservationStopReason;
};

export type PageSignalPollingState = ObservationSessionState;

/** Result returned when the content observer flushes queued observation events. */
export type FlushObservedObservationBatchOutput = {
	/** Next bounded observation batch, when late facts are queued. */
	batch?: ObservationBatch;
	/** Batch controller counters after the flush attempt. */
	stats: ObservationBatchControllerStats;
	/** Observation session state after pending mutation scans run. */
	session: ObservationSessionState;
};

export type BeginObservationSessionInput = {
	sessionId: string;
	expectedUrl: string;
	durationMs: number;
	maxPendingNodes: number;
	maxMutations: number;
};

export type ObservedPageSignals = {
	snapshot(): ObservedPageSignalsSnapshot;
	flushObservationBatch(): FlushObservedObservationBatchOutput;
	beginObservationSession(input: BeginObservationSessionInput): ObservationSessionState;
	stopObservationSession(reason?: ObservationStopReason): ObservationSessionState;
	status(): ObservationSessionState;
	disconnect(reason?: ObservationStopReason): void;
};

export type ObservedPageSignalsOptions = {
	throttleMs: number;
};

const MAX_PENDING_MUTATION_NODES = 100;
const observerLogger = getRedDetectorLogger('content', 'observer');

type ActiveObservationSession = {
	sessionId: string;
	expectedUrl: string;
	startedAt: number;
	expiresAt: number;
	maxPendingNodes: number;
	maxMutations: number;
};

function logObserverEvent(event: string, details?: Record<string, unknown>): void {
	observerLogger.debug('[red-detector][content][observer] {event}', {
		event,
		...(details ?? {}),
	});
}

export function createObservedPageSignals(
	options: ObservedPageSignalsOptions,
): ObservedPageSignals {
	const scripts = new Set<string>();
	const stylesheets = new Set<string>();
	const scriptContents = new Set<string>();
	const stylesheetContents = new Set<string>();
	const metaEntries = new Map<string, Set<string>>();
	const linkEntries = new Map<string, PageSignals['links'][number]>();
	const resourceEntries = new Map<string, PageSignals['resources'][number]>();
	const requestEntries = new Map<string, PageSignals['requests'][number]>();
	const pendingNodes = new Set<Node>();
	let throttleTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
	let resourceObserver: PerformanceObserver | undefined;
	let activeSession: ActiveObservationSession | undefined;
	let sessionStatus: ObservationSessionStatus = 'idle';
	let stopReason: ObservationStopReason | undefined;
	let lastObservedAt: number | undefined;
	let lastScannedAt: number | undefined;
	let pendingMutationCount = 0;
	let pendingFullDocumentScan = false;
	const observationBatchController = createObservationBatchController();

	function clearPendingMutations(): void {
		pendingNodes.clear();
		pendingFullDocumentScan = false;
		pendingMutationCount = 0;
	}

	function maxPendingMutationNodes(): number {
		return activeSession?.maxPendingNodes ?? MAX_PENDING_MUTATION_NODES;
	}

	function clearThrottleTimer(): void {
		if (throttleTimer !== undefined) {
			clearTimeout(throttleTimer);
			throttleTimer = undefined;
		}
	}

	function stopResourceObserver(): void {
		resourceObserver?.disconnect();
		resourceObserver = undefined;
	}

	function stopObservationSessionWithReason(reason: ObservationStopReason): ObservationSessionState {
		observer.disconnect();
		stopResourceObserver();
		clearThrottleTimer();
		clearPendingMutations();
		observationBatchController.reset();
		activeSession = undefined;
		sessionStatus = 'stopped';
		stopReason = reason;
		return observationState();
	}

	function stopIfDocumentChanged(): void {
		if (!activeSession || isObservationSessionForUrl(activeSession, location.href)) {
			return;
		}

		logObserverEvent('session-navigation', {
			sessionId: activeSession.sessionId,
			expectedUrl: activeSession.expectedUrl,
			actualUrl: location.href,
		});
		stopObservationSessionWithReason('navigation');
	}

	function rememberResourceTimings(): void {
		const resources = collectResourceTimings();
		rememberSnapshot({
			...emptySnapshot(),
			resources,
			requests: resources.map((resource) => ({
				url: resource.url,
				type: resource.initiatorType,
			})),
		});
	}

	function startResourceObserver(): void {
		stopResourceObserver();

		if (typeof PerformanceObserver !== 'function') {
			return;
		}

		try {
			resourceObserver = new PerformanceObserver(() => {
				if (!activeSession) {
					return;
				}

				rememberResourceTimings();
				lastObservedAt = Date.now();
			});

			try {
				resourceObserver.observe({ type: 'resource', buffered: true });
			} catch {
				resourceObserver.observe({ entryTypes: ['resource'] });
			}
		} catch {
			stopResourceObserver();
		}
	}

	function rememberMeta(meta: Record<string, string[]>): void {
		for (const [key, values] of Object.entries(meta)) {
			let bucket = metaEntries.get(key);
			if (!bucket) {
				bucket = new Set<string>();
				metaEntries.set(key, bucket);
			}

			for (const value of values) {
				if (bucket.size >= SOURCE_LIMITS.metaValuesPerKey) {
					break;
				}
				bucket.add(value);
			}
		}
	}

	function rememberSnapshot(snapshot: ObservedPageSignalsSnapshot): void {
		const observedAt = Date.now();
		for (const source of snapshot.scripts) {
			scripts.add(source);
		}

		for (const href of snapshot.stylesheets) {
			stylesheets.add(href);
		}

		for (const value of snapshot.scriptContents) {
			if (scriptContents.size >= SOURCE_LIMITS.scriptContentItems) {
				break;
			}
			scriptContents.add(value);
		}

		for (const value of snapshot.stylesheetContents) {
			if (stylesheetContents.size >= SOURCE_LIMITS.stylesheetContentItems) {
				break;
			}
			stylesheetContents.add(value);
		}

		for (const link of snapshot.links) {
			linkEntries.set(`${link.rel}:${link.type ?? ''}:${link.href}`, link);
		}

		for (const resource of snapshot.resources) {
			resourceEntries.set(resource.url, resource);
		}

		for (const request of snapshot.requests) {
			requestEntries.set(request.url, request);
		}

		rememberMeta(snapshot.meta);
		enqueueObservationSnapshot(snapshot, observedAt);
	}

	function enqueueObservationSnapshot(snapshot: ObservedPageSignalsSnapshot, observedAt: number): void {
		const target = currentObservationTarget();
		if (!target || sessionStatus === 'stopped') return;

		const batch = normalizeObservedPageSignalsSnapshot(snapshot, {
			target,
			observedAt,
			collector: 'content-observer',
		});

		for (const observation of batch.observations) observationBatchController.push(observation);
	}

	function currentObservationTarget(): ObservationTarget | undefined {
		if (!activeSession) return undefined;

		return {
			url: activeSession.expectedUrl,
			hostname: new URL(activeSession.expectedUrl).hostname,
		};
	}

	function emptySnapshot(): ObservedPageSignalsSnapshot {
		return {
			scripts: [],
			stylesheets: [],
			links: [],
			resources: [],
			requests: [],
			scriptContents: [],
			stylesheetContents: [],
			meta: {},
		};
	}

	function scanNode(node: Node): void {
		if (node instanceof HTMLScriptElement) {
			rememberSnapshot({
				...emptySnapshot(),
				scripts: collectScriptSources([node]),
				scriptContents: collectScriptContents([node]),
			});
			return;
		}

		if (node instanceof HTMLStyleElement) {
			rememberSnapshot({
				...emptySnapshot(),
				stylesheetContents: collectStylesheetContents([node]),
			});
			return;
		}

		if (node instanceof HTMLLinkElement) {
			rememberSnapshot({
				...emptySnapshot(),
				stylesheets: collectStylesheetSources([node]),
				links: collectLinkTags([node]),
			});
			return;
		}

		if (node instanceof HTMLMetaElement) {
			rememberSnapshot({
				...emptySnapshot(),
				meta: collectMetaTags([node]),
			});
			return;
		}

		if (node instanceof Element || node instanceof DocumentFragment || node instanceof Document) {
			const resources = collectResourceTimings();
			rememberSnapshot({
				scripts: collectScriptSources(node),
				stylesheets: collectStylesheetSources(node),
				links: collectLinkTags(node),
				resources,
				requests: resources.map((resource) => ({ url: resource.url, type: resource.initiatorType })),
				scriptContents: collectScriptContents(node),
				stylesheetContents: collectStylesheetContents(node),
				meta: collectMetaTags(node),
			});
		}
	}

	function scanCurrentDocument(): void {
		const resources = collectResourceTimings();
		rememberSnapshot({
			scripts: collectScriptSources(document),
			stylesheets: collectStylesheetSources(document),
			links: collectLinkTags(document),
			resources,
			requests: resources.map((resource) => ({ url: resource.url, type: resource.initiatorType })),
			scriptContents: collectScriptContents(document),
			stylesheetContents: collectStylesheetContents(document),
			meta: collectMetaTags(document),
		});
		lastScannedAt = Date.now();
	}

	function flushPendingMutations(): void {
		clearThrottleTimer();

		if (pendingFullDocumentScan) {
			scanCurrentDocument();
		} else {
			for (const node of pendingNodes) {
				scanNode(node);
			}
		}

		clearPendingMutations();
		lastScannedAt = Date.now();

		if (activeSession && sessionStatus !== 'stopped') {
			sessionStatus = 'observing';
		}
	}

	function scheduleThrottledFlush(): void {
		if (throttleTimer !== undefined) {
			return;
		}

		throttleTimer = setTimeout(() => {
			flushPendingMutations();
		}, options.throttleMs);
	}

	function queueMutationNode(node: Node): void {
		if (pendingFullDocumentScan || !nodeMayContainSignal(node)) {
			return;
		}

		if (pendingNodes.size >= maxPendingMutationNodes()) {
			pendingNodes.clear();
			pendingFullDocumentScan = true;
			return;
		}

		pendingNodes.add(node);
	}

	function snapshotMeta(): Record<string, string[]> {
		return Object.fromEntries(
			[...metaEntries.entries()].map(([key, values]) => [
				key,
				[...values].slice(0, SOURCE_LIMITS.metaValuesPerKey),
			]),
		);
	}

	function observationState(): ObservationSessionState {
		return {
			sessionId: activeSession?.sessionId,
			expectedUrl: activeSession?.expectedUrl,
			status: sessionStatus,
			throttleMs: options.throttleMs,
			startedAt: activeSession?.startedAt,
			expiresAt: activeSession?.expiresAt,
			lastObservedAt,
			lastScannedAt,
			pendingMutationCount,
			stopReason,
		};
	}

	const observer = new MutationObserver((mutations) => {
		if (!activeSession) {
			return;
		}

		let hasRelevantMutation = false;

		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				for (const node of mutation.addedNodes) {
					const before = pendingNodes.size;
					const neededFullScan = pendingFullDocumentScan;
					queueMutationNode(node);
					hasRelevantMutation ||= pendingNodes.size > before || pendingFullDocumentScan !== neededFullScan;
				}

				continue;
			}

			if (mutation.type === 'attributes' && isSignalElement(mutation.target)) {
				queueMutationNode(mutation.target);
				hasRelevantMutation = true;
			}
		}

		if (!hasRelevantMutation) {
			return;
		}

		lastObservedAt = Date.now();
		pendingMutationCount += mutations.length;
		if (sessionStatus !== 'dirty') {
			logObserverEvent('session-dirty', {
				sessionId: activeSession.sessionId,
				pendingMutationCount,
				mutationBatchSize: mutations.length,
			});
		}
		sessionStatus = 'dirty';

		if (activeSession.maxMutations > 0 && pendingMutationCount >= activeSession.maxMutations) {
			logObserverEvent('session-max-mutations-reached', {
				sessionId: activeSession.sessionId,
				pendingMutationCount,
				maxMutations: activeSession.maxMutations,
			});
			stopObservationSessionWithReason('expired');
			return;
		}

		scheduleThrottledFlush();
	});

	function beginObservationSession(
		input: BeginObservationSessionInput,
	): ObservationSessionState {
		observer.disconnect();
		stopResourceObserver();
		clearThrottleTimer();
		clearPendingMutations();
		observationBatchController.reset();

		const startedAt = Date.now();
		activeSession = {
			sessionId: input.sessionId,
			expectedUrl: input.expectedUrl,
			startedAt,
			expiresAt: startedAt + input.durationMs,
			maxPendingNodes: input.maxPendingNodes,
			maxMutations: input.maxMutations,
		};
		lastObservedAt = undefined;
		lastScannedAt = undefined;
		stopReason = undefined;
		sessionStatus = 'observing';

		observer.observe(document, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ['src', 'href', 'rel', 'name', 'property', 'http-equiv', 'content'],
		});
		startResourceObserver();
		rememberResourceTimings();

		return observationState();
	}

	return {
		snapshot() {
			stopIfDocumentChanged();
			flushPendingMutations();
			scanCurrentDocument();

			if (activeSession && sessionStatus !== 'stopped') {
				sessionStatus = 'observing';
			}

			return {
				scripts: [...scripts].slice(0, SOURCE_LIMITS.scriptSrc),
				stylesheets: [...stylesheets].slice(0, SOURCE_LIMITS.stylesheetHref),
				links: [...linkEntries.values()].slice(0, SOURCE_LIMITS.linkTags),
				resources: [...resourceEntries.values()].slice(0, SOURCE_LIMITS.resourceUrls),
				requests: [...requestEntries.values()].slice(0, SOURCE_LIMITS.requestUrls),
				scriptContents: [...scriptContents].slice(0, SOURCE_LIMITS.scriptContentItems),
				stylesheetContents: [...stylesheetContents].slice(0, SOURCE_LIMITS.stylesheetContentItems),
				meta: snapshotMeta(),
			};
		},

		flushObservationBatch() {
			stopIfDocumentChanged();
			if (activeSession && sessionStatus !== 'stopped') flushPendingMutations();

			const session = observationState();
			const target = currentObservationTarget();
			const batch = target && session.status !== 'stopped'
				? observationBatchController.flush({ target, observedAt: Date.now() })
				: null;

			return {
				...(batch ? { batch } : {}),
				stats: observationBatchController.stats(),
				session,
			};
		},

		beginObservationSession,

		stopObservationSession(reason = 'manual') {
			return stopObservationSessionWithReason(reason);
		},

		status() {
			stopIfDocumentChanged();
			return observationState();
		},

		disconnect(reason = 'invalidated') {
			stopObservationSessionWithReason(reason);
		},
	};
}

function nodeMayContainSignal(node: Node): boolean {
	if (isSignalElement(node)) {
		return true;
	}

	if (node instanceof Element || node instanceof DocumentFragment || node instanceof Document) {
		return node.querySelector('script,link,meta,style') !== null;
	}

	return false;
}

function isSignalElement(
	node: Node,
): node is HTMLScriptElement | HTMLStyleElement | HTMLLinkElement | HTMLMetaElement {
	return (
		node instanceof HTMLScriptElement ||
		node instanceof HTMLStyleElement ||
		node instanceof HTMLLinkElement ||
		node instanceof HTMLMetaElement
	);
}
