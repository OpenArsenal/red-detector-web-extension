import { createEvidenceCandidateBatch, refineEvidenceCandidateBatch } from '../candidates';
import { analyzeSite } from '../detection/engine';
import { matchObservationBatch } from '../detection/observation-matcher';
import { createCompiledDetectionRegistry } from '../detection/registry-graph';
import type {
	DetectionRunOptions,
	PageSignals,
	SiteAnalysis,
	TechnologyDefinition,
} from '../detection/types';
import {
	emitSiteAnalysisFromRefinedCandidates,
	type FinalDetectionEmissionMetadata,
} from '../emission';
import {
	normalizePageSignals,
	type ObservationInterface,
	type ObservationTarget,
} from '../observations';

/** Runtime detector paths available during the event-pipeline migration. */
export const DETECTION_PIPELINE_MODES = ['legacy', 'event'] as const;

/** Runtime detector path selected for one analysis pass. */
export type DetectionPipelineMode = typeof DETECTION_PIPELINE_MODES[number];

/** Stable stage names emitted by the Phase 15 runtime coordinator. */
export type DetectionPipelineStage =
	| 'legacy-analyzed'
	| 'normalized-observations'
	| 'pattern-matched'
	| 'evidence-created'
	| 'candidates-created'
	| 'candidates-refined'
	| 'detections-emitted'
	| 'fallback-analyzed';

/** Reason the coordinator returned legacy output after trying the event pipeline. */
export type DetectionPipelineFallbackReason = 'event-pipeline-error';

/** Scalar diagnostics attached to coordinator events without storing page content. */
export type DetectionPipelineEventDetails = Record<string, string | number | boolean>;

/** Legacy analyzer compatible with the current `analyzeSite(...)` signature. */
export type DetectionPipelineLegacyAnalyzer = (
	signals: PageSignals,
	registry: TechnologyDefinition[],
	options?: DetectionRunOptions,
) => SiteAnalysis;

/**
 * Public-safe event emitted by the deterministic runtime coordinator.
 *
 * These events describe stage progress and counts only. They intentionally avoid
 * raw observations, matched values, HTML, cookies, and source contents because
 * Phase 16 will define the redacted replay trace contract separately.
 */
export interface DetectionPipelineRuntimeEvent {
	/** Stage that produced this coordinator event. */
	readonly stage: DetectionPipelineStage;
	/** Target document associated with the analysis pass. */
	readonly target: ObservationTarget;
	/** Deterministic timestamp associated with the analysis pass. */
	readonly occurredAt: number;
	/** Number of items produced or consumed by the stage. */
	readonly count: number;
	/** Optional scalar diagnostics that are safe to log or assert in tests. */
	readonly details?: DetectionPipelineEventDetails;
}

/**
 * Fallback summary returned when the event path cannot complete.
 *
 * The fallback exists only around the Phase 15 runtime switch. It keeps the
 * extension safe while the event pipeline is still being compared with the old
 * detector path.
 */
export interface DetectionPipelineFallback {
	/** Stable fallback reason for tests and migration diagnostics. */
	readonly reason: DetectionPipelineFallbackReason;
	/** Human-readable error summary from the failed event path. */
	readonly message: string;
}

/** Input for running one detector pass through the selected runtime path. */
export interface RunDetectionPipelineInput {
	/** Page signal snapshot collected by the extension or a fixture. */
	readonly signals: PageSignals;
	/** Ordered technology registry used for matching and relationship reasoning. */
	readonly registry: readonly TechnologyDefinition[];
	/** Runtime path to execute. Defaults to `legacy` until the event path is promoted. */
	readonly mode?: DetectionPipelineMode;
	/** Optional detector compatibility flags shared with matching stages. */
	readonly options?: DetectionRunOptions;
	/** Timestamp override used by deterministic tests and replay fixtures. */
	readonly analyzedAt?: number;
	/** Source marker written to the emitted analysis when the caller needs an override. */
	readonly source?: SiteAnalysis['source'];
	/** Interface label assigned while adapting `PageSignals` into observations. */
	readonly observationInterface?: ObservationInterface;
	/** Test or compatibility override for the legacy analyzer. */
	readonly legacyAnalyzer?: DetectionPipelineLegacyAnalyzer;
	/** Disable automatic legacy fallback when the event path throws. */
	readonly fallbackOnEventPipelineError?: boolean;
	/** Optional event sink used by tests and later runtime instrumentation. */
	readonly onEvent?: (event: DetectionPipelineRuntimeEvent) => void;
}

/** Output from one runtime detector pass. */
export interface DetectionPipelineRuntimeResult {
	/** Final analysis object compatible with storage, messaging, and popup rendering. */
	readonly analysis: SiteAnalysis;
	/** Path the caller asked the coordinator to use. */
	readonly requestedMode: DetectionPipelineMode;
	/** Path that actually produced the final analysis. */
	readonly completedMode: DetectionPipelineMode;
	/** Ordered public-safe coordinator events for this analysis pass. */
	readonly events: readonly DetectionPipelineRuntimeEvent[];
	/** Emission metadata when the event path completed final emission. */
	readonly emission?: FinalDetectionEmissionMetadata;
	/** Fallback summary when event execution failed and legacy output was returned. */
	readonly fallback?: DetectionPipelineFallback;
}

/**
 * Internal callback used by the coordinator to append a stage event.
 *
 * The helper keeps event construction in one place so every stage uses the same
 * target, timestamp, privacy boundary, and optional caller-facing sink.
 */
interface DetectionPipelineEventRecorder {
	/** Record a public-safe stage count with optional scalar diagnostics. */
	(stage: DetectionPipelineStage, count: number, details?: DetectionPipelineEventDetails): void;
}

/**
 * Run one detector pass through either the legacy analyzer or the event pipeline.
 *
 * The default remains `legacy` so existing background calls keep their current
 * behavior. Passing `mode: "event"` executes the Phase 15 coordinator from
 * normalized observations through final emission, with legacy fallback enabled
 * unless the caller disables it for strict tests.
 */
export function runDetectionPipeline(input: RunDetectionPipelineInput): DetectionPipelineRuntimeResult {
	const requestedMode = input.mode ?? 'legacy';
	const events: DetectionPipelineRuntimeEvent[] = [];
	const record = createEventRecorder(input, events);

	if (requestedMode === 'legacy') {
		return runLegacyPipeline(input, record, events, 'legacy-analyzed', requestedMode);
	}

	try {
		return runEventPipeline(input, record, events, requestedMode);
	} catch (error) {
		if (input.fallbackOnEventPipelineError === false) {
			throw error;
		}

		const fallback = createFallback(error);
		const legacy = runLegacyPipeline(input, record, events, 'fallback-analyzed', requestedMode);
		return Object.assign({}, legacy, { fallback });
	}
}

/**
 * Execute the sidecar event stages from snapshot normalization through emission.
 *
 * This is intentionally synchronous because the Phase 15 input is still one
 * already-collected `PageSignals` snapshot. Later collector phases can wrap this
 * boundary with async acquisition without changing the detector stage order.
 */
function runEventPipeline(
	input: RunDetectionPipelineInput,
	record: DetectionPipelineEventRecorder,
	events: readonly DetectionPipelineRuntimeEvent[],
	requestedMode: DetectionPipelineMode,
): DetectionPipelineRuntimeResult {
	const observations = normalizePageSignals(input.signals, {
		interface: input.observationInterface ?? 'extension',
		observedAt: input.signals.collectedAt,
	});
	record('normalized-observations', observations.observations.length);

	const matches = matchObservationBatch({
		registry: input.registry,
		batch: observations,
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
		compiledRegistry: createCompiledDetectionRegistry(input.registry),
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
		requestedMode,
		completedMode: 'event',
		events,
		emission: emitted.metadata,
	};
}

/**
 * Execute the current analyzer while preserving the coordinator result shape.
 *
 * The legacy branch uses the same event list as failed event runs, so fallback
 * diagnostics can show the attempted event stages followed by fallback analysis.
 */
function runLegacyPipeline(
	input: RunDetectionPipelineInput,
	record: DetectionPipelineEventRecorder,
	events: readonly DetectionPipelineRuntimeEvent[],
	stage: Extract<DetectionPipelineStage, 'legacy-analyzed' | 'fallback-analyzed'>,
	requestedMode: DetectionPipelineMode,
): DetectionPipelineRuntimeResult {
	const analyzer = input.legacyAnalyzer ?? analyzeSite;
	const analysis = applyAnalysisOverrides(
		analyzer(input.signals, [...input.registry], input.options),
		input,
	);
	record(stage, analysis.results.length);

	return {
		analysis,
		requestedMode,
		completedMode: 'legacy',
		events,
	};
}

/**
 * Create the stage recorder shared by legacy, event, and fallback paths.
 *
 * Raw collected values are deliberately excluded here. The coordinator is allowed
 * to expose counts and scalar stage metadata only until replay redaction rules
 * exist in Phase 16.
 */
function createEventRecorder(
	input: RunDetectionPipelineInput,
	events: DetectionPipelineRuntimeEvent[],
): DetectionPipelineEventRecorder {
	const target = createTarget(input.signals);
	const occurredAt = input.analyzedAt ?? input.signals.collectedAt;

	return (stage, count, details) => {
		const event: DetectionPipelineRuntimeEvent = details && Object.keys(details).length > 0
			? { stage, target, occurredAt, count, details }
			: { stage, target, occurredAt, count };

		events.push(event);
		input.onEvent?.(event);
	};
}

/**
 * Apply deterministic metadata overrides without mutating analyzer output.
 *
 * Tests and later replay fixtures need stable timestamps, while production calls
 * should keep the analyzer's original timestamp and source marker.
 */
function applyAnalysisOverrides(
	analysis: SiteAnalysis,
	input: Pick<RunDetectionPipelineInput, 'analyzedAt' | 'source'>,
): SiteAnalysis {
	if (input.analyzedAt === undefined && input.source === undefined) {
		return analysis;
	}

	return Object.assign({}, analysis, {
		analyzedAt: input.analyzedAt ?? analysis.analyzedAt,
		source: input.source ?? analysis.source,
	});
}

/** Convert unknown thrown values into stable fallback metadata. */
function createFallback(error: unknown): DetectionPipelineFallback {
	return {
		reason: 'event-pipeline-error',
		message: error instanceof Error ? error.message : 'Event pipeline failed with a non-error value.',
	};
}

/** Copy the analyzed document target out of `PageSignals` for event metadata. */
function createTarget(signals: PageSignals): ObservationTarget {
	return {
		url: signals.url,
		hostname: signals.hostname,
	};
}
