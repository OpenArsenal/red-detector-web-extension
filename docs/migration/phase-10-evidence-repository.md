# Phase 10 evidence repository seam

Phase 10 gives the normalized observation pipeline a place to put evidence before the detector runtime is cut over. The extension still analyzes `PageSignals` through `analyzeSite(...)`, and the popup still receives `SiteAnalysis`. The new code adds an evidence-entry contract, builders for observation-derived and compatibility evidence, and an in-memory repository that groups evidence by target and technology.

This is a compatibility seam, not a storage migration. No raw page payloads are persisted, no background message changes are introduced, and no confidence math changes in this phase.

## What changed

`src/lib/evidence/types.ts` defines `EvidenceEntry`, `EvidenceBatch`, and `EvidenceTechnologySummary`. An evidence entry records the target URL, technology, detector surface, confidence contribution, matched scalar value, direct versus relationship source, and optional observation metadata.

`src/lib/evidence/builders.ts` provides two entry paths:

- `createEvidenceEntryFromObservation(...)` is the future matcher path. It turns one matched `NormalizedObservation` into direct evidence for a technology.
- `createEvidenceBatchFromAnalysis(...)` is the compatibility path. It adapts today's public `SiteAnalysis.results[].evidence` into the same evidence-entry shape without changing detector execution.

`src/lib/evidence/repository.ts` adds a small in-memory repository for tests and future pipeline stages. It stores defensive copies, lists entries in deterministic order, filters by target or technology, and summarizes evidence counts without deciding final detections.

The current flow now has two sidecar seams:

```text
PageSignals ─────► analyzeSite(...) ─────► SiteAnalysis
    │                                        │
    │                                        └────► createEvidenceBatchFromAnalysis(...)
    │                                                    │
    ▼                                                    ▼
normalizePageSignals(...)                 in-memory evidence repository
    │
    └────► createEvidenceEntryFromObservation(...) [future matcher path]
```

Read the diagram as two compatibility bridges. The left bridge lets collectors emit replayable observations. The right bridge lets existing detector evidence be stored and tested in the future repository shape. The runtime still trusts `analyzeSite(...)` for final output.

## Why this matters

The target architecture separates pattern matches, evidence, candidates, graph reasoning, and final detections. Before the detector can consume normalized observations directly, the project needs a stable evidence shape that both extension and future command-line scans can share.

Phase 10 makes that shape reviewable. It lets future work add pattern-match events that create evidence entries from observations, then compare those entries against the compatibility evidence currently derived from `SiteAnalysis`. That comparison is the safer path because it protects result ordering, confidence thresholds, version extraction, and relationship behavior during the eventual cutover.

## Compatibility rules

Phase 10 preserves these rules:

- `BackgroundApi` and `ContentApi` are unchanged.
- `PageSignals` remains the detector input.
- `SiteAnalysis` remains the popup and storage output.
- Evidence repository state is in memory only.
- Evidence persistence and replay logs are still out of scope.
- Popup named regions and view-model behavior are unchanged.
- No new extension permissions are added.

## What remains out of scope

Phase 10 does not add a registry pattern matcher over observations. It does not change candidate confidence aggregation, graph relationship resolution, or popup explanation UI. It also does not store evidence in `browser.storage.local`. Those changes need separate compatibility tests because they can change detection output or privacy posture.

## Review checklist

Use this checklist when reviewing follow-up evidence work:

- Evidence entries stay scalar and replay-safe.
- Observation-derived entries keep observation metadata but do not retain raw collector objects by reference.
- Compatibility entries derived from `SiteAnalysis` do not claim to represent all possible rule matches.
- Repository summaries do not replace detector confidence math.
- Any future persistent evidence format gets its own storage contract and privacy review.
