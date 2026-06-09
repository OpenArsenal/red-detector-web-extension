import { describe, expect, it } from 'vitest';

import { estimateBytes, normalizeMetaMap, truncate } from '../../lib/detection/normalizers';
import { validateExtractedPayload } from '../../lib/detection/validate';
import type { ExtractedPagePayload } from '../../lib/detection/types';

function createPayload(overrides: Partial<ExtractedPagePayload> = {}): ExtractedPagePayload {
	return {
		url: 'https://example.com',
		title: 'Example',
		meta: {},
		scriptSrc: [],
		collectedSources: ['url', 'title', 'meta', 'script_src'],
		capturedAt: 1,
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

	it('estimates payload size as a positive byte count', () => {
		expect(estimateBytes({ value: 'abc' })).toBeGreaterThan(0);
	});

	it('rejects non-http payloads', () => {
		expect(validateExtractedPayload(createPayload({ url: 'chrome://extensions' }))).toBe(
			'Invalid URL in extraction payload',
		);
	});

	it('accepts a normal bounded payload', () => {
		expect(
			validateExtractedPayload(
				createPayload({
					text: 'hello world',
					scriptSrc: ['https://cdn.example.com/app.js'],
					collectedSources: ['url', 'title', 'meta', 'script_src', 'text'],
				}),
			),
		).toBeNull();
	});
});
