import type { TechnologyDefinition } from '../../types';

export const microsoftClarityTechnologyDefinition = {
	id: "microsoft-clarity",
	name: "Microsoft Clarity",
	website: "https://clarity.microsoft.com",
	description: "Microsoft's Clarity is an analytics tool which provides website usage statistics, session recording, and heatmaps.",
	icon: "Microsoft Clarity.svg",
	categories: [
		"analytics",
	],
	rules: [
		{
			id: "microsoft-clarity:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("www\\.clarity\\.ms\\/.+\\/([\\d.]+)\\/clarity\\.js"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "microsoft-clarity:jsGlobal:1",
			kind: "jsGlobal",
			property: "clarity",
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
