import { defineProxy } from 'comctx';

import { technologies } from '../data/technologies';
import { getActiveTab, canInspectTab } from '../lib/browser/active-tab';
import { analyzeSite } from '../lib/detection/engine';

import type { PageSignalPollingState } from '../lib/content/observed-page-signals';
import type {
	PageSignals,
	SiteAnalysis,
	TechnologyDefinition,
} from '../lib/detection/types';
import { validatePageSignals } from '../lib/detection/validate';

import type { BackgroundApi, ContentApi } from '../lib/messaging';
import {
	CONTENT_SCRIPT_TIMEOUT_MS,
	contentScriptFailure,
	withTimeout,
} from '../lib/messaging/rpc';
import {
	BACKGROUND_RPC_NAMESPACE,
	CONTENT_RPC_NAMESPACE,
	createBackgroundServerAdapter,
	createContentClientAdapter,
} from '../lib/messaging';
import { errorResponse, ok, type AppResult } from '../lib/shared/result';
import { isSameDocumentUrl } from '../lib/shared/url';
import { getCachedAnalysis, getStatus, saveAnalysis } from '../lib/storage';

type InspectableTab = {
  id: number;
  url: string;
};

function createContentApiClient(tabId: number, frameId = 0): ContentApi {
  const [, injectContentApi] = defineProxy(() => ({}) as ContentApi, {
    namespace: CONTENT_RPC_NAMESPACE,
    heartbeatCheck: false,
    transfer: false,
  });

  return injectContentApi(createContentClientAdapter(tabId, frameId));
}

async function getInspectableActiveTab(): Promise<AppResult<InspectableTab>> {
  const tab = await getActiveTab();

  if (typeof tab?.id !== 'number' || !tab.url) {
    return errorResponse('NO_ACTIVE_TAB', 'No active tab found');
  }

  if (!canInspectTab(tab)) {
    return errorResponse(
      'UNSUPPORTED_URL',
      'Detection only works on normal http/https pages. Reload a website tab and try again.',
    );
  }

  return ok({ id: tab.id, url: tab.url });
}

/**
 * Ask the content script for bounded PageSignals and reject stale responses from
 * a different origin. Navigation can happen while the service worker is active.
 */
async function collectFromTab(
	tabId: number,
	expectedUrl: string,
	options: { restartPolling?: boolean } = {},
): Promise<AppResult<PageSignals>> {
	const contentApi = createContentApiClient(tabId, 0);

	try {
    if (options.restartPolling) {
      const pollingResponse = await withTimeout(
        contentApi.startPageSignalPolling(),
        CONTENT_SCRIPT_TIMEOUT_MS,
        'Content script did not respond before the messaging timeout.',
      );

      if (!pollingResponse.ok) {
        return pollingResponse;
      }
    }

		const response = await withTimeout(
			contentApi.collectPageSignals({
				includeHtml: true,
				selectorProbeList: buildSelectorProbeList(technologies),
				jsGlobalProbeList: buildJsGlobalProbeList(technologies),
			}),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (!response.ok) {
			return response;
		}

		const validationError = validatePageSignals(response.value);
		if (validationError) {
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
		}
    
		if (!isSameDocumentUrl(response.value.url, expectedUrl)) {
			return errorResponse(
				'VALIDATION_ERROR',
				`Collected page signals do not match the active tab URL. Expected ${expectedUrl}, got ${response.value.url}.`,
			);
		}

		return response;
  } catch (error) {
    return contentScriptFailure(error);
  }
}

async function callActiveTabPollingMethod(
  method: 'startPageSignalPolling' | 'stopPageSignalPolling' | 'getPageSignalPollingState',
): Promise<AppResult<PageSignalPollingState>> {
  const tabResponse = await getInspectableActiveTab();
  if (!tabResponse.ok) {
    return tabResponse;
  }

  const contentApi = createContentApiClient(tabResponse.value.id, 0);

  try {
    return await withTimeout(
      contentApi[method](),
      CONTENT_SCRIPT_TIMEOUT_MS,
      'Content script did not respond before the messaging timeout.',
    );
  } catch (error) {
    return contentScriptFailure(error);
  }
}

/** Debug output is intentionally summary-only; never log raw page signals. */
function logAnalysisSummary(analysis: SiteAnalysis) {
	console.log('[red-detector] analysis summary', {
		hostname: analysis.hostname,
		resultCount: analysis.results.length,
		technologyIds: analysis.results.map((result) => result.technologyId),
		analyzedAt: analysis.analyzedAt,
	});
}

/** Build the exact DOM selector probes needed by the active bundled rules. */
function buildSelectorProbeList(registry: TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules
					.filter((rule) => rule.kind === 'dom' && rule.selector)
					.map((rule) => rule.selector!),
			),
		),
	);
}

/** Build optional isolated-world global probes needed by the active rules. */
function buildJsGlobalProbeList(registry: TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules
					.filter((rule) => rule.kind === 'jsGlobal' && rule.property)
					.map((rule) => rule.property!),
			),
		),
	);
}

export function createBackgroundApi(): BackgroundApi {
	return {
		async getAnalysisStatus() {
			return ok(await getStatus());
		},

		async analyzeActiveTab(input): Promise<AppResult<SiteAnalysis>> {
			try {
				const tabResponse = await getInspectableActiveTab();
				if (!tabResponse.ok) {
					return tabResponse;
				}

				const tab = tabResponse.value;
				const cached = await getCachedAnalysis(tab.url);
				if (cached && !input.forceRefresh && !input.restartPolling) {
					return ok(cached);
				}

				const signalsResponse = await collectFromTab(tab.id, tab.url, {
					restartPolling: input.restartPolling,
				});
				if (!signalsResponse.ok) {
					return signalsResponse;
				}

				const analysis = analyzeSite(signalsResponse.value, technologies);
				const savedAnalysis = await saveAnalysis(analysis);
				logAnalysisSummary(savedAnalysis);
				return ok(savedAnalysis);
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message =
					error instanceof Error ? error.message : 'Unexpected runtime error';
				return errorResponse('UNKNOWN', message, stack);
			}
		},

    async startActiveTabPolling() {
      return callActiveTabPollingMethod('startPageSignalPolling');
    },

    async stopActiveTabPolling() {
      return callActiveTabPollingMethod('stopPageSignalPolling');
    },

    async getActiveTabPollingState() {
      return callActiveTabPollingMethod('getPageSignalPollingState');
    },
  };
}

const [provideBackgroundApi] = defineProxy(() => createBackgroundApi(), {
	namespace: BACKGROUND_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

export default defineBackground(() => {
	provideBackgroundApi(createBackgroundServerAdapter());
});
