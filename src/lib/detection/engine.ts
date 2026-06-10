import { Graph } from '@dagrejs/graphlib';

import type {
	ConfidenceScore,
	DetectionResult,
	DetectionKind,
	DetectionRule,
	Evidence,
	PageSignals,
	SiteAnalysis,
	TechnologyDefinition,
} from './types';
import { SOURCE_LIMITS } from './rules';
import { extractVersion } from './version';

/**
 * Pure detector entrypoint. Browser APIs stay in content/background code so this
 * function can be tested with deterministic fixtures and reused safely.
 */
export function analyzeSite(
	signals: PageSignals,
	registry: TechnologyDefinition[],
): SiteAnalysis {
	const results = registry
		.map((definition) => detectTechnology(definition, signals))
		.filter((result): result is DetectionResult => Boolean(result))
		.filter((result) => result.confidence.value >= 50)
		.sort((a, b) => b.confidence.value - a.confidence.value || a.name.localeCompare(b.name));

	return {
		url: signals.url,
		hostname: signals.hostname,
		analyzedAt: Date.now(),
		source: 'fresh',
		results: applyRelationships(results, registry),
		errors: [],
	};
}

function detectTechnology(
	definition: TechnologyDefinition,
	signals: PageSignals,
): DetectionResult | null {
	const evidence = definition.rules
		.map((rule) => matchRule(rule, signals))
		.filter((item): item is Evidence => Boolean(item));

	if (!evidence.length) {
		return null;
	}

	const confidenceValue = Math.min(
		100,
		evidence.reduce((sum, item) => sum + item.confidence, 0),
	);
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
 * Match one normalized signal rule. Evidence is intentionally small/redacted so
 * cached analyses do not become raw page-content storage.
 */
function matchRule(rule: DetectionRule, signals: PageSignals): Evidence | null {
	const confidence = rule.confidence ?? 100;

	switch (rule.kind) {
		case 'dom': {
			if (!rule.selector) {
				return null;
			}

			return signals.dom.selectors[rule.selector]
				? { kind: 'dom', confidence, ruleDescription: rule.description }
				: null;
		}

		case 'html':
			return matchPattern(rule, signals.html, confidence);

		case 'scriptSrc': {
			for (const src of signals.scripts) {
				const match = matchPattern(rule, src, confidence);
				if (match) {
					return match;
				}
			}
			return null;
		}

		case 'cookie': {
			if (!rule.key || signals.cookies[rule.key] !== true) {
				return null;
			}

			return {
				kind: 'cookie',
				matchedValue: safeMatchedValue(rule.key),
				confidence,
				ruleDescription: rule.description,
			};
		}

		case 'header': {
			if (!rule.key) {
				return null;
			}

			const value = signals.headers[rule.key.toLowerCase()];
			if (value === undefined) {
				return null;
			}

			return rule.valuePattern
				? matchPattern({ ...rule, pattern: rule.valuePattern }, value, confidence)
				: {
						kind: 'header',
						matchedValue: safeMatchedValue(rule.key),
						confidence,
						ruleDescription: rule.description,
					};
		}

		case 'meta': {
			if (!rule.key) {
				return null;
			}

			const values = signals.meta[rule.key.toLowerCase()] ?? [];
			const pattern = rule.valuePattern ?? rule.pattern;

			for (const value of values) {
				if (!pattern) {
					return {
						kind: 'meta',
						matchedValue: safeMatchedValue(value),
						confidence,
						ruleDescription: rule.description,
					};
				}

				const match = matchPattern({ ...rule, pattern }, value, confidence);
				if (match) {
					return match;
				}
			}
			return null;
		}

		case 'jsGlobal': {
			if (!rule.property) {
				return null;
			}

			const value = signals.jsGlobals[rule.property];
			if (value === undefined || value === null) {
				return null;
			}

			const valueString = String(value);
			if (rule.valuePattern) {
				return matchPattern({ ...rule, pattern: rule.valuePattern }, valueString, confidence);
			}

			return {
				kind: 'jsGlobal',
				matchedValue: safeMatchedValue(rule.property),
				confidence,
				ruleDescription: rule.description,
			};
		}

		case 'url':
			return matchPattern(rule, signals.url, confidence);

		default:
			return null;
	}
}

type PatternMatchRule = {
	kind: DetectionKind;
	pattern?: RegExp;
	versionTemplate?: string;
	description?: string;
};

function matchPattern(
	rule: PatternMatchRule,
	value: string,
	confidence: number,
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
		version: extractVersion(rule.versionTemplate, match),
		ruleDescription: rule.description,
	};
}

function safeMatchedValue(value: string): string {
	return value.trim().slice(0, SOURCE_LIMITS.evidenceValueChars);
}

function toConfidenceScore(value: number): ConfidenceScore {
	if (value >= 100) {
		return { value, level: 'certain' };
	}
	if (value >= 80) {
		return { value, level: 'high' };
	}
	if (value >= 50) {
		return { value, level: 'medium' };
	}
	return { value, level: 'low' };
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
			registryOrder:
				graph.registryOrderById.get(result.technologyId) ?? Number.MAX_SAFE_INTEGER,
		});
	}

	resolveRelationshipsToFixedPoint(accepted, graph);

	return Array.from(accepted.values())
		.map((node) => node.result)
		.sort(compareDetectionResults(graph.registryOrderById));
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
	return (graph.successors(sourceId) ?? []).sort(
		(a, b) =>
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
		const requiredIds = relationshipTargets(
			graph.requires,
			id,
			graph.registryOrderById,
		);
		const hasAllRequirements = requiredIds.every((requiredId) =>
			accepted.has(requiredId),
		);

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

		const hasAcceptedSource = (graph.implies.predecessors(id) ?? []).some(
			(sourceId) => accepted.has(sourceId),
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

		for (const impliedId of relationshipTargets(
			graph.implies,
			sourceId,
			graph.registryOrderById,
		)) {
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
				registryOrder:
					graph.registryOrderById.get(impliedId) ?? Number.MAX_SAFE_INTEGER,
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
	return relationshipTargets(
		graph.requires,
		definition.id,
		graph.registryOrderById,
	).every((requiredId) => accepted.has(requiredId));
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
			for (const excludedId of relationshipTargets(
				graph.excludes,
				sourceId,
				graph.registryOrderById,
			)) {
				const excludedNode = accepted.get(excludedId);
				if (!excludedNode) {
					continue;
				}

				const loserId = chooseConflictLoser(
					sourceId,
					sourceNode,
					excludedId,
					excludedNode,
				);
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
		confidence: { value: 60, level: 'medium' },
		evidence: [
			{
				kind: 'html',
				confidence: 60,
				ruleDescription: `Implied by ${sourceDefinition.name}`,
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
