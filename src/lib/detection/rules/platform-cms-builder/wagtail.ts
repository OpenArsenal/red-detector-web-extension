import type { TechnologyDefinition } from '../../types';

export const wagtailTechnologyDefinition = {
	id: "wagtail",
	name: "Wagtail",
	website: "https://wagtail.org",
	description: "Wagtail is a Django content management system (CMS) focused on flexibility and user experience.",
	icon: "Wagtail.svg",
	categories: [
		"platform-cms-builder",
	],
	rules: [
		{
			id: "wagtail:dom:0",
			kind: "dom",
			selector: "[data-block-key]",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:dom:1",
			kind: "dom",
			selector: "[style*='images/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:dom:2",
			kind: "dom",
			selector: "img[src*='images/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:dom:3",
			kind: "dom",
			selector: "img[srcset*='images/'], source[srcset*='images/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:dom:4",
			kind: "dom",
			selector: "meta[content*='images/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:html:5",
			kind: "html",
			pattern: new RegExp("(?:\\/media)?\\/(?:original_images|images)\\/[\\w.-]+\\.(?:(?:fill|max|min)-\\d+x\\d+(?:-c\\d+)?|(?:width|height|scale)-\\d+|original)\\.", "i"),
			confidence: 85,
			description: "Document HTML contains Wagtail image rendition paths.",
		},
		{
			id: "wagtail:text:6",
			kind: "text",
			pattern: new RegExp("(?:\\.[a-z]+|\\/media)(?:\\/[\\w-]+)?\\/(?:original_images\\/[\\w-]+|images\\/[\\w-.]+\\.(?:(?:fill|max|min)-\\d+x\\d+(?:-c\\d+)?|(?:width|height|scale)-\\d+|original))\\."),
			description: "Page text contains a known technology marker.",
		},
		{
			id: "wagtail:dom:7",
			kind: "dom",
			selector: "video[poster*='images/']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wagtail:text:8",
			kind: "text",
			pattern: new RegExp("(?:\\.[a-z]+|\\/media)(?:\\/[\\w-]+)?\\/(?:original_images\\/[\\w-]+|images\\/[\\w\\-.]+\\.(?:(?:fill|max|min)-\\d+x\\d+(?:-c\\d+)?|(?:width|height|scale)-\\d+|original))\\."),
			description: "Page text contains a known technology marker.",
		},
		{
			id: "wagtail:text:9",
			kind: "text",
			pattern: new RegExp("(?:\\.[a-z]+|\\/media)(?:\\/[\\w-]+)?\\/(?:original_images\\/[\\w-]+|images\\/[\\w.-]+\\.(?:(?:fill|max|min)-\\d+x\\d+(?:-c\\d+)?|(?:width|height|scale)-\\d+|original))\\."),
			description: "Page text contains a known technology marker.",
		},
	],
	metadata: {
		oss: true,
		cpe: "cpe:2.3:a:torchbox:wagtail:*:*:*:*:*:*:*:*",
	},
	implies: [
		"django",
		"python",
	],
} as const satisfies TechnologyDefinition;
