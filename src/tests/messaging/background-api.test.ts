import { afterEach, describe, expect, it, vi } from 'vitest';

import type { PageSignals, SiteAnalysis } from '../../lib/detection/types';
import type { ContentApi } from '../../lib/messaging';
import type { PageSignalPollingState } from '../../lib/content/observed-page-signals';
import { CONTENT_SCRIPT_TIMEOUT_MS } from '../../lib/messaging/rpc';
import { ok, type AppResult } from '../../lib/shared/result';

vi.setConfig({ testTimeout: 20_000 });

type TestTab = {
	id?: number;
	url?: string;
};

const HTTP_TAB: TestTab = {
	id: 7,
	url: 'https://example.com/products',
};

function canInspectUrl(tab: { url?: string }): boolean {
	if (!tab.url) return false;
	try {
		const protocol = new URL(tab.url).protocol;
		return protocol === 'http:' || protocol === 'https:';
	} catch {
		return false;
	}
}

function makeSignals(overrides: Partial<PageSignals> = {}): PageSignals {
	return {
		url: 'https://example.com/products',
		hostname: 'example.com',
		html: '<html><head></head><body></body></html>',
		text: '',
		scripts: [],
		stylesheets: [],
		links: [],
		resources: [],
		requests: [],
		scriptContents: [],
		stylesheetContents: [],
		cookies: {},
		headers: {},
		meta: {},
		dom: { selectors: {} },
		storage: { localStorage: {}, sessionStorage: {} },
		jsGlobals: {},
		robotsTxt: '',
		dnsRecords: {},
		certIssuer: '',
		probeResults: [],
		collectedAt: 1_700_000_000_000,
		...overrides,
	};
}

function makeAnalysis(signals = makeSignals()): SiteAnalysis {
	return {
		url: signals.url,
		hostname: signals.hostname,
		analyzedAt: signals.collectedAt,
		source: 'fresh',
		results: [],
		errors: [],
	};
}

async function loadBackgroundApi(input: {
	tab?: TestTab | null;
	contentApi?: Partial<ContentApi>;
	cachedAnalysis?: SiteAnalysis | null;
}) {
	vi.resetModules();
	vi.stubGlobal('defineBackground', (setup: () => void) => setup);

	const pollingState: PageSignalPollingState = {
		status: 'idle',
		throttleMs: 1_500,
		pendingMutationCount: 0,
	};
	const observingState: PageSignalPollingState = {
		...pollingState,
		sessionId: 'session-1',
		expectedUrl: HTTP_TAB.url!,
		status: 'observing',
		startedAt: 1_700_000_000_000,
		expiresAt: 1_700_000_060_000,
	};
	const stoppedState: PageSignalPollingState = {
		...pollingState,
		status: 'stopped',
	};

	const contentApi = {
		collectPageSignals: vi.fn(async () => ok(makeSignals())),
		beginObservationSession: vi.fn(async () => ok(observingState)),
		stopObservationSession: vi.fn(async () => ok(stoppedState)),
		getObservationSessionState: vi.fn(async () => ok(pollingState)),
		...input.contentApi,
	} satisfies ContentApi;

	vi.doMock('wxt/browser', () => ({
		browser: {
			scripting: {
				executeScript: vi.fn(async () => [{ frameId: 0, result: undefined }]),
			},
		},
	}));

	vi.doMock('comctx', () => ({
		defineProxy: vi.fn((_factory: unknown, options?: { namespace?: string }) => {
			if (options?.namespace === 'red-detector.content-rpc.v1') {
				return [vi.fn(), vi.fn(() => contentApi)];
			}

			return [vi.fn()];
		}),
	}));

	vi.doMock('../../lib/browser/active-tab', () => ({
		getActiveTab: vi.fn(async () => input.tab ?? null),
		canInspectTab: canInspectUrl,
	}));

	vi.doMock('../../lib/detection/engine', () => ({
		analyzeSite: vi.fn((signals: PageSignals) => makeAnalysis(signals)),
	}));

	vi.doMock('../../lib/messaging', () => ({
		BACKGROUND_RPC_NAMESPACE: 'red-detector.background-rpc.v1',
		CONTENT_RPC_NAMESPACE: 'red-detector.content-rpc.v1',
		createBackgroundServerAdapter: vi.fn(() => ({})),
		createContentClientAdapter: vi.fn(() => ({})),
	}));

	vi.doMock('../../lib/storage', () => ({
		getCachedAnalysis: vi.fn(async () => input.cachedAnalysis ?? null),
		getStatus: vi.fn(async () => ({ totalAnalyses: 0, trackedOrigins: 0 })),
		saveAnalysis: vi.fn(async (analysis: SiteAnalysis) => analysis),
	}));

	const background = await import('../../entrypoints/background');
	return background.createBackgroundApi();
}

afterEach(() => {
	vi.useRealTimers();
	vi.unstubAllGlobals();
	vi.doUnmock('comctx');
	vi.doUnmock('wxt/browser');
	vi.doUnmock('../../lib/browser/active-tab');
	vi.doUnmock('../../lib/detection/engine');
	vi.doUnmock('../../lib/messaging');
	vi.doUnmock('../../lib/storage');
	vi.resetModules();
});

describe.sequential('background analyzeActiveTab messaging hardening', () => {
	it('returns NO_ACTIVE_TAB when there is no selected tab', async () => {
		const api = await loadBackgroundApi({ tab: null });

		await expect(
			api.analyzeActiveTab({ mode: 'cache-first', observe: 'while-popup-open' }),
		).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'NO_ACTIVE_TAB',
			},
		});
	});

	it('returns UNSUPPORTED_URL before contacting the content script', async () => {
		const collectPageSignals = vi.fn(async () => ok(makeSignals()));
		const api = await loadBackgroundApi({
			tab: { id: 7, url: 'chrome://extensions' },
			contentApi: { collectPageSignals },
		});

		await expect(
			api.analyzeActiveTab({ mode: 'cache-first', observe: 'while-popup-open' }),
		).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'UNSUPPORTED_URL',
			},
		});
		expect(collectPageSignals).not.toHaveBeenCalled();
	});

	it('returns CONTENT_SCRIPT_UNAVAILABLE when content-script RPC rejects', async () => {
		const api = await loadBackgroundApi({
			tab: HTTP_TAB,
			contentApi: {
				collectPageSignals: vi.fn(async () => {
					throw new Error('Could not establish connection. Receiving end does not exist.');
				}),
			},
		});

		await expect(
			api.analyzeActiveTab({ mode: 'refresh', observe: 'while-popup-open' }),
		).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'CONTENT_SCRIPT_UNAVAILABLE',
				message: 'Could not establish connection. Receiving end does not exist.',
			},
		});
	});

	it('returns CONTENT_SCRIPT_UNAVAILABLE when content-script RPC times out', async () => {
		vi.useFakeTimers();
		const api = await loadBackgroundApi({
			tab: HTTP_TAB,
			contentApi: {
				collectPageSignals: vi.fn(() => new Promise<AppResult<PageSignals>>(() => undefined)),
			},
		});

		const result = api.analyzeActiveTab({ mode: 'refresh', observe: 'while-popup-open' });
		await vi.advanceTimersByTimeAsync(CONTENT_SCRIPT_TIMEOUT_MS);

		await expect(result).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'CONTENT_SCRIPT_UNAVAILABLE',
				message: 'Content script did not respond before the messaging timeout.',
			},
		});
	});

	it('returns cached analysis without contacting the content script in cache-first mode', async () => {
		const collectPageSignals = vi.fn(async () => ok(makeSignals()));
		const cachedAnalysis = { ...makeAnalysis(), source: 'cache' as const };
		const api = await loadBackgroundApi({
			tab: HTTP_TAB,
			cachedAnalysis,
			contentApi: { collectPageSignals },
		});

		await expect(
			api.analyzeActiveTab({ mode: 'cache-first', observe: 'while-popup-open' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				analysis: {
					source: 'cache',
				},
				cache: {
					status: 'hit',
				},
				session: undefined,
			},
		});

		expect(collectPageSignals).not.toHaveBeenCalled();
	});

	it('starts an observation session after a fresh refresh analysis', async () => {
		const api = await loadBackgroundApi({ tab: HTTP_TAB });

		await expect(
			api.analyzeActiveTab({ mode: 'refresh', observe: 'while-popup-open' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				analysis: {
					source: 'fresh',
				},
				cache: {
					status: 'bypassed',
				},
				session: {
					status: 'observing',
				},
			},
		});
	});
});
