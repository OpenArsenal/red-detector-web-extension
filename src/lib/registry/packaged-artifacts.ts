import type { TechnologyDefinition } from '../detection/types';

/** Current JSON registry asset schema version. */
export const PACKAGED_REGISTRY_ASSET_SCHEMA_VERSION = 1;

/** Literal JSON registry asset schema version used by runtime guards. */
export type PackagedRegistryAssetSchemaVersion = typeof PACKAGED_REGISTRY_ASSET_SCHEMA_VERSION;

/** Registry asset kinds copied into the extension output by the WXT module. */
export const PACKAGED_REGISTRY_ASSET_KINDS = ['bootstrap', 'enrichment', 'metadata', 'relationships'] as const;

/** Registry asset kind recorded in every generated JSON payload. */
export type PackagedRegistryAssetKind = typeof PACKAGED_REGISTRY_ASSET_KINDS[number];

/** Generated asset paths relative to the extension output root. */
export const PACKAGED_REGISTRY_ASSET_PATHS = Object.freeze({
	bootstrap: '/red-detector-registry/registry.bootstrap.json',
	enrichment: '/red-detector-registry/registry.enrichment.json',
	metadata: '/red-detector-registry/registry.metadata.json',
	relationships: '/red-detector-registry/registry.relationships.json',
} satisfies Record<PackagedRegistryAssetKind, string>);

/** Encoded regular expression marker used inside JSON registry assets. */
export interface PackagedRegistryRegExpRecord {
	/** Stable marker that distinguishes encoded regexes from ordinary rule objects. */
	readonly $redDetectorRegExp: true;
	/** Original regular expression source. */
	readonly source: string;
	/** Original regular expression flags. */
	readonly flags: string;
}

/** JSON registry asset containing technology definitions for runtime hydration. */
export interface PackagedTechnologyRegistryAsset {
	/** Asset schema version checked before hydration trusts the payload. */
	readonly schemaVersion: PackagedRegistryAssetSchemaVersion;
	/** Technology registry tier represented by the payload. */
	readonly kind: Extract<PackagedRegistryAssetKind, 'bootstrap' | 'enrichment'>;
	/** Ordered technology definitions with regular expressions encoded as JSON records. */
	readonly technologies: readonly unknown[];
	/** Number of rules represented before JSON encoding, used for asset diagnostics. */
	readonly ruleCount: number;
	/** Millisecond timestamp from the build that generated the asset. */
	readonly generatedAt: number;
}

/** Metadata asset used by tests, diagnostics, and future popup display loading. */
export interface PackagedRegistryMetadataAsset {
	/** Asset schema version checked before consumers trust the payload. */
	readonly schemaVersion: PackagedRegistryAssetSchemaVersion;
	/** Metadata asset kind. */
	readonly kind: Extract<PackagedRegistryAssetKind, 'metadata'>;
	/** Lightweight technology metadata in detector order. */
	readonly technologyMetadata: readonly unknown[];
	/** Rule-kind counts for diagnostics and benchmark setup. */
	readonly patternTables: Readonly<Record<string, number>>;
	/** Millisecond timestamp from the build that generated the asset. */
	readonly generatedAt: number;
}

/** Relationship asset used to inspect graph data without reading full rules. */
export interface PackagedRegistryRelationshipsAsset {
	/** Asset schema version checked before consumers trust the payload. */
	readonly schemaVersion: PackagedRegistryAssetSchemaVersion;
	/** Relationship asset kind. */
	readonly kind: Extract<PackagedRegistryAssetKind, 'relationships'>;
	/** Relationship edges in compiler order. */
	readonly relationshipEdges: readonly unknown[];
	/** Millisecond timestamp from the build that generated the asset. */
	readonly generatedAt: number;
}

/** Rule kinds safe for the small bootstrap registry asset. */
const BOOTSTRAP_RULE_KINDS = Object.freeze({
	cookie: true,
	dom: true,
	jsGlobal: true,
	link: true,
	meta: true,
	storage: true,
	url: true,
} satisfies Partial<Record<TechnologyDefinition['rules'][number]['kind'], true>>);

/** Return a registry whose rules are limited to cheap page-local startup evidence. */
export function createBootstrapTechnologyRegistry(
	technologies: readonly TechnologyDefinition[],
): readonly TechnologyDefinition[] {
	return technologies
		.map((technology) => ({
			...technology,
			rules: technology.rules.filter((rule) => BOOTSTRAP_RULE_KINDS[rule.kind] === true),
		}))
		.filter((technology) => technology.rules.length > 0);
}

/** Count rules without walking encoded JSON after asset creation. */
export function countTechnologyRules(technologies: readonly TechnologyDefinition[]): number {
	let count = 0;
	for (const technology of technologies) {
		count += technology.rules.length;
	}
	return count;
}

/** Encode a value so `RegExp` rules survive JSON serialization. */
export function encodeRegistryJsonValue(value: unknown): unknown {
	if (value instanceof RegExp) {
		return {
			$redDetectorRegExp: true,
			source: value.source,
			flags: value.flags,
		} satisfies PackagedRegistryRegExpRecord;
	}

	if (Array.isArray(value)) {
		return value.map((entry) => encodeRegistryJsonValue(entry));
	}

	if (value && typeof value === 'object') {
		const encoded: Record<string, unknown> = Object.create(null) as Record<string, unknown>;
		for (const [key, entry] of Object.entries(value)) {
			if (entry !== undefined) {
				encoded[key] = encodeRegistryJsonValue(entry);
			}
		}
		return encoded;
	}

	return value;
}

/** Decode regular expression records after a packaged registry asset is parsed. */
export function decodeRegistryJsonValue(value: unknown): unknown {
	if (isPackagedRegistryRegExpRecord(value)) {
		return new RegExp(value.source, value.flags);
	}

	if (Array.isArray(value)) {
		return value.map((entry) => decodeRegistryJsonValue(entry));
	}

	if (value && typeof value === 'object') {
		const decoded: Record<string, unknown> = Object.create(null) as Record<string, unknown>;
		for (const [key, entry] of Object.entries(value)) {
			decoded[key] = decodeRegistryJsonValue(entry);
		}
		return decoded;
	}

	return value;
}

/** Guard the encoded regular expression record before constructing a runtime `RegExp`. */
export function isPackagedRegistryRegExpRecord(value: unknown): value is PackagedRegistryRegExpRecord {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<PackagedRegistryRegExpRecord>;
	return (
		candidate.$redDetectorRegExp === true &&
		typeof candidate.source === 'string' &&
		typeof candidate.flags === 'string'
	);
}

/** Guard the registry source asset before runtime hydration walks a large payload. */
export function isPackagedTechnologyRegistryAsset(
	value: unknown,
	kind: Extract<PackagedRegistryAssetKind, 'bootstrap' | 'enrichment'>,
): value is PackagedTechnologyRegistryAsset {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const candidate = value as Partial<PackagedTechnologyRegistryAsset>;
	return (
		candidate.schemaVersion === PACKAGED_REGISTRY_ASSET_SCHEMA_VERSION &&
		candidate.kind === kind &&
		Array.isArray(candidate.technologies) &&
		typeof candidate.ruleCount === 'number' &&
		typeof candidate.generatedAt === 'number'
	);
}

/** Convert a parsed JSON asset into ordered technology definitions. */
export function hydratePackagedTechnologyRegistry(
	asset: PackagedTechnologyRegistryAsset,
): readonly TechnologyDefinition[] {
	return decodeRegistryJsonValue(asset.technologies) as readonly TechnologyDefinition[];
}

/** Render JSON with stable indentation for reviewable generated artifacts. */
export function renderPackagedRegistryJson(value: unknown): string {
	return `${JSON.stringify(encodeRegistryJsonValue(value), null, 2)}\n`;
}
