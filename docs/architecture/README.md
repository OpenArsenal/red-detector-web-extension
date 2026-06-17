# Architecture docs

These docs are the current maintainer map for the Red Detector migration. They describe the branch after phases 1 through 13, where the extension still uses the existing active-tab flow but now has explicit seams for contracts, collectors, lifecycle, graph reasoning, popup view state, and shared tests.

Start with the overview when you need the system shape, then use the workflow or popup guide for narrower review questions.

| Document | Use it when |
| --- | --- |
| [`overview.md`](overview.md) | You need the current runtime map, target pipeline map, subsystem seam table, compatibility rules, or open architecture decisions. |
| [`verification-workflow.md`](verification-workflow.md) | You need to decide which commands, targeted tests, or manual Chrome checks belong on a patch or pull request. |
| [`popup-composition.md`](popup-composition.md) | You are changing the Solid popup shell, named regions, status feedback, or future explanation/replay placement. |
| [`../migration/phase-9-observation-normalization.md`](../migration/phase-9-observation-normalization.md) | You need to understand the first normalized observation seam and why it does not replace `PageSignals` yet. |
| [`../migration/phase-10-evidence-repository.md`](../migration/phase-10-evidence-repository.md) | You need to understand the evidence-entry contract, compatibility evidence adapter, or in-memory evidence repository seam. |
| [`../migration/phase-11-observation-pattern-matching.md`](../migration/phase-11-observation-pattern-matching.md) | You need to understand how normalized observations become sidecar pattern-match events and evidence entries. |
| [`../migration/phase-12-evidence-candidates.md`](../migration/phase-12-evidence-candidates.md) | You need to understand how evidence entries become sidecar candidate detections before graph refinement. |
| [`../migration/phase-13-candidate-relationship-refinement.md`](../migration/phase-13-candidate-relationship-refinement.md) | You need to understand how sidecar candidates are refined through `implies`, `requires`, and `excludes` relationships. |

Migration phase notes remain under [`../migration/`](../migration/). The short current-state matrix is [`../migration/status.md`](../migration/status.md).
