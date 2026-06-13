import type { TechnologyDefinition } from '../../types';

export const tablepressTechnologyDefinition = {
	id: "tablepress",
	name: "TablePress",
	website: "https://tablepress.org",
	description: "TablePress is a free and open source plugin for the WordPress publishing platform. It enables you to create and manage tables on your website, without any coding knowledge.",
	icon: "TablePress.png",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "tablepress:dom:0",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/tablepress/']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
		cpe: "cpe:2.3:a:tablepress:tablepress:*:*:*:*:*:wordpress:*:*",
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
