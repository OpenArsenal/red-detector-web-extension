import { precompiledRegistryArtifact } from '#/compiled-registry';
import { compileTechnologyRegistry, createPrecompiledTechnologyRegistryProvider, type CompiledTechnologyRegistryArtifact } from '../registry';
import type { TechnologyDefinition } from './types';

/**
 * Read-only source of technology definitions for detector calls and collection planning.
 *
 * Callers receive detector-ordered definitions and compiled artifacts without
 * knowing how the bundled registry is backed. That keeps popup, background, and
 * collector code focused on the active registry contract.
 */
export interface TechnologyRegistryProvider {
	/** Return the active technology definitions in detector order. */
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
