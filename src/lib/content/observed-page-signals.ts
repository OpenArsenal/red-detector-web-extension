import { collectMetaTags, collectScriptSources, collectStylesheetSources } from './collect-page-signals';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';

export type ObservedPageSignalsSnapshot = Pick<PageSignals, 'scripts' | 'stylesheets' | 'meta'>;

export type PageSignalPollingState = {
	isPolling: boolean;
	throttleMs: number;
	lastObservedAt?: number;
	lastScannedAt?: number;
	pendingMutationCount: number;
};

export type ObservedPageSignals = {
	snapshot(): ObservedPageSignalsSnapshot;
	startPolling(): PageSignalPollingState;
	stopPolling(): PageSignalPollingState;
	status(): PageSignalPollingState;
	disconnect(): void;
};

export type ObservedPageSignalsOptions = {
	throttleMs: number;
};

const MAX_PENDING_MUTATION_NODES = 100;

export function createObservedPageSignals(
	options: ObservedPageSignalsOptions,
): ObservedPageSignals {
	const scripts = new Set<string>();
	const stylesheets = new Set<string>();
	const metaEntries = new Map<string, Set<string>>();
	const pendingNodes = new Set<Node>();
	let throttleTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
	let isPolling = false;
	let lastObservedAt: number | undefined;
	let lastScannedAt: number | undefined;
	let pendingMutationCount = 0;
	let pendingFullDocumentScan = false;

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

		rememberMeta(snapshot.meta);
	}

	function scanNode(node: Node): void {
		if (node instanceof HTMLScriptElement) {
			rememberSnapshot({ scripts: collectScriptSources([node]), stylesheets: [], meta: {} });
			return;
		}

		if (node instanceof HTMLLinkElement) {
			rememberSnapshot({ scripts: [], stylesheets: collectStylesheetSources([node]), meta: {} });
			return;
		}

		if (node instanceof HTMLMetaElement) {
			rememberSnapshot({ scripts: [], stylesheets: [], meta: collectMetaTags([node]) });
			return;
		}

		if (node instanceof Element || node instanceof DocumentFragment || node instanceof Document) {
			rememberSnapshot({
				scripts: collectScriptSources(node),
				stylesheets: collectStylesheetSources(node),
				meta: collectMetaTags(node),
			});
		}
	}

	function scanCurrentDocument(): void {
		rememberSnapshot({
			scripts: collectScriptSources(document),
			stylesheets: collectStylesheetSources(document),
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

		pendingNodes.clear();
		pendingFullDocumentScan = false;
		pendingMutationCount = 0;
		lastScannedAt = Date.now();
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

		if (pendingNodes.size >= MAX_PENDING_MUTATION_NODES) {
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

	function pollingState(): PageSignalPollingState {
		return {
			isPolling,
			throttleMs: options.throttleMs,
			lastObservedAt,
			lastScannedAt,
			pendingMutationCount,
		};
	}

	const observer = new MutationObserver((mutations) => {
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
		scheduleThrottledFlush();
	});

	function startPolling(): PageSignalPollingState {
		if (!isPolling) {
			observer.observe(document, {
				subtree: true,
				childList: true,
				attributes: true,
				attributeFilter: ['src', 'href', 'rel', 'name', 'property', 'http-equiv', 'content'],
			});
			isPolling = true;
		}

		return pollingState();
	}

	return {
		snapshot() {
			flushPendingMutations();
			scanCurrentDocument();
			return {
				scripts: [...scripts].slice(0, SOURCE_LIMITS.scriptSrc),
				stylesheets: [...stylesheets].slice(0, SOURCE_LIMITS.stylesheetHref),
				meta: snapshotMeta(),
			};
		},

		startPolling,

		stopPolling() {
			observer.disconnect();
			isPolling = false;
			flushPendingMutations();
			return pollingState();
		},

		status() {
			return pollingState();
		},

		disconnect() {
			observer.disconnect();
			isPolling = false;
			flushPendingMutations();
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
