import { fc, test } from '@fast-check/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { SiteAnalysis } from '../../lib/detection/types';
import { STORAGE_LIMITS } from '../../lib/storage/contracts';

function makeAnalysis(url: string, analyzedAt = 1_700_000_000_000): SiteAnalysis {
	return {
		url,
		hostname: new URL(url).hostname,
		analyzedAt,
		source: 'fresh',
		results: [],
		errors: [],
	};
}

async function loadStorageHarness() {
	vi.resetModules();
	const values = new Map<string, unknown>();
	const local = {
		get: vi.fn(async (key: string | string[] | null) => {
			if (key === null) {
				return Object.fromEntries(values.entries());
			}

			if (Array.isArray(key)) {
				return Object.fromEntries(
					key.map((item) => [item, values.get(item)]),
				);
			}

			return { [key]: values.get(key) };
		}),
		set: vi.fn(async (items: Record<string, unknown>) => {
			for (const [key, value] of Object.entries(items)) {
				values.set(key, value);
			}
		}),
		remove: vi.fn(async (key: string | string[]) => {
			for (const item of Array.isArray(key) ? key : [key]) {
				values.delete(item);
			}
		}),
	};

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
	it('returns cached analysis for a different URL on the same origin', async () => {
		vi.useFakeTimers();
		vi.setSystemTime(1_700_000_000_000);
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis('https://example.com/products'));
		const cached = await storage.getCachedAnalysis('https://example.com/pricing?tab=plans');

		expect(cached).toMatchObject({
			url: 'https://example.com/products',
			source: 'cache',
		});
	});

	it('keeps scheme and port inside the origin cache key', async () => {
		vi.useFakeTimers();
		vi.setSystemTime(1_700_000_000_000);
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis('https://example.com/products'));
		await storage.saveAnalysis(makeAnalysis('http://example.com/products'));
		await storage.saveAnalysis(makeAnalysis('https://example.com:8443/products'));

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
			vi.useFakeTimers();
			vi.setSystemTime(1_700_000_000_000);
			const storage = await loadStorageHarness();
			const savedUrl = `https://example.com${savedPath}`;
			const lookupUrl = `https://example.com${lookupPath}`;

			await storage.saveAnalysis(makeAnalysis(savedUrl));
			const cached = await storage.getCachedAnalysis(lookupUrl);

			expect(cached).toMatchObject({
				url: savedUrl,
				source: 'cache',
			});
		},
	);

	it('removes expired analysis records instead of returning stale cache output', async () => {
		vi.useFakeTimers();
		vi.setSystemTime(1_700_000_000_000);
		const storage = await loadStorageHarness();

		await storage.saveAnalysis(makeAnalysis('https://example.com/products'));
		vi.setSystemTime(1_700_000_000_000 + STORAGE_LIMITS.analysisTtlMs + 1);
		const cached = await storage.getCachedAnalysis('https://example.com/products');

		expect(cached).toBeNull();
		expect(storage.local.remove).toHaveBeenCalledWith('analysis:https://example.com');
	});
});
