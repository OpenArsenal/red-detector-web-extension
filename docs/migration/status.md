# Migration status

The active extension runtime is now the storage-backed live revision model. The old command-era phase notes were removed because they described cache-first active-tab analysis, targetless replay reads, popup polling, and direct page-signal fallback paths that no longer exist in the cleaned runtime.

The current implementation has one user-visible contract:

```text
visible tab identity
  -> stored detection snapshot renders first
  -> background/content publish newer snapshot revisions
  -> popup applies only revisions that still match the visible tab target
```

This status note is intentionally short. Detailed architecture lives in the runtime documents linked from `docs/architecture/README.md`, where each document describes the current ownership model rather than a historical migration phase.

## Completed cleanup

| Area | Current state | Maintainer note |
| --- | --- | --- |
| Popup state | Snapshot-owned live revision workflow | The popup renders stored snapshots, subscribes to storage revisions, and ignores stale target responses. |
| Background orchestration | Visible-tab coordinator | Background validates visible tab targets, queues initial matcher work, records executor state, and writes snapshot revisions. |
| Content observation | Page-session snapshot lifecycle | Content writes observation lifecycle revisions instead of feeding an active-tab cache command path. |
| Matcher runtime | Partitioned matcher executor | Build mode can use the offscreen worker pool, while development mode can use a dev-safe fallback without crashing the extension. |
| Replay | Target-owned history reads and snapshot summaries | Replay data is attached to explicit visible analysis targets rather than whichever tab is active when hydration completes. |
| Storage | Durable detection snapshots | `DetectionSessionSnapshot` is the popup-visible persistence record. Legacy analysis-cache records are no longer the live UI source of truth. |

## Verification focus

Use these checks when reviewing new patches:

- A stale response for a previous tab cannot overwrite the current popup target.
- Navigation clears volatile tab work before a new document analysis starts.
- Initial matcher work is queued before enrichment passes continue.
- Replay summaries are visible from snapshots even when full history is not hydrated yet.
- Cache and origin counts update from snapshot/status revisions, not command-era cache reads.
- Development mode does not create a crashing worker path.

## Remaining work

The next work should be bug-fix or product polish on the cleaned runtime, not revival of older fallback paths. If a new feature needs a temporary compatibility path, it should be isolated behind the live revision contracts and documented with a removal condition.
