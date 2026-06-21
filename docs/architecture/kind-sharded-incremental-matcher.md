# Kind-sharded incremental matcher runtime

The matcher runtime no longer treats the first popup result as a separate truth model. The first analysis now plans from the complete compiled registry, collects the evidence surfaces that are available immediately, and lets the offscreen worker pool match those observations by kind. Later collectors and content-observer updates enter the same path, so the popup sees the analysis converge through real snapshot revisions instead of waiting for a second detector mode to replace the first result.

The change fixes the mismatch created by the older bootstrap/enrichment split. Bootstrap was fast because it removed rule kinds from the registry before collection and matching. That made the popup responsive, but it also meant the first result could not see `scriptSrc`, `resourceUrl`, `requestUrl`, HTML, text, header, or source-content rules. The new split keeps the full registry as the planning and graph authority, then narrows only the worker payload that processes a specific observation kind.

```text
complete registry
  ├─► collection plan by evidence surface
  ├─► relationship graph and final emission metadata
  └─► generated matcher shards
        ├─► registry.kind.meta.json
        ├─► registry.kind.scriptSrc.json
        ├─► registry.kind.resourceUrl.json
        └─► registry.kind.htmlMatch.json
```

Each worker receives one partition task and loads the shard for that task's observation kind. A `scriptSrc` partition loads the script-source shard, while an `htmlMatch` partition loads the HTML-rule shard because bounded HTML probes still evaluate `html` rules. Header partitions include both `header` and `responseHeader` rules because current extension observations can normalize background response headers as `header` facts.

```text
ObservationBatch
  └─► kind partitions
        ├─► meta ─────────► worker loads registry.kind.meta.json
        ├─► scriptSrc ────► worker loads registry.kind.scriptSrc.json
        ├─► resourceUrl ──► worker loads registry.kind.resourceUrl.json
        └─► htmlMatch ────► worker loads registry.kind.htmlMatch.json

worker matches
  └─► evidence delta
        └─► background coordinator merges accumulated partitions
              └─► candidate graph refinement
                    └─► popup snapshot revision
```

The background remains the lifecycle owner. It decides whether a result still belongs to the active tab, writes the durable snapshot revision, saves the final analysis cache, and rejects results from superseded jobs. Offscreen and workers do not read tabs or storage; they only process matcher work.

## Runtime behavior

The initial active-tab path always fetches the complete compiled registry artifact. The collection plan still has an initial tier and an enrichment tier, but those tiers now describe collector cost, not detector truth. Initial collection gathers cheap and already-visible observations first, including URL-like resource surfaces. Enrichment adds larger text, HTML, header, and same-origin source-content evidence later.

Worker progress is now real progress. When a partition completes, the offscreen host sends a partition-complete message to the background. The background merges the completed partition set, refines candidates against the full graph, and writes a popup snapshot revision. The final matcher result still writes the normal analysis cache and replay trace.

```text
partition 1 complete ─► snapshot revision 2
partition 2 complete ─► snapshot revision 3
partition 3 complete ─► snapshot revision 4
final job complete ───► cache + replay + snapshot revision 5
```

This replaces the fake progressive frame behavior that sliced the final completed detection list after all matcher work had already finished.

## Compatibility notes

`registry.bootstrap.json` still exists as a compatibility artifact for tests and benchmark baselines, but the active-tab runtime should not use it for normal analysis. New runtime work should use `getCompiledRegistry()` for planning and final coordination, and `getCompiledObservationKindRegistry(kind)` inside matcher workers.

The current worker pool still sends the complete registry to the offscreen host for final merge. That is cheaper than sending it to every worker partition, but it is not the final possible optimization. A later step can move full-registry coordination into the offscreen host's own provider cache so the background sends only job identity and observations.
