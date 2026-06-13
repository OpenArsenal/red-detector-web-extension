import type { TechnologyDefinition } from '../../types';

export const wpmlTechnologyDefinition = {
	id: "wpml",
	name: "WPML",
	website: "https://wpml.org/",
	description: "WPML plugin makes it possible to build and run fully multilingual WordPress sites.",
	icon: "WPML.svg",
	categories: [
		"wordpress-ecosystem",
		"translations",
	],
	rules: [
		{
			id: "wpml:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/sitepress-multilingual-cms\\/"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "wpml:cookie:1",
			kind: "cookie",
			keyPattern: new RegExp("^wp\\-wpml_current_language$", "i"),
			description: "Cookie name matches a known technology marker.",
		},
		{
			id: "wpml:meta:2",
			kind: "meta",
			key: "generator",
			valuePattern: new RegExp("^WPML\\sver\\:([\\d\\.]+)", "i"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Meta tag matches a known technology marker.",
		},
		{
			id: "wpml:meta:3",
			kind: "meta",
			key: "generator",
			valuePattern: new RegExp("^wpml\\sver\\:([\\d\\.]+)", "i"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Meta tag matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
		pricing: [
			"low",
			"recurring",
		],
		cpe: "cpe:2.3:a:wpml:wpml:*:*:*:*:*:wordpress:*:*",
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
