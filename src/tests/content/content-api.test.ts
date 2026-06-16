import { afterEach, describe, expect, it, vi } from 'vitest';

import type {
	ObservedPageSignals,
	ObservationSessionState,
} from '../../lib/content/observed-page-signals';

function makeState(overrides: Partial<ObservationSessionState> = {}): ObservationSessionState {
	return {
		status: 'idle',
		throttleMs: 1_500,
		pendingMutationCount: 0,
		...overrides,
	};
}

async function loadContentApiFactory() {
	vi.resetModules();
	vi.stubGlobal('defineContentScript', (options: unknown) => options);
	vi.doMock('../../lib/content/collect-page-signals', () => ({
		collectPageSignals: vi.fn(),
	}));
	vi.doMock('../../lib/content/observed-page-signals', () => ({
		createObservedPageSignals: vi.fn(),
	}));
	vi.doMock('../../lib/detection/validate', () => ({
		validatePageSignals: vi.fn(() => null),
	}));
	vi.doMock('comctx', () => ({
		defineProxy: vi.fn(() => [vi.fn()]),
	}));

	return await import('../../entrypoints/content');
}

afterEach(() => {
	vi.useRealTimers();
	vi.unstubAllGlobals();
	vi.doUnmock('../../lib/content/collect-page-signals');
	vi.doUnmock('../../lib/content/observed-page-signals');
	vi.doUnmock('../../lib/detection/validate');
	vi.doUnmock('comctx');
	vi.resetModules();
});

describe.sequential('content API observation baseline', () => {
	it('starts observation through the observed-signal store and reports the session', async () => {
		vi.useFakeTimers();
		const { createContentApi } = await loadContentApiFactory();
		const observing = makeState({
			status: 'observing',
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			startedAt: 1_700_000_000_000,
			expiresAt: 1_700_000_060_000,
		});
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => observing),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped', stopReason: 'manual' })),
			status: vi.fn(() => makeState()),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		const api = createContentApi(observedSignals);

		await expect(api.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			policy: {
				durationMs: 60_000,
				throttleMs: 1_500,
				maxPendingNodes: 100,
				maxMutations: 5_000,
			},
		})).resolves.toEqual({ ok: true, value: observing });
		expect(observedSignals.beginObservationSession).toHaveBeenCalledWith({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			durationMs: 60_000,
			maxPendingNodes: 100,
			maxMutations: 5_000,
		});

		await api.stopObservationSession();
		expect(observedSignals.stopObservationSession).toHaveBeenCalledWith('manual');
	});

	it('expires observation through the same stop path used by manual stops', async () => {
		vi.useFakeTimers();
		const { createContentApi } = await loadContentApiFactory();
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => makeState({ status: 'observing' })),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped', stopReason: 'expired' })),
			status: vi.fn(() => makeState()),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		const api = createContentApi(observedSignals);
		await api.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			policy: {
				durationMs: 25,
				throttleMs: 1_500,
				maxPendingNodes: 100,
				maxMutations: 5_000,
			},
		});

		await vi.advanceTimersByTimeAsync(25);

		expect(observedSignals.stopObservationSession).toHaveBeenCalledWith('expired');
	});

	it('clears the expiry timer when observation is stopped manually', async () => {
		vi.useFakeTimers();
		const { createContentApi } = await loadContentApiFactory();
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => makeState({ status: 'observing' })),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped', stopReason: 'manual' })),
			status: vi.fn(() => makeState()),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		const api = createContentApi(observedSignals);
		await api.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			policy: {
				durationMs: 25,
				throttleMs: 1_500,
				maxPendingNodes: 100,
				maxMutations: 5_000,
			},
		});
		await api.stopObservationSession();
		await vi.advanceTimersByTimeAsync(25);

		expect(observedSignals.stopObservationSession).toHaveBeenCalledOnce();
		expect(observedSignals.stopObservationSession).toHaveBeenCalledWith('manual');
	});
});
