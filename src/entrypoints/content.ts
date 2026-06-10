import { defineProxy } from "comctx";

import { collectPageSignals } from "../lib/content/collect-page-signals";
import { createObservedPageSignals, type ObservedPageSignals } from "../lib/content/observed-page-signals";
import { validatePageSignals } from "../lib/detection/validate";
import type { ContentApi } from "../lib/messaging";
import {
  CONTENT_RPC_NAMESPACE,
  createContentServerAdapter,
} from "../lib/messaging";
import { errorResponse, ok } from "../lib/shared/result";

const DOM_MUTATION_DEBOUNCE_MS = 10_000;
const DOM_MUTATION_MAX_WAIT_MS = 30_000;

/**
 * Content entrypoint boundary: collect and validate before returning to the
 * background service worker. Detection stays out of the page context.
 */
async function collectSignals(
  input: Parameters<ContentApi["collectPageSignals"]>[0],
  observedSignals: ObservedPageSignals,
) {
  try {
    await observedSignals.waitForSettledChanges();

    const signals = collectPageSignals(input, observedSignals.snapshot());
    const validationError = validatePageSignals(signals);

    if (validationError) {
      return errorResponse("PAYLOAD_TOO_LARGE", validationError);
    }

    return ok(signals);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to collect page signals";
    const stack = error instanceof Error ? error.stack : undefined;
    return errorResponse("DETECTION_FAILED", message, stack);
  }
}

function createContentApi(observedSignals: ObservedPageSignals): ContentApi {
  return {
    async collectPageSignals(input) {
      return collectSignals(input, observedSignals);
    },
  };
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
  matches: ["http://*/*", "https://*/*"],
  runAt: "document_idle",
  main(ctx) {
    const observedSignals = createObservedPageSignals({
      debounceMs: DOM_MUTATION_DEBOUNCE_MS,
      maxWaitMs: DOM_MUTATION_MAX_WAIT_MS,
    });

    provideContentApi(createContentServerAdapter(), () => createContentApi(observedSignals));

    ctx.onInvalidated(() => {
      observedSignals.disconnect();
    });
  },
});
