import { technologies } from '../../data/technologies';
import { compileTechnologyRegistry, type CompiledTechnologyRegistryArtifact } from '../registry';
import type { TechnologyDefinition } from './types';

/**
 * Read-only source of technology definitions for detector calls and collection planning.
 *
 * The current implementation still reads the bundled TypeScript registry. The provider
 * keeps that detail out of callers so a later registry compiler can replace the backing
 * source without changing popup, background, or collector code.
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

/** Provider backed by the current bundled TypeScript registry. */
export const bundledTechnologyRegistryProvider = createStaticTechnologyRegistryProvider(technologies);
