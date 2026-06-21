import { describe, expect, it } from 'vitest';

import { createMatcherPartitionTasks, hasDeferredMatcherPartitions } from '../../lib/matcher';
import { normalizePageSignals } from '../../lib/observations';
import { makePageSignals } from '../support/factories';

const job = {
	jobId: 'job-1',
	tabId: 7,
	expectedUrl: 'https://example.com/products',
} as const;

describe('matcher partitions', () => {
	/**
	 * Cheap document facts need to run before high-fan-out asset and source-content
	 * evidence so the popup can paint useful results while deeper work continues.
	 */
	it('orders cheap page facts before asset and content-heavy observations', () => {
		const batch = normalizePageSignals(makePageSignals({
			url: 'https://example.com/products',
			meta: { generator: ['Example CMS'] },
			scripts: ['https://cdn.example/runtime.js'],
			scriptContents: ['window.__heavy = true'],
		}));

		const partitions = createMatcherPartitionTasks({ job, batch });

		expect(partitions.map((partition) => [partition.kind, partition.priority])).toEqual([
			['meta', 1],
			['url', 1],
			['scriptSrc', 3],
			['html', 4],
			['scriptContent', 4],
		]);
		expect(hasDeferredMatcherPartitions(batch)).toBe(true);
	});

	/** Bootstrap work deliberately leaves slower partitions for a follow-up job. */
	it('can keep only bootstrap partitions for the first popup-visible run', () => {
		const batch = normalizePageSignals(makePageSignals({
			meta: { generator: ['Example CMS'] },
			scripts: ['https://cdn.example/runtime.js'],
		}));

		const partitions = createMatcherPartitionTasks({ job, batch, bootstrapOnly: true });

		expect(partitions.map((partition) => partition.kind)).toEqual(['meta', 'url']);
	});
});
