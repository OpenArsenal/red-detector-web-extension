import { defineProxy } from "comctx";
import { createSignal, For, Show, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import { categories } from "../../data/categories";
import { CategoryGroup } from "../../components/CategoryGroup";
import { EmptyState } from "../../components/EmptyState";
import { ErrorState } from "../../components/ErrorState";
import type {
  AnalysisStatus,
  DetectionResult,
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

import "./App.css";

type PollingMode = "unknown" | "active" | "stopped";

type ScanNotice = {
  variant: "success" | "warning";
  text: string;
};

type ObservationMode = "idle" | "active" | "stopped" | "unknown";

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

function groupByCategory(results: DetectionResult[]) {
  const grouped = results.reduce<Record<string, DetectionResult[]>>(
    (groups, result) => {
      const category = result.categories[0] ?? "unknown";
      return {
        ...groups,
        [category]: [...(groups[category] ?? []), result],
      };
    },
    {},
  );

  return Object.entries(grouped)
    .map(([category, categoryResults]) => {
      const meta = categories[category] ?? categories.unknown;
      return {
        category,
        label: meta.label,
        priority: meta.priority,
        results: categoryResults,
      };
    })
    .sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label));
}

function getDetectionIds(results: DetectionResult[]) {
  return new Set(results.map((result) => result.technologyId));
}

function getAddedDetectionIds(
  previous: DetectionResult[],
  next: DetectionResult[],
) {
  const previousIds = getDetectionIds(previous);
  return next
    .filter((result) => !previousIds.has(result.technologyId))
    .map((result) => result.technologyId);
}

function mergeUniqueIds(previous: string[], next: string[]) {
  return [...new Set([...previous, ...next])];
}

export default function App() {
  const [status, setStatus] = createStore<AnalysisStatus>({
    totalAnalyses: 0,
    trackedOrigins: 0,
  });
  const [busy, setBusy] = createSignal(false);
  const [pollingMode, setPollingMode] = createSignal<ObservationMode>("unknown");
  const [notice, setNotice] = createSignal<ScanNotice | null>(null);
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
    return groupByCategory(analysis()?.results ?? []);
  }

  function hasLateDetections() {
    return lateAddedIds().length > 0;
  }

  function pollingChipLabel() {
    return pollingMode() === "active"
      ? "Observing"
      : pollingMode() === "stopped"
        ? "Stopped"
        : pollingMode() === "idle"
          ? "Idle"
          : "Loading";
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

      if (response.value.status !== "observing" && response.value.status !== "dirty") {
        logPopupEvent("observation-state-inactive", {
          status: response.value.status,
          stopReason: response.value.stopReason,
        });
        setPollingMode("stopped");
        clearPopupPolling();
        return;
      }

      setPollingMode("active");
      const latestAnalysis = analysis();
      const lastObservedAt = response.value.lastObservedAt ?? 0;
      const lastAnalyzedAt = latestAnalysis?.analyzedAt ?? 0;

      if (response.value.status === "dirty" || !latestAnalysis || lastObservedAt > lastAnalyzedAt) {
        logPopupEvent("observation-refresh-triggered", {
          sessionStatus: response.value.status,
          lastObservedAt,
          lastAnalyzedAt,
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
    const nextAnalysis = response.analysis;
    const previous = analysis();
    const addedIds = previous
      ? getAddedDetectionIds(previous.results, nextAnalysis.results)
      : [];

    if (options.resetLateMarkers) {
      setLateAddedIds([]);
    }

    setAnalysis(nextAnalysis);

    logPopupEvent("analysis-applied", {
      source: options.source,
      analysisSource: nextAnalysis.source,
      cacheStatus: response.cache.status,
      resultCount: nextAnalysis.results.length,
      hostname: nextAnalysis.hostname,
      sessionStatus: response.session?.status ?? "none",
    });

    if (response.session && (response.session.status === "observing" || response.session.status === "dirty")) {
      setPollingMode("active");
      startPopupPolling();
    } else {
      setPollingMode(response.cache.status === "hit" ? "idle" : "stopped");
      clearPopupPolling();
    }

    if (addedIds.length) {
      logPopupEvent("late-detections-found", {
        hostname: nextAnalysis.hostname,
        addedCount: addedIds.length,
      });
      setLateAddedIds((current) => mergeUniqueIds(current, addedIds));
      setNotice({
        variant: "success",
        text: `Observation found ${addedIds.length} new late detection${addedIds.length === 1 ? "" : "s"} on ${nextAnalysis.hostname}.`,
      });
      return;
    }

    if (options.source === "manual") {
      setNotice({
        variant: "success",
        text: `Refreshed ${nextAnalysis.results.length} technologies for ${nextAnalysis.hostname}. ${response.session ? "Observation is active again." : "Showing the latest cached state."}`,
      });
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

      if (response.value.status === "observing" || response.value.status === "dirty") {
        setPollingMode("active");
        startPopupPolling();
      } else {
        setPollingMode(response.value.status === "idle" ? "idle" : "stopped");
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
          setErrorMessage(`${response.error.code}: ${response.error.message}`);
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
        setErrorMessage(`${response.error.code}: ${response.error.message}`);
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
