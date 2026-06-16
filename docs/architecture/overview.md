# Architecture overview after phase 8

This overview gives maintainers a single map for the current extension and the migration path toward the event-based detection engine. It describes verified repository shape after phases 1 through 7, not the earlier small-registry MVP narrative.

The current extension is still a Chrome-first Manifest V3 extension. The popup asks the background service worker to analyze the active tab, the background coordinates content-script collection and enrichment, the detector turns `PageSignals` into `SiteAnalysis`, and storage keeps only normalized analysis results. The migration has not changed that user-visible flow. It has made the seams around that flow explicit so future work can replace snapshot-shaped internals with normalized observations, evidence, replay, and shared CLI-compatible engine behavior.

## Runtime boundary map

This diagram shows the current runtime ownership. Read it from top to bottom. The popup owns user interaction, the background owns privileged orchestration, the content script owns page-local collection, and the detector/storage modules stay browser-agnostic where possible.

```text
Popup extension page
  -> BackgroundApi
      -> active tab validation
      -> per-origin cache lookup
      -> content script readiness
      -> ExtensionPageCollector
          -> ContentApi.collectPageSignals()
          -> background enrichment
          -> MAIN-world js-global probe
      -> analyzeSite(...) compatibility entrypoint
          -> compiled registry graph
          -> candidates
          -> relationship resolution
          -> SiteAnalysis
      -> storage.saveAnalysis(...)
  -> popup view model
  -> popup named regions
```

The important constraint is dependency direction. Popup code should not reach into collectors, graph internals, or storage. Content code should not know about the popup. The detector should keep accepting runtime-agnostic inputs so the future command-line interface can use the same engine with a different collector.

## Target pipeline map

The target architecture is event-based, but the repository is not there yet. Phase 8 records the staged destination so new changes can move in the same direction without forcing a flag-day rewrite.

```text
extension collector       cli collector
        │                    │
        └────► normalized observations
                    │
                    ▼
              pattern matches
                    │
                    ▼
              evidence entries
                    │
                    ▼
          candidate detections
                    │
                    ▼
        relationship and scoring engine
                    │
                    ▼
          final detections + explanations
                    │
                    ▼
             storage, reports, replay
```

The extension collector and the future CLI collector will not collect the same raw data. The extension is constrained by active-tab access, content-script isolation, and browser permissions. The CLI can use Playwright to capture deeper network and multi-page data. The shared boundary is therefore normalized observation and evidence shape, not identical collector implementation.

## Current subsystem seams

| Subsystem | Current owner | Stable behavior after phase 8 | Future migration direction |
| --- | --- | --- | --- |
| Popup | `src/entrypoints/popup/App.tsx`, `PopupRegions.tsx`, `src/lib/popup/view-model.ts` | Background responses are translated into popup view state before rendering. Named regions own layout structure. | Add explanation or replay regions without coupling UI to detector internals. |
| Messaging | `src/lib/messaging/**`, `src/lib/contracts/analysis.ts` | `BackgroundApi` and `ContentApi` remain the extension-facing runtime contracts. | Add runtime validation only at intentional boundaries. |
| Lifecycle | `src/lib/lifecycle/observation.ts`, content observation store | Observation start, refresh, navigation, invalidation, and stop decisions have named helpers. | Keep MV3 state transient unless it is explicitly persisted. |
| Collectors | `src/lib/collectors/**`, content signal modules | Extension collection is behind an extension collector boundary while still producing `PageSignals`. | Emit normalized observations beside or instead of whole snapshots. |
| Detection and graph | `src/lib/detection/**` | `analyzeSite(...)` remains compatible while delegating through a compiled registry graph and candidates. | Make evidence and explanation outputs first-class after equivalence tests protect results. |
| Storage | `src/lib/storage/**` | Per-origin `SiteAnalysis` cache semantics remain stable. | Keep evidence/replay persistence separate until the storage format is designed. |
| Tests | `src/tests/**`, `src/tests/support/**` | Shared fixtures and browser mocks prevent duplicated contract assumptions. | Add observation and replay fixtures when the normalized pipeline exists. |

## Compatibility rules to preserve

These rules are compatibility facts, not final product claims.

- `BackgroundApi` still analyzes the current active inspectable tab.
- Cache keys are still per origin, not per full URL.
- Cache hits still return normalized analysis without starting live observation.
- `PageSignals` remains the detector input until normalized observations are introduced deliberately.
- Registry order remains compatibility data because result ordering and graph conflict tie-breaks can depend on it.
- Popup grouping still uses the primary category for each detection.
- Popup named regions are layout seams, not a detector model.

## Open architecture decisions

The following decisions are intentionally not resolved by phase 8.

| Decision | Current answer | Why it stays open |
| --- | --- | --- |
| YAML or JSON registry source | Not active in runtime. TypeScript rules remain canonical. | The compiled graph seam exists, but source-format migration needs schema validation and order-preservation work. |
| CLI package location | Not decided. | The shared engine boundary is being prepared before repository/package layout is chosen. |
| Explanation output in popup | Not shown yet. | The candidate/evidence internals need stable public contracts before UI exposes explanations. |
| Replay persistence | Not stored yet. | Runtime event logs and storage format need separate privacy and size decisions. |
| Broader extension permissions | Not added. | Phase 8 records current active-tab-first behavior without expanding the permission model. |
