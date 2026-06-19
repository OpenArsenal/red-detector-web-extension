import { afterEach, describe, expect, it, vi } from 'vitest';

import type { ActiveTabIdentity } from '../../lib/messaging';
import {
	createDetectionStorageHash,
	getAnalysisCacheKey,
	getDetectionOriginSnapshotKey,
} from '../../lib/storage/contracts';
import { makeAnalysis, makeDetection, makeDetectionSessionSnapshot } from '../support/factories';
import {
	createMockBrowserStorageArea,
	createMockBrowserStorageChangeEvent,
} from '../support/mock-browser';

const ACTIVE_IDENTITY: ActiveTabIdentity = {
	tabId: 7,
	frameId: 0,
	url: 'https://example.com/products',
	hostname: 'example.com',
	originHash: 'origin-example',
	urlHash: 'url-example-products',
	incognito: false,
};

async function loadSnapshotStateHarness(initialValues: Record<string, unknown> = {}) {
	vi.resetModules();
	const storage = createMockBrowserStorageArea(initialValues);
	const onChanged = createMockBrowserStorageChangeEvent();

	vi.doMock('wxt/browser', () => ({
		browser: {
			storage: {
				local: storage.local,
				onChanged,
			},
		},
	}));

	const snapshotState = await import('../../lib/popup/snapshot-state');
	return { ...snapshotState, storage, onChanged };
}

afterEach(() => {
	vi.doUnmock('wxt/browser');
	vi.resetModules();
});

describe.sequential('popup snapshot state', () => {
	it('reads a same-tab origin snapshot before the legacy analysis cache', async () => {
		const snapshot = makeDetectionSessionSnapshot({
			key: { tabId: ACTIVE_IDENTITY.tabId, frameId: ACTIVE_IDENTITY.frameId, documentId: 'document-1', originHash: ACTIVE_IDENTITY.originHash },
			analysis: makeAnalysis([makeDetection('solidjs')], { source: 'fresh' }),
			revision: 2,
			status: 'complete',
		});
		const cached = makeAnalysis([makeDetection('react')], { source: 'cache', analyzedAt: Date.now() });
		const harness = await loadSnapshotStateHarness({
			[getDetectionOriginSnapshotKey(ACTIVE_IDENTITY.originHash)]: snapshot,
			[getAnalysisCacheKey(ACTIVE_IDENTITY.url)]: cached,
		});

		const stored = await harness.readStoredPopupAnalysis(ACTIVE_IDENTITY);

		expect(stored).toMatchObject({
			source: 'origin-snapshot',
			analysis: { results: [expect.objectContaining({ technologyId: 'solidjs' })] },
			snapshot: { revision: 2 },
		});
	});

	it('falls back to the legacy analysis cache when no same-tab snapshot exists', async () => {
		const cached = makeAnalysis([makeDetection('react')], { source: 'cache', analyzedAt: Date.now() });
		const harness = await loadSnapshotStateHarness({ [getAnalysisCacheKey(ACTIVE_IDENTITY.url)]: cached });

		const stored = await harness.readStoredPopupAnalysis(ACTIVE_IDENTITY);

		expect(stored).toMatchObject({
			source: 'analysis-cache',
			analysis: { results: [expect.objectContaining({ technologyId: 'react' })] },
		});
	});

	it('subscribes to newer same-tab snapshot revisions while ignoring other tabs and page URLs', async () => {
		const harness = await loadSnapshotStateHarness();
		const onRevision = vi.fn();
		const unsubscribe = harness.subscribeToPopupSnapshotRevisions(ACTIVE_IDENTITY, onRevision);
		const storageKey = getDetectionOriginSnapshotKey(ACTIVE_IDENTITY.originHash);
		const otherTabSnapshot = makeDetectionSessionSnapshot({ key: { tabId: 11, frameId: 0, documentId: 'document-1', originHash: ACTIVE_IDENTITY.originHash } });
		const previousPageSnapshot = makeDetectionSessionSnapshot({
			key: { tabId: ACTIVE_IDENTITY.tabId, frameId: ACTIVE_IDENTITY.frameId, documentId: 'document-1', originHash: ACTIVE_IDENTITY.originHash },
			urlHash: 'url-example-previous-page',
		});
		const matchingSnapshot = makeDetectionSessionSnapshot({ key: { tabId: ACTIVE_IDENTITY.tabId, frameId: ACTIVE_IDENTITY.frameId, documentId: 'document-1', originHash: ACTIVE_IDENTITY.originHash }, revision: 3 });

		harness.onChanged.emit({ [storageKey]: { newValue: otherTabSnapshot } });
		harness.onChanged.emit({ [storageKey]: { newValue: previousPageSnapshot } });
		harness.onChanged.emit({ other: { newValue: matchingSnapshot } });
		harness.onChanged.emit({ [storageKey]: { newValue: matchingSnapshot } });
		unsubscribe();

		expect(onRevision).toHaveBeenCalledTimes(1);
		expect(onRevision).toHaveBeenCalledWith(expect.objectContaining({ revision: 3 }));
		expect(harness.onChanged.addListener).toHaveBeenCalledOnce();
		expect(harness.onChanged.removeListener).toHaveBeenCalledOnce();
	});

	it('applies only newer revisions for the active popup snapshot', async () => {
		const harness = await loadSnapshotStateHarness();
		const current = makeDetectionSessionSnapshot({ revision: 2, updatedAt: 1_700_000_000_002 });
		const olderSameDocument = makeDetectionSessionSnapshot({ revision: 1, updatedAt: 1_700_000_000_003 });
		const newerSameDocument = makeDetectionSessionSnapshot({ revision: 3, updatedAt: 1_700_000_000_001 });
		const newerDifferentDocument = makeDetectionSessionSnapshot({ key: { ...current.key, documentId: 'document-2' }, revision: 1, updatedAt: 1_700_000_000_004 });

		expect(harness.isNewerSnapshotRevision(null, current)).toBe(true);
		expect(harness.isNewerSnapshotRevision(current, olderSameDocument)).toBe(false);
		expect(harness.isNewerSnapshotRevision(current, newerSameDocument)).toBe(true);
		expect(harness.isNewerSnapshotRevision(current, newerDifferentDocument)).toBe(true);
		expect(createDetectionStorageHash(ACTIVE_IDENTITY.url)).toBeTypeOf('string');
	});
});
