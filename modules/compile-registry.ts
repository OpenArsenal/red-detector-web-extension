import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';

import { addPublicAssets, defineWxtModule } from 'wxt/modules';
import type { Wxt } from 'wxt';

import {
	PACKAGED_REGISTRY_ASSET_PATHS,
	countTechnologyRules,
	createBootstrapTechnologyRegistry,
	renderPackagedRegistryJson,
} from '../src/lib/registry/packaged-artifacts';
import type { CompiledTechnologyRegistryArtifact } from '../src/lib/registry';
import type { TechnologyDefinition } from '../src/lib/detection/types';

const REGISTRY_CACHE_DIR = 'red-detector-registry';
const PUBLIC_ASSET_ROOT = 'red-detector-public';

type RegistryAssetName = keyof typeof PACKAGED_REGISTRY_ASSET_PATHS;

interface RegistryAssetPayload {
	readonly name: RegistryAssetName;
	readonly contents: string;
}

/**
 * Registry generation runs before WXT type preparation and builds.
 *
 * Technology definitions stay authored as TypeScript, but the extension package
 * now receives JSON assets instead of a generated JavaScript module. Runtime code
 * fetches those assets when analysis needs them, so the background service worker
 * can start by registering listeners without statically bundling the full rule
 * registry into the entry chunk.
 */
export default defineWxtModule({
	setup(wxt) {
		const cacheRegistryDir = resolve(wxt.config.wxtDir, REGISTRY_CACHE_DIR);
		const publicRootDir = resolve(wxt.config.wxtDir, PUBLIC_ASSET_ROOT);
		const publicRegistryDir = resolve(publicRootDir, REGISTRY_CACHE_DIR);
		mkdirSync(publicRegistryDir, { recursive: true });
		addPublicAssets(wxt, publicRootDir);

		let generation: Promise<void> | undefined;
		const generate = async () => {
			generation ??= generateRegistryJsonAssets(wxt, cacheRegistryDir, publicRegistryDir);
			return generation;
		};

		wxt.hooks.hook('config:resolved', generate);
		wxt.hook('build:before', generate);
	},
});

async function generateRegistryJsonAssets(
	wxt: Wxt,
	cacheRegistryDir: string,
	publicRegistryDir: string,
): Promise<void> {
	const root = wxt.config.root;
	const [{ technologies }, { compileTechnologyRegistry }] = await Promise.all([
		import(resolve(root, 'src/data/technologies.ts')) as Promise<{ readonly technologies: readonly TechnologyDefinition[] }>,
		import(resolve(root, 'src/lib/registry/compiler.ts')) as Promise<{ compileTechnologyRegistry(input: { readonly technologies: readonly TechnologyDefinition[]; readonly sourceKind: 'typescript-definition' }): CompiledTechnologyRegistryArtifact }>,
	]);
	const enrichmentArtifact = compileTechnologyRegistry({
		technologies,
		sourceKind: 'typescript-definition',
	});
	const bootstrapTechnologies = createBootstrapTechnologyRegistry(technologies);
	const generatedAt = Date.now();
	const assets = createRegistryAssets({
		bootstrapTechnologies,
		enrichmentArtifact,
		generatedAt,
	});

	await Promise.all([
		writeRegistryAssets(cacheRegistryDir, assets),
		writeRegistryAssets(publicRegistryDir, assets),
	]);
	wxt.logger.info(
		`Generated registry JSON assets with ${enrichmentArtifact.technologies.length} technologies, ${enrichmentArtifact.matcherIndex.ruleCount} enrichment rules, and ${countTechnologyRules(bootstrapTechnologies)} bootstrap rules`,
	);
}

function createRegistryAssets(input: {
	readonly bootstrapTechnologies: readonly TechnologyDefinition[];
	readonly enrichmentArtifact: CompiledTechnologyRegistryArtifact;
	readonly generatedAt: number;
}): readonly RegistryAssetPayload[] {
	return [
		{
			name: 'bootstrap',
			contents: renderPackagedRegistryJson({
				schemaVersion: 1,
				kind: 'bootstrap',
				technologies: input.bootstrapTechnologies,
				ruleCount: countTechnologyRules(input.bootstrapTechnologies),
				generatedAt: input.generatedAt,
			}),
		},
		{
			name: 'enrichment',
			contents: renderPackagedRegistryJson({
				schemaVersion: 1,
				kind: 'enrichment',
				technologies: input.enrichmentArtifact.technologies,
				ruleCount: input.enrichmentArtifact.matcherIndex.ruleCount,
				generatedAt: input.generatedAt,
			}),
		},
		{
			name: 'metadata',
			contents: renderPackagedRegistryJson({
				schemaVersion: 1,
				kind: 'metadata',
				technologyMetadata: input.enrichmentArtifact.technologyMetadata,
				patternTables: input.enrichmentArtifact.patternTables,
				generatedAt: input.generatedAt,
			}),
		},
		{
			name: 'relationships',
			contents: renderPackagedRegistryJson({
				schemaVersion: 1,
				kind: 'relationships',
				relationshipEdges: input.enrichmentArtifact.relationshipGraph.relationshipEdges,
				generatedAt: input.generatedAt,
			}),
		},
	];
}

async function writeRegistryAssets(
	registryDir: string,
	assets: readonly RegistryAssetPayload[],
): Promise<void> {
	await mkdir(registryDir, { recursive: true });
	await Promise.all(assets.map((asset) => writeFile(
		resolve(registryDir, getRegistryAssetFilename(asset.name)),
		asset.contents,
	)));
}

function getRegistryAssetFilename(name: RegistryAssetName): string {
	const path = PACKAGED_REGISTRY_ASSET_PATHS[name];
	return path.slice(path.lastIndexOf('/') + 1);
}
