# Durable detection snapshots

The popup needs one reliable answer before it asks the extension to do more work: what is the latest detection result we can show for the active page or origin? Durable detection snapshots provide that answer from `chrome.storage.local`.

A snapshot is not a raw observation log. It stores normalized detector output, a small session identity, enrichment state, and an optional replay summary. Raw page HTML, cookie values, storage values, script bodies, stylesheet bodies, and full observation batches stay out of this record.

```text
content or background creates visible detector output
  -> DetectionSessionSnapshot(revision n)
  -> chrome.storage.local
  -> popup renders the newest revision
```

The key behavior is revision ordering. For the same tab, frame, and document, a newer revision replaces an older revision. An older revision cannot overwrite a newer one. This protects the popup from out-of-order content and background responses, which is important because the background service worker can wake, suspend, and restart while the page and popup continue to exist.

## What the snapshot stores

A `DetectionSessionSnapshot` contains the visible state needed for cache-first rendering:

- `DetectionSessionKey` identifies the tab, frame, document, and origin hash.
- `revision` orders updates for the same document session.
- `status` tells the popup whether the result is cached, collecting, observing, enriching, complete, failed, stale, or stopped.
- `analysis` carries the normalized `SiteAnalysis` result already used by the popup.
- `enrichment` records whether deeper evidence is pending, complete, failed, timed out, skipped, or unnecessary.
- `replaySummary` records counts and stage names from a full replay trace without embedding the full trace.

The origin-level latest key stores a complete snapshot too. That lets popup startup show the latest origin result while the background resolves the exact active document session.

## Storage keys

The storage helpers create two snapshot keys:

```text
rd:session:<tabId>:<frameId>:<documentId>
rd:origin:<originHash>:latest
```

The exact session key is the source of truth for one page document. The origin key is a convenience pointer to the newest known snapshot for that origin hash. Revision numbers are only comparable within one exact session, so the origin record is promoted by `updatedAt`, then by revision when timestamps are equal.

## Why this comes before popup streaming

The final runtime should feel like a stream, but the stream needs a durable record to stream from. Once snapshots exist, the popup can render storage first, subscribe to storage changes, and apply only newer revisions. That makes RPC a command channel rather than the continuous UI update bus.

```text
popup opens
  -> read exact session snapshot when known
  -> fall back to origin latest snapshot
  -> subscribe to storage changes
  -> ask background/content to sync or refresh
```

This step does not replace the event-based detector. It gives the existing event pipeline a durable output record that survives popup teardown and background service-worker shutdown.

## Validation points

The storage tests protect the invariants that later popup and content phases depend on:

- first session snapshot writes with revision `1`
- older revisions do not replace newer revisions
- newer revisions replace older revisions
- exact session lookup returns the latest session record
- origin lookup returns the newest snapshot for the origin hash
- accidental raw page-signal fields attached to a submitted object are not persisted
