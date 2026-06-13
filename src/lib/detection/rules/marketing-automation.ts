import type { TechnologyDefinition } from '../types';

export const marketingAutomationTechnologyDefinitions = [
	{
		id: "220marketing",
		name: "220Marketing",
		website: "https://www.220marketing.com",
		description: "220Marketing is a marketing service that provides solutions for the mortgage, insurance, real estate, and solar industries.",
		icon: "220Marketing.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "220marketing:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.my220\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "6sense",
		name: "6sense",
		website: "https://6sense.com",
		description: "6sense is a B2B predictive intelligence platform for marketing and sales.",
		icon: "6sense.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "6sense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.6sc\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "6sense:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.6sc\\.co\\/", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "6sense:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.6sc\\.co\\/", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "7moor",
		name: "7moor",
		website: "https://www.7moor.com",
		description: "7moor is an integrated customer service marketing solution that combines communication, customer support, and marketing tools.",
		icon: "7moor.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "7moor:jsGlobal:0",
				kind: "jsGlobal",
				property: "moor7Source",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "able-cdp",
		name: "Able CDP",
		website: "https://www.ablecdp.com",
		description: "Able CDP is a customer journey tracking system that monitors and analyzes user interactions across multiple touchpoints to provide insights into engagement and behavior.",
		icon: "AbleCDP.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "able-cdp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ablecdp\\.com"),
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
		id: "acquia-campaign-factory",
		name: "Acquia Campaign Factory",
		website: "https://www.acquia.com/products/marketing-cloud/campaign-factory",
		description: "Acquia Campaign Factory is centralized marketing management system powered by Mautic.",
		icon: "acquia-campaign-factory.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "acquia-campaign-factory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mautic\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-campaign-factory:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("maestro\\.mautic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"mautic",
		],
	},
	{
		id: "acquia-customer-data-platform",
		name: "Acquia Customer Data Platform",
		website: "https://www.acquia.com/products/marketing-cloud/customer-data-platform",
		description: "Acquia Customer Data Platform (formerly AgilOne) is a customer data platform for Drupal.",
		icon: "acquia-cdp.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "acquia-customer-data-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/.+\\.agilone\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-customer-data-platform:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/scripts\\.agilone\\.com\\/latest\\/a1.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-customer-data-platform:dom:2",
				kind: "dom",
				selector: "[data-function*='Agilone']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acquia-customer-data-platform:jsGlobal:3",
				kind: "jsGlobal",
				property: "$A1",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acquia-customer-data-platform:jsGlobal:4",
				kind: "jsGlobal",
				property: "$A1Config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acquia-customer-data-platform:jsGlobal:5",
				kind: "jsGlobal",
				property: "agiloneObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "act-on",
		name: "Act-On",
		website: "https://act-on.com",
		description: "Act-On is a cloud-based SaaS product for marketing automation.",
		icon: "Act-On.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "act-on:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/cdnr\\/\\d+\\/acton\\/bn\\/tracker\\/\\d+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "act-on:jsGlobal:1",
				kind: "jsGlobal",
				property: "ActOn",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
			cpe: "cpe:2.3:a:act-on:act-on:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "actito",
		name: "Actito",
		website: "https://www.actito.com",
		description: "Actito is an agile SaaS marketing automation platform.",
		icon: "Actito.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "actito:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.actito\\.be"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "actito:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.advisor\\.smartfocus\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "actito:jsGlobal:2",
				kind: "jsGlobal",
				property: "_actGoal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "actito:jsGlobal:3",
				kind: "jsGlobal",
				property: "smartFocus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "actito:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^SmartFocus$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "actito:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^smartfocus$", "i"),
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
	},
	{
		id: "activecampaign",
		name: "ActiveCampaign",
		website: "https://www.activecampaign.com",
		description: "ActiveCampaign is email and marketing automation software.",
		icon: "ActiveCampaign.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "activecampaign:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins\\/activecampaign-subscription-forms\\/site_tracking\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "activecampaign:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.activehosted\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "activecampaign:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app-us1\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "activecampaign:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ac-page\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "activecampaign:url:4",
				kind: "url",
				pattern: new RegExp("\\.activehosted\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "activecampaign:url:5",
				kind: "url",
				pattern: new RegExp("\\.ac-page\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "activecampaign:jsGlobal:6",
				kind: "jsGlobal",
				property: "acEnableTracking",
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
		id: "adabra",
		name: "Adabra",
		website: "https://www.adabra.com",
		description: "Adabra is a SaaS omnichannel marketing automation platform to help boost sales. Adabra allows you to manage user segmentation, create workflow and campaigns through email, social, SMS and more.",
		icon: "Adabra.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "adabra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track\\.adabra\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adabra:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("my\\.adabra\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "adabra:jsGlobal:2",
				kind: "jsGlobal",
				property: "adabraPreview",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adabra:jsGlobal:3",
				kind: "jsGlobal",
				property: "adabra_version_panel",
				valuePattern: new RegExp("(^.+$)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adabra:jsGlobal:4",
				kind: "jsGlobal",
				property: "adabra_version_track",
				valuePattern: new RegExp("(^.+$)"),
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
		id: "adenzo",
		name: "Adenzo",
		website: "https://www.adenzo.com",
		description: "Adenzo is a B2B sales and marketing platform for managing customer relationships, automating outreach, and analyzing performance to support lead generation and sales operations.",
		icon: "Adenzo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "adenzo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("live\\.adenzo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "adenzo:jsGlobal:1",
				kind: "jsGlobal",
				property: "AdenzoTrack",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adenzo:jsGlobal:2",
				kind: "jsGlobal",
				property: "adenzo_contact_id",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "adobe-experience-platform-identity-service",
		name: "Adobe Experience Platform Identity Service",
		website: "https://docs.adobe.com/content/help/en/id-service/using/home.html",
		description: "Adobe Experience Platform Identity Service creates identity graphs that hold customer profiles and the known identifiers that belong to individual consumers.",
		icon: "Adobe.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:0",
				kind: "jsGlobal",
				property: "s_c_il.0._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:1",
				kind: "jsGlobal",
				property: "s_c_il.1._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:2",
				kind: "jsGlobal",
				property: "s_c_il.2._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:3",
				kind: "jsGlobal",
				property: "s_c_il.3._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:4",
				kind: "jsGlobal",
				property: "s_c_il.4._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-experience-platform-identity-service:jsGlobal:5",
				kind: "jsGlobal",
				property: "s_c_il.5._c",
				valuePattern: new RegExp("Visitor"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "adtriba",
		name: "Adtriba",
		website: "https://funnel.io/adtriba",
		description: "Adtriba is a platform that captures all marketing touchpoints and calculates the profitability of each campaign using big data technology and AI.",
		icon: "Adtriba.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "adtriba:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.adtriba\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "agentfire",
		name: "AgentFire",
		website: "https://agentfire.com",
		description: "AgentFire is a platform designed for the real estate industry, offering tools and features that help agents capitalize on digital opportunities for marketing, lead generation, and client engagement.",
		icon: "AgentFire.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "agentfire:jsGlobal:0",
				kind: "jsGlobal",
				property: "AgentFire.Api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "agentfire:jsGlobal:1",
				kind: "jsGlobal",
				property: "AgentFire_Oauth2",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "agentfire:jsGlobal:2",
				kind: "jsGlobal",
				property: "AgentFire_Settings",
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
		id: "agillic",
		name: "Agillic",
		website: "https://agillic.com",
		description: "Agillic is a Nordic marketing automation platform that delivers scalable, personalized campaigns while ensuring operational efficiency and full GDPR compliance.",
		icon: "Agillic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "agillic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.agilliccdn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "agillic:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.agillic\\.eu"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ahrefs",
		name: "Ahrefs",
		website: "https://ahrefs.com",
		description: "Ahrefs is an online toolset utilised for search engine optimisation (SEO) and competitor analysis, which permits users to analyse their website's performance, track keyword rankings, identify backlink opportunities, and research competitors' websites, among other features.",
		icon: "ahrefs.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [],
		metadata: {
			pricing: [
				"low",
				"mid",
			],
		},
	},
	{
		id: "ai-log",
		name: "AI LOG",
		website: "https://www.ai-log.biz/",
		description: "AI LOG is a marketing automation and fraud click prevention tool.",
		icon: "AI-LOG.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ai-log:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ai-log\\.biz\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ai-log:jsGlobal:1",
				kind: "jsGlobal",
				property: "ai_getScript_load",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aimbase",
		name: "Aimbase",
		website: "https://aimbase.com",
		description: "Aimbase is a marketing automation platform designed to streamline campaign management, customer engagement, and data-driven decision-making.",
		icon: "Aimbase.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "aimbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ws\\.aimbase\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aimbase:jsGlobal:1",
				kind: "jsGlobal",
				property: "Aimbase.Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aimerce",
		name: "Aimerce",
		website: "https://www.aimerce.ai/",
		description: "Aimerce is an AI-powered, privacy-focused solution that utilises first-party data to support Shopify brands in a cookieless environment, enhancing data potential and increasing marketing revenue.",
		icon: "Aimerce.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "aimerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aimerce\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aimerce:jsGlobal:1",
				kind: "jsGlobal",
				property: "AimerceAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "aimtell",
		name: "Aimtell",
		website: "https://aimtell.com",
		description: "Aimtell is a cloud-hosted marketing platform that allows digital marketers and businesses to deliver web-based push notifications.",
		icon: "Aimtell.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "aimtell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aimtell\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aimtell:jsGlobal:1",
				kind: "jsGlobal",
				property: "_aimtellLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aimtell:jsGlobal:2",
				kind: "jsGlobal",
				property: "_aimtellPushToken",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aimtell:jsGlobal:3",
				kind: "jsGlobal",
				property: "_aimtellWebhook",
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
		id: "airship",
		name: "Airship",
		website: "https://www.airship.com",
		description: "Airship is an American company that provides marketing and branding services. Airship allows companies to generate custom messages to consumers via push notifications, SMS messaging, and similar, and provides customer analytics services.",
		icon: "Airship.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "airship:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("urbanairship\\.\\w+\\/notify\\/v([\\d.]+)"),
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
		id: "aitrillion",
		name: "AiTrillion",
		website: "https://www.aitrillion.com",
		description: "AiTrillion is a marketing automation platform for ecommerce, offering tools for email campaigns, customer segmentation, loyalty programs, and product recommendations.",
		icon: "AiTrillion.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "aitrillion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aitrillion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aitrillion:jsGlobal:1",
				kind: "jsGlobal",
				property: "aioAccessModule",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aitrillion:jsGlobal:2",
				kind: "jsGlobal",
				property: "aioMeta.meta_e",
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
		id: "akero",
		name: "Akero",
		website: "https://akerolabs.com",
		description: "Akero is a platform that provides marketing and admissions technology designed for educational institutions.",
		icon: "Akero.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "akero:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.akerolabs\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aklamio",
		name: "Aklamio",
		website: "https://www.aklamio.com",
		description: "Aklamio is a solution for enterprise level referral marketing and customer incentivisation.",
		icon: "Aklamio.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "aklamio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aklamio\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aklamio:dom:1",
				kind: "dom",
				selector: "a[href*='.aklamio.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "aklamio:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.aklamio\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "alimama",
		name: "Alimama",
		website: "https://www.alimama.com",
		description: "Alimama is a data-driven marketing technology platform that enables businesses to optimize campaigns and audience engagement through advanced analytics.",
		icon: "Alimama.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "alimama:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alimama\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alimama:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.alimama\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "all-in-one-seo",
		name: "All in One SEO",
		website: "https://aioseo.com",
		description: "All in One SEO optimizes a WordPress website and its content for search engines.",
		icon: "AIOSEO.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "all-in-one-seo:html:0",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:html:1",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo pack ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:html:2",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo pro ([\\d.]+) "),
				version: {
					source: "match",
					template: "pro $1",
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:dom:3",
				kind: "dom",
				selector: "script.aioseo-schema",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "all-in-one-seo:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^all in one seo \\(aioseo\\) ([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "all-in-one-seo:html:5",
				kind: "html",
				pattern: new RegExp("<!-- All in One SEO Pack ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:html:6",
				kind: "html",
				pattern: new RegExp("<!-- All in One SEO ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:html:7",
				kind: "html",
				pattern: new RegExp("<!-- All in One SEO Pro ([\\d.]+) "),
				version: {
					source: "match",
					template: "Pro $1",
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo:meta:8",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^All in One SEO \\(AIOSEO\\) ([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "all-in-one-seo:meta:9",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^All in One SEO Pro \\(AIOSEO\\) ([\\d\\.]+)", "i"),
				version: {
					source: "match",
					template: "Pro $1",
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "all-in-one-seo:meta:10",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^all in one seo pro \\(aioseo\\) ([\\d\\.]+)", "i"),
				version: {
					source: "match",
					template: "pro $1",
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:aioseo:all_in_one_seo:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "all-in-one-seo-pack",
		name: "All in One SEO Pack",
		website: "https://aioseo.com",
		description: "All in One SEO plugin optimizes WordPress website and its content for search engines.",
		icon: "AIOSEO.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "all-in-one-seo-pack:html:0",
				kind: "html",
				pattern: new RegExp("<!-- All in One SEO Pack ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo-pack:dom:1",
				kind: "dom",
				selector: "script.aioseo-schema",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "all-in-one-seo-pack:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^All in One SEO \\(AIOSEO\\)\\s([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "all-in-one-seo-pack:html:3",
				kind: "html",
				pattern: new RegExp("<!-- all in one seo pack ([\\d.]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "all-in-one-seo-pack:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^all in one seo \\(aioseo\\)\\s([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:aioseo:all_in_one_seo:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "allclients",
		name: "AllClients",
		website: "https://allclients.com",
		description: "AllClients is an all-in-one platform that integrates contact management and marketing automation.",
		icon: "AllClients.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "allclients:dom:0",
				kind: "dom",
				selector: "form[action*='www.allclients.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "allclients:dom:1",
				kind: "dom",
				selector: "iframe[href*='www.allclients.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "allclients:dom:2",
				kind: "dom",
				selector: "form[action*='www.allclients.com/'], iframe[href*='www.allclients.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "alli",
		name: "Alli",
		website: "https://www.alliai.com",
		description: "Alli is artificial intelligence for search engine optimisation.",
		icon: "Alli.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "alli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.alliai\\.com\\/"),
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
		id: "alohome",
		name: "Alohome",
		website: "https://en.alohome.io",
		description: "Alohome is a tech platform designed to enhance real estate sales conversions.",
		icon: "Alohome.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "alohome:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.alohome\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ambassador",
		name: "Ambassador",
		website: "https://www.getambassador.com",
		description: "Ambassador is a marketer-friendly software that simplifies referral marketing and helps automating the enrolment, tracking, rewarding and management process.",
		icon: "Ambassador.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ambassador:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getambassador\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ambassador:jsGlobal:1",
				kind: "jsGlobal",
				property: "_mbsy.integrations",
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
		id: "amondo",
		name: "Amondo",
		website: "https://amondo.com",
		description: "Amondo is a content aggregation, curation, and publishing platform that collects, organizes, and distributes digital content across channels.",
		icon: "Amondo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "amondo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.amondo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "amondo:jsGlobal:1",
				kind: "jsGlobal",
				property: "amondo.imprint",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "amondo:jsGlobal:2",
				kind: "jsGlobal",
				property: "amondo_init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "amped",
		name: "Amped",
		website: "https://www.amped.io",
		description: "Amped is a popup tool designed for growth, enabling email and SMS popups to capture leads and engage users.",
		icon: "Amped.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "amped:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.amped\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "amped:dom:1",
				kind: "dom",
				selector: "link[href*='app.amped.io']",
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
		id: "ampry",
		name: "Ampry",
		website: "https://www.ampry.com",
		description: "Ampry is a client acquisition marketing service designed to support law firms in expanding their reach and acquiring new clients.",
		icon: "Ampry.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ampry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ampry\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ampry:jsGlobal:1",
				kind: "jsGlobal",
				property: "ampry_acc_code",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ampry:jsGlobal:2",
				kind: "jsGlobal",
				property: "ampry_script",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "angler-ai",
		name: "Angler AI",
		website: "https://www.getangler.ai",
		description: "Angler AI is a platform that helps direct-to-consumer brands improve prospecting strategies and increase customer lifetime value through data-driven insights.",
		icon: "Angler.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "angler-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.getangler\\.ai"),
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
		id: "antsomi-cdp-365",
		name: "Antsomi CDP 365",
		website: "https://www.antsomi.com",
		description: "Antsomi CDP 365 is an AI-enabled customer data platform from Southeast Asia.",
		icon: "Antsomi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "antsomi-cdp-365:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdp\\.asia\\/"),
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
		id: "aptania",
		name: "Aptania",
		website: "https://www.aptania.com",
		description: "Aptania is an all-in-one customer data platform that provides web analytics, lead generation, and customer insights in a single system.",
		icon: "Aptania.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "aptania:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.aptania\\.com\\/"),
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
		id: "artplacer",
		name: "ArtPlacer",
		website: "https://www.artplacer.com",
		description: "ArtPlacer is a marketing tool designed to support growth in art businesses by enhancing visibility and promotional efforts.",
		icon: "Artplacer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "artplacer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("shop-app\\.artplacer\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "artplacer:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^artplacer_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "asapp",
		name: "Asapp",
		website: "https://www.asapp.com",
		description: "Asapp is a platform that guides agents in providing responses to queries using AI technology.",
		icon: "Asapp.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "asapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.asapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "asapp:jsGlobal:1",
				kind: "jsGlobal",
				property: "ASAPP.Host",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "atomseo",
		name: "Atomseo",
		website: "https://atomseo.com",
		description: "Atomseo is a tool designed to improve website performance by reducing user bounce rates and enhancing search engine visibility.",
		icon: "Atomseo.svg",
		categories: [
			"marketing-automation",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "atomseo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.atomseo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "atomseo:dom:1",
				kind: "dom",
				selector: "link[href*='.atomseo.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "attracta",
		name: "Attracta",
		website: "https://www.attracta.com",
		description: "Attracta is a platform offering SEO tools designed to optimize website visibility and improve search engine rankings.",
		icon: "Attracta.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "attracta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.attracta\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "attractroi",
		name: "AttractROI",
		website: "https://attractroi.com",
		description: "AttractROI is a service that provides tools and resources to help businesses convert potential customers into loyal clients.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "attractroi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.attractroi\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "audigent",
		name: "Audigent",
		website: "https://audigent.com",
		description: "Audigent is a first-party data platform that curates and activates audience data while providing identity solutions for targeting, measurement, and data interoperability.",
		icon: "Audigent.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "audigent:jsGlobal:0",
				kind: "jsGlobal",
				property: "audigentLogic",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "auto-hq",
		name: "Auto HQ",
		website: "https://www.autohq.co.uk",
		description: "Auto HQ is a provider of custom car dealer websites and SEO services designed to enhance visibility and attract customers.",
		icon: "AutoHQ.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "auto-hq:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.autohq\\.co\\.uk"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "autoketing",
		name: "Autoketing",
		website: "https://autoketing.com",
		description: "Autoketing is a marketing automation platform.",
		icon: "Autoketing.png",
		categories: [
			"marketing-automation",
		],
		rules: [],
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
		id: "automated-growth",
		name: "Automated Growth",
		website: "https://automatedgrowthagency.com",
		description: "Automated Growth is a platform offering AI and automation tools designed to streamline business operations.",
		icon: "AutomatedGrowth.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "automated-growth:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.automatedgrowthagency\\.com"),
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
		id: "automatewoo",
		name: "AutomateWoo",
		website: "https://automatewoo.com",
		description: "AutomateWoo is a marketing automation plugin for WooCommerce that enables online stores to create automated workflows for emails, follow-ups, and customer engagement.",
		icon: "AutomateWoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "automatewoo:dom:0",
				kind: "dom",
				selector: "link#automatewoo-birthdays-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "automatewoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "automatewoo_presubmit_params",
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
			"woocommerce",
		],
	},
	{
		id: "automatic-members",
		name: "Automatic Members",
		website: "https://automaticmembers.com",
		description: "Automic Members is an all-in-one marketing platform for fitness businesses.",
		icon: "AutomaticMembers.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "automatic-members:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app.automaticmembers.com"),
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
		id: "automaticsales",
		name: "AutomaticSales",
		website: "https://automaticsales.ai",
		description: "AutomaticSales is a platform that centralizes marketing tools, offering unlimited sales funnels, email, SMS, web chat, and additional features in one system.",
		icon: "AutomaticSales.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "automaticsales:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.automaticsales\\.ai"),
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
		id: "automizely",
		name: "Automizely",
		website: "https://www.automizely.com/marketing",
		description: "Automizely creates and manages enterprise-level marketing automation systems including contact and CRM mappings, lead funnels, email nurture, lead-generating pages, and blog posts, and website integrations.",
		icon: "Automizely.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "automizely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.automizely\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "automizely:jsGlobal:1",
				kind: "jsGlobal",
				property: "AM_CONSENT_SDK.product",
				valuePattern: new RegExp("automizely"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "automizely:jsGlobal:2",
				kind: "jsGlobal",
				property: "amStorefrontKit.hRequestEventTarget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "automizely:jsGlobal:3",
				kind: "jsGlobal",
				property: "automizelyConversions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "autopilot",
		name: "Autopilot",
		website: "https://www.autopilothq.com",
		description: "Autopilot is a visual marketing software that enables users to create marketing campaigns and manage lead conversions.",
		icon: "Autopilot.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
			"email-messaging",
		],
		rules: [
			{
				id: "autopilot:jsGlobal:0",
				kind: "jsGlobal",
				property: "Autopilot",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "autopilot:jsGlobal:1",
				kind: "jsGlobal",
				property: "AutopilotAnywhere",
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
		id: "avidai",
		name: "AvidAI",
		website: "https://www.getavid.ai",
		description: "AvidAI is a marketing platform that uses artificial intelligence to convert digital window-shoppers through automated campaigns, A/B testing, and personalized content optimization.",
		icon: "AvidAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "avidai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.getavid\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aweber",
		name: "Aweber",
		website: "https://www.aweber.com",
		description: "AWeber is an email marketing and automation platform for newsletters, forms, and campaigns.",
		icon: "Aweber.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "aweber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.aweber\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aweber:dom:1",
				kind: "dom",
				selector: "form[action*='aweber.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "aweber:jsGlobal:2",
				kind: "jsGlobal",
				property: "awt_analytics",
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
		id: "banana-splash",
		name: "Banana Splash",
		website: "https://www.banana-splash.com",
		description: "Banana Splash is a mobile lead generation system designed to help businesses attract and capture potential customer information.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "banana-splash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.banana-splash\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "banana-splash:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("my\\.banana-splash\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bandwango",
		name: "Bandwango",
		website: "https://www.bandwango.com",
		description: "Bandwango is a platform that boosts community revenue by promoting local businesses and attractions while tracking visitor interactions to support economic growth.",
		icon: "Bandwango.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bandwango:dom:0",
				kind: "dom",
				selector: "a[href*='www.bandwango.com'] > img[src*='app.bandwango.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "bant",
		name: "Bant",
		website: "https://bant.io",
		description: "Bant is a B2B lead generation platform that automates client prospecting and engagement to streamline business development processes.",
		icon: "Bant.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bant:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.bant\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "batch",
		name: "Batch",
		website: "https://batch.com",
		description: "Batch is a web-push notifications technology provider.",
		icon: "Batch.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "batch:jsGlobal:0",
				kind: "jsGlobal",
				property: "batchSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "batch:jsGlobal:1",
				kind: "jsGlobal",
				property: "batchSDKUIConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "batch:jsGlobal:2",
				kind: "jsGlobal",
				property: "reregisterBatchPushIfNeeded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bazaarvoice-curation",
		name: "Bazaarvoice Curation",
		website: "https://www.bazaarvoice.com/products/visual-and-social-content/",
		description: "Bazaarvoice Curation is a content curation service Bazaarvoice provides post it's acquisition of Curalate.",
		icon: "Bazaarvoice.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bazaarvoice-curation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("edge\\.curalate\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bazaarvoice-curation:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.curalate\\.com"),
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
		id: "beacons",
		name: "Beacons",
		website: "https://beacons.ai",
		description: "Beacons is an AI-powered creator platform that enables selling through a creator store, building an email marketing strategy, and securing brand deals in one place.",
		icon: "Beacons.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "beacons:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.beacons\\.ai"),
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
	},
	{
		id: "beam-impact",
		name: "Beam Impact",
		website: "https://www.beamimpact.com",
		description: "Beam Impact is a marketing platform that provides end-to-end solutions designed to support consumer-focused campaigns.",
		icon: "BeamImpact.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "beam-impact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.beamimpact\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beam-impact:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.beamimpact\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "beeketing",
		name: "Beeketing",
		website: "https://beeketing.com",
		description: "Beeketing is a suite of marketing apps for ecommerce shop owners.",
		icon: "Beeketing.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "beeketing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.beeketing\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "beeketing:jsGlobal:1",
				kind: "jsGlobal",
				property: "beeketingAnalyticsParams",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "beeketing:jsGlobal:2",
				kind: "jsGlobal",
				property: "beeketingSDKLoaded",
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
		id: "bench",
		name: "Bench",
		website: "https://benchmedia.com",
		description: "Bench is a provider of omnichannel programmatic media and performance marketing solutions.",
		icon: "Bench.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bench:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.benchplatform\\.com\\/"),
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
		id: "bento",
		name: "Bento",
		website: "https://bentonow.com",
		description: "Bento is an email marketing and automation platform designed for startups.",
		icon: "Bento.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "bento:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bentonow\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bento:jsGlobal:1",
				kind: "jsGlobal",
				property: "bento.identify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bento:jsGlobal:2",
				kind: "jsGlobal",
				property: "bento_wordpress_sdk_params",
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
		id: "birdeye",
		name: "Birdeye",
		website: "https://birdeye.com",
		description: "Birdeye is a customer experience platform for reviews, messaging, surveys, and listings.",
		icon: "Birdeye.svg",
		categories: [
			"marketing-automation",
			"widgets-misc",
		],
		rules: [
			{
				id: "birdeye:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("birdeye\\.com\\/embed"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "birdeye:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("birdeye\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "birdeye:jsGlobal:2",
				kind: "jsGlobal",
				property: "bfiframe",
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
		id: "black-crow",
		name: "Black Crow",
		website: "https://www.blackcrow.ai",
		description: "Blackcrow is a platform that analyzes data to improve conversion funnels using AI-driven insights and automated actions.",
		icon: "BlackCrow.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "black-crow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blackcrow\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "black-crow:jsGlobal:1",
				kind: "jsGlobal",
				property: "blackcrow.BUILD_NUMBER",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "black-crow:jsGlobal:2",
				kind: "jsGlobal",
				property: "blackcrowpreconnected",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blendee",
		name: "Blendee",
		website: "https://www.blendee.com",
		description: "Blendee is a marketing automation platform that streamlines campaign management and performance tracking across digital channels.",
		icon: "Blendee.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "blendee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.blendee\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bloghunch",
		name: "BlogHunch",
		website: "https://bloghunch.com",
		description: "BlogHunch is a content optimization platform that uses data-driven insights to help produce search-optimized articles designed to improve rankings and conversion performance with minimal manual effort.",
		icon: "BlogHunch.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bloghunch:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.bloghunch\\.test\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bloghunch:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^BlogHunch$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "bloghunch:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^bloghunch$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blotout-edgetag",
		name: "Blotout EdgeTag",
		website: "https://blotout.io",
		description: "Blotout EdgeTag is a technology provided by Blotout that tackles the effects of privacy changes on C-API signals by reconstructing signals around a lifetime ID, allowing for real-time remarketing of site visits.",
		icon: "Blotout.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "blotout-edgetag:jsGlobal:0",
				kind: "jsGlobal",
				property: "edgetag",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blotout-edgetag:jsGlobal:1",
				kind: "jsGlobal",
				property: "edgetagProviders",
				description: "Page-owned global matches a known technology marker.",
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
		id: "blue-corona",
		name: "Blue Corona",
		website: "https://www.bluecorona.com",
		description: "Blue Corona is a provider of digital strategies and marketing systems designed to support the promotion and management of commercial services.",
		icon: "BlueCorona.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "blue-corona:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("reports\\.bluecorona\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blueconic",
		name: "BlueConic",
		website: "https://www.blueconic.com",
		description: "BlueConic is the advanced customer data platform that liberates companies' first-party data from disparate systems.",
		icon: "BlueConic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "blueconic:jsGlobal:0",
				kind: "jsGlobal",
				property: "BlueConicEngagement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blueconic:jsGlobal:1",
				kind: "jsGlobal",
				property: "blueConicClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blueconic:jsGlobal:2",
				kind: "jsGlobal",
				property: "blueConicPreListeners",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blueconic:jsGlobal:3",
				kind: "jsGlobal",
				property: "loadValuesFromBlueConic",
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
		id: "bluecore",
		name: "Bluecore",
		website: "https://www.bluecore.com",
		description: "Bluecore is a retail marketing technology that uses data gained from direct marketing like email, social media, site activity.",
		icon: "Bluecore.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "bluecore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bluecore\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bluecore:jsGlobal:1",
				kind: "jsGlobal",
				property: "_bluecoreTrack",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bluecore:jsGlobal:2",
				kind: "jsGlobal",
				property: "bluecore_action_trigger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bluecore:jsGlobal:3",
				kind: "jsGlobal",
				property: "triggermail",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bluecore:jsGlobal:4",
				kind: "jsGlobal",
				property: "triggermail_email_address",
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
		id: "boberdoo",
		name: "Boberdoo",
		website: "https://www.boberdoo.com",
		description: "Boberdoo is a performance marketing software platform that connects buyers and sellers in real time, enabling scalable lead distribution and transaction management.",
		icon: "Boberdoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "boberdoo:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.boberdoo.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "boei",
		name: "Boei",
		website: "https://boei.help",
		description: "Boei is a platform that uses AI to capture leads and engage website visitors.",
		icon: "Boei.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "boei:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.boei\\.help"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "boei:jsGlobal:1",
				kind: "jsGlobal",
				property: "Boei",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boei:jsGlobal:2",
				kind: "jsGlobal",
				property: "BoeiWidget",
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
		id: "boomtime",
		name: "boomtime",
		website: "https://www.boomtime.com",
		description: "boomtime is a full-service digital marketing platform.",
		icon: "boomtime.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "boomtime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boomtime\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "boomtime:dom:1",
				kind: "dom",
				selector: "form[action*='.boomtime.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bothive",
		name: "Bothive",
		website: "https://bothive.be",
		description: "Bothive is a platform that automates repetitive tasks, enhances collaboration, reduces email reliance, and improves customer relationships by prioritizing meaningful interactions.",
		icon: "Bothive.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bothive:jsGlobal:0",
				kind: "jsGlobal",
				property: "Bothive.widget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bownow",
		name: "BowNow",
		website: "https://bow-now.jp",
		description: "BowNow is a marketing automation tool with business card management, sales support, analysis, and email magazine functions.",
		icon: "BowNow.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bownow:jsGlobal:0",
				kind: "jsGlobal",
				property: "_bownow_ts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bownow:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^bownow_act$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "bownow:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^bownow_aid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "bownow:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^bownow_cid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "bownow:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^bownow_mbid$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "brafton",
		name: "Brafton",
		website: "https://www.brafton.com",
		description: "Brafton is a creative content marketing platform that provides services for content strategy, creation, and distribution to help organizations engage audiences and support digital marketing efforts.",
		icon: "Brafton.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brafton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brafton\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "brainlead",
		name: "Brainlead",
		website: "https://brainlead.it",
		description: "Brainlead is a marketing automation software.",
		icon: "Brainlead.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brainlead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.brainlead\\.it"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "branch",
		name: "Branch",
		website: "https://branch.io",
		description: "Branch is a mobile deep linking system to increase engagement and retention.",
		icon: "Branch.png",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "branch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.branch\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "branch:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.link\\/_r\\?sdk=web([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "branch:jsGlobal:2",
				kind: "jsGlobal",
				property: "branch.setBranchViewData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "branch:jsGlobal:3",
				kind: "jsGlobal",
				property: "branch_callback__0",
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
		id: "brandbuilderai",
		name: "BrandBuilderAI",
		website: "https://brandbuilderai.com",
		description: "BrandBuilderAI is an all-in-one system designed to automate marketing and lead generation processes.",
		icon: "BrandBuilderAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brandbuilderai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.brandbuilderai\\.com"),
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
		id: "brandnamic",
		name: "Brandnamic",
		website: "https://www.brandnamic.com",
		description: "Brandnamic is a hospitality platform that provides software, marketing, and consulting services for managing operations, customer engagement, and digital presence.",
		icon: "Brandnamic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brandnamic:jsGlobal:0",
				kind: "jsGlobal",
				property: "brandnamic.constants",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brandnamic:meta:1",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^Brandnamic GmbH", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "brandrep",
		name: "BrandRep",
		website: "https://www.brandrep.com",
		description: "BrandRep is a local internet marketing solution that supports website online presence, search visibility, and customer engagement across digital channels.",
		icon: "BrandRep.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brandrep:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.brandrep\\.com\\/"),
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
		id: "braze",
		name: "Braze",
		website: "https://www.braze.com",
		description: "Braze is a customer engagement platform that delivers messaging experiences across push, email, in-product, and more.",
		icon: "Braze.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "braze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.appboycdn\\.com\\/web-sdk\\/([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "braze:jsGlobal:1",
				kind: "jsGlobal",
				property: "appboy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "braze:jsGlobal:2",
				kind: "jsGlobal",
				property: "appboyQueue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "braze:jsGlobal:3",
				kind: "jsGlobal",
				property: "braze.BrazeSdkMetadata",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "braze:jsGlobal:4",
				kind: "jsGlobal",
				property: "brazeQueue",
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
		id: "bread-and-butter",
		name: "Bread & Butter",
		website: "https://breadbutter.io",
		description: "Bread & Butter is a platform that offers a first-party data CDP for lead generation.",
		icon: "BreadButter.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "bread-and-butter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.breadbutter\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bread-and-butter:jsGlobal:1",
				kind: "jsGlobal",
				property: "BreadButter.breadbutter",
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
		id: "brightedge",
		name: "BrightEdge",
		website: "https://www.brightedge.com",
		description: "BrightEdge is an SEO solution and content performance marketing platform.",
		icon: "BrightEdge.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brightedge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brightedge\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "brightedge:jsGlobal:1",
				kind: "jsGlobal",
				property: "BEJSSDK.CLIENT_VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brightedge:jsGlobal:2",
				kind: "jsGlobal",
				property: "_bright3.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brightedge:jsGlobal:3",
				kind: "jsGlobal",
				property: "be_sdk_options",
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
		id: "brightinfo",
		name: "BrightInfo",
		website: "https://www.brightinfo.com",
		description: "BrightInfo is an automated content personalisation solution.",
		icon: "BrightInfo.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "brightinfo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.brightinfo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "brightinfo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_BI_",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brightinfo:jsGlobal:2",
				kind: "jsGlobal",
				property: "_biq",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "brightinfo:jsGlobal:3",
				kind: "jsGlobal",
				property: "biJsUrl",
				valuePattern: new RegExp("\\/\\/app\\.brightinfo\\.com"),
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
		id: "brightlocal",
		name: "BrightLocal",
		website: "https://www.brightlocal.com",
		description: "BrightLocal is an all-in-one local SEO dashboard for websites.",
		icon: "BrightLocal.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "brightlocal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brightlocal\\.com\\/"),
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
		id: "bronto",
		name: "Bronto",
		website: "https://bronto.com",
		description: "Bronto is a cloud-based email marketing automation software.",
		icon: "Bronto.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "bronto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:snip|cdn)\\.bronto\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bronto:jsGlobal:1",
				kind: "jsGlobal",
				property: "BrontoShopify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bronto:jsGlobal:2",
				kind: "jsGlobal",
				property: "bronto.versions.sca",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bronto:jsGlobal:3",
				kind: "jsGlobal",
				property: "brontoCookieConsent",
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
		id: "btolead",
		name: "BTOLEAD",
		website: "https://btolead.it",
		description: "BTOLEAD is B2B lead generation software that enables businesses to identify and connect with potential customers.",
		icon: "BTOLEAD.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "btolead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("track\\.btolead\\.it"),
				description: "Script content contains a bounded technology signature.",
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
		id: "buildout",
		name: "Buildout",
		website: "https://www.buildout.com",
		description: "Buildout is a marketing platform focused on commercial real estate listings, analytics, and promotional workflows for brokers, landlords, and property teams.",
		icon: "Buildout.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "buildout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/buildout\\.com\\/api\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buildout:jsGlobal:1",
				kind: "jsGlobal",
				property: "BuildOut.embed",
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
		id: "buyapowa",
		name: "Buyapowa",
		website: "https://www.buyapowa.com",
		description: "Buyapowa is a scalable referral marketing and advocacy platform designed for all industries.",
		icon: "Buyapowa.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "buyapowa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.co-buying\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buyapowa:jsGlobal:1",
				kind: "jsGlobal",
				property: "Buyapowa.CanaryCheck",
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
		id: "buzzbuilder",
		name: "BuzzBuilder",
		website: "https://buzzbuilderpro.com",
		description: "BuzzBuilder is an automated sales platform that generates qualified leads through email campaigns, LinkedIn engagement, and follow-up calls.",
		icon: "BuzzBuilder.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "buzzbuilder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.buzzbuilderpro\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buzzbuilder:jsGlobal:1",
				kind: "jsGlobal",
				property: "buzzbuilder",
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
		id: "byside",
		name: "BySide",
		website: "https://byside.com",
		description: "BySide is a personalisation and marketing automation platform.",
		icon: "BySide.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "byside:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webcare\\.byside\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "byside:jsGlobal:1",
				kind: "jsGlobal",
				property: "BySide",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "byside:jsGlobal:2",
				kind: "jsGlobal",
				property: "bysideWebcare_banner",
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
		id: "campaign-monitor",
		name: "Campaign Monitor",
		website: "https://www.campaignmonitor.com",
		description: "Campaign Monitor is a global technology company that provides an email marketing platform.",
		icon: "Campaign Monitor.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "campaign-monitor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.createsend1\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "campaign-monitor:dom:1",
				kind: "dom",
				selector: "input[value='campaignmonitor_subscribe_form'][name='form_id'], form[action*='createsend'][class='js-cm-form']",
				description: "DOM selector matches a known technology marker.",
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
		id: "cartkit",
		name: "CartKit",
		website: "https://www.cartkit.com",
		description: "CartKit build apps from fuss-free multi-channel marketing automation and campaigns to social proof popups and user session recording.",
		icon: "CartKit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cartkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cartkitcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "carts-guru",
		name: "Carts Guru",
		website: "https://www.carts.guru",
		description: "Carts Guru is the all-in-one marketing automation tool for ecommerce stores.",
		icon: "Carts Guru.png",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "carts-guru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cartsguru\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
			],
		},
	},
	{
		id: "casasoft",
		name: "CasaSoft",
		website: "https://casasoft.ch",
		description: "CasaSoft is a provider of digital solutions tailored for real estate marketing needs.",
		icon: "CasaSoft.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "casasoft:dom:0",
				kind: "dom",
				selector: "link[href*='.casasoft.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "casasoft:jsGlobal:1",
				kind: "jsGlobal",
				property: "casawpOptionParams",
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
		id: "catylist",
		name: "Catylist",
		website: "https://cre.moodysanalytics.com/products/catylist",
		description: "Catylist is an all-in-one platform for commercial real estate brokers, offering CRE data, reporting and marketing tools, and property listings.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "catylist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.catylist\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "causalfunnel",
		name: "CausalFunnel",
		website: "https://www.causalfunnel.com",
		description: "CausalFunnel is an AI platform that analyzes customer behavior to optimize business conversion rates.",
		icon: "CuasalFunnel.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "causalfunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.scripts\\.causalfunnel\\.com"),
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
		id: "ceros",
		name: "Ceros",
		website: "https://www.ceros.com",
		description: "Ceros is an interactive, no-code content creation platform designed for marketers and designers to develop engaging digital experiences.",
		icon: "Ceros.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ceros:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ceros\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ceros:jsGlobal:1",
				kind: "jsGlobal",
				property: "CerosMath",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ceros:jsGlobal:2",
				kind: "jsGlobal",
				property: "CerosSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ceros:jsGlobal:3",
				kind: "jsGlobal",
				property: "cerosContext",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "certishopping",
		name: "Certishopping",
		website: "https://www.certishopping.com",
		description: "Certishopping is an all-in-one marketing platform designed to accelerate business growth through integrated tools and automation.",
		icon: "Certishopping.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "certishopping:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.certishopping\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "certishopping:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("business\\.certishopping\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "certishopping:header:2",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("business\\.certishopping\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "cevoid",
		name: "Cevoid",
		website: "https://cevoid.com",
		description: "Cevoid is an all-in-one user-generated content (UGC) platform designed for e-commerce brands.",
		icon: "Cevoid.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cevoid:jsGlobal:0",
				kind: "jsGlobal",
				property: "cevoid.galleries",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cevoid:jsGlobal:1",
				kind: "jsGlobal",
				property: "cevoid_gallery.load",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cevoid:jsGlobal:2",
				kind: "jsGlobal",
				property: "cevoid_state.setSessionCookie",
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
		id: "chiirp",
		name: "CHIIRP",
		website: "https://chiirp.com",
		description: "CHIIRP is an AI-powered lead conversion tool for trade businesses that captures and manages calls and inquiries to support timely follow-up and improved lead conversion.",
		icon: "CHIIRP.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "chiirp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.chiirp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "chimpify",
		name: "Chimpify",
		website: "https://www.chimpify.de",
		description: "Chimpify is an inbound marketing platform that consolidates content management, lead generation, and campaign tracking to support data-driven audience engagement.",
		icon: "Chimpify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "chimpify:jsGlobal:0",
				kind: "jsGlobal",
				property: "Chimpify.content_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chimpify:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Chimpify$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "chimpify:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^chimpify$", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "churnzero",
		name: "ChurnZero",
		website: "https://churnzero.net",
		description: "ChurnZero is a real-time customer success platform that helps subscription businesses fight customer churn.",
		icon: "ChurnZero.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "churnzero:jsGlobal:0",
				kind: "jsGlobal",
				property: "ChurnZero",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "churnzero:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChurnZero.version",
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
		id: "cinc",
		name: "CINC",
		website: "https://www.cincpro.com",
		description: "CINC is a lead acquisition and conversion platform for teams and top real estate agents.",
		icon: "CINC.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "cinc:jsGlobal:0",
				kind: "jsGlobal",
				property: "CINC.AjaxApi",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "clarivoy",
		name: "Clarivoy",
		website: "https://www.clarivoy.com",
		description: "Clarivoy is an automotive marketing campaign tool.",
		icon: "Clarivoy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "clarivoy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clarivoy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "claspo",
		name: "Claspo",
		website: "https://claspo.io",
		description: "Claspo is a pop-up builder designed to generate and capture leads, increase sales, and grow subscriber lists.",
		icon: "Claspo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "claspo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.claspo\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "claspo:jsGlobal:1",
				kind: "jsGlobal",
				property: "claspo",
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
		id: "clearlink",
		name: "Clearlink",
		website: "https://www.clearlink.com",
		description: "Clearlink connects brands with customers who are likely to convert and provides information on partnerships and career opportunities.",
		icon: "Clearlink.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "clearlink:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "clearlink:jsGlobal:1",
				kind: "jsGlobal",
				property: "mapiBaseUrl",
				valuePattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clearlink:jsGlobal:2",
				kind: "jsGlobal",
				property: "mapiLeadEndpoint",
				valuePattern: new RegExp("mapi\\.clearlink\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cleverdata",
		name: "CleverData",
		website: "https://cleverdata.ru",
		description: "CleverData is a CDP platform that manages customer data and enables personalized user experiences through robust data processing capabilities.",
		icon: "CleverData.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cleverdata:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cdp\\.cleverdata\\.ru"),
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
		id: "clevertap",
		name: "CleverTap",
		website: "https://clevertap.com",
		description: "CleverTap is a SaaS based customer lifecycle management and mobile marketing company headquartered in Mountain View, California.",
		icon: "CleverTap.png",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "clevertap:jsGlobal:0",
				kind: "jsGlobal",
				property: "clevertap",
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
		id: "clickdimensions",
		name: "ClickDimensions",
		website: "https://clickdimensions.com",
		description: "ClickDimensions is a SaaS marketing automation platform built on the Microsoft Windows Azure platform.",
		icon: "ClickDimensions.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "clickdimensions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.clickdimensions\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clickdimensions:jsGlobal:1",
				kind: "jsGlobal",
				property: "clickdimensions",
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
		id: "clickfunnels",
		name: "ClickFunnels",
		website: "https://www.clickfunnels.com",
		description: "ClickFunnels is an online sales funnel builder that helps businesses market, sell, and deliver their products online.",
		icon: "ClickFunnels.svg",
		categories: [
			"marketing-automation",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "clickfunnels:jsGlobal:0",
				kind: "jsGlobal",
				property: "CFAppDomain",
				valuePattern: new RegExp("app\\.clickfunnels\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickfunnels:jsGlobal:1",
				kind: "jsGlobal",
				property: "CFSurveyParticipantID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickfunnels:jsGlobal:2",
				kind: "jsGlobal",
				property: "ClickFunnels",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickfunnels:jsGlobal:3",
				kind: "jsGlobal",
				property: "cfAddPolyfill",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickfunnels:meta:4",
				kind: "meta",
				key: "cf:app_domain:",
				valuePattern: new RegExp("app\\.clickfunnels\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "clientify",
		name: "Clientify",
		website: "https://clientify.com",
		description: "Clientify is a marketing and sales automation platform designed to help businesses grow.",
		icon: "Clientify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "clientify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.clientify\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clientify:jsGlobal:1",
				kind: "jsGlobal",
				property: "trackerUrl",
				valuePattern: new RegExp("analytics\\.clientify\\.net"),
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
		id: "clikdata",
		name: "CLIKdata",
		website: "https://clikdata.com",
		description: "CLIKdata is a provider of digital marketing and data services that support business growth by enhancing engagement and lead generation.",
		icon: "CLIKdata.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "clikdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.clikdata\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "closing-boost",
		name: "Closing Boost",
		website: "https://closingboost.com",
		description: "Closing Boost is a sales pipeline management and marketing automation platform designed to capture leads and nurture prospects.",
		icon: "ClosingBoost.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "closing-boost:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.closingboost\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cloudsponge",
		name: "CloudSponge",
		website: "https://www.cloudsponge.com",
		description: "CloudSponge is a software-as-a-service tool for importing contacts from address book providers like Gmail, Yahoo Mail, Outlook.com, iCloud and AOL.",
		icon: "CloudSponge.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cloudsponge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudsponge\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cloudsponge:jsGlobal:1",
				kind: "jsGlobal",
				property: "cloudsponge.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cloudsponge:jsGlobal:2",
				kind: "jsGlobal",
				property: "cloudspongeProxy",
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
		id: "cnvert",
		name: "Cnvert",
		website: "https://cnvert.com",
		description: "Cnvert is a self-hosted lead and marketing automation system, formerly known as Sonician.",
		icon: "Cnvert.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cnvert:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Sonician AB$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cnvert:meta:1",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^Sonician AB$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cnvert:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^sonician ab$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cnvert:meta:3",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("^sonician ab$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "coco-ai",
		name: "CoCo AI",
		website: "https://my-coco.ai",
		description: "CoCo AI is a WhatsApp marketing assistant that uses artificial intelligence to automate campaigns, manage customer interactions, and improve engagement.",
		icon: "CoCoAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "coco-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dashboard\\.my-coco\\.ai\\/"),
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
	},
	{
		id: "cocon",
		name: "COCON",
		website: "https://www.cocon.app",
		description: "COCON is an email marketing strategy designed to enhance the performance of a Shopify store.",
		icon: "COCON.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cocon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cocon\\.app"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "conduze",
		name: "Conduze",
		website: "https://www.conduze.com",
		description: "Conduze is a call tracking and pop-up solution designed to help businesses capture and analyze inbound leads.",
		icon: "Conduze.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "conduze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conduze\\.com"),
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
		id: "connectally",
		name: "Connectally",
		website: "https://connectally.com",
		description: "Connectally is a lead generation and automation platform designed to help marketing professionals streamline client acquisition.",
		icon: "Connectally.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "connectally:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.connectally\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "conneqto",
		name: "Conneqto",
		website: "https://conneqto.ai",
		description: "Conneqto is an all-in-one platform offering email, automation, high-converting carts, and sales pipeline tools for streamlined marketing and sales management.",
		icon: "Conneqto.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "conneqto:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.conneqto\\.ai"),
				description: "Script content contains a bounded technology signature.",
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
		id: "connexity",
		name: "Connexity",
		website: "https://www.connexity.com",
		description: "Connexity is a platform that focuses on audience targeting, data management, optimization, attribution, and insight generation for enhanced marketing strategies.",
		icon: "Connexity.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "connexity:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connexity\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "constant-contact",
		name: "Constant Contact",
		website: "https://www.constantcontact.com",
		description: "Constant Contact is a marketing automation and email marketing solution.",
		icon: "Constant Contact.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "constant-contact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ctctcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "constant-contact:dom:1",
				kind: "dom",
				selector: "a[href*='.constantcontact.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "constant-contact:jsGlobal:2",
				kind: "jsGlobal",
				property: "_ctct_m",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "constant-contact:jsGlobal:3",
				kind: "jsGlobal",
				property: "ctctOnLoadCallback",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "constant-contact:dom:4",
				kind: "dom",
				selector: "a[href*='.constantcontact.com/'][target='_blank'], form[action*='.constantcontact.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		id: "contactus",
		name: "ContactUs",
		website: "https://contactus.com",
		description: "ContactUs is a custom ecommerce development and online marketing platform offering customer acquisition and prospect management solutions.",
		icon: "ContactUs.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contactus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.contactus\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "contentbot",
		name: "ContentBot",
		website: "https://contentbot.ai",
		description: "ContentBot is an AI-driven platform for creating custom content workflows, processing imports, and generating blog posts with an AI blog writer.",
		icon: "ContentBot.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contentbot:jsGlobal:0",
				kind: "jsGlobal",
				property: "bleeper_api_key",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "contentbot:jsGlobal:1",
				kind: "jsGlobal",
				property: "bleeper_user_ip_address",
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
		id: "contentgems",
		name: "ContentGems",
		website: "https://contentgems.com",
		description: "ContentGems is a no-code content discovery tool designed to help users find and curate relevant content.",
		icon: "ContentGems.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contentgems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.contentgems\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "contentgems:jsGlobal:1",
				kind: "jsGlobal",
				property: "ContentGems",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "contentgems:jsGlobal:2",
				kind: "jsGlobal",
				property: "ContentGemsVersion",
				valuePattern: new RegExp("(.+)"),
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "contently",
		name: "Contently",
		website: "https://contently.com",
		description: "Contently is a SaaS content marketing platform from the company of the same name headquartered in New York.",
		icon: "Contently.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contently:jsGlobal:0",
				kind: "jsGlobal",
				property: "_contently.siteId",
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
		id: "contents",
		name: "Contents",
		website: "https://www.contents.com",
		description: "Contents is a generative AI platform that enables businesses to produce high-performing, original, and SEO-optimized content.",
		icon: "Contents.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contents:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.contents\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "contentstudio",
		name: "ContentStudio",
		website: "https://contentstudio.io",
		description: "ContentStudio is an integrated cloud-based social media management and content marketing solution.",
		icon: "ContentStudio.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contentstudio:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/contentstudio']",
				description: "DOM selector matches a known technology marker.",
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
		id: "contextbar",
		name: "ContextBar",
		website: "https://contextbar.ru",
		description: "ContextBar is a tool designed to attract consistent, thematically relevant visitors to a website.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contextbar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.contextbar\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
			],
		},
	},
	{
		id: "contribly",
		name: "Contribly",
		website: "https://www.contribly.com",
		description: "Contribly is a user-generated content (UGC) dashboard for journalists that streamlines the management of community submissions, supporting workflows from content intake through publication.",
		icon: "Contribly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "contribly:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.amazonaws\\.com\\/contribly-widgets\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "contribly:jsGlobal:1",
				kind: "jsGlobal",
				property: "$contriblyjQuery",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "contribly:jsGlobal:2",
				kind: "jsGlobal",
				property: "contriblyApi",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "convead",
		name: "Convead",
		website: "https://convead.io",
		description: "Convead is a CRM marketing platform for ecommerce stores that helps collect data, segment customers, and automate marketing efforts.",
		icon: "Convead.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "convead:jsGlobal:0",
				kind: "jsGlobal",
				property: "ConveadSettings.app_key",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "convead:jsGlobal:1",
				kind: "jsGlobal",
				property: "convead",
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
		id: "converge",
		name: "Converge",
		website: "https://www.runconverge.com",
		description: "Converge is an all-in-one marketing measurement platform that consolidates performance data to provide insights across multiple channels.",
		icon: "Converge.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "converge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.runconverge\\.com"),
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
		id: "convertcart",
		name: "Convertcart",
		website: "https://www.convertcart.com/",
		description: "ConvertCart helps online businesses deliver outstanding experiences to customers throughout their journey.",
		icon: "Convertcart.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "convertcart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertcart\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "convertful",
		name: "Convertful",
		website: "https://convertful.com",
		description: "Convertful is a tool that automates conversions by turning website traffic into leads and sales in real time.",
		icon: "Convertful.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "convertful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.convertful\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convertful:jsGlobal:1",
				kind: "jsGlobal",
				property: "Convertful.$containers",
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
		id: "convertkit",
		name: "ConvertKit",
		website: "https://convertkit.com",
		description: "ConvertKit is an email marketing tool built for content creators.",
		icon: "ConvertKit.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "convertkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.convertkit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convertkit:dom:1",
				kind: "dom",
				selector: "form[action*='.convertkit.com'], link[href*='.convertkit.com']",
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
		id: "convincely",
		name: "Convincely",
		website: "https://www.convincely.com",
		description: "Convincely is a platform designed to rapidly launch and optimize personalized sales funnels for businesses.",
		icon: "Convincely.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "convincely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.convincely\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convincely:jsGlobal:1",
				kind: "jsGlobal",
				property: "convincely3.analyticsService",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "convious",
		name: "Convious",
		website: "https://www.convious.com",
		description: "Convious is an attraction management platform supporting operations before, during, and after visits, including exit-intent functionality.",
		icon: "Convious.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "convious:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.convious-app\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convious:jsGlobal:1",
				kind: "jsGlobal",
				property: "conviousLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "convious:jsGlobal:2",
				kind: "jsGlobal",
				property: "convious_resource_path",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cool-popup",
		name: "Cool Popup",
		website: "https://www.coolpopup.com",
		description: "Cool Popup is a tool that helps convert website visitors into customers, subscribers, or leads by displaying visually designed popups that require no coding to set up.",
		icon: "CoolPopup.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cool-popup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dash\\.coolpopup\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cooladata",
		name: "Cooladata",
		website: "https://www.cooladata.com",
		description: "Cooladata is a data warehouse and behavioral analytics platform designed for gaming, elearning, ecommerce, SaaS, and media companies.",
		icon: "Cooladata.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cooladata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cooladata\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cooladata:jsGlobal:1",
				kind: "jsGlobal",
				property: "cooladata",
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
		id: "coopt",
		name: "Coopt",
		website: "https://www.getcoopt.com",
		description: "Coopt is a tool designed to boost sales by transforming customers into social media advertisers, leveraging their networks to promote products and services, thus enhancing brand visibility and engagement.",
		icon: "Coopt.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "coopt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getcoopt\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "coopt:jsGlobal:1",
				kind: "jsGlobal",
				property: "cooptjQuery.Animation",
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
		requires: [
			"jquery",
		],
	},
	{
		id: "copernica",
		name: "Copernica",
		website: "https://www.copernica.com",
		description: "Copernica is a platform for managing email campaigns and automating customer communication using structured data and rule-based workflows.",
		icon: "Copernica.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "copernica:dom:0",
				kind: "dom",
				selector: "form[action*='publisher.copernica.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "copilot-ai",
		name: "Copilot AI",
		website: "https://www.copilotai.com",
		description: "CoPilot AI is a LinkedIn automation software designed to identify and generate leads.",
		icon: "CopilotAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "copilot-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.copilotadvisor\\.com"),
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
		id: "covet-pics",
		name: "Covet.pics",
		website: "https://covet.pics",
		description: "Covet.pics is a customizable Shopify app for Instagram and Lookbook shoppable galleries.",
		icon: "Covet.pics.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "covet-pics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.covet\\.pics\\/"),
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
		id: "cpex",
		name: "CPEx",
		website: "https://www.cpex.cz",
		description: "CPEx is a publisher exchange system facilitating content distribution and collaboration among publishers.",
		icon: "CPEx.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cpex:jsGlobal:0",
				kind: "jsGlobal",
				property: "cpexAddCMPCloseButton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cpex:jsGlobal:1",
				kind: "jsGlobal",
				property: "cpexCmpVersion",
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
		id: "creaitor",
		name: "Creaitor",
		website: "https://www.creaitor.ai",
		description: "Creaitor is an AI-driven platform that offers tools for content creation and SEO optimization to help content producers enhance their online presence.",
		icon: "Creaitor.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "creaitor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.creaitor\\.ai\\/"),
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
		id: "create-demand",
		name: "Create Demand",
		website: "https://createdemand.ai",
		description: "Create Demand is an all-in-one sales and marketing platform designed to support business owners in managing and growing their sales and marketing operations.",
		icon: "CreateDemand.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "create-demand:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.createdemand\\.ai"),
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
		id: "crm-done-better",
		name: "CRM Done Better",
		website: "https://crmdonebetter.com",
		description: "CRM Done Better is a marketing automation software that streamlines campaign management, customer segmentation, and lead nurturing to improve efficiency and data-driven decision making.",
		icon: "CRMDoneBetter.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "crm-done-better:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.crmdonebetter\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
	},
	{
		id: "ctrwow",
		name: "CTRWOW",
		website: "https://www.wowsuite.ai/ctrwow.html",
		description: "CTRWOW is a system designed for building template funnels, offering tools for streamlining the creation and management of marketing funnels.",
		icon: "CTRWow.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ctrwow:jsGlobal:0",
				kind: "jsGlobal",
				property: "CTR_IMG_LAZY_LOADER",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ctrwow:jsGlobal:1",
				kind: "jsGlobal",
				property: "_CTR_CUSTOM_DATA",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ctrwow:jsGlobal:2",
				kind: "jsGlobal",
				property: "_CTR_FINGERPRINTJS_TOKEN",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ctrwow:jsGlobal:3",
				kind: "jsGlobal",
				property: "__CTRWOW_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ctrwow:jsGlobal:4",
				kind: "jsGlobal",
				property: "ctrwowUtils",
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
		id: "curated",
		name: "Curated",
		website: "https://www.curated.co",
		description: "Curated is a platform that helps organize engaging content and support ongoing customer relationship development through consistent and relevant interactions.",
		icon: "Curated.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "curated:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("push\\.curated\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "curated:jsGlobal:1",
				kind: "jsGlobal",
				property: "CURATED.fCTA",
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
		id: "curaytor",
		name: "Curaytor",
		website: "https://www.curaytor.com",
		description: "Curaytor is a digital marketing platform that provides online strategy, advertising, and lead generation solutions for businesses seeking to enhance their digital presence.",
		icon: "Curaytor.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "curaytor:dom:0",
				kind: "dom",
				selector: "link[href*='.curaytor.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "curaytor:header:1",
				kind: "header",
				key: "X-Served-By",
				valuePattern: new RegExp("\\.curaytor\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "curaytor:header:2",
				kind: "header",
				key: "x-served-by",
				valuePattern: new RegExp("\\.curaytor\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "custobar",
		name: "Custobar",
		website: "https://www.custobar.com",
		description: "Custobar is a customer data platform that enables personalized marketing by leveraging data to tailor campaigns and communications.",
		icon: "Custobar.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "custobar:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("script\\.custobar\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "custobar:jsGlobal:1",
				kind: "jsGlobal",
				property: "custobar.config",
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
		id: "customer-stories",
		name: "Customer Stories",
		website: "https://customerstories.net",
		description: "Customer Stories is a customer marketing automation platform designed to support modern marketing and sales teams in streamlining engagement and outreach efforts.",
		icon: "CustomerStories.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "customer-stories:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.customerstories\\.net\\/"),
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
		id: "customer-io",
		name: "Customer.io",
		website: "https://customer.io/",
		description: "Customer.io is a messaging automation platform for email, SMS, push, and in-app messages.",
		icon: "Customer.io.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "customer-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.customer\\.io"),
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
		id: "cxdp",
		name: "CXDP",
		website: "https://cxdp.ru",
		description: "CXDP is a platform that enables businesses to create, manage, and deliver personalized marketing communications across multiple channels based on customer data and engagement insights.",
		icon: "CXDP.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "cxdp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.cxdp\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"recurring",
			],
		},
	},
	{
		id: "d-engage",
		name: "D.Engage",
		website: "https://dengage.com",
		description: "D. Engage is a platform that enhances customer experiences by leveraging data-driven marketing automation to deliver targeted and efficient campaigns.",
		icon: "Dengage.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "d-engage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pcdn\\.dengage\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "d-engage:jsGlobal:1",
				kind: "jsGlobal",
				property: "_dengageConf",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "d-engage:jsGlobal:2",
				kind: "jsGlobal",
				property: "dengage.q",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dakno",
		name: "Dakno",
		website: "https://www.dakno.com",
		description: "Dakno is an all-in-one lead generation and conversion system designed for the real estate industry.",
		icon: "Dakno.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "dakno:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.dakno.com/'], div[class*='dakno'] a[href*='www.dakno.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dashly",
		name: "Dashly",
		website: "https://www.dashly.io",
		description: "Dashly is a conversational marketing platform designed to increase quality lead encounters and reduce customer acquisition costs.",
		icon: "Dashly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "dashly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.dashly\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dashly:jsGlobal:1",
				kind: "jsGlobal",
				property: "dashly",
				description: "Page-owned global matches a known technology marker.",
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
		id: "data-nugget",
		name: "data nugget",
		website: "https://datanugget.io",
		description: "data nugget is a brand growth platform designed to help businesses analyze performance, identify opportunities, and manage strategies.",
		icon: "DataNugget.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "data-nugget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.datanugget\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "datacrush",
		name: "Datacrush",
		website: "https://www.datacrush.la",
		description: "Datacrush is a marketing automation platform.",
		icon: "Datacrush.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "datacrush:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("js\\.datacrush\\.la"),
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
	},
	{
		id: "datadojo",
		name: "DataDojo",
		website: "https://datadojo.ai",
		description: "DataDojo is an AI platform that converts high-intent and anonymous website visitors into marketable leads, helping businesses increase sales.",
		icon: "DataDojo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "datadojo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("pixel\\.datadojocdp\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "datalitics",
		name: "Datalitics",
		website: "https://datalitics.com.br",
		description: "Datalitics is a platform designed for advanced lead tracking, offering tools to monitor, analyze, and optimize customer acquisition efforts.",
		icon: "Datalitics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "datalitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.datalitics\\.com\\.br\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "datalitics:jsGlobal:1",
				kind: "jsGlobal",
				property: "createWPDatalitics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "datalitics:jsGlobal:2",
				kind: "jsGlobal",
				property: "createWPRedirectDatalitics",
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
		id: "datarize",
		name: "Datarize",
		website: "https://datarize.ai",
		description: "Datarize is a CRM marketing solution designed to streamline customer relationship management and enhance targeted marketing efforts.",
		icon: "Datarize.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "datarize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.datarize\\.ai\\/"),
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
		id: "datatrics",
		name: "Datatrics",
		website: "https://datatrics.com",
		description: "Datatrics is a data-driven marketing platform that provides businesses with advanced tools and analytics to optimise customer experiences, personalise marketing campaigns, and drive engagement through data-driven insights and automation.",
		icon: "Datatrics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "datatrics:dom:0",
				kind: "dom",
				selector: "link[href*='.datatrics.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "datatrics:jsGlobal:1",
				kind: "jsGlobal",
				property: "DatatricsClick",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "datatrics:jsGlobal:2",
				kind: "jsGlobal",
				property: "datatricsEvents",
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
		id: "dathuis",
		name: "DatHuis",
		website: "https://dathuis.nl",
		description: "DatHuis is a platform providing marketing automation tools for real estate professionals, designed to enhance visibility and streamline operations.",
		icon: "DatHuis.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "dathuis:jsGlobal:0",
				kind: "jsGlobal",
				property: "DatHuisObject",
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
		id: "deadline-funnel",
		name: "Deadline Funnel",
		website: "https://www.deadlinefunnel.com",
		description: "Deadline is a tool used to automate marketing funnels by managing time-based campaigns and creating urgency-driven conversion strategies.",
		icon: "DeadlineFunnel.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "deadline-funnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("a\\.deadlinefunnel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "deadline-funnel:jsGlobal:1",
				kind: "jsGlobal",
				property: "SendUrlToDeadlineFunnel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "deadline-funnel:jsGlobal:2",
				kind: "jsGlobal",
				property: "afterDeadline",
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
		id: "deal-ai",
		name: "Deal.ai",
		website: "https://home.deal.ai",
		description: "Deal.ai is an AI-powered white-label platform designed to support marketing, content creation, and business growth.",
		icon: "DealAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "deal-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.marketing\\.deal\\.ai"),
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
		id: "deep-lawn",
		name: "Deep Lawn",
		website: "https://deeplawn.com",
		description: "Deep Lawn is a sales tool designed for lawn care and pest control companies.",
		icon: "DeepLawn.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "deep-lawn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.deeplawn\\.com\\/"),
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
		id: "deepmarkit",
		name: "DeepMarkit",
		website: "https://www.deepmarkit.com",
		description: "Deepmarkit is a customer acquisition platform designed to help businesses attract, engage, and convert potential clients through targeted digital marketing and promotional campaigns.",
		icon: "DeepMarkit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "deepmarkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("portal\\.deepmarkit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "delera",
		name: "Delera",
		website: "https://delera.io",
		description: "Delera is a platform that helps increase turnover by managing and automating marketing and sales processes.",
		icon: "Delera.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "delera:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.delera\\.io"),
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
		id: "delivra",
		name: "Delivra",
		website: "https://www.delivra.com",
		description: "Delivra is a premium email marketing tracking software.",
		icon: "Delivra.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "delivra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("integration\\.delivra\\.com"),
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
		id: "dialog-insight",
		name: "Dialog Insight",
		website: "https://www.dialoginsight.com",
		description: "Dialog Insight is a multi-channel marketing automation platform that enables personalization and campaign management across digital channels.",
		icon: "DialogInsight.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "dialog-insight:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.dialoginsight\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "doctor-com",
		name: "Doctor.com",
		website: "https://www.doctor.com",
		description: "Doctor.com is a marketing automation and reputation management platform for doctors.",
		icon: "Doctor.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "doctor-com:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.doctor\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doctor-com:dom:1",
				kind: "dom",
				selector: "iframe[src*='.doctor.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dotdigital",
		name: "Dotdigital",
		website: "https://dotdigital.com",
		description: "Dotdigital is an all-in-one cloud-based customer engagement multichannel marketing platform.",
		icon: "Dotdigital.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "dotdigital:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/_dmptv([\\d.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dotdigital:jsGlobal:1",
				kind: "jsGlobal",
				property: "dmPt",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dotdigital:jsGlobal:2",
				kind: "jsGlobal",
				property: "dm_insight_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dotdigital:jsGlobal:3",
				kind: "jsGlobal",
				property: "dmtrackingobjectname",
				confidence: 75,
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
		id: "dreamdata",
		name: "Dreamdata",
		website: "https://dreamdata.io",
		description: "Dreamdata is a B2B revenue attribution platform.",
		icon: "Dreamdata.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "dreamdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bizible\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dreamdata:dom:1",
				kind: "dom",
				selector: "link[href*='.bizible.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "dreamdata:jsGlobal:2",
				kind: "jsGlobal",
				property: "BizTrackingA",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dreamdata:jsGlobal:3",
				kind: "jsGlobal",
				property: "Bizible",
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
		id: "drip",
		name: "Drip",
		website: "https://www.drip.com",
		description: "Drip is a marketing automation platform built for ecommerce.",
		icon: "Drip.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "drip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getdrip\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "dzbuild",
		name: "DZBuild",
		website: "https://dzbuild.com",
		description: "DZBuild is a data-driven marketing system that analyzes customer data to support campaign management, audience segmentation, and performance measurement across digital channels.",
		icon: "DZBuild.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "dzbuild:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^DZBuild$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "e-goi",
		name: "e-goi",
		website: "https://www.e-goi.com",
		description: "e-goi is a multichannel marketing automation software for ecommerce.",
		icon: "e-goi.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "e-goi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.e-goi\\.com\\/egoimmerce\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "e-goi:jsGlobal:1",
				kind: "jsGlobal",
				property: "Egoimmerce",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "e-goi:jsGlobal:2",
				kind: "jsGlobal",
				property: "_egoiaq",
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
		id: "earlyparrot",
		name: "EarlyParrot",
		website: "https://www.earlyparrot.com",
		description: "EarlyParrot is a referral marketing platform that supports coaches, course creators, and event hosts in expanding launches, webinars, and email lists through effective referral strategies.",
		icon: "EarlyParrot.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "earlyparrot:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.earlyparrot\\.com"),
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
		id: "ecal",
		name: "Ecal",
		website: "https://ecal.com",
		description: "Ecal is a marketing software platform that enables the delivery of calendar-based tickets and events directly into users’ personal calendars.",
		icon: "Ecal.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ecal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ecal\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ecal:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.ecal\\.com"),
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
		id: "ecomx",
		name: "EcomX",
		website: "https://www.ecomx.ai",
		description: "EcomX is a platform that automatically generates SEO-optimized product, collection, and blog content using AI.",
		icon: "EcomX.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ecomx:dom:0",
				kind: "dom",
				selector: "link[href*='app.ecomx.ai/']",
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
		id: "edugram",
		name: "Edugram",
		website: "https://edugram.com",
		description: "Edugram is an affiliate program and CPA network for monetizing educational traffic.",
		icon: "Edugram.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "edugram:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.edugram\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "edugram:dom:1",
				kind: "dom",
				selector: "form[action*='edugram.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eggflow",
		name: "Eggflow",
		website: "https://eggflow.com",
		description: "Eggflow is a platform that offers marketing automation and customer engagement tools to help increase ecommerce revenue.",
		icon: "Eggflow.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "eggflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.eggflow\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eggflow:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.eggflow\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eloqua",
		name: "Eloqua",
		website: "https://eloqua.com",
		description: "Eloqua is a Software-as-a-Service (SaaS) platform for marketing automation offered that aims to help B2B marketers and organisations manage marketing campaigns and sales lead generation.",
		icon: "Oracle.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "eloqua:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("elqCfg\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:1",
				kind: "jsGlobal",
				property: "_elq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:2",
				kind: "jsGlobal",
				property: "_elqQ",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:3",
				kind: "jsGlobal",
				property: "eloqContactData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:4",
				kind: "jsGlobal",
				property: "eloquaActionSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:5",
				kind: "jsGlobal",
				property: "elqCookieValue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:6",
				kind: "jsGlobal",
				property: "elqCurESite",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:7",
				kind: "jsGlobal",
				property: "elqLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:8",
				kind: "jsGlobal",
				property: "elqSiteID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:jsGlobal:9",
				kind: "jsGlobal",
				property: "elq_global",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eloqua:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^ELOQUA$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "eloqua:scriptSrc:11",
				kind: "scriptSrc",
				pattern: new RegExp("elqcfg\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eloqua:cookie:12",
				kind: "cookie",
				keyPattern: new RegExp("^eloqua$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "emanda",
		name: "Emanda",
		website: "https://emanda.com.br",
		description: "Emanda is a platform offering SMS Marketing and Smart Email Marketing solutions.",
		icon: "Emanda.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "emanda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.emanda\\.com\\.br\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emanda:jsGlobal:1",
				kind: "jsGlobal",
				property: "linkEmanda",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "emanda:jsGlobal:2",
				kind: "jsGlobal",
				property: "srcEmaScript",
				valuePattern: new RegExp("app\\.emanda\\.com\\.br\\/"),
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
		id: "emarsys",
		name: "Emarsys",
		website: "https://emarsys.com/",
		description: "Emarsys is a B2C customer engagement and marketing automation platform.",
		icon: "Emarsys.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "emarsys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:static|cdn)\\.scarabresearch\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emarsys:jsGlobal:1",
				kind: "jsGlobal",
				property: "Scarab",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "emarsys:jsGlobal:2",
				kind: "jsGlobal",
				property: "ScarabQueue",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ematic-solutions",
		name: "Ematic Solutions",
		website: "https://www.ematicsolutions.com",
		description: "Ematic Solutions is part of Ematic Group and started to revolve around transforming email marketing into an ROI machine.",
		icon: "Ematic Solutions.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ematic-solutions:jsGlobal:0",
				kind: "jsGlobal",
				property: "EmaticsObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ematic-solutions:jsGlobal:1",
				kind: "jsGlobal",
				property: "ematicApikey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ematic-solutions:jsGlobal:2",
				kind: "jsGlobal",
				property: "ematics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ematic-solutions:jsGlobal:3",
				kind: "jsGlobal",
				property: "ematicsSubscribe",
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
		id: "emblue",
		name: "emBlue",
		website: "https://www.embluemail.com/en",
		description: "emBlue is an email and marketing automation platform.",
		icon: "emBlue.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "emblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.embluemail\\.com\\/(?:library\\/([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emblue:jsGlobal:1",
				kind: "jsGlobal",
				property: "emblueOnSiteApp",
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
		id: "emotive",
		name: "Emotive",
		website: "https://emotive.io",
		description: "Emotive is a computer software company that provides SaaS, Mobile Marketing, NLP, machine learning, and B2B.",
		icon: "Emotive.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "emotive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("emotivecdn\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emotive:jsGlobal:1",
				kind: "jsGlobal",
				property: "emotivePopupInitializing",
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
		id: "emplifi-ugc",
		name: "Emplifi UGC",
		website: "https://emplifi.io/products/social-commerce/social-ugc",
		description: "Emplifi UGC is a platform that helps brands curate, measure, and integrate user-generated content to enhance engagement, authenticity, and ecommerce performance by offering features like product page galleries, social media contests, shoppable content, and detailed analytics.",
		icon: "Emplifi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "emplifi-ugc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.pixlee\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emplifi-ugc:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pixlee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "emplifi-ugc:jsGlobal:2",
				kind: "jsGlobal",
				property: "Pixlee_Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "emplifi-ugc:jsGlobal:3",
				kind: "jsGlobal",
				property: "TurnTo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "emplifi-ugc:jsGlobal:4",
				kind: "jsGlobal",
				property: "turnToConfig",
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
		id: "engaga",
		name: "Engaga",
		website: "https://www.engaga.com",
		description: "Engaga is a platform that enhances website effectiveness with call-to-action popups and popup forms designed to convert visitors into customers and subscribers.",
		icon: "Engaga.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "engaga:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("spark\\.engaga\\.com"),
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
	},
	{
		id: "enkod",
		name: "Enkod",
		website: "https://enkod.io",
		description: "Enkod is a CDP platform designed for marketing automation.",
		icon: "Enkod.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "enkod:jsGlobal:0",
				kind: "jsGlobal",
				property: "enKodBox.token",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "epublishing",
		name: "ePublishing",
		website: "https://www.epublishing.com",
		description: "ePublishing is a media tech stack that enhances revenue, productivity, and engagement through AI-powered solutions, SEO dominance, and audience integration.",
		icon: "ePublishing.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "epublishing:jsGlobal:0",
				kind: "jsGlobal",
				property: "Ellington.Admin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "epublishing:jsGlobal:1",
				kind: "jsGlobal",
				property: "EllingtonMap",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "epublishing:jsGlobal:2",
				kind: "jsGlobal",
				property: "EllingtonPlateLoader.cache",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "esputnik",
		name: "eSputnik",
		website: "https://esputnik.com",
		description: "eSputnik is a marketing automation service for ecommerce.",
		icon: "eSputnik.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "esputnik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/\\/|\\.)esputnik\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "esputnik:jsGlobal:1",
				kind: "jsGlobal",
				property: "esSdk",
				valuePattern: new RegExp("^es$"),
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
		id: "estate-track",
		name: "Estate Track",
		website: "https://estatetrack.co.uk",
		description: "Estate Track is an all-in-one website platform for estate agents that facilitates automated marketing and lead generation.",
		icon: "EstateTrack.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "estate-track:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.estate-track\\.co\\.uk"),
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
		id: "etrigue",
		name: "eTrigue",
		website: "https://www.etrigue.com",
		description: "eTrigue is a demand generation and sales acceleration software that helps businesses identify, engage, and convert prospects through automated marketing and lead nurturing.",
		icon: "eTrigue.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "etrigue:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("trk\\.etrigue\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "evidence",
		name: "Evidence",
		website: "https://evidence.io",
		description: "Evidence is a real-time social proof tool designed to increase website conversions by displaying recent customer activity and engagement.",
		icon: "Evidence.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "evidence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.evidence\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "evidence:jsGlobal:1",
				kind: "jsGlobal",
				property: "EvidenceLoaded",
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
		id: "evolok",
		name: "Evolok",
		website: "https://www.evolok.com",
		description: "Evolok is an engagement and monetization platform for digital media.",
		icon: "Evolok.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "evolok:jsGlobal:0",
				kind: "jsGlobal",
				property: "evo_client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "evolok:jsGlobal:1",
				kind: "jsGlobal",
				property: "evo_endpoint",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "exitintel",
		name: "ExitIntel",
		website: "https://exitintelligence.com",
		description: "ExitIntel is a full service conversion optimisation agency that focuses on ecommerce companies.",
		icon: "ExitIntel.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "exitintel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:get.)?exitintel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "exitintel:jsGlobal:1",
				kind: "jsGlobal",
				property: "exitintel.VERSION",
				valuePattern: new RegExp("(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "exitintel:jsGlobal:2",
				kind: "jsGlobal",
				property: "exitintelAccount",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "exitintel:jsGlobal:3",
				kind: "jsGlobal",
				property: "exitintelConfig",
				description: "Page-owned global matches a known technology marker.",
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
		id: "experiture",
		name: "Experiture",
		website: "https://www.experiture.com",
		description: "Experiture is a customer experience marketing platform that manages campaigns, customer data, and engagement across digital channels.",
		icon: "Experiture.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "experiture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.experiture\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "exponea",
		name: "Exponea",
		website: "https://go.exponea.com",
		description: "Exponea is a cloud-based marketing analysis platform suitable for large and midsize organisations in a variety of industries.",
		icon: "Exponea.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "exponea:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.exponea\\.com)?\\/js\\/exponea\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "exponea:jsGlobal:1",
				kind: "jsGlobal",
				property: "exponea.version",
				valuePattern: new RegExp("^v([\\d.]+)$"),
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
		id: "extole",
		name: "Extole",
		website: "https://www.extole.com",
		description: "Extole is an online marketing platform that enables brands and businesses to get new customers through loyalty and referral programs.",
		icon: "Extole.png",
		categories: [
			"marketing-automation",
			"commerce-operations",
		],
		rules: [
			{
				id: "extole:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:extole|xtlo)\\.(?:com|net)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extole:dom:1",
				kind: "dom",
				selector: "li > a[href*='.extole.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "extole:jsGlobal:2",
				kind: "jsGlobal",
				property: "extole.VERSION",
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
				"poa",
			],
		},
	},
	{
		id: "farazi-bili-im",
		name: "Farazi Bilişim",
		website: "https://farazibilisim.com.tr",
		description: "Farazi Bilişim is a platform that enhances online visibility through search engine optimization strategies aimed at improving website ranking and performance across major search platforms.",
		icon: "Farazi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "farazi-bili-im:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("farazibilisim\\.com\\.tr"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "farazi-bili-im:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("farazibilisim\\.com\\.tr", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "farazi-bili-im:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("farazibilisim\\.com\\.tr", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "feathr",
		name: "Feathr",
		website: "https://www.feathr.co",
		description: "Feathr is a suite of digital marketing tools designed specifically for event organizers, facilitating targeted outreach and audience engagement.",
		icon: "Feathr.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "feathr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.feathr\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "feathr:jsGlobal:1",
				kind: "jsGlobal",
				property: "FeathrBoomerang.version",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "feedify",
		name: "Feedify",
		website: "https://feedify.net",
		description: "Feedify is a platform that offers a lean dashboard for managing customer engagement tools with automation.",
		icon: "Feedify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "feedify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feedify\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "feedify:jsGlobal:1",
				kind: "jsGlobal",
				property: "feedify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "feedify:jsGlobal:2",
				kind: "jsGlobal",
				property: "feedify_options",
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
		id: "feedmagnet",
		name: "FeedMagnet",
		website: "https://www.feedmagnet.com",
		description: "FeedMagnet is a platform that merges original content with curated third-party articles and social posts to deliver varied brand experiences.",
		icon: "FeedMagnet.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "feedmagnet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feedmagnet\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fello",
		name: "Fello",
		website: "https://hifello.com",
		description: "Fello is a seller lead generation platform created by agents for agents. It provides modern agents with a lead funnel designed to retain serious sellers.",
		icon: "Fello.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fello:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hifello\\.com\\/"),
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
		id: "firepush",
		name: "Firepush",
		website: "https://getfirepush.com",
		description: "Firepush is an omnichannel marketing app that helps Shopify stores to drive sales with automated web push, email and SMS campaigns.",
		icon: "Firepush.svg",
		categories: [
			"marketing-automation",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "firepush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.firepush\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firepush:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("fpcdn\\.me\\/.+shopify"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "firepush:dom:2",
				kind: "dom",
				selector: "link[href*='cdn.firepush.net']",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "firsthive",
		name: "FirstHive",
		website: "https://firsthive.com",
		description: "FirstHive is a full-stack customer data platform that enables consumer marketers and brands to take control of their first-party data from all sources.",
		icon: "FirstHive.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "firsthive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("firsthive\\.com\\/engage\\/"),
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
		id: "flable",
		name: "Flable",
		website: "https://flable.ai",
		description: "Flable is an AI-powered digital marketing platform that unifies marketing data and reduces customer acquisition costs.",
		icon: "Flable.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "flable:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.flable\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "flable:jsGlobal:1",
				kind: "jsGlobal",
				property: "flable",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flocktory",
		name: "Flocktory",
		website: "https://www.flocktory.com",
		description: "Flocktory is a social referral marketing platform that enables users to share personalised offers via social networks.",
		icon: "Flocktory.png",
		categories: [
			"marketing-automation",
			"commerce-operations",
		],
		rules: [
			{
				id: "flocktory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.flocktory\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flocktory:dom:1",
				kind: "dom",
				selector: "iframe[src*='.flocktory.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "flocktory:jsGlobal:2",
				kind: "jsGlobal",
				property: "flocktory",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flocktory:jsGlobal:3",
				kind: "jsGlobal",
				property: "flocktoryPurchase",
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
		id: "flodesk",
		name: "Flodesk",
		website: "https://flodesk.com",
		description: "Flodesk is an email marketing platform that supports campaign creation, scheduling, and performance analysis using automation.",
		icon: "Flodesk.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "flodesk:jsGlobal:0",
				kind: "jsGlobal",
				property: "FlodeskObject",
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
		id: "flowbox",
		name: "Flowbox",
		website: "https://getflowbox.com",
		description: "Flowbox is a platform designed to enable brands to use social content to grow engagement, drive revenue and sell more across their marketing and commerce channels.",
		icon: "Flowbox.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "flowbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getflowbox\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flowbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "flowbox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flowbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "flowboxWebpack",
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
		id: "flowtrack",
		name: "FlowTrack",
		website: "https://www.flowtrack.co",
		description: "FlowTrack is an app that consolidates multiple services into one platform, enabling websites to attract more visitors and convert them into leads.",
		icon: "FlowTrack.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "flowtrack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.flowtrack\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "fmg-suite",
		name: "FMG Suite",
		website: "https://fmgsuite.com",
		description: "FMG Suite is an automated content marketing system for financial advisors.",
		icon: "FMGSuite.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fmg-suite:jsGlobal:0",
				kind: "jsGlobal",
				property: "FMG.EbookBGType",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fmg-suite:jsGlobal:1",
				kind: "jsGlobal",
				property: "fmgjQuery.Animation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fmg-suite:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^FMG Suite$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "fmg-suite:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^fmg suite$", "i"),
				description: "Meta tag matches a known technology marker.",
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
			"jquery",
		],
	},
	{
		id: "fohr",
		name: "Fohr",
		website: "https://www.fohr.co",
		description: "Fohr is a platform that improves collaboration between brands and influencers, focusing on building brands through influencer marketing.",
		icon: "Fohr.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fohr:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.fohr\\.co", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fohr:meta:1",
				kind: "meta",
				key: "name",
				valuePattern: new RegExp("^Fohr$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "fohr:meta:2",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Fohr$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "fohr:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.fohr\\.co", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "fohr:meta:4",
				kind: "meta",
				key: "name",
				valuePattern: new RegExp("^fohr$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "fohr:meta:5",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^fohr$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "foleon",
		name: "Foleon",
		website: "https://www.foleon.com",
		description: "Foleon is a content creation platform designed for business teams to produce engaging and intelligent content experiences at scale.",
		icon: "Foleon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "foleon:jsGlobal:0",
				kind: "jsGlobal",
				property: "foleon",
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
		id: "fomo",
		name: "Fomo",
		website: "https://fomo.com",
		description: "Fomo is a social proof marketing platform.",
		icon: "Fomo.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fomo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fomo\\.com\\/api\\/v"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fomo:jsGlobal:1",
				kind: "jsGlobal",
				property: "fomo.version",
				valuePattern: new RegExp("(.+)"),
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
				"low",
				"recurring",
			],
		},
	},
	{
		id: "formtoro",
		name: "Formtoro",
		website: "https://www.formtoro.com",
		description: "Formtoro is a platform that converts popup signups into marketing insights by collecting zero-party data through popups, quizzes, and post-purchase surveys.",
		icon: "Formtoro.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "formtoro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.formtoro\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "formtoro:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.formtoro\\.com"),
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
		id: "forsant",
		name: "Forsant",
		website: "https://forsant.io",
		description: "Forsant is a tool that automates Google Ads setup, audience targeting, and campaign optimization, eliminating the need for manual configuration.",
		icon: "Forsant.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "forsant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pixel\\.forsant\\.io"),
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
		id: "foursixty",
		name: "Foursixty",
		website: "https://foursixty.com/",
		description: "Foursixty is a widget which turns Instagram content and user-generated content into shoppable galleries.",
		icon: "Foursixty.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "foursixty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("foursixty\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "foursixty:jsGlobal:1",
				kind: "jsGlobal",
				property: "FoursixtyEmbed",
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
		id: "frase",
		name: "Frase",
		website: "https://www.frase.io",
		description: "Frase is a content system powered by AI, designed to streamline content creation processes.",
		icon: "Frase.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "frase:jsGlobal:0",
				kind: "jsGlobal",
				property: "frase",
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
		id: "frederick",
		name: "Frederick",
		website: "https://hirefrederick.com",
		description: "Frederick is an automated marketing software solution developed by MindBody to streamline and optimize marketing tasks for businesses.",
		icon: "Frederick.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "frederick:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("hirefrederick\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "freedomkit",
		name: "FreedomKit",
		website: "https://freedomkit.ai",
		description: "FreedomKit is an all-in-one online business software powered by AI that supports automation to streamline operations.",
		icon: "FreedomKit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "freedomkit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.freedomkit\\.ai"),
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
		id: "friendbuy",
		name: "Friendbuy",
		website: "https://www.friendbuy.com",
		description: "Friendbuy is a cloud-based referral marketing solution designed to help ecommerce businesses of all sizes.",
		icon: "Friendbuy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "friendbuy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudfront\\.net\\/js\\/friendbuy\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "friendbuy:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.fbot\\.me\\/friendbuy\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "friendbuy:jsGlobal:2",
				kind: "jsGlobal",
				property: "friendbuy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "friendbuy:jsGlobal:3",
				kind: "jsGlobal",
				property: "friendbuyAPI.merchantId",
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
		id: "frizbit",
		name: "Frizbit",
		website: "https://frizbit.com",
		description: "Frizbit is a marketing tool that helps digital marketeers increase web traffic and revenue by combining web push notification.",
		icon: "Frizbit.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "frizbit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.frizbit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "frizbit:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.frizbit.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "frizbit:jsGlobal:2",
				kind: "jsGlobal",
				property: "frizbit.configurationManager",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "frizbit:jsGlobal:3",
				kind: "jsGlobal",
				property: "frizbit.remoteConfigs",
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
		id: "frosmo",
		name: "Frosmo",
		website: "https://frosmo.com",
		description: "Frosmo is a SaaS company which provides AI-driven personalisation products.",
		icon: "Frosmo.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "frosmo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("frosmo\\.easy\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "frosmo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_frosmo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "frosmo:jsGlobal:2",
				kind: "jsGlobal",
				property: "frosmo",
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
		id: "fueled",
		name: "Fueled",
		website: "https://fueled.io",
		description: "Fueled is a platform that manages and analyzes first-party data for ecommerce businesses to support insights and decision making.",
		icon: "Fueled.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fueled:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mb-cdn\\.fueled\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fueled:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("mb-cdn\\.fueled\\.io"),
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
		id: "fullpath",
		name: "Fullpath",
		website: "https://www.fullpath.com",
		description: "Fullpath is a Customer Data and Experience Platform (CDXP) for the automotive retail industry, formerly known as AutoLeadStar.",
		icon: "Fullpath.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "fullpath:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.autoleadstar\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "funnel-science",
		name: "Funnel Science",
		website: "https://www.funnelscience.com",
		description: "Funnel Science is a sales and marketing software that leverages data to provide a competitive advantage.",
		icon: "FunnelScience.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "funnel-science:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.funnelscience\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "funnelcockpit",
		name: "FunnelCockpit",
		website: "https://funnelcockpit.com",
		description: "FunnelCockpit is an all-in-one funnel builder.",
		icon: "FunnelCockpit.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "funnelcockpit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.funnelcockpit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "funnelcockpit:dom:1",
				kind: "dom",
				selector: "a[href*='.funnelcockpit.com/'][target='_blank'], iframe[src*='.funnelcockpit.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "funnels-of-course",
		name: "Funnels of Course",
		website: "https://funnelsofcourse.com",
		description: "Funnels of Course is an all-in-one marketing platform designed to support coaches and course creators in achieving online success.",
		icon: "FunnelsOfCourse.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "funnels-of-course:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.funnelsofcourse\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "funnelytics",
		name: "Funnelytics",
		website: "https://funnelytics.io",
		description: "Funnelytics is a tool designed to increase lead and customer conversions by optimizing marketing funnels for better performance and results.",
		icon: "Funnelytics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "funnelytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.funnelytics\\.io\\/"),
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
		id: "futy",
		name: "Futy",
		website: "https://www.futy.io",
		description: "Futy is a tool that helps convert website visitors into leads through a customer-friendly approach.",
		icon: "Futy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "futy:jsGlobal:0",
				kind: "jsGlobal",
				property: "Futy.$axios",
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
		id: "gamooga",
		name: "Gamooga",
		website: "https://www.gsecondscreen.com",
		description: "Gamooga is a marketing automation solution which helps businesses deliver personalized actions at their customers through various channels such as email, web, mobile, social and display.",
		icon: "Gamooga.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "gamooga:jsGlobal:0",
				kind: "jsGlobal",
				property: "triggerGamoogaInFooter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gamooga:jsGlobal:1",
				kind: "jsGlobal",
				property: "triggerGamoogaInFooterChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "geggio",
		name: "Geggio",
		website: "https://www.geggio.com",
		description: "Geggio is an all-in-one funnel tool for SMEs that integrates landing pages, emails, automations, and CRM.",
		icon: "Geggio.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "geggio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.geggio\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "geggio:jsGlobal:1",
				kind: "jsGlobal",
				property: "geggio.addElement",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "genesys-cloud",
		name: "Genesys Cloud",
		website: "https://www.genesys.com",
		description: "Genesys Cloud is an all-in-one cloud-based contact center software built to improve the customer experience.",
		icon: "Genesys Cloud.svg",
		categories: [
			"marketing-automation",
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "genesys-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.mypurecloud\\.\\w+\\/widgets\\/([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genesys-cloud:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.mypurecloud\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genesys-cloud:jsGlobal:2",
				kind: "jsGlobal",
				property: "PURECLOUD_WEBCHAT_FRAME_CONFIG",
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
		id: "genoo",
		name: "Genoo",
		website: "https://genoo.com",
		description: "Genoo is a provider of marketing automation and online marketing tools.",
		icon: "Genoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "getback",
		name: "Getback",
		website: "https://www.getback.app",
		description: "Getback is a web push conversion optimization tool developed by AdFocus to help improve engagement and campaign performance through browser-based notifications.",
		icon: "Getback.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "getback:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.getback\\.ch"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "getgabs",
		name: "Getgabs",
		website: "https://getgabs.com",
		description: "Getgabs is a WhatsApp marketing automation platform that enhances sales, marketing, and support through the WhatsApp Business API.",
		icon: "Getgabs.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "getgabs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getgabs\\.com"),
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
		implies: [
			"whatsapp-business-chat",
		],
	},
	{
		id: "getmorestudents",
		name: "GetMoreStudents",
		website: "https://getmorestudents.net",
		description: "GetMoreStudents is a platform that supports dance studio owners in increasing class enrollment and boosting profits through marketing automation.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "getmorestudents:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.getmorestudents\\.net"),
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
		id: "getresponse",
		name: "GetResponse",
		website: "https://www.getresponse.com",
		description: "GetResponse is an email marketing app that allows you to create a mailing list and capture data onto it.",
		icon: "GetResponse.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "getresponse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getresponse\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getresponse:dom:1",
				kind: "dom",
				selector: "form[action*='.getresponse.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "getresponse:jsGlobal:2",
				kind: "jsGlobal",
				property: "GRAPP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "getresponse:jsGlobal:3",
				kind: "jsGlobal",
				property: "GRWF2",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "getresponse:dom:4",
				kind: "dom",
				selector: "getresponse-form",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "gleam",
		name: "Gleam",
		website: "https://gleam.io",
		description: "Gleam is a marketing app that aids in expanding business email lists, ecommerce stores, SaaS businesses, and Facebook audiences.",
		icon: "Gleam.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "gleam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gleamjs\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gleam:jsGlobal:1",
				kind: "jsGlobal",
				property: "Gleam",
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
		id: "goat-systems",
		name: "Goat Systems",
		website: "https://www.thegoatsystems.com",
		description: "Goat Systems is a provider of marketing automation and CRM software designed to support business growth.",
		icon: "GoatSystems.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "goat-systems:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.thegoatsystems\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "goodapi",
		name: "GoodAPI",
		website: "https://thegoodapi.com",
		description: "GoodAPI is a platform that helps businesses increase conversions while supporting environmental sustainability by planting trees.",
		icon: "GoodAPI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "goodapi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thegoodapi\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "grade-us",
		name: "Grade.us",
		website: "https://www.grade.us",
		description: "Grade.us is a review management platform for marketing agencies.",
		icon: "GradeUs.svg",
		categories: [
			"marketing-automation",
			"community-ugc",
		],
		rules: [
			{
				id: "grade-us:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.grade\\.us"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "grade-us:dom:1",
				kind: "dom",
				selector: "script#gradeus-wjs, iframe[src*='www.grade.us']",
				description: "DOM selector matches a known technology marker.",
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
		id: "gravito",
		name: "Gravito",
		website: "https://www.gravito.net",
		description: "Gravito is a service that enables centralized consumer consent and the collection of observed data from multiple digital touchpoints, securely integrating it with personal data.",
		icon: "Gravito.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "gravito:jsGlobal:0",
				kind: "jsGlobal",
				property: "gravito.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gravito:jsGlobal:1",
				kind: "jsGlobal",
				property: "gravitoCMP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gravito:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^gravitoSync$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "gravito:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^gravitosync$", "i"),
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
		id: "grin",
		name: "Grin",
		website: "https://grin.co/",
		description: "Grin is an influence marketing platform.",
		icon: "Grin.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "grin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("grin-sdk\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "grin:jsGlobal:1",
				kind: "jsGlobal",
				property: "Grin",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:grin:grin:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "grivy",
		name: "Grivy",
		website: "https://business.grivy.com",
		description: "Grivy is a platform that connects brands with consumers, facilitating engagement and interaction.",
		icon: "Grivy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "grivy:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.grivy.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "groove-cm",
		name: "Groove.cm",
		website: "https://groove.cm",
		description: "Groove.cm is a platform providing marketing, sales, and business tools without upfront costs, enabling businesses to focus on scaling.",
		icon: "GrooveCM.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "groove-cm:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.groove.cm']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "growave",
		name: "Growave",
		website: "https://growave.io",
		description: "Growave is the all-in-one app: social login and sharing, reviews, wishlists, instagram feed, automated emails and more.",
		icon: "Growave.svg",
		categories: [
			"marketing-automation",
			"authentication-identity",
		],
		rules: [
			{
				id: "growave:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.socialshopwave\\.com\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "growsurf",
		name: "GrowSurf",
		website: "https://growsurf.com",
		description: "GrowSurf is a referral marketing software designed to automate viral growth for websites.",
		icon: "GrowSurf.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "growsurf:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.growsurf\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "growsurf:jsGlobal:1",
				kind: "jsGlobal",
				property: "growsurf.init",
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
		id: "growthstack",
		name: "Growthstack",
		website: "https://www.growthstack.app",
		description: "Growthstack is a growth management platform for healthcare practices, providing centralized tools to manage operations, patient engagement, and practice growth within a single system.",
		icon: "Growthstack.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "growthstack:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Growthstack by Influx$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "gruvi",
		name: "Gruvi",
		website: "https://www.gruvi.tv",
		description: "Gruvi is a movie marketing network that provides promotional tools and services to the film industry, facilitating audience engagement and increasing visibility for films through targeted campaigns and digital strategies.",
		icon: "Gruvi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "gruvi:dom:0",
				kind: "dom",
				selector: "link[href*='.gruvi.tv/movies/']",
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
		id: "guuru",
		name: "Guuru",
		website: "https://www.guuru.com",
		description: "Guuru is a platform that connects shoppers with customers who share their enthusiasm for specific products or services.",
		icon: "Guuru.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "guuru:jsGlobal:0",
				kind: "jsGlobal",
				property: "Guuru",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "guuru:jsGlobal:1",
				kind: "jsGlobal",
				property: "guuru.init",
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
		id: "happy-talk",
		name: "Happy Talk",
		website: "https://www.happytalk.io/",
		description: "HappyTalk is a customer consultation tool developed in Korea that automates interactions to support business communication.",
		icon: "HappyTalk.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "happy-talk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat-static\\.happytalkio\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "happy-talk:jsGlobal:1",
				kind: "jsGlobal",
				property: "Happytalk",
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
		id: "happysync",
		name: "HappySync",
		website: "https://www.happysync.io",
		description: "HappySync is a Korean-developed tool designed for marketing automation and conversion optimization.",
		icon: "HappySync.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "happysync:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.happysync\\.io\\/"),
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
		id: "harafunnel",
		name: "Harafunnel",
		website: "https://en.harafunnel.com/pages/harafunnel",
		description: "Harafunnel is a marketing automation tool that integrates with Facebook Messenger Bot to streamline customer engagement.",
		icon: "Harafunnel.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "harafunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.harafunnel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "harafunnel:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.harafunnel\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "hibu",
		name: "Hibu",
		website: "https://hibu.com",
		description: "Hibu is an AI-enabled platform that helps generate, manage, respond to, and convert leads while supporting ongoing customer engagement through a single provider.",
		icon: "Hibu.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hibu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.hibuwebsites\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "hibu:jsGlobal:1",
				kind: "jsGlobal",
				property: "hibuWebsiteConfig",
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
		id: "higher-logic",
		name: "Higher Logic",
		website: "https://www.higherlogic.com",
		description: "Higher Logic is a digital marketing solution provider, formerly known as Informz.",
		icon: "Higher Logic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "higher-logic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.informz\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "higher-logic:jsGlobal:1",
				kind: "jsGlobal",
				property: "informz_trk",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "highlevel",
		name: "HighLevel",
		website: "https://www.gohighlevel.com",
		description: "HighLevel is an all-in-one marketing and automation platform designed for marketing agencies and small businesses to manage CRM, marketing campaigns, sales funnels, appointment scheduling, and more.",
		icon: "HighLevel.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "highlevel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadconnectorhq\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "highlevel:jsGlobal:1",
				kind: "jsGlobal",
				property: "leadConnector.chatWidget",
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
		id: "homebot",
		name: "Homebot",
		website: "https://homebot.ai",
		description: "Homebot is a platform that converts client engagement into measurable financial transactions, enabling actionable insights and improved business outcomes.",
		icon: "Homebot.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "homebot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.homebotapp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "homebot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Homebot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "homebot:jsGlobal:2",
				kind: "jsGlobal",
				property: "Homebot.version",
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
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "homefiniti",
		name: "Homefiniti",
		website: "https://oneilinteractive.com/solutions/homefiniti/",
		description: "Homefiniti is a platform for home builders that offers tools for websites, virtual tours, and other marketing solutions.",
		icon: "Homefiniti.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "homefiniti:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Homefiniti$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "homefiniti:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^homefiniti$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hub-platform",
		name: "Hub Platform",
		website: "https://www.hub-js.com",
		description: "Hub Platform is a suite of data-driven marketing and customer experience management solutions.",
		icon: "HubPlatform.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hub-platform:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.hub-js\\.com"),
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
		id: "hubilo",
		name: "Hubilo",
		website: "https://www.hubilo.com",
		description: "Hubilo is a platform offering branded interactive experiences, AI-driven content repurposing, and behavioral analytics to maximize webinar ROI.",
		icon: "Hubilo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hubilo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.hubilo\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "hubspot",
		name: "HubSpot",
		website: "https://www.hubspot.com",
		description: "HubSpot is a marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
		icon: "HubSpot.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hubspot:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Start of Async HubSpot"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "hubspot:jsGlobal:1",
				kind: "jsGlobal",
				property: "_hsq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hubspot:jsGlobal:2",
				kind: "jsGlobal",
				property: "hubspot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hubspot:dns:3",
				kind: "dns",
				valuePattern: new RegExp("hubspotemail\\.net", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "hubspot:dns:4",
				kind: "dns",
				valuePattern: new RegExp("hubspot-developer-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "hubspot:dns:5",
				kind: "dns",
				valuePattern: new RegExp("hubspot-domain-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "hubspot:scriptSrc:6",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hs-scripts\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hubspot:html:7",
				kind: "html",
				pattern: new RegExp("<!-- start of async hubspot"),
				description: "HTML contains a known technology signature.",
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
		id: "huckabuy",
		name: "Huckabuy",
		website: "https://huckabuy.com",
		description: "Huckabuy is a software product utilising Google's dynamic rendering and structured data initiatives to enhance organic channel growth.",
		icon: "Huckabuy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "huckabuy:jsGlobal:0",
				kind: "jsGlobal",
				property: "HUCKABUY NAMESPACE.sd",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "huckabuy:jsGlobal:1",
				kind: "jsGlobal",
				property: "hbScriptRerun",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hull",
		name: "Hull",
		website: "https://www.hull.io",
		description: "Hull is a platform that collects, unifies, enriches product, marketing, and sales data, then synchronizes it across various tools.",
		icon: "Hull.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hull:jsGlobal:0",
				kind: "jsGlobal",
				property: "Hull._initialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hull:jsGlobal:1",
				kind: "jsGlobal",
				property: "Hull.js._initialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hull:jsGlobal:2",
				kind: "jsGlobal",
				property: "HullShopify",
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
		id: "hushly",
		name: "Hushly",
		website: "https://www.hushly.com",
		description: "Hushly is an all-in-one B2B marketing software platform.",
		icon: "Hushly.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "hushly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hushly\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hushly:dom:1",
				kind: "dom",
				selector: "link[href*='.hushly.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hushly:jsGlobal:2",
				kind: "jsGlobal",
				property: "__hly_widget_object",
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
		id: "hyperia",
		name: "Hyperia",
		website: "https://www.hyperia.sk",
		description: "Hyperia is a tool designed for lead generation and affiliate marketing.",
		icon: "Hyperia.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "hyperia:jsGlobal:0",
				kind: "jsGlobal",
				property: "_config.base_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hyperia:jsGlobal:1",
				kind: "jsGlobal",
				property: "_config.socket_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hyperia:jsGlobal:2",
				kind: "jsGlobal",
				property: "_config.tracker_url",
				valuePattern: new RegExp("\\.hyperia\\.sk"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "icegram",
		name: "Icegram",
		website: "https://www.icegram.com",
		description: "Icegram is a WordPress plugin designed to grow subscribers and increase conversions.",
		icon: "Icegram.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "icegram:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/icegram\\/.*main\\.min\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "icegram:jsGlobal:1",
				kind: "jsGlobal",
				property: "Icegram",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "icegram:jsGlobal:2",
				kind: "jsGlobal",
				property: "icegram_data",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "icomm",
		name: "icomm",
		website: "https://icommkt.com",
		description: "icomm is a platform that helps companies manage their marketing automation strategy using AI-powered tools.",
		icon: "icomm.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "icomm:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.icommarketing\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "icomm:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^ICOMMKT$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "icomm:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.icommarketing\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "icomm:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^icommkt$", "i"),
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
		id: "icomm-notifications-hub",
		name: "icomm - Notifications Hub",
		website: "https://icommkt.com",
		description: "Notifications Hub is an omnichannel marketing automation platform powered by AI.0.",
		icon: "icomm.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "icomm-notifications-hub:jsGlobal:0",
				kind: "jsGlobal",
				property: "wpnObject.origin",
				valuePattern: new RegExp("2"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"icomm",
		],
		excludes: [
			"titanpush",
		],
	},
	{
		id: "ifdo",
		name: "Ifdo",
		website: "https://ifdo.co.kr/",
		description: "Ifdo is a marketing and segmentation tool.",
		icon: "Ifdo.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "ifdo:jsGlobal:0",
				kind: "jsGlobal",
				property: "_NBIFDOBODYINNERHTML",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ifdo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_NBIFDOHEADCSSFILE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ifdo:jsGlobal:2",
				kind: "jsGlobal",
				property: "_NBIFDOHEADINNERHTML",
				description: "Page-owned global matches a known technology marker.",
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
		id: "incomaker",
		name: "Incomaker",
		website: "https://www.incomaker.com",
		description: "Incomaker is a marketing and sales automation platform that centralizes lead capture, campaign management, customer engagement, and sales workflows across digital channels.",
		icon: "Incomaker.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "incomaker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.incomaker\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "indi",
		name: "Indi",
		website: "https://indi.com",
		description: "Indi is a video social network where everyone - artists, brands, retailers, nonprofits, celebrities and individuals - can connect with fans and supporters to interact directly with your brand utilising exclusive Video Challenges and Video Threads tailor made by you.",
		icon: "Indi.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "indi:jsGlobal:0",
				kind: "jsGlobal",
				property: "indi.formatStats",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "indi:jsGlobal:1",
				kind: "jsGlobal",
				property: "indiCountly.check_any_consent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "indi:jsGlobal:2",
				kind: "jsGlobal",
				property: "indi_carousel.productCta",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "influence",
		name: "Influence",
		website: "https://useinfluence.co",
		description: "Influence is a conversion optimisation tool for ecommerce that leverages real-time social proof.",
		icon: "Influence.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "influence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.useinfluence\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "influence:jsGlobal:1",
				kind: "jsGlobal",
				property: "Influence",
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
		id: "informa-markets",
		name: "Informa Markets",
		website: "https://www.informamarkets.com",
		description: "Informa Markets is a platform that facilitates trade, innovation, and growth across various industries and specialist markets.",
		icon: "InformaMarkets.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "informa-markets:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connect\\.informamarkets\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "inpowered",
		name: "inPowered",
		website: "https://inpowered.ai",
		description: "inPowered is a content amplification platform that distributes branded and editorial content across digital channels to extend reach and measure audience engagement.",
		icon: "inPowered.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "inpowered:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.inpwrd\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "insided",
		name: "inSided",
		website: "https://www.insided.com",
		description: "inSided is the only Customer Success Community Platform built to help SaaS companies improve customer success and retention.",
		icon: "inSided.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "insided:jsGlobal:0",
				kind: "jsGlobal",
				property: "inSidedData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "insided:jsGlobal:1",
				kind: "jsGlobal",
				property: "insided",
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
		id: "insider",
		name: "Insider",
		website: "https://useinsider.com",
		description: "Insider is the first integrated Growth Management Platform helping digital marketers drive growth across the funnel, from Acquisition to Activation, Retention, and Revenue from a unified platform powered by Artificial Intelligence and Machine Learning.",
		icon: "Insider.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "insider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.useinsider\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "insider:jsGlobal:1",
				kind: "jsGlobal",
				property: "Insider",
				confidence: 20,
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
		id: "integrately",
		name: "Integrately",
		website: "https://integrately.com",
		description: "Integrately is a click automation software that enables connection of multiple applications.",
		icon: "Integrately.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "integrately:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.integrately\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "integrately:dom:1",
				kind: "dom",
				selector: "input[value*='app.integrately.com']",
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
		id: "interago",
		name: "Interago",
		website: "https://www.interago.com.br",
		description: "Interago is a Brazilian platform that aggregates modern digital tools to support and streamline online business operations.",
		icon: "Interago.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "interago:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.interago\\.com\\.br"),
				description: "Script content contains a bounded technology signature.",
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
		id: "intice",
		name: "Intice",
		website: "https://intice.com",
		description: "Intice is a lead conversion tool designed for the automotive industry, streamlining customer engagement and improving the conversion process from inquiries to sales.",
		icon: "Intice.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "intice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tools\\.inticeinc\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intice:jsGlobal:1",
				kind: "jsGlobal",
				property: "intice",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "intice:jsGlobal:2",
				kind: "jsGlobal",
				property: "inticeAllEvents",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "intice:jsGlobal:3",
				kind: "jsGlobal",
				property: "inticeIMP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "intice:jsGlobal:4",
				kind: "jsGlobal",
				property: "inticeLeadmakerAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "invoca",
		name: "Invoca",
		website: "https://www.invoca.com",
		description: "Invoca is an AI-powered call tracking and conversational analytics company.",
		icon: "Invoca.svg",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "invoca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dialogtech\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "invoca:jsGlobal:1",
				kind: "jsGlobal",
				property: "Invoca.PNAPI.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "invoca:jsGlobal:2",
				kind: "jsGlobal",
				property: "InvocaTagId",
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
		id: "inwink",
		name: "Inwink",
		website: "https://www.inwink.com",
		description: "Inwink is an event management platform for creating, managing, and scaling events.",
		icon: "Inwink.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "inwink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.inwink\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "inwink:jsGlobal:1",
				kind: "jsGlobal",
				property: "inwink.absoluteUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "inwink:jsGlobal:2",
				kind: "jsGlobal",
				property: "inwinkEventContainer",
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
		id: "iterable",
		name: "Iterable",
		website: "https://iterable.com/",
		description: "Iterable is a cross-channel marketing platform that powers unified customer experiences.",
		icon: "Iterable.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "iterable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.iterable\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "iterable:jsGlobal:1",
				kind: "jsGlobal",
				property: "iterableAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "iyong",
		name: "Iyong",
		website: "https://m.iyong.com",
		description: "Iyong is an intelligent website designed to simplify internet marketing through streamlined tools and data-driven functionality.",
		icon: "Iyong.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "iyong:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("link\\.iyong\\.com"),
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
		id: "izooto",
		name: "Izooto",
		website: "https://www.izooto.com",
		description: "iZooto is a user engagement and retention tool that leverages web push notifications to help business to drive repeat traffic, leads and sales.",
		icon: "Izooto.png",
		categories: [
			"marketing-automation",
			"widgets-misc",
		],
		rules: [
			{
				id: "izooto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.izooto\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "izooto:jsGlobal:1",
				kind: "jsGlobal",
				property: "Izooto",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "izooto:jsGlobal:2",
				kind: "jsGlobal",
				property: "_izooto",
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
		id: "jabmo",
		name: "Jabmo",
		website: "https://jabmo.com",
		description: "Jabmo is a software platform that automates lead generation by tracking and analyzing website visitor activity.",
		icon: "Jabmo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "jabmo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/jabmo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "juicer",
		name: "Juicer",
		website: "https://www.juicer.io",
		description: "Juicer is a tool that aggregates brand hashtags and social media posts into a unified feed for websites, enabling moderation and content curation.",
		icon: "Juicer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "juicer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.juicer\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "juicer:jsGlobal:1",
				kind: "jsGlobal",
				property: "Juicer.Active",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "juicer:jsGlobal:2",
				kind: "jsGlobal",
				property: "JuicerBackbone.$",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "k50",
		name: "K50",
		website: "https://k50.ru",
		description: "K50 is a platform that automates online advertising and the promotion of products and services across digital channels.",
		icon: "K50.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "k50:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("k50-a\\.akamaihd\\.net\\/k50\\/k50tracker2\\.js"),
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
		id: "kaily-ai",
		name: "Kaily.ai",
		website: "https://www.kaily.ai/",
		description: "Kaily.ai is a conversational AI agent platform that connects to your data, APIs, and business tools to answer queries, execute actions, and automate workflows in real time.",
		icon: "KailyAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kaily-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.copilotadvisor\\.com"),
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
		id: "kamozi",
		name: "Kamozi",
		website: "https://kamozi.io",
		description: "Kamozi is a system designed to support brand growth and increase ecommerce revenue through integrated tools and strategies.",
		icon: "Kamozi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kamozi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trust\\.kamozi\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kamozi:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.kamozi\\.io"),
				description: "Script content contains a bounded technology signature.",
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
		id: "kartra",
		name: "Kartra",
		website: "https://home.kartra.com",
		description: "Kartra is an online business platform that offers marketing and sales tools.",
		icon: "Kartra.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kartra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.kartra\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kartra:dom:1",
				kind: "dom",
				selector: "form[action*='app.kartra.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kartra:jsGlobal:2",
				kind: "jsGlobal",
				property: "init_kartra_tracking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kartra:jsGlobal:3",
				kind: "jsGlobal",
				property: "kartra_tracking_loaded",
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
		id: "kasika",
		name: "Kasika",
		website: "https://cocolive.co.jp/",
		description: "Kasika is a Japanese marketing automation tool developed by CocoLive.",
		icon: "Kasika.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kasika:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panda\\.kasika\\.io\\/"),
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
		id: "keabuilder",
		name: "KeaBuilder",
		website: "https://keabuilder.com",
		description: "KeaBuilder is a platform that provides intelligent insights, strategic recommendations, advanced tools, and seamless integrations to strengthen online presence and support business growth.",
		icon: "KeaBuilder.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "keabuilder:dom:0",
				kind: "dom",
				selector: "link[href*='assets.keabuilder.com']",
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
		id: "keymailer",
		name: "Keymailer",
		website: "https://keymailer.co",
		description: "Keymailer is a game influencer marketing platform that integrates creators, software, and services into one portal.",
		icon: "Keymailer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "keymailer:jsGlobal:0",
				kind: "jsGlobal",
				property: "Keymailer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "keymailer:jsGlobal:1",
				kind: "jsGlobal",
				property: "KeymailerJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "keymailer:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Keymailer$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "keymailer:meta:3",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^keymailer$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "keywee",
		name: "Keywee",
		website: "https://keywee.co",
		description: "Keywee is a platform and managed service designed to support paid media and content distribution operations.",
		icon: "Keywee.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "keywee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.keywee\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kiliba",
		name: "Kiliba",
		website: "https://en.kiliba.com",
		description: "Kiliba has developed a module that automates the marketing process from creating an email to distributing it.",
		icon: "Kiliba.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kiliba:url:0",
				kind: "url",
				pattern: new RegExp("\\/modules\\/kiliba\\/logo\\.png"),
				description: "Page URL matches a known technology marker.",
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
		id: "kit",
		name: "Kit",
		website: "https://kit.com/fanbridge",
		description: "Kit is a platform that provides email, mobile, and social list management tools for organizing, managing, and engaging contact audiences across digital communication channels.",
		icon: "Kit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.fanbridge\\.com\\/"),
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
		id: "kizen",
		name: "Kizen",
		website: "https://kizen.com",
		description: "Kizen is an automation and AI personalization solution designed to simplify and accelerate the adoption of relevant AI technologies in the healthcare, insurance, and financial services industries.",
		icon: "Kizen.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "kizen:dom:0",
				kind: "dom",
				selector: "a[data-kizen-track]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kizen:jsGlobal:1",
				kind: "jsGlobal",
				property: "KIZEN",
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
		id: "klangoo",
		name: "Klangoo",
		website: "https://klangoo.com",
		description: "Klangoo is an AI-based audience engagement solution designed to enhance user interaction and optimise content delivery.",
		icon: "Klangoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "klangoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klangoo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
			],
		},
	},
	{
		id: "klaviyo",
		name: "Klaviyo",
		website: "https://www.klaviyo.com/",
		description: "Klaviyo is an email and SMS marketing platform for online businesses.",
		icon: "Klaviyo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "klaviyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("klaviyo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klaviyo:jsGlobal:1",
				kind: "jsGlobal",
				property: "KlaviyoSubscribe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klaviyo:jsGlobal:2",
				kind: "jsGlobal",
				property: "klaviyo",
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
		id: "klaviyo-data-platform",
		name: "Klaviyo Data Platform",
		website: "https://www.klaviyo.com/solutions/customer-data-platform",
		description: "Klaviyo Data Platform is Klaviyo's CDP offering.",
		icon: "Klaviyo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "klaviyo-data-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static-tracking\\.klaviyo\\.com\\/onsite\\/js\\/web_personalization"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "klickpages",
		name: "KlickPages",
		website: "https://klickpages.com.br",
		description: "KlickPages is a landing page management software designed to help businesses execute email marketing campaigns and capture leads.",
		icon: "KlickPages.svg",
		categories: [
			"marketing-automation",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "klickpages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klickpages\\.com\\.br\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klickpages:jsGlobal:1",
				kind: "jsGlobal",
				property: "klickart.analytics",
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
		id: "klicktipp",
		name: "KlickTipp",
		website: "https://www.klicktipp.com",
		description: "KlickTipp is an email marketing service offering a range of features for businesses, including newsletter creation, SMS functionality, and marketing automation tools.",
		icon: "KlickTipp.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "klicktipp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.klicktipp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klicktipp:dom:1",
				kind: "dom",
				selector: "form[action*='app.klicktipp.com/api']",
				description: "DOM selector matches a known technology marker.",
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
		id: "kliken",
		name: "Kliken",
		website: "https://www.kliken.com/#sitewit",
		description: "Kliken is a shopping and ads marketing platform that helps businesses create, manage, and optimize online advertising campaigns.",
		icon: "Kliken.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kliken:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.sitewit\\.com\\/"),
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
		id: "knock",
		name: "Knock",
		website: "https://www.knockcrm.com",
		description: "Knock is a platform offering insights into marketing, leasing, and renewals for the real estate sector.",
		icon: "Knock.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "knock:jsGlobal:0",
				kind: "jsGlobal",
				property: "knockDoorway",
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
		id: "kochava",
		name: "Kochava",
		website: "https://www.kochava.com",
		description: "Kochava is a unified platform for audience attribution and analytics, enabling accurate measurement and optimization of marketing performance across channels.",
		icon: "Kochava.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kochava:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.kochava\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kommi",
		name: "Kommi",
		website: "https://kommi.io",
		description: "Kommi is a provider of digital marketing services.",
		icon: "Kommi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kommi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracker\\.kommi\\.io\\/"),
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
		id: "kukui",
		name: "KUKUI",
		website: "https://www.kukui.com",
		description: "KUKUI is an all-in-one solution designed to enhance profitability, streamline lead management, and boost customer engagement for shop marketing.",
		icon: "KUKUI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kukui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kukui\\.com\\/"),
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
		id: "kulea-marketing",
		name: "Kulea Marketing",
		website: "https://kulea.ma",
		description: "Kulea Marketing is a provider of inbound marketing and marketing automation software designed to streamline campaign management and customer engagement.",
		icon: "KuleaMarketing.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kulea-marketing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.prod\\.kulea\\.marketing\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kwanko",
		name: "Kwanko",
		website: "https://www.kwanko.com",
		description: "Kwanko is a digital marketing platform.",
		icon: "Kwanko.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kwanko:jsGlobal:0",
				kind: "jsGlobal",
				property: "kwankoDataPTAG.zone",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kwanzoo",
		name: "Kwanzoo",
		website: "https://www.kwanzoo.com",
		description: "Kwanzoo is an AI-powered GTM automation platform that enables adaptive account-based marketing.",
		icon: "Kwanzoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "kwanzoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ads\\.kwanzoo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "lead-concept",
		name: "Lead Concept",
		website: "https://www.lead-concept.com",
		description: "Lead Concept is a system designed to generate potential customer leads.",
		icon: "LeadConcept.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lead-concept:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lead-concept\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "lead-prosper",
		name: "Lead Prosper",
		website: "https://leadprosper.io",
		description: "Lead Prosper is a lead distribution platform that facilitates connections between lead suppliers and lead buyers.",
		icon: "LeadProsper.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lead-prosper:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.leadprosper\\.io"),
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
		id: "leadbyte",
		name: "LeadByte",
		website: "https://www.leadbyte.co.uk",
		description: "LeadByte is a lead management platform that helps businesses capture, validate, and distribute leads in real time to optimize revenue conversion.",
		icon: "LeadByte.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadbyte:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.leadbyte\\.co\\.uk\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leadbyte:dom:1",
				kind: "dom",
				selector: "form[action*='.leadbyte.co.uk/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "leadferno",
		name: "Leadferno",
		website: "https://leadferno.com",
		description: "Leadferno is a conversion platform to increase your website leads.",
		icon: "Leadferno.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadferno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.leadferno\\.com"),
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
		id: "leads2b",
		name: "Leads2b",
		website: "https://leads2b.com",
		description: "Leads2b is a prospecting system that helps identify and access company data from Brazil for sales, marketing, and business development purposes.",
		icon: "Leads2b.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leads2b:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app\\.leads2b\\.com\\/"),
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
		id: "leadsbridge",
		name: "LeadsBridge",
		website: "https://leadsbridge.com",
		description: "LeadsBridge is an all-in-one solution for lead generation.",
		icon: "LeadsBridge.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadsbridge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("leadsbridge\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leadsbridge:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\leadsbridge\\.com\\/"),
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
		id: "leadscore",
		name: "LeadScore",
		website: "https://www.leadscore.io/",
		description: "LeadScore is an inbound marketing automation system facilitating streamlined digital marketing processes.",
		icon: "LeadScore.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadscore:jsGlobal:0",
				kind: "jsGlobal",
				property: "trackLeadScore",
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
		id: "leadsleap",
		name: "LeadsLeap",
		website: "https://leadsleap.com",
		description: "LeadsLeap is a lead generation system designed to collect, manage, and organize potential customer data to support marketing and sales workflows.",
		icon: "LeadsLeap.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadsleap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pjs\\.leadsleap\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "leadslide",
		name: "LeadSlide",
		website: "https://v1.leadslide.com",
		description: "LeadSlide is a marketing campaign software designed for wordpress, ecommerce, and Shopify.",
		icon: "LeadSlide.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadslide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("leadslide\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leadslide:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\leadslide\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "leadspace",
		name: "Leadspace",
		website: "https://www.leadspace.com",
		description: "Leadspace is a customer data platform catering to B2B sales and marketing needs.",
		icon: "Leadspace.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadspace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sfc\\.leadspace\\.com\\/"),
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
		id: "leadsquared",
		name: "Leadsquared",
		website: "https://www.leadsquared.com",
		description: "Leadsquared is a marketing automation software suite.",
		icon: "Leadsquared.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "leadsquared:jsGlobal:0",
				kind: "jsGlobal",
				property: "leadsquared",
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
		id: "leanplum",
		name: "Leanplum",
		website: "https://www.leanplum.com",
		description: "Leanplum is a multi-channel messaging and campaign orchestration platform.",
		icon: "Leanplum.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "leanplum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("npm\\/leanplum-sdk\\@([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "leanplum:jsGlobal:1",
				kind: "jsGlobal",
				property: "Leanplum",
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
		id: "lexer",
		name: "Lexer",
		website: "https://www.lexer.io",
		description: "Lexer is a platform providing AI-powered tools for managing customer data and automating business workflows.",
		icon: "Lexer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lexer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.lexer\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lexer:jsGlobal:1",
				kind: "jsGlobal",
				property: "___lexer_tag",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "linda",
		name: "Linda",
		website: "https://linda.co",
		description: "Linda is a provider of local marketing software designed for businesses to enhance online marketing, generate leads, and increase revenue.",
		icon: "Linda.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "linda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gb-widget\\.linda\\.co"),
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
		id: "line-up",
		name: "Line-Up",
		website: "https://www.line-up.tickets",
		description: "Line-Up is an event discovery service that organizes and presents local activities, shows, and gatherings to help audiences access timely information about upcoming events.",
		icon: "Line-Up.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "line-up:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.lineupnow\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "line-up:jsGlobal:1",
				kind: "jsGlobal",
				property: "LineupPurchaseLoader.baseId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "line-up:jsGlobal:2",
				kind: "jsGlobal",
				property: "LineupSDKLoader.baseId",
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
		id: "linguana",
		name: "Linguana",
		website: "https://www.linguana.io/",
		description: "Linguana is a tool that provides AI-driven multi-language support ensuring SEO performance with translations and translated slugs for seamless multilingual user experiences.",
		icon: "Linguana.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "linguana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.linguana\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "linguana:jsGlobal:1",
				kind: "jsGlobal",
				property: "LINGUANA_MAIN_LANGUAGE_CODE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linguana:jsGlobal:2",
				kind: "jsGlobal",
				property: "LINGUANA_SHOW_LANGUAGE_CODE",
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
		id: "linkfire",
		name: "Linkfire",
		website: "https://www.linkfire.com",
		description: "Linkfire is a smart links tool designed for music marketing.",
		icon: "Linkfire.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "linkfire:jsGlobal:0",
				kind: "jsGlobal",
				property: "linkfire.linkfireUrl",
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
		id: "linkz",
		name: "Linkz",
		website: "https://linkz.ai",
		description: "Linkz is a platform designed to maximize visitor retention by optimizing user engagement and interaction across digital channels.",
		icon: "Linkz.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "linkz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.linkz\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "linkz:jsGlobal:1",
				kind: "jsGlobal",
				property: "LINKZ_AI_ACTIVATED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "linkz:jsGlobal:2",
				kind: "jsGlobal",
				property: "LINKZ_AI_KEY",
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
		id: "listrak",
		name: "Listrak",
		website: "https://www.listrak.com",
		description: "Listrak is an AI-based marketing automation and CRM solutions that unify, interpret and personalize data to engage customer across channels and devices.",
		icon: "Listrak.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "listrak:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|s1)\\.listrakbi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "listrak:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("services\\.listrak\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "listrak:jsGlobal:2",
				kind: "jsGlobal",
				property: "_LTKSignup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "listrak:jsGlobal:3",
				kind: "jsGlobal",
				property: "_LTKSubscriber",
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
		id: "localiq-live-chat",
		name: "LocaliQ Live Chat",
		website: "https://localiq.com",
		description: "LocaliQ Live Chat is a customer support tool that enables real-time responses to questions while capturing essential customer information.",
		icon: "LocaliQ.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "localiq-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reachlocallivechat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "localsignal",
		name: "LocalSignal",
		website: "https://www.localsignal.com",
		description: "LocalSignal is a platform that provides advanced tools for managing and optimizing local marketing activities across digital channels.",
		icon: "LocalSignal.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "localsignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.localsignal\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "lofty",
		name: "Lofty",
		website: "https://lofty.com",
		description: "Lofty is an all-in-one platform for real estate professionals that automates marketing campaigns and facilitates lead capture and conversion.",
		icon: "Lofty.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lofty:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.lofty\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "loops",
		name: "Loops",
		website: "https://loops.so",
		description: "Loops is a platform that simplifies email marketing for SaaS companies, offering campaign creation and tracking.",
		icon: "Loops.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "loops:dom:0",
				kind: "dom",
				selector: "form[action*='app.loops.so/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "lotlinx",
		name: "LotLinx",
		website: "https://lotlinx.com/",
		description: "LotLinx is a provider of digital retailing and marketing technologies for the automotive industry.",
		icon: "LotLinx.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lotlinx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lotlinx\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lotlinx:jsGlobal:1",
				kind: "jsGlobal",
				property: "LXLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lotlinx:jsGlobal:2",
				kind: "jsGlobal",
				property: "LotLinxID",
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
		id: "loyalistic",
		name: "Loyalistic",
		website: "https://loyalistic.com",
		description: "Loyalistic is a marketing automation software designed for small and medium-sized professional teams to showcase their expertise by creating content that helps people to buy.",
		icon: "Loyalistic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "loyalistic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.loyalistic\\.com\\/"),
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
		id: "lunio",
		name: "Lunio",
		website: "https://lunio.ai",
		description: "Lunio is a tool that enhances marketing efficiency by removing invalid traffic from paid marketing channels, enabling advertisers to reach a larger audience within the same budget.",
		icon: "Lunio.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lunio:jsGlobal:0",
				kind: "jsGlobal",
				property: "LunioClientData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lunio:jsGlobal:1",
				kind: "jsGlobal",
				property: "LunioTrackConversion",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lunio:jsGlobal:2",
				kind: "jsGlobal",
				property: "lunioScript",
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
		id: "lytics",
		name: "Lytics",
		website: "https://www.lytics.com",
		description: "Lytics is a customer data platform built for marketing teams.",
		icon: "Lytics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "lytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lytics\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lytics:jsGlobal:1",
				kind: "jsGlobal",
				property: "__lytics__jstag__.version",
				valuePattern: new RegExp("(.+)"),
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
				"high",
				"recurring",
			],
		},
	},
	{
		id: "maatoo",
		name: "Maatoo",
		website: "https://maatoo.io",
		description: "Maatoo is an all-in-one marketing tool designed to streamline campaign management, customer engagement, and analytics in a single platform.",
		icon: "Maatoo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "maatoo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.maatoo\\.io"),
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
		id: "madcap-software",
		name: "MadCap Software",
		website: "https://www.madcapsoftware.com",
		description: "MadCap Software is a company that specialises in creating software tools for technical writers to author and publish various types of content, including user manuals, online help systems, and knowledge bases.",
		icon: "MadCap Software.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "madcap-software:jsGlobal:0",
				kind: "jsGlobal",
				property: "MadCap.Accessibility",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "madcap-software:jsGlobal:1",
				kind: "jsGlobal",
				property: "MadCap.DEBUG",
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
		id: "madkudu",
		name: "MadKudu",
		website: "https://www.madkudu.com",
		description: "MadKudu is a platform that enhances sales and marketing systems by providing actionable predictive analytics, enabling businesses to optimize strategies with data-driven insights.",
		icon: "MadKudu.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "madkudu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.madkudu\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "madkudu:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.madkudu.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maestra",
		name: "Maestra",
		website: "https://maestra.io",
		description: "Maestra is an all-in-one marketing platform designed to support the growth and scaling of brands.",
		icon: "Maestra.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "maestra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.maestra\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maestra:jsGlobal:1",
				kind: "jsGlobal",
				property: "maestra.queue",
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
		id: "magnews",
		name: "Magnews",
		website: "https://www.magnews.it",
		description: "Magnews is an AI-driven marketing platform designed to support omnichannel customer journey management.",
		icon: "Magnews.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "magnews:dom:0",
				kind: "dom",
				selector: "form[action*='.magnews.net/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maguru",
		name: "Maguru",
		website: "https://www.maguru.dk",
		description: "Maguru is a marketing tool designed to help organizations manage and execute promotional activities.",
		icon: "Maguru.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "maguru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("go\\.maguru\\.dk"),
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
		id: "mailchimp",
		name: "MailChimp",
		website: "https://mailchimp.com",
		description: "Mailchimp is a marketing automation platform and email marketing service.",
		icon: "mailchimp.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "mailchimp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s3\\.amazonaws\\.com\\/downloads\\.mailchimp\\.com\\/js\\/mc-validate\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailchimp:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-images\\.mailchimp\\.com\\/[^>]*\\.css"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailchimp:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("chimpstatic\\.com\\/mcjs-connected"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailchimp:html:3",
				kind: "html",
				pattern: new RegExp("<form [^>]*data-mailchimp-url"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mailchimp:html:4",
				kind: "html",
				pattern: new RegExp("<form [^>]*id=\"mc-embedded-subscribe-form\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mailchimp:html:5",
				kind: "html",
				pattern: new RegExp("<form [^>]*name=\"mc-embedded-subscribe-form\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mailchimp:html:6",
				kind: "html",
				pattern: new RegExp("<input [^>]*id=\"mc-email\""),
				confidence: 20,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mailchimp:html:7",
				kind: "html",
				pattern: new RegExp("<!-- Begin MailChimp Signup Form -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mailchimp:dns:8",
				kind: "dns",
				valuePattern: new RegExp("spf\\.mandrillapp\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "mailchimp:url:9",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?mailchi\\.mp"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "mailchimp:dom:10",
				kind: "dom",
				selector: "form#mc-embedded-subscribe-form",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp:dom:11",
				kind: "dom",
				selector: "form[name*='mc-embedded-subscribe-form']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp:dom:12",
				kind: "dom",
				selector: "form[class*='mailchimp-ext-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp:dom:13",
				kind: "dom",
				selector: "input#mc-email",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp:dom:14",
				kind: "dom",
				selector: "form#mc-embedded-subscribe-form, form[name*='mc-embedded-subscribe-form']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp:html:15",
				kind: "html",
				pattern: new RegExp("<!-- begin mailchimp signup form -->"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:thinkshout:mailchimp:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mailerlite",
		name: "MailerLite",
		website: "https://www.mailerlite.com",
		description: "MailerLite is an email marketing tool and website builder for businesses of all shapes and sizes.",
		icon: "MailerLite.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "mailerlite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mailerlite\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailerlite:dom:1",
				kind: "dom",
				selector: "link[href*='.mailerlite.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailerlite:jsGlobal:2",
				kind: "jsGlobal",
				property: "MailerLiteObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "mailocator",
		name: "Mailocator",
		website: "https://mailocator.com",
		description: "Mailocator is a display platform designed to enhance conversions by facilitating lead collection, data gathering, and sales growth.",
		icon: "Mailocator.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mailocator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.mailocator\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "mailocator:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mailocator5",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mailocator:jsGlobal:2",
				kind: "jsGlobal",
				property: "MailocatorTestDisplay",
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
	},
	{
		id: "mailshake",
		name: "Mailshake",
		website: "https://mailshake.com",
		description: "Mailshake is an AI-powered sales engagement and B2B lead management platform for creating, automating, and tracking outreach campaigns.",
		icon: "Mailshake.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mailshake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mailshake\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailshake:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mailshake.clearRecipient",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "majin",
		name: "MAJIN",
		website: "https://ma-jin.jp",
		description: "MAJIN reads the hearts and minds of each customer using real-world data to automate optimal marketing processes.",
		icon: "MAJIN.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "majin:jsGlobal:0",
				kind: "jsGlobal",
				property: "ma.Touch",
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
		id: "manychat",
		name: "ManyChat",
		website: "https://manychat.com/",
		description: "ManyChat is a service that allows you to create chatbots for Facebook Messenger.",
		icon: "ManyChat.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "manychat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.manychat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "manychat:jsGlobal:1",
				kind: "jsGlobal",
				property: "mcwidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "manycontacts",
		name: "ManyContacts",
		website: "https://www.manycontacts.com",
		description: "ManyContacts is an attention-grabbing contact form sitting on top of your website that helps to increase conversion by converting visitors into leads.",
		icon: "ManyContacts.png",
		categories: [
			"marketing-automation",
			"widgets-misc",
		],
		rules: [
			{
				id: "manycontacts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.manycontacts\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "markate",
		name: "Markate",
		website: "https://www.markate.com",
		description: "Markate is an all-in-one CRM and sales and marketing automation platform.",
		icon: "Markate.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "markate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.markate\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "markate:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Markate$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "markate:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^markate$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "markethero",
		name: "MarketHero",
		website: "https://markethero.io",
		description: "Market Hero is a platform that automates ROI calculations for ecommerce businesses, streamlining financial performance tracking and providing data-driven insights.",
		icon: "MarketHero.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "markethero:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("tracking\\.markethero\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "marketify",
		name: "Marketify",
		website: "https://marketify.co",
		description: "Marketify is an app designed to engage audiences, expand email lists, and increase conversion rates.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "marketify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.marketify\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "marketo",
		name: "Marketo",
		website: "https://www.marketo.com",
		description: "Marketo develops and sells marketing automation software for account-based marketing and other marketing services and products including SEO and content creation.",
		icon: "Marketo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "marketo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("munchkin\\.marketo\\.\\w+\\/(?:([\\d.]+)\\/)?munchkin\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "marketo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Munchkin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "marketo:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_mkto_trk$", "i"),
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
		id: "mautic",
		name: "Mautic",
		website: "https://www.mautic.org/",
		description: "Mautic is a free and open-source marketing automation tool for Content Management, Social Media, Email Marketing, and can be used for the integration of social networks, campaign management, forms, questionnaires, reports, etc.",
		icon: "mautic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mautic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[^a-z]mtc.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mautic:jsGlobal:1",
				kind: "jsGlobal",
				property: "MauticTrackingObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mautic:jsGlobal:2",
				kind: "jsGlobal",
				property: "MauticFormValidations",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mautic:jsGlobal:3",
				kind: "jsGlobal",
				property: "MauticSDK",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mautic:mautic:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mavrck",
		name: "Mavrck",
		website: "https://www.mavrck.co",
		description: "Mavrck is an influencer marketing platform that supports creator discovery, campaign management, content workflows, and performance measurement across social media channels.",
		icon: "Mavrck.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mavrck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mavrck\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mavrck:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Mavrck\\.Co", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maxemail",
		name: "Maxemail",
		website: "https://maxemail.xtremepush.com",
		icon: "Maxemail.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "maxemail:jsGlobal:0",
				kind: "jsGlobal",
				property: "Mxm.Basket",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maxemail:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mxm.FormHandler",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maxemail:jsGlobal:2",
				kind: "jsGlobal",
				property: "Mxm.Tracker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "mdirector",
		name: "MDirector",
		website: "https://www.mdirector.com",
		description: "MDirector is an all-in-one digital marketing platform that centralizes email, SMS, and automation tools to manage campaigns and analyze audience engagement.",
		icon: "MDirector.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mdirector:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mdirector-newsletter\\/public\\/js\\/mdirector-newsletter-public\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mdirector:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.mdirector\\.com"),
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
			"wordpress",
		],
	},
	{
		id: "mega",
		name: "Mega",
		website: "https://www.gomega.ai",
		description: "Mega is a platform that applies artificial intelligence to automate and improve search engine optimization processes and paid advertising campaign performance.",
		icon: "Mega.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mega:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gomega\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mega:jsGlobal:1",
				kind: "jsGlobal",
				property: "MegaTag.getAttribution",
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
		id: "mentad",
		name: "Mentad",
		website: "https://www.mentad.com",
		description: "Mentad is a predictive marketing platform to acquire new customers.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mentad:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("mentad_website_id"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "mentad:jsGlobal:1",
				kind: "jsGlobal",
				property: "mentad_website_id",
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
		id: "mention-me",
		name: "Mention Me",
		website: "https://www.mention-me.com",
		description: "Mention Me is a referral marketing platform for conversion-obsessed ecommerce brands.",
		icon: "Mention Me.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mention-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mention-me\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mention-me:jsGlobal:1",
				kind: "jsGlobal",
				property: "MentionMe",
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
		id: "merge",
		name: "Merge",
		website: "https://www.merge.dev",
		description: "Merge is a data infrastructure platform for AI products that enables connection to multiple customer data sources through a single API.",
		icon: "Merge.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "merge:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.merge\\.dev", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "merge:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.merge\\.dev", "i"),
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
		id: "merit",
		name: "Merit",
		website: "https://www.meritpages.com",
		description: "Merit is a platform tailored for higher education marketing.",
		icon: "Merit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "merit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meritpages\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "merit:jsGlobal:1",
				kind: "jsGlobal",
				property: "meritPages",
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
		id: "messagegears",
		name: "MessageGears",
		website: "https://messagegears.com/swrve/",
		description: "MessageGears is a cross-channel messaging platform designed to help businesses deliver communications across multiple channels from a single system.",
		icon: "MessageGears.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "messagegears:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.swrve\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "miappi",
		name: "Miappi",
		website: "https://miappi.com",
		description: "Miappi is a user-generated content platform designed to build trust and boost sales for brands.",
		icon: "Miappi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "miappi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web\\.miappi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "miappi:dom:1",
				kind: "dom",
				selector: "script[data-src*='web.miappi.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "mieruca",
		name: "Mieruca",
		website: "https://mieru-ca.com",
		description: "Mieruca is a Japanese SEO analysis tool designed to measure and improve website visibility through data-driven insights.",
		icon: "Mieruca.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mieruca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hm\\.mieru-ca\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mindbox",
		name: "Mindbox",
		website: "https://mindbox.ru",
		description: "Mindbox is a marketing automation platform.",
		icon: "Mindbox.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mindbox:jsGlobal:0",
				kind: "jsGlobal",
				property: "MindboxEndpointSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mindbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "mindbox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mindbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "mindboxBatchedModulesInitialized",
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
		id: "missionsuite",
		name: "MissionSuite",
		website: "https://www.themissionsuite.com",
		description: "Mission Suite is an all-in-one marketing software solution which combines CRM, email marketing, marketing automation, and inbound marketing tools.",
		icon: "MissionSuite.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "missionsuite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.themissionsuite\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "missionsuite:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.themissionsuite\\.com"),
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
		id: "moast",
		name: "Moast",
		website: "https://www.moast.io",
		description: "Moast is a Shopify app that enables brands to leverage user-generated content for marketing and engagement purposes.",
		icon: "Moast.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "moast:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.moast\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "moast:jsGlobal:1",
				kind: "jsGlobal",
				property: "moast.mapUrl",
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
			"shopify",
		],
	},
	{
		id: "moengage",
		name: "MoEngage",
		website: "https://www.moengage.com",
		description: "MoEngage is an intelligent customer engagement platform for the customer-obsessed marketer.",
		icon: "MoEngage.png",
		categories: [
			"marketing-automation",
			"analytics",
		],
		rules: [
			{
				id: "moengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.moengage\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moengage:jsGlobal:1",
				kind: "jsGlobal",
				property: "MOENGAGE_API_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moengage:jsGlobal:2",
				kind: "jsGlobal",
				property: "Moengage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moengage:jsGlobal:3",
				kind: "jsGlobal",
				property: "downloadMoengage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moengage:jsGlobal:4",
				kind: "jsGlobal",
				property: "moengage_object",
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
		id: "mokini",
		name: "Mokini",
		website: "https://www.mokini.com",
		description: "Mokini is a marketing automation platform designed for ecommerce businesses with customizable templates, user segmentation, and scheduling.",
		icon: "Mokini.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mokini:jsGlobal:0",
				kind: "jsGlobal",
				property: "mokiniSettings",
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
		id: "monetize-pro",
		name: "Monetize Pro",
		website: "https://monetizepro.ai",
		description: "Monetize Pro is a platform that helps users earn money through various monetization strategies for their online content.",
		icon: "MonetizePro.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "monetize-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.monetizepro\\.ai"),
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
		id: "monocle",
		name: "Monocle",
		website: "https://www.usemonocle.com",
		description: "Monocle is an AI-powered platform that optimizes incentives to boost profits while maintaining brand equity and margins.",
		icon: "Monocle.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "monocle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usemonocle\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "monocle:jsGlobal:1",
				kind: "jsGlobal",
				property: "monocle.config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "monocle:jsGlobal:2",
				kind: "jsGlobal",
				property: "monocle_popup_id_variants",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "moosend",
		name: "Moosend",
		website: "https://moosend.com",
		description: "Moosend is a platform that enables management, creation, and distribution of email marketing campaigns.",
		icon: "Moosend.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "moosend:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.moosend\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "mopro",
		name: "Mopro",
		website: "https://www.mopro.com",
		description: "Mopro is a growth platform designed to help small businesses improve their online presence and streamline digital operations.",
		icon: "Mopro.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mopro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mopro\\.com\\/"),
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
		id: "movylo",
		name: "Movylo",
		website: "https://www.movylo.com",
		description: "Movylo is an AI-driven platform that automates customer engagement across websites and social media to drive sales.",
		icon: "Movylo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "movylo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.movylo\\.com\\/"),
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
		id: "mparticle",
		name: "mParticle",
		website: "https://www.mparticle.com",
		description: "mParticle is a mobile-focused event tracking and data ingestion tool.",
		icon: "mParticle.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "mparticle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mparticle\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mparticle:jsGlobal:1",
				kind: "jsGlobal",
				property: "mParticle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mparticle:jsGlobal:2",
				kind: "jsGlobal",
				property: "mParticle.config.snippetVersion",
				valuePattern: new RegExp("(.+)"),
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
		id: "myesalon",
		name: "MyEsalon",
		website: "https://myesalon.com",
		description: "MyEsalon is a platform that provides marketing solutions for nail salons, beauty salons, hair salons, and spas, helping businesses enhance visibility and attract clients.",
		icon: "MyEsalon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "myesalon:header:0",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("myesalon\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "myesalon:header:1",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("myesalon\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "najva",
		name: "Najva",
		website: "https://www.najva.com",
		description: "Najva is a retention marketing solution that offers push notification and email marketing.",
		icon: "Najva.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "najva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.najva\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "najva:jsGlobal:1",
				kind: "jsGlobal",
				property: "Najva.identifyEmailSubscriber",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
			],
		},
	},
	{
		id: "natural-intelligence",
		name: "Natural Intelligence",
		website: "https://www.naturalint.com/",
		description: "Natural Intelligence is a platform facilitating product discovery.",
		icon: "NaturalIntelligence.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "natural-intelligence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.naturalint\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "natural-intelligence:jsGlobal:1",
				kind: "jsGlobal",
				property: "naturalint_tag",
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
		id: "net-results",
		name: "NET-RESULTS",
		website: "https://www.net-results.com",
		description: "NET-RESULTS is a marketing automation platform for the data-driven marketer.",
		icon: "NET-RESULTS.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "net-results:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.net-results\\.io\\/"),
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
		id: "netcore-cloud",
		name: "Netcore Cloud",
		website: "https://netcorecloud.com",
		description: "Netcore Cloud is a globally recognised marketing technology SaaS company.",
		icon: "Netcore Cloud.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "netcore-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.netcoresmartech\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "netdeal",
		name: "Netdeal",
		website: "https://www.netdeal.com.br",
		description: "Netdeal is a marketing automation platform.",
		icon: "Netdeal.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "netdeal:jsGlobal:0",
				kind: "jsGlobal",
				property: "NetdealBuildNumber",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "netdeal:jsGlobal:1",
				kind: "jsGlobal",
				property: "NetdealJs.paywall",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "netdeal:jsGlobal:2",
				kind: "jsGlobal",
				property: "netdealStartSession",
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
		id: "nexxtmove",
		name: "Nexxtmove",
		website: "https://nexxtmove.nl",
		description: "Nexxtmove is a marketing platform for real estate agencies that provides targeted, personalized communication tools designed to reach the appropriate audience and support improved campaign outcomes.",
		icon: "Nexxtmove.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nexxtmove:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("nexxtmove-313510\\.web\\.app"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "niice",
		name: "Niice",
		website: "https://www.niice.nl",
		description: "Niice is a Dutch marketing automation platform that streamlines campaign management, customer engagement, and data-driven communication processes.",
		icon: "Niice.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "niice:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("niice\\.nl"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "nosto-visual-ugc",
		name: "Nosto Visual UGC",
		website: "https://www.nosto.com/products/visual-ugc/",
		description: "Nosto Visual UGC (Earlier known as Stackla) is a cloud-based content marketing platform that helps discover, curate, display and engage with user-generated content across all digital marketing platforms.",
		icon: "Nosto.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nosto-visual-ugc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stackla\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nosto-visual-ugc:jsGlobal:1",
				kind: "jsGlobal",
				property: "Stackla",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nosto-visual-ugc:jsGlobal:2",
				kind: "jsGlobal",
				property: "stacklaWidgetJsonp",
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
		id: "notifly",
		name: "Notifly",
		website: "https://notifly.tech",
		description: "Notifly is a marketing automation tool designed to streamline the process of running multi-channel campaigns.",
		icon: "Notifly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "notifly:jsGlobal:0",
				kind: "jsGlobal",
				property: "NotiflyWebMessageRenderer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "notifly:jsGlobal:1",
				kind: "jsGlobal",
				property: "__notiflyCafe24Config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "notifly:jsGlobal:2",
				kind: "jsGlobal",
				property: "notifly",
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
		id: "nowfloats",
		name: "Nowfloats",
		website: "https://www.nowfloats.com",
		description: "Nowfloats is a location-based platform that automates SEO for business websites.",
		icon: "Nowfloats.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nowfloats:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("NOWFLOATS_POSITION"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "nowfloats:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("nowfloats_position"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "nudgify",
		name: "Nudgify",
		website: "https://www.nudgify.com",
		description: "Nudgify is a Social Proof & Fomo App tool that integrates seamlessly with ecommerce platform such as Shopify, WooCommerce and Magento.",
		icon: "Nudgify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nudgify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nudgify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nudgify:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.convertize\\.com\\/nudgify-shopify\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nudgify:jsGlobal:2",
				kind: "jsGlobal",
				property: "nudgify.cart",
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
		id: "nurture",
		name: "Nurture",
		website: "https://www.nurturehq.com",
		description: "Nurture is an all-in-one marketing automation software designed to streamline campaign management, lead tracking, and customer engagement in a single platform.",
		icon: "Nurture.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nurture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("nurtureapi\\.nurturehq\\.com"),
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
		id: "nurture-boss",
		name: "Nurture Boss",
		website: "https://nurtureboss.io",
		description: "Nurture Boss is an AI platform for engaging with prospects and residents, automating the leasing process from lead to renewal.",
		icon: "NurtureBoss.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "nurture-boss:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.nurtureboss\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "octipulse",
		name: "Octipulse",
		website: "https://www.octipulse.com",
		description: "Octipulse is a platform that helps businesses manage and publish tailored content across digital platforms, enabling them to create a personalised cross-channel experience.",
		icon: "Octipulse.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "octipulse:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^OCTIPULSE$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "octipulse:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^octipulse$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "oddcast",
		name: "Oddcast",
		website: "https://oddcast.com",
		description: "Oddcast is a platform that develops customized video and avatar-based marketing products tailored for small and medium-sized businesses and consumers.",
		icon: "Oddcast.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "oddcast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.oddcast\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oddcast:jsGlobal:1",
				kind: "jsGlobal",
				property: "ODDCAST_HTTP_SERVER",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oddcast:jsGlobal:2",
				kind: "jsGlobal",
				property: "OddcastDomain",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "olapic",
		name: "Olapic",
		website: "https://www.olapic.com",
		description: "Olapic is a content marketing tool specifically focused on visual marketing content.",
		icon: "Olapic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "olapic:jsGlobal:0",
				kind: "jsGlobal",
				property: "olapic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "olapic:jsGlobal:1",
				kind: "jsGlobal",
				property: "olapic.version",
				valuePattern: new RegExp("^v([\\d\\.]+)$"),
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
				"high",
				"poa",
			],
		},
	},
	{
		id: "omacro",
		name: "Omacro",
		website: "https://omacro.com",
		description: "Omacro is a platform focused on enhancing digital engagement by facilitating connections and increasing conversion rates.",
		icon: "Omacro.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "omacro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("buynow\\.omacro\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "omacro:jsGlobal:1",
				kind: "jsGlobal",
				property: "omacro.buynow",
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
		id: "ometria",
		name: "Ometria",
		website: "https://ometria.com",
		description: "Ometria is a customer insight and marketing automation platform.",
		icon: "Ometria.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ometria:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ometria\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ometria:dom:1",
				kind: "dom",
				selector: "form[action*='api.ometria.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ometria:jsGlobal:2",
				kind: "jsGlobal",
				property: "AddOmetriaBasket",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ometria:jsGlobal:3",
				kind: "jsGlobal",
				property: "AddOmetriaIdentify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ometria:jsGlobal:4",
				kind: "jsGlobal",
				property: "ometria",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ometria:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^ometria$", "i"),
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
		id: "omnikick",
		name: "Omnikick",
		website: "https://www.omnikick.com",
		description: "Omnikick is a platform designed to help businesses engage, convert, and grow their customer base through targeted digital marketing strategies.",
		icon: "Omnikick.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "omnikick:jsGlobal:0",
				kind: "jsGlobal",
				property: "omniKick.ready",
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
		id: "omnisend",
		name: "Omnisend",
		website: "https://www.omnisend.com",
		description: "Omnisend is an ecommerce marketing automation platform that provides an omnichannel marketing strategy for businesses.",
		icon: "Omnisend.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "omnisend:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("omnisrc\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "omnisend:jsGlobal:1",
				kind: "jsGlobal",
				property: "_omnisend",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "omnisend:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^omnisendSessionID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "omnisend:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^omnisendsessionid$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "on-the-map",
		name: "On The Map",
		website: "https://www.onthemap.com",
		description: "On The Map is a local business marketing system designed to help companies enhance visibility, manage online presence, and attract nearby customers through targeted digital strategies and data-driven tools.",
		icon: "OnTheMap.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "on-the-map:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.onthemapmarketing\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "onesignal",
		name: "OneSignal",
		website: "https://onesignal.com",
		description: "OneSignal is a customer engagement messaging solution.",
		icon: "OneSignal.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "onesignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.onesignal\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onesignal:jsGlobal:1",
				kind: "jsGlobal",
				property: "OneSignal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "onesignal:jsGlobal:2",
				kind: "jsGlobal",
				property: "__oneSignalSdkLoadCount",
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
		id: "online-succes",
		name: "Online Succes",
		website: "https://www.onlinesucces.nl",
		description: "Online Succes is a Netherlands-based platform offering marketing automation and website visitor tracking.",
		icon: "OnlineSucces.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "online-succes:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("connect\\.onlinesucces\\.nl"),
				description: "Script content contains a bounded technology signature.",
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
		id: "opesta",
		name: "Opesta",
		website: "https://opesta.com",
		description: "Opesta is a marketing automation platform for Facebook Messenger.",
		icon: "Opesta.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "opesta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.opesta\\.com"),
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
		id: "ops-calendar",
		name: "Ops Calendar",
		website: "https://opscalendar.com",
		description: "Ops Calendar is a marketing calendar to manage content marketing, social media, and more.",
		icon: "OpsCalendar.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ops-calendar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.opscalendar\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "optimove",
		name: "Optimove",
		website: "https://www.optimove.com",
		description: "Optimove is a relationship marketing hub powered by a combination of advanced customer modeling, predictive micro-segmentation and campaign automation technologies.",
		icon: "Optimove.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "optimove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.optimove\\.net\\/.+v([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optimove:jsGlobal:1",
				kind: "jsGlobal",
				property: "optimoveSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "optimove:jsGlobal:2",
				kind: "jsGlobal",
				property: "optimoveSDKVersion",
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
				"high",
				"recurring",
			],
		},
	},
	{
		id: "optinmonster",
		name: "OptinMonster",
		website: "https://optinmonster.com",
		description: "OptinMonster is a conversion optimisation tool that allows you to grow your email list.",
		icon: "OptinMonster.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "optinmonster:jsGlobal:0",
				kind: "jsGlobal",
				property: "OptinMonsterApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "optinopoli",
		name: "Optinopoli",
		website: "https://www.optinopoli.com",
		description: "Optinopoli is a next-generation lead capture and sales conversion technology designed to collect, manage, and convert prospective customer information across digital touchpoints.",
		icon: "Optinopoli.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "optinopoli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.optinopoli\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optinopoli:jsGlobal:1",
				kind: "jsGlobal",
				property: "optinopoli",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "optkit",
		name: "OptKit",
		website: "https://optkit.com",
		description: "OptKit is a platform that delivers real-time, behavior-triggered calls to action based on user interactions and events across digital properties.",
		icon: "OptKit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "optkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.optkit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "orimon-ai",
		name: "Orimon.ai",
		website: "https://orimon.ai",
		description: "Orimon.ai is a platform that helps generate leads, automate customer support, and drive sales through AI-powered solutions.",
		icon: "Orimon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "orimon-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bot\\.orimon\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "orimon-ai:dom:1",
				kind: "dom",
				selector: "iframe[src*='bot.orimon.ai/']",
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
		id: "ortto",
		name: "Ortto",
		website: "https://ortto.com",
		description: "Ortto is a marketing automation and customer data platform that integrates your data, messaging, and analytics into one unified system.",
		icon: "Ortto.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ortto:jsGlobal:0",
				kind: "jsGlobal",
				property: "AP3_WIDGETS_PREFIX",
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
		id: "ottertext",
		name: "OtterText",
		website: "https://ottertext.com",
		description: "OtterText is a platform offering SMS marketing and automation solutions designed to enhance communication and streamline marketing campaigns.",
		icon: "OtterText.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ottertext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ottertext\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ottertext:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^otter_text_session$", "i"),
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
	},
	{
		id: "outfunnel",
		name: "Outfunnel",
		website: "https://outfunnel.com",
		description: "Outfunnel is a platform that connects sales and marketing data to streamline workflows and improve data alignment across tools.",
		icon: "Outfunnel.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "outfunnel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.outfunnel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outfunnel:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.outfunnel\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "outplay",
		name: "Outplay",
		website: "https://outplay.ai",
		description: "Outplay is a sales engagement platform that uses AI to optimize interactions and support fast-scaling small and medium-sized businesses.",
		icon: "Outplay.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "outplay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.outplayhq\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outplay:jsGlobal:1",
				kind: "jsGlobal",
				property: "outplayhq",
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
		id: "overloop",
		name: "Overloop",
		website: "https://overloop.com",
		description: "Overloop is an AI-powered sales prospecting platform that automates lead generation, outreach, and engagement to optimize customer acquisition and conversion.",
		icon: "Overloop.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "overloop:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.overloop\\.com"),
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
		id: "package-ai",
		name: "Package.AI",
		website: "https://package.ai",
		description: "Package. AI is a unified platform for last-mile and customer engagement, leveraging AI to enhance service delivery.",
		icon: "PackageAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "package-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.package\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pagelines",
		name: "PageLines",
		website: "https://www.pagelines.com",
		description: "PageLines is a platform that provides AI assistants designed to support revenue teams by automating tasks, analyzing data, and improving efficiency across sales and revenue-related workflows.",
		icon: "PageLines.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pagelines:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/pagelines\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
			cpe: "cpe:2.3:a:pagelines:pagelines:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "papirfly",
		name: "Papirfly",
		website: "https://www.papirfly.com",
		description: "Papirfly is an all-in-one brand management platform.",
		icon: "Papirfly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "papirfly:dom:0",
				kind: "dom",
				selector: "link[href*='/papirfly-base.min.css?']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "papirfly:jsGlobal:1",
				kind: "jsGlobal",
				property: "Papirfly",
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
		id: "passle",
		name: "Passle",
		website: "https://home.passle.net",
		description: "Passle is a digital marketing platform designed to help professionals create and share expert-led content.",
		icon: "Passle.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "passle:jsGlobal:0",
				kind: "jsGlobal",
				property: "Passel.API",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passle:jsGlobal:1",
				kind: "jsGlobal",
				property: "PassleEnvironmentConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passle:jsGlobal:2",
				kind: "jsGlobal",
				property: "PassleEvents",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "passle:jsGlobal:3",
				kind: "jsGlobal",
				property: "PassleFunctions",
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
		id: "pathfactory",
		name: "PathFactory",
		website: "https://www.pathfactory.com",
		description: "PathFactory is a platform utilizing AI to align content with revenue generation.",
		icon: "PathFactory.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pathfactory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-app\\.pathfactory\\.com"),
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
		id: "peachs",
		name: "Peachs",
		website: "https://peachs.co",
		description: "Peachs is a Squarespace ecommerce word-of-mouth marketing system designed to promote products through customer referrals and social sharing.",
		icon: "Peachs.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "peachs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/peachs\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "peachs:jsGlobal:1",
				kind: "jsGlobal",
				property: "PEACHS_AFFILIATE_STARTED_PROGRAMS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "peachs:jsGlobal:2",
				kind: "jsGlobal",
				property: "PEACHS_SQUARESPACE_STARTED",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "persona-ly",
		name: "Persona.ly",
		website: "https://persona.ly",
		description: "Persona.ly is a data-driven platform that helps businesses acquire users through analytics and targeted strategies.",
		icon: "Persona.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "persona-ly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.persona\\.ly"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "phonexa",
		name: "Phonexa",
		website: "https://phonexa.com",
		description: "Phonexa is a platform that helps optimise web lead, call lead, and email marketing campaigns.",
		icon: "Phonexa.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "phonexa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.phonexa\\.com\\/"),
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
		id: "photoslurp",
		name: "Photoslurp",
		website: "https://hi.photoslurp.com",
		description: "Photoslurp is a visual commerce platform that collects photos and videos of customers using your products from across social networks.",
		icon: "Photoslurp.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "photoslurp:jsGlobal:0",
				kind: "jsGlobal",
				property: "Photoslurp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "photoslurp:jsGlobal:1",
				kind: "jsGlobal",
				property: "photoSlurpWidgetSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "photoslurp:jsGlobal:2",
				kind: "jsGlobal",
				property: "photoslurp_script",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "photoslurp:jsGlobal:3",
				kind: "jsGlobal",
				property: "photoslurp_wdgts",
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
		id: "piads",
		name: "PiAds",
		website: "https://piads.vn",
		description: "PiAds is a marketing system designed to enhance the efficiency of advertising campaigns through targeted strategies and data-driven insights.",
		icon: "PiAds.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "piads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.piads\\.vn\\/"),
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
		id: "pimster",
		name: "Pimster",
		website: "https://pimster.app",
		description: "Pimster is a platform that enables the creation and distribution of interactive, shoppable web stories across websites, email campaigns, and QR codes.",
		icon: "Pimster.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pimster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pimster\\.app"),
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
		id: "pinpoll",
		name: "Pinpoll",
		website: "https://www.pinpoll.com",
		description: "Pinpoll is a tool that collects contact data from users for analytics, marketing, or customer engagement purposes.",
		icon: "Pinpoll.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pinpoll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pinpoll\\.com"),
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
		id: "pixel-motion",
		name: "Pixel Motion",
		website: "https://www.pixelmotion.com",
		description: "Pixel Motion is a provider of automotive digital marketing solutions.",
		icon: "PixelMotion.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pixel-motion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/pm-motors-plugin\\/modules\\/datalayer\\/\\/js\\/pixelmotion\\.js\\?ver=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pixel-motion:dom:1",
				kind: "dom",
				selector: "script#pixelmotion-js",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pixel-motion:jsGlobal:2",
				kind: "jsGlobal",
				property: "pm_api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixel-motion:jsGlobal:3",
				kind: "jsGlobal",
				property: "pm_datalayer_config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixel-motion:jsGlobal:4",
				kind: "jsGlobal",
				property: "pm_datalayer_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixel-motion:jsGlobal:5",
				kind: "jsGlobal",
				property: "pm_datalayer_props",
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
		id: "pixlee-turnto",
		name: "Pixlee TurnTo",
		website: "https://pixlee.com",
		description: "Pixlee TurnTo is a social UGC, ratings and reviews, and influencer marketing platform for community-driven brands.",
		icon: "Pixelee TurnTo.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pixlee-turnto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.pixlee\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pixlee-turnto:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pixlee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixlee-turnto:jsGlobal:2",
				kind: "jsGlobal",
				property: "Pixlee_Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixlee-turnto:jsGlobal:3",
				kind: "jsGlobal",
				property: "TurnTo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixlee-turnto:jsGlobal:4",
				kind: "jsGlobal",
				property: "turnToConfig",
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
		id: "placester",
		name: "Placester",
		website: "https://placester.com",
		description: "Placester is an all-in-one digital marketing platform designed for real estate professionals to manage websites, lead generation, and online branding.",
		icon: "Placester.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "placester:jsGlobal:0",
				kind: "jsGlobal",
				property: "_placester.entitlements",
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
		id: "platformly",
		name: "Platformly",
		website: "https://www.platformly.com",
		description: "Platformly is a tool that provides intelligent marketing automation for online businesses.",
		icon: "Platformly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "platformly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.platform\\.ly\\/"),
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
		id: "plezi",
		name: "Plezi",
		website: "https://www.plezi.co",
		description: "Plezi is a marketing automation tool.",
		icon: "Plezi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "plezi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.plezi\\.co"),
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
		id: "plices",
		name: "Plices",
		website: "https://plices.com",
		description: "Plices is a platform for marketing and sales automation that supports the planning, execution, measurement, and optimization of strategies.",
		icon: "Plices.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "plices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.plices\\.com"),
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
		id: "pliek",
		name: "Pliek",
		website: "https://pliek.io",
		description: "Pliek is a system that provides live sales notifications, enabling real-time updates on purchase activities.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pliek:jsGlobal:0",
				kind: "jsGlobal",
				property: "pliekConfig.key",
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
		id: "plusthis",
		name: "PlusThis",
		website: "https://www.plusthis.com",
		description: "PlusThis is a campaign toolkit for marketing automation that offers tools to streamline, integrate, and enhance marketing workflows.",
		icon: "PlusThis.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "plusthis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.plusthis\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plusthis:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.plusthis\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "pocus",
		name: "Pocus",
		website: "https://www.pocus.com",
		description: "Pocus is a platform that uses AI agents to monitor B2B accounts and identify real sales opportunities at critical moments.",
		icon: "Pocus.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pocus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/pocustrack\\.com\\/pocus\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "popify",
		name: "Popify",
		website: "https://popify.app",
		description: "Popify is a sales push notification system designed to deliver real-time alerts that drive engagement and conversions.",
		icon: "Popify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "popify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.popify\\.app"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "popify:jsGlobal:1",
				kind: "jsGlobal",
				property: "PopifyLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "popify:jsGlobal:2",
				kind: "jsGlobal",
				property: "PopifyNotifications",
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
		id: "poppins",
		name: "Poppins",
		website: "https://poppins.so",
		description: "Poppins is a tool that enables notifications on websites, ranging from video alerts to informational popups.",
		icon: "Poppins.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "poppins:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/poppins\\.so\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "popsixle",
		name: "Popsixle",
		website: "https://popsixle.com",
		description: "Popsixle is a server-side tracking and attribution solution designed to help ecommerce brands capture and send accurate conversion data to ad platforms.",
		icon: "Popsixle.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "popsixle:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/popsixle\\.php"),
				description: "Script content contains a bounded technology signature.",
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
		id: "poptin",
		name: "Poptin",
		website: "https://www.poptin.com",
		description: "Poptin is a platform designed to engage visitors and coverts them into leads, subscribers and sales.",
		icon: "Poptin.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "poptin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.popt\\.in\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "poptin:jsGlobal:1",
				kind: "jsGlobal",
				property: "poptinAfterPageLoad",
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
		id: "post-dolphin",
		name: "Post Dolphin",
		website: "https://metashop.dolphinsuite.com",
		description: "Post Dolphin is a social media management platform that plans, schedules, automates, and synchronizes social content across multiple channels.",
		icon: "PostDolphin.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "post-dolphin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metashop\\.dolphinsuite\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "post-dolphin:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("metashop\\.dolphinsuite\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "postano",
		name: "Postano",
		website: "https://www.postano.com",
		description: "Postano is a social content management platform that aggregates, curates, and displays user-generated content across digital channels.",
		icon: "Postano.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "postano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.postano\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "postie",
		name: "Postie",
		website: "https://postie.com",
		description: "Postie is an all-in-one platform facilitating audience building, A/B testing, and campaign deployment.",
		icon: "Postie.svg",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "postie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.postie\\.com\\/"),
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
		id: "postscript",
		name: "Postscript",
		website: "https://www.postscript.io",
		description: "Postscript is an SMS and MMS marketing platform for Shopify stores.",
		icon: "Postscript.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "postscript:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.postscript\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "postscript:jsGlobal:1",
				kind: "jsGlobal",
				property: "Postscript.isSubscriberInputChecked",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "postscript:jsGlobal:2",
				kind: "jsGlobal",
				property: "postscript.getSubscriberId",
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
		id: "pricespider",
		name: "PriceSpider",
		website: "https://www.pricespider.com",
		description: "PriceSpider is an advanced retail data technology company that provides insights about consumer purchasing behavior.",
		icon: "PriceSpider.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pricespider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pricespider\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pricespider:jsGlobal:1",
				kind: "jsGlobal",
				property: "PriceSpider.version",
				valuePattern: new RegExp("(.+)"),
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
		id: "privy",
		name: "Privy",
		website: "https://www.privy.com",
		description: "Privy is a all-in-one marketing automation platform for ecommerce.",
		icon: "Privy.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "privy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "privy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Privy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "privy:jsGlobal:2",
				kind: "jsGlobal",
				property: "PrivyWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "privy:jsGlobal:3",
				kind: "jsGlobal",
				property: "privySettings",
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
		id: "probance",
		name: "Probance",
		website: "https://probance.com",
		description: "Probance is a marketing platform solution that helps businesses manage, track, and analyze marketing activities.",
		icon: "Probance.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "probance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.my-probance\\.one\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "profit-lifter",
		name: "Profit Lifter",
		website: "https://profitlifter.com",
		description: "Profit Lifter is an AI-powered platform enabling automated website creation, sales funnels, and email campaigns designed to attract and convert leads into sales.",
		icon: "ProfitLifter.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "profit-lifter:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.profitlifter\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "profitflo",
		name: "ProfitFlo",
		website: "https://profitflo.io",
		description: "ProfitFlo is a platform that automates revenue generation by providing tools to attract and convert customers.",
		icon: "ProfitFlo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "profitflo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.profitflo\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "profitflo:dom:1",
				kind: "dom",
				selector: "chat-widget[agency-website*='profitflo.io']",
				description: "DOM selector matches a known technology marker.",
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
		id: "profity",
		name: "Profity",
		website: "https://www.profity.online",
		description: "Profity is a network of ecommerce companies that enables partner shops to market their offers to customers after a sale in any shop, enhancing mutual benefits and sales opportunities.",
		icon: "Profity.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "profity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.profity\\.ch\\/"),
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
		id: "progreda",
		name: "Progreda",
		website: "https://progreda.com",
		description: "Progreda is a platform that automates sales conversations via text, Instagram, and Facebook Messenger to generate leads, schedule appointments, and drive revenue growth.",
		icon: "Progreda.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "progreda:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.progreda\\.com"),
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
		id: "promio",
		name: "Promio",
		website: "https://www.promio.com",
		description: "Promio is a platform that provides marketing solutions for businesses and franchises, enhancing visibility and customer engagement.",
		icon: "Promio.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "promio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.promio\\.com\\/"),
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
		requires: [
			"jquery",
		],
	},
	{
		id: "promo-ai",
		name: "Promo AI",
		website: "https://promo.com",
		description: "Promo AI is a tool that generates, schedules, and publishes professional videos across platforms, designed to support business marketing efforts.",
		icon: "Promo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "promo-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ak04-promo-cdn\\.slidely\\.com"),
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
		id: "proofdy",
		name: "Proofdy",
		website: "https://proofdy.ru",
		description: "Proofdy is a tool that displays social proof popups on websites to build visitor trust, enhance credibility, and support conversion efforts.",
		icon: "Proofdy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "proofdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.proofdy\\.ru"),
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
	},
	{
		id: "pushalert",
		name: "PushAlert",
		website: "https://pushalert.co",
		description: "PushAlert is a multi-channel platform that offers push notifications and onsite messaging to enhance customer engagement.",
		icon: "PushAlert.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushalert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushalert\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushalert:jsGlobal:1",
				kind: "jsGlobal",
				property: "pushalert_manifest_file",
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
		id: "pushbots",
		name: "PushBots",
		website: "https://pushbots.com",
		description: "PushBots is a messaging platform that enables businesses to send and manage push notifications, in-app messages, and polls across mobile and desktop devices.",
		icon: "PushBots.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushbots:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushbots\\.com"),
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
		id: "pushe",
		name: "Pushe",
		website: "https://pushe.co",
		description: "Pushe is a push notification system designed for real-time message delivery and user engagement across web and mobile platforms.",
		icon: "Pushe.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.pushe\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushe:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pushe.EVENTS",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pushengage",
		name: "PushEngage",
		website: "https://www.pushengage.com",
		description: "PushEngage is a browser push notification platform that helps content website managers engage visitors by automatically segmenting and sending web push messages.",
		icon: "PushEngage.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clientcdn\\.pushengage\\.\\w+\\/core"),
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
	},
	{
		id: "pushify",
		name: "Pushify",
		website: "https://pushify.com",
		description: "Pushify is a service that delivers push notifications for major desktop and mobile browsers.",
		icon: "Pushify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pushify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "pushnami",
		name: "Pushnami",
		website: "https://pushnami.com",
		description: "Pushnami is an AI-powered messaging platform that uses intelligent analytics to deliver superior push, social, and email performance.",
		icon: "Pushnami.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushnami:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.pushnami\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "pushnews",
		name: "Pushnews",
		website: "https://pushnews.com.br",
		description: "Pushnews is a web push notification and marketing platform that enables websites to send targeted browser notifications to subscribers for communication, engagement, and promotional campaigns.",
		icon: "Pushnews.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushnews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pushnewsbr\\.pushnews"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushnews:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadPushNewsFile",
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
		id: "pushouse",
		name: "Pushouse",
		website: "https://www.pushouse.com",
		description: "Pushouse is a platform that provides solutions to enhance sales in ecommerce through data-driven strategies and automation.",
		icon: "Pushouse.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushouse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dev\\.pushouse\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pushowl",
		name: "PushOwl",
		website: "https://pushowl.com",
		description: "PushOwl is a push notification platform for ecommerce stores.",
		icon: "PushOwl.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushowl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushowl\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushowl:jsGlobal:1",
				kind: "jsGlobal",
				property: "pushowl",
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
		id: "pushpad",
		name: "Pushpad",
		website: "https://pushpad.xyz",
		description: "Pushpad is a reliable service for sending notifications from websites and web applications.",
		icon: "Pushpad.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushpad:jsGlobal:0",
				kind: "jsGlobal",
				property: "pushpad",
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
		id: "pushpushgo",
		name: "PushPushGo",
		website: "https://pushpushgo.com",
		description: "PushPushGo is a GDPR-ready platform which enables startups, SMBs and corporations to create and send automatic web push notification campaigns on desktop and via mobile to manage various scenarios including abandoned carts, segmentation, cross-selling, customer engagement, and return rates.",
		icon: "PushPushGo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "pushpushgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pushpushgo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushpushgo:dom:1",
				kind: "dom",
				selector: "link[href*='.pushpushgo.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "quizitri",
		name: "Quizitri",
		website: "https://www.quizitri.com",
		description: "Quizitri is a tool for creating unlimited quizzes aimed at increasing conversions, website traffic, lead generation, and sales.",
		icon: "Quizitri.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "quizitri:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.quizitri\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "quizitri:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.quizitri\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "raaft",
		name: "Raaft",
		website: "https://raaft.io",
		description: "Raaft is a tool designed to help SaaS companies lower customer churn and gather feedback from users who choose to cancel their subscriptions.",
		icon: "Raaft.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "raaft:jsGlobal:0",
				kind: "jsGlobal",
				property: "RAAFT_APP_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raaft:jsGlobal:1",
				kind: "jsGlobal",
				property: "raaft",
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
		id: "ramper",
		name: "Ramper",
		website: "https://ramper.com.br",
		description: "Ramper is a B2B marketing and sales platform designed to streamline business operations.",
		icon: "Ramper.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ramper:jsGlobal:0",
				kind: "jsGlobal",
				property: "LaharApp.criacao_elementos",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ramper:jsGlobal:1",
				kind: "jsGlobal",
				property: "PopupLahar.create",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ramper:jsGlobal:2",
				kind: "jsGlobal",
				property: "SourceLahar.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ramper:jsGlobal:3",
				kind: "jsGlobal",
				property: "TrackingLahar.create",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rd-station",
		name: "RD Station",
		website: "https://rdstation.com.br",
		description: "RD Station is a platform that helps medium and small businesses manage and automate their Digital Marketing strategy.",
		icon: "RD Station.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rd-station:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("d335luupugsy2\\.cloudfront\\.net\\/js\\/loader-scripts\\/.*-loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rd-station:jsGlobal:1",
				kind: "jsGlobal",
				property: "RDStation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rd-station:jsGlobal:2",
				kind: "jsGlobal",
				property: "RDStationTrackingCodeChecker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "re-guest",
		name: "RE:Guest",
		website: "https://www.reguest.io",
		description: "Re:Guest is a digital room seller that helps hoteliers increase their online visibility and reach more guests.",
		icon: "REGuest.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "re-guest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reguest-hub-api\\.reguest\\.io"),
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
		id: "readyplanet",
		name: "ReadyPlanet",
		website: "https://www.readyplanet.com",
		description: "ReadyPlanet is a marketing platform from Thailand, offering various widgets to support businesses in their online marketing efforts.",
		icon: "ReadyPlanet.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "readyplanet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.readyplanet\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "readyplanet:dom:1",
				kind: "dom",
				selector: "link[href*='rwidget.readyplanet.com']",
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
		id: "realist",
		name: "Realist",
		website: "https://www.realist.gen.tr",
		description: "Realist is a website tracker and link exchange platform designed to monitor site activity and facilitate reciprocal linking between domains.",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "realist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.realist\\.gen\\.tr"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "redrive",
		name: "Redrive",
		website: "https://redrive.com.br",
		description: "Redrive is a sales platform for WhatsApp that provides automation tools to help companies increase sales through the messaging app.",
		icon: "Redrive.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "redrive:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.redrive\\.com\\.br"),
				description: "Script content contains a bounded technology signature.",
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
		id: "refericon",
		name: "Refericon",
		website: "https://refericon.pl/",
		description: "Refericon is a tool that enhances conversion and sales by using referral marketing.",
		icon: "Refericon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "refericon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/app\\.refericon\\.pl\\/"),
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
		id: "referral-rocket",
		name: "Referral Rocket",
		website: "https://referralrocket.io",
		description: "Referral Rocket is a software solution for referral and affiliate marketing.",
		icon: "ReferralRocket.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "referral-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.referralrocket\\.io"),
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
	},
	{
		id: "referralcandy",
		name: "ReferralCandy",
		website: "https://www.referralcandy.com",
		description: "ReferralCandy is a marketing platform that gets shoppers to refer their friends.",
		icon: "ReferralCandy.svg",
		categories: [
			"marketing-automation",
			"commerce-operations",
		],
		rules: [
			{
				id: "referralcandy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.referralcandy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "referralcandy:dom:1",
				kind: "dom",
				selector: "iframe[src*='.referralcandy.com/'],li > a[href*='.referralcandy.com/'],div > a[href*='.referralcandy.com/'] ",
				description: "DOM selector matches a known technology marker.",
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
		id: "referrizer",
		name: "Referrizer",
		website: "https://business.referrizer.com",
		description: "Referrizer is a local business marketing automation solution that supports customer engagement, referral management, and campaign execution across digital channels.",
		icon: "Referrizer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "referrizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.referrizer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "referrizer:jsGlobal:1",
				kind: "jsGlobal",
				property: "referrizerWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "registria",
		name: "Registria",
		website: "https://www.registria.com",
		description: "Registria is a platform that enables durable product companies to engage with customers and deliver personalized experiences.",
		icon: "Registria.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "registria:jsGlobal:0",
				kind: "jsGlobal",
				property: "Registria.Cases",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "registria:jsGlobal:1",
				kind: "jsGlobal",
				property: "getRegistriaData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "registria:jsGlobal:2",
				kind: "jsGlobal",
				property: "getRegistriaDateData",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rela",
		name: "Rela",
		website: "https://www.relahq.com",
		description: "Rela is a set of property marketing tools for real estate professionals to enhance listings, attract potential buyers, and streamline the sales process.",
		icon: "Rela.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rela:jsGlobal:0",
				kind: "jsGlobal",
				property: "relaAjaxLink",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rela:jsGlobal:1",
				kind: "jsGlobal",
				property: "relaAjaxPost",
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
		id: "releva",
		name: "Releva",
		website: "https://releva.ai",
		description: "Releva is a marketing automation platform for ecommerce that uses AI to manage revenue in real time and automate brand communication.",
		icon: "Releva.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "releva:jsGlobal:0",
				kind: "jsGlobal",
				property: "Releva.clearCookies",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "remedo",
		name: "Remedo",
		website: "https://www.remedo.io",
		description: "Remedo is a digital healthcare marketing platform that helps doctors improve their Google search visibility through advanced strategies and technology.",
		icon: "Remedo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "remedo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.remedo\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "remedo:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.remedo\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "remedo:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.remedo\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "resultify",
		name: "Resultify",
		website: "https://www.resultify.com",
		description: "Resultify is a platform focused on online marketing management.",
		icon: "Resultify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "resultify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.resultify\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reunion-marketing",
		name: "Reunion Marketing",
		website: "https://reunionmarketing.com",
		description: "Reunion Marketing is a digital marketing platform for automotive dealerships.",
		icon: "ReunionMarketing.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "reunion-marketing:jsGlobal:0",
				kind: "jsGlobal",
				property: "reunionMarketingApiDomain",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reuzenpanda",
		name: "Reuzenpanda",
		website: "https://www.reuzenpanda.nl",
		description: "Tossdown is an automated software solution that generates more leads and customers without repetitive tasks.",
		icon: "Reuzenpanda.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "reuzenpanda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reuzenpanda\\.nl"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reuzenpanda:jsGlobal:1",
				kind: "jsGlobal",
				property: "_reuzenpandaWidget",
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
		id: "revotas",
		name: "Revotas",
		website: "https://www.revotas.com",
		description: "Revotas is a digital marketing platform based in Turkey.",
		icon: "Revotas.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "revotas:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revotas\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "revtrax",
		name: "RevTrax",
		website: "https://www.revtrax.com",
		description: "RevTrax is an offer management platform designed to track performance metrics and connect actionable insights.",
		icon: "RevTrax.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "revtrax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revtrax\\.com\\/RevTrax\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "revtrax:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.revtrax\\.com\\/revtrax\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ringostat",
		name: "Ringostat",
		website: "https://ringostat.com",
		description: "Ringostat is an AI-powered platform designed for business phone systems and marketing performance.",
		icon: "Ringostat.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ringostat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.ringostat\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ringostat:jsGlobal:1",
				kind: "jsGlobal",
				property: "ringostatAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ringostat:jsGlobal:2",
				kind: "jsGlobal",
				property: "ringostatAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ringostat:jsGlobal:3",
				kind: "jsGlobal",
				property: "ringostatRestartSubstitution",
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
		id: "rioseo",
		name: "RioSEO",
		website: "https://www.rioseo.com",
		description: "RioSEO is a provider of management and local search marketing solutions operating at a global scale.",
		icon: "RioSEO.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rioseo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("rlscdn\\.rioseo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ritekit",
		name: "RiteKit",
		website: "https://ritekit.com",
		description: "RiteKit is a tool that enhances social media engagement by optimizing calls-to-action (CTAs), generating relevant hashtags, and integrating with social media management systems to streamline content distribution and audience interaction.",
		icon: "RiteKit.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "ritekit:dom:0",
				kind: "dom",
				selector: "iframe[src*='cdn.ritekit.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "roas-funnels",
		name: "Roas Funnels",
		website: "https://roasfunnels.com",
		description: "Roas Funnels is an all-in-one digital marketing platform designed to support business growth through tools and strategies.",
		icon: "RoasFunnels.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "roas-funnels:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.roasfunnels\\.com"),
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
		id: "robarov",
		name: "Robarov",
		website: "https://robarov.be",
		description: "Robarov is an online marketing platform that delivers customized online strategies designed to attract and engage new customers.",
		icon: "Robarov.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "robarov:jsGlobal:0",
				kind: "jsGlobal",
				property: "ROBAROV_CSRF_TOKEN",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "robly",
		name: "Robly",
		website: "https://www.robly.com",
		description: "Robly is an email marketing platform designed to simplify campaign creation and management for businesses.",
		icon: "Robly.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "robly:dom:0",
				kind: "dom",
				selector: "form[action*='list.robly.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "robocote",
		name: "Robocote",
		website: "https://robocote.com",
		description: "Robocote is an artificial intelligence–driven platform that supports lead management and digital marketing processes.",
		icon: "Robocote.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "robocote:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.robocote\\.com"),
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
		id: "rock-content",
		name: "Rock Content",
		website: "https://rockcontent.com",
		description: "Rock Content is a content marketing platform. It provides tools and resources for creating, distributing, and measuring content to help businesses engage their audience and achieve marketing goals.",
		icon: "RockContent.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rock-content:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rockcontent\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rockerbox",
		name: "Rockerbox",
		website: "https://www.rockerbox.com",
		description: "Rockerbox is a provider of multi-touch attribution software.",
		icon: "Rockerbox.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rockerbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wxyz\\.rb\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rockerbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "RB.source",
				confidence: 50,
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
		id: "rocket-tools",
		name: "Rocket Tools",
		website: "https://www.rocket-tools.io",
		description: "Rocket Tools is an AI platform that connects brands with customers, transforming mall data into actionable insights for marketing performance.",
		icon: "RocketTools.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rocket-tools:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("script\\.rocket-tools\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "roof",
		name: "Roof",
		website: "https://www.roofai.com",
		description: "Roof is a platform that supports real estate companies in increasing online revenue through integrated digital solutions powered by artificial intelligence and online marketing services.",
		icon: "Roof.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "roof:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.roof\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "roof:jsGlobal:1",
				kind: "jsGlobal",
				property: "RoofWebMessenger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "roof:jsGlobal:2",
				kind: "jsGlobal",
				property: "openRoofChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "roojoom",
		name: "Roojoom",
		website: "https://www.roojoom.com",
		description: "Roojoom is a content marketing platform that converts content into revenue, designed for guided browsing.",
		icon: "Roojoom.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "roojoom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.roojoom\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "roojoom:jsGlobal:1",
				kind: "jsGlobal",
				property: "RoojoomsGridCtrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rosana",
		name: "Rosana",
		website: "https://rosana.io",
		description: "Rosana is a platform that converts customer interactions into measurable business outcomes through automated conversation management.",
		icon: "Rosana.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rosana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.rosana\\.io"),
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
		id: "rudderstack",
		name: "Rudderstack",
		website: "https://rudderstack.com/",
		description: "Rudderstack is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Rudderstack.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "rudderstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.rudderlabs\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rudderstack:jsGlobal:1",
				kind: "jsGlobal",
				property: "rudderanalytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "saasquatch",
		name: "SaaSquatch",
		website: "https://www.saasquatch.com",
		description: "SaaSquatch is a cloud-based loyalty, referral and rewards marketing platform.",
		icon: "SaaSquatch.svg",
		categories: [
			"marketing-automation",
			"commerce-operations",
		],
		rules: [
			{
				id: "saasquatch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.cloudfront\\.net\\/assets\\/javascripts\\/(?:v2\\/)?|\\/sas)squatch\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "saasquatch:jsGlobal:1",
				kind: "jsGlobal",
				property: "SAASQUATCH_TENANT_ALIAS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "saasquatch:jsGlobal:2",
				kind: "jsGlobal",
				property: "squatch.CtaWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "saasquatch:jsGlobal:3",
				kind: "jsGlobal",
				property: "squatchQuery",
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
		id: "sailthru",
		name: "Sailthru",
		website: "https://www.sailthru.com",
		description: "Sailthru is a marketing automation software and multi-channel personalisation tool that serves ecommerce and media brands.",
		icon: "Sailthru.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sailthru:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ak\\.sail-horizon\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sailthru:dom:1",
				kind: "dom",
				selector: "link[href*='ak.sail-horizon.com'],link[href*='api.sail-personalize.com'],link[href*='api.sail-track.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sailthru:jsGlobal:2",
				kind: "jsGlobal",
				property: "Sailthru",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sailthru:jsGlobal:3",
				kind: "jsGlobal",
				property: "sailthruIdentify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sailthru:jsGlobal:4",
				kind: "jsGlobal",
				property: "sailthruNewsletterRegistration",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sailthru:jsGlobal:5",
				kind: "jsGlobal",
				property: "trackSailthruUser",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sailthru:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^sailthru_pageviews$", "i"),
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
		id: "sales-auotomator",
		name: "Sales Auotomator",
		website: "https://www.salesautomator.io/automations",
		description: "Sales Automator is a tool designed to automate sales processes and help increase overall sales.",
		icon: "SalesAutomator.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sales-auotomator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.salesautomator\\.io"),
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
		id: "salesforce-marketing-cloud-account-engagement",
		name: "Salesforce Marketing Cloud Account Engagement",
		website: "https://www.salesforce.com/products/marketing-cloud/marketing-automation",
		description: "Salesforce Marketing Cloud Account Engagement (formerly known as Pardot) is an application specifically designed for B2B marketing automation.",
		icon: "Salesforce.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "salesforce-marketing-cloud-account-engagement:dom:0",
				kind: "dom",
				selector: "iframe[scr*='.pardot.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:jsGlobal:1",
				kind: "jsGlobal",
				property: "piAId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:jsGlobal:2",
				kind: "jsGlobal",
				property: "piCId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:jsGlobal:3",
				kind: "jsGlobal",
				property: "piHostname",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:jsGlobal:4",
				kind: "jsGlobal",
				property: "piProtocol",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:jsGlobal:5",
				kind: "jsGlobal",
				property: "piTracker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-account-engagement:dns:6",
				kind: "dns",
				valuePattern: new RegExp("pardot", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "salesloft",
		name: "Salesloft",
		website: "https://salesloft.com",
		description: "Salesloft is a cloud-based sales engagement platform.",
		icon: "Salesloft.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "salesloft:jsGlobal:0",
				kind: "jsGlobal",
				property: "SLScoutObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesloft:jsGlobal:1",
				kind: "jsGlobal",
				property: "slscout",
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
		id: "salesmanago",
		name: "SALESmanago",
		website: "https://www.salesmanago.com",
		description: "SALESmanago is a no-code marketing automation and customer data platform designed for mid-sized buinesses and enterprises.",
		icon: "SALESmanago.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "salesmanago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salesmanago\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesmanago:jsGlobal:1",
				kind: "jsGlobal",
				property: "SalesmanagoObject",
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
		id: "saleswings",
		name: "SalesWings",
		website: "https://www.saleswingsapp.com",
		description: "SalesWings is a tool that evaluates and identifies high-quality sales leads based on engagement and interest metrics.",
		icon: "SalesWings.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "saleswings:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s\\.saleswingsapp\\.com"),
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
		id: "sare",
		name: "Sare",
		website: "https://sare.pl",
		description: "Sare is a marketing automation platform that uses targeted email campaigns to strengthen customer relationships and enhance brand loyalty.",
		icon: "Sare.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sare:dom:0",
				kind: "dom",
				selector: "input[id*='SAREforms_email']",
				description: "DOM selector matches a known technology marker.",
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
		id: "satori",
		name: "Satori",
		website: "https://satori.marketing",
		description: "Satori provides marketing automation software.",
		icon: "Satori.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "satori:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("satori\\.segs\\.jp\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "satori:dom:1",
				kind: "dom",
				selector: "iframe[src*='satori.segs.jp/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "satori:jsGlobal:2",
				kind: "jsGlobal",
				property: "SatoriForm",
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
		id: "schema-app",
		name: "Schema App",
		website: "https://www.schemaapp.com",
		description: "Schema App is a tool that converts website content into schema markup, the language of search.",
		icon: "SchemaApp.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "schema-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.schemaapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "schema-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "schema_highlighter",
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
		id: "scoop-it",
		name: "Scoop.it",
		website: "https://www.scoop.it",
		description: "Scoop.it is a content marketing software company based in San Francisco which provide content curation platform.",
		icon: "Scoop.it.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "scoop-it:dom:0",
				kind: "dom",
				selector: "iframe[src*='.scoop.it/'], a[href*='.scoop.it/'][target='_blank']",
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
		id: "scoreapp",
		name: "ScoreApp",
		website: "https://www.scoreapp.com",
		description: "ScoreApp is a quiz marketing platform designed for lead generation and customer engagement.",
		icon: "ScoreApp.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "scoreapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.scoreapp\\.com"),
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
	},
	{
		id: "seedgrow",
		name: "SeedGrow",
		website: "https://seedgrow.net",
		description: "SeedGrow is a marketing solutions provider for Shopify, offering tools and services to support customer acquisition, engagement, and sales optimization for online stores.",
		icon: "SeedGrow.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seedgrow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.seedgrow\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seedgrow:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.seedgrow\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "seedgrow:jsGlobal:2",
				kind: "jsGlobal",
				property: "seedgrow_whatsapp_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "seedgrow:jsGlobal:3",
				kind: "jsGlobal",
				property: "seedgrow_widget_setting",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "segment",
		name: "Segment",
		website: "https://segment.com",
		description: "Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Segment.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "segment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.segment\\.com\\/analytics\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "segment:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/segment-wrapper\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "segment:jsGlobal:2",
				kind: "jsGlobal",
				property: "__SEGMENT_INSPECTOR__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "segment:jsGlobal:3",
				kind: "jsGlobal",
				property: "analytics.SNIPPET_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "segment:jsGlobal:4",
				kind: "jsGlobal",
				property: "analytics.VERSION",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "segment:dns:5",
				kind: "dns",
				valuePattern: new RegExp("segment-site-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "segmetrics",
		name: "Segmetrics",
		website: "https://segmetrics.io",
		description: "Segmetrics is a platform that provides audience insights for marketers by analyzing customer data to understand behavior, segmentation, and performance across marketing channels.",
		icon: "Segmetrics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "segmetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.segmetrics\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "segmetrics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.segmetrics\\.io"),
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
		id: "selligent",
		name: "Selligent",
		website: "https://meetmarigold.com/solutions/messaging/selligent",
		description: "Selligent is a data-driven, multi-channel marketing tool that enables organizations to manage, execute, and analyze customer engagement campaigns across multiple digital communication channels.",
		icon: "Selligent.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "selligent:jsGlobal:0",
				kind: "jsGlobal",
				property: "selligentClearCart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "selligent:jsGlobal:1",
				kind: "jsGlobal",
				property: "selligentEvent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "semrush",
		name: "SEMrush",
		website: "https://www.semrush.com",
		description: "SEMrush is an all-in-one tool suite for improving online visibility and discovering marketing insights.",
		icon: "SEMrush.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "semrush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.semrush\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "semrush:jsGlobal:1",
				kind: "jsGlobal",
				property: "SEMRUSH",
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
		id: "send",
		name: "Send",
		website: "https://send2.co/",
		description: "Send is a marketing platform built for WordPress, providing tools to manage campaigns, track performance, and engage audiences within the WordPress ecosystem.",
		icon: "Send.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "send:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/send-app\\/assets\\/js\\/.*\\.js"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "sendheap",
		name: "SendHeap",
		website: "https://sendheap.com",
		description: "SendHeap is a platform that notifies customers about order updates and informs them of campaigns and price changes across multiple communication channels.",
		icon: "SendHeap.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sendheap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sendheap\\.com"),
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
		id: "sendinblue",
		name: "Sendinblue",
		website: "https://www.sendinblue.com",
		description: "Sendinblue is an email marketing solution for small and medium-sized businesses that want to send and automate email marketing campaigns.",
		icon: "Sendinblue.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "sendinblue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sib(?:automation|forms)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sendinblue:dom:1",
				kind: "dom",
				selector: "iframe[src*='sibautomation.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sendinblue:jsGlobal:2",
				kind: "jsGlobal",
				property: "sendinblue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sendinblue:dns:3",
				kind: "dns",
				valuePattern: new RegExp("\\.sendinblue\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "sendinblue:dns:4",
				kind: "dns",
				valuePattern: new RegExp("Sendinblue-code", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "sendlane",
		name: "Sendlane",
		website: "https://www.sendlane.com/",
		description: "Sendlane is an email and sms marketing platform for online businesses",
		icon: "Sendland.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sendlane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sendlane\\.com\\/scripts\\/pusher\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sendlane:jsGlobal:1",
				kind: "jsGlobal",
				property: "_Sendlane",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sendpulse",
		name: "SendPulse",
		website: "https://sendpulse.com",
		description: "SendPulse is an email marketing platform with additional channels: SMS, web push notifications, Facebook and WhatsApp chatbots.",
		icon: "SendPulse.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "sendpulse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sendpulse\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sendpulse:dom:1",
				kind: "dom",
				selector: "link[href*='.sendpulse.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "sendx",
		name: "SendX",
		website: "https://www.sendx.io",
		description: "SendX is an email marketing software designed to help users send campaigns, build mailing lists, and automate marketing.",
		icon: "SendX.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sendx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sendx\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sendx:jsGlobal:1",
				kind: "jsGlobal",
				property: "_sendx",
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
		id: "sensor-tower",
		name: "Sensor Tower",
		website: "https://sensortower.com",
		description: "Sensor Tower is a mobile app store marketing intelligence platform that provides data and insights on app performance, user acquisition, and market trends.",
		icon: "SensorTower.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sensor-tower:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/sensortower\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "seo-samba",
		name: "SEO Samba",
		website: "https://www.seosamba.com",
		description: "SEO Samba is a marketing automation solution designed for franchises and enterprises.",
		icon: "SEOSamba.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seo-samba:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sa\\.seosamba\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seo-samba:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("sa\\.seosamba\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "seoant",
		name: "SEOAnt",
		website: "https://www.seoant.com",
		description: "SEOAnt is a SEO customization service that provides professional improvement suggestions, aimed at enhancing Google rankings and increasing conversions.",
		icon: "SEOAnt.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seoant:jsGlobal:0",
				kind: "jsGlobal",
				property: "BlackUrlArray_SEOAnt",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "seoant:jsGlobal:1",
				kind: "jsGlobal",
				property: "SEOAnt_toConsumableArray",
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
			"shopify",
		],
	},
	{
		id: "seojuice",
		name: "SEOJuice",
		website: "https://seojuice.com",
		description: "SEOJuice is a software platform that utilizes artificial intelligence to automate internal linking and on-page search engine optimization tasks for websites.",
		icon: "SEOJuice.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seojuice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.seojuice\\.io"),
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
		id: "seomatic",
		name: "SEOmatic",
		website: "https://plugins.craftcms.com/seomatic",
		description: "SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 3.",
		icon: "SEOmatic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seomatic:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^SEOmatic$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "seomatic:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^seomatic$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
			cpe: "cpe:2.3:a:nystudio107:seomatic:*:*:*:*:*:craft_cms:*:*",
		},
		implies: [
			"craft-cms",
		],
	},
	{
		id: "seomator",
		name: "SEOmator",
		website: "https://seomator.com",
		description: "SEOmator is an AI-powered SEO and SEM platform designed for website optimisation.",
		icon: "SEOmator.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seomator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/seomator\\.com\\/"),
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
		id: "seopress",
		name: "SEOPress",
		website: "https://www.seopress.org",
		description: "SEOPress is a WordPress plugin for SEO.",
		icon: "SEOPress.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "seopress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/seopress\\/"),
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
			cpe: "cpe:2.3:a:seopress:seopress:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "setrow",
		name: "Setrow",
		website: "https://setrow.com",
		description: "Setrow is a platform offering integrated digital marketing tools, including email and SMS marketing, push notifications, and recommendation engines, to optimize customer engagement and marketing strategies.",
		icon: "Setrow.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "setrow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.setrowid\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "setrow:jsGlobal:1",
				kind: "jsGlobal",
				property: "setrowCookies",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "setrow:jsGlobal:2",
				kind: "jsGlobal",
				property: "setrowID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "setrow:jsGlobal:3",
				kind: "jsGlobal",
				property: "setrowSua",
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
		id: "shanon",
		name: "Shanon",
		website: "https://www.shanon.co.jp",
		description: "Shanon provides marketing automation software.",
		icon: "Shanon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "shanon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.shanon-services\\.com"),
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
		id: "sharpay",
		name: "Sharpay",
		website: "https://sharpay.io",
		description: "Sharpay is a share button that integrates with blockchain technology, enabling decentralized sharing and tracking of content across multiple platforms.",
		icon: "Sharpay.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sharpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.sharpay\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sharpay:jsGlobal:1",
				kind: "jsGlobal",
				property: "gaSharpay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sharpay:jsGlobal:2",
				kind: "jsGlobal",
				property: "sharpayAPI.append",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sharpspring",
		name: "SharpSpring",
		website: "https://sharpspring.com",
		description: "SharpSpring is a cloud-based marketing tool that offers customer relationship management, marketing automation, mobile and social marketing, sales team automation, customer service and more, all within one solution.",
		icon: "SharpSpring.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sharpspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.marketingautomation\\.services.+(?:ver=)([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sharpspring:jsGlobal:1",
				kind: "jsGlobal",
				property: "sharpspring_tracking_installed",
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
		id: "shopimind",
		name: "ShopiMind",
		website: "https://www.shopimind.com",
		description: "ShopiMind is a multi-channel marketing automation solution for all ecommerce activities.",
		icon: "ShopiMind.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "shopimind:jsGlobal:0",
				kind: "jsGlobal",
				property: "_spmq.id_cart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shopimind:jsGlobal:1",
				kind: "jsGlobal",
				property: "_spmq.spm_ident",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "signal",
		name: "Signal",
		website: "https://www.signal.co/",
		description: "Signal is a cross-platform encrypted messaging service.",
		icon: "signal.png",
		categories: [
			"marketing-automation",
			"tag-management",
		],
		rules: [
			{
				id: "signal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/s\\.btstatic\\.com\\/tag\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signal:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/s\\.thebrighttag\\.com\\/iframe\\?"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signal:jsGlobal:2",
				kind: "jsGlobal",
				property: "signalData",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "signalayer",
		name: "Signalayer",
		website: "https://signalayer.com",
		description: "Signalayer is a provider of digital marketing solutions designed to support brands and agencies in enhancing their online presence.",
		icon: "Signalayer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "signalayer:jsGlobal:0",
				kind: "jsGlobal",
				property: "Signalayer.API",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "signalayer:jsGlobal:1",
				kind: "jsGlobal",
				property: "signalayerApiKey",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "signalize",
		name: "Signalize",
		website: "https://www.signalize.com",
		description: "Signalize is a platform that enables sending browser notifications, including targeted push notifications.",
		icon: "Signalize.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "signalize:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("api\\.signalize\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "signalize:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("api\\.signalize\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "simon",
		name: "Simon",
		website: "https://www.simondata.com/",
		description: "Simon is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
		icon: "Simon.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "simon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.simonsignal\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simon:dom:1",
				kind: "dom",
				selector: "link[href*='.simonsignal.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "simon:jsGlobal:2",
				kind: "jsGlobal",
				property: "SimonData",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "simplero",
		name: "Simplero",
		website: "https://simplero.com",
		description: "Simplero is an all-in-one marketing software.",
		icon: "Simplero.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "simplero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.simplero\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simplero:dom:1",
				kind: "dom",
				selector: "a[href*='.simplero.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "simplero:jsGlobal:2",
				kind: "jsGlobal",
				property: "Simplero",
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
		id: "simplycast",
		name: "SimplyCast",
		website: "https://www.simplycast.com",
		description: "SimplyCast is a custom flow communication platform designed to facilitate personalised messaging and automated workflows, allowing businesses to streamline their communication processes.",
		icon: "SimplyCast.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "simplycast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.simplycast\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simplycast:dom:1",
				kind: "dom",
				selector: "iframe[scr*='.simplycast.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "sirdata",
		name: "Sirdata",
		website: "https://www.sirdata.com",
		description: "Sirdata is a self-service, third party data-collecting platform that specialises in the collection of behavioural data, predictive targeting and selling of audience segments.",
		icon: "Sirdata.svg",
		categories: [
			"marketing-automation",
			"privacy-compliance",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "sirdata:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:choices|cache)\\.consentframework\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sirdata:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.sddan\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sirdata:jsGlobal:2",
				kind: "jsGlobal",
				property: "SDDAN.cmp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sirdata:jsGlobal:3",
				kind: "jsGlobal",
				property: "Sddan.cmpLoaded",
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
		id: "sitebooster",
		name: "SiteBooster",
		website: "https://sitebooster.com",
		description: "Site Booster is a tool that publishes business details across major online directories and platforms to enhance visibility.",
		icon: "SiteBooster.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sitebooster:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/sitebooster\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "sitecore-engagement-cloud",
		name: "Sitecore Engagement Cloud",
		website: "https://www.sitecore.com/products/engagement-cloud",
		description: "Sitecore Engagement Cloud is a cloud-based customer experience management platform offering content management, personalisation, marketing automation, analytics, and omni-channel delivery for enhancing digital marketing efforts and improving customer experiences.",
		icon: "Sitecore.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sitecore-engagement-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sitecore-engage-v\\.([\\d\\.]+)\\.min\\.js"),
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
				"high",
				"poa",
				"recurring",
			],
		},
		implies: [
			"sitecore",
		],
	},
	{
		id: "skeepers",
		name: "Skeepers",
		website: "https://skeepers.io",
		description: "Skeepers is a platform designed to improve customer satisfaction and support business growth through enhanced engagement and feedback tools.",
		icon: "Skeepers.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "skeepers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.skeepers\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "skeepers:jsGlobal:1",
				kind: "jsGlobal",
				property: "skeepersStarsCounter",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sleeknote",
		name: "Sleeknote",
		website: "https://sleeknote.com",
		description: "Sleeknote is a cloud-based software that helps online businesses reach conversion goals through website popups.",
		icon: "Sleeknote.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sleeknote:jsGlobal:0",
				kind: "jsGlobal",
				property: "SleekNote.SleekNotes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sleeknote:jsGlobal:1",
				kind: "jsGlobal",
				property: "sleeknoteMarketingConsent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sleeknote:jsGlobal:2",
				kind: "jsGlobal",
				property: "sleeknoteScriptTag",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sleeknote:jsGlobal:3",
				kind: "jsGlobal",
				property: "sleeknoteSiteData",
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
		id: "slicktext",
		name: "SlickText",
		website: "https://www.slicktext.com",
		description: "SlickText is a cloud-based SMS marketing solution for business of all sizes.",
		icon: "SlickText.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "slicktext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.slicktext\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "smaily",
		name: "Smaily",
		website: "https://smaily.com",
		description: "Smaily is an email marketing and automation solution.",
		icon: "Smaily.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "smaily:dom:0",
				kind: "dom",
				selector: "form[action*='.sendsmaily.net/api/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "smart-analytics",
		name: "Smart Analytics",
		website: "https://smartanalytics.io",
		description: "Smart Analytics is an AI-powered platform that helps increase sales and reduce advertising costs through automated data analysis.",
		icon: "SmartAnalytics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "smart-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartanalytics\\.io"),
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
	},
	{
		id: "smartdx",
		name: "SmartDX",
		website: "https://smartdx.co",
		description: "SmartDX is a nimble alternative to cookies that revolutionizes the tracking and identification of individual audience members, maps cross-device journeys, delivers contextual omnichannel interactions, and attributes conversions at the segment-of-one level.",
		icon: "SmartDX.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "smartdx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.smartdx\\.co\\/"),
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
		id: "smartpoint",
		name: "Smartpoint",
		website: "https://smartpoint.pro",
		description: "Smartpoint is a car dealer conversion optimization system that improves lead capture and sales performance through data-driven tools and customer engagement features.",
		icon: "SmartPoint.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "smartpoint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panel\\.smartpoint\\.pro\\/"),
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
		id: "snapsea",
		name: "SnapSea",
		website: "https://www.snapsea.io",
		description: "SnapSea is a platform that displays destinations using user-generated content to highlight real-world experiences and local visuals.",
		icon: "SnapSea.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "snapsea:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.snapsea\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "snapsea:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.snapsea.io/']",
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
		id: "sniply",
		name: "Sniply",
		website: "https://sniply.io",
		description: "Sniply is a special URL shortener that allows users to add a call-to-action to any landing page.",
		icon: "Sniply.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sniply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gosniply\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sniply:jsGlobal:1",
				kind: "jsGlobal",
				property: "sniply.create_sniply_bar",
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
		id: "socedo",
		name: "Socedo",
		website: "https://socedoagency.com",
		description: "Socedo is a B2B demand generation system designed for social media, helping businesses identify, engage, and convert potential leads through targeted social interactions and automated workflows.",
		icon: "Socedo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "socedo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.socedo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "socedo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_socedo.init",
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
		id: "soci",
		name: "SOCi",
		website: "https://www.soci.ai",
		description: "SOCi is an all-in-one platform that unifies workflows, data, and AI to enable automation across business processes.",
		icon: "SOCi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "soci:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meetsoci\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "socialladder",
		name: "SocialLadder",
		website: "https://socialladderapp.com",
		description: "SocialLadder is a complete end-to-end creator management solution for brands looking to maximize and scale their brand ambassador, influencer, and affiliate marketing efforts.",
		icon: "SocialLadder.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "socialladder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("socialladder\\.rkiapps\\.com\\/"),
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
		id: "sokrati",
		name: "Sokrati",
		website: "https://sokrati.com",
		description: "Sokrati is a digital marketing platform designed to support ecommerce businesses.",
		icon: "Sokrati.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sokrati:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("chuknu\\.sokrati\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "solitics",
		name: "Solitics",
		website: "https://solitics.com",
		description: "Solitics is a platform that analyzes customer data to optimize engagement and drive targeted marketing strategies.",
		icon: "Solitics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "solitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.solitics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "solitics:jsGlobal:1",
				kind: "jsGlobal",
				property: "$solitics.anonymousConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "solitics:jsGlobal:2",
				kind: "jsGlobal",
				property: "$soliticsHeartbit",
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
		id: "sophi",
		name: "Sophi",
		website: "https://www.mathereconomics.com/sophi-start",
		description: "Sophi is a suite of AI-powered optimization, prediction, and automation solutions designed to unlock content value and drive business transformation.",
		icon: "Sophi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sophi:jsGlobal:0",
				kind: "jsGlobal",
				property: "SOPHIDATA.settings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sophi:jsGlobal:1",
				kind: "jsGlobal",
				property: "sophi.settings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sophi:jsGlobal:2",
				kind: "jsGlobal",
				property: "sophiSegments",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sparkloop",
		name: "SparkLoop",
		website: "https://sparkloop.app",
		description: "SparkLoop is a newsletter growth platform that offers referral and partner tools to help newsletter operators expand their audience.",
		icon: "SparkLoop.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sparkloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.sparkloop\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sparkloop:jsGlobal:1",
				kind: "jsGlobal",
				property: "SLConfig.script_url",
				valuePattern: new RegExp("\\.sparkloop\\.app"),
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
		id: "spectate",
		name: "Spectate",
		website: "https://spectate.com",
		description: "Spectate is an inbound marketing software platform that integrates multiple inbound and outbound channels to strengthen online marketing presence.",
		icon: "Spectate.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "spectate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.spectate\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "splashthat",
		name: "SplashThat",
		website: "https://splashthat.com",
		description: "SplashThat is a platform for building and hosting event marketing experiences, including tools for invitations, registration, and attendee engagement.",
		icon: "SplashThat.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "splashthat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.splashthat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "splashthat:jsGlobal:1",
				kind: "jsGlobal",
				property: "SPLASH.apiClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "splashthat:jsGlobal:2",
				kind: "jsGlobal",
				property: "SplashUI",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "spotler-activate",
		name: "Spotler Activate",
		website: "https://spotleractivate.com",
		description: "Spotler Activate is a customer data platform (CDP) that provides technical capabilities for data collection, segmentation, audience targeting, campaign orchestration, and analytics, empowering businesses to personalise customer experiences and optimise marketing efforts.",
		icon: "SpotlerActivate.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "spotler-activate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/squeezely\\.tech\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spotler-activate:jsGlobal:1",
				kind: "jsGlobal",
				property: "sqzlCommon.getVariantName",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spotler-activate:jsGlobal:2",
				kind: "jsGlobal",
				property: "sqzlPersonalization",
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
		id: "spotzer",
		name: "Spotzer",
		website: "https://spotzerdigital.com",
		description: "Spotzer is a platform offering solutions for crafting online content that garners high exposure on search engines and social networks.",
		icon: "Spotzer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "spotzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spotzer\\.com\\/"),
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
		id: "spread",
		name: "SPREAD",
		website: "https://www.spreadfamily.fr",
		description: "SPREAD is a platform offering tailored marketing campaigns designed to enhance ecommerce engagement and performance.",
		icon: "SPREAD.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "spread:jsGlobal:0",
				kind: "jsGlobal",
				property: "loadSpreadTracker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "springbig",
		name: "Springbig",
		website: "https://springbig.com",
		description: "Springbig is a marketing platform designed for regulated industries.",
		icon: "Springbig.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "springbig:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/plugins\\/springbig-integration-plugin-main\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "sprinthub",
		name: "SprintHub",
		website: "https://lp.sprinthub.com",
		description: "SprintHub is an all-in-one marketing platform.",
		icon: "SprintHub.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sprinthub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sprinthub\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sprinthub:jsGlobal:1",
				kind: "jsGlobal",
				property: "SprintHUB",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sprinthub:jsGlobal:2",
				kind: "jsGlobal",
				property: "SprintHUBLoaded",
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
		id: "squalomail",
		name: "SqualoMail",
		website: "https://www.squalomail.com",
		description: "SqualoMail is an email marketing platform that helps businesses manage newsletters and automated campaigns to improve audience engagement and drive sales.",
		icon: "SqualoMail.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "squalomail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.squalomail\\.net"),
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
		id: "squeezely",
		name: "Squeezely",
		website: "https://www.squeezely.tech",
		description: "Squeezely is a customer data platform (CDP) that provides technical capabilities for data collection, segmentation, audience targeting, campaign orchestration, and analytics, empowering businesses to personalise customer experiences and optimise marketing efforts.",
		icon: "Squeezely.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "squeezely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/squeezely\\.tech\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "squeezely:jsGlobal:1",
				kind: "jsGlobal",
				property: "sqzlCommon.getVariantName",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "squeezely:jsGlobal:2",
				kind: "jsGlobal",
				property: "sqzlPersonalization",
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
		id: "stampede",
		name: "Stampede",
		website: "https://stampede.ai",
		description: "Stampede is a platform that consolidates guest engagement technologies into one seamless system for managing interactions and operational touchpoints.",
		icon: "Stampede.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "stampede:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stampede\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stampede:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("stampede\\.ai", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "stampede:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Stampede$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "stampede:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("stampede\\.ai", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "stampede:meta:4",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^stampede$", "i"),
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
		id: "steer-health",
		name: "Steer Health",
		website: "https://steerhealth.io",
		description: "Steer Health is an AI healthcare platform designed to enhance revenue, reduce costs, and improve patient experience through automation.",
		icon: "SteerHealth.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "steer-health:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.steerhealth\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "stibo",
		name: "Stibo",
		website: "https://www.stibo.com",
		description: "Stibo is a cloud-based software solution designed to help businesses manage organizational data.",
		icon: "Stibo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "stibo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("product-analytics\\.stibo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "storylane",
		name: "Storylane",
		website: "https://www.storylane.io",
		description: "Storylane is a platform facilitating the creation and distribution of interactive product demos tailored for SaaS sales and marketing teams.",
		icon: "Storylane.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "storylane:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.storylane\\.io\\/js\\/v(\\d+)\\/storylane\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "storylane:jsGlobal:1",
				kind: "jsGlobal",
				property: "Storylane",
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
		id: "storystream",
		name: "StoryStream",
		website: "https://storystream.ai",
		description: "StoryStream is a content curation platform that specialises in user generated content.",
		icon: "StoryStream.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "storystream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.storystream\\.ai\\/"),
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
		id: "streamlyne",
		name: "Streamlyne",
		website: "https://streamlyne.io",
		description: "Streamlyne is a platform that provides tools and services for managing, optimizing, and automating online marketing activities across multiple digital channels.",
		icon: "Streamlyne.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "streamlyne:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.streamlyne\\.io"),
				description: "Script content contains a bounded technology signature.",
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
		id: "stylitics",
		name: "Stylitics",
		website: "https://stylitics.com",
		description: "Stylitics is a cloud-based SaaS platform for retailers to automate and distribute visual content at scale.",
		icon: "Stylitics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "stylitics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stylitics\\.com\\/v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stylitics:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/stylitics\\/js\\/stylitics\\.js\\?ver=v([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stylitics:dom:2",
				kind: "dom",
				selector: "link[href*='.stylitics.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stylitics:jsGlobal:3",
				kind: "jsGlobal",
				property: "Stylitics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stylitics:jsGlobal:4",
				kind: "jsGlobal",
				property: "stylitics",
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
		id: "sub2tech",
		name: "Sub2Tech",
		website: "https://www.sub2tech.com",
		description: "Sub2Tech is combining real time customer data with industry-leading technology.",
		icon: "Sub2Tech.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sub2tech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sub2tech\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sub2tech:jsGlobal:1",
				kind: "jsGlobal",
				property: "SUB2.codebaseversion",
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
				"poa",
			],
		},
	},
	{
		id: "submit-express",
		name: "Submit Express",
		website: "https://www.submitexpress.com",
		description: "Submit Express is a platform that provides tools for search engine optimization and marketing management.",
		icon: "SubmitExpress.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "submit-express:dom:0",
				kind: "dom",
				selector: "a[href*='www.submitexpress.com'] > img[src*='www.submitexpress.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "superbuzz",
		name: "SuperBuzz",
		website: "https://www.superbuzz.io",
		description: "SuperBuzz is a platform that uses AI-powered campaigns to help businesses increase sales performance.",
		icon: "SuperBuzz.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "superbuzz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.superbuzz\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "superbuzz:jsGlobal:1",
				kind: "jsGlobal",
				property: "SuperBuzzSDK",
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
		id: "supermetrics",
		name: "Supermetrics",
		website: "https://supermetrics.com",
		description: "Formerly Relay42, Supermetrics is a customer data platform that unifies cross-channel customer data in real time and supports personalization, audience segmentation, and journey orchestration across digital touchpoints.",
		icon: "Supermetrics.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "supermetrics:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.r42tag\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "supermetrics:jsGlobal:1",
				kind: "jsGlobal",
				property: "Relay42Min",
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
		id: "surfside",
		name: "Surfside",
		website: "https://surfside.io",
		description: "Surfside is an end-to-end marketing technology that aggregates first-party data across customer touchpoints, enabling advertisers to analyze, target, and measure strategies for influencing current and future customers.",
		icon: "Surfside.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "surfside:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.surfside\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "surfside:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.surfside\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sverve",
		name: "Sverve",
		website: "https://www.sverve.com",
		description: "Sverve is a platform facilitating content curation and social post management with targeted matchmaking services.",
		icon: "Sverve.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "sverve:dom:0",
				kind: "dom",
				selector: "a[href*='.sverve.com/'] > img[src*='.sverve.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sverve:jsGlobal:1",
				kind: "jsGlobal",
				property: "svervdiv",
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
		id: "swifty",
		name: "Swifty",
		website: "https://beswifty.com",
		description: "Swifty is a platform for managing marketing campaigns designed to convert leads into leases.",
		icon: "Swifty.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "swifty:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.beswifty\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "swifty:jsGlobal:1",
				kind: "jsGlobal",
				property: "swifty_blog_loadmore_params",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "synamate",
		name: "Synamate",
		website: "https://synamate.com",
		description: "Synamate is an AI-powered platform for marketing automation and lead management.",
		icon: "Synamate.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "synamate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.synamate\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "synup",
		name: "Synup",
		website: "https://www.synup.com",
		description: "Synup is a platform that provides online business listings management, monitors reputation, and offers local search analytics.",
		icon: "Synup.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "synup:dom:0",
				kind: "dom",
				selector: "iframe[src*='.synup.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "systeme-io",
		name: "Systeme.io",
		website: "https://systeme.io",
		description: "Systeme.io is an all-in-one marketing platform that helps businesses create and launch sales funnels, affiliate programs, email marketing campaigns, online courses, blogs, and websites.",
		icon: "Systeme.io.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "systeme-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/systeme\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "systeme-io:dom:1",
				kind: "dom",
				selector: "from[action*='//systeme.io/'], a[href*='//systeme.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "systeme-io:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("\\.systeme\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "systeme-io:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^systeme_affiliate$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "systems-accel",
		name: "Systems Accel",
		website: "https://systemsaccel.com",
		description: "Systems Accel is an all-in-one platform designed to automate processes and boost sales for coaches, consultants, and service providers.",
		icon: "SystemsAccel.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "systems-accel:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.systemsaccel\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "tagboard",
		name: "Tagboard",
		website: "https://tagboard.com",
		description: "Tagboard is a platform which allows users to aggregate data from major social networking websites and embed, repost and redisplay it on various media.",
		icon: "Tagboard.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tagboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tagboard\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tagboard:dom:1",
				kind: "dom",
				selector: "iframe[src*='.tagboard.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "tagembed",
		name: "Tagembed",
		website: "https://tagembed.com",
		description: "Tagembed is a social media aggregator that collects and displays engaging user-generated content from any social media network such as Instagram, Facebook, Twitter, Youtube, Tiktok, Google Reviews, Airbnb, and 18+ networks.",
		icon: "Tagembed.svg",
		categories: [
			"marketing-automation",
			"widgets-misc",
		],
		rules: [
			{
				id: "tagembed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/widget\\.tagembed\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tagembed:dom:1",
				kind: "dom",
				selector: "script[data-src*='widget.tagembed.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tagembed:jsGlobal:2",
				kind: "jsGlobal",
				property: "TagembedWidget",
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
		id: "tagnology",
		name: "Tagnology",
		website: "https://tagnology.co",
		description: "Tagnology is a platform that transforms authentic content and meaningful interactions into valuable brand assets.",
		icon: "Tagnology.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tagnology:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.tagnology\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tagnology:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tagnology\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tail",
		name: "Tail",
		website: "https://www.tail.digital",
		description: "Tail is a customer data management platform.",
		icon: "Tail.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tailtarget\\.com\\/"),
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
		id: "tapstream",
		name: "Tapstream",
		website: "https://tapstream.com",
		description: "Tapstream is a mobile marketing platform that supports user acquisition and engagement for leading global applications.",
		icon: "Tapstream.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tapstream:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.tapstream\\.com"),
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
		id: "terminus",
		name: "Terminus",
		website: "https://terminus.com",
		description: "Terminus is a platform that helps identify target audiences, deliver relevant messages across multiple channels, integrate sales teams throughout the revenue process, and measure performance across all activities.",
		icon: "Terminus.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "terminus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.terminus\\.services\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "text-marketer",
		name: "Text Marketer",
		website: "https://atomiks.github.io/tippyjs",
		description: "Text Marketer is a business messaging SMS software that enables companies to send and manage text communications.",
		icon: "TextMarketer.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "text-marketer:dom:0",
				kind: "dom",
				selector: "form[action*='www.textmarketer.biz']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "textmagic",
		name: "Textmagic",
		website: "https://www.textmagic.com",
		description: "Textmagic is a messaging platform for sending SMS and email campaigns designed to generate clicks, responses, and revenue.",
		icon: "Textmagic.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "textmagic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.textmagic\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "the-adslab",
		name: "The AdsLab",
		website: "https://www.theadslab.io",
		description: "The AdsLab is a tool that enables users to target, track, and convert their desired audience effectively.",
		icon: "TheAdsLab.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "the-adslab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.theadslab\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "the-seo-framework",
		name: "The SEO Framework",
		website: "https://theseoframework.com",
		description: "The SEO Framework is the only WordPress plugin that can intelligently generate critical SEO meta tags by reading your WordPress environment.",
		icon: "The SEO Framework.svg",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "the-seo-framework:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+The SEO Framework by Sybre Waaijer"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "the-seo-framework:html:1",
				kind: "html",
				pattern: new RegExp("<!--[^>]+the seo framework by sybre waaijer"),
				description: "HTML contains a known technology signature.",
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
			"wordpress",
		],
	},
	{
		id: "themarketer",
		name: "theMarketer",
		website: "https://themarketer.com",
		description: "theMarketer is a marketing platform that includes a loyalty program.",
		icon: "theMarketer.svg",
		categories: [
			"marketing-automation",
			"commerce-operations",
		],
		rules: [
			{
				id: "themarketer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("t\\.themarketer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themarketer:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^themarketerbackend_session$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "thoughtmetric",
		name: "ThoughtMetric",
		website: "https://thoughtmetric.io",
		description: "ThoughtMetric is a marketing attribution platform for ecommerce.",
		icon: "ThoughtMetric.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "thoughtmetric:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thoughtmetric\\.io"),
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
		id: "tieit",
		name: "TIEIT",
		website: "https://www.tieit.ai",
		description: "TIEIT is an all-in-one platform offering integrated tools for sales, marketing, customer service, billing, subscriptions, and scheduling, designed to streamline business operations in a unified solution.",
		icon: "TIEIT.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "tieit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.tieit\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tint",
		name: "TINT",
		website: "https://www.tintup.com",
		description: "TINT is a community marketing platform that enables brands to engage audiences, gather user-generated content, and build authentic connections through social and digital channels.",
		icon: "TINT.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tintup\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tint:jsGlobal:1",
				kind: "jsGlobal",
				property: "tintAnalyticsClient",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tinyalbert",
		name: "tinyAlbert",
		website: "https://www.tinyalbert.ai",
		description: "tinyAlbert is an AI-powered email marketing manager that automates the creation, scheduling, and management of email campaigns.",
		icon: "tinyAlbert.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tinyalbert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.tinyeinstein\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tinyalbert:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.tinyalbert\\.ai"),
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
		id: "titanpush",
		name: "TITANPush",
		website: "https://www.titanpush.com",
		description: "TITANPush is a platform offering tools that assist brands in increasing sales through their websites and improving customer communication without requiring programming knowledge.",
		icon: "TITANPush.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "titanpush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.titanpush\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "titanpush:jsGlobal:1",
				kind: "jsGlobal",
				property: "titanPush",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "titanpush:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpnObject",
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
		id: "tolstoy",
		name: "Tolstoy",
		website: "https://www.gotolstoy.com",
		description: "Tolstoy is a video communication platform designed to automate workflows.",
		icon: "Tolstoy.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tolstoy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gotolstoy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tolstoy:jsGlobal:1",
				kind: "jsGlobal",
				property: "tolstoySettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tolstoy:jsGlobal:2",
				kind: "jsGlobal",
				property: "tolstoyWidget",
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
		id: "tomi-ai",
		name: "Tomi.ai",
		website: "https://tomi.ai",
		description: "Tomi.ai is a predictive marketing platform.",
		icon: "Tomi.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tomi-ai:jsGlobal:0",
				kind: "jsGlobal",
				property: "tomi.track",
				description: "Page-owned global matches a known technology marker.",
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
		id: "tomis",
		name: "Tomis",
		website: "https://tomis.tech",
		description: "Tomis is a digital marketing tour operator, specialising in promoting travel services through online channels.",
		icon: "Tomis.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tomis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tomis-bot\\.firebaseapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tomis:dom:1",
				kind: "dom",
				selector: "script#tomis_script-js",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tomis:jsGlobal:2",
				kind: "jsGlobal",
				property: "TOMIS",
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
		id: "toneden",
		name: "ToneDen",
		website: "https://www.toneden.io",
		description: "ToneDen is a social marketing platform designed to help businesses reach and sell to targeted audiences.",
		icon: "ToneDen.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "toneden:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.toneden\\.io"),
				description: "Script source URL matches a known technology marker.",
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
		id: "topline-pro",
		name: "Topline Pro",
		website: "https://www.toplinepro.com",
		description: "Topline Pro is an all-in-one platform designed to support marketing operations for home service businesses.",
		icon: "ToplinePro.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "topline-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.toplinepro\\.com"),
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
		id: "totango",
		name: "Totango",
		website: "https://www.totango.com",
		description: "Totango is a customer success platform that helps recurring revenue businesses simplify the complexities of customer success by connecting the dots of customer data, actively monitoring customer health changes, and driving proactive engagements.",
		icon: "Totango.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "totango:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.totango\\.com\\/totango([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "totango:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.amazonaws\\.com\\/totango-cdn\\/totango\\d\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "totango:jsGlobal:2",
				kind: "jsGlobal",
				property: "totango",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "totango:jsGlobal:3",
				kind: "jsGlobal",
				property: "totangoLoader",
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
		id: "tracify",
		name: "Tracify",
		website: "https://www.tracify.ai",
		description: "Tracify is a tracking solution that uses adblock-proof AI technology to help optimize performance and maximize profitability.",
		icon: "Tracify.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tracify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripting\\.tracify\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tracify:jsGlobal:1",
				kind: "jsGlobal",
				property: "Tracify",
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
		id: "tradable-bits",
		name: "Tradable Bits",
		website: "https://tradablebits.com",
		description: "Tradable Bits is a platform that integrates content marketing, e-commerce, CRM, and targeted communication into a unified system.",
		icon: "TradableBits.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "tradable-bits:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tradablebits\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "transpond",
		name: "Transpond",
		website: "https://transpond.io",
		description: "Transpond is a marketing platform that provides tools for campaign management, audience engagement, and performance tracking to support business marketing strategies.",
		icon: "Transpond.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "transpond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.transpond\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "transpond:dom:1",
				kind: "dom",
				selector: "api\\.transpond\\.io",
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
		id: "treasure-data",
		name: "Treasure Data",
		website: "https://www.treasuredata.com",
		description: "Treasure Data is the only enterprise customer data platform.",
		icon: "Treasure Data.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "treasure-data:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.treasuredata\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "treasure-data:dom:1",
				kind: "dom",
				selector: "link[href*='.treasuredata.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "treasure-data:jsGlobal:2",
				kind: "jsGlobal",
				property: "Treasure.version",
				valuePattern: new RegExp("(.+)"),
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
		id: "truepush",
		name: "Truepush",
		website: "https://www.truepush.com",
		description: "Truepush is web-based push notification service available for PWA, AMP, WordPress, and Shopify.",
		icon: "truepush.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "truepush:jsGlobal:0",
				kind: "jsGlobal",
				property: "truepush",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "truepush:jsGlobal:1",
				kind: "jsGlobal",
				property: "truepushVersionInfo.key",
				valuePattern: new RegExp("v([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "trumpia",
		name: "Trumpia",
		website: "https://www.trumpia.com",
		description: "Trumpia is a marketing platform that supports multiple channels, including mobile, email, social media, voice, and chat marketing.",
		icon: "Trumpia.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "trumpia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trumpia\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trumpia:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^TrumpiaReferer$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "trumpia:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^trumpiareferer$", "i"),
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
	},
	{
		id: "trustlock",
		name: "TrustLock",
		website: "https://trustlock.co",
		description: "TrustLock is a website tool designed to help increase sales and conversions across various platforms through trust-based elements and user engagement features.",
		icon: "TrustLock.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "trustlock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.trustlock\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustlock:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.trustlock.co']",
				description: "DOM selector matches a known technology marker.",
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
		id: "trustmaker",
		name: "Trustmaker",
		website: "https://thetrustmaker.com",
		description: "Trustmaker is a platform that provides customizable social proof messages, FOMO campaign tools, and Conversion Rate Optimization (CRO) solutions.",
		icon: "Trustmaker.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "trustmaker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getcue\\.app\\/"),
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
	},
	{
		id: "trustpulse",
		name: "TrustPulse",
		website: "https://trustpulse.com",
		description: "TrustPulse is a marketing tool that enables marketers to drive more conversions and sales by leveraging the power of social proof and fear of missing out.",
		icon: "TrustPulse.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "trustpulse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trstplse\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustpulse:dom:1",
				kind: "dom",
				selector: "link[href*='.trstplse.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "unipag",
		name: "Unipag",
		website: "https://www.unipag.com",
		description: "Unipag is a universal sales promotion platform designed to streamline and manage promotional campaigns across various channels.",
		icon: "Unipag.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "unipag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.unipag\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "unipag:jsGlobal:1",
				kind: "jsGlobal",
				property: "Unipag",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "uniqodo",
		name: "Uniqodo",
		website: "https://www.uniqodo.com",
		description: "Uniqodo is a promotion engine that delivers engaging onsite experiences designed to support marketing campaigns and enhance user interaction across digital platforms.",
		icon: "Uniqodo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "uniqodo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("track\\.uniqodo\\.com\\/"),
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
		id: "unito-hub",
		name: "Unito Hub",
		website: "https://unitohub.com",
		description: "Unito Hub is a unified data platform that integrates and consolidates data from multiple sources.",
		icon: "UnitoHub.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "unito-hub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/unito\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "unito-hub:jsGlobal:1",
				kind: "jsGlobal",
				property: "Unito",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "unito-hub:jsGlobal:2",
				kind: "jsGlobal",
				property: "Unito.app_version",
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
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "upcontent",
		name: "UpContent",
		website: "https://www.upcontent.com",
		description: "UpContent is a content discovery tool that identifies, curates, and surfaces relevant articles and media from across the web for use in digital publishing and marketing workflows.",
		icon: "UpContent.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "upcontent:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.upcontent\\.com"),
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
		id: "upsales",
		name: "Upsales",
		website: "https://www.upsales.com",
		description: "Upsales is an enterprise CRM and marketing automation tool.",
		icon: "Upsales.svg",
		categories: [
			"marketing-automation",
			"business-tools",
		],
		rules: [
			{
				id: "upsales:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("img\\.upsales\\.com\\/"),
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
		id: "upscale-systems",
		name: "UpScale Systems",
		website: "https://upscale-systems.com",
		description: "UpScale Systems is an all-in-one platform to enhance local businesses.",
		icon: "UpScale.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "upscale-systems:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.upscale-systems\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "upscale-systems:meta:1",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^UpScale$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "upscale-systems:meta:2",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^upscale$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "upstack-data",
		name: "Upstack Data",
		website: "https://www.upstackdata.com",
		description: "Upstack Data is a toolkit for data-driven marketing that includes multi-touch attribution, advanced C-API integration, and identity resolution capabilities.",
		icon: "UpstackData.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "upstack-data:jsGlobal:0",
				kind: "jsGlobal",
				property: "_upstack",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vaven",
		name: "Vaven",
		website: "https://vaven.co",
		description: "Vaven is a platform that allows users to create and display Ad widgets on websites, enabling the development of a personalized Ad network with precise targeting capabilities.",
		icon: "Vaven.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "vaven:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.vaven\\.co\\/"),
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
	},
	{
		id: "verfacto",
		name: "Verfacto",
		website: "https://www.verfacto.com",
		description: "Verfacto is a marketing analytics tool for eCommerce that identifies factors influencing customer behavior and reveals what converts visitors into customers.",
		icon: "Verfacto.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "verfacto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.verfacto\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verfacto:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.verfacto\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "verfacto:jsGlobal:2",
				kind: "jsGlobal",
				property: "VerfactoEntryPoint",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "verfacto:jsGlobal:3",
				kind: "jsGlobal",
				property: "VerfactoTracker",
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
		id: "vero",
		name: "Vero",
		website: "https://www.getvero.com/",
		description: "Vero is a tool that tracks user actions and targets emails, allowing you to send more personalised emails to customers based on their behaviour.",
		icon: "Vero.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vero:jsGlobal:0",
				kind: "jsGlobal",
				property: "__vero",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vero:jsGlobal:1",
				kind: "jsGlobal",
				property: "_veroq",
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
		id: "vimos",
		name: "Vimos",
		website: "https://vimos.io",
		description: "Vimos is a marketing SaaS specializing in marketing automation.",
		icon: "Vimos.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vimos:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.vimos\\.io\\/"),
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
		id: "vioma",
		name: "Vioma",
		website: "https://www.vioma.de",
		description: "Vioma is an online marketing system.",
		icon: "Vioma.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vioma:dom:0",
				kind: "dom",
				selector: "link[href*='.viomassl.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vioma:jsGlobal:1",
				kind: "jsGlobal",
				property: "viomaManipulate",
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
		id: "viral-loops",
		name: "Viral Loops",
		website: "https://viral-loops.com",
		description: "Viral Loops is a viral and referral marketing platform to launch ranking competitions, sweepstakes, pre-launch and referral programs.",
		icon: "Viral Loops.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "viral-loops:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.viral-loops\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "viral-loops:dom:1",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/viral-loops-wp-integration/assets/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "vizury",
		name: "Vizury",
		website: "https://www.vizury.com",
		description: "Vizury is an ecommerce marketing platform.",
		icon: "Vizury.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vizury:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vizury\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vizury:jsGlobal:1",
				kind: "jsGlobal",
				property: "safariVizury",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vizury:jsGlobal:2",
				kind: "jsGlobal",
				property: "vizury_data",
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
		id: "vnn-sports",
		name: "VNN Sports",
		website: "https://www.vnnsports.net",
		description: "VNN Sports is a school sports marketing software that connects administrators, athletes, parents, fans, and brands around high school sports.",
		icon: "VNNSports.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vnn-sports:jsGlobal:0",
				kind: "jsGlobal",
				property: "vnnEndpoints",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "voltn",
		name: "Voltn",
		website: "https://voltn.agency",
		description: "Voltn is a marketing technology services provider.",
		icon: "Voltn.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "voltn:dom:0",
				kind: "dom",
				selector: "link[href*='//pixel.voltn.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "voyado",
		name: "Voyado",
		website: "https://voyado.com",
		description: "Voyado is a marketing automation and consumer data platform that supports brand customer loyalty by enabling data-driven engagement, personalization, and lifecycle management across marketing channels.",
		icon: "Voyado.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "voyado:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.voyado\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "voyado:jsGlobal:1",
				kind: "jsGlobal",
				property: "VOYADO_GET_CART_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "voyado:jsGlobal:2",
				kind: "jsGlobal",
				property: "VoyadoAnalyticsObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vuture",
		name: "Vuture",
		website: "https://vutu.re",
		description: "Vuture is an all-in-one global technology platform that provides marketing solutions.",
		icon: "Vuture.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vuture:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.vuture\\.net\\/"),
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
		id: "vwo-engage",
		name: "VWO Engage",
		website: "https://vwo.com/engage",
		description: "VWO Engage is a part of the VWO Platform, which is a web-based push notification platform used by SaaS and B2B marketers, online content publishers, and ecommerce store owners.",
		icon: "VWO.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vwo-engage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pushcrew\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vwo-engage:jsGlobal:1",
				kind: "jsGlobal",
				property: "_pushcrewDebuggingQueue",
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
		id: "vyve",
		name: "Vyve+",
		website: "https://vyveplus.ai",
		description: "Vyve+ is an AI-powered platform that integrates marketing and sales automation tools into a single system.",
		icon: "Vyve.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "vyve:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.vyveplus\\.ai"),
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
		id: "warmly",
		name: "Warmly",
		website: "https://www.warmly.ai",
		description: "Warmly is an AI-powered platform that helps generate prospect lists and automate the conversion process.",
		icon: "Warmly.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "warmly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("opps-widget\\.getwarmly\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "warmly:jsGlobal:1",
				kind: "jsGlobal",
				property: "warmly-widget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "warmly:jsGlobal:2",
				kind: "jsGlobal",
				property: "warmly-widget-config",
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
		id: "web4realty",
		name: "Web4Realty",
		website: "https://web4realty.com",
		description: "Web4Realty is an all-in-one marketing and sales platform for real estate professionals.",
		icon: "Web4Realty.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "web4realty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("idxjs\\.web4realty\\.com"),
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
		id: "webengage",
		name: "WebEngage",
		website: "https://webengage.com",
		description: "WebEngage is a customer data platform and marketing automation suite.",
		icon: "WebEngage.png",
		categories: [
			"marketing-automation",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "webengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webengage\\.co(?:m)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webengage:jsGlobal:1",
				kind: "jsGlobal",
				property: "webengage.__v",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "webinaris",
		name: "Webinaris",
		website: "https://www.webinaris.com",
		description: "Webinaris is a platform that automates customer acquisition, allowing businesses to attract more customers with significantly reduced effort.",
		icon: "Webinaris.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "webinaris:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("webinaris_load"),
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
		id: "webpushr",
		name: "Webpushr",
		website: "https://www.webpushr.com",
		description: "Webpushr is a web push notification platform that supports mobile and desktop devices.",
		icon: "webpushr.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "webpushr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.webpushr\\.com\\/app\\.min\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "webpushr:jsGlobal:1",
				kind: "jsGlobal",
				property: "WebPushr.notificationCard",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webpushr:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpushr_display_button",
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
	},
	{
		id: "wheel-of-popups",
		name: "Wheel of Popups",
		website: "https://wheelofpopups.com",
		description: "Wheel of Popups is a tool that triggers an exit-intent popup designed to capture leaving visitors and support conversion optimization.",
		icon: "WheelOfPopups.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wheel-of-popups:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.wheelofpopups\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wheel-of-popups:jsGlobal:1",
				kind: "jsGlobal",
				property: "initWheelOfPopups",
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
		id: "wheely-sales",
		name: "Wheely Sales",
		website: "https://wheelysales.com",
		description: "Wheely Sales is a tool that boosts email opt-in rates using a gamified exit intent popup designed to engage users as they leave a website.",
		icon: "WheelSales.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wheely-sales:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.wheelysales\\.com\\/"),
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
		id: "whitespark-seo",
		name: "Whitespark SEO",
		website: "https://whitespark.ca/seo-services",
		description: "Aims to help improve rankings and drive business via Google Search.",
		icon: "Whitespark.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "whitespark-seo:dom:0",
				kind: "dom",
				selector: "script[data-gfspw*='rb.whitespark.ca'], div[data-url*='rb.whitespark.ca']",
				description: "DOM selector matches a known technology marker.",
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
		id: "wicked-reports",
		name: "Wicked Reports",
		website: "https://www.wickedreports.com",
		description: "Wicked Reports is a marketing analytics platform that provides subscription-based, actionable reports on marketing results at each stage of the customer's journey from first click to sale.",
		icon: "WickedReports.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wicked-reports:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.wickedreports\\.com\\/"),
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
		id: "wigzo",
		name: "Wigzo",
		website: "https://www.wigzo.com/",
		description: "Wigzo is e-commerce marketing automation platform that helps businesses of every size dig deeper into data to find opportunities to increase their sales and revenue.",
		icon: "Wigzo.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wigzo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.wigzo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wigzo:jsGlobal:1",
				kind: "jsGlobal",
				property: "wigzo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wishloop",
		name: "Wishloop",
		website: "https://wishloop.com",
		description: "Wishloop is a lead generation platform that enables the creation of marketing campaigns without coding, using structured workflows and tools designed to support conversion-focused data collection.",
		icon: "Wishloop.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wishloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.wishloop\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wolfeo",
		name: "Wolfeo",
		website: "https://wolfeo.fr",
		description: "Wolfeo is an online platform for selling digital products and services, catering to coaches, consultants, and entrepreneurs.",
		icon: "Wolfeo.svg",
		categories: [
			"marketing-automation",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "wolfeo:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^wolfeo_new_session_5$", "i"),
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
	},
	{
		id: "woochat",
		name: "WooChat",
		website: "https://woochat.io",
		description: "WooChat is a marketing automation tool that helps store owners to grow their business.",
		icon: "WooChat.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "woochat:dom:0",
				kind: "dom",
				selector: "link[href*='app.woochat.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "woochat:jsGlobal:1",
				kind: "jsGlobal",
				property: "woochat_wa_chat_init",
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
		id: "woorise",
		name: "Woorise",
		website: "https://woorise.com",
		description: "Woorise is a marketing platform that enables the creation of lead generation landing pages.",
		icon: "Woorise.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "woorise:dom:0",
				kind: "dom",
				selector: "script#woorise-embed-js-after",
				description: "DOM selector matches a known technology marker.",
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
		id: "wootric",
		name: "Wootric",
		website: "https://www.wootric.com",
		description: "Wootric is a customer feedback platform designed to enhance customer experience management for digital applications and B2B SaaS.",
		icon: "Wootric.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wootric:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wootric\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wootric:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.wootric\\.com"),
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
		id: "wordlift",
		name: "WordLift",
		website: "https://wordlift.io",
		description: "WordLift is an AI tool that analyzes content, identifies key business topics, and enables the insertion of semantic markup without needing technical skills.",
		icon: "WordLift.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wordlift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloud\\.wordlift\\.io\\/"),
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
		id: "wp-seo-ai",
		name: "WP SEO AI",
		website: "https://wpseoai.com",
		description: "WP SEO AI is a tool that optimizes brand visibility by positioning companies as expert answers across search engines and AI platforms like Google and GPT.",
		icon: "WPSEOAI.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wp-seo-ai:dom:0",
				kind: "dom",
				selector: "script[id*='seoaic_front_main_js-js']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "wunderkind",
		name: "Wunderkind",
		website: "https://www.wunderkind.co",
		description: "Wunderkind (Formerly BounceX) is a software for behavioural marketing technologies, created to de-anonymise site visitors, analyse their digital behaviour and create relevant digital experiences regardless of channel or device.",
		icon: "Wunderkind.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wunderkind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bounceexchange\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wunderkind:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smarterhq\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wunderkind:dom:2",
				kind: "dom",
				selector: "link[href*='.smarterhq.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wunderkind:jsGlobal:3",
				kind: "jsGlobal",
				property: "bouncex",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wunderkind:header:4",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.smarterhq\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "wunderkind:header:5",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.smarterhq\\.io", "i"),
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
		id: "wyng",
		name: "Wyng",
		website: "https://www.wyng.com",
		description: "Wyng is a platform that connects audiences and drives consumer actions across various marketing channels.",
		icon: "Wyng.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "wyng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.offerpop\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wyng:dom:1",
				kind: "dom",
				selector: "iframe[src*='//offerpop.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "xtremepush",
		name: "Xtremepush",
		website: "https://xtremepush.com",
		description: "Xtremepush is a customer engagement, personalisation and data platform. It's purpose-built for multichannel and mobile marketing.",
		icon: "Xtremepush.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "xtremepush:jsGlobal:0",
				kind: "jsGlobal",
				property: "xtremepush",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "yacla",
		name: "Yacla",
		website: "https://yacla.com",
		description: "Yacla is a service that delivers prequalified, engaged sales contacts directly to a CRM at a predetermined fixed price.",
		icon: "Yacla.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "yacla:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.yac\\.la"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yeps",
		name: "Yeps",
		website: "https://yeps.io",
		description: "Yeps is a minimalist bar that can be added to the top or bottom of your website to collect visitor’s emails and promote content.",
		icon: "Yeps.svg",
		categories: [
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "yeps:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.yeps\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yeps:jsGlobal:1",
				kind: "jsGlobal",
				property: "Yeps",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yoast-seo",
		name: "Yoast SEO",
		website: "https://yoast.com/wordpress/plugins/seo/",
		description: "Yoast SEO is a search engine optimisation plugin for WordPress and other platforms.",
		icon: "Yoast SEO.png",
		categories: [
			"marketing-automation",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "yoast-seo:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast (?:WordPress )?SEO plugin v([^\\s]+) -"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yoast-seo:html:1",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast SEO Premium plugin v(?:[^\\s]+) \\(Yoast SEO v([^\\s]+)\\) -"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yoast-seo:dom:2",
				kind: "dom",
				selector: "script.yoast-schema-graph",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yoast-seo:dom:3",
				kind: "dom",
				selector: "script[class*='yoast-schema-graph']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yoast-seo:html:4",
				kind: "html",
				pattern: new RegExp("<!-- this site is optimized with the yoast (?:wordpress )?seo plugin v([^\\s]+) -"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yoast-seo:html:5",
				kind: "html",
				pattern: new RegExp("<!-- this site is optimized with the yoast seo premium plugin v(?:[^\\s]+) \\(yoast seo v([^\\s]+)\\) -"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "yoast-seo-for-shopify",
		name: "Yoast SEO for Shopify",
		website: "https://yoast.com/shopify/apps/yoast-seo/",
		description: "Yoast SEO for Shopify optimizes Shopify shops.",
		icon: "yoast-seo-shopify.png",
		categories: [
			"marketing-automation",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "yoast-seo-for-shopify:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with Yoast SEO for Shopify -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yoast-seo-for-shopify:dom:1",
				kind: "dom",
				selector: "script#yoast-schema-graph",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yoast-seo-for-shopify:html:2",
				kind: "html",
				pattern: new RegExp("<!-- this site is optimized with yoast seo for shopify -->"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "yoast-seo-premium",
		name: "Yoast SEO Premium",
		website: "https://yoast.com/wordpress/plugins/seo/",
		description: "Yoast SEO Premium is a search engine optimisation plugin for WordPress and other platforms.",
		icon: "Yoast SEO.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "yoast-seo-premium:html:0",
				kind: "html",
				pattern: new RegExp("<!-- This site is optimized with the Yoast SEO Premium plugin v([^\\s]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yoast-seo-premium:html:1",
				kind: "html",
				pattern: new RegExp("<!-- this site is optimized with the yoast seo premium plugin v([^\\s]+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
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
		},
	},
	{
		id: "yotpo-smsbump",
		name: "Yotpo SMSBump",
		website: "https://www.yotpo.com/platform/smsbump-sms-marketing/",
		description: "SMS Bump is a SMS marketing and automations app which was acquired by Yotpo.",
		icon: "Yotpo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "yotpo-smsbump:jsGlobal:0",
				kind: "jsGlobal",
				property: "SMSBumpForm",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yotpo-smsbump:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\/smsbump_timer\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
		],
	},
	{
		id: "youlead",
		name: "YouLead",
		website: "https://www.youlead.pl",
		description: "YouLead is a sales and marketing automation system from Poland that helps businesses manage leads, streamline customer engagement, and optimize marketing workflows through integrated digital tools.",
		icon: "YouLead.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "youlead:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.youlead\\.pl"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "youlead:jsGlobal:1",
				kind: "jsGlobal",
				property: "YouLeadDynamicContent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "youlead:jsGlobal:2",
				kind: "jsGlobal",
				property: "YouLeadHtmlBlocks",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zapnito",
		name: "Zapnito",
		website: "https://zapnito.com",
		description: "Zapnito is a platform that enables B2B organizations to manage and scale digital engagement, education, and community-driven growth through integrated content and experience tools.",
		icon: "Zapnito.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zapnito:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.zapnito\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "zapnito:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkzapnito_web",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zapnito:jsGlobal:2",
				kind: "jsGlobal",
				property: "zapnito.abilities",
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
		id: "zaxaa",
		name: "Zaxaa",
		website: "https://zaxaa.com",
		description: "Zaxaa is a sales funnel service designed to streamline the process of managing leads, nurturing prospects, and converting them into customers.",
		icon: "Zaxaa.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zaxaa:dom:0",
				kind: "dom",
				selector: "a[href*='.zaxaa.com'] > img[src*='www.zaxaa.com']",
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
		id: "zenrez",
		name: "Zenrez",
		website: "https://zenrez.com",
		description: "Zenrez is a provider of sales and marketing software designed for boutique fitness studios, with a focus on revenue management.",
		icon: "Zenrez.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zenrez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.zenrez\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zeotap",
		name: "Zeotap",
		website: "https://zeotap.com",
		description: "Zeotap is a customer intelligence platform that helps brands better understand their customers and predict behaviors.",
		icon: "Zeotap.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zeotap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zeotap\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zeotap:dom:1",
				kind: "dom",
				selector: "link[href*='.zeotap.com']",
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
		id: "zeppelin",
		name: "Zeppelin",
		website: "https://www.zeppelin-group.com",
		description: "Zeppelin is an internet marketing provider platform designed to support digital advertising and online promotional strategies.",
		icon: "Zeppelin.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zeppelin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloud\\.zeppelin-group\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zevioo",
		name: "Zevioo",
		website: "https://zevioo.com",
		description: "Zevioo is an AI-powered platform that helps ecommerce stores improve conversions, customer loyalty, and revenue through automated optimization and data-driven personalization.",
		icon: "Zevioo.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zevioo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zevioo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zipleads",
		name: "Zipleads",
		website: "https://zipleads.com.au",
		description: "Zipleads is a lead conversion platform that helps businesses capture, manage, and convert potential customers through automated lead tracking and engagement tools.",
		icon: "Zipleads.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zipleads:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.zipleads\\.com\\.au"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "zipleads:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^ZipLeads$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "zipleads:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^zipleads$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "zotabox",
		name: "Zotabox",
		website: "https://info.zotabox.com",
		description: "Zotabox is marketing tool which includes popups, header bars, page/form builder, testimonial, live chat, etc.",
		icon: "zotabox.png",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zotabox:jsGlobal:0",
				kind: "jsGlobal",
				property: "Zotabox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zotabox:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zotabox_Init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "zuberance",
		name: "Zuberance",
		website: "https://zuberance.com",
		description: "Zuberance is a platform that transforms enthusiastic customers into a marketing force, driving recommendations and sales for leading B2B and B2C brands.",
		icon: "Zuberance.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zuberance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zuberance\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zuberance:dom:1",
				kind: "dom",
				selector: "link[href*='static.zuberance.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zurple",
		name: "Zurple",
		website: "https://zurple.com",
		description: "Zurple is a real estate marketing software that provides a solution for agents to manage leads, automate follow-ups, and optimize client engagement.",
		icon: "Zurple.svg",
		categories: [
			"marketing-automation",
		],
		rules: [
			{
				id: "zurple:jsGlobal:0",
				kind: "jsGlobal",
				property: "Zurple.Client",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
] as const satisfies readonly TechnologyDefinition[];
