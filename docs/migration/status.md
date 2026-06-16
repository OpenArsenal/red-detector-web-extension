# Migration status after phase 8

This status page lets reviewers see which migration seams are complete, which seams are only compatibility wrappers, and which future architecture goals remain unimplemented. It should be updated whenever a phase changes a boundary that another maintainer would rely on.

The project is now past the first documentation pass. Phases 1 through 7 established behavior baselines, contracts, collectors, lifecycle rules, graph seams, popup view-state boundaries, and shared test fixtures. Phase 8 records those decisions so future work can stop rediscovering them from commit history.

## Phase status matrix

| Phase | Status | Main artifact | What is safe to assume now | What is still not safe to assume |
| --- | --- | --- | --- | --- |
| 1 behavior baseline | Complete | `docs/migration/phase-1-behavior-baseline.md` | Cache-first, refresh, unsupported URL, content unavailable, and observation baseline behavior are documented. | Browser-level automation exists. Manual Chrome QA is still required. |
| 2 contract seams | Complete | `src/lib/contracts/analysis.ts` | Analysis contracts, registry provider, storage key helper, and collector planning seams exist. | Runtime payloads have deep schema validation. |
| 3 collector boundary | Complete | `src/lib/collectors/extension-page-collector.ts` | Extension collection is grouped behind a collector boundary that still returns `PageSignals`. | Collectors emit normalized observations. |
| 4 lifecycle model | Complete | `src/lib/lifecycle/observation.ts` | Observation start, refresh eligibility, navigation ownership, and invalidation disposal are explicit. | Background service-worker memory is durable. |
| 5 graph seam | Complete | `src/lib/detection/registry-graph.ts` | The detector can run through a compiled registry graph while preserving current output shape. | YAML or JSON registry source is active. |
| 6 popup view model | Complete | `src/lib/popup/view-model.ts` | Popup state translation is testable outside the Solid component. | Popup shows explanations or all evidence. |
| 7 test boundaries | Complete | `src/tests/support/` | Shared fixtures and browser storage mocks exist for subsystem tests. | The test suite includes full extension runtime automation. |
| 8 architecture docs | Complete after this patch stack | `docs/architecture/overview.md` and this status page | Future prompts can cite the current migrated shape instead of stale README assumptions. | Documentation replaces implementation validation. |

## Decision ledger

The table records decisions that affect future phases. A decision can be reopened, but reopening it should come with a patch that updates the relevant tests and docs in the same branch.

| Decision | Current position | Review implication |
| --- | --- | --- |
| Per-origin cache keys | Keep `analysis:<origin>` compatibility. | Do not change cache key semantics without storage tests and a migration note. |
| Active-tab-first extension flow | Keep current active-tab analysis as the extension interaction model. | Do not introduce persistent host access or background crawling as incidental refactor fallout. |
| TypeScript registry source | Keep the TypeScript rule tree as the runtime source for now. | Compiled registry work must preserve order and relationship equivalence before source-format changes. |
| `PageSignals` detector input | Keep as the compatibility input. | Normalized observations should be introduced beside this input before replacing it. |
| Popup grouping | Keep primary-category grouping. | Multi-category or explanation UI must be an intentional popup change with view-model tests. |
| Browser mocks | Mock browser APIs, not production modules. | Runtime-adjacent tests should import production code after installing the API mock. |
| Benchmarks | Add only for measured hot paths. | Docs, fixtures, and UI composition changes do not need benchmark files. |

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
```

The order matters because the popup view model depends on stabilized analysis and lifecycle semantics, graph work depends on preserving registry order, and future observation/replay work depends on shared fixtures that do not duplicate contract assumptions.

## Known validation limits

Phase 8 records the current limitations rather than hiding them.

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
