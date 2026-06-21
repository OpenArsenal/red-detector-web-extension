import type { DetectionPipelineEventDetails, DetectionPipelineRuntimeEvent } from '../pipeline';
import type { ObservationPatternMatchBatch } from '../detection/observation-match-types';
import type { DetectionRunOptions, SiteAnalysis, TechnologyDefinition } from '../detection/types';
import { createEvidenceCandidateBatch, refineEvidenceCandidateBatch } from '../candidates';
import { createCompiledDetectionRegistry } from '../detection/registry-graph';
import { emitSiteAnalysisFromRefinedCandidates } from '../emission';
import type { CompiledTechnologyRegistryArtifact } from '../registry';
import type {
	NormalizedObservation,
	NormalizedObservationKind,
	ObservationBatch,
} from '../observations';
import type {
	MatcherJobIdentity,
	MatcherPartitionMatch,
	MatcherPartitionPriority,
	MatcherPartitionResult,
	MatcherPartitionTask,
} from './contracts';

/** Bootstrap partitions are the only ones allowed into the first visible matcher pass. */
const BOOTSTRAP_PRIORITY_LOOKUP = Object.freeze({
	1: true,
	2: true,
	3: false,
	4: false,
} satisfies Record<MatcherPartitionPriority, boolean>);

/** Sort order that replaces the old hard-coded initial/enrichment split. */
const KIND_PRIORITIES = Object.freeze({
	url: 1,
	htmlMatch: 1,
	meta: 1,
	dom: 1,
	header: 2,
	responseHeader: 2,
	link: 2,
	cookie: 2,
	storage: 2,
	jsGlobal: 2,
	scriptSrc: 3,
	stylesheetHref: 3,
	resourceUrl: 3,
	requestUrl: 3,
	requestHeader: 3,
	html: 4,
	text: 4,
	scriptContent: 4,
	stylesheetContent: 4,
	robots: 4,
	dns: 4,
	certIssuer: 4,
	probe: 4,
} satisfies Record<NormalizedObservationKind, MatcherPartitionPriority>);

/** Input for splitting one observation batch into kind-routed matcher tasks. */
export interface CreateMatcherPartitionTasksInput {
	/** Job identity shared by every partition. */
	readonly job: MatcherJobIdentity;
	/** Full observation batch collected for the target document. */
	readonly batch: ObservationBatch;
	/** Optional detector flags such as disabled kinds. */
	readonly options?: DetectionRunOptions;
	/** Whether to keep only high-priority bootstrap partitions. */
	readonly bootstrapOnly?: boolean;
}

/** Input for merging partition results into the normal event-pipeline result. */
export interface CreateMatcherPipelineResultInput {
	/** Original batch used for target, timestamp, and event metadata. */
	readonly batch: ObservationBatch;
	/** Ordered registry used by downstream candidate and graph stages. */
	readonly registry: readonly TechnologyDefinition[];
	/** Optional compiled relationship graph reused after partitioned matching. */
	readonly compiledRegistryArtifact?: Pick<CompiledTechnologyRegistryArtifact, 'relationshipGraph'>;
	/** Partition results emitted by workers. */
	readonly partitions: readonly MatcherPartitionResult[];
	/** Optional timestamp override for emitted `SiteAnalysis`. */
	readonly analyzedAt?: number;
	/** Source marker written to the emitted analysis. */
	readonly source?: SiteAnalysis['source'];
	/** Optional event sink for runtime diagnostics. */
	readonly onEvent?: (event: DetectionPipelineRuntimeEvent) => void;
}

/**
 * Split an observation batch into independent matcher tasks by observation kind.
 *
 * A page can expose thousands of script and resource URL observations while its
 * URL, meta, DOM, and header evidence is tiny. Kind partitions let the scheduler
 * send cheap facts first, then keep deeper content scans moving in parallel
 * without blocking the background service worker message loop.
 */
export function createMatcherPartitionTasks(
	input: CreateMatcherPartitionTasksInput,
): readonly MatcherPartitionTask[] {
	const grouped = new Map<NormalizedObservationKind, {
		readonly priority: MatcherPartitionPriority;
		readonly observations: NormalizedObservation[];
		readonly indexes: number[];
	}>();

	input.batch.observations.forEach((observation, index) => {
		const priority = getMatcherPartitionPriority(observation.kind);
		if (input.bootstrapOnly && !isBootstrapMatcherPriority(priority)) {
			return;
		}

		const bucket = grouped.get(observation.kind);
		if (bucket) {
			bucket.observations.push(observation);
			bucket.indexes.push(index);
			return;
		}

		grouped.set(observation.kind, {
			priority,
			observations: [observation],
			indexes: [index],
		});
	});

	return [...grouped]
		.sort((left, right) => {
			const priorityDelta = left[1].priority - right[1].priority;
			return priorityDelta === 0 ? left[0].localeCompare(right[0]) : priorityDelta;
		})
		.map(([kind, bucket], ordinal): MatcherPartitionTask => ({
			job: input.job,
			partitionId: `${input.job.jobId}:${ordinal}:${kind}`,
			kind,
			priority: bucket.priority,
			batch: {
				target: input.batch.target,
				interface: input.batch.interface,
				observedAt: input.batch.observedAt,
				observations: bucket.observations,
			},
			observationIndexes: bucket.indexes,
			...(input.options ? { options: input.options } : {}),
		}));
}

/** Return whether low-priority partitions remain after the bootstrap response. */
export function hasDeferredMatcherPartitions(batch: ObservationBatch): boolean {
	return batch.observations.some((observation) => !isBootstrapMatcherPriority(
		getMatcherPartitionPriority(observation.kind),
	));
}

/** Return whether a matcher priority belongs in the first popup-visible pass. */
function isBootstrapMatcherPriority(priority: MatcherPartitionPriority): boolean {
	return BOOTSTRAP_PRIORITY_LOOKUP[priority];
}

/** Return the scheduler priority assigned to an observation kind. */
export function getMatcherPartitionPriority(kind: NormalizedObservationKind): MatcherPartitionPriority {
	return KIND_PRIORITIES[kind] ?? 4;
}

/**
 * Merge worker partition matches and run candidate, graph, and emission stages.
 *
 * Workers only decide which rules matched which observations. Final technology
 * cards still come from one deterministic coordinator pass so `requires`,
 * `implies`, `excludes`, confidence thresholds, and version selection see the
 * complete candidate set for the current snapshot.
 */
export function createMatcherPipelineResult(
	input: CreateMatcherPipelineResultInput,
) {
	const events: DetectionPipelineRuntimeEvent[] = [];
	const record = createPartitionEventRecorder(input, events);
	const matchBatch = createObservationPatternMatchBatch(input.batch, input.partitions);
	record('pattern-matched', matchBatch.matches.length, {
		partitionCount: input.partitions.length,
		candidateRuleCount: input.partitions.reduce((total, partition) => (
			total + partition.diagnostics.candidateRuleCount
		), 0),
	});
	record('evidence-created', matchBatch.evidenceBatch.entries.length);

	const candidates = createEvidenceCandidateBatch({
		registry: input.registry,
		evidence: matchBatch.evidenceBatch,
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
		requestedMode: 'event' as const,
		completedMode: 'event' as const,
		events,
		emission: emitted.metadata,
	};
}

/** Merge partition matches into the same shape used by downstream pipeline stages. */
function createObservationPatternMatchBatch(
	batch: ObservationBatch,
	partitions: readonly MatcherPartitionResult[],
): ObservationPatternMatchBatch {
	const matches = partitions
		.flatMap((partition) => partition.matches)
		.sort(comparePartitionMatches)
		.map((entry) => entry.match);

	return {
		target: batch.target,
		observedAt: batch.observedAt,
		matches,
		evidenceBatch: {
			target: batch.target,
			observedAt: batch.observedAt,
			entries: matches.map((match) => match.evidence),
		},
	};
}

/** Preserve original observation order before comparing match order inside a partition. */
function comparePartitionMatches(left: MatcherPartitionMatch, right: MatcherPartitionMatch): number {
	const observationDelta = left.observationIndex - right.observationIndex;
	return observationDelta === 0 ? left.matchIndex - right.matchIndex : observationDelta;
}

type PartitionPipelineStage = 'pattern-matched' | 'evidence-created' | 'candidates-created' | 'candidates-refined' | 'detections-emitted';

function createPartitionEventRecorder(
	input: CreateMatcherPipelineResultInput,
	events: DetectionPipelineRuntimeEvent[],
) {
	const target = input.batch.target;
	const occurredAt = input.analyzedAt ?? input.batch.observedAt;

	return (stage: PartitionPipelineStage, count: number, details?: DetectionPipelineEventDetails): void => {
		const event = details && Object.keys(details).length > 0
			? { stage, target, occurredAt, count, details }
			: { stage, target, occurredAt, count };

		events.push(event);
		input.onEvent?.(event);
	};
}
