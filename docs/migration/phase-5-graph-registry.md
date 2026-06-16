# Phase 5 graph and registry migration seam

Phase 5 keeps detector output stable while creating the first graph-shaped registry seam. Maintainers get a safer place to compare the current TypeScript rule tree with a future compiled registry before either path changes what the popup or storage receives.

The current detector still accepts the same `PageSignals` and returns the same `SiteAnalysis`. The new path sits between loaded rule definitions and graph resolution, so future registry-compiler work can prove that it emits the same technologies, order, and relationships as today.

This diagram shows the compatibility path after phase 5. Read it from left to right: raw TypeScript rules still work, but they are compiled into a registry graph before analysis uses them.

```text
PageSignals
  -> analyzeSite(signals, rawDefinitions)
  -> createCompiledDetectionRegistry(rawDefinitions)
  -> analyzeCompiledSite(signals, compiledRegistry)
  -> direct candidates + relationship candidates
  -> current SiteAnalysis output
```

`analyzeSite(...)` remains the compatibility entrypoint for extension callers. It compiles the raw registry in memory, then delegates to `analyzeCompiledSite(...)`. That keeps background, popup, storage, and tests that use the current API working while giving graph migration work a stable lower-level entrypoint.

The compiled registry graph stores three things that already matter to current behavior: technology definitions by id, registry order by id, and normalized relationship edges. Registry order is intentionally preserved because result sorting and equal-confidence exclusion conflicts can fall back to import order. Treating that order as data prevents a future compiler from accidentally changing output by reordering definitions.

Relationship declarations are also normalized. A technology can still use shorthand arrays such as `implies`, `requires`, and `excludes`, or explicit `relationships` objects. The compiled graph turns both forms into the same edge shape before graph resolution sees them. That gives future YAML or JSON source files a concrete compatibility target.

```text
TechnologyDefinition
├── implies: ["react"]
├── requires: ["wordpress"]
├── excludes: ["legacy"]
└── relationships: [{ kind: "implies", target: "runtime" }]

        becomes

RegistryRelationshipEdge[]
├── framework -> react      implies
├── framework -> wordpress  requires
├── framework -> legacy     excludes
└── framework -> runtime    implies
```

The detector also now creates internal candidates before final `DetectionResult` objects. A direct candidate comes from rule evidence, such as an HTML or script-source match. A relationship candidate comes from graph reasoning, such as one technology implying another. Both still materialize into the current public result shape, which means phase 5 does not expose explanation objects or replay logs yet.

That candidate layer matters because the target architecture eventually needs observation events, evidence entries, candidate detections, relationship refinement, and final detections. Phase 5 only names the candidate boundary. It does not change scoring, add persistent evidence storage, or change what the popup renders.

The graph tests added in this phase protect the compatibility rules that are easiest to break silently:

- explicit relationship objects and shorthand arrays must resolve the same way
- registry order remains the final tie break for equal-confidence conflicts
- version extraction happens before implied detections are materialized
- raw-registry analysis and compiled-registry analysis produce the same stable result shape

The phase intentionally avoids YAML and JSON source files, CLI behavior, replay persistence, and explanation-rich popup output. Those changes need the graph seam first, then separate equivalence tests before any runtime cutover.
