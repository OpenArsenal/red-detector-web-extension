import { createEvidenceCandidateBatch, refineEvidenceCandidateBatch } from '../candidates';
import { matchIndexedObservationBatch } from '../detection/observation-matcher-index';
import { createCompiledDetectionRegistry } from '../detection/registry-graph';
import type { DetectionRunOptions, SiteAnalysis, TechnologyDefinition } from '../detection/types';
import { emitSiteAnalysisFromRefinedCandidates } from '../emission';
import type { ObservationBatch } from '../observations';
import type { CompiledTechnologyRegistryArtifact } from '../registry';
import type {
	DetectionPipelineEventDetails,
	DetectionPipelineRuntimeEvent,
	DetectionPipelineRuntimeResult,
	DetectionPipelineStage,
} from './runtime';

/** Input for running the event pipeline from pre-normalized observation events. */
export interface RunObservationBatchPipelineInput {
	/** Bounded normalized observations emitted by a collector or test fixture. */
	readonly batch: ObservationBatch;
	/** Ordered technology registry used for matching and relationship reasoning. */
	readonly registry: readonly TechnologyDefinition[];
	/** Optional compiler artifact that lets matching and refinement reuse prebuilt indexes. */
	readonly compiledRegistryArtifact?: Pick<CompiledTechnologyRegistryArtifact, 'matcherIndex' | 'relationshipGraph'>;
	/** Optional detector compatibility flags shared with matching stages. */
	readonly options?: DetectionRunOptions;
	/** Timestamp override used by deterministic tests and replay fixtures. */
	readonly analyzedAt?: number;
	/** Source marker written to the emitted analysis when the caller needs an override. */
	readonly source?: SiteAnalysis['source'];
	/** Optional event sink used by tests and later runtime instrumentation. */
	readonly onEvent?: (event: DetectionPipelineRuntimeEvent) => void;
}

/** Event stages produced by an already-normalized observation batch. */
type ObservationBatchPipelineStage = Extract<
	DetectionPipelineStage,
	| 'normalized-observations'
	| 'pattern-matched'
	| 'evidence-created'
	| 'candidates-created'
	| 'candidates-refined'
	| 'detections-emitted'
>;

/** Internal callback used to append public-safe observation-batch stage events. */
interface ObservationBatchEventRecorder {
	/** Record a stage count with optional scalar diagnostics. */
	(stage: ObservationBatchPipelineStage, count: number, details?: DetectionPipelineEventDetails): void;
}

/**
 * Run the event detector stages from an already-normalized observation batch.
 *
 * This is the entry point collector phases need once they stop sending complete
 * `PageSignals` snapshots. It records a `normalized-observations` stage even
 * though normalization already happened so replay can still show the full event
 * pipeline shape. It intentionally has no legacy fallback because a caller that
 * already has observations cannot be faithfully converted back into the old
 * snapshot shape.
 */
export function runObservationBatchPipeline(
	input: RunObservationBatchPipelineInput,
): DetectionPipelineRuntimeResult {
	const events: DetectionPipelineRuntimeEvent[] = [];
	const record = createObservationBatchEventRecorder(input, events);
	record('normalized-observations', input.batch.observations.length);

	const matches = matchIndexedObservationBatch({
		registry: input.registry,
		batch: input.batch,
		index: input.compiledRegistryArtifact?.matcherIndex,
		options: input.options,
	});
	record('pattern-matched', matches.matches.length);
	record('evidence-created', matches.evidenceBatch.entries.length);

	const candidates = createEvidenceCandidateBatch({
		registry: input.registry,
		evidence: matches.evidenceBatch,
	});
	record('candidates-created', candidates.candidates.length);

	const refined = refineEvidenceCandidateBatch({
		batch: candidates,
		compiledRegistry: input.compiledRegistryArtifact?.relationshipGraph ?? createCompiledDetectionRegistry(input.registry),
	});
	record('candidates-refined', refined.candidates.length, {
		rejectionCount: refined.rejections.length,
		relationshipEvidenceCount: refined.relationshipEvidence.length,
	});

	const emitted = emitSiteAnalysisFromRefinedCandidates({
		batch: refined,
		analyzedAt: input.analyzedAt,
		source: input.source,
	});
	record('detections-emitted', emitted.analysis.results.length, {
		filteredCandidateCount: emitted.metadata.filteredCandidateCount,
	});

	return {
		analysis: emitted.analysis,
		requestedMode: 'event',
		completedMode: 'event',
		events,
		emission: emitted.metadata,
	};
}

/** Create the stage recorder shared by observation-batch pipeline stages. */
function createObservationBatchEventRecorder(
	input: RunObservationBatchPipelineInput,
	events: DetectionPipelineRuntimeEvent[],
): ObservationBatchEventRecorder {
	const target = input.batch.target;
	const occurredAt = input.analyzedAt ?? input.batch.observedAt;

	return (stage, count, details) => {
		const event: DetectionPipelineRuntimeEvent = details && Object.keys(details).length > 0
			? { stage, target, occurredAt, count, details }
			: { stage, target, occurredAt, count };

		events.push(event);
		input.onEvent?.(event);
	};
}
