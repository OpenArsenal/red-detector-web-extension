import { describe, expect, it } from 'vitest';

import type { AnalyzeActiveTabInput, AnalyzeActiveTabOutput } from '../../lib/contracts/analysis';
import {
	ANALYSIS_CACHE_STATUSES,
	ANALYSIS_MODES,
	OBSERVATION_MODES,
} from '../../lib/contracts/analysis';

describe('active-tab analysis contract', () => {
	it('keeps request modes and observation values stable', () => {
		expect(ANALYSIS_MODES).toEqual(['cache-first', 'refresh']);
		expect(OBSERVATION_MODES).toEqual(['none', 'while-popup-open', 'bounded']);
		expect(ANALYSIS_CACHE_STATUSES).toEqual(['hit', 'miss', 'bypassed']);
	});

	it('keeps the popup analysis response JSON-safe', () => {
		const input: AnalyzeActiveTabInput = {
			mode: 'cache-first',
			observe: 'while-popup-open',
		};
		const output: AnalyzeActiveTabOutput = {
			analysis: {
				url: 'https://example.com/products',
				hostname: 'example.com',
				analyzedAt: 1_700_000_000_000,
				source: 'fresh',
				results: [],
				errors: [],
			},
			cache: {
				status: 'miss',
				key: 'analysis:https://example.com',
				expiresAt: 1_700_086_400_000,
			},
			session: {
				status: 'observing',
				throttleMs: 1_500,
				pendingMutationCount: 0,
				sessionId: 'session-1',
				expectedUrl: 'https://example.com/products',
			},
		};

		expect(input).toEqual({ mode: 'cache-first', observe: 'while-popup-open' });
		expect(JSON.parse(JSON.stringify(output))).toEqual(output);
	});
});
