import type { AnalysisStatus, PageSignals, SiteAnalysis } from '../detection/types';
import type { ApiResult } from '../shared/result';

export type AnalyzeActiveTabInput = {
	forceRefresh?: boolean;
};

export type CollectPageSignalsInput = {
	includeHtml?: boolean;
	selectorProbeList: string[];
	jsGlobalProbeList: string[];
};

export interface BackgroundApi {
	getAnalysisStatus(): Promise<ApiResult<AnalysisStatus>>;
	analyzeActiveTab(input: AnalyzeActiveTabInput): Promise<ApiResult<SiteAnalysis>>;
}

export interface ContentApi {
	collectPageSignals(input: CollectPageSignalsInput): Promise<ApiResult<PageSignals>>;
}

export * from './adapters/background';
export * from './adapters/content';
