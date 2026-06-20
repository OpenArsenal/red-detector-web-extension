import { browser } from 'wxt/browser';

import { compileTechnologyRegistry, type CompiledTechnologyRegistryArtifact } from './compiler';
import {
	PACKAGED_REGISTRY_ASSET_PATHS,
	hydratePackagedTechnologyRegistry,
	isPackagedTechnologyRegistryAsset,
	type PackagedTechnologyRegistryAsset,
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

/** Registry asset tier that contains executable technology definitions. */
type PackagedExecutableRegistryKind = PackagedTechnologyRegistryAsset['kind'];

/** Cached runtime state for one packaged registry tier. */
interface PackagedRegistryTierCache {
	/** Ordered technology definitions hydrated from JSON. */
	registryPromise?: Promise<readonly TechnologyDefinition[]>;
	/** Compiled matcher, graph, and collection-plan artifact for the hydrated registry. */
	artifactPromise?: Promise<CompiledTechnologyRegistryArtifact>;
}

/**
 * Create a registry provider backed by generated JSON assets.
 *
 * The large enrichment payload is fetched only when deep analysis needs it.
 * Background startup can register listeners and answer cache-only requests
 * without Vite pulling the generated registry module into the service-worker
 * entry chunk. The bootstrap payload stays separate so the first visible result
 * can use cheap page-local rules before the full registry hydrates.
 */
export function createPackagedTechnologyRegistryProvider(
	input: PackagedTechnologyRegistryProviderInput = {},
): TechnologyRegistryProvider {
	const resolveUrl = input.resolveUrl ?? ((path) => browser.runtime.getURL(
		path as Parameters<typeof browser.runtime.getURL>[0],
	));
	const fetchAsset = input.fetchAsset ?? fetchRegistryAsset;
	const bootstrap = createRegistryTierCache();
	const enrichment = createRegistryTierCache();

	const loadRegistry = (kind: PackagedExecutableRegistryKind, cache: PackagedRegistryTierCache) => {
		cache.registryPromise ??= loadPackagedRegistry({ kind, resolveUrl, fetchAsset });
		return cache.registryPromise;
	};
	const compileRegistry = (kind: PackagedExecutableRegistryKind, cache: PackagedRegistryTierCache) => {
		cache.artifactPromise ??= (async () => compileTechnologyRegistry({
			technologies: await loadRegistry(kind, cache),
			sourceKind: 'typescript-definition',
		}))();
		return cache.artifactPromise;
	};

	return {
		listTechnologies: () => loadRegistry('enrichment', enrichment),
		listBootstrapTechnologies: () => loadRegistry('bootstrap', bootstrap),
		getCompiledRegistry: () => compileRegistry('enrichment', enrichment),
		getCompiledBootstrapRegistry: () => compileRegistry('bootstrap', bootstrap),
	};
}

function createRegistryTierCache(): PackagedRegistryTierCache {
	return {};
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

async function loadPackagedRegistry(input: {
	readonly kind: PackagedExecutableRegistryKind;
	readonly resolveUrl: (path: string) => string;
	readonly fetchAsset: RegistryAssetFetch;
}): Promise<readonly TechnologyDefinition[]> {
	const url = input.resolveUrl(PACKAGED_REGISTRY_ASSET_PATHS[input.kind]);
	const response = await input.fetchAsset(url);
	if (!response.ok) {
		throw new Error(`Unable to load packaged ${input.kind} registry asset from ${url}.`);
	}

	const parsed = await response.json();
	if (!isPackagedTechnologyRegistryAsset(parsed, input.kind)) {
		throw new Error(`Packaged ${input.kind} registry asset did not match the expected schema.`);
	}

	return hydratePackagedTechnologyRegistry(parsed);
}
