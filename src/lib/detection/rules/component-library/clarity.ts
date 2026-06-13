import type { TechnologyDefinition } from '../../types';

export const clarityTechnologyDefinition = {
	id: "clarity",
	name: "Clarity",
	website: "https://clarity.design",
	description: "Clarity is an open-source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components.",
	icon: "clarity.svg",
	categories: [
		"component-library",
	],
	rules: [
		{
			id: "clarity:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("clr-angular(?:\\.umd)?(?:\\.min)?\\.js"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "clarity:dom:1",
			kind: "dom",
			selector: "link[href*='clr-ui'], clr-main-container",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "clarity:jsGlobal:2",
			kind: "jsGlobal",
			property: "ClarityIcons",
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	implies: [
		"angular",
	],
} as const satisfies TechnologyDefinition;
