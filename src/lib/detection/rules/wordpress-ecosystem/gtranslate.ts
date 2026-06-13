import type { TechnologyDefinition } from '../../types';

export const gtranslateTechnologyDefinition = {
	id: "gtranslate",
	name: "GTranslate",
	website: "https://gtranslate.io",
	description: "GTranslate is a website translator which can translate any website to any language automatically.",
	icon: "GTranslate.svg",
	categories: [
		"wordpress-ecosystem",
		"translations",
	],
	rules: [
		{
			id: "gtranslate:dom:0",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/gtranslate/'], img[src*='/wp-content/plugins/gtranslate/']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"low",
			"recurring",
		],
		cpe: "cpe:2.3:a:gtranslate:gtranslate:*:*:*:*:*:wordpress:*:*",
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
