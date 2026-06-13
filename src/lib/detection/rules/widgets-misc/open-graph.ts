import type { TechnologyDefinition } from '../../types';

export const openGraphTechnologyDefinition = {
	id: "open-graph",
	name: "Open Graph",
	website: "https://ogp.me",
	description: "Open Graph is a protocol that is used to integrate any web page into the social graph.",
	icon: "Open Graph.png",
	categories: [
		"widgets-misc",
	],
	rules: [
		{
			id: "open-graph:dom:0",
			kind: "dom",
			selector: "meta[property*='og:']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
} as const satisfies TechnologyDefinition;
