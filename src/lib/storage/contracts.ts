import { getOrigin } from '../shared/url';

/** Prefix used for every origin-level analysis cache record. */
export const ANALYSIS_CACHE_PREFIX = 'analysis:';

/** Prefix used for every origin-level replay trace cache record. */
export const REPLAY_TRACE_CACHE_PREFIX = 'replay:';

/**
 * Storage limits for normalized analysis and replay records.
 *
 * These limits only apply to saved detector output and redacted replay traces.
 * Raw page HTML, cookies, text, and source contents are not stored by either
 * cache path.
 */
export const STORAGE_LIMITS = {
	analysisTtlMs: 1000 * 60 * 60 * 24,
	replayTraceTtlMs: 1000 * 60 * 60 * 24,
	maxAnalyses: 250,
	maxReplayTraces: 250,
} as const;

/**
 * Build the storage key for the normalized analysis cache.
 *
 * The key uses the URL origin, so different paths on the same site share cached
 * analysis, while `http`, `https`, and explicit ports stay separate.
 */
export function getAnalysisCacheKey(url: string): string {
	return `${ANALYSIS_CACHE_PREFIX}${getOrigin(url)}`;
}

/**
 * Build the storage key for a redacted replay trace.
 *
 * Replay traces use their own namespace so callers can fetch or delete replay
 * metadata without changing the `SiteAnalysis` cache record shape.
 */
export function getReplayTraceCacheKey(url: string): string {
	return `${REPLAY_TRACE_CACHE_PREFIX}${getOrigin(url)}`;
}

/**
 * Convert an analysis cache key into its paired replay trace key.
 *
 * The helper is used during cache trimming so an expired or overflowed analysis
 * record does not leave an orphaned replay trace behind.
 */
export function getReplayTraceCacheKeyForAnalysisCacheKey(key: string): string {
	return `${REPLAY_TRACE_CACHE_PREFIX}${key.slice(ANALYSIS_CACHE_PREFIX.length)}`;
}
