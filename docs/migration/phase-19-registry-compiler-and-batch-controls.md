# Phase 19 registry compiler and batch controls

Phase 19 adds the registry compiler infrastructure that the final architecture needs while keeping the current TypeScript technology definitions as the active source of truth. It also adds the first reusable control boundary for normalized observation batches, so the extension can move toward event batches without relying on whole-snapshot refreshes forever.

The maintainer benefit is that two previously separate problems now have concrete seams:

```text
TypeScript technology definitions
        │
        ▼
Zod source validation
        │
        ▼
registry compiler artifact
        ├────► matcher index
        ├────► relationship graph
        ├────► collection plan
        ├────► diagnostics
        └────► source map

normalized observations
        │
        ▼
batch controller
        ├────► dedupe
        ├────► queue limits
        ├────► storm limits
        └────► bounded ObservationBatch
```

## What changed

The registry compiler now validates the bundled TypeScript registry with Zod v4 before building runtime artifacts. Validation uses non-throwing parsing so malformed source produces diagnostics instead of skipping the rest of the compiler boundary.

The compiler artifact contains:

- ordered technology definitions for `analyzeSite(...)` compatibility.
- lightweight technology metadata.
- rule-kind counts for diagnostics and benchmarks.
- the compiled relationship graph used by candidate refinement.
- the indexed observation matcher routes used by the event pipeline.
- the extension collection plan derived from active rules.
- source-map entries for technologies, rules, and relationships.
- validation and compiler diagnostics.

The event pipeline now accepts an optional compiled artifact and reuses its matcher index and relationship graph. This avoids rebuilding the same hot structures for every fresh active-tab analysis.

The new observation batch controller accepts normalized observations, drops recent duplicates, caps queued work, records storm drops, and flushes bounded `ObservationBatch` objects. It is intentionally runtime-agnostic so content scripts, background orchestration, and future CLI collection can share the same policy.

## What source maps mean here

The source maps in this phase are **registry provenance maps**, not JavaScript source maps.

A JavaScript source map connects generated JavaScript back to original TypeScript. A registry source map connects compiled registry artifacts back to the registry definition that produced them.

For example:

```text
rule:react:3
  └─► technologies.react.rules.3

relationship:implies:nextjs:react
  └─► technologies.nextjs.relationships.implies.react
```

That provenance matters for diagnostics, replay explanations, and future authoring tools. When a compiler diagnostic says a pattern is unsafe or a relationship target is unknown, the source map gives us the stable artifact id and logical source locator to show the registry maintainer. While the source is still TypeScript modules, the locator is logical. A later YAML or JSON loader can add file, line, and column data without changing the artifact consumers.

## Compatibility rules

Phase 19 keeps these compatibility rules:

- TypeScript technology definitions remain the runtime source.
- JSON/YAML registry loading is still deferred.
- `runObservationBatchPipeline(...)` is the extension runtime path, while snapshot adapters remain available for parity tests.
- Event pipeline output still emits `SiteAnalysis` through the existing emission bridge.
- Source maps do not require file coordinates yet.
- Observation batches are supported as an event-pipeline input, but content/background collection can still use `PageSignals` snapshots.

## Diagnostics

Validation diagnostics come from Zod schema parsing and use `schema.invalid`.

Compiler diagnostics currently cover:

- duplicate technology ids.
- unknown relationship targets.
- duplicate rule ids inside one technology.
- basic unsafe-pattern warnings for nested wildcard expressions.

The diagnostic model keeps severity, code, message, and logical location separate so tests can assert on stable fields while local tools can render richer prose.

## Benchmarks added

Two benchmark files were added beside the existing observation matcher benchmark:

- `src/benchmarks/registry-compiler.bench.ts`
- `src/benchmarks/observation-batch-controller.bench.ts`

These benchmarks follow the current Vitest benchmark setup. Tinybench does not expose Mitata's `do_not_optimize()` API, so each benchmark consumes output through a module-level side effect. That keeps the measured work observable and avoids benchmarking a pure unused expression.

Run benchmarks with:

```text
npm run bench
```

## Tests added

The test stack covers:

- Zod schema acceptance and diagnostics for TypeScript registry source.
- compiler artifact construction.
- source-map entries for technologies, rules, and relationships.
- duplicate id and unknown relationship diagnostics.
- event pipeline reuse of compiled artifacts.
- direct event-pipeline execution from `ObservationBatch`.
- observation batch dedupe, queue limits, storm limits, and bounded flushes.

## Non-goals

This phase does not convert registry files to YAML or JSON, export registry artifacts to disk, build a registry authoring CLI, or replace extension collection with direct event emission. Those changes need separate review because they affect source governance, packaging, and extension runtime behavior.
