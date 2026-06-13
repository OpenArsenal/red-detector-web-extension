import type { TechnologyDefinition } from '../../types';

export const parseLyTechnologyDefinition = {
	id: "parse-ly",
	name: "Parse.ly",
	website: "https://www.parse.ly",
	icon: "Parse.ly.svg",
	categories: [
		"analytics",
	],
	rules: [
		{
			id: "parse-ly:jsGlobal:0",
			kind: "jsGlobal",
			property: "PARSELY",
			description: "Page-owned global matches a known technology marker.",
		},
	],
} as const satisfies TechnologyDefinition;
