import { defineProxy } from "comctx";
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import { CategoryGroup } from "../../components/CategoryGroup";
import { EmptyState } from "../../components/EmptyState";
import { ErrorState } from "../../components/ErrorState";
import { PopupShell } from "./PopupRegions";
import { getRedDetectorLogger } from "../../lib/diagnostics/logging";
import type {
  AnalysisStatus,
  SiteAnalysis,
} from "../../lib/detection/types";
import type { DetectionSessionSnapshot } from "../../lib/contracts/detection-session";
import type { DetectionReplayTrace } from "../../lib/pipeline";
import type {
  ActiveTabIdentity,
  AnalyzeActiveTabInput,
  AnalyzeActiveTabOutput,
  BackgroundApi,
  ObservationSessionTarget,
} from "../../lib/messaging";
import {
  BACKGROUND_RPC_NAMESPACE,
  createBackgroundClientAdapter,
} from "../../lib/messaging";
import {
  buildPopupAnalysisUpdate,
  formatPopupAppError,
  getPopupObservationLabel,
  getPopupObservationModeFromSession,
  getPopupObservationModeFromSnapshot,
  groupDetectionsByPrimaryCategory,
  shouldApplyPopupSnapshotRevision,
  shouldPreservePopupReplayState,
  type PopupExplanationLookup,
  type PopupNotice,
  type PopupObservationMode,
} from "../../lib/popup/view-model";
import {
  createStoredPopupAnalysisOutput,
  isNewerSnapshotRevision,
  readStoredPopupAnalysis,
  subscribeToPopupSnapshotRevisions,
} from "../../lib/popup/snapshot-state";

import "./App.css";

const popupLogger = getRedDetectorLogger("popup");
const [, injectBackgroundApi] = defineProxy(() => ({}) as BackgroundApi, {
  namespace: BACKGROUND_RPC_NAMESPACE,
  heartbeatCheck: false,
  transfer: false,
});

const backgroundApi = injectBackgroundApi(
  createBackgroundClientAdapter("popup", { href: globalThis.location?.href }),
);

function logPopupEvent(event: string, details?: Record<string, unknown>): void {
  popupLogger.debug("[red-detector][popup] {event}", {
    event,
    ...(details ?? {}),
  });
}

function normalizeError(error: unknown): string {
  return error instanceof Error
    ? error.message
    : "Unexpected messaging failure";
}

type PopupMatcherStatus = "idle" | "collecting" | "matching" | "recording";

/**
 * Match progress is displayed separately from page observation.
 *
 * Observation says whether the content script is still watching the page. The
 * matcher status says whether detector work is collecting facts, matching
 * worker partitions, recording replay data, or idle. Keeping those lanes
 * separate makes tab switches and slow first passes easier to understand.
 */
function getMatcherStatusLabel(status: PopupMatcherStatus): string {
  if (status === "collecting") return "collecting page signals";
  if (status === "matching") return "matching evidence";
  if (status === "recording") return "recording replay";
  return "idle";
}

/** Whether the popup should render animated progress affordances. */
function isMatcherBusy(status: PopupMatcherStatus): boolean {
  return status === "collecting" || status === "matching" || status === "recording";
}

/** User-facing headline for the current matcher lane. */
function getMatcherActivityHeadline(status: PopupMatcherStatus): string {
  if (status === "collecting") return "Collecting page signals";
  if (status === "matching") return "Matching evidence batches";
  if (status === "recording") return "Recording replay trace";
  return "Analysis complete";
}

/** Short progress copy used near the animated activity indicator. */
function getMatcherActivityDescription(status: PopupMatcherStatus): string {
  if (status === "collecting") {
    return "Reading DOM, resource, metadata, and page-surface signals before worker matching starts.";
  }

  if (status === "matching") {
    return "Worker batches are resolving detections. The count may climb as stronger evidence arrives.";
  }

  if (status === "recording") {
    return "Final detector output is being written so replay history and explanations can reopen later.";
  }

  return "The latest detector snapshot is ready.";
}

/**
 * Translate an analysis response into the matcher lane without relying on count alone.
 *
 * Cache hits and stored snapshots are already completed work, while cache misses
 * without a replay trace represent queued matcher work that will publish storage
 * revisions later. Auto-applied storage revisions keep the status chosen from the
 * snapshot itself so final replay-backed snapshots can clear the busy state.
 */
function getMatcherStatusForAnalysisResponse(
  response: AnalyzeActiveTabOutput,
  source: "initial" | "manual" | "auto",
  currentStatus: PopupMatcherStatus,
): PopupMatcherStatus {
  if (response.replayTrace || response.cache.status === "hit") {
    return "idle";
  }

  if (source === "auto") {
    return currentStatus;
  }

  return response.analysis.results.length > 0 ? "matching" : "recording";
}

function isSameActiveTabIdentity(left: ActiveTabIdentity | null, right: ActiveTabIdentity): boolean {
  return Boolean(
    left &&
      left.tabId === right.tabId &&
      left.frameId === right.frameId &&
      left.originHash === right.originHash &&
      left.urlHash === right.urlHash,
  );
}

export default function App() {
  const [status, setStatus] = createStore<AnalysisStatus>({
    totalAnalyses: 0,
    trackedOrigins: 0,
  });
  const [busy, setBusy] = createSignal(false);
  const [liveUpdateMode, setLiveUpdateMode] = createSignal<PopupObservationMode>("unknown");
  const [notice, setNotice] = createSignal<PopupNotice | null>(null);
  const [errorMessage, setErrorMessage] = createSignal("");
  const [analysis, setAnalysis] = createSignal<SiteAnalysis | null>(null);
  const [lateAddedIds, setLateAddedIds] = createSignal<string[]>([]);
  const [explanationsByTechnologyId, setExplanationsByTechnologyId] =
    createSignal<PopupExplanationLookup>({});
  const [pipelineMode, setPipelineMode] = createSignal("event");
  const [matcherStatus, setMatcherStatus] = createSignal<PopupMatcherStatus>("idle");
  const [replayHistory, setReplayHistory] = createSignal<readonly DetectionReplayTrace[]>([]);
  const [sessionTarget, setSessionTarget] = createSignal<ObservationSessionTarget | null>(null);
  const [activeTabIdentity, setActiveTabIdentity] = createSignal<ActiveTabIdentity | null>(null);
  let refreshInFlight = false;
  let pendingManualRefresh = false;
  let unsubscribeSnapshotRevisions: (() => void) | undefined;
  let activeTabPollTimer: ReturnType<typeof globalThis.setInterval> | undefined;
  let pendingActiveTabAnalysisSync = false;
  let appliedSnapshotRevision: DetectionSessionSnapshot | null = null;

  function resultCount() {
    return analysis()?.results.length ?? 0;
  }

  function groupedResults() {
    return groupDetectionsByPrimaryCategory(analysis()?.results ?? []);
  }

  function hasLateDetections() {
    return lateAddedIds().length > 0;
  }

  function liveUpdateChipLabel() {
    return getPopupObservationLabel(liveUpdateMode());
  }
  function formatReplayTime(trace: DetectionReplayTrace) {
    return new Date(trace.analyzedAt).toLocaleString();
  }

  function formatReplaySummary(trace: DetectionReplayTrace) {
    return `${trace.resultCount} detection${trace.resultCount === 1 ? "" : "s"} · ${trace.completedMode} pipeline`;
  }

  async function hydrateReplayHistoryIfMissing(response: AnalyzeActiveTabOutput) {
    if (response.replayHistory) {
      return;
    }

    try {
      const historyResponse = await backgroundApi.getActiveReplayTraceHistory();
      if (historyResponse.ok) {
        setReplayHistory(historyResponse.value);
      }
    } catch (error) {
      logPopupEvent("replay-history-hydration-failed", {
        message: normalizeError(error),
      });
    }
  }


  function schedulePendingManualRefresh() {
    if (!pendingManualRefresh || refreshInFlight) {
      return;
    }

    pendingManualRefresh = false;
    void refreshAndRestartObservation();
  }

  function queueManualRefresh(): void {
    pendingManualRefresh = true;
    setNotice({
      variant: "warning",
      text: "Refresh will run after the current analysis finishes.",
    });
  }

  async function readObservationSessionState() {
    const target = sessionTarget();
    return target
      ? backgroundApi.getObservationSessionState(target)
      : backgroundApi.getActiveObservationSessionState();
  }

  function updateMatcherStatusFromSnapshot(snapshot: DetectionSessionSnapshot): void {
    if (snapshot.source !== "background" && snapshot.source !== "cache") return;

    if (snapshot.replaySummary || snapshot.status === "complete" || snapshot.status === "cached") {
      setMatcherStatus("idle");
      return;
    }

    setMatcherStatus(snapshot.detectionCount > 0 ? "matching" : "recording");
  }

  function applySnapshotRevision(snapshot: DetectionSessionSnapshot) {
    if (!isNewerSnapshotRevision(appliedSnapshotRevision, snapshot)) {
      logPopupEvent("snapshot-revision-ignored", { revision: snapshot.revision, updatedAt: snapshot.updatedAt });
      return;
    }

    if (!shouldApplyPopupSnapshotRevision({ currentAnalysis: analysis(), snapshot })) {
      appliedSnapshotRevision = snapshot;
      updateMatcherStatusFromSnapshot(snapshot);
      const nextMode = getPopupObservationModeFromSnapshot(snapshot);
      setLiveUpdateMode(nextMode);
      if (nextMode === "stopped") {
        setSessionTarget(null);
        setNotice({
          variant: "warning",
          text: "Observation stopped. Existing detections stay visible until refresh starts a new session.",
        });
      }
      logPopupEvent("snapshot-lifecycle-applied", {
        revision: snapshot.revision,
        resultCount: snapshot.analysis.results.length,
        status: snapshot.status,
        source: snapshot.source,
        reason: snapshot.enrichment.reason ?? "content-lifecycle-without-detector-output",
      });
      return;
    }

    appliedSnapshotRevision = snapshot;
    updateMatcherStatusFromSnapshot(snapshot);
    logPopupEvent("snapshot-revision-applied", {
      revision: snapshot.revision,
      resultCount: snapshot.analysis.results.length,
      status: snapshot.status,
    });
    applyAnalysisResponse(createStoredPopupAnalysisOutput({
      source: "origin-snapshot",
      analysis: snapshot.analysis,
      snapshot,
    }), { source: "auto" });
  }

  async function renderStoredAnalysisForActiveTab(identity: ActiveTabIdentity) {
    try {
      const stored = await readStoredPopupAnalysis(identity);
      if (!stored) {
        logPopupEvent("stored-analysis-miss", { hostname: identity.hostname });
        return false;
      }

      logPopupEvent("stored-analysis-rendered", {
        hostname: stored.analysis.hostname,
        source: stored.source,
        resultCount: stored.analysis.results.length,
        revision: stored.snapshot?.revision ?? 0,
      });
      appliedSnapshotRevision = stored.snapshot ?? null;
      if (stored.snapshot) {
        updateMatcherStatusFromSnapshot(stored.snapshot);
      } else {
        setMatcherStatus("idle");
      }
      applyAnalysisResponse(createStoredPopupAnalysisOutput(stored), {
        source: "initial",
        resetLateMarkers: true,
      });
      return true;
    } catch (error) {
      logPopupEvent("stored-analysis-render-failed", { message: normalizeError(error) });
      return false;
    }
  }

  async function refreshStatus() {
    try {
      const response = await backgroundApi.getAnalysisStatus();
      if (response.ok) {
        setStatus(response.value);
      }
    } catch (error) {
      setErrorMessage(normalizeError(error));
    }
  }

  function applyAnalysisResponse(
    response: AnalyzeActiveTabOutput,
    options: {
      source: "initial" | "manual" | "auto";
      resetLateMarkers?: boolean;
    },
  ) {
    const previousAnalysis = analysis();
    const preserveReplayState = shouldPreservePopupReplayState({ previousAnalysis, response });
    const update = buildPopupAnalysisUpdate({
      previousAnalysis,
      response,
      source: options.source,
      currentLateDetectionIds: lateAddedIds(),
      resetLateMarkers: options.resetLateMarkers,
    });

    setAnalysis(update.analysis);
    setLateAddedIds(update.lateDetectionIds);
    setExplanationsByTechnologyId(
      preserveReplayState ? explanationsByTechnologyId() : update.explanationsByTechnologyId,
    );
    setPipelineMode(response.replayTrace?.completedMode ?? (preserveReplayState ? pipelineMode() : "event"));
    setMatcherStatus(getMatcherStatusForAnalysisResponse(response, options.source, matcherStatus()));
    setReplayHistory(response.replayHistory ?? (preserveReplayState ? replayHistory() : []));
    setSessionTarget(response.sessionTarget ?? sessionTarget());

    logPopupEvent("analysis-applied", {
      source: options.source,
      analysisSource: update.analysis.source,
      cacheStatus: response.cache.status,
      resultCount: update.analysis.results.length,
      explanationCount: Object.keys(update.explanationsByTechnologyId).length,
      hostname: update.analysis.hostname,
      sessionStatus: response.session?.status ?? "none",
    });

    setLiveUpdateMode(update.observationMode);
    if (update.shouldKeepLiveUpdatesActive) {
      logPopupEvent("snapshot-stream-awaiting-revisions", {
        observationMode: update.observationMode,
      });
    }

    if (update.addedDetectionIds.length) {
      logPopupEvent("late-detections-found", {
        hostname: update.analysis.hostname,
        addedCount: update.addedDetectionIds.length,
      });
    }

    if (update.notice) {
      setNotice(update.notice);
    }

    void hydrateReplayHistoryIfMissing(response);
  }

  async function syncObservationState() {
    try {
      const response = await readObservationSessionState();
      if (!response.ok) {
        logPopupEvent("observation-sync-unavailable", {
          code: response.error.code,
          message: response.error.message,
        });
        setLiveUpdateMode("unknown");
        return;
      }

      logPopupEvent("observation-sync", {
        status: response.value.status,
        stopReason: response.value.stopReason,
      });

      const nextLiveUpdateMode = getPopupObservationModeFromSession(response.value);
      setLiveUpdateMode(nextLiveUpdateMode);
    } catch (error) {
      setLiveUpdateMode("unknown");
      setErrorMessage(normalizeError(error));
    }
  }

  async function loadLatestAnalysis(options: {
    input: AnalyzeActiveTabInput;
    resetLateMarkers?: boolean;
    source: "initial" | "manual" | "auto";
  }) {
    if (refreshInFlight) {
      if (options.source === "manual") {
        queueManualRefresh();
      }
      return;
    }

    refreshInFlight = true;
    const isUserVisibleRefresh = options.source !== "auto" && !(options.source === "initial" && analysis());
    if (isUserVisibleRefresh) {
      setBusy(true);
    }
    if (options.resetLateMarkers) {
      setLateAddedIds([]);
    }
    if (options.source !== "auto") {
      setNotice(null);
      setErrorMessage("");
    }

    try {
      setMatcherStatus("collecting");
      logPopupEvent("analysis-requested", {
        source: options.source,
        mode: options.input.mode,
        observe: options.input.observe,
        pipeline: "event",
      });

      const response = await backgroundApi.analyzeActiveTab(options.input);

      if (!response.ok) {
        logPopupEvent("analysis-failed", {
          source: options.source,
          code: response.error.code,
          message: response.error.message,
        });
        if (isUserVisibleRefresh) {
          setErrorMessage(formatPopupAppError(response.error));
        }
        setMatcherStatus("idle");
        return;
      }

      applyAnalysisResponse(response.value, options);

      await refreshStatus();
    } catch (error) {
      logPopupEvent("analysis-request-threw", {
        source: options.source,
        message: normalizeError(error),
      });
      if (isUserVisibleRefresh) {
        setErrorMessage(normalizeError(error));
      }
      setMatcherStatus("idle");
    } finally {
      if (isUserVisibleRefresh) {
        setBusy(false);
      }
      refreshInFlight = false;
      if (pendingActiveTabAnalysisSync) {
        pendingActiveTabAnalysisSync = false;
        void syncActiveTabIdentity("tab-change");
      }
      schedulePendingManualRefresh();
    }
  }

  async function stopObservation() {
    setBusy(true);
    setErrorMessage("");
    setNotice(null);
    try {
      const target = sessionTarget();
      logPopupEvent("observation-stop-requested", target ? { sessionId: target.sessionId, tabId: target.tabId } : undefined);
      const response = target
        ? await backgroundApi.stopObservationSession(target)
        : await backgroundApi.stopActiveObservationSession();
      if (!response.ok) {
        logPopupEvent("observation-stop-failed", {
          code: response.error.code,
          message: response.error.message,
        });
        setErrorMessage(formatPopupAppError(response.error));
        return;
      }

      logPopupEvent("observation-stopped", {
        status: response.value.status,
        stopReason: response.value.stopReason,
      });

      setSessionTarget(null);
      setLiveUpdateMode("stopped");
      setNotice({
        variant: "warning",
        text: "Observation stopped. Existing detections stay visible, but late-loaded page signals will not be captured until refresh starts a new session.",
      });
    } catch (error) {
      setErrorMessage(normalizeError(error));
    } finally {
      setBusy(false);
    }
  }

  async function refreshAndRestartObservation() {
    if (refreshInFlight) {
      queueManualRefresh();
      return;
    }

    await loadLatestAnalysis({
      input: {
        mode: "refresh",
        observe: "while-popup-open",
      },
      resetLateMarkers: true,
      source: "manual",
    });
  }

  function resetVisibleStateForActiveTab(identity: ActiveTabIdentity): void {
    unsubscribeSnapshotRevisions?.();
    unsubscribeSnapshotRevisions = subscribeToPopupSnapshotRevisions(identity, applySnapshotRevision);
    appliedSnapshotRevision = null;
    setActiveTabIdentity(identity);
    setAnalysis(null);
    setLateAddedIds([]);
    setExplanationsByTechnologyId({});
    setReplayHistory([]);
    setSessionTarget(null);
    setLiveUpdateMode("unknown");
    setMatcherStatus("idle");
  }

  async function activatePopupTabIdentity(identity: ActiveTabIdentity, reason: "initial" | "tab-change"): Promise<void> {
    if (isSameActiveTabIdentity(activeTabIdentity(), identity)) return;

    logPopupEvent("active-tab-identity-applied", {
      reason,
      tabId: identity.tabId,
      hostname: identity.hostname,
    });
    resetVisibleStateForActiveTab(identity);
    await renderStoredAnalysisForActiveTab(identity);
    await loadLatestAnalysis({
      input: {
        mode: "cache-first",
        observe: "while-popup-open",
      },
      resetLateMarkers: !analysis(),
      source: "initial",
    });
    await syncObservationState();
  }

  async function syncActiveTabIdentity(reason: "initial" | "tab-change"): Promise<void> {
    const identityResponse = await backgroundApi.getActiveTabIdentity();
    if (!identityResponse.ok) {
      logPopupEvent("active-tab-identity-unavailable", {
        reason,
        code: identityResponse.error.code,
        message: identityResponse.error.message,
      });
      if (reason === "initial") {
        setErrorMessage(formatPopupAppError(identityResponse.error));
      }
      return;
    }

    if (isSameActiveTabIdentity(activeTabIdentity(), identityResponse.value)) {
      return;
    }

    if (reason === "tab-change" && refreshInFlight) {
      pendingActiveTabAnalysisSync = true;
      logPopupEvent("active-tab-identity-rendered-during-refresh", {
        tabId: identityResponse.value.tabId,
        hostname: identityResponse.value.hostname,
      });
      resetVisibleStateForActiveTab(identityResponse.value);
      await renderStoredAnalysisForActiveTab(identityResponse.value);
      setNotice({
        variant: "warning",
        text: "Active tab changed. Cached detections are shown while the previous analysis finishes.",
      });
      return;
    }

    await activatePopupTabIdentity(identityResponse.value, reason);
  }

  onMount(() => {
    void (async () => {
      logPopupEvent("mount");
      await refreshStatus();
      await syncActiveTabIdentity("initial");
      activeTabPollTimer = globalThis.setInterval(() => {
        void syncActiveTabIdentity("tab-change");
      }, 1_000);
    })();
  });

  onCleanup(() => {
    if (activeTabPollTimer !== undefined) {
      globalThis.clearInterval(activeTabPollTimer);
      activeTabPollTimer = undefined;
    }
    unsubscribeSnapshotRevisions?.();
    unsubscribeSnapshotRevisions = undefined;
    const target = sessionTarget();
    logPopupEvent(target ? "cleanup-retain-observation" : "cleanup-without-owned-session", target
      ? { sessionId: target.sessionId, tabId: target.tabId }
      : undefined);
  });

  return (
    <PopupShell.Root busy={busy()}>
      <PopupShell.Hero>
        <PopupShell.HeroCopy>
          <p class="eyebrow">Technology Detection</p>
          <h1>RED Detector</h1>
          <p class="lede">
            Analyze the active tab locally, then keep the latest normalized
            detections up to date as the page lazy-loads.
          </p>
        </PopupShell.HeroCopy>

        <PopupShell.Actions>
          <button
            class="primary-button"
            disabled={busy()}
            onClick={() => void refreshAndRestartObservation()}
          >
            {busy() ? "Refreshing..." : "Refresh"}
          </button>
          <button
            class="secondary-button"
            disabled={busy() || liveUpdateMode() !== "active"}
            onClick={() => void stopObservation()}
          >
            Stop observation
          </button>
        </PopupShell.Actions>

        <PopupShell.Stats>
          <PopupShell.Stat
            accent="moss"
            label="Cached Analyses"
            value={status.totalAnalyses}
          />
          <PopupShell.Stat
            accent="amber"
            label="Tracked Origins"
            value={status.trackedOrigins}
          />
          <PopupShell.Stat
            accent="slate"
            label="Detected Technologies"
            value={resultCount()}
          />
        </PopupShell.Stats>

        <PopupShell.Metrics>
          <p>Source: {analysis()?.source ?? "none"}</p>
          <p>Host: {analysis()?.hostname ?? activeTabIdentity()?.hostname ?? "not analyzed"}</p>
          <p>Observation: {liveUpdateChipLabel().toLowerCase()}</p>
          <p>Matcher: {getMatcherStatusLabel(matcherStatus())}</p>
          <p>Pipeline: {pipelineMode()}</p>
        </PopupShell.Metrics>
      </PopupShell.Hero>

      <PopupShell.Feedback>
        <Show when={errorMessage()}>
          {(value) => <ErrorState message={value()} />}
        </Show>
        <Show when={notice()}>
          {(value) => (
            <p
              class={`status-message ${value().variant}`}
              role="status"
              aria-live="polite"
            >
              {value().text}
            </p>
          )}
        </Show>
        <Show when={isMatcherBusy(matcherStatus())}>
          <div class="scan-activity" role="status" aria-live="polite">
            <div class="scan-activity-orb" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div class="scan-activity-copy">
              <strong>{getMatcherActivityHeadline(matcherStatus())}</strong>
              <p>{getMatcherActivityDescription(matcherStatus())}</p>
            </div>
          </div>
        </Show>
      </PopupShell.Feedback>

      <PopupShell.ResultPanel
        modeChip={(
          <Show when={analysis()}>
            {(value) => <span class="mode-chip">{value().source}</span>}
          </Show>
        )}
        meta={
          matcherStatus() === "collecting"
            ? "Collecting page signals for the initial detector pass."
            : matcherStatus() === "matching"
              ? "Matching evidence in worker batches. New detector revisions are highlighted as they arrive."
              : matcherStatus() === "recording"
                ? "Recording the current replay trace. The run appears in replay history after final persistence."
                : hasLateDetections()
                  ? `${lateAddedIds().length} detection${lateAddedIds().length === 1 ? "" : "s"} changed during recent analysis updates and are marked below.`
                  : liveUpdateMode() === "active"
                    ? "Initial scan is complete. Observed page updates will appear separately as new evidence arrives."
                    : liveUpdateMode() === "stopped"
                      ? "Observation is stopped. The latest detector snapshot remains visible until refresh starts a new session."
                      : "Showing the latest detector snapshot for this page."
        }
      >
        <Show
          when={analysis()}
          fallback={
            <EmptyState message="Opening the popup loads the latest detections automatically." />
          }
        >
          {(value) => (
            <Show
              when={value().results.length}
              fallback={<EmptyState message="No technologies detected yet." />}
            >
              <For each={groupedResults()}>
                {(group) => (
                  <CategoryGroup
                    label={group.label}
                    results={group.results}
                    newDetectionIds={lateAddedIds()}
                    explanationsByTechnologyId={explanationsByTechnologyId()}
                  />
                )}
              </For>
              <Show when={replayHistory().length > 0}>
                <section class="replay-history" aria-label="Detection replay history">
                  <div class="replay-history-heading">
                    <h3>Replay History</h3>
                    <p class="result-meta">
                      {matcherStatus() === "recording" || matcherStatus() === "matching"
                        ? "Current run is still recording. Stored runs appear here when final replay persistence completes."
                        : "Recent stored runs for this origin. Open a run to inspect the pipeline stages and saved explanation count."}
                    </p>
                  </div>
                  <ol class="replay-history-list">
                    <For each={replayHistory().slice(0, 5)}>
                      {(trace) => (
                        <li>
                          <details>
                            <summary>
                              <span>{formatReplayTime(trace)}</span>
                              <span>{formatReplaySummary(trace)}</span>
                            </summary>
                            <ul class="evidence-list replay-event-list">
                              <For each={trace.events}>
                                {(event) => (
                                  <li>
                                    {event.sequence + 1}. {event.stage}: {event.count}
                                  </li>
                                )}
                              </For>
                            </ul>
                          </details>
                        </li>
                      )}
                    </For>
                  </ol>
                </section>
              </Show>
            </Show>
          )}
        </Show>
      </PopupShell.ResultPanel>
    </PopupShell.Root>
  );
}
