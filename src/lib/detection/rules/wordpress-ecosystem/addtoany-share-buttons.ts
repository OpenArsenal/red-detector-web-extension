import type { TechnologyDefinition } from '../../types';

export const addtoanyShareButtonsTechnologyDefinition = {
	id: "addtoany-share-buttons",
	name: "AddToAny Share Buttons",
	website: "https://github.com/projectestac/wordpress-add-to-any",
	description: "AddToAny Share Buttons plugin for WordPress increases traffic and engagement by helping people share your posts and pages to any service.",
	icon: "AddToAny.svg",
	categories: [
		"wordpress-ecosystem",
	],
	rules: [
		{
			id: "addtoany-share-buttons:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/add-to-any\\/addtoany\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	implies: [
		"addtoany",
	],
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
