import { defineProxy } from "comctx";

import { collectPageSignals } from "../lib/content/collect-page-signals";
import {
  createObservedPageSignals,
  type ObservedPageSignals,
} from "../lib/content/observed-page-signals";
import { validatePageSignals } from "../lib/detection/validate";
import type { ContentApi } from "../lib/messaging";
import {
  CONTENT_RPC_NAMESPACE,
  createContentServerAdapter,
} from "../lib/messaging";
import type { ObservationStopReason } from "../lib/contracts/analysis";
import { errorResponse, ok } from "../lib/shared/result";

const DOM_MUTATION_THROTTLE_MS = 1_500;
const CONTENT_RUNTIME_KEY = '__redDetectorContentRuntimeV1';
const CONTENT_LOG_PREFIX = '[red-detector][content]';

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
  if (details) {
    console.log(CONTENT_LOG_PREFIX, event, details);
    return;
  }

  console.log(CONTENT_LOG_PREFIX, event);
}

function summarizeSignals(signals: Awaited<ReturnType<typeof collectPageSignals>>) {
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
  input: Parameters<ContentApi["collectPageSignals"]>[0],
  observedSignals: ObservedPageSignals,
) {
  try {
    logContentEvent("collect-start", {
      hostname: globalThis.location?.hostname,
      includeHtml: Boolean(input.includeHtml),
      selectorProbeCount: input.selectorProbeList.length,
      htmlProbeCount: input.htmlProbeList?.length ?? 0,
    });

    const signals = collectPageSignals(input, observedSignals.snapshot());
    const validationError = validatePageSignals(signals);

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
 * Build the content-script runtime around one observation store.
 *
 * Tests and the WXT entrypoint both use this factory so timer cleanup follows the
 * same path in normal RPC calls and content-script invalidation. Invalidation is
 * a browser lifecycle event, not a manual stop, so the returned `dispose` method
 * records the real stop reason on the observed-signal store.
 */
export function createContentRuntime(observedSignals: ObservedPageSignals): ContentRuntime {
  let observationExpiryTimer: ReturnType<typeof globalThis.setTimeout> | undefined;

  function clearObservationExpiry() {
    if (observationExpiryTimer !== undefined) {
      globalThis.clearTimeout(observationExpiryTimer);
      observationExpiryTimer = undefined;
    }
  }

  const contentApi: ContentApi = {
    async collectPageSignals(input) {
      return collectSignals(input, observedSignals);
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

      const session = observedSignals.beginObservationSession({
        sessionId: input.sessionId,
        expectedUrl: input.expectedUrl,
        durationMs: input.policy.durationMs,
        maxPendingNodes: input.policy.maxPendingNodes,
        maxMutations: input.policy.maxMutations,
      });

      observationExpiryTimer = globalThis.setTimeout(() => {
        clearObservationExpiry();
        logContentEvent("observation-expired", {
          hostname: globalThis.location?.hostname,
          sessionId: input.sessionId,
        });
        observedSignals.stopObservationSession("expired");
      }, input.policy.durationMs);

      logContentEvent("observation-active", {
        hostname: globalThis.location?.hostname,
        sessionId: session.sessionId,
        status: session.status,
        expiresAt: session.expiresAt,
      });

      return ok(session);
    },

    async stopObservationSession() {
      clearObservationExpiry();
      const session = observedSignals.stopObservationSession("manual");
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
    dispose(reason) {
      clearObservationExpiry();
      observedSignals.disconnect(reason);
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

    const observedSignals = createObservedPageSignals({
      throttleMs: DOM_MUTATION_THROTTLE_MS,
    });
    const runtime = createContentRuntime(observedSignals);
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
