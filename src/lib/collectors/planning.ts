import type { CollectPageSignalsInput, HtmlProbe } from '../contracts/analysis';
import { SOURCE_LIMITS } from '../detection/source-limits';
import type { DetectionRule, TechnologyDefinition } from '../detection/types';

/**
 * Runtime cost assigned to a collector surface in the compiled collection plan.
 *
 * Cheap surfaces read bounded page metadata or keyed values that already exist
 * in the document. Expensive surfaces read large text payloads, run many HTML
 * regexes, or fetch same-origin source content. Keeping the cost in the compiled
 * plan lets the extension choose a smaller first pass before asking for richer
 * evidence later.
 */
export const COLLECTION_COSTS = ['cheap', 'expensive', 'unsupported'] as const;

/** Cost bucket used by collection planning and diagnostics. */
export type CollectionCost = typeof COLLECTION_COSTS[number];

/** Count of registry rules assigned to each collection cost bucket. */
export type CollectionPlanCostSummary = Readonly<Record<CollectionCost, number>>;

/** Rule surfaces the extension can collect immediately from the active page. */
const CHEAP_RULE_KINDS = Object.freeze({
	cookie: true,
	dom: true,
	header: true,
	jsGlobal: true,
	link: true,
	meta: true,
	requestUrl: true,
	resourceUrl: true,
	responseHeader: true,
	scriptSrc: true,
	storage: true,
	stylesheetHref: true,
	url: true,
} satisfies Partial<Record<DetectionRule['kind'], true>>);

/** Rule surfaces that require broad text reads or network source enrichment. */
const EXPENSIVE_RULE_KINDS = Object.freeze({
	html: true,
	probe: true,
	scriptContent: true,
	stylesheetContent: true,
	text: true,
} satisfies Partial<Record<DetectionRule['kind'], true>>);

/**
 * Signals the background should ask collectors to capture for the active registry.
 *
 * The compiled registry owns this plan so fresh active-tab analysis does not scan
 * every technology definition just to decide which selectors, HTML probes, and
 * page globals matter. Matcher indexes then route the observations produced by
 * this plan into the smallest compatible rule buckets.
 */
export type CollectionPlan = {
	/** DOM selectors the content script should check with `querySelector`. */
	selectorProbeList: string[];
	/** HTML regexes serialized so the content script can run bounded matches. */
	htmlProbeList: HtmlProbe[];
	/** Page global names the background reads through an injected script. */
	jsGlobalPropertyList: string[];
	/** Whether response headers can contribute evidence for the active registry. */
	needsHeaders: boolean;
	/** Whether same-origin script text can contribute evidence for the active registry. */
	needsScriptContent: boolean;
	/** Whether same-origin stylesheet text can contribute evidence for the active registry. */
	needsStylesheetContent: boolean;
	/** Whether visible text can contribute evidence for the active registry. */
	needsText: boolean;
	/** Rule count summary that explains how much work can stay on the cheap path. */
	costSummary: CollectionPlanCostSummary;
};

/** Build the collection plan needed by the active technology registry. */
export function buildCollectionPlan(
	registry: readonly TechnologyDefinition[],
): CollectionPlan {
	return {
		selectorProbeList: buildSelectorProbeList(registry),
		htmlProbeList: buildHtmlProbeList(registry),
		jsGlobalPropertyList: buildJsGlobalPropertyList(registry),
		needsHeaders: hasRegistryRuleKind(registry, 'header') || hasRegistryRuleKind(registry, 'responseHeader'),
		needsScriptContent: hasRegistryRuleKind(registry, 'scriptContent'),
		needsStylesheetContent: hasRegistryRuleKind(registry, 'stylesheetContent'),
		needsText: hasRegistryRuleKind(registry, 'text'),
		costSummary: createCollectionPlanCostSummary(registry),
	};
}

/** Convert a collection plan to the content-script request shape. */
export function toCollectPageSignalsInput(plan: CollectionPlan): CollectPageSignalsInput {
	return {
		includeHtml: plan.htmlProbeList.length > 0,
		includeText: plan.needsText,
		includeScriptContent: plan.needsScriptContent,
		includeStylesheetContent: plan.needsStylesheetContent,
		selectorProbeList: plan.selectorProbeList,
		htmlProbeList: plan.htmlProbeList,
	};
}

function buildSelectorProbeList(registry: readonly TechnologyDefinition[]): string[] {
	const selectors = new Set<string>();

	for (const technology of registry) {
		for (const rule of technology.rules) {
			if (rule.kind === 'dom' && rule.selector) {
				selectors.add(rule.selector);
			}
		}
	}

	return [...selectors];
}

function buildHtmlProbeList(registry: readonly TechnologyDefinition[]): HtmlProbe[] {
	const probes: HtmlProbe[] = [];

	for (const technology of registry) {
		for (const [ruleIndex, rule] of technology.rules.entries()) {
			if (rule.kind !== 'html' || !rule.pattern) {
				continue;
			}

			probes.push({
				technologyId: technology.id,
				ruleIndex,
				source: rule.pattern.source,
				flags: rule.pattern.flags,
			});
		}
	}

	return probes;
}

function buildJsGlobalPropertyList(registry: readonly TechnologyDefinition[]): string[] {
	const propertyPaths = new Set<string>();

	for (const technology of registry) {
		for (const rule of technology.rules) {
			if (rule.kind === 'jsGlobal' && rule.property) {
				propertyPaths.add(rule.property);
			}
			if (propertyPaths.size >= SOURCE_LIMITS.jsGlobals) {
				return [...propertyPaths];
			}
		}
	}

	return [...propertyPaths];
}

function createCollectionPlanCostSummary(
	registry: readonly TechnologyDefinition[],
): CollectionPlanCostSummary {
	const summary: Record<CollectionCost, number> = {
		cheap: 0,
		expensive: 0,
		unsupported: 0,
	};

	for (const technology of registry) {
		for (const rule of technology.rules) {
			summary[getRuleCollectionCost(rule)] += 1;
		}
	}

	return Object.freeze(summary);
}

function hasRegistryRuleKind(
	registry: readonly TechnologyDefinition[],
	kind: DetectionRule['kind'],
): boolean {
	for (const technology of registry) {
		for (const rule of technology.rules) {
			if (rule.kind === kind) {
				return true;
			}
		}
	}

	return false;
}

function getRuleCollectionCost(rule: DetectionRule): CollectionCost {
	if (hasRuleKind(CHEAP_RULE_KINDS, rule.kind)) {
		return 'cheap';
	}
	if (hasRuleKind(EXPENSIVE_RULE_KINDS, rule.kind)) {
		return 'expensive';
	}

	return 'unsupported';
}

/** Lookup membership stays type-safe even when new rule kinds are added. */
function hasRuleKind(
	lookup: Partial<Record<DetectionRule['kind'], true>>,
	kind: DetectionRule['kind'],
): boolean {
	return Object.prototype.hasOwnProperty.call(lookup, kind);
}
