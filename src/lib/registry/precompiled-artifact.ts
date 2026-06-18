import type { CompiledTechnologyRegistryArtifact } from './compiler';
import type { TechnologyRegistryProvider } from '../detection/registry-provider';

/**
 * Runtime provider backed by a build-generated registry artifact.
 *
 * Normal extension runs should receive matcher buckets, relationship tables, and
 * collection plans that were written during the WXT build. Tests can still use
 * the static provider when they need a tiny in-memory registry.
 */
export function createPrecompiledTechnologyRegistryProvider(
	artifact: CompiledTechnologyRegistryArtifact,
): TechnologyRegistryProvider {
	return {
		listTechnologies() {
			return artifact.technologies;
		},

		getCompiledRegistry() {
			return artifact;
		},
	};
}
