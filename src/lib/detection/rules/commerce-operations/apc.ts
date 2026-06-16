import type { TechnologyDefinition } from '../../types';

export const apcTechnologyDefinition = {
	id: "apc",
	name: "APC",
	website: "https://www.apc-pli.com",
	description: "APC offers door-to-door parcel and mail delivery.",
	icon: "APC.svg",
	categories: [
		"commerce-operations",
	],
	rules: [
		{
			id: "apc:text:0",
			kind: "text",
			pattern: new RegExp("\\APC\\b"),
			description: "Page text contains a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
