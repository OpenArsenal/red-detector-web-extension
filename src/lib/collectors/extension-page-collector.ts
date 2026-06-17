import { collectBackgroundObservationBatch, type CollectorLog } from './background-signals';
import { buildCollectionPlan, toCollectPageSignalsInput } from './planning';
import type { CollectObservationBatchOutput, ContentApi } from '../contracts/analysis';
import type { TechnologyDefinition } from '../detection/types';
import type { ObservationBatch } from '../observations';
import {
	CONTENT_SCRIPT_TIMEOUT_MS,
	contentScriptFailure,
	withTimeout,
} from '../messaging/rpc';
import { errorResponse, ok, type AppResult } from '../shared/result';
import { isSameDocumentUrl } from '../shared/url';

/** Input needed to collect one active tab through extension APIs. */
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
 * Collect the active tab as normalized observations for the event pipeline.
 *
 * The extension has two collection worlds. The content script reads DOM-shaped
 * facts such as scripts, links, metadata, storage keys, and selector probes. The
 * background then appends privileged facts such as response headers, same-origin
 * source text, and page-owned JavaScript globals. Returning one enriched batch
 * keeps the detector path event-only while still preserving the evidence that
 * used to require a legacy snapshot enrichment pass.
 */
export async function collectExtensionObservationBatch(
	input: ExtensionPageCollectorInput,
): Promise<AppResult<ObservationBatch>> {
	input.log?.('collect-observation-batch-start', {
		tabId: input.tabId,
		hostname: new URL(input.expectedUrl).hostname,
	});

	const collectionPlan = buildCollectionPlan(input.registry);

	try {
		const response = await withTimeout(
			input.contentApi.collectObservationBatch(toCollectPageSignalsInput(collectionPlan)),
			CONTENT_SCRIPT_TIMEOUT_MS,
			'Content script did not respond before the messaging timeout.',
		);

		if (!response.ok) {
			return response;
		}

		const validationError = validateObservationBatchTarget(response.value, input.expectedUrl);
		if (validationError) {
			input.log?.('collect-observation-batch-mismatch', {
				tabId: input.tabId,
				expectedUrl: input.expectedUrl,
				actualUrl: response.value.batch.target.url,
			});
			return validationError;
		}

		const enrichedBatch = await collectBackgroundObservationBatch({
			tabId: input.tabId,
			batch: response.value.batch,
			collectionPlan,
			log: input.log,
		});

		input.log?.('collect-observation-batch-success', {
			tabId: input.tabId,
			hostname: enrichedBatch.target.hostname,
			observationCount: enrichedBatch.observations.length,
			observedAt: enrichedBatch.observedAt,
		});

		return ok(enrichedBatch);
	} catch (error) {
		input.log?.('collect-observation-batch-failed', {
			tabId: input.tabId,
			hostname: new URL(input.expectedUrl).hostname,
			message: error instanceof Error ? error.message : 'Unknown content collection failure',
		});
		return contentScriptFailure(error);
	}
}

/** Validate that a content-emitted batch still belongs to the active document. */
function validateObservationBatchTarget(
	output: CollectObservationBatchOutput,
	expectedUrl: string,
): AppResult<never> | null {
	if (isSameDocumentUrl(output.batch.target.url, expectedUrl)) {
		return null;
	}

	return errorResponse(
		'VALIDATION_ERROR',
		`Collected observations do not match the active tab URL. Expected ${expectedUrl}, got ${output.batch.target.url}.`,
	);
}
