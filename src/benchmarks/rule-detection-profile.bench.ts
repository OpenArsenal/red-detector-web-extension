import { afterAll, bench, describe } from 'vitest';

import { matchObservationRule } from '@/lib/detection/observation-matcher';
import { technologyDefinitions } from '@/lib/detection/rules.ts';
import type { DetectionRule, TechnologyDefinition } from '@/lib/detection/types';
import type { NormalizedObservationKind } from '@/lib/observations';
import {
	makeNextHydrationPayload,
	makeReactRouterHydrationPayload,
	makeRulePerformanceObservation,
	RULE_PERFORMANCE_FIXTURES,
	type RulePerformanceFixture,
} from '../tests/support/rule-performance-fixtures';

const BENCHMARK_OPTIONS = {
	time: 250,
	warmupTime: 0,
	iterations: 1,
	warmupIterations: 0,
} as const;

const PROFILED_KINDS = new Set<NormalizedObservationKind>([
	'scriptContent',
	'stylesheetContent',
	'html',
	'text',
]);

const ENABLE_REGISTRY_WIDE_SCAN = process.env.RED_DETECTOR_RULE_BENCH_REGISTRY_SCAN === '1';
const SLOW_RULE_REPORT_LIMIT = 20;
const registry = technologyDefinitions;
const profiledRules = collectProfiledRules(registry);
const fixtureTargets = RULE_PERFORMANCE_FIXTURES.map((fixture) => ({
	fixture,
	...findRule(registry, fixture.technologyId, fixture.ruleId),
}));

let consumedMatchState = 0;
const slowestByKey = new Map<string, RuleTimingRecord>();

describe('rule detection profile', () => {
	describe('curated passing and failing samples', () => {
		for (const target of fixtureTargets) {
			const label = `${target.fixture.ruleId} ${target.fixture.note}`;

			bench(`passing sample: ${label}`, () => {
				consumeProfiledRule(target, 'passing', target.fixture.passValue);
			}, BENCHMARK_OPTIONS);

			bench(`failing large hydration sample: ${label}`, () => {
				consumeProfiledRule(target, 'failing', target.fixture.failValue);
			}, BENCHMARK_OPTIONS);
		}
	});

	if (ENABLE_REGISTRY_WIDE_SCAN) {
		describe('registry-wide failing hydration scans', () => {
			bench(`React Router hydration miss across ${profiledRules.length} content rules`, () => {
				profileRulesAgainstPayload('react-router-hydration-miss', makeReactRouterHydrationPayload());
			}, BENCHMARK_OPTIONS);

			bench(`Next hydration miss across ${profiledRules.length} content rules`, () => {
				profileRulesAgainstPayload('next-hydration-miss', makeNextHydrationPayload());
			}, BENCHMARK_OPTIONS);
		});
	}
});

afterAll(() => {
	const slowest = [...slowestByKey.values()]
		.sort((left, right) => right.durationMs - left.durationMs)
		.slice(0, SLOW_RULE_REPORT_LIMIT);

	if (slowest.length === 0) {
		return;
	}

	console.log('\n[red-detector][rule-profile] slowest rule evaluations');
	for (const record of slowest) {
		console.log([
			`durationMs=${record.durationMs.toFixed(1)}`,
			`scenario=${record.scenario}`,
			`matched=${record.matched}`,
			`technologyId=${record.technologyId}`,
			`ruleId=${record.ruleId}`,
			`kind=${record.kind}`,
		].join(' '));
	}
});

interface ProfiledRule {
	readonly technology: TechnologyDefinition;
	readonly rule: DetectionRule;
	readonly ruleIndex: number;
}

interface RuleTimingRecord {
	readonly key: string;
	readonly scenario: string;
	readonly technologyId: string;
	readonly ruleId: string;
	readonly kind: NormalizedObservationKind;
	readonly matched: boolean;
	readonly durationMs: number;
}

function consumeProfiledRule(
	target: ProfiledRule & { readonly fixture: RulePerformanceFixture },
	scenario: 'passing' | 'failing',
	value: string,
): void {
	const record = profileRule({
		target,
		scenario: `${scenario}:${target.fixture.ruleId}`,
		value,
	});
	consumeMatchState(record.matched ? 1 : 0);
}

function profileRulesAgainstPayload(scenario: string, payload: string): void {
	let matchCount = 0;
	for (const target of profiledRules) {
		const record = profileRule({ target, scenario, value: payload });
		if (record.matched) {
			matchCount += 1;
		}
	}
	consumeMatchState(matchCount);
}

function profileRule(input: {
	readonly target: ProfiledRule;
	readonly scenario: string;
	readonly value: string;
}): RuleTimingRecord {
	const observation = makeRulePerformanceObservation(input.target.rule.kind, input.value);
	const startedAt = performance.now();
	const match = matchObservationRule({
		technology: input.target.technology,
		rule: input.target.rule,
		ruleIndex: input.target.ruleIndex,
		observation,
	});
	const durationMs = performance.now() - startedAt;
	const record: RuleTimingRecord = {
		key: `${input.scenario}:${input.target.technology.id}:${getRuleId(input.target.rule, input.target.ruleIndex)}`,
		scenario: input.scenario,
		technologyId: input.target.technology.id,
		ruleId: getRuleId(input.target.rule, input.target.ruleIndex),
		kind: input.target.rule.kind,
		matched: Boolean(match),
		durationMs,
	};
	recordSlowRule(record);
	return record;
}

function collectProfiledRules(registry: readonly TechnologyDefinition[]): readonly ProfiledRule[] {
	const targets: ProfiledRule[] = [];
	for (const technology of registry) {
		for (const [ruleIndex, rule] of technology.rules.entries()) {
			if (!PROFILED_KINDS.has(rule.kind)) {
				continue;
			}
			if (!hasPatternLikeMatcher(rule)) {
				continue;
			}
			targets.push({ technology, rule, ruleIndex });
		}
	}
	return targets;
}

function findRule(
	registry: readonly TechnologyDefinition[],
	technologyId: string,
	ruleId: string,
): ProfiledRule {
	const technology = registry.find((candidate) => candidate.id === technologyId);
	if (!technology) {
		throw new Error(`Missing technology fixture target: ${technologyId}`);
	}

	const ruleIndex = technology.rules.findIndex((candidate) => candidate.id === ruleId);
	const rule = technology.rules[ruleIndex];
	if (!rule) {
		throw new Error(`Missing rule fixture target: ${technologyId}/${ruleId}`);
	}

	return { technology, rule, ruleIndex };
}

function hasPatternLikeMatcher(rule: DetectionRule): boolean {
	return 'pattern' in rule && rule.pattern instanceof RegExp;
}

function getRuleId(rule: DetectionRule, ruleIndex: number): string {
	return rule.id ?? `rule:${ruleIndex}`;
}

function recordSlowRule(record: RuleTimingRecord): void {
	const existing = slowestByKey.get(record.key);
	if (!existing || record.durationMs > existing.durationMs) {
		slowestByKey.set(record.key, record);
	}
}

function consumeMatchState(value: number): void {
	consumedMatchState = (consumedMatchState + value) % Number.MAX_SAFE_INTEGER;
}
