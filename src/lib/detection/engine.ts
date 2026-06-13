import { Graph } from '@dagrejs/graphlib';

import type {
	ConfidenceScore,
	DetectionKind,
	DetectionRelationship,
	DetectionResult,
	DetectionRunOptions,
	DetectionRule,
	HeaderDetectionRule,
	Evidence,
	LinkSignal,
	PageSignals,
	RequestSignal,
	ResourceSignal,
	SiteAnalysis,
	StorageSignals,
	TechnologyDefinition,
	VersionExtraction,
	RuntimeDetectionKind,
} from './types';
import { SOURCE_LIMITS } from './rules';
import { extractVersion } from './version';

const DISPLAY_CONFIDENCE_THRESHOLD = 50;
const IMPLIED_CONFIDENCE = 55;
const ADDITIONAL_SAME_SURFACE_WEIGHT = 0.35;
const ADDITIONAL_DISTINCT_SURFACE_WEIGHT = 0.65;

export const runtimeDetectionKinds = [
	'dom',
	'html',
	'scriptSrc',
	'cookie',
	'header',
	'meta',
	'url',
] as const satisfies readonly RuntimeDetectionKind[];

/**
 * Pure detector entrypoint. Browser APIs stay in content/background code so this
 * function can be tested with deterministic fixtures and reused safely.
 */
export function analyzeSite(
	signals: PageSignals,
	registry: TechnologyDefinition[],
	options: DetectionRunOptions = {},
): SiteAnalysis {
	const candidates = registry
		.map((definition) => detectTechnology(definition, signals, options))
		.filter((result): result is DetectionResult => Boolean(result));

	const results = applyRelationships(candidates, registry)
		.filter((result) => result.confidence.value >= DISPLAY_CONFIDENCE_THRESHOLD)
		.sort(compareDetectionResults(buildRegistryOrder(registry)));

	return {
		url: signals.url,
		hostname: signals.hostname,
		analyzedAt: Date.now(),
		source: 'fresh',
		results,
		errors: [],
	};
}

function detectTechnology(
	definition: TechnologyDefinition,
	signals: PageSignals,
	options: DetectionRunOptions,
): DetectionResult | null {
	const evidence = definition.rules
		.map((rule, ruleIndex) => matchRule(definition.id, ruleIndex, rule, signals, options))
		.filter((item): item is Evidence => Boolean(item));

	if (!evidence.length) {
		return null;
	}

	const confidenceValue = combineEvidenceConfidence(evidence);
	const version = evidence.find((item) => item.version)?.version;

	return {
		technologyId: definition.id,
		name: definition.name,
		website: definition.website,
		description: definition.description,
		icon: definition.icon,
		categories: definition.categories,
		confidence: toConfidenceScore(confidenceValue),
		version,
		evidence,
	};
}

/**
 * Combine signals without letting many weak matches from one surface become a
 * fake high-confidence claim. The best signal carries full weight, other
 * distinct surfaces help, and repeated matches from the same surface help less.
 */
function combineEvidenceConfidence(evidence: Evidence[]): number {
	const sorted = [...evidence].sort((a, b) => b.confidence - a.confidence);
	const [best, ...rest] = sorted;
	if (!best) {
		return 0;
	}

	const seenKinds = new Set<DetectionKind>([best.kind]);
	let score = Math.max(0, best.confidence);

	for (const item of rest) {
		const weight = seenKinds.has(item.kind)
			? ADDITIONAL_SAME_SURFACE_WEIGHT
			: ADDITIONAL_DISTINCT_SURFACE_WEIGHT;
		score += Math.max(0, item.confidence) * weight;
		seenKinds.add(item.kind);
	}

	return clampConfidence(score);
}

/**
 * Match one normalized signal rule. Evidence is intentionally small/redacted so
 * cached analyses do not become raw page-content storage.
 */
function matchRule(
	technologyId: string,
	ruleIndex: number,
	rule: DetectionRule,
	signals: PageSignals,
	options: DetectionRunOptions,
): Evidence | null {
	if (!canExecuteRule(rule, signals, options)) {
		return null;
	}

	const confidence = rule.confidence ?? 100;
	const metadata = ruleEvidenceMetadata(rule);

	switch (rule.kind) {
		case 'dom': {
			if (!rule.selector || !signals.dom.selectors[rule.selector]) {
				return null;
			}

			return {
				kind: 'dom',
				confidence,
				ruleDescription: rule.description,
				matchedValue: rule.selector,
				...metadata,
			};
		}

		case 'html': {
			const htmlMatch = signals.htmlMatches?.[htmlProbeKey(technologyId, ruleIndex)];
			if (htmlMatch) {
				return {
					kind: 'html',
					matchedValue: safeMatchedValue(htmlMatch.matchedValue),
					confidence,
					version: extractVersion(
						rule.version,
						[htmlMatch.matchedValue, ...htmlMatch.captures] as unknown as RegExpMatchArray,
						htmlMatch.matchedValue,
					),
					ruleDescription: rule.description,
					...metadata,
				};
			}

			return matchPattern(rule, signals.html, confidence, metadata);
		}

		case 'scriptSrc':
			return matchStringList(rule, signals.scripts, confidence, metadata);

		case 'stylesheetHref':
			return matchStringList(rule, signals.stylesheets, confidence, metadata);

		case 'resourceUrl':
			return matchResourceSignals(rule, signals.resources, confidence, metadata);

		case 'requestUrl':
			return matchRequestSignals(rule, signals.requests, confidence, metadata);

		case 'scriptContent':
			return matchStringList(rule, signals.scriptContents, confidence, metadata);

		case 'stylesheetContent':
			return matchStringList(rule, signals.stylesheetContents, confidence, metadata);

		case 'cookie':
			return matchCookieRule(rule, signals.cookies, confidence, metadata);

		case 'header':
		case 'responseHeader':
			return matchHeaderRule(rule, signals.headers, confidence, metadata);

		case 'requestHeader':
			return matchRequestHeaderRule(rule, signals.requests, confidence, metadata);

		case 'meta':
			return matchMetaRule(rule, signals, confidence, metadata);

		case 'jsGlobal':
			return matchGlobalRule(rule, signals.jsGlobals, confidence, metadata);

		case 'link':
			return matchLinkRule(rule, signals.links, confidence, metadata);

		case 'storage':
			return matchStorageRule(rule, signals.storage, confidence, metadata);

		case 'url':
			return matchPattern(rule, signals.url, confidence, metadata);

		case 'text':
			return matchPattern(rule, signals.html, confidence, metadata);

		case 'robots':
			return matchPattern(rule, signals.robotsTxt, confidence, metadata);

		case 'dns':
			return matchDnsRule(rule, signals.dnsRecords, confidence, metadata);

		case 'certIssuer':
			return matchPattern(rule, signals.certIssuer, confidence, metadata);

		case 'probe':
			return matchStringList(rule, signals.probeResults, confidence, metadata);

		default:
			return null;
	}
}

function canExecuteRule(
	rule: DetectionRule,
	signals: PageSignals,
	options: DetectionRunOptions,
): boolean {
	if (rule.id && options.disabledRuleIds?.includes(rule.id)) {
		return false;
	}

	if (options.disabledKinds?.includes(rule.kind)) {
		return false;
	}

	if (!runtimeDetectionKinds.includes(rule.kind as (typeof runtimeDetectionKinds)[number])) {
		return false;
	}

	return true;
}

function ruleEvidenceMetadata(_rule: DetectionRule): Pick<Evidence, 'direct'> {
	return { direct: true };
}

type PatternMatchRule = {
	kind: DetectionKind;
	pattern?: RegExp;
	version?: VersionExtraction;
	description?: string;
};

function matchStringList(
	rule: PatternMatchRule,
	values: readonly string[],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	for (const value of values) {
		const match = matchPattern(rule, value, confidence, metadata);
		if (match) {
			return match;
		}
	}
	return null;
}

function matchResourceSignals(
	rule: PatternMatchRule,
	resources: readonly ResourceSignal[],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	return matchStringList(rule, resources.map((resource) => resource.url), confidence, metadata);
}

function matchRequestSignals(
	rule: PatternMatchRule,
	requests: readonly RequestSignal[],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	return matchStringList(rule, requests.map((request) => request.url), confidence, metadata);
}

function matchCookieRule(
	rule: Extract<DetectionRule, { kind: 'cookie' }>,
	cookies: Record<string, true>,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	for (const cookieName of Object.keys(cookies)) {
		if (rule.key && cookieName === rule.key) {
			return {
				kind: 'cookie',
				matchedValue: safeMatchedValue(cookieName),
				confidence,
				ruleDescription: rule.description,
				...metadata,
			};
		}

		if (rule.keyPattern?.test(cookieName)) {
			return {
				kind: 'cookie',
				matchedValue: safeMatchedValue(cookieName),
				confidence,
				ruleDescription: rule.description,
				...metadata,
			};
		}
	}

	return null;
}

function matchHeaderRule(
	rule: HeaderDetectionRule,
	headers: Record<string, string>,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	const value = headers[rule.key.toLowerCase()];
	if (value === undefined) {
		return null;
	}

	return rule.valuePattern
		? matchPattern({ ...rule, pattern: rule.valuePattern }, value, confidence, metadata)
		: {
				kind: rule.kind,
				matchedValue: safeMatchedValue(rule.key),
				confidence,
				ruleDescription: rule.description,
				...metadata,
			};
}

function matchRequestHeaderRule(
	rule: HeaderDetectionRule,
	requests: readonly RequestSignal[],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	for (const request of requests) {
		const value = request.requestHeaders?.[rule.key.toLowerCase()];
		if (value === undefined) {
			continue;
		}

		return rule.valuePattern
			? matchPattern({ ...rule, pattern: rule.valuePattern }, value, confidence, metadata)
			: {
					kind: 'requestHeader',
					matchedValue: safeMatchedValue(rule.key),
					confidence,
					ruleDescription: rule.description,
					...metadata,
				};
	}

	return null;
}

function matchMetaRule(
	rule: Extract<DetectionRule, { kind: 'meta' }>,
	signals: PageSignals,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	const values = signals.meta[rule.key.toLowerCase()] ?? [];
	const pattern = rule.valuePattern ?? rule.pattern;

	for (const value of values) {
		if (!pattern) {
			return {
				kind: 'meta',
				matchedValue: safeMatchedValue(value),
				confidence,
				ruleDescription: rule.description,
				...metadata,
			};
		}

		const match = matchPattern({ ...rule, pattern }, value, confidence, metadata);
		if (match) {
			return match;
		}
	}
	return null;
}

function matchGlobalRule(
	rule: Extract<DetectionRule, { kind: 'jsGlobal' }>,
	globals: Record<string, unknown>,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	const value = globals[rule.property];
	if (value === undefined || value === null) {
		return null;
	}

	const valueString = String(value);
	if (rule.valuePattern) {
		return matchPattern({ ...rule, pattern: rule.valuePattern }, valueString, confidence, metadata);
	}

	return {
		kind: rule.kind,
		matchedValue: safeMatchedValue(rule.property),
		confidence,
		ruleDescription: rule.description,
		...metadata,
	};
}

function matchLinkRule(
	rule: Extract<DetectionRule, { kind: 'link' }>,
	links: readonly LinkSignal[],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	for (const link of links) {
		if (rule.rel && !link.rel.toLowerCase().split(/\s+/).includes(rule.rel.toLowerCase())) {
			continue;
		}

		if (rule.hrefPattern && !rule.hrefPattern.test(link.href)) {
			continue;
		}

		if (rule.typePattern && !rule.typePattern.test(link.type ?? '')) {
			continue;
		}

		const combined = `${link.rel} ${link.type ?? ''} ${link.href}`.trim();
		if (rule.valuePattern) {
			const match = matchPattern(
				{ kind: 'link', pattern: rule.valuePattern, version: rule.version, description: rule.description },
				combined,
				confidence,
				metadata,
			);
			if (!match) {
				continue;
			}
			return match;
		}

		return {
			kind: 'link',
			matchedValue: safeMatchedValue(combined),
			confidence,
			ruleDescription: rule.description,
			...metadata,
		};
	}

	return null;
}

function matchStorageRule(
	rule: Extract<DetectionRule, { kind: 'storage' }>,
	storage: StorageSignals,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	const areas = rule.area ? [rule.area] : (['localStorage', 'sessionStorage'] as const);

	for (const area of areas) {
		for (const key of Object.keys(storage[area])) {
			if ((rule.key && key === rule.key) || rule.keyPattern?.test(key)) {
				return {
					kind: 'storage',
					matchedValue: safeMatchedValue(`${area}:${key}`),
					confidence,
					ruleDescription: rule.description,
					...metadata,
				};
			}
		}
	}

	return null;
}

function matchDnsRule(
	rule: Extract<DetectionRule, { kind: 'dns' }>,
	dnsRecords: PageSignals['dnsRecords'],
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	const values = dnsRecords[rule.recordType] ?? [];
	for (const value of values) {
		const match = value.match(rule.valuePattern);
		if (!match) {
			continue;
		}

		return {
			kind: 'dns',
			matchedValue: safeMatchedValue(match[0]),
			confidence,
			version: extractVersion(rule.version, match, match[0]),
			ruleDescription: rule.description,
			...metadata,
		};
	}
	return null;
}

function matchPattern(
	rule: PatternMatchRule,
	value: string,
	confidence: number,
	metadata: Pick<Evidence, 'direct'>,
): Evidence | null {
	if (!rule.pattern) {
		return null;
	}

	const match = value.match(rule.pattern);
	if (!match) {
		return null;
	}

	return {
		kind: rule.kind,
		matchedValue: safeMatchedValue(match[0]),
		confidence,
		version: extractVersion(rule.version, match, match[0]),
		ruleDescription: rule.description,
		...metadata,
	};
}

function htmlProbeKey(technologyId: string, ruleIndex: number): string {
	return `${technologyId}:${ruleIndex}`;
}

function safeMatchedValue(value: string): string {
	return value.trim().slice(0, SOURCE_LIMITS.evidenceValueChars);
}

function clampConfidence(value: number): number {
	return Math.max(0, Math.min(100, Math.round(value)));
}

function toConfidenceScore(value: number): ConfidenceScore {
	const clamped = clampConfidence(value);
	if (clamped >= 100) {
		return { value: clamped, level: 'certain' };
	}
	if (clamped >= 80) {
		return { value: clamped, level: 'high' };
	}
	if (clamped >= 50) {
		return { value: clamped, level: 'medium' };
	}
	return { value: clamped, level: 'low' };
}

type RelationshipGraph = {
	definitionsById: Map<string, TechnologyDefinition>;
	registryOrderById: Map<string, number>;
	implies: Graph;
	requires: Graph;
	excludes: Graph;
};

type RelationshipNode = {
	result: DetectionResult;
	inferred: boolean;
	registryOrder: number;
};

function applyRelationships(
	results: DetectionResult[],
	registry: TechnologyDefinition[],
): DetectionResult[] {
	const graph = buildRelationshipGraph(registry);
	const accepted = new Map<string, RelationshipNode>();

	for (const result of results) {
		accepted.set(result.technologyId, {
			result,
			inferred: false,
			registryOrder: graph.registryOrderById.get(result.technologyId) ?? Number.MAX_SAFE_INTEGER,
		});
	}

	resolveRelationshipsToFixedPoint(accepted, graph);

	return Array.from(accepted.values())
		.map((node) => node.result)
		.sort(compareDetectionResults(graph.registryOrderById));
}

function buildRegistryOrder(registry: TechnologyDefinition[]): Map<string, number> {
	return new Map(registry.map((definition, index) => [definition.id, index]));
}

function buildRelationshipGraph(registry: TechnologyDefinition[]): RelationshipGraph {
	const definitionsById = new Map<string, TechnologyDefinition>();
	const registryOrderById = new Map<string, number>();
	const implies = createDirectedRelationshipGraph(registry);
	const requires = createDirectedRelationshipGraph(registry);
	const excludes = createDirectedRelationshipGraph(registry);

	registry.forEach((definition, index) => {
		definitionsById.set(definition.id, definition);
		registryOrderById.set(definition.id, index);
		addRelationshipEdges(implies, definition.id, definition.implies ?? []);
		addRelationshipEdges(requires, definition.id, definition.requires ?? []);
		addRelationshipEdges(excludes, definition.id, definition.excludes ?? []);

		for (const relationship of definition.relationships ?? []) {
			addExplicitRelationship(definition.id, relationship, {
				implies,
				requires,
				excludes,
			});
		}
	});

	return {
		definitionsById,
		registryOrderById,
		implies,
		requires,
		excludes,
	};
}

function createDirectedRelationshipGraph(registry: TechnologyDefinition[]): Graph {
	const graph = new Graph({ directed: true });
	for (const definition of registry) {
		graph.setNode(definition.id);
	}
	return graph;
}

function addExplicitRelationship(
	sourceId: string,
	relationship: DetectionRelationship,
	graphs: {
		implies: Graph;
		requires: Graph;
		excludes: Graph;
	},
): void {
	const target = relationship.target;
	switch (relationship.kind) {
		case 'implies':
			graphs.implies.setEdge(sourceId, target, relationship);
			break;
		case 'requires':
			graphs.requires.setEdge(sourceId, target, relationship);
			break;
		case 'excludes':
			graphs.excludes.setEdge(sourceId, target, relationship);
			break;
	}
}

function addRelationshipEdges(graph: Graph, sourceId: string, targetIds: string[]): void {
	for (const targetId of targetIds) {
		graph.setEdge(sourceId, targetId);
	}
}

function relationshipTargets(
	graph: Graph,
	sourceId: string,
	registryOrderById: Map<string, number>,
): string[] {
	return ((graph.successors(sourceId) ?? []) as string[]).sort(
		(a: string, b: string) =>
			(registryOrderById.get(a) ?? Number.MAX_SAFE_INTEGER) -
				(registryOrderById.get(b) ?? Number.MAX_SAFE_INTEGER) || a.localeCompare(b),
	);
}

function resolveRelationshipsToFixedPoint(
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): void {
	let changed = true;

	while (changed) {
		changed = false;
		changed = expandImpliedTechnologies(accepted, graph) || changed;
		changed = pruneUnsatisfiedRequirements(accepted, graph) || changed;
		changed = pruneOrphanedImpliedTechnologies(accepted, graph) || changed;
		changed = applyExclusions(accepted, graph) || changed;
	}
}

function pruneUnsatisfiedRequirements(
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	let changed = false;

	for (const id of Array.from(accepted.keys())) {
		const requiredIds = relationshipTargets(graph.requires, id, graph.registryOrderById);
		const hasAllRequirements = requiredIds.every((requiredId) => accepted.has(requiredId));

		if (!hasAllRequirements) {
			accepted.delete(id);
			changed = true;
		}
	}

	return changed;
}

function pruneOrphanedImpliedTechnologies(
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	let changed = false;

	for (const [id, node] of Array.from(accepted.entries())) {
		if (!node.inferred) {
			continue;
		}

		const hasAcceptedSource = ((graph.implies.predecessors(id) ?? []) as string[]).some((sourceId) =>
			accepted.has(sourceId),
		);

		if (!hasAcceptedSource) {
			accepted.delete(id);
			changed = true;
		}
	}

	return changed;
}

function expandImpliedTechnologies(
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	let changed = false;

	for (const sourceId of Array.from(accepted.keys())) {
		const sourceDefinition = graph.definitionsById.get(sourceId);
		if (!sourceDefinition) {
			continue;
		}

		for (const impliedId of relationshipTargets(graph.implies, sourceId, graph.registryOrderById)) {
			if (accepted.has(impliedId)) {
				continue;
			}

			const impliedDefinition = graph.definitionsById.get(impliedId);
			if (!impliedDefinition) {
				continue;
			}

			if (!hasSatisfiedRequirements(impliedDefinition, accepted, graph)) {
				continue;
			}

			const impliedNode: RelationshipNode = {
				result: createImpliedResult(impliedDefinition, sourceDefinition),
				inferred: true,
				registryOrder: graph.registryOrderById.get(impliedId) ?? Number.MAX_SAFE_INTEGER,
			};

			if (wouldLoseAcceptedExclusionConflict(impliedId, impliedNode, accepted, graph)) {
				continue;
			}

			accepted.set(impliedId, impliedNode);
			changed = true;
		}
	}

	return changed;
}

function hasSatisfiedRequirements(
	definition: TechnologyDefinition,
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	return relationshipTargets(graph.requires, definition.id, graph.registryOrderById).every(
		(requiredId) => accepted.has(requiredId),
	);
}

function wouldLoseAcceptedExclusionConflict(
	id: string,
	node: RelationshipNode,
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	for (const [acceptedId, acceptedNode] of accepted.entries()) {
		if (graph.excludes.hasEdge(acceptedId, id)) {
			const loserId = chooseConflictLoser(acceptedId, acceptedNode, id, node);
			if (loserId === id) {
				return true;
			}
		}

		if (graph.excludes.hasEdge(id, acceptedId)) {
			const loserId = chooseConflictLoser(id, node, acceptedId, acceptedNode);
			if (loserId === id) {
				return true;
			}
		}
	}

	return false;
}

function applyExclusions(
	accepted: Map<string, RelationshipNode>,
	graph: RelationshipGraph,
): boolean {
	let changed = false;
	let localChange = true;

	while (localChange) {
		localChange = false;

		for (const [sourceId, sourceNode] of Array.from(accepted.entries())) {
			for (const excludedId of relationshipTargets(graph.excludes, sourceId, graph.registryOrderById)) {
				const excludedNode = accepted.get(excludedId);
				if (!excludedNode) {
					continue;
				}

				const loserId = chooseConflictLoser(sourceId, sourceNode, excludedId, excludedNode);
				accepted.delete(loserId);
				changed = true;
				localChange = true;

				if (loserId === sourceId) {
					break;
				}
			}
		}
	}

	return changed;
}

function chooseConflictLoser(
	sourceId: string,
	sourceNode: RelationshipNode,
	excludedId: string,
	excludedNode: RelationshipNode,
): string {
	if (sourceNode.inferred !== excludedNode.inferred) {
		return sourceNode.inferred ? sourceId : excludedId;
	}

	const confidenceDifference =
		sourceNode.result.confidence.value - excludedNode.result.confidence.value;
	if (confidenceDifference !== 0) {
		return confidenceDifference > 0 ? excludedId : sourceId;
	}

	return sourceNode.registryOrder <= excludedNode.registryOrder ? excludedId : sourceId;
}

function createImpliedResult(
	definition: TechnologyDefinition,
	sourceDefinition: TechnologyDefinition,
): DetectionResult {
	return {
		technologyId: definition.id,
		name: definition.name,
		website: definition.website,
		description: definition.description,
		icon: definition.icon,
		categories: definition.categories,
		confidence: toConfidenceScore(IMPLIED_CONFIDENCE),
		inferred: true,
		evidence: [
			{
				kind: 'relationship',
				confidence: IMPLIED_CONFIDENCE,
				ruleDescription: `Implied by ${sourceDefinition.name}`,
				matchedValue: `Implied by ${sourceDefinition.name}`,
				direct: false,
				sourceTechnologyId: sourceDefinition.id,
			},
		],
	};
}

function compareDetectionResults(registryOrderById: Map<string, number>) {
	return (a: DetectionResult, b: DetectionResult): number =>
		b.confidence.value - a.confidence.value ||
		(registryOrderById.get(a.technologyId) ?? Number.MAX_SAFE_INTEGER) -
			(registryOrderById.get(b.technologyId) ?? Number.MAX_SAFE_INTEGER) ||
		a.name.localeCompare(b.name);
}
