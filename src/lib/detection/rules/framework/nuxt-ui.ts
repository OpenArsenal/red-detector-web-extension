import type { TechnologyDefinition } from '../../types';

export const nuxtUiTechnologyDefinition = {
	id: "nuxt-ui",
	name: "Nuxt UI",
	website: "https://ui.nuxt.com",
	description: "Nuxt UI is a customizable UI library designed for Nuxt.",
	icon: "Nuxt.js.svg",
	categories: [
		"framework",
		"component-library",
	],
	rules: [
		{
			id: "nuxt-ui:dom:0",
			kind: "dom",
			selector: "style[id*='nuxt-ui-']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		saas: true,
		pricing: [
			"onetime",
		],
	},
	requires: [
		"nuxt-js",
	],
} as const satisfies TechnologyDefinition;
