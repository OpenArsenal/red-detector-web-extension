import type { TechnologyDefinition } from '../../types';

export const antvG6TechnologyDefinition = {
	id: "antv-g6",
	name: "AntV G6",
	website: "https://g6.antv.vision",
	description: "AntV G6 is a graph visualisation framework in JavaScript.",
	icon: "AntV.svg",
	categories: [
		"graphics-visualization",
	],
	rules: [
		{
			id: "antv-g6:jsGlobal:0",
			kind: "jsGlobal",
			property: "g6.Graph",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "antv-g6:jsGlobal:1",
			kind: "jsGlobal",
			property: "g6.version",
			valuePattern: new RegExp("([\\d\\.]+)"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		saas: true,
		pricing: [
			"freemium",
		],
	},
} as const satisfies TechnologyDefinition;
