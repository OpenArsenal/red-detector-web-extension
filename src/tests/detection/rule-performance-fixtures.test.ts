import { describe, expect, it } from 'vitest';

import { matchObservationRule } from '@/lib/detection/observation-matcher';
import { technologyDefinitions } from '@/lib/detection/rules.ts';
import type { DetectionRule, TechnologyDefinition } from '@/lib/detection/types';
import {
	makeRulePerformanceObservation,
	RULE_PERFORMANCE_FIXTURES,
} from '../support/rule-performance-fixtures';

describe('rule performance fixtures', () => {
	it('keep passing and failing samples semantically correct', () => {
		for (const fixture of RULE_PERFORMANCE_FIXTURES) {
			const { technology, rule, ruleIndex } = findRule(
				technologyDefinitions,
				fixture.technologyId,
				fixture.ruleId,
			);
			const passObservation = makeRulePerformanceObservation(fixture.kind, fixture.passValue);
			const failObservation = makeRulePerformanceObservation(fixture.kind, fixture.failValue);

			expect(matchObservationRule({
				technology,
				rule,
				ruleIndex,
				observation: passObservation,
			}), fixture.ruleId).not.toBeNull();
			expect(matchObservationRule({
				technology,
				rule,
				ruleIndex,
				observation: failObservation,
			}), fixture.ruleId).toBeNull();
		}
	});
});

function findRule(
	registry: readonly TechnologyDefinition[],
	technologyId: string,
	ruleId: string,
): { readonly technology: TechnologyDefinition; readonly rule: DetectionRule; readonly ruleIndex: number } {
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
