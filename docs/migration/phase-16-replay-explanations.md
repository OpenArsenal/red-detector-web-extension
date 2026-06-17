# Phase 16 replay and explanations

Phase 16 adds the first replay-facing contract on top of the Phase 15 runtime coordinator. The coordinator already emits public-safe stage events and a final `SiteAnalysis`; this phase turns those pieces into a redacted replay trace with per-detection explanations.

The maintainer benefit is that later popup, storage, and QA tooling can depend on one explanation shape instead of reinterpreting pipeline events, emitted evidence, fallback metadata, and final analysis results independently.

## What changed

The phase adds `src/lib/pipeline/replay.ts` as a sidecar contract. It does not replace `SiteAnalysis`, does not change background responses, and does not persist traces. It converts one `DetectionPipelineRuntimeResult` into a `DetectionReplayTrace`.

```text
DetectionPipelineRuntimeResult
        │
        ├────► coordinator stage events
        ├────► final SiteAnalysis
        ├────► emission metadata
        └────► fallback metadata
                    │
                    ▼
          DetectionReplayTrace
                    │
                    ├────► ordered replay events
                    └────► detection explanations
```

Replay events intentionally copy only stage name, target, timestamp, count, and scalar diagnostics. Raw observations, HTML, cookies, source contents, and matched collector payloads remain outside the trace contract.

## Explanation rules

Detection explanations are derived from emitted results, not from private matcher state. That keeps the explanation contract aligned with the current popup and storage compatibility shape while still preparing richer replay views.

The phase records:

- technology id, display name, categories, confidence, selected version, and inferred state
- public evidence summaries with kind, confidence, directness, bounded matched value, rule note, version, and relationship source
- direct and relationship evidence counts
- short reason phrases for direct evidence, relationship inference, version selection, warnings, and no-evidence detections

The reason phrases are deliberately compact. They are good enough for replay summaries and tests, but they are not final popup copy.

## Why this still fits the unified architecture

This phase keeps the extension and future CLI on the same path by treating replay as a pipeline-side artifact rather than a browser-side artifact.

```text
Extension PageSignals adapter ─┐
                               ├─► pipeline runtime ─► replay trace
Future CLI collectors ─────────┘
```

The extension currently supplies `PageSignals`, but the trace only depends on the pipeline result. When future collector phases replace `PageSignals` with normalized observations or replay segments, the same explanation contract can remain attached to the pipeline output.

## Non-goals

Phase 16 does not:

- store replay traces in extension storage
- render explanations in the popup
- stream trace events from the content script
- change the default detector path
- add benchmarks
- create a long-term replay persistence schema

Storage and popup adoption should happen in later phases because they change user-visible or persistence behavior.

## Tests added

`src/tests/pipeline/replay.test.ts` covers:

- replay trace creation from an event pipeline result
- ordered trace event sequence numbers
- redacted event shape that does not expose observations
- direct evidence, relationship evidence, version, warning, and no-evidence explanation summaries
- fallback metadata copied from an event-pipeline fallback

## Review checklist

When reviewing Phase 16 patches, check these points first:

- Does the trace avoid raw collector payloads?
- Does the trace remain sidecar data instead of widening `SiteAnalysis`?
- Are explanation records derived from emitted results rather than private matcher internals?
- Do tests cover both direct and relationship evidence?
- Did the phase avoid benchmark claims for non-hot-path contract work?
