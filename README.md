# RED Detector Web Extension
A Chrome-first Manifest V3 technology detector extension built with WXT, TypeScript, Solid, and `conctx`.

`conctx` is the intended typed messaging layer between the popup, background service worker, and content script. Message types, channels, and handlers should be added later in `src/lib/messaging/` and wired from the entrypoints when implementation begins.

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
- `src/entrypoints/` — WXT popup, background service worker, and content script entrypoints.
- `src/entrypoints/popup/` — future Solid popup UI shell.
- `src/lib/messaging/` — planned typed conctx message contracts, channels, and handlers.
- `src/lib/detection/` — future pure TypeScript detection engine, rules, types, normalizers, and version helpers.
- `src/lib/storage/` — future cache and preferences storage layer.
- `src/lib/browser/` — future browser API helper wrappers.
- `src/lib/shared/` — future shared utilities for errors, results, and URLs.
- `src/data/` — future category and technology registry definitions.
- `src/components/` — future popup UI components.
- `src/tests/` — placeholder fixtures and future Vitest test areas.
- `public/icons/` — placeholder extension icon files.
