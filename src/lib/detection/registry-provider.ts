import { compileTechnologyRegistry, createPackagedTechnologyRegistryProvider, type CompiledTechnologyRegistryArtifact } from '../registry';
import type { TechnologyDefinition } from './types';

/**
 * Read-only source of technology definitions for detector calls and collection planning.
 *
 * Registry access is asynchronous because the production extension loads the
 * large generated registry from packaged JSON only when analysis needs it. Tests
 * and small tools can still use the static provider to avoid browser fetches.
 */
export interface TechnologyRegistryProvider {
	/** Return the active technology definitions in detector order. */
	listTechnologies(): Promise<readonly TechnologyDefinition[]>;
	/**
	 * Return the compiled artifact for the active registry.
	 *
	 * The provider owns caching so callers do not rebuild matcher indexes, graphs,
	 * and collection plans during every active-tab analysis.
	 */
	getCompiledRegistry(): Promise<CompiledTechnologyRegistryArtifact>;
}

/**
 * Build a provider around an existing technology list.
 *
 * Tests and future build steps can use this to pass a tiny registry without
 * reading packaged assets or importing the generated bundled rule tree.
 */
export function createStaticTechnologyRegistryProvider(
	registry: readonly TechnologyDefinition[],
): TechnologyRegistryProvider {
	let compiledRegistry: CompiledTechnologyRegistryArtifact | undefined;

	return {
		async listTechnologies() {
			return registry;
		},

		async getCompiledRegistry() {
			compiledRegistry ??= compileTechnologyRegistry({
				technologies: registry,
				sourceKind: 'typescript-definition',
			});
			return compiledRegistry;
		},
	};
}

/** Provider backed by WXT-generated registry JSON assets. */
export const bundledTechnologyRegistryProvider = createPackagedTechnologyRegistryProvider();
