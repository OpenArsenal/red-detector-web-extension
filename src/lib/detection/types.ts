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

export type DetectionRule = {
	kind: DetectionKind;
	pattern?: RegExp;
	selector?: string;
	property?: string;
	key?: string;
	valuePattern?: RegExp;
	confidence?: number;
	versionTemplate?: string;
	description?: string;
};

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

export type PageSignals = {
	url: string;
	hostname: string;
	html: string;
	scripts: string[];
	cookies: Record<string, string>;
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
	errors: string[];
};

export type AnalysisStatus = {
	totalAnalyses: number;
	trackedOrigins: number;
	lastAnalyzedAt?: number;
};
