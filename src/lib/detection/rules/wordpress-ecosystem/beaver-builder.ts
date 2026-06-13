import type { TechnologyDefinition } from '../../types';

export const beaverBuilderTechnologyDefinition = {
	id: "beaver-builder",
	name: "Beaver Builder",
	website: "https://www.wpbeaverbuilder.com/",
	description: "Beaver Builder is a drag-and-drop page builder for WordPress.",
	icon: "BeaverBuilder.svg",
	categories: [
		"wordpress-ecosystem",
		"platform-cms-builder",
	],
	rules: [
		{
			id: "beaver-builder:dom:0",
			kind: "dom",
			selector: "link[href*='/wp-content/uploads/bb-plugin/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "beaver-builder:html:1",
			kind: "html",
			pattern: new RegExp("<body[^>]+fl-builder"),
			description: "HTML contains a known technology signature.",
		},
		{
			id: "beaver-builder:dom:2",
			kind: "dom",
			selector: "body[class*='fl-builder'], link[id*='fl-builder']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		saas: true,
		pricing: [
			"low",
			"recurring",
		],
		cpe: "cpe:2.3:a:fastlinemedia:beaver_builder:*:*:*:*:*:wordpress:*:*",
	},
	implies: [
		"wordpress",
	],
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
