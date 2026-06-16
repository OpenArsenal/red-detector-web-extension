import type { TechnologyDefinition } from '../../types';

export const dxTechnologyDefinition = {
	id: "dx",
	name: "DX",
	website: "https://www.dxdelivery.com",
	description: "DX (also known as DX Freight) is a British mail, courier and logistics company.",
	icon: "DX.svg",
	categories: [
		"commerce-operations",
	],
	rules: [
		{
			id: "dx:text:0",
			kind: "text",
			pattern: new RegExp("\\bDX\\b"),
			description: "Page text contains a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
