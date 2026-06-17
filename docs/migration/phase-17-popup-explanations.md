# Phase 17 popup explanation summaries

Phase 17 makes replay explanations visible in the extension popup without changing the storage cache, default detector path, or `SiteAnalysis` rendering contract.

The important maintainer benefit is a small user-facing slice of the replay system. The background can now return a redacted trace beside fresh active-tab analysis, the popup view model can map that trace into compact explanation summaries, and the result cards can render those summaries without depending on the full replay schema.

## What changed

The active-tab output contract now includes an optional `replayTrace` field. Fresh analysis responses can attach this field, while cache hits continue to return only cached `SiteAnalysis` data because the current storage layer does not persist replay traces.

```text
fresh active-tab analysis
        │
        ▼
runDetectionPipeline(...)
        │
        ├────► SiteAnalysis saved to existing cache
        │
        └────► createDetectionReplayTrace(...)
                    │
                    ▼
            AnalyzeActiveTabOutput.replayTrace
```

The popup does not render the full trace. It maps trace explanations into `PopupDetectionExplanationSummary` records keyed by technology id. This keeps Solid components focused on the card UI instead of teaching them the pipeline replay schema.

```text
DetectionReplayTrace.explanations
        │
        ▼
buildPopupExplanationLookup(...)
        │
        ▼
CategoryGroup
        │
        ▼
TechnologyCard explanation summary
```

## Compatibility rules

Phase 17 keeps these compatibility rules:

- `SiteAnalysis` stays the stable cache and result rendering contract.
- `replayTrace` is optional because cache hits cannot supply trace data yet.
- explanation summaries are keyed by technology id and ignored when a detection has no matching explanation.
- technology cards prefer replay summaries when available and keep the existing evidence-list fallback otherwise.
- popup components receive compact view-model data, not the full replay trace.

## Popup composition

The popup keeps the existing named-region shell. Explanation rendering is pushed down through explicit composition:

```text
App owns response state
  └─► CategoryGroup receives grouped results plus explanation lookup
        └─► TechnologyCard receives one optional explanation summary
```

This matches the existing Solid composition direction: parent state stays in `App`, data shaping stays in the view model, and leaf components render explicit props. The component does not destructure reactive props into local values, so Solid can keep prop access reactive.

## Tests added

The popup view-model tests cover the replay-to-summary mapping. Background tests should continue to cover active-tab output shape and cache-hit behavior when replay traces are attached to fresh responses.

The most important assertions are:

- fresh event-pipeline responses include a trace with explanations when available.
- cache hits omit `replayTrace` because storage still persists only `SiteAnalysis`.
- popup summaries include headline, capped reasons, primary evidence kind, and inference metadata.
- technology cards can render summaries without requiring full replay traces.

## Non-goals

Phase 17 does not persist replay traces, add a replay inspector, make the event pipeline the default detector path, or redesign the result card layout beyond a compact explanation block.

Those changes belong to later storage, popup, and runtime-promotion work.

## Review checklist

When reviewing these patches, check these points first:

- Does `AnalyzeActiveTabOutput` keep `replayTrace` optional?
- Do cache-hit responses avoid inventing trace data from cached `SiteAnalysis`?
- Does the popup view model shield Solid components from the full replay schema?
- Do explanation cards avoid raw observations, HTML, cookies, source contents, or request payloads?
- Does evidence rendering still work when a replay explanation is missing?
