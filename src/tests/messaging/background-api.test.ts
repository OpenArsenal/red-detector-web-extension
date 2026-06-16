import { afterEach, describe, expect, it, vi } from 'vitest';

import type { PageSignalPollingState } from '../../lib/content/observed-page-signals';
import type { PageSignals, SiteAnalysis } from '../../lib/detection/types';
import type { ContentApi } from '../../lib/messaging';
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

const SOURCE_LIMITS_STUB = {
	htmlChars: 200_000,
	textChars: 80_000,
	scriptSrc: 300,
	stylesheetHref: 300,
	resourceUrls: 500,
	requestUrls: 500,
	linkTags: 200,
	storageKeys: 200,
	scriptContentItems: 200,
	stylesheetContentItems: 200,
	scriptContentChars: 40_000,
	stylesheetContentChars: 40_000,
	scriptContentTotalChars: 320_000,
	stylesheetContentTotalChars: 240_000,
	jsGlobals: 6_000,
	jsGlobalValueChars: 500,
	robotsTxtChars: 40_000,
	headers: 80,
	headerValueChars: 1_000,
	probeResults: 50,
	metaValueChars: 500,
	metaValuesPerKey: 5,
	cookieNames: 200,
	evidenceValueChars: 160,
} as const;

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
	return (await loadBackgroundApiHarness(input)).api;
}

async function loadBackgroundApiHarness(input: {
	tab?: TestTab | null;
	contentApi?: Partial<ContentApi>;
	cachedAnalysis?: SiteAnalysis | null;
}) {
	vi.resetModules();
	vi.stubGlobal('defineBackground', (setup: () => void) => setup);
	vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 204 })));
	vi.doMock('../../data/technologies', () => ({
		technologies: [],
	}));
	vi.doMock('../../lib/detection/rules', () => ({
		SOURCE_LIMITS: SOURCE_LIMITS_STUB,
	}));

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

	const executeScript = vi.fn(async () => [{ frameId: 0, result: undefined }]);
	vi.doMock('wxt/browser', () => ({
		browser: {
			scripting: {
				executeScript,
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

	const analyzeSite = vi.fn((signals: PageSignals) => makeAnalysis(signals));
	vi.doMock('../../lib/detection/engine', () => ({
		analyzeSite,
	}));

	const listTechnologies = vi.fn(() => []);
	vi.doMock('../../lib/detection/registry-provider', () => ({
		bundledTechnologyRegistryProvider: { listTechnologies },
	}));

	vi.doMock('../../lib/messaging', () => ({
		BACKGROUND_RPC_NAMESPACE: 'red-detector.background-rpc.v1',
		CONTENT_RPC_NAMESPACE: 'red-detector.content-rpc.v1',
		createBackgroundServerAdapter: vi.fn(() => ({})),
		createContentClientAdapter: vi.fn(() => ({})),
	}));

	const getCachedAnalysis = vi.fn(async () => input.cachedAnalysis ?? null);
	const getStatus = vi.fn(async () => ({ totalAnalyses: 0, trackedOrigins: 0 }));
	const saveAnalysis = vi.fn(async (analysis: SiteAnalysis) => analysis);
	vi.doMock('../../lib/storage', () => ({
		getCachedAnalysis,
		getStatus,
		saveAnalysis,
	}));

	const background = await import('../../entrypoints/background');
	return {
		api: background.createBackgroundApi(),
		contentApi,
		mocks: {
			analyzeSite,
			executeScript,
			getCachedAnalysis,
			getStatus,
			listTechnologies,
			saveAnalysis,
		},
	};
}

afterEach(() => {
	vi.useRealTimers();
	vi.unstubAllGlobals();
	vi.doUnmock('comctx');
	vi.doUnmock('wxt/browser');
	vi.doUnmock('../../data/technologies');
	vi.doUnmock('../../lib/browser/active-tab');
	vi.doUnmock('../../lib/detection/engine');
	vi.doUnmock('../../lib/detection/registry-provider');
	vi.doUnmock('../../lib/detection/rules');
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

	it('returns a fresh cache-miss analysis and persists normalized output', async () => {
		const harness = await loadBackgroundApiHarness({ tab: HTTP_TAB });

		await expect(
			harness.api.analyzeActiveTab({ mode: 'cache-first', observe: 'none' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				analysis: {
					source: 'fresh',
				},
				cache: {
					status: 'miss',
					key: 'analysis:https://example.com',
				},
				session: undefined,
			},
		});

		expect(harness.mocks.getCachedAnalysis).toHaveBeenCalledWith(HTTP_TAB.url);
		expect(harness.contentApi.collectPageSignals).toHaveBeenCalledOnce();
		expect(harness.mocks.listTechnologies).toHaveBeenCalledOnce();
		expect(harness.mocks.analyzeSite).toHaveBeenCalledOnce();
		expect(harness.mocks.saveAnalysis).toHaveBeenCalledWith(expect.objectContaining({ source: 'fresh' }));
		expect(harness.mocks.saveAnalysis).toHaveBeenCalledOnce();
		expect(harness.contentApi.beginObservationSession).not.toHaveBeenCalled();
	});

	it('bypasses cached analysis when refresh mode is requested', async () => {
		const harness = await loadBackgroundApiHarness({
			tab: HTTP_TAB,
			cachedAnalysis: { ...makeAnalysis(), source: 'cache' as const },
		});

		await expect(
			harness.api.analyzeActiveTab({ mode: 'refresh', observe: 'none' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				analysis: {
					source: 'fresh',
				},
				cache: {
					status: 'bypassed',
				},
			},
		});

		expect(harness.mocks.getCachedAnalysis).not.toHaveBeenCalled();
		expect(harness.contentApi.collectPageSignals).toHaveBeenCalledOnce();
		expect(harness.mocks.saveAnalysis).toHaveBeenCalledOnce();
	});

	it('routes fresh analysis through the event pipeline when requested', async () => {
		const harness = await loadBackgroundApiHarness({ tab: HTTP_TAB });

		await expect(
			harness.api.analyzeActiveTab({ mode: 'refresh', observe: 'none', pipeline: 'event' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				analysis: {
					url: HTTP_TAB.url,
					hostname: 'example.com',
					source: 'fresh',
					results: [],
				},
				cache: {
					status: 'bypassed',
					key: 'analysis:https://example.com',
				},
				session: undefined,
			},
		});

		expect(harness.contentApi.collectPageSignals).toHaveBeenCalledOnce();
		expect(harness.mocks.analyzeSite).not.toHaveBeenCalled();
		expect(harness.mocks.saveAnalysis).toHaveBeenCalledWith(expect.objectContaining({
			url: HTTP_TAB.url,
			hostname: 'example.com',
			source: 'fresh',
			results: [],
		}));
		expect(harness.contentApi.beginObservationSession).not.toHaveBeenCalled();
	});

	it('returns VALIDATION_ERROR when collected signals belong to a different document', async () => {
		const harness = await loadBackgroundApiHarness({
			tab: HTTP_TAB,
			contentApi: {
				collectPageSignals: vi.fn(async () => ok(makeSignals({
					url: 'https://other.example/products',
					hostname: 'other.example',
				}))),
			},
		});

		await expect(
			harness.api.analyzeActiveTab({ mode: 'refresh', observe: 'none' }),
		).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'VALIDATION_ERROR',
			},
		});

		expect(harness.mocks.analyzeSite).not.toHaveBeenCalled();
		expect(harness.mocks.saveAnalysis).not.toHaveBeenCalled();
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

	it('currently treats bounded observation as a fresh observation request', async () => {
		const harness = await loadBackgroundApiHarness({ tab: HTTP_TAB });

		await expect(
			harness.api.analyzeActiveTab({ mode: 'refresh', observe: 'bounded' }),
		).resolves.toMatchObject({
			ok: true,
			value: {
				cache: {
					status: 'bypassed',
				},
				session: {
					status: 'observing',
				},
			},
		});

		expect(harness.contentApi.beginObservationSession).toHaveBeenCalledOnce();
	});
});

describe.sequential('background observation session baseline', () => {
	it('refreshes active dirty observation sessions with a fresh analysis', async () => {
		const harness = await loadBackgroundApiHarness({
			tab: HTTP_TAB,
			contentApi: {
				getObservationSessionState: vi.fn(async () => ok({
					status: 'dirty',
					throttleMs: 1_500,
					pendingMutationCount: 2,
					sessionId: 'session-1',
					expectedUrl: HTTP_TAB.url!,
				})),
			},
		});

		await expect(harness.api.refreshActiveObservationSession()).resolves.toMatchObject({
			ok: true,
			value: {
				cache: {
					status: 'bypassed',
				},
				session: {
					status: 'observing',
				},
			},
		});

		expect(harness.contentApi.collectPageSignals).toHaveBeenCalledOnce();
		expect(harness.contentApi.beginObservationSession).toHaveBeenCalledOnce();
	});


	it('rejects observation refresh when the session belongs to a previous page path', async () => {
		const harness = await loadBackgroundApiHarness({
			tab: { id: 7, url: 'https://example.com/pricing' },
			contentApi: {
				getObservationSessionState: vi.fn(async () => ok({
					status: 'dirty',
					throttleMs: 1_500,
					pendingMutationCount: 2,
					sessionId: 'session-1',
					expectedUrl: 'https://example.com/products',
				})),
			},
		});

		await expect(harness.api.refreshActiveObservationSession()).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'OBSERVATION_SESSION_UNAVAILABLE',
				message: 'The active tab navigated away from the observed document.',
			},
		});

		expect(harness.contentApi.collectPageSignals).not.toHaveBeenCalled();
		expect(harness.contentApi.beginObservationSession).not.toHaveBeenCalled();
	});

	it('rejects observation refresh when the current tab has no active session', async () => {
		const harness = await loadBackgroundApiHarness({ tab: HTTP_TAB });

		await expect(harness.api.refreshActiveObservationSession()).resolves.toMatchObject({
			ok: false,
			error: {
				code: 'OBSERVATION_SESSION_UNAVAILABLE',
			},
		});

		expect(harness.contentApi.collectPageSignals).not.toHaveBeenCalled();
		expect(harness.mocks.saveAnalysis).not.toHaveBeenCalled();
	});

	it('forwards stop requests to the active tab content script', async () => {
		const harness = await loadBackgroundApiHarness({ tab: HTTP_TAB });

		await expect(harness.api.stopActiveObservationSession()).resolves.toMatchObject({
			ok: true,
			value: {
				status: 'stopped',
			},
		});

		expect(harness.contentApi.stopObservationSession).toHaveBeenCalledOnce();
	});
});
