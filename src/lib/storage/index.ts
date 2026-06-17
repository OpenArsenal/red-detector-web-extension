import { browser } from 'wxt/browser';

import type { AnalysisStatus, SiteAnalysis } from '../detection/types';
import type { DetectionReplayTrace } from '../pipeline';
import { tryGetOrigin } from '../shared/url';
import {
	ANALYSIS_CACHE_PREFIX,
	REPLAY_TRACE_CACHE_PREFIX,
	STORAGE_LIMITS,
	getAnalysisCacheKey,
	getReplayTraceCacheKey,
	getReplayTraceCacheKeyForAnalysisCacheKey,
} from './contracts';

/**
 * Return whether an unknown storage value looks like persisted analysis output.
 *
 * This is a defensive shape check for browser storage, not a full schema parser.
 * It only accepts values with the envelope fields later code needs before it can
 * read cache timestamps or detection results.
 */
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

/**
 * Return whether an unknown storage value looks like a replay trace.
 *
 * The trace contract is intentionally redacted before storage. This guard checks
 * only the replay envelope and arrays needed by callers, so older or malformed
 * records are ignored instead of leaking through to the popup.
 */
function isDetectionReplayTrace(value: unknown): value is DetectionReplayTrace {
	return (
		typeof value === 'object' &&
		value !== null &&
		'schemaVersion' in value &&
		'target' in value &&
		'analyzedAt' in value &&
		'events' in value &&
		'explanations' in value
	);
}

/** Return the current age of a cache record in milliseconds. */
function getCacheRecordAge(record: Pick<SiteAnalysis | DetectionReplayTrace, 'analyzedAt'>): number {
	return Date.now() - record.analyzedAt;
}

/** Return a fresh-enough normalized analysis, never raw page signals. */
export async function getCachedAnalysis(url: string): Promise<SiteAnalysis | null> {
	const key = getAnalysisCacheKey(url);
	const raw = await browser.storage.local.get(key);
	const value = raw[key];

	if (!isSiteAnalysis(value)) {
		return null;
	}

	const isExpired = getCacheRecordAge(value) > STORAGE_LIMITS.analysisTtlMs;
	if (isExpired) {
		await browser.storage.local.remove([key, getReplayTraceCacheKeyForAnalysisCacheKey(key)]);
		return null;
	}

	return { ...value, source: 'cache' };
}

/** Return a fresh-enough redacted replay trace for the requested origin. */
export async function getCachedReplayTrace(url: string): Promise<DetectionReplayTrace | null> {
	const key = getReplayTraceCacheKey(url);
	const raw = await browser.storage.local.get(key);
	const value = raw[key];

	if (!isDetectionReplayTrace(value)) {
		return null;
	}

	const isExpired = getCacheRecordAge(value) > STORAGE_LIMITS.replayTraceTtlMs;
	if (isExpired) {
		await browser.storage.local.remove(key);
		return null;
	}

	return cloneReplayTrace(value);
}

/** Persist only normalized detector output and trim stale/overflow cache entries. */
export async function saveAnalysis(analysis: SiteAnalysis): Promise<SiteAnalysis> {
	const normalized: SiteAnalysis = { ...analysis, source: 'fresh' };
	await browser.storage.local.set({ [getAnalysisCacheKey(normalized.url)]: normalized });
	await trimAnalysisCache();
	return normalized;
}

/** Persist a redacted replay trace beside the analysis cache for the same origin. */
export async function saveReplayTrace(trace: DetectionReplayTrace): Promise<DetectionReplayTrace> {
	const normalized = cloneReplayTrace(trace);
	await browser.storage.local.set({ [getReplayTraceCacheKey(normalized.target.url)]: normalized });
	await trimReplayTraceCache();
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

/** Remove stale and overflow analysis records plus their paired replay traces. */
async function trimAnalysisCache(): Promise<void> {
	const all = await browser.storage.local.get(null);
	const analyses = Object.entries(all)
		.filter(([key, value]) => key.startsWith(ANALYSIS_CACHE_PREFIX) && isSiteAnalysis(value))
		.map(([key, value]) => ({ key, analysis: value as SiteAnalysis }))
		.sort((a, b) => b.analysis.analyzedAt - a.analysis.analyzedAt);

	const expiredKeys = analyses
		.filter(({ analysis }) => getCacheRecordAge(analysis) > STORAGE_LIMITS.analysisTtlMs)
		.map(({ key }) => key);
	const overflowKeys = analyses.slice(STORAGE_LIMITS.maxAnalyses).map(({ key }) => key);
	const analysisKeysToRemove = Array.from(new Set([...expiredKeys, ...overflowKeys]));
	const replayKeysToRemove = analysisKeysToRemove.map(getReplayTraceCacheKeyForAnalysisCacheKey);
	const keysToRemove = [...analysisKeysToRemove, ...replayKeysToRemove];

	if (keysToRemove.length) {
		await browser.storage.local.remove(keysToRemove);
	}
}

/** Remove stale and overflow replay records without touching analysis records. */
async function trimReplayTraceCache(): Promise<void> {
	const all = await browser.storage.local.get(null);
	const traces = Object.entries(all)
		.filter(([key, value]) => key.startsWith(REPLAY_TRACE_CACHE_PREFIX) && isDetectionReplayTrace(value))
		.map(([key, value]) => ({ key, trace: value as DetectionReplayTrace }))
		.sort((a, b) => b.trace.analyzedAt - a.trace.analyzedAt);

	const expiredKeys = traces
		.filter(({ trace }) => getCacheRecordAge(trace) > STORAGE_LIMITS.replayTraceTtlMs)
		.map(({ key }) => key);
	const overflowKeys = traces.slice(STORAGE_LIMITS.maxReplayTraces).map(({ key }) => key);
	const keysToRemove = Array.from(new Set([...expiredKeys, ...overflowKeys]));

	if (keysToRemove.length) {
		await browser.storage.local.remove(keysToRemove);
	}
}

/**
 * Clone replay traces before returning or storing them.
 *
 * Browser storage serializes values, but tests use an in-memory map. The clone
 * keeps tests and callers from accidentally mutating the cached object by
 * reference after a save or read.
 */
function cloneReplayTrace(trace: DetectionReplayTrace): DetectionReplayTrace {
	return {
		...trace,
		target: { ...trace.target },
		events: trace.events.map((event) => ({
			...event,
			target: { ...event.target },
			...(event.details ? { details: { ...event.details } } : {}),
		})),
		explanations: trace.explanations.map((explanation) => ({
			...explanation,
			categories: [...explanation.categories],
			confidence: { ...explanation.confidence },
			reasons: [...explanation.reasons],
			evidence: explanation.evidence.map((evidence) => ({ ...evidence })),
			warnings: [...explanation.warnings],
		})),
		...(trace.emission ? { emission: { ...trace.emission } } : {}),
	};
}
