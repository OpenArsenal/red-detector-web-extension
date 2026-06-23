import type { DetectionSessionSnapshot } from '../contracts/detection-session';

import { browser } from 'wxt/browser';
import type { VisibleTabIdentity, AnalysisEnrichmentState, AnalyzeVisibleTabOutput } from '../messaging';

import {
  getCachedReplayTrace,
  getCachedReplayTraceHistory,
  getLatestDetectionOriginSnapshot,
  isDetectionSessionSnapshot,
} from '../storage';
import { STORAGE_LIMITS, getAnalysisResponseKey, getDetectionOriginSnapshotKey } from '../storage/contracts';

/** Handler invoked when storage publishes a matching snapshot revision. */
export type PopupSnapshotRevisionHandler = (snapshot: DetectionSessionSnapshot) => void;

/** Cleanup callback for removing the popup's storage change listener. */
export type PopupSnapshotUnsubscribe = () => void;

/** Stored analysis source that can paint the popup before background analysis runs. */
export type PopupStoredAnalysisSource = 'origin-snapshot';

/**
 * Stored detector output that can be rendered during popup startup.
 *
 * Origin snapshots are the popup's startup stream because they carry revision,
 * enrichment, executor, and replay summary state. Analysis-snapshot response records stay as a lower-level persistence detail and no longer
 * drive first paint.
 */
export type PopupStoredAnalysisResult = {
  /** Storage path that produced the analysis shown in the popup. */
  readonly source: PopupStoredAnalysisSource;
  /** Normalized analysis output safe for current popup rendering. */
  readonly analysis: AnalyzeVisibleTabOutput['analysis'];
  /** Snapshot revision used when the storage-backed stream already has state. */
  readonly snapshot?: DetectionSessionSnapshot;
  /** Latest replay trace for the stored analysis, when replay storage has one. */
  readonly replayTrace?: AnalyzeVisibleTabOutput['replayTrace'];
  /** Recent replay runs for the stored analysis origin. */
  readonly replayHistory?: AnalyzeVisibleTabOutput['replayHistory'];
};

/**
 * Read the best stored detector result for the active popup target.
 *
 * Incognito tabs skip persistent storage reads for the same reason they skip
 * writes: visible state should come from the live page command, not from durable
 * records that can outlive the private browsing context.
 */
export async function readStoredPopupAnalysis(
  identity: VisibleTabIdentity,
): Promise<PopupStoredAnalysisResult | null> {
  if (identity.incognito) {
    return null;
  }

  const snapshot = await getLatestDetectionOriginSnapshot(identity.originHash);
  if (!snapshot || !isSnapshotForActiveTab(identity, snapshot) || !isDetectorStartupSnapshot(snapshot)) {
    return null;
  }

  const replay = await readStoredReplayState(snapshot.analysis.url);
  return { source: 'origin-snapshot', analysis: snapshot.analysis, snapshot, ...replay };
}

/**
 * Read replay data next to startup analysis so explanations survive popup reopen.
 *
 * Snapshots keep only a compact replay summary to avoid duplicating full traces
 * across every visible revision. The popup can still recover the newest full
 * trace and bounded history from the dedicated replay storage namespace before
 * the background service worker has to start a fresh analysis command.
 */
async function readStoredReplayState(url: string): Promise<Pick<PopupStoredAnalysisResult, 'replayTrace' | 'replayHistory'>> {
  const [replayTrace, replayHistory] = await Promise.all([
    getCachedReplayTrace(url),
    getCachedReplayTraceHistory(url),
  ]);

  return {
    ...(replayTrace ? { replayTrace } : {}),
    ...(replayHistory.length ? { replayHistory } : {}),
  };
}


/** Detector-owned or detection-bearing snapshots are safe as the first popup paint. */
function isDetectorStartupSnapshot(snapshot: DetectionSessionSnapshot): boolean {
  if (snapshot.source === 'background' || snapshot.source === 'cache') {
    return true;
  }

  return snapshot.detectionCount > 0;
}

/**
 * Convert stored popup state into the existing analysis response shape.
 *
 * Reusing `AnalyzeVisibleTabOutput` lets the popup keep one rendering path while
 * separating storage-first display from the later background command that starts
 * synchronization or observation work.
 */
export function createStoredPopupAnalysisOutput(stored: PopupStoredAnalysisResult): AnalyzeVisibleTabOutput {
  return {
    analysis: stored.analysis,
    snapshot: {
      status: 'hit',
      key: getAnalysisResponseKey(stored.analysis.url),
      expiresAt: stored.analysis.analyzedAt + STORAGE_LIMITS.analysisTtlMs,
    },
    ...(stored.replayTrace ? { replayTrace: stored.replayTrace } : {}),
    ...(stored.replayHistory ? { replayHistory: stored.replayHistory } : {}),
    enrichment: stored.snapshot ? toAnalysisEnrichmentState(stored.snapshot) : undefined,
  };
}

/** Only exact visible-tab snapshots can update the open popup's visible current-tab result. */
export function isSnapshotForActiveTab(identity: VisibleTabIdentity, snapshot: DetectionSessionSnapshot): boolean {
	return (
		snapshot.key.tabId === identity.tabId &&
		snapshot.key.originHash === identity.originHash &&
		snapshot.urlHash === identity.urlHash
	);
}


/**
 * Subscribe the open popup to snapshot revisions for its visible tab.
 *
 * Storage becomes the receive stream: background or content writes a newer
 * origin snapshot, the browser emits a storage change, and the popup applies the
 * revision only when it still belongs to the visible tab identity.
 */
export function subscribeToPopupSnapshotRevisions(
  identity: VisibleTabIdentity,
  onRevision: PopupSnapshotRevisionHandler,
): PopupSnapshotUnsubscribe {
  const storageKey = getDetectionOriginSnapshotKey(identity.originHash);
  const listener = (changes: Record<string, { readonly newValue?: unknown }>, areaName: string): void => {
    if (areaName !== 'local') return;
    const change = changes[storageKey];
    if (!change || !isDetectionSessionSnapshot(change.newValue)) return;
    if (!isSnapshotForActiveTab(identity, change.newValue)) return;
    onRevision(change.newValue);
  };

  browser.storage.onChanged.addListener(listener);
  return () => browser.storage.onChanged.removeListener(listener);
}

/** Compare revisions without assuming all storage writes share one document id. */
export function isNewerSnapshotRevision(current: DetectionSessionSnapshot | null, next: DetectionSessionSnapshot): boolean {
  if (!current) return true;
  if (
    current.key.tabId === next.key.tabId &&
    current.key.frameId === next.key.frameId &&
    current.key.documentId === next.key.documentId
  ) {
    return next.revision > current.revision;
  }

  return next.updatedAt > current.updatedAt;
}

function toAnalysisEnrichmentState(snapshot: DetectionSessionSnapshot): AnalysisEnrichmentState | undefined {
  return {
    status: snapshot.enrichment.status,
    ...(snapshot.enrichment.completedAt ? { completedAt: snapshot.enrichment.completedAt } : {}),
    ...(snapshot.enrichment.reason ? { reason: snapshot.enrichment.reason } : {}),
  };
}
