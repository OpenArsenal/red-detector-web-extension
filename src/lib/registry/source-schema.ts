import * as z from 'zod';

import { categories } from '../../data/categories';
import type { CategoryId, TechnologyDefinition } from '../detection/types';
import type { RegistryValidationResult } from './diagnostics';
import { diagnosticsFromZodError } from './diagnostics';

/** Current schema version for the registry source envelope. */
export const REGISTRY_SOURCE_SCHEMA_VERSION = 1;

/** Literal schema-version type used by compiler artifacts and docs. */
export type RegistrySourceSchemaVersion = typeof REGISTRY_SOURCE_SCHEMA_VERSION;

/** Runtime detection kinds accepted by the current TypeScript registry schema. */
const runtimeDetectionKindSchema = z.enum([
	'dom',
	'html',
	'scriptSrc',
	'stylesheetHref',
	'resourceUrl',
	'requestUrl',
	'scriptContent',
	'stylesheetContent',
	'cookie',
	'header',
	'responseHeader',
	'requestHeader',
	'jsGlobal',
	'meta',
	'link',
	'storage',
	'url',
	'text',
	'robots',
	'dns',
	'certIssuer',
	'probe',
]);

/** Relationship kinds accepted by the detection graph. */
const relationshipKindSchema = z.enum(['implies', 'requires', 'excludes']);

/** DNS record types supported by the current detector schema. */
const dnsRecordTypeSchema = z.enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'TXT']);

/** Storage areas that content scripts can describe without reading stored values. */
const storageAreaSchema = z.enum(['localStorage', 'sessionStorage']);

/** Category ids must match the category table used by the popup and detector. */
const categoryIdSchema = z.string().refine((value): value is CategoryId => value in categories, {
	error: 'Unknown category id.',
});

/** RegExp values are still allowed because the active source format is TypeScript. */
const regexpSchema = z.instanceof(RegExp);

/** Shared rule fields available on every detection rule. */
const ruleBaseShape = {
	id: z.string().min(1).optional(),
	confidence: z.number().min(0).max(100).optional(),
	description: z.string().min(1).optional(),
	version: z.lazy(() => versionExtractionSchema).optional(),
	sourceRuleIndex: z.number().int().min(0).optional(),
};

/** Version extraction rules supported by the current detector. */
const versionExtractionSchema = z.discriminatedUnion('source', [
	z.strictObject({
		source: z.literal('match'),
		group: z.union([z.number().int().min(0), z.string().min(1)]).optional(),
		template: z.string().min(1).optional(),
		confidence: z.number().min(0).max(100).optional(),
	}),
	z.strictObject({
		source: z.literal('matchedValue'),
		pattern: regexpSchema,
		group: z.union([z.number().int().min(0), z.string().min(1)]).optional(),
		template: z.string().min(1).optional(),
		confidence: z.number().min(0).max(100).optional(),
	}),
	z.strictObject({
		source: z.literal('static'),
		value: z.string().min(1),
		confidence: z.number().min(0).max(100).optional(),
	}),
]);

/** Pattern rule kinds that use one regular expression over one observation value. */
const patternKindSchema = z.enum([
	'html',
	'scriptSrc',
	'stylesheetHref',
	'resourceUrl',
	'requestUrl',
	'scriptContent',
	'stylesheetContent',
	'url',
	'text',
	'robots',
	'certIssuer',
	'probe',
]);

/** Runtime schema for pattern detection rules. */
const patternDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: patternKindSchema,
	pattern: regexpSchema.optional(),
});

/** Runtime schema for selector-backed DOM rules. */
const domDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('dom'),
	selector: z.string().min(1),
	attribute: z.string().min(1).optional(),
	valuePattern: regexpSchema.optional(),
});

/** Runtime schema for cookie-name rules. */
const cookieDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('cookie'),
	key: z.string().min(1).optional(),
	keyPattern: regexpSchema.optional(),
}).refine((rule) => Boolean(rule.key || rule.keyPattern), {
	error: 'Cookie rules need either key or keyPattern.',
});

/** Runtime schema for response/request/header rules. */
const headerDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.enum(['header', 'responseHeader', 'requestHeader']),
	key: z.string().min(1),
	valuePattern: regexpSchema.optional(),
});

/** Runtime schema for meta tag rules. */
const metaDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('meta'),
	key: z.string().min(1),
	pattern: regexpSchema.optional(),
	valuePattern: regexpSchema.optional(),
});

/** Runtime schema for page-global rules. */
const jsGlobalDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('jsGlobal'),
	property: z.string().min(1),
	valuePattern: regexpSchema.optional(),
});

/** Runtime schema for link element rules. */
const linkDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('link'),
	rel: z.string().min(1).optional(),
	hrefPattern: regexpSchema.optional(),
	typePattern: regexpSchema.optional(),
	as: z.string().min(1).optional(),
	hreflangPattern: regexpSchema.optional(),
	mediaPattern: regexpSchema.optional(),
	valuePattern: regexpSchema.optional(),
});

/** Runtime schema for storage-key rules. */
const storageDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('storage'),
	area: storageAreaSchema.optional(),
	key: z.string().min(1).optional(),
	keyPattern: regexpSchema.optional(),
}).refine((rule) => Boolean(rule.key || rule.keyPattern), {
	error: 'Storage rules need either key or keyPattern.',
});

/** Runtime schema for DNS record rules. */
const dnsDetectionRuleSchema = z.strictObject({
	...ruleBaseShape,
	kind: z.literal('dns'),
	recordType: dnsRecordTypeSchema,
	valuePattern: regexpSchema,
});

/** Runtime schema for every current TypeScript detection rule. */
export const detectionRuleSchema = z.union([
	patternDetectionRuleSchema,
	domDetectionRuleSchema,
	cookieDetectionRuleSchema,
	headerDetectionRuleSchema,
	metaDetectionRuleSchema,
	jsGlobalDetectionRuleSchema,
	linkDetectionRuleSchema,
	storageDetectionRuleSchema,
	dnsDetectionRuleSchema,
]);

/** Runtime schema for explicit graph relationships. */
export const detectionRelationshipSchema = z.strictObject({
	kind: relationshipKindSchema,
	target: z.string().min(1),
	reason: z.string().min(1).optional(),
});

/** Runtime schema for one TypeScript technology definition. */
export const technologyDefinitionSchema = z.strictObject({
	id: z.string().min(1),
	name: z.string().min(1),
	website: z.string().min(1),
	description: z.string().min(1).optional(),
	icon: z.string().min(1).optional(),
	categories: z.array(categoryIdSchema).min(1),
	rules: z.array(detectionRuleSchema),
	implies: z.array(z.string().min(1)).optional(),
	requires: z.array(z.string().min(1)).optional(),
	excludes: z.array(z.string().min(1)).optional(),
	relationships: z.array(detectionRelationshipSchema).optional(),
	priority: z.number().finite().optional(),
	metadata: z.strictObject({
		saas: z.boolean().optional(),
		oss: z.boolean().optional(),
		pricing: z.array(z.string().min(1)).optional(),
		cpe: z.string().min(1).optional(),
	}).optional(),
});

/** Runtime schema for the current registry source envelope. */
export const registrySourceSchema = z.strictObject({
	schemaVersion: z.literal(REGISTRY_SOURCE_SCHEMA_VERSION),
	technologies: z.array(technologyDefinitionSchema),
});

/** Registry source accepted by validation and compiler phases. */
export type RegistrySource = z.output<typeof registrySourceSchema>;

/**
 * Validate current TypeScript technology definitions without throwing.
 *
 * The compiler uses `safeParse` so malformed rule sources become diagnostics
 * that tests and future CLI output can display, rather than exceptions that
 * skip source-map and cross-reference checks.
 */
export function validateRegistrySource(source: unknown): RegistryValidationResult<{
	readonly schemaVersion: RegistrySourceSchemaVersion;
	readonly technologies: TechnologyDefinition[];
}> {
	const result = registrySourceSchema.safeParse(source);
	if (!result.success) {
		return {
			diagnostics: diagnosticsFromZodError(result.error),
			valid: false,
		};
	}

	return {
		value: result.data as { schemaVersion: RegistrySourceSchemaVersion; technologies: TechnologyDefinition[] },
		diagnostics: [],
		valid: true,
	};
}
