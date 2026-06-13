import type { TechnologyDefinition } from '../types';

export const experimentationOptimizationTechnologyDefinitions = [
	{
		id: "4-tell",
		name: "4-Tell",
		website: "https://4-tell.com",
		description: "4-Tell is an ecommerce software company for retailers with AI-powered personalisation and recommendations products.",
		icon: "4-Tell.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "4-tell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("4tellcdn\\.azureedge\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "4-tell:jsGlobal:1",
				kind: "jsGlobal",
				property: "_4TellBoost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^4Tell$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^4TellCart$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^4TellSession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^4tell$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^4tellcart$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "4-tell:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^4tellsession$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "ab-tasty",
		name: "AB Tasty",
		website: "https://www.abtasty.com",
		description: "AB Tasty is a customer experience optimisation company. AB Tasty offers AI-driven experimentation, personalisation, and product optimisation platforms for user testing.",
		icon: "AB Tasty.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "ab-tasty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("try\\.abtasty\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ab-tasty:jsGlobal:1",
				kind: "jsGlobal",
				property: "ABTasty",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ab-tasty:jsGlobal:2",
				kind: "jsGlobal",
				property: "_abtasty",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ab-tasty:jsGlobal:3",
				kind: "jsGlobal",
				property: "loadABTasty",
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
		id: "ablyft",
		name: "ABLyft",
		website: "https://ablyft.com",
		description: "ABlyft is an A/B-Testing Platform made for developers.",
		icon: "ABlyft.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "ablyft:jsGlobal:0",
				kind: "jsGlobal",
				property: "ablyft.get",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ablyft:jsGlobal:1",
				kind: "jsGlobal",
				property: "ablyftClickListener",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ablyft:jsGlobal:2",
				kind: "jsGlobal",
				property: "ablyftEventQueueInterv",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ablyft:jsGlobal:3",
				kind: "jsGlobal",
				property: "ablyftStopQueue",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"poa",
			],
		},
	},
	{
		id: "adaptix",
		name: "Adaptix",
		website: "https://www.adaptix.ai",
		description: "Adaptix is a marketing automation platform that uses AI to help businesses create personalized customer experiences.",
		icon: "Adaptix.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "adaptix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adaptix\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adaptix:jsGlobal:1",
				kind: "jsGlobal",
				property: "AdaptixFormValidations",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adaptix:jsGlobal:2",
				kind: "jsGlobal",
				property: "AdaptixLang",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adaptix:jsGlobal:3",
				kind: "jsGlobal",
				property: "AdaptixSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adaptix:jsGlobal:4",
				kind: "jsGlobal",
				property: "AdaptixSDKLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "adnymics",
		name: "Adnymics",
		website: "https://adnymics.com",
		description: "Adnymics is a platform that enables personalization in ecommerce by tailoring content, recommendations, and experiences to individual users based on their behavior and preferences.",
		icon: "Adnymics.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "adnymics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trac\\.adnymics\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "adobe-audience-manager",
		name: "Adobe Audience Manager",
		website: "https://business.adobe.com/products/audience-manager/adobe-audience-manager.html",
		description: "Adobe Audience Manager is a versatile audience data management platform.",
		icon: "Adobe.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "adobe-audience-manager:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^Demdex$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "adobe-audience-manager:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^aam_uuid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "adobe-audience-manager:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^demdex$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "adobe-target",
		name: "Adobe Target",
		website: "https://www.adobe.com/marketing/target.html",
		description: "Adobe Target is an A/B testing, multi-variate testing, personalization, and optimization application.",
		icon: "Adobe.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "adobe-target:jsGlobal:0",
				kind: "jsGlobal",
				property: "adobe.target",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-target:jsGlobal:1",
				kind: "jsGlobal",
				property: "adobe.target.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "adoric",
		name: "Adoric",
		website: "https://adoric.com",
		description: "Adoric is a lead generation tool for personalized website engagement and conversion optimisation (CRO) platform.",
		icon: "Adoric.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "adoric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adoric-om\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adoric:dom:1",
				kind: "dom",
				selector: "link[href*='.adoric-om.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adoric:jsGlobal:2",
				kind: "jsGlobal",
				property: "IS_ADORIC_LOADED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adoric:jsGlobal:3",
				kind: "jsGlobal",
				property: "__adoric__",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "apptus",
		name: "Apptus",
		website: "https://www.apptus.com",
		description: "Apptus is an AI-powered ecommerce optimisation software provider.",
		icon: "Apptus.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "apptus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.esales\\.apptus\\.com.+(?:apptus-esales-api-([\\d.]+))\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "apptus:jsGlobal:1",
				kind: "jsGlobal",
				property: "ApptusEsales",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apptus:jsGlobal:2",
				kind: "jsGlobal",
				property: "apptusConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apptus:jsGlobal:3",
				kind: "jsGlobal",
				property: "apptusDebug",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apptus:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^apptus\\.customerKey$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "apptus:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^apptus\\.sessionKey$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "apptus:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^apptus\\.customerkey$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "apptus:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^apptus\\.sessionkey$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "attentive",
		name: "Attentive",
		website: "https://www.attentivemobile.com",
		description: "Attentive is a personalised mobile messaging platform that helps retail & ecommerce brands acquire, retain, and interact with mobile shoppers.",
		icon: "Attentive.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "attentive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attn\\.tv"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "attentive:jsGlobal:1",
				kind: "jsGlobal",
				property: "__attentive",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "attentive:jsGlobal:2",
				kind: "jsGlobal",
				property: "__attentive_domain",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "attentive:jsGlobal:3",
				kind: "jsGlobal",
				property: "attn_email_save",
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
		id: "barilliance",
		name: "Barilliance",
		website: "https://www.barilliance.com",
		description: "Barilliance is an ecommerce personalisation tools including cart abandonment emails, personalised product recommendations, onsite personalisation, and live notifications.",
		icon: "Barilliance.png",
		categories: [
			"experimentation-optimization",
			"commerce-operations",
		],
		rules: [
			{
				id: "barilliance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.barilliance\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "beamer",
		name: "Beamer",
		website: "https://www.getbeamer.com",
		description: "Beamer is a feature management platform that allows businesses to manage and share new product releases, feature updates, and bug fixes with their customers.",
		icon: "Beamer.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "beamer:jsGlobal:0",
				kind: "jsGlobal",
				property: "Beamer.enabled",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beamer:jsGlobal:1",
				kind: "jsGlobal",
				property: "_BEAMER_URL",
				valuePattern: new RegExp("\\/\\/app\\.getbeamer\\.com\\/"),
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
		id: "beyable",
		name: "Beyable",
		website: "https://beyable.com",
		description: "Beyable is a suite of tools that analyze website traffic to understand visitors' behaviors in real-time, through multi-channel in order to optimise conversion rate.",
		icon: "Beyable.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "beyable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("msecnd\\.net\\/api\\/beYableJSv(\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beyable:jsGlobal:1",
				kind: "jsGlobal",
				property: "BEYABLE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beyable:jsGlobal:2",
				kind: "jsGlobal",
				property: "beYableDomain",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beyable:jsGlobal:3",
				kind: "jsGlobal",
				property: "beYableKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beyable:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^beyable\\-cart$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "beyable:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^beyable\\-cartd$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "beyable:scriptSrc:6",
				kind: "scriptSrc",
				pattern: new RegExp("msecnd\\.net\\/api\\/beyablejsv(\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
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
		id: "bloom-labs",
		name: "Bloom Labs",
		website: "https://bloom.li",
		description: "Bloom Labs is a local content targeting system that uses data analytics to distribute content based on geographic relevance.",
		icon: "Bloom.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bloom-labs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bloom\\.li\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bluebarry",
		name: "bluebarry",
		website: "https://bluebarry.ai",
		description: "bluebarry is a tool that helps increase customer retention by guiding shoppers to relevant products.",
		icon: "bluebarry.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bluebarry:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bluebarrycdn\\.blob\\.core"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bluebarry:jsGlobal:1",
				kind: "jsGlobal",
				property: "barry.baseUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "blueknow",
		name: "Blueknow",
		website: "https://www.blueknow.com",
		description: "Blueknow is an ecommerce personalization software designed to serve enterprises, SMEs.",
		icon: "Blueknow.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "blueknow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blueknow\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blueknow:jsGlobal:1",
				kind: "jsGlobal",
				property: "Blueknow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blueknow:jsGlobal:2",
				kind: "jsGlobal",
				property: "BlueknowTracker",
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
		id: "bold-commerce",
		name: "Bold Commerce",
		website: "https://boldcommerce.com",
		description: "Bold Commerce is a software company that specialises in ecommerce websites and app development.",
		icon: "Bold.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bold-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boldapps\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bold-commerce:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boldcommerce\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "bounce-commerce",
		name: "Bounce Commerce",
		website: "https://www.bounce-commerce.de",
		description: "Bounce Commerce is a provider of AI-based engagement solutions that enhance conversion rates by assisting customers in finding the right products.",
		icon: "BounceCommerce.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bounce-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bounce-commerce\\.de"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bounce-commerce:jsGlobal:1",
				kind: "jsGlobal",
				property: "baBounceManagement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bounce-commerce:jsGlobal:2",
				kind: "jsGlobal",
				property: "bavBounceManagement",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "brainsins",
		name: "BrainSINS",
		website: "https://brainsins.com",
		description: "BrainSINS is a personalisation technology and ecommerce analytics services to online retailers.",
		icon: "BrainSINS.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "brainsins:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mw\\.brainsins\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "brainsins:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cloudfront\\.net\\/brainsins(?:_v)?(\\d+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "brainsins:jsGlobal:2",
				kind: "jsGlobal",
				property: "BrainSINS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brainsins:jsGlobal:3",
				kind: "jsGlobal",
				property: "BrainSINSRecommender",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brainsins:jsGlobal:4",
				kind: "jsGlobal",
				property: "brainsins_token",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brainsins:jsGlobal:5",
				kind: "jsGlobal",
				property: "launchBrainSINS",
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
		id: "breinify",
		name: "Breinify",
		website: "https://home.breinify.ai",
		description: "Breinify is a powerful personalisation engine that enables brands to create personalised digital experiences at an individual level across web, e-mail, SMS and app channels.",
		icon: "Breinify.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "breinify:jsGlobal:0",
				kind: "jsGlobal",
				property: "Breinify.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "bringie",
		name: "Bringie",
		website: "https://www.bringie.com",
		description: "Bringie is a conversion optimization platform that analyzes user behavior and performance metrics to enhance website effectiveness and increase engagement outcomes.",
		icon: "Bringie.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bringie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bringie\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bunting",
		name: "Bunting",
		website: "http://getbunting.com",
		description: "Bunting is a website personalization and AB testing tool.",
		icon: "Bunting.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "bunting:jsGlobal:0",
				kind: "jsGlobal",
				property: "$_Bunting",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "cartful",
		name: "Cartful",
		website: "https://www.cartful.com",
		description: "Cartful is a customer-focused service that assists online shoppers in locating suitable products on a website.",
		icon: "Cartful.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "cartful:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("embed\\.cartfulsolutions\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "cerkl",
		name: "Cerkl",
		website: "https://cerkl.com",
		description: "Cerkl is an internal communication software designed to support organizations of any size or structure.",
		icon: "Cerkl.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "cerkl:jsGlobal:0",
				kind: "jsGlobal",
				property: "cerklAptly",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cerkl:jsGlobal:1",
				kind: "jsGlobal",
				property: "cerkl_awp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cerkl:jsGlobal:2",
				kind: "jsGlobal",
				property: "cerkl_subscribe_box",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "clerk-io",
		name: "Clerk.io",
		website: "https://clerk.io",
		description: "Clerk.io is an ecommerce platform for site search, product recommendations, and personalization.",
		icon: "Clerk.io.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "clerk-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clerk\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clerk-io:jsGlobal:1",
				kind: "jsGlobal",
				property: "__clerk_cb_0",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clerk-io:jsGlobal:2",
				kind: "jsGlobal",
				property: "__clerk_q",
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
		id: "clinch",
		name: "Clinch",
		website: "https://clinch.co/",
		description: "Clinch delivers hyper-personalized creative experiences and consumer intelligence across all channels.",
		icon: "Clinch.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "clinch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.clinch\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "cloudengage",
		name: "CloudEngage",
		website: "https://cloudengage.com",
		description: "CloudEngage is a platform enabling no-code personalization for enhanced revenue and customer satisfaction.",
		icon: "CloudEngage.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "cloudengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudengage\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cloudengage:jsGlobal:1",
				kind: "jsGlobal",
				property: "CloudEngage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cloudengage:jsGlobal:2",
				kind: "jsGlobal",
				property: "CloudEngageHead",
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
		id: "clubcast",
		name: "Clubcast",
		website: "https://clubcast.co.uk",
		description: "Clubcast is a platform for managing and personalizing content for digital products, designed to enhance fan experiences and support revenue growth.",
		icon: "Clubcast.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "clubcast:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.clubcast\\.co\\.uk"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "clubcast:jsGlobal:1",
				kind: "jsGlobal",
				property: "ClubcastRegistry",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clubcast:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkclubcast",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "combeenation",
		name: "Combeenation",
		website: "https://www.combeenation.com",
		description: "Combeenation is a powerful cloud-based configurator platform.",
		icon: "Combeenation.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "combeenation:dom:0",
				kind: "dom",
				selector: "iframe[src*='portal.combeenation.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "complianz",
		name: "Complianz",
		website: "https://complianz.io",
		description: "Complianz is a GDPR/CCPA Cookie Consent plugin that supports GDPR, DSGVO, CCPA and PIPEDA with a conditional Cookie Notice and customized Cookie Policy based on the results of the built-in Cookie Scan.",
		icon: "Complianz.png",
		categories: [
			"experimentation-optimization",
			"privacy-compliance",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "complianz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/complianz-gdpr-premium"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "complianz:jsGlobal:1",
				kind: "jsGlobal",
				property: "complianz.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "complianz:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/complianz-gdpr"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:really-simple-plugins:complianz:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "connectif",
		name: "Connectif",
		website: "https://connectif.ai",
		description: "Connectif is a marketing automation and personalisation data-first action platform, powered by AI.",
		icon: "Connectif.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "connectif:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.connectif\\.cloud\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "connectif:jsGlobal:1",
				kind: "jsGlobal",
				property: "connectif.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "connectif:jsGlobal:2",
				kind: "jsGlobal",
				property: "connectifInfo.store",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "convert",
		name: "Convert",
		website: "https://www.convert.com",
		description: "Convert Experiences is an enterprise A/B testing and personalisation solution for conversion optimisation and data-driven decisions in high-traffic websites.",
		icon: "Convert.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "convert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.convertexperiments\\.com\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convert:jsGlobal:1",
				kind: "jsGlobal",
				property: "convert",
				confidence: 34,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "convert:jsGlobal:2",
				kind: "jsGlobal",
				property: "convertData",
				confidence: 33,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "convert:jsGlobal:3",
				kind: "jsGlobal",
				property: "convert_temp",
				confidence: 33,
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "convertbox",
		name: "ConvertBox",
		website: "https://convertbox.com",
		description: "ConvertBox is a tool that delivers targeted on-site messages based on visitor behavior to generate more leads, sales, and customers.",
		icon: "ConvertBox.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "convertbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertbox\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
		},
	},
	{
		id: "cordial",
		name: "Cordial",
		website: "https://cordial.com",
		description: "Cordial is a cross-channel marketing and customer engagement platform for enterprise brands to send personalized email, SMS, mobile push notifications.",
		icon: "Cordial.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "cordial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cordial\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cordial:jsGlobal:1",
				kind: "jsGlobal",
				property: "CordialJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cordial:jsGlobal:2",
				kind: "jsGlobal",
				property: "CordialObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cordial:jsGlobal:3",
				kind: "jsGlobal",
				property: "Cordial_trackUrl",
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
		id: "crall",
		name: "Crall",
		website: "https://crall.io/",
		description: "Crall is a personalized shopping experience system.",
		icon: "Crall.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "crall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.crall\\.io\\/w\\/widgets\\.js\\?v=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crall:jsGlobal:1",
				kind: "jsGlobal",
				property: "_CrallConfig",
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
		id: "crema",
		name: "CREMA",
		website: "https://www.cre.ma",
		description: "CREMA is a platform offering review management, marketing personalisation, and size recommendations to enhance and streamline the consumer journey.",
		icon: "CREMA.svg",
		categories: [
			"experimentation-optimization",
			"community-ugc",
		],
		rules: [
			{
				id: "crema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/widgets\\.cre\\.ma\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crema:jsGlobal:1",
				kind: "jsGlobal",
				property: "CremaCryptoJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crema:jsGlobal:2",
				kind: "jsGlobal",
				property: "crema.AdTracker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "cross-sell",
		name: "Cross Sell",
		website: "https://csell.io/",
		description: "Cross Sell provide recommendations solution for Shopify based sites.",
		icon: "CrossSell.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "cross-sell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("load\\.csell\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"cart-functionality",
			"shopify",
		],
	},
	{
		id: "customfit",
		name: "CustomFit",
		website: "https://www.customfit.ai",
		description: "CustomFit is a no-code website personalization platform that enables marketers to increase conversions by customizing content for specific audience segments.",
		icon: "CustomFit.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "customfit:jsGlobal:0",
				kind: "jsGlobal",
				property: "CustomFit.CFEvent",
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
		id: "customily",
		name: "Customily",
		website: "https://www.customily.com",
		description: "Customily is an online product personalisation software.",
		icon: "Customily.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "customily:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|app)\\.customily\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "customily:jsGlobal:1",
				kind: "jsGlobal",
				property: "customily.sticky",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "cxense",
		name: "Cxense",
		website: "https://www.cxense.com",
		description: "Cxense was an AI-powered data management and intelligent personalisation platform.",
		icon: "Cxense.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "cxense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cxense\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "dapta",
		name: "Dapta",
		website: "https://dapta.ai",
		description: "Dapta is a real-time visitor segmentation and website personalization platform that uses AI to accelerate sales, marketing, and operations workflows for small and medium-sized businesses.",
		icon: "Dapta.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "dapta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dapta\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dapta:jsGlobal:1",
				kind: "jsGlobal",
				property: "daptaAgent.agent_context",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dapta:jsGlobal:2",
				kind: "jsGlobal",
				property: "toggleDaptaWidgetChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "darwin-pricing",
		name: "Darwin Pricing",
		website: "https://www.darwinpricing.com",
		description: "Darwin Pricing is a data science platform that applies dynamic pricing strategies by analyzing market conditions and customer behavior to optimize revenue and pricing decisions.",
		icon: "DarwinPriicing.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "darwin-pricing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.darwinpricing\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "depict",
		name: "Depict",
		website: "https://depict.ai",
		description: "Depict is an ecommerce personalisation solution for fashion.",
		icon: "Depict.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "depict:dom:0",
				kind: "dom",
				selector: "link[href*='.depict.ai/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "dexter",
		name: "Dexter",
		website: "https://www.thedexterapp.com",
		description: "Dexter is a tool that analyzes product pricing through A/B testing to identify potential revenue opportunities.",
		icon: "Dexter.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "dexter:jsGlobal:0",
				kind: "jsGlobal",
				property: "dexterLiquidVariables",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dexter:jsGlobal:1",
				kind: "jsGlobal",
				property: "dexterProduct",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "dialogue",
		name: "Dialogue",
		website: "https://nowdialogue.com/",
		description: "Dialogue is an ecommerce personalization platform that helps brands increase sales and conversion rates through AI-driven recommendations.",
		icon: "Dialogue.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "dialogue:jsGlobal:0",
				kind: "jsGlobal",
				property: "DialogueAI",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "drapr",
		name: "Drapr",
		website: "https://www.drapr.com",
		description: "Drapr is an ecommerce startup and online application based on technology that enables customers to quickly create 3D avatars and virtually try on clothing.",
		icon: "Drapr.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "drapr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("draprpubsubtest\\.firebaseapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "drapr:jsGlobal:1",
				kind: "jsGlobal",
				property: "drapr_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "drapr:jsGlobal:2",
				kind: "jsGlobal",
				property: "drapr_deferLoading",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "dreamroi",
		name: "DreamROI",
		website: "https://www.dreamroi.com",
		description: "DreamROI is a content personalization system for eCommerce that tailors on-site experiences based on user behavior and product interactions.",
		icon: "DreamROI.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "dreamroi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.dreamroi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dreamroi:jsGlobal:1",
				kind: "jsGlobal",
				property: "dreamroibox.refresh",
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
		id: "dynamic-yield",
		name: "Dynamic Yield",
		website: "https://www.dynamicyield.com",
		description: "Dynamic Yield is a provider of automated conversion optimisation tools for marketers and retailers.",
		icon: "DynamicYield.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "dynamic-yield:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn(?:-eu)?\\.dynamicyield\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dynamic-yield:jsGlobal:1",
				kind: "jsGlobal",
				property: "DY.AdDetection",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dynamic-yield:jsGlobal:2",
				kind: "jsGlobal",
				property: "DYExps.sectionConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dynamic-yield:jsGlobal:3",
				kind: "jsGlobal",
				property: "_dy_memStore",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dynamic-yield:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^_dy_geo$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "dynamic-yield:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^_dy_ses_load_seq$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "epoq",
		name: "Epoq",
		website: "https://www.epoq.de",
		description: "Epoq is a platform that leverages artificial intelligence to deliver one-to-one personalization in e-commerce, enhancing product recommendations and user interactions through data-driven insights.",
		icon: "Epoq.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "epoq:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.epoq\\.de"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "estore-compare",
		name: "Estore Compare",
		website: "https://estore.co.jp/estorecompare/",
		description: "Estore Compare is a website optimisation software that offers A/B testing, CVR and LTV measuring tools.",
		icon: "EstoreCompare.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "estore-compare:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\d+\\.estore\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "fanplayr",
		name: "Fanplayr",
		website: "https://fanplayr.com",
		description: "Fanplayr is a real-time insights platform that provides website optimisation and personalisation solutions for businesses.",
		icon: "Fanplayr.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fanplayr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fanplayr\\.com\\/.+\\/([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fanplayr:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.fanplayr.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fanplayr:jsGlobal:2",
				kind: "jsGlobal",
				property: "fanplayr.platform.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "featurebase",
		name: "Featurebase",
		website: "https://www.featurebase.app",
		description: "Featurebase is feature management software designed to collect, organise, and analyse product feedback, empowering teams to make data-driven decisions for building products that align with customer preferences.",
		icon: "Featurebase.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "featurebase:dom:0",
				kind: "dom",
				selector: "meta[http-equiv*='Content-Security-Policy'][content*='//featurebase.app']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "findmeashoe",
		name: "Findmeashoe",
		website: "https://findmeashoe.com",
		description: "Findmeashoe is a footwear recommendation portal that aims to improve shopping efficiency and experience of footwear shoppers.",
		icon: "Findmeashoe.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "findmeashoe:jsGlobal:0",
				kind: "jsGlobal",
				property: "FmasJavaScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "findmeashoe:jsGlobal:1",
				kind: "jsGlobal",
				property: "fmasGenderSizeTextVariantIdCollection",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "findmeashoe:jsGlobal:2",
				kind: "jsGlobal",
				property: "fmasUniversalWidgetJsFileName",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "fit-analytics",
		name: "Fit Analytics",
		website: "https://www.fitanalytics.com",
		description: "Fit Analytics is a platform that provides clothing size recommendations for online customers by measuring individual dimensions via webcams.",
		icon: "Fit Analytics.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fit-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fitanalytics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fit-analytics:jsGlobal:1",
				kind: "jsGlobal",
				property: "FitAnalyticsWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fit-analytics:jsGlobal:2",
				kind: "jsGlobal",
				property: "_fitAnalytics",
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
		id: "fitizzy",
		name: "Fitizzy",
		website: "https://www.fitizzy.com",
		description: "Fitizzy is an omnichannel recommendation solution that assists in determining appropriate clothing sizes across various retail platforms.",
		icon: "Fitizzy.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fitizzy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s\\.ftz\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fitizzy:header:1",
				kind: "header",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.fitizzy\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fitizzy:header:2",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.fitizzy\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fitle",
		name: "Fitle",
		website: "https://fitle.com",
		description: "Fitle is a clothes size recommendation system developed in France that helps determine accurate apparel sizing based on user data.",
		icon: "Fitle.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fitle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fitle\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flagsmith",
		name: "FlagSmith",
		website: "https://flagsmith.com",
		description: "FlagSmith is an open-source, fully supported feature flag & remote configuration solution, which provides hosted API to help deployment to a private cloud or on-premises environment.",
		icon: "FlagSmith.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "flagsmith:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.flagsmith\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flagsmith:jsGlobal:1",
				kind: "jsGlobal",
				property: "flagsmith",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:flagsmith:flagsmith:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "fresh-relevance",
		name: "Fresh Relevance",
		website: "https://www.freshrelevance.com",
		description: "Fresh Relevance is a personalization platform designed to create cross-channel experiences, enabling businesses to deliver customized customer interactions.",
		icon: "FreshRelevance.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "fresh-relevance:dom:0",
				kind: "dom",
				selector: "link[href*='am.freshrelevance.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "glami",
		name: "Glami",
		website: "https://www.glami.sk",
		description: "Glami is a fashion quiz system designed to personalize style recommendations based on user preferences and responses.",
		icon: "Glami.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "glami:jsGlobal:0",
				kind: "jsGlobal",
				property: "GlamiTrackerObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "glami:jsGlobal:1",
				kind: "jsGlobal",
				property: "GlamiTrackerObjectInstance",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "glami:jsGlobal:2",
				kind: "jsGlobal",
				property: "glami",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "google-optimize",
		name: "Google Optimize",
		website: "https://optimize.google.com",
		description: "Google Optimize allows you to test variants of web pages and see how they perform.",
		icon: "Google Optimize.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "google-optimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googleoptimize\\.com\\/optimize\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-optimize:jsGlobal:1",
				kind: "jsGlobal",
				property: "google_optimize",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "govoto",
		name: "GoVoto",
		website: "https://www.govoto.com",
		description: "GoVoto is a platform that improves website performance through conversion rate optimization, increasing the likelihood that visitors complete desired actions and become customers.",
		icon: "GoVoto.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "govoto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.govoto\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "groobee",
		name: "Groobee",
		website: "https://groobee.net",
		description: "Groobee is a solution for personalized ecommerce marketing, offering features to support customer personalization.",
		icon: "Groobee.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "groobee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.groobee\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "groobee:jsGlobal:1",
				kind: "jsGlobal",
				property: "groobee",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "growthbook",
		name: "GrowthBook",
		website: "https://www.growthbook.io",
		description: "GrowthBook is a platform for product teams to run and track experiments, analyze results, and make data-driven decisions to optimize their products for growth.",
		icon: "GrowthBook.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "growthbook:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.growthbook.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "growthbook:jsGlobal:1",
				kind: "jsGlobal",
				property: "_growthbook.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "growthbook:jsGlobal:2",
				kind: "jsGlobal",
				property: "_siteSetting.growthBookApiHost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "growthbook:jsGlobal:3",
				kind: "jsGlobal",
				property: "growthbook",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:growthbook:growthbook:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "hello-retail",
		name: "Hello Retail",
		website: "https://helloretail.com",
		description: "Hello Retail is an AI-driven platform that delivers personalized product recommendations, intelligent search, and email solutions for ecommerce.",
		icon: "HelloRetail.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "hello-retail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/helloretailcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hello-retail:jsGlobal:1",
				kind: "jsGlobal",
				property: "HELLO_RETAIL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hello-retail:jsGlobal:2",
				kind: "jsGlobal",
				property: "HelloRetailSwiper",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "hulkapps-infinite-product-options",
		name: "HulkApps Infinite Product Options",
		website: "https://www.hulkapps.com/products/infinite-product-options-shopify",
		description: "HulkApps Infinite Product Options is a unlimited custom options for products. Display variant options as buttons, color and image swatches, and more.",
		icon: "HulkApps.svg",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hulkapps-infinite-product-options:jsGlobal:0",
				kind: "jsGlobal",
				property: "hulkapps.po_url",
				valuePattern: new RegExp("productoption\\.hulkapps\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "igodigital",
		name: "iGoDigital",
		website: "https://www.igodigital.com",
		description: "iGoDigital provides web-based commerce tools, personalisation, and product recommendations designed to increase customer interaction.",
		icon: "default.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "igodigital:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.igodigital\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "intelligems",
		name: "Intelligems",
		website: "https://intelligems.io",
		description: "Intelligems is a tool that facilitates profit optimization for ecommerce businesses by allowing easy testing of prices, discounts, and shipping rates with the aim of maximizing margins.",
		icon: "Intelligems.svg",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "intelligems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.intelligems\\.io\\/[\\w]+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intelligems:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunk_intelligems_shopify_plugin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "intelligems:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.intelligems\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intelligems:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^ig\\-location$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "intellimize",
		name: "Intellimize",
		website: "https://www.intellimize.com",
		description: "Intellimize is a platform that utilizes machine learning to optimize website experiences and increase conversions in real-time.",
		icon: "Intellimize.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "intellimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.intellimize\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intellimize:jsGlobal:1",
				kind: "jsGlobal",
				property: "intellimize",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "jeeng",
		name: "Jeeng",
		website: "https://www.jeeng.com",
		description: "Jeeng is a personalized notification platform that delivers targeted updates based on user preferences and engagement patterns.",
		icon: "Jeeng.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "jeeng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.jeeng\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jeeng:jsGlobal:1",
				kind: "jsGlobal",
				property: "jeeng_attribution",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "jivox",
		name: "Jivox",
		website: "https://jivox.com",
		description: "Jivox is a cloud-based, data-driven platform for delivering personalised digital advertising and marketing experiences at scale.",
		icon: "Jivox.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "jivox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jivox\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jivox:dom:1",
				kind: "dom",
				selector: "link[href*='.jivox.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "jubna",
		name: "Jubna",
		website: "https://www.jubna.com",
		description: "Jubna is a content recommendation engine that delivers personalized suggestions by analyzing user behavior and preferences.",
		icon: "Jubna.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "jubna:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jubna\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "juo",
		name: "Juo",
		website: "https://get.juo.io",
		description: "Juo is a centralised experimentation platform for innovative marketing and product teams.",
		icon: "Juo.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "juo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.juo\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "justuno",
		name: "Justuno",
		website: "https://www.justuno.com",
		description: "Justuno is a visitor conversion optimisation platform.",
		icon: "Justuno.svg",
		categories: [
			"experimentation-optimization",
			"commerce-operations",
		],
		rules: [
			{
				id: "justuno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.jst\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "justuno:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.justuno\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "justuno:jsGlobal:2",
				kind: "jsGlobal",
				property: "JustunoApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "kaisa",
		name: "Kaisa",
		website: "https://www.kaisa.io",
		description: "Kaisa is a platform that leverages data to maintain buyer and seller engagement through personalised customer experiences on a large scale.",
		icon: "Kaisa.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "kaisa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.freespee\\.com\\/js\\/external\\/fs\\.(?:min\\.)?js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "kameleoon",
		name: "Kameleoon",
		website: "https://kameleoon.com/",
		description: "Kameleoon is a personalisation technology platform for real-time omnichannel optimisation and conversion.",
		icon: "Kameleoon.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "kameleoon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kameleoon\\.\\w+\\/kameleoon\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kameleoon:dom:1",
				kind: "dom",
				selector: "link[href*='.kameleoon.eu/kameleoon.js']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kameleoon:jsGlobal:2",
				kind: "jsGlobal",
				property: "Kameleoon.Gatherer.SCRIPT_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kameleoon:jsGlobal:3",
				kind: "jsGlobal",
				property: "kameleoonEndLoadTime",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kameleoon:jsGlobal:4",
				kind: "jsGlobal",
				property: "kameleoonS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kameleoon:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^kameleoonVisitorCode$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "kameleoon:jsGlobal:6",
				kind: "jsGlobal",
				property: "kameleoonIframeURL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kameleoon:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^kameleoonvisitorcode$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "karte",
		name: "Karte",
		website: "https://karte.io",
		description: "Karte is a customer engagement and marketing automation platform that enables businesses to understand their customers, deliver personalised experiences, and optimise marketing strategies.",
		icon: "Karte.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "karte:jsGlobal:0",
				kind: "jsGlobal",
				property: "__KARTE_REWRITE_ADMIN_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "karte:jsGlobal:1",
				kind: "jsGlobal",
				property: "__karte_live",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "karte:jsGlobal:2",
				kind: "jsGlobal",
				property: "__karte_loaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "karte:jsGlobal:3",
				kind: "jsGlobal",
				property: "__karte_tracker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "kibo-personalization",
		name: "Kibo Personalization",
		website: "https://kibocommerce.com/personalization-software",
		description: "Kibo Personalization is an omnichannel personalization software powered by machine learning to deliver individualized customer experiences and powered by Monetate and Certona.",
		icon: "Kibo.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "kibo-personalization:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.monetate\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kibo-personalization:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.baynote\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kibo-personalization:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.certona\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:3",
				kind: "jsGlobal",
				property: "BaynoteAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:4",
				kind: "jsGlobal",
				property: "BaynoteJSVersion",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:5",
				kind: "jsGlobal",
				property: "certona.recommendations",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:6",
				kind: "jsGlobal",
				property: "certonaRecommendations",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:7",
				kind: "jsGlobal",
				property: "monetate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:8",
				kind: "jsGlobal",
				property: "monetateQ",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kibo-personalization:jsGlobal:9",
				kind: "jsGlobal",
				property: "monetateT",
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
		id: "kiwi-sizing",
		name: "Kiwi Sizing",
		website: "https://www.kiwisizing.com",
		description: "Kiwi Sizing is a size chart and a recommender plugin on the Shopify platform.",
		icon: "Kiwi Sizing.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "kiwi-sizing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.static\\.kiwisizing\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kiwi-sizing:jsGlobal:1",
				kind: "jsGlobal",
				property: "KiwiSizing",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "launchdarkly",
		name: "LaunchDarkly",
		website: "https://launchdarkly.com",
		description: "LaunchDarkly is a continuous delivery and feature flags as a service platform that integrates into a company's current development cycle.",
		icon: "LaunchDarkly.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "launchdarkly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.|\\-)launchdarkly(?:\\.com\\/|\\-sdk\\.)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "launchdarkly:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("app\\.launchdarkly\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "launchdarkly:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("events\\.launchdarkly\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "launchdarkly:dom:3",
				kind: "dom",
				selector: "link[href*='.launchdarkly.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "launchdarkly:jsGlobal:4",
				kind: "jsGlobal",
				property: "DDC.WS.state",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "launchdarkly:jsGlobal:5",
				kind: "jsGlobal",
				property: "launchDarkly",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "launchnotes",
		name: "LaunchNotes",
		website: "https://launchnotes.com",
		description: "LaunchNotes is a platform that aligns teams with product development and release pipelines while keeping users informed and engaged with product updates.",
		icon: "LaunchNotes.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "launchnotes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.launchnotes\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "liftigniter",
		name: "LiftIgniter",
		website: "https://www.liftigniter.com",
		description: "LiftIgniter is a personalized content system designed to tailor recommendations and content to individual users based on their preferences and behaviours.",
		icon: "LiftIgniter.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "liftigniter:dom:0",
				kind: "dom",
				selector: "phoenix-script[script-id*='liftigniter-init']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "liftigniter:jsGlobal:1",
				kind: "jsGlobal",
				property: "liftIgniterLoadPromise",
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
		id: "limespot",
		name: "LimeSpot",
		website: "https://www.limespot.com",
		description: "LimeSpot is an AI-powered personalisation platform for marketers and ecommerce professionals.",
		icon: "LimeSpot.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "limespot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.personalizer\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "limespot:jsGlobal:1",
				kind: "jsGlobal",
				property: "LimeSpot.CartItems",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "limespot:jsGlobal:2",
				kind: "jsGlobal",
				property: "LimeSpot.Recommendations",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "lumise",
		name: "Lumise",
		website: "https://lumise.com",
		description: "Lumise is a solution for personalisation stores, featuring a product designer tool compatible with Woocommerce, PHP, Magento, Opencart, and other CMS platforms.",
		icon: "Lumise.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "lumise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lumise\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lumise:jsGlobal:1",
				kind: "jsGlobal",
				property: "lumise",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
		},
	},
	{
		id: "mazeed",
		name: "Mazeed+",
		website: "https://mazeedplus.com",
		description: "Mazeed+ is a platform that uses artificial intelligence to personalize and display targeted offers to website visitors based on user behavior and engagement.",
		icon: "Mazeed+.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "mazeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk-cdn\\.mazeedplus\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mezereon",
		name: "Mezereon",
		website: "https://www.mezereon.com",
		description: "Mezereon is an AI-powered platform that provides search, filters, insights, analytics, personalization, autocomplete, and recommendations to help businesses optimize their user experiences.",
		icon: "Mezereon.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "mezereon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.mezereon\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "monetate",
		name: "Monetate",
		website: "https://monetate.com",
		description: "Monetate is a company that specializes in providing personalisation and customer experience optimisation solutions to businesses.",
		icon: "Monetate.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "monetate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.monetate\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "monetate:jsGlobal:1",
				kind: "jsGlobal",
				property: "monetate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "monetate:jsGlobal:2",
				kind: "jsGlobal",
				property: "monetateQ",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "monetate:jsGlobal:3",
				kind: "jsGlobal",
				property: "monetateT",
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
		id: "movable-ink",
		name: "Movable Ink",
		website: "https://movableink.com",
		description: "Movable Ink is a technology company that allows marketers to change emails after they have been sent out.",
		icon: "Movable Ink.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "movable-ink:jsGlobal:0",
				kind: "jsGlobal",
				property: "MovableInkTrack",
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
		id: "mutiny",
		name: "Mutiny",
		website: "https://www.mutinyhq.com",
		description: "Mutiny is a no-code AI platform designed to aid marketers in converting top-of-funnel demand into revenue without requiring the expertise of engineers.",
		icon: "Mutiny.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "mutiny:jsGlobal:0",
				kind: "jsGlobal",
				property: "mutiny",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mutiny:jsGlobal:1",
				kind: "jsGlobal",
				property: "mutinyData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mutiny:jsGlobal:2",
				kind: "jsGlobal",
				property: "mutinyEditor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mutiny:jsGlobal:3",
				kind: "jsGlobal",
				property: "mutinyWpJsonp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:mutiny:mutiny:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "navu",
		name: "Navu",
		website: "https://navu.co",
		description: "Navu is a platform that uses AI to enhance B2B websites by delivering targeted messages to visitors, helping improve lead conversion through personalized user engagement.",
		icon: "Navu.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "navu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c\\.navu\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "navu:jsGlobal:1",
				kind: "jsGlobal",
				property: "$_navuEmbedded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "navu:jsGlobal:2",
				kind: "jsGlobal",
				property: "$navuContext",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "neat-a-b-testing",
		name: "Neat A/B testing",
		website: "https://neatab.com",
		description: "Neat A/B Testing is a Shopify app built by NeatShift.",
		icon: "Neat.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "neat-a-b-testing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.neatab\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "nelio-testing",
		name: "Nelio Testing",
		website: "https://neliosoftware.com/testing",
		description: "Nelio Testing is a plugin that allows testing everything on a WordPress site.",
		icon: "NelioTesting.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "nelio-testing:jsGlobal:0",
				kind: "jsGlobal",
				property: "nabSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nelio-testing:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^nabUniqueViews$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nelio-testing:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^nabuniqueviews$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
			cpe: "cpe:2.3:a:neliosoftware:nelio_ab_testing:*:*:*:*:*:*:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "nosto",
		name: "Nosto",
		website: "https://www.nosto.com",
		description: "Nosto is an ecommerce platform providing product recommendations based on individual behavioral data.",
		icon: "Nosto.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "nosto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.nosto\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nosto:jsGlobal:1",
				kind: "jsGlobal",
				property: "nosto",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nosto:jsGlobal:2",
				kind: "jsGlobal",
				property: "nostojs",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nosto:meta:3",
				kind: "meta",
				key: "nosto-version",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
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
		id: "noticeable",
		name: "Noticeable",
		website: "https://noticeable.io",
		description: "Noticeable is a platform that simplifies product updates and company announcements while enhancing user communication and feedback analysis.",
		icon: "Noticeable.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "noticeable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.noticeable\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "noticeable:jsGlobal:1",
				kind: "jsGlobal",
				property: "noticeable",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "nuqlium",
		name: "Nuqlium",
		website: "https://www.nuqlium.com",
		description: "Nuqlium is an integrated cloud-based online merchandising platform.",
		icon: "Nuqlium.png",
		categories: [
			"experimentation-optimization",
			"search",
		],
		rules: [
			{
				id: "nuqlium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nuqlium\\.com\\/api"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nuqlium:jsGlobal:1",
				kind: "jsGlobal",
				property: "nuqliumObject",
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
		id: "olvy",
		name: "Olvy",
		website: "https://olvy.co",
		description: "Olvy is a feedback management platform that enables user-centric teams to analyze insights, streamline product development, and keep stakeholders informed.",
		icon: "Olvy.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "olvy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.olvy\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "olvy:jsGlobal:1",
				kind: "jsGlobal",
				property: "OlvyConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "olvy:jsGlobal:2",
				kind: "jsGlobal",
				property: "OlvyInstances",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "omeda",
		name: "Omeda",
		website: "https://www.omeda.com",
		description: "Omeda is a platform that enables the creation of new products by starting with accurate audience segmentation and targeting.",
		icon: "Omeda.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "omeda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("olytics\\.omeda\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "omniconvert",
		name: "Omniconvert",
		website: "https://www.omniconvert.com",
		description: "Omniconvert is an award-winning conversion rate optimisation (CRO) software that can be used for A/B testing, online surveys, traffic segmentation.",
		icon: "Omniconvert.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "omniconvert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.omniconvert\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "omniconvert:dom:1",
				kind: "dom",
				selector: "link[href*='app.omniconvert.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "omniconvert:jsGlobal:2",
				kind: "jsGlobal",
				property: "_omni",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "optibase",
		name: "Optibase",
		website: "https://www.optibase.io",
		description: "Optibase is an A/B testing app for Webflow, enabling data-driven decisions by testing various elements such as copy, design, or entire pages, aimed at improving site conversions.",
		icon: "Optibase.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "optibase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.optibase\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optibase:jsGlobal:1",
				kind: "jsGlobal",
				property: "optibaseScriptLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		requires: [
			"webflow",
		],
	},
	{
		id: "optimizely",
		name: "Optimizely",
		website: "https://www.optimizely.com",
		description: "Optimizely is an experimentation platform that helps developers build and run A/B tests on websites.",
		icon: "Optimizely.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "optimizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("optimizely\\.com.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optimizely:jsGlobal:1",
				kind: "jsGlobal",
				property: "optimizely",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "optimizely:jsGlobal:2",
				kind: "jsGlobal",
				property: "optimizelyClient.clientVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "optimizely:jsGlobal:3",
				kind: "jsGlobal",
				property: "optimizelySdk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "optimizely:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^optimizelyEndUserId$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "optimizely:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^optimizelyenduserid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"poa",
			],
		},
	},
	{
		id: "oracle-bluekai",
		name: "Oracle BlueKai",
		website: "https://www.oracle.com/cx/marketing/data-management-platform",
		description: "Oracle BlueKai is a cloud-based big data platform that enables companies to personalise online, offline, and mobile marketing campaigns.",
		icon: "Oracle.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "oracle-bluekai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.(?:bluekai|bkrtx)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oracle-bluekai:dom:1",
				kind: "dom",
				selector: "link[href*='tags.bluekai.com'],link[href*='tags.bkrtx.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "oracle-bluekai:jsGlobal:2",
				kind: "jsGlobal",
				property: "bluekaiLoaded",
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
		id: "oracle-maxymiser",
		name: "Oracle Maxymiser",
		website: "https://www.oracle.com/uk/cx/marketing/personalization-testing",
		description: "Oracle Maxymiser is a real-time behavioral targeting, in-session personalisation, and product recommendations platform.",
		icon: "Oracle.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "oracle-maxymiser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.maxymiser\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oracle-maxymiser:jsGlobal:1",
				kind: "jsGlobal",
				property: "maxy",
				confidence: 20,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oracle-maxymiser:jsGlobal:2",
				kind: "jsGlobal",
				property: "mmsystem.getConfig",
				confidence: 80,
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
		id: "outfindo",
		name: "Outfindo",
		website: "https://www.outfindo.com",
		description: "Outfindo is a platform that provides product selection guides for websites to improve customer shopping experiences and boost conversions.",
		icon: "Outfindo.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "outfindo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.outfindo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outfindo:jsGlobal:1",
				kind: "jsGlobal",
				property: "outfindoCatalogGuideData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outfindo:jsGlobal:2",
				kind: "jsGlobal",
				property: "outfindoCatalogGuideMapFailed",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "overheat",
		name: "Overheat",
		website: "https://overheat.it",
		description: "Overheat is a conversion optimization package designed to improve website performance by enhancing user experience and increasing conversion rates through data-driven strategies and tailored solutions.",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "overheat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.overheat\\.it"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "ownpage",
		name: "Ownpage",
		website: "https://www.ownpage.fr",
		description: "Ownpage is a technology services provider that enables publishers to personalize their newsletters, websites, and applications, enhancing content delivery for media platforms.",
		icon: "Ownpage.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "ownpage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.ownpage\\.fr\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ownpage:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("loadOwnpageScript"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "ownpage:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("loadownpagescript"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pagenudge",
		name: "PageNudge",
		website: "https://pagenudge.com",
		description: "PageNudge is a website personalization tool that displays contextual messages and prompts to visitors based on behavior or page content, helping tailor interactions and guide user actions across a site.",
		icon: "PageNudge.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "pagenudge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.pagenudge\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "particularaudience",
		name: "ParticularAudience",
		website: "https://particularaudience.com",
		description: "ParticularAudience is a platform utilizing AI for item-based personalization services, emphasizing privacy in a connected commerce landscape to enhance revenue streams.",
		icon: "ParticularAudience.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "particularaudience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.particularaudience\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "peerius",
		name: "Peerius",
		website: "https://www.peerius.com",
		description: "Peerius is a platform that analyzes individual visitor behavior on websites to optimize the checkout process.",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "peerius:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.peerius\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "peerius:jsGlobal:1",
				kind: "jsGlobal",
				property: "PeeriusCallbacks",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "personaclick",
		name: "PersonaClick",
		website: "https://www.personaclick.com",
		description: "PersonaClick is a provide personalisation, recommandation and multi channel services.",
		icon: "PersonaClick.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "personaclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.personaclick\\.com\\/v([\\d.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "personaclick:jsGlobal:1",
				kind: "jsGlobal",
				property: "personaclick",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "personaclick:jsGlobal:2",
				kind: "jsGlobal",
				property: "personaclick_callback",
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
		id: "personizely",
		name: "Personizely",
		website: "https://www.personizely.net",
		description: "Personizely is a conversion marketing toolkit which helps websites and ecommerce stores better engage with visitors using website widgets and personalisation.",
		icon: "Personizely.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "personizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.personizely\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "personizely:jsGlobal:1",
				kind: "jsGlobal",
				property: "Personizely",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "personyze",
		name: "Personyze",
		website: "https://www.personyze.com",
		description: "Personyze is a real-time visitor segmentation and website personalization platform offering omnichannel customer service capabilities, developed in Brazil.",
		icon: "Personyze.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "personyze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("counter\\.personyze\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "personyze:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("counter\\.personyze\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "perzonalization",
		name: "Perzonalization",
		website: "https://www.perzonalization.com/",
		description: "Perzonalization is an AI powered personalization engine for eCommerce.",
		icon: "Perzonalization.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "perzonalization:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.perzonalization\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "piano",
		name: "Piano",
		website: "https://piano.io",
		description: "Piano is an enterprise SaaS company which specializing in advanced media business processes and ecommerce optimization.",
		icon: "Piano.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "piano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tinypass\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "piano:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.piano\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "piano:jsGlobal:2",
				kind: "jsGlobal",
				property: "PianoESPConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "piano:jsGlobal:3",
				kind: "jsGlobal",
				property: "gciDataPiano",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "piano:jsGlobal:4",
				kind: "jsGlobal",
				property: "pianoAnalytics",
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
		id: "poloriz",
		name: "Poloriz",
		website: "https://www.poloriz.com",
		description: "Poloriz's technology automatically creates a personalised, full-screen, mobile-first, cross-selling user experience for shoppers.",
		icon: "Poloriz.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "poloriz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.poloriz\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "poltio",
		name: "Poltio",
		website: "https://poltio.com",
		description: "Poltio is a platform enabling brands to enhance user segment understanding, driving revenue growth and fostering customer relationships.",
		icon: "Poltio.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "poltio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.poltio\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "potions",
		name: "Potions",
		website: "https://get-potions.com",
		description: "Potions is a personalisation technology for customising the ecommerce experience for site visitors without the use of cookies.",
		icon: "Potions.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "potions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.get-potions\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "potions:jsGlobal:1",
				kind: "jsGlobal",
				property: "potions.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "prediggo",
		name: "Prediggo",
		website: "https://prediggo.com",
		description: "Prediggo is an ecommerce personalisation and marketing automation software provider.",
		icon: "Prediggo.png",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "prediggo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/prediggo\\/(?:[\\w]+)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prediggo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Prediggo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prediggo:jsGlobal:2",
				kind: "jsGlobal",
				property: "PrediggoSearchFormExternalAc",
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
		id: "preezie",
		name: "Preezie",
		website: "https://preezie.com",
		description: "Preezie is a provider of tools and education that enables retailers to implement an online sales assistant through a guided conversion and product discovery platform.",
		icon: "Preezie.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "preezie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ui-widgets\\.preezie\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "preezie:jsGlobal:1",
				kind: "jsGlobal",
				property: "PREEZIE_GUIDE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "preezie:jsGlobal:2",
				kind: "jsGlobal",
				property: "preezieJsonpFunction",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "preezie:jsGlobal:3",
				kind: "jsGlobal",
				property: "preeziePageScriptExecuted",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pretty-damn-quick",
		name: "Pretty Damn Quick",
		website: "https://www.prettydamnquick.com/",
		description: "Pretty Damn Quick is a Shopify app for eCommerce brands to deliver personalized checkout experiences.",
		icon: "PrettyDamnQuick.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "pretty-damn-quick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pdq-scripts\\.pdqprod\\.link"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pretty-damn-quick:jsGlobal:1",
				kind: "jsGlobal",
				property: "initPDQscript",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "primeleads",
		name: "Primeleads",
		website: "https://primeleads.de",
		description: "Primeleads is a tool that identifies visitors on your site and personalises the website experience for each individual visitor.",
		icon: "Primeleads.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "primeleads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.primeleads\\.de\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "printful",
		name: "Printful",
		website: "https://www.printful.com/",
		description: "Printful offers print-on-demand drop shipping solution for ecommerce sites.",
		icon: "Printful.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "printful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cdn\\.printful\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "printful:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.printful\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "printlane",
		name: "Printlane",
		website: "https://printlane.com",
		description: "Printlane is a digital platform offering an interactive product customizer tool that enables real-time visualization and personalization of designs before production.",
		icon: "Printlane.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "printlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("designer\\.printlane\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "printlane:jsGlobal:1",
				kind: "jsGlobal",
				property: "printlane.init",
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
		id: "prooven",
		name: "Prooven",
		website: "https://prooven.io",
		description: "Prooven is a platform designed to build credibility and increase conversion through trust-driven solutions.",
		icon: "Prooven.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "prooven:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.prooven\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "provely",
		name: "Provely",
		website: "https://provely.io",
		description: "Provely is a conversion software that displays verified social proof on webpages to help online businesses increase leads, signups, and sales.",
		icon: "Provely.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "provely:jsGlobal:0",
				kind: "jsGlobal",
				property: "provely.bindFields",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "provely:jsGlobal:1",
				kind: "jsGlobal",
				property: "provelys",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "ptengine",
		name: "Ptengine",
		website: "https://www.ptengine.com",
		description: "Ptengine is a web analytics tool that offers heat mapping, session replays, and other insights to help businesses understand and optimize user behavior on their websites.",
		icon: "Ptengine.svg",
		categories: [
			"experimentation-optimization",
			"analytics",
		],
		rules: [
			{
				id: "ptengine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.ptengine\\.(?:jp|cn|com)?\\/'"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ptengine:jsGlobal:1",
				kind: "jsGlobal",
				property: "ptengine",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "pureclarity",
		name: "PureClarity",
		website: "https://www.pureclarity.com",
		description: "PureClarity is a platform that enables personalized upselling and delivers targeted content to increase customer engagement and sales.",
		icon: "PureClarity.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "pureclarity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pcs\\.pureclarity\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pureclarity:jsGlobal:1",
				kind: "jsGlobal",
				property: "PureClarityObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pureclarity:jsGlobal:2",
				kind: "jsGlobal",
				property: "PureClarityType",
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
		id: "qstomizer",
		name: "Qstomizer",
		website: "https://www.qstomizer.com",
		description: "Qstomizer app is the app for Shopify and Woocomerce that allows you to add a visual custom product designer to your shop.",
		icon: "Qstomizer.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "qstomizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/qsmz-scripttag\\/qstomizer_st(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qstomizer:jsGlobal:1",
				kind: "jsGlobal",
				property: "jQueryQSMZ",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qstomizer:jsGlobal:2",
				kind: "jsGlobal",
				property: "loadScript_qsmz",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qstomizer:jsGlobal:3",
				kind: "jsGlobal",
				property: "qstomizer_script",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "qubit",
		name: "Qubit",
		website: "https://www.qubit.com",
		description: "Qubit is a platform that enables personalized ecommerce experiences through data-driven insights and intelligent automation.",
		icon: "Qubit.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "qubit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.goqubit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qubit:jsGlobal:1",
				kind: "jsGlobal",
				property: "__qubit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qubit:jsGlobal:2",
				kind: "jsGlobal",
				property: "onQubitReady",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qubit:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.goqubit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qubit:jsGlobal:4",
				kind: "jsGlobal",
				property: "QUBIT_WORKER",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "rankscience",
		name: "RankScience",
		website: "https://www.rankscience.com",
		description: "RankScience is a split testing platform that uses data science to optimize search traffic.",
		icon: "RankScience.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "rankscience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ranksci\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "raptor",
		name: "Raptor",
		website: "https://raptorsmartadvisor.com",
		description: "Raptor is a personalisation engine based on machine learning that analyses and learns about the user's behavior and unique browser history.",
		icon: "Raptor.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "raptor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.raptorsmartadvisor\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "raptor:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("msecnd\\.net\\/script\\/raptor-([\\d.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "raptor:jsGlobal:2",
				kind: "jsGlobal",
				property: "Raptor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raptor:jsGlobal:3",
				kind: "jsGlobal",
				property: "onRaptorLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raptor:jsGlobal:4",
				kind: "jsGlobal",
				property: "raptorBase64",
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
		id: "rebuy",
		name: "Rebuy",
		website: "https://rebuyengine.com/",
		description: "Rebuy offers personlisation solutions for ecommerce sites.",
		icon: "Rebuy.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "rebuy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rebuyengine\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rebuy:jsGlobal:1",
				kind: "jsGlobal",
				property: "rebuyConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"payg",
				"recurring",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "recolize",
		name: "Recolize",
		website: "https://www.recolize.com",
		description: "Recolize is a system that provides personalized product recommendations for ecommerce stores based on customer behavior and preferences.",
		icon: "Recolize.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "recolize:jsGlobal:0",
				kind: "jsGlobal",
				property: "Recolize.Recommendation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recolize:jsGlobal:1",
				kind: "jsGlobal",
				property: "RecolizeParameters",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "recombee",
		name: "Recombee",
		website: "https://www.recombee.com",
		description: "Recombee is a Recommender as a Service offering a RESTful API and SDKs, custom-tailored by data scientists.",
		icon: "Recombee.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "recombee:jsGlobal:0",
				kind: "jsGlobal",
				property: "obsPostRecombee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recombee:jsGlobal:1",
				kind: "jsGlobal",
				property: "obsRecombee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recombee:jsGlobal:2",
				kind: "jsGlobal",
				property: "recombee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recombee:jsGlobal:3",
				kind: "jsGlobal",
				property: "recombeeClient",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "recovermycart",
		name: "RecoverMyCart",
		website: "https://app.recovermycart.com/",
		description: "RecoverMyCart is a Shopify app for abandoned basket recovery.",
		icon: "RecoverMyCart.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "recovermycart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.recovermycart\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "reelevant",
		name: "Reelevant",
		website: "https://try.reelevant.com",
		description: "Reelevant is a visual content platform that helps businesses to create on-demand content for their viewers in order to increase conversion rates.",
		icon: "Reelevant.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "reelevant:jsGlobal:0",
				kind: "jsGlobal",
				property: "reel.companyId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reelevant:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.reelevant\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "reelevant:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.reelevant\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "reflektion",
		name: "Reflektion",
		website: "https://reflektion.com",
		description: "Reflektion is a customer centric personalisation platform that optimizes customer experiences on an individual basis in real time.",
		icon: "Reflektion.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "reflektion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net\\/js\\/reflektion\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reflektion:jsGlobal:1",
				kind: "jsGlobal",
				property: "RFK_DEPLOY_TIME",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reflektion:jsGlobal:2",
				kind: "jsGlobal",
				property: "RfkParams",
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
		id: "relewise",
		name: "Relewise",
		website: "https://relewise.com",
		description: "Relewise is a platform that uses personalisation technology to provide customised online experiences through personalised search and recommendations.",
		icon: "Relewise.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "relewise:dom:0",
				kind: "dom",
				selector: "link[href*='api.relewise.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "relewise:jsGlobal:1",
				kind: "jsGlobal",
				property: "relewiseConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "relewise:jsGlobal:2",
				kind: "jsGlobal",
				property: "relewiseTracking",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "retail-rocket",
		name: "Retail Rocket",
		website: "https://retailrocket.net",
		description: "Retail Rocket is a big data-based personalisation platform for ecommerce websites.",
		icon: "Retail Rocket.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "retail-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.retailrocket\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "retail-rocket:jsGlobal:1",
				kind: "jsGlobal",
				property: "retailrocket",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retail-rocket:jsGlobal:2",
				kind: "jsGlobal",
				property: "rrAddToBasket",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retail-rocket:jsGlobal:3",
				kind: "jsGlobal",
				property: "rrApiOnReady",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retail-rocket:jsGlobal:4",
				kind: "jsGlobal",
				property: "rrLibrary",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retail-rocket:jsGlobal:5",
				kind: "jsGlobal",
				property: "rrPartnerId",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retail-rocket:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^rr\\-testCookie$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "retail-rocket:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^rrpvid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "retail-rocket:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^rr\\-testcookie$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "revieve",
		name: "Revieve",
		website: "https://www.revieve.com",
		description: "Revieve is a technology company delivering consumer-centric personalised digital brand experiences powered by AI/AR.",
		icon: "Revieve.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "revieve:jsGlobal:0",
				kind: "jsGlobal",
				property: "Revieve.__esModule",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "revieve:jsGlobal:1",
				kind: "jsGlobal",
				property: "revieveConfig.onClickProduct",
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
		id: "revlifter",
		name: "RevLifter",
		website: "https://www.revlifter.com",
		description: "RevLifter is an AI-powered coupon technology which allows brands to offer personalised incentives to their customers based on real-time basket data.",
		icon: "RevLifter.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "revlifter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.revlifter\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "revlifter:jsGlobal:1",
				kind: "jsGlobal",
				property: "RevLifterObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "revlifter:jsGlobal:2",
				kind: "jsGlobal",
				property: "revlifter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "revlifter:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^REVLIFTER$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "revlifter:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^revlifter$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "richrelevance",
		name: "RichRelevance",
		website: "https://richrelevance.com",
		description: "RichRelevance is a cloud-based omnichannel personalisation platform built to help Retailers, B2B, financial services, travel and hospitality, and branded manufacturers personalise their customer experiences.",
		icon: "RichRelevance.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "richrelevance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.richrelevance\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "richrelevance:jsGlobal:1",
				kind: "jsGlobal",
				property: "RR.U",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "richrelevance:jsGlobal:2",
				kind: "jsGlobal",
				property: "rr_v",
				valuePattern: new RegExp("([\\d.]+)"),
				confidence: 50,
				version: {
					source: "match",
					template: "$1\\",
				},
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
		id: "rightmessage",
		name: "RightMessage",
		website: "https://rightmessage.com",
		description: "RightMessage is a real-time content personalization tool.",
		icon: "RightMessage.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "rightmessage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.rightmessage\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "rokt",
		name: "Rokt",
		website: "https://www.rokt.com",
		description: "Rokt is an ecommerce marketing technology that gives customers a personalised and relevant experience while buying online.",
		icon: "Rokt.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "rokt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rokt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rokt:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.rokt\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "rokt:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.rokt\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "rtoaster",
		name: "Rtoaster",
		website: "https://www.brainpad.co.jp/rtoaster",
		description: "Rtoaster is a high-precision personalization platform developed in Japan that enables tailored user experiences across digital channels.",
		icon: "Rtoaster.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "rtoaster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.rtoaster\\.jp"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ryzeo",
		name: "Ryzeo",
		website: "https://ryzeo.com",
		description: "Ryzeo is an AI-powered platform that delivers personalized product recommendations to help convert website visitors into customers.",
		icon: "Ryzeo.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "ryzeo:dom:0",
				kind: "dom",
				selector: "link[href*='stats.ryzeo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ryzeo:jsGlobal:1",
				kind: "jsGlobal",
				property: "ryzeoSubmit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "salecycle",
		name: "SaleCycle",
		website: "https://www.salecycle.com",
		description: "SaleCycle is an UK based global behavioral marketing firm.",
		icon: "salecycle.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "salecycle:dom:0",
				kind: "dom",
				selector: "iframe[src*='.salecycle.com'][target='_self']",
				description: "DOM selector matches a known technology marker.",
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
		id: "salesfire",
		name: "SalesFire",
		website: "https://www.salesfire.co.uk",
		description: "SalesFire is a SaaS company specialising in conversion rate optimisation, intelligent personalisation and on-site search solutions.",
		icon: "SalesFire.svg",
		categories: [
			"experimentation-optimization",
			"search",
		],
		rules: [
			{
				id: "salesfire:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.salesfire\\.co\\.uk\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesfire:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadSalesfire",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "salesforce-audience-studio",
		name: "Salesforce Audience Studio",
		website: "https://www.salesforce.com/products/marketing-cloud/data-management",
		description: "Salesforce Audience Studio is a customer data marketplace that only other platform users can access.",
		icon: "Salesforce.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
		],
		rules: [
			{
				id: "salesforce-audience-studio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.krxd\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesforce-audience-studio:dom:1",
				kind: "dom",
				selector: "link[href*='.krxd.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "salesforce-audience-studio:jsGlobal:2",
				kind: "jsGlobal",
				property: "Krux",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-audience-studio:jsGlobal:3",
				kind: "jsGlobal",
				property: "updateKruxCookie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "salesforce-interaction-studio",
		name: "Salesforce Interaction Studio",
		website: "https://www.salesforce.com/products/marketing-cloud/customer-interaction",
		description: "Salesforce Interaction Studio (formerly Evergage) is a cloud-based software that allows users to collect, analyze, and respond to user behavior on their websites and web applications in real-time.",
		icon: "Salesforce.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "salesforce-interaction-studio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.evgnet\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesforce-interaction-studio:jsGlobal:1",
				kind: "jsGlobal",
				property: "Evergage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-interaction-studio:jsGlobal:2",
				kind: "jsGlobal",
				property: "evergageHideSections",
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
		id: "samsung-food",
		name: "Samsung Food",
		website: "https://samsungfood.com",
		description: "Samsung Food is an all-in-one app for recipe saving, meal planning, grocery shopping, and recipe sharing.",
		icon: "SamsungFood.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "samsung-food:jsGlobal:0",
				kind: "jsGlobal",
				property: "WhiskLoading",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "samsung-food:jsGlobal:1",
				kind: "jsGlobal",
				property: "whisk-jsp.push",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "samsung-food:jsGlobal:2",
				kind: "jsGlobal",
				property: "whisk.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sendpad",
		name: "Sendpad",
		website: "https://www.sendtex.com",
		description: "Sendpad is a platform that enables automated audience engagement through personalization to support loyalty growth.",
		icon: "Sendtex.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sendpad:dom:0",
				kind: "dom",
				selector: "form[action*='forms.sendtex.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "shoefitr-io",
		name: "Shoefitr.io",
		website: "https://www.shoefitr.io",
		description: "Shoefitr.io is data-based shoe size advice service where we measure the length, width, ball, and instep.",
		icon: "Shoefitr.io.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "shoefitr-io:dom:0",
				kind: "dom",
				selector: "a[href*='api.shoefitr.io/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "shopbox-ai",
		name: "Shopbox AI",
		website: "https://www.shopbox.ai",
		description: "Shopbox AI is a tool that helps online retailers improve customer engagement, increase conversion rates, and enhance retention through data-driven insights.",
		icon: "ShopboxAI.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "shopbox-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("widget\\.shopbox\\.ai"),
				description: "Script content contains a bounded technology signature.",
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
		id: "shoplift",
		name: "Shoplift",
		website: "https://www.shoplift.ai",
		description: "Shoplift is a data-driven A/B testing platform for Shopify stores that optimizes conversion rates without requiring coding.",
		icon: "Shoplift.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "shoplift:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.shoplift\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "shoplift:jsGlobal:1",
				kind: "jsGlobal",
				property: "shoplift.getVisitorData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shoplift:jsGlobal:2",
				kind: "jsGlobal",
				property: "shopliftInstance",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "sitespect",
		name: "SiteSpect",
		website: "https://www.sitespect.com",
		description: "SiteSpect is the A/B testing and optimisation solution.",
		icon: "SiteSpect.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sitespect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/__ssobj\\/core\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sitespect:jsGlobal:1",
				kind: "jsGlobal",
				property: "ss_dom_var",
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
		id: "sizebay",
		name: "Sizebay",
		website: "https://sizebay.com",
		description: "Sizebay is a virtual fitting room that helps ecommerce and even brick-and-mortar stores provide their shoppers with a personalised shopping.",
		icon: "Sizebay.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sizebay:jsGlobal:0",
				kind: "jsGlobal",
				property: "Sizebay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sizebay:jsGlobal:1",
				kind: "jsGlobal",
				property: "SizebayParams",
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
		id: "sizeme",
		name: "SizeMe",
		website: "https://www.sizemeai.com",
		description: "SizeMe is a platform that helps customers consistently find the correct size and fit for products.",
		icon: "SizeMe.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sizeme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.api\\.sizemeai\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sizeme:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\api\\.sizemeai\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "skeep",
		name: "Skeep",
		website: "https://www.skeep.io",
		description: "Skeep is a tool that uses automated Generative AI quizzes to guide visitors to suitable products, helping boost conversions without requiring any setup.",
		icon: "Skeep.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "skeep:jsGlobal:0",
				kind: "jsGlobal",
				property: "skeep",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "smarthint",
		name: "SmartHint",
		website: "https://www.smarthint.co",
		description: "SmartHint is an ecommerce recommendation system that uses customer behavior data to suggest relevant products and improve shopping experience.",
		icon: "SmartLink.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "smarthint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.smarthint\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smarthint:jsGlobal:1",
				kind: "jsGlobal",
				property: "countInitSmartHint",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "smarthint:jsGlobal:2",
				kind: "jsGlobal",
				property: "smarthintkey",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "split",
		name: "Split",
		website: "https://www.split.io",
		description: "Split is a feature delivery platform that powers feature flag management, software experimentation, and continuous delivery.",
		icon: "Split.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "split:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.split\\.io\\/(?:sdk\\/split-([\\d\\.]+)\\.min\\.js)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "split:jsGlobal:1",
				kind: "jsGlobal",
				property: "SPLITIO_API_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "split:jsGlobal:2",
				kind: "jsGlobal",
				property: "split_shopper_client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "split:jsGlobal:3",
				kind: "jsGlobal",
				property: "split_visitor_client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "split:jsGlobal:4",
				kind: "jsGlobal",
				property: "splitio",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"poa",
			],
		},
	},
	{
		id: "split-hero",
		name: "Split Hero",
		website: "https://splithero.com",
		description: "Split Hero is a WordPress tool for A/B split testing, enabling performance comparisons between different page variations to optimize user engagement and conversions.",
		icon: "SplitHero.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "split-hero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.splithero\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "storyly",
		name: "Storyly",
		website: "https://www.storyly.io",
		description: "Storyly is a platform that enables the creation of personalized, shoppable experiences for apps and websites.",
		icon: "Storyly.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "storyly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-story\\.storyly\\.io\\/v(\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "storyly:jsGlobal:1",
				kind: "jsGlobal",
				property: "StorylyWeb",
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
		id: "strands",
		name: "Strands",
		website: "https://strands.com",
		description: "Strands is a personalization, recommendation, and segmentation engine designed to tailor content and services based on user data.",
		icon: "Strands.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "strands:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.strands\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "streamoid",
		name: "Streamoid",
		website: "https://www.streamoid.com",
		description: "Streamoid is a fashion AI optimization and personalization solution, enhancing user experiences through tailored recommendations.",
		icon: "Streamoid.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "streamoid:dom:0",
				kind: "dom",
				selector: "link[href*='.sdk.streamoid.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "strutfit",
		name: "StrutFit",
		website: "https://www.strut.fit",
		description: "StrutFit is an online sizing platform for footwear retailers.",
		icon: "StrutFit.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "strutfit:dom:0",
				kind: "dom",
				selector: "iframe[scr*='.strut.fit/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "strutfit:jsGlobal:1",
				kind: "jsGlobal",
				property: "rerenderStrutfit",
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
		id: "systema",
		name: "Systema",
		website: "https://systema.ai",
		description: "Systema is an anonymous personalization platform designed for retailers to deliver tailored experiences without using personal identifiers.",
		icon: "Systema.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "systema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.systema\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "syte",
		name: "Syte",
		website: "https://www.syte.ai",
		description: "Syte is a provider of visual AI technology that aims to improve retailers' site navigation, product discovery, and user experience by powering solutions that engage and convert shoppers.",
		icon: "Syte.svg",
		categories: [
			"experimentation-optimization",
			"search",
		],
		rules: [
			{
				id: "syte:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.syteapi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "syte:dom:1",
				kind: "dom",
				selector: "img[src*='cdn.syteapi.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "syte:jsGlobal:2",
				kind: "jsGlobal",
				property: "SyteApi.getBinImageBB",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "syte:jsGlobal:3",
				kind: "jsGlobal",
				property: "SyteApp.Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "syte:jsGlobal:4",
				kind: "jsGlobal",
				property: "SytePixel",
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
		id: "tagalys",
		name: "Tagalys",
		website: "https://www.tagalys.com",
		description: "Tagalys is an ecommerce personalization software that enables data-driven product discovery, recommendations, and merchandising optimization across online stores.",
		icon: "Tagalys.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "tagalys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tagalys\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "talkable",
		name: "Talkable",
		website: "https://www.talkable.com",
		description: "Talkable is a cloud-based referral marketing system that assists medium to large businesses with campaign creation and channel performance tracking.",
		icon: "Talkable.svg",
		categories: [
			"experimentation-optimization",
			"commerce-operations",
			"marketing-automation",
		],
		rules: [
			{
				id: "talkable:jsGlobal:0",
				kind: "jsGlobal",
				property: "talkable.config.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "target2sell",
		name: "Target2Sell",
		website: "https://www.target2sell.com/",
		description: "Target2Sell is a personalisation solution for ecommerce sites.",
		icon: "Target2Sell.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "target2sell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.target2sell\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "tealium-audiencestream",
		name: "Tealium AudienceStream",
		website: "https://tealium.com/products/audiencestream",
		description: "Tealium AudienceStream is an omnichannel customer segmentation and real-time action engine.",
		icon: "Tealium.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "tealium-audiencestream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tealiumiq\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tealium-audiencestream:dom:1",
				kind: "dom",
				selector: "link[href*='.tealiumiq.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "teeinblue",
		name: "Teeinblue",
		website: "https://teeinblue.com",
		description: "Teeinblue is a personalization tool tailored for print-on-demand merchants using Shopify.",
		icon: "TeeinBlue.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "teeinblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.teeinblue\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "teeinblue:jsGlobal:1",
				kind: "jsGlobal",
				property: "TEEINBLUE_LOADED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teeinblue:jsGlobal:2",
				kind: "jsGlobal",
				property: "teeinblue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teeinblue:jsGlobal:3",
				kind: "jsGlobal",
				property: "teeinblueShop",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "things-solver",
		name: "Things Solver",
		website: "https://thingsolver.com",
		description: "Things Solver is a business platform that improves customer experience by delivering personalized content and recommendations on its website.",
		icon: "ThingsSolver.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "things-solver:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thingsolver\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "tontine",
		name: "Tontine",
		website: "https://www.tontine.ai",
		description: "Tontine is an A/B price testing platform built specifically for high-growth Shopify merchants focused on optimizing their profit margins.",
		icon: "Tontine.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "tontine:jsGlobal:0",
				kind: "jsGlobal",
				property: "TontineApp.tontineAnalytics",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "trbo",
		name: "Trbo",
		website: "https://www.trbo.com",
		description: "Trbo is a personalisation, recommendations, A/B testing platform from Germany.",
		icon: "Trbo.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "trbo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trbo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trbo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_trbo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trbo:jsGlobal:2",
				kind: "jsGlobal",
				property: "_trbo_start",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trbo:jsGlobal:3",
				kind: "jsGlobal",
				property: "_trboq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trbo:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^trbo_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "trbo:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^trbo_usr$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "trendemon",
		name: "Trendemon",
		website: "https://trendemon.com",
		description: "Trendemon is a web personalization and account-based orchestration solution.",
		icon: "Trendemon.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "trendemon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.trendemon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "trident-ab",
		name: "Trident AB",
		website: "https://tridentab.com",
		description: "Trident AB is a platform for optimizing websites through A/B testing.",
		icon: "TridentAB.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "trident-ab:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Trident\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "trident-ab:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("trident\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "triggerbee",
		name: "Triggerbee",
		website: "https://triggerbee.com",
		description: "Triggerbee is an onsite personalisation platform that lets you use customer and behavioral data to build and launch personalised campaigns.",
		icon: "Triggerbee.png",
		categories: [
			"experimentation-optimization",
			"analytics",
		],
		rules: [
			{
				id: "triggerbee:jsGlobal:0",
				kind: "jsGlobal",
				property: "triggerbee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "triggerbee:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.myvisitors\\.se"),
				description: "Script source URL matches a known technology marker.",
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
		id: "true-fit",
		name: "True Fit",
		website: "https://www.truefit.com",
		description: "True Fit is a data-driven personalisation platform for footwear and apparel retailers.",
		icon: "True Fit.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "true-fit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.truefitcorp\\.com\\/(?:.+\\/([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "twik",
		name: "Twik",
		website: "https://www.twik.io/",
		description: "Twik provides an automated, no-configuration business intelligence & personalization automation engine.",
		icon: "Twik.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "twik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.twik\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twik:jsGlobal:1",
				kind: "jsGlobal",
				property: "TWIK_ID",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:twiki:twiki:-:*:*:*:*:*:*:*",
		},
	},
	{
		id: "unbxd",
		name: "Unbxd",
		website: "https://unbxd.com",
		description: "Unbxd is an ecommerce product discovery platform that applies artificial intelligence and advanced data sciences to connect shoppers to the products they are most likely to buy.",
		icon: "Unbxd.svg",
		categories: [
			"experimentation-optimization",
			"search",
		],
		rules: [
			{
				id: "unbxd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net\\/unbxdAnalytics\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "unbxd:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("unbxd\\.s\\d\\.amazonaws\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "unbxd:jsGlobal:2",
				kind: "jsGlobal",
				property: "Unbxd.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "unbxd:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net\\/unbxdanalytics\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		id: "upsy",
		name: "Upsy",
		website: "https://upsyshopping.com",
		description: "Upsy is a platform that provides personalized product recommendations for ecommerce stores.",
		icon: "Upsy.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "upsy:jsGlobal:0",
				kind: "jsGlobal",
				property: "_upsyAbTest",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upsy:jsGlobal:1",
				kind: "jsGlobal",
				property: "parseUpsyQuery",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upsy:jsGlobal:2",
				kind: "jsGlobal",
				property: "upsy_sdk.getCookie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "userzoom",
		name: "UserZoom",
		website: "https://www.userzoom.com",
		description: "UserZoom is a cloud-based user experience solution.",
		icon: "UserZoom.png",
		categories: [
			"experimentation-optimization",
			"analytics",
		],
		rules: [
			{
				id: "userzoom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userzoom\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "usizy",
		name: "Usizy",
		website: "https://usizy.com",
		description: "Usizy is the top size recommendation and prediction solution for ecommerce using machine learning, big data, and isomoprhic algorythms.",
		icon: "Usizy.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "usizy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.usizy\\.es\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "usizy:jsGlobal:1",
				kind: "jsGlobal",
				property: "uSizyUniversal",
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
		id: "varify",
		name: "Varify",
		website: "https://varify.io",
		description: "Varify is an A/B testing platform that provides traffic flat rates for data-driven web page optimization aimed at increasing conversions.",
		icon: "Varify.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "varify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.varify\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "varify:jsGlobal:1",
				kind: "jsGlobal",
				property: "varify.debug",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "varify:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkvarify_io",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "verifypress",
		name: "VerifyPress",
		website: "https://verifypress.com",
		description: "VerifyPress is a social proof app that enables implementation of pop-up notifications, HelloBar alerts, and social proof elements using a single line of code.",
		icon: "VerifyPress.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "verifypress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.verifypress\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verifypress:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.verifypress\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "vertster",
		name: "Vertster",
		website: "https://vertster.com",
		description: "Vertster is a multivariate testing platform that enables users to compare multiple webpage or app variations simultaneously to identify which combination of elements performs best based on user behavior and data analysis.",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "vertster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.vertster\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vertster:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.vertster\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "viafoura",
		name: "Viafoura",
		website: "https://viafoura.com",
		description: "Viafoura is an audience engagement and social monetisation platform.",
		icon: "viafoura.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "viafoura:jsGlobal:0",
				kind: "jsGlobal",
				property: "dfm_viafoura_options",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "viafoura:jsGlobal:1",
				kind: "jsGlobal",
				property: "viafoura.bootstrap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "viafoura:jsGlobal:2",
				kind: "jsGlobal",
				property: "viafoura.core",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "virtusize",
		name: "Virtusize",
		website: "https://www.virtusize.com",
		description: "Virtusize is a personalisation service that provides size and product recommendations specific to a user's size and trend preferences.",
		icon: "Virtusize.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "virtusize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.virtusize\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"recurring",
			],
		},
	},
	{
		id: "visiopt",
		name: "VisiOpt",
		website: "https://visiopt.com",
		description: "Visiopt™ is a powerful yet easy to use AI-driven Optimization System that enables you to manufacture your perfect customer at scale like a well oiled machine.",
		icon: "visiopt.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "visiopt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("visiopt\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "visiopt:jsGlobal:1",
				kind: "jsGlobal",
				property: "visiopt_code",
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
		id: "visitor-js",
		name: "Visitor.js",
		website: "https://www.visitorjs.com",
		description: "Visitor.js is a tool that personalizes website content to optimize user engagement and improve conversion rates.",
		icon: "Visitor.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "visitor-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.visitorjs\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "wair",
		name: "Wair",
		website: "https://getwair.com",
		description: "Wair is the widget to personalised fit.",
		icon: "Wair.png",
		categories: [
			"experimentation-optimization",
			"widgets-misc",
		],
		rules: [
			{
				id: "wair:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("getwair\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wair:jsGlobal:1",
				kind: "jsGlobal",
				property: "PredictV3.default.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wair:jsGlobal:2",
				kind: "jsGlobal",
				property: "predictWidget",
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
		id: "webeo",
		name: "Webeo",
		website: "https://www.webeo.com",
		description: "Webeo is a platform that enables website owners to customize the content on their website for each individual visitor, creating a unique experience for them.",
		icon: "Webeo.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "webeo:dom:0",
				kind: "dom",
				selector: "script#__webeoCoreScript",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:1",
				kind: "jsGlobal",
				property: "__webeoEventQueue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:2",
				kind: "jsGlobal",
				property: "__webeoGlobals",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:3",
				kind: "jsGlobal",
				property: "__webeoRunPersonalisation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:4",
				kind: "jsGlobal",
				property: "__webeoScriptStart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:5",
				kind: "jsGlobal",
				property: "__webeoStarted",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:6",
				kind: "jsGlobal",
				property: "__webeoUnmask",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webeo:jsGlobal:7",
				kind: "jsGlobal",
				property: "__webeoVisitData",
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
		id: "webyn",
		name: "Webyn",
		website: "https://www.webyn.ai",
		description: "Webyn is a SaaS platform employing AI to analyse website traffic and implement automated, personalised enhancements aimed at improving user experience and potentially increasing conversions for clients.",
		icon: "Webyn.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "webyn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("files\\.webyn\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webyn:dom:1",
				kind: "dom",
				selector: "link[href*='files.webyn.ai']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "webyn:jsGlobal:2",
				kind: "jsGlobal",
				property: "WebynInstance",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "wiqhit",
		name: "Wiqhit",
		website: "https://www.wiqhit.com",
		description: "Wiqhit is an online personalization tool that customizes website content to engage visitors and increase conversions through tailored user experiences.",
		icon: "Wiqhit.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "wiqhit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wiqhit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "wisernotify",
		name: "WiserNotify",
		website: "https://wisernotify.com",
		description: "WiserNotify is a platform offering social proof and FOMO features for ecommerce sites.",
		icon: "WiserNotify.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "wisernotify:dom:0",
				kind: "dom",
				selector: "link[href*='app.wisernotify.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wisernotify:jsGlobal:1",
				kind: "jsGlobal",
				property: "wiser",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "wishi",
		name: "Wishi",
		website: "https://wishi.me",
		description: "Wishi is a curation and personalization platform that enhances online sales by providing embedded personal styling at scale.",
		icon: "Wishi.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "wishi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.wishi\\.me"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "wishi:jsGlobal:1",
				kind: "jsGlobal",
				property: "Wishi.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wishi:jsGlobal:2",
				kind: "jsGlobal",
				property: "WishiAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wishi:jsGlobal:3",
				kind: "jsGlobal",
				property: "WishiSDKVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "xgen-ai",
		name: "XGen Ai",
		website: "https://xgen.ai",
		description: "XGen Ai is a cloud-based customer journey mapping tool that helps businesses manage product recommendations via artificial intelligence (AI).",
		icon: "XGen Ai.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "xgen-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/assets\\.xgen\\.dev\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "yieldify",
		name: "Yieldify",
		website: "https://www.yieldify.com",
		description: "Yieldify is a customer journey optimisation platform that brings personalisation to the full customer journey.",
		icon: "Yieldify.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "yieldify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.yieldify\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yieldify:jsGlobal:1",
				kind: "jsGlobal",
				property: "_yieldify",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
			],
		},
	},
	{
		id: "zakeke",
		name: "Zakeke",
		website: "https://www.zakeke.com",
		description: "Zakeke is a product customisation tool compatible with services and apps mostly used to manage ecommerce store.",
		icon: "Zakeke.png",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "zakeke:jsGlobal:0",
				kind: "jsGlobal",
				property: "zakekeBoot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zakeke:jsGlobal:1",
				kind: "jsGlobal",
				property: "zakekeCustomizeLabel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zakeke:jsGlobal:2",
				kind: "jsGlobal",
				property: "zakekeLoading",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zakeke:jsGlobal:3",
				kind: "jsGlobal",
				property: "zakekeProductPage",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "zoho-pagesense",
		name: "Zoho PageSense",
		website: "https://www.zoho.com/pagesense/",
		description: "Zoho PageSense is a conversion optimisation platform which combines the power of web analytics, A/B testing, and personalisation.",
		icon: "Zoho.svg",
		categories: [
			"experimentation-optimization",
		],
		rules: [
			{
				id: "zoho-pagesense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pagesense\\.(?:cn|io)?"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zoho-pagesense:jsGlobal:1",
				kind: "jsGlobal",
				property: "$pagesense",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zoho-pagesense:jsGlobal:2",
				kind: "jsGlobal",
				property: "pagesense",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"recurring",
			],
		},
		implies: [
			"zoho",
		],
	},
] as const satisfies readonly TechnologyDefinition[];
