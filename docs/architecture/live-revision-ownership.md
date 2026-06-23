# Live revision ownership

The popup is the product surface. Runtime internals only matter when they help the popup show the right state for the right tab without getting stuck. The live revision model therefore treats storage snapshots as the receive stream and treats active-tab commands as ways to start or steer work.

The cleanup removes targetless observation and replay reads from the popup path. A command that can change visible state must carry the session, tab, or URL that the popup already rendered. If the user switches tabs while background work is still finishing, the old response is ignored instead of being allowed to overwrite the new tab.

## User-visible contract

```text
Popup visible tab
  -> read stored session/origin snapshot
  -> render latest known detections
  -> start or reattach analysis for that same target
  -> apply only newer matching snapshot revisions
  -> ignore stale RPC responses from older targets
```

This keeps the UI aligned with the target the user is looking at. Cached detections, replay summaries, matcher executor state, and observation status all come from the same visible snapshot or from a command whose target still matches the visible tab.

## Runtime ownership

```text
POPUP
  owns visible tab identity
  owns workflow state for refresh, stop, tab switch, and stored-snapshot loading
  reads snapshot revisions from storage
  sends commands with explicit targets whenever a known session or URL exists

BACKGROUND
  owns active-tab lookup and privileged browser APIs
  queues the first matcher revision after the cheap collection pass
  schedules enrichment passes after initial matcher persistence
  clears volatile tab work on navigation
  records matcher executor metadata on snapshots

STORAGE
  owns the durable visible state
  rejects stale snapshot revisions
  keeps origin latest and per-session snapshots recoverable after service-worker restart
```

## Why the old active-tab helpers were removed from the popup path

Targetless helpers are convenient but unsafe in a popup that can stay open while the user changes tabs. A request might start for Tab A, then the user activates Tab B before the response resolves. If the response asks the background for “the active tab” again, it can accidentally read or mutate Tab B even though the command was created by Tab A state.

The safer rule is:

```text
A response may update the popup only when it still belongs to the visible target.
```

Replay history follows the same rule. The popup hydrates replay history by the URL already visible in the current analysis, not by whichever tab is active when the hydration request reaches the background.

## First-result timing

Fresh analysis now queues matcher persistence after the initial collection pass. Deeper evidence passes run later and publish ordinary newer revisions.

```text
initial cheap observations
  -> queue matcher revision
  -> popup can render queued or cached output
  -> enrichment pass collects deeper evidence
  -> queue newer matcher revision
  -> popup applies newer storage snapshot
```

That prevents deeper collection from owning first paint. The user can see initial detections sooner, then watch them improve through the same snapshot stream.

## Development matcher mode

WXT development mode can be hostile to extension worker pools because dev-time worker transforms and hot module machinery do not always behave like packaged extension runtime. The development executor therefore avoids constructing the offscreen worker pool and records a `dev-fallback` executor on snapshots. Production builds can still use the offscreen worker pool, and the popup can display the executor that produced the visible revision.

## Review checklist

Use this checklist when changing popup, background, storage, or matcher code:

- Does the command carry the session, URL, or tab identity already visible in the popup?
- Can a late response from an old tab overwrite the current tab?
- Does a navigation clear volatile tab maps before old observations can merge into the new page?
- Does the first matcher job start before enrichment collection?
- Does replay UI render from the snapshot summary even if full history hydration fails?
- Does the snapshot show which matcher executor produced the visible revision?
- Does storage remain the only source of truth for visible detector state after service-worker restart?
