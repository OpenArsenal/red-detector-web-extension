import { limitStringsByTotalChars, normalizeMetaMap, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/source-limits';
import type {
	CookieSignals,
	HtmlMatchSignal,
	LinkSignal,
	PageSignals,
	ResourceSignal,
	StorageSignals,
} from '../detection/types';
import type { HtmlProbe } from '../messaging';

export type CollectPageSignalsInput = {
	selectorProbeList: string[];
	htmlProbeList?: HtmlProbe[];
	includeHtml?: boolean;
	includeText?: boolean;
	includeScriptContent?: boolean;
	includeStylesheetContent?: boolean;
};

/**
 * Collects only bounded, rule-oriented page signals. The content script may read
 * page DOM, non-HttpOnly cookie names, storage keys, and inline source text, but
 * it never persists raw unbounded page payloads.
 */
export type RuntimePageSignals = Partial<
	Pick<
		PageSignals,
		| 'scripts'
		| 'stylesheets'
		| 'links'
		| 'resources'
		| 'requests'
		| 'scriptContents'
		| 'stylesheetContents'
		| 'meta'
		| 'headers'
		| 'jsGlobals'
		| 'robotsTxt'
		| 'dnsRecords'
		| 'certIssuer'
		| 'probeResults'
	>
>;

type ScriptSourceInput = ParentNode | Iterable<HTMLScriptElement>;
type ScriptContentInput = ParentNode | Iterable<HTMLScriptElement>;
type StylesheetSourceInput = ParentNode | Iterable<HTMLLinkElement>;
type StylesheetContentInput = ParentNode | Iterable<HTMLStyleElement>;
type LinkTagInput = ParentNode | Iterable<HTMLLinkElement>;
type MetaTagInput = ParentNode | Iterable<HTMLMetaElement>;

export function collectPageSignals(
	input: CollectPageSignalsInput,
	runtime: RuntimePageSignals = {},
): PageSignals {
	const selectorProbeList = uniqueStrings(input.selectorProbeList);
	const fullHtml = input.includeHtml ? document.documentElement.outerHTML : '';
	const htmlProbeList = input.htmlProbeList ?? [];
	const htmlMatches = fullHtml ? collectHtmlProbeMatches(fullHtml, htmlProbeList) : {};
	const resources = runtime.resources ?? collectResourceTimings();

	return {
		url: location.href,
		hostname: location.hostname,
		html: input.includeHtml ? boundedHtml(fullHtml, htmlProbeList) : '',
		htmlMatches,
		text: input.includeText ? collectVisibleText() : '',
		scripts: runtime.scripts ?? collectScriptSources(),
		stylesheets: runtime.stylesheets ?? collectStylesheetSources(),
		links: runtime.links ?? collectLinkTags(),
		resources,
		requests: runtime.requests ?? resources.map(resourceToRequestSignal),
		scriptContents: runtime.scriptContents ?? (input.includeScriptContent ? collectScriptContents() : []),
		stylesheetContents: runtime.stylesheetContents ?? (input.includeStylesheetContent ? collectStylesheetContents() : []),
		cookies: collectCookieNames(document.cookie),
		headers: runtime.headers ?? {},
		meta: runtime.meta ?? collectMetaTags(),
		dom: {
			selectors: Object.fromEntries(
				selectorProbeList.map((selector) => [selector, safeQuerySelector(selector)]),
			),
		},
		storage: collectStorageKeys(),
		// JavaScript globals are populated by injected JS context collection.
		// Content scripts cannot read page-owned globals directly, so callers pass
		// those injected values through RuntimePageSignals after the injection step.
		jsGlobals: runtime.jsGlobals ?? {},
		robotsTxt: runtime.robotsTxt ?? '',
		dnsRecords: runtime.dnsRecords ?? {},
		certIssuer: runtime.certIssuer ?? '',
		probeResults: runtime.probeResults ?? [],
		collectedAt: Date.now(),
	};
}

function boundedHtml(html: string, htmlProbeList: HtmlProbe[]): string {
	if (html.length <= SOURCE_LIMITS.htmlChars) {
		return html;
	}

	const baseLimit = Math.floor(SOURCE_LIMITS.htmlChars * 0.75);
	const snippetBudget = SOURCE_LIMITS.htmlChars - baseLimit;
	const base = html.slice(0, baseLimit);
	const snippets = collectRuleDrivenHtmlSnippets(html, htmlProbeList, {
		maxChars: snippetBudget,
		skipBeforeIndex: baseLimit,
	});

	const combined = snippets ? `${base}\n${snippets}` : base;
	return truncate(combined, SOURCE_LIMITS.htmlChars);
}

function collectRuleDrivenHtmlSnippets(
	html: string,
	probes: HtmlProbe[],
	options: {
		maxChars: number;
		skipBeforeIndex: number;
	},
): string {
	const snippets: string[] = [];
	const seenRanges = new Set<string>();
	let usedChars = 0;

	for (const probe of probes) {
		const pattern = safeProbePattern(probe);
		if (!pattern) {
			continue;
		}

		const match = findMatchAtOrAfter(pattern, html, options.skipBeforeIndex);
		if (!match) {
			continue;
		}

		const matchLength = Math.max(1, Math.min(match.value.length, 2_000));
		const start = Math.max(0, match.index - 500);
		const end = Math.min(html.length, match.index + matchLength + 500);
		const rangeKey = `${start}:${end}`;

		if (seenRanges.has(rangeKey)) {
			continue;
		}

		const snippet = html.slice(start, end);
		if (usedChars + snippet.length > options.maxChars) {
			continue;
		}

		seenRanges.add(rangeKey);
		snippets.push(snippet);
		usedChars += snippet.length;
	}

	return snippets.join('\n');
}

function findMatchAtOrAfter(
	pattern: RegExp,
	html: string,
	minIndex: number,
): { index: number; value: string } | null {
	pattern.lastIndex = minIndex;

	for (let match = pattern.exec(html); match; match = pattern.exec(html)) {
		if (match.index >= minIndex) {
			return { index: match.index, value: match[0] ?? '' };
		}

		if (match[0] === '') {
			pattern.lastIndex += 1;
		}
	}

	return null;
}

function safeProbePattern(probe: HtmlProbe): RegExp | null {
	try {
		const flags = Array.from(new Set(`${probe.flags.replace(/[dy]/g, '')}g`)).join('');
		return new RegExp(probe.source, flags);
	} catch {
		return null;
	}
}

function collectHtmlProbeMatches(
	html: string,
	probes: HtmlProbe[],
): Record<string, HtmlMatchSignal> {
	const matches: Record<string, HtmlMatchSignal> = {};

	for (const probe of probes) {
		const pattern = safeProbePattern(probe);
		if (!pattern) {
			continue;
		}

		pattern.lastIndex = 0;
		const match = pattern.exec(html);
		if (!match) {
			continue;
		}

		matches[htmlProbeKey(probe.technologyId, probe.ruleIndex)] = {
			matchedValue: truncate(match[0] ?? '', SOURCE_LIMITS.evidenceValueChars),
			captures: match.slice(1).map((value) =>
				truncate(value ?? '', SOURCE_LIMITS.evidenceValueChars),
			),
		};
	}

	return matches;
}

function htmlProbeKey(technologyId: string, ruleIndex: number): string {
	return `${technologyId}:${ruleIndex}`;
}

export function collectMetaTags(input: MetaTagInput = document): Record<string, string[]> {
	const grouped: Record<string, string[]> = Object.create(null) as Record<string, string[]>;

	for (const node of iterateMetaTags(input)) {
		const key = node.getAttribute('name') ?? node.getAttribute('property') ?? node.getAttribute('http-equiv');
		const value = node.getAttribute('content');
		if (!key || !value) {
			continue;
		}

		const normalizedKey = key.toLowerCase();
		const values = grouped[normalizedKey] ?? (grouped[normalizedKey] = []);
		values.push(value);
	}

	return normalizeMetaMap(grouped);
}

export function collectScriptSources(input: ScriptSourceInput = document): string[] {
	return uniqueStrings(
		Array.from(iterateScripts(input))
			.map((script) => normalizeResourceUrl(script.getAttribute('src') ?? script.src))
			.filter((source): source is string => Boolean(source)),
	).slice(0, SOURCE_LIMITS.scriptSrc);
}

export function collectScriptContents(input: ScriptContentInput = document): string[] {
	return limitStringsByTotalChars(
		Array.from(iterateScripts(input))
			.filter((script) => !script.src)
			.map((script) => truncate(script.textContent ?? '', SOURCE_LIMITS.scriptContentChars))
			.filter(Boolean),
		SOURCE_LIMITS.scriptContentItems,
		SOURCE_LIMITS.scriptContentTotalChars,
	);
}

export function collectStylesheetSources(input: StylesheetSourceInput = document): string[] {
	return uniqueStrings(
		Array.from(iterateStylesheetLinks(input))
			.map((link) => normalizeResourceUrl(link.getAttribute('href') ?? link.href))
			.filter((href): href is string => Boolean(href)),
	).slice(0, SOURCE_LIMITS.stylesheetHref);
}

export function collectStylesheetContents(input: StylesheetContentInput = document): string[] {
	const inlineStyles = Array.from(iterateStyleTags(input))
		.map((style) => truncate(style.textContent ?? '', SOURCE_LIMITS.stylesheetContentChars))
		.filter(Boolean);

	const cssomStyles = isParentNode(input) ? collectAccessibleCssRules() : [];
	return limitStringsByTotalChars(
		[...inlineStyles, ...cssomStyles],
		SOURCE_LIMITS.stylesheetContentItems,
		SOURCE_LIMITS.stylesheetContentTotalChars,
	);
}

export function collectLinkTags(input: LinkTagInput = document): LinkSignal[] {
	const links: LinkSignal[] = [];
	for (const link of iterateLinks(input)) {
		const href = normalizeResourceUrl(link.getAttribute('href') ?? link.href);
		if (!href) {
			continue;
		}

		links.push({
			rel: link.rel,
			href,
			type: link.type || undefined,
			as: link.as || undefined,
			media: link.media || undefined,
			hreflang: link.hreflang || undefined,
			crossOrigin: link.crossOrigin || undefined,
		});

		if (links.length >= SOURCE_LIMITS.linkTags) {
			break;
		}
	}

	return links;
}

export function collectResourceTimings(): ResourceSignal[] {
	if (!('performance' in globalThis) || typeof performance.getEntriesByType !== 'function') {
		return [];
	}

	const resources: ResourceSignal[] = [];
	const seenUrls = new Set<string>();

	for (const entry of performance.getEntriesByType('resource')) {
		if (!entry.name || seenUrls.has(entry.name)) {
			continue;
		}

		seenUrls.add(entry.name);
		resources.push({
			url: entry.name,
			initiatorType: isPerformanceResourceTiming(entry) ? entry.initiatorType : undefined,
		});

		if (resources.length >= SOURCE_LIMITS.resourceUrls) {
			break;
		}
	}

	return resources;
}

export function collectCookieNames(cookieString: string): CookieSignals {
	return Object.fromEntries(
		cookieString
			.split(';')
			.map((part) => part.trim())
			.filter(Boolean)
			.map((part) => {
				const index = part.indexOf('=');
				const name = index === -1 ? part : part.slice(0, index);
				return [safeDecode(name), true];
			})
			.slice(0, SOURCE_LIMITS.cookieNames),
	);
}

function isPerformanceResourceTiming(entry: PerformanceEntry): entry is PerformanceResourceTiming {
	return 'initiatorType' in entry;
}

function collectVisibleText(): string {
	const text = document.body?.innerText ?? document.documentElement.textContent ?? '';
	return truncate(text, SOURCE_LIMITS.textChars);
}

function collectAccessibleCssRules(): string[] {
	const values: string[] = [];
	for (const sheet of Array.from(document.styleSheets)) {
		if (values.length >= SOURCE_LIMITS.stylesheetContentItems) {
			break;
		}

		try {
			const cssRules = Array.from(sheet.cssRules ?? []);
			const cssText = cssRules.map((rule) => rule.cssText).join('\n');
			if (cssText) {
				values.push(truncate(cssText, SOURCE_LIMITS.stylesheetContentChars));
			}
		} catch {
			// Cross-origin stylesheets commonly throw SecurityError here. Hrefs are
			// still captured through stylesheetHref/link/resource signals.
		}
	}

	return values;
}

function collectStorageKeys(): StorageSignals {
	return {
		localStorage: collectStorageAreaKeys(() => localStorage),
		sessionStorage: collectStorageAreaKeys(() => sessionStorage),
	};
}

function collectStorageAreaKeys(getStorage: () => Storage): Record<string, true> {
	try {
		const storage = getStorage();
		const keys: Array<[string, true]> = [];
		for (let index = 0; index < storage.length && keys.length < SOURCE_LIMITS.storageKeys; index += 1) {
			const key = storage.key(index);
			if (key) {
				keys.push([key, true]);
			}
		}
		return Object.fromEntries(keys);
	} catch {
		return {};
	}
}

function resourceToRequestSignal(resource: ResourceSignal) {
	return {
		url: resource.url,
		type: resource.initiatorType,
	};
}

function safeQuerySelector(selector: string): boolean {
	try {
		return document.querySelector(selector) !== null;
	} catch {
		return false;
	}
}

function safeDecode(value: string): string {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}

function* iterateScripts(input: ScriptSourceInput): Iterable<HTMLScriptElement> {
	if (isParentNode(input)) {
		yield* input.querySelectorAll('script') as Iterable<HTMLScriptElement>;
		return;
	}

	yield* input;
}

function* iterateStylesheetLinks(input: StylesheetSourceInput): Iterable<HTMLLinkElement> {
	if (isParentNode(input)) {
		yield* input.querySelectorAll('link[rel~="stylesheet"]') as Iterable<HTMLLinkElement>;
		return;
	}

	for (const link of input) {
		if (isStylesheetLink(link)) {
			yield link;
		}
	}
}

function* iterateStyleTags(input: StylesheetContentInput): Iterable<HTMLStyleElement> {
	if (isParentNode(input)) {
		yield* input.querySelectorAll('style');
		return;
	}

	yield* input;
}

function* iterateLinks(input: LinkTagInput): Iterable<HTMLLinkElement> {
	if (isParentNode(input)) {
		yield* input.querySelectorAll('link[href]') as Iterable<HTMLLinkElement>;
		return;
	}

	yield* input;
}

function* iterateMetaTags(input: MetaTagInput): Iterable<HTMLMetaElement> {
	if (isParentNode(input)) {
		yield* input.querySelectorAll('meta') as Iterable<HTMLMetaElement>;
		return;
	}

	yield* input;
}

function isParentNode(value: unknown): value is ParentNode {
	return typeof value === 'object' && value !== null && 'querySelectorAll' in value;
}

function isStylesheetLink(link: HTMLLinkElement): boolean {
	return link.relList.contains('stylesheet') || /(^|\s)stylesheet(\s|$)/i.test(link.rel);
}

function normalizeResourceUrl(value: string | null | undefined): string | null {
	if (!value) {
		return null;
	}

	try {
		return new URL(value, location.href).href;
	} catch {
		return value;
	}
}
