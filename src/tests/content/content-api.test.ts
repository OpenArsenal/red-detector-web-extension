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

function makeFlushOutput(session = makeState()) {
	return {
		stats: {
			queuedCount: 0,
			acceptedCount: 0,
			duplicateDropCount: 0,
			queueLimitDropCount: 0,
			stormLimitDropCount: 0,
			acceptedInStormWindow: 0,
		},
		session,
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
			flushObservationBatch: vi.fn(() => makeFlushOutput(observing)),
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

	it('flushes queued observation batches through the content API', async () => {
		const { createContentApi } = await loadContentApiFactory();
		const session = makeState({ status: 'observing', sessionId: 'session-1' });
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => session),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped' })),
			flushObservationBatch: vi.fn(() => makeFlushOutput(session)),
			status: vi.fn(() => session),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		await expect(createContentApi(observedSignals).flushObservationBatch()).resolves.toEqual({ ok: true, value: makeFlushOutput(session) });
		expect(observedSignals.flushObservationBatch).toHaveBeenCalledOnce();
	});

	it('expires observation through the same stop path used by manual stops', async () => {
		vi.useFakeTimers();
		const { createContentApi } = await loadContentApiFactory();
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => makeState({ status: 'observing' })),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped', stopReason: 'expired' })),
			flushObservationBatch: vi.fn(),
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
			flushObservationBatch: vi.fn(),
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

	it('disposes invalidated runtimes without reporting a manual stop', async () => {
		vi.useFakeTimers();
		const { createContentRuntime } = await loadContentApiFactory();
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => makeState({ status: 'observing' })),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped', stopReason: 'manual' })),
			flushObservationBatch: vi.fn(),
			status: vi.fn(() => makeState()),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		const runtime = createContentRuntime(observedSignals);
		await runtime.contentApi.beginObservationSession({
			sessionId: 'session-1',
			expectedUrl: 'https://example.com/products',
			policy: {
				durationMs: 25,
				throttleMs: 1_500,
				maxPendingNodes: 100,
				maxMutations: 5_000,
			},
		});
		runtime.dispose('invalidated');
		await vi.advanceTimersByTimeAsync(25);

		expect(observedSignals.disconnect).toHaveBeenCalledWith('invalidated');
		expect(observedSignals.stopObservationSession).not.toHaveBeenCalled();
	});

	it('flushes queued observation batches through the content API', async () => {
		const { createContentApi } = await loadContentApiFactory();
		const session = makeState({ status: 'observing', sessionId: 'session-1' });
		const observedSignals = {
			snapshot: vi.fn(),
			beginObservationSession: vi.fn(() => session),
			stopObservationSession: vi.fn(() => makeState({ status: 'stopped' })),
			flushObservationBatch: vi.fn(() => makeFlushOutput(session)),
			status: vi.fn(() => session),
			disconnect: vi.fn(),
		} satisfies ObservedPageSignals;

		await expect(createContentApi(observedSignals).flushObservationBatch()).resolves.toEqual({ ok: true, value: makeFlushOutput(session) });
		expect(observedSignals.flushObservationBatch).toHaveBeenCalledOnce();
	});

});
