# Cache, lifecycle, and detector revision model

The popup needs one stable rule: opening it should show the newest safe detector output without restarting analysis unless new work is actually needed. The previous nonblocking matcher work made CPU execution faster, but cache hits still triggered immediate revalidation. That made a reopen look like a new scan and allowed fresh partial matcher output to replace a perfectly usable cached result.

The corrected model separates three streams that used to be mixed together.

```text
Detector output
  saved analysis, replay trace, explanations, and result count

Observation lifecycle
  observing, dirty, stopped, expired, or unavailable content state

Visible progress
  throttled detector revisions that are readable in the popup
```

A cache-first popup open now reads detector storage first. When the record is fresh, the background may reopen observation for the active page, but it does not immediately enqueue a matcher job. Matcher work starts after a manual refresh, a cache miss, a stale record, a new document, or a content snapshot that reports queued or flushed observations.

Content-owned snapshots can update lifecycle state without replacing detector output. For example, an expired content observer writes a stopped snapshot. The popup applies the stopped state to controls and copy, but it keeps the latest background or cache analysis visible. This prevents an empty content bootstrap snapshot from erasing real results while still making the UI honest after observation expires.

Replay data stays in replay storage. Startup snapshot reads recover the latest replay trace and bounded replay history next to the stored analysis, so explanation UI can survive popup close and reopen without waiting for another matcher run.

Matcher partition completions are still fine-grained internally, but visible storage revisions are coalesced. The background writes a partial detector revision when enough time has passed, enough new detections appeared, or the job completes. This keeps the worker pool responsive while avoiding rapid count jumps that are hard to understand.

The resulting flow is:

```text
popup opens
  -> render detector snapshot or analysis cache
  -> recover replay history
  -> reopen observation only when requested
  -> wait for dirty content snapshots or manual refresh before matching

content observes
  -> write lifecycle snapshots
  -> queued/flushed facts trigger targeted refresh
  -> stopped/expired snapshots update status only

matcher progresses
  -> process small kind chunks
  -> coalesce visible detector revisions
  -> final result saves analysis and replay trace
```
