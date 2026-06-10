import { normalizeMetaMap, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/rules';
import type { CookieSignals, PageSignals } from '../detection/types';

export type CollectPageSignalsInput = {
	selectorProbeList: string[];
	jsGlobalProbeList: string[];
	includeHtml?: boolean;
};

/**
 * Collects only bounded, rule-oriented page signals. The content script may read
 * page DOM and non-HttpOnly cookies, but it never persists raw page payloads.
 */
export type RuntimePageSignals = Partial<Pick<PageSignals, 'scripts' | 'stylesheets' | 'meta'>>;

type ScriptSourceInput = ParentNode | Iterable<HTMLScriptElement>;
type StylesheetSourceInput = ParentNode | Iterable<HTMLLinkElement>;
type MetaTagInput = ParentNode | Iterable<HTMLMetaElement>;

export function collectPageSignals(
	input: CollectPageSignalsInput,
	runtime: RuntimePageSignals = {},
): PageSignals {
	const selectorProbeList = uniqueStrings(input.selectorProbeList);
	const jsGlobalProbeList = uniqueStrings(input.jsGlobalProbeList);

	const signals = {
		url: location.href,
		hostname: location.hostname,
		html: input.includeHtml ? boundedHtml() : '',
		scripts: runtime.scripts ?? collectScriptSources(),
		stylesheets: runtime.stylesheets ?? collectStylesheetSources(),
		cookies: collectCookieNames(document.cookie),
		headers: {},
		meta: runtime.meta ?? collectMetaTags(),
		dom: {
			selectors: Object.fromEntries(
				selectorProbeList.map((selector) => [selector, safeQuerySelector(selector)]),
			),
		},
		jsGlobals: collectLikelyGlobals(jsGlobalProbeList),
		collectedAt: Date.now(),
	};

	console.log("Collect page signals", {
		input,
		runtime,
		signals,
	})

	return signals;
}

function boundedHtml(): string {
	return truncate(document.documentElement.outerHTML, SOURCE_LIMITS.htmlChars);
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
