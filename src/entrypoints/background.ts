import { defineProxy } from 'comctx';

import { technologies } from '../data/technologies';
import { getActiveTab, canInspectTab } from '../lib/browser/active-tab';
import { analyzeSite } from '../lib/detection/engine';
import type {
	PageSignals,
	SiteAnalysis,
	TechnologyDefinition,
} from '../lib/detection/types';
import { validatePageSignals } from '../lib/detection/validate';
import type { BackgroundApi, CollectionMode, ContentApi } from '../lib/messaging';
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

function createContentApiClient(tabId: number, frameId = 0): ContentApi {
  const [, injectContentApi] = defineProxy(() => ({}) as ContentApi, {
    namespace: CONTENT_RPC_NAMESPACE,
    heartbeatCheck: false,
    transfer: false,
  });

  return injectContentApi(createContentClientAdapter(tabId, frameId));
}

/**
 * Ask the content script for bounded PageSignals and reject stale responses from
 * a different origin. Navigation can happen while the service worker is active.
 */
async function collectFromTab(
	tabId: number,
	expectedUrl: string,
  collectionMode: CollectionMode = "instant",
): Promise<AppResult<PageSignals>> {
	const contentApi = createContentApiClient(tabId, 0);

	try {
		const response = await withTimeout(
			contentApi.collectPageSignals({
				includeHtml: true,
				selectorProbeList: buildSelectorProbeList(technologies),
				jsGlobalProbeList: buildJsGlobalProbeList(technologies),
        collectionMode,
			}),
      collectionMode === "settled" ? 35_000 : CONTENT_SCRIPT_TIMEOUT_MS,
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
				const tab = await getActiveTab();
				console.log("Active tab for analysis", {
					tab
				})
				
				if (typeof tab?.id !== 'number' || !tab.url) {
					return errorResponse('NO_ACTIVE_TAB', 'No active tab found');
				}

				if (!canInspectTab(tab)) {
					return errorResponse(
						'UNSUPPORTED_URL',
						'Detection only works on normal http/https pages. Reload a website tab and try again.',
					);
				}

				const cached = await getCachedAnalysis(tab.url);
				if (cached && !input.forceRefresh) {
					return ok(cached);
				}

				const signalsResponse = await collectFromTab(
					tab.id,
					tab.url,
					input.collectionMode ?? "instant"
				);
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
