import type { TechnologyDefinition } from '../../types';

export const microsoftAdvertisingTechnologyDefinition = {
	id: "microsoft-advertising",
	name: "Microsoft Advertising",
	website: "https://ads.microsoft.com",
	description: "Microsoft Advertising is an online advertising platform developed by Microsoft.",
	icon: "Microsoft.svg",
	categories: [
		"advertising-paid-media",
	],
	rules: [
		{
			id: "microsoft-advertising:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("bat\\.bing\\.com\\/bat\\.js"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "microsoft-advertising:dom:1",
			kind: "dom",
			selector: "link[href*='.bing.com']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "microsoft-advertising:jsGlobal:2",
			kind: "jsGlobal",
			property: "UET",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "microsoft-advertising:jsGlobal:3",
			kind: "jsGlobal",
			property: "uetq",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "microsoft-advertising:cookie:4",
			kind: "cookie",
			keyPattern: new RegExp("^_uetsid$", "i"),
			description: "Cookie name matches a known technology marker.",
		},
		{
			id: "microsoft-advertising:cookie:5",
			kind: "cookie",
			keyPattern: new RegExp("^_uetvid$", "i"),
			description: "Cookie name matches a known technology marker.",
		},
	],
	metadata: {
		saas: true,
		pricing: [
			"payg",
		],
	},
} as const satisfies TechnologyDefinition;
