# Phase 21: event parity hardening

Phase 21 closes the correctness gap that remained after the popup could request event-mode analysis and dirty sessions could flush normalized observation batches.

The goal is not to delete the compatibility path. The legacy `PageSignals` analyzer remains the parity oracle. The event path now sees the same extension-only evidence surfaces during fresh analysis and no longer treats late refreshes as final-result append operations.

## What changed

Event-mode collection now has two layers:

```text
ContentApi.collectObservationBatch(...)
  -> content-script observations
  -> background-only observations
      -> response headers
      -> MAIN-world JavaScript globals
      -> same-origin script text
      -> same-origin stylesheet text
  -> runObservationBatchPipeline(...)
```

This matters because the content script can read the document, visible cookie names, storage keys, resource timings, and inline source text, but it cannot directly read page-owned JavaScript globals or perform the background enrichment that the legacy snapshot path already used.

Dirty observation refreshes now use the flushed batch as a change signal, then recollect the current normalized observation batch and rerun the event pipeline over that current evidence set:

```text
flush dirty observations
  -> if no new observations, return cached analysis when available
  -> if observations exist, recollect current event batch
  -> rerun pattern matching, evidence aggregation, graph refinement, and emission
```

The previous final-result merge could only add or replace detections. It could not safely re-evaluate `requires`, `excludes`, or implied support across the full evidence set. Re-running the pipeline preserves graph correctness because relationship refinement receives the current candidates together.

## Compatibility rules

- Omitted `pipeline` still means `legacy` at the background API boundary.
- The popup can still opt into `pipeline: "event"` for active-tab analysis.
- The legacy collector path still enriches `PageSignals` for parity and fallback review.
- Event replay traces remain redacted. They record stage counts and emitted explanations, not raw HTML, cookie values, or source payloads.
- Dirty refreshes return the existing session state instead of silently starting a second observation session when a non-empty batch was flushed.

## Validation focus

Targeted validation should cover these cases:

- event-mode fresh analysis sees response-header rules
- event-mode fresh analysis sees MAIN-world `jsGlobal` rules
- event-mode fresh analysis sees same-origin fetched script and stylesheet contents
- dirty refresh re-runs graph refinement over current observations rather than merging final detections
- cache-first requests without `pipeline: "event"` continue to use the legacy path

The local unit tests added for this phase cover background observation enrichment and the dirty-refresh orchestration path. Browser-level Manifest V3 behavior still needs manual Chrome QA because Vitest does not suspend service workers or exercise real extension injection.
