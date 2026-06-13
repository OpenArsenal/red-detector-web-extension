import type { TechnologyDefinition } from '../../types';

export const a3LazyLoadTechnologyDefinition = {
	id: "a3-lazy-load",
	name: "a3 Lazy Load",
	website: "https://a3rev.com/shop/a3-lazy-load/",
	description: "a3 Lazy Load is a mobile oriented, very simple to use plugin that will speed up sites page load speed.",
	icon: "a3.png",
	categories: [
		"wordpress-ecosystem",
		"monitoring-error-tracking",
	],
	rules: [
		{
			id: "a3-lazy-load:scriptSrc:0",
			kind: "scriptSrc",
			pattern: new RegExp("\\/wp-content\\/plugins\\/a3-lazy-load\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
			version: {
				source: "match",
				group: 1,
			},
			description: "Script source URL matches a known technology marker.",
		},
		{
			id: "a3-lazy-load:jsGlobal:1",
			kind: "jsGlobal",
			property: "a3_lazyload_extend_params",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "a3-lazy-load:jsGlobal:2",
			kind: "jsGlobal",
			property: "a3_lazyload_params",
			description: "Page-owned global matches a known technology marker.",
		},
	],
	metadata: {
		pricing: [
			"freemium",
			"low",
			"recurring",
		],
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
