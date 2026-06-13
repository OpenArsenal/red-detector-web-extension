import type { TechnologyDefinition } from '../../types';

export const googleSignInTechnologyDefinition = {
	id: "google-sign-in",
	name: "Google Sign-in",
	website: "https://developers.google.com/identity/sign-in/web",
	description: "Google Sign-In is a secure authentication system that reduces the burden of login for users, by enabling them to sign in with their Google account.",
	icon: "Google.svg",
	categories: [
		"authentication-identity",
	],
	rules: [
		{
			id: "google-sign-in:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("accounts\\.google\\.com\\/gsi\\/client"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "google-sign-in:dom:1",
			kind: "dom",
			selector: "iframe[src*='accounts.google.com/o/oauth2'], a[href*='accounts.google.com/o/oauth2']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "google-sign-in:jsGlobal:2",
			kind: "jsGlobal",
			property: "googleSignInClientId",
			description: "Page-owned global matches a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
