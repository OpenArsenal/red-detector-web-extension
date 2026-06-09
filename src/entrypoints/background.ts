import { defineProxy } from 'comctx';

import { getActiveTab, canInspectTab } from '../lib/browser/active-tab';
import { collectCookiesForUrl } from '../lib/browser/cookies';
import { collectRobotsForUrl } from '../lib/browser/robots';
import { estimateBytes } from '../lib/detection/normalizers';
import type { ExtractedPagePayload, ExtractionRecord } from '../lib/detection/types';
import { validateExtractedPayload } from '../lib/detection/validate';
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
import { STORAGE_LIMITS } from '../lib/storage/contracts';
import { getStatus, saveRecord } from '../lib/storage';

const [, injectContentApi] = defineProxy(() => ({}) as ContentApi, {
	namespace: CONTENT_RPC_NAMESPACE,
	heartbeatCheck: false,
	transfer: false,
});

function buildRecord(
	payload: ExtractedPagePayload,
	tabId: number | undefined,
	mode: 'safe' | 'aggressive',
): ExtractionRecord {
	const createdAt = Date.now();

	return {
		id: `${createdAt}-${Math.random().toString(36).slice(2, 10)}`,
		origin: getOrigin(payload.url),
		tabId,
		mode,
		payload,
		createdAt,
		expiresAt: createdAt + STORAGE_LIMITS.rawRecordTtlMs,
		sizeBytes: estimateBytes(payload),
	};
}

async function collectFromTab(tabId: number, mode: 'safe' | 'aggressive') {
	const contentApi = injectContentApi(createContentClientAdapter(tabId, 0));

	try {
		const response = await contentApi.collectPagePayload({ mode });
		if (!response.ok) {
			return response;
		}

		const validationError = validateExtractedPayload(response.value);
		if (validationError) {
			return errorResponse('PAYLOAD_TOO_LARGE', validationError);
		}

		return response.value;
	} catch (error) {
		const stack = error instanceof Error ? error.stack : undefined;
		const message = error instanceof Error ? error.message : 'Content script did not respond';
		return errorResponse('CONTENT_UNAVAILABLE', message, stack);
	}
}

async function enrichPayload(payload: ExtractedPagePayload): Promise<ExtractedPagePayload> {
	const nextPayload: ExtractedPagePayload = {
		...payload,
		collectedSources: [...payload.collectedSources],
	};

	const cookies = await collectCookiesForUrl(payload.url);
	if (Object.keys(cookies).length) {
		nextPayload.cookies = cookies;
		if (!nextPayload.collectedSources.includes('cookies')) {
			nextPayload.collectedSources.push('cookies');
		}
	}

	const robots = await collectRobotsForUrl(payload.url);
	nextPayload.robots = robots;
	if (!nextPayload.collectedSources.includes('robots')) {
		nextPayload.collectedSources.push('robots');
	}

	return nextPayload;
}

function logExtractionRecord(record: ExtractionRecord) {
	console.log('[red-detector] extraction record summary', {
		id: record.id,
		origin: record.origin,
		mode: record.mode,
		collectedSources: record.payload.collectedSources,
		sizeBytes: record.sizeBytes,
	});
	console.log('[red-detector] extraction payload', record.payload);
}

function createBackgroundApi(): BackgroundApi {
	return {
		async getExtractionStatus() {
			return ok(await getStatus());
		},

		async runActiveTabExtraction(input): Promise<ApiResult<ExtractionRecord>> {
			try {
				const tab = await getActiveTab();
				if (!tab?.id) {
					return errorResponse('TAB_NOT_FOUND', 'No active tab found');
				}

				if (!canInspectTab(tab)) {
					return errorResponse(
						'SOURCE_UNSUPPORTED',
						'Extraction only works on normal http/https pages. Reload a website tab and try again.',
					);
				}

				const mode = input.mode ?? 'safe';
				const payloadOrError = await collectFromTab(tab.id, mode);
				if ('ok' in payloadOrError) {
					return payloadOrError;
				}

				const enrichedPayload = await enrichPayload(payloadOrError);
				const validationError = validateExtractedPayload(enrichedPayload);
				if (validationError) {
					return errorResponse('PAYLOAD_TOO_LARGE', validationError);
				}

				const record = buildRecord(enrichedPayload, tab.id, mode);
				await saveRecord(record);
				logExtractionRecord(record);
				return ok(record);
			} catch (error) {
				const stack = error instanceof Error ? error.stack : undefined;
				const message = error instanceof Error ? error.message : 'Unexpected runtime error';
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
