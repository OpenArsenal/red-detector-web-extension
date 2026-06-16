# Phase 2 contract seams

Phase 2 makes the current boundaries easier to see before the migration moves more code. It does not change what the popup asks for, what the detector returns, or what storage keeps. The goal is to make each handoff explicit so future collector, registry, and graph work has a clear place to attach.

The current request still moves through the same parts of the extension:

```text
Popup
  -> Background API contract
  -> registry provider
  -> collection plan
  -> content script collection
  -> injected script global read
  -> detector
  -> storage cache
  -> popup output
```

Read the diagram from top to bottom. The popup only knows the background API. The background now asks a registry provider for technologies, builds a collection plan from those technologies, and then sends only content-script-safe work to the content script. Page global reads stay separate because they need an injected script, not normal content-script code.

## What each seam protects

### Analysis contract

`src/lib/contracts/analysis.ts` owns the request and response shapes used by popup, background, and content-script messaging. `src/lib/messaging/index.ts` now re-exports those shapes next to the transport adapters, so existing callers keep importing from the same place.

This matters because messaging is just the delivery path. The contract is the thing both sides agree to send and receive.

### Storage contract

`src/lib/storage/contracts.ts` now owns `getAnalysisCacheKey(url)`. That keeps the cache-key rule in one place: analysis is stored by origin, not by full path.

For example:

```text
https://example.com/products -> analysis:https://example.com
https://example.com/pricing  -> analysis:https://example.com
```

This matters because later evidence or replay storage should not accidentally invent a second key shape.

### Registry provider

`src/lib/detection/registry-provider.ts` hides where technology definitions come from. Today it returns the bundled TypeScript registry. Later it can return compiled registry output without asking the background or popup to care about the source format.

### Collection plan

`src/lib/collectors/planning.ts` turns technology rules into the small list of things collectors need to check.

The split is important:

```text
Content script checks:
  - DOM selectors
  - bounded HTML probes

Injected script checks:
  - page JavaScript globals such as React or Shopify
```

A content script can read the page DOM, but it does not share JavaScript variables with the page. When the extension needs page-owned globals, the background runs an injected script for that specific read. Keeping those lists separate makes future permission and lifecycle work easier to reason about.

## What phase 2 deliberately does not change

Phase 2 does not switch the registry to YAML or JSON. It does not add the command-line interface. It does not change popup rendering, cache fields, or detector output. It only gives those future changes better seams.

## Review checklist

When reviewing phase 2 patches, check these points:

- `BackgroundApi` and `ContentApi` callers still compile through the same imports.
- `analyzeActiveTab` still returns the same `analysis`, `cache`, and optional `session` fields.
- Storage keys still look like `analysis:<origin>`.
- The background no longer owns the rule scan that builds selector, HTML, and page-global probe lists.
- Content-script collection and injected-script global reads stay separate.
