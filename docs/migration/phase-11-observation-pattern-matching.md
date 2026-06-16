# Phase 11 observation pattern matching seam

Phase 11 adds the matcher step between normalized observations and evidence entries. The extension still analyzes `PageSignals` through `analyzeSite(...)`, and the popup still receives `SiteAnalysis`. The new matcher is a sidecar path that lets tests and future replay work prove that observation events can become evidence without changing the production detector path.

This phase does not run graph inference, candidate confidence aggregation, or final detection emission from observations. It only records the `PatternMatched`-shaped boundary that the target architecture needs before evidence can become candidates.

## What changed

`src/lib/detection/observation-match-types.ts` defines the contracts for observation pattern matching:

- `ObservationPatternMatch` records one rule accepting one normalized observation.
- `ObservationPatternMatchBatch` groups matches and the evidence batch derived from them.
- `MatchObservationRuleInput` and `MatchObservationBatchInput` describe the single-rule and registry-level matcher calls.

`src/lib/detection/observation-matcher.ts` evaluates normalized observations against the current TypeScript registry rule shapes and creates evidence with `createEvidenceEntryFromObservation(...)`. The matcher supports the same broad runtime surfaces that normalized observations can carry, including script URLs, bounded HTML snippets, cookies, headers, meta tags, JavaScript globals, links, storage keys, DNS records, and generic pattern-based surfaces.

The current pipeline now has three sidecar seams:

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
EvidenceBatch ───────────► in-memory evidence repository
```

Read the diagram as compatibility layering. `analyzeSite(...)` remains the runtime source of truth. The normalized-observation matcher exists so later phases can compare observation-derived evidence against compatibility evidence before changing detector output.

## Matching rules

The matcher keeps these compatibility rules:

- `htmlMatch` observations only satisfy the owning HTML rule when their key matches `<technologyId>:<ruleIndex>`.
- `responseHeader` rules may match `header` observations because current extension snapshots normalize background response headers as `header`.
- Cookie and storage rules match keys only. The matcher does not read or invent redacted values.
- Regexes are reset before and after each execution so global or sticky registry patterns cannot leak `lastIndex` across observations.
- Disabled rule ids and disabled kinds are honored through the same `DetectionRunOptions` shape used by `analyzeSite(...)`.

These rules preserve current detector assumptions while making the event-pipeline boundary reviewable.

## What remains out of scope

Phase 11 does not persist pattern-match events, does not wire observation matching into the background runtime, and does not replace `PageSignals` matching in `analyzeSite(...)`. It also does not surface explanations in the popup. Those changes need separate equivalence tests because they can change confidence, version selection, graph behavior, storage size, or privacy posture.

## Review checklist

Use this checklist when reviewing follow-up matcher work:

- Observation-derived evidence remains scalar and replay-safe.
- Key-only surfaces stay key-only unless a privacy review explicitly expands them.
- Registry rule order remains deterministic because future candidate creation may depend on it.
- Matcher behavior is compared against current detector output before runtime cutover.
- New popup explanation UI uses the named-region composition guidance instead of reaching into matcher internals directly.
