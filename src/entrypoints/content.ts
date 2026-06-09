import { defineProxy } from "comctx";

import { collectPageSignals } from "../lib/content/collect-page-signals";
import { validatePageSignals } from "../lib/detection/validate";
import type { ContentApi } from "../lib/messaging";
import {
  CONTENT_RPC_NAMESPACE,
  createContentServerAdapter,
} from "../lib/messaging";
import { errorResponse, ok } from "../lib/shared/result";

/**
 * Content entrypoint boundary: collect and validate before returning to the
 * background service worker. Detection stays out of the page context.
 */
function collectSignals(
  input: Parameters<ContentApi["collectPageSignals"]>[0],
) {
  try {
    const signals = collectPageSignals(input);
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

function createContentApi(): ContentApi {
  return {
    async collectPageSignals(input) {
      return collectSignals(input);
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
  main() {
    provideContentApi(createContentServerAdapter(), createContentApi);
  },
});
