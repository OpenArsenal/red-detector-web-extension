import type { TechnologyDefinition } from '../../types';

export const betterdocsPluginTechnologyDefinition = {
	id: "betterdocs-plugin",
	name: "BetterDocs plugin",
	website: "https://betterdocs.co/docs/wordpress",
	description: "BetterDocs plugin is an advanced documentation and knowledge base plugin for WordPress.",
	icon: "BetterDocs.png",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "betterdocs-plugin:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/betterdocs(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"onetime",
		],
	},
	implies: [
		"betterdocs",
	],
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
