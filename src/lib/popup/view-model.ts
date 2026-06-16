import { categories } from '../../data/categories';
import type { ObservationSessionState } from '../content/observed-page-signals';
import type { AnalyzeActiveTabOutput } from '../contracts/analysis';
import type { CategoryId, DetectionResult, SiteAnalysis } from '../detection/types';
import type { AppError } from '../shared/errors';

/**
 * Popup observation states that are meaningful to the user interface.
 *
 * These values intentionally hide the lower-level content-session statuses. The
 * popup only needs to know whether it should keep polling, show a stopped state,
 * show a cache-only idle state, or admit that the current state is unknown.
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
	/** User-facing observation state for buttons, chips, and result copy. */
	observationMode: PopupObservationMode;
	/** Whether the popup should keep polling the background for late page signals. */
	shouldPoll: boolean;
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

/** Returns whether a popup observation mode should keep the polling timer active. */
export function shouldPollPopupObservation(mode: PopupObservationMode): boolean {
	return mode === 'active';
}

/**
 * Returns whether observed page changes should trigger a background refresh.
 */
export function shouldRefreshObservedChange(
	input: ShouldRefreshObservedChangeInput,
): boolean {
	if (input.session.status === 'dirty') {
		return true;
	}

	const latestObservedAt = input.session.lastObservedAt ?? 0;
	const latestAnalyzedAt = input.analysis?.analyzedAt ?? 0;
	return !input.analysis || latestObservedAt > latestAnalyzedAt;
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
	const lateDetectionIds = input.resetLateMarkers
		? []
		: mergeUniqueIds(input.currentLateDetectionIds ?? [], addedDetectionIds);
	const observationMode = getPopupObservationModeFromAnalysis(input.response);
	const shouldPoll = shouldPollPopupObservation(observationMode);
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
		observationMode,
		shouldPoll,
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
		return {
			variant: 'success',
			text: `Observation found ${count} new late detection${count === 1 ? '' : 's'} on ${input.nextAnalysis.hostname}.`,
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
