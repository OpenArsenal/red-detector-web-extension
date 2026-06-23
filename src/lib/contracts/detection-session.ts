import type { SiteAnalysis } from '../detection/types';
import type { DetectionPipelineStage } from '../pipeline';

/** Schema marker for storage-backed detection session snapshots. */
export const DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION = 1 as const;

/** Version marker carried by every stored detection session snapshot. */
export type DetectionSessionSnapshotSchemaVersion = typeof DETECTION_SESSION_SNAPSHOT_SCHEMA_VERSION;

/**
 * Lifecycle state for the visible detection result associated with one page document.
 *
 * A popup can read this value from storage after a background service-worker restart
 * and still explain whether the visible data is cached, actively collecting,
 * observing for late page facts, finished, failed, stale, or intentionally stopped.
 */
export const DETECTION_SESSION_STATUSES = [
	'unknown',
	'cached',
	'collecting',
	'observing',
	'enriching',
	'complete',
	'failed',
	'stale',
	'stopped',
] as const;

/** Stored status for a detection session snapshot. */
export type DetectionSessionStatus = typeof DETECTION_SESSION_STATUSES[number];

/**
 * Lifecycle state for optional deeper evidence collection.
 *
 * Enrichment can outlive a popup render. Persisting terminal states such as
 * `failed`, `timed-out`, and `skipped` prevents the UI from looking like it is
 * still checking when no more evidence will arrive.
 */
export const DETECTION_ENRICHMENT_STATUSES = [
	'not-needed',
	'pending',
	'complete',
	'failed',
	'timed-out',
	'skipped',
] as const;

/** Stored status for deeper evidence collection attached to a snapshot. */
export type DetectionEnrichmentStatus = typeof DETECTION_ENRICHMENT_STATUSES[number];

/**
 * Stable identity for one page-local detection session.
 *
 * Manifest V3 background memory is disposable, so the identity is stored with the
 * result instead of living only in a background global. `documentId` distinguishes
 * navigations within the same tab, while `originHash` lets the popup recover the
 * latest origin-level result when the exact document session is not known yet.
 */
export interface DetectionSessionKey {
	/** Browser tab that owns the inspected document. */
	readonly tabId: number;
	/** Frame that produced the snapshot, usually the top frame for popup results. */
	readonly frameId: number;
	/** Browser document identifier or generated fallback for the inspected page load. */
	readonly documentId: string;
	/** Stable non-raw key for origin-level cache lookup. */
	readonly originHash: string;
}

/**
 * Persisted enrichment state for the session snapshot.
 *
 * The status is the only required field because some outcomes, especially
 * `not-needed` and `skipped`, have no meaningful start or completion timestamp.
 */
export interface DetectionEnrichmentState {
	/** Current enrichment lifecycle state. */
	readonly status: DetectionEnrichmentStatus;
	/** Millisecond timestamp when deeper evidence collection started, when known. */
	readonly startedAt?: number;
	/** Millisecond timestamp when the current state was last updated. */
	readonly updatedAt?: number;
	/** Millisecond timestamp when enrichment reached a terminal state, when known. */
	readonly completedAt?: number;
	/** Short machine-readable reason for failed, timed-out, skipped, or unnecessary enrichment. */
	readonly reason?: string;
}

/**
 * Public-safe replay summary embedded in a detection snapshot.
 *
 * Full replay traces stay in their existing replay storage namespace. The
 * snapshot keeps only the counts and stage names needed for a snapshot-first popup
 * render to say that explanation data exists and roughly how far the pipeline ran.
 */
export interface DetectionReplaySummary {
	/** Millisecond timestamp of the replayed analysis run. */
	readonly analyzedAt: number;
	/** Number of public replay events represented by the full trace. */
	readonly eventCount: number;
	/** Number of emitted detection explanations in the full trace. */
	readonly explanationCount: number;
	/** Number of final detections emitted by the replayed run. */
	readonly resultCount: number;
	/** Ordered unique pipeline stages represented by the summary. */
	readonly stages: readonly DetectionPipelineStage[];
}

/** Source that wrote the visible snapshot revision. */
export type DetectionSessionSnapshotSource = 'cache' | 'content' | 'background';

/**
 * Executor that produced detector output for a snapshot revision.
 *
 * The popup can show this in diagnostics so worker crashes, development-mode
 * fallbacks, and service-worker-bound matching are visible instead of being
 * misread as page collection or replay latency.
 */
export type DetectionMatcherExecutor =
	| 'offscreen-worker-pool'
	| 'background-fallback'
	| 'dev-fallback'
	| 'unknown';

/**
 * Durable popup-facing result for one inspected document.
 *
 * Each write advances a monotonically increasing `revision` for the same
 * `DetectionSessionKey`. The popup subscribes to storage changes and applies
 * only newer revisions, which makes visible updates resilient to popup teardown
 * and background service-worker shutdown.
 */
export interface DetectionSessionSnapshot {
	/** Stable page-session identity used for exact storage lookup. */
	readonly key: DetectionSessionKey;
	/** Storage schema version for future migrations. */
	readonly schemaVersion: DetectionSessionSnapshotSchemaVersion;
	/** Monotonic revision for the same page-session key. */
	readonly revision: number;
	/** Stable non-raw key for the full document URL. */
	readonly urlHash: string;
	/** Hostname safe for popup display. */
	readonly hostname: string;
	/** Visible lifecycle state for the stored result. */
	readonly status: DetectionSessionStatus;
	/** Extension context or cache path that produced the revision. */
	readonly source: DetectionSessionSnapshotSource;
	/** Millisecond timestamp when the snapshot revision was written. */
	readonly updatedAt: number;
	/** Number of detections in the embedded analysis. */
	readonly detectionCount: number;
	/** Normalized detector output safe for popup rendering and cache storage. */
	readonly analysis: SiteAnalysis;
	/** Stored deeper-evidence state for snapshot-first popup recovery. */
	readonly enrichment: DetectionEnrichmentState;
	/** Matcher executor path that produced this revision, when known. */
	readonly matcherExecutor?: DetectionMatcherExecutor;
	/** Optional public-safe replay progress summary. */
	readonly replaySummary?: DetectionReplaySummary;
}
