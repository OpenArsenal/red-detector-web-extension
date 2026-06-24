import type { NormalizedObservation, NormalizedObservationKind } from '@/lib/observations';

export interface RulePerformanceFixture {
	readonly technologyId: string;
	readonly ruleId: string;
	readonly kind: NormalizedObservationKind;
	readonly passValue: string;
	readonly failValue: string;
	readonly note: string;
}

export const RULE_PERFORMANCE_TARGET = {
	url: 'https://example.com/products',
	hostname: 'example.com',
} as const;

export const DEFAULT_HYDRATION_PAYLOAD_CHARS = 24_000;

export const RULE_PERFORMANCE_FIXTURES: readonly RulePerformanceFixture[] = [
	{
		technologyId: 'grafana',
		ruleId: 'grafana:scriptContent:1',
		kind: 'scriptContent',
		passValue: 'window.grafanaBootData={"latestVersion":"10.0.0","version":"9.5.1"};',
		failValue: makeReactRouterHydrationPayload(),
		note: 'leading wildcard Grafana version detector, mixed-case key',
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
		note: 'leading wildcard Grafana version detector, lower-case key',
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
		note: 'leading wildcard Altcha detector',
	},
] as const;

export function makeReactRouterHydrationPayload(
	length: number = getConfiguredHydrationPayloadLength(),
): string {
	const bodyLength = Math.max(0, length);
	return `window.__reactRouterContext.streamController.enqueue("${'x'.repeat(bodyLength)}");`;
}

export function makeNextHydrationPayload(
	length: number = getConfiguredHydrationPayloadLength(),
): string {
	const bodyLength = Math.max(0, length);
	return `self.__next_f.push([1,"${'x'.repeat(bodyLength)}"]);`;
}

export function makeRulePerformanceObservation(
	kind: NormalizedObservationKind,
	value: string,
): NormalizedObservation {
	return {
		kind,
		interface: 'test',
		collector: 'test-fixture',
		target: RULE_PERFORMANCE_TARGET,
		observedAt: 1_700_000_000_000,
		value,
	};
}

function getConfiguredHydrationPayloadLength(): number {
	const raw = process.env.RED_DETECTOR_RULE_BENCH_PAYLOAD_CHARS;
	if (!raw) {
		return DEFAULT_HYDRATION_PAYLOAD_CHARS;
	}

	const parsed = Number.parseInt(raw, 10);
	return Number.isFinite(parsed) && parsed >= 0 ? parsed : DEFAULT_HYDRATION_PAYLOAD_CHARS;
}
