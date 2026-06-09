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
