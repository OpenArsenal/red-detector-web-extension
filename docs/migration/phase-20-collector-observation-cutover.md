# Phase 20 collector observation cutover

Phase 20 moves dirty observation refreshes from “always collect another complete
`PageSignals` snapshot” toward “flush bounded normalized observations when the
content observer already knows what changed.” The old snapshot path remains as a
fallback because some evidence surfaces still require a full collector pass or
background enrichment.

```text
MutationObserver / PerformanceObserver
        │
        ▼
ObservedPageSignalsSnapshot
        │
        ▼
NormalizedObservation[]
        │
        ▼
ObservationBatchController
        │
        ▼
runObservationBatchPipeline(...)
        │
        ▼
merged SiteAnalysis + replay trace
```

## What changed

Late content observations now have a dedicated adapter that converts observer
snapshots into normalized observation batches. The adapter only emits surfaces
the content observer can truthfully see after the initial scan: script URLs,
stylesheet URLs, link tags, resource URLs, request URLs derived from resource
timing, inline script/style contents, and meta tags.

The content observer owns a bounded observation batch controller. Mutation and
resource updates are queued into that controller as normalized observations. The
background can flush the next bounded batch through content RPC instead of
asking for a full page snapshot every time the popup notices a dirty session.

The background refresh path now tries the queued observation batch first. When a
batch exists, it runs `runObservationBatchPipeline(...)`, merges the emitted
results into the latest cached analysis, persists the merged analysis, and writes
a replay trace. When no batch exists or no cached baseline exists, the background
falls back to the existing fresh analysis path.

## Compatibility rules

- `collectPageSignals(...)` remains the compatibility collector for initial
  analysis and fallback refreshes.
- Late observation batches are append-oriented. They can add or strengthen
  detections, but they do not remove existing detections because absence in a
  late batch does not prove that earlier evidence disappeared.
- Extension-supported source limits remain unchanged. Unsupported rule kinds
  such as DNS, certificate issuer, robots, request headers, and active probes
  stay explicit capability gaps.
- The event pipeline remains available through the existing coordinator and the
  observation-batch entry point. This phase does not introduce background
  crawling, new permissions, or WebRequest collection.

## Tests added

The tests cover observer snapshot normalization, content API batch flushing,
background refresh from a queued observation batch, and fallback refresh behavior
when the content observer has no queued batch.

## Non-goals

This phase does not make the popup a full replay inspector, add browser-level
automation, migrate the TypeScript registry to YAML or JSON, or expand extension
permissions.
