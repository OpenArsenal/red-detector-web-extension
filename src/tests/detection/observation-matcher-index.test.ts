import { describe, expect, it } from 'vitest';

import type { TechnologyDefinition } from '../../lib/detection/types';
import { matchObservationBatch } from '../../lib/detection/observation-matcher';
import {
	createObservationMatcherIndex,
	findIndexedObservationRules,
	matchIndexedObservationBatch,
} from '../../lib/detection/observation-matcher-index';
import { normalizePageSignals } from '../../lib/observations';
import { makePageSignals } from '../support/factories';

function makeIndexedRegistry(): TechnologyDefinition[] {
	return [
		{
			id: 'wildcard-script',
			name: 'Wildcard Script',
			website: 'https://wildcard-script.example',
			categories: ['framework'],
			rules: [{ kind: 'scriptSrc', pattern: /cdn\.example\/runtime\.js/, confidence: 70 }],
		},
		{
			id: 'generator-a',
			name: 'Generator A',
			website: 'https://generator-a.example',
			categories: ['platform-cms-builder'],
			rules: [{ kind: 'meta', key: 'generator', valuePattern: /Generator A/, confidence: 90 }],
		},
		{
			id: 'html-owner',
			name: 'HTML Owner',
			website: 'https://html-owner.example',
			categories: ['platform-cms-builder'],
			rules: [{ kind: 'html', pattern: /HTML Owner ([\d.]+)/, version: { source: 'match', group: 1 } }],
		},
		{
			id: 'generator-b',
			name: 'Generator B',
			website: 'https://generator-b.example',
			categories: ['platform-cms-builder'],
			rules: [{ kind: 'meta', key: 'x-generator', valuePattern: /Generator B/, confidence: 90 }],
		},
	];
}

describe('indexed observation matcher', () => {
	it('emits the same matches and evidence as the sequential matcher', () => {
		const registry = makeIndexedRegistry();
		const batch = normalizePageSignals(makePageSignals({
			scripts: ['https://cdn.example/runtime.js'],
			meta: {
				generator: ['Generator A'],
				'x-generator': ['Generator B'],
			},
			html: '',
			htmlMatches: {
				'html-owner:0': { matchedValue: 'HTML Owner 2.1.0', captures: ['2.1.0'] },
			},
		}));

		const sequential = matchObservationBatch({ registry, batch });
		const indexed = matchIndexedObservationBatch({ registry, batch });

		expect(indexed.matches.map((match) => match.technologyId)).toEqual(
			sequential.matches.map((match) => match.technologyId),
		);
		expect(indexed.evidenceBatch.entries).toEqual(sequential.evidenceBatch.entries);
	});

	it('routes exact-key observations without evaluating unrelated exact-key rules', () => {
		const registry = makeIndexedRegistry();
		const index = createObservationMatcherIndex(registry);
		const batch = normalizePageSignals(makePageSignals({
			meta: {
				generator: ['Generator A'],
				'x-generator': ['Generator B'],
			},
		}));
		const generatorObservation = batch.observations.find((observation) => (
			observation.kind === 'meta' && observation.key === 'generator'
		));

		expect(generatorObservation).toBeDefined();
		expect(findIndexedObservationRules(index, generatorObservation!).map((rule) => rule.technology.id)).toEqual([
			'generator-a',
		]);
	});

	it('keeps responseHeader rules compatible with header observations', () => {
		const registry: TechnologyDefinition[] = [{
			id: 'server-tech',
			name: 'Server Tech',
			website: 'https://server-tech.example',
			categories: ['hosting'],
			rules: [{ kind: 'responseHeader', key: 'server', valuePattern: /Server Tech/i, confidence: 95 }],
		}];
		const batch = normalizePageSignals(makePageSignals({
			headers: { Server: 'Server Tech' },
		}));

		expect(matchIndexedObservationBatch({ registry, batch }).evidenceBatch.entries).toEqual([
			expect.objectContaining({
				technologyId: 'server-tech',
				kind: 'responseHeader',
			}),
		]);
	});

	it('reuses a prebuilt index across batches from the same registry', () => {
		const registry = makeIndexedRegistry();
		const index = createObservationMatcherIndex(registry);
		const firstBatch = normalizePageSignals(makePageSignals({
			meta: { generator: ['Generator A'] },
		}));
		const secondBatch = normalizePageSignals(makePageSignals({
			meta: { 'x-generator': ['Generator B'] },
		}));

		expect(matchIndexedObservationBatch({ registry, batch: firstBatch, index }).matches).toHaveLength(1);
		expect(matchIndexedObservationBatch({ registry, batch: secondBatch, index }).matches).toHaveLength(1);
		expect(index).toMatchObject({ technologyCount: 4, ruleCount: 4 });
	});
});
