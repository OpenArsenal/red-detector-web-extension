import type { TechnologyDefinition } from '../../types';

export const dhlTechnologyDefinition = {
	id: "dhl",
	name: "DHL",
	website: "https://www.dhl.com",
	description: "DHL is an international courier, package delivery and express mail service, which is a division of the German logistics firm Deutsche Post.",
	icon: "DHL.svg",
	categories: [
		"commerce-operations",
	],
	rules: [
		{
			id: "dhl:text:0",
			kind: "text",
			pattern: new RegExp("\\bDHL\\b"),
			description: "Page text contains a known technology marker.",
		},
		{
			id: "dhl:dom:1",
			kind: "dom",
			selector: "img[alt*='dhl' i]",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "dhl:text:2",
			kind: "text",
			pattern: new RegExp("\\bUK Mail\\b"),
			description: "Page text contains a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
