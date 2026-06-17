# Phase 14 emission and parity

Phase 14 adds the final sidecar step needed before the event pipeline can become runtime-capable: relationship-refined evidence candidates can now be emitted as the same `SiteAnalysis` shape that the current background, storage cache, and popup already consume.

The important maintainer benefit is safety. The new observation/evidence/candidate path can now be compared directly with `analyzeSite(...)` without changing the production detector path. Final emission without parity would create a new output shape with no trustworthy oracle. Parity without emission would have no concrete result to compare.

## What changed

The phase adds `src/lib/emission/` as the output compatibility boundary. It takes a `RefinedEvidenceCandidateBatch`, applies the final display threshold, maps accepted candidates into `DetectionResult` objects, wraps them in `SiteAnalysis`, and returns sidecar metadata about the emission pass.

```text
RefinedEvidenceCandidateBatch
        │
        ▼
emitSiteAnalysisFromRefinedCandidates(...)
        │
        ├────► SiteAnalysis-compatible output
        │
        └────► emission metadata
```

The emission metadata is intentionally not written into `SiteAnalysis`. The current analysis object is already the storage and popup contract, so widening it before replay and explanation storage are designed would make the runtime contract harder to review.

## Compatibility rules

The emission stage preserves these current detector rules:

- final results must pass the display confidence threshold of `50`
- inferred candidates are marked with `inferred: true`
- relationship evidence maps back to `kind: "relationship"`
- final results sort by confidence first, then candidate order, then name
- candidate order is expected to preserve registry order before emission
- selected versions come from the candidate's selected version, not from highest-semver sorting
- emitted evidence uses the current public `Evidence` shape

Phase 14 also carries matcher rule order through evidence attributes. The observation matcher iterates observations first so it can support streaming later, while the current detector iterates rules first. Preserving `ruleIndex` as scalar evidence context lets candidate aggregation restore current evidence and version order without changing public detector evidence.

```text
current detector:      rules ─► signals ─► evidence
sidecar matcher:       observations ─► rules ─► evidence(ruleIndex)
                                            │
                                            ▼
                               candidate evidence sorted by ruleIndex
```

That small compatibility marker is a temporary bridge. A compiled registry can replace it with a stable compiled pattern ordinal once registry artifacts exist.

## Tests added

`src/tests/emission/site-analysis.test.ts` compares the new path with the current detector on focused fixtures:

```text
PageSignals
  ├─► analyzeSite(...)
  │
  └─► normalizePageSignals(...)
        └─► matchObservationBatch(...)
              └─► createEvidenceCandidateBatch(...)
                    └─► refineEvidenceCandidateBatch(...)
                          └─► emitSiteAnalysisFromRefinedCandidates(...)
```

The fixtures cover direct evidence, confidence aggregation, version selection, final threshold filtering, requirements, implications, and exclusions. The test file mocks the heavyweight registry module when importing `analyzeSite(...)` so parity fixtures can use small local registries without transforming the full rule tree.

## Non-goals

Phase 14 does not route the background runtime through the sidecar pipeline. It also does not persist evidence, create replay traces, show explanations in the popup, or replace `PageSignals` as the production detector input.

Those changes belong to later phases. Phase 15 can use this emission function to assemble a deterministic event-pipeline coordinator behind a runtime switch. Phase 16 can add replay and explanation records because final emission now has a concrete event-pipeline output to trace.

## Review checklist

When reviewing changes on top of this phase, check these points first:

- Does the new path still emit plain `SiteAnalysis` when it claims compatibility?
- Are sub-threshold candidates kept out of `analysis.results` but still available before emission?
- Does version selection stay deterministic when multiple evidence entries carry versions?
- Does any change to evidence ordering update parity tests?
- Does any runtime cutover still keep fallback to `analyzeSite(...)` until phase 15 explicitly changes that?

No benchmark is added in this phase. Emission introduces a compatibility boundary and parity tests, not an indexed hot path or optimization claim.
