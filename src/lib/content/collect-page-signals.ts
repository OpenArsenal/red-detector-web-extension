import { normalizeMetaMap, truncate, uniqueStrings } from '../detection/normalizers';
import { SOURCE_LIMITS } from '../detection/rules';
import type { PageSignals } from '../detection/types';

export type CollectPageSignalsInput = {
	selectorProbeList: string[];
	jsGlobalProbeList: string[];
	includeHtml?: boolean;
};

/**
 * Collects only bounded, rule-oriented page signals. The content script may read
 * page DOM and non-HttpOnly cookies, but it never persists raw page payloads.
 */
export function collectPageSignals(input: CollectPageSignalsInput): PageSignals {
	const selectorProbeList = uniqueStrings(input.selectorProbeList);
	const jsGlobalProbeList = uniqueStrings(input.jsGlobalProbeList);

	return {
		url: location.href,
		hostname: location.hostname,
		html: input.includeHtml ? boundedHtml() : '',
		scripts: collectScriptSources(),
		cookies: collectCookieNames(document.cookie),
		headers: {},
		meta: collectMetaTags(),
		dom: {
			selectors: Object.fromEntries(
				selectorProbeList.map((selector) => [selector, safeQuerySelector(selector)]),
			),
		},
		jsGlobals: collectLikelyGlobals(jsGlobalProbeList),
		collectedAt: Date.now(),
	};
}

function boundedHtml(): string {
	return truncate(document.documentElement.outerHTML, SOURCE_LIMITS.htmlChars);
}

function collectMetaTags(): Record<string, string[]> {
	const entries = Array.from(document.querySelectorAll('meta'))
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

function collectScriptSources(): string[] {
	return uniqueStrings(
		Array.from(document.scripts)
			.map((script) => script.src)
			.filter(Boolean),
	).slice(0, SOURCE_LIMITS.scriptSrc);
}

function collectCookieNames(cookieString: string): Record<string, string> {
	return Object.fromEntries(
		cookieString
			.split(';')
			.map((part) => part.trim())
			.filter(Boolean)
			.map((part) => {
				const index = part.indexOf('=');
				const name = index === -1 ? part : part.slice(0, index);
				return [safeDecode(name), 'present'];
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
