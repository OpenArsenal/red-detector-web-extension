# Phase 15 event pipeline runtime

Phase 15 turned the sidecar event pipeline into a runtime-capable detector path.
Later cleanup removed the active-tab fallback to the old direct analyzer, so this note now records the
current steady state rather than the temporary migration switch.

The runtime story is:

```text
facts from the page
        │
        ▼
normalized observations
        │
        ▼
rules that matched those facts
        │
        ▼
candidate technologies
        │
        ▼
relationship rules clean up the list
        │
        ▼
final detections shown to the user
```

The implementation vocabulary is:

```text
PageSignals adapter or ObservationBatch
        │
        ▼
runDetectionPipeline(...) or runObservationBatchPipeline(...)
        │
        ▼
pattern matches -> evidence -> candidates -> graph refinement -> emission
```

`PageSignals` still appears in compatibility fixtures and in the content-side DOM
reader because it is a convenient way to collect a bounded document snapshot. The
background-facing extension path no longer exposes that snapshot as a detector
input. It asks for normalized observations and runs the event pipeline.

## What changed

`src/lib/pipeline/` owns the deterministic stage order. It emits the same public
`SiteAnalysis` shape that storage, messaging, and the popup already consume, but
it records public-safe stage counts for replay and explanation sidecars.

```text
normalized observations
  -> indexed matching
  -> evidence batch
  -> candidate batch
  -> relationship refinement
  -> SiteAnalysis emission
```

Replay metadata stays outside `SiteAnalysis`. That keeps the popup and storage
contract stable while still letting users see why a technology was detected.

## Extension runtime behavior

Active-tab analysis is event-only. The background collects an enriched
observation batch, runs `runObservationBatchPipeline(...)`, saves `SiteAnalysis`,
and saves a redacted replay trace.

Dirty observation refreshes no longer merge final detections. Late facts are
combined with the current session's baseline observation batch when available,
then graph refinement runs again over the whole fact set. If the Manifest V3
service worker lost the in-memory baseline, the background recollects the current
document instead of pretending it can safely merge final results.

## Tests added

`src/tests/pipeline/event-pipeline.test.ts` covers:

- snapshot inputs defaulting to the event pipeline
- event-path execution from `PageSignals`
- ordered public-safe coordinator events
- emission metadata
- precompiled registry artifact reuse
- direct execution from normalized observation batches

`src/tests/messaging/background-api.test.ts` covers active-tab analysis and
confirms that fresh analysis collects normalized observation batches, saves
`SiteAnalysis`, saves replay traces, and does not call the old direct analyzer.

## Non-goals

Phase 15 did not add the full replay inspector, registry source-file migration,
collector event cutover, or privacy/storage migrations. Later work completed the
extension observation cutover and removed the active-tab fallback.
