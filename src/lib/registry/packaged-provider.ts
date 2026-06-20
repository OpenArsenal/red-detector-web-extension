import { browser } from 'wxt/browser';

import { compileTechnologyRegistry, type CompiledTechnologyRegistryArtifact } from './compiler';
import {
	PACKAGED_REGISTRY_ASSET_PATHS,
	hydratePackagedTechnologyRegistry,
	isPackagedTechnologyRegistryAsset,
} from './packaged-artifacts';
import type { TechnologyRegistryProvider } from '../detection/registry-provider';
import type { TechnologyDefinition } from '../detection/types';

/** Fetch implementation used by tests and non-browser harnesses. */
export type RegistryAssetFetch = (url: string) => Promise<{ readonly ok: boolean; json(): Promise<unknown> }>;

/** Runtime hooks needed to load generated registry JSON from the extension package. */
export interface PackagedTechnologyRegistryProviderInput {
	/** Convert a packaged asset path into an extension URL. */
	readonly resolveUrl?: (path: string) => string;
	/** Fetch a generated JSON asset. */
	readonly fetchAsset?: RegistryAssetFetch;
}

/**
 * Create a registry provider backed by generated JSON assets.
 *
 * The large registry payload is fetched only when analysis needs it. Background
 * startup can register listeners and answer cache-only requests without Vite
 * pulling the generated registry module into the service-worker entry chunk.
 */
export function createPackagedTechnologyRegistryProvider(
	input: PackagedTechnologyRegistryProviderInput = {},
): TechnologyRegistryProvider {
	let registryPromise: Promise<readonly TechnologyDefinition[]> | undefined;
	let artifactPromise: Promise<CompiledTechnologyRegistryArtifact> | undefined;
	const resolveUrl = input.resolveUrl ?? ((path) => browser.runtime.getURL(
		path as Parameters<typeof browser.runtime.getURL>[0],
	));
	const fetchAsset = input.fetchAsset ?? fetchRegistryAsset;

	const loadRegistry = async () => {
		registryPromise ??= loadEnrichmentRegistry({ resolveUrl, fetchAsset });
		return registryPromise;
	};

	return {
		listTechnologies: loadRegistry,

		async getCompiledRegistry() {
			artifactPromise ??= (async () => compileTechnologyRegistry({
				technologies: await loadRegistry(),
				sourceKind: 'typescript-definition',
			}))();
			return artifactPromise;
		},
	};
}

/**
 * Fetch packaged registry data without detaching the native worker fetch method.
 *
 * Chrome's worker `fetch` expects the worker global as its receiver. Passing the
 * native method through an object and later invoking it as `input.fetchAsset(...)`
 * can bind `this` to that object, which raises `Illegal invocation` before the
 * registry URL is even requested. Wrapping the call preserves the correct
 * browser receiver while keeping tests free to inject a fake fetcher.
 */
async function fetchRegistryAsset(url: string): Promise<{ readonly ok: boolean; json(): Promise<unknown> }> {
	return globalThis.fetch(url);
}

async function loadEnrichmentRegistry(input: {
	readonly resolveUrl: (path: string) => string;
	readonly fetchAsset: RegistryAssetFetch;
}): Promise<readonly TechnologyDefinition[]> {
	const url = input.resolveUrl(PACKAGED_REGISTRY_ASSET_PATHS.enrichment);
	const response = await input.fetchAsset(url);
	if (!response.ok) {
		throw new Error(`Unable to load packaged registry asset from ${url}.`);
	}

	const parsed = await response.json();
	if (!isPackagedTechnologyRegistryAsset(parsed, 'enrichment')) {
		throw new Error('Packaged enrichment registry asset did not match the expected schema.');
	}

	return hydratePackagedTechnologyRegistry(parsed);
}
