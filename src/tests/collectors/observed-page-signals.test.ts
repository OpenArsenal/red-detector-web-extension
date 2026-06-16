import { afterEach, describe, expect, it, vi } from 'vitest';

import { createObservedPageSignals } from '../../lib/content/observed-page-signals';

function makeScript(input: { src?: string; text?: string }): HTMLScriptElement {
	return {
		src: input.src ?? '',
		textContent: input.text ?? '',
		getAttribute(name: string) {
			return name === 'src' ? input.src ?? null : null;
		},
	} as HTMLScriptElement;
}

function makeStylesheetLink(href: string): HTMLLinkElement {
	return {
		href,
		rel: 'stylesheet',
		type: '',
		as: '',
		media: '',
		hreflang: '',
		crossOrigin: '',
		relList: {
			contains(value: string) {
				return value === 'stylesheet';
			},
		},
		getAttribute(name: string) {
			if (name === 'href') return href;
			if (name === 'rel') return 'stylesheet';
			return null;
		},
	} as HTMLLinkElement;
}

function makeMeta(name: string, content: string): HTMLMetaElement {
	return {
		getAttribute(attribute: string) {
			if (attribute === 'name') return name;
			if (attribute === 'content') return content;
			return null;
		},
	} as HTMLMetaElement;
}

function makeStyle(text: string): HTMLStyleElement {
	return {
		textContent: text,
	} as HTMLStyleElement;
}

function makeDocument(): Document {
	const scripts = [
		makeScript({ src: '/assets/app.js' }),
		makeScript({ text: 'window.__HYDRATED__ = true' }),
	];
	const links = [makeStylesheetLink('/assets/app.css')];
	const styles = [makeStyle('.button { display: inline-flex; }')];
	const metas = [makeMeta('generator', 'Astro')];

	return {
		styleSheets: [],
		querySelectorAll(selector: string) {
			if (selector === 'script') return scripts;
			if (selector === 'link[rel~="stylesheet"]') return links;
			if (selector === 'link[href]') return links;
			if (selector === 'style') return styles;
			if (selector === 'meta') return metas;
			return [];
		},
	} as unknown as Document;
}

class FakeMutationObserver {
	observe = vi.fn();
	disconnect = vi.fn();

	constructor(readonly callback: MutationCallback) {}
}

afterEach(() => {
	vi.unstubAllGlobals();
});

describe('observed page signals', () => {
	it('starts and stops an observation session with the configured limits', () => {
		vi.stubGlobal('document', makeDocument());
		vi.stubGlobal('location', { href: 'https://example.com/products' });
		vi.stubGlobal('MutationObserver', FakeMutationObserver);
		vi.stubGlobal('PerformanceObserver', undefined);
		vi.stubGlobal('performance', {
			getEntriesByType: vi.fn(() => []),
		});

		const observedSignals = createObservedPageSignals({ throttleMs: 25 });
		const active = observedSignals.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			durationMs: 1_000,
			maxPendingNodes: 10,
			maxMutations: 100,
		});
		const stopped = observedSignals.stopObservationSession('manual');

		expect(active).toMatchObject({
			sessionId: 'session-1',
			status: 'observing',
			throttleMs: 25,
		});
		expect(stopped).toMatchObject({
			status: 'stopped',
			stopReason: 'manual',
		});
	});


	it('stops an active session when the document URL changes', () => {
		vi.stubGlobal('document', makeDocument());
		vi.stubGlobal('location', { href: 'https://example.com/products' });
		vi.stubGlobal('MutationObserver', FakeMutationObserver);
		vi.stubGlobal('PerformanceObserver', undefined);
		vi.stubGlobal('performance', {
			getEntriesByType: vi.fn(() => []),
		});

		const observedSignals = createObservedPageSignals({ throttleMs: 25 });
		observedSignals.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			durationMs: 1_000,
			maxPendingNodes: 10,
			maxMutations: 100,
		});
		vi.stubGlobal('location', { href: 'https://example.com/pricing' });

		expect(observedSignals.status()).toMatchObject({
			status: 'stopped',
			stopReason: 'navigation',
		});
	});

	it('returns a current document snapshot in the same shape used by collectPageSignals', () => {
		vi.stubGlobal('document', makeDocument());
		vi.stubGlobal('location', { href: 'https://example.com/products' });
		vi.stubGlobal('MutationObserver', FakeMutationObserver);
		vi.stubGlobal('PerformanceObserver', undefined);
		vi.stubGlobal('performance', {
			getEntriesByType: vi.fn(() => [
				{ name: 'https://example.com/assets/app.js', initiatorType: 'script' },
			]),
		});

		const observedSignals = createObservedPageSignals({ throttleMs: 25 });
		observedSignals.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			durationMs: 1_000,
			maxPendingNodes: 10,
			maxMutations: 100,
		});

		expect(observedSignals.snapshot()).toMatchObject({
			scripts: ['https://example.com/assets/app.js'],
			stylesheets: ['https://example.com/assets/app.css'],
			resources: [
				{
					url: 'https://example.com/assets/app.js',
					initiatorType: 'script',
				},
			],
			requests: [
				{
					url: 'https://example.com/assets/app.js',
					type: 'script',
				},
			],
			scriptContents: ['window.__HYDRATED__ = true'],
			stylesheetContents: ['.button { display: inline-flex; }'],
			meta: { generator: ['Astro'] },
		});
	});
});
