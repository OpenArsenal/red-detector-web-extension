import type { MatchObservationBatchInput, ObservationPatternMatch, ObservationPatternMatchBatch } from './observation-match-types';
import type { DetectionRule, TechnologyDefinition } from './types';
import type { NormalizedObservation, NormalizedObservationKind } from '../observations';
import { matchObservationRule } from './observation-matcher';

/**
 * Registry rule prepared for observation-kind and exact-key routing.
 *
 * The matcher keeps the original technology object and rule index so evidence
 * creation stays identical to the sequential matcher. `sequence` records the
 * old nested-loop order, which lets keyed and fallback buckets merge without
 * changing observable match ordering.
 */
export interface IndexedObservationRule {
	/** Technology that owns the indexed rule. */
	readonly technology: TechnologyDefinition;
	/** Rule evaluated when a compatible observation arrives. */
	readonly rule: DetectionRule;
	/** Rule index inside the owning technology definition. */
	readonly ruleIndex: number;
	/** Global registry order used to preserve sequential matcher ordering. */
	readonly sequence: number;
}

/** Read-only rule buckets keyed by normalized observation kind. */
export type IndexedObservationRuleBuckets = Partial<Record<NormalizedObservationKind, readonly IndexedObservationRule[]>>;

/** Read-only exact-key buckets nested below each normalized observation kind. */
export type IndexedObservationKeyBuckets = Partial<Record<NormalizedObservationKind, Readonly<Record<string, readonly IndexedObservationRule[]>>>>;

/**
 * Observation matcher index built from the current technology registry.
 *
 * The index does not compile or rewrite rules. It only pre-routes rules by the
 * observation surfaces and exact lookup keys that are already part of the
 * normalized observation contract, then delegates final rule semantics to the
 * existing one-rule matcher.
 */
export interface ObservationMatcherIndex {
	/** Number of technologies represented by the index. */
	readonly technologyCount: number;
	/** Number of registry rules represented before observation-kind fan-out. */
	readonly ruleCount: number;
	/** Rules that need only observation-kind routing or pattern checks. */
	readonly fallbackRules: IndexedObservationRuleBuckets;
	/** Rules that can be routed by a normalized observation key before matching. */
	readonly keyedRules: IndexedObservationKeyBuckets;
}

/** Input for indexed matching with an optional prebuilt reusable index. */
export interface MatchIndexedObservationBatchInput extends MatchObservationBatchInput {
	/** Existing index to reuse across batches from the same registry. */
	readonly index?: ObservationMatcherIndex;
}

/** Internal mutable form used while building observation-kind buckets. */
type MutableRuleBuckets = Partial<Record<NormalizedObservationKind, IndexedObservationRule[]>>;

/** Internal mutable form used while building exact-key buckets. */
type MutableKeyBuckets = Partial<Record<NormalizedObservationKind, Record<string, IndexedObservationRule[]>>>;

/** Route that places one rule into a kind bucket and, when safe, an exact-key bucket. */
interface ObservationRuleRoute {
	/** Observation kind that can trigger the rule. */
	readonly kind: NormalizedObservationKind;
	/** Canonical key used for exact lookup before running the full rule matcher. */
	readonly key?: string;
}

/**
 * Build an observation matcher index for a registry snapshot.
 *
 * The returned index is safe to reuse for many observation batches as long as
 * the caller keeps the same registry object and rule order. Rebuilding is cheap
 * enough for tests, but runtime paths should reuse the index when matching
 * several batches from the same compiled registry.
 */
export function createObservationMatcherIndex(
	registry: readonly TechnologyDefinition[],
): ObservationMatcherIndex {
	const fallbackRules: MutableRuleBuckets = Object.create(null) as MutableRuleBuckets;
	const keyedRules: MutableKeyBuckets = Object.create(null) as MutableKeyBuckets;
	let sequence = 0;

	for (const technology of registry) {
		for (const [ruleIndex, rule] of technology.rules.entries()) {
			const indexedRule: IndexedObservationRule = { technology, rule, ruleIndex, sequence };
			for (const route of getRuleRoutes(technology.id, ruleIndex, rule)) {
				addIndexedRule({ fallbackRules, keyedRules, route, indexedRule });
			}
			sequence += 1;
		}
	}

	return {
		technologyCount: registry.length,
		ruleCount: sequence,
		fallbackRules: freezeRuleBuckets(fallbackRules),
		keyedRules: freezeKeyBuckets(keyedRules),
	};
}

/**
 * Match observations through a pre-routed registry index.
 *
 * The output shape matches `matchObservationBatch(...)` so downstream evidence,
 * candidate, replay, and popup stages do not need to know whether routing was
 * sequential or indexed.
 */
export function matchIndexedObservationBatch(
	input: MatchIndexedObservationBatchInput,
): ObservationPatternMatchBatch {
	const index = input.index ?? createObservationMatcherIndex(input.registry);
	const matches: ObservationPatternMatch[] = [];

	for (const observation of input.batch.observations) {
		for (const indexedRule of findIndexedObservationRules(index, observation)) {
			const match = matchObservationRule({
				technology: indexedRule.technology,
				rule: indexedRule.rule,
				ruleIndex: indexedRule.ruleIndex,
				observation,
				options: input.options,
			});
			if (match) {
				matches.push(match);
			}
		}
	}

	return {
		target: input.batch.target,
		observedAt: input.batch.observedAt,
		matches,
		evidenceBatch: {
			target: input.batch.target,
			observedAt: input.batch.observedAt,
			entries: matches.map((match) => match.evidence),
		},
	};
}

/**
 * Return candidate rules for one observation without changing match semantics.
 *
 * Exact-key and fallback buckets are merged by original registry sequence. This
 * avoids the subtle bug where all exact-key matches would appear before all
 * wildcard matches, which would break version and evidence ordering compared
 * with the sequential matcher.
 */
export function findIndexedObservationRules(
	index: ObservationMatcherIndex,
	observation: NormalizedObservation,
): readonly IndexedObservationRule[] {
	const fallbackRules = index.fallbackRules[observation.kind] ?? [];
	const key = getObservationRouteKey(observation);
	const keyedRules = key === undefined
		? []
		: index.keyedRules[observation.kind]?.[key] ?? [];

	if (keyedRules.length === 0) {
		return fallbackRules;
	}
	if (fallbackRules.length === 0) {
		return keyedRules;
	}

	return mergeRuleBuckets(keyedRules, fallbackRules);
}

/** Add one indexed rule to its exact-key bucket or kind-only fallback bucket. */
function addIndexedRule(input: {
	readonly fallbackRules: MutableRuleBuckets;
	readonly keyedRules: MutableKeyBuckets;
	readonly route: ObservationRuleRoute;
	readonly indexedRule: IndexedObservationRule;
}): void {
	if (input.route.key === undefined) {
		pushRule(input.fallbackRules, input.route.kind, input.indexedRule);
		return;
	}

	const keyBuckets = input.keyedRules[input.route.kind]
		?? (input.keyedRules[input.route.kind] = Object.create(null) as Record<string, IndexedObservationRule[]>);
	const rules = keyBuckets[input.route.key] ?? (keyBuckets[input.route.key] = []);
	rules.push(input.indexedRule);
}

/** Append a rule to a mutable observation-kind bucket. */
function pushRule(
	buckets: MutableRuleBuckets,
	kind: NormalizedObservationKind,
	rule: IndexedObservationRule,
): void {
	const rules = buckets[kind] ?? (buckets[kind] = []);
	rules.push(rule);
}

/**
 * Convert one detection rule into the observation routes it can receive.
 *
 * `html` and `responseHeader` intentionally fan out. HTML rules can match the
 * full HTML observation or a bounded `htmlMatch` probe, and response-header
 * rules remain compatible with current snapshots that normalize background
 * response headers as `header` observations.
 */
function getRuleRoutes(
	technologyId: string,
	ruleIndex: number,
	rule: DetectionRule,
): readonly ObservationRuleRoute[] {
	switch (rule.kind) {
		case 'dom':
			return [{ kind: 'dom', key: rule.selector }];
		case 'cookie':
			return [{ kind: 'cookie', key: rule.key }];
		case 'header':
		case 'requestHeader':
			return [{ kind: rule.kind, key: canonicalHeaderKey(rule.key) }];
		case 'responseHeader':
			return [
				{ kind: 'responseHeader', key: canonicalHeaderKey(rule.key) },
				{ kind: 'header', key: canonicalHeaderKey(rule.key) },
			];
		case 'meta':
			return [{ kind: 'meta', key: canonicalHeaderKey(rule.key) }];
		case 'jsGlobal':
			return [{ kind: 'jsGlobal', key: rule.property }];
		case 'storage':
			return [{ kind: 'storage', key: rule.key }];
		case 'html':
			return [
				{ kind: 'html' },
				{ kind: 'htmlMatch', key: htmlProbeKey(technologyId, ruleIndex) },
			];
		default:
			return [{ kind: rule.kind }];
	}
}

/** Convert observation keys into the same canonical form used by rule routes. */
function getObservationRouteKey(observation: NormalizedObservation): string | undefined {
	if (!observation.key) {
		return undefined;
	}

	switch (observation.kind) {
		case 'header':
		case 'responseHeader':
		case 'requestHeader':
		case 'meta':
			return canonicalHeaderKey(observation.key);
		default:
			return observation.key;
	}
}

/** Lowercase header-like keys because matching treats those names case-insensitively. */
function canonicalHeaderKey(key: string): string {
	return key.toLowerCase();
}

/** Create the bounded HTML probe key used by the existing observation matcher. */
function htmlProbeKey(technologyId: string, ruleIndex: number): string {
	return `${technologyId}:${ruleIndex}`;
}

/**
 * Merge two sequence-sorted rule buckets while preserving old matcher order.
 *
 * Both buckets are sorted by construction because the index is built in
 * registry order. The merge keeps the hot path linear in the number of
 * candidate rules for the observation instead of sorting a combined array.
 */
function mergeRuleBuckets(
	left: readonly IndexedObservationRule[],
	right: readonly IndexedObservationRule[],
): readonly IndexedObservationRule[] {
	const merged: IndexedObservationRule[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		const leftRule = left[leftIndex]!;
		const rightRule = right[rightIndex]!;
		if (leftRule.sequence <= rightRule.sequence) {
			merged.push(leftRule);
			leftIndex += 1;
		} else {
			merged.push(rightRule);
			rightIndex += 1;
		}
	}

	return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

/** Freeze kind buckets so callers do not mutate a shared runtime index. */
function freezeRuleBuckets(buckets: MutableRuleBuckets): IndexedObservationRuleBuckets {
	for (const rules of Object.values(buckets)) {
		Object.freeze(rules);
	}
	return Object.freeze(buckets);
}

/** Freeze nested exact-key buckets so the index is safe to share across batches. */
function freezeKeyBuckets(buckets: MutableKeyBuckets): IndexedObservationKeyBuckets {
	for (const keyBuckets of Object.values(buckets)) {
		for (const rules of Object.values(keyBuckets)) {
			Object.freeze(rules);
		}
		Object.freeze(keyBuckets);
	}
	return Object.freeze(buckets);
}
