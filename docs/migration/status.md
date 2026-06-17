# Migration status after phase 20

This status page lets reviewers see which migration seams are complete, which seams are only compatibility wrappers, and which future architecture goals remain unimplemented. It should be updated whenever a phase changes a boundary that another maintainer would rely on.

The project is now past the first documentation pass, the first normalized-observation seam, and the first evidence repository seam. Phases 1 through 8 established behavior baselines, contracts, collectors, lifecycle rules, graph seams, popup view-state boundaries, shared test fixtures, and architecture docs. Phase 9 adds the observation contract that future evidence and replay work can target without changing detector behavior. Phase 10 adds evidence entries and an in-memory repository while keeping detector output unchanged. Phase 11 adds a sidecar observation matcher that turns normalized observations into pattern-match events and evidence entries without replacing `analyzeSite(...)`. Phase 12 adds evidence candidate aggregation so those entries can become technology candidates before graph refinement. Phase 13 refines those candidates through registry relationships. Phase 14 emits the refined candidates back into `SiteAnalysis` and adds parity fixtures against `analyzeSite(...)`. Phase 15 makes that sidecar path runtime-capable behind an explicit active-tab pipeline switch. Phase 16 adds redacted replay traces and detection explanations from the pipeline result. Phase 17 renders compact replay explanation summaries in the popup. Phase 18 persists redacted replay traces beside the analysis cache so cache hits can return explanation data. Phase 19 adds compiler artifacts, matcher-index reuse, and bounded observation batch controls. Phase 20 connects content-observer batches to the background refresh path.

## Phase status matrix

| Phase | Status | Main artifact | What is safe to assume now | What is still not safe to assume |
| --- | --- | --- | --- | --- |
| 1 behavior baseline | Complete | `docs/migration/phase-1-behavior-baseline.md` | Cache-first, refresh, unsupported URL, content unavailable, and observation baseline behavior are documented. | Browser-level automation exists. Manual Chrome QA is still required. |
| 2 contract seams | Complete | `src/lib/contracts/analysis.ts` | Analysis contracts, registry provider, storage key helper, and collector planning seams exist. | Runtime payloads have deep schema validation. |
| 3 collector boundary | Complete | `src/lib/collectors/extension-page-collector.ts` | Extension collection is grouped behind a collector boundary that still returns `PageSignals`. | Collectors emit normalized observations. |
| 4 lifecycle model | Complete | `src/lib/lifecycle/observation.ts` | Observation start, refresh eligibility, navigation ownership, and invalidation disposal are explicit. | Background service-worker memory is durable. |
| 5 graph seam | Complete | `src/lib/detection/registry-graph.ts` | The detector can run through a compiled registry graph while preserving current output shape. | YAML or JSON registry source is active. |
| 6 popup view model | Complete | `src/lib/popup/view-model.ts` | Popup state translation is testable outside the Solid component. | Popup shows full replay timelines or all evidence. |
| 7 test boundaries | Complete | `src/tests/support/` | Shared fixtures and browser storage mocks exist for subsystem tests. | The test suite includes full extension runtime automation. |
| 8 architecture docs | Complete | `docs/architecture/overview.md` and this status page | Future prompts can cite the current migrated shape instead of stale README assumptions. | Documentation replaces implementation validation. |
| 9 observation normalization | Complete | `src/lib/observations/` | The project has a normalized observation contract and a `PageSignals` adapter for tests and future evidence work. | The detector consumes observations by default. |
| 10 evidence repository | Complete | `src/lib/evidence/` | Evidence entries, compatibility evidence batches, and an in-memory repository exist for future pipeline tests. | Evidence is persisted outside replay traces. |
| 11 observation pattern matching | Complete | `src/lib/detection/observation-matcher.ts` | Normalized observations can be matched against current registry rules to emit pattern-match events and evidence entries. | Observation matching is the default detector path. |
| 12 evidence candidate aggregation | Complete | `src/lib/candidates/aggregate.ts` | Evidence entries can be grouped into deterministic technology candidates with detector-compatible confidence weighting. | Candidate aggregation is the production detector path. |
| 13 candidate relationship refinement | Complete | `src/lib/candidates/refine.ts` | Evidence candidates can be refined through `implies`, `requires`, and `excludes` graph rules with rejection records. | Refined candidates replace `analyzeSite(...)` by default. |
| 14 emission and parity | Complete | `src/lib/emission/site-analysis.ts` and `src/tests/emission/site-analysis.test.ts` | Refined candidates can emit `SiteAnalysis`-compatible output and focused fixtures compare that output with `analyzeSite(...)`. | The background runtime uses the sidecar event pipeline by default. |
| 15 event pipeline runtime | Complete | `src/lib/pipeline/runtime.ts` and `src/tests/pipeline/event-pipeline.test.ts` | Fresh active-tab analysis can run through the event pipeline behind an explicit request switch with legacy fallback. | The event pipeline is the default detector path. |
| 16 replay and explanations | Complete | `src/lib/pipeline/replay.ts` and `src/tests/pipeline/replay.test.ts` | Pipeline results can become redacted replay traces with per-detection explanations. | Replay timelines are streamed or inspected in full. |
| 17 popup explanation summaries | Complete | `src/lib/popup/view-model.ts` and `src/components/TechnologyCard.tsx` | The popup can render compact replay-derived explanation summaries when a response includes a trace. | The popup has a full replay inspector. |
| 18 replay trace storage | Complete after this patch stack | `src/lib/storage/index.ts` and `src/tests/storage/cache.test.ts` | Redacted replay traces are persisted beside analysis cache records and returned on cache hits when available. | Existing cache entries are migrated or replay traces are synced across devices. |
| 19 registry compiler and batch controls | Complete | `src/lib/registry/compiler.ts` and `src/lib/observations/batch-controller.ts` | Compiled artifacts expose matcher indexes, relationship graphs, collection plans, source maps, diagnostics, and bounded batch controls. | Registry artifacts are exported to disk or YAML/JSON source files are active. |
| 20 collector observation cutover | Complete after this patch stack | `src/lib/content/observed-page-signals.ts` and `src/entrypoints/background.ts` | Dirty observation sessions can flush normalized observation batches into the event pipeline without a full snapshot refresh when queued facts exist. | Browser-level MV3 automation verifies service-worker suspension, real injection, and popup teardown. |

## Decision ledger

The table records decisions that affect future phases. A decision can be reopened, but reopening it should come with a patch that updates the relevant tests and docs in the same branch.

| Decision | Current position | Review implication |
| --- | --- | --- |
| Per-origin cache keys | Keep `analysis:<origin>` compatibility and store replay traces under `replay:<origin>`. | Do not change cache key semantics without storage tests and a migration note. |
| Active-tab-first extension flow | Keep current active-tab analysis as the extension interaction model. | Do not introduce persistent host access or background crawling as incidental refactor fallout. |
| TypeScript registry source | Keep the TypeScript rule tree as the runtime source for now. | Compiled registry work must preserve order and relationship equivalence before source-format changes. |
| `PageSignals` detector input | Keep as the compatibility input. | Normalized observations, evidence entries, evidence candidates, replay traces, and popup summaries exist beside this input; replacing it still needs detector equivalence tests. |
| Popup grouping | Keep primary-category grouping with compact explanation summaries. | Full replay inspection must be an intentional popup change with view-model and component tests. |
| Browser mocks | Mock browser APIs, not production modules. | Runtime-adjacent tests should import production code after installing the API mock. |
| Benchmarks | Add only for measured hot paths. | Docs, fixtures, storage retention, and UI composition changes do not need benchmark files. |

## Migration dependency map

This diagram shows how the completed phases depend on each other. Read it from top to bottom. Later changes should keep the same direction unless a new plan explicitly replaces it.

```text
Phase 1: behavior baseline
        │
        ▼
Phase 2: contracts and provider seams
        │
        ├────► Phase 3: collector boundary
        │             │
        │             ▼
        ├────► Phase 4: lifecycle ownership
        │             │
        │             ▼
        ├────► Phase 5: graph and candidate seam
        │             │
        │             ▼
        ├────► Phase 6: popup view model
        │             │
        │             ▼
        └────► Phase 7: shared tests and popup regions
                      │
                      ▼
              Phase 8: architecture docs
                      │
                      ▼
              Phase 9: observation normalization
                      │
                      ▼
              Phase 10: evidence repository
                      │
                      ▼
              Phase 11: observation pattern matching
                      │
                      ▼
              Phase 12: evidence candidate aggregation
                      │
                      ▼
              Phase 13: candidate relationship refinement
                      │
                      ▼
              Phase 14: emission and parity
                       │
                       ▼
              Phase 15: event pipeline runtime
                       │
                       ▼
              Phase 16: replay and explanations
                       │
                       ▼
              Phase 17: popup explanation summaries
                       │
                       ▼
              Phase 18: replay trace storage
```

The order matters because the popup view model depends on stabilized analysis and lifecycle semantics, graph work depends on preserving registry order, and replay storage depends on shared redaction and sidecar boundaries that do not widen `SiteAnalysis`.

## Known validation limits

Phase 18 records the current limitations rather than hiding them.

- The full Vitest suite may still be slower or less stable in the sandbox than targeted suites.
- `npm run compile` may continue to expose branch-wide TypeScript issues that predate a docs patch.
- Browser-level extension behavior still needs manual Chrome QA because Vitest does not exercise Manifest V3 service-worker suspension, real runtime injection, popup teardown, or isolated versus main-world execution.
- There is no dedicated lint script in `package.json` at this point.

## Status update rules

Update this file when a patch changes any of these facts:

- a phase moves from compatibility seam to runtime default
- a new public contract is introduced
- a compatibility rule is intentionally removed
- a command becomes the accepted validation path
- a manual QA step becomes automated
- a future decision is resolved

Do not update this page for ordinary rule additions, detector fixtures, or popup copy changes unless they change an architectural boundary.
