export const ANALYSIS_CACHE_PREFIX = 'analysis:';

export const STORAGE_LIMITS = {
	analysisTtlMs: 1000 * 60 * 60 * 24,
	maxAnalyses: 250,
} as const;
