import type { CompiledTechnologyRegistryArtifact } from './compiler';
import type { TechnologyRegistryProvider } from '../detection/registry-provider';

/**
 * Runtime provider backed by an already-loaded build-generated registry artifact.
 *
 * Normal extension code uses the lazy bundled provider so the background can
 * split the generated registry away from its startup bundle. Tests and tooling
 * can still wrap a concrete artifact when they need synchronous setup data.
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
