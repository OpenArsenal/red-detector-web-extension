# Phase 15 event pipeline runtime

Phase 15 turns the sidecar event pipeline into a runtime-capable path without
making it the default detector path yet.

The important migration step is that the background runtime can now ask one
coordinator to run a collected `PageSignals` snapshot through the same stages
that Phase 14 used manually in parity tests.

```text
PageSignals
        │
        ▼
runDetectionPipeline(...)
        │
        ├────► legacy analyzeSite(...)
        │
        └────► normalized observations
                  │
                  ▼
              pattern matches
                  │
                  ▼
              evidence entries
                  │
                  ▼
              evidence candidates
                  │
                  ▼
              relationship refinement
                  │
                  ▼
              SiteAnalysis emission
```

## What changed

The phase adds `src/lib/pipeline/` as the runtime coordination boundary. The
coordinator owns stage order and returns the same public `SiteAnalysis` shape
that storage, messaging, and the popup already consume.

The active-tab request contract gets an optional pipeline switch:

```ts
pipeline?: 'legacy' | 'event'
```

Omitting the field keeps the current behavior:

```text
popup request
  └─► background
        └─► pipeline omitted
              └─► legacy analyzeSite(...)
```

Passing `pipeline: "event"` runs the Phase 15 event coordinator:

```text
popup or test request
  └─► background
        └─► pipeline: "event"
              └─► event pipeline
                    └─► SiteAnalysis
```

## Fallback behavior

The event path keeps a legacy fallback while it is behind the migration switch.
If the event coordinator cannot complete, the background can still return the
legacy detector output.

```text
event pipeline error
        │
        ▼
legacy analyzeSite(...)
        │
        ▼
SiteAnalysis
```

Fallback metadata stays outside `SiteAnalysis`. That keeps the current storage
and popup contract stable until replay and explanation have their own public
contracts.

## Tests added

`src/tests/pipeline/event-pipeline.test.ts` covers:

- default legacy execution
- event-path execution
- ordered coordinator events
- emission metadata
- fallback to legacy output
- strict event-path failure when fallback is disabled

`src/tests/messaging/background-api.test.ts` covers the active-tab request
switch and confirms that `pipeline: "event"` skips the direct legacy analyzer
while still saving `SiteAnalysis` output.

## Non-goals

Phase 15 does not add replay trace storage, explanation output, popup detection
details, registry source compilation, indexed matching, collector event cutover,
or privacy/storage migrations.

Those belong to later phases. Phase 15 only makes the pipeline executable from
the current extension collection output and keeps the runtime switch reviewable.
