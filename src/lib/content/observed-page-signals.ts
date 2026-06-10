import { collectMetaTags, collectScriptSources, collectStylesheetSources } from './collect-page-signals';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';

export type ObservedPageSignalsSnapshot = Pick<PageSignals, 'scripts' | 'stylesheets' | 'meta'>;

export type ObservedPageSignals = {
	snapshot(): ObservedPageSignalsSnapshot;
	waitForSettledChanges(): Promise<void>;
	disconnect(): void;
};

export type ObservedPageSignalsOptions = {
	debounceMs: number;
	maxWaitMs: number;
};

export function createObservedPageSignals(
	options: ObservedPageSignalsOptions,
): ObservedPageSignals {
	const scripts = new Set<string>();
	const stylesheets = new Set<string>();
	const metaEntries = new Map<string, Set<string>>();
	let settleTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
	let maxWaitTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
	let settlePromise: Promise<void> | undefined;
	let resolveSettle: (() => void) | undefined;

	function clearSettleTimer(): void {
		if (settleTimer !== undefined) {
			clearTimeout(settleTimer);
			settleTimer = undefined;
		}
	}

	function clearMaxWaitTimer(): void {
		if (maxWaitTimer !== undefined) {
			clearTimeout(maxWaitTimer);
			maxWaitTimer = undefined;
		}
	}

	function settle(): void {
		if (!settlePromise) {
			return;
		}

		const currentResolve = resolveSettle;
		settlePromise = undefined;
		resolveSettle = undefined;
		clearSettleTimer();
		clearMaxWaitTimer();
		currentResolve?.();
	}

	function ensureSettlePromise(): Promise<void> {
		if (settlePromise) {
			return settlePromise;
		}

		settlePromise = new Promise<void>((nextResolve) => {
			resolveSettle = nextResolve;
		});

		maxWaitTimer = setTimeout(() => {
			settle();
		}, options.maxWaitMs);
		return settlePromise;
	}

	function markMutationActivity(): void {
		ensureSettlePromise();
		clearSettleTimer();
		settleTimer = setTimeout(() => {
			settle();
		}, options.debounceMs);
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
	}

	function snapshotMeta(): Record<string, string[]> {
		return Object.fromEntries(
			[...metaEntries.entries()].map(([key, values]) => [
				key,
				[...values].slice(0, SOURCE_LIMITS.metaValuesPerKey),
			]),
		);
	}

	scanCurrentDocument();

	const observer = new MutationObserver((mutations) => {
		markMutationActivity();

		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				for (const node of mutation.addedNodes) {
					scanNode(node);
				}

				for (const node of mutation.removedNodes) {
					scanNode(node);
				}

				continue;
			}

			if (mutation.type === 'attributes') {
				scanNode(mutation.target);
			}
		}
	});

	observer.observe(document, {
		subtree: true,
		childList: true,
		attributes: true,
		attributeFilter: ['src', 'href', 'rel', 'name', 'property', 'http-equiv', 'content'],
	});

	return {
		snapshot() {
			scanCurrentDocument();
			return {
				scripts: [...scripts].slice(0, SOURCE_LIMITS.scriptSrc),
				stylesheets: [...stylesheets].slice(0, SOURCE_LIMITS.stylesheetHref),
				meta: snapshotMeta(),
			};
		},

		async waitForSettledChanges() {
			if (!settlePromise) {
				return;
			}

			await settlePromise;
			scanCurrentDocument();
		},

		disconnect() {
			observer.disconnect();
			settle();
		},
	};
}