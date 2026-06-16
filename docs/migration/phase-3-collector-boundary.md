# Phase 3 collector boundary

Phase 3 gives page collection a clear home. Before this phase, the background service worker knew too much about how signals were collected. It decided which selectors to ask for, called the content script, checked that the tab had not navigated, fetched same-origin source text, injected JavaScript to read page globals, validated the final `PageSignals`, and then ran detection.

That worked, but it made the extension path hard to reuse. A future command-line interface should not need a popup, a content script, or `browser.scripting`. It should only need to provide the same kind of collected page data to the shared detector.

The new shape is:

```text
Extension today

background lifecycle
  -> extension page collector
    -> content script snapshot
    -> injected script for page globals
    -> same-origin background fetches
  -> analyzeSite(...)

Future CLI

CLI page runner
  -> CLI page collector
    -> browser automation snapshot
    -> network capture
    -> script evaluation
  -> same shared detector path
```

Read this diagram from top to bottom. The background still owns extension lifecycle work: active-tab lookup, content-script injection, popup observation refresh, and cache writes. The collector owns page acquisition: the act of turning a loaded page into bounded `PageSignals`.

## Why this leads to one shared system

The shared system is not created by forcing the extension and CLI to use the same browser APIs. They cannot. The extension has content scripts, temporary active-tab access, and injected scripts. The CLI will have browser automation, richer network access, and fewer extension permission limits.

The shared system comes from making both sides meet at the same boundary:

```text
interface-specific collector -> PageSignals today -> shared detection engine
```

Later phases can replace `PageSignals today` with normalized observations. That means small events like "script URL seen" or "meta tag seen" can flow into an evidence store before detection runs. Phase 3 does not jump there yet. It keeps the current detector output stable while putting collection behind a named boundary.

## What belongs in the extension collector

The extension collector owns data that comes from the current page:

- The content script reads DOM, meta tags, links, inline scripts, inline styles, visible text, storage keys, visible cookie names, and browser performance entries.
- The injected script reads page-owned JavaScript globals, such as values placed on `window` by the site itself.
- Background fetches add bounded same-origin script and stylesheet text, plus page response headers from a HEAD request.

The content script and injected script are intentionally separate. The content script can safely inspect the document. The injected script is only for the page's own JavaScript values, because those values are not directly visible to the content script.

## What stays outside the collector

The collector does not decide whether a technology is detected. It does not apply `implies`, `requires`, or `excludes`. It also does not decide when the popup should refresh a dirty observation session. Those decisions stay with the detector, graph phase, and lifecycle phase.

Some rule sources are still not implemented by the extension collector. Request headers, `robots.txt`, DNS records, certificate issuer data, and active probe results remain explicit gaps. Calling them out is better than silently pretending the extension can collect them today.

## Phase 3 review checklist

Use this checklist when reviewing phase 3 changes:

- The popup response shape still uses the current `SiteAnalysis` output.
- The background still owns active-tab lookup, content-script injection, observation refresh, and cache writes.
- Collector modules can be tested without opening the popup.
- No new browser permissions are added.
- Unsupported rule sources are named directly, not hidden in empty default fields.
