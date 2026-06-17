# Phase 20 collector observation cutover

Phase 20 moved extension refreshes from complete page-signal reanalysis toward bounded observation batches. The event-runtime cleanup completes the extension side of that cutover: the background no longer exposes a legacy page-signal detector path for active-tab analysis.

Fresh popup analysis now collects enriched observation batches and routes them through `runObservationBatchPipeline(...)`.

```text
Content DOM scan
  -> content ObservationBatch
  -> background-only observations
  -> runObservationBatchPipeline(...)
  -> SiteAnalysis + replay trace
```

Dirty refreshes now preserve graph correctness by rerunning the event pipeline over combined observations:

```text
baseline observations
  + late MutationObserver / PerformanceObserver observations
  -> dedupe repeated facts
  -> pattern matching
  -> evidence entries
  -> candidate graph refinement
  -> final detections
```

## What changed

Initial and late content observations have adapters that convert content snapshots into normalized observation batches. The content script emits surfaces it can truthfully see: script URLs, stylesheet URLs, link tags, resource URLs, request URLs derived from resource timing, inline script/style contents, and meta tags.

The background enriches the initial batch with extension-only observations: response headers, page-owned JavaScript globals collected in the MAIN world, and bounded same-origin script or stylesheet text. These facts are appended as normal observations so matching does not need to know which extension context collected them.

The background keeps the active event batch in memory while the popup session is alive. Dirty refresh appends late observations to that batch, deduplicates repeated facts, and reruns matching, evidence creation, candidate aggregation, graph refinement, final emission, and replay trace creation. If Manifest V3 service-worker memory is lost, the refresh path recollects the current document rather than using a late-only batch as if it were a full explanation.

## Compatibility rules

- `PageSignals` remains an internal content-collector adapter and fixture shape, not the extension background detector path.
- The public `ContentApi` returns observation batches, not detector-ready page-signal snapshots.
- Late observation batches can add evidence, but final detections are never merged directly. The candidate graph is recalculated from combined observations.
- Unsupported rule kinds such as DNS, certificate issuer, robots, request headers, and active probes stay explicit extension capability gaps.
- This phase does not introduce background crawling, broad host permissions, or WebRequest collection.

## Tests added

The tests cover initial observation batch collection, observer snapshot normalization, content API batch flushing, background fresh analysis from an initial observation batch, background refresh from queued observation batches, and recovery when a service-worker memory reset requires a current document recollect.

## Non-goals

This phase does not make the popup a full replay inspector, add browser-level automation, migrate the TypeScript registry to YAML or JSON, or expand extension permissions.
