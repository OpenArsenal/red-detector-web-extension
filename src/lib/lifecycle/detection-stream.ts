import type { AnalyzeActiveTabOutput } from '../contracts/analysis';

/** Maximum number of stored detector frames written for one completed analysis. */
export const MAX_DETECTION_STREAM_FRAME_COUNT = 6;

/** Delay between detector frames so the popup can paint progressive revisions. */
export const DETECTION_STREAM_FRAME_DELAY_MS = 100;

/**
 * Choose bounded result counts for progressive detector snapshots.
 *
 * The detector still computes one stable candidate set for correctness. The UI
 * stream then publishes bounded prefixes of that final ordered result so the
 * popup can paint meaningful progress through storage revisions without writing
 * one record per technology on large pages.
 */
export function createDetectionStreamFrameSizes(resultCount: number): readonly number[] {
	if (resultCount <= 1) {
		return [];
	}

	const frameSize = Math.max(1, Math.ceil(resultCount / MAX_DETECTION_STREAM_FRAME_COUNT));
	const frames: number[] = [];
	for (let size = frameSize; size < resultCount; size += frameSize) {
		frames.push(size);
	}
	return frames;
}

/**
 * Build a partial popup response for one progressive detector frame.
 *
 * Replay trace data belongs to the final analysis because explanations should
 * describe the complete candidate graph. Partial frames therefore carry only the
 * ordered detection prefix and a machine-readable enrichment reason telling the
 * popup to keep any existing replay UI until the terminal frame arrives.
 */
export function createDetectionStreamFrameOutput(
	output: AnalyzeActiveTabOutput,
	resultLimit: number,
): AnalyzeActiveTabOutput {
	const frame = Object.assign({}, output, {
		analysis: Object.assign({}, output.analysis, {
			results: output.analysis.results.slice(0, resultLimit),
		}),
		enrichment: {
			status: 'pending' as const,
			reason: 'progressive-detection-frame',
		},
	});
	delete frame.replayTrace;
	delete frame.replayHistory;
	return frame;
}
