# Event runtime hardening validation

The extension runtime now follows the event architecture more directly during active-tab analysis. The background reuses the compiled registry artifact for collection planning, then sends normalized observations through indexed matching, evidence aggregation, graph refinement, final emission, replay trace creation, and popup rendering.

Read the flow from left to right:

```text
compiled registry
  -> collection plan
  -> normalized observations
  -> indexed matcher
  -> evidence candidates
  -> graph refinement
  -> emitted detections
  -> replay history and popup evidence
```

## Compiled registry and initial detection work

The compiled registry now owns the active collection plan used by the background collector. The background no longer asks the collector to rebuild selector, HTML, and global probes from the full technology registry for every active-tab analysis.

The collection plan also records which evidence surfaces are needed by the active registry:

```text
cheap page facts
  url, script URLs, stylesheet URLs, metadata, links, storage keys, cookies, DOM selectors

expensive page facts
  HTML regex probes, script text, stylesheet text, broad text surfaces

unsupported extension facts
  DNS, certificate issuer, robots.txt, and other future or CLI-oriented evidence
```

That lets the extension skip background header requests and same-origin source fetches when the compiled registry has no matching rule surface for them. Matcher indexes still route each normalized observation to the relevant rule bucket instead of trying every rule against every fact.

This does not claim the initial load is fully optimized. The remaining performance work is to split the user-visible first pass and the enrichment pass so the popup can render cheap detections before optional expensive evidence is collected.

## Graph refinement

Graph refinement now treats exclusion conflicts as connected components. Instead of deciding each excluded pair locally, the resolver searches the component for the strongest consistent candidate set.

The refinement rules are:

```text
implies  -> adds derived support
requires -> gates selection and needs independent direct support
excludes -> prevents conflicting candidates from surviving together
```

The exact solver is used for small conflict components. Large components keep a deterministic greedy fallback so pathological registries do not make the popup hang. Rejected candidates retain relationship context so replay explanations can describe which graph rule removed them.

## Replay history storage

Replay traces are still separate from `SiteAnalysis`. The latest trace remains available for cache-first explanation summaries, and a bounded per-origin history now stores recent replay runs under a dedicated storage key.

```text
analysis:https://example.com        -> latest normalized SiteAnalysis
replay:https://example.com          -> latest redacted replay trace
replay-history:https://example.com  -> bounded newest-first replay traces
```

The history is TTL-bound and capped per origin. Expired analysis records remove paired replay and replay-history entries, and expired replay histories are pruned before callers receive them.

## Popup access to past results

Active-tab analysis responses now include bounded replay history for the current origin. The popup renders a Replay History region below the technology groups. Users can open a stored run to inspect the saved pipeline stages and result count.

Technology cards also show concrete evidence previews even when replay explanations exist. A detection can now show both the short explanation summary and the underlying proof, such as a script URL, HTML snippet, header key/value, DOM selector, or relationship source.

## Validation status

The static architecture check passes for the targeted changes:

| Architecture target | Current status |
| --- | --- |
| Compiled registry informs initial collection | Implemented by passing the compiled `collectionPlan` into active-tab collection. |
| Initial detections avoid unnecessary expensive evidence | Partially implemented by skipping headers and source-content fetches when the compiled plan says those surfaces are unused. Full two-tier rendering remains future work. |
| Matcher indexes reduce rule work | Preserved through the existing compiled matcher index in the event pipeline. |
| Graph refinement is constraint-shaped | Improved by solving exclusion conflict components and preserving fixed-point repair. |
| Replay storage supports past results | Implemented as bounded per-origin replay history. |
| Users can access replay history | Implemented in the popup Replay History section for the active origin. |
| Popup evidence includes concrete details | Implemented by rendering evidence previews alongside explanation summaries. |

Dependency-complete validation still needs to run in the real branch workspace after installing project dependencies and generating WXT types:

```text
npm install
npm run compile
npm test -- --run
npm run bench
npm run build
```

The uploaded archive does not include `node_modules` or generated `.wxt` files, so compile and test commands cannot complete in this isolated review workspace.
