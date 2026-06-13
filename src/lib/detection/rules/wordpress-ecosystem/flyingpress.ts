import type { TechnologyDefinition } from '../../types';

export const flyingpressTechnologyDefinition = {
	id: "flyingpress",
	name: "FlyingPress",
	website: "https://flying-press.com",
	description: "FlyingPress is a WordPress plugin that helps to improve website performance by optimising various aspects of a WordPress site. The plugin offers a range of features, including caching, image optimisation, lazy loading, database optimisation, and more.",
	icon: "FlyingPress.svg",
	categories: [
		"wordpress-ecosystem",
		"monitoring-error-tracking",
	],
	rules: [
		{
			id: "flyingpress:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/flying-press\\/"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "flyingpress:dom:1",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/flying-press/']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"low",
			"recurring",
		],
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
