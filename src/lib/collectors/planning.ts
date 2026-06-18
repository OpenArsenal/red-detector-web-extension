import type { CollectPageSignalsInput, HtmlProbe } from '../contracts/analysis';
import { SOURCE_LIMITS } from '../detection/source-limits';
import type { DetectionRule, TechnologyDefinition } from '../detection/types';

/** Collection tiers used by the extension active-tab runtime. */
export const COLLECTION_TIERS = ['initial', 'enrichment'] as const;

/** Detection collection tier for one active-tab pass. */
export type CollectionTier = typeof COLLECTION_TIERS[number];

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
	jsGlobal: true,
	link: true,
	meta: true,
	requestUrl: true,
	resourceUrl: true,
	scriptSrc: true,
	storage: true,
	stylesheetHref: true,
	url: true,
} satisfies Partial<Record<DetectionRule['kind'], true>>);

/** Rule surfaces that require broad text reads or network source enrichment. */
const EXPENSIVE_RULE_KINDS = Object.freeze({
	header: true,
	html: true,
	probe: true,
	responseHeader: true,
	scriptContent: true,
	stylesheetContent: true,
	text: true,
} satisfies Partial<Record<DetectionRule['kind'], true>>);

/**
 * One executable collector tier derived from registry needs.
 *
 * Initial tiers favor already-visible document facts. Enrichment tiers enable
 * broad text, HTML, header, and source-content collection after the popup has a
 * useful first result to render.
 */
export type CollectionTierPlan = {
	/** Tier represented by this plan. */
	tier: CollectionTier;
	/** DOM selectors the content script should check with `querySelector`. */
	selectorProbeList: string[];
	/** HTML regexes serialized so the content script can run bounded matches. */
	htmlProbeList: HtmlProbe[];
	/** Page global names the background reads through an injected script. */
	jsGlobalPropertyList: string[];
	/** Whether response headers can contribute evidence in this tier. */
	needsHeaders: boolean;
	/** Whether same-origin script text can contribute evidence in this tier. */
	needsScriptContent: boolean;
	/** Whether same-origin stylesheet text can contribute evidence in this tier. */
	needsStylesheetContent: boolean;
	/** Whether visible text can contribute evidence in this tier. */
	needsText: boolean;
	/** Whether storage keys should be collected in this tier. */
	needsStorage: boolean;
};

/**
 * Signals the background should ask collectors to capture for the active registry.
 *
 * The top-level fields mirror the initial tier for compatibility with older
 * callers, while `initial` and `enrichment` make the progressive runtime explicit.
 */
export type CollectionPlan = CollectionTierPlan & {
	/** Cheap first-pass collection work used before the popup renders. */
	initial: CollectionTierPlan;
	/** Deeper collection work that can run after first detections are visible. */
	enrichment: CollectionTierPlan;
	/** Rule count summary that explains how much work can stay on the cheap path. */
	costSummary: CollectionPlanCostSummary;
};

/** Build the collection plan needed by the active technology registry. */
export function buildCollectionPlan(
	registry: readonly TechnologyDefinition[],
): CollectionPlan {
	const selectorProbeList = buildSelectorProbeList(registry);
	const htmlProbeList = buildHtmlProbeList(registry);
	const jsGlobalPropertyList = buildJsGlobalPropertyList(registry);
	const needsHeaders = hasRegistryRuleKind(registry, 'header') || hasRegistryRuleKind(registry, 'responseHeader');
	const needsScriptContent = hasRegistryRuleKind(registry, 'scriptContent');
	const needsStylesheetContent = hasRegistryRuleKind(registry, 'stylesheetContent');
	const needsText = hasRegistryRuleKind(registry, 'text');
	const needsStorage = hasRegistryRuleKind(registry, 'storage');
	const initial: CollectionTierPlan = {
		tier: 'initial',
		selectorProbeList,
		htmlProbeList: [],
		jsGlobalPropertyList,
		needsHeaders: false,
		needsScriptContent: false,
		needsStylesheetContent: false,
		needsText: false,
		needsStorage,
	};
	const enrichment: CollectionTierPlan = {
		tier: 'enrichment',
		selectorProbeList,
		htmlProbeList,
		jsGlobalPropertyList,
		needsHeaders,
		needsScriptContent,
		needsStylesheetContent,
		needsText,
		needsStorage,
	};

	return {
		...initial,
		initial,
		enrichment,
		costSummary: createCollectionPlanCostSummary(registry),
	};
}

/** Convert a collection plan to the content-script request shape. */
export function toCollectPageSignalsInput(
	plan: CollectionPlan | CollectionTierPlan,
	tier: CollectionTier = plan.tier,
): CollectPageSignalsInput {
	const tierPlan = getCollectionTierPlan(plan, tier);
	return {
		tier: tierPlan.tier,
		includeHtml: tierPlan.htmlProbeList.length > 0,
		includeText: tierPlan.needsText,
		includeScriptContent: tierPlan.needsScriptContent,
		includeStylesheetContent: tierPlan.needsStylesheetContent,
		includeStorageKeys: tierPlan.needsStorage,
		selectorProbeList: tierPlan.selectorProbeList,
		htmlProbeList: tierPlan.htmlProbeList,
	};
}

/** Return the executable tier plan from a full plan or an already-selected tier. */
export function getCollectionTierPlan(
	plan: CollectionPlan | CollectionTierPlan,
	tier: CollectionTier,
): CollectionTierPlan {
	if ('initial' in plan && 'enrichment' in plan) {
		return tier === 'initial' ? plan.initial : plan.enrichment;
	}

	return plan;
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
