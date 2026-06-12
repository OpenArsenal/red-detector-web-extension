import type { TechnologyDefinition } from '../types';

export const accessibilityTechnologyDefinitions = [
	{
		id: "accessibe",
		name: "AccessiBe",
		website: "https://accessibe.com",
		description: "AccessiBe is an accessibility overlay which claims to provide ADA and WCAG compliance. The system scans and analyzes a website, and applies adjustments which they claim make your website ADA and WCAG 2.1 compliant.",
		icon: "AccessiBe.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "accessibe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("acsbapp?\\.com/.*/acsb\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "accessibe:pageGlobal:1",
				kind: "pageGlobal",
				property: "acsb",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "accessibe:pageGlobal:2",
				kind: "pageGlobal",
				property: "acsbJS",
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
		id: "accessibility-toolbar-plugin",
		name: "Accessibility Toolbar Plugin",
		website: "https://webworks.ga/acc_toolbar",
		description: "Accessibility Toolbar Plugin is an accessibility component without dependencies (clean javascript), including a variety of tools.",
		icon: "Accessibility Toolbar Plugin.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "accessibility-toolbar-plugin:pageGlobal:0",
				kind: "pageGlobal",
				property: "MicAccessTool.prototype.openCloseBoxKeyboard",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "accessible360",
		name: "Accessible360",
		website: "https://accessible360.com",
		description: "Accessible360 is a web accessibility company based in Edina, Minnesota.",
		icon: "Accessible360.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "accessible360:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/@accessible360/accessible-slick@([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "accessible360:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/accessible360/accessible-slick/slick/slick\\.min\\.js\\?v=([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "accessible360:dom:2",
				kind: "dom",
				selector: "a[href*='accessible360.com/'][target='_blank'], a[href*='accessible360.com/'] > img",
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
		id: "accessibly",
		name: "Accessibly",
		website: "https://www.onthemapmarketing.com/accessibly/",
		description: "Accessibly is an app which is designed to assist with meeting certain requirements of WCAG 2.1 using an overlay solution.",
		icon: "Accessibly.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "accessibly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("accessibly\\.onthemapmarketing\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "accessibly:pageGlobal:1",
				kind: "pageGlobal",
				property: "accessibilityWidget.name",
				valuePattern: new RegExp("bound"),
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
		id: "accessiway",
		name: "AccessiWay",
		website: "https://www.accessiway.com",
		description: "AccessiWay is a solution focused on digital accessibility and compliance for organizations seeking to meet established standards.",
		icon: "AccessiWay.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "accessiway:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.accessiway\\.at"),
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
		id: "adally",
		name: "Adally",
		website: "https://adally.com",
		description: "Adally provides real-time website accessibility solutions, including free accessibility scans and widgets, to help websites comply with ADA, WCAG 2.1, and Section 508 standards.",
		icon: "Adally.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "adally:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloudfront\\.net/.*/adally\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "adasitecompliance",
		name: "AdaSiteCompliance",
		website: "https://adasitecompliance.com",
		description: "AdaSiteCompliance is a web accessibility solution, making websites compliant and accessible to WCAG 2.1 and section 508 compliance standards.",
		icon: "AdaSiteCompliance.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "adasitecompliance:pageGlobal:0",
				kind: "pageGlobal",
				property: "ADASTOOLBOXAPPSTATE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adasitecompliance:pageGlobal:1",
				kind: "pageGlobal",
				property: "adascHelper",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"onetime",
				"high"
			]
		}
	},
	{
		id: "all-in-one-accessibility",
		name: "All in One Accessibility",
		website: "https://www.skynettechnologies.com/all-in-one-accessibility",
		description: "All in One Accessibility is a website accessibility widget developed by Skynet Technologies to enhance compliance with WCAG 2.0, 2.1, 2.2, and ADA accessibility standards.",
		icon: "Skynet Technologies.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "all-in-one-accessibility:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.skynettechnologies\\.com/accessibility/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "all-in-one-accessibility:pageGlobal:1",
				kind: "pageGlobal",
				property: "aiao_modal_footer_height",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "all-in-one-accessibility:pageGlobal:2",
				kind: "pageGlobal",
				property: "aioa_accessibility_profiles_STATUS",
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
		id: "allyable",
		name: "Allyable",
		website: "https://allyable.com",
		description: "Allyable is an automated web accessibility solution with an AI engine.",
		icon: "Allyable.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "allyable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mk-sense\\.com/aweb\\?license"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "allyable:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("portal\\.allyable\\.com/"),
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
		id: "allyant",
		name: "Allyant",
		website: "https://accessible360.com",
		description: "Allyant is a company specializing in accessibility solutions for digital and print documents to ensure compliance with accessibility standards.",
		icon: "Allyant.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "allyant:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/@accessible360/accessible-slick@([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "allyant:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/accessible360/accessible-slick/slick/slick\\.min\\.js\\?v=([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "allyant:dom:2",
				kind: "dom",
				selector: "a[href*='accessible360.com/'][target='_blank'], a[href*='accessible360.com/'] > img",
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
		id: "audioeye",
		name: "AudioEye",
		website: "https://www.audioeye.com",
		description: "AudioEye is an accessibility overlay which claims to provide ADA and WCAG accessibility compliance.",
		icon: "AudioEye.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "audioeye:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.)?audioeye\\.com/(?:ae\\.js)?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "audioeye:dom:1",
				kind: "dom",
				selector: "iframe[scr*='.audioeye.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "audioeye:pageGlobal:2",
				kind: "pageGlobal",
				property: "$ae.attrHooks",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "audioeye:pageGlobal:3",
				kind: "pageGlobal",
				property: "window.AudioEye.version",
				valuePattern: new RegExp("^([\\d.]+)-\\d+$"),
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
		id: "digi-access",
		name: "digi·access",
		website: "https://www.digiaccess.org",
		description: "digi·access is a solution designed to improve web accessibility by helping organizations align digital content with WCAG 2.1 standards.",
		icon: "digiaccess.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "digi-access:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("download\\.digiaccess\\.org"),
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
		id: "droxit",
		name: "Droxit",
		website: "https://www.droxit.com",
		description: "Droxit is an automated web accessibility solution.",
		icon: "Droxit.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "droxit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/droxit-a11y/js/activator\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "droxit:cookie:1",
				kind: "cookie",
				key: "droxit_a11y_state",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "enable",
		name: "Enable",
		website: "https://www.enable.co.il",
		description: "Enable is a web accessibility plugin by uPress.",
		icon: "Enable.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "enable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.enable\\.co\\.il/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "enable:pageGlobal:1",
				kind: "pageGlobal",
				property: "enable_toolbar.is_premium",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "equalweb",
		name: "EqualWeb",
		website: "https://www.equalweb.com/",
		description: "EqualWeb provides a web accessibility overlay, and helps some people with disabilities access digital information.",
		icon: "EqualWeb.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "equalweb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.equalweb\\.com.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "essential-accessibility",
		name: "eSSENTIAL Accessibility",
		website: "https://www.essentialaccessibility.com",
		description: "eSSENTIAL Accessibility is a digital accessibility-as-a-service platform.",
		icon: "eSSENTIAL Accessibility.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "essential-accessibility:dom:0",
				kind: "dom",
				selector: " a[href*='.essentialaccessibility.com'] > img",
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
		id: "facil-iti",
		name: "Facil-iti",
		website: "https://www.facil-iti.com/",
		description: "Facil-iti is a web accessibility overlay which provides support for some people with disabilities and seniors.",
		icon: "Facil-iti.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "facil-iti:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ws\\.facil-iti\\.com/tag/faciliti-tag\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "handtalk",
		name: "Handtalk",
		website: "https://www.handtalk.me/",
		description: "Handtalk is an accessiblity plug-in which uses sign language to make sites accessible.",
		icon: "Handtalk.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "handtalk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.handtalk\\.me"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "handtalk:pageGlobal:1",
				kind: "pageGlobal",
				property: "HandTalk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hikeorders",
		name: "HikeOrders",
		website: "https://hikeorders.com",
		description: "HikeOrders is a web accessibility overlay that claims to make your site disability friendly.",
		icon: "HikeOrders.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "hikeorders:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hikeorders\\.com/main/assets/js/hko-accessibility\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
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
		id: "level-access",
		name: "Level Access",
		website: "https://www.levelaccess.com",
		description: "Level Access, formerly eSSENTIAL Accessibility, is a leading digital accessibility solutions provider offering tools and services to ensure compliance with standards such as ADA, Section 508, and WCAG​ ",
		icon: "Level Access.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "level-access:dom:0",
				kind: "dom",
				selector: " a[href*='.essentialaccessibility.com'] > img, a[href*='.levelaccess.com'] > img",
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
		id: "magixite",
		name: "Magixite",
		website: "https://acc.magixite.com",
		description: "Magixite offers the Web Content Accessibility Guidelines (WCAG), a set of guidelines and requirements designed to help designers and developers improve the accessibility of web content, ensuring it can be effectively used by individuals with disabilities.",
		icon: "Magixite.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "magixite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("acc\\.magixite\\.com/"),
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
		id: "make-sense",
		name: "Make-Sense",
		website: "https://mk-sense.com/",
		icon: "Make-Sense.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "make-sense:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mk-sense\\.com/aweb\\?license"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "marshal",
		name: "Marshal",
		website: "https://usemarshal.co",
		description: "Marshal is a platform that ensures businesses achieve compliance and accessibility.",
		icon: "Marshal.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "marshal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.usemarshal\\.co"),
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
		id: "nagich",
		name: "Nagich",
		website: "https://www.nagich.co.il",
		description: "Nagich is a website accessibility overlay provider from Israel.",
		icon: "Nagich.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "nagich:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nagich\\.co(?:m|\\.il)/core/([\\d.]+)/accessibility\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nagich:pageGlobal:1",
				kind: "pageGlobal",
				property: "interdeal.version",
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
		id: "nagishli",
		name: "NagishLi",
		website: "https://www.nagish.li",
		description: "NagishLi is a free accessibility plugin from Localize*, created to provide an equal oppurtunity for webmasters to make their website accessible and make the internet more accessible for people with disability.",
		icon: "NagishLi.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "nagishli:pageGlobal:0",
				kind: "pageGlobal",
				property: "$NagishLi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nagishli:pageGlobal:1",
				kind: "pageGlobal",
				property: "initNagishLi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nagishli:pageGlobal:2",
				kind: "pageGlobal",
				property: "nagishli_commons.version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"onetime"
			]
		}
	},
	{
		id: "piman",
		name: "Piman",
		website: "https://piman.cc",
		description: "Piman is an open-source accessibility UI framework create by Blueplanet Inc.",
		icon: "Piman.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "piman:dom:0",
				kind: "dom",
				selector: "button.bpa-btn",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pojo-me",
		name: "Pojo.me",
		website: "https://pojo.me/plugins/accessibility/",
		description: "Pojo.me provides a Accessibility overlay plug-in for any WordPress Theme or Page Builder.",
		icon: "Pojo.me.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "pojo-me:pageGlobal:0",
				kind: "pageGlobal",
				property: "PojoA11yOptions",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "poloda-ai",
		name: "Poloda AI",
		website: "https://www.polodaai.com",
		description: "Poloda AI is an accessibility solution designed to ensure compliance with accessibility standards and regulations.",
		icon: "PolodaAI.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "poloda-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.polodaai\\.com"),
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
		id: "recite-me",
		name: "Recite Me",
		website: "https://reciteme.com/",
		description: "Recite Me is a web accessibility overlay that claims to allow website visitors to customize a site in a way that works for them.",
		icon: "Recite Me.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "recite-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.reciteme\\.com/asset/js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "silktide",
		name: "Silktide",
		website: "https://silktide.com",
		description: "Silktide is a platform that automatically detects and resolves accessibility, content, and user experience issues on websites.",
		icon: "Silktide.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "silktide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.silktide\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "silktide:pageGlobal:1",
				kind: "pageGlobal",
				property: "silktide",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "silktide:pageGlobal:2",
				kind: "pageGlobal",
				property: "silktideInstance",
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
		id: "texthelp",
		name: "Texthelp",
		website: "https://www.texthelp.com/en-gb/products/browsealoud/",
		description: "TextHelp is a literacy, accessibility and dyslexia software developer for people with reading and writing difficulties.",
		icon: "Texthelp.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "texthelp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("browsealoud\\.com/.*/browsealoud\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "uremediate",
		name: "uRemediate",
		website: "https://www.user1st.com/uremediate/",
		description: "uRemediate provides web accessibility testing tools and accessibility overlays.",
		icon: "User1st.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "uremediate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fecdn\\.user1st\\.info/Loader/head"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "usablenet",
		name: "UsableNet",
		website: "https://usablenet.com",
		description: "UsableNet is a technology for web accessibility and digital transformation, providing end-to-end services.",
		icon: "UsableNet.png",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "usablenet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usablenet\\.com/pt/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "usablenet:dom:1",
				kind: "dom",
				selector: "iframe[src*='.usablenet.com/pt/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "usablenet:pageGlobal:2",
				kind: "pageGlobal",
				property: "enableUsableNetAssistive",
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
		id: "user-accessibility",
		name: "User Accessibility",
		website: "https://user-a.co.il",
		description: "User Accessibility is a solution incorporating automated site scanning and machine learning for future updates, while utilising JS to conform to WECAG standards for improved website and application accessibility.",
		icon: "User Accessibility.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "user-accessibility:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//system\\.user-a\\.co\\.il/"),
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
		id: "userway",
		name: "UserWay",
		website: "https://userway.org/",
		description: "UserWay is a web accessibility overlay for websites that claims to improve compliance with accessibility standards.",
		icon: "UserWay.svg",
		categories: [
			"accessibility"
		],
		rules: [
			{
				id: "userway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.userway\\.org/widget.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "voice-intuitive",
		name: "Voice Intuitive",
		website: "https://voiceintuitive.com/en/voice-intuitive-tm/",
		description: "Voice Intuitive is a platform that enhances web content accessibility by providing voice and translation services, supporting multiple languages.",
		icon: "VoiceIntuitive.svg",
		categories: [
			"accessibility",
			"translations"
		],
		rules: [
			{
				id: "voice-intuitive:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.voiceintuitive\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
