# Phase 7 test boundaries

Phase 7 keeps the migration honest by making test support match the subsystem boundaries introduced in earlier phases. The goal is not to create a large browser simulator. The goal is to make collector, storage, popup, lifecycle, graph, and contract tests share stable fixtures so later event-based work can add coverage without copying half of the extension into each test.

The target architecture eventually moves from whole-page snapshots into normalized observations, evidence updates, candidate detections, relationship resolution, final detections, and explanations. Tests need to follow that direction gradually: small unit tests should protect pure transformations, while runtime-adjacent tests should mock only the browser boundary they cannot run inside Vitest.

```text
current test seam
shared fixtures ─► subsystem tests ─► targeted runtime mocks ─► manual Chrome QA

future test seam
observation fixtures ─► replay fixtures ─► evidence/candidate tests ─► extension + CLI parity
```

Read the diagram from left to right. Phase 7 strengthens the left side first because it is the part every later phase will reuse. Browser-level checks still belong in manual Chrome QA until the repo has an intentional extension integration runner.

## What changed

`src/tests/support/factories.ts` now owns common analysis, detection, page-signal, observation-session, and analysis-response fixtures. These fixtures deliberately describe current contracts such as `PageSignals` and `SiteAnalysis`; they are not future normalized-observation fixtures yet. When normalized observations arrive, they should get their own factory instead of overloading these snapshot helpers.

`src/tests/support/mock-browser.ts` now owns the in-memory `browser.storage.local` mock. The mock supports the storage key forms the repo uses today: string keys, string arrays, object defaults, and `null` for all stored values. Keeping that behavior in one file prevents storage, background, and future runtime tests from each inventing slightly different Chrome storage behavior.

The popup now has named regions in `src/entrypoints/popup/PopupRegions.tsx`. `App.tsx` still owns Solid state, timers, and background calls, but the shell owns layout regions such as hero, actions, stats, feedback, and results. This follows the same composition model as the interface instructions: consumers provide region content, while the component owns layout, semantics, and accessibility wiring.

## Test ownership rules

Use subsystem tests for behavior that has a public module boundary. For example, popup state translation belongs in `src/tests/popup/view-model.test.ts`, storage cache semantics belong in `src/tests/storage/cache.test.ts`, and graph equivalence belongs in `src/tests/graph/`.

Use shared fixtures when the same object shape appears in more than one subsystem. A hand-written fixture inside one test file is still fine when that shape is local to the file. Move a fixture into `src/tests/support/` only when it prevents duplicated contract assumptions.

Use browser mocks only at the browser boundary. The storage mock should stand in for `browser.storage.local`, not for the storage module itself. A future tabs or scripting mock should follow the same rule: mock the browser API shape, then import the production module that consumes it.

## Popup composition rules

The popup shell uses named regions because the popup has multiple replaceable areas with meaningful structure. Keep primitive controls such as buttons as normal elements. Do not add boolean props that choose structural variants such as `showStats` or `showFeedback`; add or omit the region content instead.

The current popup composition is intentionally conservative:

```text
PopupShell.Root
├── PopupShell.Hero
│   ├── PopupShell.HeroCopy
│   ├── PopupShell.Actions
│   ├── PopupShell.Stats
│   └── PopupShell.Metrics
├── PopupShell.Feedback
└── PopupShell.ResultPanel
```

This shape lets later explanation or replay UI add a new region without pushing detector-specific assumptions back into `App.tsx`.

## Verification checklist

Run these command-level checks when phase 7 or later test-support changes are touched:

```bash
npm test -- --run
npm run compile
npm run build
```

If the full suite cannot complete in the local environment, run the affected targeted suites and record the failure reason. Do not mark a full-suite pass unless the command actually exits successfully.

For phase 7 specifically, the targeted suites are:

```bash
npx vitest run src/tests/popup/view-model.test.ts src/tests/storage/cache.test.ts --reporter=verbose
```

Manual Chrome QA still matters after test-support changes because Vitest does not exercise Manifest V3 service-worker suspension, runtime content-script injection, or real popup lifecycle behavior.

## Benchmark decision

No benchmark belongs in this phase. Phase 7 changes test support and popup composition, not a hot detection or collection algorithm. A future benchmark should be added only when there is a measured path, a baseline implementation, and a realistic scenario that consumes results with `do_not_optimize()`.
