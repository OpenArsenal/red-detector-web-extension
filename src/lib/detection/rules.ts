import type { ExtractionSource, SourceCapability } from './types';

export const SOURCE_LIMITS = {
	textChars: 20_000,
	htmlChars: 200_000,
	inlineScripts: 10,
	inlineScriptChars: 10_000,
	scriptSrc: 300,
	metaValuesPerKey: 5,
} as const;

export const SOURCE_CAPABILITIES: Record<ExtractionSource, SourceCapability> = {
	url: { status: 'supported', owner: 'content' },
	title: { status: 'supported', owner: 'content' },
	meta: { status: 'supported', owner: 'content' },
	script_src: { status: 'supported', owner: 'content' },
	text: { status: 'supported_with_caveats', owner: 'content' },
	html: { status: 'supported_with_caveats', owner: 'content' },
	inline_scripts: { status: 'supported_with_caveats', owner: 'content' },
	cookies: { status: 'supported_with_caveats', owner: 'background' },
	robots: { status: 'supported_with_caveats', owner: 'background' },
};
