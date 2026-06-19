import type {
	DetectionEnrichmentState,
	DetectionReplaySummary,
	DetectionSessionKey,
	DetectionSessionSnapshot,
	DetectionSessionSnapshotSource,
	DetectionSessionStatus,
} from '../contracts/detection-session';
import type { Evidence, SiteAnalysis } from '../detection/types';

import { browser } from 'wxt/browser';

import {
	DETECTION_ENRICHMENT_STATUSES,
	DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION,
	DETECTION_SESSION_STATUSES,
} from '../contracts/detection-session';
import {
	getDetectionOriginSnapshotKey,
	getDetectionSessionIndexKey,
	getDetectionSessionSnapshotKey,
} from './contracts';

/**
 * Result returned after attempting to persist a detection snapshot revision.
 *
 * Older revisions are rejected instead of overwriting the visible snapshot. The
 * caller still receives the stored value so a popup or background command can
 * converge on the newest known state without issuing a second read.
 */
/** Stored pointer to one exact detection snapshot owned by a browser tab. */
export interface DetectionSessionIndexEntry {
	/** Exact page-session key used to read or update the stored snapshot. */
	readonly key: DetectionSessionKey;
	/** Stable non-raw URL key used to detect same-document replacements. */
	readonly urlHash: string;
	/** Last known snapshot status for tab lifecycle cleanup. */
	readonly status: DetectionSessionStatus;
	/** Last write timestamp used to keep the newest entry when records collide. */
	readonly updatedAt: number;
}

/** Stored list of known detection sessions for one browser tab. */
export interface DetectionSessionIndexRecord {
	/** Browser tab id that owns every entry in this index. */
	readonly tabId: number;
	/** Latest known sessions for this tab, newest first. */
	readonly entries: readonly DetectionSessionIndexEntry[];
	/** Millisecond timestamp when the index was last rewritten. */
	readonly updatedAt: number;
}

export interface DetectionSessionSnapshotWriteResult {
	/** Whether the submitted snapshot replaced the exact session record. */
	readonly accepted: boolean;
	/** Exact session storage key used for the write or rejected comparison. */
	readonly sessionStorageKey: string;
	/** Origin-level storage key considered for latest-snapshot promotion. */
	readonly originStorageKey: string;
	/** Snapshot currently stored for the exact session after the operation. */
	readonly snapshot: DetectionSessionSnapshot;
	/** Revision that prevented a stale write, when the submitted snapshot was rejected. */
	readonly rejectedByRevision?: number;
}

/**
 * Persist the latest visible detection snapshot for one page session.
 *
 * Snapshot revisions are monotonic per session. A stale write returns the stored
 * snapshot instead of mutating storage, which protects the popup from applying an
 * older content or background response after a newer revision has already landed.
 */
export async function saveDetectionSessionSnapshot(
	snapshot: DetectionSessionSnapshot,
): Promise<DetectionSessionSnapshotWriteResult> {
	const sessionStorageKey = getDetectionSessionSnapshotKey(snapshot.key);
	const originStorageKey = getDetectionOriginSnapshotKey(snapshot.key.originHash);
	const existing = await getStoredDetectionSnapshot(sessionStorageKey);

	if (existing && existing.revision >= snapshot.revision) {
		return {
			accepted: false,
			sessionStorageKey,
			originStorageKey,
			snapshot: cloneDetectionSessionSnapshot(existing),
			rejectedByRevision: existing.revision,
		};
	}

	const normalized = cloneDetectionSessionSnapshot(snapshot);
	await browser.storage.local.set({ [sessionStorageKey]: normalized });
	await promoteOriginSnapshot(originStorageKey, normalized);
	await upsertDetectionSessionIndex(normalized);

	return {
		accepted: true,
		sessionStorageKey,
		originStorageKey,
		snapshot: cloneDetectionSessionSnapshot(normalized),
	};
}

/** Return the latest snapshot for an exact page session, when storage still has one. */
export async function getLatestDetectionSessionSnapshot(
	key: DetectionSessionKey,
): Promise<DetectionSessionSnapshot | null> {
	return getStoredDetectionSnapshot(getDetectionSessionSnapshotKey(key));
}

/** Return the newest stored snapshot for an origin hash, regardless of document session. */
export async function getLatestDetectionOriginSnapshot(
	originHash: string,
): Promise<DetectionSessionSnapshot | null> {
	return getStoredDetectionSnapshot(getDetectionOriginSnapshotKey(originHash));
}

/** Return the known detection sessions for one browser tab, newest first. */
export async function getDetectionSessionIndex(
	tabId: number,
): Promise<DetectionSessionIndexRecord> {
	const key = getDetectionSessionIndexKey(tabId);
	const raw = await browser.storage.local.get(key);
	const value = raw[key];

	if (!isDetectionSessionIndexRecord(value, tabId)) {
		return { tabId, entries: [], updatedAt: 0 };
	}

	return cloneDetectionSessionIndexRecord(value);
}

/** Remove the tab-session index after a tab closes and volatile state is gone. */
export async function removeDetectionSessionIndex(tabId: number): Promise<void> {
	await browser.storage.local.remove(getDetectionSessionIndexKey(tabId));
}

/**
 * Mark every active snapshot for a tab with a terminal lifecycle state.
 *
 * Navigation and tab removal can happen while the background has no reliable
 * in-memory session. The tab index lets the lifecycle listener update stored
 * snapshots directly so a popup does not keep rendering an observing session for
 * a document that can no longer produce content events.
 */
export async function markDetectionSessionSnapshotsForTab(
	tabId: number,
	status: Extract<DetectionSessionStatus, 'stale' | 'stopped'>,
	reason: string,
): Promise<readonly DetectionSessionSnapshot[]> {
	const index = await getDetectionSessionIndex(tabId);
	const marked: DetectionSessionSnapshot[] = [];

	for (const entry of index.entries) {
		const snapshot = await getLatestDetectionSessionSnapshot(entry.key);
		if (!snapshot || snapshot.status === status) {
			continue;
		}
		if (snapshot.status === 'stopped' && status === 'stale') {
			continue;
		}

		const updatedAt = Date.now();
		const nextSnapshot: DetectionSessionSnapshot = {
			...snapshot,
			key: { ...snapshot.key },
			revision: snapshot.revision + 1,
			status,
			source: 'background',
			updatedAt,
			enrichment: {
				...snapshot.enrichment,
				updatedAt,
				reason,
			},
		};
		const result = await saveDetectionSessionSnapshot(nextSnapshot);
		marked.push(result.snapshot);
	}

	return marked;
}

/** Add or refresh one snapshot pointer in the owning tab's session index. */
async function upsertDetectionSessionIndex(snapshot: DetectionSessionSnapshot): Promise<void> {
	const tabId = snapshot.key.tabId;
	const index = await getDetectionSessionIndex(tabId);
	const entry: DetectionSessionIndexEntry = {
		key: { ...snapshot.key },
		urlHash: snapshot.urlHash,
		status: snapshot.status,
		updatedAt: snapshot.updatedAt,
	};
	const entries = [
		entry,
		...index.entries.filter((item) => !isSameDetectionSessionKey(item.key, snapshot.key)),
	]
		.sort((left, right) => right.updatedAt - left.updatedAt)
		.slice(0, 20);

	await browser.storage.local.set({
		[getDetectionSessionIndexKey(tabId)]: {
			tabId,
			entries,
			updatedAt: snapshot.updatedAt,
		} satisfies DetectionSessionIndexRecord,
	});
}

/** Compare exact session keys without depending on object identity from storage mocks. */
function isSameDetectionSessionKey(left: DetectionSessionKey, right: DetectionSessionKey): boolean {
	return (
		left.tabId === right.tabId &&
		left.frameId === right.frameId &&
		left.documentId === right.documentId &&
		left.originHash === right.originHash
	);
}

/** Read and clone a snapshot only after the storage value passes a defensive shape check. */
async function getStoredDetectionSnapshot(storageKey: string): Promise<DetectionSessionSnapshot | null> {
	const raw = await browser.storage.local.get(storageKey);
	const value = raw[storageKey];

	if (!isDetectionSessionSnapshot(value)) {
		return null;
	}

	return cloneDetectionSessionSnapshot(value);
}

/** Promote a session snapshot to the origin-level latest record when it is newer. */
async function promoteOriginSnapshot(
	originStorageKey: string,
	snapshot: DetectionSessionSnapshot,
): Promise<void> {
	const existing = await getStoredDetectionSnapshot(originStorageKey);

	if (existing && !isOriginSnapshotNewer(snapshot, existing)) {
		return;
	}

	await browser.storage.local.set({ [originStorageKey]: cloneDetectionSessionSnapshot(snapshot) });
}

/** Compare origin candidates across sessions where revision numbers are not shared. */
function isOriginSnapshotNewer(
	candidate: DetectionSessionSnapshot,
	existing: DetectionSessionSnapshot,
): boolean {
	if (candidate.updatedAt !== existing.updatedAt) {
		return candidate.updatedAt > existing.updatedAt;
	}

	return candidate.revision > existing.revision;
}

/**
 * Return whether a storage value matches the durable snapshot envelope.
 *
 * Storage change listeners receive unknown values from every extension context.
 * The guard keeps popup streaming on the normalized snapshot contract instead
 * of trusting arbitrary records that happen to share the same storage area.
 */
export function isDetectionSessionSnapshot(value: unknown): value is DetectionSessionSnapshot {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<DetectionSessionSnapshot>;

	return (
		candidate.schemaVersion === DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION &&
		isDetectionSessionKey(candidate.key) &&
		typeof candidate.revision === 'number' &&
		typeof candidate.urlHash === 'string' &&
		typeof candidate.hostname === 'string' &&
		isDetectionSessionStatus(candidate.status) &&
		isDetectionSessionSnapshotSource(candidate.source) &&
		typeof candidate.updatedAt === 'number' &&
		typeof candidate.detectionCount === 'number' &&
		isSnapshotSiteAnalysis(candidate.analysis) &&
		isDetectionEnrichmentState(candidate.enrichment) &&
		(candidate.replaySummary === undefined || isDetectionReplaySummary(candidate.replaySummary))
	);
}

/** Guard the page-session identity before using it in storage key helpers. */
function isDetectionSessionKey(value: unknown): value is DetectionSessionKey {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<DetectionSessionKey>;

	return (
		typeof candidate.tabId === 'number' &&
		typeof candidate.frameId === 'number' &&
		typeof candidate.documentId === 'string' &&
		typeof candidate.originHash === 'string'
	);
}

/** Guard session statuses with the shared contract list instead of duplicated literals. */
function isDetectionSessionStatus(value: unknown): value is DetectionSessionStatus {
	return typeof value === 'string' && DETECTION_SESSION_STATUSES.includes(value as DetectionSessionStatus);
}

/** Guard snapshot write sources with the narrow persisted source set. */
function isDetectionSessionSnapshotSource(value: unknown): value is DetectionSessionSnapshotSource {
	return value === 'cache' || value === 'content' || value === 'background';
}

/** Guard enrichment state while accepting older records with only the required status. */
function isDetectionEnrichmentState(value: unknown): value is DetectionEnrichmentState {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<DetectionEnrichmentState>;

	return (
		typeof candidate.status === 'string' &&
		DETECTION_ENRICHMENT_STATUSES.includes(candidate.status as DetectionEnrichmentState['status']) &&
		isOptionalNumber(candidate.startedAt) &&
		isOptionalNumber(candidate.updatedAt) &&
		isOptionalNumber(candidate.completedAt) &&
		(candidate.reason === undefined || typeof candidate.reason === 'string')
	);
}

/** Guard replay summaries without pulling the full replay trace contract into snapshot storage. */
function isDetectionReplaySummary(value: unknown): value is DetectionReplaySummary {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<DetectionReplaySummary>;

	return (
		typeof candidate.analyzedAt === 'number' &&
		typeof candidate.eventCount === 'number' &&
		typeof candidate.explanationCount === 'number' &&
		typeof candidate.resultCount === 'number' &&
		Array.isArray(candidate.stages) &&
		candidate.stages.every((stage) => typeof stage === 'string')
	);
}

/** Guard the analysis envelope fields needed by popup rendering and cache recovery. */
function isSnapshotSiteAnalysis(value: unknown): value is SiteAnalysis {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<SiteAnalysis>;

	return (
		typeof candidate.url === 'string' &&
		typeof candidate.hostname === 'string' &&
		typeof candidate.analyzedAt === 'number' &&
		(candidate.source === 'fresh' || candidate.source === 'cache') &&
		Array.isArray(candidate.results) &&
		Array.isArray(candidate.errors)
	);
}

/** Optional timestamp fields remain optional, but stored non-number values are ignored. */
function isOptionalNumber(value: unknown): boolean {
	return value === undefined || typeof value === 'number';
}

/**
 * Clone a detection snapshot using only the persisted contract fields.
 *
 * Browser storage serializes values, but Vitest storage mocks keep object
 * references. Manual cloning prevents callers from mutating cached snapshots and
 * drops accidental raw collector payloads attached to an object before saving.
 */
function cloneDetectionSessionSnapshot(snapshot: DetectionSessionSnapshot): DetectionSessionSnapshot {
	return {
		key: { ...snapshot.key },
		schemaVersion: snapshot.schemaVersion,
		revision: snapshot.revision,
		urlHash: snapshot.urlHash,
		hostname: snapshot.hostname,
		status: snapshot.status,
		source: snapshot.source,
		updatedAt: snapshot.updatedAt,
		detectionCount: snapshot.detectionCount,
		analysis: cloneSiteAnalysis(snapshot.analysis),
		enrichment: cloneDetectionEnrichmentState(snapshot.enrichment),
		...(snapshot.replaySummary ? { replaySummary: cloneDetectionReplaySummary(snapshot.replaySummary) } : {}),
	};
}

/** Clone normalized detector output without preserving object identity from tests. */
function cloneSiteAnalysis(analysis: SiteAnalysis): SiteAnalysis {
	return {
		url: analysis.url,
		hostname: analysis.hostname,
		analyzedAt: analysis.analyzedAt,
		source: analysis.source,
		results: analysis.results.map((result) => ({
			...result,
			categories: [...result.categories],
			confidence: { ...result.confidence },
			evidence: result.evidence.map(cloneEvidence),
			...(result.warnings ? { warnings: [...result.warnings] } : {}),
		})),
		errors: analysis.errors.map((error) => ({ ...error })),
	};
}

/** Clone public detector evidence while preserving optional scalar context. */
function cloneEvidence(evidence: Evidence): Evidence {
	return {
		...evidence,
		...(evidence.attributes ? { attributes: { ...evidence.attributes } } : {}),
		...(evidence.scope ? { scope: { ...evidence.scope } } : {}),
	};
}

/** Clone enrichment state so storage mock reads cannot mutate the saved value. */
function cloneDetectionEnrichmentState(state: DetectionEnrichmentState): DetectionEnrichmentState {
	return {
		status: state.status,
		...(state.startedAt !== undefined ? { startedAt: state.startedAt } : {}),
		...(state.updatedAt !== undefined ? { updatedAt: state.updatedAt } : {}),
		...(state.completedAt !== undefined ? { completedAt: state.completedAt } : {}),
		...(state.reason ? { reason: state.reason } : {}),
	};
}

/** Clone the bounded replay summary embedded in a snapshot. */
function cloneDetectionReplaySummary(summary: DetectionReplaySummary): DetectionReplaySummary {
	return {
		analyzedAt: summary.analyzedAt,
		eventCount: summary.eventCount,
		explanationCount: summary.explanationCount,
		resultCount: summary.resultCount,
		stages: [...summary.stages],
	};
}

/** Clone a tab-session index so tests cannot mutate storage by reference. */
function cloneDetectionSessionIndexRecord(record: DetectionSessionIndexRecord): DetectionSessionIndexRecord {
	return {
		tabId: record.tabId,
		entries: record.entries.map((entry) => ({
			key: { ...entry.key },
			urlHash: entry.urlHash,
			status: entry.status,
			updatedAt: entry.updatedAt,
		})),
		updatedAt: record.updatedAt,
	};
}
