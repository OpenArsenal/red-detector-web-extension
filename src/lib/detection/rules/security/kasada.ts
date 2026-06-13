import type { TechnologyDefinition } from '../../types';

export const kasadaTechnologyDefinition = {
	id: "kasada",
	name: "Kasada",
	website: "https://www.kasada.io",
	description: "Kasada is a cybersecurity company that provides a platform to protect websites and web applications from bot attacks and malicious activities.",
	icon: "Kasada.svg",
	categories: [
		"security",
	],
	rules: [
		{
			id: "kasada:jsGlobal:0",
			kind: "jsGlobal",
			property: "KPSDK.configure",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "kasada:cookie:1",
			kind: "cookie",
			keyPattern: new RegExp("^KP_UIDz$", "i"),
			description: "Cookie name matches a known technology marker.",
		},
		{
			id: "kasada:cookie:2",
			kind: "cookie",
			keyPattern: new RegExp("^kp_uidz$", "i"),
			description: "Cookie name matches a known technology marker.",
		},
	],
	metadata: {
		saas: true,
		pricing: [
			"poa",
		],
	},
} as const satisfies TechnologyDefinition;
