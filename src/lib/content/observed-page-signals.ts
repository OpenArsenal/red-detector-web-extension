import { collectLinkTags, collectMetaTags, collectResourceTimings, collectScriptSources, collectStylesheetSources } from './collect-page-signals';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';

export type ObservedPageSignalsSnapshot = Pick<PageSignals, 'scripts' | 'stylesheets' | 'links' | 'resources' | 'requests' | 'meta'>;

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

export type BeginObservationSessionInput = {
	sessionId: string;
	expectedUrl: string;
	durationMs: number;
	maxPendingNodes: number;
	maxMutations: number;
};

export type ObservedPageSignals = {
	snapshot(): ObservedPageSignalsSnapshot;
	beginObservationSession(input: BeginObservationSessionInput): ObservationSessionState;
	stopObservationSession(reason?: ObservationStopReason): ObservationSessionState;
	status(): ObservationSessionState;
	disconnect(reason?: ObservationStopReason): void;
};

export type ObservedPageSignalsOptions = {
	throttleMs: number;
};

const MAX_PENDING_MUTATION_NODES = 100;
const OBSERVER_LOG_PREFIX = '[red-detector][content][observer]';

type ActiveObservationSession = {
	sessionId: string;
	expectedUrl: string;
	startedAt: number;
	expiresAt: number;
	maxPendingNodes: number;
	maxMutations: number;
};

function logObserverEvent(event: string, details?: Record<string, unknown>): void {
	if (details) {
		console.log(OBSERVER_LOG_PREFIX, event, details);
		return;
	}

	console.log(OBSERVER_LOG_PREFIX, event);
}

export function createObservedPageSignals(
	options: ObservedPageSignalsOptions,
): ObservedPageSignals {
	const scripts = new Set<string>();
	const stylesheets = new Set<string>();
	const metaEntries = new Map<string, Set<string>>();
	const linkEntries = new Map<string, PageSignals['links'][number]>();
	const resourceEntries = new Map<string, PageSignals['resources'][number]>();
	const requestEntries = new Map<string, PageSignals['requests'][number]>();
	const pendingNodes = new Set<Node>();
	let throttleTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
	let activeSession: ActiveObservationSession | undefined;
	let sessionStatus: ObservationSessionStatus = 'idle';
	let stopReason: ObservationStopReason | undefined;
	let lastObservedAt: number | undefined;
	let lastScannedAt: number | undefined;
	let pendingMutationCount = 0;
	let pendingFullDocumentScan = false;

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
		for (const source of snapshot.scripts) {
			scripts.add(source);
		}

		for (const href of snapshot.stylesheets) {
			stylesheets.add(href);
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
	}

	function scanNode(node: Node): void {
		if (node instanceof HTMLScriptElement) {
			rememberSnapshot({ scripts: collectScriptSources([node]), stylesheets: [], links: [], resources: [], requests: [], meta: {} });
			return;
		}

		if (node instanceof HTMLLinkElement) {
			rememberSnapshot({ scripts: [], stylesheets: collectStylesheetSources([node]), links: collectLinkTags([node]), resources: [], requests: [], meta: {} });
			return;
		}

		if (node instanceof HTMLMetaElement) {
			rememberSnapshot({ scripts: [], stylesheets: [], links: [], resources: [], requests: [], meta: collectMetaTags([node]) });
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
			observer.disconnect();
			clearThrottleTimer();
			clearPendingMutations();
			activeSession = undefined;
			sessionStatus = 'stopped';
			stopReason = 'expired';
			return;
		}

		scheduleThrottledFlush();
	});

	function beginObservationSession(
		input: BeginObservationSessionInput,
	): ObservationSessionState {
		observer.disconnect();
		clearThrottleTimer();
		clearPendingMutations();

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

		return observationState();
	}

	return {
		snapshot() {
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
				meta: snapshotMeta(),
			};
		},

		beginObservationSession,

		stopObservationSession(reason = 'manual') {
			observer.disconnect();
			clearThrottleTimer();
			clearPendingMutations();
			activeSession = undefined;
			sessionStatus = 'stopped';
			stopReason = reason;
			return observationState();
		},

		status() {
			return observationState();
		},

		disconnect(reason = 'invalidated') {
			observer.disconnect();
			clearThrottleTimer();
			clearPendingMutations();
			activeSession = undefined;
			sessionStatus = 'stopped';
			stopReason = reason;
		},
	};
}

function nodeMayContainSignal(node: Node): boolean {
	if (isSignalElement(node)) {
		return true;
	}

	if (node instanceof Element || node instanceof DocumentFragment || node instanceof Document) {
		return node.querySelector('script,link,meta') !== null;
	}

	return false;
}

function isSignalElement(node: Node): node is HTMLScriptElement | HTMLLinkElement | HTMLMetaElement {
	return (
		node instanceof HTMLScriptElement ||
		node instanceof HTMLLinkElement ||
		node instanceof HTMLMetaElement
	);
}
