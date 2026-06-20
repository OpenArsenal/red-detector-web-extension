import { describe, expect, it, vi } from 'vitest';

import type { TechnologyDefinition } from '../../lib/detection/types';
import { compileTechnologyRegistry } from '../../lib/registry';
import {
	PACKAGED_REGISTRY_ASSET_PATHS,
	PACKAGED_REGISTRY_ASSET_SCHEMA_VERSION,
	createBootstrapTechnologyRegistry,
	hydratePackagedTechnologyRegistry,
	isPackagedTechnologyRegistryAsset,
	renderPackagedRegistryJson,
} from '../../lib/registry/packaged-artifacts';
import { createPackagedTechnologyRegistryProvider } from '../../lib/registry/packaged-provider';

function makeRegistry(): readonly TechnologyDefinition[] {
	return [
		{
			id: 'bootstrap-visible',
			name: 'Bootstrap Visible',
			website: 'https://bootstrap-visible.example',
			categories: ['framework'],
			rules: [
				{ kind: 'meta', key: 'generator', valuePattern: /Bootstrap Visible/, confidence: 90 },
				{ kind: 'scriptSrc', pattern: /bootstrap-visible\.js/, confidence: 90 },
			],
		},
		{
			id: 'enrichment-only',
			name: 'Enrichment Only',
			website: 'https://enrichment-only.example',
			categories: ['developer-tooling'],
			rules: [{ kind: 'scriptContent', pattern: /enrichmentOnly\(/, confidence: 90 }],
		},
	];
}

function makeEnrichmentAsset(registry: readonly TechnologyDefinition[]) {
	return {
		schemaVersion: PACKAGED_REGISTRY_ASSET_SCHEMA_VERSION,
		kind: 'enrichment',
		technologies: registry,
		ruleCount: registry.reduce((count, technology) => count + technology.rules.length, 0),
		generatedAt: 1,
	};
}

describe('packaged registry artifacts', () => {
	it('round-trips regular expression rules through JSON assets', () => {
		const rendered = renderPackagedRegistryJson(makeEnrichmentAsset(makeRegistry()));
		const parsed = JSON.parse(rendered);

		expect(isPackagedTechnologyRegistryAsset(parsed, 'enrichment')).toBe(true);
		const hydrated = hydratePackagedTechnologyRegistry(parsed);

		expect(hydrated.map((technology) => technology.id)).toEqual(['bootstrap-visible', 'enrichment-only']);
		expect(hydrated[0]?.rules[0]).toMatchObject({ kind: 'meta', key: 'generator' });
		expect((hydrated[0]?.rules[0] as { valuePattern?: RegExp }).valuePattern).toBeInstanceOf(RegExp);
		expect((hydrated[0]?.rules[0] as { valuePattern: RegExp }).valuePattern.test('Bootstrap Visible')).toBe(true);
	});

	it('keeps bootstrap registry rules limited to cheap page-local surfaces', () => {
		const bootstrap = createBootstrapTechnologyRegistry(makeRegistry());

		expect(bootstrap.map((technology) => technology.id)).toEqual(['bootstrap-visible']);
		expect(bootstrap[0]?.rules.map((rule) => rule.kind)).toEqual(['meta']);
	});

	it('keeps packaged registry paths relative to the extension root', () => {
		expect(PACKAGED_REGISTRY_ASSET_PATHS.enrichment).toBe('red-detector-registry/registry.enrichment.json');
		expect(PACKAGED_REGISTRY_ASSET_PATHS.enrichment.startsWith('/')).toBe(false);
	});

	it('calls the default worker fetch through the global receiver', async () => {
		const registry = makeRegistry();
		const rendered = renderPackagedRegistryJson(makeEnrichmentAsset(registry));
		const fetchAsset = vi.fn(function (this: unknown) {
			expect(this).toBe(globalThis);
			return Promise.resolve({
				ok: true,
				async json() {
					return JSON.parse(rendered);
				},
			});
		});
		vi.stubGlobal('fetch', fetchAsset);

		const provider = createPackagedTechnologyRegistryProvider({
			resolveUrl: (path) => `extension://${path}`,
		});

		try {
			const artifact = await provider.getCompiledRegistry();

			expect(fetchAsset).toHaveBeenCalledOnce();
			expect(artifact.technologies.map((technology) => technology.id)).toEqual(['bootstrap-visible', 'enrichment-only']);
		} finally {
			vi.unstubAllGlobals();
		}
	});

	it('loads packaged enrichment JSON once and preserves detector order', async () => {
		const registry = makeRegistry();
		const rendered = renderPackagedRegistryJson(makeEnrichmentAsset(registry));
		const fetchAsset = vi.fn(async () => ({
			ok: true,
			async json() {
				return JSON.parse(rendered);
			},
		}));
		const provider = createPackagedTechnologyRegistryProvider({
			resolveUrl: (path) => `extension://${path}`,
			fetchAsset,
		});

		const first = await provider.getCompiledRegistry();
		const second = await provider.getCompiledRegistry();
		const expected = compileTechnologyRegistry({ technologies: registry });

		expect(fetchAsset).toHaveBeenCalledOnce();
		expect(first).toBe(second);
		expect(first.technologies.map((technology) => technology.id)).toEqual(
			expected.technologies.map((technology) => technology.id),
		);
		expect(first.matcherIndex.ruleCount).toBe(expected.matcherIndex.ruleCount);
	});
});
