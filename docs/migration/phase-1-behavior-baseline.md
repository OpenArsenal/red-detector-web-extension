# Phase 1 behavior baseline

Phase 1 protects the behavior the extension already exposes before the migration starts moving boundaries. The baseline is intentionally about what users and subsystem callers can observe today, not about the target event-driven architecture. Later phases can split collectors, contracts, registry loading, and graph reasoning only when these checks keep passing.

The current runtime path looks like this:

```text
Popup open
  -> BackgroundApi.analyzeActiveTab(cache-first, while-popup-open)
  -> active-tab validation
  -> per-origin cache lookup
  -> content-script collection when cache misses
  -> analyzeSite(PageSignals, technologies)
  -> save normalized SiteAnalysis
  -> optional observation session
  -> popup polling and refresh
```

This diagram matters because phase 1 is not allowed to change any edge in the flow. A patch can add tests, documentation, and fixtures, but cache keys, message names, result shapes, permission posture, and popup-visible states stay fixed.

## Analysis request matrix

`AnalyzeActiveTabInput` currently has two analysis modes and three observation values. The observation values are wider than the production branch they feed into, so the matrix records the real behavior rather than the behavior the names might imply.

| `mode` | `observe` | Current behavior | Baseline expectation |
| --- | --- | --- | --- |
| `cache-first` | `none` | Read the per-origin cache first. On hit, return cached `SiteAnalysis`. On miss, collect fresh signals, analyze, save, and do not start observation. | Cache hit must not contact the content script. Cache miss returns `cache.status: "miss"`. |
| `cache-first` | `while-popup-open` | Read cache first. On hit, return cache without observation. On miss, collect fresh signals, analyze, save, then request an observation session. | Cache hit returns no `session`. Cache miss can return `session.status: "observing"`. |
| `cache-first` | `bounded` | Same current branch as `while-popup-open` after a cache miss. There is no distinct bounded implementation in the background today. | Treat as a fresh observation request until lifecycle semantics are changed deliberately. |
| `refresh` | `none` | Bypass cache lookup, collect fresh signals, analyze, save, and do not start observation. | Return `cache.status: "bypassed"` and do not call `getCachedAnalysis`. |
| `refresh` | `while-popup-open` | Bypass cache lookup, collect fresh signals, analyze, save, then request an observation session. | Return `cache.status: "bypassed"` and include an observing session when content accepts it. |
| `refresh` | `bounded` | Same current branch as `while-popup-open`. | Keep this behavior until the lifecycle phase gives `bounded` separate semantics. |

## Cache and storage baseline

Analysis is cached by origin, not full URL. Saving analysis for `https://example.com/products` makes it visible to `https://example.com/pricing`, but it must not collide with `http://example.com/products` or `https://example.com:8443/products`. The persisted value is normalized `SiteAnalysis`; raw `PageSignals`, raw HTML, raw cookies, inline source contents, and page text are not cache outputs.

The cache key shape is:

```text
analysis:<origin>
```

Examples:

```text
https://example.com/products       -> analysis:https://example.com
https://example.com/pricing        -> analysis:https://example.com
http://example.com/products        -> analysis:http://example.com
https://example.com:8443/products  -> analysis:https://example.com:8443
```

A cached record older than `STORAGE_LIMITS.analysisTtlMs` is removed and treated as a miss. This protects later evidence/replay storage work from accidentally treating stale `SiteAnalysis` as durable evidence.

## Observation baseline

Observation is content-script state. The background asks the active tab content runtime to start, stop, or report observation state, and the popup only sees the state returned through `BackgroundApi`.

Current rules to preserve:

- Cache hits do not start observation.
- Fresh analysis starts observation only when `observe !== "none"`.
- `refreshActiveObservationSession()` re-analyzes only when the content session is `observing` or `dirty`.
- `stopActiveObservationSession()` forwards a stop request to the content script.
- Content observation expiry uses the same `stopObservationSession("expired")` path as other stop reasons.
- Manual content stops clear the expiry timer so expiration does not fire later.

`navigation` exists as a stop reason in the type model, but phase 1 treats it as a future lifecycle decision because the current production code does not emit it.

## Detector surfaces to keep stable

The detector is the most reusable part of the current implementation, so phase 1 pins the surfaces that later architecture work must not disturb accidentally.

| Surface | Why it must stay stable |
| --- | --- |
| `DISPLAY_CONFIDENCE_THRESHOLD` | Low-confidence matches are hidden from `SiteAnalysis.results`, so changing it alters popup output and cache output. |
| Result ordering | Registry order is the final tie breaker. This keeps the popup and tests deterministic. |
| `implies` | Implied technologies are added through relationship evidence and can chain to a fixed point. |
| `requires` | Technologies without required direct detections are pruned. Implied detections do not satisfy direct requirements. |
| `excludes` | Exclusion conflicts prefer stronger detections, direct detections, then registry order. |
| Version extraction | Existing capture-group templates continue to populate `DetectionResult.version`. |
| Evidence truncation | Matched evidence values stay bounded so results cannot smuggle large raw page payloads. |

## Manual baseline checklist

Run these checks before accepting migration PRs that touch messaging, lifecycle, collection, storage, or detection output:

- Open the popup on a normal `https://` page and verify it returns detections or a stable empty result.
- Open the popup on `chrome://extensions` and verify it returns `UNSUPPORTED_URL` without hanging.
- Open the popup on a page where the content script cannot respond and verify `CONTENT_SCRIPT_UNAVAILABLE` is returned.
- Open the popup twice on the same origin and verify the second cache-first load renders cached analysis without starting live observation.
- Click refresh and verify cache is bypassed, fresh analysis is saved, and observation starts when requested.
- Keep the popup open on a page that injects a script, stylesheet link, or meta tag and verify a dirty observation can trigger a fresh analysis.
- Close the popup and verify observation stops for the active tab.
- Repeat one check after in-tab navigation to catch stale URL mismatches.

## Automated baseline coverage

The phase 1 tests cover the current behavior at three boundaries:

- `src/tests/messaging/background-api.test.ts` pins background API cache, refresh, unsupported URL, content-script failure, document mismatch, and observation-refresh behavior.
- `src/tests/content/content-api.test.ts` pins content observation start, expiry, and manual-stop timer behavior without booting a browser.
- `src/tests/storage/cache.test.ts` pins origin-keyed storage behavior, including path variants, scheme and port separation, expiration, and a property-based same-origin lookup invariant.

These tests are intentionally characterization tests. When later phases intentionally change behavior, update this document and the tests in the same commit so the migration history explains the old behavior, the new behavior, and why the change was safe.
