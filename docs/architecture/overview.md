# Architecture overview after phase 21

The extension is now substantially aligned with the scoped event-based architecture for the browser-extension runtime, with the command-line interface still out of scope.

The user-visible flow remains active-tab-first. The popup asks the background service worker to analyze the selected `http` or `https` tab, the background validates the tab and cache state, the content script collects bounded page-local facts, and the popup renders normalized analysis results. The architectural change is inside the detector path: event-mode analysis can now run from normalized observation batches through matching, evidence, candidate creation, graph refinement, emission, replay, and explanation summaries.

## Current runtime map

Read this diagram from top to bottom. The popup owns the user workflow, the background owns privileged extension orchestration, the content script owns document-local collection, and the detector stages stay runtime-agnostic once observations enter the shared pipeline.

```text
Popup extension page
  -> BackgroundApi.analyzeActiveTab(...)
      -> active-tab validation
      -> per-origin analysis and replay cache lookup
      -> content-script readiness
      -> ExtensionPageCollector
          -> legacy PageSignals path when pipeline is omitted
          -> event ObservationBatch path when pipeline: "event"
              -> ContentApi.collectObservationBatch(...)
              -> background observation enrichment
                  -> response headers
                  -> MAIN-world JavaScript globals
                  -> same-origin script text
                  -> same-origin stylesheet text
      -> runObservationBatchPipeline(...)
          -> normalized-observations stage
          -> indexed pattern matching
          -> evidence entries
          -> candidates
          -> relationship refinement
          -> SiteAnalysis emission
      -> createDetectionReplayTrace(...)
      -> storage.saveAnalysis(...) + storage.saveReplayTrace(...)
  -> popup view model
  -> popup named regions
```

The compatibility path still exists deliberately. Omitted `pipeline` means `legacy`, which keeps lower-level API callers stable and gives maintainers an oracle for parity checks. The popup can request event mode explicitly while the legacy analyzer remains available for regression review.

## Event pipeline shape

The shared pipeline follows the architecture target without requiring collectors to share implementation details:

```text
extension observations
        │
        ▼
indexed pattern matches
        │
        ▼
evidence entries
        │
        ▼
evidence candidates
        │
        ▼
relationship refinement
        │
        ▼
final detections + replay explanations
```

The extension and a future command-line collector will not have identical capabilities. The browser extension is constrained by active-tab access, isolated content scripts, same-origin fetch limits, and Manifest V3 lifecycle behavior. The shared contract is the normalized observation and evidence model, not identical raw acquisition.

## Dirty refresh semantics

Dirty observation refreshes are now graph-correct for the active document. The flushed batch tells the background that relevant page facts changed. When that batch is non-empty, the background recollects the current normalized observation batch and reruns the event pipeline over the current evidence set.

```text
dirty session
  -> flush pending observations
  -> recollect current normalized observations
  -> append background-only observations
  -> rerun graph refinement and emission
```

This is intentionally different from merging final `SiteAnalysis.results`. A result-level merge can preserve old detections and append new ones, but it cannot safely re-evaluate `requires`, `excludes`, and implied support. Re-running the pipeline makes the relationship phase see the current candidate graph as one unit.

## Subsystem seams

| Subsystem | Current owner | Current behavior | Boundary to preserve |
| --- | --- | --- | --- |
| Popup | `src/entrypoints/popup/App.tsx`, `PopupRegions.tsx`, `src/lib/popup/view-model.ts` | Requests event mode, renders grouped results, compact explanation summaries, and observation state. | Popup receives background contracts and does not read collectors, storage, or detector internals directly. |
| Messaging | `src/lib/messaging/**`, `src/lib/contracts/analysis.ts` | `BackgroundApi` and `ContentApi` carry analysis, observation, and replay sidecar data. | Message names and response envelopes stay stable unless tests and docs move with them. |
| Lifecycle | `src/lib/lifecycle/observation.ts`, content observation store | Observation start, dirty refresh, navigation blocking, manual stop, expiry, and invalidation have named paths. | Manifest V3 background memory stays transient; durable state must use storage intentionally. |
| Collectors | `src/lib/collectors/**`, `src/lib/content/**` | Legacy snapshots and event batches share collection planning; event batches now receive background-only observations. | Collection policy stays outside the background entrypoint and does not expand permissions incidentally. |
| Observations | `src/lib/observations/**` | `PageSignals` and observed deltas can become ordered normalized observation batches. | Raw page data stays out of replay traces unless a redaction contract explicitly allows it. |
| Matching | `src/lib/detection/observation-matcher*.ts` | Observation matching uses a compiled matcher index when available. | Indexed and sequential matching must preserve observable evidence order. |
| Evidence and candidates | `src/lib/evidence/**`, `src/lib/candidates/**` | Evidence entries aggregate into candidates before relationship refinement. | Confidence, version, and rule-order compatibility remain test-protected. |
| Graph | `src/lib/candidates/refine.ts`, `src/lib/detection/registry-graph.ts` | `implies`, `requires`, and `excludes` refine candidates before final emission. | Requirements remain guards, implied support remains provenance, and exclusion choices remain deterministic. |
| Emission and replay | `src/lib/emission/**`, `src/lib/pipeline/replay.ts` | Refined candidates emit `SiteAnalysis` and redacted replay explanations. | `SiteAnalysis` remains the storage/popup compatibility envelope. |
| Storage | `src/lib/storage/**` | Per-origin analysis and replay traces are cached separately. | Cache key compatibility and replay redaction stay explicit. |

## Compatibility rules

- Active-tab analysis remains user-invoked.
- Cache keys remain per origin.
- Cache hits return cached analysis and replay traces without content-script collection.
- Omitted `pipeline` remains legacy at the background API boundary.
- Event-mode fresh analysis uses normalized observation batches plus background-only observations.
- Dirty refreshes rerun the event pipeline over current observations instead of merging final detections.
- Registry order remains compatibility data because graph tie-breaks and evidence ordering can depend on it.
- The CLI remains out of scope for the current browser-extension completion target.

## Remaining validation limits

The architecture is implemented enough for code review as the scoped extension architecture, but validation still has two layers.

Unit tests cover the core detector, matching, candidates, graph refinement, storage, messaging, popup view model, background observation enrichment, and dirty-refresh orchestration. Browser-level QA still needs Chrome because Vitest does not prove service-worker suspension behavior, runtime script injection, isolated-world versus main-world execution, popup teardown, or actual active-tab permission timing.
