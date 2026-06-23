import { defineProxy } from "comctx";
import { browser } from "wxt/browser";

import { collectPageSignals } from "@/lib/content/collect-page-signals";
import {
  createObservedPageSignals,
  type ObservedPageSignals,
  type ObservedPageSignalsQueuedBatchEvent,
} from "@/lib/content/observed-page-signals";
import { writeContentPageSessionSnapshot } from "@/lib/content/page-session-snapshots";
import { validatePageSignals } from "@/lib/detection/validate";
import { configureRedDetectorLogging, getRedDetectorLogger } from "@/lib/diagnostics/logging";
import type { CollectPageSignalsInput, ContentApi } from "@/lib/messaging";
import {
  CONTENT_RPC_NAMESPACE,
  createContentServerAdapter,
} from "@/lib/messaging";
import { createObservationDirtyNotification } from "@/lib/messaging/observation-notifications";
import type {
  ContentPageSessionSnapshotTarget,
  ObservationStopReason,
} from "@/lib/contracts/analysis";
import { timeAsyncSpan, timeSyncSpan, type TimingContext } from "@/lib/diagnostics/timing";
import { normalizePageSignals } from "@/lib/observations";
import { errorResponse, ok } from "@/lib/shared/result";

configureRedDetectorLogging("content");

const contentLogger = getRedDetectorLogger("content");
const DOM_MUTATION_THROTTLE_MS = 1_500;
const CONTENT_RUNTIME_KEY = '__redDetectorContentRuntimeV1';

type ContentRuntimeState = {
  dispose(): void;
};

/**
 * Content-script runtime pieces that share one observation timer.
 *
 * The RPC API exposes manual start, stop, and status calls to the background.
 * The local `dispose` function is not part of RPC; it lets WXT invalidation stop
 * the observer with the correct reason without pretending the user clicked Stop.
 */
export type ContentRuntime = {
  /** API registered with the content-script messaging adapter. */
  contentApi: ContentApi;
  /** Stop timers and observers for content-runtime shutdown. */
  dispose(reason: ObservationStopReason): void;
  /** Publish a durable lifecycle revision after the observer queues new facts. */
  publishObservedBatchQueued(event: ObservedPageSignalsQueuedBatchEvent): void;
};

function getRuntimeState(): ContentRuntimeState | undefined {
  return (globalThis as unknown as Record<string, ContentRuntimeState | undefined>)[CONTENT_RUNTIME_KEY];
}

function setRuntimeState(state: ContentRuntimeState): void {
  (globalThis as unknown as Record<string, ContentRuntimeState | undefined>)[CONTENT_RUNTIME_KEY] = state;
}

function clearRuntimeState(state: ContentRuntimeState): void {
  const runtime = globalThis as unknown as Record<string, ContentRuntimeState | undefined>;
  if (runtime[CONTENT_RUNTIME_KEY] === state) {
    delete runtime[CONTENT_RUNTIME_KEY];
  }
}

function logContentEvent(event: string, details?: Record<string, unknown>): void {
  contentLogger.debug("[red-detector][content] {event}", {
    event,
    ...(details ?? {}),
  });
}

function notifyBackgroundObservationDirty(event: ObservedPageSignalsQueuedBatchEvent): void {
  const message = createObservationDirtyNotification(event.session, event.observedAt);
  if (!message) {
    return;
  }

  void browser.runtime.sendMessage(message).catch((error: unknown) => {
    logContentEvent("observation-dirty-notify-failed", {
      sessionId: event.session.sessionId,
      message: error instanceof Error ? error.message : "Background notification failed",
    });
  });
}

function describeContentError(error: unknown): string {
  return error instanceof Error ? error.message : "Unexpected content runtime failure";
}

function summarizeSignals(signals: Awaited<ReturnType<typeof collectPageSignals>>): Record<string, unknown> {
  return {
    hostname: signals.hostname,
    scriptCount: signals.scripts.length,
    stylesheetCount: signals.stylesheets.length,
    linkCount: signals.links.length,
    resourceCount: signals.resources.length,
    requestCount: signals.requests.length,
    scriptContentCount: signals.scriptContents.length,
    stylesheetContentCount: signals.stylesheetContents.length,
    metaKeyCount: Object.keys(signals.meta).length,
    domSelectorCount: Object.keys(signals.dom.selectors).length,
    jsGlobalCount: Object.keys(signals.jsGlobals).length,
    htmlMatchCount: Object.keys(signals.htmlMatches ?? {}).length,
    textChars: signals.text.length,
    cookieNameCount: Object.keys(signals.cookies).length,
    localStorageKeyCount: Object.keys(signals.storage.localStorage).length,
    sessionStorageKeyCount: Object.keys(signals.storage.sessionStorage).length,
    collectedAt: signals.collectedAt,
  };
}

/**
 * Content entrypoint boundary: collect and validate before returning to the
 * background service worker. Detection stays out of the page context.
 */
async function collectSignals(
  input: CollectPageSignalsInput,
  observedSignals: ObservedPageSignals,
) {
  try {
    const timingContext: TimingContext = {
      traceId: input.timingTraceId,
      surface: 'content',
      details: {
        hostname: globalThis.location?.hostname,
        tier: input.tier ?? 'initial',
      },
    };
    logContentEvent("collect-start", {
      hostname: globalThis.location?.hostname,
      includeHtml: Boolean(input.includeHtml),
      includeText: Boolean(input.includeText),
      includeScriptContent: Boolean(input.includeScriptContent),
      includeStylesheetContent: Boolean(input.includeStylesheetContent),
      selectorProbeCount: input.selectorProbeList.length,
      htmlProbeCount: input.htmlProbeList?.length ?? 0,
      timingTraceId: input.timingTraceId,
    });

    const snapshot = timeSyncSpan(
      'content.observed-signals.snapshot',
      timingContext,
      () => observedSignals.snapshot(),
      (value) => ({
        scriptCount: value.scripts?.length ?? 0,
        stylesheetCount: value.stylesheets?.length ?? 0,
        resourceCount: value.resources?.length ?? 0,
      }),
    );
    const signals = timeSyncSpan(
      'content.collect-signals.collect-page-signals',
      timingContext,
      () => collectPageSignals(input, snapshot),
      (value) => summarizeSignals(value),
    );
    const validationError = timeSyncSpan(
      'content.collect-signals.validate-page-signals',
      timingContext,
      () => validatePageSignals(signals),
      (value) => ({ valid: value === null }),
    );

    if (validationError) {
      logContentEvent("collect-validation-failed", {
        hostname: signals.hostname,
        error: validationError,
      });
      return errorResponse("PAYLOAD_TOO_LARGE", validationError);
    }

    logContentEvent("collect-success", summarizeSignals(signals));

    return ok(signals);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to collect page signals";
    const stack = error instanceof Error ? error.stack : undefined;
    logContentEvent("collect-failed", {
      hostname: globalThis.location?.hostname,
      message,
    });
    return errorResponse("DETECTION_FAILED", message, stack);
  }
}

/**
 * Collect the current document and return the event-pipeline input shape.
 *
 * The content script still uses the bounded DOM collector internally because it
 * owns safe access to the document. The RPC contract no longer exposes the
 * snapshot when the background asks for event-mode analysis.
 */
async function collectInitialObservationBatch(
  input: CollectPageSignalsInput,
  observedSignals: ObservedPageSignals,
) {
  const timingContext: TimingContext = {
    traceId: input.timingTraceId,
    surface: 'content',
    details: {
      hostname: globalThis.location?.hostname,
      tier: input.tier ?? 'initial',
    },
  };
  const response = await timeAsyncSpan(
    'content.collect-observation-batch.collect-signals',
    timingContext,
    () => collectSignals(input, observedSignals),
    (value) => ({ ok: value.ok }),
  );
  if (!response.ok) {
    return response;
  }

  return ok({
    batch: timeSyncSpan(
      'content.collect-observation-batch.normalize-page-signals',
      timingContext,
      () => normalizePageSignals(response.value, {
        collector: "content-snapshot",
        interface: "extension",
        observedAt: response.value.collectedAt,
      }),
      (value) => ({ observationCount: value.observations.length }),
    ),
  });
}

/**
 * Build the content-script runtime around one observation store.
 *
 * Tests and the WXT entrypoint both use this factory so timer cleanup follows the
 * same path in normal RPC calls and content-script invalidation. Invalidation is
 * a browser lifecycle event, not a manual stop, so the returned `dispose` method
 * records the real stop reason on the observed-signal store.
 */
export function createContentRuntime(observedSignals: ObservedPageSignals): ContentRuntime {
  let observationExpiryTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
  let activeSnapshotTarget: ContentPageSessionSnapshotTarget | undefined;

  function clearObservationExpiry() {
    if (observationExpiryTimer !== undefined) {
      globalThis.clearTimeout(observationExpiryTimer);
      observationExpiryTimer = undefined;
    }
  }

  /**
   * Content lifecycle changes become durable popup-visible revisions when the
   * background has supplied a storage target for the current tab document. The
   * write runs outside the RPC response so observation can start and flush
   * without waiting on storage latency.
   */
  function publishContentSnapshot(
    status: "observing" | "stopped",
    details: { readonly observedAt?: number; readonly reason?: string } = {},
  ): void {
    const target = activeSnapshotTarget;
    if (!target) {
      return;
    }

    void writeContentPageSessionSnapshot({
      target,
      status,
      observedAt: details.observedAt,
      reason: details.reason,
    }).catch((error) => {
      logContentEvent("snapshot-write-failed", {
        status,
        message: describeContentError(error),
      });
    });
  }

  const contentApi: ContentApi = {
    async collectObservationBatch(input) {
      return collectInitialObservationBatch(input, observedSignals);
    },

    async beginObservationSession(input) {
      clearObservationExpiry();

      logContentEvent("observation-start", {
        hostname: globalThis.location?.hostname,
        sessionId: input.sessionId,
        durationMs: input.policy.durationMs,
        throttleMs: input.policy.throttleMs,
        maxPendingNodes: input.policy.maxPendingNodes,
        maxMutations: input.policy.maxMutations,
      });

      activeSnapshotTarget = input.snapshotTarget;
      const session = observedSignals.beginObservationSession({
        sessionId: input.sessionId,
        expectedUrl: input.expectedUrl,
        durationMs: input.policy.durationMs,
        maxPendingNodes: input.policy.maxPendingNodes,
        maxMutations: input.policy.maxMutations,
      });
      publishContentSnapshot("observing", {
        observedAt: session.startedAt,
        reason: "observation-session-started",
      });

      observationExpiryTimer = globalThis.setTimeout(() => {
        clearObservationExpiry();
        logContentEvent("observation-expired", {
          hostname: globalThis.location?.hostname,
          sessionId: input.sessionId,
        });
        const expiredSession = observedSignals.stopObservationSession("expired");
        publishContentSnapshot("stopped", {
          observedAt: expiredSession.lastObservedAt,
          reason: expiredSession.stopReason ?? "expired",
        });
        activeSnapshotTarget = undefined;
      }, input.policy.durationMs);

      logContentEvent("observation-active", {
        hostname: globalThis.location?.hostname,
        sessionId: session.sessionId,
        status: session.status,
        expiresAt: session.expiresAt,
      });

      return ok(session);
    },

    async flushObservationBatch() {
      const flush = observedSignals.flushObservationBatch();
      if (flush.batch && flush.batch.observations.length > 0) {
        publishContentSnapshot("observing", {
          observedAt: flush.batch.observedAt,
          reason: "observation-batch-flushed",
        });
      }

      return ok(flush);
    },

    async stopObservationSession() {
      clearObservationExpiry();
      const session = observedSignals.stopObservationSession("manual");
      publishContentSnapshot("stopped", {
        observedAt: session.lastObservedAt,
        reason: session.stopReason ?? "manual",
      });
      activeSnapshotTarget = undefined;
      logContentEvent("observation-stopped", {
        hostname: globalThis.location?.hostname,
        sessionId: session.sessionId,
        status: session.status,
        stopReason: session.stopReason,
      });
      return ok(session);
    },

    async getObservationSessionState() {
      return ok(observedSignals.status());
    },
  };

  return {
    contentApi,
    publishObservedBatchQueued(event) {
      publishContentSnapshot("observing", {
        observedAt: event.observedAt,
        reason: "observation-batch-queued",
      });
    },
    dispose(reason) {
      clearObservationExpiry();
      observedSignals.disconnect(reason);
      publishContentSnapshot("stopped", { reason });
      activeSnapshotTarget = undefined;
    },
  };
}

/**
 * Build only the RPC API for callers that do not need runtime disposal control.
 */
export function createContentApi(observedSignals: ObservedPageSignals): ContentApi {
  return createContentRuntime(observedSignals).contentApi;
}

const [provideContentApi] = defineProxy(
  (createApi: () => ContentApi) => createApi(),
  {
    namespace: CONTENT_RPC_NAMESPACE,
    heartbeatCheck: false,
    transfer: false,
  },
);

export default defineContentScript({
  registration: "runtime",
  runAt: "document_idle",
  noScriptStartedPostMessage: true,
  main(ctx) {
    if (getRuntimeState()) {
      logContentEvent("runtime-already-active", {
        hostname: globalThis.location?.hostname,
      });
      return;
    }

    logContentEvent("runtime-ready", {
      hostname: globalThis.location?.hostname,
      throttleMs: DOM_MUTATION_THROTTLE_MS,
    });

    let runtime: ContentRuntime | undefined;
    const observedSignals = createObservedPageSignals({
      throttleMs: DOM_MUTATION_THROTTLE_MS,
      onObservationBatchQueued(event) {
        runtime?.publishObservedBatchQueued(event);
        notifyBackgroundObservationDirty(event);
      },
    });
    runtime = createContentRuntime(observedSignals);
    const { contentApi } = runtime;

    const state: ContentRuntimeState = {
      dispose() {
        logContentEvent("runtime-dispose", {
          hostname: globalThis.location?.hostname,
        });
        runtime.dispose("invalidated");
        clearRuntimeState(state);
      },
    };

    setRuntimeState(state);
    provideContentApi(createContentServerAdapter(), () => contentApi);

    ctx.onInvalidated(() => {
      state.dispose();
    });
  },
});
