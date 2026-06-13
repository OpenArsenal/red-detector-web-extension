import type { TechnologyDefinition } from '../../types';

export const ageGateTechnologyDefinition = {
	id: "age-gate",
	name: "Age Gate",
	website: "https://wordpress.org/plugins/age-gate",
	description: "A plugin to check the age of a visitor for Wordpress.",
	icon: "Age Gate.png",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "age-gate:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("age-gate(?:\\/dist)?(?:\\/all)?(?:\\/focus)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "age-gate:dom:1",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/age-gate/'], .age-gate, .age-gate-form, button[name='age_gate[confirm]']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "age-gate:jsGlobal:2",
			kind: "jsGlobal",
			property: "age_gate",
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
