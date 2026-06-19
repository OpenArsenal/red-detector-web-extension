import { afterEach, describe, expect, it, vi } from 'vitest';

import {
	getDetectionOriginSnapshotKey,
	getDetectionSessionSnapshotKey,
} from '../../lib/storage/contracts';
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

	const storage = await import('../../lib/storage');
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
});
