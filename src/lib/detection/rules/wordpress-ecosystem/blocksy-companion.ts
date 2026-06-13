import type { TechnologyDefinition } from '../../types';

export const blocksyCompanionTechnologyDefinition = {
	id: "blocksy-companion",
	name: "Blocksy Companion",
	website: "https://creativethemes.com/blocksy/companion/",
	description: "Blocksy Companion is a WordPress plugin that provides additional functionality and features for the Blocksy theme.",
	icon: "Blocksy.svg",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "blocksy-companion:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/blocksy-companion(?:-pro)?\\/"),
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "blocksy-companion:dom:1",
			kind: "dom",
			selector: "link[href*='/wp-content/plugins/blocksy-companion']",
			description: "DOM selector matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"low",
			"recurring",
		],
		cpe: "cpe:2.3:a:creativethemes:blocksy_companion:*:*:*:*:*:wordpress:*:*",
	},
	implies: [
		"blocksy",
	],
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
