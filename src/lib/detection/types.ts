import type { AppError } from '../shared/errors';

export type DetectionKind = 'dom' | 'html' | 'scriptSrc' | 'cookie' | 'header' | 'jsGlobal' | 'meta' | 'url';

export type CategoryId =
	| 'cms'
	| 'ecommerce'
	| 'analytics'
	| 'javascript-framework'
	| 'tag-manager'
	| 'web-server'
	| 'cdn'
	| 'payment'
	| 'marketing'
	| 'unknown';

export type Category = {
	id: CategoryId;
	label: string;
	priority: number;
};

type DetectionRuleBase = {
	confidence?: number;
	description?: string;
};

export type PatternDetectionRule = DetectionRuleBase & {
	kind: 'html' | 'scriptSrc' | 'url';
	pattern: RegExp;
	versionTemplate?: string;
	selector?: never;
	property?: never;
	key?: never;
	valuePattern?: never;
};

export type DomDetectionRule = DetectionRuleBase & {
	kind: 'dom';
	selector: string;
	pattern?: never;
	property?: never;
	key?: never;
	valuePattern?: never;
	versionTemplate?: never;
};

/**
 * Cookie detection is name-only by design. The content collector never exposes
 * raw cookie values, and cookie rules cannot opt into value matching without an
 * intentional type/model change.
 */
export type CookieDetectionRule = DetectionRuleBase & {
	kind: 'cookie';
	key: string;
	pattern?: never;
	selector?: never;
	property?: never;
	valuePattern?: never;
	versionTemplate?: never;
};

export type HeaderDetectionRule = DetectionRuleBase & {
	kind: 'header';
	key: string;
	valuePattern?: RegExp;
	versionTemplate?: string;
	pattern?: never;
	selector?: never;
	property?: never;
};

export type MetaDetectionRule = DetectionRuleBase & {
	kind: 'meta';
	key: string;
	pattern?: RegExp;
	valuePattern?: RegExp;
	versionTemplate?: string;
	selector?: never;
	property?: never;
};

export type JsGlobalDetectionRule = DetectionRuleBase & {
	kind: 'jsGlobal';
	property: string;
	valuePattern?: RegExp;
	versionTemplate?: string;
	pattern?: never;
	selector?: never;
	key?: never;
};

export type DetectionRule =
	| PatternDetectionRule
	| DomDetectionRule
	| CookieDetectionRule
	| HeaderDetectionRule
	| MetaDetectionRule
	| JsGlobalDetectionRule;

export type TechnologyDefinition = {
	id: string;
	name: string;
	website: string;
	description?: string;
	icon?: string;
	categories: CategoryId[];
	rules: DetectionRule[];
	implies?: string[];
	requires?: string[];
	excludes?: string[];
};

export type Evidence = {
	kind: DetectionKind;
	ruleDescription?: string;
	matchedValue?: string;
	confidence: number;
	version?: string;
};

export type ConfidenceScore = {
	value: number;
	level: 'low' | 'medium' | 'high' | 'certain';
};

export type DetectionResult = {
	technologyId: string;
	name: string;
	website: string;
	description?: string;
	icon?: string;
	categories: CategoryId[];
	confidence: ConfidenceScore;
	version?: string;
	evidence: Evidence[];
};

export type CookieSignals = Record<string, true>;

export type PageSignals = {
	url: string;
	hostname: string;
	html: string;
	scripts: string[];
	stylesheets: string[];
	cookies: CookieSignals;
	headers: Record<string, string>;
	meta: Record<string, string[]>;
	dom: {
		selectors: Record<string, boolean>;
	};
	jsGlobals: Record<string, unknown>;
	collectedAt: number;
};

export type SiteAnalysis = {
	url: string;
	hostname: string;
	analyzedAt: number;
	source: 'fresh' | 'cache';
	results: DetectionResult[];
	errors: AppError[];
};

export type AnalysisStatus = {
	totalAnalyses: number;
	trackedOrigins: number;
	lastAnalyzedAt?: number;
};
