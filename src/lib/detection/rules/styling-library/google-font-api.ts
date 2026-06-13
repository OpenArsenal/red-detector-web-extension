import type { TechnologyDefinition } from '../../types';

export const googleFontApiTechnologyDefinition = {
	id: "google-font-api",
	name: "Google Font API",
	website: "https://fonts.google.com/",
	description: "Google Font API is a web service that supports open-source font files that can be used on your web designs.",
	icon: "Google Font API.svg",
	categories: [
		"styling-library",
	],
	rules: [
		{
			id: "google-font-api:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("googleapis\\.com\\/.+webfont"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "google-font-api:dom:1",
			kind: "dom",
			selector: "link[href*='fonts.g']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "google-font-api:dom:2",
			kind: "dom",
			selector: "style[data-href*='fonts.g']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "google-font-api:jsGlobal:3",
			kind: "jsGlobal",
			property: "WebFonts",
			description: "Page-owned global matches a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
