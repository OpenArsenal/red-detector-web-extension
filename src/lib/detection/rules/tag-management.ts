import type { TechnologyDefinition } from '../types';

export const tagManagementTechnologyDefinitions = [
	{
		id: "adobe-dtm",
		name: "Adobe DTM",
		website: "https://marketing.adobe.com/resources/help/en_US/dtm/c_overview.html",
		description: "Dynamic Tag Management (DTM) is a tag management solution for Adobe Experience Cloud applications and others.",
		icon: "adobedtm.png",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "adobe-dtm:jsGlobal:0",
				kind: "jsGlobal",
				property: "_satellite.buildDate",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "adobe-experience-platform-launch",
		name: "Adobe Experience Platform Launch",
		website: "https://docs.adobelaunch.com/getting-started",
		description: "Adobe Experience Cloud Launch is an extendable tag management solution for Adobe Experience Cloud, Adobe Experience Platform, and other applications.",
		icon: "Adobe Experience Platform.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "adobe-experience-platform-launch:jsGlobal:0",
				kind: "jsGlobal",
				property: "_satellite.buildInfo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "commanders-act-tagcommander",
		name: "Commanders Act TagCommander",
		website: "https://www.commandersact.com/en/solutions/tagcommander/",
		description: "Commanders Act TagCommander is an European company providing a tag management product designed to handle website tags.",
		icon: "Commanders Act.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "commanders-act-tagcommander:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tagcommander\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "commanders-act-tagcommander:jsGlobal:1",
				kind: "jsGlobal",
				property: "tc_vars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "ensighten",
		name: "Ensighten",
		website: "https://success.ensighten.com/hc/en-us",
		description: "Ensighten is a solution that enables secure management, implementation and control of website technologies.",
		icon: "ensighten.png",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "ensighten:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/nexus\\.ensighten\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "facebook-pixel-advanced-matching",
		name: "Facebook Pixel Advanced Matching",
		website: "https://www.facebook.com/business/help/611774685654668?id=1205376682832142",
		description: "Facebook Pixel Advanced Matching is a feature that allows the optimization of Meta ads by sending hashed customer information with Meta Pixel events, aiding in improved conversion attribution and broader audience reach.",
		icon: "Meta.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "facebook-pixel-advanced-matching:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("facebook\\.com\\/tr\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "facebook-pixel-advanced-matching:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("udff\\[em\\]=[a-fA-F0-9]{64}"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "facebook-pixel-advanced-matching:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("udff\\[.+\\]=[a-fA-F0-9]+"),
				description: "Observed request URL matches a known technology marker.",
			},
		],
		implies: [
			"facebook-pixel",
		],
	},
	{
		id: "google-tag-manager",
		name: "Google Tag Manager",
		website: "https://www.google.com/tagmanager",
		description: "Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.",
		icon: "Google Tag Manager.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "google-tag-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googletagmanager\\.com\\/gtm\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-tag-manager:html:1",
				kind: "html",
				pattern: new RegExp("googletagmanager\\.com\\/ns\\.html[^>]+><\\/iframe>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "google-tag-manager:html:2",
				kind: "html",
				pattern: new RegExp("<!-- (?:End )?Google Tag Manager -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "google-tag-manager:jsGlobal:3",
				kind: "jsGlobal",
				property: "googletag",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-tag-manager:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\.googletagmanager\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-tag-manager:jsGlobal:5",
				kind: "jsGlobal",
				property: "google_tag_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-tag-manager:jsGlobal:6",
				kind: "jsGlobal",
				property: "google_tag_manager",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "google-tag-manager:html:7",
				kind: "html",
				pattern: new RegExp("<!-- (?:end )?google tag manager -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "google-tag-manager:scriptSrc:8",
				kind: "scriptSrc",
				pattern: new RegExp("\\.googletagmanager\\.com\\/(gtm\\.js)?"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "matomo-tag-manager",
		name: "Matomo Tag Manager",
		website: "https://developer.matomo.org/guides/tagmanager/introduction",
		description: "Matomo Tag Manager manages tracking and marketing tags.",
		icon: "Matomo.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "matomo-tag-manager:jsGlobal:0",
				kind: "jsGlobal",
				property: "MatomoTagManager",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "tagpro",
		name: "TagPro",
		website: "https://tagpro.adpromedia.net",
		description: "TagPro is software that updates and allows you to manage tags within websites, identifying various types of variables to optimise loads for advertising.",
		icon: "TagPro.png",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "tagpro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tagpro\\.adpromedia\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tagpro:jsGlobal:1",
				kind: "jsGlobal",
				property: "initAdproTags",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "tealium",
		name: "Tealium",
		website: "https://tealium.com",
		description: "Tealium provides a sales enterprise tag management system and marketing software.",
		icon: "Tealium.png",
		categories: [
			"tag-management",
			"marketing-automation",
		],
		rules: [
			{
				id: "tealium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^(?:https?:)?\\/\\/tags\\.tiqcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tealium:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/tealium\\/utag\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tealium:jsGlobal:2",
				kind: "jsGlobal",
				property: "TEALIUMENABLED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tealium:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("tealium_js_path"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "tealium:jsGlobal:4",
				kind: "jsGlobal",
				property: "TealiumUtils",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tealium:jsGlobal:5",
				kind: "jsGlobal",
				property: "__tealium_twc_switch",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "yahoo-tag-manager",
		name: "Yahoo! Tag Manager",
		website: "https://tagmanager.yahoo.co.jp/",
		icon: "Yahoo.svg",
		categories: [
			"tag-management",
		],
		rules: [
			{
				id: "yahoo-tag-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("b\\.yjtag\\.jp\\/iframe"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yahoo-tag-manager:html:1",
				kind: "html",
				pattern: new RegExp("<!-- (?:End )?Yahoo! Tag Manager -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yahoo-tag-manager:html:2",
				kind: "html",
				pattern: new RegExp("<!-- (?:end )?yahoo! tag manager -->"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "yottaa",
		name: "Yottaa",
		website: "https://www.yottaa.com",
		description: "Yottaa is an ecommerce optimisation platform that helps with conversions, performance and security.",
		icon: "Yottaa.svg",
		categories: [
			"tag-management",
			"experimentation-optimization",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "yottaa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.yottaa\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
] as const satisfies readonly TechnologyDefinition[];
