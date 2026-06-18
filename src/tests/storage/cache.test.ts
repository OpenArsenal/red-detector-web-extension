import { fc, test } from '@fast-check/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.setConfig({ testTimeout: 20_000 });

import {
	STORAGE_LIMITS,
	getAnalysisCacheKey,
	getReplayTraceCacheKey,
	getReplayTraceHistoryCacheKey,
} from '../../lib/storage/contracts';
import { makeAnalysis, makeDetectionReplayTrace } from '../support/factories';
import { createMockBrowserStorageArea } from '../support/mock-browser';

async function loadStorageHarness() {
	vi.resetModules();
	const { local, values } = createMockBrowserStorageArea();

	vi.doMock('wxt/browser', () => ({
		browser: {
			storage: {
				local,
			},
		},
	}));

	const storage = await import('../../lib/storage');
	return { ...storage, local, values };
}

afterEach(() => {
	vi.useRealTimers();
	vi.doUnmock('wxt/browser');
	vi.resetModules();
});

describe.sequential('analysis cache baseline', () => {
	it('builds cache keys from origins instead of full paths', () => {
		expect(getAnalysisCacheKey('https://example.com/products')).toBe(
			'analysis:https://example.com',
		);
		expect(getAnalysisCacheKey('https://example.com:8443/products')).toBe(
			'analysis:https://example.com:8443',
		);
		expect(getReplayTraceCacheKey('https://example.com/products')).toBe(
			'replay:https://example.com',
		);
		expect(getReplayTraceHistoryCacheKey('https://example.com/products')).toBe(
			'replay-history:https://example.com',
		);
	});

	it('returns cached analysis for a different URL on the same origin', async () => {
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis([], {
			url: 'https://example.com/products',
			analyzedAt: Date.now(),
		}));
		const cached = await storage.getCachedAnalysis('https://example.com/pricing?tab=plans');

		expect(cached).toMatchObject({
			url: 'https://example.com/products',
			source: 'cache',
		});
	});

	it('keeps scheme and port inside the origin cache key', async () => {
		const storage = await loadStorageHarness();
		const analyzedAt = Date.now();

		await storage.saveAnalysis(makeAnalysis([], { url: 'https://example.com/products', analyzedAt }));
		await storage.saveAnalysis(makeAnalysis([], { url: 'http://example.com/products', analyzedAt }));
		await storage.saveAnalysis(makeAnalysis([], { url: 'https://example.com:8443/products', analyzedAt }));

		await expect(storage.getCachedAnalysis('https://example.com/other')).resolves.toMatchObject({
			url: 'https://example.com/products',
		});
		await expect(storage.getCachedAnalysis('http://example.com/other')).resolves.toMatchObject({
			url: 'http://example.com/products',
		});
		await expect(storage.getCachedAnalysis('https://example.com:8443/other')).resolves.toMatchObject({
			url: 'https://example.com:8443/products',
		});
	});

	const pathSegment = fc.array(fc.constantFrom('a', 'b', 'c', '0', '1', '-', '_'), {
		minLength: 0,
		maxLength: 12,
	}).map((chars) => chars.join(''));
	const path = fc.array(pathSegment, { minLength: 0, maxLength: 4 })
		.map((segments) => `/${segments.join('/')}`);

	test.prop([path, path], { numRuns: 50 })(
		'preserves same-origin cache lookup across path variants',
		async (savedPath, lookupPath) => {
			const storage = await loadStorageHarness();
			const analyzedAt = Date.now();
			const savedUrl = `https://example.com${savedPath}`;
			const lookupUrl = `https://example.com${lookupPath}`;

			await storage.saveAnalysis(makeAnalysis([], { url: savedUrl, analyzedAt }));
			const cached = await storage.getCachedAnalysis(lookupUrl);

			expect(cached).toMatchObject({
				url: savedUrl,
				source: 'cache',
			});
		},
	);

	it('removes expired analysis records instead of returning stale cache output', async () => {
		vi.useFakeTimers({ now: 1_700_000_000_000 });
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis([], { url: 'https://example.com/products' }));
		await storage.saveReplayTrace(makeDetectionReplayTrace());
		vi.setSystemTime(1_700_000_000_000 + STORAGE_LIMITS.analysisTtlMs + 1);
		const cached = await storage.getCachedAnalysis('https://example.com/products');

		expect(cached).toBeNull();
		expect(storage.local.remove).toHaveBeenCalledWith([
			'analysis:https://example.com',
			'replay:https://example.com',
			'replay-history:https://example.com',
		]);
	});

	it('returns cached replay traces for a different URL on the same origin', async () => {
		const storage = await loadStorageHarness();
		const trace = makeDetectionReplayTrace({
			target: {
				url: 'https://example.com/products',
				hostname: 'example.com',
			},
			analyzedAt: Date.now(),
		});

		await storage.saveReplayTrace(trace);
		const cached = await storage.getCachedReplayTrace('https://example.com/pricing');

		expect(cached).toMatchObject({
			target: {
				url: 'https://example.com/products',
			},
			completedMode: 'event',
		});
		expect(cached).not.toBe(trace);
	});


	it('keeps bounded replay history for the active origin', async () => {
		vi.useFakeTimers({ now: 1_700_000_000_010 });
		const storage = await loadStorageHarness();
		const firstTrace = makeDetectionReplayTrace({ analyzedAt: 1_700_000_000_001, resultCount: 1 });
		const secondTrace = makeDetectionReplayTrace({ analyzedAt: 1_700_000_000_002, resultCount: 2 });

		await storage.saveReplayTrace(firstTrace);
		await storage.saveReplayTrace(secondTrace);
		const history = await storage.getCachedReplayTraceHistory('https://example.com/pricing');

		expect(history.map((trace) => trace.resultCount)).toEqual([2, 1]);
		expect(history[0]).not.toBe(secondTrace);
	});

	it('removes expired replay history records without returning stale runs', async () => {
		vi.useFakeTimers({ now: 1_700_000_000_000 });
		const storage = await loadStorageHarness();

		await storage.saveReplayTrace(makeDetectionReplayTrace({ analyzedAt: 1_700_000_000_000 }));
		vi.setSystemTime(1_700_000_000_000 + STORAGE_LIMITS.replayTraceTtlMs + 1);
		const history = await storage.getCachedReplayTraceHistory('https://example.com/products');

		expect(history).toEqual([]);
		expect(storage.local.remove).toHaveBeenCalledWith('replay-history:https://example.com');
	});

	it('removes expired replay traces without removing fresh analysis records', async () => {
		vi.useFakeTimers({ now: 1_700_000_000_000 });
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis([], { analyzedAt: 1_700_000_000_000 }));
		await storage.saveReplayTrace(makeDetectionReplayTrace({ analyzedAt: 1_700_000_000_000 }));
		vi.setSystemTime(1_700_000_000_000 + STORAGE_LIMITS.replayTraceTtlMs + 1);
		const cachedTrace = await storage.getCachedReplayTrace('https://example.com/products');

		expect(cachedTrace).toBeNull();
		expect(storage.local.remove).toHaveBeenCalledWith('replay:https://example.com');
		expect(storage.values.has('analysis:https://example.com')).toBe(true);
	});
});
