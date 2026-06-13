import type { TechnologyDefinition } from '../../types';

export const autoptimizeTechnologyDefinition = {
	id: "autoptimize",
	name: "Autoptimize",
	website: "https://autoptimize.com",
	description: "Autoptimize is a WordPress plugin that optimises website performance by aggregating, minifying, and compressing HTML, CSS, and JavaScript files.",
	icon: "Autoptimize.png",
	categories: [
		"wordpress-ecosystem",
		"monitoring-error-tracking",
	],
	rules: [
		{
			id: "autoptimize:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/autoptimize\\/.+\\.js(?:\\?ao_version=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "autoptimize:dom:1",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/autoptimize/'], link[href*='/wp-content/cache/autoptimize/']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"onetime",
		],
		cpe: "cpe:2.3:a:autoptimize:autoptimize:*:*:*:*:*:wordpress:*:*",
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
