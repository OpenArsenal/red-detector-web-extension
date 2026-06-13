import type { TechnologyDefinition } from '../types';

export const privacyComplianceTechnologyDefinitions = [
	{
		id: "2b-advice",
		name: "2B Advice",
		website: "https://www.2b-advice.com/en/data-privacy-software/cookie-consent-plugin/",
		description: "2B Advice provides a plug-in to manage GDPR cookie consent.",
		icon: "2badvice.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "2b-advice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("2badvice-cdn\\.azureedge\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "2b-advice:jsGlobal:1",
				kind: "jsGlobal",
				property: "BBCookieControler",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "acconsento-click",
		name: "Acconsento.click",
		website: "https://shop.acconsento.click",
		description: "Acconsento.click is a software solution designed to assist users in achieving cookie policy compliance for their websites.",
		icon: "Acconsento.click.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "acconsento-click:dom:0",
				kind: "dom",
				selector: "link[href*='//acconsento.click/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acconsento-click:jsGlobal:1",
				kind: "jsGlobal",
				property: "AcconsentoAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acconsento-click:jsGlobal:2",
				kind: "jsGlobal",
				property: "acconsentoCreateElement",
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
		id: "adfixus",
		name: "AdFixus",
		website: "https://www.adfixus.com",
		description: "AdFixus is a privacy-focused solution that enables businesses to manage their data and empower individuals with consent control, addressing the decline of third-party cookies.",
		icon: "AdFixus.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "adfixus:jsGlobal:0",
				kind: "jsGlobal",
				property: "AfxIdentity",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfixus:jsGlobal:1",
				kind: "jsGlobal",
				property: "_afxProfile",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adfixus:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^afx_profile_hs$", "i"),
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
		id: "adopt",
		name: "AdOpt",
		website: "https://goadopt.io",
		description: "AdOpt is a consent tool that prioritises privacy and usability towards the LGPD.",
		icon: "AdOpt.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "adopt:jsGlobal:0",
				kind: "jsGlobal",
				property: "adoptApp.domain",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adopt:jsGlobal:1",
				kind: "jsGlobal",
				property: "adopt_website_code",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adopt:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.goadopt\\.io\\/"),
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
			"svelte",
		],
	},
	{
		id: "adroll-cmp-system",
		name: "AdRoll CMP System",
		website: "https://www.adroll.com/features/consent-management",
		description: "AdRoll CMP System is a consent management solution.",
		icon: "AdRoll.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "adroll-cmp-system:jsGlobal:0",
				kind: "jsGlobal",
				property: "__adroll_consent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adroll-cmp-system:jsGlobal:1",
				kind: "jsGlobal",
				property: "__adroll_consent_is_gdpr",
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
		id: "alfright",
		name: "Alfright",
		website: "https://www.alfright.eu",
		description: "Alfright is a service that ensures GDPR compliance for websites, enhancing privacy standards.",
		icon: "Alfright.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "alfright:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.alfright\\.eu\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alfright:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.alfright.eu/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "axeptio",
		name: "Axeptio",
		website: "https://www.axeptio.eu",
		description: "Axeptio is a trusted third party that collects and archive users' consent in a GDPR compliant fashion.",
		icon: "Axeptio.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "axeptio:dom:0",
				kind: "dom",
				selector: "img[src*='axeptio.imgix.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "axeptio:jsGlobal:1",
				kind: "jsGlobal",
				property: "axeptioSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "axeptio:jsGlobal:2",
				kind: "jsGlobal",
				property: "axeptioSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "axeptio:dom:3",
				kind: "dom",
				selector: "img[src*='axeptio.imgix.net/'], div#axeptio_overlay",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "axeptio:jsGlobal:4",
				kind: "jsGlobal",
				property: "axeptioBuildTimestamp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "axeptio:jsGlobal:5",
				kind: "jsGlobal",
				property: "axeptioHandleVendors",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "axeptio:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^axeptio_all_vendors$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "axeptio:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^axeptio_authorized_vendors$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "axeptio:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^axeptio_cookies$", "i"),
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
		id: "baycloud",
		name: "Baycloud",
		website: "https://baycloud.com",
		description: "Baycloud is an ePrivacy compliance tool that manages user consent, data handling, and regulatory requirements for websites and digital services.",
		icon: "Baycloud.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "baycloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.baycloud\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "baycloud:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.baycloud.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "biskoui",
		name: "biskoui",
		website: "https://biskoui.ch",
		description: "biskoui is a Swiss platform designed to manage digital consent across services and technologies beyond traditional cookie-based methods.",
		icon: "biskoui.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "biskoui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.biskoui\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "biskoui:jsGlobal:1",
				kind: "jsGlobal",
				property: "biskouiScriptLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "biskoui:jsGlobal:2",
				kind: "jsGlobal",
				property: "biskouiSettings",
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
		id: "borlabs-cookie",
		name: "Borlabs Cookie",
		website: "https://borlabs.io/borlabs-cookie/",
		description: "Borlabs Cookie is a GDPR cookie consent plugin for WordPress.",
		icon: "Borlabs Cookie.svg",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "borlabs-cookie:dom:0",
				kind: "dom",
				selector: "#BorlabsCookieBox",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "borlabs-cookie:jsGlobal:1",
				kind: "jsGlobal",
				property: "borlabsCookieConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "byscuit",
		name: "Byscuit",
		website: "https://www.byscuit.com",
		description: "Byscuit is a tool for managing cookies on websites, allowing users to control and customise their cookie preferences for enhanced privacy and browsing experience.",
		icon: "Byscuit.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "byscuit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.byscuit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "byscuit:jsGlobal:1",
				kind: "jsGlobal",
				property: "onloadByscuit",
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
		id: "c15t",
		name: "c15t",
		website: "https://c15t.com",
		description: "c15t is an open source framework for managing cookies, consent, and privacy compliance.",
		icon: "c15t.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "c15t:jsGlobal:0",
				kind: "jsGlobal",
				property: "c15tStore.getInitialState",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "civic",
		name: "CIVIC",
		website: "https://www.civicuk.com/cookie-control",
		description: "Civic provides cookie control for user consent and the use of cookies.",
		icon: "civic.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "civic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cc\\.cdn\\.civiccomputing\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "clarip",
		name: "Clarip",
		website: "https://www.clarip.com",
		description: "Clarip is an enterprise data privacy and risk management platform.",
		icon: "Clarip.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "clarip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/cdn\\.clarip\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clarip:jsGlobal:1",
				kind: "jsGlobal",
				property: "claripCdnHost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clarip:jsGlobal:2",
				kind: "jsGlobal",
				property: "claripHost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clarip:jsGlobal:3",
				kind: "jsGlobal",
				property: "pageData.claripConsentJSUrl",
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
		id: "clickio",
		name: "clickio",
		website: "https://www.gdpr.clickio.com/",
		description: "Clickio Consent Tool collects and communicates consent both to IAB Framework vendors and to Google Ads products.",
		icon: "clickio.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "clickio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clickio\\.mgr\\.consensu\\.org\\/t\\/consent_[0-9]+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "clickskeks",
		name: "Clickskeks",
		website: "https://www.clickskeks.at/",
		description: "Clickskeks is an all-in-one cookie consent management platform for businesses.",
		icon: "Clickskeks.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "clickskeks:jsGlobal:0",
				kind: "jsGlobal",
				property: "Clickskeks",
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
		id: "clym",
		name: "Clym",
		website: "https://clym.io",
		description: "Clym is a data privacy tool designed to support compliance with data protection obligations.",
		icon: "Clym.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "clym:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.clym-sdk\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "clym:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^clym_compliance_sid$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "commanders-act-trustcommander",
		name: "Commanders Act TrustCommander",
		website: "https://www.commandersact.com/en/solutions/trustcommander/",
		description: "Commanders Act TrustCommander is a consent management platform (CMP) which allows you to comply with the general data protection regulation (GDPR) regulation in terms of collecting consent.",
		icon: "Commanders Act.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "commanders-act-trustcommander:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trustcommander\\.net\\/privacy\\/.+_v([\\d]+)_([\\d]+)\\.js"),
				version: {
					source: "match",
					template: "$1.$2",
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
		id: "complydog",
		name: "ComplyDog",
		website: "https://complydog.com",
		description: "ComplyDog is GDPR compliance software that enables software companies to manage data subject requests, automate Data Processing Agreement (DPA) signature workflows, and respond to common compliance inquiries from prospective customers.",
		icon: "ComplyDog.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "complydog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.complydog\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "complydog:jsGlobal:1",
				kind: "jsGlobal",
				property: "complydog.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "complydog:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^complydog\\-marketing\\.first\\-touch\\-url$", "i"),
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
	},
	{
		id: "consent-manager",
		name: "Consent Manager",
		website: "https://www.consentmanager.net",
		description: "Consent Manager is a provider ensuring GDPR and CCPA compliance for websites.",
		icon: "ConsentManager.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "consent-manager:jsGlobal:0",
				kind: "jsGlobal",
				property: "cmpCCPA",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:1",
				kind: "jsGlobal",
				property: "cmpConsentPurposes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:2",
				kind: "jsGlobal",
				property: "cmpConsentString",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:3",
				kind: "jsGlobal",
				property: "cmpCustomPurposeConsent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:4",
				kind: "jsGlobal",
				property: "cmpGDPR",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:5",
				kind: "jsGlobal",
				property: "cmpGoogleVendorsConsent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:6",
				kind: "jsGlobal",
				property: "cmp_closevendor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:jsGlobal:7",
				kind: "jsGlobal",
				property: "cmp_vendordelivery",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "consent-manager:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^__cmpcccx274$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "consent-manager:cookie:9",
				kind: "cookie",
				keyPattern: new RegExp("^__cmpconsentx274$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "consent-manager:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^__cmpiuid$", "i"),
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
		id: "conversant-consent-tool",
		name: "Conversant Consent Tool",
		website: "https://www.conversantmedia.eu/consent-tool",
		description: "Conversant Consent Tool is a free tool to gain GDPR and ePD compliant consent for digital advertising.",
		icon: "Conversant.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "conversant-consent-tool:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conversant\\.mgr\\.consensu\\.org\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "conversant-consent-tool:jsGlobal:1",
				kind: "jsGlobal",
				property: "conversant",
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
		id: "cookie-control",
		name: "Cookie Control",
		website: "https://www.civicuk.com/cookie-control",
		description: "Cookie Control is a cookie consent management tool for websites.",
		icon: "CookieControl.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookie-control:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cc\\.cdn\\.civiccomputing\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookie-control:jsGlobal:1",
				kind: "jsGlobal",
				property: "CookieControl",
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
		id: "cookie-information",
		name: "Cookie Information",
		website: "https://cookieinformation.com",
		description: "Cookie Information is a privacy tech company that develops software that helps making company websites and mobile apps GDPR and ePrivacy compliant.",
		icon: "Cookie Information.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookie-information:jsGlobal:0",
				kind: "jsGlobal",
				property: "CookieInformation.config.cdnUrl",
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
		id: "cookie-notice",
		name: "Cookie Notice",
		website: "https://wordpress.org/plugins/cookie-notice",
		description: "Cookie Notice provides a simple, customizable website banner that can be used to help your website comply with certain cookie consent requirements under the EU GDPR cookie law and CCPA regulations and includes seamless integration with Cookie Compliance to help your site comply with the latest updates to existing consent laws.",
		icon: "Cookie Notice.png",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cookie-notice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/cookie-notice\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "cookie-script",
		name: "Cookie Script",
		website: "https://cookie-script.com",
		description: "Cookie-Script automatically scans, categorizes and adds description to all cookies found on your website.",
		icon: "CookieScript.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookie-script:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookie-script\\.com\\/"),
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
		id: "cookie-seal",
		name: "Cookie Seal",
		website: "https://cookieseal.com",
		description: "Cookie Seal is a tool or system that helps you manage and configure the use of cookies on your website in accordance with data protection laws, ensuring compliance with relevant regulations.",
		icon: "Cookie Seal.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookie-seal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookieseal\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookie-seal:dom:1",
				kind: "dom",
				selector: "link[href*='assets.cookieseal.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cookie-seal:jsGlobal:2",
				kind: "jsGlobal",
				property: "CookieSeal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cookie-seal:jsGlobal:3",
				kind: "jsGlobal",
				property: "cookieSeal.consentEnabled",
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
		id: "cookiebar",
		name: "CookieBAR",
		website: "https://cookie-bar.eu",
		description: "CookieBAR is a tool that helps websites comply with the EU cookie law by managing user consent for cookies in accordance with regulatory requirements.",
		icon: "CookieBAR.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookiebar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/cookie-bar\\/cookiebar-latest\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookiebar:jsGlobal:1",
				kind: "jsGlobal",
				property: "setupCookieBar",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "cookiebot",
		name: "Cookiebot",
		website: "https://www.cookiebot.com",
		description: "Cookiebot is a cloud-driven solution that automatically controls cookies and trackers, enabling full GDPR/ePrivacy and CCPA compliance for websites.",
		icon: "Cookiebot.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookiebot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.cookiebot\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookiebot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Cookiebot.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "cookiefirst",
		name: "CookieFirst",
		website: "https://cookiefirst.com",
		description: "CookieFirst is an GDPR and CCPA compliant consent management platform.",
		icon: "CookieFirst.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookiefirst:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.cookiefirst\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookiefirst:jsGlobal:1",
				kind: "jsGlobal",
				property: "cookiefirst_show_settings",
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
		id: "cookiehub",
		name: "CookieHub",
		website: "https://www.cookiehub.com",
		description: "CookieHub is a platform that helps website owners comply with data privacy regulations such as GDPR and CCPA by providing tools for managing cookie consent, tracking consent preferences, and ensuring legal compliance related to online tracking and data collection practices.",
		icon: "CookieHub.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookiehub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookiehub\\.net\\/.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookiehub:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("cookiehub\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cookietractor",
		name: "CookieTractor",
		website: "https://www.cookietractor.com",
		description: "CookieTractor is a cookie consent management platform that helps websites comply with privacy regulations like GDPR and CCPA.",
		icon: "CookieTractor.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookietractor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cookietractor\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookietractor:jsGlobal:1",
				kind: "jsGlobal",
				property: "cookieTractor",
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
		id: "cookieyes",
		name: "CookieYes",
		website: "https://www.cookieyes.com/",
		description: "CookieYes is a cookie consent and compliance platform for websites.",
		icon: "cookieyes.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookieyes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cookieyes\\.com\\/client_data\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookieyes:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-cookieyes\\.com\\/client_data\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookieyes:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/cookie-law-info\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cookieyes:dom:3",
				kind: "dom",
				selector: "#cookie-law-info-bar",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cookieyes:dom:4",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/cookie-law-info/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cookieyes:jsGlobal:5",
				kind: "jsGlobal",
				property: "cookieYes",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "crownpeak-universal-consent-platform",
		name: "CrownPeak Universal Consent Platform",
		website: "https://www.crownpeak.com/products/privacy-and-consent-management",
		description: "CrownPeak Universal Consent Platform is a tool for managing user consent and ensuring compliance with data privacy regulations.",
		icon: "CrownPeak.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "crownpeak-universal-consent-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.evidon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crownpeak-universal-consent-platform:dom:1",
				kind: "dom",
				selector: "a[href*='info.evidon.com/pub_info/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "crownpeak-universal-consent-platform:jsGlobal:2",
				kind: "jsGlobal",
				property: "EB.EvidonConsent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crownpeak-universal-consent-platform:jsGlobal:3",
				kind: "jsGlobal",
				property: "evidon",
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
		id: "cybot",
		name: "Cybot",
		website: "https://www.cybot.com/",
		description: "Cybot is a tool that facilitates compliance with data privacy laws for website operators and marketers.",
		icon: "Cybot.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "cybot:dom:0",
				kind: "dom",
				selector: "div#CybotCookiebotDialog",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "delta-commerce",
		name: "Delta Commerce",
		website: "https://www.deltacommerce.com",
		description: "Delta Commerce is a cookie registration and consent management platform that enables websites to comply with privacy regulations by collecting, storing, and managing user consent preferences.",
		icon: "DeltaCommerce.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "delta-commerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.deltacommerce\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "didomi",
		name: "Didomi",
		website: "https://www.didomi.io/en/consent-preference-management",
		description: "Didomi is a consent management platform helping brands and businesses collect, store and leverage their customer consents.",
		icon: "didomi.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "didomi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.privacy-center\\.org\\/.*\\/loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "efilli",
		name: "Efilli",
		website: "https://efilli.com",
		description: "Efilli is a tool used to manage cookies on websites, providing users with data privacy control through GDPR compliance.",
		icon: "Efilli.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "efilli:jsGlobal:0",
				kind: "jsGlobal",
				property: "EFILLI_GLOBAL_OPTIONS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "efilli:jsGlobal:1",
				kind: "jsGlobal",
				property: "Efilli",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "efilli:jsGlobal:2",
				kind: "jsGlobal",
				property: "efilli.__cookieBlocker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "efilli:jsGlobal:3",
				kind: "jsGlobal",
				property: "efilliSdk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "efilli:jsGlobal:4",
				kind: "jsGlobal",
				property: "efilliSdkConfig",
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
		id: "enzuzo",
		name: "Enzuzo",
		website: "https://www.enzuzo.com",
		description: "Enzuzo is a data privacy management solution that helps organizations manage consent, comply with privacy regulations, and maintain control over personal data across digital platforms.",
		icon: "Enzuzo.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "enzuzo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.enzuzo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "enzuzo:jsGlobal:1",
				kind: "jsGlobal",
				property: "__ENZUZO_STARTED__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "enzuzo:jsGlobal:2",
				kind: "jsGlobal",
				property: "enzuzoGtmConsentObj",
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
		id: "eucookie-eu",
		name: "eucookie.eu",
		website: "https://www.eucookie.eu/",
		icon: "eucookie.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "eucookie-eu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("eucookie\\.eu\\/public\\/gdpr-cookie-consent\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "evidon",
		name: "Evidon",
		website: "https://www.evidon.com",
		description: "Evidon is a transparency company that helps organizations educate consumers on how and why data is collected, as well as provide consumers with the ability to give and withdraw consent to their data being used.",
		icon: "Evidon.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "evidon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.evidon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "evidon:dom:1",
				kind: "dom",
				selector: "a[href*='info.evidon.com/pub_info/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "evidon:jsGlobal:2",
				kind: "jsGlobal",
				property: "EB.EvidonConsent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "evidon:jsGlobal:3",
				kind: "jsGlobal",
				property: "evidon",
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
		id: "funding-choices",
		name: "Funding Choices",
		website: "https://developers.google.com/funding-choices",
		description: "Funding Choices is a messaging tool that can help you comply with the EU General Data Protection Regulation (GDPR), and recover lost revenue from ad blocking users.",
		icon: "Google.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "funding-choices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fundingchoicesmessages\\.google\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "funding-choices:dom:1",
				kind: "dom",
				selector: ".fc-consent-root, iframe[name='googlefcLoaded'], iframe[name='googlefcPresent'], .fc-dialog, .fc-choice-dialog",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "funding-choices:jsGlobal:2",
				kind: "jsGlobal",
				property: "__googlefc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "funding-choices:dns:3",
				kind: "dns",
				valuePattern: new RegExp("fundingchoicesmessages", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "gdpr-cookie-consent-plugin-by-webtoffee",
		name: "GDPR Cookie Consent Plugin by Webtoffee",
		website: "https://www.webtoffee.com/product/gdpr-cookie-consent/",
		description: "GDPR Cookie Consent Plugin by Webtoffee is a WordPress solution that ensures GDPR and CCPA compliance, supports IAB standards, and integrates with Google Consent Mode.",
		icon: "GDPRCookieConsent.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "gdpr-cookie-consent-plugin-by-webtoffee:jsGlobal:0",
				kind: "jsGlobal",
				property: "webtoffee._wccConsentStore",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gdpr-cookie-consent-plugin-by-webtoffee:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^wt_consent$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "getcomplied",
		name: "GetComplied",
		website: "https://www.getcomplied.com",
		description: "GetComplied is a GDPR compliance platform for ecommerce platforms that supports the management of data protection requirements and regulatory obligations.",
		icon: "GetComplied.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "getcomplied:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getcomplied\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getcomplied:jsGlobal:1",
				kind: "jsGlobal",
				property: "getComplied.api",
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
		id: "hubspot-cookie-policy-banner",
		name: "HubSpot Cookie Policy Banner",
		website: "https://knowledge.hubspot.com/reports/customize-your-cookie-tracking-settings-and-privacy-policy-alert",
		description: "HubSpot Cookie Policy banner is a cookie compliance functionality from HubSpot.",
		icon: "HubSpot.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "hubspot-cookie-policy-banner:dom:0",
				kind: "dom",
				selector: "#hs-eu-cookie-confirmation",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "hulkapps-gdpr-ccpa-compliance-manager",
		name: "HulkApps GDPR/CCPA Compliance Manager",
		website: "https://www.hulkapps.com/products/gdpr-ccpa-cookie-manager-shopify-app",
		description: "HulkApps GDPR/CCPA Compliance Manager is a consent management solution.",
		icon: "HulkApps.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hulkapps-gdpr-ccpa-compliance-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookiebar\\.hulkapps\\.com\\/hulk_cookie_bar\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hulkapps-gdpr-ccpa-compliance-manager:jsGlobal:1",
				kind: "jsGlobal",
				property: "hulkSetCookie",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "iubenda",
		name: "iubenda",
		website: "https://www.iubenda.com",
		description: "iubenda is a compliance software used by businesses for their websites and apps.",
		icon: "iubenda.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "iubenda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("iubenda\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "iubenda:jsGlobal:1",
				kind: "jsGlobal",
				property: "_iub",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "iubenda:jsGlobal:2",
				kind: "jsGlobal",
				property: "addIubendaCs",
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
		id: "ketch",
		name: "Ketch",
		website: "https://www.ketch.com",
		description: "Ketch is a data control platform that manages compliance with privacy regulations.",
		icon: "Ketch.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "ketch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ketchcdn\\.com\\/"),
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
		id: "klaro",
		name: "Klaro",
		website: "https://heyklaro.com",
		description: "Klaro is a simple consent management platform and privacy tool.",
		icon: "Klaro.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "klaro:jsGlobal:0",
				kind: "jsGlobal",
				property: "klaro",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klaro:jsGlobal:1",
				kind: "jsGlobal",
				property: "klaroConfig",
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
		},
	},
	{
		id: "kpa",
		name: "KPA",
		website: "https://kpa.io",
		description: "KPA is a compliance solutions provider offering software, training, and advisory services that support automotive dealerships and related businesses in meeting regulatory and operational requirements.",
		icon: "KPA.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "kpa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("publiccdn\\.mykpa\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "legal-monster",
		name: "Legal Monster",
		website: "https://www.legalmonster.com",
		description: "Legal Monster is a consent and privacy management solution, which helps businesses maintain compliance with ePrivacy, marketing requirements and General Data Protection Regulation (GDPR).",
		icon: "Legal Monster.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "legal-monster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.legalmonster\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "legal-monster:jsGlobal:1",
				kind: "jsGlobal",
				property: "legal.__VERSION__",
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
				"low",
				"recurring",
			],
		},
	},
	{
		id: "liveramp-pcm",
		name: "LiveRamp PCM",
		website: "https://liveramp.com/our-platform/preference-consent-management",
		description: "LiveRamp PCM is a preference and consent management platform that enables comply with the ePrivacy Directive, GDPR, CCPA, and other data protection and privacy laws and regulations.",
		icon: "LiveRamp.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "liveramp-pcm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gdpr\\.privacymanager\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "liveramp-pcm:dom:1",
				kind: "dom",
				selector: "iframe[src*='gdpr-consent-tool\\.privacymanager\\.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "liveramp-pcm:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpJsonpLiverampGdprCmp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "metomic",
		name: "Metomic",
		website: "https://metomic.io",
		description: "Metomic is a platform that helps businesses manage and comply with data privacy regulations, offering tools for consent management, data governance, and compliance with data privacy laws such as GDPR and CCPA.",
		icon: "metomic.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "metomic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metomic\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "metomic:dom:1",
				kind: "dom",
				selector: "link[href*='.metomic.io']",
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
		id: "moove-gdpr-consent",
		name: "Moove GDPR Consent",
		website: "https://www.mooveagency.com/wordpress/gdpr-cookie-compliance-plugin",
		description: "Moove GDPR Consent is a GDPR Cookie Compliance plugin for Wordpress.",
		icon: "Moove.svg",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "moove-gdpr-consent:jsGlobal:0",
				kind: "jsGlobal",
				property: "moove_frontend_gdpr_scripts",
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
			"wordpress",
		],
	},
	{
		id: "my-agile-privacy",
		name: "My Agile Privacy",
		website: "https://www.myagileprivacy.com/en/",
		description: "My Agile Privacy is a GDPR solution that ensures website compliance with data protection regulations.",
		icon: "MyAgilePrivacy.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "my-agile-privacy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("myagileprivacy_native"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "my-agile-privacy:jsGlobal:1",
				kind: "jsGlobal",
				property: "MyAgilePixel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "my-agile-privacy:jsGlobal:2",
				kind: "jsGlobal",
				property: "MyAgilePixelProxyBeacon",
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
		id: "normi",
		name: "Normi",
		website: "https://normi.ca",
		description: "Normi is a Compliance Management Platform designed to ensure adherence to Quebec's C-25 regulation.",
		icon: "Normi.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "normi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.normi\\.ca\\/"),
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
		id: "onetrust",
		name: "OneTrust",
		website: "https://www.onetrust.com",
		description: "OneTrust is a cloud-based data privacy management compliance platform.",
		icon: "OneTrust.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "onetrust:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cookielaw\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onetrust:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("optanon\\.blob\\.core\\.windows\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onetrust:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("otSDKStub\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onetrust:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^OptanonConsent$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "onetrust:dns:4",
				kind: "dns",
				valuePattern: new RegExp("onetrust-domain-verification=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "onetrust:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("otsdkstub\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onetrust:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^optanonconsent$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "osano",
		name: "Osano",
		website: "https://www.osano.com",
		description: "Osano is a data privacy platform that helps your website become compliant with laws such as GDPR and CCPA.",
		icon: "Osano.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "osano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookieconsent\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "osano:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cmp\\.osano\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "osano:jsGlobal:2",
				kind: "jsGlobal",
				property: "Osano",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "osano:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("ajax\\/libs\\/cookieconsent2?\\/([\\d\\.]+)\\/cookieconsent.min.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "osano:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("npm\\/cookieconsent@(\\d)\\/build\\/cookieconsent.min.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "osano:jsGlobal:5",
				kind: "jsGlobal",
				property: "Osano.cm.cmpVersion",
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
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "pandectes",
		name: "Pandectes",
		website: "https://pandectes.io",
		description: "Pandectes is a cloud-based data privacy management compliance platform for Shopify stores, ensuring compliance with GDPR, CCPA/CPRA, VCDPA, APPI, PIPEDA, and PDPA regulations.",
		icon: "Pandectes.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "pandectes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pandectes-core\\.js|(?:s3\\.us-west-2\\.amazonaws\\.com|gdpr-privacy-policy-assets\\.s3-us-west-2\\.amazonaws\\.com)\\/gdpr-privacy-policy-assets\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pandectes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:2",
				kind: "jsGlobal",
				property: "PandectesBlocker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:3",
				kind: "jsGlobal",
				property: "PandectesCore",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:4",
				kind: "jsGlobal",
				property: "PandectesGeolocation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:5",
				kind: "jsGlobal",
				property: "PandectesRules",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:jsGlobal:6",
				kind: "jsGlobal",
				property: "PandectesSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^_pandectes_gdpr$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "pandectes:scriptSrc:8",
				kind: "scriptSrc",
				pattern: new RegExp("pandectes-core\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pandectes:scriptSrc:9",
				kind: "scriptSrc",
				pattern: new RegExp("s3\\.us-west-2\\.amazonaws\\.com\\/gdpr-privacy-policy-assets\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pandectes:scriptSrc:10",
				kind: "scriptSrc",
				pattern: new RegExp("gdpr-privacy-policy-assets\\.s3-us-west-2\\.amazonaws\\.com\\/"),
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
		id: "pandectes-gdpr-compliance",
		name: "Pandectes GDPR Compliance",
		website: "https://pandectes.io",
		description: "Pandectes GDPR Compliance is a solution for Shopify stores, ensuring compliance with GDPR, CCPA/CPRA, VCDPA, APPI, PIPEDA, and PDPA regulations.",
		icon: "PandectesGDPRCompliance.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "pandectes-gdpr-compliance:jsGlobal:0",
				kind: "jsGlobal",
				property: "Pandectes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes-gdpr-compliance:jsGlobal:1",
				kind: "jsGlobal",
				property: "PandectesBlocker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes-gdpr-compliance:jsGlobal:2",
				kind: "jsGlobal",
				property: "PandectesCore",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes-gdpr-compliance:jsGlobal:3",
				kind: "jsGlobal",
				property: "PandectesGeolocation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes-gdpr-compliance:jsGlobal:4",
				kind: "jsGlobal",
				property: "PandectesRules",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pandectes-gdpr-compliance:jsGlobal:5",
				kind: "jsGlobal",
				property: "PandectesSettings",
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
		id: "pieeye",
		name: "PieEye",
		website: "https://pii.ai",
		description: "PieEye is a data privacy solution for ecommerce platforms that supports privacy compliance requirements.",
		icon: "PieEye.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "pieeye:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookie\\.pii\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pieeye:jsGlobal:1",
				kind: "jsGlobal",
				property: "piEyeScript",
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
		id: "privado",
		name: "Privado",
		website: "https://www.privado.ai",
		description: "Privado is a privacy management platform that automates data mapping.",
		icon: "Privado.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "privado:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdn\\.privado\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "privasee",
		name: "Privasee",
		website: "https://www.privasee.io",
		description: "Privasee is a self-compliance tool designed to simplify GDPR for SMEs, enabling them to understand their data and mitigate risks effectively.",
		icon: "Privasee.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "privasee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privasee\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "privasee:jsGlobal:1",
				kind: "jsGlobal",
				property: "privasee",
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
		id: "pubtech",
		name: "PubTech",
		website: "https://www.pubtech.ai/",
		description: "PubTech is a consent management platform helping brands and businesses collect, store and leverage their customer consents.",
		icon: "PubTech.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "pubtech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pubtech-cmp-v(.+?)(?:-esm)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pubtech:jsGlobal:1",
				kind: "jsGlobal",
				property: "__pub_tech_cmp_config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "quantcast-choice",
		name: "Quantcast Choice",
		website: "https://www.quantcast.com/products/choice-consent-management-platform",
		description: "Quantcast Choice is a free consent management platform to meet key privacy requirements stemming from ePrivacy Directive, GDPR, and CCPA.",
		icon: "Quantcast.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "quantcast-choice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("quantcast\\.mgr\\.consensu\\.org"),
				description: "Script source URL matches a known technology marker.",
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
		id: "seers",
		name: "Seers",
		website: "https://www.seersco.com",
		description: "Seers is a privacy and consent management platform that helps businesses comply with data protection regulations like GDPR, CCPA, and LGPD by providing tools for cookie consent, data anonymization, and GDPR training​.",
		icon: "seersco.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "seers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("seersco.com\\/script\\/cb\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seers:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/\\/|\\.)seersco\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seers:jsGlobal:2",
				kind: "jsGlobal",
				property: "cb_banner_cpra_file_name",
				valuePattern: new RegExp("\\.seersco\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "seers:jsGlobal:3",
				kind: "jsGlobal",
				property: "cb_host",
				valuePattern: new RegExp("\\.seersco\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "segment-consent-manager",
		name: "Segment Consent Manager",
		website: "https://segment.com/blog/how-to-build-consent-management-into-your-site-in-less-than-a-week",
		description: "Segment Consent Manager is a tool that automates the process of requesting consent for data usage, stores data on user privacy preferences, and updates these preferences when users request changes.",
		icon: "Segment.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "segment-consent-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@segment\\/consent-manager@([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "segment-consent-manager:jsGlobal:1",
				kind: "jsGlobal",
				property: "consentManager.version",
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
		},
	},
	{
		id: "shopify-consent-management",
		name: "Shopify Consent Management",
		website: "https://apps.shopify.com/customer-privacy-banner",
		description: "Shopify Consent Management let's you create a tracking consent banner for EU customers.",
		icon: "Shopify.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopify-consent-management:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookie_consent_shopify\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "snigel-adconsent",
		name: "snigel AdConsent",
		website: "https://www.snigel.com/adconsent/",
		description: "snigel AdConsent is an IAB-registered consent management platfrom (CMP) which help keep sites speed intact while remaining compliant with GDPR and CCPA.",
		icon: "snigel.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "snigel-adconsent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:staging-)?cdn\\.snigelweb\\.com\\/(?:snhb|adconsent)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snigel-adconsent:jsGlobal:1",
				kind: "jsGlobal",
				property: "adconsent.version",
				valuePattern: new RegExp("^([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snigel-adconsent:jsGlobal:2",
				kind: "jsGlobal",
				property: "snhb.baseSettings",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snigel-adconsent:jsGlobal:3",
				kind: "jsGlobal",
				property: "snhb.info.cmpVersion",
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
		id: "sourcepoint",
		name: "Sourcepoint",
		website: "https://sourcepoint.com",
		description: "Sourcepoint is the data privacy software company for the digital marketing ecosystem.",
		icon: "Sourcepoint.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "sourcepoint:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("SOURCEPOINT_MMS_DOMAIN"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "sourcepoint:dom:1",
				kind: "dom",
				selector: "body.f_sourcepoint_ccpa_on",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sourcepoint:jsGlobal:2",
				kind: "jsGlobal",
				property: "tealium_sourcepoint",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sourcepoint:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^_sp_enable_dfp_personalized_ads$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "sourcepoint:scriptContent:4",
				kind: "scriptContent",
				pattern: new RegExp("sourcepoint_mms_domain"),
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
		id: "spatie-laravel-cookie-consent",
		name: "Spatie Laravel Cookie Consent",
		website: "https://github.com/spatie/laravel-cookie-consent",
		description: "Spatie Laravel Cookie Consent is a banner that is displayed on websites to ask visitors for consent for the use of cookies.",
		icon: "Spatie.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "spatie-laravel-cookie-consent:jsGlobal:0",
				kind: "jsGlobal",
				property: "laravelCookieConsent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"laravel",
		],
	},
	{
		id: "tealium-consent-management",
		name: "Tealium Consent Management",
		website: "https://docs.tealium.com/platforms/getting-started/consent-management",
		description: "Tealium Consent Management adds consent and data privacy support.",
		icon: "Tealium.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "tealium-consent-management:dom:0",
				kind: "dom",
				selector: "script#__tealiumGDPRecScript,div#__tealiumGDPRecModal",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "termly",
		name: "Termly",
		website: "https://termly.io/",
		description: "Termly provides free website policy resources and web-based policy creation software.",
		icon: "termly.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "termly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.termly\\.io\\/embed\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "tramoce",
		name: "Tramoce",
		website: "https://tramoce.com",
		description: "Tramoce is a platform that helps websites maintain cookie compliance while ensuring a smooth and uninterrupted browsing experience for users.",
		icon: "Tramoce.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "tramoce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tramoce\\.com\\/"),
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
		id: "transcend",
		name: "Transcend",
		website: "https://www.transcend.io",
		description: "Transcend is data privacy management compliance platform.",
		icon: "Transcend.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "transcend:jsGlobal:0",
				kind: "jsGlobal",
				property: "transcend",
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
		id: "truendo",
		name: "TRUENDO",
		website: "https://truendo.com",
		description: "TRUENDO is a GDPR compliance software.",
		icon: "TRUENDO.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "truendo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.priv\\.center\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "truendo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.truendo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "truendo:jsGlobal:2",
				kind: "jsGlobal",
				property: "Truendo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "truendo:jsGlobal:3",
				kind: "jsGlobal",
				property: "TruendoCookieControlCallback",
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
		id: "trustarc",
		name: "TrustArc",
		website: "https://trustarc.com",
		description: "TrustArc provides software and services to help corporations update their privacy management processes so they comply with government laws and best practices.",
		icon: "TrustArc.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "trustarc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.trustarc\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "ultimate-gdpr-and-ccpa",
		name: "Ultimate GDPR & CCPA",
		website: "https://www.createit.com/gdpr",
		description: "Ultimate GDPR & CCPA is a compliance toolkit for WordPress by createIT.",
		icon: "Ultimate GDPR & CCPA.png",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ultimate-gdpr-and-ccpa:jsGlobal:0",
				kind: "jsGlobal",
				property: "ct_ultimate_gdpr_cookie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "uniconsent",
		name: "Uniconsent",
		website: "https://www.uniconsent.com/",
		description: "Uniconsent is a Consent Management Platform.",
		icon: "Uniconsent.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "uniconsent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cmp\\.uniconsent\\.mgr\\.consensu\\.org\\/dfp\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uniconsent:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cmp\\.uniconsent\\.mgr\\.consensu\\.org\\/"),
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
		id: "usercentrics",
		name: "Usercentrics",
		website: "https://usercentrics.com",
		description: "Usercentrics is a SaaS enterprise solution for Consent Management (CMP) that helps enterprise customers to obtain, manage and document the user consent.",
		icon: "Usercentrics.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "usercentrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usercentrics\\.eu\\/.+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "usercentrics:dom:1",
				kind: "dom",
				selector: "link[href*='app.usercentrics.eu'], script[data-usercentrics]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "usercentrics:jsGlobal:2",
				kind: "jsGlobal",
				property: "usercentrics.appVersion",
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "vera",
		name: "Vera",
		website: "https://www.getvera.ai",
		description: "Vera (formerly Privasee) is a self-compliance tool designed to simplify GDPR for SMEs, enabling them to understand their data and mitigate risks effectively.",
		icon: "Vera.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "vera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privasee\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vera:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getvera\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vera:jsGlobal:2",
				kind: "jsGlobal",
				property: "privasee",
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
		id: "verasafe",
		name: "VeraSafe",
		website: "https://verasafe.com",
		description: "VeraSafe is a privacy compliance system designed to help organizations adhere to global data protection regulations and maintain compliance with privacy laws.",
		icon: "VeraSafe.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "verasafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.verasafe\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "visible-privacy",
		name: "Visible Privacy",
		website: "https://visibleprivacy.com/",
		description: "Visible Privacy is a privacy-focused Consent Management Platform compatible with major CMS and ecommerce systems.",
		icon: "VisiblePrivacy.svg",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "visible-privacy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/bc-prod-config\\.empathy\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yett",
		name: "Yett",
		website: "https://github.com/elbywan/yett",
		description: "Yett is a small webpage library to control the execution of (third party) scripts like analytics.",
		icon: "Yett.png",
		categories: [
			"privacy-compliance",
		],
		rules: [
			{
				id: "yett:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/yett@([\\d\\.]+)\\/dist\\/yett\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yett:jsGlobal:1",
				kind: "jsGlobal",
				property: "YETT_BLACKLIST",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
] as const satisfies readonly TechnologyDefinition[];
