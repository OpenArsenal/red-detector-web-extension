import { precompiledRegistryArtifact } from '#/compiled-registry';
import { compileTechnologyRegistry, createPrecompiledTechnologyRegistryProvider, type CompiledTechnologyRegistryArtifact } from '../registry';
import type { TechnologyDefinition } from './types';

/**
 * Read-only source of technology definitions for detector calls and collection planning.
 *
 * The compiled registry can be expensive to parse and evaluate because it holds
 * the bundled rule tree, matcher index, relationship graph, and collection plan.
 * Runtime callers await the artifact so the background entrypoint can lazy-load
 * that generated module instead of statically pulling it into the service-worker
 * startup bundle.
 */
export interface TechnologyRegistryProvider {
	/** Return the active technology definitions in detector order when already available. */
	listTechnologies(): readonly TechnologyDefinition[];
	/**
	 * Return the compiled artifact for the active registry.
	 *
	 * The provider owns caching so callers do not rebuild matcher indexes, graphs,
	 * and collection plans during every active-tab analysis.
	 */
	getCompiledRegistry(): CompiledTechnologyRegistryArtifact;
}

/**
 * Build a provider around an existing technology list.
 *
 * Tests and future build steps can use this to pass a tiny registry without importing
 * the generated bundled rule tree.
 */
export function createStaticTechnologyRegistryProvider(
	registry: readonly TechnologyDefinition[],
): TechnologyRegistryProvider {
	let compiledRegistry: CompiledTechnologyRegistryArtifact | undefined;

	return {
		listTechnologies() {
			return registry;
		},

		getCompiledRegistry() {
			compiledRegistry ??= compileTechnologyRegistry({
				technologies: registry,
				sourceKind: 'typescript-definition',
			});
			return compiledRegistry;
		},
	};
}

/** Provider backed by the WXT-generated compiled registry artifact. */
export const bundledTechnologyRegistryProvider = createPrecompiledTechnologyRegistryProvider(precompiledRegistryArtifact);
