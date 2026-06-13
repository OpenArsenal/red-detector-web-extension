import type { TechnologyDefinition } from '../../types';

export const wordpressMultisiteTechnologyDefinition = {
	id: "wordpress-multisite",
	name: "WordPress Multisite",
	website: "https://wordpress.org/documentation/article/create-a-network/",
	description: "A multisite network is a collection of sites that all share the same WordPress installation core files.",
	icon: "WordPress.svg",
	categories: [
		"infrastructure-hosting",
	],
	rules: [
		{
			id: "wordpress-multisite:dom:0",
			kind: "dom",
			selector: "figure[style*='wp-content/uploads']",
			description: "DOM selector matches a known technology marker.",
		},
		{
			id: "wordpress-multisite:dom:1",
			kind: "dom",
			selector: "img[src*='wp-content/uploads/sites/'], img[srcset*='wp-content/uploads/sites/'], source[srcset*='wp-content/uploads/sites/']",
			description: "DOM contains WordPress multisite upload paths with a site-id segment.",
		},
		{
			id: "wordpress-multisite:html:2",
			kind: "html",
			pattern: new RegExp("wp-content/uploads/sites/\\d+", "i"),
			confidence: 95,
			description: "Document HTML contains WordPress multisite upload paths.",
		},
		{
			id: "wordpress-multisite:text:3",
			kind: "text",
			pattern: new RegExp("wp-content\\/uploads\\/sites\\/\\d+"),
			description: "Page text contains a known technology marker.",
		},
	],
	metadata: {
		oss: true,
	},
	requires: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;

export const wordpressVipTechnologyDefinition = {
	id: "wordpress-vip",
	name: "WordPress VIP",
	website: "https://wpvip.com",
	description: "WordPress VIP is a managed hosting platform for WordPress.",
	icon: "wpvip.svg",
	categories: [
		"infrastructure-hosting",
	],
	rules: [
		{
			id: "wordpress-vip:header:0",
			kind: "header",
			key: "x-powered-by",
			valuePattern: new RegExp("^WordPress VIP|wpvip\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
		{
			id: "wordpress-vip:header:1",
			kind: "header",
			key: "x-powered-by",
			valuePattern: new RegExp("^wordpress vip|wpvip\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
	],
	implies: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;

export const wordpressComTechnologyDefinition = {
	id: "wordpress-com",
	name: "WordPress.com",
	website: "https://wordpress.com",
	description: "WordPress.com is a platform for self-publishing that is popular for blogging and other works.",
	icon: "WordPress.svg",
	categories: [
		"infrastructure-hosting",
	],
	rules: [
		{
			id: "wordpress-com:header:0",
			kind: "header",
			key: "host-header",
			valuePattern: new RegExp("WordPress\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
		{
			id: "wordpress-com:scriptContent:1",
			kind: "scriptContent",
			pattern: new RegExp("ImportFromWordPressInsideMenu"),
			description: "Script content contains a bounded technology signature.",
		},
		{
			id: "wordpress-com:jsGlobal:2",
			kind: "jsGlobal",
			property: "WordPressPopularPosts",
			description: "Page-owned global matches a known technology marker.",
		},
		{
			id: "wordpress-com:header:3",
			kind: "header",
			key: "host-header",
			valuePattern: new RegExp("wordpress\\.com", "i"),
			description: "Response header matches a known technology marker.",
		},
	],
	implies: [
		"wordpress",
	],
} as const satisfies TechnologyDefinition;
