import type { CollectPageSignalsInput, HtmlProbe } from '../contracts/analysis';
import { SOURCE_LIMITS } from '../detection/rules';
import type { TechnologyDefinition } from '../detection/types';

/**
 * Signals the background should ask collectors to capture for the active registry.
 *
 * The plan is still built from today's rule objects. Keeping it in one module
 * means the background does not need to know how DOM selectors, HTML regexes, or
 * page globals are found inside technology definitions.
 */
export type CollectionPlan = {
	/** DOM selectors the content script should check with `querySelector`. */
	selectorProbeList: string[];
	/** HTML regexes serialized so the content script can run bounded matches. */
	htmlProbeList: HtmlProbe[];
	/** Page global names the background reads through an injected script. */
	jsGlobalPropertyList: string[];
};

/** Build the collection plan needed by the active technology registry. */
export function buildCollectionPlan(
	registry: readonly TechnologyDefinition[],
): CollectionPlan {
	return {
		selectorProbeList: buildSelectorProbeList(registry),
		htmlProbeList: buildHtmlProbeList(registry),
		jsGlobalPropertyList: buildJsGlobalPropertyList(registry),
	};
}

/** Convert a collection plan to the content-script request shape. */
export function toCollectPageSignalsInput(plan: CollectionPlan): CollectPageSignalsInput {
	return {
		includeHtml: true,
		selectorProbeList: plan.selectorProbeList,
		htmlProbeList: plan.htmlProbeList,
	};
}

function buildSelectorProbeList(registry: readonly TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules
					.filter((rule) => rule.kind === 'dom' && rule.selector)
					.map((rule) => rule.selector!),
			),
		),
	);
}

function buildHtmlProbeList(registry: readonly TechnologyDefinition[]): HtmlProbe[] {
	return registry.flatMap((technology) =>
		technology.rules.flatMap((rule, ruleIndex) => {
			if (rule.kind !== 'html' || !rule.pattern) {
				return [];
			}

			return [
				{
					technologyId: technology.id,
					ruleIndex,
					source: rule.pattern.source,
					flags: rule.pattern.flags,
				},
			];
		}),
	);
}

function buildJsGlobalPropertyList(registry: readonly TechnologyDefinition[]): string[] {
	return Array.from(
		new Set(
			registry.flatMap((technology) =>
				technology.rules.flatMap((rule) =>
					rule.kind === 'jsGlobal' && rule.property ? [rule.property] : [],
				),
			),
		),
	).slice(0, SOURCE_LIMITS.jsGlobals);
}
