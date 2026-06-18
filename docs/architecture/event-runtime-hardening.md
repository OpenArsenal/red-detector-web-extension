# Event runtime hardening validation

The extension runtime now follows the event architecture more directly during active-tab analysis. The background uses the compiled registry artifact for collection planning, then sends normalized observations through indexed matching, evidence aggregation, graph refinement, final emission, replay trace creation, storage, and popup rendering.

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

The compiled registry owns the active collection plan used by the background collector. The background no longer asks the collector to rebuild selector, HTML, and global probes from the full technology registry for every active-tab analysis.

The collection plan records which evidence surfaces are needed by the active registry:

```text
cheap page facts
  url, script URLs, stylesheet URLs, metadata, links, storage keys, cookies, DOM selectors

expensive page facts
  HTML regex probes, visible text, script text, stylesheet text

unsupported extension facts
  DNS, certificate issuer, robots.txt, and other future or CLI-oriented evidence
```

That lets the extension skip broad text collection, inline source collection, background header requests, and same-origin source fetches when the compiled registry has no matching rule surface for them. Matcher indexes still route each normalized observation to the relevant rule bucket instead of trying every rule against every fact.

Shared source limits now live in a small standalone module. Hot-path collectors, validation helpers, and focused tests can read safety caps without importing the generated registry tree.

This does not claim the initial load is fully optimized. The remaining performance work is to split the user-visible first pass and the enrichment pass so the popup can render cheap detections before optional expensive evidence is collected.

## Graph refinement

Graph refinement treats exclusion conflicts as connected components. Instead of deciding each excluded pair locally, the resolver searches the component for the strongest consistent candidate set.

The refinement rules are:

```text
implies  -> adds derived support
requires -> gates selection and needs independent direct support
excludes -> prevents conflicting candidates from surviving together
```

The exact solver is used for small conflict components. Large components keep a deterministic greedy fallback so pathological registries do not make the popup hang. Relationship-only candidates removed by a direct exclusion conflict are suppressed for the rest of the refinement run, which prevents the fixed-point loop from re-adding and removing the same inferred candidate forever.

## Replay history storage

Replay traces are separate from `SiteAnalysis`. The latest trace remains available for cache-first explanation summaries, and bounded per-origin history stores recent replay runs under a dedicated storage key.

```text
analysis:https://example.com        -> latest normalized SiteAnalysis
replay:https://example.com          -> latest redacted replay trace
replay-history:https://example.com  -> bounded newest-first replay traces
```

The history is TTL-bound and capped per origin. Expired analysis records remove paired replay and replay-history entries, and expired replay histories are pruned before callers receive them.

Incognito active-tab analysis now skips persistent analysis and replay writes. The popup can still render the current incognito result returned from memory, but the extension does not leave replay-history records in extension storage for that incognito page.

## Popup access to past results

Active-tab analysis responses include bounded replay history for the current origin. The popup renders a Replay History region below the technology groups. Users can open a stored run to inspect the saved pipeline stages and result count.

Technology cards show concrete evidence previews even when replay explanations exist. A detection can show both the short explanation summary and the underlying proof, such as a script URL, HTML snippet, header key/value, DOM selector, version capture, or relationship source.

Observation-session responses also include a stable session target. Popup refresh, stop, and state reads can address the tab and session that produced the visible analysis instead of resolving whatever tab is active at cleanup time.

## Validation status

The static architecture check passes for the targeted changes:

| Architecture target | Current status |
| --- | --- |
| Event-shaped active-tab pipeline | Implemented through normalized observation batches, indexed matching, evidence, graph refinement, emission, replay, and popup rendering. |
| Compiled registry informs initial collection | Implemented by passing the compiled `collectionPlan` into active-tab collection. |
| Initial detections avoid unnecessary expensive evidence | Improved by skipping text, inline source, headers, and source fetches when the compiled plan says those surfaces are unused. Full two-tier rendering remains future work. |
| Matcher indexes reduce rule work | Preserved through the compiled matcher index in the event pipeline. |
| Graph refinement is constraint-shaped | Improved by solving exclusion conflict components, suppressing removed inferred conflicts, and preserving fixed-point repair. |
| Replay storage supports past results | Implemented as bounded per-origin replay history. |
| Users can access replay history | Implemented in the popup Replay History section for the active origin. |
| Popup evidence includes concrete details | Implemented by rendering evidence previews alongside explanation summaries. |
| Session lifecycle targets the correct analysis | Implemented through `ObservationSessionTarget` on analysis responses and targeted refresh/stop/state APIs. |
| Privacy posture avoids incognito persistence | Implemented by bypassing persistent analysis and replay writes for incognito active-tab analysis. |
| Permission surface follows active-tab flow | Improved by removing the broad `tabs` permission from the manifest. |

The literal greenfield architecture still contains work outside this browser-extension hardening pass. The CLI interface and full YAML/JSON registry-source migration remain out of scope. Build-time generation of a standalone compiled artifact is also not complete; the current runtime uses the bundled TypeScript registry provider and its compiled in-memory artifact.

## Commands run in this workspace

These commands completed:

```text
npm install
npx wxt prepare
npx vitest --run src/tests/messaging/background-api.test.ts --reporter=dot
npx vitest --run src/tests/storage/cache.test.ts --reporter=dot
npx vitest --run src/tests/collectors/planning.test.ts --reporter=dot
npx vitest --run src/tests/content/content-api.test.ts --reporter=dot
npx vitest --run src/tests/candidates src/tests/graph src/tests/detection/observation-matcher-index.test.ts src/tests/detection/observation-matcher.test.ts --reporter=dot
```

Focused single-file suites also passed for contracts, popup view-model, replay, emission, registry compiler/source schema, lifecycle, observations, evidence, messaging contracts, collector capabilities, page-signal collection, and observed page signals.

These commands did not complete in this constrained archive workspace before the execution timeout:

```text
npx tsc --noEmit --pretty false
npm run build
npm run bench -- --run
npx vitest --run --reporter=dot
```

The timeouts are dominated by the very large generated rules tree and WXT/Vite production bundling. No assertion failure was observed before those timeouts, but they still need to be rerun in the normal branch workspace before release.
