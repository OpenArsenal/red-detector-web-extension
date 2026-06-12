import type { TechnologyDefinition } from '../types';

export const privacyComplianceTechnologyDefinitions = [
	{
		id: "2b-advice",
		name: "2B Advice",
		website: "https://www.2b-advice.com/en/data-privacy-software/cookie-consent-plugin/",
		description: "2B Advice provides a plug-in to manage GDPR cookie consent.",
		icon: "2badvice.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "2b-advice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("2badvice-cdn\\.azureedge\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "2b-advice:pageGlobal:1",
				kind: "pageGlobal",
				property: "BBCookieControler",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "acconsento-click",
		name: "Acconsento.click",
		website: "https://shop.acconsento.click",
		description: "Acconsento.click is a software solution designed to assist users in achieving cookie policy compliance for their websites.",
		icon: "Acconsento.click.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "acconsento-click:dom:0",
				kind: "dom",
				selector: "link[href*='//acconsento.click/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acconsento-click:pageGlobal:1",
				kind: "pageGlobal",
				property: "AcconsentoAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acconsento-click:pageGlobal:2",
				kind: "pageGlobal",
				property: "acconsentoCreateElement",
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
		id: "adfixus",
		name: "AdFixus",
		website: "https://www.adfixus.com",
		description: "AdFixus is a privacy-focused solution that enables businesses to manage their data and empower individuals with consent control, addressing the decline of third-party cookies.",
		icon: "AdFixus.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "adfixus:pageGlobal:0",
				kind: "pageGlobal",
				property: "AfxIdentity",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adfixus:pageGlobal:1",
				kind: "pageGlobal",
				property: "_afxProfile",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adfixus:cookie:2",
				kind: "cookie",
				key: "afx_profile_hs",
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
		id: "adopt",
		name: "AdOpt",
		website: "https://goadopt.io",
		description: "AdOpt is a consent tool that prioritises privacy and usability towards the LGPD.",
		icon: "AdOpt.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "adopt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.goadopt\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adopt:pageGlobal:1",
				kind: "pageGlobal",
				property: "adoptApp.domain",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adopt:pageGlobal:2",
				kind: "pageGlobal",
				property: "adopt_website_code",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"svelte"
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
		id: "adroll-cmp-system",
		name: "AdRoll CMP System",
		website: "https://www.adroll.com/features/consent-management",
		description: "AdRoll CMP System is a consent management solution.",
		icon: "AdRoll.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "adroll-cmp-system:pageGlobal:0",
				kind: "pageGlobal",
				property: "__adroll_consent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adroll-cmp-system:pageGlobal:1",
				kind: "pageGlobal",
				property: "__adroll_consent_is_gdpr",
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
		id: "alfright",
		name: "Alfright",
		website: "https://www.alfright.eu",
		description: "Alfright is a service that ensures GDPR compliance for websites, enhancing privacy standards.",
		icon: "Alfright.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "alfright:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.alfright\\.eu/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alfright:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.alfright.eu/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "axeptio",
		name: "Axeptio",
		website: "https://www.axept.io",
		description: "Axeptio is a trusted third party that collects and archive users' consent in a GDPR compliant fashion.",
		icon: "Axeptio.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "axeptio:dom:0",
				kind: "dom",
				selector: "img[src*='axeptio.imgix.net/'], div#axeptio_overlay",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "axeptio:pageGlobal:1",
				kind: "pageGlobal",
				property: "axeptioBuildTimestamp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "axeptio:pageGlobal:2",
				kind: "pageGlobal",
				property: "axeptioHandleVendors",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "axeptio:pageGlobal:3",
				kind: "pageGlobal",
				property: "axeptioSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "axeptio:pageGlobal:4",
				kind: "pageGlobal",
				property: "axeptioSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "axeptio:cookie:5",
				kind: "cookie",
				key: "axeptio_all_vendors",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "axeptio:cookie:6",
				kind: "cookie",
				key: "axeptio_authorized_vendors",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "axeptio:cookie:7",
				kind: "cookie",
				key: "axeptio_cookies",
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
		id: "biskoui",
		name: "biskoui",
		website: "https://biskoui.ch",
		description: "biskoui is a Swiss platform designed to manage digital consent across services and technologies beyond traditional cookie-based methods.",
		icon: "biskoui.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "biskoui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.biskoui\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "biskoui:pageGlobal:1",
				kind: "pageGlobal",
				property: "biskouiScriptLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "biskoui:pageGlobal:2",
				kind: "pageGlobal",
				property: "biskouiSettings",
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
		id: "borlabs-cookie",
		name: "Borlabs Cookie",
		website: "https://borlabs.io/borlabs-cookie/",
		description: "Borlabs Cookie is a GDPR cookie consent plugin for WordPress.",
		icon: "Borlabs Cookie.svg",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "borlabs-cookie:dom:0",
				kind: "dom",
				selector: "#BorlabsCookieBox",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "borlabs-cookie:pageGlobal:1",
				kind: "pageGlobal",
				property: "borlabsCookieConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"onetime"
			]
		}
	},
	{
		id: "byscuit",
		name: "Byscuit",
		website: "https://www.byscuit.com",
		description: "Byscuit is a tool for managing cookies on websites, allowing users to control and customise their cookie preferences for enhanced privacy and browsing experience.",
		icon: "Byscuit.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "byscuit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.byscuit\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "byscuit:pageGlobal:1",
				kind: "pageGlobal",
				property: "onloadByscuit",
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
		id: "c15t",
		name: "c15t",
		website: "https://c15t.com",
		description: "c15t is an open source framework for managing cookies, consent, and privacy compliance.",
		icon: "c15t.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "c15t:pageGlobal:0",
				kind: "pageGlobal",
				property: "c15tStore.getInitialState",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "civic",
		name: "CIVIC",
		website: "https://www.civicuk.com/cookie-control",
		description: "Civic provides cookie control for user consent and the use of cookies.",
		icon: "civic.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "civic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cc\\.cdn\\.civiccomputing\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clarip",
		name: "Clarip",
		website: "https://www.clarip.com",
		description: "Clarip is an enterprise data privacy and risk management platform.",
		icon: "Clarip.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "clarip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//cdn\\.clarip\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clarip:pageGlobal:1",
				kind: "pageGlobal",
				property: "claripCdnHost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clarip:pageGlobal:2",
				kind: "pageGlobal",
				property: "claripHost",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clarip:pageGlobal:3",
				kind: "pageGlobal",
				property: "pageData.claripConsentJSUrl",
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
		id: "clickio",
		name: "clickio",
		website: "https://www.gdpr.clickio.com/",
		description: "Clickio Consent Tool collects and communicates consent both to IAB Framework vendors and to Google Ads products.",
		icon: "clickio.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "clickio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clickio\\.mgr\\.consensu\\.org/t/consent_[0-9]+\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clickskeks",
		name: "Clickskeks",
		website: "https://www.clickskeks.at/",
		description: "Clickskeks is an all-in-one cookie consent management platform for businesses.",
		icon: "Clickskeks.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "clickskeks:pageGlobal:0",
				kind: "pageGlobal",
				property: "Clickskeks",
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
		id: "clym",
		name: "Clym",
		website: "https://clym.io",
		description: "Clym is a data privacy tool designed to support compliance with data protection obligations.",
		icon: "Clym.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "clym:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.clym-sdk\\.net"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "clym:cookie:1",
				kind: "cookie",
				key: "clym_compliance_sid",
				description: "Cookie name matches a known technology marker."
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
		id: "commanders-act-trustcommander",
		name: "Commanders Act TrustCommander",
		website: "https://www.commandersact.com/en/solutions/trustcommander/",
		description: "Commanders Act TrustCommander is a consent management platform (CMP) which allows you to comply with the general data protection regulation (GDPR) regulation in terms of collecting consent.",
		icon: "Commanders Act.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "commanders-act-trustcommander:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trustcommander\\.net/privacy/.+_v([\\d]+)_([\\d]+)\\.js"),
				version: { source: "match", template: "$1.$2" },
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
		id: "consent-manager",
		name: "Consent Manager",
		website: "https://www.consentmanager.net",
		description: "Consent Manager is a provider ensuring GDPR and CCPA compliance for websites.",
		icon: "ConsentManager.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "consent-manager:pageGlobal:0",
				kind: "pageGlobal",
				property: "cmpCCPA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:1",
				kind: "pageGlobal",
				property: "cmpConsentPurposes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:2",
				kind: "pageGlobal",
				property: "cmpConsentString",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:3",
				kind: "pageGlobal",
				property: "cmpCustomPurposeConsent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:4",
				kind: "pageGlobal",
				property: "cmpGDPR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:5",
				kind: "pageGlobal",
				property: "cmpGoogleVendorsConsent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:6",
				kind: "pageGlobal",
				property: "cmp_closevendor",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:pageGlobal:7",
				kind: "pageGlobal",
				property: "cmp_vendordelivery",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "consent-manager:cookie:8",
				kind: "cookie",
				key: "__cmpcccx274",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "consent-manager:cookie:9",
				kind: "cookie",
				key: "__cmpconsentx274",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "consent-manager:cookie:10",
				kind: "cookie",
				key: "__cmpiuid",
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
		id: "conversant-consent-tool",
		name: "Conversant Consent Tool",
		website: "https://www.conversantmedia.eu/consent-tool",
		description: "Conversant Consent Tool is a free tool to gain GDPR and ePD compliant consent for digital advertising.",
		icon: "Conversant.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "conversant-consent-tool:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.conversant\\.mgr\\.consensu\\.org/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "conversant-consent-tool:pageGlobal:1",
				kind: "pageGlobal",
				property: "conversant",
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
		id: "cookie-control",
		name: "Cookie Control",
		website: "https://www.civicuk.com/cookie-control",
		icon: "CookieControl.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookie-control:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cc\\.cdn\\.civiccomputing\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookie-control:pageGlobal:1",
				kind: "pageGlobal",
				property: "CookieControl",
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
		id: "cookie-information",
		name: "Cookie Information",
		website: "https://cookieinformation.com",
		description: "Cookie Information is a privacy tech company that develops software that helps making company websites and mobile apps GDPR and ePrivacy compliant.",
		icon: "Cookie Information.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookie-information:pageGlobal:0",
				kind: "pageGlobal",
				property: "CookieInformation.config.cdnUrl",
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
		id: "cookie-notice",
		name: "Cookie Notice",
		website: "https://wordpress.org/plugins/cookie-notice",
		description: "Cookie Notice provides a simple, customizable website banner that can be used to help your website comply with certain cookie consent requirements under the EU GDPR cookie law and CCPA regulations and includes seamless integration with Cookie Compliance to help your site comply with the latest updates to existing consent laws.",
		icon: "Cookie Notice.svg",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "cookie-notice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/cookie-notice/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
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
		id: "cookie-script",
		name: "Cookie Script",
		website: "https://cookie-script.com",
		description: "Cookie-Script automatically scans, categorizes and adds description to all cookies found on your website.",
		icon: "CookieScript.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookie-script:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookie-script\\.com/"),
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
		id: "cookie-seal",
		name: "Cookie Seal",
		website: "https://cookieseal.com",
		description: "Cookie Seal is a tool or system that helps you manage and configure the use of cookies on your website in accordance with data protection laws, ensuring compliance with relevant regulations.",
		icon: "Cookie Seal.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookie-seal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookieseal\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookie-seal:dom:1",
				kind: "dom",
				selector: "link[href*='assets.cookieseal.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "cookie-seal:pageGlobal:2",
				kind: "pageGlobal",
				property: "CookieSeal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cookie-seal:pageGlobal:3",
				kind: "pageGlobal",
				property: "cookieSeal.consentEnabled",
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
		id: "cookiebar",
		name: "CookieBAR",
		website: "https://cookie-bar.eu",
		description: "CookieBAR is a tool that helps websites comply with the EU cookie law by managing user consent for cookies in accordance with regulatory requirements.",
		icon: "CookieBAR.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookiebar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/cookie-bar/cookiebar-latest\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookiebar:pageGlobal:1",
				kind: "pageGlobal",
				property: "setupCookieBar",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cookiebot",
		name: "Cookiebot",
		website: "https://www.cookiebot.com",
		description: "Cookiebot is a cloud-driven solution that automatically controls cookies and trackers, enabling full GDPR/ePrivacy and CCPA compliance for websites.",
		icon: "Cookiebot.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookiebot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.cookiebot\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookiebot:pageGlobal:1",
				kind: "pageGlobal",
				property: "Cookiebot.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "cookiefirst",
		name: "CookieFirst",
		website: "https://cookiefirst.com",
		description: "CookieFirst is an GDPR and CCPA compliant consent management platform.",
		icon: "CookieFirst.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookiefirst:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.cookiefirst\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookiefirst:pageGlobal:1",
				kind: "pageGlobal",
				property: "cookiefirst_show_settings",
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
		id: "cookiehub",
		name: "CookieHub",
		website: "https://www.cookiehub.com",
		description: "CookieHub is a platform that helps website owners comply with data privacy regulations such as GDPR and CCPA by providing tools for managing cookie consent, tracking consent preferences, and ensuring legal compliance related to online tracking and data collection practices.",
		icon: "CookieHub.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookiehub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookiehub\\.net/.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookiehub:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("cookiehub\\.net"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cookieyes",
		name: "CookieYes",
		website: "https://www.cookieyes.com/",
		icon: "cookieyes.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cookieyes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cookieyes\\.com/client_data/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookieyes:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-cookieyes\\.com/client_data/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookieyes:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/cookie-law-info/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cookieyes:pageGlobal:4",
				kind: "pageGlobal",
				property: "cookieYes",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "crownpeak-universal-consent-platform",
		name: "CrownPeak Universal Consent Platform",
		website: "https://www.crownpeak.com/products/privacy-and-consent-management",
		description: "CrownPeak Universal Consent Platform is a tool for managing user consent and ensuring compliance with data privacy regulations.",
		icon: "CrownPeak.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "crownpeak-universal-consent-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.evidon\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crownpeak-universal-consent-platform:dom:1",
				kind: "dom",
				selector: "a[href*='info.evidon.com/pub_info/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "crownpeak-universal-consent-platform:pageGlobal:2",
				kind: "pageGlobal",
				property: "EB.EvidonConsent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crownpeak-universal-consent-platform:pageGlobal:3",
				kind: "pageGlobal",
				property: "evidon",
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
		id: "cybot",
		name: "Cybot",
		website: "https://www.cybot.com/",
		description: "Cybot is a tool that facilitates compliance with data privacy laws for website operators and marketers.",
		icon: "Cybot.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "cybot:dom:0",
				kind: "dom",
				selector: "div#CybotCookiebotDialog",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "didomi",
		name: "Didomi",
		website: "https://www.didomi.io/en/consent-preference-management",
		description: "Didomi is a consent management platform helping brands and businesses collect, store and leverage their customer consents.",
		icon: "didomi.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "didomi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.privacy-center\\.org/.*/loader\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "efilli",
		name: "Efilli",
		website: "https://efilli.com",
		description: "Efilli is a tool used to manage cookies on websites, providing users with data privacy control through GDPR compliance.",
		icon: "Efilli.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "efilli:pageGlobal:0",
				kind: "pageGlobal",
				property: "EFILLI_GLOBAL_OPTIONS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "efilli:pageGlobal:1",
				kind: "pageGlobal",
				property: "Efilli",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "efilli:pageGlobal:2",
				kind: "pageGlobal",
				property: "efilli.__cookieBlocker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "efilli:pageGlobal:3",
				kind: "pageGlobal",
				property: "efilliSdk",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "efilli:pageGlobal:4",
				kind: "pageGlobal",
				property: "efilliSdkConfig",
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
		id: "enzuzo",
		name: "Enzuzo",
		website: "https://www.enzuzo.com",
		description: "Enzuzo is a data privacy management solution that helps organizations manage consent, comply with privacy regulations, and maintain control over personal data across digital platforms.",
		icon: "Enzuzo.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "enzuzo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.enzuzo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "enzuzo:pageGlobal:1",
				kind: "pageGlobal",
				property: "__ENZUZO_STARTED__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "enzuzo:pageGlobal:2",
				kind: "pageGlobal",
				property: "enzuzoGtmConsentObj",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "enzuzo:responseHeader:3",
				kind: "responseHeader",
				key: "X-Enzuzo-City",
				description: "Response header matches a known technology marker."
			},
			{
				id: "enzuzo:responseHeader:4",
				kind: "responseHeader",
				key: "X-Enzuzo-Country",
				description: "Response header matches a known technology marker."
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
		id: "eucookie-eu",
		name: "eucookie.eu",
		website: "https://www.eucookie.eu/",
		icon: "eucookie.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "eucookie-eu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("eucookie\\.eu/public/gdpr-cookie-consent\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "evidon",
		name: "Evidon",
		website: "https://www.evidon.com",
		description: "Evidon is a transparency company that helps organizations educate consumers on how and why data is collected, as well as provide consumers with the ability to give and withdraw consent to their data being used.",
		icon: "Evidon.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "evidon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.evidon\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "evidon:dom:1",
				kind: "dom",
				selector: "a[href*='info.evidon.com/pub_info/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "evidon:pageGlobal:2",
				kind: "pageGlobal",
				property: "EB.EvidonConsent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "evidon:pageGlobal:3",
				kind: "pageGlobal",
				property: "evidon",
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
		id: "funding-choices",
		name: "Funding Choices",
		website: "https://developers.google.com/funding-choices",
		description: "Funding Choices is a messaging tool that can help you comply with the EU General Data Protection Regulation (GDPR), and recover lost revenue from ad blocking users.",
		icon: "Google.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "funding-choices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fundingchoicesmessages\\.google\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "funding-choices:dom:1",
				kind: "dom",
				selector: ".fc-consent-root, iframe[name='googlefcLoaded'], iframe[name='googlefcPresent'], .fc-dialog, .fc-choice-dialog",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "funding-choices:pageGlobal:2",
				kind: "pageGlobal",
				property: "__googlefc",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "funding-choices:dns:3",
				kind: "dns",
				valuePattern: new RegExp("fundingchoicesmessages"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gdpr-cookie-consent-plugin-by-webtoffee",
		name: "GDPR Cookie Consent Plugin by Webtoffee",
		website: "https://www.webtoffee.com/product/gdpr-cookie-consent/",
		description: "GDPR Cookie Consent Plugin by Webtoffee is a WordPress solution that ensures GDPR and CCPA compliance, supports IAB standards, and integrates with Google Consent Mode.",
		icon: "GDPRCookieConsent.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "gdpr-cookie-consent-plugin-by-webtoffee:pageGlobal:0",
				kind: "pageGlobal",
				property: "webtoffee._wccConsentStore",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gdpr-cookie-consent-plugin-by-webtoffee:cookie:1",
				kind: "cookie",
				key: "wt_consent",
				description: "Cookie name matches a known technology marker."
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
		id: "hubspot-cookie-policy-banner",
		name: "HubSpot Cookie Policy Banner",
		website: "https://knowledge.hubspot.com/reports/customize-your-cookie-tracking-settings-and-privacy-policy-alert",
		description: "HubSpot Cookie Policy banner is a cookie compliance functionality from HubSpot.",
		icon: "HubSpot.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "hubspot-cookie-policy-banner:dom:0",
				kind: "dom",
				selector: "#hs-eu-cookie-confirmation",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hulkapps-gdpr-ccpa-compliance-manager",
		name: "HulkApps GDPR/CCPA Compliance Manager",
		website: "https://www.hulkapps.com/products/gdpr-ccpa-cookie-manager-shopify-app",
		description: "HulkApps GDPR/CCPA Compliance Manager is a consent management solution.",
		icon: "HulkApps.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "hulkapps-gdpr-ccpa-compliance-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookiebar\\.hulkapps\\.com/hulk_cookie_bar\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hulkapps-gdpr-ccpa-compliance-manager:pageGlobal:1",
				kind: "pageGlobal",
				property: "hulkSetCookie",
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
				"low",
				"recurring"
			]
		}
	},
	{
		id: "iubenda",
		name: "iubenda",
		website: "https://www.iubenda.com",
		description: "iubenda is a compliance software used by businesses for their websites and apps.",
		icon: "iubenda.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "iubenda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("iubenda\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "iubenda:pageGlobal:1",
				kind: "pageGlobal",
				property: "_iub",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "iubenda:pageGlobal:2",
				kind: "pageGlobal",
				property: "addIubendaCs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "ketch",
		name: "Ketch",
		website: "https://www.ketch.com",
		description: "Ketch is a data control platform that manages compliance with privacy regulations.",
		icon: "Ketch.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "ketch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ketchcdn\\.com/"),
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
		id: "klaro",
		name: "Klaro",
		website: "https://heyklaro.com",
		description: "Klaro is a simple consent management platform and privacy tool.",
		icon: "Klaro.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "klaro:pageGlobal:0",
				kind: "pageGlobal",
				property: "klaro",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "klaro:pageGlobal:1",
				kind: "pageGlobal",
				property: "klaroConfig",
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
		id: "legal-monster",
		name: "Legal Monster",
		website: "https://www.legalmonster.com",
		description: "Legal Monster is a consent and privacy management solution, which helps businesses maintain compliance with ePrivacy, marketing requirements and General Data Protection Regulation (GDPR).",
		icon: "Legal Monster.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "legal-monster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.legalmonster\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "legal-monster:pageGlobal:1",
				kind: "pageGlobal",
				property: "legal.__VERSION__",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "liveramp-pcm",
		name: "LiveRamp PCM",
		website: "https://liveramp.com/our-platform/preference-consent-management",
		description: "LiveRamp PCM is a preference and consent management platform that enables comply with the ePrivacy Directive, GDPR, CCPA, and other data protection and privacy laws and regulations.",
		icon: "LiveRamp.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "liveramp-pcm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("gdpr\\.privacymanager\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "liveramp-pcm:dom:1",
				kind: "dom",
				selector: "iframe[src*='gdpr-consent-tool\\.privacymanager\\.io']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "liveramp-pcm:pageGlobal:2",
				kind: "pageGlobal",
				property: "wpJsonpLiverampGdprCmp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "metomic",
		name: "Metomic",
		website: "https://metomic.io",
		description: "Metomic is a platform that helps businesses manage and comply with data privacy regulations, offering tools for consent management, data governance, and compliance with data privacy laws such as GDPR and CCPA.",
		icon: "metomic.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "metomic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metomic\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "metomic:dom:1",
				kind: "dom",
				selector: "link[href*='.metomic.io']",
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
		id: "moove-gdpr-consent",
		name: "Moove GDPR Consent",
		website: "https://www.mooveagency.com/wordpress/gdpr-cookie-compliance-plugin",
		description: "Moove GDPR Consent is a GDPR Cookie Compliance plugin for Wordpress.",
		icon: "Moove.svg",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "moove-gdpr-consent:pageGlobal:0",
				kind: "pageGlobal",
				property: "moove_frontend_gdpr_scripts",
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
				"low",
				"recurring"
			]
		}
	},
	{
		id: "my-agile-privacy",
		name: "My Agile Privacy",
		website: "https://www.myagileprivacy.com/en/",
		description: "My Agile Privacy is a GDPR solution that ensures website compliance with data protection regulations.",
		icon: "MyAgilePrivacy.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "my-agile-privacy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("myagileprivacy_native"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "my-agile-privacy:pageGlobal:1",
				kind: "pageGlobal",
				property: "MyAgilePixel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "my-agile-privacy:pageGlobal:2",
				kind: "pageGlobal",
				property: "MyAgilePixelProxyBeacon",
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
		id: "normi",
		name: "Normi",
		website: "https://normi.ca",
		description: "Normi is a Compliance Management Platform designed to ensure adherence to Quebec's C-25 regulation.",
		icon: "Normi.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "normi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.normi\\.ca/"),
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
		id: "onetrust",
		name: "OneTrust",
		website: "https://www.onetrust.com",
		description: "OneTrust is a cloud-based data privacy management compliance platform.",
		icon: "OneTrust.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "onetrust:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cookielaw\\.org"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onetrust:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("optanon\\.blob\\.core\\.windows\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onetrust:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("otSDKStub\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onetrust:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cookielaw\\.org"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onetrust:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("optanon\\.blob\\.core\\.windows\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "onetrust:cookie:5",
				kind: "cookie",
				key: "OptanonConsent",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "onetrust:dns:6",
				kind: "dns",
				valuePattern: new RegExp("onetrust-domain-verification="),
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
		id: "osano",
		name: "Osano",
		website: "https://www.osano.com",
		description: "Osano is a data privacy platform that helps your website become compliant with laws such as GDPR and CCPA.",
		icon: "Osano.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "osano:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cmp\\.osano\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "osano:pageGlobal:1",
				kind: "pageGlobal",
				property: "Osano",
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
		id: "pandectes",
		name: "Pandectes",
		website: "https://pandectes.io",
		description: "Pandectes is a cloud-based data privacy compliance platform for Shopify stores, designed to support adherence to GDPR, CCPA/CPRA, VCDPA, APPI, PIPEDA, and PDPA regulations.",
		icon: "Pandectes.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "pandectes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pandectes-core\\.js|(?:s3\\.us-west-2\\.amazonaws\\.com|gdpr-privacy-policy-assets\\.s3-us-west-2\\.amazonaws\\.com)/gdpr-privacy-policy-assets/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pandectes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:2",
				kind: "pageGlobal",
				property: "PandectesBlocker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:3",
				kind: "pageGlobal",
				property: "PandectesCore",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:4",
				kind: "pageGlobal",
				property: "PandectesGeolocation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:5",
				kind: "pageGlobal",
				property: "PandectesRules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:pageGlobal:6",
				kind: "pageGlobal",
				property: "PandectesSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes:cookie:7",
				kind: "cookie",
				key: "_pandectes_gdpr",
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
		id: "pandectes-gdpr-compliance",
		name: "Pandectes GDPR Compliance",
		website: "https://pandectes.io",
		description: "Pandectes GDPR Compliance is a solution for Shopify stores, ensuring compliance with GDPR, CCPA/CPRA, VCDPA, APPI, PIPEDA, and PDPA regulations.",
		icon: "PandectesGDPRCompliance.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "pandectes-gdpr-compliance:pageGlobal:0",
				kind: "pageGlobal",
				property: "Pandectes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes-gdpr-compliance:pageGlobal:1",
				kind: "pageGlobal",
				property: "PandectesBlocker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes-gdpr-compliance:pageGlobal:2",
				kind: "pageGlobal",
				property: "PandectesCore",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes-gdpr-compliance:pageGlobal:3",
				kind: "pageGlobal",
				property: "PandectesGeolocation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes-gdpr-compliance:pageGlobal:4",
				kind: "pageGlobal",
				property: "PandectesRules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pandectes-gdpr-compliance:pageGlobal:5",
				kind: "pageGlobal",
				property: "PandectesSettings",
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
		id: "pieeye",
		name: "PieEye",
		website: "https://pii.ai",
		description: "PieEye is a data privacy solution for ecommerce platforms that supports privacy compliance requirements.",
		icon: "PieEye.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "pieeye:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cookie\\.pii\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pieeye:pageGlobal:1",
				kind: "pageGlobal",
				property: "piEyeScript",
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
		id: "privado",
		name: "Privado",
		website: "https://www.privado.ai",
		description: "Privado is a privacy management platform that automates data mapping.",
		icon: "Privado.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "privado:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdn\\.privado\\.ai/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "privasee",
		name: "Privasee",
		website: "https://www.privasee.io",
		description: "Privasee is a self-compliance tool designed to simplify GDPR for SMEs, enabling them to understand their data and mitigate risks effectively.",
		icon: "Privasee.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "privasee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privasee\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "privasee:pageGlobal:1",
				kind: "pageGlobal",
				property: "privasee",
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
		id: "pubtech",
		name: "PubTech",
		website: "https://www.pubtech.ai/",
		description: "PubTech is a consent management platform helping brands and businesses collect, store and leverage their customer consents.",
		icon: "PubTech.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "pubtech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pubtech-cmp-v(.+?)(?:-esm)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pubtech:pageGlobal:1",
				kind: "pageGlobal",
				property: "__pub_tech_cmp_config",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "quantcast-choice",
		name: "Quantcast Choice",
		website: "https://www.quantcast.com/products/choice-consent-management-platform",
		description: "Quantcast Choice is a free consent management platform to meet key privacy requirements stemming from ePrivacy Directive, GDPR, and CCPA.",
		icon: "Quantcast.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "quantcast-choice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("quantcast\\.mgr\\.consensu\\.org"),
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
		id: "seers",
		name: "Seers",
		website: "https://www.seersco.com",
		description: "Seers is a privacy and consent management platform that helps businesses comply with data protection regulations like GDPR, CCPA, and LGPD by providing tools for cookie consent, data anonymization, and GDPR training​.",
		icon: "seersco.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "seers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?://|\\.)seersco\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seers:pageGlobal:1",
				kind: "pageGlobal",
				property: "cb_banner_cpra_file_name",
				valuePattern: new RegExp("\\.seersco\\.com/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "seers:pageGlobal:2",
				kind: "pageGlobal",
				property: "cb_host",
				valuePattern: new RegExp("\\.seersco\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "segment-consent-manager",
		name: "Segment Consent Manager",
		website: "https://segment.com/",
		description: "Segment Consent Manager is a tool that automates the process of requesting consent for data usage, stores data on user privacy preferences, and updates these preferences when users request changes.",
		icon: "Segment.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "segment-consent-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@segment/consent-manager@([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segment-consent-manager:pageGlobal:1",
				kind: "pageGlobal",
				property: "consentManager.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "shopify-consent-management",
		name: "Shopify Consent Management",
		website: "https://apps.shopify.com/customer-privacy-banner",
		description: "Shopify Consent Management let's you create a tracking consent banner for EU customers.",
		icon: "Shopify.svg",
		categories: [
			"privacy-compliance",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "shopify-consent-management:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cookie_consent_shopify\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "snigel-adconsent",
		name: "snigel AdConsent",
		website: "https://www.snigel.com/adconsent/",
		description: "snigel AdConsent is a IAB-registered consent management platfrom (CMP) which help keep sites speed intact while remaining compliant with GDPR and CCPA.",
		icon: "snigel.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "snigel-adconsent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:staging-)?cdn\\.snigelweb\\.com/(?:snhb|adconsent)/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snigel-adconsent:pageGlobal:1",
				kind: "pageGlobal",
				property: "adconsent.version",
				valuePattern: new RegExp("^([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "snigel-adconsent:pageGlobal:2",
				kind: "pageGlobal",
				property: "snhb.baseSettings",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "snigel-adconsent:pageGlobal:3",
				kind: "pageGlobal",
				property: "snhb.info.cmpVersion",
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
		id: "sourcepoint",
		name: "Sourcepoint",
		website: "https://sourcepoint.com",
		description: "Sourcepoint is the data privacy software company for the digital marketing ecosystem.",
		icon: "Sourcepoint.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "sourcepoint:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("SOURCEPOINT_MMS_DOMAIN"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sourcepoint:dom:1",
				kind: "dom",
				selector: "body.f_sourcepoint_ccpa_on",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "sourcepoint:pageGlobal:2",
				kind: "pageGlobal",
				property: "tealium_sourcepoint",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sourcepoint:cookie:3",
				kind: "cookie",
				key: "_sp_enable_dfp_personalized_ads",
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
		id: "spatie-laravel-cookie-consent",
		name: "Spatie Laravel Cookie Consent",
		website: "https://github.com/spatie/laravel-cookie-consent",
		description: "Spatie Laravel Cookie Consent is a banner that is displayed on websites to ask visitors for consent for the use of cookies.",
		icon: "Spatie.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "spatie-laravel-cookie-consent:pageGlobal:0",
				kind: "pageGlobal",
				property: "laravelCookieConsent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"laravel"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tealium-consent-management",
		name: "Tealium Consent Management",
		website: "https://docs.tealium.com/platforms/getting-started/consent-management",
		description: "Tealium Consent Management adds consent and data privacy support.",
		icon: "Tealium.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "tealium-consent-management:dom:0",
				kind: "dom",
				selector: "script#__tealiumGDPRecScript,div#__tealiumGDPRecModal",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "termly",
		name: "Termly",
		website: "https://termly.io/",
		description: "Termly provides free website policy resources and web-based policy creation software.",
		icon: "termly.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "termly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.termly\\.io/embed\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tramoce",
		name: "Tramoce",
		website: "https://tramoce.com",
		description: "Tramoce is a platform that helps websites maintain cookie compliance while ensuring a smooth and uninterrupted browsing experience for users.",
		icon: "Tramoce.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "tramoce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tramoce\\.com/"),
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
		id: "transcend",
		name: "Transcend",
		website: "https://www.transcend.io",
		description: "Transcend is data privacy management compliance platform.",
		icon: "Transcend.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "transcend:pageGlobal:0",
				kind: "pageGlobal",
				property: "transcend",
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
		id: "truendo",
		name: "TRUENDO",
		website: "https://truendo.com",
		description: "TRUENDO is a GDPR compliance software.",
		icon: "TRUENDO.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "truendo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.priv\\.center/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "truendo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.truendo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "truendo:pageGlobal:2",
				kind: "pageGlobal",
				property: "Truendo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "truendo:pageGlobal:3",
				kind: "pageGlobal",
				property: "TruendoCookieControlCallback",
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
		id: "trustarc",
		name: "TrustArc",
		website: "https://trustarc.com",
		description: "TrustArc provides software and services to help corporations update their privacy management processes so they comply with government laws and best practices.",
		icon: "TrustArc.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "trustarc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("consent\\.trustarc\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ultimate-gdpr-and-ccpa",
		name: "Ultimate GDPR & CCPA",
		website: "https://www.createit.com/gdpr",
		description: "Ultimate GDPR & CCPA is a compliance toolkit for WordPress by createIT",
		icon: "Ultimate GDPR & CCPA.png",
		categories: [
			"privacy-compliance",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "ultimate-gdpr-and-ccpa:pageGlobal:0",
				kind: "pageGlobal",
				property: "ct_ultimate_gdpr_cookie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low"
			]
		}
	},
	{
		id: "uniconsent",
		name: "Uniconsent",
		website: "https://www.uniconsent.com/",
		description: "Uniconsent is a Consent Management Platform.",
		icon: "Uniconsent.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "uniconsent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cmp\\.uniconsent\\.mgr\\.consensu\\.org/"),
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
		id: "usercentrics",
		name: "Usercentrics",
		website: "https://usercentrics.com",
		description: "Usercentrics is a SaaS enterprise solution for Consent Management (CMP) that helps enterprise customers to obtain, manage and document the user consent.",
		icon: "Usercentrics.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "usercentrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usercentrics\\.eu/.+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "usercentrics:dom:1",
				kind: "dom",
				selector: "link[href*='app.usercentrics.eu'], script[data-usercentrics]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "usercentrics:pageGlobal:2",
				kind: "pageGlobal",
				property: "usercentrics.appVersion",
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
				"low",
				"recurring"
			]
		}
	},
	{
		id: "vera",
		name: "Vera",
		website: "https://www.getvera.ai",
		description: "Vera (formerly Privasee) is a self-compliance tool designed to simplify GDPR for SMEs, enabling them to understand their data and mitigate risks effectively.",
		icon: "Vera.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "vera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.privasee\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vera:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getvera\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vera:pageGlobal:2",
				kind: "pageGlobal",
				property: "privasee",
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
		id: "verasafe",
		name: "VeraSafe",
		website: "https://verasafe.com",
		description: "VeraSafe is a privacy compliance system designed to help organizations adhere to global data protection regulations and maintain compliance with privacy laws.",
		icon: "VeraSafe.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "verasafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.verasafe\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "visible-privacy",
		name: "Visible Privacy",
		website: "https://visibleprivacy.com/",
		description: "Visible Privacy is a privacy-focused Consent Management Platform compatible with major CMS and ecommerce systems.",
		icon: "VisiblePrivacy.svg",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "visible-privacy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//bc-prod-config\\.empathy\\.co/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "yett",
		name: "Yett",
		website: "https://github.com/elbywan/yett",
		description: "Yett is a small webpage library to control the execution of (third party) scripts like analytics.",
		icon: "Yett.png",
		categories: [
			"privacy-compliance"
		],
		rules: [
			{
				id: "yett:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/yett@([\\d\\.]+)/dist/yett\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yett:pageGlobal:1",
				kind: "pageGlobal",
				property: "YETT_BLACKLIST",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
