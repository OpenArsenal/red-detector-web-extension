import { describe, expect, it } from 'vitest';

import { analyzeSite } from '../../lib/detection/engine';
import { estimateBytes, normalizeMetaMap, truncate } from '../../lib/detection/normalizers';
import { SOURCE_LIMITS, mvpTechnologies } from '../../lib/detection/rules';
import type { PageSignals, TechnologyDefinition } from '../../lib/detection/types';
import { validatePageSignals } from '../../lib/detection/validate';
import { extractVersion } from '../../lib/detection/version';

function createSignals(overrides: Partial<PageSignals> = {}): PageSignals {
	return {
		url: 'https://example.com',
		hostname: 'example.com',
		html: '',
		scripts: [],
		stylesheets: [],
		cookies: {},
		headers: {},
		meta: {},
		dom: { selectors: {} },
		jsGlobals: {},
		collectedAt: 1,
		...overrides,
	};
}

describe('detection helpers', () => {
	it('deduplicates and normalizes meta maps', () => {
		expect(
			normalizeMetaMap({
				'OG:Site_Name': ['Example App', 'Example App', ' Example App '],
			}),
		).toEqual({
			'og:site_name': ['Example App'],
		});
	});

	it('truncates strings to the requested bound', () => {
		expect(truncate('abcdef', 3)).toBe('abc');
		expect(truncate('abc', 3)).toBe('abc');
	});

	it('estimates signal size as a positive byte count', () => {
		expect(estimateBytes({ value: 'abc' })).toBeGreaterThan(0);
	});

	it('bounds normalized meta values', () => {
		const longValue = 'x'.repeat(SOURCE_LIMITS.metaValueChars + 50);
		expect(normalizeMetaMap({ generator: [longValue] }).generator[0]).toHaveLength(
			SOURCE_LIMITS.metaValueChars,
		);
	});

	it('rejects non-http signals', () => {
		expect(validatePageSignals(createSignals({ url: 'chrome://extensions' }))).toBe(
			'Invalid URL in page signals',
		);
	});

	it('accepts normal bounded page signals', () => {
		expect(
			validatePageSignals(
				createSignals({
					html: '<html></html>',
					scripts: ['https://cdn.example.com/app.js'],
				}),
			),
		).toBeNull();
	});

	it('rejects oversized meta signals', () => {
		expect(
			validatePageSignals(
				createSignals({
					meta: { generator: ['x'.repeat(SOURCE_LIMITS.metaValueChars + 1)] },
				}),
			),
		).toBe('Meta signal exceeded safe size bounds');
	});
});

describe('extractVersion', () => {
	it('applies capture-group templates', () => {
		const match = 'WordPress 6.5'.match(/WordPress\s*([\d.]+)/i);
		expect(match).toBeTruthy();
		expect(extractVersion('$1', match!)).toBe('6.5');
	});
});

describe('analyzeSite', () => {
	it('detects WordPress from html and meta generator', () => {
		const analysis = analyzeSite(
			createSignals({
				html: '<meta name="generator" content="WordPress 6.5"><link href="/wp-content/theme.css">',
				meta: { generator: ['WordPress 6.5'] },
			}),
			mvpTechnologies,
		);

		const wordpress = analysis.results.find((item) => item.technologyId === 'wordpress');
		expect(wordpress).toBeDefined();
		expect(wordpress?.version).toBe('6.5');
		expect(wordpress?.confidence.value).toBe(100);
	});

	it('detects Shopify from CDN signals', () => {
		const analysis = analyzeSite(
			createSignals({
				html: '<script src="https://cdn.shopify.com/s/files/theme.js"></script>',
				scripts: ['https://cdn.shopify.com/s/files/theme.js'],
			}),
			mvpTechnologies,
		);

		expect(analysis.results.some((item) => item.technologyId === 'shopify')).toBe(true);
	});

	it('detects React from script sources', () => {
		const analysis = analyzeSite(
			createSignals({
				scripts: ['https://cdn.example.com/react-dom.production.min.js'],
			}),
			mvpTechnologies,
		);

		expect(analysis.results.some((item) => item.technologyId === 'react')).toBe(true);
	});

	it('detects Google Analytics from gtag script sources', () => {
		const analysis = analyzeSite(
			createSignals({
				scripts: ['https://www.googletagmanager.com/gtag/js?id=G-123'],
			}),
			mvpTechnologies,
		);

		expect(analysis.results.some((item) => item.technologyId === 'google-analytics')).toBe(true);
	});

	it('filters detections below the display threshold', () => {
		const registry: TechnologyDefinition[] = [
			{
				id: 'weak-signal',
				name: 'Weak Signal',
				website: 'https://example.com',
				categories: ['unknown'],
				rules: [
					{
						kind: 'html',
						pattern: /weak/i,
						confidence: 40,
					},
				],
			},
		];

		const analysis = analyzeSite(createSignals({ html: 'weak' }), registry);
		expect(analysis.results).toHaveLength(0);
	});

	it('truncates matched evidence values', () => {
		const longMatch = `marker-${'x'.repeat(300)}`;
		const registry: TechnologyDefinition[] = [
			{
				id: 'long-evidence',
				name: 'Long Evidence',
				website: 'https://example.com',
				categories: ['unknown'],
				rules: [
					{
						kind: 'html',
						pattern: /marker-x+/i,
						confidence: 100,
					},
				],
			},
		];

		const analysis = analyzeSite(createSignals({ html: longMatch }), registry);
		expect(analysis.results[0]?.evidence[0]?.matchedValue?.length).toBeLessThanOrEqual(
			SOURCE_LIMITS.evidenceValueChars,
		);
	});

	it('returns normalized analysis output instead of raw page signals', () => {
		const analysis = analyzeSite(createSignals({ html: '<html></html>' }), mvpTechnologies);
		expect('html' in analysis).toBe(false);
		expect('scripts' in analysis).toBe(false);
	});
});
