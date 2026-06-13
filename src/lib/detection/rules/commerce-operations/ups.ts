import type { TechnologyDefinition } from '../../types';

export const upsTechnologyDefinition = {
	id: "ups",
	name: "UPS",
	website: "https://www.ups.com",
	description: "UPS is an American multinational shipping & receiving and supply chain management company.",
	icon: "UPS.svg",
	categories: [
		"commerce-operations",
	],
	rules: [
		{
			id: "ups:text:0",
			kind: "text",
			pattern: new RegExp("\\b(?<!-)UPS\\b"),
			description: "Page text contains a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
