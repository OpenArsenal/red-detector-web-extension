# Phase 4 extension lifecycle

Phase 4 gives the extension runtime a clearer lifecycle model. The goal is not to make the background service worker behave like a long-running server. Chrome can stop a Manifest V3 service worker when it is idle, so this phase treats background memory as temporary and keeps durable data in storage.

The practical benefit is that future collector, popup, and graph work can rely on one shared meaning for analysis and observation state. A maintainer should be able to answer three questions from the code: what starts a session, what can refresh a session, and what stops a session.

The lifecycle now reads like this:

```text
Popup opens
  -> background checks active tab
  -> background returns cache hit
      -> no observation session starts
  -> background performs fresh analysis
      -> content script starts observation when observe != none
      -> popup polls session state
      -> dirty session can refresh fresh analysis
      -> manual stop, expiry, navigation, or invalidation stops observation
```

Read the diagram as a list of ownership rules. The popup starts user intent, the background owns tab and cache decisions, and the content script owns the observer and its timers. The injected script is still only used for page JavaScript globals during collection; it does not own lifecycle state.

## Runtime ownership

The popup owns user-visible state such as loading, notice text, errors, and the polling interval. It does not own the observed page. Closing the popup asks the background to stop observation for the active tab.

The background owns active-tab lookup, content-script readiness, fresh analysis, cache writes, and the decision to refresh a dirty observation session. It may keep short-lived memory such as an in-flight content-script injection promise, but that memory is not durable. If Chrome stops the service worker, the background can be started again by the next extension event.

The content script owns page-local observation. It starts a `MutationObserver` and optional resource observer, keeps bounded signal snapshots in memory, and records why observation stopped. It can stop because the user asked, the timer expired, too many mutations arrived, WXT invalidated the content runtime, or the document URL changed.

## Navigation rule

An observation session belongs to the document URL that was active when the background started watching. A hash-only change still counts as the same document. A path or origin change means the tab is now showing a different page.

When the content script notices that the current URL no longer matches the session URL, it reports `stopReason: "navigation"`. When the background sees a dirty or observing session for a previous document, it refuses to refresh that session. This prevents old observer state from being mixed with a new page.

## Review checklist

Use this checklist when reviewing lifecycle changes:

- Cache hits still return without starting content-script observation.
- `observe: "none"` still avoids page watching after fresh analysis.
- `observe: "bounded"` and `observe: "while-popup-open"` still start the same observation path until a later phase gives them separate behavior.
- Dirty or observing sessions can refresh only when their expected URL still matches the active tab URL.
- Invalidated content runtimes stop with `stopReason: "invalidated"`, not `"manual"`.
- Navigation stops use `stopReason: "navigation"`.
- No long-lived ports are added only to keep the service worker alive.
- No new permissions or host permissions are added.

## Manual QA

Run the normal phase 1 popup checklist, then add these lifecycle checks:

- Open the popup on a supported page, refresh, and confirm observation starts.
- Stop observation from the popup and confirm the current detections stay visible.
- Navigate the same tab to a different path while the popup is open and confirm the extension does not refresh an old observation session.
- Close and reopen the popup and confirm a cache hit still renders without starting observation.
