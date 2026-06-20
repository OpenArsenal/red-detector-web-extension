import { describe, expect, it } from 'vitest';

import {
	MAX_DETECTION_STREAM_FRAME_COUNT,
	createDetectionStreamFrameOutput,
	createDetectionStreamFrameSizes,
} from '../../lib/lifecycle/detection-stream';
import { makeAnalysis, makeAnalyzeActiveTabOutput, makeDetection, makeDetectionReplayTrace } from '../support/factories';

describe('detection stream frames', () => {
	it('keeps frame counts bounded while preserving increasing result prefixes', () => {
		const frames = createDetectionStreamFrameSizes(17);

		expect(frames.length).toBeLessThanOrEqual(MAX_DETECTION_STREAM_FRAME_COUNT - 1);
		expect(frames).toEqual([...frames].sort((left, right) => left - right));
		expect(frames[0]).toBeGreaterThan(0);
		expect(frames.at(-1)).toBeLessThan(17);
	});

	it('creates partial responses without replay data until the terminal analysis frame', () => {
		const response = makeAnalyzeActiveTabOutput({
			analysis: makeAnalysis([
				makeDetection('react'),
				makeDetection('next-js'),
				makeDetection('vercel'),
			]),
			replayTrace: makeDetectionReplayTrace({ resultCount: 3 }),
			replayHistory: [makeDetectionReplayTrace({ resultCount: 3 })],
		});

		const frame = createDetectionStreamFrameOutput(response, 2);

		expect(frame.analysis.results.map((result) => result.technologyId)).toEqual(['react', 'next-js']);
		expect(frame.enrichment).toEqual({ status: 'pending', reason: 'progressive-detection-frame' });
		expect(frame.replayTrace).toBeUndefined();
		expect(frame.replayHistory).toBeUndefined();
	});
});
