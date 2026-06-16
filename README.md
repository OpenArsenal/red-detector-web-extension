# RED Detector Web Extension

A Chrome-first Manifest V3 technology detector built with WXT, TypeScript, Solid, and `comctx`.

This MVP analyzes the active `http`/`https` tab locally when the user opens the popup or clicks refresh, collects bounded page signals in a runtime-injected content script, runs a pure TypeScript detector against the bundled technology registry, and caches only normalized `SiteAnalysis` results.

## Current MVP flow

1. The popup asks the background service worker to analyze the active tab with `mode: "cache-first"` and `observe: "while-popup-open"`.
2. The background validates that the tab is inspectable and checks the per-origin cache.
3. On a cache hit, the popup renders cached normalized analysis immediately and no content script is injected.
4. On a cache miss, or after a manual refresh, the background runtime-injects the content script into the active tab, collects normalized `PageSignals`, runs `analyzeSite(signals, technologies)`, and caches the fresh `SiteAnalysis`.
5. After a fresh analysis, the content script can open a bounded observation session that watches late-added scripts, stylesheet links, and meta tags while the popup remains open.
6. The popup polls observation-session state while open, refreshes fresh analysis only when the session becomes dirty, and stops observation when the popup closes.

The extension does not store raw page payloads, raw cookie values, robots.txt responses, page text, or inline script contents.


## Messaging architecture

The extension uses `comctx` to expose small typed RPC surfaces between the popup, background service worker, and content script. The background API owns privileged orchestration such as active-tab validation, runtime injection, cache lookup, fresh analysis, and observation-session control. The content API owns page-local signal collection and bounded observation sessions only. This keeps popup code from scraping pages directly and keeps detection logic out of the content script.

`comctx` is used instead of raw `browser.runtime.sendMessage`/`browser.tabs.sendMessage` discriminated unions because it lets each extension context consume an explicit TypeScript interface (`BackgroundApi` and `ContentApi`) while the adapters still route over normal MV3 extension messaging. Runtime calls that cross into the content script are wrapped with a timeout so a missing or stale content script returns `CONTENT_SCRIPT_UNAVAILABLE` instead of leaving the popup waiting indefinitely.

The current permission model is intentionally narrow:

- `activeTab` gates tab access behind explicit user action.
- `scripting` is used for runtime content-script injection.
- `storage` persists normalized analysis only.
- No broad `host_permissions` are requested.

## Manual messaging QA checklist

The full phase 1 behavior baseline lives in [`docs/migration/phase-1-behavior-baseline.md`](docs/migration/phase-1-behavior-baseline.md). The phase 2 contract seams are described in [`docs/migration/phase-2-contract-seams.md`](docs/migration/phase-2-contract-seams.md), the phase 3 collector boundary is described in [`docs/migration/phase-3-collector-boundary.md`](docs/migration/phase-3-collector-boundary.md), the phase 4 lifecycle model is described in [`docs/migration/phase-4-extension-lifecycle.md`](docs/migration/phase-4-extension-lifecycle.md), the phase 5 graph seam is described in [`docs/migration/phase-5-graph-registry.md`](docs/migration/phase-5-graph-registry.md), the phase 6 popup view-model boundary is described in [`docs/migration/phase-6-popup-view-model.md`](docs/migration/phase-6-popup-view-model.md), and the phase 7 test boundary is described in [`docs/migration/phase-7-test-boundaries.md`](docs/migration/phase-7-test-boundaries.md). Before accepting messaging, collector, lifecycle, graph, or popup changes, run the extension in Chrome and verify:

- A normal `https://` page returns either detected technologies or a stable empty result.
- `chrome://extensions` returns `UNSUPPORTED_URL` and the popup remains responsive.
- Browser/internal or PDF-like pages that do not run the content script do not hang the popup.
- A page with no content-script response returns `CONTENT_SCRIPT_UNAVAILABLE`.
- Opening the popup on a cached origin renders cached analysis without starting live observation.
- Refresh bypasses cache, re-runs analysis, and starts a fresh observation session.
- Closing the popup stops live observation for the active tab.
- Late-loaded signals on a supported page can trigger a bounded fresh analysis while the popup stays open.

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
- `src/data/` — category labels and bundled technology registry exports.
- `src/tests/` — Vitest coverage for detector behavior, messaging contracts, content observation, popup view models, storage cache semantics, and shared test fixtures.
- `public/icons/` — placeholder extension icon files.

## Registry baseline

The bundled registry is generated from the TypeScript rule tree under `src/lib/detection/rules/` and re-exported through `src/data/technologies.ts`. Keep registry-source changes separate from phase 1 behavior-baseline work so detector output changes are easy to review.

## Privacy notes

Analysis is local-first. The MVP does not send visited URLs, HTML, cookies, headers, or detection results to a backend. Cached data is limited to normalized site analysis output, and live DOM observation is temporary rather than always-on.

Unsupported pages such as `chrome://` return a stable error instead of attempting analysis.
