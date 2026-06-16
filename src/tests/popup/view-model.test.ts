import { describe, expect, it } from 'vitest';

import type { ObservationSessionState } from '../../lib/content/observed-page-signals';
import type { AnalyzeActiveTabOutput } from '../../lib/contracts/analysis';
import type { CategoryId, ConfidenceScore, DetectionResult, SiteAnalysis } from '../../lib/detection/types';
import {
	buildPopupAnalysisUpdate,
	formatPopupAppError,
	getPopupObservationLabel,
	getPopupObservationModeFromAnalysis,
	getPopupObservationModeFromSession,
	groupDetectionsByPrimaryCategory,
	shouldPollPopupObservation,
	shouldRefreshObservedChange,
} from '../../lib/popup/view-model';

const HIGH_CONFIDENCE: ConfidenceScore = { value: 95, level: 'certain' };

function makeDetection(
	technologyId: string,
	categories: CategoryId[] = ['framework'],
): DetectionResult {
	return {
		technologyId,
		name: technologyId,
		website: `https://${technologyId}.example`,
		categories,
		confidence: HIGH_CONFIDENCE,
		evidence: [],
	};
}

function makeAnalysis(
	results: DetectionResult[] = [],
	overrides: Partial<SiteAnalysis> = {},
): SiteAnalysis {
	return {
		url: 'https://example.com/products',
		hostname: 'example.com',
		analyzedAt: 1_700_000_000_000,
		source: 'fresh',
		results,
		errors: [],
		...overrides,
	};
}

function makeSession(status: ObservationSessionState['status']): ObservationSessionState {
	return {
		sessionId: 'session-1',
		expectedUrl: 'https://example.com/products',
		status,
		throttleMs: 1_500,
		startedAt: 1_700_000_000_000,
		expiresAt: 1_700_000_060_000,
		pendingMutationCount: 0,
	};
}

function makeResponse(
	overrides: Partial<AnalyzeActiveTabOutput> = {},
): AnalyzeActiveTabOutput {
	return {
		analysis: makeAnalysis(),
		cache: {
			status: 'miss',
			key: 'analysis:https://example.com',
			expiresAt: 1_700_086_400_000,
		},
		...overrides,
	};
}

describe('popup view model', () => {
	it('groups detections by their first category and keeps category priority order', () => {
		const groups = groupDetectionsByPrimaryCategory([
			makeDetection('ga', ['analytics']),
			makeDetection('react', ['framework']),
			makeDetection('unknown-tech', []),
		]);

		expect(groups.map((group) => group.category)).toEqual([
			'framework',
			'analytics',
			'unknown',
		]);
		expect(groups[0]).toMatchObject({ label: 'Framework', results: [{ technologyId: 'react' }] });
	});

	it('maps cache hits without an active session to idle state', () => {
		const response = makeResponse({
			cache: {
				status: 'hit',
				key: 'analysis:https://example.com',
			},
		});

		expect(getPopupObservationModeFromAnalysis(response)).toBe('idle');
		expect(shouldPollPopupObservation('idle')).toBe(false);
		expect(getPopupObservationLabel('idle')).toBe('Idle');
	});

	it('maps observing and dirty sessions to active popup polling', () => {
		expect(getPopupObservationModeFromSession(makeSession('observing'))).toBe('active');
		expect(getPopupObservationModeFromSession(makeSession('dirty'))).toBe('active');
		expect(shouldPollPopupObservation('active')).toBe(true);
		expect(getPopupObservationLabel('active')).toBe('Observing');
	});

	it('maps stopped sessions to stopped popup controls', () => {
		expect(getPopupObservationModeFromSession(makeSession('stopped'))).toBe('stopped');
		expect(shouldPollPopupObservation('stopped')).toBe(false);
		expect(getPopupObservationLabel('stopped')).toBe('Stopped');
	});

	it('builds a manual refresh notice while preserving active observation state', () => {
		const response = makeResponse({
			analysis: makeAnalysis([makeDetection('react')]),
			session: makeSession('observing'),
		});

		const update = buildPopupAnalysisUpdate({
			previousAnalysis: null,
			response,
			source: 'manual',
			resetLateMarkers: true,
		});

		expect(update).toMatchObject({
			observationMode: 'active',
			shouldPoll: true,
			lateDetectionIds: [],
			notice: {
				variant: 'success',
				text: 'Refreshed 1 technologies for example.com. Observation is active again.',
			},
		});
	});

	it('marks newly added automatic observation detections without duplicating previous late ids', () => {
		const previousAnalysis = makeAnalysis([makeDetection('react')]);
		const response = makeResponse({
			analysis: makeAnalysis([makeDetection('react'), makeDetection('shopify', ['platform-cms-builder'])]),
			session: makeSession('dirty'),
		});

		const update = buildPopupAnalysisUpdate({
			previousAnalysis,
			response,
			source: 'auto',
			currentLateDetectionIds: ['shopify'],
		});

		expect(update.addedDetectionIds).toEqual(['shopify']);
		expect(update.lateDetectionIds).toEqual(['shopify']);
		expect(update.notice?.text).toBe('Observation found 1 new late detection on example.com.');
	});

	it('refreshes observed changes when the session is dirty or newer than analysis', () => {
		expect(shouldRefreshObservedChange({
			session: { ...makeSession('dirty'), lastObservedAt: 1_700_000_000_001 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(true);
		expect(shouldRefreshObservedChange({
			session: { ...makeSession('observing'), lastObservedAt: 1_700_000_000_001 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(true);
		expect(shouldRefreshObservedChange({
			session: { ...makeSession('observing'), lastObservedAt: 1_699_999_999_999 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(false);
	});

	it('formats application errors for popup recovery UI', () => {
		expect(formatPopupAppError({
			code: 'UNSUPPORTED_URL',
			message: 'Detection only works on normal http/https pages.',
		})).toBe('UNSUPPORTED_URL: Detection only works on normal http/https pages.');
	});
});
