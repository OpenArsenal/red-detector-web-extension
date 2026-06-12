import type { TechnologyDefinition } from '../types';

export const experimentationOptimizationTechnologyDefinitions = [
	{
		id: "ab-tasty",
		name: "AB Tasty",
		website: "https://www.abtasty.com",
		description: "AB Tasty is a customer experience optimisation company. AB Tasty offers AI-driven experimentation, personalisation, and product optimisation platforms for user testing.",
		icon: "AB Tasty.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "ab-tasty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("try\\.abtasty\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ab-tasty:pageGlobal:1",
				kind: "pageGlobal",
				property: "ABTasty",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ab-tasty:pageGlobal:2",
				kind: "pageGlobal",
				property: "_abtasty",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ab-tasty:pageGlobal:3",
				kind: "pageGlobal",
				property: "loadABTasty",
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
		id: "ablyft",
		name: "ABLyft",
		website: "https://ablyft.com",
		description: "ABlyft is an A/B-Testing Platform made for developers.",
		icon: "ABlyft.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "ablyft:pageGlobal:0",
				kind: "pageGlobal",
				property: "ablyft.get",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ablyft:pageGlobal:1",
				kind: "pageGlobal",
				property: "ablyftClickListener",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ablyft:pageGlobal:2",
				kind: "pageGlobal",
				property: "ablyftEventQueueInterv",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ablyft:pageGlobal:3",
				kind: "pageGlobal",
				property: "ablyftStopQueue",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "adobe-target",
		name: "Adobe Target",
		website: "https://www.adobe.com/marketing/target.html",
		description: "Adobe Target is an A/B testing, multi-variate testing, personalisation, and optimisation application",
		icon: "Adobe.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "adobe-target:pageGlobal:0",
				kind: "pageGlobal",
				property: "adobe.target",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-target:pageGlobal:1",
				kind: "pageGlobal",
				property: "adobe.target.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
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
		id: "bringie",
		name: "Bringie",
		website: "https://www.bringie.com",
		description: "Bringie is a conversion optimization platform that analyzes user behavior and performance metrics to enhance website effectiveness and increase engagement outcomes.",
		icon: "Bringie.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "bringie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bringie\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bunting",
		name: "Bunting",
		website: "http://getbunting.com",
		description: "Bunting is a website personalization and AB testing tool.",
		icon: "Bunting.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "bunting:pageGlobal:0",
				kind: "pageGlobal",
				property: "$_Bunting",
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
		id: "complianz",
		name: "Complianz",
		website: "https://complianz.io",
		description: "Complianz is a GDPR/CCPA Cookie Consent plugin that supports GDPR, DSGVO, CCPA and PIPEDA with a conditional Cookie Notice and customized Cookie Policy based on the results of the built-in Cookie Scan.",
		icon: "Complianz.svg",
		categories: [
			"experimentation-optimization",
			"privacy-compliance",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "complianz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content/plugins/complianz-gdpr-premium"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "complianz:pageGlobal:1",
				kind: "pageGlobal",
				property: "complianz.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "convert",
		name: "Convert",
		website: "https://www.convert.com",
		description: "Convert Experiences is an enterprise A/B testing and personalisation solution for conversion optimisation and data-driven decisions in high-traffic websites.",
		icon: "Convert.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "convert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.convertexperiments\\.com/js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convert:pageGlobal:1",
				kind: "pageGlobal",
				property: "convert",
				confidence: 34,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "convert:pageGlobal:2",
				kind: "pageGlobal",
				property: "convertData",
				confidence: 33,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "convert:pageGlobal:3",
				kind: "pageGlobal",
				property: "convert_temp",
				confidence: 33,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "dexter",
		name: "Dexter",
		website: "https://www.thedexterapp.com",
		description: "Dexter is a tool that analyzes product pricing through A/B testing to identify potential revenue opportunities.",
		icon: "Dexter.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "dexter:pageGlobal:0",
				kind: "pageGlobal",
				property: "dexterLiquidVariables",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dexter:pageGlobal:1",
				kind: "pageGlobal",
				property: "dexterProduct",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"shopify"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "dynamic-yield",
		name: "Dynamic Yield",
		website: "https://www.dynamicyield.com",
		description: "Dynamic Yield is a provider of automated conversion optimisation tools for marketers and retailers.",
		icon: "DynamicYield.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "dynamic-yield:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn(?:-eu)?\\.dynamicyield\\.\\w+/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dynamic-yield:pageGlobal:1",
				kind: "pageGlobal",
				property: "DY.AdDetection",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dynamic-yield:pageGlobal:2",
				kind: "pageGlobal",
				property: "DYExps.sectionConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dynamic-yield:pageGlobal:3",
				kind: "pageGlobal",
				property: "_dy_memStore",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dynamic-yield:cookie:4",
				kind: "cookie",
				key: "_dy_geo",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "dynamic-yield:cookie:5",
				kind: "cookie",
				key: "_dy_ses_load_seq",
				description: "Cookie name matches a known technology marker."
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
		id: "estore-compare",
		name: "Estore Compare",
		website: "https://estore.co.jp/estorecompare/",
		description: "Estore Compare is a website optimisation software that offers A/B testing, CVR and LTV measuring tools.",
		icon: "EstoreCompare.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "estore-compare:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\d+\\.estore\\.jp/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-optimize",
		name: "Google Optimize",
		website: "https://optimize.google.com",
		description: "Google Optimize allows you to test variants of web pages and see how they perform.",
		icon: "Google Optimize.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "google-optimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googleoptimize\\.com/optimize\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-optimize:pageGlobal:1",
				kind: "pageGlobal",
				property: "google_optimize",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "growthbook",
		name: "GrowthBook",
		website: "https://www.growthbook.io",
		description: "GrowthBook is a platform for product teams to run and track experiments, analyze results, and make data-driven decisions to optimize their products for growth.",
		icon: "GrowthBook.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "growthbook:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.growthbook.io']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "growthbook:pageGlobal:1",
				kind: "pageGlobal",
				property: "_growthbook.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "growthbook:pageGlobal:2",
				kind: "pageGlobal",
				property: "_siteSetting.growthBookApiHost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "growthbook:pageGlobal:3",
				kind: "pageGlobal",
				property: "growthbook",
				description: "Page-owned global matches a known technology marker."
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
		id: "intelligems",
		name: "Intelligems",
		website: "https://intelligems.io",
		description: "Intelligems is a tool that facilitates profit optimization for ecommerce businesses by allowing easy testing of prices, discounts, and shipping rates with the aim of maximizing margins.",
		icon: "Intelligems.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "intelligems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.intelligems\\.io/[\\w]+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "intelligems:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunk_intelligems_shopify_plugin",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "intellimize",
		name: "Intellimize",
		website: "https://www.intellimize.com",
		description: "Intellimize is a platform that utilizes machine learning to optimize website experiences and increase conversions in real-time.",
		icon: "Intellimize.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "intellimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.intellimize\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "intellimize:pageGlobal:1",
				kind: "pageGlobal",
				property: "intellimize",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "juo",
		name: "Juo",
		website: "https://get.juo.io",
		description: "Juo is a centralised experimentation platform for innovative marketing and product teams.",
		icon: "Juo.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "juo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.juo\\.io/"),
				description: "Script source URL matches a known technology marker."
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
		id: "kameleoon",
		name: "Kameleoon",
		website: "https://kameleoon.com/",
		description: "Kameleoon is a personalisation technology platform for real-time omnichannel optimisation and conversion.",
		icon: "Kameleoon.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "kameleoon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kameleoon\\.\\w+/kameleoon\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kameleoon:dom:1",
				kind: "dom",
				selector: "link[href*='.kameleoon.eu/kameleoon.js']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kameleoon:pageGlobal:2",
				kind: "pageGlobal",
				property: "Kameleoon.Gatherer.SCRIPT_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kameleoon:pageGlobal:3",
				kind: "pageGlobal",
				property: "kameleoonEndLoadTime",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kameleoon:pageGlobal:4",
				kind: "pageGlobal",
				property: "kameleoonIframeURL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kameleoon:pageGlobal:5",
				kind: "pageGlobal",
				property: "kameleoonS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kameleoon:cookie:6",
				kind: "cookie",
				key: "kameleoonVisitorCode",
				description: "Cookie name matches a known technology marker."
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
		id: "karte",
		name: "Karte",
		website: "https://karte.io",
		description: "Karte is a customer engagement and marketing automation platform that enables businesses to understand their customers, deliver personalised experiences, and optimise marketing strategies.",
		icon: "Karte.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "karte:pageGlobal:0",
				kind: "pageGlobal",
				property: "__KARTE_REWRITE_ADMIN_CONFIG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "karte:pageGlobal:1",
				kind: "pageGlobal",
				property: "__karte_live",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "karte:pageGlobal:2",
				kind: "pageGlobal",
				property: "__karte_loaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "karte:pageGlobal:3",
				kind: "pageGlobal",
				property: "__karte_tracker",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"recurring"
			]
		}
	},
	{
		id: "monetate",
		name: "Monetate",
		website: "https://monetate.com",
		description: "Monetate is a company that specializes in providing personalisation and customer experience optimisation solutions to businesses.",
		icon: "Monetate.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "monetate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.monetate\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "monetate:pageGlobal:1",
				kind: "pageGlobal",
				property: "monetate",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monetate:pageGlobal:2",
				kind: "pageGlobal",
				property: "monetateQ",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monetate:pageGlobal:3",
				kind: "pageGlobal",
				property: "monetateT",
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
		id: "neat-a-b-testing",
		name: "Neat A/B testing",
		website: "https://neatab.com",
		description: "Neat A/B Testing is a Shopify app built by NeatShift.",
		icon: "Neat.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "neat-a-b-testing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.neatab\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "nelio-testing",
		name: "Nelio Testing",
		website: "https://neliosoftware.com/testing",
		description: "Nelio Testing is a plugin that allows testing everything on a WordPress site.",
		icon: "NelioTesting.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "nelio-testing:pageGlobal:0",
				kind: "pageGlobal",
				property: "nabSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nelio-testing:cookie:1",
				kind: "cookie",
				key: "nabUniqueViews",
				description: "Cookie name matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			],
			cpe: "cpe:2.3:a:neliosoftware:nelio_ab_testing:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "omniconvert",
		name: "Omniconvert",
		website: "https://www.omniconvert.com",
		description: "Omniconvert is an award-winning conversion rate optimisation (CRO) software that can be used for A/B testing, online surveys, traffic segmentation.",
		icon: "Omniconvert.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "omniconvert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.omniconvert\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "omniconvert:dom:1",
				kind: "dom",
				selector: "link[href*='app.omniconvert.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "omniconvert:pageGlobal:2",
				kind: "pageGlobal",
				property: "_omni",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "optibase",
		name: "Optibase",
		website: "https://www.optibase.io",
		description: "Optibase is an A/B testing app for Webflow, enabling data-driven decisions by testing various elements such as copy, design, or entire pages, aimed at improving site conversions.",
		icon: "Optibase.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "optibase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.optibase\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "optibase:pageGlobal:1",
				kind: "pageGlobal",
				property: "optibaseScriptLoaded",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"webflow"
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
		id: "optimizely",
		name: "Optimizely",
		website: "https://www.optimizely.com",
		description: "Optimizely is an experimentation platform that helps developers build and run A/B tests on websites.",
		icon: "Optimizely.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "optimizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("optimizely\\.com.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "optimizely:pageGlobal:1",
				kind: "pageGlobal",
				property: "optimizely",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "optimizely:pageGlobal:2",
				kind: "pageGlobal",
				property: "optimizelyClient.clientVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "optimizely:pageGlobal:3",
				kind: "pageGlobal",
				property: "optimizelySdk",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "optimizely:cookie:4",
				kind: "cookie",
				key: "optimizelyEndUserId",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"high"
			]
		}
	},
	{
		id: "oracle-maxymiser",
		name: "Oracle Maxymiser",
		website: "https://www.oracle.com/uk/cx/marketing/personalization-testing",
		description: "Oracle Maxymiser is a real-time behavioral targeting, in-session personalisation, and product recommendations platform.",
		icon: "Oracle.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "oracle-maxymiser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.maxymiser\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "oracle-maxymiser:pageGlobal:1",
				kind: "pageGlobal",
				property: "maxy",
				confidence: 20,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "oracle-maxymiser:pageGlobal:2",
				kind: "pageGlobal",
				property: "mmsystem.getConfig",
				confidence: 80,
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
		id: "overheat",
		name: "Overheat",
		website: "https://overheat.it",
		description: "Overheat is a conversion optimization package designed to improve website performance by enhancing user experience and increasing conversion rates through data-driven strategies and tailored solutions.",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "overheat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.overheat\\.it"),
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
		id: "pretty-damn-quick",
		name: "Pretty Damn Quick",
		website: "https://www.prettydamnquick.com/",
		description: "Pretty Damn Quick is a Shopify app for eCommerce brands to deliver personalized checkout experiences.",
		icon: "PrettyDamnQuick.png",
		categories: [
			"experimentation-optimization",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "pretty-damn-quick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pdq-scripts\\.pdqprod\\.link"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pretty-damn-quick:pageGlobal:1",
				kind: "pageGlobal",
				property: "initPDQscript",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ptengine",
		name: "Ptengine",
		website: "https://www.ptengine.com",
		description: "Ptengine is a web analytics tool that offers heat mapping, session replays, and other insights to help businesses understand and optimize user behavior on their websites.",
		icon: "Ptengine.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "ptengine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.ptengine\\.(?:jp|cn|com)?/'"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ptengine:pageGlobal:1",
				kind: "pageGlobal",
				property: "ptengine",
				description: "Page-owned global matches a known technology marker."
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
		id: "rankscience",
		name: "RankScience",
		website: "https://www.rankscience.com",
		description: "RankScience is a split testing platform that uses data science to optimize search traffic.",
		icon: "RankScience.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "rankscience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ranksci\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "shoplift",
		name: "Shoplift",
		website: "https://www.shoplift.ai",
		description: "Shoplift is a data-driven A/B testing platform for Shopify stores that optimizes conversion rates without requiring coding.",
		icon: "Shoplift.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "shoplift:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.shoplift\\.ai"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "shoplift:pageGlobal:1",
				kind: "pageGlobal",
				property: "shoplift.getVisitorData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "shoplift:pageGlobal:2",
				kind: "pageGlobal",
				property: "shopliftInstance",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"shopify"
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
		id: "sitespect",
		name: "SiteSpect",
		website: "https://www.sitespect.com",
		description: "SiteSpect is the A/B testing and optimisation solution.",
		icon: "SiteSpect.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "sitespect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/__ssobj/core\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sitespect:pageGlobal:1",
				kind: "pageGlobal",
				property: "ss_dom_var",
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
		id: "split-hero",
		name: "Split Hero",
		website: "https://splithero.com",
		description: "Split Hero is a WordPress tool for A/B split testing, enabling performance comparisons between different page variations to optimize user engagement and conversions.",
		icon: "SplitHero.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "split-hero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.splithero\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "talkable",
		name: "Talkable",
		website: "https://www.talkable.com",
		description: "Talkable is a cloud-based referral marketing system that assists medium to large businesses with campaign creation and channel performance tracking.",
		icon: "Talkable.svg",
		categories: [
			"experimentation-optimization",
			"commerce-operations",
			"marketing-automation"
		],
		rules: [
			{
				id: "talkable:pageGlobal:0",
				kind: "pageGlobal",
				property: "talkable.config.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
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
		id: "tontine",
		name: "Tontine",
		website: "https://www.tontine.ai",
		description: "Tontine is an A/B price testing platform built specifically for high-growth Shopify merchants focused on optimizing their profit margins.",
		icon: "Tontine.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "tontine:pageGlobal:0",
				kind: "pageGlobal",
				property: "TontineApp.tontineAnalytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"shopify"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "trbo",
		name: "Trbo",
		website: "https://www.trbo.com",
		description: "Trbo is a personalisation, recommendations, A/B testing platform from Germany.",
		icon: "Trbo.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "trbo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trbo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trbo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_trbo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "trbo:pageGlobal:2",
				kind: "pageGlobal",
				property: "_trbo_start",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "trbo:pageGlobal:3",
				kind: "pageGlobal",
				property: "_trboq",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "trbo:cookie:4",
				kind: "cookie",
				key: "trbo_session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "trbo:cookie:5",
				kind: "cookie",
				key: "trbo_usr",
				description: "Cookie name matches a known technology marker."
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
		id: "trident-ab",
		name: "Trident AB",
		website: "https://tridentab.com",
		description: "Trident AB is a platform for optimizing websites through A/B testing.",
		icon: "TridentAB.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "trident-ab:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Trident/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
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
		id: "userzoom",
		name: "UserZoom",
		website: "https://www.userzoom.com",
		description: "UserZoom is a cloud-based user experience solution.",
		icon: "UserZoom.svg",
		categories: [
			"experimentation-optimization",
			"analytics"
		],
		rules: [
			{
				id: "userzoom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userzoom\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "varify",
		name: "Varify",
		website: "https://varify.io",
		description: "Varify is an A/B testing platform that provides traffic flat rates for data-driven web page optimization aimed at increasing conversions.",
		icon: "Varify.svg",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "varify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.varify\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "varify:pageGlobal:1",
				kind: "pageGlobal",
				property: "varify.debug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "varify:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkvarify_io",
				description: "Page-owned global matches a known technology marker."
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
		id: "vertster",
		name: "Vertster",
		website: "https://vertster.com",
		description: "Vertster is a multivariate testing platform that enables users to compare multiple webpage or app variations simultaneously to identify which combination of elements performs best based on user behavior and data analysis.",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "vertster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.vertster\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vertster:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.vertster\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "visiopt",
		name: "VisiOpt",
		website: "https://visiopt.com",
		description: "Visiopt™ is a powerful yet easy to use AI-driven Optimization System that enables you to manufacture your perfect customer at scale like a well oiled machine.",
		icon: "visiopt.png",
		categories: [
			"experimentation-optimization"
		],
		rules: [
			{
				id: "visiopt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("visiopt\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "visiopt:pageGlobal:1",
				kind: "pageGlobal",
				property: "visiopt_code",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zoho-pagesense",
		name: "Zoho PageSense",
		website: "https://www.zoho.com/pagesense/",
		description: "Zoho PageSense is a conversion optimisation platform which combines the power of web analytics, A/B testing, and personalisation.",
		icon: "Zoho.svg",
		categories: [
			"experimentation-optimization",
			"marketing-automation"
		],
		rules: [
			{
				id: "zoho-pagesense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pagesense\\.(?:cn|io)?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zoho-pagesense:pageGlobal:1",
				kind: "pageGlobal",
				property: "$pagesense",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zoho-pagesense:pageGlobal:2",
				kind: "pageGlobal",
				property: "pagesense",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"zoho"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
