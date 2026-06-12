import type { TechnologyDefinition } from '../types';

export const marketingAutomationTechnologyDefinitions = [
	{
		id: "4-tell",
		name: "4-Tell",
		website: "https://4-tell.com",
		description: "4-Tell is an ecommerce software company for retailers with AI-powered personalisation and recommendations products.",
		icon: "4-Tell.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "4-tell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("4tellcdn\\.azureedge\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "4-tell:pageGlobal:1",
				kind: "pageGlobal",
				property: "_4TellBoost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "4-tell:cookie:2",
				kind: "cookie",
				key: "4Tell",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "4-tell:cookie:3",
				kind: "cookie",
				key: "4TellCart",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "4-tell:cookie:4",
				kind: "cookie",
				key: "4TellSession",
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
		id: "6sense",
		name: "6sense",
		website: "https://6sense.com",
		description: "6sense is a B2B predictive intelligence platform for marketing and sales.",
		icon: "6sense.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "6sense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.6sc\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "6sense:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.6sc\\.co/"),
				description: "Response header matches a known technology marker."
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
		id: "7moor",
		name: "7moor",
		website: "https://www.7moor.com",
		description: "7moor is an integrated customer service marketing solution that combines communication, customer support, and marketing tools.",
		icon: "7moor.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "7moor:pageGlobal:0",
				kind: "pageGlobal",
				property: "moor7Source",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "able-cdp",
		name: "Able CDP",
		website: "https://www.ablecdp.com",
		description: "Able CDP is a customer journey tracking system that monitors and analyzes user interactions across multiple touchpoints to provide insights into engagement and behavior.",
		icon: "AbleCDP.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "able-cdp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ablecdp\\.com"),
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
		id: "acquia-campaign-factory",
		name: "Acquia Campaign Factory",
		website: "https://www.acquia.com/products/marketing-cloud/campaign-factory",
		description: "Acquia Campaign Factory is centralized marketing management system powered by Mautic.",
		icon: "acquia-campaign-factory.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "acquia-campaign-factory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mautic\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-campaign-factory:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("maestro\\.mautic\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"mautic"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "acquia-customer-data-platform",
		name: "Acquia Customer Data Platform",
		website: "https://www.acquia.com/products/marketing-cloud/customer-data-platform",
		description: "Acquia Customer Data Platform (formerly AgilOne) is a customer data platform for Drupal.",
		icon: "acquia-cdp.png",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "acquia-customer-data-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/.+\\.agilone\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-customer-data-platform:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/scripts\\.agilone\\.com\\/latest\\/a1.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-customer-data-platform:dom:2",
				kind: "dom",
				selector: "[data-function*='Agilone']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-customer-data-platform:pageGlobal:3",
				kind: "pageGlobal",
				property: "$A1",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acquia-customer-data-platform:pageGlobal:4",
				kind: "pageGlobal",
				property: "$A1Config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acquia-customer-data-platform:pageGlobal:5",
				kind: "pageGlobal",
				property: "agiloneObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "act-on",
		name: "Act-On",
		website: "https://act-on.com",
		description: "Act-On is a cloud-based SaaS product for marketing automation.",
		icon: "Act-On.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "act-on:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/cdnr/\\d+/acton/bn/tracker/\\d+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "act-on:pageGlobal:1",
				kind: "pageGlobal",
				property: "ActOn",
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
		id: "actito",
		name: "Actito",
		website: "https://www.actito.com",
		description: "Actito is an agile SaaS marketing automation platform.",
		icon: "Actito.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "actito:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.actito\\.be"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "actito:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.advisor\\.smartfocus\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "actito:pageGlobal:2",
				kind: "pageGlobal",
				property: "_actGoal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "actito:pageGlobal:3",
				kind: "pageGlobal",
				property: "smartFocus",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "actito:cookie:4",
				kind: "cookie",
				key: "SmartFocus",
				description: "Cookie name matches a known technology marker."
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
		id: "activecampaign",
		name: "ActiveCampaign",
		website: "https://www.activecampaign.com",
		description: "ActiveCampaign is email and marketing automation software.",
		icon: "ActiveCampaign.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "activecampaign:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins/activecampaign-subscription-forms/site_tracking\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "activecampaign:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.activehosted\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "activecampaign:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app-us1\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "activecampaign:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ac-page\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "activecampaign:url:4",
				kind: "url",
				pattern: new RegExp("\\.activehosted\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "activecampaign:url:5",
				kind: "url",
				pattern: new RegExp("\\.ac-page\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "activecampaign:pageGlobal:6",
				kind: "pageGlobal",
				property: "acEnableTracking",
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
		id: "adabra",
		name: "Adabra",
		website: "https://www.adabra.com",
		description: "Adabra is a SaaS omnichannel marketing automation platform to help boost sales. Adabra allows you to manage user segmentation, create workflow and campaigns through email, social, SMS and more.",
		icon: "Adabra.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adabra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track\\.adabra\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adabra:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("my\\.adabra\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "adabra:pageGlobal:2",
				kind: "pageGlobal",
				property: "adabraPreview",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adabra:pageGlobal:3",
				kind: "pageGlobal",
				property: "adabra_version_panel",
				valuePattern: new RegExp("(^.+$)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adabra:pageGlobal:4",
				kind: "pageGlobal",
				property: "adabra_version_track",
				valuePattern: new RegExp("(^.+$)"),
				version: { source: "match", group: 1 },
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
		id: "adaptix",
		name: "Adaptix",
		website: "https://www.adaptix.ai",
		description: "Adaptix is a marketing automation platform that uses AI to help businesses create personalized customer experiences.",
		icon: "Adaptix.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adaptix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adaptix\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adaptix:pageGlobal:1",
				kind: "pageGlobal",
				property: "AdaptixFormValidations",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adaptix:pageGlobal:2",
				kind: "pageGlobal",
				property: "AdaptixLang",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adaptix:pageGlobal:3",
				kind: "pageGlobal",
				property: "AdaptixSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adaptix:pageGlobal:4",
				kind: "pageGlobal",
				property: "AdaptixSDKLoaded",
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
		id: "adenzo",
		name: "Adenzo",
		website: "https://www.adenzo.com",
		description: "Adenzo is a B2B sales and marketing platform for managing customer relationships, automating outreach, and analyzing performance to support lead generation and sales operations.",
		icon: "Adenzo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adenzo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("live\\.adenzo\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "adenzo:pageGlobal:1",
				kind: "pageGlobal",
				property: "AdenzoTrack",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adenzo:pageGlobal:2",
				kind: "pageGlobal",
				property: "adenzo_contact_id",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adnymics",
		name: "Adnymics",
		website: "https://adnymics.com",
		description: "Adnymics is a platform that enables personalization in ecommerce by tailoring content, recommendations, and experiences to individual users based on their behavior and preferences.",
		icon: "Adnymics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adnymics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trac\\.adnymics\\.com"),
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
		id: "adobe-audience-manager",
		name: "Adobe Audience Manager",
		website: "https://business.adobe.com/products/audience-manager/adobe-audience-manager.html",
		description: "Adobe Audience Manager is a versatile audience data management platform.",
		icon: "Adobe.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adobe-audience-manager:cookie:0",
				kind: "cookie",
				key: "Demdex",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "adobe-audience-manager:cookie:1",
				kind: "cookie",
				key: "aam_uuid",
				description: "Cookie name matches a known technology marker."
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
		id: "adobe-experience-platform-identity-service",
		name: "Adobe Experience Platform Identity Service",
		website: "https://docs.adobe.com/content/help/en/id-service/using/home.html",
		description: "Adobe Experience Platform Identity Service creates identity graphs that hold customer profiles and the known identifiers that belong to individual consumers.",
		icon: "Adobe.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:0",
				kind: "pageGlobal",
				property: "s_c_il.0._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:1",
				kind: "pageGlobal",
				property: "s_c_il.1._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:2",
				kind: "pageGlobal",
				property: "s_c_il.2._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:3",
				kind: "pageGlobal",
				property: "s_c_il.3._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:4",
				kind: "pageGlobal",
				property: "s_c_il.4._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-experience-platform-identity-service:pageGlobal:5",
				kind: "pageGlobal",
				property: "s_c_il.5._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "adoric",
		name: "Adoric",
		website: "https://adoric.com",
		description: "Adoric is a lead generation tool for personalized website engagement and conversion optimisation (CRO) platform.",
		icon: "Adoric.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adoric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.adoric-om\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adoric:dom:1",
				kind: "dom",
				selector: "link[href*='.adoric-om.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adoric:pageGlobal:2",
				kind: "pageGlobal",
				property: "IS_ADORIC_LOADED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adoric:pageGlobal:3",
				kind: "pageGlobal",
				property: "__adoric__",
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
		id: "adtriba",
		name: "Adtriba",
		website: "https://funnel.io/adtriba",
		description: "Adtriba is a platform that captures all marketing touchpoints and calculates the profitability of each campaign using big data technology and AI.",
		icon: "Adtriba.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "adtriba:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.adtriba\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "agentfire",
		name: "AgentFire",
		website: "https://agentfire.com",
		description: "AgentFire is a platform designed for the real estate industry, offering tools and features that help agents capitalize on digital opportunities for marketing, lead generation, and client engagement.",
		icon: "AgentFire.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "agentfire:pageGlobal:0",
				kind: "pageGlobal",
				property: "AgentFire.Api",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "agentfire:pageGlobal:1",
				kind: "pageGlobal",
				property: "AgentFire_Oauth2",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "agentfire:pageGlobal:2",
				kind: "pageGlobal",
				property: "AgentFire_Settings",
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
		id: "agillic",
		name: "Agillic",
		website: "https://agillic.com",
		description: "Agillic is a Nordic marketing automation platform that delivers scalable, personalized campaigns while ensuring operational efficiency and full GDPR compliance.",
		icon: "Agillic.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "agillic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.agilliccdn\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "agillic:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.agillic\\.eu"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ahrefs",
		name: "Ahrefs",
		website: "https://ahrefs.com",
		description: "Ahrefs is an online toolset utilised for search engine optimisation (SEO) and competitor analysis, which permits users to analyse their website's performance, track keyword rankings, identify backlink opportunities, and research competitors' websites, among other features.",
		icon: "ahrefs.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "ahrefs:meta:0",
				kind: "meta",
				key: "ahrefs-site-verification",
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"mid"
			]
		}
	},
	{
		id: "ai-log",
		name: "AI LOG",
		website: "https://www.ai-log.biz/",
		description: "AI LOG is a marketing automation and fraud click prevention tool.",
		icon: "AI-LOG.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ai-log:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ai-log\\.biz/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ai-log:pageGlobal:1",
				kind: "pageGlobal",
				property: "ai_getScript_load",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aimbase",
		name: "Aimbase",
		website: "https://aimbase.com",
		description: "Aimbase is a marketing automation platform designed to streamline campaign management, customer engagement, and data-driven decision-making.",
		icon: "Aimbase.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "aimbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ws\\.aimbase\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aimbase:pageGlobal:1",
				kind: "pageGlobal",
				property: "Aimbase.Analytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aimerce",
		name: "Aimerce",
		website: "https://www.aimerce.ai/",
		description: "Aimerce is an AI-powered, privacy-focused solution that utilises first-party data to support Shopify brands in a cookieless environment, enhancing data potential and increasing marketing revenue.",
		icon: "Aimerce.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "aimerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aimerce\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aimerce:pageGlobal:1",
				kind: "pageGlobal",
				property: "AimerceAnalytics",
				description: "Page-owned global matches a known technology marker."
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
		id: "aimtell",
		name: "Aimtell",
		website: "https://aimtell.com",
		description: "Aimtell is a cloud-hosted marketing platform that allows digital marketers and businesses to deliver web-based push notifications.",
		icon: "Aimtell.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "aimtell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aimtell\\.\\w+/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aimtell:pageGlobal:1",
				kind: "pageGlobal",
				property: "_aimtellLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aimtell:pageGlobal:2",
				kind: "pageGlobal",
				property: "_aimtellPushToken",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aimtell:pageGlobal:3",
				kind: "pageGlobal",
				property: "_aimtellWebhook",
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
		id: "airship",
		name: "Airship",
		website: "https://www.airship.com",
		description: "Airship is an American company that provides marketing and branding services. Airship allows companies to generate custom messages to consumers via push notifications, SMS messaging, and similar, and provides customer analytics services.",
		icon: "Airship.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "airship:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("urbanairship\\.\\w+/notify/v([\\d.]+)"),
				version: { source: "match", group: 1 },
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
		id: "aitrillion",
		name: "AiTrillion",
		website: "https://www.aitrillion.com",
		description: "AiTrillion is a marketing automation platform for ecommerce, offering tools for email campaigns, customer segmentation, loyalty programs, and product recommendations.",
		icon: "AiTrillion.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "aitrillion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aitrillion\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aitrillion:pageGlobal:1",
				kind: "pageGlobal",
				property: "aioAccessModule",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aitrillion:pageGlobal:2",
				kind: "pageGlobal",
				property: "aioMeta.meta_e",
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
		id: "akero",
		name: "Akero",
		website: "https://akerolabs.com",
		description: "Akero is a platform that provides marketing and admissions technology designed for educational institutions.",
		icon: "Akero.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "akero:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.akerolabs\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aklamio",
		name: "Aklamio",
		website: "https://www.aklamio.com",
		description: "Aklamio is a solution for enterprise level referral marketing and customer incentivisation.",
		icon: "Aklamio.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "aklamio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aklamio\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aklamio:dom:1",
				kind: "dom",
				selector: "a[href*='.aklamio.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "aklamio:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.aklamio\\.com"),
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
		id: "alimama",
		name: "Alimama",
		website: "https://www.alimama.com",
		description: "Alimama is a data-driven marketing technology platform that enables businesses to optimize campaigns and audience engagement through advanced analytics.",
		icon: "Alimama.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "alimama:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alimama\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alimama:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.alimama\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "all-in-one-seo",
		name: "All in One SEO",
		website: "https://aioseo.com",
		description: "All in One SEO optimizes a WordPress website and its content for search engines.",
		icon: "AIOSEO.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "all-in-one-seo:html:0",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo ([\\d.]+) "),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "all-in-one-seo:html:1",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo pack ([\\d.]+) "),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "all-in-one-seo:html:2",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo pro ([\\d.]+) "),
				version: { source: "match", template: "pro $1" },
				description: "HTML contains a known technology marker."
			},
			{
				id: "all-in-one-seo:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^all in one seo \\(aioseo\\) ([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:aioseo:all_in_one_seo:*:*:*:*:*:wordpress:*:*"
		}
	},
	{
		id: "all-in-one-seo-pack",
		name: "All in One SEO Pack",
		website: "https://aioseo.com",
		description: "All in One SEO plugin optimizes WordPress website and its content for search engines.",
		icon: "AIOSEO.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "all-in-one-seo-pack:html:0",
				kind: "html",
				pattern: new RegExp("<!-- All in One SEO Pack ([\\d.]+) "),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "all-in-one-seo-pack:dom:1",
				kind: "dom",
				selector: "script.aioseo-schema",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "all-in-one-seo-pack:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^All in One SEO \\(AIOSEO\\)\\s([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			],
			cpe: "cpe:2.3:a:aioseo:all_in_one_seo:*:*:*:*:*:wordpress:*:*"
		}
	},
	{
		id: "allclients",
		name: "AllClients",
		website: "https://allclients.com",
		description: "AllClients is an all-in-one platform that integrates contact management and marketing automation.",
		icon: "AllClients.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "allclients:dom:0",
				kind: "dom",
				selector: "form[action*='www.allclients.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "allclients:dom:1",
				kind: "dom",
				selector: "iframe[href*='www.allclients.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "alli",
		name: "Alli",
		website: "https://www.alliai.com",
		description: "Alli is artificial intelligence for search engine optimisation.",
		icon: "Alli.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "alli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alliai\\.com/"),
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
		id: "alohome",
		name: "Alohome",
		website: "https://en.alohome.io",
		description: "Alohome is a tech platform designed to enhance real estate sales conversions.",
		icon: "Alohome.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "alohome:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.alohome\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ambassador",
		name: "Ambassador",
		website: "https://www.getambassador.com",
		description: "Ambassador is a marketer-friendly software that simplifies referral marketing and helps automating the enrolment, tracking, rewarding and management process.",
		icon: "Ambassador.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ambassador:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getambassador\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ambassador:pageGlobal:1",
				kind: "pageGlobal",
				property: "_mbsy.integrations",
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
		id: "amped",
		name: "Amped",
		website: "https://www.amped.io",
		description: "Amped is a popup tool designed for growth, enabling email and SMS popups to capture leads and engage users.",
		icon: "Amped.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "amped:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.amped\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "amped:dom:1",
				kind: "dom",
				selector: "link[href*='app.amped.io']",
				description: "DOM selector matches a known technology marker."
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
		id: "ampry",
		name: "Ampry",
		website: "https://www.ampry.com",
		description: "Ampry is a client acquisition marketing service designed to support law firms in expanding their reach and acquiring new clients.",
		icon: "Ampry.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ampry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ampry\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ampry:pageGlobal:1",
				kind: "pageGlobal",
				property: "ampry_acc_code",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ampry:pageGlobal:2",
				kind: "pageGlobal",
				property: "ampry_script",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "angler-ai",
		name: "Angler AI",
		website: "https://www.getangler.ai",
		description: "Angler AI is a platform that helps direct-to-consumer brands improve prospecting strategies and increase customer lifetime value through data-driven insights.",
		icon: "Angler.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "angler-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.getangler\\.ai"),
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
		id: "antsomi-cdp-365",
		name: "Antsomi CDP 365",
		website: "https://www.antsomi.com",
		description: "Antsomi CDP 365 is a AI-enabled customer data platform from Southeast Asia.",
		icon: "Antsomi.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "antsomi-cdp-365:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdp\\.asia/"),
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
		id: "apptus",
		name: "Apptus",
		website: "https://www.apptus.com",
		description: "Apptus is an AI-powered ecommerce optimisation software provider.",
		icon: "Apptus.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "apptus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.esales\\.apptus\\.com.+(?:apptus-esales-api-([\\d.]+))\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "apptus:pageGlobal:1",
				kind: "pageGlobal",
				property: "ApptusEsales",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apptus:pageGlobal:2",
				kind: "pageGlobal",
				property: "apptusConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apptus:pageGlobal:3",
				kind: "pageGlobal",
				property: "apptusDebug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apptus:cookie:4",
				kind: "cookie",
				key: "apptus.customerKey",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "apptus:cookie:5",
				kind: "cookie",
				key: "apptus.sessionKey",
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
		id: "aptania",
		name: "Aptania",
		website: "https://www.aptania.com",
		description: "Aptania is an all-in-one customer data platform that provides web analytics, lead generation, and customer insights in a single system.",
		icon: "Aptania.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "aptania:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.aptania\\.com/"),
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
		id: "artplacer",
		name: "ArtPlacer",
		website: "https://www.artplacer.com",
		description: "ArtPlacer is a marketing tool designed to support growth in art businesses by enhancing visibility and promotional efforts.",
		icon: "Artplacer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "artplacer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("shop-app\\.artplacer\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "artplacer:cookie:1",
				kind: "cookie",
				key: "artplacer_session",
				description: "Cookie name matches a known technology marker."
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
		id: "asapp",
		name: "Asapp",
		website: "https://www.asapp.com",
		description: "Asapp is a platform that guides agents in providing responses to queries using AI technology.",
		icon: "Asapp.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "asapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.asapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "asapp:pageGlobal:1",
				kind: "pageGlobal",
				property: "ASAPP.Host",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "atomseo",
		name: "Atomseo",
		website: "https://atomseo.com",
		description: "Atomseo is a tool designed to improve website performance by reducing user bounce rates and enhancing search engine visibility.",
		icon: "Atomseo.svg",
		categories: [
			"marketing-automation",
			"developer-tooling"
		],
		rules: [
			{
				id: "atomseo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.atomseo\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "atomseo:dom:1",
				kind: "dom",
				selector: "link[href*='.atomseo.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "attentive",
		name: "Attentive",
		website: "https://www.attentivemobile.com",
		description: "Attentive is a personalised mobile messaging platform that helps retail & ecommerce brands acquire, retain, and interact with mobile shoppers.",
		icon: "Attentive.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "attentive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attn\\.tv"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "attentive:pageGlobal:1",
				kind: "pageGlobal",
				property: "__attentive",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "attentive:pageGlobal:2",
				kind: "pageGlobal",
				property: "__attentive_domain",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "attentive:pageGlobal:3",
				kind: "pageGlobal",
				property: "attn_email_save",
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
		id: "attracta",
		name: "Attracta",
		website: "https://www.attracta.com",
		description: "Attracta is a platform offering SEO tools designed to optimize website visibility and improve search engine rankings.",
		icon: "Attracta.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "attracta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attracta\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "attractroi",
		name: "AttractROI",
		website: "https://attractroi.com",
		description: "AttractROI is a service that provides tools and resources to help businesses convert potential customers into loyal clients.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "attractroi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.attractroi\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "auto-hq",
		name: "Auto HQ",
		website: "https://www.autohq.co.uk",
		description: "Auto HQ is a provider of custom car dealer websites and SEO services designed to enhance visibility and attract customers.",
		icon: "AutoHQ.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "auto-hq:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.autohq\\.co\\.uk"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "autoketing",
		name: "Autoketing",
		website: "https://autoketing.com",
		description: "Autoketing is a marketing automation platform.",
		icon: "Autoketing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [],
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
		id: "automated-growth",
		name: "Automated Growth",
		website: "https://automatedgrowthagency.com",
		description: "Automated Growth is a platform offering AI and automation tools designed to streamline business operations.",
		icon: "AutomatedGrowth.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "automated-growth:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.automatedgrowthagency\\.com"),
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
		id: "automatewoo",
		name: "AutomateWoo",
		website: "https://automatewoo.com",
		description: "AutomateWoo is a marketing automation plugin for WooCommerce that enables online stores to create automated workflows for emails, follow-ups, and customer engagement.",
		icon: "AutomateWoo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "automatewoo:dom:0",
				kind: "dom",
				selector: "link#automatewoo-birthdays-css",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "automatewoo:pageGlobal:1",
				kind: "pageGlobal",
				property: "automatewoo_presubmit_params",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"woocommerce"
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
		id: "automatic-members",
		name: "Automatic Members",
		website: "https://automaticmembers.com",
		description: "Automic Members is an all-in-one marketing platform for fitness businesses.",
		icon: "AutomaticMembers.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "automatic-members:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app.automaticmembers.com"),
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
		id: "automaticsales",
		name: "AutomaticSales",
		website: "https://automaticsales.ai",
		description: "AutomaticSales is a platform that centralizes marketing tools, offering unlimited sales funnels, email, SMS, web chat, and additional features in one system.",
		icon: "AutomaticSales.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "automaticsales:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.automaticsales\\.ai"),
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
		id: "automizely",
		name: "Automizely",
		website: "https://www.automizely.com/marketing",
		description: "Automizely creates and manages enterprise-level marketing automation systems including contact and CRM mappings, lead funnels, email nurture, lead-generating pages, and blog posts, and website integrations.",
		icon: "Automizely.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "automizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.automizely\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "automizely:pageGlobal:1",
				kind: "pageGlobal",
				property: "AM_CONSENT_SDK.product",
				valuePattern: new RegExp("automizely"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "automizely:pageGlobal:2",
				kind: "pageGlobal",
				property: "amStorefrontKit.hRequestEventTarget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "automizely:pageGlobal:3",
				kind: "pageGlobal",
				property: "automizelyConversions",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "autopilot",
		name: "Autopilot",
		website: "https://www.autopilothq.com",
		description: "Autopilot is a visual marketing software that enables users to create marketing campaigns and manage lead conversions. ",
		icon: "Autopilot.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
			"email-messaging"
		],
		rules: [
			{
				id: "autopilot:pageGlobal:0",
				kind: "pageGlobal",
				property: "Autopilot",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "autopilot:pageGlobal:1",
				kind: "pageGlobal",
				property: "AutopilotAnywhere",
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
		id: "avidai",
		name: "AvidAI",
		website: "https://www.getavid.ai",
		description: "AvidAI is a marketing platform that uses artificial intelligence to convert digital window-shoppers through automated campaigns, A/B testing, and personalized content optimization.",
		icon: "AvidAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "avidai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.getavid\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aweber",
		name: "Aweber",
		website: "https://www.aweber.com",
		description: "AWeber is an email marketing service.",
		icon: "Aweber.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "aweber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aweber\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aweber:dom:1",
				kind: "dom",
				selector: "form[action*='aweber.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "aweber:pageGlobal:2",
				kind: "pageGlobal",
				property: "awt_analytics",
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
		id: "banana-splash",
		name: "Banana Splash",
		website: "https://www.banana-splash.com",
		description: "Banana Splash is a mobile lead generation system designed to help businesses attract and capture potential customer information.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "banana-splash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.banana-splash\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "banana-splash:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("my\\.banana-splash\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bandwango",
		name: "Bandwango",
		website: "https://www.bandwango.com",
		description: "Bandwango is a platform that boosts community revenue by promoting local businesses and attractions while tracking visitor interactions to support economic growth.",
		icon: "Bandwango.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "bandwango:dom:0",
				kind: "dom",
				selector: "a[href*='www.bandwango.com'] > img[src*='app.bandwango.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bant",
		name: "Bant",
		website: "https://bant.io",
		description: "Bant is a B2B lead generation platform that automates client prospecting and engagement to streamline business development processes.",
		icon: "Bant.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bant:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.bant\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "barilliance",
		name: "Barilliance",
		website: "https://www.barilliance.com",
		description: "Barilliance is an ecommerce personalisation tools including cart abandonment emails, personalised product recommendations, onsite personalisation, and live notifications.",
		icon: "Barilliance.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "barilliance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.barilliance\\.net/"),
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
		id: "batch",
		name: "Batch",
		website: "https://batch.com",
		description: "Batch is a web-push notifications technology provider.",
		icon: "Batch.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "batch:pageGlobal:0",
				kind: "pageGlobal",
				property: "batchSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "batch:pageGlobal:1",
				kind: "pageGlobal",
				property: "batchSDKUIConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "batch:pageGlobal:2",
				kind: "pageGlobal",
				property: "reregisterBatchPushIfNeeded",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bazaarvoice-curation",
		name: "Bazaarvoice Curation",
		website: "https://www.bazaarvoice.com/products/visual-and-social-content/",
		description: "Bazaarvoice Curation is a content curation service Bazaarvoice provides post it's acquisition of Curalate.",
		icon: "Bazaarvoice.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "bazaarvoice-curation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("edge\\.curalate\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bazaarvoice-curation:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.curalate\\.com"),
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
		id: "beacons",
		name: "Beacons",
		website: "https://beacons.ai",
		description: "Beacons is an AI-powered creator platform that enables selling through a creator store, building an email marketing strategy, and securing brand deals in one place.",
		icon: "Beacons.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "beacons:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.beacons\\.ai"),
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
		id: "beam-impact",
		name: "Beam Impact",
		website: "https://www.beamimpact.com",
		description: "Beam Impact is a marketing platform that provides end-to-end solutions designed to support consumer-focused campaigns.",
		icon: "BeamImpact.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "beam-impact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.beamimpact\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "beam-impact:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.beamimpact\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "beeketing",
		name: "Beeketing",
		website: "https://beeketing.com",
		description: "Beeketing is a suite of marketing apps for ecommerce shop owners.",
		icon: "Beeketing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "beeketing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.beeketing\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "beeketing:pageGlobal:1",
				kind: "pageGlobal",
				property: "beeketingAnalyticsParams",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "beeketing:pageGlobal:2",
				kind: "pageGlobal",
				property: "beeketingSDKLoaded",
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
		id: "bench",
		name: "Bench",
		website: "https://benchmedia.com",
		description: "Bench is a provider of omnichannel programmatic media and performance marketing solutions.",
		icon: "Bench.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bench:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.benchplatform\\.com/"),
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
		id: "bento",
		name: "Bento",
		website: "https://bentonow.com",
		description: "Bento is an email marketing and automation platform designed for startups.",
		icon: "Bento.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "bento:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bentonow\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bento:pageGlobal:1",
				kind: "pageGlobal",
				property: "bento.identify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bento:pageGlobal:2",
				kind: "pageGlobal",
				property: "bento_wordpress_sdk_params",
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
		id: "beyable",
		name: "Beyable",
		website: "https://beyable.com",
		description: "Beyable is a suite of tools that analyze website traffic to understand visitors' behaviors in real-time, through multi-channel in order to optimise conversion rate.",
		icon: "Beyable.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "beyable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("msecnd\\.net/api/beYableJSv(\\d+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "beyable:pageGlobal:1",
				kind: "pageGlobal",
				property: "BEYABLE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "beyable:pageGlobal:2",
				kind: "pageGlobal",
				property: "beYableDomain",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "beyable:pageGlobal:3",
				kind: "pageGlobal",
				property: "beYableKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "beyable:cookie:4",
				kind: "cookie",
				key: "beyable-cart",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "beyable:cookie:5",
				kind: "cookie",
				key: "beyable-cartd",
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
		id: "birdeye",
		name: "Birdeye",
		website: "https://birdeye.com",
		description: "Birdeye is an all-in-one customer experience platform.",
		icon: "Birdeye.svg",
		categories: [
			"marketing-automation",
			"widgets-misc"
		],
		rules: [
			{
				id: "birdeye:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("birdeye\\.com/embed"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "birdeye:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("birdeye\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "birdeye:pageGlobal:2",
				kind: "pageGlobal",
				property: "bfiframe",
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
		id: "black-crow",
		name: "Black Crow",
		website: "https://www.blackcrow.ai",
		description: "Blackcrow is a platform that analyzes data to improve conversion funnels using AI-driven insights and automated actions.",
		icon: "BlackCrow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "black-crow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blackcrow\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "black-crow:pageGlobal:1",
				kind: "pageGlobal",
				property: "blackcrow.BUILD_NUMBER",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "black-crow:pageGlobal:2",
				kind: "pageGlobal",
				property: "blackcrowpreconnected",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "blendee",
		name: "Blendee",
		website: "https://www.blendee.com",
		description: "Blendee is a marketing automation platform that streamlines campaign management and performance tracking across digital channels.",
		icon: "Blendee.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "blendee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.blendee\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bloghunch",
		name: "BlogHunch",
		website: "https://bloghunch.com",
		description: "BlogHunch is a content optimization platform that uses data-driven insights to help produce search-optimized articles designed to improve rankings and conversion performance with minimal manual effort.",
		icon: "BlogHunch.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bloghunch:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.bloghunch\\.test/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "bloghunch:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^BlogHunch$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bloom-labs",
		name: "Bloom Labs",
		website: "https://bloom.li",
		description: "Bloom Labs is a local content targeting system that uses data analytics to distribute content based on geographic relevance.",
		icon: "Bloom.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bloom-labs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bloom\\.li/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "blotout-edgetag",
		name: "Blotout EdgeTag",
		website: "https://blotout.io",
		description: "Blotout EdgeTag is a technology provided by Blotout that tackles the effects of privacy changes on C-API signals by reconstructing signals around a lifetime ID, allowing for real-time remarketing of site visits.",
		icon: "Blotout.svg",
		categories: [
			"marketing-automation",
			"api-pattern"
		],
		rules: [
			{
				id: "blotout-edgetag:pageGlobal:0",
				kind: "pageGlobal",
				property: "edgetag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blotout-edgetag:pageGlobal:1",
				kind: "pageGlobal",
				property: "edgetagProviders",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "blue-corona",
		name: "Blue Corona",
		website: "https://www.bluecorona.com",
		description: "Blue Corona is a provider of digital strategies and marketing systems designed to support the promotion and management of commercial services.",
		icon: "BlueCorona.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "blue-corona:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("reports\\.bluecorona\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bluebarry",
		name: "bluebarry",
		website: "https://bluebarry.ai",
		description: "bluebarry is a tool that helps increase customer retention by guiding shoppers to relevant products.",
		icon: "bluebarry.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bluebarry:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bluebarrycdn\\.blob\\.core"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "bluebarry:pageGlobal:1",
				kind: "pageGlobal",
				property: "barry.baseUrl",
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
		id: "blueconic",
		name: "BlueConic",
		website: "https://www.blueconic.com",
		description: "BlueConic is the advanced customer data platform that liberates companies' first-party data from disparate systems.",
		icon: "BlueConic.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "blueconic:pageGlobal:0",
				kind: "pageGlobal",
				property: "BlueConicEngagement",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blueconic:pageGlobal:1",
				kind: "pageGlobal",
				property: "blueConicClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blueconic:pageGlobal:2",
				kind: "pageGlobal",
				property: "blueConicPreListeners",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blueconic:pageGlobal:3",
				kind: "pageGlobal",
				property: "loadValuesFromBlueConic",
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
		id: "bluecore",
		name: "Bluecore",
		website: "https://www.bluecore.com",
		description: "Bluecore is a retail marketing technology that uses data gained from direct marketing like email, social media, site activity.",
		icon: "Bluecore.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "bluecore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bluecore\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bluecore:pageGlobal:1",
				kind: "pageGlobal",
				property: "_bluecoreTrack",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bluecore:pageGlobal:2",
				kind: "pageGlobal",
				property: "bluecore_action_trigger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bluecore:pageGlobal:3",
				kind: "pageGlobal",
				property: "triggermail",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bluecore:pageGlobal:4",
				kind: "pageGlobal",
				property: "triggermail_email_address",
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
		id: "blueknow",
		name: "Blueknow",
		website: "https://www.blueknow.com",
		description: "Blueknow is a ecommerce personalisation software designed to serve enterprises, SMEs.",
		icon: "Blueknow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "blueknow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blueknow\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blueknow:pageGlobal:1",
				kind: "pageGlobal",
				property: "Blueknow",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blueknow:pageGlobal:2",
				kind: "pageGlobal",
				property: "BlueknowTracker",
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
		id: "boberdoo",
		name: "Boberdoo",
		website: "https://www.boberdoo.com",
		description: "Boberdoo is a performance marketing software platform that connects buyers and sellers in real time, enabling scalable lead distribution and transaction management.",
		icon: "Boberdoo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "boberdoo:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.boberdoo.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "boei",
		name: "Boei",
		website: "https://boei.help",
		description: "Boei is a platform that uses AI to capture leads and engage website visitors.",
		icon: "Boei.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "boei:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.boei\\.help"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "boei:pageGlobal:1",
				kind: "pageGlobal",
				property: "Boei",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "boei:pageGlobal:2",
				kind: "pageGlobal",
				property: "BoeiWidget",
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
		id: "bold-commerce",
		name: "Bold Commerce",
		website: "https://boldcommerce.com",
		description: "Bold Commerce is a software company that specialises in ecommerce websites and app development.",
		icon: "Bold.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bold-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boldapps\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bold-commerce:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boldcommerce\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"low",
				"poa"
			]
		}
	},
	{
		id: "boomtime",
		name: "boomtime",
		website: "https://www.boomtime.com",
		description: "boomtime is a full-service digital marketing platform.",
		icon: "boomtime.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "boomtime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boomtime\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "boomtime:dom:1",
				kind: "dom",
				selector: "form[action*='.boomtime.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bothive",
		name: "Bothive",
		website: "https://bothive.be",
		description: "Bothive is a platform that automates repetitive tasks, enhances collaboration, reduces email reliance, and improves customer relationships by prioritizing meaningful interactions.",
		icon: "Bothive.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bothive:pageGlobal:0",
				kind: "pageGlobal",
				property: "Bothive.widget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bounce-commerce",
		name: "Bounce Commerce",
		website: "https://www.bounce-commerce.de",
		description: "Bounce Commerce is a provider of AI-based engagement solutions that enhance conversion rates by assisting customers in finding the right products.",
		icon: "BounceCommerce.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bounce-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bounce-commerce\\.de"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bounce-commerce:pageGlobal:1",
				kind: "pageGlobal",
				property: "baBounceManagement",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bounce-commerce:pageGlobal:2",
				kind: "pageGlobal",
				property: "bavBounceManagement",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bownow",
		name: "BowNow",
		website: "https://bow-now.jp",
		description: "BowNow is a marketing automation tool with business card management, sales support, analysis, and email magazine functions.",
		icon: "BowNow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "bownow:pageGlobal:0",
				kind: "pageGlobal",
				property: "_bownow_ts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bownow:cookie:1",
				kind: "cookie",
				key: "bownow_act",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "bownow:cookie:2",
				kind: "cookie",
				key: "bownow_aid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "bownow:cookie:3",
				kind: "cookie",
				key: "bownow_cid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "bownow:cookie:4",
				kind: "cookie",
				key: "bownow_mbid",
				description: "Cookie name matches a known technology marker."
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
		id: "brafton",
		name: "Brafton",
		website: "https://www.brafton.com",
		description: "Brafton is a creative content marketing platform that provides services for content strategy, creation, and distribution to help organizations engage audiences and support digital marketing efforts.",
		icon: "Brafton.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brafton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brafton\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "brainlead",
		name: "Brainlead",
		website: "https://brainlead.it",
		description: "Brainlead is a marketing automation software.",
		icon: "Brainlead.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brainlead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.brainlead\\.it"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "brainsins",
		name: "BrainSINS",
		website: "https://brainsins.com",
		description: "BrainSINS is a personalisation technology and ecommerce analytics services to online retailers.",
		icon: "BrainSINS.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brainsins:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mw\\.brainsins\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brainsins:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cloudfront\\.net/brainsins(?:_v)?(\\d+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brainsins:pageGlobal:2",
				kind: "pageGlobal",
				property: "BrainSINS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brainsins:pageGlobal:3",
				kind: "pageGlobal",
				property: "BrainSINSRecommender",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brainsins:pageGlobal:4",
				kind: "pageGlobal",
				property: "brainsins_token",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brainsins:pageGlobal:5",
				kind: "pageGlobal",
				property: "launchBrainSINS",
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
		id: "branch",
		name: "Branch",
		website: "https://branch.io",
		description: "Branch is a mobile deep linking system to increase engagement and retention.",
		icon: "Branch.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "branch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.branch\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "branch:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.link/_r\\?sdk=web([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "branch:pageGlobal:2",
				kind: "pageGlobal",
				property: "branch.setBranchViewData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "branch:pageGlobal:3",
				kind: "pageGlobal",
				property: "branch_callback__0",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"freemium"
			]
		}
	},
	{
		id: "brandbuilderai",
		name: "BrandBuilderAI",
		website: "https://brandbuilderai.com",
		description: "BrandBuilderAI is an all-in-one system designed to automate marketing and lead generation processes.",
		icon: "BrandBuilderAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brandbuilderai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.brandbuilderai\\.com"),
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
		id: "braze",
		name: "Braze",
		website: "https://www.braze.com",
		description: "Braze is a customer engagement platform that delivers messaging experiences across push, email, in-product, and more.",
		icon: "Braze.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "braze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.appboycdn\\.com/web-sdk/([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "braze:pageGlobal:1",
				kind: "pageGlobal",
				property: "appboy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "braze:pageGlobal:2",
				kind: "pageGlobal",
				property: "appboyQueue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "braze:pageGlobal:3",
				kind: "pageGlobal",
				property: "braze.BrazeSdkMetadata",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "braze:pageGlobal:4",
				kind: "pageGlobal",
				property: "brazeQueue",
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
		id: "bread-and-butter",
		name: "Bread & Butter",
		website: "https://breadbutter.io",
		description: "Bread & Butter is a platform that offers a first-party data CDP for lead generation.",
		icon: "BreadButter.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "bread-and-butter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.breadbutter\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bread-and-butter:pageGlobal:1",
				kind: "pageGlobal",
				property: "BreadButter.breadbutter",
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
		id: "breinify",
		name: "Breinify",
		website: "https://home.breinify.ai",
		description: "Breinify is a powerful personalisation engine that enables brands to create personalised digital experiences at an individual level across web, e-mail, SMS and app channels.",
		icon: "Breinify.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "breinify:pageGlobal:0",
				kind: "pageGlobal",
				property: "Breinify.version",
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
		id: "brightedge",
		name: "BrightEdge",
		website: "https://www.brightedge.com",
		description: "BrightEdge is an SEO solution and content performance marketing platform.",
		icon: "BrightEdge.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brightedge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brightedge\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brightedge:pageGlobal:1",
				kind: "pageGlobal",
				property: "BEJSSDK.CLIENT_VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brightedge:pageGlobal:2",
				kind: "pageGlobal",
				property: "_bright3.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brightedge:pageGlobal:3",
				kind: "pageGlobal",
				property: "be_sdk_options",
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
		id: "brightinfo",
		name: "BrightInfo",
		website: "https://www.brightinfo.com",
		description: "BrightInfo is an automated content personalisation solution.",
		icon: "BrightInfo.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "brightinfo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.brightinfo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brightinfo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_BI_",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brightinfo:pageGlobal:2",
				kind: "pageGlobal",
				property: "_biq",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "brightinfo:pageGlobal:3",
				kind: "pageGlobal",
				property: "biJsUrl",
				valuePattern: new RegExp("//app\\.brightinfo\\.com"),
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
		id: "brightlocal",
		name: "BrightLocal",
		website: "https://www.brightlocal.com",
		description: "BrightLocal is an all-in-one local SEO dashboard for websites.",
		icon: "BrightLocal.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "brightlocal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brightlocal\\.com/"),
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
		id: "bronto",
		name: "Bronto",
		website: "https://bronto.com",
		description: "Bronto is a cloud-based email marketing automation software.",
		icon: "Bronto.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "bronto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:snip|cdn)\\.bronto\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bronto:pageGlobal:1",
				kind: "pageGlobal",
				property: "BrontoShopify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bronto:pageGlobal:2",
				kind: "pageGlobal",
				property: "bronto.versions.sca",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bronto:pageGlobal:3",
				kind: "pageGlobal",
				property: "brontoCookieConsent",
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
		id: "btolead",
		name: "BTOLEAD",
		website: "https://btolead.it",
		description: "BTOLEAD is B2B lead generation software that enables businesses to identify and connect with potential customers.",
		icon: "BTOLEAD.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "btolead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("track\\.btolead\\.it"),
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
		id: "buyapowa",
		name: "Buyapowa",
		website: "https://www.buyapowa.com",
		description: "Buyapowa is a scalable referral marketing and advocacy platform designed for all industries.",
		icon: "Buyapowa.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "buyapowa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.co-buying\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buyapowa:pageGlobal:1",
				kind: "pageGlobal",
				property: "Buyapowa.CanaryCheck",
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
		id: "buzzbuilder",
		name: "BuzzBuilder",
		website: "https://buzzbuilderpro.com",
		description: "BuzzBuilder is an automated sales platform that generates qualified leads through email campaigns, LinkedIn engagement, and follow-up calls.",
		icon: "BuzzBuilder.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "buzzbuilder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.buzzbuilderpro\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buzzbuilder:pageGlobal:1",
				kind: "pageGlobal",
				property: "buzzbuilder",
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
		id: "byside",
		name: "BySide",
		website: "https://byside.com",
		description: "BySide is a personalisation and marketing automation platform.",
		icon: "BySide.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "byside:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webcare\\.byside\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "byside:pageGlobal:1",
				kind: "pageGlobal",
				property: "BySide",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "byside:pageGlobal:2",
				kind: "pageGlobal",
				property: "bysideWebcare_banner",
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
		id: "campaign-monitor",
		name: "Campaign Monitor",
		website: "https://www.campaignmonitor.com",
		description: "Campaign Monitor is a global technology company that provides an email marketing platform.",
		icon: "Campaign Monitor.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "campaign-monitor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.createsend1\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "campaign-monitor:dom:1",
				kind: "dom",
				selector: "input[value='campaignmonitor_subscribe_form'][name='form_id'], form[action*='createsend'][class='js-cm-form']",
				description: "DOM selector matches a known technology marker."
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
		id: "cartful",
		name: "Cartful",
		website: "https://www.cartful.com",
		description: "Cartful is a customer-focused service that assists online shoppers in locating suitable products on a website.",
		icon: "Cartful.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cartful:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("embed\\.cartfulsolutions\\.com"),
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
		id: "cartkit",
		name: "CartKit",
		website: "https://www.cartkit.com",
		description: "CartKit build apps from fuss-free multi-channel marketing automation and campaigns to social proof popups and user session recording.",
		icon: "CartKit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cartkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cartkitcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "carts-guru",
		name: "Carts Guru",
		website: "https://www.carts.guru",
		description: "Carts Guru is the all-in-one marketing automation tool for ecommerce stores.",
		icon: "Carts Guru.png",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "carts-guru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cartsguru\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"mid"
			]
		}
	},
	{
		id: "casasoft",
		name: "CasaSoft",
		website: "https://casasoft.ch",
		description: "CasaSoft is a provider of digital solutions tailored for real estate marketing needs.",
		icon: "CasaSoft.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "casasoft:dom:0",
				kind: "dom",
				selector: "link[href*='.casasoft.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "casasoft:pageGlobal:1",
				kind: "pageGlobal",
				property: "casawpOptionParams",
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
		id: "catylist",
		name: "Catylist",
		website: "https://cre.moodysanalytics.com/products/catylist",
		description: "Catylist is an all-in-one platform for commercial real estate brokers, offering CRE data, reporting and marketing tools, and property listings.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "catylist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.catylist\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "causalfunnel",
		name: "CausalFunnel",
		website: "https://www.causalfunnel.com",
		description: "CausalFunnel is an AI platform that analyzes customer behavior to optimize business conversion rates.",
		icon: "CuasalFunnel.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "causalfunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.scripts\\.causalfunnel\\.com"),
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
		id: "cerkl",
		name: "Cerkl",
		website: "https://cerkl.com",
		description: "Cerkl is an internal communication software designed to support organizations of any size or structure.",
		icon: "Cerkl.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cerkl:pageGlobal:0",
				kind: "pageGlobal",
				property: "cerklAptly",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cerkl:pageGlobal:1",
				kind: "pageGlobal",
				property: "cerkl_awp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cerkl:pageGlobal:2",
				kind: "pageGlobal",
				property: "cerkl_subscribe_box",
				description: "Page-owned global matches a known technology marker."
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
		id: "ceros",
		name: "Ceros",
		website: "https://www.ceros.com",
		description: "Ceros is an interactive, no-code content creation platform designed for marketers and designers to develop engaging digital experiences.",
		icon: "Ceros.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "ceros:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ceros\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ceros:pageGlobal:1",
				kind: "pageGlobal",
				property: "CerosMath",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ceros:pageGlobal:2",
				kind: "pageGlobal",
				property: "CerosSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ceros:pageGlobal:3",
				kind: "pageGlobal",
				property: "cerosContext",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "certishopping",
		name: "Certishopping",
		website: "https://www.certishopping.com",
		description: "Certishopping is an all-in-one marketing platform designed to accelerate business growth through integrated tools and automation.",
		icon: "Certishopping.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "certishopping:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.certishopping\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "certishopping:responseHeader:1",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("business\\.certishopping\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "cevoid",
		name: "Cevoid",
		website: "https://cevoid.com",
		description: "Cevoid is an all-in-one user-generated content (UGC) platform designed for e-commerce brands.",
		icon: "Cevoid.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "cevoid:pageGlobal:0",
				kind: "pageGlobal",
				property: "cevoid.galleries",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cevoid:pageGlobal:1",
				kind: "pageGlobal",
				property: "cevoid_gallery.load",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cevoid:pageGlobal:2",
				kind: "pageGlobal",
				property: "cevoid_state.setSessionCookie",
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
		id: "chiirp",
		name: "CHIIRP",
		website: "https://chiirp.com",
		description: "CHIIRP is an AI-powered lead conversion tool for trade businesses that captures and manages calls and inquiries to support timely follow-up and improved lead conversion.",
		icon: "CHIIRP.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "chiirp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.chiirp\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "chimpify",
		name: "Chimpify",
		website: "https://www.chimpify.de",
		description: "Chimpify is an inbound marketing platform that consolidates content management, lead generation, and campaign tracking to support data-driven audience engagement.",
		icon: "Chimpify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "chimpify:pageGlobal:0",
				kind: "pageGlobal",
				property: "Chimpify.content_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chimpify:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Chimpify$"),
				description: "Response header matches a known technology marker."
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
		id: "churnzero",
		name: "ChurnZero",
		website: "https://churnzero.net",
		description: "ChurnZero is a real-time customer success platform that helps subscription businesses fight customer churn.",
		icon: "ChurnZero.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "churnzero:pageGlobal:0",
				kind: "pageGlobal",
				property: "ChurnZero",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "churnzero:pageGlobal:1",
				kind: "pageGlobal",
				property: "ChurnZero.version",
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
		id: "cinc",
		name: "CINC",
		website: "https://www.cincpro.com",
		description: "CINC is a lead acquisition and conversion platform for teams and top real estate agents.",
		icon: "CINC.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "cinc:pageGlobal:0",
				kind: "pageGlobal",
				property: "CINC.AjaxApi",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "clarivoy",
		name: "Clarivoy",
		website: "https://www.clarivoy.com",
		description: "Clarivoy is an automotive marketing campaign tool.",
		icon: "Clarivoy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clarivoy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clarivoy\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "claspo",
		name: "Claspo",
		website: "https://claspo.io",
		description: "Claspo is a pop-up builder designed to generate and capture leads, increase sales, and grow subscriber lists.",
		icon: "Claspo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "claspo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.claspo\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "claspo:pageGlobal:1",
				kind: "pageGlobal",
				property: "claspo",
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
		id: "clearlink",
		name: "Clearlink",
		website: "https://www.clearlink.com",
		description: "Clearlink connects brands with customers who are likely to convert and provides information on partnerships and career opportunities.",
		icon: "Clearlink.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clearlink:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "clearlink:pageGlobal:1",
				kind: "pageGlobal",
				property: "mapiBaseUrl",
				valuePattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clearlink:pageGlobal:2",
				kind: "pageGlobal",
				property: "mapiLeadEndpoint",
				valuePattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "clerk-io",
		name: "Clerk.io",
		website: "https://clerk.io",
		description: "Clerk.io is an all-in-one ecommerce personalisation platform.",
		icon: "Clerk.io.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clerk-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clerk\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clerk-io:pageGlobal:1",
				kind: "pageGlobal",
				property: "__clerk_cb_0",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clerk-io:pageGlobal:2",
				kind: "pageGlobal",
				property: "__clerk_q",
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
		id: "cleverdata",
		name: "CleverData",
		website: "https://cleverdata.ru",
		description: "CleverData is a CDP platform that manages customer data and enables personalized user experiences through robust data processing capabilities.",
		icon: "CleverData.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "cleverdata:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cdp\\.cleverdata\\.ru"),
				description: "Script content contains a bounded technology signature."
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
		id: "clevertap",
		name: "CleverTap",
		website: "https://clevertap.com",
		description: "CleverTap is a SaaS based customer lifecycle management and mobile marketing company headquartered in Mountain View, California.",
		icon: "CleverTap.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "clevertap:pageGlobal:0",
				kind: "pageGlobal",
				property: "clevertap",
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
		id: "clickdimensions",
		name: "ClickDimensions",
		website: "https://clickdimensions.com",
		description: "ClickDimensions is a SaaS marketing automation platform built on the Microsoft Windows Azure platform.",
		icon: "ClickDimensions.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clickdimensions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.clickdimensions\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clickdimensions:pageGlobal:1",
				kind: "pageGlobal",
				property: "clickdimensions",
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
		id: "clickfunnels",
		name: "ClickFunnels",
		website: "https://www.clickfunnels.com",
		description: "ClickFunnels is an online sales funnel builder that helps businesses market, sell, and deliver their products online.",
		icon: "ClickFunnels.svg",
		categories: [
			"marketing-automation",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "clickfunnels:pageGlobal:0",
				kind: "pageGlobal",
				property: "CFAppDomain",
				valuePattern: new RegExp("app\\.clickfunnels\\.com"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clickfunnels:pageGlobal:1",
				kind: "pageGlobal",
				property: "CFSurveyParticipantID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clickfunnels:pageGlobal:2",
				kind: "pageGlobal",
				property: "ClickFunnels",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clickfunnels:pageGlobal:3",
				kind: "pageGlobal",
				property: "cfAddPolyfill",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clickfunnels:meta:4",
				kind: "meta",
				key: "cf:app_domain:",
				valuePattern: new RegExp("app\\.clickfunnels\\.com"),
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
		id: "clientify",
		name: "Clientify",
		website: "https://clientify.com",
		description: "Clientify is a marketing and sales automation platform designed to help businesses grow.",
		icon: "Clientify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clientify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.clientify\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clientify:pageGlobal:1",
				kind: "pageGlobal",
				property: "trackerUrl",
				valuePattern: new RegExp("analytics\\.clientify\\.net"),
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
		id: "clikdata",
		name: "CLIKdata",
		website: "https://clikdata.com",
		description: "CLIKdata is a provider of digital marketing and data services that support business growth by enhancing engagement and lead generation.",
		icon: "CLIKdata.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clikdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.clikdata\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "clinch",
		name: "Clinch",
		website: "https://clinch.co/",
		description: "Clinch delivers hyper-personalized creative experiences and consumer intelligence across all channels.",
		icon: "Clinch.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clinch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.clinch\\.co"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "closing-boost",
		name: "Closing Boost",
		website: "https://closingboost.com",
		description: "Closing Boost is a sales pipeline management and marketing automation platform designed to capture leads and nurture prospects.",
		icon: "ClosingBoost.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "closing-boost:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.closingboost\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cloudengage",
		name: "CloudEngage",
		website: "https://cloudengage.com",
		description: "CloudEngage is a platform enabling no-code personalization for enhanced revenue and customer satisfaction.",
		icon: "CloudEngage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cloudengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudengage\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cloudengage:pageGlobal:1",
				kind: "pageGlobal",
				property: "CloudEngage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudengage:pageGlobal:2",
				kind: "pageGlobal",
				property: "CloudEngageHead",
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
		id: "cloudsponge",
		name: "CloudSponge",
		website: "https://www.cloudsponge.com",
		description: "CloudSponge is a software-as-a-service tool for importing contacts from address book providers like Gmail, Yahoo Mail, Outlook.com, iCloud and AOL.",
		icon: "CloudSponge.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cloudsponge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudsponge\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cloudsponge:pageGlobal:1",
				kind: "pageGlobal",
				property: "cloudsponge.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudsponge:pageGlobal:2",
				kind: "pageGlobal",
				property: "cloudspongeProxy",
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
		id: "clubcast",
		name: "Clubcast",
		website: "https://clubcast.co.uk",
		description: "Clubcast is a platform for managing and personalizing content for digital products, designed to enhance fan experiences and support revenue growth.",
		icon: "Clubcast.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "clubcast:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.clubcast\\.co\\.uk"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "clubcast:pageGlobal:1",
				kind: "pageGlobal",
				property: "ClubcastRegistry",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clubcast:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkclubcast",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cnvert",
		name: "Cnvert",
		website: "https://cnvert.com",
		description: "Cnvert is a self-hosted lead and marketing automation system, formerly known as Sonician.",
		icon: "Cnvert.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cnvert:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Sonician AB$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "cnvert:meta:1",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^Sonician AB$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "coco-ai",
		name: "CoCo AI",
		website: "https://my-coco.ai",
		description: "CoCo AI is a WhatsApp marketing assistant that uses artificial intelligence to automate campaigns, manage customer interactions, and improve engagement.",
		icon: "CoCoAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "coco-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dashboard\\.my-coco\\.ai/"),
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
		id: "cocon",
		name: "COCON",
		website: "https://www.cocon.app",
		description: "COCON is an email marketing strategy designed to enhance the performance of a Shopify store.",
		icon: "COCON.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cocon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cocon\\.app"),
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "combeenation",
		name: "Combeenation",
		website: "https://www.combeenation.com",
		description: "Combeenation is a powerful cloud-based configurator platform.",
		icon: "Combeenation.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "combeenation:dom:0",
				kind: "dom",
				selector: "iframe[src*='portal.combeenation.com/']",
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
		id: "conduze",
		name: "Conduze",
		website: "https://www.conduze.com",
		description: "Conduze is a call tracking and pop-up solution designed to help businesses capture and analyze inbound leads.",
		icon: "Conduze.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "conduze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conduze\\.com"),
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
		id: "connectally",
		name: "Connectally",
		website: "https://connectally.com",
		description: "Connectally is a lead generation and automation platform designed to help marketing professionals streamline client acquisition.",
		icon: "Connectally.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "connectally:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.connectally\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "connectif",
		name: "Connectif",
		website: "https://connectif.ai",
		description: "Connectif is a marketing automation and personalisation data-first action platform, powered by AI.",
		icon: "Connectif.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "connectif:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.connectif\\.cloud/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "connectif:pageGlobal:1",
				kind: "pageGlobal",
				property: "connectif.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "connectif:pageGlobal:2",
				kind: "pageGlobal",
				property: "connectifInfo.store",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "conneqto",
		name: "Conneqto",
		website: "https://conneqto.ai",
		description: "Conneqto is an all-in-one platform offering email, automation, high-converting carts, and sales pipeline tools for streamlined marketing and sales management.",
		icon: "Conneqto.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "conneqto:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.conneqto\\.ai"),
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
		id: "connexity",
		name: "Connexity",
		website: "https://www.connexity.com",
		description: "Connexity is a platform that focuses on audience targeting, data management, optimization, attribution, and insight generation for enhanced marketing strategies.",
		icon: "Connexity.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "connexity:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connexity\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "constant-contact",
		name: "Constant Contact",
		website: "https://www.constantcontact.com",
		description: "Constant Contact is a marketing automation and email marketing solution.",
		icon: "Constant Contact.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "constant-contact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ctctcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "constant-contact:dom:1",
				kind: "dom",
				selector: "a[href*='.constantcontact.com/'][target='_blank'], form[action*='.constantcontact.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "constant-contact:pageGlobal:2",
				kind: "pageGlobal",
				property: "_ctct_m",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "constant-contact:pageGlobal:3",
				kind: "pageGlobal",
				property: "ctctOnLoadCallback",
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
		id: "contactus",
		name: "ContactUs",
		website: "https://contactus.com",
		description: "ContactUs is a custom ecommerce development and online marketing platform offering customer acquisition and prospect management solutions.",
		icon: "ContactUs.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "contactus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.contactus\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "contentbot",
		name: "ContentBot",
		website: "https://contentbot.ai",
		description: "ContentBot is an AI-driven platform for creating custom content workflows, processing imports, and generating blog posts with an AI blog writer.",
		icon: "ContentBot.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "contentbot:pageGlobal:0",
				kind: "pageGlobal",
				property: "bleeper_api_key",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "contentbot:pageGlobal:1",
				kind: "pageGlobal",
				property: "bleeper_user_ip_address",
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
		id: "contentgems",
		name: "ContentGems",
		website: "https://contentgems.com",
		description: "ContentGems is a no-code content discovery tool designed to help users find and curate relevant content.",
		icon: "ContentGems.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "contentgems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.contentgems\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "contentgems:pageGlobal:1",
				kind: "pageGlobal",
				property: "ContentGems",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "contentgems:pageGlobal:2",
				kind: "pageGlobal",
				property: "ContentGemsVersion",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
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
		id: "contently",
		name: "Contently",
		website: "https://contently.com",
		description: "Contently is a SaaS content marketing platform from the company of the same name headquartered in New York.",
		icon: "Contently.png",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "contently:pageGlobal:0",
				kind: "pageGlobal",
				property: "_contently.siteId",
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
		id: "contents",
		name: "Contents",
		website: "https://www.contents.com",
		description: "Contents is a generative AI platform that enables businesses to produce high-performing, original, and SEO-optimized content.",
		icon: "Contents.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "contents:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.contents\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "contentstudio",
		name: "ContentStudio",
		website: "https://contentstudio.io",
		description: "ContentStudio is an integrated cloud-based social media management and content marketing solution.",
		icon: "ContentStudio.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "contentstudio:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/contentstudio']",
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
		id: "contextbar",
		name: "ContextBar",
		website: "https://contextbar.ru",
		description: "ContextBar is a tool designed to attract consistent, thematically relevant visitors to a website.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "contextbar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.contextbar\\.ru/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"payg"
			]
		}
	},
	{
		id: "convead",
		name: "Convead",
		website: "https://convead.io",
		description: "Convead is a CRM marketing platform for ecommerce stores that helps collect data, segment customers, and automate marketing efforts.",
		icon: "Convead.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "convead:pageGlobal:0",
				kind: "pageGlobal",
				property: "ConveadSettings.app_key",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "convead:pageGlobal:1",
				kind: "pageGlobal",
				property: "convead",
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
		id: "converge",
		name: "Converge",
		website: "https://www.runconverge.com",
		description: "Converge is an all-in-one marketing measurement platform that consolidates performance data to provide insights across multiple channels.",
		icon: "Converge.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "converge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.runconverge\\.com"),
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
		id: "convertbox",
		name: "ConvertBox",
		website: "https://convertbox.com",
		description: "ConvertBox is a tool that delivers targeted on-site messages based on visitor behavior to generate more leads, sales, and customers.",
		icon: "ConvertBox.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "convertbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertbox\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
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
		id: "convertcart",
		name: "Convertcart",
		website: "https://www.convertcart.com/",
		description: "ConvertCart helps online businesses deliver outstanding experiences to customers throughout their journey.",
		icon: "Convertcart.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "convertcart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertcart\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "convertful",
		name: "Convertful",
		website: "https://convertful.com",
		description: "Convertful is a tool that automates conversions by turning website traffic into leads and sales in real time.",
		icon: "Convertful.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "convertful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.convertful\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convertful:pageGlobal:1",
				kind: "pageGlobal",
				property: "Convertful.$containers",
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
		id: "convertkit",
		name: "ConvertKit",
		website: "https://convertkit.com",
		description: "ConvertKit is an email marketing tool built for content creators.",
		icon: "ConvertKit.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "convertkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.convertkit\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convertkit:dom:1",
				kind: "dom",
				selector: "form[action*='.convertkit.com'], link[href*='.convertkit.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "convincely",
		name: "Convincely",
		website: "https://www.convincely.com",
		description: "Convincely is a platform designed to rapidly launch and optimize personalized sales funnels for businesses.",
		icon: "Convincely.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "convincely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.convincely\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convincely:pageGlobal:1",
				kind: "pageGlobal",
				property: "convincely3.analyticsService",
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
				"poa"
			]
		}
	},
	{
		id: "convious",
		name: "Convious",
		website: "https://www.convious.com",
		description: "Convious is an attraction management platform supporting operations before, during, and after visits, including exit-intent functionality.",
		icon: "Convious.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "convious:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.convious-app\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "convious:pageGlobal:1",
				kind: "pageGlobal",
				property: "conviousLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "convious:pageGlobal:2",
				kind: "pageGlobal",
				property: "convious_resource_path",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cool-popup",
		name: "Cool Popup",
		website: "https://www.coolpopup.com",
		description: "Cool Popup is a tool that helps convert website visitors into customers, subscribers, or leads by displaying visually designed popups that require no coding to set up.",
		icon: "CoolPopup.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cool-popup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dash\\.coolpopup\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cooladata",
		name: "Cooladata",
		website: "https://www.cooladata.com",
		description: "Cooladata is a data warehouse and behavioral analytics platform designed for gaming, elearning, ecommerce, SaaS, and media companies.",
		icon: "Cooladata.png",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "cooladata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cooladata\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cooladata:pageGlobal:1",
				kind: "pageGlobal",
				property: "cooladata",
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
		id: "coopt",
		name: "Coopt",
		website: "https://www.getcoopt.com",
		description: "Coopt is a tool designed to boost sales by transforming customers into social media advertisers, leveraging their networks to promote products and services, thus enhancing brand visibility and engagement.",
		icon: "Coopt.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "coopt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getcoopt\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "coopt:pageGlobal:1",
				kind: "pageGlobal",
				property: "cooptjQuery.Animation",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
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
		id: "copernica",
		name: "Copernica",
		website: "https://www.copernica.com",
		description: "Copernica is a platform for managing email campaigns and automating customer communication using structured data and rule-based workflows.",
		icon: "Copernica.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "copernica:dom:0",
				kind: "dom",
				selector: "form[action*='publisher.copernica.com/']",
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
		id: "copilot-ai",
		name: "Copilot AI",
		website: "https://www.copilotai.com",
		description: "CoPilot AI is a LinkedIn automation software designed to identify and generate leads.",
		icon: "CopilotAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "copilot-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.copilotadvisor\\.com"),
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
		id: "cordial",
		name: "Cordial",
		website: "https://cordial.com",
		description: "Cordial is a cross-channel marketing and customer engagement platform for enterprise brands to send personalized email, SMS, mobile push notifications.",
		icon: "Cordial.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cordial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cordial\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cordial:pageGlobal:1",
				kind: "pageGlobal",
				property: "CordialJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cordial:pageGlobal:2",
				kind: "pageGlobal",
				property: "CordialObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cordial:pageGlobal:3",
				kind: "pageGlobal",
				property: "Cordial_trackUrl",
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
		id: "covet-pics",
		name: "Covet.pics",
		website: "https://covet.pics",
		description: "Covet.pics is a customizable Shopify app for Instagram and Lookbook shoppable galleries.",
		icon: "Covet.pics.svg",
		categories: [
			"marketing-automation",
			"content-publishing",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "covet-pics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.covet\\.pics/"),
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
		id: "cpex",
		name: "CPEx",
		website: "https://www.cpex.cz",
		description: "CPEx is a publisher exchange system facilitating content distribution and collaboration among publishers.",
		icon: "CPEx.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "cpex:pageGlobal:0",
				kind: "pageGlobal",
				property: "cpexAddCMPCloseButton",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cpex:pageGlobal:1",
				kind: "pageGlobal",
				property: "cpexCmpVersion",
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
		id: "crall",
		name: "Crall",
		website: "https://crall.io/",
		description: "Crall is a personalized shopping experience system.",
		icon: "Crall.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "crall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.crall\\.io/w/widgets\\.js\\?v=([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crall:pageGlobal:1",
				kind: "pageGlobal",
				property: "_CrallConfig",
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
		id: "creaitor",
		name: "Creaitor",
		website: "https://www.creaitor.ai",
		description: "Creaitor is an AI-driven platform that offers tools for content creation and SEO optimization to help content producers enhance their online presence.",
		icon: "Creaitor.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "creaitor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.creaitor\\.ai/"),
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
		id: "create-demand",
		name: "Create Demand",
		website: "https://createdemand.ai",
		description: "Create Demand is an all-in-one sales and marketing platform designed to support business owners in managing and growing their sales and marketing operations.",
		icon: "CreateDemand.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "create-demand:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.createdemand\\.ai"),
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
		id: "crema",
		name: "CREMA",
		website: "https://www.cre.ma",
		description: "CREMA is a platform offering review management, marketing personalisation, and size recommendations to enhance and streamline the consumer journey.",
		icon: "CREMA.svg",
		categories: [
			"marketing-automation",
			"community-ugc"
		],
		rules: [
			{
				id: "crema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//widgets\\.cre\\.ma/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crema:pageGlobal:1",
				kind: "pageGlobal",
				property: "CremaCryptoJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crema:pageGlobal:2",
				kind: "pageGlobal",
				property: "crema.AdTracker",
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
		id: "crm-done-better",
		name: "CRM Done Better",
		website: "https://crmdonebetter.com",
		description: "CRM Done Better is a marketing automation software that streamlines campaign management, customer segmentation, and lead nurturing to improve efficiency and data-driven decision making.",
		icon: "CRMDoneBetter.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "crm-done-better:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.crmdonebetter\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cross-sell",
		name: "Cross Sell",
		website: "https://csell.io/",
		description: "Cross Sell provide recommendations solution for Shopify based sites.",
		icon: "CrossSell.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cross-sell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("load\\.csell\\.co"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"shopify",
			"cart-functionality"
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
		id: "ctrwow",
		name: "CTRWOW",
		website: "https://www.wowsuite.ai/ctrwow.html",
		description: "CTRWOW is a system designed for building template funnels, offering tools for streamlining the creation and management of marketing funnels.",
		icon: "CTRWow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ctrwow:pageGlobal:0",
				kind: "pageGlobal",
				property: "CTR_IMG_LAZY_LOADER",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ctrwow:pageGlobal:1",
				kind: "pageGlobal",
				property: "_CTR_CUSTOM_DATA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ctrwow:pageGlobal:2",
				kind: "pageGlobal",
				property: "_CTR_FINGERPRINTJS_TOKEN",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ctrwow:pageGlobal:3",
				kind: "pageGlobal",
				property: "__CTRWOW_CONFIG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ctrwow:pageGlobal:4",
				kind: "pageGlobal",
				property: "ctrwowUtils",
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
		id: "curated",
		name: "Curated",
		website: "https://www.curated.co",
		description: "Curated is a platform that helps organize engaging content and support ongoing customer relationship development through consistent and relevant interactions.",
		icon: "Curated.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "curated:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("push\\.curated\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "curated:pageGlobal:1",
				kind: "pageGlobal",
				property: "CURATED.fCTA",
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
		id: "curaytor",
		name: "Curaytor",
		website: "https://www.curaytor.com",
		description: "Curaytor is a digital marketing platform that provides online strategy, advertising, and lead generation solutions for businesses seeking to enhance their digital presence.",
		icon: "Curaytor.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "curaytor:dom:0",
				kind: "dom",
				selector: "link[href*='.curaytor.io']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "curaytor:responseHeader:1",
				kind: "responseHeader",
				key: "X-Served-By",
				valuePattern: new RegExp("\\.curaytor\\.io"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "custobar",
		name: "Custobar",
		website: "https://www.custobar.com",
		description: "Custobar is a customer data platform that enables personalized marketing by leveraging data to tailor campaigns and communications.",
		icon: "Custobar.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "custobar:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("script\\.custobar\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "custobar:pageGlobal:1",
				kind: "pageGlobal",
				property: "custobar.config",
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
		id: "customer-stories",
		name: "Customer Stories",
		website: "https://customerstories.net",
		description: "Customer Stories is a customer marketing automation platform designed to support modern marketing and sales teams in streamlining engagement and outreach efforts.",
		icon: "CustomerStories.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "customer-stories:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.customerstories\\.net/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "customer-io",
		name: "Customer.io",
		website: "https://customer.io/",
		description: "Customer.io is an automated messaging platform for marketers.",
		icon: "Customer.io.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "customer-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.customer\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "customfit",
		name: "CustomFit",
		website: "https://www.customfit.ai",
		description: "CustomFit is a no-code website personalization platform that enables marketers to increase conversions by customizing content for specific audience segments.",
		icon: "CustomFit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "customfit:pageGlobal:0",
				kind: "pageGlobal",
				property: "CustomFit.CFEvent",
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
		id: "customily",
		name: "Customily",
		website: "https://www.customily.com",
		description: "Customily is an online product personalisation software.",
		icon: "Customily.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "customily:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|app)\\.customily\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "customily:pageGlobal:1",
				kind: "pageGlobal",
				property: "customily.sticky",
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
		id: "cxdp",
		name: "CXDP",
		website: "https://cxdp.ru",
		description: "CXDP is a platform that enables businesses to create, manage, and deliver personalized marketing communications across multiple channels based on customer data and engagement insights.",
		icon: "CXDP.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cxdp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.cxdp\\.ru"),
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
		id: "cxense",
		name: "Cxense",
		website: "https://www.cxense.com",
		description: "Cxense was an AI-powered data management and intelligent personalisation platform.",
		icon: "Cxense.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "cxense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cxense\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cxense:meta:1",
				kind: "meta",
				key: "cXenseParse:itm-meta-keywords",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "cxense:meta:2",
				kind: "meta",
				key: "cXenseParse:pageclass",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "cxense:meta:3",
				kind: "meta",
				key: "cXenseParse:publishtime",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "cxense:meta:4",
				kind: "meta",
				key: "cXenseParse:url",
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
		id: "d-engage",
		name: "D.Engage",
		website: "https://dengage.com",
		description: "D.Engage is a platform that enhances customer experiences by leveraging data-driven marketing automation to deliver targeted and efficient campaigns.",
		icon: "Dengage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "d-engage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pcdn\\.dengage\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "d-engage:pageGlobal:1",
				kind: "pageGlobal",
				property: "_dengageConf",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "d-engage:pageGlobal:2",
				kind: "pageGlobal",
				property: "dengage.q",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dakno",
		name: "Dakno",
		website: "https://www.dakno.com",
		description: "Dakno is an all-in-one lead generation and conversion system designed for the real estate industry.",
		icon: "Dakno.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dakno:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.dakno.com/'], div[class*='dakno'] a[href*='www.dakno.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dapta",
		name: "Dapta",
		website: "https://dapta.ai",
		description: "Dapta is a real-time visitor segmentation and website personalization platform that uses AI to accelerate sales, marketing, and operations workflows for small and medium-sized businesses.",
		icon: "Dapta.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dapta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dapta\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dapta:pageGlobal:1",
				kind: "pageGlobal",
				property: "daptaAgent.agent_context",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dapta:pageGlobal:2",
				kind: "pageGlobal",
				property: "toggleDaptaWidgetChat",
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
		id: "darwin-pricing",
		name: "Darwin Pricing",
		website: "https://www.darwinpricing.com",
		description: "Darwin Pricing is a data science platform that applies dynamic pricing strategies by analyzing market conditions and customer behavior to optimize revenue and pricing decisions.",
		icon: "DarwinPriicing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "darwin-pricing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.darwinpricing\\.com"),
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
		id: "dashly",
		name: "Dashly",
		website: "https://www.dashly.io",
		description: "Dashly is a conversational marketing platform designed to increase quality lead encounters and reduce customer acquisition costs.",
		icon: "Dashly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dashly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.dashly\\.app/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dashly:pageGlobal:1",
				kind: "pageGlobal",
				property: "dashly",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "data-nugget",
		name: "data nugget",
		website: "https://datanugget.io",
		description: "data nugget is a brand growth platform designed to help businesses analyze performance, identify opportunities, and manage strategies.",
		icon: "DataNugget.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "data-nugget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.datanugget\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "datacrush",
		name: "Datacrush",
		website: "https://www.datacrush.la",
		description: "Datacrush is a marketing automation platform.",
		icon: "Datacrush.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "datacrush:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("js\\.datacrush\\.la"),
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
		id: "datadojo",
		name: "DataDojo",
		website: "https://datadojo.ai",
		description: "DataDojo is an AI platform that converts high-intent and anonymous website visitors into marketable leads, helping businesses increase sales.",
		icon: "DataDojo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "datadojo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("pixel\\.datadojocdp\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "datalitics",
		name: "Datalitics",
		website: "https://datalitics.com.br",
		description: "Datalitics is a platform designed for advanced lead tracking, offering tools to monitor, analyze, and optimize customer acquisition efforts.",
		icon: "Datalitics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "datalitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.datalitics\\.com\\.br/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "datalitics:pageGlobal:1",
				kind: "pageGlobal",
				property: "createWPDatalitics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "datalitics:pageGlobal:2",
				kind: "pageGlobal",
				property: "createWPRedirectDatalitics",
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
		id: "datarize",
		name: "Datarize",
		website: "https://datarize.ai",
		description: "Datarize is a CRM marketing solution designed to streamline customer relationship management and enhance targeted marketing efforts.",
		icon: "Datarize.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "datarize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.datarize\\.ai/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "datatrics",
		name: "Datatrics",
		website: "https://datatrics.com",
		description: "Datatrics is a data-driven marketing platform that provides businesses with advanced tools and analytics to optimise customer experiences, personalise marketing campaigns, and drive engagement through data-driven insights and automation.",
		icon: "Datatrics.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "datatrics:dom:0",
				kind: "dom",
				selector: "link[href*='.datatrics.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "datatrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "DatatricsClick",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "datatrics:pageGlobal:2",
				kind: "pageGlobal",
				property: "datatricsEvents",
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
		id: "dathuis",
		name: "DatHuis",
		website: "https://dathuis.nl",
		description: "DatHuis is a platform providing marketing automation tools for real estate professionals, designed to enhance visibility and streamline operations.",
		icon: "DatHuis.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dathuis:pageGlobal:0",
				kind: "pageGlobal",
				property: "DatHuisObject",
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
		id: "deadline-funnel",
		name: "Deadline Funnel",
		website: "https://www.deadlinefunnel.com",
		description: "Deadline is a tool used to automate marketing funnels by managing time-based campaigns and creating urgency-driven conversion strategies.",
		icon: "DeadlineFunnel.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "deadline-funnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("a\\.deadlinefunnel\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "deadline-funnel:pageGlobal:1",
				kind: "pageGlobal",
				property: "SendUrlToDeadlineFunnel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "deadline-funnel:pageGlobal:2",
				kind: "pageGlobal",
				property: "afterDeadline",
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
		id: "deal-ai",
		name: "Deal.ai",
		website: "https://home.deal.ai",
		description: "Deal.ai is an AI-powered white-label platform designed to support marketing, content creation, and business growth.",
		icon: "DealAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "deal-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.marketing\\.deal\\.ai"),
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
		id: "deep-lawn",
		name: "Deep Lawn",
		website: "https://deeplawn.com",
		description: "Deep Lawn is a sales tool designed for lawn care and pest control companies.",
		icon: "DeepLawn.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "deep-lawn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.deeplawn\\.com/"),
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
		id: "deepmarkit",
		name: "DeepMarkit",
		website: "https://www.deepmarkit.com",
		description: "Deepmarkit is a customer acquisition platform designed to help businesses attract, engage, and convert potential clients through targeted digital marketing and promotional campaigns.",
		icon: "DeepMarkit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "deepmarkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("portal\\.deepmarkit\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "delera",
		name: "Delera",
		website: "https://delera.io",
		description: "Delera is a platform that helps increase turnover by managing and automating marketing and sales processes.",
		icon: "Delera.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "delera:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.delera\\.io"),
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
		id: "delivra",
		name: "Delivra",
		website: "https://www.delivra.com",
		description: "Delivra is a premium email marketing tracking software.",
		icon: "Delivra.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "delivra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("integration\\.delivra\\.com"),
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
		id: "depict",
		name: "Depict",
		website: "https://depict.ai",
		description: "Depict is an ecommerce personalisation solution for fashion.",
		icon: "Depict.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "depict:dom:0",
				kind: "dom",
				selector: "link[href*='.depict.ai/']",
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
		id: "dialog-insight",
		name: "Dialog Insight",
		website: "https://www.dialoginsight.com",
		description: "Dialog Insight is a multi-channel marketing automation platform that enables personalization and campaign management across digital channels.",
		icon: "DialogInsight.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dialog-insight:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.dialoginsight\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dialogue",
		name: "Dialogue",
		website: "https://nowdialogue.com/",
		description: "Dialogue is an ecommerce personalization platform that helps brands increase sales and conversion rates through AI-driven recommendations.",
		icon: "Dialogue.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dialogue:pageGlobal:0",
				kind: "pageGlobal",
				property: "DialogueAI",
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
		id: "doctor-com",
		name: "Doctor.com",
		website: "https://www.doctor.com",
		description: "Doctor.com is a marketing automation and reputation management platform for doctors.",
		icon: "Doctor.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "doctor-com:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.doctor\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "doctor-com:dom:1",
				kind: "dom",
				selector: "iframe[src*='.doctor.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dotdigital",
		name: "Dotdigital",
		website: "https://dotdigital.com",
		description: "Dotdigital is an all-in-one cloud-based customer engagement multichannel marketing platform.",
		icon: "Dotdigital.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "dotdigital:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js/_dmptv([\\d.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dotdigital:pageGlobal:1",
				kind: "pageGlobal",
				property: "dmPt",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dotdigital:pageGlobal:2",
				kind: "pageGlobal",
				property: "dm_insight_id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dotdigital:pageGlobal:3",
				kind: "pageGlobal",
				property: "dmtrackingobjectname",
				confidence: 75,
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
		id: "drapr",
		name: "Drapr",
		website: "https://www.drapr.com",
		description: "Drapr is an ecommerce startup and online application based on technology that enables customers to quickly create 3D avatars and virtually try on clothing.",
		icon: "Drapr.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "drapr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("draprpubsubtest\\.firebaseapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "drapr:pageGlobal:1",
				kind: "pageGlobal",
				property: "drapr_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "drapr:pageGlobal:2",
				kind: "pageGlobal",
				property: "drapr_deferLoading",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "dreamdata",
		name: "Dreamdata",
		website: "https://dreamdata.io",
		description: "Dreamdata is a B2B revenue attribution platform.",
		icon: "Dreamdata.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "dreamdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bizible\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dreamdata:dom:1",
				kind: "dom",
				selector: "link[href*='.bizible.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "dreamdata:pageGlobal:2",
				kind: "pageGlobal",
				property: "BizTrackingA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dreamdata:pageGlobal:3",
				kind: "pageGlobal",
				property: "Bizible",
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
		id: "dreamroi",
		name: "DreamROI",
		website: "https://www.dreamroi.com",
		description: "DreamROI is a content personalization system for eCommerce that tailors on-site experiences based on user behavior and product interactions.",
		icon: "DreamROI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "dreamroi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.dreamroi\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dreamroi:pageGlobal:1",
				kind: "pageGlobal",
				property: "dreamroibox.refresh",
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
		id: "drip",
		name: "Drip",
		website: "https://www.drip.com",
		description: "Drip is a marketing automation platform built for ecommerce.",
		icon: "Drip.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "drip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getdrip\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "e-goi",
		name: "e-goi",
		website: "https://www.e-goi.com",
		description: "e-goi is a multichannel marketing automation software for ecommerce.",
		icon: "e-goi.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "e-goi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.e-goi\\.com/egoimmerce\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "e-goi:pageGlobal:1",
				kind: "pageGlobal",
				property: "Egoimmerce",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "e-goi:pageGlobal:2",
				kind: "pageGlobal",
				property: "_egoiaq",
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
		id: "earlyparrot",
		name: "EarlyParrot",
		website: "https://www.earlyparrot.com",
		description: "EarlyParrot is a referral marketing platform that supports coaches, course creators, and event hosts in expanding launches, webinars, and email lists through effective referral strategies.",
		icon: "EarlyParrot.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "earlyparrot:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.earlyparrot\\.com"),
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
		id: "ecal",
		name: "Ecal",
		website: "https://ecal.com",
		description: "Ecal is a marketing software platform that enables the delivery of calendar-based tickets and events directly into users’ personal calendars.",
		icon: "Ecal.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ecal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ecal\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ecal:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.ecal\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "ecomx",
		name: "EcomX",
		website: "https://www.ecomx.ai",
		description: "EcomX is a platform that automatically generates SEO-optimized product, collection, and blog content using AI.",
		icon: "EcomX.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ecomx:dom:0",
				kind: "dom",
				selector: "link[href*='app.ecomx.ai/']",
				description: "DOM selector matches a known technology marker."
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
		id: "edugram",
		name: "Edugram",
		website: "https://edugram.com",
		description: "Edugram is an affiliate program and CPA network for monetizing educational traffic.",
		icon: "Edugram.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "edugram:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.edugram\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "edugram:dom:1",
				kind: "dom",
				selector: "form[action*='edugram.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "eggflow",
		name: "Eggflow",
		website: "https://eggflow.com",
		description: "Eggflow is a platform that offers marketing automation and customer engagement tools to help increase ecommerce revenue.",
		icon: "Eggflow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "eggflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.eggflow\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "eggflow:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.eggflow\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "eloqua",
		name: "Eloqua",
		website: "https://eloqua.com",
		description: "Eloqua is a Software-as-a-Service (SaaS) platform for marketing automation offered that aims to help B2B marketers and organisations manage marketing campaigns and sales lead generation.",
		icon: "Oracle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "eloqua:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("elqCfg\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:1",
				kind: "pageGlobal",
				property: "_elq",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:2",
				kind: "pageGlobal",
				property: "_elqQ",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:3",
				kind: "pageGlobal",
				property: "eloqContactData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:4",
				kind: "pageGlobal",
				property: "eloquaActionSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:5",
				kind: "pageGlobal",
				property: "elqCookieValue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:6",
				kind: "pageGlobal",
				property: "elqCurESite",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:7",
				kind: "pageGlobal",
				property: "elqLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:8",
				kind: "pageGlobal",
				property: "elqSiteID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:pageGlobal:9",
				kind: "pageGlobal",
				property: "elq_global",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eloqua:cookie:10",
				kind: "cookie",
				key: "ELOQUA",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "emanda",
		name: "Emanda",
		website: "https://emanda.com.br",
		description: "Emanda is a platform offering SMS Marketing and Smart Email Marketing solutions.",
		icon: "Emanda.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "emanda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.emanda\\.com\\.br/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "emanda:pageGlobal:1",
				kind: "pageGlobal",
				property: "linkEmanda",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emanda:pageGlobal:2",
				kind: "pageGlobal",
				property: "srcEmaScript",
				valuePattern: new RegExp("app\\.emanda\\.com\\.br/"),
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
		id: "emarsys",
		name: "Emarsys",
		website: "https://emarsys.com/",
		description: "Emarsys is a cloud-based B2C marketing platform.",
		icon: "Emarsys.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "emarsys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:static|cdn)\\.scarabresearch\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "emarsys:pageGlobal:1",
				kind: "pageGlobal",
				property: "Scarab",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emarsys:pageGlobal:2",
				kind: "pageGlobal",
				property: "ScarabQueue",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ematic-solutions",
		name: "Ematic Solutions",
		website: "https://www.ematicsolutions.com",
		description: "Ematic Solutions is part of Ematic Group and started to revolve around transforming email marketing into an ROI machine.",
		icon: "Ematic Solutions.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ematic-solutions:pageGlobal:0",
				kind: "pageGlobal",
				property: "EmaticsObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ematic-solutions:pageGlobal:1",
				kind: "pageGlobal",
				property: "ematicApikey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ematic-solutions:pageGlobal:2",
				kind: "pageGlobal",
				property: "ematics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ematic-solutions:pageGlobal:3",
				kind: "pageGlobal",
				property: "ematicsSubscribe",
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
		id: "emblue",
		name: "emBlue",
		website: "https://www.embluemail.com/en",
		description: "emBlue is an email and marketing automation platform.",
		icon: "emBlue.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "emblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.embluemail\\.com/(?:library/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "emblue:pageGlobal:1",
				kind: "pageGlobal",
				property: "emblueOnSiteApp",
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
		id: "emotive",
		name: "Emotive",
		website: "https://emotive.io",
		description: "Emotive is a computer software company that provides SaaS, Mobile Marketing, NLP, machine learning, and B2B.",
		icon: "Emotive.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "emotive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("emotivecdn\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "emotive:pageGlobal:1",
				kind: "pageGlobal",
				property: "emotivePopupInitializing",
				description: "Page-owned global matches a known technology marker."
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
		id: "emplifi-ugc",
		name: "Emplifi UGC",
		website: "https://emplifi.io/products/social-commerce/social-ugc",
		description: "Emplifi UGC is a platform that helps brands curate, measure, and integrate user-generated content to enhance engagement, authenticity, and ecommerce performance by offering features like product page galleries, social media contests, shoppable content, and detailed analytics.",
		icon: "Emplifi.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "emplifi-ugc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.pixlee\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "emplifi-ugc:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pixlee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emplifi-ugc:pageGlobal:2",
				kind: "pageGlobal",
				property: "Pixlee_Analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emplifi-ugc:pageGlobal:3",
				kind: "pageGlobal",
				property: "TurnTo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emplifi-ugc:pageGlobal:4",
				kind: "pageGlobal",
				property: "turnToConfig",
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
		id: "engaga",
		name: "Engaga",
		website: "https://www.engaga.com",
		description: "Engaga is a platform that enhances website effectiveness with call-to-action popups and popup forms designed to convert visitors into customers and subscribers.",
		icon: "Engaga.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "engaga:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("spark\\.engaga\\.com"),
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
		id: "enkod",
		name: "Enkod",
		website: "https://enkod.io",
		description: "Enkod is a CDP platform designed for marketing automation.",
		icon: "Enkod.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "enkod:pageGlobal:0",
				kind: "pageGlobal",
				property: "enKodBox.token",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "epoq",
		name: "Epoq",
		website: "https://www.epoq.de",
		description: "Epoq is a platform that leverages artificial intelligence to deliver one-to-one personalization in e-commerce, enhancing product recommendations and user interactions through data-driven insights.",
		icon: "Epoq.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "epoq:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.epoq\\.de"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "epublishing",
		name: "ePublishing",
		website: "https://www.epublishing.com",
		description: "ePublishing is a media tech stack that enhances revenue, productivity, and engagement through AI-powered solutions, SEO dominance, and audience integration.",
		icon: "ePublishing.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "epublishing:pageGlobal:0",
				kind: "pageGlobal",
				property: "Ellington.Admin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "epublishing:pageGlobal:1",
				kind: "pageGlobal",
				property: "EllingtonMap",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "epublishing:pageGlobal:2",
				kind: "pageGlobal",
				property: "EllingtonPlateLoader.cache",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "esputnik",
		name: "eSputnik",
		website: "https://esputnik.com",
		description: "eSputnik is a marketing automation service for ecommerce.",
		icon: "eSputnik.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "esputnik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?://|\\.)esputnik\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "esputnik:pageGlobal:1",
				kind: "pageGlobal",
				property: "esSdk",
				valuePattern: new RegExp("^es$"),
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
		id: "estate-track",
		name: "Estate Track",
		website: "https://estatetrack.co.uk",
		description: "Estate Track is an all-in-one website platform for estate agents that facilitates automated marketing and lead generation.",
		icon: "EstateTrack.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "estate-track:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.estate-track\\.co\\.uk"),
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
		id: "etrigue",
		name: "eTrigue",
		website: "https://www.etrigue.com",
		description: "eTrigue is a demand generation and sales acceleration software that helps businesses identify, engage, and convert prospects through automated marketing and lead nurturing.",
		icon: "eTrigue.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "etrigue:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("trk\\.etrigue\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "evidence",
		name: "Evidence",
		website: "https://evidence.io",
		description: "Evidence is a real-time social proof tool designed to increase website conversions by displaying recent customer activity and engagement.",
		icon: "Evidence.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "evidence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.evidence\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "evidence:pageGlobal:1",
				kind: "pageGlobal",
				property: "EvidenceLoaded",
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
		id: "evolok",
		name: "Evolok",
		website: "https://www.evolok.com",
		description: "Evolok is an engagement and monetization platform for digital media.",
		icon: "Evolok.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "evolok:pageGlobal:0",
				kind: "pageGlobal",
				property: "evo_client",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "evolok:pageGlobal:1",
				kind: "pageGlobal",
				property: "evo_endpoint",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "exitintel",
		name: "ExitIntel",
		website: "https://exitintelligence.com",
		description: "ExitIntel is a full service conversion optimisation agency that focuses on ecommerce companies.",
		icon: "ExitIntel.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "exitintel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:get.)?exitintel\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "exitintel:pageGlobal:1",
				kind: "pageGlobal",
				property: "exitintel.VERSION",
				valuePattern: new RegExp("(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "exitintel:pageGlobal:2",
				kind: "pageGlobal",
				property: "exitintelAccount",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "exitintel:pageGlobal:3",
				kind: "pageGlobal",
				property: "exitintelConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "exponea",
		name: "Exponea",
		website: "https://go.exponea.com",
		description: "Exponea is a cloud-based marketing analysis platform suitable for large and midsize organisations in a variety of industries.",
		icon: "Exponea.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "exponea:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.exponea\\.com)?/js/exponea\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "exponea:pageGlobal:1",
				kind: "pageGlobal",
				property: "exponea.version",
				valuePattern: new RegExp("^v([\\d.]+)$"),
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
		id: "extole",
		name: "Extole",
		website: "https://www.extole.com",
		description: "Extole is an online marketing platform that enables brands and businesses to get new customers through loyalty and referral programs.",
		icon: "Extole.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "extole:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:extole|xtlo)\\.(?:com|net)/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "extole:dom:1",
				kind: "dom",
				selector: "li > a[href*='.extole.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "extole:pageGlobal:2",
				kind: "pageGlobal",
				property: "extole.VERSION",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
		id: "fanplayr",
		name: "Fanplayr",
		website: "https://fanplayr.com",
		description: "Fanplayr is a real-time insights platform that provides website optimisation and personalisation solutions for businesses.",
		icon: "Fanplayr.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fanplayr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fanplayr\\.com/.+/([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fanplayr:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.fanplayr.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "fanplayr:pageGlobal:2",
				kind: "pageGlobal",
				property: "fanplayr.platform.version",
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
		id: "farazi-bili-im",
		name: "Farazi Bilişim",
		website: "https://farazibilisim.com.tr",
		description: "Farazi Bilişim is a platform that enhances online visibility through search engine optimization strategies aimed at improving website ranking and performance across major search platforms.",
		icon: "Farazi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "farazi-bili-im:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("farazibilisim\\.com\\.tr"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "farazi-bili-im:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("farazibilisim\\.com\\.tr"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "feathr",
		name: "Feathr",
		website: "https://www.feathr.co",
		description: "Feathr is a suite of digital marketing tools designed specifically for event organizers, facilitating targeted outreach and audience engagement.",
		icon: "Feathr.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "feathr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.feathr\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "feathr:pageGlobal:1",
				kind: "pageGlobal",
				property: "FeathrBoomerang.version",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "feedify",
		name: "Feedify",
		website: "https://feedify.net",
		description: "Feedify is a platform that offers a lean dashboard for managing customer engagement tools with automation.",
		icon: "Feedify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "feedify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feedify\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "feedify:pageGlobal:1",
				kind: "pageGlobal",
				property: "feedify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "feedify:pageGlobal:2",
				kind: "pageGlobal",
				property: "feedify_options",
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
		id: "feedmagnet",
		name: "FeedMagnet",
		website: "https://www.feedmagnet.com",
		description: "FeedMagnet is a platform that merges original content with curated third-party articles and social posts to deliver varied brand experiences.",
		icon: "FeedMagnet.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "feedmagnet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feedmagnet\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fello",
		name: "Fello",
		website: "https://hifello.com",
		description: "Fello is a seller lead generation platform created by agents for agents. It provides modern agents with a lead funnel designed to retain serious sellers.",
		icon: "Fello.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fello:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hifello\\.com/"),
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
		id: "findmeashoe",
		name: "Findmeashoe",
		website: "https://findmeashoe.com",
		description: "Findmeashoe is a footwear recommendation portal that aims to improve shopping efficiency and experience of footwear shoppers.",
		icon: "Findmeashoe.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "findmeashoe:pageGlobal:0",
				kind: "pageGlobal",
				property: "FmasJavaScript",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "findmeashoe:pageGlobal:1",
				kind: "pageGlobal",
				property: "fmasGenderSizeTextVariantIdCollection",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "findmeashoe:pageGlobal:2",
				kind: "pageGlobal",
				property: "fmasUniversalWidgetJsFileName",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "firepush",
		name: "Firepush",
		website: "https://getfirepush.com",
		description: "Firepush is an omnichannel marketing app that helps Shopify stores to drive sales with automated web push, email and SMS campaigns.",
		icon: "Firepush.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "firepush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.firepush\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "firepush:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("fpcdn\\.me/.+shopify"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "firepush:dom:2",
				kind: "dom",
				selector: "link[href*='cdn.firepush.net']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"shopify"
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
		id: "firsthive",
		name: "FirstHive",
		website: "https://firsthive.com",
		description: "FirstHive is a full-stack customer data platform that enables consumer marketers and brands to take control of their first-party data from all sources.",
		icon: "FirstHive.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "firsthive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("firsthive\\.com/engage/"),
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
		id: "fit-analytics",
		name: "Fit Analytics",
		website: "https://www.fitanalytics.com",
		description: "Fit Analytics is a platform that provides clothing size recommendations for online customers by measuring individual dimensions via webcams.",
		icon: "Fit Analytics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fit-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fitanalytics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fit-analytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "FitAnalyticsWidget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fit-analytics:pageGlobal:2",
				kind: "pageGlobal",
				property: "_fitAnalytics",
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
		id: "fitizzy",
		name: "Fitizzy",
		website: "https://www.fitizzy.com",
		description: "Fitizzy is an omnichannel recommendation solution that assists in determining appropriate clothing sizes across various retail platforms.",
		icon: "Fitizzy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fitizzy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s\\.ftz\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fitizzy:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.fitizzy\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fitle",
		name: "Fitle",
		website: "https://fitle.com",
		description: "Fitle is a clothes size recommendation system developed in France that helps determine accurate apparel sizing based on user data.",
		icon: "Fitle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fitle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fitle\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "flable",
		name: "Flable",
		website: "https://flable.ai",
		description: "Flable is an AI-powered digital marketing platform that unifies marketing data and reduces customer acquisition costs.",
		icon: "Flable.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "flable:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.flable\\.ai"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "flable:pageGlobal:1",
				kind: "pageGlobal",
				property: "flable",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "flocktory",
		name: "Flocktory",
		website: "https://www.flocktory.com",
		description: "Flocktory is a social referral marketing platform that enables users to share personalised offers via social networks.",
		icon: "Flocktory.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "flocktory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.flocktory\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flocktory:dom:1",
				kind: "dom",
				selector: "iframe[src*='.flocktory.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "flocktory:pageGlobal:2",
				kind: "pageGlobal",
				property: "flocktory",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flocktory:pageGlobal:3",
				kind: "pageGlobal",
				property: "flocktoryPurchase",
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
		id: "flodesk",
		name: "Flodesk",
		website: "https://flodesk.com",
		description: "Flodesk is an email marketing platform that supports campaign creation, scheduling, and performance analysis using automation.",
		icon: "Flodesk.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "flodesk:pageGlobal:0",
				kind: "pageGlobal",
				property: "FlodeskObject",
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
		id: "flowbox",
		name: "Flowbox",
		website: "https://getflowbox.com",
		description: "Flowbox is a platform designed to enable brands to use social content to grow engagement, drive revenue and sell more across their marketing and commerce channels.",
		icon: "Flowbox.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "flowbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getflowbox\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flowbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "flowbox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flowbox:pageGlobal:2",
				kind: "pageGlobal",
				property: "flowboxWebpack",
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
		id: "flowtrack",
		name: "FlowTrack",
		website: "https://www.flowtrack.co",
		description: "FlowTrack is an app that consolidates multiple services into one platform, enabling websites to attract more visitors and convert them into leads.",
		icon: "FlowTrack.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "flowtrack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.flowtrack\\.co/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "fmg-suite",
		name: "FMG Suite",
		website: "https://fmgsuite.com",
		description: "FMG Suite is an automated content marketing system for financial advisors.",
		icon: "FMGSuite.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fmg-suite:pageGlobal:0",
				kind: "pageGlobal",
				property: "FMG.EbookBGType",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fmg-suite:pageGlobal:1",
				kind: "pageGlobal",
				property: "fmgjQuery.Animation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fmg-suite:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^FMG Suite$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		requires: [
			"jquery"
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
		id: "fohr",
		name: "Fohr",
		website: "https://www.fohr.co",
		description: "Fohr is a platform that improves collaboration between brands and influencers, focusing on building brands through influencer marketing.",
		icon: "Fohr.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fohr:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.fohr\\.co"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "fohr:meta:1",
				kind: "meta",
				key: "name",
				valuePattern: new RegExp("^Fohr$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "fohr:meta:2",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Fohr$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "foleon",
		name: "Foleon",
		website: "https://www.foleon.com",
		description: "Foleon is a content creation platform designed for business teams to produce engaging and intelligent content experiences at scale.",
		icon: "Foleon.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "foleon:pageGlobal:0",
				kind: "pageGlobal",
				property: "foleon",
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
		id: "fomo",
		name: "Fomo",
		website: "https://fomo.com",
		description: "Fomo is a social proof marketing platform.",
		icon: "Fomo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fomo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fomo\\.com/api/v"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fomo:pageGlobal:1",
				kind: "pageGlobal",
				property: "fomo.version",
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
		id: "formtoro",
		name: "Formtoro",
		website: "https://www.formtoro.com",
		description: "Formtoro is a platform that converts popup signups into marketing insights by collecting zero-party data through popups, quizzes, and post-purchase surveys.",
		icon: "Formtoro.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "formtoro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.formtoro\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formtoro:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.formtoro\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "forsant",
		name: "Forsant",
		website: "https://forsant.io",
		description: "Forsant is a tool that automates Google Ads setup, audience targeting, and campaign optimization, eliminating the need for manual configuration.",
		icon: "Forsant.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "forsant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.forsant\\.io"),
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
		id: "foursixty",
		name: "Foursixty",
		website: "https://foursixty.com/",
		description: "Foursixty is a widget which turns Instagram content and user-generated content into shoppable galleries.",
		icon: "Foursixty.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "foursixty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("foursixty\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "foursixty:pageGlobal:1",
				kind: "pageGlobal",
				property: "FoursixtyEmbed",
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
		id: "frase",
		name: "Frase",
		website: "https://www.frase.io",
		description: "Frase is a content system powered by AI, designed to streamline content creation processes.",
		icon: "Frase.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "frase:pageGlobal:0",
				kind: "pageGlobal",
				property: "frase",
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
		id: "frederick",
		name: "Frederick",
		website: "https://hirefrederick.com",
		description: "Frederick is an automated marketing software solution developed by MindBody to streamline and optimize marketing tasks for businesses.",
		icon: "Frederick.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "frederick:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("hirefrederick\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "freedomkit",
		name: "FreedomKit",
		website: "https://freedomkit.ai",
		description: "FreedomKit is an all-in-one online business software powered by AI that supports automation to streamline operations.",
		icon: "FreedomKit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "freedomkit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.freedomkit\\.ai"),
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
		id: "fresh-relevance",
		name: "Fresh Relevance",
		website: "https://www.freshrelevance.com",
		description: "Fresh Relevance is a personalization platform designed to create cross-channel experiences, enabling businesses to deliver customized customer interactions.",
		icon: "FreshRelevance.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "fresh-relevance:dom:0",
				kind: "dom",
				selector: "link[href*='am.freshrelevance.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "friendbuy",
		name: "Friendbuy",
		website: "https://www.friendbuy.com",
		description: "Friendbuy is a cloud-based referral marketing solution designed to help ecommerce businesses of all sizes.",
		icon: "Friendbuy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "friendbuy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net/js/friendbuy\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "friendbuy:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.fbot\\.me/friendbuy\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "friendbuy:pageGlobal:2",
				kind: "pageGlobal",
				property: "friendbuy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "friendbuy:pageGlobal:3",
				kind: "pageGlobal",
				property: "friendbuyAPI.merchantId",
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
		id: "frizbit",
		name: "Frizbit",
		website: "https://frizbit.com",
		description: "Frizbit is a marketing tool that helps digital marketeers increase web traffic and revenue by combining web push notification.",
		icon: "Frizbit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "frizbit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.frizbit\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "frizbit:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.frizbit.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "frizbit:pageGlobal:2",
				kind: "pageGlobal",
				property: "frizbit.configurationManager",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "frizbit:pageGlobal:3",
				kind: "pageGlobal",
				property: "frizbit.remoteConfigs",
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
		id: "frosmo",
		name: "Frosmo",
		website: "https://frosmo.com",
		description: "Frosmo is a SaaS company which provides AI-driven personalisation products.",
		icon: "Frosmo.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "frosmo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("frosmo\\.easy\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "frosmo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_frosmo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "frosmo:pageGlobal:2",
				kind: "pageGlobal",
				property: "frosmo",
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
		id: "fueled",
		name: "Fueled",
		website: "https://fueled.io",
		description: "Fueled is a platform that manages and analyzes first-party data for ecommerce businesses to support insights and decision making.",
		icon: "Fueled.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "fueled:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mb-cdn\\.fueled\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fueled:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("mb-cdn\\.fueled\\.io"),
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
		id: "fullpath",
		name: "Fullpath",
		website: "https://www.fullpath.com",
		description: "Fullpath is a Customer Data and Experience Platform (CDXP) for the automotive retail industry, formerly known as AutoLeadStar.",
		icon: "Fullpath.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "fullpath:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.autoleadstar\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "funnel-science",
		name: "Funnel Science",
		website: "https://www.funnelscience.com",
		description: "Funnel Science is a sales and marketing software that leverages data to provide a competitive advantage.",
		icon: "FunnelScience.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "funnel-science:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.funnelscience\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "funnelcockpit",
		name: "FunnelCockpit",
		website: "https://funnelcockpit.com",
		description: "FunnelCockpit is an all-in-one funnel builder.",
		icon: "FunnelCockpit.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "funnelcockpit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.funnelcockpit\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "funnelcockpit:dom:1",
				kind: "dom",
				selector: "a[href*='.funnelcockpit.com/'][target='_blank'], iframe[src*='.funnelcockpit.com/']",
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
		id: "funnels-of-course",
		name: "Funnels of Course",
		website: "https://funnelsofcourse.com",
		description: "Funnels of Course is an all-in-one marketing platform designed to support coaches and course creators in achieving online success.",
		icon: "FunnelsOfCourse.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "funnels-of-course:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.funnelsofcourse\\.com"),
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
		id: "funnelytics",
		name: "Funnelytics",
		website: "https://funnelytics.io",
		description: "Funnelytics is a tool designed to increase lead and customer conversions by optimizing marketing funnels for better performance and results.",
		icon: "Funnelytics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "funnelytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.funnelytics\\.io/"),
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
		id: "futy",
		name: "Futy",
		website: "https://www.futy.io",
		description: "Futy is a tool that helps convert website visitors into leads through a customer-friendly approach.",
		icon: "Futy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "futy:pageGlobal:0",
				kind: "pageGlobal",
				property: "Futy.$axios",
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
		id: "gamooga",
		name: "Gamooga",
		website: "https://www.gsecondscreen.com",
		description: "Gamooga is a marketing automation solution which helps businesses deliver personalized actions at their customers through various channels such as email, web, mobile, social and display.",
		icon: "Gamooga.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "gamooga:pageGlobal:0",
				kind: "pageGlobal",
				property: "triggerGamoogaInFooter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gamooga:pageGlobal:1",
				kind: "pageGlobal",
				property: "triggerGamoogaInFooterChat",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "geggio",
		name: "Geggio",
		website: "https://www.geggio.com",
		description: "Geggio is an all-in-one funnel tool for SMEs that integrates landing pages, emails, automations, and CRM.",
		icon: "Geggio.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "geggio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.geggio\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "geggio:pageGlobal:1",
				kind: "pageGlobal",
				property: "geggio.addElement",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "genesys-cloud",
		name: "Genesys Cloud",
		website: "https://www.genesys.com",
		description: "Genesys Cloud is an all-in-one cloud-based contact center software built to improve the customer experience.",
		icon: "Genesys Cloud.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "genesys-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.mypurecloud\\.\\w+/widgets/([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "genesys-cloud:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.mypurecloud\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "genesys-cloud:pageGlobal:2",
				kind: "pageGlobal",
				property: "PURECLOUD_WEBCHAT_FRAME_CONFIG",
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
		id: "genoo",
		name: "Genoo",
		website: "https://genoo.com",
		description: "Genoo is a provider of marketing automation and online marketing tools.",
		icon: "Genoo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [],
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
		id: "getback",
		name: "Getback",
		website: "https://www.getback.app",
		description: "Getback is a web push conversion optimization tool developed by AdFocus to help improve engagement and campaign performance through browser-based notifications.",
		icon: "Getback.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "getback:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.getback\\.ch"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "getgabs",
		name: "Getgabs",
		website: "https://getgabs.com",
		description: "Getgabs is a WhatsApp marketing automation platform that enhances sales, marketing, and support through the WhatsApp Business API.",
		icon: "Getgabs.svg",
		categories: [
			"marketing-automation",
			"api-pattern"
		],
		rules: [
			{
				id: "getgabs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getgabs\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"whatsapp-business-chat"
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
		id: "getmorestudents",
		name: "GetMoreStudents",
		website: "https://getmorestudents.net",
		description: "GetMoreStudents is a platform that supports dance studio owners in increasing class enrollment and boosting profits through marketing automation.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "getmorestudents:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.getmorestudents\\.net"),
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
		id: "getresponse",
		name: "GetResponse",
		website: "https://www.getresponse.com",
		description: "GetResponse is an email marketing app that allows you to create a mailing list and capture data onto it.",
		icon: "GetResponse.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "getresponse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getresponse\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "getresponse:dom:1",
				kind: "dom",
				selector: "form[action*='.getresponse.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "getresponse:pageGlobal:2",
				kind: "pageGlobal",
				property: "GRAPP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "getresponse:pageGlobal:3",
				kind: "pageGlobal",
				property: "GRWF2",
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
		id: "glami",
		name: "Glami",
		website: "https://www.glami.sk",
		description: "Glami is a fashion quiz system designed to personalize style recommendations based on user preferences and responses.",
		icon: "Glami.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "glami:pageGlobal:0",
				kind: "pageGlobal",
				property: "GlamiTrackerObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "glami:pageGlobal:1",
				kind: "pageGlobal",
				property: "GlamiTrackerObjectInstance",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "glami:pageGlobal:2",
				kind: "pageGlobal",
				property: "glami",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "gleam",
		name: "Gleam",
		website: "https://gleam.io",
		description: "Gleam is a marketing app that aids in expanding business email lists, ecommerce stores, SaaS businesses, and Facebook audiences.",
		icon: "Gleam.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "gleam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gleamjs\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gleam:pageGlobal:1",
				kind: "pageGlobal",
				property: "Gleam",
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
		id: "goat-systems",
		name: "Goat Systems",
		website: "https://www.thegoatsystems.com",
		description: "Goat Systems is a provider of marketing automation and CRM software designed to support business growth.",
		icon: "GoatSystems.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "goat-systems:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.thegoatsystems\\.com"),
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
		id: "goodapi",
		name: "GoodAPI",
		website: "https://thegoodapi.com",
		description: "GoodAPI is a platform that helps businesses increase conversions while supporting environmental sustainability by planting trees.",
		icon: "GoodAPI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "goodapi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thegoodapi\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "grade-us",
		name: "Grade.us",
		website: "https://www.grade.us",
		description: "Grade.us is a review management platform for marketing agencies.",
		icon: "GradeUs.svg",
		categories: [
			"marketing-automation",
			"community-ugc"
		],
		rules: [
			{
				id: "grade-us:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.grade\\.us"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "grade-us:dom:1",
				kind: "dom",
				selector: "script#gradeus-wjs, iframe[src*='www.grade.us']",
				description: "DOM selector matches a known technology marker."
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
		id: "gravito",
		name: "Gravito",
		website: "https://www.gravito.net",
		description: "Gravito is a service that enables centralized consumer consent and the collection of observed data from multiple digital touchpoints, securely integrating it with personal data.",
		icon: "Gravito.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "gravito:pageGlobal:0",
				kind: "pageGlobal",
				property: "gravito.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gravito:pageGlobal:1",
				kind: "pageGlobal",
				property: "gravitoCMP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gravito:cookie:2",
				kind: "cookie",
				key: "gravitoSync",
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
		id: "grin",
		name: "Grin",
		website: "https://grin.co/",
		description: "Grin is a influence marketing platform.",
		icon: "Grin.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "grin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("grin-sdk\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "grin:pageGlobal:1",
				kind: "pageGlobal",
				property: "Grin",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			cpe: "cpe:2.3:a:grin:grin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "grivy",
		name: "Grivy",
		website: "https://business.grivy.com",
		description: "Grivy is a platform that connects brands with consumers, facilitating engagement and interaction.",
		icon: "Grivy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "grivy:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.grivy.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "groobee",
		name: "Groobee",
		website: "https://groobee.net",
		description: "Groobee is a solution for personalized ecommerce marketing, offering features to support customer personalization.",
		icon: "Groobee.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "groobee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.groobee\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "groobee:pageGlobal:1",
				kind: "pageGlobal",
				property: "groobee",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "groove-cm",
		name: "Groove.cm",
		website: "https://groove.cm",
		description: "Groove.cm is a platform providing marketing, sales, and business tools without upfront costs, enabling businesses to focus on scaling.",
		icon: "GrooveCM.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "groove-cm:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.groove.cm']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "growave",
		name: "Growave",
		website: "https://growave.io",
		description: "Growave is the all-in-one app: social login and sharing, reviews, wishlists, instagram feed, automated emails and more.",
		icon: "Growave.svg",
		categories: [
			"marketing-automation",
			"authentication-identity"
		],
		rules: [
			{
				id: "growave:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.socialshopwave\\.com/"),
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
		id: "growsurf",
		name: "GrowSurf",
		website: "https://growsurf.com",
		description: "GrowSurf is a referral marketing software designed to automate viral growth for websites.",
		icon: "GrowSurf.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "growsurf:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.growsurf\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "growsurf:pageGlobal:1",
				kind: "pageGlobal",
				property: "growsurf.init",
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
		id: "gruvi",
		name: "Gruvi",
		website: "https://www.gruvi.tv",
		description: "Gruvi is a movie marketing network that provides promotional tools and services to the film industry, facilitating audience engagement and increasing visibility for films through targeted campaigns and digital strategies.",
		icon: "Gruvi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "gruvi:dom:0",
				kind: "dom",
				selector: "link[href*='.gruvi.tv/movies/']",
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
		id: "guuru",
		name: "Guuru",
		website: "https://www.guuru.com",
		description: "Guuru is a platform that connects shoppers with customers who share their enthusiasm for specific products or services.",
		icon: "Guuru.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "guuru:pageGlobal:0",
				kind: "pageGlobal",
				property: "Guuru",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "guuru:pageGlobal:1",
				kind: "pageGlobal",
				property: "guuru.init",
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
		id: "happy-talk",
		name: "Happy Talk",
		website: "https://www.happytalk.io/",
		description: "HappyTalk is a customer consultation tool developed in Korea that automates interactions to support business communication.",
		icon: "HappyTalk.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "happy-talk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat-static\\.happytalkio\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "happy-talk:pageGlobal:1",
				kind: "pageGlobal",
				property: "Happytalk",
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
		id: "happysync",
		name: "HappySync",
		website: "https://www.happysync.io",
		description: "HappySync is a Korean-developed tool designed for marketing automation and conversion optimization.",
		icon: "HappySync.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "happysync:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.happysync\\.io/"),
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
		id: "harafunnel",
		name: "Harafunnel",
		website: "https://en.harafunnel.com/pages/harafunnel",
		description: "Harafunnel is a marketing automation tool that integrates with Facebook Messenger Bot to streamline customer engagement.",
		icon: "Harafunnel.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "harafunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.harafunnel\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "harafunnel:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.harafunnel\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "hello-retail",
		name: "Hello Retail",
		website: "https://helloretail.com",
		description: "Hello Retail is an AI-driven platform that delivers personalized product recommendations, intelligent search, and email solutions for ecommerce.",
		icon: "HelloRetail.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hello-retail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//helloretailcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hello-retail:pageGlobal:1",
				kind: "pageGlobal",
				property: "HELLO_RETAIL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hello-retail:pageGlobal:2",
				kind: "pageGlobal",
				property: "HelloRetailSwiper",
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
		id: "hibu",
		name: "Hibu",
		website: "https://hibu.com",
		description: "Hibu is an AI-enabled platform that helps generate, manage, respond to, and convert leads while supporting ongoing customer engagement through a single provider.",
		icon: "Hibu.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hibu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.hibuwebsites\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "hibu:pageGlobal:1",
				kind: "pageGlobal",
				property: "hibuWebsiteConfig",
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
		id: "higher-logic",
		name: "Higher Logic",
		website: "https://www.higherlogic.com",
		description: "Higher Logic is a digital marketing solution provider, formerly known as Informz.",
		icon: "Higher Logic.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "higher-logic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.informz\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "higher-logic:pageGlobal:1",
				kind: "pageGlobal",
				property: "informz_trk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "highlevel",
		name: "HighLevel",
		website: "https://www.gohighlevel.com",
		description: "HighLevel is an all-in-one marketing and automation platform designed for marketing agencies and small businesses to manage CRM, marketing campaigns, sales funnels, appointment scheduling, and more.",
		icon: "HighLevel.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "highlevel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadconnectorhq\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "highlevel:pageGlobal:1",
				kind: "pageGlobal",
				property: "leadConnector.chatWidget",
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
		id: "homebot",
		name: "Homebot",
		website: "https://homebot.ai",
		description: "Homebot is a platform that converts client engagement into measurable financial transactions, enabling actionable insights and improved business outcomes.",
		icon: "Homebot.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "homebot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.homebotapp\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "homebot:pageGlobal:1",
				kind: "pageGlobal",
				property: "Homebot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "homebot:pageGlobal:2",
				kind: "pageGlobal",
				property: "Homebot.version",
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
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "homefiniti",
		name: "Homefiniti",
		website: "https://oneilinteractive.com/solutions/homefiniti/",
		description: "Homefiniti is a platform for home builders that offers tools for websites, virtual tours, and other marketing solutions.",
		icon: "Homefiniti.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "homefiniti:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Homefiniti$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hub-platform",
		name: "Hub Platform",
		website: "https://www.hub-js.com",
		description: "Hub Platform is a suite of data-driven marketing and customer experience management solutions.",
		icon: "HubPlatform.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hub-platform:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.hub-js\\.com"),
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
		id: "hubilo",
		name: "Hubilo",
		website: "https://www.hubilo.com",
		description: "Hubilo is a platform offering branded interactive experiences, AI-driven content repurposing, and behavioral analytics to maximize webinar ROI.",
		icon: "Hubilo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hubilo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.hubilo\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "hubspot",
		name: "HubSpot",
		website: "https://www.hubspot.com",
		description: "HubSpot is a marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
		icon: "HubSpot.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hubspot:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Start of Async HubSpot"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "hubspot:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hs-scripts\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hubspot:pageGlobal:2",
				kind: "pageGlobal",
				property: "_hsq",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hubspot:pageGlobal:3",
				kind: "pageGlobal",
				property: "hubspot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hubspot:dns:4",
				kind: "dns",
				valuePattern: new RegExp("hubspotemail\\.net"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "huckabuy",
		name: "Huckabuy",
		website: "https://huckabuy.com",
		description: "Huckabuy is a software product utilising Google's dynamic rendering and structured data initiatives to enhance organic channel growth.",
		icon: "Huckabuy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "huckabuy:pageGlobal:0",
				kind: "pageGlobal",
				property: "HUCKABUY NAMESPACE.sd",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "huckabuy:pageGlobal:1",
				kind: "pageGlobal",
				property: "hbScriptRerun",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hulkapps-infinite-product-options",
		name: "HulkApps Infinite Product Options",
		website: "https://www.hulkapps.com/products/infinite-product-options-shopify",
		description: "HulkApps Infinite Product Options is a unlimited custom options for products. Display variant options as buttons, color and image swatches, and more.",
		icon: "HulkApps.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "hulkapps-infinite-product-options:pageGlobal:0",
				kind: "pageGlobal",
				property: "hulkapps.po_url",
				valuePattern: new RegExp("productoption\\.hulkapps\\.com"),
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
		id: "hull",
		name: "Hull",
		website: "https://www.hull.io",
		description: "Hull is a platform that collects, unifies, enriches product, marketing, and sales data, then synchronizes it across various tools.",
		icon: "Hull.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "hull:pageGlobal:0",
				kind: "pageGlobal",
				property: "Hull._initialized",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hull:pageGlobal:1",
				kind: "pageGlobal",
				property: "Hull.js._initialized",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hull:pageGlobal:2",
				kind: "pageGlobal",
				property: "HullShopify",
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
		id: "hushly",
		name: "Hushly",
		website: "https://www.hushly.com",
		description: "Hushly is an all-in-one B2B marketing software platform.",
		icon: "Hushly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "hushly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hushly\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hushly:dom:1",
				kind: "dom",
				selector: "link[href*='.hushly.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "hushly:pageGlobal:2",
				kind: "pageGlobal",
				property: "__hly_widget_object",
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
		id: "hyperia",
		name: "Hyperia",
		website: "https://www.hyperia.sk",
		description: "Hyperia is a tool designed for lead generation and affiliate marketing.",
		icon: "Hyperia.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "hyperia:pageGlobal:0",
				kind: "pageGlobal",
				property: "_config.base_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hyperia:pageGlobal:1",
				kind: "pageGlobal",
				property: "_config.socket_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hyperia:pageGlobal:2",
				kind: "pageGlobal",
				property: "_config.tracker_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "icegram",
		name: "Icegram",
		website: "https://www.icegram.com",
		description: "Icegram is a WordPress plugin designed to grow subscribers and increase conversions.",
		icon: "Icegram.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "icegram:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/icegram/.*main\\.min\\.js\\?ver=([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "icegram:pageGlobal:1",
				kind: "pageGlobal",
				property: "Icegram",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "icegram:pageGlobal:2",
				kind: "pageGlobal",
				property: "icegram_data",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "icomm",
		name: "icomm",
		website: "https://icommkt.com",
		description: "icomm is a platform that helps companies manage their marketing automation strategy using AI-powered tools.",
		icon: "icomm.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "icomm:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.icommarketing\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "icomm:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^ICOMMKT$"),
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
		id: "icomm-notifications-hub",
		name: "icomm - Notifications Hub",
		website: "https://icommkt.com",
		description: "Notifications Hub is an omnichannel marketing automation platform powered by AI.0",
		icon: "icomm.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "icomm-notifications-hub:pageGlobal:0",
				kind: "pageGlobal",
				property: "wpnObject.origin",
				valuePattern: new RegExp("2"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"icomm"
		],
		excludes: [
			"titanpush"
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
		id: "ifdo",
		name: "Ifdo",
		website: "https://ifdo.co.kr/",
		description: "Ifdo is a marketing and segmentation tool ",
		icon: "Ifdo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ifdo:pageGlobal:0",
				kind: "pageGlobal",
				property: "_NBIFDOBODYINNERHTML",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ifdo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_NBIFDOHEADCSSFILE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ifdo:pageGlobal:2",
				kind: "pageGlobal",
				property: "_NBIFDOHEADINNERHTML",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "igodigital",
		name: "iGoDigital",
		website: "https://www.igodigital.com",
		description: "iGoDigital provides web-based commerce tools, personalisation, and product recommendations designed to increase customer interaction.",
		icon: "default.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "igodigital:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.igodigital\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "indi",
		name: "Indi",
		website: "https://indi.com",
		description: "Indi is a video social network where everyone - artists, brands, retailers, nonprofits, celebrities and individuals - can connect with fans and supporters to interact directly with your brand utilising exclusive Video Challenges and Video Threads tailor made by you.",
		icon: "Indi.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "indi:pageGlobal:0",
				kind: "pageGlobal",
				property: "indi.formatStats",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "indi:pageGlobal:1",
				kind: "pageGlobal",
				property: "indiCountly.check_any_consent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "indi:pageGlobal:2",
				kind: "pageGlobal",
				property: "indi_carousel.productCta",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "influence",
		name: "Influence",
		website: "https://useinfluence.co",
		description: "Influence is a conversion optimisation tool for ecommerce that leverages real-time social proof.",
		icon: "Influence.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "influence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.useinfluence\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "influence:pageGlobal:1",
				kind: "pageGlobal",
				property: "Influence",
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
		id: "informa-markets",
		name: "Informa Markets",
		website: "https://www.informamarkets.com",
		description: "Informa Markets is a platform that facilitates trade, innovation, and growth across various industries and specialist markets.",
		icon: "InformaMarkets.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "informa-markets:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connect\\.informamarkets\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "insided",
		name: "inSided",
		website: "https://www.insided.com",
		description: "inSided is the only Customer Success Community Platform built to help SaaS companies improve customer success and retention.",
		icon: "inSided.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "insided:pageGlobal:0",
				kind: "pageGlobal",
				property: "inSidedData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "insided:pageGlobal:1",
				kind: "pageGlobal",
				property: "insided",
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
		id: "insider",
		name: "Insider",
		website: "https://useinsider.com",
		description: "Insider is the first integrated Growth Management Platform helping digital marketers drive growth across the funnel, from Acquisition to Activation, Retention, and Revenue from a unified platform powered by Artificial Intelligence and Machine Learning.",
		icon: "Insider.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "insider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.useinsider\\.\\w+/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "insider:pageGlobal:1",
				kind: "pageGlobal",
				property: "Insider",
				confidence: 20,
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
		id: "integrately",
		name: "Integrately",
		website: "https://integrately.com",
		description: "Integrately is a click automation software that enables connection of multiple applications.",
		icon: "Integrately.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "integrately:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.integrately\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "integrately:dom:1",
				kind: "dom",
				selector: "input[value*='app.integrately.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "interago",
		name: "Interago",
		website: "https://www.interago.com.br",
		description: "Interago is a Brazilian platform that aggregates modern digital tools to support and streamline online business operations.",
		icon: "Interago.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "interago:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.interago\\.com\\.br"),
				description: "Script content contains a bounded technology signature."
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
		id: "intice",
		name: "Intice",
		website: "https://intice.com",
		description: "Intice is a lead conversion tool designed for the automotive industry, streamlining customer engagement and improving the conversion process from inquiries to sales.",
		icon: "Intice.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "intice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tools\\.inticeinc\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "intice:pageGlobal:1",
				kind: "pageGlobal",
				property: "intice",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "intice:pageGlobal:2",
				kind: "pageGlobal",
				property: "inticeAllEvents",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "intice:pageGlobal:3",
				kind: "pageGlobal",
				property: "inticeIMP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "intice:pageGlobal:4",
				kind: "pageGlobal",
				property: "inticeLeadmakerAnalytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "invoca",
		name: "Invoca",
		website: "https://www.invoca.com",
		description: "Invoca is an AI-powered call tracking and conversational analytics company.",
		icon: "Invoca.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "invoca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dialogtech\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "invoca:pageGlobal:1",
				kind: "pageGlobal",
				property: "Invoca.PNAPI.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "invoca:pageGlobal:2",
				kind: "pageGlobal",
				property: "InvocaTagId",
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
		id: "iterable",
		name: "Iterable",
		website: "https://iterable.com",
		description: "Iterable is a cross-channel marketing platform that powers unified customer experiences.",
		icon: "Iterable.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "iterable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.iterable\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "iterable:pageGlobal:1",
				kind: "pageGlobal",
				property: "iterableAnalytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "izooto",
		name: "Izooto",
		website: "https://www.izooto.com",
		description: "iZooto is a user engagement and retention tool that leverages web push notifications to help business to drive repeat traffic, leads and sales.",
		icon: "Izooto.svg",
		categories: [
			"marketing-automation",
			"widgets-misc"
		],
		rules: [
			{
				id: "izooto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.izooto\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "izooto:pageGlobal:1",
				kind: "pageGlobal",
				property: "Izooto",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "izooto:pageGlobal:2",
				kind: "pageGlobal",
				property: "_izooto",
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
		id: "jabmo",
		name: "Jabmo",
		website: "https://jabmo.com",
		description: "Jabmo is a software platform that automates lead generation by tracking and analyzing website visitor activity.",
		icon: "Jabmo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "jabmo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("/jabmo\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "jeeng",
		name: "Jeeng",
		website: "https://www.jeeng.com",
		description: "Jeeng is a personalized notification platform that delivers targeted updates based on user preferences and engagement patterns.",
		icon: "Jeeng.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "jeeng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.jeeng\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jeeng:pageGlobal:1",
				kind: "pageGlobal",
				property: "jeeng_attribution",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "jivox",
		name: "Jivox",
		website: "https://jivox.com",
		description: "Jivox is a cloud-based, data-driven platform for delivering personalised digital advertising and marketing experiences at scale.",
		icon: "Jivox.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "jivox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jivox\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jivox:dom:1",
				kind: "dom",
				selector: "link[href*='.jivox.com']",
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
		id: "jubna",
		name: "Jubna",
		website: "https://www.jubna.com",
		description: "Jubna is a content recommendation engine that delivers personalized suggestions by analyzing user behavior and preferences.",
		icon: "Jubna.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "jubna:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jubna\\.com"),
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
		id: "juicer",
		name: "Juicer",
		website: "https://www.juicer.io",
		description: "Juicer is a tool that aggregates brand hashtags and social media posts into a unified feed for websites, enabling moderation and content curation.",
		icon: "Juicer.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "juicer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.juicer\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "juicer:pageGlobal:1",
				kind: "pageGlobal",
				property: "Juicer.Active",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "juicer:pageGlobal:2",
				kind: "pageGlobal",
				property: "JuicerBackbone.$",
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
				"payg"
			]
		}
	},
	{
		id: "justuno",
		name: "Justuno",
		website: "https://www.justuno.com",
		description: "Justuno is a visitor conversion optimisation platform.",
		icon: "Justuno.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "justuno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.jst\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "justuno:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.justuno\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "justuno:pageGlobal:2",
				kind: "pageGlobal",
				property: "JustunoApp",
				description: "Page-owned global matches a known technology marker."
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
		id: "kaisa",
		name: "Kaisa",
		website: "https://www.kaisa.io",
		description: "Kaisa is a platform that leverages data to maintain buyer and seller engagement through personalised customer experiences on a large scale.",
		icon: "Kaisa.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kaisa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.freespee\\.com/js/external/fs\\.(?:min\\.)?js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "kamozi",
		name: "Kamozi",
		website: "https://kamozi.io",
		description: "Kamozi is a system designed to support brand growth and increase ecommerce revenue through integrated tools and strategies.",
		icon: "Kamozi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kamozi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trust\\.kamozi\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kamozi:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.kamozi\\.io"),
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
		id: "kartra",
		name: "Kartra",
		website: "https://home.kartra.com",
		description: "Kartra is an online business platform that offers marketing and sales tools.",
		icon: "Kartra.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kartra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.kartra\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kartra:dom:1",
				kind: "dom",
				selector: "form[action*='app.kartra.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kartra:pageGlobal:2",
				kind: "pageGlobal",
				property: "init_kartra_tracking",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kartra:pageGlobal:3",
				kind: "pageGlobal",
				property: "kartra_tracking_loaded",
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
		id: "kasika",
		name: "Kasika",
		website: "https://cocolive.co.jp/",
		description: "Kasika is a Japanese marketing automation tool developed by CocoLive.",
		icon: "Kasika.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kasika:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panda\\.kasika\\.io/"),
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
		id: "keabuilder",
		name: "KeaBuilder",
		website: "https://keabuilder.com",
		description: "KeaBuilder is a platform that provides intelligent insights, strategic recommendations, advanced tools, and seamless integrations to strengthen online presence and support business growth.",
		icon: "KeaBuilder.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "keabuilder:dom:0",
				kind: "dom",
				selector: "link[href*='assets.keabuilder.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "keymailer",
		name: "Keymailer",
		website: "https://keymailer.co",
		description: "Keymailer is a game influencer marketing platform that integrates creators, software, and services into one portal.",
		icon: "Keymailer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "keymailer:pageGlobal:0",
				kind: "pageGlobal",
				property: "Keymailer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "keymailer:pageGlobal:1",
				kind: "pageGlobal",
				property: "KeymailerJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "keymailer:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Keymailer$"),
				description: "Meta tag matches a known technology marker."
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
		id: "keywee",
		name: "Keywee",
		website: "https://keywee.co",
		description: "Keywee is a platform and managed service designed to support paid media and content distribution operations.",
		icon: "Keywee.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "keywee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.keywee\\.co"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kibo-personalization",
		name: "Kibo Personalization",
		website: "https://kibocommerce.com/personalization-software",
		description: "Kibo Personalization is a omnichannel personalisation software powered by machine learning to deliver individualized customer experiences and powered by Monetate and Certona.",
		icon: "Kibo.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "kibo-personalization:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.baynote\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kibo-personalization:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.certona\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kibo-personalization:pageGlobal:2",
				kind: "pageGlobal",
				property: "BaynoteAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kibo-personalization:pageGlobal:3",
				kind: "pageGlobal",
				property: "BaynoteJSVersion",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kibo-personalization:pageGlobal:4",
				kind: "pageGlobal",
				property: "certona.recommendations",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kibo-personalization:pageGlobal:5",
				kind: "pageGlobal",
				property: "certonaRecommendations",
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
		id: "kiliba",
		name: "Kiliba",
		website: "https://en.kiliba.com",
		description: "Kiliba has developed a module that automates the marketing process from creating an email to distributing it.",
		icon: "Kiliba.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kiliba:url:0",
				kind: "url",
				pattern: new RegExp("/modules/kiliba/logo\\.png"),
				description: "Page URL matches a known technology marker."
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
		id: "kit",
		name: "Kit",
		website: "https://kit.com/fanbridge",
		description: "Kit is a platform that provides email, mobile, and social list management tools for organizing, managing, and engaging contact audiences across digital communication channels.",
		icon: "Kit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.fanbridge\\.com/"),
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
		id: "kiwi-sizing",
		name: "Kiwi Sizing",
		website: "https://www.kiwisizing.com",
		description: "Kiwi Sizing is a size chart and a recommender plugin on the Shopify platform.",
		icon: "Kiwi Sizing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kiwi-sizing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.static\\.kiwisizing\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kiwi-sizing:pageGlobal:1",
				kind: "pageGlobal",
				property: "KiwiSizing",
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
		id: "kizen",
		name: "Kizen",
		website: "https://kizen.com",
		description: "Kizen is an automation and AI personalization solution designed to simplify and accelerate the adoption of relevant AI technologies in the healthcare, insurance, and financial services industries.",
		icon: "Kizen.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kizen:dom:0",
				kind: "dom",
				selector: "a[data-kizen-track]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kizen:pageGlobal:1",
				kind: "pageGlobal",
				property: "KIZEN",
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
		id: "klangoo",
		name: "Klangoo",
		website: "https://klangoo.com",
		description: "Klangoo is an AI-based audience engagement solution designed to enhance user interaction and optimise content delivery.",
		icon: "Klangoo.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "klangoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klangoo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "klaviyo",
		name: "Klaviyo",
		website: "https://www.klaviyo.com/",
		description: "Klaviyo is an email marketing platform for online businesses.",
		icon: "Klaviyo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "klaviyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("klaviyo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "klaviyo:pageGlobal:1",
				kind: "pageGlobal",
				property: "KlaviyoSubscribe",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klaviyo:pageGlobal:2",
				kind: "pageGlobal",
				property: "klaviyo",
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
		id: "klaviyo-data-platform",
		name: "Klaviyo Data Platform",
		website: "https://www.klaviyo.com/solutions/customer-data-platform",
		description: "Klaviyo Data Platform is Klaviyo's CDP offering.",
		icon: "Klaviyo.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "klaviyo-data-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static-tracking\\.klaviyo\\.com/onsite/js/web_personalization"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "klickpages",
		name: "KlickPages",
		website: "https://klickpages.com.br",
		description: "KlickPages is a landing page management software designed to help businesses execute email marketing campaigns and capture leads.",
		icon: "KlickPages.svg",
		categories: [
			"marketing-automation",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "klickpages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klickpages\\.com\\.br/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "klickpages:pageGlobal:1",
				kind: "pageGlobal",
				property: "klickart.analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klickpages:meta:2",
				kind: "meta",
				key: "klickart:url",
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
		id: "klicktipp",
		name: "KlickTipp",
		website: "https://www.klicktipp.com",
		description: "KlickTipp is an email marketing service offering a range of features for businesses, including newsletter creation, SMS functionality, and marketing automation tools.",
		icon: "KlickTipp.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "klicktipp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.klicktipp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "klicktipp:dom:1",
				kind: "dom",
				selector: "form[action*='app.klicktipp.com/api']",
				description: "DOM selector matches a known technology marker."
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
		id: "kliken",
		name: "Kliken",
		website: "https://www.kliken.com/#sitewit",
		description: "Kliken is a shopping and ads marketing platform that helps businesses create, manage, and optimize online advertising campaigns.",
		icon: "Kliken.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kliken:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.sitewit\\.com/"),
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
		id: "knock",
		name: "Knock",
		website: "https://www.knockcrm.com",
		description: "Knock is a platform offering insights into marketing, leasing, and renewals for the real estate sector.",
		icon: "Knock.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "knock:pageGlobal:0",
				kind: "pageGlobal",
				property: "knockDoorway",
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
		id: "kochava",
		name: "Kochava",
		website: "https://www.kochava.com",
		description: "Kochava is a unified platform for audience attribution and analytics, enabling accurate measurement and optimization of marketing performance across channels.",
		icon: "Kochava.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kochava:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.kochava\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kommi",
		name: "Kommi",
		website: "https://kommi.io",
		description: "Kommi is a provider of digital marketing services.",
		icon: "Kommi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kommi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracker\\.kommi\\.io/"),
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
		id: "kukui",
		name: "KUKUI",
		website: "https://www.kukui.com",
		description: "KUKUI is an all-in-one solution designed to enhance profitability, streamline lead management, and boost customer engagement for shop marketing.",
		icon: "KUKUI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kukui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kukui\\.com/"),
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
		id: "kulea-marketing",
		name: "Kulea Marketing",
		website: "https://kulea.ma",
		description: "Kulea Marketing is a provider of inbound marketing and marketing automation software designed to streamline campaign management and customer engagement.",
		icon: "KuleaMarketing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kulea-marketing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.prod\\.kulea\\.marketing/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kwanko",
		name: "Kwanko",
		website: "https://www.kwanko.com",
		description: "Kwanko is a digital marketing platform.",
		icon: "Kwanko.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kwanko:pageGlobal:0",
				kind: "pageGlobal",
				property: "kwankoDataPTAG.zone",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kwanzoo",
		name: "Kwanzoo",
		website: "https://www.kwanzoo.com",
		description: "Kwanzoo is an AI-powered GTM automation platform that enables adaptive account-based marketing.",
		icon: "Kwanzoo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "kwanzoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ads\\.kwanzoo\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "lead-concept",
		name: "Lead Concept",
		website: "https://www.lead-concept.com",
		description: "Lead Concept is a system designed to generate potential customer leads.",
		icon: "LeadConcept.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lead-concept:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lead-concept\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lead-prosper",
		name: "Lead Prosper",
		website: "https://leadprosper.io",
		description: "Lead Prosper is a lead distribution platform that facilitates connections between lead suppliers and lead buyers.",
		icon: "LeadProsper.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lead-prosper:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.leadprosper\\.io"),
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
		id: "leadbyte",
		name: "LeadByte",
		website: "https://www.leadbyte.co.uk",
		description: "LeadByte is a lead management platform that helps businesses capture, validate, and distribute leads in real time to optimize revenue conversion.",
		icon: "LeadByte.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadbyte:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadbyte\\.co\\.uk/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leadbyte:dom:1",
				kind: "dom",
				selector: "form[action*='.leadbyte.co.uk/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadferno",
		name: "Leadferno",
		website: "https://leadferno.com",
		description: "Leadferno is a conversion platform to increase your website leads.",
		icon: "Leadferno.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadferno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.leadferno\\.com"),
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
		id: "leads2b",
		name: "Leads2b",
		website: "https://leads2b.com",
		description: "Leads2b is a prospecting system that helps identify and access company data from Brazil for sales, marketing, and business development purposes.",
		icon: "Leads2b.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leads2b:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app\\.leads2b\\.com/"),
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
		id: "leadsbridge",
		name: "LeadsBridge",
		website: "https://leadsbridge.com",
		description: "LeadsBridge is an all-in-one solution for lead generation.",
		icon: "LeadsBridge.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadsbridge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("leadsbridge\\.com/"),
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
		id: "leadscore",
		name: "LeadScore",
		website: "https://www.leadscore.io/",
		description: "LeadScore is an inbound marketing automation system facilitating streamlined digital marketing processes.",
		icon: "LeadScore.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadscore:pageGlobal:0",
				kind: "pageGlobal",
				property: "trackLeadScore",
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
		id: "leadsleap",
		name: "LeadsLeap",
		website: "https://leadsleap.com",
		description: "LeadsLeap is a lead generation system designed to collect, manage, and organize potential customer data to support marketing and sales workflows.",
		icon: "LeadsLeap.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadsleap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pjs\\.leadsleap\\.net"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadslide",
		name: "LeadSlide",
		website: "https://v1.leadslide.com",
		description: "LeadSlide is a marketing campaign software designed for wordpress, ecommerce, and Shopify.",
		icon: "LeadSlide.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadslide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("leadslide\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadspace",
		name: "Leadspace",
		website: "https://www.leadspace.com",
		description: "Leadspace is a customer data platform catering to B2B sales and marketing needs.",
		icon: "Leadspace.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "leadspace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sfc\\.leadspace\\.com/"),
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
		id: "leadsquared",
		name: "Leadsquared",
		website: "https://www.leadsquared.com",
		description: "Leadsquared is a marketing automation software suite.",
		icon: "Leadsquared.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "leadsquared:pageGlobal:0",
				kind: "pageGlobal",
				property: "leadsquared",
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
		id: "leanplum",
		name: "Leanplum",
		website: "https://www.leanplum.com",
		description: "Leanplum is a multi-channel messaging and campaign orchestration platform.",
		icon: "Leanplum.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "leanplum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("npm/leanplum-sdk\\@([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "leanplum:pageGlobal:1",
				kind: "pageGlobal",
				property: "Leanplum",
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
		id: "lexer",
		name: "Lexer",
		website: "https://www.lexer.io",
		description: "Lexer is a platform providing AI-powered tools for managing customer data and automating business workflows.",
		icon: "Lexer.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "lexer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.lexer\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lexer:pageGlobal:1",
				kind: "pageGlobal",
				property: "___lexer_tag",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "liftigniter",
		name: "LiftIgniter",
		website: "https://www.liftigniter.com",
		description: "LiftIgniter is a personalized content system designed to tailor recommendations and content to individual users based on their preferences and behaviours.",
		icon: "LiftIgniter.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "liftigniter:dom:0",
				kind: "dom",
				selector: "phoenix-script[script-id*='liftigniter-init']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "liftigniter:pageGlobal:1",
				kind: "pageGlobal",
				property: "liftIgniterLoadPromise",
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
		id: "limespot",
		name: "LimeSpot",
		website: "https://www.limespot.com",
		description: "LimeSpot is an AI-powered personalisation platform for marketers and ecommerce professionals.",
		icon: "LimeSpot.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "limespot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.personalizer\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "limespot:pageGlobal:1",
				kind: "pageGlobal",
				property: "LimeSpot.CartItems",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "limespot:pageGlobal:2",
				kind: "pageGlobal",
				property: "LimeSpot.Recommendations",
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
		id: "linda",
		name: "Linda",
		website: "https://linda.co",
		description: "Linda is a provider of local marketing software designed for businesses to enhance online marketing, generate leads, and increase revenue.",
		icon: "Linda.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "linda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gb-widget\\.linda\\.co"),
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
		id: "line-up",
		name: "Line-Up",
		website: "https://www.line-up.tickets",
		description: "Line-Up is an event discovery service that organizes and presents local activities, shows, and gatherings to help audiences access timely information about upcoming events.",
		icon: "Line-Up.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "line-up:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.lineupnow\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "line-up:pageGlobal:1",
				kind: "pageGlobal",
				property: "LineupPurchaseLoader.baseId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "line-up:pageGlobal:2",
				kind: "pageGlobal",
				property: "LineupSDKLoader.baseId",
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
		id: "linguana",
		name: "Linguana",
		website: "https://www.linguana.io/",
		description: "Linguana is a tool that provides AI-driven multi-language support ensuring SEO performance with translations and translated slugs for seamless multilingual user experiences.",
		icon: "Linguana.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "linguana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.linguana\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linguana:pageGlobal:1",
				kind: "pageGlobal",
				property: "LINGUANA_MAIN_LANGUAGE_CODE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "linguana:pageGlobal:2",
				kind: "pageGlobal",
				property: "LINGUANA_SHOW_LANGUAGE_CODE",
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
		id: "linkfire",
		name: "Linkfire",
		website: "https://www.linkfire.com",
		description: "Linkfire is a smart links tool designed for music marketing.",
		icon: "Linkfire.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "linkfire:pageGlobal:0",
				kind: "pageGlobal",
				property: "linkfire.linkfireUrl",
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
		id: "linkz",
		name: "Linkz",
		website: "https://linkz.ai",
		description: "Linkz is a platform designed to maximize visitor retention by optimizing user engagement and interaction across digital channels.",
		icon: "Linkz.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "linkz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.linkz\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "linkz:pageGlobal:1",
				kind: "pageGlobal",
				property: "LINKZ_AI_ACTIVATED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "linkz:pageGlobal:2",
				kind: "pageGlobal",
				property: "LINKZ_AI_KEY",
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
		id: "listrak",
		name: "Listrak",
		website: "https://www.listrak.com",
		description: "Listrak is a AI-based marketing automation and CRM solutions that unify, interpret and personalise data to engage customer across channels and devices.",
		icon: "Listrak.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "listrak:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|s1)\\.listrakbi\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "listrak:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("services\\.listrak\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "listrak:pageGlobal:2",
				kind: "pageGlobal",
				property: "_LTKSignup",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "listrak:pageGlobal:3",
				kind: "pageGlobal",
				property: "_LTKSubscriber",
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
		id: "localiq-live-chat",
		name: "LocaliQ Live Chat",
		website: "https://localiq.com",
		description: "LocaliQ Live Chat is a customer support tool that enables real-time responses to questions while capturing essential customer information.",
		icon: "LocaliQ.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "localiq-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reachlocallivechat\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "localsignal",
		name: "LocalSignal",
		website: "https://www.localsignal.com",
		description: "LocalSignal is a platform that provides advanced tools for managing and optimizing local marketing activities across digital channels.",
		icon: "LocalSignal.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "localsignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.localsignal\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lofty",
		name: "Lofty",
		website: "https://lofty.com",
		description: "Lofty is an all-in-one platform for real estate professionals that automates marketing campaigns and facilitates lead capture and conversion.",
		icon: "Lofty.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lofty:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.lofty\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "loops",
		name: "Loops",
		website: "https://loops.so",
		description: "Loops is a platform that simplifies email marketing for SaaS companies, offering campaign creation and tracking.",
		icon: "Loops.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "loops:dom:0",
				kind: "dom",
				selector: "form[action*='app.loops.so/']",
				description: "DOM selector matches a known technology marker."
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
		id: "lotlinx",
		name: "LotLinx",
		website: "https://lotlinx.com/",
		description: "LotLinx is a provider of digital retailing and marketing technologies for the automotive industry.",
		icon: "LotLinx.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lotlinx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lotlinx\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lotlinx:pageGlobal:1",
				kind: "pageGlobal",
				property: "LXLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lotlinx:pageGlobal:2",
				kind: "pageGlobal",
				property: "LotLinxID",
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
		id: "lumise",
		name: "Lumise",
		website: "https://lumise.com",
		description: "Lumise is a solution for personalisation stores, featuring a product designer tool compatible with Woocommerce, PHP, Magento, Opencart, and other CMS platforms.",
		icon: "Lumise.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lumise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lumise\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lumise:pageGlobal:1",
				kind: "pageGlobal",
				property: "lumise",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "lunio",
		name: "Lunio",
		website: "https://lunio.ai",
		description: "Lunio is a tool that enhances marketing efficiency by removing invalid traffic from paid marketing channels, enabling advertisers to reach a larger audience within the same budget.",
		icon: "Lunio.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "lunio:pageGlobal:0",
				kind: "pageGlobal",
				property: "LunioClientData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lunio:pageGlobal:1",
				kind: "pageGlobal",
				property: "LunioTrackConversion",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lunio:pageGlobal:2",
				kind: "pageGlobal",
				property: "lunioScript",
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
		id: "lytics",
		name: "Lytics",
		website: "https://www.lytics.com",
		description: "Lytics is a customer data platform built for marketing teams.",
		icon: "Lytics.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "lytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lytics\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lytics:pageGlobal:1",
				kind: "pageGlobal",
				property: "__lytics__jstag__.version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
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
		id: "maatoo",
		name: "Maatoo",
		website: "https://maatoo.io",
		description: "Maatoo is an all-in-one marketing tool designed to streamline campaign management, customer engagement, and analytics in a single platform.",
		icon: "Maatoo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "maatoo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.maatoo\\.io"),
				description: "Script content contains a bounded technology signature."
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
		id: "madcap-software",
		name: "MadCap Software",
		website: "https://www.madcapsoftware.com",
		description: "MadCap Software is a company that specialises in creating software tools for technical writers to author and publish various types of content, including user manuals, online help systems, and knowledge bases.",
		icon: "MadCap Software.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "madcap-software:pageGlobal:0",
				kind: "pageGlobal",
				property: "MadCap.Accessibility",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "madcap-software:pageGlobal:1",
				kind: "pageGlobal",
				property: "MadCap.DEBUG",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "madkudu",
		name: "MadKudu",
		website: "https://www.madkudu.com",
		description: "MadKudu is a platform that enhances sales and marketing systems by providing actionable predictive analytics, enabling businesses to optimize strategies with data-driven insights.",
		icon: "MadKudu.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "madkudu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.madkudu\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "madkudu:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.madkudu.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "maestra",
		name: "Maestra",
		website: "https://maestra.io",
		description: "Maestra is an all-in-one marketing platform designed to support the growth and scaling of brands.",
		icon: "Maestra.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "maestra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.maestra\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "maestra:pageGlobal:1",
				kind: "pageGlobal",
				property: "maestra.queue",
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
		id: "magnews",
		name: "Magnews",
		website: "https://www.magnews.it",
		description: "Magnews is an AI-driven marketing platform designed to support omnichannel customer journey management.",
		icon: "Magnews.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "magnews:dom:0",
				kind: "dom",
				selector: "form[action*='.magnews.net/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "maguru",
		name: "Maguru",
		website: "https://www.maguru.dk",
		description: "Maguru is a marketing tool designed to help organizations manage and execute promotional activities.",
		icon: "Maguru.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "maguru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("go\\.maguru\\.dk"),
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
		id: "mailchimp",
		name: "MailChimp",
		website: "https://mailchimp.com",
		description: "Mailchimp is a marketing automation platform and email marketing service.",
		icon: "mailchimp.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "mailchimp:html:0",
				kind: "html",
				pattern: new RegExp("<input [^>]*id=\"mc-email\""),
				confidence: 20,
				description: "HTML contains a known technology marker."
			},
			{
				id: "mailchimp:html:1",
				kind: "html",
				pattern: new RegExp("<!-- Begin MailChimp Signup Form -->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "mailchimp:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("s3\\.amazonaws\\.com/downloads\\.mailchimp\\.com/js/mc-validate\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mailchimp:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-images\\.mailchimp\\.com/[^>]*\\.css"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mailchimp:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("chimpstatic\\.com/mcjs-connected"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mailchimp:url:5",
				kind: "url",
				pattern: new RegExp("^https?://(?:www\\.)?mailchi\\.mp"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "mailchimp:dom:6",
				kind: "dom",
				selector: "form#mc-embedded-subscribe-form",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mailchimp:dom:7",
				kind: "dom",
				selector: "form[name*='mc-embedded-subscribe-form']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mailchimp:dom:8",
				kind: "dom",
				selector: "form[class*='mailchimp-ext-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mailchimp:dom:9",
				kind: "dom",
				selector: "input#mc-email",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mailchimp:dns:10",
				kind: "dns",
				valuePattern: new RegExp("spf\\.mandrillapp\\.com"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			],
			cpe: "cpe:2.3:a:thinkshout:mailchimp:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mailocator",
		name: "Mailocator",
		website: "https://mailocator.com",
		description: "Mailocator is a display platform designed to enhance conversions by facilitating lead collection, data gathering, and sales growth.",
		icon: "Mailocator.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mailocator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.mailocator\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "mailocator:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mailocator5",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mailocator:pageGlobal:2",
				kind: "pageGlobal",
				property: "MailocatorTestDisplay",
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
		id: "mailshake",
		name: "Mailshake",
		website: "https://mailshake.com",
		description: "Mailshake is an AI-powered sales engagement and B2B lead management platform for creating, automating, and tracking outreach campaigns.",
		icon: "Mailshake.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mailshake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mailshake\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mailshake:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mailshake.clearRecipient",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "majin",
		name: "MAJIN",
		website: "https://ma-jin.jp",
		description: "MAJIN reads the hearts and minds of each customer using real-world data to automate optimal marketing processes.",
		icon: "MAJIN.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "majin:pageGlobal:0",
				kind: "pageGlobal",
				property: "ma.Touch",
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
		id: "manychat",
		name: "ManyChat",
		website: "https://manychat.com/",
		description: "ManyChat is a service that allows you to create chatbots for Facebook Messenger.",
		icon: "ManyChat.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "manychat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.manychat\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "manychat:pageGlobal:1",
				kind: "pageGlobal",
				property: "mcwidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "manycontacts",
		name: "ManyContacts",
		website: "https://www.manycontacts.com",
		description: "ManyContacts is an attention-grabbing contact form sitting on top of your website that helps to increase conversion by converting visitors into leads.",
		icon: "ManyContacts.svg",
		categories: [
			"marketing-automation",
			"widgets-misc",
			"form-schema-library"
		],
		rules: [
			{
				id: "manycontacts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.manycontacts\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "markate",
		name: "Markate",
		website: "https://www.markate.com",
		description: "Markate is an all-in-one CRM and sales and marketing automation platform.",
		icon: "Markate.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "markate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.markate\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "markate:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Markate$"),
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
		id: "markethero",
		name: "MarketHero",
		website: "https://markethero.io",
		description: "Market Hero is a platform that automates ROI calculations for ecommerce businesses, streamlining financial performance tracking and providing data-driven insights.",
		icon: "MarketHero.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "markethero:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("tracking\\.markethero\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "marketify",
		name: "Marketify",
		website: "https://marketify.co",
		description: "Marketify is an app designed to engage audiences, expand email lists, and increase conversion rates.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "marketify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.marketify\\.co"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "marketo",
		name: "Marketo",
		website: "https://www.marketo.com",
		description: "Marketo develops and sells marketing automation software for account-based marketing and other marketing services and products including SEO and content creation.",
		icon: "Marketo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "marketo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("munchkin\\.marketo\\.\\w+/(?:([\\d.]+)/)?munchkin\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marketo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Munchkin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "marketo:cookie:2",
				kind: "cookie",
				key: "_mkto_trk",
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
		id: "mautic",
		name: "Mautic",
		website: "https://www.mautic.org/",
		description: "Mautic is a free and open-source marketing automation tool for Content Management, Social Media, Email Marketing, and can be used for the integration of social networks, campaign management, forms, questionnaires, reports, etc.",
		icon: "mautic.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mautic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[^a-z]mtc.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mautic:pageGlobal:1",
				kind: "pageGlobal",
				property: "MauticFormValidations",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mautic:pageGlobal:2",
				kind: "pageGlobal",
				property: "MauticSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mautic:pageGlobal:3",
				kind: "pageGlobal",
				property: "MauticTrackingObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:mautic:mautic:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "maxemail",
		name: "Maxemail",
		website: "https://maxemail.xtremepush.com",
		icon: "Maxemail.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "maxemail:pageGlobal:0",
				kind: "pageGlobal",
				property: "Mxm.Basket",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "maxemail:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mxm.FormHandler",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "maxemail:pageGlobal:2",
				kind: "pageGlobal",
				property: "Mxm.Tracker",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mdirector",
		name: "MDirector",
		website: "https://www.mdirector.com",
		description: "MDirector is an all-in-one digital marketing platform that centralizes email, SMS, and automation tools to manage campaigns and analyze audience engagement.",
		icon: "MDirector.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mdirector:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/mdirector-newsletter/public/js/mdirector-newsletter-public\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mdirector:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.mdirector\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
			"wordpress"
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
		id: "mega",
		name: "Mega",
		website: "https://www.gomega.ai",
		description: "Mega is a platform that applies artificial intelligence to automate and improve search engine optimization processes and paid advertising campaign performance.",
		icon: "Mega.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mega:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gomega\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mega:pageGlobal:1",
				kind: "pageGlobal",
				property: "MegaTag.getAttribution",
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
		id: "mentad",
		name: "Mentad",
		website: "https://www.mentad.com",
		description: "Mentad is a predictive marketing platform to acquire new customers.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mentad:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("mentad_website_id"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "mentad:pageGlobal:1",
				kind: "pageGlobal",
				property: "mentad_website_id",
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
		id: "mention-me",
		name: "Mention Me",
		website: "https://www.mention-me.com",
		description: "Mention Me is a referral marketing platform for conversion-obsessed ecommerce brands.",
		icon: "Mention Me.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mention-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mention-me\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mention-me:pageGlobal:1",
				kind: "pageGlobal",
				property: "MentionMe",
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
		id: "merge",
		name: "Merge",
		website: "https://www.merge.dev",
		description: "Merge is a data infrastructure platform for AI products that enables connection to multiple customer data sources through a single API.",
		icon: "Merge.svg",
		categories: [
			"marketing-automation",
			"analytics",
			"api-pattern"
		],
		rules: [
			{
				id: "merge:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.merge\\.dev"),
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
		id: "merit",
		name: "Merit",
		website: "https://www.meritpages.com",
		description: "Merit is a platform tailored for higher education marketing.",
		icon: "Merit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "merit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meritpages\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "merit:pageGlobal:1",
				kind: "pageGlobal",
				property: "meritPages",
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
		id: "messagegears",
		name: "MessageGears",
		website: "https://messagegears.com/swrve/",
		description: "MessageGears is a cross-channel messaging platform designed to help businesses deliver communications across multiple channels from a single system.",
		icon: "MessageGears.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "messagegears:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.swrve\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mezereon",
		name: "Mezereon",
		website: "https://www.mezereon.com",
		description: "Mezereon is an AI-powered platform that provides search, filters, insights, analytics, personalization, autocomplete, and recommendations to help businesses optimize their user experiences.",
		icon: "Mezereon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mezereon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.mezereon\\.net"),
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
		id: "miappi",
		name: "Miappi",
		website: "https://miappi.com",
		description: "Miappi is a user-generated content platform designed to build trust and boost sales for brands.",
		icon: "Miappi.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "miappi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web\\.miappi\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "miappi:dom:1",
				kind: "dom",
				selector: "script[data-src*='web.miappi.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "mieruca",
		name: "Mieruca",
		website: "https://mieru-ca.com",
		description: "Mieruca is a Japanese SEO analysis tool designed to measure and improve website visibility through data-driven insights.",
		icon: "Mieruca.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mieruca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hm\\.mieru-ca\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mindbox",
		name: "Mindbox",
		website: "https://mindbox.ru",
		description: "Mindbox is a marketing automation platform.",
		icon: "Mindbox.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mindbox:pageGlobal:0",
				kind: "pageGlobal",
				property: "MindboxEndpointSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mindbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "mindbox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mindbox:pageGlobal:2",
				kind: "pageGlobal",
				property: "mindboxBatchedModulesInitialized",
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
		id: "missionsuite",
		name: "MissionSuite",
		website: "https://www.themissionsuite.com",
		description: "Mission Suite is an all-in-one marketing software solution which combines CRM, email marketing, marketing automation, and inbound marketing tools.",
		icon: "MissionSuite.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "missionsuite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.themissionsuite\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "missionsuite:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.themissionsuite\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "moast",
		name: "Moast",
		website: "https://www.moast.io",
		description: "Moast is a Shopify app that enables brands to leverage user-generated content for marketing and engagement purposes.",
		icon: "Moast.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "moast:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.moast\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "moast:pageGlobal:1",
				kind: "pageGlobal",
				property: "moast.mapUrl",
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "moengage",
		name: "MoEngage",
		website: "https://www.moengage.com",
		description: "MoEngage is an intelligent customer engagement platform for the customer-obsessed marketer.",
		icon: "MoEngage.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "moengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.moengage\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "moengage:pageGlobal:1",
				kind: "pageGlobal",
				property: "MOENGAGE_API_KEY",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moengage:pageGlobal:2",
				kind: "pageGlobal",
				property: "Moengage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moengage:pageGlobal:3",
				kind: "pageGlobal",
				property: "downloadMoengage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moengage:pageGlobal:4",
				kind: "pageGlobal",
				property: "moengage_object",
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
		id: "mokini",
		name: "Mokini",
		website: "https://www.mokini.com",
		description: "Mokini is a marketing automation platform designed for ecommerce businesses with customizable templates, user segmentation, and scheduling.",
		icon: "Mokini.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mokini:pageGlobal:0",
				kind: "pageGlobal",
				property: "mokiniSettings",
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
		id: "monetize-pro",
		name: "Monetize Pro",
		website: "https://monetizepro.ai",
		description: "Monetize Pro is a platform that helps users earn money through various monetization strategies for their online content.",
		icon: "MonetizePro.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "monetize-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.monetizepro\\.ai"),
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
		id: "monocle",
		name: "Monocle",
		website: "https://www.usemonocle.com",
		description: "Monocle is an AI-powered platform that optimizes incentives to boost profits while maintaining brand equity and margins.",
		icon: "Monocle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "monocle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usemonocle\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "monocle:pageGlobal:1",
				kind: "pageGlobal",
				property: "monocle.config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monocle:pageGlobal:2",
				kind: "pageGlobal",
				property: "monocle_popup_id_variants",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "moosend",
		name: "Moosend",
		website: "https://moosend.com",
		description: "Moosend is a platform that enables management, creation, and distribution of email marketing campaigns.",
		icon: "Moosend.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "moosend:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.moosend\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "mopro",
		name: "Mopro",
		website: "https://www.mopro.com",
		description: "Mopro is a growth platform designed to help small businesses improve their online presence and streamline digital operations.",
		icon: "Mopro.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mopro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mopro\\.com/"),
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
		id: "movable-ink",
		name: "Movable Ink",
		website: "https://movableink.com",
		description: "Movable Ink is a technology company that allows marketers to change emails after they have been sent out.",
		icon: "Movable Ink.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "movable-ink:pageGlobal:0",
				kind: "pageGlobal",
				property: "MovableInkTrack",
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
		id: "movylo",
		name: "Movylo",
		website: "https://www.movylo.com",
		description: "Movylo is an AI-driven platform that automates customer engagement across websites and social media to drive sales.",
		icon: "Movylo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "movylo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.movylo\\.com/"),
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
		id: "mparticle",
		name: "mParticle",
		website: "https://www.mparticle.com",
		description: "mParticle is a mobile-focused event tracking and data ingestion tool.",
		icon: "mParticle.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "mparticle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mparticle\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mparticle:pageGlobal:1",
				kind: "pageGlobal",
				property: "mParticle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mparticle:pageGlobal:2",
				kind: "pageGlobal",
				property: "mParticle.config.snippetVersion",
				valuePattern: new RegExp("(.+)"),
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
		id: "mutiny",
		name: "Mutiny",
		website: "https://www.mutinyhq.com",
		description: "Mutiny is a no-code AI platform designed to aid marketers in converting top-of-funnel demand into revenue without requiring the expertise of engineers.",
		icon: "Mutiny.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "mutiny:pageGlobal:0",
				kind: "pageGlobal",
				property: "mutiny",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mutiny:pageGlobal:1",
				kind: "pageGlobal",
				property: "mutinyData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mutiny:pageGlobal:2",
				kind: "pageGlobal",
				property: "mutinyEditor",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mutiny:pageGlobal:3",
				kind: "pageGlobal",
				property: "mutinyWpJsonp",
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
		id: "myesalon",
		name: "MyEsalon",
		website: "https://myesalon.com",
		description: "MyEsalon is a platform that provides marketing solutions for nail salons, beauty salons, hair salons, and spas, helping businesses enhance visibility and attract clients.",
		icon: "MyEsalon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "myesalon:responseHeader:0",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("myesalon\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "najva",
		name: "Najva",
		website: "https://www.najva.com",
		description: "Najva is a retention marketing solution that offers push notification and email marketing.",
		icon: "Najva.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "najva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.najva\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "najva:pageGlobal:1",
				kind: "pageGlobal",
				property: "Najva.identifyEmailSubscriber",
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
		id: "natural-intelligence",
		name: "Natural Intelligence",
		website: "https://www.naturalint.com/",
		description: "Natural Intelligence is a platform facilitating product discovery.",
		icon: "NaturalIntelligence.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "natural-intelligence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.naturalint\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "natural-intelligence:pageGlobal:1",
				kind: "pageGlobal",
				property: "naturalint_tag",
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
		id: "navu",
		name: "Navu",
		website: "https://navu.co",
		description: "Navu is a platform that uses AI to enhance B2B websites by delivering targeted messages to visitors, helping improve lead conversion through personalized user engagement.",
		icon: "Navu.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "navu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c\\.navu\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "navu:pageGlobal:1",
				kind: "pageGlobal",
				property: "$_navuEmbedded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "navu:pageGlobal:2",
				kind: "pageGlobal",
				property: "$navuContext",
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
		id: "net-results",
		name: "NET-RESULTS",
		website: "https://www.net-results.com",
		description: "NET-RESULTS is a marketing automation platform for the data-driven marketer.",
		icon: "NET-RESULTS.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "net-results:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.net-results\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "netcore-cloud",
		name: "Netcore Cloud",
		website: "https://netcorecloud.com",
		description: "Netcore Cloud is a globally recognised marketing technology SaaS company.",
		icon: "Netcore Cloud.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "netcore-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.netcoresmartech\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "netdeal",
		name: "Netdeal",
		website: "https://www.netdeal.com.br",
		description: "Netdeal is a marketing automation platform.",
		icon: "Netdeal.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "netdeal:pageGlobal:0",
				kind: "pageGlobal",
				property: "NetdealBuildNumber",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "netdeal:pageGlobal:1",
				kind: "pageGlobal",
				property: "NetdealJs.paywall",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "netdeal:pageGlobal:2",
				kind: "pageGlobal",
				property: "netdealStartSession",
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
		id: "nexxtmove",
		name: "Nexxtmove",
		website: "https://nexxtmove.nl",
		description: "Nexxtmove is a marketing platform for real estate agencies that provides targeted, personalized communication tools designed to reach the appropriate audience and support improved campaign outcomes.",
		icon: "Nexxtmove.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "nexxtmove:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("nexxtmove-313510\\.web\\.app"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "niice",
		name: "Niice",
		website: "https://www.niice.nl",
		description: "Niice is a Dutch marketing automation platform that streamlines campaign management, customer engagement, and data-driven communication processes.",
		icon: "Niice.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "niice:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("niice\\.nl"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nosto",
		name: "Nosto",
		website: "https://www.nosto.com",
		description: "Nosto is an ecommerce platform providing product recommendations based on individual behavioral data.",
		icon: "Nosto.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "nosto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.nosto\\.\\w+/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nosto:pageGlobal:1",
				kind: "pageGlobal",
				property: "nosto",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nosto:pageGlobal:2",
				kind: "pageGlobal",
				property: "nostojs",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nosto:meta:3",
				kind: "meta",
				key: "nosto-version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
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
		id: "nosto-visual-ugc",
		name: "Nosto Visual UGC",
		website: "https://www.nosto.com/products/visual-ugc/",
		description: "Nosto Visual UGC (Earlier known as Stackla) is a cloud-based content marketing platform that helps discover, curate, display and engage with user-generated content across all digital marketing platforms.",
		icon: "Nosto.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "nosto-visual-ugc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stackla\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nosto-visual-ugc:pageGlobal:1",
				kind: "pageGlobal",
				property: "Stackla",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nosto-visual-ugc:pageGlobal:2",
				kind: "pageGlobal",
				property: "stacklaWidgetJsonp",
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
		id: "notifly",
		name: "Notifly",
		website: "https://notifly.tech",
		description: "Notifly is a marketing automation tool designed to streamline the process of running multi-channel campaigns.",
		icon: "Notifly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "notifly:pageGlobal:0",
				kind: "pageGlobal",
				property: "NotiflyWebMessageRenderer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "notifly:pageGlobal:1",
				kind: "pageGlobal",
				property: "__notiflyCafe24Config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "notifly:pageGlobal:2",
				kind: "pageGlobal",
				property: "notifly",
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
		id: "nowfloats",
		name: "Nowfloats",
		website: "https://www.nowfloats.com",
		description: "Nowfloats is a location-based platform that automates SEO for business websites.",
		icon: "Nowfloats.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "nowfloats:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("NOWFLOATS_POSITION"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nudgify",
		name: "Nudgify",
		website: "https://www.nudgify.com",
		description: "Nudgify is a Social Proof & Fomo App tool that integrates seamlessly with ecommerce platform such as Shopify, WooCommerce and Magento.",
		icon: "Nudgify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "nudgify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nudgify\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nudgify:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertize\\.com/nudgify-shopify\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nudgify:pageGlobal:2",
				kind: "pageGlobal",
				property: "nudgify.cart",
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
		id: "nuqlium",
		name: "Nuqlium",
		website: "https://www.nuqlium.com",
		description: "Nuqlium is an integrated cloud-based online merchandising platform.",
		icon: "Nuqlium.png",
		categories: [
			"marketing-automation",
			"search"
		],
		rules: [
			{
				id: "nuqlium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nuqlium\\.com/api"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nuqlium:pageGlobal:1",
				kind: "pageGlobal",
				property: "nuqliumObject",
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
		id: "nurture",
		name: "Nurture",
		website: "https://www.nurturehq.com",
		description: "Nurture is an all-in-one marketing automation software designed to streamline campaign management, lead tracking, and customer engagement in a single platform.",
		icon: "Nurture.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "nurture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("nurtureapi\\.nurturehq\\.com"),
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
		id: "nurture-boss",
		name: "Nurture Boss",
		website: "https://nurtureboss.io",
		description: "Nurture Boss is an AI platform for engaging with prospects and residents, automating the leasing process from lead to renewal.",
		icon: "NurtureBoss.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "nurture-boss:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.nurtureboss\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "octipulse",
		name: "Octipulse",
		website: "https://www.octipulse.com",
		description: "Octipulse is a platform that helps businesses manage and publish tailored content across digital platforms, enabling them to create a personalised cross-channel experience.",
		icon: "Octipulse.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "octipulse:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^OCTIPULSE$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "oddcast",
		name: "Oddcast",
		website: "https://oddcast.com",
		description: "Oddcast is a platform that develops customized video and avatar-based marketing products tailored for small and medium-sized businesses and consumers.",
		icon: "Oddcast.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "oddcast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.oddcast\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "oddcast:pageGlobal:1",
				kind: "pageGlobal",
				property: "ODDCAST_HTTP_SERVER",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "oddcast:pageGlobal:2",
				kind: "pageGlobal",
				property: "OddcastDomain",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "olapic",
		name: "Olapic",
		website: "https://www.olapic.com",
		description: "Olapic is a content marketing tool specifically focused on visual marketing content.",
		icon: "Olapic.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "olapic:pageGlobal:0",
				kind: "pageGlobal",
				property: "olapic",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "olapic:pageGlobal:1",
				kind: "pageGlobal",
				property: "olapic.version",
				valuePattern: new RegExp("^v([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "omacro",
		name: "Omacro",
		website: "https://omacro.com",
		description: "Omacro is a platform focused on enhancing digital engagement by facilitating connections and increasing conversion rates.",
		icon: "Omacro.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "omacro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("buynow\\.omacro\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "omacro:pageGlobal:1",
				kind: "pageGlobal",
				property: "omacro.buynow",
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
		id: "omeda",
		name: "Omeda",
		website: "https://www.omeda.com",
		description: "Omeda is a platform that enables the creation of new products by starting with accurate audience segmentation and targeting.",
		icon: "Omeda.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "omeda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("olytics\\.omeda\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ometria",
		name: "Ometria",
		website: "https://ometria.com",
		description: "Ometria is a customer insight and marketing automation platform.",
		icon: "Ometria.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "ometria:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ometria\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ometria:dom:1",
				kind: "dom",
				selector: "form[action*='api.ometria.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ometria:pageGlobal:2",
				kind: "pageGlobal",
				property: "AddOmetriaBasket",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ometria:pageGlobal:3",
				kind: "pageGlobal",
				property: "AddOmetriaIdentify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ometria:pageGlobal:4",
				kind: "pageGlobal",
				property: "ometria",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ometria:cookie:5",
				kind: "cookie",
				key: "ometria",
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
		id: "omnikick",
		name: "Omnikick",
		website: "https://www.omnikick.com",
		description: "Omnikick is a platform designed to help businesses engage, convert, and grow their customer base through targeted digital marketing strategies.",
		icon: "Omnikick.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "omnikick:pageGlobal:0",
				kind: "pageGlobal",
				property: "omniKick.ready",
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
		id: "omnisend",
		name: "Omnisend",
		website: "https://www.omnisend.com",
		description: "Omnisend is an ecommerce marketing automation platform that provides an omnichannel marketing strategy for businesses.",
		icon: "Omnisend.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "omnisend:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("omnisrc\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "omnisend:pageGlobal:1",
				kind: "pageGlobal",
				property: "_omnisend",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "omnisend:cookie:2",
				kind: "cookie",
				key: "omnisendSessionID",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "omnisend:meta:3",
				kind: "meta",
				key: "omnisend-site-verification",
				description: "Meta tag matches a known technology marker."
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
		id: "on-the-map",
		name: "On The Map",
		website: "https://www.onthemap.com",
		description: "On The Map is a local business marketing system designed to help companies enhance visibility, manage online presence, and attract nearby customers through targeted digital strategies and data-driven tools.",
		icon: "OnTheMap.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "on-the-map:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.onthemapmarketing\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "onesignal",
		name: "OneSignal",
		website: "https://onesignal.com",
		description: "OneSignal is a customer engagement messaging solution.",
		icon: "OneSignal.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "onesignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.onesignal\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onesignal:pageGlobal:1",
				kind: "pageGlobal",
				property: "OneSignal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "onesignal:pageGlobal:2",
				kind: "pageGlobal",
				property: "__oneSignalSdkLoadCount",
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
		id: "online-succes",
		name: "Online Succes",
		website: "https://www.onlinesucces.nl",
		description: "Online Succes is a Netherlands-based platform offering marketing automation and website visitor tracking.",
		icon: "OnlineSucces.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "online-succes:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connect\\.onlinesucces\\.nl"),
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
		id: "opesta",
		name: "Opesta",
		website: "https://opesta.com",
		description: "Opesta is a marketing automation platform for Facebook Messenger.",
		icon: "Opesta.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "opesta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.opesta\\.com"),
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
		id: "ops-calendar",
		name: "Ops Calendar",
		website: "https://opscalendar.com",
		description: "Ops Calendar is a marketing calendar to manage content marketing, social media, and more.",
		icon: "OpsCalendar.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ops-calendar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.opscalendar\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "optimove",
		name: "Optimove",
		website: "https://www.optimove.com",
		description: "Optimove is a relationship marketing hub powered by a combination of advanced customer modeling, predictive micro-segmentation and campaign automation technologies.",
		icon: "Optimove.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "optimove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.optimove\\.net/.+v([\\d\\.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "optimove:pageGlobal:1",
				kind: "pageGlobal",
				property: "optimoveSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "optimove:pageGlobal:2",
				kind: "pageGlobal",
				property: "optimoveSDKVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
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
		id: "optinmonster",
		name: "OptinMonster",
		website: "https://optinmonster.com",
		description: "OptinMonster is a conversion optimisation tool that allows you to grow your email list.",
		icon: "OptinMonster.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "optinmonster:pageGlobal:0",
				kind: "pageGlobal",
				property: "OptinMonsterApp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "optinopoli",
		name: "Optinopoli",
		website: "https://www.optinopoli.com",
		description: "Optinopoli is a next-generation lead capture and sales conversion technology designed to collect, manage, and convert prospective customer information across digital touchpoints.",
		icon: "Optinopoli.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "optinopoli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.optinopoli\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "optinopoli:pageGlobal:1",
				kind: "pageGlobal",
				property: "optinopoli",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "oracle-bluekai",
		name: "Oracle BlueKai",
		website: "https://www.oracle.com/cx/marketing/data-management-platform",
		description: "Oracle BlueKai is a cloud-based big data platform that enables companies to personalise online, offline, and mobile marketing campaigns.",
		icon: "Oracle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "oracle-bluekai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.(?:bluekai|bkrtx)\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "oracle-bluekai:dom:1",
				kind: "dom",
				selector: "link[href*='tags.bluekai.com'],link[href*='tags.bkrtx.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "oracle-bluekai:pageGlobal:2",
				kind: "pageGlobal",
				property: "bluekaiLoaded",
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
		id: "orimon-ai",
		name: "Orimon.ai",
		website: "https://orimon.ai",
		description: "Orimon.ai is a platform that helps generate leads, automate customer support, and drive sales through AI-powered solutions.",
		icon: "Orimon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "orimon-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bot\\.orimon\\.ai"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "orimon-ai:dom:1",
				kind: "dom",
				selector: "iframe[src*='bot.orimon.ai/']",
				description: "DOM selector matches a known technology marker."
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
		id: "ortto",
		name: "Ortto",
		website: "https://ortto.com",
		description: "Ortto is a marketing automation and customer data platform that integrates your data, messaging, and analytics into one unified system.",
		icon: "Ortto.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "ortto:pageGlobal:0",
				kind: "pageGlobal",
				property: "AP3_WIDGETS_PREFIX",
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
		id: "ottertext",
		name: "OtterText",
		website: "https://ottertext.com",
		description: "OtterText is a platform offering SMS marketing and automation solutions designed to enhance communication and streamline marketing campaigns.",
		icon: "OtterText.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ottertext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ottertext\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ottertext:cookie:1",
				kind: "cookie",
				key: "otter_text_session",
				description: "Cookie name matches a known technology marker."
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
		id: "outfindo",
		name: "Outfindo",
		website: "https://www.outfindo.com",
		description: "Outfindo is a platform that provides product selection guides for websites to improve customer shopping experiences and boost conversions.",
		icon: "Outfindo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "outfindo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.outfindo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "outfindo:pageGlobal:1",
				kind: "pageGlobal",
				property: "outfindoCatalogGuideData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "outfindo:pageGlobal:2",
				kind: "pageGlobal",
				property: "outfindoCatalogGuideMapFailed",
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
		id: "outfunnel",
		name: "Outfunnel",
		website: "https://outfunnel.com",
		description: "Outfunnel is a platform that connects sales and marketing data to streamline workflows and improve data alignment across tools.",
		icon: "Outfunnel.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "outfunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.outfunnel\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "outfunnel:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.outfunnel\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "outplay",
		name: "Outplay",
		website: "https://outplay.ai",
		description: "Outplay is a sales engagement platform that uses AI to optimize interactions and support fast-scaling small and medium-sized businesses.",
		icon: "Outplay.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "outplay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.outplayhq\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "outplay:pageGlobal:1",
				kind: "pageGlobal",
				property: "outplayhq",
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
		id: "overloop",
		name: "Overloop",
		website: "https://overloop.com",
		description: "Overloop is an AI-powered sales prospecting platform that automates lead generation, outreach, and engagement to optimize customer acquisition and conversion.",
		icon: "Overloop.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "overloop:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.overloop\\.com"),
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
		id: "ownpage",
		name: "Ownpage",
		website: "https://www.ownpage.fr",
		description: "Ownpage is a technology services provider that enables publishers to personalize their newsletters, websites, and applications, enhancing content delivery for media platforms.",
		icon: "Ownpage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ownpage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.ownpage\\.fr/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ownpage:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("loadOwnpageScript"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "package-ai",
		name: "Package.AI",
		website: "https://package.ai",
		description: "Package.AI is a unified platform for last-mile and customer engagement, leveraging AI to enhance service delivery.",
		icon: "PackageAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "package-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.package\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pagenudge",
		name: "PageNudge",
		website: "https://pagenudge.com",
		description: "PageNudge is a website personalization tool that displays contextual messages and prompts to visitors based on behavior or page content, helping tailor interactions and guide user actions across a site.",
		icon: "PageNudge.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pagenudge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.pagenudge\\.com/"),
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
		id: "papirfly",
		name: "Papirfly",
		website: "https://www.papirfly.com",
		description: "Papirfly is an all-in-one brand management platform.",
		icon: "Papirfly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "papirfly:dom:0",
				kind: "dom",
				selector: "link[href*='/papirfly-base.min.css?']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "papirfly:pageGlobal:1",
				kind: "pageGlobal",
				property: "Papirfly",
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
		id: "particularaudience",
		name: "ParticularAudience",
		website: "https://particularaudience.com",
		description: "ParticularAudience is a platform utilizing AI for item-based personalization services, emphasizing privacy in a connected commerce landscape to enhance revenue streams.",
		icon: "ParticularAudience.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "particularaudience:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.particularaudience\\.com/"),
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
		id: "passle",
		name: "Passle",
		website: "https://home.passle.net",
		description: "Passle is a digital marketing platform designed to help professionals create and share expert-led content.",
		icon: "Passle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "passle:pageGlobal:0",
				kind: "pageGlobal",
				property: "Passel.API",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "passle:pageGlobal:1",
				kind: "pageGlobal",
				property: "PassleEnvironmentConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "passle:pageGlobal:2",
				kind: "pageGlobal",
				property: "PassleEvents",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "passle:pageGlobal:3",
				kind: "pageGlobal",
				property: "PassleFunctions",
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
		id: "pathfactory",
		name: "PathFactory",
		website: "https://www.pathfactory.com",
		description: "PathFactory is a platform utilizing AI to align content with revenue generation.",
		icon: "PathFactory.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pathfactory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-app\\.pathfactory\\.com"),
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
		id: "peachs",
		name: "Peachs",
		website: "https://peachs.co",
		description: "Peachs is a Squarespace ecommerce word-of-mouth marketing system designed to promote products through customer referrals and social sharing.",
		icon: "Peachs.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "peachs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//peachs\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "peachs:pageGlobal:1",
				kind: "pageGlobal",
				property: "PEACHS_AFFILIATE_STARTED_PROGRAMS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "peachs:pageGlobal:2",
				kind: "pageGlobal",
				property: "PEACHS_SQUARESPACE_STARTED",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "peerius",
		name: "Peerius",
		website: "https://www.peerius.com",
		description: "Peerius is a platform that analyzes individual visitor behavior on websites to optimize the checkout process.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "peerius:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.peerius\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "peerius:pageGlobal:1",
				kind: "pageGlobal",
				property: "PeeriusCallbacks",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "persona-ly",
		name: "Persona.ly",
		website: "https://persona.ly",
		description: "Persona.ly is a data-driven platform that helps businesses acquire users through analytics and targeted strategies.",
		icon: "Persona.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "persona-ly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.persona\\.ly"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "personaclick",
		name: "PersonaClick",
		website: "https://www.personaclick.com",
		description: "PersonaClick is a provide personalisation, recommandation and multi channel services.",
		icon: "PersonaClick.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "personaclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.personaclick\\.com/v([\\d.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "personaclick:pageGlobal:1",
				kind: "pageGlobal",
				property: "personaclick",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "personaclick:pageGlobal:2",
				kind: "pageGlobal",
				property: "personaclick_callback",
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
		id: "personizely",
		name: "Personizely",
		website: "https://www.personizely.net",
		description: "Personizely is a conversion marketing toolkit which helps websites and ecommerce stores better engage with visitors using website widgets and personalisation.",
		icon: "Personizely.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "personizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.personizely\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "personizely:pageGlobal:1",
				kind: "pageGlobal",
				property: "Personizely",
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
		id: "personyze",
		name: "Personyze",
		website: "https://www.personyze.com",
		description: "Personyze is a real-time visitor segmentation and website personalization platform offering omnichannel customer service capabilities, developed in Brazil.",
		icon: "Personyze.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "personyze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("counter\\.personyze\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "personyze:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("counter\\.personyze\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "perzonalization",
		name: "Perzonalization",
		website: "https://www.perzonalization.com/",
		description: "Perzonalization is a AI powered personalization engine for eCommerce",
		icon: "Perzonalization.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "perzonalization:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.perzonalization\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "phonexa",
		name: "Phonexa",
		website: "https://phonexa.com",
		description: "Phonexa is a platform that helps optimise web lead, call lead, and email marketing campaigns.",
		icon: "Phonexa.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "phonexa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.phonexa\\.com/"),
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
		id: "photoslurp",
		name: "Photoslurp",
		website: "https://hi.photoslurp.com",
		description: "Photoslurp is a visual commerce platform that collects photos and videos of customers using your products from across social networks.",
		icon: "Photoslurp.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "photoslurp:pageGlobal:0",
				kind: "pageGlobal",
				property: "Photoslurp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "photoslurp:pageGlobal:1",
				kind: "pageGlobal",
				property: "photoSlurpWidgetSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "photoslurp:pageGlobal:2",
				kind: "pageGlobal",
				property: "photoslurp_script",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "photoslurp:pageGlobal:3",
				kind: "pageGlobal",
				property: "photoslurp_wdgts",
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
		id: "piads",
		name: "PiAds",
		website: "https://piads.vn",
		description: "PiAds is a marketing system designed to enhance the efficiency of advertising campaigns through targeted strategies and data-driven insights.",
		icon: "PiAds.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "piads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.piads\\.vn/"),
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
		id: "piano",
		name: "Piano",
		website: "https://piano.io",
		description: "Piano is a enterprise SaaS company which specialising in advanced media business processes and ecommerce optimisation.",
		icon: "Piano.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "piano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tinypass\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "piano:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.piano\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "piano:pageGlobal:2",
				kind: "pageGlobal",
				property: "PianoESPConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "piano:pageGlobal:3",
				kind: "pageGlobal",
				property: "gciDataPiano",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "piano:pageGlobal:4",
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
		id: "pimster",
		name: "Pimster",
		website: "https://pimster.app",
		description: "Pimster is a platform that enables the creation and distribution of interactive, shoppable web stories across websites, email campaigns, and QR codes.",
		icon: "Pimster.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pimster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pimster\\.app"),
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
		id: "pinpoll",
		name: "Pinpoll",
		website: "https://www.pinpoll.com",
		description: "Pinpoll is a tool that collects contact data from users for analytics, marketing, or customer engagement purposes.",
		icon: "Pinpoll.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "pinpoll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pinpoll\\.com"),
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
		id: "pixel-motion",
		name: "Pixel Motion",
		website: "https://www.pixelmotion.com",
		description: "Pixel Motion is a provider of automotive digital marketing solutions.",
		icon: "PixelMotion.svg",
		categories: [
			"marketing-automation",
			"animation"
		],
		rules: [
			{
				id: "pixel-motion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/pm-motors-plugin/modules/datalayer//js/pixelmotion\\.js\\?ver=([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pixel-motion:dom:1",
				kind: "dom",
				selector: "script#pixelmotion-js",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pixel-motion:pageGlobal:2",
				kind: "pageGlobal",
				property: "pm_api",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixel-motion:pageGlobal:3",
				kind: "pageGlobal",
				property: "pm_datalayer_config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixel-motion:pageGlobal:4",
				kind: "pageGlobal",
				property: "pm_datalayer_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixel-motion:pageGlobal:5",
				kind: "pageGlobal",
				property: "pm_datalayer_props",
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
		id: "pixlee-turnto",
		name: "Pixlee TurnTo",
		website: "https://pixlee.com",
		description: "Pixlee TurnTo is a social UGC, ratings and reviews, and influencer marketing platform for community-driven brands.",
		icon: "Pixelee TurnTo.png",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "pixlee-turnto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.pixlee\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pixlee-turnto:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pixlee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixlee-turnto:pageGlobal:2",
				kind: "pageGlobal",
				property: "Pixlee_Analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixlee-turnto:pageGlobal:3",
				kind: "pageGlobal",
				property: "TurnTo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pixlee-turnto:pageGlobal:4",
				kind: "pageGlobal",
				property: "turnToConfig",
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
		id: "placester",
		name: "Placester",
		website: "https://placester.com",
		description: "Placester is an all-in-one digital marketing platform designed for real estate professionals to manage websites, lead generation, and online branding.",
		icon: "Placester.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "placester:pageGlobal:0",
				kind: "pageGlobal",
				property: "_placester.entitlements",
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
		id: "platformly",
		name: "Platformly",
		website: "https://www.platformly.com",
		description: "Platformly is a tool that provides intelligent marketing automation for online businesses.",
		icon: "Platformly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "platformly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.platform\\.ly/"),
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
		id: "plezi",
		name: "Plezi",
		website: "https://www.plezi.co",
		description: "Plezi is a marketing automation tool.",
		icon: "Plezi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "plezi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.plezi\\.co"),
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
		id: "plices",
		name: "Plices",
		website: "https://plices.com",
		description: "Plices is a platform for marketing and sales automation that supports the planning, execution, measurement, and optimization of strategies.",
		icon: "Plices.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "plices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.plices\\.com"),
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
		id: "pliek",
		name: "Pliek",
		website: "https://pliek.io",
		description: "Pliek is a system that provides live sales notifications, enabling real-time updates on purchase activities.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pliek:pageGlobal:0",
				kind: "pageGlobal",
				property: "pliekConfig.key",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "plusthis",
		name: "PlusThis",
		website: "https://www.plusthis.com",
		description: "PlusThis is a campaign toolkit for marketing automation that offers tools to streamline, integrate, and enhance marketing workflows.",
		icon: "PlusThis.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "plusthis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.plusthis\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plusthis:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.plusthis\\.com"),
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
		id: "pocus",
		name: "Pocus",
		website: "https://www.pocus.com",
		description: "Pocus is a platform that uses AI agents to monitor B2B accounts and identify real sales opportunities at critical moments.",
		icon: "Pocus.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pocus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//pocustrack\\.com/pocus\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "poloriz",
		name: "Poloriz",
		website: "https://www.poloriz.com",
		description: "Poloriz's technology automatically creates a personalised, full-screen, mobile-first, cross-selling user experience for shoppers.",
		icon: "Poloriz.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "poloriz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.poloriz\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "poltio",
		name: "Poltio",
		website: "https://poltio.com",
		description: "Poltio is a platform enabling brands to enhance user segment understanding, driving revenue growth and fostering customer relationships.",
		icon: "Poltio.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "poltio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.poltio\\.com/"),
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
		id: "popify",
		name: "Popify",
		website: "https://popify.app",
		description: "Popify is a sales push notification system designed to deliver real-time alerts that drive engagement and conversions.",
		icon: "Popify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "popify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.popify\\.app"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "popify:pageGlobal:1",
				kind: "pageGlobal",
				property: "PopifyLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "popify:pageGlobal:2",
				kind: "pageGlobal",
				property: "PopifyNotifications",
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
		id: "poppins",
		name: "Poppins",
		website: "https://poppins.so",
		description: "Poppins is a tool that enables notifications on websites, ranging from video alerts to informational popups.",
		icon: "Poppins.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "poppins:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//poppins\\.so/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "poptin",
		name: "Poptin",
		website: "https://www.poptin.com",
		description: "Poptin is a platform designed to engage visitors and coverts them into leads, subscribers and sales.",
		icon: "Poptin.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "poptin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.popt\\.in/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "poptin:pageGlobal:1",
				kind: "pageGlobal",
				property: "poptinAfterPageLoad",
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
		id: "post-dolphin",
		name: "Post Dolphin",
		website: "https://metashop.dolphinsuite.com",
		description: "Post Dolphin is a social media management platform that plans, schedules, automates, and synchronizes social content across multiple channels.",
		icon: "PostDolphin.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "post-dolphin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metashop\\.dolphinsuite\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "post-dolphin:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("metashop\\.dolphinsuite\\.com"),
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
		id: "postano",
		name: "Postano",
		website: "https://www.postano.com",
		description: "Postano is a social content management platform that aggregates, curates, and displays user-generated content across digital channels.",
		icon: "Postano.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "postano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.postano\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "postie",
		name: "Postie",
		website: "https://postie.com",
		description: "Postie is an all-in-one platform facilitating audience building, A/B testing, and campaign deployment.",
		icon: "Postie.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "postie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.postie\\.com/"),
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
		id: "postscript",
		name: "Postscript",
		website: "https://www.postscript.io",
		description: "Postscript is an SMS and MMS marketing platform for Shopify stores.",
		icon: "Postscript.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "postscript:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.postscript\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "postscript:pageGlobal:1",
				kind: "pageGlobal",
				property: "Postscript.isSubscriberInputChecked",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "postscript:pageGlobal:2",
				kind: "pageGlobal",
				property: "postscript.getSubscriberId",
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
		id: "potions",
		name: "Potions",
		website: "https://get-potions.com",
		description: "Potions is a personalisation technology for customising the ecommerce experience for site visitors without the use of cookies.",
		icon: "Potions.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "potions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.get-potions\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "potions:pageGlobal:1",
				kind: "pageGlobal",
				property: "potions.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "prediggo",
		name: "Prediggo",
		website: "https://prediggo.com",
		description: "Prediggo is an ecommerce personalisation and marketing automation software provider.",
		icon: "Prediggo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "prediggo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js/prediggo/(?:[\\w]+)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "prediggo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Prediggo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "prediggo:pageGlobal:2",
				kind: "pageGlobal",
				property: "PrediggoSearchFormExternalAc",
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
		id: "preezie",
		name: "Preezie",
		website: "https://preezie.com",
		description: "Preezie is a provider of tools and education that enables retailers to implement an online sales assistant through a guided conversion and product discovery platform.",
		icon: "Preezie.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "preezie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ui-widgets\\.preezie\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "preezie:pageGlobal:1",
				kind: "pageGlobal",
				property: "PREEZIE_GUIDE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "preezie:pageGlobal:2",
				kind: "pageGlobal",
				property: "preezieJsonpFunction",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "preezie:pageGlobal:3",
				kind: "pageGlobal",
				property: "preeziePageScriptExecuted",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pricespider",
		name: "PriceSpider",
		website: "https://www.pricespider.com",
		description: "PriceSpider is an advanced retail data technology company that provides insights about consumer purchasing behavior.",
		icon: "PriceSpider.png",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "pricespider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pricespider\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pricespider:pageGlobal:1",
				kind: "pageGlobal",
				property: "PriceSpider.version",
				valuePattern: new RegExp("(.+)"),
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
		id: "primeleads",
		name: "Primeleads",
		website: "https://primeleads.de",
		description: "Primeleads is a tool that identifies visitors on your site and personalises the website experience for each individual visitor.",
		icon: "Primeleads.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "primeleads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.primeleads\\.de/"),
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
		id: "printful",
		name: "Printful",
		website: "https://www.printful.com/",
		description: "Printful offers print-on-demand drop shipping solution for ecommerce sites.",
		icon: "Printful.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "printful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cdn\\.printful\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "printful:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.printful\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		implies: [
			"cart-functionality"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "printlane",
		name: "Printlane",
		website: "https://printlane.com",
		description: "Printlane is a digital platform offering an interactive product customizer tool that enables real-time visualization and personalization of designs before production.",
		icon: "Printlane.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "printlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("designer\\.printlane\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "printlane:pageGlobal:1",
				kind: "pageGlobal",
				property: "printlane.init",
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
		id: "privy",
		name: "Privy",
		website: "https://www.privy.com",
		description: "Privy is a all-in-one marketing automation platform for ecommerce.",
		icon: "Privy.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "privy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "privy:pageGlobal:1",
				kind: "pageGlobal",
				property: "Privy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "privy:pageGlobal:2",
				kind: "pageGlobal",
				property: "PrivyWidget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "privy:pageGlobal:3",
				kind: "pageGlobal",
				property: "privySettings",
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
		id: "probance",
		name: "Probance",
		website: "https://probance.com",
		description: "Probance is a marketing platform solution that helps businesses manage, track, and analyze marketing activities.",
		icon: "Probance.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "probance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.my-probance\\.one/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "profit-lifter",
		name: "Profit Lifter",
		website: "https://profitlifter.com",
		description: "Profit Lifter is an AI-powered platform enabling automated website creation, sales funnels, and email campaigns designed to attract and convert leads into sales.",
		icon: "ProfitLifter.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "profit-lifter:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.profitlifter\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "profitflo",
		name: "ProfitFlo",
		website: "https://profitflo.io",
		description: "ProfitFlo is a platform that automates revenue generation by providing tools to attract and convert customers.",
		icon: "ProfitFlo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "profitflo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.profitflo\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "profitflo:dom:1",
				kind: "dom",
				selector: "chat-widget[agency-website*='profitflo.io']",
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
		id: "profity",
		name: "Profity",
		website: "https://www.profity.online",
		description: "Profity is a network of ecommerce companies that enables partner shops to market their offers to customers after a sale in any shop, enhancing mutual benefits and sales opportunities.",
		icon: "Profity.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "profity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.profity\\.ch/"),
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
		id: "progreda",
		name: "Progreda",
		website: "https://progreda.com",
		description: "Progreda is a platform that automates sales conversations via text, Instagram, and Facebook Messenger to generate leads, schedule appointments, and drive revenue growth.",
		icon: "Progreda.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "progreda:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.progreda\\.com"),
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
		id: "promio",
		name: "Promio",
		website: "https://www.promio.com",
		description: "Promio is a platform that provides marketing solutions for businesses and franchises, enhancing visibility and customer engagement.",
		icon: "Promio.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "promio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.promio\\.com/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
			"jquery"
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
		id: "promo-ai",
		name: "Promo AI",
		website: "https://promo.com",
		description: "Promo AI is a tool that generates, schedules, and publishes professional videos across platforms, designed to support business marketing efforts.",
		icon: "Promo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "promo-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ak04-promo-cdn\\.slidely\\.com"),
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
		id: "proofdy",
		name: "Proofdy",
		website: "https://proofdy.ru",
		description: "Proofdy is a tool that displays social proof popups on websites to build visitor trust, enhance credibility, and support conversion efforts.",
		icon: "Proofdy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "proofdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.proofdy\\.ru"),
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
		id: "prooven",
		name: "Prooven",
		website: "https://prooven.io",
		description: "Prooven is a platform designed to build credibility and increase conversion through trust-driven solutions.",
		icon: "Prooven.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "prooven:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.prooven\\.io"),
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
		id: "provely",
		name: "Provely",
		website: "https://provely.io",
		description: "Provely is a conversion software that displays verified social proof on webpages to help online businesses increase leads, signups, and sales.",
		icon: "Provely.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "provely:pageGlobal:0",
				kind: "pageGlobal",
				property: "provely.bindFields",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "provely:pageGlobal:1",
				kind: "pageGlobal",
				property: "provelys",
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
		id: "pureclarity",
		name: "PureClarity",
		website: "https://www.pureclarity.com",
		description: "PureClarity is a platform that enables personalized upselling and delivers targeted content to increase customer engagement and sales.",
		icon: "PureClarity.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pureclarity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pcs\\.pureclarity\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pureclarity:pageGlobal:1",
				kind: "pageGlobal",
				property: "PureClarityObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pureclarity:pageGlobal:2",
				kind: "pageGlobal",
				property: "PureClarityType",
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
		id: "pushalert",
		name: "PushAlert",
		website: "https://pushalert.co",
		description: "PushAlert is a multi-channel platform that offers push notifications and onsite messaging to enhance customer engagement.",
		icon: "PushAlert.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushalert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushalert\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pushalert:pageGlobal:1",
				kind: "pageGlobal",
				property: "pushalert_manifest_file",
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
		id: "pushbots",
		name: "PushBots",
		website: "https://pushbots.com",
		description: "PushBots is a messaging platform that enables businesses to send and manage push notifications, in-app messages, and polls across mobile and desktop devices.",
		icon: "PushBots.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushbots:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushbots\\.com"),
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
		id: "pushe",
		name: "Pushe",
		website: "https://pushe.co",
		description: "Pushe is a push notification system designed for real-time message delivery and user engagement across web and mobile platforms.",
		icon: "Pushe.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.pushe\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pushe:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pushe.EVENTS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pushengage",
		name: "PushEngage",
		website: "https://www.pushengage.com",
		description: "PushEngage is a browser push notification platform that helps content website managers engage visitors by automatically segmenting and sending web push messages.",
		icon: "PushEngage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clientcdn\\.pushengage\\.\\w+/core"),
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
		id: "pushify",
		name: "Pushify",
		website: "https://pushify.com",
		description: "Pushify is a service that delivers push notifications for major desktop and mobile browsers.",
		icon: "Pushify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pushify\\.com/"),
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
		id: "pushnami",
		name: "Pushnami",
		website: "https://pushnami.com",
		description: "Pushnami is an AI-powered messaging platform that uses intelligent analytics to deliver superior push, social, and email performance.",
		icon: "Pushnami.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushnami:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.pushnami\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pushouse",
		name: "Pushouse",
		website: "https://www.pushouse.com",
		description: "Pushouse is a platform that provides solutions to enhance sales in ecommerce through data-driven strategies and automation.",
		icon: "Pushouse.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushouse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dev\\.pushouse\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pushowl",
		name: "PushOwl",
		website: "https://pushowl.com",
		description: "PushOwl is a push notification platform for ecommerce stores.",
		icon: "PushOwl.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushowl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushowl\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pushowl:pageGlobal:1",
				kind: "pageGlobal",
				property: "pushowl",
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
		id: "pushpad",
		name: "Pushpad",
		website: "https://pushpad.xyz",
		description: "Pushpad is a reliable service for sending notifications from websites and web applications.",
		icon: "Pushpad.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushpad:pageGlobal:0",
				kind: "pageGlobal",
				property: "pushpad",
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
		id: "pushpushgo",
		name: "PushPushGo",
		website: "https://pushpushgo.com",
		description: "PushPushGo is a GDPR-ready platform which enables startups, SMBs and corporations to create and send automatic web push notification campaigns on desktop and via mobile to manage various scenarios including abandoned carts, segmentation, cross-selling, customer engagement, and return rates.",
		icon: "PushPushGo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "pushpushgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pushpushgo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pushpushgo:dom:1",
				kind: "dom",
				selector: "link[href*='.pushpushgo.com/']",
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
		id: "qstomizer",
		name: "Qstomizer",
		website: "https://www.qstomizer.com",
		description: "Qstomizer app is the app for Shopify and Woocomerce that allows you to add a visual custom product designer to your shop.",
		icon: "Qstomizer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "qstomizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/qsmz-scripttag/qstomizer_st(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "qstomizer:pageGlobal:1",
				kind: "pageGlobal",
				property: "jQueryQSMZ",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "qstomizer:pageGlobal:2",
				kind: "pageGlobal",
				property: "loadScript_qsmz",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "qstomizer:pageGlobal:3",
				kind: "pageGlobal",
				property: "qstomizer_script",
				description: "Page-owned global matches a known technology marker."
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
		id: "qubit",
		name: "Qubit",
		website: "https://www.coveo.com/en/qubit",
		description: "Qubit is a platform that enables personalized ecommerce experiences through data-driven insights and intelligent automation.",
		icon: "Qubit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "qubit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.goqubit\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "qubit:pageGlobal:1",
				kind: "pageGlobal",
				property: "QUBIT_WORKER",
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
		id: "quizitri",
		name: "Quizitri",
		website: "https://www.quizitri.com",
		description: "Quizitri is a tool for creating unlimited quizzes aimed at increasing conversions, website traffic, lead generation, and sales.",
		icon: "Quizitri.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "quizitri:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.quizitri\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "quizitri:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.quizitri\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "raaft",
		name: "Raaft",
		website: "https://raaft.io",
		description: "Raaft is a tool designed to help SaaS companies lower customer churn and gather feedback from users who choose to cancel their subscriptions.",
		icon: "Raaft.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "raaft:pageGlobal:0",
				kind: "pageGlobal",
				property: "RAAFT_APP_ID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "raaft:pageGlobal:1",
				kind: "pageGlobal",
				property: "raaft",
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
		id: "ramper",
		name: "Ramper",
		website: "https://ramper.com.br",
		description: "Ramper is a B2B marketing and sales platform designed to streamline business operations.",
		icon: "Ramper.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ramper:pageGlobal:0",
				kind: "pageGlobal",
				property: "LaharApp.criacao_elementos",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ramper:pageGlobal:1",
				kind: "pageGlobal",
				property: "PopupLahar.create",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ramper:pageGlobal:2",
				kind: "pageGlobal",
				property: "SourceLahar.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ramper:pageGlobal:3",
				kind: "pageGlobal",
				property: "TrackingLahar.create",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "raptor",
		name: "Raptor",
		website: "https://raptorsmartadvisor.com",
		description: "Raptor is a personalisation engine based on machine learning that analyses and learns about the user's behavior and unique browser history.",
		icon: "Raptor.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "raptor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.raptorsmartadvisor\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "raptor:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("msecnd\\.net/script/raptor-([\\d.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "raptor:pageGlobal:2",
				kind: "pageGlobal",
				property: "Raptor",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "raptor:pageGlobal:3",
				kind: "pageGlobal",
				property: "onRaptorLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "raptor:pageGlobal:4",
				kind: "pageGlobal",
				property: "raptorBase64",
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
		id: "rd-station",
		name: "RD Station",
		website: "https://rdstation.com.br",
		description: "RD Station is a platform that helps medium and small businesses manage and automate their Digital Marketing strategy.",
		icon: "RD Station.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rd-station:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("d335luupugsy2\\.cloudfront\\.net/js/loader-scripts/.*-loader\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rd-station:pageGlobal:1",
				kind: "pageGlobal",
				property: "RDStation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "rd-station:pageGlobal:2",
				kind: "pageGlobal",
				property: "RDStationTrackingCodeChecker",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "re-guest",
		name: "RE:Guest",
		website: "https://www.reguest.io",
		description: "Re:Guest is a digital room seller that helps hoteliers increase their online visibility and reach more guests.",
		icon: "REGuest.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "re-guest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reguest-hub-api\\.reguest\\.io"),
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
		id: "readyplanet",
		name: "ReadyPlanet",
		website: "https://www.readyplanet.com",
		description: "ReadyPlanet is a marketing platform from Thailand, offering various widgets to support businesses in their online marketing efforts.",
		icon: "ReadyPlanet.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "readyplanet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.readyplanet\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "readyplanet:dom:1",
				kind: "dom",
				selector: "link[href*='rwidget.readyplanet.com']",
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
		id: "realist",
		name: "Realist",
		website: "https://www.realist.gen.tr",
		description: "Realist is a website tracker and link exchange platform designed to monitor site activity and facilitate reciprocal linking between domains.",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "realist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.realist\\.gen\\.tr"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rebuy",
		name: "Rebuy",
		website: "https://rebuyengine.com/",
		description: "Rebuy offers personlisation solutions for ecommerce sites.",
		icon: "Rebuy.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "rebuy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rebuyengine\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rebuy:pageGlobal:1",
				kind: "pageGlobal",
				property: "rebuyConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"cart-functionality"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"low"
			]
		}
	},
	{
		id: "recolize",
		name: "Recolize",
		website: "https://www.recolize.com",
		description: "Recolize is a system that provides personalized product recommendations for ecommerce stores based on customer behavior and preferences.",
		icon: "Recolize.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "recolize:pageGlobal:0",
				kind: "pageGlobal",
				property: "Recolize.Recommendation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "recolize:pageGlobal:1",
				kind: "pageGlobal",
				property: "RecolizeParameters",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "recombee",
		name: "Recombee",
		website: "https://www.recombee.com",
		description: "Recombee is a Recommender as a Service offering a RESTful API and SDKs, custom-tailored by data scientists.",
		icon: "Recombee.svg",
		categories: [
			"marketing-automation",
			"api-pattern"
		],
		rules: [
			{
				id: "recombee:pageGlobal:0",
				kind: "pageGlobal",
				property: "obsPostRecombee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "recombee:pageGlobal:1",
				kind: "pageGlobal",
				property: "obsRecombee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "recombee:pageGlobal:2",
				kind: "pageGlobal",
				property: "recombee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "recombee:pageGlobal:3",
				kind: "pageGlobal",
				property: "recombeeClient",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "recovermycart",
		name: "RecoverMyCart",
		website: "https://app.recovermycart.com/",
		description: "RecoverMyCart is a Shopify app for abandoned basket recovery.",
		icon: "RecoverMyCart.png",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "recovermycart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.recovermycart\\.com"),
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
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "redrive",
		name: "Redrive",
		website: "https://redrive.com.br",
		description: "Redrive is a sales platform for WhatsApp that provides automation tools to help companies increase sales through the messaging app.",
		icon: "Redrive.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "redrive:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.redrive\\.com\\.br"),
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
		id: "reelevant",
		name: "Reelevant",
		website: "https://try.reelevant.com",
		description: "Reelevant is a visual content platform that helps businesses to create on-demand content for their viewers in order to increase conversion rates.",
		icon: "Reelevant.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "reelevant:pageGlobal:0",
				kind: "pageGlobal",
				property: "reel.companyId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "reelevant:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.reelevant\\.com"),
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
		id: "refericon",
		name: "Refericon",
		website: "https://refericon.pl/",
		description: "Refericon is a tool that enhances conversion and sales by using referral marketing.",
		icon: "Refericon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "refericon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//app\\.refericon\\.pl/"),
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
		id: "referral-rocket",
		name: "Referral Rocket",
		website: "https://referralrocket.io",
		description: "Referral Rocket is a software solution for referral and affiliate marketing.",
		icon: "ReferralRocket.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "referral-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.referralrocket\\.io"),
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
		id: "referralcandy",
		name: "ReferralCandy",
		website: "https://www.referralcandy.com",
		description: "ReferralCandy is a marketing platform that gets shoppers to refer their friends.",
		icon: "ReferralCandy.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "referralcandy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.referralcandy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "referralcandy:dom:1",
				kind: "dom",
				selector: "iframe[src*='.referralcandy.com/'],li > a[href*='.referralcandy.com/'],div > a[href*='.referralcandy.com/'] ",
				description: "DOM selector matches a known technology marker."
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
		id: "reflektion",
		name: "Reflektion",
		website: "https://reflektion.com",
		description: "Reflektion is a customer centric personalisation platform that optimizes customer experiences on an individual basis in real time.",
		icon: "Reflektion.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "reflektion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net/js/reflektion\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "reflektion:pageGlobal:1",
				kind: "pageGlobal",
				property: "RFK_DEPLOY_TIME",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "reflektion:pageGlobal:2",
				kind: "pageGlobal",
				property: "RfkParams",
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
		id: "registria",
		name: "Registria",
		website: "https://www.registria.com",
		description: "Registria is a platform that enables durable product companies to engage with customers and deliver personalized experiences.",
		icon: "Registria.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "registria:pageGlobal:0",
				kind: "pageGlobal",
				property: "Registria.Cases",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "registria:pageGlobal:1",
				kind: "pageGlobal",
				property: "getRegistriaData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "registria:pageGlobal:2",
				kind: "pageGlobal",
				property: "getRegistriaDateData",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rela",
		name: "Rela",
		website: "https://www.relahq.com",
		description: "Rela is a set of property marketing tools for real estate professionals to enhance listings, attract potential buyers, and streamline the sales process.",
		icon: "Rela.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rela:pageGlobal:0",
				kind: "pageGlobal",
				property: "relaAjaxLink",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "rela:pageGlobal:1",
				kind: "pageGlobal",
				property: "relaAjaxPost",
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
		id: "releva",
		name: "Releva",
		website: "https://releva.ai",
		description: "Releva is a marketing automation platform for ecommerce that uses AI to manage revenue in real time and automate brand communication.",
		icon: "Releva.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "releva:pageGlobal:0",
				kind: "pageGlobal",
				property: "Releva.clearCookies",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "relewise",
		name: "Relewise",
		website: "https://relewise.com",
		description: "Relewise is a platform that uses personalisation technology to provide customised online experiences through personalised search and recommendations.",
		icon: "Relewise.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "relewise:dom:0",
				kind: "dom",
				selector: "link[href*='api.relewise.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "relewise:pageGlobal:1",
				kind: "pageGlobal",
				property: "relewiseConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "relewise:pageGlobal:2",
				kind: "pageGlobal",
				property: "relewiseTracking",
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
		id: "remedo",
		name: "Remedo",
		website: "https://www.remedo.io",
		description: "Remedo is a digital healthcare marketing platform that helps doctors improve their Google search visibility through advanced strategies and technology.",
		icon: "Remedo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "remedo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.remedo\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "remedo:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.remedo\\.io"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "resultify",
		name: "Resultify",
		website: "https://www.resultify.com",
		description: "Resultify is a platform focused on online marketing management.",
		icon: "Resultify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "resultify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.resultify\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "retail-rocket",
		name: "Retail Rocket",
		website: "https://retailrocket.net",
		description: "Retail Rocket is a big data-based personalisation platform for ecommerce websites.",
		icon: "Retail Rocket.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "retail-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.retailrocket\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "retail-rocket:pageGlobal:1",
				kind: "pageGlobal",
				property: "retailrocket",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retail-rocket:pageGlobal:2",
				kind: "pageGlobal",
				property: "rrAddToBasket",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retail-rocket:pageGlobal:3",
				kind: "pageGlobal",
				property: "rrApiOnReady",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retail-rocket:pageGlobal:4",
				kind: "pageGlobal",
				property: "rrLibrary",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retail-rocket:pageGlobal:5",
				kind: "pageGlobal",
				property: "rrPartnerId",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retail-rocket:cookie:6",
				kind: "cookie",
				key: "rr-testCookie",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "retail-rocket:cookie:7",
				kind: "cookie",
				key: "rrpvid",
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
		id: "reunion-marketing",
		name: "Reunion Marketing",
		website: "https://reunionmarketing.com",
		description: "Reunion Marketing is a digital marketing platform for automotive dealerships.",
		icon: "ReunionMarketing.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "reunion-marketing:pageGlobal:0",
				kind: "pageGlobal",
				property: "reunionMarketingApiDomain",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "reuzenpanda",
		name: "Reuzenpanda",
		website: "https://www.reuzenpanda.nl",
		description: "Tossdown is an automated software solution that generates more leads and customers without repetitive tasks.",
		icon: "Reuzenpanda.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "reuzenpanda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reuzenpanda\\.nl"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "reuzenpanda:pageGlobal:1",
				kind: "pageGlobal",
				property: "_reuzenpandaWidget",
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
		id: "revieve",
		name: "Revieve",
		website: "https://www.revieve.com",
		description: "Revieve is a technology company delivering consumer-centric personalised digital brand experiences powered by AI/AR.",
		icon: "Revieve.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "revieve:pageGlobal:0",
				kind: "pageGlobal",
				property: "Revieve.__esModule",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "revieve:pageGlobal:1",
				kind: "pageGlobal",
				property: "revieveConfig.onClickProduct",
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
		id: "revlifter",
		name: "RevLifter",
		website: "https://www.revlifter.com",
		description: "RevLifter is an AI-powered coupon technology which allows brands to offer personalised incentives to their customers based on real-time basket data.",
		icon: "RevLifter.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "revlifter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.revlifter\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "revlifter:pageGlobal:1",
				kind: "pageGlobal",
				property: "RevLifterObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "revlifter:pageGlobal:2",
				kind: "pageGlobal",
				property: "revlifter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "revlifter:cookie:3",
				kind: "cookie",
				key: "REVLIFTER",
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
		id: "revtrax",
		name: "RevTrax",
		website: "https://www.revtrax.com",
		description: "RevTrax is an offer management platform designed to track performance metrics and connect actionable insights.",
		icon: "RevTrax.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "revtrax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revtrax\\.com/RevTrax/js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "richrelevance",
		name: "RichRelevance",
		website: "https://richrelevance.com",
		description: "RichRelevance is a cloud-based omnichannel personalisation platform built to help Retailers, B2B, financial services, travel and hospitality, and branded manufacturers personalise their customer experiences.",
		icon: "RichRelevance.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "richrelevance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.richrelevance\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "richrelevance:pageGlobal:1",
				kind: "pageGlobal",
				property: "RR.U",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "richrelevance:pageGlobal:2",
				kind: "pageGlobal",
				property: "rr_v",
				valuePattern: new RegExp("([\\d.]+)"),
				confidence: 50,
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
		id: "rightmessage",
		name: "RightMessage",
		website: "https://rightmessage.com",
		description: "RightMessage is a real-time content personalization tool.",
		icon: "RightMessage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rightmessage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.rightmessage\\.com/"),
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
		id: "ringostat",
		name: "Ringostat",
		website: "https://ringostat.com",
		description: "Ringostat is an AI-powered platform designed for business phone systems and marketing performance.",
		icon: "Ringostat.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ringostat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.ringostat\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ringostat:pageGlobal:1",
				kind: "pageGlobal",
				property: "ringostatAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ringostat:pageGlobal:2",
				kind: "pageGlobal",
				property: "ringostatAnalytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ringostat:pageGlobal:3",
				kind: "pageGlobal",
				property: "ringostatRestartSubstitution",
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
		id: "rioseo",
		name: "RioSEO",
		website: "https://www.rioseo.com",
		description: "RioSEO is a provider of management and local search marketing solutions operating at a global scale.",
		icon: "RioSEO.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rioseo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("rlscdn\\.rioseo\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ritekit",
		name: "RiteKit",
		website: "https://ritekit.com",
		description: "RiteKit is a tool that enhances social media engagement by optimizing calls-to-action (CTAs), generating relevant hashtags, and integrating with social media management systems to streamline content distribution and audience interaction.",
		icon: "RiteKit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ritekit:dom:0",
				kind: "dom",
				selector: "iframe[src*='cdn.ritekit.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "roas-funnels",
		name: "Roas Funnels",
		website: "https://roasfunnels.com",
		description: "Roas Funnels is an all-in-one digital marketing platform designed to support business growth through tools and strategies.",
		icon: "RoasFunnels.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "roas-funnels:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.roasfunnels\\.com"),
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
		id: "robarov",
		name: "Robarov",
		website: "https://robarov.be",
		description: "Robarov is an online marketing platform that delivers customized online strategies designed to attract and engage new customers.",
		icon: "Robarov.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "robarov:pageGlobal:0",
				kind: "pageGlobal",
				property: "ROBAROV_CSRF_TOKEN",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "robly",
		name: "Robly",
		website: "https://www.robly.com",
		description: "Robly is an email marketing platform designed to simplify campaign creation and management for businesses.",
		icon: "Robly.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "robly:dom:0",
				kind: "dom",
				selector: "form[action*='list.robly.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "rock-content",
		name: "Rock Content",
		website: "https://rockcontent.com",
		description: "Rock Content is a content marketing platform. It provides tools and resources for creating, distributing, and measuring content to help businesses engage their audience and achieve marketing goals.",
		icon: "RockContent.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "rock-content:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rockcontent\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rockerbox",
		name: "Rockerbox",
		website: "https://www.rockerbox.com",
		description: "Rockerbox is a provider of multi-touch attribution software.",
		icon: "Rockerbox.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rockerbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wxyz\\.rb\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rockerbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "RB.source",
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
		id: "rocket-tools",
		name: "Rocket Tools",
		website: "https://www.rocket-tools.io",
		description: "Rocket Tools is an AI platform that connects brands with customers, transforming mall data into actionable insights for marketing performance.",
		icon: "RocketTools.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "rocket-tools:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("script\\.rocket-tools\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rokt",
		name: "Rokt",
		website: "https://www.rokt.com",
		description: "Rokt is an ecommerce marketing technology that gives customers a personalised and relevant experience while buying online.",
		icon: "Rokt.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rokt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rokt\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rokt:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.rokt\\.com"),
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
		id: "roof",
		name: "Roof",
		website: "https://www.roofai.com",
		description: "Roof is a platform that supports real estate companies in increasing online revenue through integrated digital solutions powered by artificial intelligence and online marketing services.",
		icon: "Roof.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "roof:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.roof\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "roof:pageGlobal:1",
				kind: "pageGlobal",
				property: "RoofWebMessenger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "roof:pageGlobal:2",
				kind: "pageGlobal",
				property: "openRoofChat",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "roojoom",
		name: "Roojoom",
		website: "https://www.roojoom.com",
		description: "Roojoom is a content marketing platform that converts content into revenue, designed for guided browsing.",
		icon: "Roojoom.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "roojoom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.roojoom\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "roojoom:pageGlobal:1",
				kind: "pageGlobal",
				property: "RoojoomsGridCtrl",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rosana",
		name: "Rosana",
		website: "https://rosana.io",
		description: "Rosana is a platform that converts customer interactions into measurable business outcomes through automated conversation management.",
		icon: "Rosana.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rosana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.rosana\\.io"),
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
		id: "rtoaster",
		name: "Rtoaster",
		website: "https://www.brainpad.co.jp/rtoaster",
		description: "Rtoaster is a high-precision personalization platform developed in Japan that enables tailored user experiences across digital channels.",
		icon: "Rtoaster.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "rtoaster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.rtoaster\\.jp"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rudderstack",
		name: "Rudderstack",
		website: "https://rudderstack.com/",
		description: "Rudderstack is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Rudderstack.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "rudderstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.rudderlabs\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rudderstack:pageGlobal:1",
				kind: "pageGlobal",
				property: "rudderanalytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ryzeo",
		name: "Ryzeo",
		website: "https://ryzeo.com",
		description: "Ryzeo is an AI-powered platform that delivers personalized product recommendations to help convert website visitors into customers.",
		icon: "Ryzeo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "ryzeo:dom:0",
				kind: "dom",
				selector: "link[href*='stats.ryzeo.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ryzeo:pageGlobal:1",
				kind: "pageGlobal",
				property: "ryzeoSubmit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "saasquatch",
		name: "SaaSquatch",
		website: "https://www.saasquatch.com",
		description: "SaaSquatch is a cloud-based loyalty, referral and rewards marketing platform.",
		icon: "SaaSquatch.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "saasquatch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.cloudfront\\.net/assets/javascripts/(?:v2/)?|/sas)squatch\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "saasquatch:pageGlobal:1",
				kind: "pageGlobal",
				property: "SAASQUATCH_TENANT_ALIAS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "saasquatch:pageGlobal:2",
				kind: "pageGlobal",
				property: "squatch.CtaWidget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "saasquatch:pageGlobal:3",
				kind: "pageGlobal",
				property: "squatchQuery",
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
		id: "sailthru",
		name: "Sailthru",
		website: "https://www.sailthru.com",
		description: "Sailthru is a marketing automation software and multi-channel personalisation tool that serves ecommerce and media brands.",
		icon: "Sailthru.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "sailthru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ak\\.sail-horizon\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sailthru:pageGlobal:2",
				kind: "pageGlobal",
				property: "Sailthru",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sailthru:pageGlobal:3",
				kind: "pageGlobal",
				property: "sailthruIdentify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sailthru:pageGlobal:4",
				kind: "pageGlobal",
				property: "sailthruNewsletterRegistration",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sailthru:pageGlobal:5",
				kind: "pageGlobal",
				property: "trackSailthruUser",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sailthru:cookie:6",
				kind: "cookie",
				key: "sailthru_pageviews",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "sailthru:meta:7",
				kind: "meta",
				key: "sailthru.image.full",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "sailthru:meta:8",
				kind: "meta",
				key: "sailthru.title",
				description: "Meta tag matches a known technology marker."
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
		id: "salecycle",
		name: "SaleCycle",
		website: "https://www.salecycle.com",
		description: "SaleCycle is a UK based global behavioral marketing firm.",
		icon: "salecycle.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "salecycle:dom:0",
				kind: "dom",
				selector: "iframe[src*='.salecycle.com'][target='_self']",
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
		id: "sales-auotomator",
		name: "Sales Auotomator",
		website: "https://www.salesautomator.io/automations",
		description: "Sales Automator is a tool designed to automate sales processes and help increase overall sales.",
		icon: "SalesAutomator.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sales-auotomator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.salesautomator\\.io"),
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
		id: "salesfire",
		name: "SalesFire",
		website: "https://www.salesfire.co.uk",
		description: "SalesFire is a SaaS company specialising in conversion rate optimisation, intelligent personalisation and on-site search solutions.",
		icon: "SalesFire.svg",
		categories: [
			"marketing-automation",
			"search"
		],
		rules: [
			{
				id: "salesfire:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.salesfire\\.co\\.uk/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesfire:pageGlobal:1",
				kind: "pageGlobal",
				property: "loadSalesfire",
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
		id: "salesforce-audience-studio",
		name: "Salesforce Audience Studio",
		website: "https://www.salesforce.com/products/marketing-cloud/data-management",
		description: "Salesforce Audience Studio is a customer data marketplace that only other platform users can access.",
		icon: "Salesforce.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "salesforce-audience-studio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.krxd\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesforce-audience-studio:dom:1",
				kind: "dom",
				selector: "link[href*='.krxd.net']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "salesforce-audience-studio:pageGlobal:2",
				kind: "pageGlobal",
				property: "Krux",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-audience-studio:pageGlobal:3",
				kind: "pageGlobal",
				property: "updateKruxCookie",
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
		id: "salesforce-interaction-studio",
		name: "Salesforce Interaction Studio",
		website: "https://www.salesforce.com/products/marketing-cloud/customer-interaction",
		description: "Salesforce Interaction Studio (formerly Evergage) is a cloud-based software that allows users to collect, analyze, and respond to user behavior on their websites and web applications in real-time.",
		icon: "Salesforce.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "salesforce-interaction-studio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.evgnet\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesforce-interaction-studio:pageGlobal:1",
				kind: "pageGlobal",
				property: "Evergage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-interaction-studio:pageGlobal:2",
				kind: "pageGlobal",
				property: "evergageHideSections",
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
		id: "salesforce-marketing-cloud-account-engagement",
		name: "Salesforce Marketing Cloud Account Engagement",
		website: "https://www.salesforce.com/products/marketing-cloud/marketing-automation",
		description: "Salesforce Marketing Cloud Account Engagement (formerly known as Pardot) is an application specifically designed for B2B marketing automation.",
		icon: "Salesforce.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "salesforce-marketing-cloud-account-engagement:dom:0",
				kind: "dom",
				selector: "iframe[scr*='.pardot.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:pageGlobal:1",
				kind: "pageGlobal",
				property: "piAId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:pageGlobal:2",
				kind: "pageGlobal",
				property: "piCId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:pageGlobal:3",
				kind: "pageGlobal",
				property: "piHostname",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:pageGlobal:4",
				kind: "pageGlobal",
				property: "piProtocol",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:pageGlobal:5",
				kind: "pageGlobal",
				property: "piTracker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:responseHeader:6",
				kind: "responseHeader",
				key: "X-Pardot-LB",
				description: "Response header matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:responseHeader:7",
				kind: "responseHeader",
				key: "X-Pardot-Route",
				description: "Response header matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:responseHeader:8",
				kind: "responseHeader",
				key: "X-Pardot-Rsp",
				description: "Response header matches a known technology marker."
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:dns:9",
				kind: "dns",
				valuePattern: new RegExp("pardot"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "salesloft",
		name: "Salesloft",
		website: "https://salesloft.com",
		description: "Salesloft is a cloud-based sales engagement platform.",
		icon: "Salesloft.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "salesloft:pageGlobal:0",
				kind: "pageGlobal",
				property: "SLScoutObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesloft:pageGlobal:1",
				kind: "pageGlobal",
				property: "slscout",
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
		id: "salesmanago",
		name: "SALESmanago",
		website: "https://www.salesmanago.com",
		description: "SALESmanago is a no-code marketing automation and customer data platform designed for mid-sized buinesses and enterprises.",
		icon: "SALESmanago.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "salesmanago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salesmanago\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesmanago:pageGlobal:1",
				kind: "pageGlobal",
				property: "SalesmanagoObject",
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
		id: "saleswings",
		name: "SalesWings",
		website: "https://www.saleswingsapp.com",
		description: "SalesWings is a tool that evaluates and identifies high-quality sales leads based on engagement and interest metrics.",
		icon: "SalesWings.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "saleswings:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s\\.saleswingsapp\\.com"),
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
		id: "samsung-food",
		name: "Samsung Food",
		website: "https://samsungfood.com",
		description: "Samsung Food is an all-in-one app for recipe saving, meal planning, grocery shopping, and recipe sharing.",
		icon: "SamsungFood.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "samsung-food:pageGlobal:0",
				kind: "pageGlobal",
				property: "WhiskLoading",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "samsung-food:pageGlobal:1",
				kind: "pageGlobal",
				property: "whisk-jsp.push",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "samsung-food:pageGlobal:2",
				kind: "pageGlobal",
				property: "whisk.analytics",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sare",
		name: "Sare",
		website: "https://sare.pl",
		description: "Sare is a marketing automation platform that uses targeted email campaigns to strengthen customer relationships and enhance brand loyalty.",
		icon: "Sare.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sare:dom:0",
				kind: "dom",
				selector: "input[id*='SAREforms_email']",
				description: "DOM selector matches a known technology marker."
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
		id: "satori",
		name: "Satori",
		website: "https://satori.marketing",
		description: "Satori provides marketing automation software.",
		icon: "Satori.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "satori:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("satori\\.segs\\.jp/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "satori:dom:1",
				kind: "dom",
				selector: "iframe[src*='satori.segs.jp/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "satori:pageGlobal:2",
				kind: "pageGlobal",
				property: "SatoriForm",
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
		id: "schema-app",
		name: "Schema App",
		website: "https://www.schemaapp.com",
		description: "Schema App is a tool that converts website content into schema markup, the language of search.",
		icon: "SchemaApp.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "schema-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.schemaapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "schema-app:pageGlobal:1",
				kind: "pageGlobal",
				property: "schema_highlighter",
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
		id: "scoop-it",
		name: "Scoop.it",
		website: "https://www.scoop.it",
		description: "Scoop.it is a content marketing software company based in San Francisco which provide content curation platform.",
		icon: "Scoop.it.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "scoop-it:dom:0",
				kind: "dom",
				selector: "iframe[src*='.scoop.it/'], a[href*='.scoop.it/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
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
		id: "scoreapp",
		name: "ScoreApp",
		website: "https://www.scoreapp.com",
		description: "ScoreApp is a quiz marketing platform designed for lead generation and customer engagement.",
		icon: "ScoreApp.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "scoreapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.scoreapp\\.com"),
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
		id: "seedgrow",
		name: "SeedGrow",
		website: "https://seedgrow.net",
		description: "SeedGrow is a marketing solutions provider for Shopify, offering tools and services to support customer acquisition, engagement, and sales optimization for online stores.",
		icon: "SeedGrow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seedgrow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.seedgrow\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seedgrow:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.seedgrow\\.net"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "seedgrow:pageGlobal:2",
				kind: "pageGlobal",
				property: "seedgrow_whatsapp_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seedgrow:pageGlobal:3",
				kind: "pageGlobal",
				property: "seedgrow_widget_setting",
				description: "Page-owned global matches a known technology marker."
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
		id: "segment",
		name: "Segment",
		website: "https://segment.com",
		description: "Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Segment.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "segment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.segment\\.com/analytics\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segment:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/segment-wrapper\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segment:pageGlobal:2",
				kind: "pageGlobal",
				property: "__SEGMENT_INSPECTOR__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "segment:pageGlobal:3",
				kind: "pageGlobal",
				property: "analytics.SNIPPET_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "segment:pageGlobal:4",
				kind: "pageGlobal",
				property: "analytics.VERSION",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "segment:dns:5",
				kind: "dns",
				valuePattern: new RegExp("segment-site-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "segmetrics",
		name: "Segmetrics",
		website: "https://segmetrics.io",
		description: "Segmetrics is a platform that provides audience insights for marketers by analyzing customer data to understand behavior, segmentation, and performance across marketing channels.",
		icon: "Segmetrics.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "segmetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.segmetrics\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segmetrics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.segmetrics\\.io"),
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
		id: "selligent",
		name: "Selligent",
		website: "https://meetmarigold.com/solutions/messaging/selligent",
		description: "Selligent is a data-driven, multi-channel marketing tool that enables organizations to manage, execute, and analyze customer engagement campaigns across multiple digital communication channels.",
		icon: "Selligent.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "selligent:pageGlobal:0",
				kind: "pageGlobal",
				property: "selligentClearCart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "selligent:pageGlobal:1",
				kind: "pageGlobal",
				property: "selligentEvent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "semrush",
		name: "SEMrush",
		website: "https://www.semrush.com",
		description: "SEMrush is an all-in-one tool suite for improving online visibility and discovering marketing insights.",
		icon: "SEMrush.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "semrush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.semrush\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "semrush:pageGlobal:1",
				kind: "pageGlobal",
				property: "SEMRUSH",
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
		id: "send",
		name: "Send",
		website: "https://send2.co/",
		description: "Send is a marketing platform built for WordPress, providing tools to manage campaigns, track performance, and engage audiences within the WordPress ecosystem.",
		icon: "Send.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "send:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/send-app/assets/js/.*\\.js"),
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "sendheap",
		name: "SendHeap",
		website: "https://sendheap.com",
		description: "SendHeap is a platform that notifies customers about order updates and informs them of campaigns and price changes across multiple communication channels.",
		icon: "SendHeap.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sendheap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sendheap\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "sendinblue",
		name: "Sendinblue",
		website: "https://www.sendinblue.com",
		description: "Sendinblue is an email marketing solution for small and medium-sized businesses that want to send and automate email marketing campaigns.",
		icon: "Sendinblue.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "sendinblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sib(?:automation|forms)\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sendinblue:dom:1",
				kind: "dom",
				selector: "iframe[src*='sibautomation.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "sendinblue:pageGlobal:2",
				kind: "pageGlobal",
				property: "sendinblue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sendinblue:dns:3",
				kind: "dns",
				valuePattern: new RegExp("\\.sendinblue\\.com"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "sendlane",
		name: "Sendlane",
		website: "https://www.sendlane.com/",
		description: "Sendlane is an email and sms marketing platform for online businesses",
		icon: "Sendland.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sendlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sendlane\\.com/scripts/pusher\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sendlane:pageGlobal:1",
				kind: "pageGlobal",
				property: "_Sendlane",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sendpad",
		name: "Sendpad",
		website: "https://www.sendtex.com",
		description: "Sendpad is a platform that enables automated audience engagement through personalization to support loyalty growth.",
		icon: "Sendtex.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sendpad:dom:0",
				kind: "dom",
				selector: "form[action*='forms.sendtex.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "sendpulse",
		name: "SendPulse",
		website: "https://sendpulse.com",
		description: "SendPulse is an email marketing platform with additional channels: SMS, web push notifications, Facebook and WhatsApp chatbots.",
		icon: "SendPulse.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "sendpulse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sendpulse\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sendpulse:dom:1",
				kind: "dom",
				selector: "link[href*='.sendpulse.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "sendx",
		name: "SendX",
		website: "https://www.sendx.io",
		description: "SendX is an email marketing software designed to help users send campaigns, build mailing lists, and automate marketing.",
		icon: "SendX.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sendx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sendx\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sendx:pageGlobal:1",
				kind: "pageGlobal",
				property: "_sendx",
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
		id: "sensor-tower",
		name: "Sensor Tower",
		website: "https://sensortower.com",
		description: "Sensor Tower is a mobile app store marketing intelligence platform that provides data and insights on app performance, user acquisition, and market trends.",
		icon: "SensorTower.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sensor-tower:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//sensortower\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "seo-samba",
		name: "SEO Samba",
		website: "https://www.seosamba.com",
		description: "SEO Samba is a marketing automation solution designed for franchises and enterprises.",
		icon: "SEOSamba.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seo-samba:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sa\\.seosamba\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seo-samba:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sa\\.seosamba\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "seoant",
		name: "SEOAnt",
		website: "https://www.seoant.com",
		description: "SEOAnt is a SEO customization service that provides professional improvement suggestions, aimed at enhancing Google rankings and increasing conversions.",
		icon: "SEOAnt.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seoant:pageGlobal:0",
				kind: "pageGlobal",
				property: "BlackUrlArray_SEOAnt",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seoant:pageGlobal:1",
				kind: "pageGlobal",
				property: "SEOAnt_toConsumableArray",
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "seomatic",
		name: "SEOmatic",
		website: "https://plugins.craftcms.com/seomatic",
		description: "SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 3.",
		icon: "SEOmatic.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seomatic:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^SEOmatic$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"craft-cms"
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
		id: "seomator",
		name: "SEOmator",
		website: "https://seomator.com",
		description: "SEOmator is an AI-powered SEO and SEM platform designed for website optimisation.",
		icon: "SEOmator.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seomator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//seomator\\.com/"),
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
		id: "seopress",
		name: "SEOPress",
		website: "https://www.seopress.org",
		description: "SEOPress is a WordPress plugin for SEO.",
		icon: "SEOPress.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "seopress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/themes/seopress/"),
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "setrow",
		name: "Setrow",
		website: "https://setrow.com",
		description: "Setrow is a platform offering integrated digital marketing tools, including email and SMS marketing, push notifications, and recommendation engines, to optimize customer engagement and marketing strategies.",
		icon: "Setrow.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "setrow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.setrowid\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "setrow:pageGlobal:1",
				kind: "pageGlobal",
				property: "setrowCookies",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "setrow:pageGlobal:2",
				kind: "pageGlobal",
				property: "setrowID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "setrow:pageGlobal:3",
				kind: "pageGlobal",
				property: "setrowSua",
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
		id: "shanon",
		name: "Shanon",
		website: "https://www.shanon.co.jp",
		description: "Shanon provides marketing automation software.",
		icon: "Shanon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "shanon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.shanon-services\\.com"),
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
		id: "sharpay",
		name: "Sharpay",
		website: "https://sharpay.io",
		description: "Sharpay is a share button that integrates with blockchain technology, enabling decentralized sharing and tracking of content across multiple platforms.",
		icon: "Sharpay.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sharpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.sharpay\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sharpay:pageGlobal:1",
				kind: "pageGlobal",
				property: "gaSharpay",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sharpay:pageGlobal:2",
				kind: "pageGlobal",
				property: "sharpayAPI.append",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sharpspring",
		name: "SharpSpring",
		website: "https://sharpspring.com",
		description: "SharpSpring is a cloud-based marketing tool that offers customer relationship management, marketing automation, mobile and social marketing, sales team automation, customer service and more, all within one solution.",
		icon: "SharpSpring.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sharpspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marketingautomation\\.services.+(?:ver=)([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sharpspring:pageGlobal:1",
				kind: "pageGlobal",
				property: "sharpspring_tracking_installed",
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
		id: "shoefitr-io",
		name: "Shoefitr.io",
		website: "https://www.shoefitr.io",
		description: "Shoefitr.io is data-based shoe size advice service where we measure the length, width, ball, and instep.",
		icon: "Shoefitr.io.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "shoefitr-io:dom:0",
				kind: "dom",
				selector: "a[href*='api.shoefitr.io/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "shopbox-ai",
		name: "Shopbox AI",
		website: "https://www.shopbox.ai",
		description: "Shopbox AI is a tool that helps online retailers improve customer engagement, increase conversion rates, and enhance retention through data-driven insights.",
		icon: "ShopboxAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "shopbox-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("widget\\.shopbox\\.ai"),
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
		id: "shopimind",
		name: "ShopiMind",
		website: "https://www.shopimind.com",
		description: "ShopiMind is a multi-channel marketing automation solution for all ecommerce activities.",
		icon: "ShopiMind.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "shopimind:pageGlobal:0",
				kind: "pageGlobal",
				property: "_spmq.id_cart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "shopimind:pageGlobal:1",
				kind: "pageGlobal",
				property: "_spmq.spm_ident",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"freemium"
			]
		}
	},
	{
		id: "signal",
		name: "Signal",
		website: "https://www.signal.co/",
		description: "Signal is a cross-platform encrypted messaging service.",
		icon: "signal.png",
		categories: [
			"marketing-automation",
			"tag-management"
		],
		rules: [
			{
				id: "signal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//s\\.btstatic\\.com/tag\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "signal:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("//s\\.thebrighttag\\.com/iframe\\?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "signal:pageGlobal:2",
				kind: "pageGlobal",
				property: "signalData",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "signalayer",
		name: "Signalayer",
		website: "https://signalayer.com",
		description: "Signalayer is a provider of digital marketing solutions designed to support brands and agencies in enhancing their online presence.",
		icon: "Signalayer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "signalayer:pageGlobal:0",
				kind: "pageGlobal",
				property: "Signalayer.API",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "signalayer:pageGlobal:1",
				kind: "pageGlobal",
				property: "signalayerApiKey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "signalize",
		name: "Signalize",
		website: "https://www.signalize.com",
		description: "Signalize is a platform that enables sending browser notifications, including targeted push notifications.",
		icon: "Signalize.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "signalize:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("api\\.signalize\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "simon",
		name: "Simon",
		website: "https://www.simondata.com/",
		description: "Simon is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Simon.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "simon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.simonsignal\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simon:dom:1",
				kind: "dom",
				selector: "link[href*='.simonsignal.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "simon:pageGlobal:2",
				kind: "pageGlobal",
				property: "SimonData",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "simplero",
		name: "Simplero",
		website: "https://simplero.com",
		description: "Simplero is an all-in-one marketing software.",
		icon: "Simplero.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "simplero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.simplero\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simplero:dom:1",
				kind: "dom",
				selector: "a[href*='.simplero.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "simplero:pageGlobal:2",
				kind: "pageGlobal",
				property: "Simplero",
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
		id: "simplycast",
		name: "SimplyCast",
		website: "https://www.simplycast.com",
		description: "SimplyCast is a custom flow communication platform designed to facilitate personalised messaging and automated workflows, allowing businesses to streamline their communication processes.",
		icon: "SimplyCast.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "simplycast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.simplycast\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simplycast:dom:1",
				kind: "dom",
				selector: "iframe[scr*='.simplycast.com']",
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
		id: "sirdata",
		name: "Sirdata",
		website: "https://www.sirdata.com",
		description: "Sirdata is a self-service, third party data-collecting platform that specialises in the collection of behavioural data, predictive targeting and selling of audience segments.",
		icon: "Sirdata.svg",
		categories: [
			"marketing-automation",
			"analytics",
			"privacy-compliance"
		],
		rules: [
			{
				id: "sirdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:choices|cache)\\.consentframework\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sirdata:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.sddan\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sirdata:pageGlobal:2",
				kind: "pageGlobal",
				property: "SDDAN.cmp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sirdata:pageGlobal:3",
				kind: "pageGlobal",
				property: "Sddan.cmpLoaded",
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
		id: "sitebooster",
		name: "SiteBooster",
		website: "https://sitebooster.com",
		description: "Site Booster is a tool that publishes business details across major online directories and platforms to enhance visibility.",
		icon: "SiteBooster.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sitebooster:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("/sitebooster\\.com"),
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
		id: "sitecore-engagement-cloud",
		name: "Sitecore Engagement Cloud",
		website: "https://www.sitecore.com/products/engagement-cloud",
		description: "Sitecore Engagement Cloud is a cloud-based customer experience management platform offering content management, personalisation, marketing automation, analytics, and omni-channel delivery for enhancing digital marketing efforts and improving customer experiences.",
		icon: "Sitecore.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "sitecore-engagement-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/sitecore-engage-v\\.([\\d\\.]+)\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"sitecore"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"recurring",
				"high"
			]
		}
	},
	{
		id: "sizebay",
		name: "Sizebay",
		website: "https://sizebay.com",
		description: "Sizebay is a virtual fitting room that helps ecommerce and even brick-and-mortar stores provide their shoppers with a personalised shopping.",
		icon: "Sizebay.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sizebay:pageGlobal:0",
				kind: "pageGlobal",
				property: "Sizebay",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sizebay:pageGlobal:1",
				kind: "pageGlobal",
				property: "SizebayParams",
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
		id: "sizeme",
		name: "SizeMe",
		website: "https://www.sizemeai.com",
		description: "SizeMe is a platform that helps customers consistently find the correct size and fit for products.",
		icon: "SizeMe.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sizeme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.api\\.sizemeai\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sizeme:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\api\\.sizemeai\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "skeep",
		name: "Skeep",
		website: "https://www.skeep.io",
		description: "Skeep is a tool that uses automated Generative AI quizzes to guide visitors to suitable products, helping boost conversions without requiring any setup.",
		icon: "Skeep.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "skeep:pageGlobal:0",
				kind: "pageGlobal",
				property: "skeep",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "skeepers",
		name: "Skeepers",
		website: "https://skeepers.io",
		description: "Skeepers is a platform designed to improve customer satisfaction and support business growth through enhanced engagement and feedback tools.",
		icon: "Skeepers.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "skeepers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.skeepers\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "skeepers:pageGlobal:1",
				kind: "pageGlobal",
				property: "skeepersStarsCounter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sleeknote",
		name: "Sleeknote",
		website: "https://sleeknote.com",
		description: "Sleeknote is a cloud-based software that helps online businesses reach conversion goals through website popups.",
		icon: "Sleeknote.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sleeknote:pageGlobal:0",
				kind: "pageGlobal",
				property: "SleekNote.SleekNotes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sleeknote:pageGlobal:1",
				kind: "pageGlobal",
				property: "sleeknoteMarketingConsent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sleeknote:pageGlobal:2",
				kind: "pageGlobal",
				property: "sleeknoteScriptTag",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sleeknote:pageGlobal:3",
				kind: "pageGlobal",
				property: "sleeknoteSiteData",
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
		id: "slicktext",
		name: "SlickText",
		website: "https://www.slicktext.com",
		description: "SlickText is a cloud-based SMS marketing solution for business of all sizes.",
		icon: "SlickText.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "slicktext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.slicktext\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "smaily",
		name: "Smaily",
		website: "https://smaily.com",
		description: "Smaily is an email marketing and automation solution.",
		icon: "Smaily.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "smaily:dom:0",
				kind: "dom",
				selector: "form[action*='.sendsmaily.net/api/']",
				description: "DOM selector matches a known technology marker."
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
		id: "smart-analytics",
		name: "Smart Analytics",
		website: "https://smartanalytics.io",
		description: "Smart Analytics is an AI-powered platform that helps increase sales and reduce advertising costs through automated data analysis.",
		icon: "SmartAnalytics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "smart-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartanalytics\\.io"),
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
		id: "smartdx",
		name: "SmartDX",
		website: "https://smartdx.co",
		description: "SmartDX is a nimble alternative to cookies that revolutionizes the tracking and identification of individual audience members, maps cross-device journeys, delivers contextual omnichannel interactions, and attributes conversions at the segment-of-one level.",
		icon: "SmartDX.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "smartdx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.smartdx\\.co/"),
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
		id: "smarthint",
		name: "SmartHint",
		website: "https://www.smarthint.co",
		description: "SmartHint is an ecommerce recommendation system that uses customer behavior data to suggest relevant products and improve shopping experience.",
		icon: "SmartLink.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "smarthint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.smarthint\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "smarthint:pageGlobal:1",
				kind: "pageGlobal",
				property: "countInitSmartHint",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "smarthint:pageGlobal:2",
				kind: "pageGlobal",
				property: "smarthintkey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "smartpoint",
		name: "Smartpoint",
		website: "https://smartpoint.pro",
		description: "Smartpoint is a car dealer conversion optimization system that improves lead capture and sales performance through data-driven tools and customer engagement features.",
		icon: "SmartPoint.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "smartpoint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panel\\.smartpoint\\.pro/"),
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
		id: "snapsea",
		name: "SnapSea",
		website: "https://www.snapsea.io",
		description: "SnapSea is a platform that displays destinations using user-generated content to highlight real-world experiences and local visuals.",
		icon: "SnapSea.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "snapsea:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.snapsea\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "snapsea:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.snapsea.io/']",
				description: "DOM selector matches a known technology marker."
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
		id: "sniply",
		name: "Sniply",
		website: "https://sniply.io",
		description: "Sniply is a special URL shortener that allows to add a call-to-action to any landing page.",
		icon: "Sniply.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "sniply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gosniply\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sniply:pageGlobal:1",
				kind: "pageGlobal",
				property: "sniply.create_sniply_bar",
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
		id: "socedo",
		name: "Socedo",
		website: "https://socedoagency.com",
		description: "Socedo is a B2B demand generation system designed for social media, helping businesses identify, engage, and convert potential leads through targeted social interactions and automated workflows.",
		icon: "Socedo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "socedo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.socedo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "socedo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_socedo.init",
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
		id: "soci",
		name: "SOCi",
		website: "https://www.soci.ai",
		description: "SOCi is an all-in-one platform that unifies workflows, data, and AI to enable automation across business processes.",
		icon: "SOCi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "soci:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meetsoci\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "socialladder",
		name: "SocialLadder",
		website: "https://socialladderapp.com",
		description: "SocialLadder is a complete end-to-end creator management solution for brands looking to maximize and scale their brand ambassador, influencer, and affiliate marketing efforts.",
		icon: "SocialLadder.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "socialladder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("socialladder\\.rkiapps\\.com/"),
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
		id: "sokrati",
		name: "Sokrati",
		website: "https://sokrati.com",
		description: "Sokrati is a digital marketing platform designed to support ecommerce businesses.",
		icon: "Sokrati.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sokrati:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("chuknu\\.sokrati\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "solitics",
		name: "Solitics",
		website: "https://solitics.com",
		description: "Solitics is a platform that analyzes customer data to optimize engagement and drive targeted marketing strategies.",
		icon: "Solitics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "solitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.solitics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "solitics:pageGlobal:1",
				kind: "pageGlobal",
				property: "$solitics.anonymousConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "solitics:pageGlobal:2",
				kind: "pageGlobal",
				property: "$soliticsHeartbit",
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
		id: "sophi",
		name: "Sophi",
		website: "https://www.mathereconomics.com/sophi-start",
		description: "Sophi is a suite of AI-powered optimization, prediction, and automation solutions designed to unlock content value and drive business transformation.",
		icon: "Sophi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sophi:pageGlobal:0",
				kind: "pageGlobal",
				property: "SOPHIDATA.settings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sophi:pageGlobal:1",
				kind: "pageGlobal",
				property: "sophi.settings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sophi:pageGlobal:2",
				kind: "pageGlobal",
				property: "sophiSegments",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sparkloop",
		name: "SparkLoop",
		website: "https://sparkloop.app",
		description: "SparkLoop is a newsletter growth platform that offers referral and partner tools to help newsletter operators expand their audience.",
		icon: "SparkLoop.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sparkloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.sparkloop\\.app/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sparkloop:pageGlobal:1",
				kind: "pageGlobal",
				property: "SLConfig.script_url",
				valuePattern: new RegExp("\\.sparkloop\\.app"),
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
		id: "spectate",
		name: "Spectate",
		website: "https://spectate.com",
		description: "Spectate is an inbound marketing software platform that integrates multiple inbound and outbound channels to strengthen online marketing presence.",
		icon: "Spectate.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "spectate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.spectate\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "spotler-activate",
		name: "Spotler Activate",
		website: "https://spotleractivate.com",
		description: "Spotler Activate is a customer data platform (CDP) that provides technical capabilities for data collection, segmentation, audience targeting, campaign orchestration, and analytics, empowering businesses to personalise customer experiences and optimise marketing efforts.",
		icon: "SpotlerActivate.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "spotler-activate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//squeezely\\.tech/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spotler-activate:pageGlobal:1",
				kind: "pageGlobal",
				property: "sqzlCommon.getVariantName",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spotler-activate:pageGlobal:2",
				kind: "pageGlobal",
				property: "sqzlPersonalization",
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
		id: "spotzer",
		name: "Spotzer",
		website: "https://spotzerdigital.com",
		description: "Spotzer is a platform offering solutions for crafting online content that garners high exposure on search engines and social networks.",
		icon: "Spotzer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "spotzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spotzer\\.com/"),
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
		id: "spread",
		name: "SPREAD",
		website: "https://www.spreadfamily.fr",
		description: "SPREAD is a platform offering tailored marketing campaigns designed to enhance ecommerce engagement and performance.",
		icon: "SPREAD.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "spread:pageGlobal:0",
				kind: "pageGlobal",
				property: "loadSpreadTracker",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "springbig",
		name: "Springbig",
		website: "https://springbig.com",
		description: "Springbig is a marketing platform designed for regulated industries.",
		icon: "Springbig.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "springbig:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/plugins/springbig-integration-plugin-main/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sprinthub",
		name: "SprintHub",
		website: "https://lp.sprinthub.com",
		description: "SprintHub is an all-in-one marketing platform.",
		icon: "SprintHub.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "sprinthub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sprinthub\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sprinthub:pageGlobal:1",
				kind: "pageGlobal",
				property: "SprintHUB",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sprinthub:pageGlobal:2",
				kind: "pageGlobal",
				property: "SprintHUBLoaded",
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
		id: "squalomail",
		name: "SqualoMail",
		website: "https://www.squalomail.com",
		description: "SqualoMail is an email marketing platform that helps businesses manage newsletters and automated campaigns to improve audience engagement and drive sales.",
		icon: "SqualoMail.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "squalomail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.squalomail\\.net"),
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
		id: "squeezely",
		name: "Squeezely",
		website: "https://www.squeezely.tech",
		description: "Squeezely is a customer data platform (CDP) that provides technical capabilities for data collection, segmentation, audience targeting, campaign orchestration, and analytics, empowering businesses to personalise customer experiences and optimise marketing efforts.",
		icon: "Squeezely.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "squeezely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//squeezely\\.tech/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "squeezely:pageGlobal:1",
				kind: "pageGlobal",
				property: "sqzlCommon.getVariantName",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "squeezely:pageGlobal:2",
				kind: "pageGlobal",
				property: "sqzlPersonalization",
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
		id: "stampede",
		name: "Stampede",
		website: "https://stampede.ai",
		description: "Stampede is a platform that consolidates guest engagement technologies into one seamless system for managing interactions and operational touchpoints.",
		icon: "Stampede.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "stampede:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stampede\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "stampede:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("stampede\\.ai"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "stampede:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Stampede$"),
				description: "Meta tag matches a known technology marker."
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
		id: "steer-health",
		name: "Steer Health",
		website: "https://steerhealth.io",
		description: "Steer Health is an AI healthcare platform designed to enhance revenue, reduce costs, and improve patient experience through automation.",
		icon: "SteerHealth.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "steer-health:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.steerhealth\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "stibo",
		name: "Stibo",
		website: "https://www.stibo.com",
		description: "Stibo is a cloud-based software solution designed to help businesses manage organizational data.",
		icon: "Stibo.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "stibo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("product-analytics\\.stibo\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "storylane",
		name: "Storylane",
		website: "https://www.storylane.io",
		description: "Storylane is a platform facilitating the creation and distribution of interactive product demos tailored for SaaS sales and marketing teams.",
		icon: "Storylane.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "storylane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.storylane\\.io/js/v(\\d+)/storylane\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "storylane:pageGlobal:1",
				kind: "pageGlobal",
				property: "Storylane",
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
		id: "storyly",
		name: "Storyly",
		website: "https://www.storyly.io",
		description: "Storyly is a platform that enables the creation of personalized, shoppable experiences for apps and websites.",
		icon: "Storyly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "storyly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-story\\.storyly\\.io/v(\\d+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "storyly:pageGlobal:1",
				kind: "pageGlobal",
				property: "StorylyWeb",
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
		id: "storystream",
		name: "StoryStream",
		website: "https://storystream.ai",
		description: "StoryStream is a content curation platform that specialises in user generated content.",
		icon: "StoryStream.png",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "storystream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.storystream\\.ai/"),
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
		id: "strands",
		name: "Strands",
		website: "https://strands.com",
		description: "Strands is a personalization, recommendation, and segmentation engine designed to tailor content and services based on user data.",
		icon: "Strands.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "strands:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.strands\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "streamlyne",
		name: "Streamlyne",
		website: "https://streamlyne.io",
		description: "Streamlyne is a platform that provides tools and services for managing, optimizing, and automating online marketing activities across multiple digital channels.",
		icon: "Streamlyne.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "streamlyne:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.streamlyne\\.io"),
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
		id: "streamoid",
		name: "Streamoid",
		website: "https://www.streamoid.com",
		description: "Streamoid is a fashion AI optimization and personalization solution, enhancing user experiences through tailored recommendations.",
		icon: "Streamoid.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "streamoid:dom:0",
				kind: "dom",
				selector: "link[href*='.sdk.streamoid.com/']",
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
		id: "strutfit",
		name: "StrutFit",
		website: "https://www.strut.fit",
		description: "StrutFit is an online sizing platform for footwear retailers.",
		icon: "StrutFit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "strutfit:dom:0",
				kind: "dom",
				selector: "iframe[scr*='.strut.fit/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "strutfit:pageGlobal:1",
				kind: "pageGlobal",
				property: "rerenderStrutfit",
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
		id: "stylitics",
		name: "Stylitics",
		website: "https://stylitics.com",
		description: "Stylitics is a cloud-based SaaS platform for retailers to automate and distribute visual content at scale.",
		icon: "Stylitics.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "stylitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stylitics\\.com/v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "stylitics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/stylitics/js/stylitics\\.js\\?ver=v([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "stylitics:dom:2",
				kind: "dom",
				selector: "link[href*='.stylitics.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "stylitics:pageGlobal:3",
				kind: "pageGlobal",
				property: "Stylitics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "stylitics:pageGlobal:4",
				kind: "pageGlobal",
				property: "stylitics",
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
		id: "sub2tech",
		name: "Sub2Tech",
		website: "https://www.sub2tech.com",
		description: "Sub2Tech is combining real time customer data with industry-leading technology.",
		icon: "Sub2Tech.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "sub2tech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sub2tech\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sub2tech:pageGlobal:1",
				kind: "pageGlobal",
				property: "SUB2.codebaseversion",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
		id: "submit-express",
		name: "Submit Express",
		website: "https://www.submitexpress.com",
		description: "Submit Express is a platform that provides tools for search engine optimization and marketing management.",
		icon: "SubmitExpress.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "submit-express:dom:0",
				kind: "dom",
				selector: "a[href*='www.submitexpress.com'] > img[src*='www.submitexpress.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "superbuzz",
		name: "SuperBuzz",
		website: "https://www.superbuzz.io",
		description: "SuperBuzz is a platform that uses AI-powered campaigns to help businesses increase sales performance.",
		icon: "SuperBuzz.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "superbuzz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.superbuzz\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "superbuzz:pageGlobal:1",
				kind: "pageGlobal",
				property: "SuperBuzzSDK",
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
		id: "surfside",
		name: "Surfside",
		website: "https://surfside.io",
		description: "Surfside is an end-to-end marketing technology that aggregates first-party data across customer touchpoints, enabling advertisers to analyze, target, and measure strategies for influencing current and future customers.",
		icon: "Surfside.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "surfside:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.surfside\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "surfside:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.surfside\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sverve",
		name: "Sverve",
		website: "https://www.sverve.com",
		description: "Sverve is a platform facilitating content curation and social post management with targeted matchmaking services.",
		icon: "Sverve.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "sverve:dom:0",
				kind: "dom",
				selector: "a[href*='.sverve.com/'] > img[src*='.sverve.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "sverve:pageGlobal:1",
				kind: "pageGlobal",
				property: "svervdiv",
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
		id: "swifty",
		name: "Swifty",
		website: "https://beswifty.com",
		description: "Swifty is a platform for managing marketing campaigns designed to convert leads into leases.",
		icon: "Swifty.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "swifty:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.beswifty\\.com/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "swifty:pageGlobal:1",
				kind: "pageGlobal",
				property: "swifty_blog_loadmore_params",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "synamate",
		name: "Synamate",
		website: "https://synamate.com",
		description: "Synamate is an AI-powered platform for marketing automation and lead management.",
		icon: "Synamate.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "synamate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.synamate\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "synup",
		name: "Synup",
		website: "https://www.synup.com",
		description: "Synup is a platform that provides online business listings management, monitors reputation, and offers local search analytics.",
		icon: "Synup.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "synup:dom:0",
				kind: "dom",
				selector: "iframe[src*='.synup.com/']",
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
		id: "systema",
		name: "Systema",
		website: "https://systema.ai",
		description: "Systema is an anonymous personalization platform designed for retailers to deliver tailored experiences without using personal identifiers.",
		icon: "Systema.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "systema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.systema\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "systeme-io",
		name: "Systeme.io",
		website: "https://systeme.io",
		description: "Systeme.io is an all-in-one marketing platform that helps businesses create and launch sales funnels, affiliate programs, email marketing campaigns, online courses, blogs, and websites.",
		icon: "Systeme.io.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "systeme-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//systeme\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "systeme-io:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.systeme\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "systeme-io:dom:2",
				kind: "dom",
				selector: "from[action*='//systeme.io/'], a[href*='//systeme.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "systeme-io:cookie:3",
				kind: "cookie",
				key: "systeme_affiliate",
				description: "Cookie name matches a known technology marker."
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
		id: "systems-accel",
		name: "Systems Accel",
		website: "https://systemsaccel.com",
		description: "Systems Accel is an all-in-one platform designed to automate processes and boost sales for coaches, consultants, and service providers.",
		icon: "SystemsAccel.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "systems-accel:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.systemsaccel\\.com"),
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
		id: "syte",
		name: "Syte",
		website: "https://www.syte.ai",
		description: "Syte is a provider of visual AI technology that aims to improve retailers' site navigation, product discovery, and user experience by powering solutions that engage and convert shoppers.",
		icon: "Syte.svg",
		categories: [
			"marketing-automation",
			"search"
		],
		rules: [
			{
				id: "syte:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.syteapi\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "syte:dom:1",
				kind: "dom",
				selector: "img[src*='cdn.syteapi.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "syte:pageGlobal:2",
				kind: "pageGlobal",
				property: "SyteApi.getBinImageBB",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "syte:pageGlobal:3",
				kind: "pageGlobal",
				property: "SyteApp.Analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "syte:pageGlobal:4",
				kind: "pageGlobal",
				property: "SytePixel",
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
		id: "tagalys",
		name: "Tagalys",
		website: "https://www.tagalys.com",
		description: "Tagalys is an ecommerce personalization software that enables data-driven product discovery, recommendations, and merchandising optimization across online stores.",
		icon: "Tagalys.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tagalys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tagalys\\.com"),
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
		id: "tagboard",
		name: "Tagboard",
		website: "https://tagboard.com",
		description: "Tagboard is a platform which allows users to aggregate data from major social networking websites and embed, repost and redisplay it on various media.",
		icon: "Tagboard.svg",
		categories: [
			"marketing-automation",
			"content-publishing"
		],
		rules: [
			{
				id: "tagboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tagboard\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tagboard:dom:1",
				kind: "dom",
				selector: "iframe[src*='.tagboard.com/']",
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
		id: "tagembed",
		name: "Tagembed",
		website: "https://tagembed.com",
		description: "Tagembed is a social media aggregator that collects and displays engaging user-generated content from any social media network such as Instagram, Facebook, Twitter, Youtube, Tiktok, Google Reviews, Airbnb, and 18+ networks.",
		icon: "Tagembed.svg",
		categories: [
			"marketing-automation",
			"content-publishing",
			"widgets-misc"
		],
		rules: [
			{
				id: "tagembed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//widget\\.tagembed\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tagembed:dom:1",
				kind: "dom",
				selector: "script[data-src*='widget.tagembed.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tagembed:pageGlobal:2",
				kind: "pageGlobal",
				property: "TagembedWidget",
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
		id: "tagnology",
		name: "Tagnology",
		website: "https://tagnology.co",
		description: "Tagnology is a platform that transforms authentic content and meaningful interactions into valuable brand assets.",
		icon: "Tagnology.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tagnology:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.tagnology\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tagnology:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tagnology\\.co"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tail",
		name: "Tail",
		website: "https://www.tail.digital",
		description: "Tail is a customer data management platform.",
		icon: "Tail.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "tail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tailtarget\\.com/"),
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
		id: "tapstream",
		name: "Tapstream",
		website: "https://tapstream.com",
		description: "Tapstream is a mobile marketing platform that supports user acquisition and engagement for leading global applications.",
		icon: "Tapstream.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tapstream:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.tapstream\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "target2sell",
		name: "Target2Sell",
		website: "https://www.target2sell.com/",
		description: "Target2Sell is a personalisation solution for ecommerce sites.",
		icon: "Target2Sell.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "target2sell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.target2sell\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tealium-audiencestream",
		name: "Tealium AudienceStream",
		website: "https://tealium.com/products/audiencestream",
		description: "Tealium AudienceStream is an omnichannel customer segmentation and real-time action engine.",
		icon: "Tealium.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tealium-audiencestream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tealiumiq\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tealium-audiencestream:dom:1",
				kind: "dom",
				selector: "link[href*='.tealiumiq.com']",
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
		id: "teeinblue",
		name: "Teeinblue",
		website: "https://teeinblue.com",
		description: "Teeinblue is a personalization tool tailored for print-on-demand merchants using Shopify.",
		icon: "TeeinBlue.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "teeinblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.teeinblue\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "teeinblue:pageGlobal:1",
				kind: "pageGlobal",
				property: "TEEINBLUE_LOADED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "teeinblue:pageGlobal:2",
				kind: "pageGlobal",
				property: "teeinblue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "teeinblue:pageGlobal:3",
				kind: "pageGlobal",
				property: "teeinblueShop",
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
		id: "terminus",
		name: "Terminus",
		website: "https://terminus.com",
		description: "Terminus is a platform that helps identify target audiences, deliver relevant messages across multiple channels, integrate sales teams throughout the revenue process, and measure performance across all activities.",
		icon: "Terminus.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "terminus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.terminus\\.services/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "text-marketer",
		name: "Text Marketer",
		website: "https://atomiks.github.io/tippyjs",
		description: "Text Marketer is a business messaging SMS software that enables companies to send and manage text communications.",
		icon: "TextMarketer.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "text-marketer:dom:0",
				kind: "dom",
				selector: "form[action*='www.textmarketer.biz']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "textmagic",
		name: "Textmagic",
		website: "https://www.textmagic.com",
		description: "Textmagic is a messaging platform for sending SMS and email campaigns designed to generate clicks, responses, and revenue.",
		icon: "Textmagic.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "textmagic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.textmagic\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "the-adslab",
		name: "The AdsLab",
		website: "https://www.theadslab.io",
		description: "The AdsLab is a tool that enables users to target, track, and convert their desired audience effectively.",
		icon: "TheAdsLab.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "the-adslab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.theadslab\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "the-seo-framework",
		name: "The SEO Framework",
		website: "https://theseoframework.com",
		description: "The SEO Framework is the only WordPress plugin that can intelligently generate critical SEO meta tags by reading your WordPress environment.",
		icon: "The SEO Framework.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "the-seo-framework:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+The SEO Framework by Sybre Waaijer"),
				description: "HTML contains a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "themarketer",
		name: "theMarketer",
		website: "https://themarketer.com",
		description: "theMarketer is a marketing platform that includes a loyalty program.",
		icon: "theMarketer.svg",
		categories: [
			"marketing-automation",
			"commerce-operations"
		],
		rules: [
			{
				id: "themarketer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.themarketer\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "themarketer:cookie:1",
				kind: "cookie",
				key: "themarketerbackend_session",
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
		id: "things-solver",
		name: "Things Solver",
		website: "https://thingsolver.com",
		description: "Things Solver is a business platform that improves customer experience by delivering personalized content and recommendations on its website.",
		icon: "ThingsSolver.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "things-solver:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thingsolver\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "thoughtmetric",
		name: "ThoughtMetric",
		website: "https://thoughtmetric.io",
		description: "ThoughtMetric is a marketing attribution platform for ecommerce.",
		icon: "ThoughtMetric.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "thoughtmetric:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thoughtmetric\\.io"),
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
		id: "tieit",
		name: "TIEIT",
		website: "https://www.tieit.ai",
		description: "TIEIT is an all-in-one platform offering integrated tools for sales, marketing, customer service, billing, subscriptions, and scheduling, designed to streamline business operations in a unified solution.",
		icon: "TIEIT.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "tieit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.tieit\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tint",
		name: "TINT",
		website: "https://www.tintup.com",
		description: "TINT is a community marketing platform that enables brands to engage audiences, gather user-generated content, and build authentic connections through social and digital channels.",
		icon: "TINT.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tintup\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tint:pageGlobal:1",
				kind: "pageGlobal",
				property: "tintAnalyticsClient",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tinyalbert",
		name: "tinyAlbert",
		website: "https://www.tinyalbert.ai",
		description: "tinyAlbert is an AI-powered email marketing manager that automates the creation, scheduling, and management of email campaigns.",
		icon: "tinyAlbert.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tinyalbert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.tinyeinstein\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tinyalbert:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.tinyalbert\\.ai"),
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
		id: "titanpush",
		name: "TITANPush",
		website: "https://www.titanpush.com",
		description: "TITANPush is a platform offering tools that assist brands in increasing sales through their websites and improving customer communication without requiring programming knowledge.",
		icon: "TITANPush.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "titanpush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.titanpush\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "titanpush:pageGlobal:1",
				kind: "pageGlobal",
				property: "titanPush",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "titanpush:pageGlobal:2",
				kind: "pageGlobal",
				property: "wpnObject",
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
		id: "tolstoy",
		name: "Tolstoy",
		website: "https://www.gotolstoy.com",
		description: "Tolstoy is a video communication platform designed to automate workflows.",
		icon: "Tolstoy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tolstoy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gotolstoy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tolstoy:pageGlobal:1",
				kind: "pageGlobal",
				property: "tolstoySettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tolstoy:pageGlobal:2",
				kind: "pageGlobal",
				property: "tolstoyWidget",
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
		id: "tomi-ai",
		name: "Tomi.ai",
		website: "https://tomi.ai",
		description: "Tomi.ai is a predictive marketing platform.",
		icon: "Tomi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tomi-ai:pageGlobal:0",
				kind: "pageGlobal",
				property: "tomi.track",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "tomis",
		name: "Tomis",
		website: "https://tomis.tech",
		description: "Tomis is a digital marketing tour operator, specialising in promoting travel services through online channels.",
		icon: "Tomis.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tomis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tomis-bot\\.firebaseapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tomis:dom:1",
				kind: "dom",
				selector: "script#tomis_script-js",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tomis:pageGlobal:2",
				kind: "pageGlobal",
				property: "TOMIS",
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
		id: "toneden",
		name: "ToneDen",
		website: "https://www.toneden.io",
		description: "ToneDen is a social marketing platform designed to help businesses reach and sell to targeted audiences.",
		icon: "ToneDen.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "toneden:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.toneden\\.io"),
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
		id: "topline-pro",
		name: "Topline Pro",
		website: "https://www.toplinepro.com",
		description: "Topline Pro is an all-in-one platform designed to support marketing operations for home service businesses.",
		icon: "ToplinePro.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "topline-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.toplinepro\\.com"),
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
		id: "totango",
		name: "Totango",
		website: "https://www.totango.com",
		description: "Totango is a customer success platform that helps recurring revenue businesses simplify the complexities of customer success by connecting the dots of customer data, actively monitoring customer health changes, and driving proactive engagements.",
		icon: "Totango.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "totango:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.totango\\.com/totango([\\d\\.]+)\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "totango:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.amazonaws\\.com/totango-cdn/totango\\d\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "totango:pageGlobal:2",
				kind: "pageGlobal",
				property: "totango",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "totango:pageGlobal:3",
				kind: "pageGlobal",
				property: "totangoLoader",
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
		id: "tracify",
		name: "Tracify",
		website: "https://www.tracify.ai",
		description: "Tracify is a tracking solution that uses adblock-proof AI technology to help optimize performance and maximize profitability.",
		icon: "Tracify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tracify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripting\\.tracify\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tracify:pageGlobal:1",
				kind: "pageGlobal",
				property: "Tracify",
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
		id: "tradable-bits",
		name: "Tradable Bits",
		website: "https://tradablebits.com",
		description: "Tradable Bits is a platform that integrates content marketing, e-commerce, CRM, and targeted communication into a unified system.",
		icon: "TradableBits.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "tradable-bits:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tradablebits\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "treasure-data",
		name: "Treasure Data",
		website: "https://www.treasuredata.com",
		description: "Treasure Data is the only enterprise customer data platform.",
		icon: "Treasure Data.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "treasure-data:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.treasuredata\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "treasure-data:dom:1",
				kind: "dom",
				selector: "link[href*='.treasuredata.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "treasure-data:pageGlobal:2",
				kind: "pageGlobal",
				property: "Treasure.version",
				valuePattern: new RegExp("(.+)"),
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
		id: "trendemon",
		name: "Trendemon",
		website: "https://trendemon.com",
		description: "Trendemon is a web personalization and account-based orchestration solution.",
		icon: "Trendemon.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "trendemon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.trendemon\\.com/"),
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
		id: "triggerbee",
		name: "Triggerbee",
		website: "https://triggerbee.com",
		description: "Triggerbee is an onsite personalisation platform that lets you use customer and behavioral data to build and launch personalised campaigns.",
		icon: "Triggerbee.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "triggerbee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.myvisitors\\.se"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "triggerbee:pageGlobal:1",
				kind: "pageGlobal",
				property: "triggerbee",
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
		id: "true-fit",
		name: "True Fit",
		website: "https://www.truefit.com",
		description: "True Fit is a data-driven personalisation platform for footwear and apparel retailers.",
		icon: "True Fit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "true-fit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.truefitcorp\\.com/(?:.+/([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
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
		id: "truepush",
		name: "Truepush",
		website: "https://www.truepush.com",
		description: "Truepush is web-based push notification service available for PWA, AMP, WordPress, and Shopify.",
		icon: "truepush.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "truepush:pageGlobal:0",
				kind: "pageGlobal",
				property: "truepush",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "truepush:pageGlobal:1",
				kind: "pageGlobal",
				property: "truepushVersionInfo.key",
				valuePattern: new RegExp("v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "trumpia",
		name: "Trumpia",
		website: "https://www.trumpia.com",
		description: "Trumpia is a marketing platform that supports multiple channels, including mobile, email, social media, voice, and chat marketing.",
		icon: "Trumpia.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "trumpia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trumpia\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trumpia:cookie:1",
				kind: "cookie",
				key: "TrumpiaReferer",
				description: "Cookie name matches a known technology marker."
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
		id: "trustlock",
		name: "TrustLock",
		website: "https://trustlock.co",
		description: "TrustLock is a website tool designed to help increase sales and conversions across various platforms through trust-based elements and user engagement features.",
		icon: "TrustLock.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "trustlock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.trustlock\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trustlock:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.trustlock.co']",
				description: "DOM selector matches a known technology marker."
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
		id: "trustmaker",
		name: "Trustmaker",
		website: "https://thetrustmaker.com",
		description: "Trustmaker is a platform that provides customizable social proof messages, FOMO campaign tools, and Conversion Rate Optimization (CRO) solutions.",
		icon: "Trustmaker.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "trustmaker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getcue\\.app/"),
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
		id: "trustpulse",
		name: "TrustPulse",
		website: "https://trustpulse.com",
		description: "TrustPulse is a marketing tool that enables marketers to drive more conversions and sales by leveraging the power of social proof and fear of missing out.",
		icon: "TrustPulse.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "trustpulse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trstplse\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trustpulse:dom:1",
				kind: "dom",
				selector: "link[href*='.trstplse.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "twik",
		name: "Twik",
		website: "https://www.twik.io/",
		description: "Twik provides a automated, no-configuration business intelligence & personalization automation engine.",
		icon: "Twik.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "twik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.twik\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "twik:pageGlobal:1",
				kind: "pageGlobal",
				property: "TWIK_ID",
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
			],
			cpe: "cpe:2.3:a:twiki:twiki:-:*:*:*:*:*:*:*"
		}
	},
	{
		id: "unbxd",
		name: "Unbxd",
		website: "https://unbxd.com",
		description: "Unbxd is an ecommerce product discovery platform that applies artificial intelligence and advanced data sciences to connect shoppers to the products they are most likely to buy.",
		icon: "Unbxd.svg",
		categories: [
			"marketing-automation",
			"search"
		],
		rules: [
			{
				id: "unbxd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net/unbxdAnalytics\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unbxd:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("unbxd\\.s\\d\\.amazonaws\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unbxd:pageGlobal:2",
				kind: "pageGlobal",
				property: "Unbxd.version",
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
		id: "unipag",
		name: "Unipag",
		website: "https://www.unipag.com",
		description: "Unipag is a universal sales promotion platform designed to streamline and manage promotional campaigns across various channels.",
		icon: "Unipag.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "unipag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.unipag\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unipag:pageGlobal:1",
				kind: "pageGlobal",
				property: "Unipag",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "unito-hub",
		name: "Unito Hub",
		website: "https://unitohub.com",
		description: "Unito Hub is a unified data platform that integrates and consolidates data from multiple sources.",
		icon: "UnitoHub.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "unito-hub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/unito\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unito-hub:pageGlobal:1",
				kind: "pageGlobal",
				property: "Unito",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "unito-hub:pageGlobal:2",
				kind: "pageGlobal",
				property: "Unito.app_version",
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
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "upsales",
		name: "Upsales",
		website: "https://www.upsales.com",
		description: "Upsales is an enterprise CRM and marketing automation tool.",
		icon: "Upsales.svg",
		categories: [
			"marketing-automation",
			"business-tools"
		],
		rules: [
			{
				id: "upsales:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("img\\.upsales\\.com/"),
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
		id: "upscale-systems",
		name: "UpScale Systems",
		website: "https://upscale-systems.com",
		description: "UpScale Systems is an all-in-one platform to enhance local businesses.",
		icon: "UpScale.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "upscale-systems:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.upscale-systems\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "upscale-systems:meta:1",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^UpScale$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "upstack-data",
		name: "Upstack Data",
		website: "https://www.upstackdata.com",
		description: "Upstack Data is a toolkit for data-driven marketing that includes multi-touch attribution, advanced C-API integration, and identity resolution capabilities.",
		icon: "UpstackData.svg",
		categories: [
			"marketing-automation",
			"api-pattern"
		],
		rules: [
			{
				id: "upstack-data:pageGlobal:0",
				kind: "pageGlobal",
				property: "_upstack",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "upsy",
		name: "Upsy",
		website: "https://upsyshopping.com",
		description: "Upsy is a platform that provides personalized product recommendations for ecommerce stores.",
		icon: "Upsy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "upsy:pageGlobal:0",
				kind: "pageGlobal",
				property: "_upsyAbTest",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "upsy:pageGlobal:1",
				kind: "pageGlobal",
				property: "parseUpsyQuery",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "upsy:pageGlobal:2",
				kind: "pageGlobal",
				property: "upsy_sdk.getCookie",
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
		id: "usizy",
		name: "Usizy",
		website: "https://usizy.com",
		description: "Usizy is the top size recommendation and prediction solution for ecommerce using machine learning, big data, and isomoprhic algorythms.",
		icon: "Usizy.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "usizy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.usizy\\.es/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "usizy:pageGlobal:1",
				kind: "pageGlobal",
				property: "uSizyUniversal",
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
		id: "vaven",
		name: "Vaven",
		website: "https://vaven.co",
		description: "Vaven is a platform that allows users to create and display Ad widgets on websites, enabling the development of a personalized Ad network with precise targeting capabilities.",
		icon: "Vaven.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "vaven:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.vaven\\.co/"),
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
		id: "verfacto",
		name: "Verfacto",
		website: "https://www.verfacto.com",
		description: "Verfacto is a marketing analytics tool for eCommerce that identifies factors influencing customer behavior and reveals what converts visitors into customers.",
		icon: "Verfacto.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "verfacto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.verfacto\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "verfacto:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.verfacto\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "verfacto:pageGlobal:2",
				kind: "pageGlobal",
				property: "VerfactoEntryPoint",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "verfacto:pageGlobal:3",
				kind: "pageGlobal",
				property: "VerfactoTracker",
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
		id: "verifypress",
		name: "VerifyPress",
		website: "https://verifypress.com",
		description: "VerifyPress is a social proof app that enables implementation of pop-up notifications, HelloBar alerts, and social proof elements using a single line of code.",
		icon: "VerifyPress.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "verifypress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.verifypress\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "verifypress:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.verifypress\\.com"),
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
		id: "vero",
		name: "Vero",
		website: "https://www.getvero.com/",
		description: "Vero is a tool that tracks user actions and targets emails, allowing you to send more personalised emails to customers based on their behaviour.",
		icon: "Vero.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vero:pageGlobal:0",
				kind: "pageGlobal",
				property: "__vero",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vero:pageGlobal:1",
				kind: "pageGlobal",
				property: "_veroq",
				description: "Page-owned global matches a known technology marker."
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
		id: "viafoura",
		name: "Viafoura",
		website: "https://viafoura.com",
		description: "Viafoura is an audience engagement and social monetisation platform.",
		icon: "viafoura.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "viafoura:pageGlobal:0",
				kind: "pageGlobal",
				property: "dfm_viafoura_options",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "viafoura:pageGlobal:1",
				kind: "pageGlobal",
				property: "viafoura.bootstrap",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "viafoura:pageGlobal:2",
				kind: "pageGlobal",
				property: "viafoura.core",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "vimos",
		name: "Vimos",
		website: "https://vimos.io",
		description: "Vimos is a marketing SaaS specializing in marketing automation.",
		icon: "Vimos.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vimos:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.vimos\\.io/"),
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
		id: "vioma",
		name: "Vioma",
		website: "https://www.vioma.de",
		description: "Vioma is an online marketing system.",
		icon: "Vioma.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vioma:dom:0",
				kind: "dom",
				selector: "link[href*='.viomassl.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vioma:pageGlobal:1",
				kind: "pageGlobal",
				property: "viomaManipulate",
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
		id: "viral-loops",
		name: "Viral Loops",
		website: "https://viral-loops.com",
		description: "Viral Loops is a viral and referral marketing platform to launch ranking competitions, sweepstakes, pre-launch and referral programs.",
		icon: "Viral Loops.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "viral-loops:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.viral-loops\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "viral-loops:dom:1",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/viral-loops-wp-integration/assets/']",
				description: "DOM selector matches a known technology marker."
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
		id: "virtusize",
		name: "Virtusize",
		website: "https://www.virtusize.com",
		description: "Virtusize is a personalisation service that provides size and product recommendations specific to a user's size and trend preferences.",
		icon: "Virtusize.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "virtusize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.virtusize\\.jp/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "visitor-js",
		name: "Visitor.js",
		website: "https://www.visitorjs.com",
		description: "Visitor.js is a tool that personalizes website content to optimize user engagement and improve conversion rates.",
		icon: "Visitor.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "visitor-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.visitorjs\\.com"),
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
		id: "vizury",
		name: "Vizury",
		website: "https://www.vizury.com",
		description: "Vizury is a ecommerce marketing platform.",
		icon: "Vizury.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vizury:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vizury\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vizury:pageGlobal:1",
				kind: "pageGlobal",
				property: "safariVizury",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vizury:pageGlobal:2",
				kind: "pageGlobal",
				property: "vizury_data",
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
		id: "vnn-sports",
		name: "VNN Sports",
		website: "https://www.vnnsports.net",
		description: "VNN Sports is a school sports marketing software that connects administrators, athletes, parents, fans, and brands around high school sports.",
		icon: "VNNSports.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vnn-sports:pageGlobal:0",
				kind: "pageGlobal",
				property: "vnnEndpoints",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "voltn",
		name: "Voltn",
		website: "https://voltn.agency",
		description: "Voltn is a marketing technology services provider.",
		icon: "Voltn.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "voltn:dom:0",
				kind: "dom",
				selector: "link[href*='//pixel.voltn.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vue-ai",
		name: "Vue.ai",
		website: "https://vue.ai",
		description: "Vue.ai is an AI-powered experience management suite which combines the power of product, customer and business intelligence using computer vision and NLP.",
		icon: "Vue.ai.svg",
		categories: [
			"marketing-automation",
			"ui-library"
		],
		rules: [
			{
				id: "vue-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vuex\\.vue\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vue-ai:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("vue_ai\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vue-ai:pageGlobal:2",
				kind: "pageGlobal",
				property: "getVueUrlSegments",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-ai:pageGlobal:3",
				kind: "pageGlobal",
				property: "vuex",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vuture",
		name: "Vuture",
		website: "https://vutu.re",
		description: "Vuture is an all-in-one global technology platform that provides marketing solutions.",
		icon: "Vuture.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vuture:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.vuture\\.net/"),
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
		id: "vwo-engage",
		name: "VWO Engage",
		website: "https://vwo.com/engage",
		description: "VWO Engage is a part of the VWO Platform, which is a web-based push notification platform used by SaaS and B2B marketers, online content publishers, and ecommerce store owners.",
		icon: "VWO.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vwo-engage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushcrew\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vwo-engage:pageGlobal:1",
				kind: "pageGlobal",
				property: "_pushcrewDebuggingQueue",
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
		id: "vyve",
		name: "Vyve+",
		website: "https://vyveplus.ai",
		description: "Vyve+ is an AI-powered platform that integrates marketing and sales automation tools into a single system.",
		icon: "Vyve.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "vyve:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.vyveplus\\.ai"),
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
		id: "wair",
		name: "Wair",
		website: "https://getwair.com",
		description: "Wair is the widget to personalised fit.",
		icon: "Wair.svg",
		categories: [
			"marketing-automation",
			"widgets-misc"
		],
		rules: [
			{
				id: "wair:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("getwair\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wair:pageGlobal:1",
				kind: "pageGlobal",
				property: "PredictV3.default.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wair:pageGlobal:2",
				kind: "pageGlobal",
				property: "predictWidget",
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
		id: "warmly",
		name: "Warmly",
		website: "https://www.warmly.ai",
		description: "Warmly is an AI-powered platform that helps generate prospect lists and automate the conversion process.",
		icon: "Warmly.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "warmly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("opps-widget\\.getwarmly\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "warmly:pageGlobal:1",
				kind: "pageGlobal",
				property: "warmly-widget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "warmly:pageGlobal:2",
				kind: "pageGlobal",
				property: "warmly-widget-config",
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
		id: "web4realty",
		name: "Web4Realty",
		website: "https://web4realty.com",
		description: "Web4Realty is an all-in-one marketing and sales platform for real estate professionals.",
		icon: "Web4Realty.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "web4realty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("idxjs\\.web4realty\\.com"),
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
		id: "webengage",
		name: "WebEngage",
		website: "https://webengage.com",
		description: "WebEngage is a customer data platform and marketing automation suite.",
		icon: "WebEngage.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "webengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webengage\\.co(?:m)?/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webengage:pageGlobal:1",
				kind: "pageGlobal",
				property: "webengage.__v",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "webeo",
		name: "Webeo",
		website: "https://www.webeo.com",
		description: "Webeo is a platform that enables website owners to customize the content on their website for each individual visitor, creating a unique experience for them.",
		icon: "Webeo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "webeo:dom:0",
				kind: "dom",
				selector: "script#__webeoCoreScript",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:1",
				kind: "pageGlobal",
				property: "__webeoEventQueue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:2",
				kind: "pageGlobal",
				property: "__webeoGlobals",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:3",
				kind: "pageGlobal",
				property: "__webeoRunPersonalisation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:4",
				kind: "pageGlobal",
				property: "__webeoScriptStart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:5",
				kind: "pageGlobal",
				property: "__webeoStarted",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:6",
				kind: "pageGlobal",
				property: "__webeoUnmask",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webeo:pageGlobal:7",
				kind: "pageGlobal",
				property: "__webeoVisitData",
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
		id: "webinaris",
		name: "Webinaris",
		website: "https://www.webinaris.com",
		description: "Webinaris is a platform that automates customer acquisition, allowing businesses to attract more customers with significantly reduced effort.",
		icon: "Webinaris.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "webinaris:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("webinaris_load"),
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
		id: "webpushr",
		name: "Webpushr",
		website: "https://www.webpushr.com",
		description: "Webpushr is a web push notification platform that supports mobile and desktop devices.",
		icon: "webpushr.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "webpushr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.webpushr\\.com/app\\.min\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "webpushr:pageGlobal:1",
				kind: "pageGlobal",
				property: "WebPushr.notificationCard",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webpushr:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpushr_display_button",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"freemium",
				"low"
			]
		}
	},
	{
		id: "webyn",
		name: "Webyn",
		website: "https://www.webyn.ai",
		description: "Webyn is a SaaS platform employing AI to analyse website traffic and implement automated, personalised enhancements aimed at improving user experience and potentially increasing conversions for clients.",
		icon: "Webyn.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "webyn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("files\\.webyn\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webyn:dom:1",
				kind: "dom",
				selector: "link[href*='files.webyn.ai']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "webyn:pageGlobal:2",
				kind: "pageGlobal",
				property: "WebynInstance",
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
		id: "wheel-of-popups",
		name: "Wheel of Popups",
		website: "https://wheelofpopups.com",
		description: "Wheel of Popups is a tool that triggers an exit-intent popup designed to capture leaving visitors and support conversion optimization.",
		icon: "WheelOfPopups.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wheel-of-popups:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.wheelofpopups\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wheel-of-popups:pageGlobal:1",
				kind: "pageGlobal",
				property: "initWheelOfPopups",
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
		id: "wheely-sales",
		name: "Wheely Sales",
		website: "https://wheelysales.com",
		description: "Wheely Sales is a tool that boosts email opt-in rates using a gamified exit intent popup designed to engage users as they leave a website.",
		icon: "WheelSales.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wheely-sales:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.wheelysales\\.com/"),
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
		id: "whitespark-seo",
		name: "Whitespark SEO",
		website: "https://whitespark.ca/seo-services",
		description: "Aims to help improve rankings and drive business via Google Search.",
		icon: "Whitespark.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "whitespark-seo:dom:0",
				kind: "dom",
				selector: "script[data-gfspw*='rb.whitespark.ca'], div[data-url*='rb.whitespark.ca']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "wicked-reports",
		name: "Wicked Reports",
		website: "https://www.wickedreports.com",
		description: "Wicked Reports is a marketing analytics platform that provides subscription-based, actionable reports on marketing results at each stage of the customer's journey from first click to sale.",
		icon: "WickedReports.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wicked-reports:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.wickedreports\\.com/"),
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
		id: "wigzo",
		name: "Wigzo",
		website: "https://www.wigzo.com/",
		description: "Wigzo is e-commerce marketing automation platform that helps businesses of every size dig deeper into data to find opportunities to increase their sales and revenue.",
		icon: "Wigzo.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wigzo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.wigzo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wigzo:pageGlobal:1",
				kind: "pageGlobal",
				property: "wigzo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "wiqhit",
		name: "Wiqhit",
		website: "https://www.wiqhit.com",
		description: "Wiqhit is an online personalization tool that customizes website content to engage visitors and increase conversions through tailored user experiences.",
		icon: "Wiqhit.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wiqhit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wiqhit\\.com/"),
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
		id: "wisernotify",
		name: "WiserNotify",
		website: "https://wisernotify.com",
		description: "WiserNotify is a platform offering social proof and FOMO features for ecommerce sites.",
		icon: "WiserNotify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wisernotify:dom:0",
				kind: "dom",
				selector: "link[href*='app.wisernotify.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "wisernotify:pageGlobal:1",
				kind: "pageGlobal",
				property: "wiser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa",
				"freemium"
			]
		}
	},
	{
		id: "wishi",
		name: "Wishi",
		website: "https://wishi.me",
		description: "Wishi is a curation and personalization platform that enhances online sales by providing embedded personal styling at scale.",
		icon: "Wishi.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wishi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.wishi\\.me"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "wishi:pageGlobal:1",
				kind: "pageGlobal",
				property: "Wishi.analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wishi:pageGlobal:2",
				kind: "pageGlobal",
				property: "WishiAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wishi:pageGlobal:3",
				kind: "pageGlobal",
				property: "WishiSDKVersion",
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
		id: "wishloop",
		name: "Wishloop",
		website: "https://wishloop.com",
		description: "Wishloop is a lead generation platform that enables the creation of marketing campaigns without coding, using structured workflows and tools designed to support conversion-focused data collection.",
		icon: "Wishloop.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wishloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.wishloop\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "wolfeo",
		name: "Wolfeo",
		website: "https://wolfeo.fr",
		description: "Wolfeo is an online platform for selling digital products and services, catering to coaches, consultants, and entrepreneurs.",
		icon: "Wolfeo.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "wolfeo:cookie:0",
				kind: "cookie",
				key: "wolfeo_new_session_5",
				description: "Cookie name matches a known technology marker."
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
		id: "woochat",
		name: "WooChat",
		website: "https://woochat.io",
		description: "WooChat is a marketing automation tool that helps store owners to grow their business.",
		icon: "WooChat.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "woochat:dom:0",
				kind: "dom",
				selector: "link[href*='app.woochat.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "woochat:pageGlobal:1",
				kind: "pageGlobal",
				property: "woochat_wa_chat_init",
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
		id: "woorise",
		name: "Woorise",
		website: "https://woorise.com",
		description: "Woorise is a marketing platform that enables the creation of lead generation landing pages.",
		icon: "Woorise.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "woorise:dom:0",
				kind: "dom",
				selector: "script#woorise-embed-js-after",
				description: "DOM selector matches a known technology marker."
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
		id: "wootric",
		name: "Wootric",
		website: "https://www.wootric.com",
		description: "Wootric is a customer feedback platform designed to enhance customer experience management for digital applications and B2B SaaS.",
		icon: "Wootric.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "wootric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wootric\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wootric:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.wootric\\.com"),
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
		id: "wordlift",
		name: "WordLift",
		website: "https://wordlift.io",
		description: "WordLift is an AI tool that analyzes content, identifies key business topics, and enables the insertion of semantic markup without needing technical skills.",
		icon: "WordLift.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wordlift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloud\\.wordlift\\.io/"),
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
		id: "wp-seo-ai",
		name: "WP SEO AI",
		website: "https://wpseoai.com",
		description: "WP SEO AI is a tool that optimizes brand visibility by positioning companies as expert answers across search engines and AI platforms like Google and GPT.",
		icon: "WPSEOAI.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wp-seo-ai:dom:0",
				kind: "dom",
				selector: "script[id*='seoaic_front_main_js-js']",
				description: "DOM selector matches a known technology marker."
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
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "wunderkind",
		name: "Wunderkind",
		website: "https://www.wunderkind.co",
		description: "Wunderkind (Formerly BounceX) is a software for behavioural marketing technologies, created to de-anonymise site visitors, analyse their digital behaviour and create relevant digital experiences regardless of channel or device.",
		icon: "Wunderkind.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wunderkind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bounceexchange\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wunderkind:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smarterhq\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wunderkind:dom:2",
				kind: "dom",
				selector: "link[href*='.smarterhq.io']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "wunderkind:pageGlobal:3",
				kind: "pageGlobal",
				property: "bouncex",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wunderkind:responseHeader:4",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.smarterhq\\.io"),
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
		id: "wyng",
		name: "Wyng",
		website: "https://www.wyng.com",
		description: "Wyng is a platform that connects audiences and drives consumer actions across various marketing channels.",
		icon: "Wyng.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "wyng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.offerpop\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wyng:dom:1",
				kind: "dom",
				selector: "iframe[src*='//offerpop.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "xgen-ai",
		name: "XGen Ai",
		website: "https://xgen.ai",
		description: "XGen Ai is a cloud-based customer journey mapping tool that helps businesses manage product recommendations via artificial intelligence (AI).",
		icon: "XGen Ai.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "xgen-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//assets\\.xgen\\.dev/"),
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
		id: "xtremepush",
		name: "Xtremepush",
		website: "https://xtremepush.com",
		description: "Xtremepush is a customer engagement, personalisation and data platform. It's purpose-built for multichannel and mobile marketing.",
		icon: "Xtremepush.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "xtremepush:pageGlobal:0",
				kind: "pageGlobal",
				property: "xtremepush",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yeps",
		name: "Yeps",
		website: "https://yeps.io",
		description: "Yeps is a minimalist bar that can be added to the top or bottom of your website to collect visitor’s emails and promote content.",
		icon: "Yeps.svg",
		categories: [
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "yeps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.yeps\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yeps:pageGlobal:1",
				kind: "pageGlobal",
				property: "Yeps",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "yieldify",
		name: "Yieldify",
		website: "https://www.yieldify.com",
		description: "Yieldify is a customer journey optimisation platform that brings personalisation to the full customer journey.",
		icon: "Yieldify.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "yieldify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.yieldify\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yieldify:pageGlobal:1",
				kind: "pageGlobal",
				property: "_yieldify",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"payg"
			]
		}
	},
	{
		id: "yoast-seo",
		name: "Yoast SEO",
		website: "https://yoast.com/wordpress/plugins/seo/",
		description: "Yoast SEO is a search engine optimisation plugin for WordPress and other platforms.",
		icon: "Yoast SEO.png",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "yoast-seo:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast (?:WordPress )?SEO plugin v([^\\s]+) -"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "yoast-seo:html:1",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast SEO Premium plugin v(?:[^\\s]+) \\(Yoast SEO v([^\\s]+)\\) -"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "yoast-seo:dom:2",
				kind: "dom",
				selector: "script[class*='yoast-schema-graph']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "yoast-seo-for-shopify",
		name: "Yoast SEO for Shopify",
		website: "https://yoast.com/shopify/apps/yoast-seo/",
		description: "Yoast SEO for Shopify optimizes Shopify shops.",
		icon: "yoast-seo-shopify.png",
		categories: [
			"marketing-automation",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "yoast-seo-for-shopify:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with Yoast SEO for Shopify -->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "yoast-seo-for-shopify:dom:1",
				kind: "dom",
				selector: "script#yoast-schema-graph",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
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
		id: "yoast-seo-premium",
		name: "Yoast SEO Premium",
		website: "https://yoast.com/wordpress/plugins/seo/",
		description: "Yoast SEO Premium is a search engine optimisation plugin for WordPress and other platforms.",
		icon: "Yoast SEO.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "yoast-seo-premium:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast SEO Premium plugin v([^\\s]+) "),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "yotpo-smsbump",
		name: "Yotpo SMSBump",
		website: "https://www.yotpo.com/platform/smsbump-sms-marketing/",
		description: "SMS Bump is a SMS marketing and automations app which was acquired by Yotpo.",
		icon: "Yotpo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "yotpo-smsbump:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("/smsbump_timer\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "yotpo-smsbump:pageGlobal:1",
				kind: "pageGlobal",
				property: "SMSBumpForm",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "youlead",
		name: "YouLead",
		website: "https://www.youlead.pl",
		description: "YouLead is a sales and marketing automation system from Poland that helps businesses manage leads, streamline customer engagement, and optimize marketing workflows through integrated digital tools.",
		icon: "YouLead.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "youlead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.youlead\\.pl"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "youlead:pageGlobal:1",
				kind: "pageGlobal",
				property: "YouLeadDynamicContent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "youlead:pageGlobal:2",
				kind: "pageGlobal",
				property: "YouLeadHtmlBlocks",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zakeke",
		name: "Zakeke",
		website: "https://www.zakeke.com",
		description: "Zakeke is a product customisation tool compatible with services and apps mostly used to manage ecommerce store.",
		icon: "Zakeke.png",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zakeke:pageGlobal:0",
				kind: "pageGlobal",
				property: "zakekeBoot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zakeke:pageGlobal:1",
				kind: "pageGlobal",
				property: "zakekeCustomizeLabel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zakeke:pageGlobal:2",
				kind: "pageGlobal",
				property: "zakekeLoading",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zakeke:pageGlobal:3",
				kind: "pageGlobal",
				property: "zakekeProductPage",
				description: "Page-owned global matches a known technology marker."
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
		id: "zapnito",
		name: "Zapnito",
		website: "https://zapnito.com",
		description: "Zapnito is a platform that enables B2B organizations to manage and scale digital engagement, education, and community-driven growth through integrated content and experience tools.",
		icon: "Zapnito.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zapnito:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.zapnito\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "zapnito:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunkzapnito_web",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zapnito:pageGlobal:2",
				kind: "pageGlobal",
				property: "zapnito.abilities",
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
		id: "zaxaa",
		name: "Zaxaa",
		website: "https://zaxaa.com",
		description: "Zaxaa is a sales funnel service designed to streamline the process of managing leads, nurturing prospects, and converting them into customers.",
		icon: "Zaxaa.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zaxaa:dom:0",
				kind: "dom",
				selector: "a[href*='.zaxaa.com'] > img[src*='www.zaxaa.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "zenrez",
		name: "Zenrez",
		website: "https://zenrez.com",
		description: "Zenrez is a provider of sales and marketing software designed for boutique fitness studios, with a focus on revenue management.",
		icon: "Zenrez.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zenrez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.zenrez\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zeotap",
		name: "Zeotap",
		website: "https://zeotap.com",
		description: "Zeotap is a customer intelligence platform that helps brands better understand their customers and predict behaviors.",
		icon: "Zeotap.svg",
		categories: [
			"marketing-automation",
			"analytics"
		],
		rules: [
			{
				id: "zeotap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zeotap\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zeotap:dom:1",
				kind: "dom",
				selector: "link[href*='.zeotap.com']",
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
		id: "zeppelin",
		name: "Zeppelin",
		website: "https://www.zeppelin-group.com",
		description: "Zeppelin is an internet marketing provider platform designed to support digital advertising and online promotional strategies.",
		icon: "Zeppelin.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zeppelin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloud\\.zeppelin-group\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zevioo",
		name: "Zevioo",
		website: "https://zevioo.com",
		description: "Zevioo is an AI-powered platform that helps ecommerce stores improve conversions, customer loyalty, and revenue through automated optimization and data-driven personalization.",
		icon: "Zevioo.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zevioo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zevioo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zipleads",
		name: "Zipleads",
		website: "https://zipleads.com.au",
		description: "Zipleads is a lead conversion platform that helps businesses capture, manage, and convert potential customers through automated lead tracking and engagement tools.",
		icon: "Zipleads.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zipleads:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.zipleads\\.com\\.au"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "zipleads:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^ZipLeads$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "zotabox",
		name: "Zotabox",
		website: "https://info.zotabox.com",
		description: "Zotabox is marketing tool which includes popups, header bars, page/form builder, testimonial, live chat, etc.",
		icon: "zotabox.svg",
		categories: [
			"marketing-automation",
			"form-schema-library"
		],
		rules: [
			{
				id: "zotabox:pageGlobal:0",
				kind: "pageGlobal",
				property: "Zotabox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zotabox:pageGlobal:1",
				kind: "pageGlobal",
				property: "Zotabox_Init",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "zuberance",
		name: "Zuberance",
		website: "https://zuberance.com",
		description: "Zuberance is a platform that transforms enthusiastic customers into a marketing force, driving recommendations and sales for leading B2B and B2C brands.",
		icon: "Zuberance.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zuberance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zuberance\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zuberance:dom:1",
				kind: "dom",
				selector: "link[href*='static.zuberance.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zurple",
		name: "Zurple",
		website: "https://zurple.com",
		description: "Zurple is a real estate marketing software that provides a solution for agents to manage leads, automate follow-ups, and optimize client engagement.",
		icon: "Zurple.svg",
		categories: [
			"marketing-automation"
		],
		rules: [
			{
				id: "zurple:pageGlobal:0",
				kind: "pageGlobal",
				property: "Zurple.Client",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
