import { describe, expect, it } from 'vitest';

import { buildCollectionPlan, toCollectPageSignalsInput } from '../../lib/collectors/planning';
import { SOURCE_LIMITS } from '../../lib/detection/rules';
import type { TechnologyDefinition } from '../../lib/detection/types';

function makeTechnology(
	id: string,
	rules: TechnologyDefinition['rules'],
): TechnologyDefinition {
	return {
		id,
		name: id,
		website: `https://${id}.example`,
		categories: ['unknown'],
		rules,
	};
}

describe('collection planning', () => {
	it('deduplicates DOM selectors in registry order', () => {
		const plan = buildCollectionPlan([
			makeTechnology('alpha', [
				{ kind: 'dom', selector: 'script[src]' },
				{ kind: 'dom', selector: 'meta[name="generator"]' },
			]),
			makeTechnology('beta', [
				{ kind: 'dom', selector: 'script[src]' },
			]),
		]);

		expect(plan.selectorProbeList).toEqual([
			'script[src]',
			'meta[name="generator"]',
		]);
	});

	it('serializes HTML probes with technology ids and rule indexes', () => {
		const plan = buildCollectionPlan([
			makeTechnology('wordpress', [
				{ kind: 'dom', selector: 'body' },
				{ kind: 'html', pattern: /wp-content\/themes/i },
			]),
		]);

		expect(plan.htmlProbeList).toEqual([
			{
				technologyId: 'wordpress',
				ruleIndex: 1,
				source: 'wp-content\\/themes',
				flags: 'i',
			},
		]);
	});

	it('limits page global probes before injected script collection', () => {
		const rules = Array.from({ length: SOURCE_LIMITS.jsGlobals + 2 }, (_, index) => ({
			kind: 'jsGlobal' as const,
			property: `Global${index}`,
		}));
		const plan = buildCollectionPlan([makeTechnology('globals', rules)]);

		expect(plan.jsGlobalPropertyList).toHaveLength(SOURCE_LIMITS.jsGlobals);
		expect(plan.jsGlobalPropertyList.at(0)).toBe('Global0');
	});


	it('summarizes cheap expensive and unsupported rule surfaces', () => {
		const plan = buildCollectionPlan([
			makeTechnology('mixed', [
				{ kind: 'scriptSrc', pattern: /app.js/ },
				{ kind: 'header', key: 'server', valuePattern: /nginx/ },
				{ kind: 'scriptContent', pattern: /createApp/ },
				{ kind: 'dns', recordType: 'TXT', valuePattern: /spf/ },
			]),
		]);

		expect(plan).toMatchObject({
			needsHeaders: true,
			needsScriptContent: true,
			needsStylesheetContent: false,
			costSummary: {
				cheap: 2,
				expensive: 1,
				unsupported: 1,
			},
		});
	});

	it('keeps content-script collection input separate from injected script globals', () => {
		const plan = buildCollectionPlan([
			makeTechnology('globals', [
				{ kind: 'dom', selector: 'script[src]' },
				{ kind: 'jsGlobal', property: 'React' },
			]),
		]);

		expect(toCollectPageSignalsInput(plan)).toEqual({
			includeHtml: false,
			selectorProbeList: ['script[src]'],
			htmlProbeList: [],
		});
	});
});
