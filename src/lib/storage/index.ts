import { browser } from 'wxt/browser';

import type { AnalysisStatus, SiteAnalysis } from '../detection/types';
import { tryGetOrigin } from '../shared/url';
import { ANALYSIS_CACHE_PREFIX, STORAGE_LIMITS, getAnalysisCacheKey } from './contracts';

function isSiteAnalysis(value: unknown): value is SiteAnalysis {
	return (
		typeof value === 'object' &&
		value !== null &&
		'url' in value &&
		'hostname' in value &&
		'analyzedAt' in value &&
		'results' in value
	);
}

/** Return a fresh-enough normalized analysis, never raw page signals. */
export async function getCachedAnalysis(url: string): Promise<SiteAnalysis | null> {
	const key = getAnalysisCacheKey(url);
	const raw = await browser.storage.local.get(key);
	const value = raw[key];

	if (!isSiteAnalysis(value)) {
		return null;
	}

	const isExpired = Date.now() - value.analyzedAt > STORAGE_LIMITS.analysisTtlMs;
	if (isExpired) {
		await browser.storage.local.remove(key);
		return null;
	}

	return { ...value, source: 'cache' };
}

/** Persist only normalized detector output and trim stale/overflow cache entries. */
export async function saveAnalysis(analysis: SiteAnalysis): Promise<SiteAnalysis> {
	const normalized: SiteAnalysis = { ...analysis, source: 'fresh' };
	await browser.storage.local.set({ [getAnalysisCacheKey(normalized.url)]: normalized });
	await trimAnalysisCache();
	return normalized;
}

export async function getStatus(): Promise<AnalysisStatus> {
	const all = await browser.storage.local.get(null);
	const analyses = Object.entries(all)
		.filter(([key, value]) => key.startsWith(ANALYSIS_CACHE_PREFIX) && isSiteAnalysis(value))
		.map(([, value]) => value as SiteAnalysis);

	const lastAnalyzedAt = analyses.reduce(
		(latest, analysis) => Math.max(latest, analysis.analyzedAt),
		0,
	);

	const trackedOrigins = analyses
		.map((analysis) => tryGetOrigin(analysis.url))
		.filter((origin): origin is string => origin !== null);

	return {
		totalAnalyses: analyses.length,
		trackedOrigins: new Set(trackedOrigins).size,
		lastAnalyzedAt: lastAnalyzedAt || undefined,
	};
}

async function trimAnalysisCache(): Promise<void> {
	const all = await browser.storage.local.get(null);
	const analyses = Object.entries(all)
		.filter(([key, value]) => key.startsWith(ANALYSIS_CACHE_PREFIX) && isSiteAnalysis(value))
		.map(([key, value]) => ({ key, analysis: value as SiteAnalysis }))
		.sort((a, b) => b.analysis.analyzedAt - a.analysis.analyzedAt);

	const expiredKeys = analyses
		.filter(({ analysis }) => Date.now() - analysis.analyzedAt > STORAGE_LIMITS.analysisTtlMs)
		.map(({ key }) => key);
	const overflowKeys = analyses.slice(STORAGE_LIMITS.maxAnalyses).map(({ key }) => key);
	const keysToRemove = Array.from(new Set([...expiredKeys, ...overflowKeys]));

	if (keysToRemove.length) {
		await browser.storage.local.remove(keysToRemove);
	}
}
