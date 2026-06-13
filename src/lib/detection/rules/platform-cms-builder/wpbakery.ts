import type { TechnologyDefinition } from '../../types';

export const wpbakeryTechnologyDefinition = {
	id: "wpbakery",
	name: "wpBakery",
	website: "https://wpbakery.com",
	description: "WPBakery is a drag and drop visual page builder plugin for WordPress.",
	icon: "wpBakery.svg",
	categories: [
		"platform-cms-builder",
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "wpbakery:meta:0",
			kind: "meta",
			key: "generator",
			valuePattern: new RegExp("WPBakery", "i"),
			description: "Meta tag matches a known technology marker.",
		},
		{
			id: "wpbakery:meta:1",
			kind: "meta",
			key: "generator",
			valuePattern: new RegExp("wpbakery", "i"),
			description: "Meta tag matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"low",
			"onetime",
		],
	},
	implies: [
		"php",
	],
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
