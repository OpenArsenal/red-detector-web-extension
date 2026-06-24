import type { RulePerformanceFixture } from '@/lib/detection/rule-performance-profile';
import {
	DEFAULT_RULE_PROFILE_PAYLOAD_CHARS,
	RULE_PROFILE_TARGET,
	makeNextHydrationPayload,
	makeReactRouterHydrationPayload,
	makeRuleProfileObservation,
} from '@/lib/detection/rule-performance-profile';

export type { RulePerformanceFixture } from '@/lib/detection/rule-performance-profile';
export {
	DEFAULT_RULE_PROFILE_PAYLOAD_CHARS as DEFAULT_HYDRATION_PAYLOAD_CHARS,
	RULE_PROFILE_TARGET as RULE_PERFORMANCE_TARGET,
	makeNextHydrationPayload,
	makeReactRouterHydrationPayload,
	makeRuleProfileObservation as makeRulePerformanceObservation,
};

export const RULE_PERFORMANCE_FIXTURES: readonly RulePerformanceFixture[] = [
	{
		technologyId: 'grafana',
		ruleId: 'grafana:scriptContent:1',
		kind: 'scriptContent',
		passValue: 'window.grafanaBootData={"latestVersion":"10.0.0","version":"9.5.1"};',
		failValue: makeReactRouterHydrationPayload(),
		note: 'Grafana version detector without a leading wildcard, mixed-case key',
	},
	{
		technologyId: 'grafana',
		ruleId: 'grafana:scriptContent:3',
		kind: 'scriptContent',
		passValue: 'window.grafanaBootData={"latestVersion":"10.0.0","version":"9.5.1"};',
		failValue: makeReactRouterHydrationPayload(),
		note: 'Grafana control detector without leading wildcard',
	},
	{
		technologyId: 'grafana',
		ruleId: 'grafana:scriptContent:4',
		kind: 'scriptContent',
		passValue: 'window.grafanaBootData={"latestversion":"10.0.0","version":"9.5.1"};',
		failValue: makeReactRouterHydrationPayload(),
		note: 'Grafana version detector without a leading wildcard, lower-case key',
	},
	{
		technologyId: 'altcha',
		ruleId: 'altcha:scriptContent:0',
		kind: 'scriptContent',
		passValue: 'import "https://cdn.example/altcha.js";',
		failValue: makeReactRouterHydrationPayload(),
		note: 'Altcha control detector without leading wildcard',
	},
	{
		technologyId: 'altcha',
		ruleId: 'altcha:scriptContent:2',
		kind: 'scriptContent',
		passValue: 'import "https://cdn.example/altcha.js";',
		failValue: makeReactRouterHydrationPayload(),
		note: 'Altcha detector without a leading wildcard',
	},
] as const;
