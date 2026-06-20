# Registry JSON artifacts

Red Detector keeps the technology registry authored as TypeScript for now, but the extension runtime should not import the full generated registry during background startup. The registry is large enough that a static import makes every service-worker wake pay for rule payload parsing before the background has even learned whether the popup can render a cached snapshot.

The WXT module at `modules/compile-registry.ts` now turns the TypeScript registry into packaged JSON assets during prepare and build:

```txt
TypeScript registry source
  -> WXT module
  -> .wxt/red-detector-registry/*.json
  -> .wxt/red-detector-public/red-detector-registry/*.json
  -> .output/<target>/red-detector-registry/*.json
```

The cache copy under `.wxt/red-detector-registry` gives maintainers a predictable place to inspect generated artifacts. The public-asset copy is registered with WXT so the same JSON files are copied into the extension output. Runtime code resolves the output path with `browser.runtime.getURL(...)` and fetches the enrichment asset only when analysis needs the full registry.

## Generated files

```txt
registry.bootstrap.json
  Cheap page-local rules for future content-side bootstrap matching.

registry.enrichment.json
  Full TypeScript-authored registry with regular expressions encoded as JSON records.

registry.metadata.json
  Lightweight technology metadata and rule-kind counts.

registry.relationships.json
  Relationship edges used to inspect graph shape without loading full rules.
```

Regular expressions cannot survive normal JSON serialization. The artifact encoder writes them as explicit records containing source and flags, then the runtime hydrator rebuilds `RegExp` values before compiling the in-memory matcher, graph, and collection plan.

## Runtime path

```txt
background starts
  -> register listeners
  -> answer cache-only paths where possible
  -> fetch registry.enrichment.json when fresh analysis needs rules
  -> hydrate regexes
  -> compile matcher, graph, and collection plan once
  -> reuse the compiled artifact for later analysis requests
```

The startup invariant is the important part: listener registration must not depend on the full registry payload. The background may still pay the JSON parse and compiler cost when a fresh analysis genuinely needs rules, but that work moves out of the cold-start path and into a measurable enrichment/loading step.

## Validation targets

A healthy build should prove these facts:

```txt
.wxt/red-detector-registry/*.json exists after WXT prepare
.output/<target>/red-detector-registry/*.json exists after WXT build
background entrypoint no longer imports #/compiled-registry
packaged registry hydration preserves detector order and regular expressions
bootstrap registry contains only cheap page-local rule surfaces
```

The benchmark `src/benchmarks/registry-json-hydration.bench.ts` compares packaged JSON parse and hydration against the previous in-memory registry compilation baseline. It does not claim the JSON path is faster. It measures the cost we accepted in order to keep the background startup bundle smaller.
