import { defineProxy } from "comctx";
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import { CategoryGroup } from "../../components/CategoryGroup";
import { EmptyState } from "../../components/EmptyState";
import { ErrorState } from "../../components/ErrorState";
import type {
  AnalysisStatus,
  SiteAnalysis,
} from "../../lib/detection/types";
import type {
  AnalyzeActiveTabInput,
  AnalyzeActiveTabOutput,
  BackgroundApi,
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
  groupDetectionsByPrimaryCategory,
  shouldRefreshObservedChange,
  type PopupNotice,
  type PopupObservationMode,
} from "../../lib/popup/view-model";

import "./App.css";

const POPUP_POLL_INTERVAL_MS = 1_500;
const POPUP_LOG_PREFIX = "[red-detector][popup]";

const [, injectBackgroundApi] = defineProxy(() => ({}) as BackgroundApi, {
  namespace: BACKGROUND_RPC_NAMESPACE,
  heartbeatCheck: false,
  transfer: false,
});

const backgroundApi = injectBackgroundApi(
  createBackgroundClientAdapter("popup", { href: globalThis.location?.href }),
);

function logPopupEvent(event: string, details?: Record<string, unknown>): void {
  if (details) {
    console.log(POPUP_LOG_PREFIX, event, details);
    return;
  }

  console.log(POPUP_LOG_PREFIX, event);
}

function normalizeError(error: unknown): string {
  return error instanceof Error
    ? error.message
    : "Unexpected messaging failure";
}

export default function App() {
  const [status, setStatus] = createStore<AnalysisStatus>({
    totalAnalyses: 0,
    trackedOrigins: 0,
  });
  const [busy, setBusy] = createSignal(false);
  const [pollingMode, setPollingMode] = createSignal<PopupObservationMode>("unknown");
  const [notice, setNotice] = createSignal<PopupNotice | null>(null);
  const [errorMessage, setErrorMessage] = createSignal("");
  const [analysis, setAnalysis] = createSignal<SiteAnalysis | null>(null);
  const [lateAddedIds, setLateAddedIds] = createSignal<string[]>([]);
  let pollTimer: ReturnType<typeof globalThis.setInterval> | undefined;
  let refreshInFlight = false;
  let pollingCheckInFlight = false;

  function resultCount() {
    return analysis()?.results.length ?? 0;
  }

  function groupedResults() {
    return groupDetectionsByPrimaryCategory(analysis()?.results ?? []);
  }

  function hasLateDetections() {
    return lateAddedIds().length > 0;
  }

  function pollingChipLabel() {
    return getPopupObservationLabel(pollingMode());
  }

  function clearPopupPolling() {
    if (pollTimer !== undefined) {
      clearInterval(pollTimer);
      pollTimer = undefined;
    }
  }

  function startPopupPolling() {
    clearPopupPolling();
    pollTimer = setInterval(() => {
      void refreshIfPageSignalsChanged();
    }, POPUP_POLL_INTERVAL_MS);
  }

  async function refreshIfPageSignalsChanged() {
    if (refreshInFlight || pollingCheckInFlight) {
      return;
    }

    pollingCheckInFlight = true;
    try {
      const response = await backgroundApi.getActiveObservationSessionState();
      if (!response.ok) {
        logPopupEvent("observation-state-unavailable", {
          code: response.error.code,
          message: response.error.message,
        });
        setPollingMode("unknown");
        clearPopupPolling();
        return;
      }

      const nextPollingMode = getPopupObservationModeFromSession(response.value);
      if (nextPollingMode !== "active") {
        logPopupEvent("observation-state-inactive", {
          status: response.value.status,
          stopReason: response.value.stopReason,
        });
        setPollingMode(nextPollingMode);
        clearPopupPolling();
        return;
      }

      setPollingMode(nextPollingMode);
      const latestAnalysis = analysis();
      if (shouldRefreshObservedChange({ session: response.value, analysis: latestAnalysis })) {
        logPopupEvent("observation-refresh-triggered", {
          sessionStatus: response.value.status,
          lastObservedAt: response.value.lastObservedAt ?? 0,
          lastAnalyzedAt: latestAnalysis?.analyzedAt ?? 0,
        });
        await refreshActiveObservationSession();
      }
    } catch {
      logPopupEvent("observation-state-check-failed");
      setPollingMode("unknown");
      clearPopupPolling();
    } finally {
      pollingCheckInFlight = false;
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
    const update = buildPopupAnalysisUpdate({
      previousAnalysis: analysis(),
      response,
      source: options.source,
      currentLateDetectionIds: lateAddedIds(),
      resetLateMarkers: options.resetLateMarkers,
    });

    setAnalysis(update.analysis);
    setLateAddedIds(update.lateDetectionIds);

    logPopupEvent("analysis-applied", {
      source: options.source,
      analysisSource: update.analysis.source,
      cacheStatus: response.cache.status,
      resultCount: update.analysis.results.length,
      hostname: update.analysis.hostname,
      sessionStatus: response.session?.status ?? "none",
    });

    setPollingMode(update.observationMode);
    if (update.shouldPoll) {
      startPopupPolling();
    } else {
      clearPopupPolling();
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
  }

  async function syncObservationState() {
    try {
      const response = await backgroundApi.getActiveObservationSessionState();
      if (!response.ok) {
        logPopupEvent("observation-sync-unavailable", {
          code: response.error.code,
          message: response.error.message,
        });
        setPollingMode("unknown");
        return;
      }

      logPopupEvent("observation-sync", {
        status: response.value.status,
        stopReason: response.value.stopReason,
      });

      const nextPollingMode = getPopupObservationModeFromSession(response.value);
      setPollingMode(nextPollingMode);
      if (nextPollingMode === "active") {
        startPopupPolling();
      } else {
        clearPopupPolling();
      }
    } catch (error) {
      setPollingMode("unknown");
      setErrorMessage(normalizeError(error));
    }
  }

  async function loadLatestAnalysis(options: {
    input: AnalyzeActiveTabInput;
    resetLateMarkers?: boolean;
    source: "initial" | "manual" | "auto";
  }) {
    if (refreshInFlight) {
      return;
    }

    refreshInFlight = true;
    const isUserVisibleRefresh = options.source !== "auto";
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
      logPopupEvent("analysis-requested", {
        source: options.source,
        mode: options.input.mode,
        observe: options.input.observe,
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
    } finally {
      if (isUserVisibleRefresh) {
        setBusy(false);
      }
      refreshInFlight = false;
    }
  }

  async function refreshActiveObservationSession() {
    if (refreshInFlight) {
      return;
    }

    refreshInFlight = true;
    try {
      logPopupEvent("observation-refresh-requested");
      const response = await backgroundApi.refreshActiveObservationSession();
      if (!response.ok) {
        logPopupEvent("observation-refresh-failed", {
          code: response.error.code,
          message: response.error.message,
        });
        setPollingMode("stopped");
        clearPopupPolling();
        return;
      }

      applyAnalysisResponse(response.value, {
        source: "auto",
      });
      await refreshStatus();
    } finally {
      refreshInFlight = false;
    }
  }

  async function stopPolling() {
    setBusy(true);
    setErrorMessage("");
    setNotice(null);
    try {
      logPopupEvent("observation-stop-requested");
      const response = await backgroundApi.stopActiveObservationSession();
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

      clearPopupPolling();
      setPollingMode("stopped");
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

  async function refreshAndRestartPolling() {
    await loadLatestAnalysis({
      input: {
        mode: "refresh",
        observe: "while-popup-open",
      },
      resetLateMarkers: true,
      source: "manual",
    });
  }

  onMount(() => {
    void (async () => {
      logPopupEvent("mount");
      await refreshStatus();
      await loadLatestAnalysis({
        input: {
          mode: "cache-first",
          observe: "while-popup-open",
        },
        resetLateMarkers: true,
        source: "initial",
      });
      await syncObservationState();
    })();
  });

  onCleanup(() => {
    logPopupEvent("cleanup-stop-observation");
    clearPopupPolling();
    void backgroundApi.stopActiveObservationSession();
  });

  return (
    <main class="popup-shell">
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">Technology Detection</p>
          <h1>RED Detector</h1>
          <p class="lede">
            Analyze the active tab locally, then keep the latest normalized
            detections up to date as the page lazy-loads.
          </p>
        </div>

        <div class="button-row">
          <button
            class="primary-button"
            disabled={busy()}
            onClick={() => void refreshAndRestartPolling()}
          >
            {busy() ? "Refreshing..." : "Refresh"}
          </button>
          <button
            class="secondary-button"
            disabled={busy() || pollingMode() !== "active"}
            onClick={() => void stopPolling()}
          >
            Stop observation
          </button>
        </div>

        <div class="stats-grid">
          <article class="stat-card accent-moss">
            <span class="stat-label">Cached Analyses</span>
            <strong class="stat-value">{status.totalAnalyses}</strong>
          </article>
          <article class="stat-card accent-amber">
            <span class="stat-label">Tracked Origins</span>
            <strong class="stat-value">{status.trackedOrigins}</strong>
          </article>
          <article class="stat-card accent-slate">
            <span class="stat-label">Detected Technologies</span>
            <strong class="stat-value">{resultCount()}</strong>
          </article>
        </div>

        <div class="mini-metrics">
          <p>Source: {analysis()?.source ?? "none"}</p>
          <p>Host: {analysis()?.hostname ?? "not analyzed"}</p>
          <p>Polling: {pollingChipLabel().toLowerCase()}</p>
        </div>
      </section>

      <Show when={errorMessage()}>
        {(value) => <ErrorState message={value()} />}
      </Show>
      <Show when={notice()}>
        {(value) => (
          <p class={`status-message ${value().variant}`}>{value().text}</p>
        )}
      </Show>

      <section class="panel result-panel">
        <div class="panel-heading">
          <div>
            <p class="panel-kicker">Normalized Results</p>
            <h2>Latest Site Analysis</h2>
          </div>
          <Show when={analysis()}>
            {(value) => <span class="mode-chip">{value().source}</span>}
          </Show>
        </div>
        <p class="result-meta">
          {hasLateDetections()
            ? `${lateAddedIds().length} detection${lateAddedIds().length === 1 ? "" : "s"} arrived after the popup opened and are marked below.`
            : pollingMode() === "active"
              ? "Showing the latest snapshot. Late detections will appear here automatically while polling is active."
              : "Showing the latest snapshot from the page. Refresh to resume polling for future late detections."}
        </p>

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
                  />
                )}
              </For>
            </Show>
          )}
        </Show>
      </section>
    </main>
  );
}
