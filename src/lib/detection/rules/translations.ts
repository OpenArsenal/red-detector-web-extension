import type { TechnologyDefinition } from '../types';

export const translationsTechnologyDefinitions = [
	{
		id: "bablic",
		name: "Bablic",
		website: "https://www.bablic.com",
		description: "Bablic is a localisation solution to translate your website.",
		icon: "bablic.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "bablic:pageGlobal:0",
				kind: "pageGlobal",
				property: "bablic",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "conveythis",
		name: "ConveyThis",
		website: "https://www.conveythis.com/",
		description: "ConveyThis is a website translation service.",
		icon: "ConveyThis.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "conveythis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conveythis\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "conword",
		name: "Conword",
		website: "https://conword.io",
		description: "Conword is a platform that provides automatic translations for websites, enabling multilingual content delivery without manual intervention.",
		icon: "Conword.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "conword:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.conword\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "crowdin",
		name: "Crowdin",
		website: "https://crowdin.com",
		description: "Crowdin is a localization management platform that streamlines the process of translating, organizing, and maintaining multilingual content for software, websites, and other digital products.",
		icon: "Crowdin.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "crowdin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app\\.crowdin\\.net"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "easyling",
		name: "Easyling",
		website: "https://www.easyling.com",
		description: "Easyling is a website translation solution that provides tools for localizing websites through multiple methods.",
		icon: "Easyling.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "easyling:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.easyling\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "langify",
		name: "langify",
		website: "https://langify-app.com",
		description: "langify translate your shop into multiple languages. langify comes with a visual configurator that allows you to add language switchers that integrate seamlessly into your existing design.",
		icon: "langify.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "langify:pageGlobal:0",
				kind: "pageGlobal",
				property: "Langify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "langify:pageGlobal:1",
				kind: "pageGlobal",
				property: "langify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "langify:pageGlobal:2",
				kind: "pageGlobal",
				property: "langify.settings.switcher.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "linguise",
		name: "Linguise",
		website: "https://www.linguise.com",
		description: "Linguise is an automatic translation service with a front-end translation editor.",
		icon: "Linguise.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "linguise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/modules/mod_linguise/assets/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linguise:dom:1",
				kind: "dom",
				selector: "script[type='linguise/json']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "linguise:pageGlobal:2",
				kind: "pageGlobal",
				property: "linguise_configs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "paraglide-js",
		name: "Paraglide JS",
		website: "https://inlang.com/m/gerre34r/library-inlang-paraglideJs",
		description: "Paraglide JS is a compiler-based i18n library that emits tree-shakable message functions for optimized localization workflows.",
		icon: "ParaglideJS.svg",
		categories: [
			"translations",
			"developer-tooling"
		],
		rules: [
			{
				id: "paraglide-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "__paraglide",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pluglin",
		name: "Pluglin",
		website: "https://www.pluglin.com",
		description: "Pluglin is a platform that provides website translation services to support multilingual content.",
		icon: "Pluglin.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "pluglin:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.pluglin\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "smartling",
		name: "Smartling",
		website: "https://www.smartling.com",
		description: "Smartling is a cloud-based translation management system.",
		icon: "Smartling.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "smartling:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartling\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "smartling:pageGlobal:1",
				kind: "pageGlobal",
				property: "populateSmartlingDdl",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "transcy",
		name: "Transcy",
		website: "https://transcy.io",
		description: "Transcy is a Shopify translation app. Transcy allows you to translate your whole store content into target languages to reach different nation shoppers.",
		icon: "Transcy.svg",
		categories: [
			"translations",
			"content-publishing",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "transcy:pageGlobal:0",
				kind: "pageGlobal",
				property: "_transcy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "transcy:pageGlobal:1",
				kind: "pageGlobal",
				property: "transcy_apiURI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "transcy:pageGlobal:2",
				kind: "pageGlobal",
				property: "transcy_shopifyLocales",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "transifex",
		name: "Transifex",
		website: "https://www.transifex.com",
		description: "Transifex is a cloud-based platform for managing the translation and localization of digital content.",
		icon: "transifex.svg",
		categories: [
			"translations",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "transifex:pageGlobal:0",
				kind: "pageGlobal",
				property: "Transifex.live.lib_version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:transifex:transifex:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "weblate",
		name: "Weblate",
		website: "https://weblate.org",
		description: "Weblate is a web-based continuous localization platform that enables ongoing translation management and integration across software projects.",
		icon: "Weblate.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "weblate:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.weblate\\.org"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "weglot",
		name: "Weglot",
		website: "https://www.weglot.com",
		description: "Weglot is a website translation solution facilitating automatic and manual multilingual content management for website owners and developers.",
		icon: "Weglot.svg",
		categories: [
			"translations",
			"content-publishing"
		],
		rules: [
			{
				id: "weglot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.weglot\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "weglot:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content/plugins/weglot"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "weglot:responseHeader:2",
				kind: "responseHeader",
				key: "Weglot-Translated",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"low"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
