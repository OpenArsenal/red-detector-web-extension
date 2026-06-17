import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('wxt/browser', () => ({
	browser: {
		scripting: {
			executeScript: vi.fn(async () => [{ frameId: 0, result: { React: 'function' } }]),
		},
	},
}));

vi.mock('../../lib/detection/rules', () => ({
	SOURCE_LIMITS: {
		scriptContentItems: 5,
		stylesheetContentItems: 5,
		scriptContentChars: 1_000,
		stylesheetContentChars: 1_000,
		scriptContentTotalChars: 2_000,
		stylesheetContentTotalChars: 2_000,
		jsGlobalValueChars: 500,
		headers: 10,
		headerValueChars: 1_000,
	},
}));

import { browser } from 'wxt/browser';
import { collectBackgroundObservationBatch } from '../../lib/collectors/background-signals';
import type { CollectionPlan } from '../../lib/collectors/planning';
import type { ObservationBatch } from '../../lib/observations';

const TARGET = {
	url: 'https://example.com/products',
	hostname: 'example.com',
};

const COLLECTION_PLAN: CollectionPlan = {
	selectorProbeList: [],
	htmlProbeList: [],
	jsGlobalPropertyList: ['React'],
};

function makeBatch(): ObservationBatch {
	return {
		target: TARGET,
		interface: 'extension',
		observedAt: 1_700_000_000_000,
		observations: [
			{
				kind: 'scriptSrc',
				interface: 'extension',
				collector: 'content-snapshot',
				target: TARGET,
				observedAt: 1_700_000_000_000,
				value: 'https://example.com/assets/app.js',
			},
			{
				kind: 'stylesheetHref',
				interface: 'extension',
				collector: 'content-snapshot',
				target: TARGET,
				observedAt: 1_700_000_000_000,
				value: 'https://example.com/assets/app.css',
			},
		],
	};
}

afterEach(() => {
	vi.unstubAllGlobals();
	vi.clearAllMocks();
});

describe('background observation enrichment', () => {
	it('appends page globals, headers, and same-origin source text to event batches', async () => {
		vi.stubGlobal('fetch', vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
			const requestUrl = String(url);
			if (init?.method === 'HEAD') {
				return new Response('', {
					status: 200,
					headers: { 'x-powered-by': 'Next.js' },
				});
			}
			if (requestUrl.endsWith('/assets/app.js')) {
				return new Response('window.__NEXT_DATA__ = {};', { status: 200 });
			}
			if (requestUrl.endsWith('/assets/app.css')) {
				return new Response(':root { --brand: red; }', { status: 200 });
			}

			return new Response('', { status: 404 });
		}));

		const enriched = await collectBackgroundObservationBatch({
			tabId: 7,
			batch: makeBatch(),
			collectionPlan: COLLECTION_PLAN,
		});

		expect(browser.scripting.executeScript).toHaveBeenCalledOnce();
		expect(enriched.observations).toEqual(expect.arrayContaining([
			expect.objectContaining({
				kind: 'header',
				collector: 'background-enrichment',
				key: 'x-powered-by',
				value: 'Next.js',
			}),
			expect.objectContaining({
				kind: 'jsGlobal',
				collector: 'page-main-world',
				key: 'React',
				value: 'function',
			}),
			expect.objectContaining({
				kind: 'scriptContent',
				collector: 'background-enrichment',
				value: 'window.__NEXT_DATA__ = {};',
			}),
			expect.objectContaining({
				kind: 'stylesheetContent',
				collector: 'background-enrichment',
				value: ':root { --brand: red; }',
			}),
		]));
	});
});
