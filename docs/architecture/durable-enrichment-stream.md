# Durable enrichment and progressive detector snapshots

The popup should not wait for every detector surface before it shows useful results. Storage-backed snapshots make the visible state durable, but durability alone does not make the first result fast. The runtime now splits active-tab detection into a bootstrap pass and an enrichment pass so the first detector snapshot can appear before deeper evidence completes.

```text
popup asks for active-tab analysis
  -> background loads bootstrap registry data
  -> content collects cheap page-local observations
  -> event pipeline emits first detector result
  -> storage receives bounded progressive result frames
  -> popup paints each newer revision
  -> background loads enrichment registry data
  -> privileged collectors add deep evidence
  -> storage receives complete, failed, timed-out, or not-needed enrichment state
```

The bootstrap pass uses the smaller registry artifact and disables high-fan-out URL surfaces such as script, stylesheet, request, and resource URL matching. Those surfaces can produce many matches on modern pages, so they move to enrichment. This keeps first-result work focused on cheap page facts such as metadata, DOM selectors, links, cookies, storage keys, page globals, and the page URL.

## Progressive detector frames

The event pipeline still computes a stable candidate set before detections are shown. That keeps graph refinement deterministic: requirements, implications, exclusions, confidence, and ordering are evaluated against one consistent batch. After the pipeline finishes, the background writes bounded prefixes of the ordered result list as storage snapshots.

```text
final ordered detections: [A, B, C, D, E, F, G]

snapshot n:   [A, B]
snapshot n+1: [A, B, C, D]
snapshot n+2: [A, B, C, D, E, F]
snapshot n+3: [A, B, C, D, E, F, G]
```

Frames are intentionally bounded. Large pages should not write one storage record for every technology because storage writes, popup paint work, and extension messaging all have real cost. The current stream writes at most a small number of intermediate detector frames with a short delay between them, then writes the terminal result.

Partial frames omit replay traces. Replay and explanation state describe the complete candidate graph, so the popup preserves the previous replay UI until the terminal frame arrives.

## Durable enrichment terminal states

Enrichment now ends in storage. A pending state must not spin forever just because the background service worker stopped, a content-script call timed out, or a deeper collector failed.

```text
pending
  -> complete
  -> failed
  -> timed-out
  -> not-needed
  -> skipped
```

The popup renders those terminal states from the snapshot. Cached detector output stays visible when enrichment fails or times out, which is better than clearing results or saying the extension is still checking indefinitely.

## What this does not solve yet

This is still not true per-observation streaming. The current pipeline computes one consistent detector result, then streams bounded result frames from that result. That is a deliberate midpoint: it gives the popup progressive visible detections without breaking graph/refinement correctness.

A future indexed matcher phase can move closer to per-observation result emission by producing candidate deltas while observation batches are still arriving. That later step needs stronger event-storm controls and parity tests because relationship refinement can add, remove, or reorder detections as new evidence arrives.
