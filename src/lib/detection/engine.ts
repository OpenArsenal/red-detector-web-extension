import type { ExtractedPagePayload, ExtractionMode } from './types';
import { SOURCE_LIMITS } from './rules';
import { normalizeMetaMap, truncate, uniqueStrings } from './normalizers';

function collectMetaTags(): Record<string, string[]> {
	const map: Record<string, string[]> = {};

	for (const node of Array.from(document.querySelectorAll('meta'))) {
		const key = node.getAttribute('name') ?? node.getAttribute('property');
		const value = node.getAttribute('content');

		if (!key || !value) {
			continue;
		}

		const lowered = key.toLowerCase();
		map[lowered] = map[lowered] ?? [];
		map[lowered].push(value);
	}

	return normalizeMetaMap(map);
}

function collectScriptSources(): string[] {
	const values = Array.from(document.querySelectorAll('script[src]'))
		.map((node) => node.getAttribute('src') ?? '')
		.filter(Boolean);

	return uniqueStrings(values).slice(0, SOURCE_LIMITS.scriptSrc);
}

function collectInlineScripts(mode: ExtractionMode): string[] | undefined {
	if (mode !== 'aggressive') {
		return undefined;
	}

	const values = Array.from(document.querySelectorAll('script:not([src])'))
		.map((node) => truncate(node.textContent ?? '', SOURCE_LIMITS.inlineScriptChars))
		.filter(Boolean)
		.slice(0, SOURCE_LIMITS.inlineScripts);

	return values.length ? values : undefined;
}

export function collectPageSources(mode: ExtractionMode): ExtractedPagePayload {
	const payload: ExtractedPagePayload = {
		url: location.href,
		title: document.title,
		meta: collectMetaTags(),
    scriptSrc: collectScriptSources(),
    html: truncate(document.documentElement.outerHTML, SOURCE_LIMITS.htmlChars),
		collectedSources: ['url', 'title', 'meta', 'script_src', 'html'],
		capturedAt: Date.now(),
  };

	const bodyText = (document.body?.innerText ?? '').replace(/\s+/g, ' ').trim();
	if (bodyText) {
		payload.text = truncate(bodyText, SOURCE_LIMITS.textChars);
		payload.collectedSources.push('text');
	}

  const inlineScripts = collectInlineScripts(mode);
  if (inlineScripts?.length) {
    payload.inlineScripts = inlineScripts;
    payload.collectedSources.push('inline_scripts');
  }

	return payload;
}
