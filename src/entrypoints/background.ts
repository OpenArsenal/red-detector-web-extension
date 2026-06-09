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
import type { BackgroundApi, ContentApi } from '../lib/messaging';
import {
	BACKGROUND_RPC_NAMESPACE,
	CONTENT_RPC_NAMESPACE,
	createBackgroundServerAdapter,
	createContentClientAdapter,
} from '../lib/messaging';
import { errorResponse } from '../lib/shared/errors';
import type { ApiResult } from '../lib/shared/result';
import { ok } from '../lib/shared/result';
import { getOrigin } from '../lib/shared/url';
import { getCachedAnalysis, getStatus, saveAnalysis } from '../lib/storage';

const [, injectContentApi] = defineProxy(() => ({}) as ContentApi, {
	namespace: CONTENT_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

/**
 * Ask the content script for bounded PageSignals and reject stale responses from
 * a different origin. Navigation can happen while the service worker is active.
 */
async function collectFromTab(
	tabId: number,
	expectedUrl: string,
): Promise<ApiResult<PageSignals>> {
	const contentApi = injectContentApi(createContentClientAdapter(tabId, 0));

	try {
		const response = await contentApi.collectPageSignals({
			includeHtml: true,
			selectorProbeList: buildSelectorProbeList(technologies),
			jsGlobalProbeList: buildJsGlobalProbeList(technologies),
		});

		if (!response.ok) {
			return response;
		}

		const validationError = validatePageSignals(response.value);
		if (validationError) {
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
		}

		if (getOrigin(response.value.url) !== getOrigin(expectedUrl)) {
			return errorResponse(
				'VALIDATION_ERROR',
				'Collected page signals do not match the active tab origin.',
			);
		}

		return response;
	} catch (error) {
		const stack = error instanceof Error ? error.stack : undefined;
		const message =
			error instanceof Error ? error.message : 'Content script did not respond';
		return errorResponse('CONTENT_UNAVAILABLE', message, stack);
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

function createBackgroundApi(): BackgroundApi {
	return {
		async getAnalysisStatus() {
			return ok(await getStatus());
		},

		async analyzeActiveTab(input): Promise<ApiResult<SiteAnalysis>> {
			try {
				const tab = await getActiveTab();
				if (!tab?.id || !tab.url) {
					return errorResponse('TAB_NOT_FOUND', 'No active tab found');
				}

				if (!canInspectTab(tab)) {
					return errorResponse(
						'SOURCE_UNSUPPORTED',
						'Detection only works on normal http/https pages. Reload a website tab and try again.',
					);
				}

				const cached = await getCachedAnalysis(tab.url);
				if (cached && !input.forceRefresh) {
					return ok(cached);
				}

				const signalsResponse = await collectFromTab(tab.id, tab.url);
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
				return errorResponse('INTERNAL_ERROR', message, stack);
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
