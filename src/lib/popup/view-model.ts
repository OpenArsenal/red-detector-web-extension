import { categories } from '../../data/categories';
import type { ObservationSessionState } from '../content/observed-page-signals';
import type { AnalyzeActiveTabOutput, ObservationSessionTarget } from '../contracts/analysis';
import type { DetectionSessionSnapshot } from '../contracts/detection-session';
import type { CategoryId, ConfidenceScore, DetectionResult, SiteAnalysis } from '../detection/types';
import type { DetectionExplanation, DetectionExplanationEvidenceSummary, DetectionReplayTrace } from '../pipeline';
import type { AppError } from '../shared/errors';

/**
 * Popup observation states that are meaningful to the user interface.
 *
 * These values intentionally hide the lower-level content-session statuses. The
 * popup only needs to know whether page watching is active, stopped, idle, or
 * unknown. Storage revisions are the receive stream; this state only drives copy
 * and controls.
 */
export const POPUP_OBSERVATION_MODES = ['idle', 'active', 'stopped', 'unknown'] as const;

/** User-facing observation state used by the popup controls and status text. */
export type PopupObservationMode = typeof POPUP_OBSERVATION_MODES[number];

/**
 * Source of the popup analysis request.
 *
 * The source is UI context, not detector metadata. It tells the view-model helper
 * whether to create manual refresh copy, late-observation copy, or no notice.
 */
export type PopupAnalysisRequestSource = 'initial' | 'manual' | 'auto';

/** User-visible notice severity supported by the current popup shell. */
export type PopupNoticeVariant = 'success' | 'warning';

/**
 * Small status message rendered above the result panel.
 */
export type PopupNotice = {
	/** Visual treatment for the notice. */
	variant: PopupNoticeVariant;
	/** Plain text shown to the user. */
	text: string;
};

/**
 * Detection group rendered by `CategoryGroup`.
 */
export type PopupCategoryGroup = {
	/** Primary category id chosen from the first category on each detection. */
	category: string;
	/** Human-readable category label from the category metadata table. */
	label: string;
	/** Sort priority from category metadata. Lower values render first. */
	priority: number;
	/** Detection results that belong to this primary category. */
	results: DetectionResult[];
};

/**
 * Popup-ready explanation summary for one detection card.
 *
 * The view model keeps this smaller than `DetectionExplanation` so Solid
 * components do not need to know about the full replay trace schema.
 */
export type PopupDetectionExplanationSummary = {
	/** Technology id this explanation belongs to. */
	technologyId: string;
	/** Short headline rendered above the explanation reasons. */
	headline: string;
	/** Final confidence value and label copied for UI copy. */
	confidence: ConfidenceScore;
	/** Bounded explanation phrases safe for popup rendering. */
	reasons: readonly string[];
	/** Number of public evidence entries behind the detection. */
	evidenceCount: number;
	/** Most useful public evidence kind to summarize in compact card copy. */
	primaryEvidenceKind: string | null;
	/** Whether the detection was inferred through graph relationships. */
	inferred: boolean;
	/** Public evidence rows rendered below explanation reasons. */
	evidence: readonly PopupEvidencePreview[];
};


/** Public evidence row shown inside a technology card. */
export type PopupEvidencePreview = {
	/** Detector surface that supplied the proof. */
	kind: string;
	/** Bounded value that matched the detector rule, when available. */
	matchedValue?: string;
	/** Version captured from this evidence row, when available. */
	version?: string;
	/** Relationship source for inferred evidence, when available. */
	sourceTechnologyId?: string;
	/** Observation lookup key, such as a header name, meta name, global path, or storage key. */
	observationKey?: string;
	/** Scalar observation context that helps explain property-based evidence. */
	attributes?: Readonly<Record<string, string | number | boolean>>;
	/** Whether this proof came from direct page evidence rather than graph support. */
	direct: boolean;
};

/** Lookup table keyed by technology id for explanation rendering. */
export type PopupExplanationLookup = Readonly<Record<string, PopupDetectionExplanationSummary>>;

/**
 * Input needed to derive popup state from a background analysis response.
 */
export type BuildPopupAnalysisUpdateInput = {
	/** Analysis currently rendered by the popup before the new response arrives. */
	previousAnalysis: SiteAnalysis | null;
	/** Background response returned by `analyzeActiveTab` or observation refresh. */
	response: AnalyzeActiveTabOutput;
	/** UI request source that controls notice copy. */
	source: PopupAnalysisRequestSource;
	/** Current late-detection ids already marked in the popup. */
	currentLateDetectionIds?: readonly string[];
	/** Whether the caller intentionally cleared late markers before applying this response. */
	resetLateMarkers?: boolean;
};

/**
 * Popup state derived from a single successful analysis response.
 */
export type PopupAnalysisUpdate = {
	/** Analysis that should become the popup's current result snapshot. */
	analysis: SiteAnalysis;
	/** Technology ids that appeared compared with the previously rendered analysis. */
	addedDetectionIds: string[];
	/** Complete late-detection id list after this response is applied. */
	lateDetectionIds: string[];
	/** Explanation summaries keyed by technology id for result cards. */
	explanationsByTechnologyId: PopupExplanationLookup;
	/** User-facing observation state for buttons, chips, and result copy. */
	observationMode: PopupObservationMode;
	/** Whether the popup should keep background-driven live updates active for late page signals. */
	shouldKeepLiveUpdatesActive: boolean;
	/** Optional notice to display after applying the response. */
	notice: PopupNotice | null;
};

/**
 * Input used when the popup decides whether observation state should trigger a refresh.
 */
export type ShouldRefreshObservedChangeInput = {
	/** Latest content-script observation state reported by the background. */
	session: ObservationSessionState;
	/** Current rendered analysis, if the popup has one. */
	analysis: SiteAnalysis | null;
};

/**
 * Groups detections by their primary category for the current popup layout.
 *
 * A technology can belong to multiple categories, but phase 6 preserves the
 * current one-card-per-technology layout by choosing `categories[0]`. Keeping
 * that rule here makes it a visible UI compatibility choice instead of hiding it
 * inside the Solid component.
 */
export function groupDetectionsByPrimaryCategory(
	results: readonly DetectionResult[],
): PopupCategoryGroup[] {
	const grouped = results.reduce<Record<string, DetectionResult[]>>(
		(groups, result) => {
			const category = result.categories[0] ?? 'unknown';
			return Object.assign({}, groups, {
				[category]: [...(groups[category] ?? []), result],
			});
		},
		{},
	);

	return Object.entries(grouped)
		.map(([category, categoryResults]) => {
			const meta = categories[category as CategoryId] ?? categories.unknown;
			return {
				category,
				label: meta.label,
				priority: meta.priority,
				results: categoryResults,
			};
		})
		.sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label));
}

/**
 * Returns the popup label for an observation mode.
 */
export function getPopupObservationLabel(mode: PopupObservationMode): string {
	if (mode === 'active') {
		return 'Observing';
	}

	if (mode === 'stopped') {
		return 'Stopped';
	}

	if (mode === 'idle') {
		return 'Idle';
	}

	return 'Loading';
}

/**
 * Converts content-session state into the smaller popup state model.
 */
export function getPopupObservationModeFromSession(
	session: Pick<ObservationSessionState, 'status'>,
): PopupObservationMode {
	if (session.status === 'observing' || session.status === 'dirty') {
		return 'active';
	}

	if (session.status === 'idle') {
		return 'idle';
	}

	return 'stopped';
}

/**
 * Converts durable snapshot lifecycle status into the popup state model.
 *
 * Detector snapshots and content lifecycle snapshots flow through the same
 * storage subscription. This mapping lets lifecycle-only content revisions stop
 * or idle the controls without replacing the detector results already rendered.
 */
export function getPopupObservationModeFromSnapshot(
	snapshot: Pick<DetectionSessionSnapshot, 'status'>,
): PopupObservationMode {
	if (snapshot.status === 'collecting' || snapshot.status === 'observing' || snapshot.status === 'enriching') {
		return 'active';
	}

	if (snapshot.status === 'cached' || snapshot.status === 'complete') {
		return 'idle';
	}

	if (snapshot.status === 'stopped' || snapshot.status === 'failed' || snapshot.status === 'stale') {
		return 'stopped';
	}

	return 'unknown';
}

/**
 * Converts a successful analysis response into the popup observation mode.
 *
 * Cache hits can be useful without active observation, so they render as `idle`.
 * Fresh responses without an active session render as `stopped`, preserving the
 * current copy that tells users refresh is needed to resume observation.
 */
export function getPopupObservationModeFromAnalysis(
	response: Pick<AnalyzeActiveTabOutput, 'cache' | 'session'>,
): PopupObservationMode {
	if (response.session) {
		return getPopupObservationModeFromSession(response.session);
	}

	return response.cache.status === 'hit' ? 'idle' : 'stopped';
}

/** Returns whether active page watching should keep the popup in a live-update state. */
export function shouldKeepPopupLiveUpdatesActive(mode: PopupObservationMode): boolean {
	return mode === 'active';
}


/**
 * Decide whether a storage snapshot can replace the detector output already shown.
 *
 * Content-owned lifecycle revisions are allowed to move observation status forward,
 * but an empty bootstrap snapshot must not erase richer detector output from the
 * same page. Background and cache snapshots still apply because they carry real
 * detector results or explicit cache state.
 */
export function shouldApplyPopupSnapshotRevision(input: {
	readonly currentAnalysis: SiteAnalysis | null;
	readonly snapshot: DetectionSessionSnapshot;
}): boolean {
	const currentAnalysis = input.currentAnalysis;
	if (!currentAnalysis) {
		return true;
	}

	if (isLowerCompletenessDetectorRevision(currentAnalysis, input.snapshot)) {
		return false;
	}

	if (input.snapshot.source !== 'content') {
		return true;
	}

	if (input.snapshot.analysis.url !== currentAnalysis.url) {
		return true;
	}

	if (input.snapshot.analysis.results.length > 0 || currentAnalysis.results.length === 0) {
		return true;
	}

	return false;
}

/**
 * Keep older partial matcher snapshots from making the count visibly move backward.
 *
 * Partial background revisions are useful while the first scan is growing, but a
 * lower-count partial from a slower worker batch or a deferred refresh should not
 * replace a richer visible snapshot for the same URL. Final detector snapshots
 * include a replay summary and remain authoritative, even if graph refinement
 * legitimately removes a candidate.
 */
function isLowerCompletenessDetectorRevision(
	currentAnalysis: SiteAnalysis,
	snapshot: DetectionSessionSnapshot,
): boolean {
	return (
		snapshot.source === 'background' &&
		snapshot.replaySummary === undefined &&
		snapshot.analysis.url === currentAnalysis.url &&
		snapshot.analysis.results.length < currentAnalysis.results.length
	);
}

/**
 * Preserve replay UI when a lifecycle-only snapshot repeats the same analysis.
 *
 * Snapshot records intentionally carry only a replay summary. When the analysis
 * payload did not advance, clearing explanation and replay state would make the
 * popup look like evidence disappeared even though only the observation status
 * changed.
 */
export function shouldPreservePopupReplayState(input: {
	readonly previousAnalysis: SiteAnalysis | null;
	readonly response: Pick<AnalyzeActiveTabOutput, 'analysis' | 'enrichment' | 'replayHistory' | 'replayTrace'>;
}): boolean {
	if (!input.previousAnalysis || input.response.replayTrace || input.response.replayHistory !== undefined) {
		return false;
	}

	if (input.previousAnalysis.url !== input.response.analysis.url) {
		return false;
	}

	if (input.previousAnalysis.analyzedAt !== input.response.analysis.analyzedAt) {
		return false;
	}

	const previousIds = input.previousAnalysis.results.map((result) => result.technologyId);
	const nextIds = input.response.analysis.results.map((result) => result.technologyId);
	return previousIds.length === nextIds.length && previousIds.every((id, index) => id === nextIds[index]);
}


/**
 * Convert replay explanations into a popup lookup keyed by technology id.
 *
 * The popup only renders explanation summaries for detections present in the
 * current response. Missing traces, cache hits, or stale trace data therefore
 * degrade to an empty lookup instead of creating misleading explanation copy.
 */
export function buildPopupExplanationLookup(
	trace: DetectionReplayTrace | undefined,
): PopupExplanationLookup {
	if (!trace) {
		return {};
	}

	return Object.fromEntries(
		trace.explanations.map((explanation) => [
			explanation.technologyId,
			createPopupExplanationSummary(explanation),
		]),
	);
}

/**
 * Create the compact explanation shape consumed by detection cards.
 *
 * Reasons and evidence previews are intentionally capped so explanation cards stay
 * scannable inside the extension popup. Full replay traces remain available in
 * bounded history for users who need to inspect past runs.
 */
function createPopupExplanationSummary(
	explanation: DetectionExplanation,
): PopupDetectionExplanationSummary {
	return {
		technologyId: explanation.technologyId,
		headline: createExplanationHeadline(explanation),
		confidence: { ...explanation.confidence },
		reasons: explanation.reasons.slice(0, 3),
		evidenceCount: explanation.evidenceCount,
		primaryEvidenceKind: getPrimaryEvidenceKind(explanation),
		inferred: explanation.inferred,
		evidence: explanation.evidence.slice(0, 5).map(createPopupEvidencePreview),
	};
}

/** Build the one-line reason shown before detailed explanation bullets. */
function createExplanationHeadline(explanation: DetectionExplanation): string {
	if (explanation.inferred) {
		return `Inferred from ${explanation.relationshipEvidenceCount} relationship signal${explanation.relationshipEvidenceCount === 1 ? '' : 's'}.`;
	}

	return `Matched ${explanation.directEvidenceCount} direct signal${explanation.directEvidenceCount === 1 ? '' : 's'}.`;
}

function createPopupEvidencePreview(evidence: DetectionExplanationEvidenceSummary): PopupEvidencePreview {
	return {
		kind: evidence.kind,
		direct: evidence.direct,
		...(evidence.matchedValue ? { matchedValue: evidence.matchedValue } : {}),
		...(evidence.version ? { version: evidence.version } : {}),
		...(evidence.sourceTechnologyId ? { sourceTechnologyId: evidence.sourceTechnologyId } : {}),
		...(evidence.observationKey ? { observationKey: evidence.observationKey } : {}),
		...(evidence.attributes ? { attributes: { ...evidence.attributes } } : {}),
	};
}

/** Pick the first public evidence kind because replay preserves detector order. */
function getPrimaryEvidenceKind(explanation: DetectionExplanation): string | null {
	return explanation.evidence[0]?.kind ?? null;
}

/** Formats an application error for the existing popup error state. */
export function formatPopupAppError(error: AppError): string {
	return `${error.code}: ${error.message}`;
}

/**
 * Builds the popup state update for a successful analysis response.
 */
export function buildPopupAnalysisUpdate(
	input: BuildPopupAnalysisUpdateInput,
): PopupAnalysisUpdate {
	const nextAnalysis = input.response.analysis;
	const addedDetectionIds = input.previousAnalysis
		? getAddedDetectionIds(input.previousAnalysis.results, nextAnalysis.results)
		: [];
	const lateMarkerBase = input.resetLateMarkers
		? []
		: input.currentLateDetectionIds ?? [];
	const lateDetectionIds = mergeUniqueIds(lateMarkerBase, addedDetectionIds);
	const explanationsByTechnologyId = buildPopupExplanationLookup(input.response.replayTrace);
	const observationMode = getPopupObservationModeFromAnalysis(input.response);
	/**
	 * Storage revisions are the receive stream for continuous matching. The popup
	 * stays live only when an observation session is active; follow-up evidence
	 * passes publish normal background snapshots without a separate pending state.
	 */
	const shouldKeepLiveUpdatesActive = shouldKeepPopupLiveUpdatesActive(observationMode);
	const notice = getPopupAnalysisNotice({
		addedDetectionIds,
		nextAnalysis,
		response: input.response,
		source: input.source,
	});

	return {
		analysis: nextAnalysis,
		addedDetectionIds,
		lateDetectionIds,
		explanationsByTechnologyId,
		observationMode,
		shouldKeepLiveUpdatesActive,
		notice,
	};
}

/**
 * Returns the user-facing notice for one analysis response.
 */
function getPopupAnalysisNotice(input: {
	addedDetectionIds: readonly string[];
	nextAnalysis: SiteAnalysis;
	response: AnalyzeActiveTabOutput;
	source: PopupAnalysisRequestSource;
}): PopupNotice | null {
	if (input.addedDetectionIds.length) {
		const count = input.addedDetectionIds.length;
		if (input.source === 'auto') {
			return {
				variant: 'success',
				text: `Analysis update found ${count} additional detection${count === 1 ? '' : 's'} on ${input.nextAnalysis.hostname}.`,
			};
		}

		return {
			variant: 'success',
			text: `Detected ${count} additional technolog${count === 1 ? 'y' : 'ies'} on ${input.nextAnalysis.hostname}.`,
		};
	}

	if (input.source === 'manual') {
		return {
			variant: 'success',
			text: `Refreshed ${input.nextAnalysis.results.length} technologies for ${input.nextAnalysis.hostname}. ${input.response.session ? 'Observation is active again.' : 'Showing the latest cached state.'}`,
		};
	}

	return null;
}

/** Returns technology ids that are present in `next` but missing from `previous`. */
function getAddedDetectionIds(
	previous: readonly DetectionResult[],
	next: readonly DetectionResult[],
): string[] {
	const previousIds = new Set(previous.map((result) => result.technologyId));
	return next
		.filter((result) => !previousIds.has(result.technologyId))
		.map((result) => result.technologyId);
}

/** Merges detection id lists while preserving the first time each id appeared. */
function mergeUniqueIds(previous: readonly string[], next: readonly string[]): string[] {
	return Array.from(new Set([...previous, ...next]));
}
