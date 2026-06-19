import { describe, expect, it } from 'vitest';

import {
	buildPopupAnalysisUpdate,
	buildPopupExplanationLookup,
	formatPopupAppError,
	getPopupObservationLabel,
	getPopupObservationModeFromAnalysis,
	getPopupObservationModeFromSession,
	groupDetectionsByPrimaryCategory,
	shouldPollPopupObservation,
	shouldRefreshObservedChange,
} from '../../lib/popup/view-model';
import {
	makeAnalysis,
	makeAnalyzeActiveTabOutput,
	makeDetection,
	makeObservationSession,
} from '../support/factories';

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
		const response = makeAnalyzeActiveTabOutput({
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
		expect(getPopupObservationModeFromSession(makeObservationSession('observing'))).toBe('active');
		expect(getPopupObservationModeFromSession(makeObservationSession('dirty'))).toBe('active');
		expect(shouldPollPopupObservation('active')).toBe(true);
		expect(getPopupObservationLabel('active')).toBe('Observing');
	});

	it('maps stopped sessions to stopped popup controls', () => {
		expect(getPopupObservationModeFromSession(makeObservationSession('stopped'))).toBe('stopped');
		expect(shouldPollPopupObservation('stopped')).toBe(false);
		expect(getPopupObservationLabel('stopped')).toBe('Stopped');
	});

	it('builds a manual refresh notice while preserving active observation state', () => {
		const response = makeAnalyzeActiveTabOutput({
			analysis: makeAnalysis([makeDetection('react')]),
			session: makeObservationSession('observing'),
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


	it('keeps polling while deep evidence is pending without an active observer', () => {
		const response = makeAnalyzeActiveTabOutput({
			analysis: makeAnalysis([makeDetection('nextjs')]),
			cache: {
				status: 'hit',
				key: 'analysis:https://example.com',
			},
			enrichment: { status: 'pending' },
		});

		const update = buildPopupAnalysisUpdate({
			previousAnalysis: null,
			response,
			source: 'initial',
		});

		expect(update).toMatchObject({
			observationMode: 'idle',
			shouldPoll: true,
			notice: {
				variant: 'warning',
				text: 'Detected 1 technologies for example.com. Still checking deeper evidence.',
			},
		});
	});

	it('marks newly added automatic observation detections without duplicating previous late ids', () => {
		const previousAnalysis = makeAnalysis([makeDetection('react')]);
		const response = makeAnalyzeActiveTabOutput({
			analysis: makeAnalysis([makeDetection('react'), makeDetection('shopify', ['platform-cms-builder'])]),
			session: makeObservationSession('dirty'),
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
			session: { ...makeObservationSession('dirty'), lastObservedAt: 1_700_000_000_001 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(true);
		expect(shouldRefreshObservedChange({
			session: { ...makeObservationSession('observing'), lastObservedAt: 1_700_000_000_001 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(true);
		expect(shouldRefreshObservedChange({
			session: { ...makeObservationSession('observing'), lastObservedAt: 1_699_999_999_999 },
			analysis: makeAnalysis([], { analyzedAt: 1_700_000_000_000 }),
		})).toBe(false);
	});

	it('maps replay explanations into popup summaries keyed by technology id', () => {
		const lookup = buildPopupExplanationLookup({
			schemaVersion: 1,
			target: { url: 'https://example.com/products', hostname: 'example.com' },
			requestedMode: 'event',
			completedMode: 'event',
			analyzedAt: 1_700_000_000_000,
			resultCount: 1,
			events: [],
			explanations: [{
				technologyId: 'react',
				name: 'React',
				categories: ['ui-library'],
				confidence: { value: 95, level: 'certain' },
				inferred: false,
				evidenceCount: 2,
				directEvidenceCount: 2,
				relationshipEvidenceCount: 0,
				reasons: ['Matched scriptSrc evidence', 'Selected version 18.3.1'],
				evidence: [
					{ kind: 'scriptSrc', confidence: 95, direct: true, matchedValue: 'react.js' },
				],
				warnings: [],
			}],
		});

		expect(lookup.react).toMatchObject({
			headline: 'Matched 2 direct signals.',
			primaryEvidenceKind: 'scriptSrc',
			reasons: ['Matched scriptSrc evidence', 'Selected version 18.3.1'],
			evidence: [{ kind: 'scriptSrc', direct: true, matchedValue: 'react.js' }],
		});
	});

	it('formats application errors for popup recovery UI', () => {
		expect(formatPopupAppError({
			code: 'UNSUPPORTED_URL',
			message: 'Detection only works on normal http/https pages.',
		})).toBe('UNSUPPORTED_URL: Detection only works on normal http/https pages.');
	});
});
