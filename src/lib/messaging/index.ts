import type { AnalysisStatus, PageSignals, SiteAnalysis } from '../detection/types';
import type { AppResult } from '../shared/result';

export type CollectionMode = "instant" | "settled";
export type AnalyzeActiveTabInput = {
	forceRefresh?: boolean;
  collectionMode?: CollectionMode;
};

export type CollectPageSignalsInput = {
	includeHtml?: boolean;
	selectorProbeList: string[];
	jsGlobalProbeList: string[];
  collectionMode?: CollectionMode;
};

export interface BackgroundApi {
	getAnalysisStatus(): Promise<AppResult<AnalysisStatus>>;
	analyzeActiveTab(input: AnalyzeActiveTabInput): Promise<AppResult<SiteAnalysis>>;
}

export interface ContentApi {
	collectPageSignals(input: CollectPageSignalsInput): Promise<AppResult<PageSignals>>;
}

export * from './adapters/background';
export * from './adapters/content';
