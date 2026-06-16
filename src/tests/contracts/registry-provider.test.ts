import { describe, expect, it } from 'vitest';

import type { TechnologyDefinition } from '../../lib/detection/types';
import { createStaticTechnologyRegistryProvider } from '../../lib/detection/registry-provider';

function makeTechnology(id: string): TechnologyDefinition {
	return {
		id,
		name: id,
		website: `https://${id}.example`,
		categories: ['unknown'],
		rules: [],
	};
}

describe('technology registry provider contract', () => {
	it('returns the active registry in detector order', () => {
		const registry = [makeTechnology('first'), makeTechnology('second')];
		const provider = createStaticTechnologyRegistryProvider(registry);

		expect(provider.listTechnologies().map((technology) => technology.id)).toEqual([
			'first',
			'second',
		]);
	});
});
