# RED Detector Web Extension
A Chrome-first Manifest V3 extraction demo built with WXT, TypeScript, Solid, and `comctx`.

- the popup triggers extraction for the active tab
- the background service worker calls the content script over typed RPC
- the content script collects a bounded page payload
- the background enriches that payload with cookies and `robots.txt`, then stores it locally
- the popup shows aggregate extraction status and the latest run outcome

This is intentionally an extraction-first milestone. The bundled technology registry and actual technology fingerprint matching are still future work built on top of the extracted payloads.

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

- `mise.toml` — pinned Node and aube versions plus project tasks.
- `src/entrypoints/` — WXT popup, background service worker, and content script entrypoints for the extraction flow.
- `src/entrypoints/popup/` — Solid popup UI for manual extraction and status display.
- `src/lib/messaging/` — typed `comctx` message contracts and adapters for popup, background, and content contexts.
- `src/lib/detection/` — pure extraction-domain helpers for payload collection, normalization, limits, and validation.
- `src/lib/storage/` — local retained-record storage and aggregate status helpers.
- `src/lib/browser/` — active-tab, cookies, and `robots.txt` helpers owned by privileged contexts.
- `src/lib/shared/` — shared runtime result, error, and URL helpers.
- `src/data/` — still reserved for future category and technology registry definitions.
- `src/components/` — still reserved for richer popup presentation beyond the current extraction console.
- `src/tests/` — focused Vitest coverage for the current extraction helpers and messaging contracts.
- `public/icons/` — placeholder extension icon files.

## Current behavior

1. Load the extension in WXT dev or build output.
2. Open a normal `http` or `https` page.
3. Open the popup and run extraction.
4. Inspect the popup status plus the background console logs to review the stored payload.

Unsupported pages such as `chrome://` will return a stable error instead of attempting extraction.
