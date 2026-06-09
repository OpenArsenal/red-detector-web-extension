import type {
	ExtractedPagePayload,
	ExtractionMode,
	ExtractionRecord,
	ExtractionStatus,
} from '../detection/types';
import type { ApiResult } from '../shared/result';

export type RunActiveTabExtractionInput = {
	mode?: ExtractionMode;
};

export type CollectPagePayloadInput = {
	mode: ExtractionMode;
};

export interface BackgroundApi {
	getExtractionStatus(): Promise<ApiResult<ExtractionStatus>>;
	runActiveTabExtraction(input: RunActiveTabExtractionInput): Promise<ApiResult<ExtractionRecord>>;
}

export interface ContentApi {
	collectPagePayload(input: CollectPagePayloadInput): Promise<ApiResult<ExtractedPagePayload>>;
}

export * from './adapters/background';
export * from './adapters/content';
