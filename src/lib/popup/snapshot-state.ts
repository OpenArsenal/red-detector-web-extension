import type { DetectionSessionSnapshot } from '../contracts/detection-session';

import { browser } from 'wxt/browser';
import type { ActiveTabIdentity, AnalysisEnrichmentState, AnalyzeActiveTabOutput } from '../messaging';

import {
  getCachedAnalysis,
  getCachedReplayTrace,
  getCachedReplayTraceHistory,
  getLatestDetectionOriginSnapshot,
  isDetectionSessionSnapshot,
} from '../storage';
import { STORAGE_LIMITS, getAnalysisCacheKey, getDetectionOriginSnapshotKey } from '../storage/contracts';

/** Handler invoked when storage publishes a matching snapshot revision. */
export type PopupSnapshotRevisionHandler = (snapshot: DetectionSessionSnapshot) => void;

/** Cleanup callback for removing the popup's storage change listener. */
export type PopupSnapshotUnsubscribe = () => void;

/** Stored analysis source that can paint the popup before background analysis runs. */
export type PopupStoredAnalysisSource = 'origin-snapshot' | 'analysis-cache';

/**
 * Stored detector output that can be rendered during popup startup.
 *
 * Origin snapshots are the preferred stream because they carry revision and
 * enrichment state. The legacy analysis cache remains a fallback so users still
 * see the last safe result while the snapshot rollout moves through the other
 * extension contexts.
 */
export type PopupStoredAnalysisResult = {
  /** Storage path that produced the analysis shown in the popup. */
  readonly source: PopupStoredAnalysisSource;
  /** Normalized analysis output safe for current popup rendering. */
  readonly analysis: AnalyzeActiveTabOutput['analysis'];
  /** Snapshot revision used when the storage-backed stream already has state. */
  readonly snapshot?: DetectionSessionSnapshot;
  /** Latest replay trace for the stored analysis, when replay storage has one. */
  readonly replayTrace?: AnalyzeActiveTabOutput['replayTrace'];
  /** Recent replay runs for the stored analysis origin. */
  readonly replayHistory?: AnalyzeActiveTabOutput['replayHistory'];
};

/**
 * Read the best stored detector result for the active popup target.
 *
 * Incognito tabs skip persistent storage reads for the same reason they skip
 * writes: visible state should come from the live page command, not from durable
 * records that can outlive the private browsing context.
 */
export async function readStoredPopupAnalysis(
  identity: ActiveTabIdentity,
): Promise<PopupStoredAnalysisResult | null> {
  if (identity.incognito) {
    return null;
  }

  const snapshot = await getLatestDetectionOriginSnapshot(identity.originHash);
  if (snapshot && isSnapshotForActiveTab(identity, snapshot) && isDetectorStartupSnapshot(snapshot)) {
    const replay = await readStoredReplayState(snapshot.analysis.url);
    return { source: 'origin-snapshot', analysis: snapshot.analysis, snapshot, ...replay };
  }

  const analysis = await getCachedAnalysis(identity.url);
  if (!analysis) {
    return null;
  }

  const replay = await readStoredReplayState(analysis.url);
  return { source: 'analysis-cache', analysis, ...replay };
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
 * Reusing `AnalyzeActiveTabOutput` lets the popup keep one rendering path while
 * separating storage-first display from the later background command that starts
 * synchronization or observation work.
 */
export function createStoredPopupAnalysisOutput(stored: PopupStoredAnalysisResult): AnalyzeActiveTabOutput {
  return {
    analysis: stored.analysis,
    cache: {
      status: 'hit',
      key: getAnalysisCacheKey(stored.analysis.url),
      expiresAt: stored.analysis.analyzedAt + STORAGE_LIMITS.analysisTtlMs,
    },
    ...(stored.replayTrace ? { replayTrace: stored.replayTrace } : {}),
    ...(stored.replayHistory ? { replayHistory: stored.replayHistory } : {}),
    enrichment: stored.snapshot ? toAnalysisEnrichmentState(stored.snapshot) : undefined,
  };
}

/** Only exact active-tab snapshots can update the open popup's visible current-tab result. */
export function isSnapshotForActiveTab(identity: ActiveTabIdentity, snapshot: DetectionSessionSnapshot): boolean {
	return (
		snapshot.key.tabId === identity.tabId &&
		snapshot.key.originHash === identity.originHash &&
		snapshot.urlHash === identity.urlHash
	);
}


/**
 * Subscribe the open popup to snapshot revisions for its active tab.
 *
 * Storage becomes the receive stream: background or content writes a newer
 * origin snapshot, the browser emits a storage change, and the popup applies the
 * revision only when it still belongs to the active tab identity.
 */
export function subscribeToPopupSnapshotRevisions(
  identity: ActiveTabIdentity,
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
