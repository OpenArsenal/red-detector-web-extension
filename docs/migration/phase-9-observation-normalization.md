# Phase 9 observation normalization

Phase 9 introduces the first explicit bridge from the current snapshot detector to the target event-based engine. The extension still collects `PageSignals`, and the detector still produces `SiteAnalysis` through the existing compatibility path. The new observation contract gives future evidence, replay, and command-line interface work a stable shape to target before any runtime cutover happens.

The goal is to make the next architecture step concrete without changing popup behavior, storage format, or detection output.

## What changed

`src/lib/observations/types.ts` defines the normalized observation contract. An observation records one collected fact, such as a script URL, header value, DOM selector match, storage key, or JavaScript global. Every observation carries target metadata, producer metadata, a timestamp, a scalar value, and optional scalar attributes.

`src/lib/observations/page-signals.ts` adapts the existing `PageSignals` snapshot into an ordered `ObservationBatch`. This adapter is deliberately beside the current detector path:

```text
Content/background collectors
        │
        ▼
    PageSignals ─────► analyzeSite(...) ─────► SiteAnalysis
        │
        └────────────► normalizePageSignals(...) ─────► ObservationBatch
```

Read the diagram as a parallel path. Phase 9 does not replace `PageSignals`. It lets tests and future pipeline work inspect the same collected facts in the normalized event shape while the current detector remains the compatibility source of truth.

## Why this matters

The target architecture expects collectors from the extension and a future command-line interface to feed a shared engine through normalized observations. The two interfaces will not collect identical raw data. The extension works inside active-tab, content-script, and permission constraints. The command-line interface can eventually use browser automation and deeper network capture. The shared boundary is therefore the observation contract, not the raw collector implementation.

This phase makes that boundary testable. Future evidence storage can consume `ObservationBatch` values, replay can compare ordered observation lists, and CLI fixtures can be written against the same shape without importing popup or background code.

## Compatibility rules

Phase 9 preserves these rules:

- `PageSignals` remains the detector input.
- `SiteAnalysis` remains the popup and storage output.
- `BackgroundApi` and `ContentApi` do not change.
- Cache keys remain per origin.
- The popup view model and named regions do not change.
- No broader extension permissions are added.

The observation adapter also preserves privacy-sensitive key-only behavior. Cookie and storage observations record names and area metadata, not raw values. JavaScript globals are converted to replay-safe scalar summaries when their values are not already strings, numbers, or booleans.

## What remains out of scope

Phase 9 does not add an evidence repository, event bus, replay persistence, explanation UI, or CLI collector. It also does not route detector matching through observations. Those changes need separate equivalence tests because they can affect confidence, ordering, version extraction, and graph behavior.

## Review checklist

Use this checklist when reviewing follow-up changes around observations:

- Observation contracts stay runtime-agnostic and do not import popup, background, or browser APIs.
- Snapshot-to-observation adapters emit deterministic order.
- Cookie and storage observations remain key-only unless a privacy review explicitly changes that contract.
- New observation kinds are documented as collector facts, not detector conclusions.
- Detector cutover work compares `analyzeSite(...)` output before and after the new path.
