import { getOrigin } from '../shared/url';

/** Prefix used for every origin-level analysis cache record. */
export const ANALYSIS_CACHE_PREFIX = 'analysis:';

/**
 * Storage limits for normalized analysis records.
 *
 * These limits only apply to saved `SiteAnalysis` output. Raw page HTML, cookies,
 * text, and source contents are not stored by this cache path.
 */
export const STORAGE_LIMITS = {
	analysisTtlMs: 1000 * 60 * 60 * 24,
	maxAnalyses: 250,
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
