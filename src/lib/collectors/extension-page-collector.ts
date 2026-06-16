import { collectBackgroundPageSignals, type CollectorLog } from './background-signals';
import { buildCollectionPlan, toCollectPageSignalsInput } from './planning';
import type { ContentApi } from '../contracts/analysis';
import type { PageSignals, TechnologyDefinition } from '../detection/types';
import { validatePageSignals } from '../detection/validate';
import {
	CONTENT_SCRIPT_TIMEOUT_MS,
	contentScriptFailure,
	withTimeout,
} from '../messaging/rpc';
import { errorResponse, ok, type AppResult } from '../shared/result';
import { isSameDocumentUrl } from '../shared/url';

/**
 * Input needed to collect one active-tab page snapshot through extension APIs.
 */
export type ExtensionPageCollectorInput = {
	/** Active tab id used for injected-script collection. */
	tabId: number;
	/** URL the background saw before contacting the content script. */
	expectedUrl: string;
	/** Active technology registry used only to plan what the collectors should look for. */
	registry: readonly TechnologyDefinition[];
	/** RPC client for the content script running in the active tab. */
	contentApi: ContentApi;
	/** Optional summary logger supplied by the background entrypoint. */
	log?: CollectorLog;
};

/**
 * Collects the current extension page snapshot without running detection.
 *
 * The result is still today's `PageSignals` shape so the detector and popup keep
 * their current behavior. The important change is ownership: extension-specific
 * acquisition now has one boundary that a future CLI collector can mirror with
 * its own implementation.
 */
export async function collectExtensionPageSignals(
	input: ExtensionPageCollectorInput,
): Promise<AppResult<PageSignals>> {
	input.log?.('collect-start', {
		tabId: input.tabId,
		hostname: new URL(input.expectedUrl).hostname,
	});

	const collectionPlan = buildCollectionPlan(input.registry);

	try {
		const response = await withTimeout(
			input.contentApi.collectPageSignals(toCollectPageSignalsInput(collectionPlan)),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (!response.ok) {
			return response;
		}

		if (!isSameDocumentUrl(response.value.url, input.expectedUrl)) {
			input.log?.('collect-document-mismatch', {
				tabId: input.tabId,
				expectedUrl: input.expectedUrl,
				actualUrl: response.value.url,
			});
			return errorResponse(
				'VALIDATION_ERROR',
				`Collected page signals do not match the active tab URL. Expected ${input.expectedUrl}, got ${response.value.url}.`,
			);
		}

		const enrichedSignals = await collectBackgroundPageSignals({
			tabId: input.tabId,
			signals: response.value,
			collectionPlan,
			log: input.log,
		});
		const validationError = validatePageSignals(enrichedSignals);
		if (validationError) {
			input.log?.('collect-validation-failed', {
				tabId: input.tabId,
				hostname: enrichedSignals.hostname,
				error: validationError,
			});
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
		}

		input.log?.('collect-success', {
			tabId: input.tabId,
			...summarizePageSignals(enrichedSignals),
		});

		return ok(enrichedSignals);
	} catch (error) {
		input.log?.('collect-failed', {
			tabId: input.tabId,
			hostname: new URL(input.expectedUrl).hostname,
			message: error instanceof Error ? error.message : 'Unknown content collection failure',
		});
		return contentScriptFailure(error);
	}
}

/** Return counts that are safe to log without exposing raw page contents. */
export function summarizePageSignals(signals: PageSignals): Record<string, unknown> {
	return {
		hostname: signals.hostname,
		scriptCount: signals.scripts.length,
		stylesheetCount: signals.stylesheets.length,
		linkCount: signals.links.length,
		resourceCount: signals.resources.length,
		requestCount: signals.requests.length,
		scriptContentCount: signals.scriptContents.length,
		stylesheetContentCount: signals.stylesheetContents.length,
		headerCount: Object.keys(signals.headers).length,
		metaKeyCount: Object.keys(signals.meta).length,
		domSelectorCount: Object.keys(signals.dom.selectors).length,
		jsGlobalCount: Object.keys(signals.jsGlobals).length,
		htmlMatchCount: Object.keys(signals.htmlMatches ?? {}).length,
		textChars: signals.text.length,
		cookieNameCount: Object.keys(signals.cookies).length,
		localStorageKeyCount: Object.keys(signals.storage.localStorage).length,
		sessionStorageKeyCount: Object.keys(signals.storage.sessionStorage).length,
		collectedAt: signals.collectedAt,
	};
}
