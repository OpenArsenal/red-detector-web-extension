# RED Detector Web Extension

A Chrome-first Manifest V3 technology detector built with WXT, TypeScript, Solid, and `comctx`.

This MVP analyzes the active `http`/`https` tab locally, collects bounded page signals in a content script, runs a pure TypeScript detector against a small bundled registry, and caches only normalized `SiteAnalysis` results.

## Current MVP flow

1. The popup asks the background service worker to analyze the active tab.
2. The background validates that the tab is inspectable and checks the per-origin cache.
3. The content script collects normalized `PageSignals` such as URL, bounded HTML, script URLs, meta tags, non-HttpOnly cookie names, DOM selector probes, and limited isolated-world global probes.
4. The background runs `analyzeSite(signals, technologies)` using the bundled MVP registry.
5. The normalized `SiteAnalysis` is cached in `browser.storage.local` with a 24-hour TTL.
6. The popup renders detected technologies grouped by category.

The extension does not store raw page payloads, raw cookie values, robots.txt responses, page text, or inline script contents.


## Messaging architecture

The extension uses `comctx` to expose small typed RPC surfaces between the popup, background service worker, and content script. The background API owns privileged orchestration (`analyzeActiveTab`, cache lookup, and active-tab validation), while the content API owns page-local signal collection only. This keeps popup code from scraping pages directly and keeps detection logic out of the content script.

`comctx` is used instead of raw `browser.runtime.sendMessage`/`browser.tabs.sendMessage` discriminated unions because it lets each extension context consume an explicit TypeScript interface (`BackgroundApi` and `ContentApi`) while the adapters still route over normal MV3 extension messaging. Runtime calls that cross into the content script are wrapped with a timeout so a missing or stale content script returns `CONTENT_SCRIPT_UNAVAILABLE` instead of leaving the popup waiting indefinitely.

## Manual messaging QA checklist

Before accepting messaging changes, run the extension in Chrome and verify:

- A normal `https://` page returns either detected technologies or a stable empty result.
- `chrome://extensions` returns `UNSUPPORTED_URL` and the popup remains responsive.
- Browser/internal or PDF-like pages that do not run the content script do not hang the popup.
- A page with no content-script response returns `CONTENT_SCRIPT_UNAVAILABLE`.
- Refresh/force-refresh still re-runs analysis instead of serving a stale cache result.

## Tooling

This scaffold uses `mise` to pin project tools and `aube` as the package manager/script runner.

Common commands:

```bash
mise install
mise run dev
mise run build
mise run zip
mise run test
```

You can also run package scripts directly with aube:

```bash
aubr dev
aubr build
aubr zip
aubr test
```

Aube will install dependencies before running scripts when the manifest or lockfile has changed.

## Project areas

- `src/entrypoints/` — WXT popup, background service worker, and content script entrypoints.
- `src/entrypoints/popup/` — Solid popup shell for triggering analysis and displaying results.
- `src/components/` — reusable popup result, empty, and error presentation components.
- `src/lib/content/` — DOM/page signal collection owned by the content script.
- `src/lib/detection/` — pure detector types, rules, engine, normalizers, validation, and version helpers.
- `src/lib/messaging/` — typed `comctx` message contracts and adapters for popup, background, and content contexts.
- `src/lib/storage/` — per-origin normalized analysis cache and aggregate status helpers.
- `src/lib/browser/` — active-tab helpers owned by privileged contexts.
- `src/data/` — category labels and bundled MVP technology registry exports.
- `src/tests/` — Vitest coverage for page signals, detector behavior, and messaging contracts.
- `public/icons/` — placeholder extension icon files.

## MVP registry

The current bundled registry intentionally stays small:

- WordPress
- Shopify
- React
- Google Analytics

Add technologies only after the detector contract, cache behavior, and fixtures are stable.

## Privacy notes

Analysis is local-first. The MVP does not send visited URLs, HTML, cookies, headers, or detection results to a backend. Cached data is limited to normalized site analysis output.

Unsupported pages such as `chrome://` return a stable error instead of attempting analysis.
