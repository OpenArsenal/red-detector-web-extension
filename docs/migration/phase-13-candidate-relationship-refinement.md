# Phase 13 candidate relationship refinement seam

Phase 13 adds graph refinement after evidence candidate aggregation. The runtime detector still uses `PageSignals -> analyzeSite(...) -> SiteAnalysis`, and the popup still renders the same analysis response. The new refinement path is a sidecar that proves evidence candidates can be processed through `implies`, `requires`, and `excludes` relationships before any final-detection cutover.

A refined candidate is still not a final detection. It is the candidate set after graph rules have removed conflicts, created inferred candidates, and pruned candidates whose requirements are not satisfied by direct evidence.

## What changed

`src/lib/candidates/refinement-types.ts` defines the relationship-refinement contracts:

- `EvidenceCandidateRefinementPolicy` records graph-stage policy values such as implied confidence.
- `RefinedEvidenceCandidateBatch` returns accepted candidates, rejected candidates, and relationship evidence created during inference.
- `EvidenceCandidateRejection` records why a candidate was removed or skipped.
- `EvidenceCandidateRelationshipContext` records the graph edge that caused a graph action when one direct edge explains it.

`src/lib/candidates/refine.ts` adds `refineEvidenceCandidateBatch(...)`. It accepts an `EvidenceCandidateBatch` plus the compiled registry graph, then applies relationship rules to a fixed point. The implementation mirrors current detector semantics:

- `implies` creates relationship-only candidates with confidence `55`.
- `requires` must be satisfied by direct evidence, not by inferred candidates.
- `excludes` removes the weaker conflicting candidate.
- Direct candidates beat inferred candidates.
- Higher confidence wins when both sides have the same source strength.
- Registry order breaks equal-confidence ties.

The sidecar pipeline now reaches graph-refined candidates:

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
    │
    ▼
refineEvidenceCandidateBatch(...)
    │
    ▼
RefinedEvidenceCandidateBatch
```

Read the diagram as compatibility layering. The refined batch is useful for equivalence tests, replay, explanations, and future CLI output. It does not replace the detector path used by the background runtime.

## Relationship semantics

The most important rule is that requirements are guards. A candidate that only exists because another technology implied it cannot satisfy a requirement. This prevents weak implication chains from making technologies look directly supported.

For example, if `theme` implies `wordpress` and `addon` requires `wordpress`, direct evidence for `theme` can create an inferred `wordpress` candidate. That inferred `wordpress` candidate still does not satisfy `addon` unless `wordpress` also has direct evidence.

Exclusion handling preserves the same compatibility rule as the current detector. If a direct candidate conflicts with an inferred candidate, the inferred candidate loses. If both are direct or both are inferred, the lower confidence loses. If confidence ties, the candidate later in registry order loses.

## Compatibility boundaries

Phase 13 preserves these boundaries:

- `analyzeSite(...)` remains the production detector entrypoint.
- `SiteAnalysis` remains the popup and storage output shape.
- Relationship refinement is not wired into background runtime.
- Rejections are sidecar explainability data and are not shown in the popup.
- Relationship evidence exists only for candidates created by implication in this sidecar stage.
- Storage does not persist candidate batches or rejection records.

This phase deliberately does not emit final detections. A later compatibility stage still needs to compare refined candidates against current `DetectionResult` output before runtime cutover.

## Review checklist

Use this checklist when reviewing follow-up relationship work:

- Relationship refinement stays sidecar-only until equivalence tests compare it with current detector output.
- Requirement checks only accept candidates with direct evidence.
- Exclusion conflict resolution preserves direct-over-inferred, confidence, and registry-order tie rules.
- Rejections remain deterministic and useful for explanation output.
- Popup work consumes view-model data rather than importing graph-refinement internals directly.
