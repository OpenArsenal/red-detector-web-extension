export type SourceStatus =
	| 'supported'
	| 'supported_with_caveats'
	| 'browser_specific'
	| 'out_of_scope';

export type OwnerContext = 'content' | 'background' | 'popup' | 'none';

export type ExtractionSource =
	| 'url'
	| 'title'
	| 'meta'
	| 'script_src'
	| 'text'
	| 'html'
	| 'inline_scripts'
	| 'cookies'
	| 'robots';

export type ExtractionMode = 'safe' | 'aggressive';

export type SourceCapability = {
	status: SourceStatus;
	owner: OwnerContext;
};

export type RobotsPayload = {
	status: 'ok' | 'error';
	disallow: string[];
	fetchedAt: number;
	sourceUrl: string;
	errorMessage?: string;
};

export type ExtractedPagePayload = {
	url: string;
	title: string;
	meta: Record<string, string[]>;
	scriptSrc: string[];
	text?: string;
	html?: string;
	inlineScripts?: string[];
	cookies?: Record<string, string>;
	robots?: RobotsPayload;
	collectedSources: ExtractionSource[];
	capturedAt: number;
};

export type ExtractionRecord = {
	id: string;
	origin: string;
	tabId?: number;
	mode: ExtractionMode;
	payload: ExtractedPagePayload;
	createdAt: number;
	expiresAt: number;
	sizeBytes: number;
};

export type ExtractionStatus = {
	totalRecords: number;
	totalBytes: number;
	byOrigin: Record<string, number>;
	lastRecordAt?: number;
};
