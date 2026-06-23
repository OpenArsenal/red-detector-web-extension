import { afterEach, describe, expect, it, vi } from 'vitest';

import {
	getDetectionOriginSnapshotKey,
	getDetectionOriginSummaryKey,
	DETECTION_STORAGE_STATUS_KEY,
	getDetectionSessionIndexKey,
	getDetectionSessionSnapshotKey,
} from '@/lib/storage/contracts';
import { makeAnalysis, makeDetection, makeDetectionSessionSnapshot } from '../support/factories';
import { createMockBrowserStorageArea } from '../support/mock-browser';

async function loadStorageHarness() {
	vi.resetModules();
	const { local, values } = createMockBrowserStorageArea();

	vi.doMock('wxt/browser', () => ({
		browser: {
			storage: {
				local,
			},
		},
	}));

	const storage = await import('@/lib/storage');
	return { ...storage, local, values };
}

afterEach(() => {
	vi.doUnmock('wxt/browser');
	vi.resetModules();
});

describe.sequential('detection session snapshots', () => {
	it('writes a first snapshot with revision 1', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({ revision: 1 });
		const sessionKey = getDetectionSessionSnapshotKey(snapshot.key);

		const result = await storage.saveDetectionSessionSnapshot(snapshot);
		const stored = await storage.getLatestDetectionSessionSnapshot(snapshot.key);

		expect(result).toMatchObject({
			accepted: true,
			sessionStorageKey: sessionKey,
			snapshot: {
				revision: 1,
			},
		});
		expect(stored).toMatchObject({
			revision: 1,
			status: 'collecting',
		});
		expect(storage.values.has(sessionKey)).toBe(true);
	});

	it('rejects an older revision over a newer revision', async () => {
		const storage = await loadStorageHarness();
		const newer = makeDetectionSessionSnapshot({ revision: 2, detectionCount: 2 });
		const older = makeDetectionSessionSnapshot({ revision: 1, detectionCount: 1 });

		await storage.saveDetectionSessionSnapshot(newer);
		const result = await storage.saveDetectionSessionSnapshot(older);
		const stored = await storage.getLatestDetectionSessionSnapshot(newer.key);

		expect(result).toMatchObject({
			accepted: false,
			rejectedByRevision: 2,
			snapshot: {
				revision: 2,
				detectionCount: 2,
			},
		});
		expect(stored).toMatchObject({
			revision: 2,
			detectionCount: 2,
		});
	});

	it('accepts a newer revision over an older revision', async () => {
		const storage = await loadStorageHarness();
		const older = makeDetectionSessionSnapshot({ revision: 1, detectionCount: 1 });
		const newer = makeDetectionSessionSnapshot({ revision: 2, detectionCount: 3, status: 'observing' });

		await storage.saveDetectionSessionSnapshot(older);
		const result = await storage.saveDetectionSessionSnapshot(newer);
		const stored = await storage.getLatestDetectionSessionSnapshot(newer.key);

		expect(result).toMatchObject({
			accepted: true,
			snapshot: {
				revision: 2,
				status: 'observing',
			},
		});
		expect(stored).toMatchObject({
			revision: 2,
			detectionCount: 3,
			status: 'observing',
		});
	});

	it('publishes lower-count preview progress without shrinking richer exact state', async () => {
		const storage = await loadStorageHarness();
		const existing = makeDetectionSessionSnapshot({
			source: 'background',
			revision: 2,
			status: 'complete',
			analysis: makeAnalysis([makeDetection('react'), makeDetection('shopify')]),
			detectionCount: 2,
			replaySummary: {
				analyzedAt: 1_700_000_000_000,
				eventCount: 5,
				explanationCount: 2,
				resultCount: 2,
				stages: ['detections-emitted'],
			},
		});
		const preview = makeDetectionSessionSnapshot({
			...existing,
			source: 'background',
			revision: 3,
			status: 'complete',
			analysis: makeAnalysis([makeDetection('react')], { url: existing.analysis.url }),
			detectionCount: 1,
			replaySummary: undefined,
			matcherProgress: {
				jobId: 'job-preview',
				mode: 'initial',
				completedPartitionCount: 3,
				partitionCount: 10,
				latestPartitionKind: 'resourceUrl',
				resultCount: 1,
				updatedAt: 1_700_000_000_100,
			},
		});

		await storage.saveDetectionSessionSnapshot(existing);
		const result = await storage.saveDetectionSessionSnapshot(preview);
		const stored = await storage.getLatestDetectionSessionSnapshot(existing.key);

		expect(result).toMatchObject({
			accepted: true,
			snapshot: {
				revision: 3,
				detectionCount: 2,
				matcherProgress: {
					completedPartitionCount: 3,
					partitionCount: 10,
				},
			},
		});
		expect(stored).toMatchObject({
			revision: 3,
			detectionCount: 2,
			replaySummary: expect.objectContaining({ resultCount: 2 }),
			matcherProgress: expect.objectContaining({
				completedPartitionCount: 3,
				partitionCount: 10,
			}),
		});
	});

	it('reads the latest snapshot by session key', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			key: {
				tabId: 12,
				frameId: 0,
				documentId: 'document:with punctuation',
				originHash: 'origin-example',
			},
			revision: 4,
			status: 'complete',
		});

		await storage.saveDetectionSessionSnapshot(snapshot);
		const stored = await storage.getLatestDetectionSessionSnapshot(snapshot.key);

		expect(stored).toMatchObject({
			key: snapshot.key,
			revision: 4,
			status: 'complete',
		});
		expect(storage.values.has('rd:session:12:0:document%3Awith%20punctuation')).toBe(true);
	});

	it('reads the latest origin snapshot by origin hash', async () => {
		const storage = await loadStorageHarness();
		const first = makeDetectionSessionSnapshot({
			revision: 1,
			updatedAt: 1_700_000_000_001,
			detectionCount: 1,
		});
		const second = makeDetectionSessionSnapshot({
			key: {
				...first.key,
				documentId: 'document-2',
			},
			revision: 1,
			updatedAt: 1_700_000_000_002,
			detectionCount: 2,
		});

		await storage.saveDetectionSessionSnapshot(first);
		await storage.saveDetectionSessionSnapshot(second);
		const stored = await storage.getLatestDetectionOriginSnapshot(first.key.originHash);

		expect(stored).toMatchObject({
			key: second.key,
			detectionCount: 2,
		});
		expect(storage.values.has(getDetectionOriginSnapshotKey(first.key.originHash))).toBe(true);
	});

	it('keeps replay-backed origin startup state ahead of newer lower-count previews', async () => {
		const storage = await loadStorageHarness();
		const finalSnapshot = makeDetectionSessionSnapshot({
			key: { tabId: 7, frameId: 0, documentId: 'session-final', originHash: 'origin-example' },
			source: 'background',
			revision: 2,
			updatedAt: 1_700_000_000_010,
			analysis: makeAnalysis([makeDetection('react'), makeDetection('shopify')]),
			detectionCount: 2,
			replaySummary: {
				analyzedAt: 1_700_000_000_000,
				eventCount: 5,
				explanationCount: 2,
				resultCount: 2,
				stages: ['detections-emitted'],
			},
		});
		const previewSnapshot = makeDetectionSessionSnapshot({
			key: { tabId: 7, frameId: 0, documentId: 'session-preview', originHash: 'origin-example' },
			source: 'background',
			revision: 1,
			updatedAt: 1_700_000_000_020,
			analysis: makeAnalysis([makeDetection('react')], { url: finalSnapshot.analysis.url }),
			detectionCount: 1,
		});

		await storage.saveDetectionSessionSnapshot(finalSnapshot);
		const previewResult = await storage.saveDetectionSessionSnapshot(previewSnapshot);
		const originSnapshot = await storage.getLatestDetectionOriginSnapshot(finalSnapshot.key.originHash);
		const exactPreviewSnapshot = await storage.getLatestDetectionSessionSnapshot(previewSnapshot.key);

		expect(previewResult.accepted).toBe(true);
		expect(exactPreviewSnapshot).toMatchObject({
			key: previewSnapshot.key,
			detectionCount: 1,
		});
		expect(originSnapshot).toMatchObject({
			key: finalSnapshot.key,
			detectionCount: 2,
			replaySummary: expect.objectContaining({ resultCount: 2 }),
		});
	});

	it('writes a lightweight origin summary alongside the promoted origin snapshot', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			revision: 2,
			status: 'complete',
			source: 'background',
			detectionCount: 3,
			matcherExecutor: 'offscreen-worker-pool',
			updatedAt: 1_700_000_000_010,
		});

		await storage.saveDetectionSessionSnapshot(snapshot);
		const summary = await storage.getLatestDetectionOriginSummary(snapshot.key.originHash);

		expect(summary).toMatchObject({
			originHash: snapshot.key.originHash,
			urlHash: snapshot.urlHash,
			sessionKey: snapshot.key,
			status: 'complete',
			source: 'background',
			detectionCount: 3,
			matcherExecutor: 'offscreen-worker-pool',
			updatedAt: 1_700_000_000_010,
		});
		expect(storage.values.has(getDetectionOriginSummaryKey(snapshot.key.originHash))).toBe(true);
	});

	it('updates compact storage status from origin summaries', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			key: { tabId: 7, frameId: 0, documentId: 'session-1', originHash: 'origin-example' },
			updatedAt: 1_700_000_000_050,
		});

		await storage.saveDetectionSessionSnapshot(snapshot);
		const status = await storage.getDetectionStorageStatusSnapshot();

		expect(status).toMatchObject({
			totalAnalyses: 1,
			trackedOrigins: 1,
			lastAnalyzedAt: 1_700_000_000_050,
		});
		expect(storage.values.has(DETECTION_STORAGE_STATUS_KEY)).toBe(true);
	});

	/**
	 * Matcher executor metadata records whether a revision came from the normal
	 * offscreen worker pool or a slower fallback. Persisting it with the snapshot
	 * keeps performance diagnostics tied to the visible detector state without
	 * exposing the executor in the popup.
	 */
	it('preserves matcher executor metadata on stored snapshots', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			revision: 3,
			matcherExecutor: 'offscreen-worker-pool',
		});

		await storage.saveDetectionSessionSnapshot(snapshot);
		const stored = await storage.getLatestDetectionSessionSnapshot(snapshot.key);

		expect(stored).toMatchObject({
			revision: 3,
			matcherExecutor: 'offscreen-worker-pool',
		});
	});

	it('does not persist raw page signal payloads attached to the submitted object', async () => {
		const storage = await loadStorageHarness();
		const snapshot = Object.assign(
			makeDetectionSessionSnapshot({
				analysis: makeAnalysis([
					makeDetection('react', ['framework'], {
						evidence: [{ kind: 'scriptSrc', matchedValue: 'react.js', confidence: 90 }],
					}),
				]),
			}),
			{
				html: '<html><body>raw page</body></html>',
				cookies: { session: true },
				storage: { localStorage: { token: true } },
			},
		);

		await storage.saveDetectionSessionSnapshot(snapshot);
		const raw = storage.values.get(getDetectionSessionSnapshotKey(snapshot.key));

		expect(raw).toMatchObject({
			analysis: {
				results: [
					{
						technologyId: 'react',
					},
				],
			},
		});
		expect(raw).not.toHaveProperty('html');
		expect(raw).not.toHaveProperty('cookies');
		expect(raw).not.toHaveProperty('storage');
	});

	/**
	 * Background lifecycle listeners need a durable tab index because service
	 * worker globals disappear. Saving a snapshot should refresh that index so a
	 * later navigation or tab close can mark the stored session without knowing the
	 * old in-memory observation handle.
	 */
	it('indexes saved snapshots by browser tab for lifecycle cleanup', async () => {
		const storage = await loadStorageHarness();
		const first = makeDetectionSessionSnapshot({
			key: { tabId: 7, frameId: 0, documentId: 'session-1', originHash: 'origin-example' },
			revision: 1,
			updatedAt: 1_700_000_000_001,
		});
		const second = makeDetectionSessionSnapshot({
			key: { tabId: 7, frameId: 0, documentId: 'session-2', originHash: 'origin-example' },
			revision: 1,
			updatedAt: 1_700_000_000_002,
			status: 'observing',
		});

		await storage.saveDetectionSessionSnapshot(first);
		await storage.saveDetectionSessionSnapshot(second);
		const index = await storage.getDetectionSessionIndex(7);

		expect(index).toMatchObject({
			tabId: 7,
			entries: [
				{ key: second.key, status: 'observing' },
				{ key: first.key, status: 'collecting' },
			],
		});
		expect(storage.values.has(getDetectionSessionIndexKey(7))).toBe(true);
	});

	/**
	 * Navigation cleanup should advance the stored revision instead of deleting the
	 * snapshot. A popup with the old page open can then show a truthful stale state
	 * rather than an apparently live observer from a previous document.
	 */
	it('marks indexed snapshots stale for tab navigation', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			key: { tabId: 9, frameId: 0, documentId: 'session-1', originHash: 'origin-example' },
			revision: 3,
			status: 'observing',
		});

		await storage.saveDetectionSessionSnapshot(snapshot);
		const marked = await storage.markDetectionSessionSnapshotsForTab(9, 'stale', 'tab-navigation');
		const stored = await storage.getLatestDetectionSessionSnapshot(snapshot.key);

		expect(marked).toHaveLength(1);
		expect(stored).toMatchObject({
			revision: 4,
			status: 'stale',
			source: 'background',
			enrichment: expect.objectContaining({ reason: 'tab-navigation' }),
		});
	});

	it('ignores malformed tab session index records', async () => {
		const storage = await loadStorageHarness();
		storage.values.set(getDetectionSessionIndexKey(13), {
			tabId: 13,
			updatedAt: 1_700_000_000_001,
			entries: [
				{
					key: { tabId: 14, frameId: 0, documentId: 'other-tab', originHash: 'origin-example' },
					urlHash: 'url-example',
					status: 'observing',
					updatedAt: 1_700_000_000_001,
				},
			],
		});

		await expect(storage.getDetectionSessionIndex(13)).resolves.toMatchObject({
			tabId: 13,
			entries: [],
			updatedAt: 0,
		});
	});

	it('removes the tab session index when a tab is closed', async () => {
		const storage = await loadStorageHarness();
		const snapshot = makeDetectionSessionSnapshot({
			key: { tabId: 11, frameId: 0, documentId: 'session-1', originHash: 'origin-example' },
		});
		await storage.saveDetectionSessionSnapshot(snapshot);

		await storage.removeDetectionSessionIndex(11);

		expect(await storage.getDetectionSessionIndex(11)).toMatchObject({ entries: [] });
		expect(storage.values.has(getDetectionSessionIndexKey(11))).toBe(false);
	});

});
