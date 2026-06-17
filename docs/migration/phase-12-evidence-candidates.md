# Phase 12 evidence candidate aggregation seam

Phase 12 adds the candidate-creation step after evidence accumulation. The extension still runs `PageSignals` through `analyzeSite(...)`, and the popup still receives `SiteAnalysis`. The new candidate path is a sidecar that proves evidence entries can be grouped into technology candidates before relationship resolution or final detection emission changes runtime behavior.

A candidate is not a final detection. It means a technology has evidence worth evaluating. Graph rules, final thresholds, explanation output, replay persistence, and popup rendering still belong to later phases.

## What changed

`src/lib/candidates/types.ts` defines the evidence-candidate contracts:

- `EvidenceCandidate` records one technology candidate for one target.
- `EvidenceCandidateBatch` groups ordered candidates from one aggregation pass.
- `EvidenceCandidateAggregationPolicy` records the scoring weights used before graph refinement.
- `EvidenceCandidateTechnology` stores registry metadata separately from evidence so future CLI/replay output can compare candidates even when registry metadata is incomplete.

`src/lib/candidates/aggregate.ts` adds `createEvidenceCandidateBatch(...)`. It accepts an evidence batch or raw evidence entries, attaches registry metadata, groups by technology, combines evidence confidence, preserves captured versions, and returns deterministic candidate ordering.

The current sidecar pipeline now reaches candidate creation:

```text
PageSignals ─────────────► analyzeSite(...) ─────────────► SiteAnalysis
    │                                                        │
    │                                                        └──► createEvidenceBatchFromAnalysis(...)
    ▼
normalizePageSignals(...)
    │
    ▼
matchObservationBatch(...)
    │
    ▼
EvidenceBatch
    │
    ▼
createEvidenceCandidateBatch(...)
    │
    ▼
EvidenceCandidateBatch
```

Read the diagram as compatibility layering. The candidate batch is useful for tests, future replay, and eventual explanation output. It does not replace the detector path used by the background runtime.

## Candidate scoring rules

Candidate confidence uses the same broad weighting idea as the current detector. The strongest evidence receives full weight. Extra evidence from the same surface contributes less than evidence from a distinct surface. This protects against many weak matches on one surface becoming a fake high-confidence claim.

The default policy keeps `minimumConfidence` at zero. That matters because this stage is candidate creation, not final display filtering. A low-confidence candidate should be available to later scoring, relationship, and explanation stages even if it would not be shown to users.

## Compatibility boundaries

Phase 12 preserves these boundaries:

- `analyzeSite(...)` remains the production detector entrypoint.
- `SiteAnalysis` remains the popup and storage output shape.
- Relationship inference is not run from evidence candidates.
- Candidate metadata comes from the current TypeScript registry, but missing registry entries still produce unknown-category candidates so replay can inspect orphaned evidence.
- Evidence entries are copied before candidate storage so later mutation of input fixtures or repositories does not rewrite candidate contents.

The candidate stage deliberately keeps graph resolution out of scope. Existing relationship evidence from compatibility analysis can appear in candidates, but this phase does not decide whether a relationship is valid.

## Review checklist

Use this checklist when reviewing follow-up candidate work:

- Candidate creation stays sidecar-only until equivalence tests compare it with current detector output.
- Confidence weighting changes are documented and tested against current detector expectations.
- Candidate ordering preserves registry order where registry metadata exists.
- Relationship evidence remains visible but does not silently become graph inference.
- Popup work consumes stable view-model data rather than importing candidate internals directly.
