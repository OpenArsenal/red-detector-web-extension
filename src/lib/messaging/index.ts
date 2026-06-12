import type {
	PageSignalPollingState as ObservationSessionState,
} from '../content/observed-page-signals';
import type { AnalysisStatus, PageSignals, SiteAnalysis } from '../detection/types';
import type { AppResult } from '../shared/result';

export type AnalyzeActiveTabInput = {
	mode: 'cache-first' | 'refresh';
	observe: 'none' | 'while-popup-open' | 'bounded';
};

export type AnalyzeActiveTabOutput = {
	analysis: SiteAnalysis;
	cache: {
		status: 'hit' | 'miss' | 'bypassed';
		key: string;
		expiresAt?: number;
	};
	session?: ObservationSessionState;
};

export type ObservationStopReason =
	| 'manual'
	| 'expired'
	| 'navigation'
	| 'invalidated';

export type BeginObservationSessionInput = {
	sessionId: string;
	expectedUrl: string;
	policy: {
		durationMs: number;
		throttleMs: number;
		maxPendingNodes: number;
		maxMutations: number;
	};
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
	analyzeActiveTab(
		input: AnalyzeActiveTabInput,
	): Promise<AppResult<AnalyzeActiveTabOutput>>;
	refreshActiveObservationSession(): Promise<AppResult<AnalyzeActiveTabOutput>>;
	stopActiveObservationSession(): Promise<AppResult<ObservationSessionState>>;
	getActiveObservationSessionState(): Promise<AppResult<ObservationSessionState>>;
}

export interface ContentApi {
	collectPageSignals(input: CollectPageSignalsInput): Promise<AppResult<PageSignals>>;
	beginObservationSession(
		input: BeginObservationSessionInput,
	): Promise<AppResult<ObservationSessionState>>;
	stopObservationSession(): Promise<AppResult<ObservationSessionState>>;
	getObservationSessionState(): Promise<AppResult<ObservationSessionState>>;
}

export * from './adapters/background';
export * from './adapters/content';
