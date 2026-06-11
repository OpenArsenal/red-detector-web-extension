import type { PageSignalPollingState } from '../content/observed-page-signals';
import type { AnalysisStatus, PageSignals, SiteAnalysis } from '../detection/types';
import type { AppResult } from '../shared/result';

export type AnalyzeActiveTabInput = {
	forceRefresh?: boolean;
	restartPolling?: boolean;
};

export type HtmlProbe = {
	technologyId: string;
	ruleIndex: number;
	source: string;
	flags: string;
};

export type CollectPageSignalsInput = {
	includeHtml?: boolean;
	selectorProbeList: string[];
	jsGlobalProbeList: string[];
	htmlProbeList?: HtmlProbe[];
};

export interface BackgroundApi {
	getAnalysisStatus(): Promise<AppResult<AnalysisStatus>>;
	analyzeActiveTab(input: AnalyzeActiveTabInput): Promise<AppResult<SiteAnalysis>>;
	startActiveTabPolling(): Promise<AppResult<PageSignalPollingState>>;
	stopActiveTabPolling(): Promise<AppResult<PageSignalPollingState>>;
	getActiveTabPollingState(): Promise<AppResult<PageSignalPollingState>>;
}

export interface ContentApi {
	collectPageSignals(input: CollectPageSignalsInput): Promise<AppResult<PageSignals>>;
	startPageSignalPolling(): Promise<AppResult<PageSignalPollingState>>;
	stopPageSignalPolling(): Promise<AppResult<PageSignalPollingState>>;
	getPageSignalPollingState(): Promise<AppResult<PageSignalPollingState>>;
}

export * from './adapters/background';
export * from './adapters/content';
