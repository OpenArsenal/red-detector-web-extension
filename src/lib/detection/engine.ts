import type {
	ConfidenceScore,
	DetectionResult,
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
			if (!rule.key || signals.cookies[rule.key] === undefined) {
				return null;
			}

			const cookieSignal = signals.cookies[rule.key];
			if (rule.valuePattern && !rule.valuePattern.test(cookieSignal)) {
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

function matchPattern(
	rule: DetectionRule,
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

function applyRelationships(
	results: DetectionResult[],
	registry: TechnologyDefinition[],
): DetectionResult[] {
	const byId = new Map(results.map((result) => [result.technologyId, result]));
	const definitionsById = new Map(registry.map((definition) => [definition.id, definition]));

	for (const result of results) {
		const definition = definitionsById.get(result.technologyId);

		for (const excludedId of definition?.excludes ?? []) {
			byId.delete(excludedId);
		}
	}

	return Array.from(byId.values()).sort(
		(a, b) => b.confidence.value - a.confidence.value || a.name.localeCompare(b.name),
	);
}
