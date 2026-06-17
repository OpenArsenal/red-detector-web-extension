# Phase 18 replay trace storage

Phase 18 persists redacted replay traces beside cached site analyses so explanation data survives popup reopenings and cache-first responses.

The important maintainer benefit is that replay remains sidecar data. `SiteAnalysis` still owns the detector output shape, while replay traces live under a separate origin-level storage namespace and can be fetched independently when an active-tab response needs explanation data.

## What changed

Fresh analysis now writes two cache records for the same origin:

```text
fresh active-tab analysis
        │
        ▼
runDetectionPipeline(...)
        │
        ├────► saveAnalysis(SiteAnalysis)
        │             │
        │             ▼
        │       analysis:<origin>
        │
        └────► saveReplayTrace(DetectionReplayTrace)
                      │
                      ▼
                replay:<origin>
```

Cache-first responses keep using the existing analysis lookup first. When that succeeds, the background reads the paired replay trace and includes it in `AnalyzeActiveTabOutput.replayTrace` only when the trace exists and is still fresh.

## Storage rules

Replay trace storage follows these rules:

- replay keys use the same origin boundary as analysis keys.
- replay records use a separate `replay:` prefix instead of widening `SiteAnalysis`.
- expired analysis records remove their paired replay record.
- expired replay records can be removed without deleting the analysis record.
- storage guards validate replay envelopes before returning cached traces.
- cache status metrics still count analysis records, not replay sidecars.

## Compatibility rules

Phase 18 keeps these compatibility rules:

- `AnalyzeActiveTabOutput.replayTrace` stays optional because older cache entries might not have a paired trace.
- popup explanation rendering continues to work when no replay trace is available.
- the extension does not store raw observations, HTML, cookies, request bodies, script contents, or stylesheet contents.
- cache-first mode still avoids contacting the content script when analysis is cached.
- the event pipeline is still behind the explicit pipeline switch.

## Tests added

Storage tests cover replay cache keys, same-origin lookup, trace expiry, defensive cloning, and paired cleanup when analysis records expire. Background tests cover fresh trace persistence and cache-hit trace loading.

The most important assertions are:

- replay cache keys are origin-level and use the `replay:` namespace.
- cached replay traces can be read from a different path on the same origin.
- expired replay traces do not remove fresh analysis records.
- expired analysis records remove paired replay traces.
- cache-hit responses include a stored trace without collecting page signals.
- fresh legacy and event runs persist replay traces.

## Non-goals

Phase 18 does not add a full replay inspector, stream replay events into the popup, promote the event pipeline to the default path, or migrate old analysis records. Those changes belong to later popup and runtime-promotion work.

## Review checklist

When reviewing these patches, check these points first:

- Does replay storage stay separate from `SiteAnalysis` storage?
- Does cache expiry remove paired replay records without inventing a migration?
- Do background cache hits fetch replay traces only after analysis cache succeeds?
- Do tests prove replay trace persistence for both fresh and cached active-tab responses?
- Do TSDoc comments avoid naming migration phase numbers inside TypeScript files?
