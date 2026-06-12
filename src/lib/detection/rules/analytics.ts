import type { TechnologyDefinition } from '../types';

export const analyticsTechnologyDefinitions = [
	{
		id: "51-la",
		name: "51.LA",
		website: "https://www.51.la",
		description: "51.LA is a Chinese based website visitor counter.",
		icon: "51.LA.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "51-la:pageGlobal:0",
				kind: "pageGlobal",
				property: "LA.config.ck",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "52degrees",
		name: "52Degrees",
		website: "https://51degrees.com",
		description: "52Degrees is a data platform formerly known as Handset Detection, providing real-time device and data insights for digital businesses.",
		icon: "52Degrees.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "52degrees:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.handsetdetection\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "52degrees:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("'api\\.handsetdetection\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "abralytics",
		name: "Abralytics",
		website: "https://www.abralytics.com",
		description: "Abralytics is a privacy-focused alternative to Google Analytics that provides email reports.",
		icon: "Abralytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "abralytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.abralytics\\.com/"),
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
		id: "acecounter",
		name: "Acecounter",
		website: "https://www.home.acecounter.com",
		description: "Acecounter is a Korean analytics service that consolidates website analytics data into a single platform for streamlined access and analysis.",
		icon: "Acecounter.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "acecounter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.acecounter\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acecounter:pageGlobal:1",
				kind: "pageGlobal",
				property: "_AceCounter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ackee",
		name: "Ackee",
		website: "https://ackee.electerious.com",
		description: "Ackee is a self-hosted, Node.js based analytics tool with a focus on privacy.",
		icon: "Ackee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ackee:dom:0",
				kind: "dom",
				selector: "[data-ackee-domain-id], [data-ackee-server]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ackee:pageGlobal:1",
				kind: "pageGlobal",
				property: "ackeeTracker",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "acoustic-experience-analytics",
		name: "Acoustic Experience Analytics",
		website: "https://acoustic.com/tealeaf",
		description: "Acoustic Experience Analytics (Tealeaf), formerly known as IBM Tealeaf Customer Experience on Cloud, is a SaaS-based analytics solution that delivers Tealeaf core capabilities in an managed cloud environment. Tealeaf captures and manages each visitor interaction on your website and mobile applications.",
		icon: "Acoustic.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "acoustic-experience-analytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "TLT.config.core.modules.TLCookie",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acoustic-experience-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "TLT_VERSION",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acoustic-experience-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "TeaLeaf",
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
		id: "acquia-personalization",
		name: "Acquia Personalization",
		website: "https://www.acquia.com/products/marketing-cloud/personalization",
		description: "Acquia Personalization (formerly Acquia Lift) lets you track customers' behavior throughout your website.",
		icon: "acquia-personalization.png",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "acquia-personalization:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lift\\.acquia\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-personalization:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("lift\\.acquia\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "acquia-personalization:dom:2",
				kind: "dom",
				selector: "[data-lift-slot]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-personalization:pageGlobal:3",
				kind: "pageGlobal",
				property: "AcquiaLift",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acquia-personalization:pageGlobal:4",
				kind: "pageGlobal",
				property: "_tcaq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"acquia-cloud-platform-confidence-95"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "actirise",
		name: "Actirise",
		website: "https://corporate.actirise.com",
		description: "Actirise is a monetization and business intelligence platform.",
		icon: "Actirise.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "actirise:dom:0",
				kind: "dom",
				selector: "div[data-actirise]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "actirise:pageGlobal:1",
				kind: "pageGlobal",
				property: "ActiriseSafeFrame",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "actirise:pageGlobal:2",
				kind: "pageGlobal",
				property: "actirisePlugin.version",
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
		id: "adcalls",
		name: "AdCalls",
		website: "https://adcalls.com",
		description: "AdCalls is a call tracking software designed to monitor and analyze inbound and outbound calls for performance and attribution.",
		icon: "AdCalls.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "adcalls:dom:0",
				kind: "dom",
				selector: "link[href*='.adcalls.nl']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adcalls:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.adcalls\\.nl"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adjust",
		name: "Adjust",
		website: "https://www.adjust.com",
		description: "Adjust is the mobile marketing analytics platform.",
		icon: "Adjust.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "adjust:dom:0",
				kind: "dom",
				selector: "div[data-adjust*='app.adjust.com/'], a[href*='app.adjust.com/'], a[href*='.adj.st/'], form[action*='app.adjust.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adjust:pageGlobal:1",
				kind: "pageGlobal",
				property: "Adjust.initSdk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"poa"
			]
		}
	},
	{
		id: "adline",
		name: "Adline",
		website: "https://adline.com",
		description: "Adline is an advertising & analytics software that helps launch multichannel ads with automatic ad optimization.",
		icon: "Adline.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "adline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prod\\.api\\.adline\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adline:pageGlobal:1",
				kind: "pageGlobal",
				property: "adlineConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adobe-analytics",
		name: "Adobe Analytics",
		website: "https://www.adobe.com/analytics/adobe-analytics.html",
		description: "Adobe Analytics is a web analytics, marketing and cross-channel analytics application.",
		icon: "Adobe Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "adobe-analytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "s_c_il.0._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "s_c_il.0.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "s_c_il.1._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:3",
				kind: "pageGlobal",
				property: "s_c_il.1.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:4",
				kind: "pageGlobal",
				property: "s_c_il.2._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:5",
				kind: "pageGlobal",
				property: "s_c_il.2.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:6",
				kind: "pageGlobal",
				property: "s_c_il.3._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:7",
				kind: "pageGlobal",
				property: "s_c_il.3.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:8",
				kind: "pageGlobal",
				property: "s_c_il.4._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:9",
				kind: "pageGlobal",
				property: "s_c_il.4.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:10",
				kind: "pageGlobal",
				property: "s_c_il.5._c",
				valuePattern: new RegExp("s_c"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-analytics:pageGlobal:11",
				kind: "pageGlobal",
				property: "s_c_il.5.constructor.name",
				valuePattern: new RegExp("AppMeasurement"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adtribute",
		name: "Adtribute",
		website: "https://www.adtribute.io",
		description: "Adtribute is a tool designed to track users accurately and unify data, enhancing outcomes in marketing attribution, business intelligence, and data activation.",
		icon: "Adtribute.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "adtribute:pageGlobal:0",
				kind: "pageGlobal",
				property: "adbq.0.referrer_url",
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
		id: "ahoy",
		name: "Ahoy",
		website: "https://github.com/ankane/ahoy",
		description: "Ahoy is a Ruby gem that provides simple and powerful analytics for Ruby on Rails applications.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ahoy:pageGlobal:0",
				kind: "pageGlobal",
				property: "ahoy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ahoy:cookie:1",
				kind: "cookie",
				key: "ahoy_track",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "ahoy:cookie:2",
				kind: "cookie",
				key: "ahoy_visit",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "ahoy:cookie:3",
				kind: "cookie",
				key: "ahoy_visitor",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "air360",
		name: "Air360",
		website: "https://www.air360.io",
		description: "Air360 is a technology company that specialises in performance-enhancing, mobile and ecommerce experience analytics.",
		icon: "Air360.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "air360:pageGlobal:0",
				kind: "pageGlobal",
				property: "Air360.SDK_Version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "airbridge",
		name: "Airbridge",
		website: "https://www.airbridge.io",
		description: "Airbridge is a marketing attribution tool that helps you measure and attribute growth to your marketing campaigns.",
		icon: "Airbridge.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "airbridge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.airbridge\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "airbridge:pageGlobal:1",
				kind: "pageGlobal",
				property: "airBridgeSentData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "airbridge:pageGlobal:2",
				kind: "pageGlobal",
				property: "airbridge.version",
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
		id: "akavita",
		name: "Akavita",
		website: "https://akavita.com",
		description: "Akavita is a Russian-based service offering analytics and advertising solutions.",
		icon: "Akavita.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "akavita:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adlik\\.akavita\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "albacross",
		name: "Albacross",
		website: "https://albacross.com",
		description: "Albacross is a lead generation and account intelligence platform. It helps marketing and sales teams identify their ideal customers visiting their website and gives them the insights they need to generate more qualified leads, make prospecting more efficient and close more deals.",
		icon: "Albacross.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "albacross:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.albacross\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "albacross:pageGlobal:1",
				kind: "pageGlobal",
				property: "_nQsv",
				valuePattern: new RegExp("^([\\d.])$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "alexa-certified-site-metrics",
		name: "Alexa Certified Site Metrics",
		website: "https://support.alexa.com/hc/en-us/sections/200063374",
		description: "Alexa Certified Site Metrics is an analytics service wich monitors and analyses web traffic and can be used to keep track of user behavior.",
		icon: "Alexa.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "alexa-certified-site-metrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net/atrk\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alexa-certified-site-metrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "_atrk_opts.domain",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "alloka",
		name: "Alloka",
		website: "https://alloka.ru",
		description: "Alloka is a platform that provides end-to-end analytics and dynamic call tracking.",
		icon: "Alloka.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "alloka:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.alloka\\.ru"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alloka:pageGlobal:1",
				kind: "pageGlobal",
				property: "AllokaId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "alloka:pageGlobal:2",
				kind: "pageGlobal",
				property: "allokaAddEvent",
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
		id: "allstate",
		name: "Allstate",
		website: "https://www.allstate.com",
		description: "Allstate is a provider of auto insurance quote metrics, offering data-driven insights to assess coverage options, pricing, and risk factors.",
		icon: "Allstate.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "allstate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("agents\\.allstate\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "allstate:pageGlobal:1",
				kind: "pageGlobal",
				property: "s_i_allstateglobal",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "alpharank",
		name: "Alpharank",
		website: "https://www.alpharank.ai",
		description: "Alpharank is a tool focused on customer journey mapping to enhance conversion optimization specifically for banks.",
		icon: "Alpharank.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "alpharank:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.alpharank\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "amplitude",
		name: "Amplitude",
		website: "https://amplitude.com",
		description: "Amplitude is a web and mobile analytics solution with cross-platform user journey tracking, user behavior analysis and segmentation capabilities.",
		icon: "Amplitude.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "amplitude:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.(?:segment.+)?amplitude(?:\\.com|-plugins)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "amplitude:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.amplitude\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "amplitude:pageGlobal:2",
				kind: "pageGlobal",
				property: "AMPLITUDE_KEY",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amplitude:pageGlobal:3",
				kind: "pageGlobal",
				property: "__AMPLITUDE__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amplitude:pageGlobal:4",
				kind: "pageGlobal",
				property: "amplitudeClient",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa",
				"recurring"
			]
		}
	},
	{
		id: "analysys-ark",
		name: "Analysys Ark",
		website: "https://ark.analysys.cn",
		icon: "Analysys Ark.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analysys-ark:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("AnalysysFangzhou_JS_SDK\\.min\\.js\\?v=([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "analysys-ark:pageGlobal:1",
				kind: "pageGlobal",
				property: "AnalysysAgent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "analysys-ark:cookie:2",
				kind: "cookie",
				key: "ARK_ID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "analytick",
		name: "Analytick",
		website: "http://analytick.ir",
		description: "Analytick is an advanced analytics platform that collects and analyzes data on website performance and user behavior.",
		icon: "Analytick.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analytick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.analytick\\.ir/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "analyticowl",
		name: "AnalyticOwl",
		website: "https://analyticowl.com",
		description: "AnalyticOwl is a platform that offers a planning and attribution toolbox designed to support more informed advertising decisions.",
		icon: "AnalyticOwl.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analyticowl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("owlsight\\.analyticowl\\.com"),
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
		id: "analyticsconnect",
		name: "AnalyticsConnect",
		website: "https://analyticsconnect.io",
		description: "AnalyticsConnect is a tool that tracks eCommerce data from Keap/Infusionsoft in Google Analytics, providing detailed insights and analysis.",
		icon: "AnalyticsConnect.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analyticsconnect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.analyticsconnect\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "analyzati",
		name: "Analyzati",
		website: "https://analyzati.com",
		description: "Analyzati is a privacy-focused analytics tool that measures website performance while protecting user data.",
		icon: "Analyzati.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analyzati:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.analyzati\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "analyzee",
		name: "Analyzee",
		website: "https://analyzee.io",
		description: "Analyzee is an analytics tool that allows you to gain insights into visitor behavior and optimise your website's user experience using heatmaps and other analytics features.",
		icon: "Analyzee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analyzee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.analyzee\\.io/sdk/(.*)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "analyzee:pageGlobal:1",
				kind: "pageGlobal",
				property: "Analyzee._sessionExtend",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "analyzee:pageGlobal:2",
				kind: "pageGlobal",
				property: "analyzee._session",
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
		id: "analyzz",
		name: "Analyzz",
		website: "https://analyzz.com",
		description: "Analyzz is a privacy-focused analytics platform that collects and reports website data while minimizing tracking of individual users.",
		icon: "Analyzz.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "analyzz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.analyzz\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "appdynamics",
		name: "AppDynamics",
		website: "https://appdynamics.com",
		description: "AppDynamics is an application performance management (APM) and IT operations analytics (ITOA) company based in San Francisco.",
		icon: "AppDynamics.svg",
		categories: [
			"analytics",
			"monitoring-error-tracking"
		],
		rules: [
			{
				id: "appdynamics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("adrum"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "appdynamics:pageGlobal:1",
				kind: "pageGlobal",
				property: "ADRUM.conf.agentVer",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "appsflyer",
		name: "Appsflyer",
		website: "https://www.appsflyer.com/",
		description: "AppsFlyer is a SaaS mobile marketing analytics and attribution platform.",
		icon: "Appsflyer.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "appsflyer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("websdk\\.appsflyer\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "appsflyer:pageGlobal:1",
				kind: "pageGlobal",
				property: "AppsFlyerSdkObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "at-internet-analyzer",
		name: "AT Internet Analyzer",
		website: "https://atinternet.com/en",
		icon: "AT Internet.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "at-internet-analyzer:pageGlobal:0",
				kind: "pageGlobal",
				property: "ATInternet",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "at-internet-analyzer:pageGlobal:1",
				kind: "pageGlobal",
				property: "xtsite",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "at-internet-xiti",
		name: "AT Internet XiTi",
		website: "https://atinternet.com/en",
		icon: "AT Internet.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "at-internet-xiti:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xiti\\.com/hit\\.xiti"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "at-internet-xiti:pageGlobal:1",
				kind: "pageGlobal",
				property: "xt_click",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "attribution",
		name: "Attribution",
		website: "https://www.attributionapp.com",
		description: "Attribution is a marketing analytics platform that provides marketers with insights to understand the cost, revenue and profit resulting from marketing programs.",
		icon: "Attribution.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "attribution:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.attributionapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "attribution:pageGlobal:1",
				kind: "pageGlobal",
				property: "Attribution.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				confidence: 50,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "attribution:pageGlobal:2",
				kind: "pageGlobal",
				property: "Attribution._options",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "auryc",
		name: "Auryc",
		website: "https://www.auryc.com",
		description: "Auryc is a client-side journey intelligence platform that surfaces real-time insights.",
		icon: "Auryc.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "auryc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.auryc\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "auryc:pageGlobal:1",
				kind: "pageGlobal",
				property: "aurycJsLibConfig.base.code_version",
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
		id: "automatepro",
		name: "AutomatePro",
		website: "https://automatepro.ai",
		description: "AutomatePro is a workflow automation platform that streamlines routine business processes.",
		icon: "AutomatePro.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "automatepro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.automatepro\\.ai"),
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
		id: "avanser",
		name: "Avanser",
		website: "https://www.avanser.com",
		description: "Avanser allow you to track every call and enable your business to make better-informed decisions based on your phone calls.",
		icon: "Avanser.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "avanser:pageGlobal:0",
				kind: "pageGlobal",
				property: "AVANSERjs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "avanser:pageGlobal:1",
				kind: "pageGlobal",
				property: "AvanserCore",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "avanser:pageGlobal:2",
				kind: "pageGlobal",
				property: "AvanserOptions",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "avidtrak",
		name: "AvidTrak",
		website: "https://avidtrak.com",
		description: "AvidTrak is software for call tracking, recording, and analytics, designed to monitor phone performance, log conversations, and provide insights from call data.",
		icon: "AvidTrak.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "avidtrak:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("avidtrak\\.com/"),
				description: "Script content contains a bounded technology signature."
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
		id: "awstats",
		name: "AWStats",
		website: "https://awstats.sourceforge.net",
		icon: "AWStats.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "awstats:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:^|/)awstats_misc_tracker\\.js(?:\\?|$)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "awstats:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("AWStats ([\\d.]+(?: \\(build [\\d.]+\\))?)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:laurent_destailleur:awstats:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "azure-monitor",
		name: "Azure Monitor",
		website: "https://azure.microsoft.com/en-us/services/monitor",
		description: "Azure Monitor collects monitoring telemetry from a variety of on-premises and Azure sources. Azure Monitor helps you maximise the availability and performance of your applications and services.",
		icon: "Azure.svg",
		categories: [
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "azure-monitor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.monitor\\.azure\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "azure-monitor:dom:1",
				kind: "dom",
				selector: "link[href*='js.monitor.azure.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "azure-monitor:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("js\\.monitor\\.azure\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"azure"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "baidu-analytics",
		name: "Baidu Analytics (百度统计)",
		website: "https://tongji.baidu.com/",
		description: "Baidu Analytics (百度统计) is a free tool for tracking and reporting traffic data of users visiting your site.",
		icon: "Baidu Tongji.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "baidu-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hm\\.baidu\\.com/hm?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "baremetrics",
		name: "Baremetrics",
		website: "https://baremetrics.com",
		description: "Baremetrics is a subscription analytics platform offering insights for payment providers like Stripe, Braintree, and others.",
		icon: "Baremetrics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "baremetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.baremetrics\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "bazo",
		name: "Bazo",
		website: "https://bazo.io",
		description: "Bazo is a tool that identifies the company or organisation that visited your website and tracks its activities.",
		icon: "BazoIO.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "bazo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bazo\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bazo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_bazoq",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bazo:pageGlobal:2",
				kind: "pageGlobal",
				property: "_bazou",
				valuePattern: new RegExp("\\.bazo\\.io/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bazo:pageGlobal:3",
				kind: "pageGlobal",
				property: "_bazov",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
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
		id: "better-replay",
		name: "Better Replay",
		website: "https://www.better-replay.com",
		description: "Better Replay is a platform for session recording and replay, designed to capture and review content efficiently.",
		icon: "BetterReplay.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "better-replay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp(".api\\.better-replay\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "beusable",
		name: "Beusable",
		website: "https://www.beusable.net",
		description: "Beusable is a tool that visualises site visitors' behaviour, offering insights through graphical data representations.",
		icon: "Beusable.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "beusable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.beusable\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "beusable:pageGlobal:1",
				kind: "pageGlobal",
				property: "__beusablerumclient__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "biano",
		name: "Biano",
		website: "https://www.biano.ro",
		description: "Biano is a furnisher store tracking pixel designed to gather data on user interactions with furniture items for analytical purposes.",
		icon: "Biano.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "biano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.biano\\.ro/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "biano:pageGlobal:1",
				kind: "pageGlobal",
				property: "bianoTrack",
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
		id: "bizspring",
		name: "BizSpring",
		website: "https://bizspring.co.kr",
		description: "BizSpring is a data analytics platform focused on understanding online customer behavior and analyzing marketing data for business insights.",
		icon: "BizSpring.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "bizspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fs\\.bizspring\\.net"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "black-book",
		name: "Black Book",
		website: "https://www.hearst.com/black-book",
		description: "Black Book is a provider of precise data and analytics for the automotive industry, offering market insights to support informed decision-making.",
		icon: "BlackBook.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "black-book:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blackbookinformation\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "black-book:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.blackbookinformation\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "blueshift",
		name: "Blueshift",
		website: "https://blueshift.com",
		description: "Blueshift offers the SmartHub CDP, which helps brands deliver relevant and connected experiences across every customer interaction.",
		icon: "Blueshift.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "blueshift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn.getblueshift.com/"),
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
		id: "browsee",
		name: "Browsee",
		website: "https://browsee.io",
		description: "Browsee is a user behavior analytics tool that helps track and understand visitor interactions on a website.",
		icon: "Browsee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "browsee:pageGlobal:0",
				kind: "pageGlobal",
				property: "_browsee.apiKey",
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
		id: "bugsnag",
		name: "BugSnag",
		website: "https://bugsnag.com",
		description: "Bugsnag is a cross-platform error monitoring, reporting, and resolution software.",
		icon: "BugSnag.svg",
		categories: [
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "bugsnag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/bugsnag.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bugsnag:pageGlobal:1",
				kind: "pageGlobal",
				property: "Bugsnag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bugsnag:pageGlobal:2",
				kind: "pageGlobal",
				property: "bugsnag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bugsnag:pageGlobal:3",
				kind: "pageGlobal",
				property: "bugsnagClient",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "burst",
		name: "Burst",
		website: "https://burst-statistics.com",
		description: "Burst Statistics keeps all data on your server, making it fully compliant with privacy laws. Our dashboards offer clear and concise insights, allowing you to make informed decisions without feeling overwhelmed by abundant data. Choose Burst Statistics for seamless and reliable analytics trusted by over 100,000 users.",
		icon: "Burst.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "burst:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets/js/build/burst"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "burst:pageGlobal:1",
				kind: "pageGlobal",
				property: "burst.url",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cabin",
		name: "Cabin",
		website: "https://withcabin.com",
		description: "Cabin is a web analytics service that tracks and reports website traffic.",
		icon: "Cabin.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "cabin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.withcabin\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cabin:pageGlobal:1",
				kind: "pageGlobal",
				property: "cabin",
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
		id: "calibermind",
		name: "CaliberMind",
		website: "https://calibermind.com",
		description: "CaliberMind is a marketing analytics platform designed for B2B marketers to optimize strategies and improve decision-making through data insights.",
		icon: "CaliberMind.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "calibermind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.calibermind\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "calibermind:pageGlobal:1",
				kind: "pageGlobal",
				property: "calibermindAddFormListener",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "calibermind:pageGlobal:2",
				kind: "pageGlobal",
				property: "calibermindCaptureSubmit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "call-cap",
		name: "Call Cap",
		website: "https://www.marchex.com/callcap",
		description: "Call Cap is a tool used for tracking and monitoring phone calls.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "call-cap:pageGlobal:0",
				kind: "pageGlobal",
				property: "Callcap.data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "call-cap:pageGlobal:1",
				kind: "pageGlobal",
				property: "callcap",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "call-cap:pageGlobal:2",
				kind: "pageGlobal",
				property: "callcap_webmatch_callback",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "callrail",
		name: "CallRail",
		website: "https://www.callrail.com",
		description: "CallRail is a service that tracks and manages your phone leads, helping businesses to determine which marketing campaigns are driving quality leads.",
		icon: "CallRail.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "callrail:pageGlobal:0",
				kind: "pageGlobal",
				property: "CallTrk",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "callrail:pageGlobal:1",
				kind: "pageGlobal",
				property: "CallTrkSwap",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "callrail:pageGlobal:2",
				kind: "pageGlobal",
				property: "crwpVer",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "callroot",
		name: "CallRoot",
		website: "https://callroot.com",
		description: "CallRoot is a phone call tracking system designed for marketers to monitor, analyze, and optimize inbound calls.",
		icon: "CallRoot.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "callroot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.callroot\\.com"),
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
		id: "calltrackingmetrics",
		name: "CallTrackingMetrics",
		website: "https://www.calltrackingmetrics.com",
		description: "CallTrackingMetrics is a call tracking and marketing attribution solution for contact centers and agencies.",
		icon: "CallTrackingMetrics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "calltrackingmetrics:pageGlobal:0",
				kind: "pageGlobal",
				property: "__ctm.numbers",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "calltrackingmetrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "__ctm_tracked_numbers",
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
		id: "capturly",
		name: "Capturly",
		website: "https://capturly.com",
		description: "Capturly is an online analytics platform for businesses to analyze user behavior, identify issues, improve conversion rates, and enhance sales.",
		icon: "Capturly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "capturly:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("capturly-track-js\\.js"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "carrot-quest",
		name: "Carrot quest",
		website: "https://www.carrotquest.io",
		description: "Carrot quest is a customer engagement and communication platform that aids businesses in improving interactions with users and customers through targeted messaging, in-app messaging, live chat, email campaigns, and user behavior tracking.",
		icon: "Carrot quest.svg",
		categories: [
			"analytics",
			"email-messaging"
		],
		rules: [
			{
				id: "carrot-quest:pageGlobal:0",
				kind: "pageGlobal",
				property: "carrotquest",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "carrot-quest:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.carrotquest\\.app"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "carto-data-observatory",
		name: "CARTO Data Observatory",
		website: "https://carto.com/data-observatory",
		description: "Carto Data Observatory is a platform that provides access to thousands of public and premium datasets from curated source.",
		icon: "Carto.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "carto-data-observatory:pageGlobal:0",
				kind: "pageGlobal",
				property: "CartoDbLib",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "carto-data-observatory:pageGlobal:1",
				kind: "pageGlobal",
				property: "cartodb.$",
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
		id: "castle",
		name: "Castle",
		website: "https://castle.io",
		description: "Castle is a tool that offers deep visibility into user activities on your website, allowing you to monitor and understand user behaviour in real-time.",
		icon: "Castle.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "castle:dom:0",
				kind: "dom",
				selector: "link[href*='t.castle.io']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "castle:pageGlobal:1",
				kind: "pageGlobal",
				property: "_castle",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "catchjs",
		name: "CatchJS",
		website: "https://catchjs.com",
		description: "CatchJS is a JavaScript error-logging tool that captures runtime errors and generates detailed reports for diagnostic analysis.",
		icon: "CatchJS.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "catchjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.catchjs\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "catchjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "catchjs.log",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "catchjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "catchjs_config.clicks",
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
		id: "channeladvisor",
		name: "ChannelAdvisor",
		website: "https://www.channeladvisor.com",
		description: "ChannelAdvisor is a provider of cloud-based solutions to ecommerce companies.",
		icon: "ChannelAdvisor.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "channeladvisor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.channeladvisor\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "channeladvisor:dom:1",
				kind: "dom",
				selector: "link[href*='.channeladvisor.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "chartbeat",
		name: "Chartbeat",
		website: "https://chartbeat.com",
		description: "Chartbeat is a web analytics service that provides real-time data and insights into website performance, audience engagement, and content effectiveness for publishers and media organizations.",
		icon: "Chartbeat.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "chartbeat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chartbeat\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chartbeat:pageGlobal:1",
				kind: "pageGlobal",
				property: "_sf_async_config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chartbeat:pageGlobal:2",
				kind: "pageGlobal",
				property: "_sf_endpt",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clearbit-reveal",
		name: "Clearbit Reveal",
		website: "https://clearbit.com/#reveal",
		description: "Clearbit Reveal identifies anonymous visitors to websites.",
		icon: "Clearbit.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clearbit-reveal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("reveal\\.clearbit\\.com/v[(0-9)]/"),
				description: "Script source URL matches a known technology marker."
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
		id: "clearsale",
		name: "ClearSale",
		website: "https://www.clear.sale/",
		description: "ClearSale offers fraud management and chargeback protection services.",
		icon: "ClearSale.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clearsale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("device\\.clearsale\\.com\\.br"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clearsale:pageGlobal:1",
				kind: "pageGlobal",
				property: "csdm",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clickheat",
		name: "ClickHeat",
		website: "https://www.labsmedia.com/clickheat/index.html",
		icon: "ClickHeat.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clickheat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clickheat.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clickheat:pageGlobal:1",
				kind: "pageGlobal",
				property: "clickHeatServer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clicktale",
		name: "ClickTale",
		website: "https://www.clicktale.com",
		description: "ClickTale is a SaaS solution enabling organisations to gain visual in-page analytics.",
		icon: "ClickTale.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clicktale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clicktale\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clicktale:pageGlobal:1",
				kind: "pageGlobal",
				property: "ClickTale",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clicktale:pageGlobal:2",
				kind: "pageGlobal",
				property: "ClickTaleEvent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clicktale:pageGlobal:3",
				kind: "pageGlobal",
				property: "ClickTaleGlobal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clicktale:pageGlobal:4",
				kind: "pageGlobal",
				property: "clickTaleStartEventSignal",
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
		id: "clickx",
		name: "Clickx",
		website: "https://www.clickx.io",
		description: "Clickx is a marketing analytics platform that lets users generate reports and gain insights into marketing campaigns, product pages, ROI, and more.",
		icon: "Clickx.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clickx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.clickx\\.io/"),
				description: "Script source URL matches a known technology marker."
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
		id: "clicky",
		name: "Clicky",
		website: "https://getclicky.com",
		description: "Clicky is web an analytics tool which helps you to get real-time analysis including spy view.",
		icon: "Clicky.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "clicky:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.getclicky\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clicky:pageGlobal:1",
				kind: "pageGlobal",
				property: "clicky",
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
		id: "cloudflare-browser-insights",
		name: "Cloudflare Browser Insights",
		website: "https://www.cloudflare.com",
		description: "Cloudflare Browser Insights is a tool that measures the performance of websites from the perspective of users.",
		icon: "CloudFlare.svg",
		categories: [
			"analytics",
			"monitoring-error-tracking"
		],
		rules: [
			{
				id: "cloudflare-browser-insights:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cloudflareinsights\\.com/beacon(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cloudflare-browser-insights:pageGlobal:1",
				kind: "pageGlobal",
				property: "__cfBeaconCustomTag",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cnzz",
		name: "CNZZ",
		website: "https://web.umeng.com/",
		icon: "cnzz.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "cnzz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//[^./]+\\.cnzz\\.com/(?:z_stat.php|core)\\?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cnzz:pageGlobal:1",
				kind: "pageGlobal",
				property: "cnzz_protocol",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "comscore",
		name: "comScore",
		website: "https://comscore.com",
		description: "comScore is an American media measurement and analytics company providing marketing data and analytics to enterprises; media and advertising agencies; and publishers.",
		icon: "comScore.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "comscore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "comscore:dom:1",
				kind: "dom",
				selector: "iframe[src*='.scorecardresearch.com/beacon'], iframe#comscore, iframe[src*='COMSCORE.beacon']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "comscore:pageGlobal:2",
				kind: "pageGlobal",
				property: "COMSCORE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "comscore:pageGlobal:3",
				kind: "pageGlobal",
				property: "_COMSCORE",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "contentsquare",
		name: "Contentsquare",
		website: "https://contentsquare.com",
		description: "Contentsquare is an enterprise-level UX optimisation platform.",
		icon: "Contentsquare.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "contentsquare:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.contentsquare\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "contentsquare:pageGlobal:1",
				kind: "pageGlobal",
				property: "CS_CONF.trackerDomain",
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
		id: "converdiant",
		name: "Converdiant",
		website: "https://www.converdiant.com",
		description: "Converdiant is a conversion optimization system that analyzes user behavior and website performance data to improve engagement, streamline customer journeys, and increase conversion rates through data-driven insights.",
		icon: "Converdiant.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "converdiant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.converdiant\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "conversio",
		name: "Conversio",
		website: "https://conversio.com",
		description: "Conversio is an optimisation and analytics agency.",
		icon: "Conversio.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "conversio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.conversio\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "conversio:pageGlobal:1",
				kind: "pageGlobal",
				property: "Conversio.settings",
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
		id: "convertflow",
		name: "ConvertFlow",
		website: "https://www.convertflow.com",
		description: "ConvertFlow is the all-in-one conversion marketing platform.",
		icon: "ConvertFlow.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "convertflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:app|js)\\.convertflow\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convertflow:pageGlobal:1",
				kind: "pageGlobal",
				property: "convertflow",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "cookie-assistant",
		name: "Cookie Assistant",
		website: "https://www.cookieassistant.com",
		description: "Cookie Assistant is a system designed to manage user consent for cookies while providing analytics.",
		icon: "CookieAssistant.svg",
		categories: [
			"analytics",
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookie-assistant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cookieassistant\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "countly",
		name: "Countly",
		website: "https://count.ly",
		description: "Countly is an open-source analytics platform that provides real-time insights into mobile, web, and desktop applications, offering features such as user segmentation, performance monitoring, and crash analytics to help businesses optimize their digital experiences and user engagement strategies.",
		icon: "Countly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "countly:pageGlobal:0",
				kind: "pageGlobal",
				property: "Countly",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "crazy-egg",
		name: "Crazy Egg",
		website: "https://crazyegg.com",
		icon: "Crazy Egg.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "crazy-egg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.crazyegg\\.com/pages/scripts/\\d+/\\d+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crazy-egg:pageGlobal:1",
				kind: "pageGlobal",
				property: "CE2",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "critical-mention",
		name: "Critical Mention",
		website: "https://www.criticalmention.com",
		description: "Critical Mention is a media monitoring technology that tracks, collects, and analyzes content from broadcast, online, and social media sources to provide insights into coverage and trends.",
		icon: "CriticalMention.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "critical-mention:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.criticalmention\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "cux",
		name: "Cux",
		website: "https://cux.io",
		description: "Cux is a UX automation tool designed to enhance conversion rates by analysing and utilising behavioural patterns.",
		icon: "Cux.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "cux:pageGlobal:0",
				kind: "pageGlobal",
				property: "_cux.send",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cux:pageGlobal:1",
				kind: "pageGlobal",
				property: "_cuxSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cux:pageGlobal:2",
				kind: "pageGlobal",
				property: "_cux_q",
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
		id: "databuddy",
		name: "Databuddy",
		website: "https://www.databuddy.cc",
		description: "Databuddy is an analytics platform designed for developers.",
		icon: "Databuddy.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "databuddy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.databuddy\\.cc"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "databuddy:meta:1",
				kind: "meta",
				key: "creator",
				valuePattern: new RegExp("^Databuddy$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "databuddy:meta:2",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^Databuddy$"),
				description: "Meta tag matches a known technology marker."
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
		id: "datamilk",
		name: "DataMilk",
		website: "https://www.datamilk.ai",
		description: "DataMilk is an AI tool which autonomously optimises customer UI for ecommerce customers in order to increase conversions.",
		icon: "DataMilk.svg",
		categories: [
			"analytics",
			"widgets-misc"
		],
		rules: [
			{
				id: "datamilk:pageGlobal:0",
				kind: "pageGlobal",
				property: "datamilkMagicAiExecuted",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "datanyze",
		name: "Datanyze",
		website: "https://www.datanyze.com",
		description: "Datanyze is a provider of visitor tracking script, offering sales intelligence and lead generation software solutions.",
		icon: "Datanyze.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "datanyze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.datanyze\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "decibel",
		name: "Decibel",
		website: "https://decibel.com",
		description: "Decibel is a behavioral analysis solution that helps users gain actionable insights about their digital audience.",
		icon: "Decibel.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "decibel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.decibelinsight\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "decibel:pageGlobal:1",
				kind: "pageGlobal",
				property: "decibelInsight",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "decibel:pageGlobal:2",
				kind: "pageGlobal",
				property: "decibelInsightLayer",
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
		id: "delacon",
		name: "Delacon",
		website: "https://www.delacon.com.au",
		description: "Delacon provides Australian businesses with Call Tracking, Call Management and Speech Analytics solutions.",
		icon: "Delacon.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "delacon:pageGlobal:0",
				kind: "pageGlobal",
				property: "dela_247_call",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "delacon:pageGlobal:1",
				kind: "pageGlobal",
				property: "delaconphonenums",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "dema",
		name: "Dema",
		website: "https://www.dema.ai",
		description: "Dema is a next-generation ecommerce analytics system designed to provide insights and data-driven solutions for online businesses.",
		icon: "Dema.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "dema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dema\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dema:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.dema\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "demandbase",
		name: "Demandbase",
		website: "https://www.demandbase.com",
		description: "Demandbase is a targeting and personalization platform for business-to-business companies.",
		icon: "demandbase.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "demandbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.engagio\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "demandbase:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.demandbase\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "demandbase:pageGlobal:2",
				kind: "pageGlobal",
				property: "Demandbase",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "demandbase:pageGlobal:3",
				kind: "pageGlobal",
				property: "Demandbase.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"poa"
			]
		}
	},
	{
		id: "deriv",
		name: "Deriv",
		website: "https://deriv.com",
		description: "Deriv is an online platform that allows users to track trading activities.",
		icon: "Deriv.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "deriv:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("track\\.deriv\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "detectizr",
		name: "Detectizr",
		website: "https://baris.aydinoglu.net/Detectizr",
		description: "Detectizr is a Modernizr extension to detect device, browser, operating system and screen size.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "detectizr:pageGlobal:0",
				kind: "pageGlobal",
				property: "Detectizr",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"modernizr"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dexem",
		name: "Dexem",
		website: "https://www.dexem.com",
		description: "Dexem is an AI-powered platform for managing and analyzing calls, offering tools to track, monitor, and improve call performance.",
		icon: "Dexem.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "dexem:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.dexem\\.net/"),
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
		id: "dynatrace",
		name: "Dynatrace",
		website: "https://www.dynatrace.com",
		description: "Dynatrace is a technology company that produces a software intelligence platform based on artificial intelligence to monitor and optimise application performance and development, IT infrastructure, and user experience for businesses and government agencies throughout the world.",
		icon: "Dynatrace.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "dynatrace:pageGlobal:0",
				kind: "pageGlobal",
				property: "dtrum",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dynatrace:cookie:1",
				kind: "cookie",
				key: "dtCookie1",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "ecbb",
		name: "ECBB",
		website: "https://ecbb.jp",
		description: "ECBB is a Japan-based platform providing data analytics and business intelligence solutions.",
		icon: "ECBB.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ecbb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ecbb\\.jp/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ecomscout",
		name: "EcomScout",
		website: "https://ecomscout.io",
		description: "EcomScout is a platform providing AI-powered tools for analytics, attribution, merchandising, and forecasting.",
		icon: "EcomScout.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ecomscout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.ecomscout\\.io/"),
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
		id: "econda",
		name: "Econda",
		website: "https://www.econda.de",
		description: "Econda is a provider of web analytics solutions for online shops, offering detailed insights into customer behaviour, website performance, and sales optimisation.",
		icon: "Econda.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "econda:pageGlobal:0",
				kind: "pageGlobal",
				property: "econda",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "econda:pageGlobal:1",
				kind: "pageGlobal",
				property: "econdaActive",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "elastic-apm",
		name: "Elastic APM",
		website: "https://www.elastic.co/apm",
		description: "Elastic APM offers free and open application performance monitoring.",
		icon: "ElasticAPM.svg",
		categories: [
			"analytics",
			"developer-tooling",
			"monitoring-error-tracking"
		],
		rules: [
			{
				id: "elastic-apm:pageGlobal:0",
				kind: "pageGlobal",
				property: "elasticApm",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"elasticsearch"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "elevar",
		name: "Elevar",
		website: "https://www.getelevar.com",
		description: "Elevar is an official Shopify Plus Partner data collection and marketing monitoring tool.",
		icon: "Elevar.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "elevar:pageGlobal:0",
				kind: "pageGlobal",
				property: "ElevarGtmSuite",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "elevar:pageGlobal:1",
				kind: "pageGlobal",
				property: "elevar_gtm_errors",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "elevar:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkelevar_gtm_suite_scripts",
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
		id: "enecto",
		name: "Enecto",
		website: "https://www.enecto.com",
		description: "Enecto is a tool for analyzing web visitor demographics to provide insights into audience composition and behavior.",
		icon: "Enecto.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "enecto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trk\\.enecto\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "engagio",
		name: "Engagio",
		website: "https://www.engagio.com/",
		icon: "Engagio.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "engagio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-analytics\\.engagio\\.com/js/ei\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "engagio:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("web-analytics\\.engagio\\.com/api/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "enquisite",
		name: "Enquisite",
		website: "https://enquisite.com",
		description: "Enquisite is a platform that provides web analytics and metrics not typically available through standard webmaster tools.",
		icon: "Enquisite.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "enquisite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("log\\.enquisite\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "errorception",
		name: "Errorception",
		website: "https://errorception.com",
		description: "Errorception is a error reporting service for client-side in-browser JavaScript errors.",
		icon: "Errorception.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "errorception:pageGlobal:0",
				kind: "pageGlobal",
				property: "_errs",
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
		id: "etracker",
		name: "Etracker",
		website: "https://www.etracker.com",
		description: "Etracker is a web optimisation solution.",
		icon: "Etracker.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "etracker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.etracker\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "etracker:pageGlobal:1",
				kind: "pageGlobal",
				property: "_etracker",
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
		id: "everflow",
		name: "Everflow",
		website: "https://www.everflow.io",
		description: "Everflow is a partner marketing analytics platform.",
		icon: "Everflow.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "everflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("everflow\\.js"),
				description: "Script source URL matches a known technology marker."
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
		id: "everviz",
		name: "Everviz",
		website: "https://www.everviz.com",
		description: "Everviz is an online tool for creating interactive charts and maps, enabling data visualization with customizable features.",
		icon: "Everviz.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "everviz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.everviz\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "everviz:pageGlobal:1",
				kind: "pageGlobal",
				property: "everviz.beforePrint",
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
		id: "exactvisitor",
		name: "ExactVisitor",
		website: "https://exactvisitor.com",
		description: "ExactVisitor is a tool that identifies and provides insights about individuals visiting a website.",
		icon: "ExactVisitor.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "exactvisitor:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("track\\.exactvisitor\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "extrawatch",
		name: "ExtraWatch",
		website: "https://www.extrawatch.com",
		description: "ExtraWatch is a tool that tracks clicks and helps optimize landing pages by providing actionable insights into user interactions.",
		icon: "ExtraWatch.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "extrawatch:pageGlobal:0",
				kind: "pageGlobal",
				property: "extraWatchAjaxLink",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "extrawatch:pageGlobal:1",
				kind: "pageGlobal",
				property: "extrawatch_createRequestObject",
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
		id: "ezoic",
		name: "Ezoic",
		website: "https://www.ezoic.com",
		description: "Ezoic is a website optimisation platform for digital publishers and website owners powered by machine learning.",
		icon: "Ezoic.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "ezoic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ezo(?:js|ic|dn)\\.(?:com|net)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ezoic:pageGlobal:1",
				kind: "pageGlobal",
				property: "EzoicA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ezoic:pageGlobal:2",
				kind: "pageGlobal",
				property: "EzoicBanger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ezoic:pageGlobal:3",
				kind: "pageGlobal",
				property: "ezoicTestActive",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"poa",
				"payg"
			]
		}
	},
	{
		id: "facebook-pixel",
		name: "Facebook Pixel",
		website: "https://facebook.com",
		description: "Facebook pixel is an analytics tool that allows you to measure the effectiveness of your advertising.",
		icon: "Facebook.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "facebook-pixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.facebook.\\w+/signals/config/\\d+\\?v=([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "facebook-pixel:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.facebook\\.\\w+/.+/fbevents\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "facebook-pixel:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("(?:^|//)(?:www\\.)?connect\\.facebook\\.net\\/(?:[A-Za-z_-]+\\/)?(?:fbevents|events)\\.js(?:\\?[^\"']*)?"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "facebook-pixel:dom:3",
				kind: "dom",
				selector: "img[src*='facebook.com/tr']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "facebook-pixel:pageGlobal:4",
				kind: "pageGlobal",
				property: "_fbp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "facebook-pixel:pageGlobal:5",
				kind: "pageGlobal",
				property: "_fbq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fastbase",
		name: "Fastbase",
		website: "https://www.fastbase.com",
		description: "Fastbase is a web analytics tool that identifies visitors' real company names and the individuals associated with them, aiding in targeted marketing and lead generation.",
		icon: "Fastbase.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "fastbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fastbase\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "fathom",
		name: "Fathom",
		website: "https://usefathom.com",
		description: "Fathom is easy-yet-powerful website analytics that protects digital privacy.",
		icon: "Fathom.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "fathom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usefathom\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fathom:pageGlobal:1",
				kind: "pageGlobal",
				property: "fathom.blockTrackingForMe",
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
		id: "fc2-analyzer",
		name: "FC2 Analyzer",
		website: "https://fc2.com",
		description: "FC2 Analyzer is a platform designed to track and analyze affiliate system performance, providing insights into traffic, conversions, and revenue metrics.",
		icon: "FC2Analyzer.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "fc2-analyzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fc2\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "finalytics",
		name: "Finalytics",
		website: "https://finalytics.ai",
		description: "Finalytics is a platform that uses data and analytics to transform customer experience.",
		icon: "Finalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "finalytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "finalytics.accountSummaryParser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "findgore",
		name: "FindGore",
		website: "https://www.findgore.com",
		description: "FindGore is a conversion rate improvement analytics tool designed to help businesses optimise their websites by analysing user behaviour and identifying areas for enhancement to increase conversion rates.",
		icon: "FindGore.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "findgore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.findgore\\.com/"),
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
		id: "fireside",
		name: "Fireside",
		website: "https://fireside.fm",
		description: "Fireside is a platform that provides podcast hosting and analytics services.",
		icon: "Fireside.svg",
		categories: [
			"analytics",
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "fireside:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("a\\.fireside\\.fm/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fireside:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Fireside\\.$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "fireside:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Fireside ([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
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
		id: "flurry-analytics",
		name: "Flurry Analytics",
		website: "https://www.flurry.com",
		description: "Flurry Analytics is a tool that provides basic insights into user behavior and app performance, with the option to set up advanced analytics for a deeper understanding of complex user interactions and events.",
		icon: "Flurry.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "flurry-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.flurry\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			cpe: "cpe:2.3:a:flurry:flurry-analytics-android:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "freespee",
		name: "Freespee",
		website: "https://www.freespee.com",
		icon: "Freespee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "freespee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.freespee\\.com/js/external/fs\\.(?:min\\.)?js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "friendly-analytics",
		name: "Friendly Analytics",
		website: "https://friendly.ch/en/analytics",
		description: "Friendly Analytics is the top Swiss alternative to Google Analytics, offering website analysis and optimization while prioritizing user privacy.",
		icon: "Friendly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "friendly-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.friendlyanalytics\\.ch"),
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
		id: "fullcontact",
		name: "FullContact",
		website: "https://www.fullcontact.com",
		description: "FullContact is a privacy-safe Identity Resolution company building trust between people and brands.",
		icon: "FullContact.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "fullcontact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.fullcontact\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fullcontact:pageGlobal:1",
				kind: "pageGlobal",
				property: "Fullcontact",
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
		id: "fullstory",
		name: "FullStory",
		website: "https://www.fullstory.com",
		description: "FullStory is a web-based digital intelligence system that helps optimize the client experience.",
		icon: "FullStory.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "fullstory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fullstory\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fullstory:pageGlobal:1",
				kind: "pageGlobal",
				property: "FS.clearUserCookie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "gator",
		name: "Gator",
		website: "https://gator.io",
		description: "Gator is a platform that enables realtime user data collection, profiling and aggregation.",
		icon: "Gator.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gator:pageGlobal:0",
				kind: "pageGlobal",
				property: "GatorLegacy",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "gauges",
		name: "Gauges",
		website: "https://get.gaug.es",
		description: "Gauges is a real-time web analytics tool that provides live traffic updates and essential metrics for websites.",
		icon: "Gauges.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gauges:pageGlobal:0",
				kind: "pageGlobal",
				property: "_gauges",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gauges:cookie:1",
				kind: "cookie",
				key: "_gauges_",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gemius",
		name: "Gemius",
		website: "https://www.gemius.com",
		icon: "Gemius.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gemius:html:0",
				kind: "html",
				pattern: new RegExp("<a [^>]*onclick=\"gemius_hit"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gemius:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("hit\\.gemius\\.pl/xgemius\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gemius:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("hit\\.gemius\\.pl"),
				confidence: 80,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gemius:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("xgemius\\.js"),
				confidence: 30,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gemius:pageGlobal:4",
				kind: "pageGlobal",
				property: "gemius_hit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gemius:pageGlobal:5",
				kind: "pageGlobal",
				property: "gemius_init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gemius:pageGlobal:6",
				kind: "pageGlobal",
				property: "gemius_pending",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gemius:pageGlobal:7",
				kind: "pageGlobal",
				property: "pp_gemius_hit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "glassbox",
		name: "Glassbox",
		website: "https://www.glassbox.com",
		description: "Glassbox is an Israeli software company. It sells session-replay analytics software and services.",
		icon: "Glassbox.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "glassbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.glassboxcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "glassbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "SessionCamRecorder",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "glassbox:pageGlobal:2",
				kind: "pageGlobal",
				property: "sessioncamConfiguration",
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
		id: "goatcounter",
		name: "GoatCounter",
		website: "https://www.goatcounter.com/",
		description: "GoatCounter is an open source web analytics platform available as a hosted service (free for non-commercial use) or self-hosted app. It aims to offer easy to use and meaningful privacy-friendly web analytics as an alternative to Google Analytics or Matomo.",
		icon: "goatcounter.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "goatcounter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gc\\.zgo\\.at/count\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "gong",
		name: "Gong",
		website: "https://www.gong.io",
		description: "Gong is an AI-powered platform that captures and analyses customer interactions to provide insights for revenue teams, improving forecasting accuracy and sales performance.",
		icon: "Gong.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gong:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("app\\.gong\\.io"),
				description: "Response header matches a known technology marker."
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
		id: "google-ads-conversion-tracking",
		name: "Google Ads Conversion Tracking",
		website: "https://support.google.com/google-ads/answer/1722022",
		description: "Google Ads Conversion Tracking is a free tool that shows you what happens after a customer interacts with your ads.",
		icon: "Google.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "google-ads-conversion-tracking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.googleadservices\\.com/pagead/conversion_async\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-ads-conversion-tracking:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("gtag\\([^)]+'(AW-)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "google-ads-conversion-tracking:pageGlobal:2",
				kind: "pageGlobal",
				property: "google_trackConversion",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"google-ads"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "google-analytics",
		name: "Google Analytics",
		website: "https://google.com/analytics",
		description: "Google Analytics is a free web analytics service that tracks and reports website traffic.",
		icon: "Google Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "google-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("google-analytics\\.com/(?:ga|urchin|analytics)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-analytics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("googletagmanager\\.com/gtag/js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-analytics:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("gtag\\([^)]+'(UA-)"),
				version: { source: "match", template: "$1?UA:" },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "google-analytics:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("gtag\\([^)]+'(G-)"),
				version: { source: "match", template: "$1?GA4:" },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "google-analytics:dom:4",
				kind: "dom",
				selector: "amp-analytics[type*=googleanalytics]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "google-analytics:pageGlobal:5",
				kind: "pageGlobal",
				property: "GoogleAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-analytics:pageGlobal:6",
				kind: "pageGlobal",
				property: "gaGlobal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-analytics:cookie:7",
				kind: "cookie",
				key: "__utma",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "google-analytics:cookie:8",
				kind: "cookie",
				key: "_ga",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "google-analytics:cookie:9",
				kind: "cookie",
				key: "_ga_*",
				version: { source: "static", value: "GA4" },
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "google-analytics:cookie:10",
				kind: "cookie",
				key: "_gat",
				version: { source: "static", value: "UA" },
				description: "Cookie name matches a known technology marker."
			},
      {
				id: "google-analytics:html:11",
        kind: "html",
        pattern:
          /(?:gtag|dataLayer|googletagmanager|google-analytics|google analytics|ga4)[\s\S]{0,500}G-[A-Z0-9]{6,}|G-[A-Z0-9]{6,}[\s\S]{0,500}(?:gtag|dataLayer|googletagmanager|google-analytics|google analytics|ga4)/i,
        description:
          "GA4 measurement ID appears near Google Analytics bootstrap/config code.",
      },
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-analytics-enhanced-ecommerce",
		name: "Google Analytics Enhanced eCommerce",
		website: "https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce",
		description: "Google analytics enhanced ecommerce is a plug-in which enables the measurement of user interactions with products on ecommerce websites.",
		icon: "Google Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "google-analytics-enhanced-ecommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("google-analytics\\.com\\/plugins\\/ua\\/(?:ec|ecommerce)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-analytics-enhanced-ecommerce:pageGlobal:1",
				kind: "pageGlobal",
				property: "gaplugins.EC",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"google-analytics",
			"cart-functionality"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-call-conversion-tracking",
		name: "Google Call Conversion Tracking",
		website: "https://support.google.com/google-ads/answer/6100664",
		description: "Google Call Conversion Tracking is conversion tracking that shows which search keywords are driving the most calls.",
		icon: "Google.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "google-call-conversion-tracking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gstatic\\.com/call-tracking/.+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-call-conversion-tracking:pageGlobal:1",
				kind: "pageGlobal",
				property: "_googCallTrackingImpl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-call-conversion-tracking:pageGlobal:2",
				kind: "pageGlobal",
				property: "google_wcc_status",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "gosquared",
		name: "GoSquared",
		website: "https://www.gosquared.com",
		description: "GoSquared is a web analytics platform positioned as an alternative to Google Analytics.",
		icon: "GoSquared.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gosquared:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("gosquared\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "gosquared:pageGlobal:1",
				kind: "pageGlobal",
				property: "GoSquared",
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
		id: "gostats",
		name: "GoStats",
		website: "https://gostats.com/",
		icon: "GoStats.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "gostats:pageGlobal:0",
				kind: "pageGlobal",
				property: "_goStatsRun",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gostats:pageGlobal:1",
				kind: "pageGlobal",
				property: "_go_track_src",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gostats:pageGlobal:2",
				kind: "pageGlobal",
				property: "go_msie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "grafana",
		name: "Grafana",
		website: "https://grafana.com",
		description: "Grafana is a multi-platform open source analytics and interactive visualisation web application.",
		icon: "Grafana.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "grafana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("grafana\\..+\\.com/public/build/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "grafana:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("latestVersion\":\"[\\d\\.\\w\\-]+\"\\,\"version\":\"([\\d\\.]+)"),
				confidence: 75,
				version: { source: "match", group: 1 },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "grafana:pageGlobal:2",
				kind: "pageGlobal",
				property: "__grafana_public_path__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"go",
			"macaron"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:grafana:grafana:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "graphly",
		name: "Graphly",
		website: "https://graphly.io",
		description: "Graphly is a visual reporting and business intelligence platform.",
		icon: "Graphly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "graphly:pageGlobal:0",
				kind: "pageGlobal",
				property: "GraphlyTracking",
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
		id: "greenstory",
		name: "GreenStory",
		website: "https://www.greenstory.io",
		description: "GreenStory is a supply chain transparency analytics tool that helps businesses track and report on their supply chain operations.",
		icon: "GreenStory.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "greenstory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.greenstory\\.ca/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "greenstory:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackJsonpGreenStoryWidgets",
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
		id: "growingio",
		name: "GrowingIO",
		website: "https://www.growingio.com/",
		icon: "GrowingIO.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "growingio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.growingio\\.com/([\\d.]+)/gio\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "growingio:cookie:1",
				kind: "cookie",
				key: "gr_user_id",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "growingio:cookie:2",
				kind: "cookie",
				key: "grwng_uid",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hantana",
		name: "hantana",
		website: "https://hantana.org/",
		description: "Hantana provides user behavior analysis tools like heatmaps, surveys, and feedback widgets to enhance website user experience and customer satisfaction.",
		icon: "hantana.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hantana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//hantana\\.org/widget"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hantana:pageGlobal:1",
				kind: "pageGlobal",
				property: "Hantana",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "heap",
		name: "Heap",
		website: "https://heap.io",
		description: "Heap is an analytics platform.",
		icon: "Heap.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "heap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.heapanalytics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "heap:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("heap-\\d+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "heap:pageGlobal:2",
				kind: "pageGlobal",
				property: "heap.version.heapJsVersion",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high"
			]
		}
	},
	{
		id: "heeet",
		name: "Heeet",
		website: "https://www.heeet.io",
		description: "Heeet is a lead tracking and marketing analytics tool.",
		icon: "Heeet.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "heeet:pageGlobal:0",
				kind: "pageGlobal",
				property: "heeet",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heeet:pageGlobal:1",
				kind: "pageGlobal",
				property: "heeetJourneyParams",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heeet:pageGlobal:2",
				kind: "pageGlobal",
				property: "heeetParams",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heeet:pageGlobal:3",
				kind: "pageGlobal",
				property: "heeetSaveJourney",
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
		id: "highlight-io",
		name: "Highlight.io",
		website: "https://www.highlight.io/",
		description: "Highlight.io is a monitoring software for developers, offering visibility into applications with features like session replay, error monitoring, and logging to identify frontend and backend issues.",
		icon: "HighlightIO.svg",
		categories: [
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "highlight-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com/highlight\\.run"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "highlight-io:pageGlobal:1",
				kind: "pageGlobal",
				property: "_highlightFetchPatch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "highlight-io:pageGlobal:2",
				kind: "pageGlobal",
				property: "_highlightWebSocketEventCallback",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa",
				"payg"
			]
		}
	},
	{
		id: "histats",
		name: "Histats",
		website: "https://www.histats.com",
		description: "Histats is a simple website visitor analysis and tracking tool.",
		icon: "Histats.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "histats:dom:0",
				kind: "dom",
				selector: "img[src*='.histats.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "histats:pageGlobal:1",
				kind: "pageGlobal",
				property: "Histats.ver",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "hockeystack",
		name: "HockeyStack",
		website: "https://hockeystack.com",
		description: "HockeyStack is a San Francisco-based analytics and attribution tool for B2B companies.",
		icon: "HockeyStack.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hockeystack:pageGlobal:0",
				kind: "pageGlobal",
				property: "HockeyStack",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hockeystack:pageGlobal:1",
				kind: "pageGlobal",
				property: "hsscript",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"poa"
			]
		}
	},
	{
		id: "hotjar",
		name: "Hotjar",
		website: "https://www.hotjar.com",
		description: "Hotjar is a suite of analytic tools to assist in the gathering of qualitative data, providing feedback through tools such as heatmaps, session recordings, and surveys.",
		icon: "Hotjar.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hotjar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//static\\.hotjar\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hotjar:pageGlobal:1",
				kind: "pageGlobal",
				property: "HotLeadfactory",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hotjar:pageGlobal:2",
				kind: "pageGlobal",
				property: "HotleadController",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hotjar:pageGlobal:3",
				kind: "pageGlobal",
				property: "hj.apiUrlBase",
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
		id: "hubalz",
		name: "Hubalz",
		website: "https://www.hubalz.com",
		description: "Hubalz is an all-in-one analytics and marketing tool.",
		icon: "Hubalz.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hubalz:pageGlobal:0",
				kind: "pageGlobal",
				property: "Hubalz.getClickDetails",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hubalz:pageGlobal:1",
				kind: "pageGlobal",
				property: "hubalz_script.noInputTracking",
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
		id: "huberway-analytics",
		name: "Huberway Analytics",
		website: "https://www.huberway.com/analytics-software",
		description: "Huberway Analytics is a free web analytics service that tracks and reports website traffic.",
		icon: "Huberway.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "huberway-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.huberway\\.com/pixel/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "hubspot-analytics",
		name: "HubSpot Analytics",
		website: "https://www.hubspot.com/products/marketing/analytics",
		description: "HubSpot is a marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
		icon: "HubSpot.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hubspot-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.hs-analytics\\.net/analytics"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "humblytics",
		name: "Humblytics",
		website: "https://www.humblytics.com",
		description: "Humblytics is an analytics tool that simplifies tracking custom events without coding. It monitors real-time metrics, optimises conversion rates, and provides valuable insights.",
		icon: "Humblytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "humblytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.humblytics\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "hyros",
		name: "Hyros",
		website: "https://hyros.com",
		description: "Hyros is a marketing analytics and optimisation platform.",
		icon: "Hyros.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "hyros:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/v1/lst/universal-script\\?ph\\="),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "ibm-coremetrics",
		name: "IBM Coremetrics",
		website: "https://ibm.com/software/marketing-solutions/coremetrics",
		icon: "IBM.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ibm-coremetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cmdatatagutils\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "iconosquare",
		name: "Iconosquare",
		website: "https://www.iconosquare.com",
		description: "Iconosquare is an all-in-one social media management platform that facilitates the lives of SMMs with multiple profiles to manage.",
		icon: "Iconosquare.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "iconosquare:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.iconosquare\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "iconosquare:dom:1",
				kind: "dom",
				selector: "iframe[src*='iconosquare.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "infonline",
		name: "INFOnline",
		website: "https://www.infonline.de",
		icon: "INFOnline.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "infonline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://(?:[^/]+\\.)?i(?:oam|v)wbox\\.de/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "infonline:pageGlobal:1",
				kind: "pageGlobal",
				property: "iam_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "infonline:pageGlobal:2",
				kind: "pageGlobal",
				property: "szmvars",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "inmoment",
		name: "InMoment",
		website: "https://inmoment.com",
		description: "InMoment provides SaaS based customer survey and enterprise feedback management solutions.",
		icon: "InMoment.svg",
		categories: [
			"analytics",
			"surveys-feedback"
		],
		rules: [
			{
				id: "inmoment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.inmoment\\.com(?:\\.\\w+)?/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "inmoment:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.inmoment\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "inmoment:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.inmoment\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "insignal",
		name: "Insignal",
		website: "https://insignal.co/",
		description: "Insignal is a cloud-based application that tracks website traffic, heatmap, timeline, feedback, session recordings, and survey solutions.",
		icon: "Insignal.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "insignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.insignal\\.co/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "inspectlet",
		name: "Inspectlet",
		website: "https://www.inspectlet.com/",
		icon: "Inspectlet.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "inspectlet:html:0",
				kind: "html",
				pattern: new RegExp("<!-- (?:Begin|End) Inspectlet Embed Code -->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "inspectlet:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.inspectlet\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "inspectlet:pageGlobal:2",
				kind: "pageGlobal",
				property: "__insp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "inspectlet:pageGlobal:3",
				kind: "pageGlobal",
				property: "__inspld",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "instana",
		name: "Instana",
		website: "https://www.instana.com",
		description: "Instana is a Kubernetes-native APM tool which is built for new-stack including Microservices and lately Serverless but also supports the existing VM based stacks  including several supported technologies.",
		icon: "Instana.svg",
		categories: [
			"analytics",
			"developer-tooling",
			"monitoring-error-tracking"
		],
		rules: [
			{
				id: "instana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("eum\\.instana\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instana:pageGlobal:1",
				kind: "pageGlobal",
				property: "ineum",
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
		id: "ip-label",
		name: "ip-label",
		website: "https://www.ip-label.com",
		icon: "iplabel.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ip-label:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clobs\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ip-label:pageGlobal:1",
				kind: "pageGlobal",
				property: "clobs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jarvis-analytics",
		name: "Jarvis Analytics",
		website: "https://www.jarvisanalytics.com",
		description: "Jarvis Analytics is a dental analytics platform that collects, processes, and visualizes dental data to support clinical decision-making and operational insights.",
		icon: "JarvisAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "jarvis-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("schedule\\.jarvisanalytics\\.com"),
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
		id: "jirafe",
		name: "Jirafe",
		website: "https://docs.jirafe.com",
		icon: "Jirafe.png",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "jirafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jirafe\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jirafe:pageGlobal:1",
				kind: "pageGlobal",
				property: "jirafe",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "june",
		name: "June",
		website: "https://june.so",
		description: "June is a product analytics for subscription businesses. It automatically generates graphs of the metrics users should track by connecting their segment account.",
		icon: "June.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "june:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.june\\.so/analytics\\.js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "june:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("a\\.june\\.so"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "june:cookie:2",
				kind: "cookie",
				key: "_june_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "juvo-leads",
		name: "Juvo Leads",
		website: "https://juvoleads.com",
		description: "Juvo Leads is a platform that integrates hosted chat, call tracking, and form tracking into a unified reporting system.",
		icon: "JuvoLeads.svg",
		categories: [
			"analytics",
			"email-messaging",
			"form-schema-library"
		],
		rules: [
			{
				id: "juvo-leads:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.juvoleads\\.com"),
				description: "Script content contains a bounded technology signature."
			}
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
		id: "kilkaya",
		name: "Kilkaya",
		website: "https://www.kilkaya.com",
		description: "Kilkaya is a platform that simplifies analytics for publishers by consolidating data and automating reporting.",
		icon: "Kilkaya.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "kilkaya:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Kilkaya"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kissmetrics",
		name: "KISSmetrics",
		website: "https://www.kissmetrics.com",
		icon: "KISSmetrics.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "kissmetrics:pageGlobal:0",
				kind: "pageGlobal",
				property: "KM_COOKIE_DOMAIN",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "koala",
		name: "Koala",
		website: "https://getkoala.com/",
		description: "Koala is an analytical product with CRM features that helps businesses efficiently identify and track prospects, providing valuable insights and streamlining the sales process.",
		icon: "Koala.svg",
		categories: [
			"analytics",
			"business-tools"
		],
		rules: [
			{
				id: "koala:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getkoala\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "koala:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.getkoala\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "koala:pageGlobal:2",
				kind: "pageGlobal",
				property: "KoalaSDK",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "konget",
		name: "Konget",
		website: "https://konget.ru",
		description: "Konget is a platform that integrates applications for lead generation, a builder for automated outgoing calls, and a suite of marketing statistics and analytics.",
		icon: "Konget.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "konget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.konget\\.ru/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "konget:pageGlobal:1",
				kind: "pageGlobal",
				property: "__KONGET_PUBLIC__",
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
		id: "kount",
		name: "Kount",
		website: "https://kount.com",
		description: "Kount is a suite of fraud detection and prevention solutions for ecommerce businesses.",
		icon: "Kount.svg",
		categories: [
			"analytics",
			"security"
		],
		rules: [
			{
				id: "kount:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shopify\\.kount\\.net/js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kount:pageGlobal:1",
				kind: "pageGlobal",
				property: "ka.ClientSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kount:pageGlobal:2",
				kind: "pageGlobal",
				property: "ka.collectData",
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
		id: "kwai-pixel",
		name: "Kwai pixel",
		website: "https://www.kwai.com",
		description: "Kwai is a social network for short videos and trends.",
		icon: "Kwai.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "kwai-pixel:pageGlobal:0",
				kind: "pageGlobal",
				property: "KwaiAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kwai-pixel:pageGlobal:1",
				kind: "pageGlobal",
				property: "kwaiq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "lead-forensics",
		name: "Lead Forensics",
		website: "https://www.leadforensics.com",
		description: "Lead Forensics is a B2B website visitor identification software that processes website traffic data to reveal the companies behind each visit.",
		icon: "LeadForensics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "lead-forensics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadforensics\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadboxer",
		name: "LeadBoxer",
		website: "https://www.leadboxer.com",
		description: "LeadBoxer is a lead generation program that measures invitations from website visitors, aiding businesses in tracking and analyzing potential leads.",
		icon: "LeadBoxer.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leadboxer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ip\\.leadboxer\\.com"),
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
		id: "leadfeeder",
		name: "Leadfeeder",
		website: "https://www.leadfeeder.com",
		description: "Leadfeeder is a B2B visitor identification software that tracks and identifies companies that visit your website.",
		icon: "Leadfeeder.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leadfeeder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadfeeder\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leadfeeder:pageGlobal:1",
				kind: "pageGlobal",
				property: "ldfdr.getTracker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leadfeeder:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.(?:lfeeder|leadfeeder)\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "leadin",
		name: "LEADIN",
		website: "https://leadin.com",
		description: "LEADIN is a tool that provides insights into individuals who fill out forms on a site, utilizing Hubspot's market-leading CRM for implementation.",
		icon: "LEADIN.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leadin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.leadin\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadinfo",
		name: "Leadinfo",
		website: "https://www.leadinfo.com",
		description: "Leadinfo is a lead generation software that enables you to recognise B2B website visitors.",
		icon: "Leadinfo.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leadinfo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.leadinfo\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leadinfo:pageGlobal:1",
				kind: "pageGlobal",
				property: "GlobalLeadinfoNamespace",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leadinfo:pageGlobal:2",
				kind: "pageGlobal",
				property: "leadinfo",
				confidence: 50,
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
		id: "leadssight",
		name: "LeadsSight",
		website: "https://leadssight.com",
		description: "LeadsSight is a tool that converts lost visitors on your website into potential leads by tracking their behaviour.",
		icon: "LeadsSight.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leadssight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.leadssight\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leadssight:pageGlobal:1",
				kind: "pageGlobal",
				property: "postURL",
				valuePattern: new RegExp("app\\.leadssight\\.com/"),
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
		id: "leady",
		name: "Leady",
		website: "https://leady.cz",
		description: "Leady is a lead generation and customer intelligence solution.",
		icon: "Leady.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leady:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leady\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leady:pageGlobal:1",
				kind: "pageGlobal",
				property: "_leady.push",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leady:pageGlobal:2",
				kind: "pageGlobal",
				property: "leady_track_key",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leasehawk",
		name: "LeaseHawk",
		website: "https://www.leasehawk.com",
		description: "LeaseHawk is a platform that provides tools to measure and improve ROI for leases through data insights and performance tracking.",
		icon: "LeaseHawk.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "leasehawk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ace-chat\\.leasehawk\\.com"),
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
		id: "lexity",
		name: "Lexity",
		website: "https://lexity.com",
		description: "Lexity is the one-stop-shop of ecommerce services for SMBs.",
		icon: "Lexity.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "lexity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lexity\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "linkedin-insight-tag",
		name: "Linkedin Insight Tag",
		website: "https://business.linkedin.com/marketing-solutions/insight-tag",
		description: "LinkedIn Insight Tag is a lightweight JavaScript tag that powers conversion tracking, website audiences, and website demographics.",
		icon: "Linkedin.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "linkedin-insight-tag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snap\\.licdn\\.com/li\\.lms-analytics/insight\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linkedin-insight-tag:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.oribi\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linkedin-insight-tag:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("_linkedin_partner_id"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "linkedin-insight-tag:pageGlobal:3",
				kind: "pageGlobal",
				property: "ORIBI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "linkedin-insight-tag:pageGlobal:4",
				kind: "pageGlobal",
				property: "_linkedin_data_partner_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "linkedin-insight-tag:pageGlobal:5",
				kind: "pageGlobal",
				property: "_linkedin_partner_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "linkedin-insight-tag:responseHeader:6",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.licdn\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "linkmink",
		name: "LinkMink",
		website: "https://linkmink.com",
		description: "LinkMink is an affiliate tracking and management for SaaS companies.",
		icon: "LinkMink.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "linkmink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.linkmink\\.com/lm-js/([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linkmink:pageGlobal:1",
				kind: "pageGlobal",
				property: "LinkMink",
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
		id: "listtrac",
		name: "ListTrac",
		website: "https://listtrac.com",
		description: "ListTrac is a real estate marketing and monitoring system that tracks property listing performance, analyzes user engagement, and provides insights to optimize online visibility and sales strategies.",
		icon: "ListTrac.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "listtrac:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.listtrac\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "listtrac:pageGlobal:1",
				kind: "pageGlobal",
				property: "listTrac.doEvent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "litmus",
		name: "Litmus",
		website: "https://emltrk.com",
		description: "Litmus is an Email Analytics tool that offers email designers advanced open and read statistics for their email campaigns.",
		icon: "Litmus.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "litmus:dom:0",
				kind: "dom",
				selector: "img[src*='.emltrk.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "liveby",
		name: "LiveBy",
		website: "https://liveby.com",
		description: "LiveBy is a home discovery system designed to provide users with detailed insights into properties, neighborhoods, and local amenities, enabling informed decision-making when selecting a new residence.",
		icon: "LiveBy.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "liveby:pageGlobal:0",
				kind: "pageGlobal",
				property: "liveby.autoInitialize",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "liveinternet",
		name: "Liveinternet",
		website: "https://liveinternet.ru/rating/",
		description: "LiveInternet is a website analytics service that provides traffic statistics and performance rankings for various websites.",
		icon: "Liveinternet.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "liveinternet:html:0",
				kind: "html",
				pattern: new RegExp("<script [^>]*>[\\s\\S]*//counter\\.yadro\\.ru/hit"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "liveinternet:html:1",
				kind: "html",
				pattern: new RegExp("<!--LiveInternet counter-->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "liveinternet:html:2",
				kind: "html",
				pattern: new RegExp("<!--/LiveInternet-->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "liveinternet:html:3",
				kind: "html",
				pattern: new RegExp("<a href=\"http://www\\.liveinternet\\.ru/click\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "liveinternet:dom:4",
				kind: "dom",
				selector: "a[href*='/www.liveinternet.ru/click'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "livesession",
		name: "LiveSession",
		website: "https://livesession.io/",
		description: "LiveSession helps increase conversion rates using session replays, and event-based product analytics.",
		icon: "LiveSession.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "livesession:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.livesession\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "logaholic",
		name: "Logaholic",
		website: "https://www.logaholic.com",
		description: "Logaholic is a web analytics software that processes website traffic data to generate reports on visits, user behavior, and referrers.",
		icon: "Logaholic.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "logaholic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("logaholic\\.hostpoint\\.ch/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "logaholic:pageGlobal:1",
				kind: "pageGlobal",
				property: "logaholic",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "loggly",
		name: "Loggly",
		website: "https://www.loggly.com",
		description: "Loggly is a cloud-based log management service provider.",
		icon: "Loggly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "loggly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.loggly\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "loggly:dom:1",
				kind: "dom",
				selector: "link[href*='.loggly.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "loggly:pageGlobal:2",
				kind: "pageGlobal",
				property: "LogglyTracker",
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
		id: "loglib",
		name: "Loglib",
		website: "https://www.loglib.io",
		description: "Loglib is a Open Source and Privacy-First web analytics that aims to provide simple yet can be powerful based on your needs.",
		icon: "Loglib.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "loglib:pageGlobal:0",
				kind: "pageGlobal",
				property: "llc",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "loglib:pageGlobal:1",
				kind: "pageGlobal",
				property: "lli",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "logrocket",
		name: "LogRocket",
		website: "https://logrocket.com",
		description: "LogRocket is a logging and session replay platform that helps developers identify and troubleshoot issues in web applications by recording and replaying user sessions, along with capturing logs and user interactions in real-time.",
		icon: "LogRocket.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "logrocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.(?:lr-ingest|logrocket)\\.(?:com|io)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "logrocket:pageGlobal:1",
				kind: "pageGlobal",
				property: "LogRocket._buffer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "looker",
		name: "Looker",
		website: "https://cloud.google.com/looker",
		description: "Looker is a data platform used to analyze governed data, generate business insights, and develop AI-powered applications.",
		icon: "Google Cloud.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "looker:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.cloud\\.looker\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"poa"
			]
		}
	},
	{
		id: "lucky-orange",
		name: "Lucky Orange",
		website: "https://www.luckyorange.com",
		description: "Lucky Orange is a conversion optimisation tool with features including heatmaps, session recording, conversion funnels, form analytics, and chat.",
		icon: "Lucky Orange.svg",
		categories: [
			"analytics",
			"form-schema-library"
		],
		rules: [
			{
				id: "lucky-orange:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.luckyorange\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lucky-orange:dom:1",
				kind: "dom",
				selector: "link[href*='.luckyorange.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "lucky-orange:pageGlobal:2",
				kind: "pageGlobal",
				property: "__wtw_lucky_site_id",
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
		id: "luigi-s-box",
		name: "Luigi’s Box",
		website: "https://www.luigisbox.com",
		icon: "Luigisbox.svg",
		categories: [
			"analytics",
			"search"
		],
		rules: [
			{
				id: "luigi-s-box:pageGlobal:0",
				kind: "pageGlobal",
				property: "Luigis",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luigi-s-box:pageGlobal:1",
				kind: "pageGlobal",
				property: "LuigisBox",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "lumino",
		name: "Lumino",
		website: "https://getlumino.ai",
		description: "Lumino is a data platform that helps Shopify brands optimize marketing, conversions, and user experience by leveraging data.",
		icon: "Lumino.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "lumino:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.getlumino\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
			"shopify"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lumio",
		name: "Lumio",
		website: "https://lumio-analytics.com/",
		description: "Lumio is a tool that identifies and tracks visitors to your website, providing insights into user activity and behaviour.",
		icon: "Lumio.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "lumio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lumio-analytics\\.com/"),
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
		id: "mapp",
		name: "Mapp",
		website: "https://mapp.com",
		description: "Mapp is designed specifically to help consumer-facing brands run highly personalised, cross-channel marketing campaigns powered by real-time customer data and generated insights.",
		icon: "Mapp.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "mapp:pageGlobal:0",
				kind: "pageGlobal",
				property: "WebtrekkV3",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:1",
				kind: "pageGlobal",
				property: "webtrekk",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:2",
				kind: "pageGlobal",
				property: "webtrekkConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:3",
				kind: "pageGlobal",
				property: "webtrekkHeatmapObjects",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:4",
				kind: "pageGlobal",
				property: "webtrekkLinktrackObjects",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:5",
				kind: "pageGlobal",
				property: "webtrekkUnloadObjects",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:6",
				kind: "pageGlobal",
				property: "webtrekkV3",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:7",
				kind: "pageGlobal",
				property: "wtSmart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:8",
				kind: "pageGlobal",
				property: "wt_tt",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mapp:pageGlobal:9",
				kind: "pageGlobal",
				property: "wt_ttv2",
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
		id: "marchex",
		name: "Marchex",
		website: "https://www.marchex.com",
		description: "Marchex is a B2B call and conversational analytics company.",
		icon: "Marchex.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "marchex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marchex\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marchex:dom:1",
				kind: "dom",
				selector: "link[href*='.marchex.io']",
				description: "DOM selector matches a known technology marker."
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
		id: "marfeel",
		name: "Marfeel",
		website: "https://www.marfeel.com",
		description: "Marfeel is a publisher platform that allows publishers to create, optimise and monetise their mobile websites.",
		icon: "Marfeel.svg",
		categories: [
			"analytics",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "marfeel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marfeel\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marfeel:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mrf\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marfeel:pageGlobal:2",
				kind: "pageGlobal",
				property: "marfeel",
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
		id: "marketplan",
		name: "MarketPlan",
		website: "https://www.gomarketplan.io",
		description: "MarketPlan is a platform that integrates campaign mapping, simulation, collaboration, and smart analytics, all in one place.",
		icon: "MarketPlan.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "marketplan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.marketplan\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marketplan:pageGlobal:1",
				kind: "pageGlobal",
				property: "marketplan",
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
		id: "massflow",
		name: "Massflow",
		website: "https://massflow.io",
		description: "Massflow is a platform offering analytics for businesses, providing tools to evaluate performance, identify trends, and make data-driven decisions.",
		icon: "Massflow.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "massflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.massflow\\.io/"),
				description: "Script source URL matches a known technology marker."
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
		id: "matomo-analytics",
		name: "Matomo Analytics",
		website: "https://matomo.org",
		description: "Matomo Analytics is a free and open-source web analytics application, that runs on a PHP/MySQL web-server.",
		icon: "Matomo.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "matomo-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("piwik\\.js|piwik\\.php"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "matomo-analytics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("matomo(?:\\.min)?\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "matomo-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "Matomo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "matomo-analytics:pageGlobal:3",
				kind: "pageGlobal",
				property: "Piwik",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "matomo-analytics:pageGlobal:4",
				kind: "pageGlobal",
				property: "matomoSitesIDS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "matomo-analytics:pageGlobal:5",
				kind: "pageGlobal",
				property: "matomoTrackPage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "matomo-analytics:cookie:6",
				kind: "cookie",
				key: "PIWIK_SESSID",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "matomo-analytics:meta:7",
				kind: "meta",
				key: "apple-itunes-app",
				valuePattern: new RegExp("app-id=737216887"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "matomo-analytics:meta:8",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("(?:Matomo|Piwik) - Open Source Web Analytics"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "matomo-analytics:meta:9",
				kind: "meta",
				key: "google-play-app",
				valuePattern: new RegExp("app-id=org\\.piwik\\.mobile2"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"payg"
			],
			cpe: "cpe:2.3:a:matomo:matomo:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "measured",
		name: "Measured",
		website: "https://www.measured.com",
		description: "Measured is an analytics platform to measure efficiency of marketing channels.",
		icon: "Measured.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "measured:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.measured\\.com"),
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
		id: "medallia",
		name: "Medallia",
		website: "https://www.medallia.com",
		description: "Medallia (formerly Kampyle) is a complete customer feedback platform that helps digital enterprises listen, understand, and act across all digital touch-points.",
		icon: "Medallia.svg",
		categories: [
			"analytics",
			"developer-tooling",
			"surveys-feedback"
		],
		rules: [
			{
				id: "medallia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cf\\.kampyle\\.com/k_button\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "medallia:pageGlobal:1",
				kind: "pageGlobal",
				property: "KAMPYLE_COMMON",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "medallia:pageGlobal:2",
				kind: "pageGlobal",
				property: "k_track",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "medallia:pageGlobal:3",
				kind: "pageGlobal",
				property: "kampyle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "medallia:cookie:4",
				kind: "cookie",
				key: "k_visit",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mediahawk",
		name: "Mediahawk",
		website: "http://mediahawk.co.uk",
		description: "Mediahawk is a call analytics software for marketers.",
		icon: "Mediahawk.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mediahawk:pageGlobal:0",
				kind: "pageGlobal",
				property: "_mhct",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mediahawk:pageGlobal:1",
				kind: "pageGlobal",
				property: "mhctRequestFiredBeforeComplete",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mediahawk:pageGlobal:2",
				kind: "pageGlobal",
				property: "mhctRequestInitial",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mediahawk:pageGlobal:3",
				kind: "pageGlobal",
				property: "mhctRequestRunning",
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
		id: "meltwater",
		name: "Meltwater",
		website: "https://www.meltwater.com",
		description: "Meltwater is a media monitoring platform that tracks, analyzes, and provides insights from online news, social media, and broadcast sources to support data-driven decision-making.",
		icon: "Meltwater.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "meltwater:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.meltwater.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "meltwater:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.meltwater\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "metrics-key",
		name: "Metrics Key",
		website: "https://metricskey.net",
		description: "Metrics Key is software used for tracking performance in software development and search marketing campaigns.",
		icon: "MetricsKey.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "metrics-key:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//metricskey\\.net/track\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "metricscube",
		name: "MetricsCube",
		website: "https://www.metricscube.io",
		description: "MetricsCube is a WHMCS-integrated business analysis platform, offering real-time stats and reports.",
		icon: "MetricsCube.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "metricscube:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.metricscube\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "metricscube:dom:1",
				kind: "dom",
				selector: "script#metricscubestats",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "metricscube:cookie:2",
				kind: "cookie",
				key: "METRICSCUBE_ANALITYCS",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "metrilo",
		name: "Metrilo",
		website: "https://www.metrilo.com",
		description: "Metrilo is an ecommerce analytics, email marketing software provider.",
		icon: "Metrilo.svg",
		categories: [
			"analytics",
			"email-messaging"
		],
		rules: [
			{
				id: "metrilo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.metrilo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "metrilo:pageGlobal:1",
				kind: "pageGlobal",
				property: "metrilo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "metrilo:pageGlobal:2",
				kind: "pageGlobal",
				property: "metriloBotRegexp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "metrilo:pageGlobal:3",
				kind: "pageGlobal",
				property: "metriloCookie",
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
		id: "microsoft-clarity",
		name: "Microsoft Clarity",
		website: "https://clarity.microsoft.com",
		description: "Microsoft's Clarity is a analytics tool which provides website usage statistics, session recording, and heatmaps.",
		icon: "Microsoft Clarity.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "microsoft-clarity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.clarity\\.ms/.+/([\\d.]+)/clarity\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "microsoft-clarity:pageGlobal:1",
				kind: "pageGlobal",
				property: "clarity",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "microsoft-power-bi",
		name: "Microsoft Power BI",
		website: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
		description: "Microsoft Power BI is a data analytics platform that transforms company data into rich visuals for insights and decision-making.",
		icon: "MicrosoftPowerBI.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "microsoft-power-bi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("content\\.powerapps\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "microsoft-power-bi:pageGlobal:1",
				kind: "pageGlobal",
				property: "powerBIAccessToken",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "microsoft-power-bi:pageGlobal:2",
				kind: "pageGlobal",
				property: "powerBIEmbedToken",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "microsoft-power-bi:responseHeader:3",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("app\\.powerbi\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "mint",
		name: "Mint",
		website: "https://haveamint.com",
		description: "Mint is an extensible, self-hosted web site analytics program.",
		icon: "Mint.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mint/\\?js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mint:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mint",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mixpanel",
		name: "Mixpanel",
		website: "https://mixpanel.com",
		description: "Mixpanel provides a business analytics service. It tracks user interactions with web and mobile applications and provides tools for targeted communication with them. Its toolset contains in-app A/B tests and user survey forms.",
		icon: "Mixpanel.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mixpanel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mxpnl\\.com/libs/mixpanel\\-([0-9.]+)\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mixpanel:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.mixpanel\\.com/track"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mixpanel:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("VITE_MIXPANEL_KEY"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "mixpanel:dom:3",
				kind: "dom",
				selector: "meta[http-equiv='Content-Security-Policy'][content*='api.mixpanel.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mixpanel:pageGlobal:4",
				kind: "pageGlobal",
				property: "mixpanel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mixpanel:dns:5",
				kind: "dns",
				valuePattern: new RegExp("mixpanel-domain-verify"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "modio",
		name: "Modio",
		website: "https://www.modio.cz",
		description: "Modio is an ecommerce tracking system designed to monitor, analyze, and report online store performance and customer activity.",
		icon: "Modio.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "modio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trackingapi\\.modio\\.cz"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "modio:pageGlobal:1",
				kind: "pageGlobal",
				property: "ModioCZ",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "monitus",
		name: "Monitus",
		website: "https://www.monitus.net",
		description: "Monitus is a provider of web analytics tools for online retailers, specialising in developing solutions for the Yahoo Stores platform.",
		icon: "Monitus.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "monitus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.monitus\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "monitus:pageGlobal:1",
				kind: "pageGlobal",
				property: "monitus",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"yahoo-ecommerce"
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
		id: "monsido",
		name: "Monsido",
		website: "https://monsido.com",
		description: "Monsido provides a website management platform that automates processes, ensures regulatory compliance, improves collaboration in web and marketing teams, and streamlines reporting.",
		icon: "Monsido.svg",
		categories: [
			"analytics",
			"privacy-compliance",
			"accessibility"
		],
		rules: [
			{
				id: "monsido:pageGlobal:0",
				kind: "pageGlobal",
				property: "_monsido",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monsido:pageGlobal:1",
				kind: "pageGlobal",
				property: "monsido_tracking",
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
		id: "moostik",
		name: "Moostik",
		website: "https://moostik.net",
		description: "Moostik is a French analytics counter designed to track website traffic and visitor behavior.",
		icon: "Moostik.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "moostik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("m3\\.moostik\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "moostik:pageGlobal:1",
				kind: "pageGlobal",
				property: "moostik_scripts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moostik:pageGlobal:2",
				kind: "pageGlobal",
				property: "moostik_this_node",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mouse-flow",
		name: "Mouse Flow",
		website: "https://mouseflow.com/",
		icon: "Mouseflow.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mouse-flow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mouseflow\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mouse-flow:pageGlobal:1",
				kind: "pageGlobal",
				property: "_mfq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mux",
		name: "Mux",
		website: "https://www.mux.com",
		description: "Mux is a platform offering integration to monitor video streaming performance using minimal lines of code.",
		icon: "Mux.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mux:pageGlobal:0",
				kind: "pageGlobal",
				property: "MuxVideoElement",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mux:pageGlobal:1",
				kind: "pageGlobal",
				property: "initBitmovinMux",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "mystat",
		name: "MyStat",
		website: "https://www.mystat.hu",
		description: "MyStat is a Hungarian-based analytics service that provides data insights and tracking capabilities for websites.",
		icon: "MyStat.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "mystat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("stat\\.mystat\\.hu"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "navegg",
		name: "Navegg",
		website: "https://www.navegg.com/",
		icon: "Navegg.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "navegg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.navdmp\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "naver-analytics",
		name: "Naver Analytics",
		website: "https://analytics.naver.com",
		description: "Naver Analytics is a Korean based analytics service.",
		icon: "Naver Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "naver-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wcs\\.naver\\.net/wcslog\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "naver-analytics:meta:1",
				kind: "meta",
				key: "naver-site-verification",
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "nemu",
		name: "Nemu",
		website: "https://usenemu.com",
		description: "Nemu is a platform that enables end-to-end tracking to monitor and optimize campaign performance, supporting improved profitability.",
		icon: "Nemu.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "nemu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trackings\\.nemu\\.com\\.br"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nemu:pageGlobal:1",
				kind: "pageGlobal",
				property: "trackingNemu",
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
		id: "neowize",
		name: "Neowize",
		website: "https://www.neowize.com",
		description: "Neowize is a platform that applies artificial intelligence and data science to enhance analytics and decision-making in ecommerce.",
		icon: "Neowize.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "neowize:pageGlobal:0",
				kind: "pageGlobal",
				property: "neowize_api_key",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "neowize:pageGlobal:1",
				kind: "pageGlobal",
				property: "neowize_cart_data",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nepcha-analytics",
		name: "Nepcha Analytics",
		website: "https://nepcha.com",
		description: "Nepcha Analytics is a privacy-focused analytics platform that collects and processes website usage data without relying on cookies or personal tracking, ensuring compliance with modern data protection standards.",
		icon: "NepchaAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "nepcha-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.nepcha\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "netvibes",
		name: "Netvibes",
		website: "https://www.netvibes.com",
		description: "Netvibes is a platform for social media monitoring, analytics, and real-time alerts.",
		icon: "Netvibes.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "netvibes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.netvibes\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nexmind",
		name: "NexMind",
		website: "https://www.nexmind.ai",
		description: "NexMind is a platform offering advanced analytics tools for businesses to make informed decisions and foster growth.",
		icon: "NexMind.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "nexmind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.nexmind\\.ai/"),
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
		id: "nimbata",
		name: "Nimbata",
		website: "https://www.nimbata.com",
		description: "Nimbata is a call tracking and conversion attribution platform designed to help marketing professionals, teams, and agencies make informed decisions to improve campaign performance.",
		icon: "Nimbata.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "nimbata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dni\\.nimbata\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "ninjacat",
		name: "NinjaCat",
		website: "https://www.ninjacat.io",
		description: "NinjaCat is a marketing analytics platform that aggregates, analyzes, and reports performance data across multiple marketing channels.",
		icon: "NinjaCat.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "ninjacat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.ninjacat\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nocodelytics",
		name: "Nocodelytics",
		website: "https://www.nocodelytics.com",
		description: "Nocodelytics is a tool for tracking clicks, searches, CMS items, and more on your Webflow site. It allows you to monitor user activity and important metrics without any coding required.",
		icon: "Nocodelytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "nocodelytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracker\\.nocodelytics\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nocodelytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "__NOCODELYTICS_SITE_ID__",
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
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "noddus",
		name: "Noddus",
		website: "https://www.enterprise.noddus.com",
		description: "Noddus offers brands and agencies access to an advanced proprietary content marketing platform automating content production, distribution and analytics.",
		icon: "Noddus.png",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "noddus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("noddus\\.com/"),
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
		id: "northbeam",
		name: "Northbeam",
		website: "https://www.northbeam.io",
		description: "Northbeam is a platform for marketing measurement that uses machine learning for DTC and ecommerce brands.",
		icon: "Northbeam.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "northbeam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.northbeam\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "northbeam:dom:1",
				kind: "dom",
				selector: "script[data-src*='.northbeam.io/']",
				description: "DOM selector matches a known technology marker."
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
		id: "onestat",
		name: "OneStat",
		website: "https://www.onestat.com",
		icon: "OneStat.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "onestat:pageGlobal:0",
				kind: "pageGlobal",
				property: "OneStat_Pageview",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "open-web-analytics",
		name: "Open Web Analytics",
		website: "https://www.openwebanalytics.com",
		description: "Open Web Analytics is an open-source web analytics tool that provides self-hosted, customizable tracking and reporting of website traffic and user behavior.",
		icon: "Open Web Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "open-web-analytics:html:0",
				kind: "html",
				pattern: new RegExp("<!-- (?:Start|End) Open Web Analytics Tracker -->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "open-web-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "OWA.config.baseUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "open-web-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "owa_baseUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "open-web-analytics:pageGlobal:3",
				kind: "pageGlobal",
				property: "owa_cmds",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:openwebanalytics:open_web_analytics:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "openpanel",
		name: "OpenPanel",
		website: "https://openpanel.dev",
		description: "OpenPanel is an open-source analytics library that enables developers to track and analyze user behavior, providing real-time insights and data visualization for improved decision-making across various platforms.",
		icon: "OpenPanel.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "openpanel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//openpanel\\.dev/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "openpanel:pageGlobal:1",
				kind: "pageGlobal",
				property: "openpanel.api",
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
		id: "opentelemetry",
		name: "opentelemetry",
		website: "https://opentelemetry.io",
		description: "OpenTelemetry is a framework for observability, providing standardized APIs, libraries, and agents to collect telemetry data.",
		icon: "opentelemetry.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "opentelemetry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("opentelemetry.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "opentelemetry:pageGlobal:1",
				kind: "pageGlobal",
				property: "otel",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "opentracker",
		name: "Opentracker",
		website: "https://www.opentracker.net",
		description: "Opentracker is a real-time analytics tool that tracks website traffic, user behavior, and engagement.",
		icon: "Opentracker.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "opentracker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.opentracker\\.net"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "oracle-infinity",
		name: "Oracle Infinity",
		website: "https://www.oracle.com/cx/marketing/digital-intelligence/",
		description: "Oracle Infinity is a digital analytics platform for tracking, measuring, and optimizing the performance and visitor behavior of enterprise websites and mobile apps.",
		icon: "Oracle.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "oracle-infinity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c\\.oracleinfinity\\.io"),
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
		id: "oracle-moat-measurement",
		name: "Oracle Moat Measurement",
		website: "https://www.oracle.com/cx/advertising/measurement/",
		description: "Oracle Moat delivers solutions that are critical to measuring advertising effectiveness, including verification and attention, reach, and frequency as well as sales lift measurement.",
		icon: "Oracle.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "oracle-moat-measurement:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moatads\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "oracle-recommendations-on-demand",
		name: "Oracle Recommendations On Demand",
		website: "https://www.oracle.com/us/products/applications/commerce/recommendations-on-demand/index.html",
		icon: "Oracle.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "oracle-recommendations-on-demand:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("atgsvcs.+atgsvcs\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ostr-io",
		name: "ostr.io",
		website: "https://ostr.io",
		description: "ostr.io is a platform that provides site monitoring and analytics services, enabling the collection and analysis of performance and usage data.",
		icon: "ostr.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ostr-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.ostr\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "panelbear",
		name: "Panelbear",
		website: "https://panelbear.com",
		description: "Panelbear is a simple website performance and traffic analytics tool.",
		icon: "Panelbear.svg",
		categories: [
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "panelbear:pageGlobal:0",
				kind: "pageGlobal",
				property: "panelbear",
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
		id: "parse-ly",
		name: "Parse.ly",
		website: "https://www.parse.ly",
		icon: "Parse.ly.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "parse-ly:pageGlobal:0",
				kind: "pageGlobal",
				property: "PARSELY",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pathful",
		name: "Pathful",
		website: "https://pathful.com",
		description: "Pathify is a data-driven conversion optimization platform designed to improve website performance through analytics and user behavior insights.",
		icon: "Pathful.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "pathful:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("ssl\\.pathful\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "patient-prism",
		name: "Patient Prism",
		website: "https://www.patientprism.com",
		description: "Patient Prism is a call tracking and AI-powered coaching platform for dentists, designed to improve practice operations, patient engagement, and overall performance.",
		icon: "PatientPrism.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "patient-prism:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("next-api\\.patientprism\\.com"),
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
		id: "patientloop",
		name: "PatientLoop",
		website: "https://www.patientloop.com",
		description: "PatientLoop is a software platform that helps organizations measure, demonstrate, and report the return on investment of their services to clients, supporting scalable performance tracking and impact analysis.",
		icon: "PatientLoop.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "patientloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.patientloop\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "paypal-marketing-solutions",
		name: "PayPal Marketing Solutions",
		website: "https://developer.paypal.com/docs/marketing-solutions",
		description: "PayPal Marketing Solutions enables merchants to see shopper insights and provide custom rewards for buyers with PayPal accounts.",
		icon: "PayPal.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "paypal-marketing-solutions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.paypalobjects\\.com/muse/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "paypal-marketing-solutions:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.paypal\\.com/tagmanager/pptm\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"paypal"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "peftrust",
		name: "Peftrust",
		website: "https://www.peftrust.com",
		description: "Peftrust is an environmental scoring and compliance platform for apparel and footwear brands that assesses environmental impact using the European PEF Methodology.",
		icon: "Peftrust.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "peftrust:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.peftrust\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "pendo",
		name: "Pendo",
		website: "https://www.pendo.io",
		description: "Pendo is a product analytics platform used in release to enrich the product experience and provide insights to the product management team.",
		icon: "Pendo.svg",
		categories: [
			"analytics",
			"widgets-misc"
		],
		rules: [
			{
				id: "pendo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pendo\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pendo:pageGlobal:1",
				kind: "pageGlobal",
				property: "pendo.HOST",
				valuePattern: new RegExp("\\.pendo\\.io"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pendo:pageGlobal:2",
				kind: "pageGlobal",
				property: "pendo.VERSION",
				valuePattern: new RegExp("(.+)"),
				confidence: 1,
				version: { source: "match", group: 1 },
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
		id: "peripl",
		name: "Peripl",
		website: "https://www.peripl.fr",
		description: "Peripl is a French software company that provides cloud-based software solutions for business management, including accounting, invoicing, payroll, and project management.",
		icon: "Peripl.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "peripl:dom:0",
				kind: "dom",
				selector: "script#peripl-script",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "piano-analytics",
		name: "Piano Analytics",
		website: "https://piano.io/product/analytics/",
		description: "Piano Analytics is a data integration platform that consolidates marketing analytics, product analytics, content analytics, transaction data, and first-party data to offer a centralised source for reporting and segmentation.",
		icon: "Piano.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "piano-analytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "pianoAnalytics",
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
		id: "pinterest-conversion-tag",
		name: "Pinterest Conversion Tag",
		website: "https://www.pinterest.com.au/business/",
		description: "Pinterest Conversion Tag allows you to track actions people take on your website after viewing your Promoted Pin.",
		icon: "Pinterest.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "pinterest-conversion-tag:dom:0",
				kind: "dom",
				selector: "img[src*='ct.pinterest.com/v3/?tid']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pinterest-conversion-tag:pageGlobal:1",
				kind: "pageGlobal",
				property: "pintrk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "piwik-pro-core",
		name: "Piwik PRO Core",
		website: "https://piwik.pro",
		description: "Piwik PRO Core is a free alternative to Google Analytics that is privacy & compliance focused.",
		icon: "Piwik PRO Core.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "piwik-pro-core:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.piwik\\.pro/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "piwik-pro-core:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("piwik"),
				description: "Script content contains a bounded technology signature."
			}
		],
		excludes: [
			"matomo-analytics"
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
		id: "plausible",
		name: "Plausible",
		website: "https://plausible.io/",
		description: "Plausible is an open-source alternative to Google Analytics.",
		icon: "Plausible.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "plausible:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plausible\\.io/js/plausible\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plausible:pageGlobal:1",
				kind: "pageGlobal",
				property: "plausible",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "plerdy",
		name: "Plerdy",
		website: "https://www.plerdy.com",
		description: "Plerdy is a SaaS solution designed to improve conversion rates for websites and online stores.",
		icon: "Plerdy.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "plerdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.plerdy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plerdy:pageGlobal:1",
				kind: "pageGlobal",
				property: "plerdyScript",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "plerdy:pageGlobal:2",
				kind: "pageGlobal",
				property: "plerdymainscript",
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
		id: "podkite",
		name: "Podkite",
		website: "https://podkite.com",
		description: "Podkite is a platform that allows users to track their podcast's chart rankings, reviews, download analytics and attribution data all in one place.",
		icon: "Podkite.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "podkite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.podkite\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "polar-analytics",
		name: "Polar Analytics",
		website: "https://www.polaranalytics.com",
		description: "Polar Analytics is an intelligent marketing dashboard built for direct-to-consumer brands. ",
		icon: "PolarAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "polar-analytics:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn-production\\.polaranalytics\\.com"),
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
		id: "posthog",
		name: "PostHog",
		website: "https://posthog.com",
		description: "PostHog is the open-source, all-in-one product analytics platform.",
		icon: "PostHog.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "posthog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.posthog\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "posthog:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.posthog\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "posthog:pageGlobal:2",
				kind: "pageGlobal",
				property: "__PosthogExtensions__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "posthog:pageGlobal:3",
				kind: "pageGlobal",
				property: "posthog",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg"
			],
			cpe: "cpe:2.3:a:posthog:posthog:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "powster",
		name: "Powster",
		website: "https://powster.com",
		description: "Powster is a creative studio specialising in analytics, offering data-driven insights to enhance and optimise creative projects.",
		icon: "Powster.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "powster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracking\\.powster\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "powster:pageGlobal:1",
				kind: "pageGlobal",
				property: "powsterGtag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powster:pageGlobal:2",
				kind: "pageGlobal",
				property: "powsterOneTrust",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powster:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Powster$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "primegate",
		name: "PrimeGate",
		website: "https://www.primegate.io",
		description: "PrimeGate is an end-to-end Russian analytics system offering a unified platform for businesses.",
		icon: "PrimeGate.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "primegate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.primegate\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "primegate:pageGlobal:1",
				kind: "pageGlobal",
				property: "PrimeGate",
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
		id: "profitwell",
		name: "Profitwell",
		website: "https://www.profitwell.com/",
		icon: "Profitwell.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "profitwell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("profitwell\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "profitwell:pageGlobal:1",
				kind: "pageGlobal",
				property: "profitwell",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "proof-factor",
		name: "Proof Factor",
		website: "https://prooffactor.com",
		description: "Proof Factor is a social proof conversion optimization tool that aggregates and displays user activity data to provide objective insights for analyzing conversion performance.",
		icon: "ProofFactor.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "proof-factor:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.prooffactor\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "proof-factor:pageGlobal:1",
				kind: "pageGlobal",
				property: "PROOF_FACTOR_ACCOUNT_ID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "proof-factor:pageGlobal:2",
				kind: "pageGlobal",
				property: "PROOF_FACTOR_ANALYTICS_SETUP",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "psyma",
		name: "Psyma",
		website: "https://www.psyma.com/en/industries/automotive/",
		description: "Psyma is a behavior analytics platform specializing in data-driven insights for the automotive industry.",
		icon: "Psyma.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "psyma:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("scripts\\.psyma\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "publytics",
		name: "Publytics",
		website: "https://publytics.net",
		description: "Publytics is a lightweight and cookieless alternative to Google Analytics for web publishers.",
		icon: "Publytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "publytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.publytics\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "publytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "publytics",
				description: "Page-owned global matches a known technology marker."
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
		id: "pubperf",
		name: "Pubperf",
		website: "https://www.pubperf.com",
		description: "Pubperf is an analytics suite designed for digital publishers to measure, monitor, and optimize audience engagement, advertising performance, and content effectiveness across multiple platforms.",
		icon: "Pubperf.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "pubperf:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.pubperf\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "pyze",
		name: "Pyze",
		website: "https://www.pyze.com",
		description: "Pyze is a digital platform that provides analytics and engagement tools to support and measure digital transformation initiatives.",
		icon: "Pyze.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "pyze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pyze\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pyze:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pyze.getAppInstanceId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pyze:pageGlobal:2",
				kind: "pageGlobal",
				property: "PyzeCuratedEvents",
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
		id: "qooqie",
		name: "Qooqie",
		website: "https://qooqie.com",
		description: "Qooqie is a call tracking tool designed to monitor and analyze inbound phone calls.",
		icon: "Qooqie.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "qooqie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.qooqie\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "quantcast-measure",
		name: "Quantcast Measure",
		website: "https://www.quantcast.com/products/measure-audience-insights",
		description: "Quantcast Measure is an audience insights and analytics tool.",
		icon: "Quantcast.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "quantcast-measure:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quantserve\\.com/quant\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "quantcast-measure:dom:1",
				kind: "dom",
				selector: "link[href*='.quantserve.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "quantcast-measure:pageGlobal:2",
				kind: "pageGlobal",
				property: "quantserve",
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
		id: "quantum-metric",
		name: "Quantum Metric",
		website: "https://www.quantummetric.com/",
		description: "Quantum Metric is a continuous product design platform that helps organizations build better products faster.",
		icon: "Quantummetric.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "quantum-metric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.quantummetric\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "quora-pixel",
		name: "Quora Pixel",
		website: "https://quoraadsupport.zendesk.com/hc/en-us/categories/115001573928-Pixels-Tracking",
		description: "Quora Pixel is a tool that is placed in your website code to track traffic and conversions.",
		icon: "Quora.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "quora-pixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quora\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "quora-pixel:pageGlobal:1",
				kind: "pageGlobal",
				property: "qp.qp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "quotemedia",
		name: "Quotemedia",
		website: "https://quotemedia.com",
		description: "Quotemedia is a provider of stock market data and research solutions for online brokerages, clearing firms, banks, media portals, public companies, and financial service corporations.",
		icon: "QuoteMedia.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "quotemedia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("qmod\\.quotemedia\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rambler",
		name: "Rambler",
		website: "https://www.rambler.ru",
		description: "Rambler is a site rating system and visitor counter developed in Russia.",
		icon: "Rambler.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "rambler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("counter\\.rambler\\.ru"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rambler:dom:1",
				kind: "dom",
				selector: "a[href*='.rambler.ru/'] > img[src*='counter.rambler.ru/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "reactful",
		name: "Reactful",
		website: "https://app.reactful.com",
		description: "Reactful is a platform that responds to visitor intent in real time to enhance engagement and optimize website interactions.",
		icon: "Reactful.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "reactful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("visitor\\.reactful\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "realytics",
		name: "Realytics",
		website: "https://www.realytics.io",
		description: "Realytics is a platform for real-time tracking and analysis of TV advertisements.",
		icon: "Realytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "realytics:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.realytics\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "refix",
		name: "Refix",
		website: "https://www.refix.ai",
		description: "Refix is a tracking tool that monitors clicks, views, scrolls, and other key user engagement metrics through a single script.",
		icon: "Refix.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "refix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.refix\\.ai"),
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
		id: "reinvigorate",
		name: "Reinvigorate",
		website: "https://www.reinvigorate.net",
		icon: "Reinvigorate.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "reinvigorate:pageGlobal:0",
				kind: "pageGlobal",
				property: "reinvigorate",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "repro",
		name: "Repro",
		website: "https://repro.io",
		description: "Repro is a growth platform for mobile apps offering flexible analytics, user studies with play-by-play action videos, and marketing strategies like push notifications and in-app messages.",
		icon: "Repro.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "repro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.reproio\\.com/web/v([\\d\\.]+)/repro-sdk\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "repro:pageGlobal:1",
				kind: "pageGlobal",
				property: "reproio",
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
		id: "resonate",
		name: "Resonate",
		website: "https://www.resonate.com",
		description: "Resonate is a consumer intelligence platform that collects, analyzes, and interprets audience data to provide insights into consumer behavior, preferences, and motivations for strategic decision-making.",
		icon: "Resonate.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "resonate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.resonate\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "resonate:pageGlobal:1",
				kind: "pageGlobal",
				property: "resonateAnalytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "reverse-market-insight",
		name: "Reverse Market Insight",
		website: "https://www.rminsight.net",
		description: "Reverse Market Insight is a provider of performance data and analytics solutions for the reverse mortgage industry.",
		icon: "ReverseMarketInsight.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "reverse-market-insight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.rminsight\\.net"),
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
		id: "ringba",
		name: "Ringba",
		website: "https://www.ringba.com",
		description: "Ringba is a platform that offers call tracking solutions to businesses, pay-per-call networks, brokers, agencies, and performance marketers of all sizes.",
		icon: "Ringba.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ringba:pageGlobal:0",
				kind: "pageGlobal",
				property: "ringba.release",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ringba:pageGlobal:1",
				kind: "pageGlobal",
				property: "ringba_known_numbers",
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
		id: "riskified",
		name: "Riskified",
		website: "https://www.riskified.com/",
		description: "Riskified is a privately held company that provides SaaS fraud and chargeback prevention technology.",
		icon: "Riskified.svg",
		categories: [
			"analytics",
			"security"
		],
		rules: [
			{
				id: "riskified:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]*beacon\\.riskified\\.com"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "riskified:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]*c\\.riskified\\.com"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "riskified:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.riskified\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "riskified:pageGlobal:3",
				kind: "pageGlobal",
				property: "RISKX",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "riskified:pageGlobal:4",
				kind: "pageGlobal",
				property: "riskifiedBeaconLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "riskified:responseHeader:5",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("Riskified Server"),
				description: "Response header matches a known technology marker."
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
		id: "riyo-ai",
		name: "riyo.ai",
		website: "https://www.riyo.ai",
		description: "riyo.ai (formerly known as Traek) is a website insights, analytics and lead generation tool.",
		icon: "Riyo.AI.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "riyo-ai:pageGlobal:0",
				kind: "pageGlobal",
				property: "Traek",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "roistat",
		name: "Roistat",
		website: "https://roistat.com/",
		description: "Roistat is a marketing analytics system.",
		icon: "roistat.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "roistat:pageGlobal:0",
				kind: "pageGlobal",
				property: "roistatHost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "roistat:pageGlobal:1",
				kind: "pageGlobal",
				property: "roistatProjectId",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "ronin-sport",
		name: "Ronin Sport",
		website: "https://www.roninsport.io",
		description: "Ronin Sport is a provider of high-quality sports TV data solutions that enhance engagement and drive revenue.",
		icon: "RoninSport.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ronin-sport:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.roninsport\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ruler-analytics",
		name: "Ruler Analytics",
		website: "https://www.ruleranalytics.com",
		description: "Ruler Analytics is a sales and marketing analytics tool designed to track performance, optimize campaigns, and provide data-driven insights.",
		icon: "RulerAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ruler-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ruler\\.nyltx\\.com"),
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
		id: "rybbit",
		name: "Rybbit",
		website: "https://www.rybbit.io",
		description: "Rybbit is a privacy-focused, open-source web analytics platform that provides real-time tracking without cookies using a modular architecture and ClickHouse backend.",
		icon: "Rybbit.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "rybbit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rybbit\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rybbit:pageGlobal:1",
				kind: "pageGlobal",
				property: "rybbit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "s-and-p-global-mobility",
		name: "S&P Global Mobility",
		website: "https://www.spglobal.com/mobility/en/index.html",
		description: "S&P Global Mobility, formerly Dataium is a platform that analyzes online automotive shopping behavior.",
		icon: "S&PGlobalMobility.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "s-and-p-global-mobility:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vcu\\.collserve\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "salesreps-io",
		name: "SalesReps.io",
		website: "https://salesreps.io",
		description: "SalesReps.io is a sales representative performance and commission reporting software provider.",
		icon: "SalesReps.io.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "salesreps-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.salesreps\\.io/"),
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
		id: "salesviewer",
		name: "SalesViewer",
		website: "https://www.salesviewer.com",
		description: "SalesViewer is a tool that identifies anonymous website visitors.",
		icon: "SalesViewer.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "salesviewer:pageGlobal:0",
				kind: "pageGlobal",
				property: "SV_JSON",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesviewer:pageGlobal:1",
				kind: "pageGlobal",
				property: "SV_XHR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesviewer:pageGlobal:2",
				kind: "pageGlobal",
				property: "SV_XHR_0",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "say-ac",
		name: "Say.ac",
		website: "https://say.ac",
		description: "Say.ac is a platform for webmasters that analyzes website visitor data and provides insights on traffic patterns and user behavior.",
		icon: "SayAC.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "say-ac:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//say\\.ac/(v[0-9]+)?\\.php"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sealmetrics",
		name: "SealMetrics",
		website: "https://sealmetrics.com",
		description: "SealMetrics is a cookieless analytics system that enables businesses to track website performance and user behaviour.",
		icon: "SealMetrics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sealmetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sealmetrics\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sealmetrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "sm.VERSION",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "seeda",
		name: "Seeda",
		website: "https://www.seeda.io",
		description: "Seeda is an AI-powered analytics platform for ecommerce growth.",
		icon: "Seeda.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "seeda:pageGlobal:0",
				kind: "pageGlobal",
				property: "seedaEvent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seeda:pageGlobal:1",
				kind: "pageGlobal",
				property: "seedaLink",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seeda:pageGlobal:2",
				kind: "pageGlobal",
				property: "seedaPageView",
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
		id: "segmentstream",
		name: "SegmentStream",
		website: "https://segmentstream.com",
		description: "SegmentStream is a AI-powered marketing analytics platform built for data-driven CMOs, web analysts and performance marketing teams.",
		icon: "SegmentStream.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "segmentstream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.segmentstream\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segmentstream:pageGlobal:1",
				kind: "pageGlobal",
				property: "segmentstream.VERSION",
				valuePattern: new RegExp("(.+)"),
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
		id: "seline",
		name: "Seline",
		website: "https://seline.so",
		description: "Seline is a website and product analytics platform that operates cookieless.",
		icon: "Seline.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "seline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.seline\\.so"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seline:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.seline\\.so"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "sensai-metrics",
		name: "Sensai Metrics",
		website: "https://sensaimetrics.io",
		description: "Sensai Metrics is a SAAS platform that analyzes ecommerce stores using various data science models to provide customers with actionable insights, predictions, and recommendations aimed at scaling their revenue.",
		icon: "SensaiMetrics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sensai-metrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sensaimetrics\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sensai-metrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "sensai.extensions",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sensai-metrics:pageGlobal:2",
				kind: "pageGlobal",
				property: "sensaiTracker.extensions",
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
		id: "sensors-data",
		name: "Sensors Data",
		website: "https://www.sensorsdata.cn",
		icon: "Sensors Data.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sensors-data:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sensorsdata"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sensors-data:pageGlobal:1",
				kind: "pageGlobal",
				property: "sa.lib_version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sensors-data:pageGlobal:2",
				kind: "pageGlobal",
				property: "sensorsdata_app_js_bridge_call_js",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sensors-data:cookie:3",
				kind: "cookie",
				key: "sensorsdata2015jssdkcross",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "sensors-data:cookie:4",
				kind: "cookie",
				key: "sensorsdata2015session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sentifi",
		name: "Sentifi",
		website: "https://sentifi.com",
		description: "Sentifi is a platform that leverages crowd-based financial intelligence to analyze and provide insights into market trends, helping users make informed decisions based on collective data.",
		icon: "Sentifi.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sentifi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-pub\\.sentifi\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "session-rewind",
		name: "Session Rewind",
		website: "https://sessionrewind.com",
		description: "Session Rewind is a playback and monitoring service that records and tracks every session and issue.",
		icon: "SessionRewind.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "session-rewind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sessionrewind\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "session-rewind:pageGlobal:1",
				kind: "pageGlobal",
				property: "SessionRewindConfig.apiKey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "sessionstack",
		name: "SessionStack",
		website: "https://www.sessionstack.com",
		description: "SessionStack is an AI-enhanced analytics platform for online retailers, helping convert visitors into customers.",
		icon: "SessionStack.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sessionstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sessionstack\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sessionstack:pageGlobal:1",
				kind: "pageGlobal",
				property: "SessionStack",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "setrics",
		name: "Setrics",
		website: "https://setrics.com",
		description: "Setrics is an omni-channel marketing and analysis platform that enables businesses to track and optimize customer interactions across multiple channels.",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "setrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.setrics\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "setrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "setrics_tracking.track_goal",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "shinystat",
		name: "ShinyStat",
		website: "https://shinystat.com",
		icon: "ShinyStat.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "shinystat:html:0",
				kind: "html",
				pattern: new RegExp("<img[^>]*\\s+src=['\"]?https?://www\\.shinystat\\.com/cgi-bin/shinystat\\.cgi\\?[^'\"\\s>]*['\"\\s/>]"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "shinystat:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://codice(?:business|ssl|pro|isp)?\\.shinystat\\.com/cgi-bin/getcod\\.cgi"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shinystat:pageGlobal:2",
				kind: "pageGlobal",
				property: "SSsdk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sift",
		name: "Sift",
		website: "https://sift.com/",
		description: "Sift is a CA-based fraud prevention company.",
		icon: "Sift.svg",
		categories: [
			"analytics",
			"security"
		],
		rules: [
			{
				id: "sift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sift(?:science)?\\.com/s\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sift:pageGlobal:1",
				kind: "pageGlobal",
				property: "__siftFlashCB",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sift:pageGlobal:2",
				kind: "pageGlobal",
				property: "_sift",
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
		id: "signifyd",
		name: "Signifyd",
		website: "https://www.signifyd.com",
		description: "Signifyd is a provider of an enterprise-grade fraud technology solution for ecommerce stores.",
		icon: "Signifyd.svg",
		categories: [
			"analytics",
			"security"
		],
		rules: [
			{
				id: "signifyd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.signifyd\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "signifyd:pageGlobal:1",
				kind: "pageGlobal",
				property: "SIGNIFYD_GLOBAL",
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
		id: "simple-analytics",
		name: "Simple Analytics",
		website: "https://simpleanalytics.com",
		description: "Simple Analytics is a privacy-friendly Google Analytics alternative.",
		icon: "Simple Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "simple-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("simpleanalyticscdn\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simple-analytics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("simpleanalytics\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simple-analytics:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("simpleanalytics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simple-analytics:pageGlobal:3",
				kind: "pageGlobal",
				property: "sa_event",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "simple-analytics:pageGlobal:4",
				kind: "pageGlobal",
				property: "sa_event_loaded",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "simple-analytics:pageGlobal:5",
				kind: "pageGlobal",
				property: "sa_loaded",
				confidence: 25,
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
		id: "sirge",
		name: "Sirge",
		website: "https://www.sirge.com",
		description: "Sirge is an analytics platform that tracks website visits, customer behavior, and provides insights to optimise return on ad spend (ROAS) and conversions.",
		icon: "Sirge.svg",
		categories: [
			"analytics",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "sirge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.app\\.sirge\\.com/"),
				description: "Script source URL matches a known technology marker."
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
				"recurring"
			]
		}
	},
	{
		id: "sistem",
		name: "Sistem",
		website: "https://sistem.ai",
		description: "Sistem is a platform that develops customized artificial intelligence designed to understand and improve business operations.",
		icon: "Sistem.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sistem:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.sistem\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "site-kit",
		name: "Site Kit",
		website: "https://sitekit.withgoogle.com/",
		description: "Site Kit is a one-stop solution for WordPress users to use everything Google has to offer to make them successful on the web.",
		icon: "Google.svg",
		categories: [
			"analytics",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "site-kit:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Site Kit by Google ?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "site-meter",
		name: "Site Meter",
		website: "https://www.sitemeter.com",
		icon: "Site Meter.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "site-meter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sitemeter\\.com/js/counter\\.js\\?site="),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sitefinity-insight",
		name: "Sitefinity Insight",
		website: "https://www.progress.com/documentation/sitefinity-cms/sitefinity-insight",
		description: "Sitefinity Insight is a tool that tracks user behavior on a site to help analyze interactions, identify patterns, and support data-driven decisions.",
		icon: "Sitefinity.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sitefinity-insight:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.insight\\.sitefinity\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "siteimprove",
		name: "Siteimprove",
		website: "https://www.siteimprove.com",
		description: "Siteimprove is a digital analytics and content QA platform.",
		icon: "Siteimprove.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "siteimprove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.|//)siteimprove(?:analytics)?\\.com/js/siteanalyze"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "siteimprove:pageGlobal:1",
				kind: "pageGlobal",
				property: "_sz.analytics.heatmap",
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
		id: "sitevibes",
		name: "SiteVibes",
		website: "https://sitevibes.com",
		description: "SiteVibes is a cloud-based user generated content and visual marketing platform.",
		icon: "SiteVibes.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sitevibes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.sitevibes\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sitevibes:pageGlobal:1",
				kind: "pageGlobal",
				property: "SiteVibesManager",
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
		id: "skai",
		name: "Skai",
		website: "https://skai.io",
		description: "Skai (formerly Kenshoo) is a marketing activation solution for brands and agencies.",
		icon: "Skai.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "skai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.xg4ken\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "skai:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ktag_Constants",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "skyglue",
		name: "SkyGlue",
		website: "https://www.skyglue.com",
		description: "SkyGlue is a tool that automatically tracks every user action on a website, providing insights into user behavior, their needs, and the reasons for drop-off.",
		icon: "SkyGlue.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "skyglue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dc\\.skyglue\\.com/"),
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
		id: "slingshot",
		name: "Slingshot",
		website: "https://getslingshot.com",
		description: "Slingshot is a platform that integrates real-time analytics with project management and collaboration tools to support data-driven decision-making.",
		icon: "Slingshot.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "slingshot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getslingshot\\.com/"),
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
		id: "smartlook",
		name: "Smartlook",
		website: "https://www.smartlook.com",
		description: "Smartlook is a qualitative analytics solution for websites and mobile apps.",
		icon: "Smartlook.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "smartlook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartlook\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "smartlook:pageGlobal:1",
				kind: "pageGlobal",
				property: "smartlook",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "smartlook:pageGlobal:2",
				kind: "pageGlobal",
				property: "smartlook_key",
				confidence: 50,
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
		id: "smartocto",
		name: "Smartocto",
		website: "https://smartocto.com",
		description: "Smartocto is a smart content analytics system.",
		icon: "Smartocto.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "smartocto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartocto\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"poa"
			]
		}
	},
	{
		id: "sniffurl",
		name: "SniffURL",
		website: "https://sniffurl.com",
		description: "SniffURL is a visitor analytics platform that tracks and analyses user interactions to improve engagement and retention across websites.",
		icon: "SniffURL.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sniffurl:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sniffurl\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sniffurl:pageGlobal:1",
				kind: "pageGlobal",
				property: "SniffUrl.identify",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "snoobi",
		name: "Snoobi",
		website: "https://www.snoobi.com",
		description: "Snoobi is a web analytics and visitor tracking tool.",
		icon: "Snoobi.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "snoobi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snoobi\\.com/snoop\\.php"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snoobi:pageGlobal:1",
				kind: "pageGlobal",
				property: "snoobi",
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
		id: "snowplow-analytics",
		name: "Snowplow Analytics",
		website: "https://snowplowanalytics.com",
		description: "Snowplow is an open-source behavioral data management platform for businesses.",
		icon: "Snowplow.svg",
		categories: [
			"analytics",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "snowplow-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sp\\.js"),
				confidence: 50,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("d1fc8wv8zag5ca\\.cloudfront\\.net/.+/sp\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/gh/snowplow/sp-js-assets@(?:.+)/sp\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com/ajax/libs/snowplow/(?:.+)/sp.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg.com/@snowplow/javascript-tracker@(?:.+)/dist/sp.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/npm/@snowplow/javascript-tracker@(?:.+)/dist/sp\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snowplow-analytics:pageGlobal:6",
				kind: "pageGlobal",
				property: "GlobalSnowplowNamespace",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "snowplow-analytics:pageGlobal:7",
				kind: "pageGlobal",
				property: "Snowplow",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "snowplow-analytics:cookie:8",
				kind: "cookie",
				key: "_sp_id",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "snowplow-analytics:cookie:9",
				kind: "cookie",
				key: "sp",
				confidence: 50,
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "spectro",
		name: "Spectro",
		website: "https://myspectro.io",
		description: "Spectro is an ecommerce analytics and conversion optimisation tool that provides insights into customer behaviour and sales performance, helping businesses to improve their online strategies and increase conversions.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "spectro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracking\\.myspectro\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "spinnakr",
		name: "Spinnakr",
		website: "https://www.spinnakr.com",
		description: "Spinnakr is a startup with a platform designed to personalise messages on blogs and websites.",
		icon: "Spinnakr.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "spinnakr:pageGlobal:0",
				kind: "pageGlobal",
				property: "_spinnakr_site_id",
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
		id: "splitbee",
		name: "Splitbee",
		website: "https://splitbee.io",
		icon: "splitbee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "splitbee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https://cdn\\.splitbee\\.io/sb\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "splitbee:pageGlobal:1",
				kind: "pageGlobal",
				property: "splitbee",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "spotzi",
		name: "Spotzi",
		website: "https://www.spotzi.com",
		description: "Spotzi is a provider of geomarketing solutions, focusing on data analytics and marketing.",
		icon: "Spotzi.svg",
		categories: [
			"analytics",
			"maps-location"
		],
		rules: [
			{
				id: "spotzi:pageGlobal:0",
				kind: "pageGlobal",
				property: "Spotzi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spotzi:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Spotzi$"),
				description: "Meta tag matches a known technology marker."
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
		id: "sprocket",
		name: "Sprocket",
		website: "https://www.sprocket.bz",
		description: "Sprocket is an analytics and tracking system from Japan.",
		icon: "Sprocket.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sprocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sprocket\\.bz/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sprocket:pageGlobal:1",
				kind: "pageGlobal",
				property: "sprocketMunicipalities",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sprocket:pageGlobal:2",
				kind: "pageGlobal",
				property: "sprocketSpots",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sprocket:cookie:3",
				kind: "cookie",
				key: "_sprocket_",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "stack-analytix",
		name: "Stack Analytix",
		website: "https://www.stackanalytix.com",
		description: "Stack Analytix offers heatmaps, session recording, conversion analysis and user engagement tools.",
		icon: "Stack Analytix.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "stack-analytix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.stackanalytix\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "stack-analytix:pageGlobal:1",
				kind: "pageGlobal",
				property: "stackAnalysis",
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
		id: "statcounter",
		name: "Statcounter",
		website: "https://www.statcounter.com",
		icon: "Statcounter.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "statcounter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("statcounter\\.com/counter/counter"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "statcounter:pageGlobal:1",
				kind: "pageGlobal",
				property: "_statcounter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statcounter:pageGlobal:2",
				kind: "pageGlobal",
				property: "sc_project",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statcounter:pageGlobal:3",
				kind: "pageGlobal",
				property: "sc_security",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "statsig",
		name: "Statsig",
		website: "https://statsig.com/",
		description: "Statsig is a modern product experimentation platform that helps product teams continuously measure impact of every single feature they launch.",
		icon: "Statsig.svg",
		categories: [
			"analytics",
			"developer-tooling"
		],
		rules: [
			{
				id: "statsig:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.statsigapi\\.net"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "statsig:pageGlobal:1",
				kind: "pageGlobal",
				property: "__STATSIG__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statsig:pageGlobal:2",
				kind: "pageGlobal",
				property: "__STATSIG__.SDK_VERSION",
				valuePattern: new RegExp("([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statsig:pageGlobal:3",
				kind: "pageGlobal",
				property: "statsig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statsig:pageGlobal:4",
				kind: "pageGlobal",
				property: "statsigInitialized",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statsig:pageGlobal:5",
				kind: "pageGlobal",
				property: "statsigWWW",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statsig:responseHeader:6",
				kind: "responseHeader",
				key: "x-statsig-region",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "stetic-analytics",
		name: "Stetic Analytics",
		website: "https://www.stetic.com",
		description: "Stetic Analytics is a platform that consolidates data tracking, reporting, and insights into a single system.",
		icon: "Stetic.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "stetic-analytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "stetic.track",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "superpluralanalytics",
		name: "SuperPluralAnalytics",
		website: "https://superplural.com/analytics/",
		description: "SuperPluralAnalytics is a web analytics platform that collects, measures, and reports website traffic data to help understand user behavior and site performance.",
		icon: "SuperPlural.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "superpluralanalytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.superplural\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "superpluralanalytics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.superplural\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "superstats",
		name: "SuperStats",
		website: "https://superstats.com",
		description: "SuperStats is a tool that provides in-depth website traffic statistics for tracking and analyzing web performance.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "superstats:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.superstats\\.com/"),
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
		id: "swagify",
		name: "Swagify",
		website: "https://swagifyapp.com",
		description: "Swagify allows you to upsell, cross-sell, and promote, by creating as many completely customizable offers as you want.",
		icon: "Swagify.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "swagify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.swagifyapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swagify:pageGlobal:1",
				kind: "pageGlobal",
				property: "Swagify",
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
				"recurring"
			]
		}
	},
	{
		id: "sweet-analytics",
		name: "Sweet Analytics",
		website: "https://sweetanalytics.com",
		description: "Sweet Analytics is a platform that consolidates ecommerce sales and marketing data into a single location for streamlined analysis.",
		icon: "SweetAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "sweet-analytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "sweet.acceptCookies",
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
		id: "swetrix",
		name: "Swetrix",
		website: "https://swetrix.com",
		description: "Swetrix is an open-source analytics platform that offers data analysis and reporting features for various use cases.",
		icon: "Swetrix.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "swetrix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.swetrix\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "swetrix:pageGlobal:1",
				kind: "pageGlobal",
				property: "swetrix.LIB_INSTANCE",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "syndeca",
		name: "Syndeca",
		website: "https://www.syndeca.com",
		description: "Syndeca is a visual commerce platform that allows brands to quickly create engaging, actionable campaigns.",
		icon: "Syndeca.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "syndeca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.syndeca\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "syndeca:pageGlobal:1",
				kind: "pageGlobal",
				property: "SyndecaAnalyticsObject",
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
		id: "synerise",
		name: "Synerise",
		website: "https://synerise.com/",
		icon: "Synerise.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "synerise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snrcdn\\.net/sdk/(3\\.0)/synerise-javascript-sdk\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tableau",
		name: "Tableau",
		website: "https://www.tableau.com",
		description: "Tableau is a data visualization tool that enables creation of interactive visualizations for embedding in websites or sharing with others.",
		icon: "Tableau.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tableau:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("public\\.tableau\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tableau:pageGlobal:1",
				kind: "pageGlobal",
				property: "tableau.CategoricalFilter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tableau:pageGlobal:2",
				kind: "pageGlobal",
				property: "tableauSoftware.CategoricalFilter",
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
		id: "tallentor",
		name: "Tallentor",
		website: "https://tallentor.com",
		description: "Tallentor is a subscription-based software website analytics, heatmap, channel chat intergration.",
		icon: "Tallentor.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tallentor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tallentor\\.com/js/script_tracker\\.js"),
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
		id: "task-analytics",
		name: "Task Analytics",
		website: "https://www.taskanalytics.com",
		description: "Task Analytics is a platform that captures and analyzes customer intent and engagement outcomes to provide insights into interaction effectiveness.",
		icon: "TaskAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "task-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/analytics\\.task\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "task-analytics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.taskanalytics\\.com"),
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
		id: "tencent-analytics",
		name: "Tencent Analytics (腾讯分析)",
		website: "https://ta.qq.com/",
		icon: "tajs.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tencent-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tajs\\.qq\\.com/stats"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tend",
		name: "Tend",
		website: "https://tend.io",
		description: "Tend is a conversion optimization tool designed to analyze visitor behavior and identify areas of interaction on websites.",
		icon: "Tend.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tend:pageGlobal:0",
				kind: "pageGlobal",
				property: "tend.event",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tend:pageGlobal:1",
				kind: "pageGlobal",
				property: "tendKey",
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
		id: "tg-track",
		name: "TG Track",
		website: "https://tgtrack.ru",
		description: "TG Track is a Telegram bot that analyzes subscription data upon registration.",
		icon: "TGTrack.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tg-track:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.tgtrack\\.ru/"),
				description: "Script source URL matches a known technology marker."
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
		id: "thankyou-analytics",
		name: "ThankYou Analytics",
		website: "https://thankyouanalytics.com",
		description: "ThankYou Analytics is an analytics platform for marketing teams that provides data analysis and performance insights.",
		icon: "ThankYouAnalytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "thankyou-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("data\\.thank-you\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "the-hotels-network",
		name: "The Hotels Network",
		website: "https://thehotelsnetwork.com",
		description: "The Hotels Network provides a SaaS software that enhances hotelier websites with predictive marketing personalisation and user behavior analytics.",
		icon: "The Hotels Network.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "the-hotels-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.thehotelsnetwork\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "the-hotels-network:pageGlobal:1",
				kind: "pageGlobal",
				property: "thn.data.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "the-hotels-network:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.thehotelsnetwork\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "the-hotels-network:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.thehotelsnetwork\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "thesis",
		name: "Thesis",
		website: "https://www.thesistesting.com",
		description: "Thesis is a conversion rate optimisation company.",
		icon: "Thesis.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "thesis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("thix\\.ttsep\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "thesis:pageGlobal:1",
				kind: "pageGlobal",
				property: "thix.history",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "thesis:pageGlobal:2",
				kind: "pageGlobal",
				property: "thix.t",
				confidence: 50,
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
		id: "tiktok-pixel",
		name: "TikTok Pixel",
		website: "https://ads.tiktok.com",
		icon: "TikTok.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tiktok-pixel:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("_tiktok_sdkid"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "tiktok-pixel:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("analytics\\.tiktok\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "tiktok-pixel:pageGlobal:3",
				kind: "pageGlobal",
				property: "TiktokAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tinybird",
		name: "Tinybird",
		website: "https://www.tinybird.co/",
		description: "Tinybird is a cloud-native data processing platform that allows developers and data teams to build real-time data pipelines and perform complex data transformations and analysis at scale.",
		icon: "Tinybird.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "tinybird:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tinybird.co/js/index\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tinybird:pageGlobal:1",
				kind: "pageGlobal",
				property: "Tinybird",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "topic-intelligence",
		name: "Topic Intelligence",
		website: "https://topicintelligence.ai",
		description: "Topic Intelligence is a platform that employs artificial intelligence to identify, analyze, and interpret underlying themes and concepts within textual data.",
		icon: "TopicIntelligence.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "topic-intelligence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.topicintelligence\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "trackbee",
		name: "Trackbee",
		website: "https://www.trackbee.io",
		description: "Trackbee is a data analytics tool that identifies missing conversion data to optimize revenue tracking and improve business insights.",
		icon: "Trackbee.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trackbee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trackbee\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "trackboxx",
		name: "Trackboxx",
		website: "https://trackboxx.com",
		description: "Trackboxx is a GDPR-compliant web analysis tool that operates without using cookies, providing data privacy while offering detailed website insights.",
		icon: "Trackboxx.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trackboxx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.trackboxx\\.info"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trackboxx:pageGlobal:1",
				kind: "pageGlobal",
				property: "trackboxx",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"payg",
				"freemium"
			]
		}
	},
	{
		id: "trackfox",
		name: "TrackFox",
		website: "https://trackfox.app",
		description: "TrackFox is a platform that links traffic patterns to revenue outcomes, providing clarity on which sources convert and which do not.",
		icon: "Trackfox.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trackfox:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("trackfox\\.app/script\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "trackfox:pageGlobal:1",
				kind: "pageGlobal",
				property: "trackfox.formatCurrency",
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
		id: "trackjs",
		name: "TrackJs",
		website: "https://trackjs.com",
		description: "TrackJS is an error monitoring agent for production web sites and applications.",
		icon: "TrackJs.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trackjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.trackjs\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trackjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "TrackJs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "trackjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "trackJs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "trackthemetric",
		name: "trackthemetric",
		website: "https://trackthemetric.com",
		description: "trackthemetric is a privacy-focused analytics platform that provides insights into website traffic and online revenue from a single interface.",
		icon: "trackthemetric.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trackthemetric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.trackthemetric\\.com"),
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
		id: "traek",
		name: "Traek",
		website: "https://www.traek.io",
		description: "Traek is a website insights, analytics and lead generation tool.",
		icon: "Traek.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "traek:pageGlobal:0",
				kind: "pageGlobal",
				property: "Traek",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "trak",
		name: "Trak",
		website: "https://www.trak.io",
		description: "Trak is a customer analytics platform designed for startups.",
		icon: "Trak.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trak:pageGlobal:0",
				kind: "pageGlobal",
				property: "trak.custom_event",
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
		id: "triple-whale",
		name: "Triple Whale",
		website: "https://triplewhale.com/",
		description: "The Triple Whale platform combines centralization, visualization, and attribution into a dashboard that presents and illustrates KPIs in an actionable way.",
		icon: "triplewhale.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "triple-whale:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("triplewhale-pixel\\.web\\.app"),
				description: "Observed request URL matches a known technology marker."
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
		id: "trovit",
		name: "Trovit",
		website: "https://www.trovit.com",
		description: "Trovit is a platform that provides analytics on homes, cars, and jobs.",
		icon: "Trovit.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "trovit:pageGlobal:0",
				kind: "pageGlobal",
				property: "TrovitAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "twitter-analytics",
		name: "Twitter Analytics",
		website: "https://analytics.twitter.com",
		description: "Twitter Analytics is a built-in data-tracking platform that shows you insights specific to your Twitter account and activity.",
		icon: "Twitter.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "twitter-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.twitter\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "ui-avenue",
		name: "UI Avenue",
		website: "https://www.uiavenue.ca",
		description: "UI Avenue is a data tracking and analytics software for Shopify.",
		icon: "UIAvenue.svg",
		categories: [
			"analytics",
			"commerce-operations"
		],
		rules: [
			{
				id: "ui-avenue:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.uiavenue\\.ca"),
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
		id: "umai",
		name: "UMAI",
		website: "https://www.umai.io",
		description: "UMAI is an analytics-based software using state-of-the-art technology to improve the experiences & performance for hospitality based businesses and their guests.",
		icon: "UMAI.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "umai:pageGlobal:0",
				kind: "pageGlobal",
				property: "umaiWidget.config",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "umami",
		name: "Umami",
		website: "https://umami.is/",
		description: "Umami is a self-hosted web analytics solution. It's goal is to provide a friendlier, privacy-focused alternative to Google Analytics and a free, open-sourced alternative to paid solutions.",
		icon: "umami.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "umami:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("umami\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "umami:pageGlobal:1",
				kind: "pageGlobal",
				property: "umami",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "umarketingsuite",
		name: "uMarketingSuite",
		website: "https://www.umarketingsuite.com",
		description: "uMarketingSuite is a set of diverse features that together form a full marketing suite for the Umbraco platform.",
		icon: "uMarketingSuite.svg",
		categories: [
			"analytics",
			"marketing-automation",
			"form-schema-library"
		],
		rules: [
			{
				id: "umarketingsuite:pageGlobal:0",
				kind: "pageGlobal",
				property: "uMarketingSuite",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"umbraco"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "useberry",
		name: "Useberry",
		website: "https://www.useberry.com",
		description: "Useberry is a platform that provides tools for conducting and analyzing user testing in a single integrated environment.",
		icon: "Useberry.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "useberry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.useberry\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "useberry:pageGlobal:1",
				kind: "pageGlobal",
				property: "useberryLive",
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
		id: "user-com",
		name: "user.com",
		website: "https://user.com",
		icon: "user.com.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "user-com:html:0",
				kind: "html",
				pattern: new RegExp("<div[^>]+/id=\"ue_widget\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "user-com:dom:1",
				kind: "dom",
				selector: "div[id*='ue_widget']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "user-com:pageGlobal:2",
				kind: "pageGlobal",
				property: "UserEngage",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "uxsniff",
		name: "UXSniff",
		website: "https://uxsniff.com",
		description: "UXSniff is a UX analysis tool that automatically detects usability issues by analyzing user behavior, including layout shifts and rage clicks, to identify potential conversion problems early.",
		icon: "UXSniff.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "uxsniff:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.uxsniff\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "uxsniff:pageGlobal:1",
				kind: "pageGlobal",
				property: "__UXS_BEACON_COOLDOWN_MS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "uxsniff:pageGlobal:2",
				kind: "pageGlobal",
				property: "__uxs_beaconInCooldown",
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
		id: "varos",
		name: "Varos",
		website: "https://www.varos.com",
		description: "Varos is a personal advisor for competitive intelligence, benchmarks, and market research, providing a one-time report to compare performance against the market.",
		icon: "Varos.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "varos:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.app\\.varos\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ve-global",
		name: "Ve Global",
		website: "https://ve.com",
		description: "Ve Global, formerly known as Ve Interactive, is a global technology company that provides ecommerce businesses with a managed-service of proprietary marketing software and digital advertising solutions.",
		icon: "Ve Global.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "ve-global:pageGlobal:0",
				kind: "pageGlobal",
				property: "veTagData.appsServicesUrl",
				valuePattern: new RegExp("\\.veinteractive\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "veonr",
		name: "Veonr",
		website: "https://veonr.com",
		description: "Veonr is an analytics and tracking suite designed for business websites, offering tools to monitor site activities and optimize conversions.",
		icon: "Veonr.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "veonr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.fsb\\.veonr\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vercel-analytics",
		name: "Vercel Analytics",
		website: "https://vercel.com/analytics",
		icon: "vercel.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "vercel-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/va/script\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vercel-analytics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/_vercel/insights/script\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vercel-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "va",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"vercel"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "vercel-speed-insights",
		name: "Vercel Speed Insights",
		website: "https://vercel.com/docs/speed-insights",
		description: "Vercel Speed Insights provides you with a detailed view of your website's performance metrics, based on Core Web Vitals.",
		icon: "vercel.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "vercel-speed-insights:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/_vercel/speed-insights/script\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vercel-speed-insights:pageGlobal:2",
				kind: "pageGlobal",
				property: "si",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "versatailor",
		name: "VersaTailor",
		website: "https://versatailor.com",
		description: "VersaTailor is a web analytics tool for online businesses that offers hour-by-hour filtering and the ability to exclude authenticated users from analytics.",
		icon: "VersaTailor.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "versatailor:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("versatailor\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "versatailor:pageGlobal:1",
				kind: "pageGlobal",
				property: "versatailor",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "vicomi",
		name: "Vicomi",
		website: "https://www.vicomi.com/emotion-analytics-for-brands-and-agencies",
		description: "Vicomi is a tool that provides insights into audience reactions to content.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "vicomi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets-prod\\.vicomi\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vidora",
		name: "Vidora",
		website: "https://www.vidora.com",
		description: "Vidora is a real-time machine learning platform which focuses on consumer data.",
		icon: "Vidora.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "vidora:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vidora\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vidora:pageGlobal:1",
				kind: "pageGlobal",
				property: "vidora",
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
		id: "visitorville",
		name: "VisitorVille",
		website: "http://visitorville.com",
		description: "VisitorVille is a tool that visualizes website visitors as a SimCity-like map, providing an interactive way to analyze traffic and user behavior.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "visitorville:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.visitorville\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vk-pixel",
		name: "VK Pixel",
		website: "https://vk.com/",
		description: "VK is a Russian online social media and social networking service.",
		icon: "vk.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "vk-pixel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vk\\.com/js/api/openapi\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vk-pixel:dom:1",
				kind: "dom",
				selector: "img[src*='vk.com/rtrg?p=VK-RTRG-']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "vwo",
		name: "VWO",
		website: "https://vwo.com",
		description: "VWO is a website testing and conversion optimisation platform.",
		icon: "VWO.svg",
		categories: [
			"analytics",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "vwo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dev\\.visualwebsiteoptimizer\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vwo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/visual-website-optimizer/([\\d\\.])"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vwo:pageGlobal:2",
				kind: "pageGlobal",
				property: "VWO",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vwo:pageGlobal:3",
				kind: "pageGlobal",
				property: "__vwo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vwo:pageGlobal:4",
				kind: "pageGlobal",
				property: "_vwo_code",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vwo:pageGlobal:5",
				kind: "pageGlobal",
				property: "_vwo_settings_timer",
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
		id: "w3-ataiva",
		name: "W3 Ataiva",
		website: "https://w3.ataiva.com",
		description: "W3 Ataiva is a website valuation and analysis tool that estimates site value, traffic metrics, and technical indicators using publicly available web data.",
		icon: "W3Ataiva.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "w3-ataiva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.statvoo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "w3counter",
		name: "W3Counter",
		website: "https://www.w3counter.com",
		description: "W3Counter is a web analytics service that provides free and paid tools for tracking visitor statistics and offers customizable website widgets to enhance user engagement.",
		icon: "W3Counter.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "w3counter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("w3counter\\.com/tracker\\.js"),
				description: "Script source URL matches a known technology marker."
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
		id: "wask",
		name: "Wask",
		website: "https://www.wask.co",
		description: "Wask is a platform that offers businesses a dedicated library code to analyse website visitors, track visitor behaviour, monitor website events, and gather retention cohort data effectively.",
		icon: "Wask.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "wask:pageGlobal:0",
				kind: "pageGlobal",
				property: "wask_analytics",
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
		id: "watchthem",
		name: "WatchThem",
		website: "https://watchthem.live",
		description: "WatchThem is a behavioural tool that allows website owners to view video recordings of their visitors' journeys on their website.",
		icon: "WatchThem.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "watchthem:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.watchthem\\.live/"),
				description: "Script source URL matches a known technology marker."
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
		id: "web-ceo",
		name: "Web CEO",
		website: "https://www.webceo.com",
		description: "Web CEO is an all-in-one platform offering tools for SEO, digital marketing, and performance analytics.",
		icon: "WebCEO.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "web-ceo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webceo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "web-ceo:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^WebCEO$"),
				description: "Meta tag matches a known technology marker."
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
		id: "weberlo",
		name: "Weberlo",
		website: "https://www.weberlo.com",
		description: "Weberlo is a platform that enables users to track their Return on Investment (ROI) and Return on Advertising Spend (ROAS).",
		icon: "Weberlo.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "weberlo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.weberlo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "webeyez",
		name: "Webeyez",
		website: "https://www.webeyez.com",
		description: "Webeyez is an ecommerce monitoring and analytics solution designed to assist teams in identifying, alerting, prioritising, and resolving operational and technical issues for revenue recovery.",
		icon: "Webeyez.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "webeyez:pageGlobal:0",
				kind: "pageGlobal",
				property: "___WEBEYEZ_CACHE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeyez:pageGlobal:1",
				kind: "pageGlobal",
				property: "___WEBEYEZ_REGISTER_ERROR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeyez:pageGlobal:2",
				kind: "pageGlobal",
				property: "webeyez_wzPageEntryKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeyez:pageGlobal:3",
				kind: "pageGlobal",
				property: "webeyezstartAll",
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
		id: "webmetric",
		name: "WebMetric",
		website: "https://webmetric.ir/",
		icon: "WebMetric.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "webmetric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.webmetric\\.ir"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webmetric:pageGlobal:1",
				kind: "pageGlobal",
				property: "_wmid",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webmetric:cookie:2",
				kind: "cookie",
				key: "_wmuid",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "webolead",
		name: "WeboLead",
		website: "https://www.webolead.com/",
		description: "WeboLead is an analytics tool designed to convert anonymous website visitors into qualified prospects by analysing user behaviour and providing actionable insights.",
		icon: "WeboLead.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "webolead:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webolead\\.com/"),
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
		id: "webolytics",
		name: "Webolytics",
		website: "https://www.webolytics.com",
		description: "Webolytics is an open API platform designed to track return on advertising spend.",
		icon: "Webolytics.svg",
		categories: [
			"analytics",
			"advertising-paid-media",
			"api-pattern"
		],
		rules: [
			{
				id: "webolytics:pageGlobal:0",
				kind: "pageGlobal",
				property: "webo_gtm_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webolytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "webo_gtm_label",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webolytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "webo_gtm_prefix",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webolytics:pageGlobal:3",
				kind: "pageGlobal",
				property: "webolytics_site_tag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webolytics:pageGlobal:4",
				kind: "pageGlobal",
				property: "webolytics_webhook_call",
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
		id: "webstat",
		name: "WebSTAT",
		website: "https://webstat.com",
		description: "WebSTAT is a web analytics platform designed to provide simplified tracking of website performance and visitor behavior.",
		icon: "WebSTAT.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "webstat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webstat\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "webtrends",
		name: "Webtrends",
		website: "https://worldwide.webtrends.com",
		icon: "Webtrends.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "webtrends:html:0",
				kind: "html",
				pattern: new RegExp("<img[^>]+id=\"DCSIMG\"[^>]+webtrends"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "webtrends:pageGlobal:1",
				kind: "pageGlobal",
				property: "WTOptimize",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webtrends:pageGlobal:2",
				kind: "pageGlobal",
				property: "WebTrends",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wildjar",
		name: "WildJar",
		website: "https://www.wildjar.com",
		description: "WildJar is a call tracking and intelligence platform which helps you understand where your leads are coming from, who is calling you, what your conversations are about and connect that data into other platforms.",
		icon: "WildJar.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "wildjar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trkcall\\.com/scripts"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "wipe-analytics",
		name: "Wipe Analytics",
		website: "https://wipe-analytics.de",
		description: "Wipe Analytics provides user behavior analysis for high-traffic and dynamically generated websites.",
		icon: "Wipe Analytics.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "wipe-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wipe\\.de/wwa\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"high"
			]
		}
	},
	{
		id: "wisetracker",
		name: "Wisetracker",
		website: "https://www.wisetracker.co.kr",
		description: "Wisetracker is a behavioral analytics and marketing automation tool.",
		icon: "Wisetracker.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "wisetracker:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.wisetracker\\.co\\.kr"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "wisetracker:pageGlobal:1",
				kind: "pageGlobal",
				property: "DOP_SDK_CONF.adClkEndPoint",
				valuePattern: new RegExp("\\.analytics\\.wisetracker\\.co\\.kr"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wisetracker:pageGlobal:2",
				kind: "pageGlobal",
				property: "DOT_ADCLK_ENDPOINT",
				valuePattern: new RegExp("\\.analytics\\.wisetracker\\.co\\.kr"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "wonder",
		name: "Wonder",
		website: "https://www.wonder-ma.com",
		description: "Wonder is an analytics and marketing tool that uses offline and online data to implement optimal marketing strategies aimed at achieving website goals, such as conversions.",
		icon: "Wonder.svg",
		categories: [
			"analytics",
			"marketing-automation"
		],
		rules: [
			{
				id: "wonder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wonder-ma\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wonder:pageGlobal:1",
				kind: "pageGlobal",
				property: "vmwondertracking",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "woopra",
		name: "Woopra",
		website: "https://www.woopra.com",
		description: "Woopra is a customer journey and product analytics software tool that helps businesses track user behavior and analyze customer interactions in real-time.",
		icon: "Woopra.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "woopra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.woopra\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "wp-statistics",
		name: "WP-Statistics",
		website: "https://wp-statistics.com",
		description: "WP-Statistics is a WordPress plugin which allows you to know your website statistics.",
		icon: "WP-Statistics.svg",
		categories: [
			"analytics",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "wp-statistics:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Analytics by WP-Statistics v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "wp-statistics:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/wp-statistics/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "wp-statistics:pageGlobal:2",
				kind: "pageGlobal",
				property: "WP_Statistics_http",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wp-statistics:pageGlobal:3",
				kind: "pageGlobal",
				property: "wps_statistics_object",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "xzero-analytics",
		name: "Xzero Analytics",
		website: "https://analytics.xzero.co.uk",
		description: "Xzero Analytics is a tool for monitoring user journeys, analysing visitor sessions, gathering heatmaps, and more, enabling the observation and evolution of site traffic.",
		icon: "XZeroAnalytics.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "xzero-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.xzero\\.co\\.uk"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xzero-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "xzero-analytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium"
			]
		}
	},
	{
		id: "yahoo-web-analytics",
		name: "Yahoo! Web Analytics",
		website: "https://web.analytics.yahoo.com",
		icon: "Yahoo.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "yahoo-web-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("d\\.yimg\\.com/mi/ywa\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yahoo-web-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "YWA",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yandex-metrika",
		name: "Yandex.Metrika",
		website: "https://metrika.yandex.com",
		description: "Yandex.Metrica is a free web analytics service that tracks and reports website traffic.",
		icon: "Yandex.Metrika.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "yandex-metrika:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mc\\.yandex\\.ru/metrika/(?:tag|watch)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yandex-metrika:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/npm/yandex\\-metrica\\-watch/watch\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yandex-metrika:pageGlobal:2",
				kind: "pageGlobal",
				property: "yandex_metrika",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yxper",
		name: "Yxper",
		website: "https://yxper.com",
		description: "Yxper is a platform that delivers real-time business analytics and insights to help organizations monitor performance, optimize operations, and enhance customer experience.",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "yxper:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.yxper\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zentap",
		name: "Zentap",
		website: "https://zentap.com",
		description: "Zentap is a real estate marketing platform designed to create and manage marketing campaigns, track leads, and measure results.",
		icon: "Zentap.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "zentap:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Zentap"),
				description: "Meta tag matches a known technology marker."
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
		id: "zipkin",
		name: "Zipkin",
		website: "https://zipkin.io/",
		icon: "Zipkin.png",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "zipkin:responseHeader:0",
				kind: "responseHeader",
				key: "X-B3-Flags",
				description: "Response header matches a known technology marker."
			},
			{
				id: "zipkin:responseHeader:1",
				kind: "responseHeader",
				key: "X-B3-ParentSpanId",
				description: "Response header matches a known technology marker."
			},
			{
				id: "zipkin:responseHeader:2",
				kind: "responseHeader",
				key: "X-B3-Sampled",
				description: "Response header matches a known technology marker."
			},
			{
				id: "zipkin:responseHeader:3",
				kind: "responseHeader",
				key: "X-B3-SpanId",
				description: "Response header matches a known technology marker."
			},
			{
				id: "zipkin:responseHeader:4",
				kind: "responseHeader",
				key: "X-B3-TraceId",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zoominfo",
		name: "Zoominfo",
		website: "https://www.zoominfo.com/",
		description: "ZoomInfo provides actionable B2B contact and company information for sales and marketing teams.",
		icon: "Zoominfo.svg",
		categories: [
			"analytics"
		],
		rules: [
			{
				id: "zoominfo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ws\\.zoominfo\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
