import { normalizeMetaMap, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/rules';
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
	jsGlobalProbeList: string[];
	htmlProbeList?: HtmlProbe[];
	includeHtml?: boolean;
};

/**
 * Collects only bounded, rule-oriented page signals. The content script may read
 * page DOM and non-HttpOnly cookies, but it never persists raw page payloads.
 */
export type RuntimePageSignals = Partial<
	Pick<PageSignals, 'scripts' | 'stylesheets' | 'links' | 'resources' | 'requests' | 'meta'>
>;

type ScriptSourceInput = ParentNode | Iterable<HTMLScriptElement>;
type StylesheetSourceInput = ParentNode | Iterable<HTMLLinkElement>;
type LinkTagInput = ParentNode | Iterable<HTMLLinkElement>;
type MetaTagInput = ParentNode | Iterable<HTMLMetaElement>;

export function collectPageSignals(
	input: CollectPageSignalsInput,
	runtime: RuntimePageSignals = {},
): PageSignals {
	const selectorProbeList = uniqueStrings(input.selectorProbeList);
	const jsGlobalProbeList = uniqueStrings(input.jsGlobalProbeList);
	const fullHtml = input.includeHtml ? document.documentElement.outerHTML : '';
	const htmlProbeList = input.htmlProbeList ?? [];
	const htmlMatches = fullHtml ? collectHtmlProbeMatches(fullHtml, htmlProbeList) : {};
	const resources = runtime.resources ?? collectResourceTimings();

	const signals = {
		url: location.href,
		hostname: location.hostname,
		html: input.includeHtml ? boundedHtml(fullHtml, htmlProbeList) : '',
		htmlMatches,
		scripts: runtime.scripts ?? collectScriptSources(),
		stylesheets: runtime.stylesheets ?? collectStylesheetSources(),
		links: runtime.links ?? collectLinkTags(),
		resources,
		requests: runtime.requests ?? resources.map(resourceToRequestSignal),
		scriptContents: [],
		stylesheetContents: [],
		cookies: collectCookieNames(document.cookie),
		headers: {},
		meta: runtime.meta ?? collectMetaTags(),
		dom: {
			selectors: Object.fromEntries(
				selectorProbeList.map((selector) => [selector, safeQuerySelector(selector)]),
			),
		},
		storage: collectStorageKeys(),
		jsGlobals: collectLikelyGlobals(jsGlobalProbeList),
		pageGlobals: {},
		robotsTxt: '',
		dnsRecords: {},
		certIssuer: '',
		probeResults: [],
		collectedAt: Date.now(),
	};

	return signals;
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
	const entries = Array.from(iterateMetaTags(input))
		.map((node) => {
			const key = node.getAttribute('name') ?? node.getAttribute('property') ?? node.getAttribute('http-equiv');
			const value = node.getAttribute('content');
			return key && value ? ([key, value] as const) : null;
		})
		.filter((entry): entry is readonly [string, string] => entry !== null);

	const grouped = entries.reduce<Record<string, string[]>>((acc, [key, value]) => {
		const normalizedKey = key.toLowerCase();
		return {
			...acc,
			[normalizedKey]: [...(acc[normalizedKey] ?? []), value],
		};
	}, {});

	return normalizeMetaMap(grouped);
}

export function collectScriptSources(input: ScriptSourceInput = document): string[] {
	return uniqueStrings(
		Array.from(iterateScripts(input))
			.map((script) => normalizeResourceUrl(script.getAttribute('src') ?? script.src))
			.filter((source): source is string => Boolean(source)),
	).slice(0, SOURCE_LIMITS.scriptSrc);
}

export function collectStylesheetSources(input: StylesheetSourceInput = document): string[] {
	return uniqueStrings(
		Array.from(iterateStylesheetLinks(input))
			.map((link) => normalizeResourceUrl(link.getAttribute('href') ?? link.href))
			.filter((href): href is string => Boolean(href)),
	).slice(0, SOURCE_LIMITS.stylesheetHref);
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

	return uniqueStrings(
		performance
			.getEntriesByType('resource')
			.map((entry) => entry.name)
			.filter(Boolean),
	)
		.slice(0, SOURCE_LIMITS.resourceUrls)
		.map((url) => {
			const entry = performance
				.getEntriesByType('resource')
				.find((item) => item.name === url) as PerformanceResourceTiming | undefined;
			return {
				url,
				initiatorType: entry?.initiatorType,
			};
		});
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

/**
 * MVP note: this reads the content script isolated world, not the page's main
 * world. Keep jsGlobal rules supplemental until a safe main-world bridge exists.
 */
function collectLikelyGlobals(paths: string[]): Record<string, unknown> {
	return Object.fromEntries(
		paths.map((path) => [path, sanitizeGlobalValue(readPath(globalThis, path))]),
	);
}

function readPath(root: unknown, path: string): unknown {
	try {
		return path.split('.').reduce<unknown>((value, key) => {
			if (value && typeof value === 'object' && key in value) {
				return (value as Record<string, unknown>)[key];
			}
			return undefined;
		}, root);
	} catch {
		return undefined;
	}
}

function sanitizeGlobalValue(value: unknown): unknown {
	if (['string', 'number', 'boolean'].includes(typeof value) || value == null) {
		return value;
	}

	return typeof value;
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
