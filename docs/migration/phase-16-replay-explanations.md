# Phase 16 replay and explanations

Phase 16 adds the replay-facing contract on top of the event runtime coordinator.
The coordinator emits public-safe stage events and a final `SiteAnalysis`; replay
turns those pieces into a redacted trace with per-detection explanations.

The maintainer benefit is that popup, storage, and QA tooling can depend on one
explanation shape instead of reinterpreting pipeline events, emitted evidence,
and final analysis results independently.

## What changed

The phase adds `src/lib/pipeline/replay.ts` as a sidecar contract. It does not
replace `SiteAnalysis`. It converts one `DetectionPipelineRuntimeResult` into a
`DetectionReplayTrace`.

```text
DetectionPipelineRuntimeResult
        │
        ├────► coordinator stage events
        ├────► final SiteAnalysis
        └────► emission metadata
                    │
                    ▼
          DetectionReplayTrace
                    │
                    ├────► ordered replay events
                    └────► detection explanations
```

Replay events intentionally copy only stage name, target, timestamp, count, and
scalar diagnostics. Raw observations, HTML, cookies, source contents, and matched
collector payloads remain outside the trace contract.

## Explanation rules

Detection explanations are derived from emitted results, not from private matcher
state. That keeps the explanation contract aligned with the popup and storage
shape while still preparing richer replay views.

The phase records:

- technology id, display name, categories, confidence, selected version, and inferred state
- public evidence summaries with kind, confidence, directness, bounded matched value, rule note, version, and relationship source
- direct and relationship evidence counts
- short reason phrases for direct evidence, relationship inference, version selection, warnings, and no-evidence detections

The reason phrases are deliberately compact. They are useful for replay summaries
and tests, but they are not the final replay inspector.

## Why this still fits the unified architecture

Replay is produced from pipeline output rather than browser-specific state.

```text
Extension observation batches ─┐
                               ├─► event pipeline ─► replay trace
Future CLI collectors ─────────┘
```

The extension now supplies normalized observation batches. Future collector
interfaces can produce the same event-pipeline result and reuse the same replay
contract.

## Non-goals

Phase 16 does not:

- stream trace events from the content script
- store raw observations in extension storage
- render a full replay inspector in the popup
- add benchmarks
- create a long-term raw event persistence schema

Storage and popup adoption happen in later phases because they change user-visible
or persistence behavior.

## Tests added

`src/tests/pipeline/replay.test.ts` covers:

- replay trace creation from an event pipeline result
- ordered trace event sequence numbers
- redacted event shape that does not expose observations
- direct evidence, relationship evidence, version, warning, and no-evidence explanation summaries

## Review checklist

When reviewing replay patches, check these points first:

- Does the trace avoid raw collector payloads?
- Does the trace remain sidecar data instead of widening `SiteAnalysis`?
- Are explanation records derived from emitted results rather than private matcher internals?
- Do tests cover both direct and relationship evidence?
- Did the change avoid benchmark claims for non-hot-path contract work?
