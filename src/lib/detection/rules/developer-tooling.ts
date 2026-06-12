import type { TechnologyDefinition } from '../types';

export const developerToolingTechnologyDefinitions = [
	{
		id: "hyperscript",
		name: "_hyperscript",
		website: "https://hyperscript.org",
		description: "_hyperscript is a scripting language for adding interactivity to the front-end.",
		icon: "_hyperscript.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "hyperscript:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//unpkg\\.com/hyperscript\\.org@([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hyperscript:pageGlobal:1",
				kind: "pageGlobal",
				property: "_hyperscript",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sulu-web",
		name: "@sulu/web",
		website: "https://github.com/sulu/web-js",
		icon: "Sulu.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sulu-web:pageGlobal:0",
				kind: "pageGlobal",
				property: "web.startComponents",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "acquia-cloud-ide",
		name: "Acquia Cloud IDE",
		website: "https://www.acquia.com/products/drupal-cloud/cloud-ide",
		description: "Acquia Cloud IDE is a browser-based source code editor and a Drupal development stack running on the Acquia Cloud Platform.",
		icon: "acquia-cloud-ide.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "acquia-cloud-ide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/.+\\.web\\.ahdev\\.cloud"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-cloud-ide:url:1",
				kind: "url",
				pattern: new RegExp("https:?\\/\\/.+\\.web\\.ahdev\\.cloud"),
				description: "Page URL matches a known technology marker."
			}
		],
		implies: [
			"acquia-cloud-platform"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "adobe-flash",
		name: "Adobe Flash",
		website: "https://www.adobe.com/products/flashplayer",
		description: "Adobe Flash is a multimedia software platform used for production of animations, rich web applications and embedded web browser video players.",
		icon: "Adobe Flash.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "adobe-flash:dom:0",
				kind: "dom",
				selector: "object[type='application/x-shockwave-flash']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adobe-flash:dom:1",
				kind: "dom",
				selector: "param[value*='.swf']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:adobe:flash:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "aispeed",
		name: "AiSpeed",
		website: "https://apps.shopify.com/aispeed",
		description: "AiSpeed is a shopify app focused on improving site speed.",
		icon: "AiSpeed.png",
		categories: [
			"developer-tooling",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "aispeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("aispeed\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aispeed:pageGlobal:1",
				kind: "pageGlobal",
				property: "aispeed_init",
				description: "Page-owned global matches a known technology marker."
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
		id: "amaze-ui",
		name: "Amaze UI",
		website: "https://amazeui.shopxo.net/",
		description: "Amaze UI is a mobile-first JavaScript library designed to simplify front-end development.",
		icon: "Amaze UI.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "amaze-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:js\\/)?)?amazeui(?:\\/js\\/jquery)?(?:\\.widgets)?(?:\\.helper)?(?:\\.legacy)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "anima",
		name: "Anima",
		website: "https://www.animaapp.com/",
		description: "Anima is an AI-powered tool designed to assist users in converting their designs into functional code, creating interactive prototypes, and streamlining the automation of design systems.",
		icon: "Anima.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "anima:pageGlobal:0",
				kind: "pageGlobal",
				property: "__ANIMA_PROJECT_DATA__",
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
		id: "anythingslider",
		name: "AnythingSlider",
		website: "https://css-tricks.com/anythingslider-jquery-plugin/",
		description: "A robust jQuery-based slider plugin.",
		icon: "AnythingSlider.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "anythingslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("anythingslider(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "appifiny",
		name: "Appifiny",
		website: "https://www.appifiny.co.uk",
		description: "Appifiny is a platform that provides a streamlined solution for developing, customizing, and launching apps.",
		icon: "Appifiny.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "appifiny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("recently\\.appifiny\\.io/"),
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
		id: "appwrite",
		name: "Appwrite",
		website: "https://appwrite.io",
		description: "Appwrite is an end-to-end backend server for web, mobile or native applications packaged as a set of Docker microservices.",
		icon: "Appwrite.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "appwrite:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("appwrite\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "appwrite:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cloud\\.appwrite\\.io"),
				description: "Observed request URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring",
				"freemium"
			],
			cpe: "cpe:2.3:a:appwrite:appwrite:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "arm-js",
		name: "ARM JS",
		website: "https://github.com/michaeljymsgutierrez/arm-js-library",
		description: "ARM JS is a JavaScript library that centralizes data management and streamlines interactions with APIs.",
		icon: "ARMJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "arm-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "ARM.aliases",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "artifactory",
		name: "Artifactory",
		website: "https://jfrog.com/open-source/#os-arti",
		icon: "Artifactory.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "artifactory:html:0",
				kind: "html",
				pattern: new RegExp("<span class=\"version\">Artifactory(?: Pro)?(?: Power Pack)?(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "artifactory:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("wicket/resource/org\\.artifactory\\."),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "artifactory:pageGlobal:2",
				kind: "pageGlobal",
				property: "ArtifactoryUpdates",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jfrog:artifactory:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "asana",
		name: "Asana",
		website: "https://asana.com",
		description: "Asana is a web and mobile application designed to help teams organize, track, and manage their work.",
		icon: "Asana.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "asana:dom:0",
				kind: "dom",
				selector: "a[href*='form.asana.com'], a[href*='app.asana.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "askhandle",
		name: "AskHandle",
		website: "https://www.askhandle.com",
		description: "AskHandle is a platform that enables the creation of custom AI agents in minutes using user data and requirements, without requiring coding.",
		icon: "AskHandle.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "askhandle:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("dashboard\\.askhandle\\.com"),
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
		id: "atlassian-bitbucket",
		name: "Atlassian Bitbucket",
		website: "https://www.atlassian.com/software/bitbucket/overview/",
		description: "Bitbucket is a web-based version control repository hosting service for source code and development projects that use either Mercurial or Git revision control systems.",
		icon: "Atlassian Bitbucket.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "atlassian-bitbucket:html:0",
				kind: "html",
				pattern: new RegExp("<li>Atlassian Bitbucket <span title=\"[a-z0-9]+\" id=\"product-version\" data-commitid=\"[a-z0-9]+\" data-system-build-number=\"[a-z0-9]+\"> v([\\d.]+)<"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "atlassian-bitbucket:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("com\\.atlassian\\.bitbucket"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "atlassian-bitbucket:pageGlobal:2",
				kind: "pageGlobal",
				property: "bitbucket",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "atlassian-bitbucket:meta:3",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("Bitbucket"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:atlassian:bitbucket:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "atlassian-fisheye",
		name: "Atlassian FishEye",
		website: "https://www.atlassian.com/software/fisheye/overview/",
		icon: "Atlassian FishEye.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "atlassian-fisheye:html:0",
				kind: "html",
				pattern: new RegExp("<title>(?:Log in to )?FishEye (?:and Crucible )?([\\d.]+)?</title>"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "atlassian-fisheye:cookie:1",
				kind: "cookie",
				key: "FESESSIONID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:atlassian:fisheye:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "atlassian-jira",
		name: "Atlassian Jira",
		website: "https://www.atlassian.com/software/jira",
		icon: "Atlassian Jira.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "atlassian-jira:dom:0",
				kind: "dom",
				selector: "#jira",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "atlassian-jira:pageGlobal:1",
				kind: "pageGlobal",
				property: "jira.id",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "atlassian-jira:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("JIRA"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "atlassian-jira:meta:3",
				kind: "meta",
				key: "data-version",
				valuePattern: new RegExp("([\\d.]+)"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:atlassian:jira:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "atlassian-jira-issue-collector",
		name: "Atlassian Jira Issue Collector",
		website: "https://www.atlassian.com/software/jira/overview/",
		description: "Atlassian Jira Issue Collector is a tool used to download a list of websites using with email addresses, phone numbers and LinkedIn profiles.",
		icon: "Atlassian Jira.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "atlassian-jira-issue-collector:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jira-issue-collector-plugin"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "atlassian-jira-issue-collector:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("atlassian\\.jira\\.collector\\.plugin"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "atlassian-statuspage",
		name: "Atlassian Statuspage",
		website: "https://www.atlassian.com/software/statuspage",
		description: "Statuspage is a status and incident communication tool.",
		icon: "Atlassian Statuspage.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "atlassian-statuspage:html:0",
				kind: "html",
				pattern: new RegExp("<a[^>]*href=\"https?://(?:www\\.)?statuspage\\.io/powered-by[^>]+>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "atlassian-statuspage:responseHeader:1",
				kind: "responseHeader",
				key: "X-StatusPage-Skip-Logging",
				description: "Response header matches a known technology marker."
			},
			{
				id: "atlassian-statuspage:responseHeader:2",
				kind: "responseHeader",
				key: "X-StatusPage-Version",
				description: "Response header matches a known technology marker."
			},
			{
				id: "atlassian-statuspage:dns:3",
				kind: "dns",
				valuePattern: new RegExp("status-page-domain-verification="),
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
		id: "autocomplete-js",
		name: "autoComplete.js",
		website: "https://tarekraafat.github.io/autoComplete.js",
		description: "autoComplete.js is a simple, pure vanilla Javascript library.",
		icon: "autoComplete.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "autocomplete-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@tarekraafat/autocomplete\\.js@([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "barba-js",
		name: "Barba.js",
		website: "https://barba.js.org",
		description: "Barba.js is a small and easy-to-use javascript library that helps you creating fluid and smooth transitions between your website's pages.",
		icon: "Barba.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "barba-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "barba.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "basket-js",
		name: "basket.js",
		website: "https://addyosmani.github.io/basket.js/",
		icon: "basket.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "basket-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "basket.isValidItem",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "beamer",
		name: "Beamer",
		website: "https://www.getbeamer.com",
		description: "Beamer is a feature management platform that allows businesses to manage and share new product releases, feature updates, and bug fixes with their customers.",
		icon: "Beamer.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "beamer:pageGlobal:0",
				kind: "pageGlobal",
				property: "Beamer.enabled",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "beamer:pageGlobal:1",
				kind: "pageGlobal",
				property: "_BEAMER_URL",
				valuePattern: new RegExp("//app\\.getbeamer\\.com/"),
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
		id: "berqwp",
		name: "BerqWP",
		website: "https://berqwp.com/",
		description: "BerqWP is a speed optimization plugin designed to help websites pass the core web vitals assessment and improve overall speed scores for better performance.",
		icon: "BerqWP.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "berqwp:pageGlobal:0",
				kind: "pageGlobal",
				property: "BerqWPcacheResource",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "berqwp:pageGlobal:1",
				kind: "pageGlobal",
				property: "berqwp_add_assets_browser_cache",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "berqwp:pageGlobal:2",
				kind: "pageGlobal",
				property: "berqwp_readyState",
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
		id: "better-stack",
		name: "Better Stack",
		website: "https://betterstack.com/uptime",
		description: "Better Stack is the all-in-one infrastructure monitoring platform for your incident management, uptime monitoring, and status pages.",
		icon: "Better Stack.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "better-stack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//(?:uptime\\.)?(?:betteruptime|betterstack)\\.com/"),
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
		id: "betty-blocks",
		name: "Betty Blocks",
		website: "https://www.bettyblocks.com",
		description: "Betty Blocks is a cloud-based application development solution featuring a no-code, drag-and-drop interface for developing business applications.",
		icon: "Betty Blocks.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "betty-blocks:meta:0",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^Made with Betty Blocks$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"react"
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
		id: "blesta",
		name: "Blesta",
		website: "https://www.blesta.com",
		description: "Blesta is a billing platform tailored for web hosting providers, featuring client management, automated billing, and support systems.",
		icon: "Blesta.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "blesta:cookie:0",
				kind: "cookie",
				key: "blesta_sid",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "blitz",
		name: "Blitz",
		website: "https://putyourlightson.com/plugins/blitz",
		description: "Blitz provides intelligent static page caching for creating lightning-fast sites with Craft CMS.",
		icon: "Blitz.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "blitz:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Cached by Blitz on"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "blitz:pageGlobal:1",
				kind: "pageGlobal",
				property: "Blitz",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blitz:pageGlobal:2",
				kind: "pageGlobal",
				property: "blitzReplace",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blitz:responseHeader:3",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Blitz$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"craft-cms"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"onetime",
				"low"
			]
		}
	},
	{
		id: "boba-js",
		name: "Boba.js",
		website: "https://boba.space150.com",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "boba-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("boba(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"google-analytics"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "boomerang",
		name: "Boomerang",
		website: "https://akamai.github.io/boomerang",
		description: "boomerang is a JavaScript library that measures the page load time experienced by real users, commonly called RUM (Real User Measurement).",
		icon: "boomerang.svg",
		categories: [
			"developer-tooling",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "boomerang:pageGlobal:0",
				kind: "pageGlobal",
				property: "BOOMR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "boomerang:pageGlobal:1",
				kind: "pageGlobal",
				property: "BOOMR_lstart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "boomerang:pageGlobal:2",
				kind: "pageGlobal",
				property: "BOOMR_mq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "bugherd",
		name: "BugHerd",
		website: "https://bugherd.com",
		description: "BugHerd is a cloud-based feedback collection and bug management tool.",
		icon: "BugHerd.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "bugherd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bugherd\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bugherd:pageGlobal:1",
				kind: "pageGlobal",
				property: "BugHerdConfig",
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
		id: "buglog",
		name: "Buglog",
		website: "https://buglog.com",
		description: "Buglog is a tool for creating and sharing bug reports in real-time directly from the browser.",
		icon: "Buglog.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "buglog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.buglog\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buglog:pageGlobal:1",
				kind: "pageGlobal",
				property: "buglog",
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
		id: "bugzilla",
		name: "Bugzilla",
		website: "https://www.bugzilla.org",
		icon: "Bugzilla.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "bugzilla:html:0",
				kind: "html",
				pattern: new RegExp("href=\"enter_bug\\.cgi\">"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "bugzilla:html:1",
				kind: "html",
				pattern: new RegExp("<main id=\"bugzilla-body\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "bugzilla:html:2",
				kind: "html",
				pattern: new RegExp("<a href=\"https?://www\\.bugzilla\\.org/docs/([0-9.]+)/[^>]+>Help<"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "bugzilla:html:3",
				kind: "html",
				pattern: new RegExp("<span id=\"information\" class=\"header_addl_info\">version ([\\d.]+)<"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "bugzilla:dom:4",
				kind: "dom",
				selector: "main[id*='bugzilla-body']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bugzilla:dom:5",
				kind: "dom",
				selector: "span[id*='information'][class*='header_addl_info']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bugzilla:pageGlobal:6",
				kind: "pageGlobal",
				property: "BUGZILLA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bugzilla:cookie:7",
				kind: "cookie",
				key: "Bugzilla_login_request_cookie",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "bugzilla:meta:8",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Bugzilla ?([\\d.]+)?"),
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
			cpe: "cpe:2.3:a:mozilla:bugzilla:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "bun",
		name: "bun",
		website: "https://bun.sh",
		description: "Bun is a fast JavaScript runtime compatible with Node.js and Deno.",
		icon: "bun.svg",
		categories: [
			"developer-tooling",
			"bundler"
		],
		rules: [
			{
				id: "bun:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Bun"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "c",
		name: "C",
		website: "https://www.open-std.org/jtc1/sc22/wg14/",
		description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
		icon: "C.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "c:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^C$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "c3-js",
		name: "C3.js",
		website: "https://c3js.org/",
		description: "D3 based reusable chart library",
		icon: "C3.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "c3-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c3(?:\\.min)?(?:-[a-zA-Z0-9]{8})?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cachet",
		name: "Cachet",
		website: "https://cachethq.io",
		description: "Cachet is the free and open-source status page for your API, service or company.",
		icon: "Cachet.svg",
		categories: [
			"developer-tooling",
			"api-pattern"
		],
		rules: [
			{
				id: "cachet:pageGlobal:0",
				kind: "pageGlobal",
				property: "Cachet.Notifier",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "camanjs",
		name: "CamanJS",
		website: "https://github.com/meltingice/CamanJS",
		description: "CamanJS is a JavaScript library designed for image editing directly on the browser, allowing manipulation of canvas elements.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "camanjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "Caman",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "camanjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "Caman.version.release",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "canny",
		name: "Canny",
		website: "https://canny.io",
		description: "Canny is a cloud-based solution that helps small to large businesses collect, analyse, prioritise and track user feedback to make informed product decisions.",
		icon: "Canny.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "canny:dom:0",
				kind: "dom",
				selector: "a[href*='.canny.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "canny:pageGlobal:1",
				kind: "pageGlobal",
				property: "Canny",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "canny:responseHeader:2",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("//canny\\.io"),
				description: "Response header matches a known technology marker."
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
		id: "cart-js",
		name: "Cart.js",
		website: "https://cartjs.org",
		description: "Cart.js is a very small open-source Javascript library that makes the addition of powerful Ajax cart functionality to your Shopify theme a breeze.",
		icon: "Cart.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cart-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:shopify-cartjs/([\\d\\.]+)|assets)/rivets-cart\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cfml",
		name: "CFML",
		website: "https://adobe.com/products/coldfusion-family.html",
		description: "ColdFusion Markup Language (CFML), is a scripting language for web development that runs on the JVM, the .NET framework, and Google App Engine.",
		icon: "CFML.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cfml:cookie:0",
				kind: "cookie",
				key: "CFID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "chai",
		name: "Chai",
		website: "https://www.chaijs.com",
		description: "Chai is a BDD / TDD assertion library for node and the browser that can be paired with any javascript testing framework.",
		icon: "Chai.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "chai:pageGlobal:0",
				kind: "pageGlobal",
				property: "chai",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chai:pageGlobal:1",
				kind: "pageGlobal",
				property: "chai.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "checkly",
		name: "Checkly",
		website: "https://www.checklyhq.com",
		description: "Checkly is the API and E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.",
		icon: "Checkly.svg",
		categories: [
			"developer-tooling",
			"api-pattern"
		],
		rules: [
			{
				id: "checkly:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.checklyhq\\.com/"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "checkly:pageGlobal:1",
				kind: "pageGlobal",
				property: "__NUXT__.config.public.apiUrl",
				valuePattern: new RegExp("api\\.checklyhq\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"nuxt-js"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "cheerpj",
		name: "CheerPJ",
		website: "https://cheerpj.com",
		description: "CheerpJ is a WebAssembly-based Java Virtual Machine and OpenJDK distribution designed to run Java applications in modern browsers.",
		icon: "CheerPJ.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cheerpj:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cheerpj\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "cheerpj:pageGlobal:1",
				kind: "pageGlobal",
				property: "CheerpJDataFolder",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cheerpj:pageGlobal:2",
				kind: "pageGlobal",
				property: "CheerpJDevFolder",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cheerpj:pageGlobal:3",
				kind: "pageGlobal",
				property: "CheerpJWebFolder",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "choices",
		name: "Choices",
		website: "https://github.com/Choices-js/Choices",
		description: "Choices.js is a lightweight, configurable select box/text input plugin.",
		icon: "Choices.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "choices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("choices\\.js(?:@|/)?([\\d\\.]+)?.+choices\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "choices:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/modules/choices/js/choices\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "choices:pageGlobal:2",
				kind: "pageGlobal",
				property: "Choices",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "chroma-js",
		name: "chroma.js",
		website: "https://www.vis4.net/chromajs/",
		description: "chroma.js is a small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "chroma-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chroma(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chroma-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?chroma(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "clarifai",
		name: "Clarifai",
		website: "https://www.clarifai.com",
		description: "Clarifai is a unified platform that enables creation and management of AI workloads while optimizing compute costs across preferred environments.",
		icon: "Clarifai.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "clarifai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.clarifai\\.com"),
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
		id: "classnames",
		name: "Classnames",
		website: "https://jedwatson.github.io/classnames/",
		description: "Javascript utility for conditionally joining classNames together.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "classnames:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("classnames\\.?\\w{0,20}(?:\\.chunk)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cleave-js",
		name: "Cleave.js",
		website: "https://nosir.github.io/cleave.js/",
		description: "JavaScript library for formatting input text content when you are typing.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cleave-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cleave(?:\\.min)?(?:\\.\\w{0,32})?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "clickonce",
		name: "ClickOnce",
		website: "https://learn.microsoft.com/en-us/visualstudio/deployment/clickonce-security-and-deployment",
		description: "ClickOnce is a Microsoft .NET deployment technology that enables the creation of self-updating Windows-based applications that can be installed and run with minimal user interaction.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "clickonce:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.ClickOnceInfoText"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "clientjs",
		name: "ClientJS",
		website: "https://clientjs.org",
		description: "ClientJS is a JavaScript library for generating browser fingerprints, exposing all the browser data-points.",
		icon: "ClientJS.png",
		categories: [
			"developer-tooling",
			"privacy-compliance"
		],
		rules: [
			{
				id: "clientjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/clientjs@(\\d.*?)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clientjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/ClientJS/(?:(\\d.*?)/)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clientjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "ClientJS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "clipboard-js",
		name: "Clipboard.js",
		website: "https://clipboardjs.com/",
		icon: "Clipboard.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "clipboard-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clipboard(?:-([\\d.]+))?(?:\\.min)?\\.js"),
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
		id: "clockwork",
		name: "Clockwork",
		website: "https://github.com/underground-works/clockwork-app",
		description: "Clockwork is a development tool for PHP available right in your browser.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "clockwork:responseHeader:0",
				kind: "responseHeader",
				key: "x-clockwork-version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "closure-library",
		name: "Closure Library",
		website: "https://github.com/google/closure-library",
		description: "Closure Library is a JavaScript library developed by Google for building robust web applications, offering utilities for DOM manipulation, event handling, data structures, and more.",
		icon: "Google.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cloudflare-rocket-loader",
		name: "Cloudflare Rocket Loader",
		website: "https://support.cloudflare.com/hc/en-us/articles/200168056-Understanding-Rocket-Loader",
		description: "Cloudflare Rocket Loader is responsible for prioritising over website's content by delaying the loading of Javascript until rendering.",
		icon: "CloudFlare.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cloudflare-rocket-loader:pageGlobal:0",
				kind: "pageGlobal",
				property: "__cfQR.done",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudflare-rocket-loader:pageGlobal:1",
				kind: "pageGlobal",
				property: "__cfRLUnblockHandlers",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cloudflare-zaraz",
		name: "Cloudflare Zaraz",
		website: "https://www.cloudflare.com/products/zaraz/",
		description: "Cloudflare Zaraz gives you complete control over third-party tools and services for your website, and allows you to offload them to Cloudflare’s edge, improving the speed and security of your website.",
		icon: "CloudFlare.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cloudflare-zaraz:pageGlobal:0",
				kind: "pageGlobal",
				property: "zaraz",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cloudflare-zaraz:pageGlobal:1",
				kind: "pageGlobal",
				property: "zarazData",
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
		id: "code-climate",
		name: "Code Climate",
		website: "https://codeclimate.com",
		description: "Code Climate is a platform that enhances code quality and efficiency.",
		icon: "CodeClimate.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "code-climate:dom:0",
				kind: "dom",
				selector: "a[href*='codeclimate.com'] > img[src*='api.codeclimate.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "combodo-itop",
		name: "Combodo iTop",
		website: "https://www.combodo.com/itop-193",
		description: "Combodo iTop is an open-source IT service management (ITSM) and IT operations management (ITOM) platform developed by Combodo, a software company based in France.",
		icon: "Combodo iTop.svg",
		categories: [
			"developer-tooling",
			"widgets-misc"
		],
		rules: [],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "conduit",
		name: "Conduit",
		website: "https://conduit.io",
		description: "Conduit is a data integration tool designed to synchronize production systems through an extensible, event-first approach with minimal dependencies for integration into existing workflows.",
		icon: "Conduit.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "conduit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.conduit\\.com/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "construct-3",
		name: "Construct 3",
		website: "https://www.construct.net/",
		description: "Construct 3 is a browser-based game development platform that enables the creation of 2D games using a visual, drag-and-drop interface without requiring programming knowledge.",
		icon: "Construct3.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "construct-3:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Construct 3$"),
				description: "Meta tag matches a known technology marker."
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
		id: "core-js",
		name: "core-js",
		website: "https://github.com/zloirock/core-js",
		description: "core-js is a modular standard library for JavaScript, with polyfills for cutting-edge ECMAScript features.",
		icon: "core-js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "core-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "__core-js_shared__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "core-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "__core-js_shared__.versions.0.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "core-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "_babelPolyfill",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "core-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "core",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "core-js:pageGlobal:4",
				kind: "pageGlobal",
				property: "core.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cronitor",
		name: "Cronitor",
		website: "https://cronitor.io",
		description: "Cronitor is a monitoring tool for developers that tracks status, performance, and uptime of cron jobs, websites, APIs, and other services.",
		icon: "Cronitor.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cronitor:pageGlobal:0",
				kind: "pageGlobal",
				property: "cronitor.q",
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
		id: "crypto-js",
		name: "crypto-js",
		website: "https://github.com/brix/crypto-js",
		description: "crypto-js is a JavaScript library of crypto standards.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "crypto-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d\\.-]+))?/crypto-js(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crypto-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "CryptoJS.Rabbit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crypto-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "CryptoJS.algo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cstate",
		name: "cState",
		website: "https://github.com/cstate/cstate",
		description: "cState is an open-source static (serverless) status page.",
		icon: "cState.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "cstate:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("cState v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "darkmode-js",
		name: "Darkmode.js",
		website: "https://github.com/sandoche/Darkmode.js",
		description: "Darkmode.js is a JavaScript library that enables an HTML element to switch between CSS themes.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "darkmode-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("darkmode-js@([\\d\\.]+)/lib/darkmode-js\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "darkmode-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Darkmode",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dart",
		name: "Dart",
		website: "https://dart.dev",
		description: "Dart is an open-source, general-purpose, object-oriented programming language developed by Google.",
		icon: "Dart.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:\\.)?(?:dart)(?:\\.js)?/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dart:pageGlobal:1",
				kind: "pageGlobal",
				property: "$__dart_deferred_initializers__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dart:pageGlobal:2",
				kind: "pageGlobal",
				property: "___dart__$dart_dartObject_ZxYxX_0_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dart:pageGlobal:3",
				kind: "pageGlobal",
				property: "___dart_dispatch_record_ZxYxX_0_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dart:cookie:4",
				kind: "cookie",
				key: "DARTSESSID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "decimal-js",
		name: "decimal.js",
		website: "https://mikemcl.github.io/decimal.js/",
		icon: "decimal.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "decimal-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("decimal[.-]([\\d.]*\\d+)(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "decimal-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d.]*\\d+)/decimal(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "decimal-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("decimal(?:\\.min)?\\.js(?:\\?ver(?:sion)?=([\\d.]*\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "decimal-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "Decimal.ROUND_HALF_FLOOR",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "developing-azerbaijan",
		name: "Developing Azerbaijan",
		website: "https://www.developing.az/",
		description: "Developing Azerbaijan is a provider of services including website creation, optimization, technical support, and hosting.",
		icon: "DevelopingAzerbaijan.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "developing-azerbaijan:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Developing.az"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dexie-js",
		name: "Dexie.js",
		website: "https://dexie.org",
		description: "A Minimalistic Wrapper for IndexedDB.",
		icon: "Dexie.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dexie-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?dexie(?:\\.bitrix)?(?:\\.bundle)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dhtmlx",
		name: "DHTMLX",
		website: "https://dhtmlx.com",
		description: "DHTMLX specialises in building JavaScript UI libraries for project management, event planning, big data visualisation, and reporting.",
		icon: "DHTMLX.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dhtmlx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/dhtmlxcommon\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dhtmlx:pageGlobal:1",
				kind: "pageGlobal",
				property: "dhtmlDragAndDropObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dhtmlx:pageGlobal:2",
				kind: "pageGlobal",
				property: "dhtmlXTreeItemObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "dimml",
		name: "Dimml",
		website: "https://www.dimml.io",
		description: "Dimml is a data flow management software.",
		icon: "Dimml.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dimml:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dimml\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "dojo",
		name: "Dojo",
		website: "https://dojotoolkit.org",
		icon: "Dojo.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dojo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("((?:\\d+\\.)+\\d+)/dojo/dojo(?:\\.xd)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dojo:pageGlobal:1",
				kind: "pageGlobal",
				property: "dojo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dojo:pageGlobal:2",
				kind: "pageGlobal",
				property: "dojo.version.major",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:dojotoolkit:dojo:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "dragon",
		name: "Dragon",
		website: "https://dragon-lang.org",
		description: "Dragon is a general-purpose programming language.",
		icon: "Dragon.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dragon:url:0",
				kind: "url",
				pattern: new RegExp("^.*(?:\\.dgn)$"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "dragon:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Dragon Native ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"apache-http-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "dropzone",
		name: "Dropzone",
		website: "https://www.dropzone.dev",
		description: "Dropzone is a JavaScript library that turns any HTML element into a dropzone.",
		icon: "Dropzone.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dropzone:pageGlobal:0",
				kind: "pageGlobal",
				property: "Dropzone",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dropzone:pageGlobal:1",
				kind: "pageGlobal",
				property: "Dropzone.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
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
		id: "dynamics-js",
		name: "Dynamics.js",
		website: "https://dynamicsjs.com",
		description: "Javascript library to create physics-related animations",
		icon: "Dynamics.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "dynamics-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dynamics(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "easeljs",
		name: "EaselJS",
		website: "https://createjs.com/easeljs",
		description: "EaselJS is a JavaScript library designed to simplify working with the HTML5 Canvas element, making it useful for creating games, generative art, and other graphical applications.",
		icon: "EaselJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "easeljs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/easeljs\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "easyengine",
		name: "EasyEngine",
		website: "https://easyengine.io",
		description: "EasyEngine is a command-line tool for the Nginx web servers to manage WordPress sites that are running on the LEMP Stack.",
		icon: "EasyEngine.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "easyengine:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^EasyEngine (.*)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"docker"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "edgemesh",
		name: "Edgemesh",
		website: "https://edgemesh.com/",
		description: "Edgemesh is web acceleration platform for e-commerce brands",
		icon: "Edgemesh.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "edgemesh:pageGlobal:0",
				kind: "pageGlobal",
				property: "edgemesh",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "elixir",
		name: "Elixir",
		website: "https://elixir-lang.org",
		description: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
		icon: "Elixir.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		implies: [
			"erlang"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "elliptic",
		name: "Elliptic",
		website: "https://github.com/indutny/elliptic",
		description: "Fast Elliptic Curve Cryptography in plain javascript.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "elliptic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("elliptic(?:[\\w\\.-]{0,27})?(?:\\.bundle)?(?:\\.chunk)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "elm",
		name: "Elm",
		website: "https://elm-lang.org/",
		description: "Elm is a statically typed functional programming language created by Evan Czaplicki in 2012 for building web applications.",
		icon: "elm.svg",
		categories: [
			"developer-tooling",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "elm:pageGlobal:0",
				kind: "pageGlobal",
				property: "Elm.Main.embed",
				version: { source: "static", value: "0.18" },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "elm:pageGlobal:1",
				kind: "pageGlobal",
				property: "Elm.Main.init",
				version: { source: "static", value: "0.19" },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "enquire-js",
		name: "Enquire.js",
		website: "https://wicky.nillia.ms/enquire.js/",
		description: "enquire.js is a lightweight, pure JavaScript library for responding to CSS media queries.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "enquire-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("enquire(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "erlang",
		name: "Erlang",
		website: "https://www.erlang.org",
		description: "Erlang is a general-purpose, concurrent, functional programming language, and a garbage-collected runtime system.",
		icon: "Erlang.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "erlang:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Erlang(?: OTP/([\\d.ABR-]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:erlang:erlang\\/otp:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ethers",
		name: "Ethers",
		website: "https://ethers.org/",
		description: "Ethers is a complete, tiny and simple Ethereum library.",
		icon: "Ethers.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ethers:pageGlobal:0",
				kind: "pageGlobal",
				property: "_ethers",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "famous-ai",
		name: "Famous.ai",
		website: "https://famous.ai",
		description: "Famous.ai is a platform that transforms written concepts into functional mobile or web applications using artificial intelligence.",
		icon: "FamousAI.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "famous-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.famous\\.ai"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fancybox",
		name: "FancyBox",
		website: "https://fancyapps.com/fancybox",
		description: "FancyBox is a tool for displaying images, html content and multi-media in a Mac-style 'lightbox' that floats overtop of web page.",
		icon: "FancyBox.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "fancybox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.fancybox(?:\\.pack|\\.min)?\\.js(?:\\?v=([\\d.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fancybox:pageGlobal:1",
				kind: "pageGlobal",
				property: "$.fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fancybox:pageGlobal:2",
				kind: "pageGlobal",
				property: "Fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fancybox:pageGlobal:3",
				kind: "pageGlobal",
				property: "jQuery.fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fasterize",
		name: "Fasterize",
		website: "https://www.fasterize.com/",
		description: "Fasterize is a website accelerator service.",
		icon: "Fasterize.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "fasterize:pageGlobal:0",
				kind: "pageGlobal",
				property: "fstrz",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "faveo",
		name: "Faveo",
		website: "https://faveohelpdesk.com",
		description: "Faveo is an open source help desk system and ticket management tool that enables tracking, assignment, and resolution of support tickets.",
		icon: "Faveo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "faveo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/lb-faveo/js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "faveo:dom:1",
				kind: "dom",
				selector: "link[href*='/lb-faveo/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"onetime",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "featurebase",
		name: "Featurebase",
		website: "https://www.featurebase.app",
		description: "Featurebase is feature management software designed to collect, organise, and analyse product feedback, empowering teams to make data-driven decisions for building products that align with customer preferences.",
		icon: "Featurebase.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "featurebase:dom:0",
				kind: "dom",
				selector: "meta[http-equiv*='Content-Security-Policy'][content*='//featurebase.app']",
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
		id: "feedback-fish",
		name: "Feedback Fish",
		website: "https://feedback.fish",
		description: "Feedback Fish is a widget for collecting website feedback from users.",
		icon: "feedback-fish.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "feedback-fish:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https://feedback\\.fish/ff\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "filamentphp",
		name: "Filamentphp",
		website: "https://filamentphp.com",
		description: "Filamentphp is a set of full-stack components designed to serve as a foundational starting point for developing applications.",
		icon: "Filament.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "filamentphp:pageGlobal:0",
				kind: "pageGlobal",
				property: "FilamentNotification",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "filamentphp:pageGlobal:1",
				kind: "pageGlobal",
				property: "filamentData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "filamentphp:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkfilament",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "filepond",
		name: "FilePond",
		website: "https://pqina.nl/filepond/",
		description: "FilePond is a JavaScript library for file uploads.",
		icon: "filepond.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "filepond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("filepond.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "filepond:pageGlobal:1",
				kind: "pageGlobal",
				property: "FilePond",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "filepond:pageGlobal:2",
				kind: "pageGlobal",
				property: "FilePond.create",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "filepond:pageGlobal:3",
				kind: "pageGlobal",
				property: "FilePond.setOptions",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fingerprintjs",
		name: "FingerprintJS",
		website: "https://fingerprintjs.com",
		description: "FingerprintJS is a browser fingerprinting library that queries browser attributes and computes a hashed visitor identifier from them.",
		icon: "FingerprintJS.svg",
		categories: [
			"developer-tooling",
			"privacy-compliance"
		],
		rules: [
			{
				id: "fingerprintjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fingerprint(?:/fp)?(\\d)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fingerprintjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("fingerprintjs(?:\\-pro|2)?(?:@|/)(\\d.*?)?/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fingerprintjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "Fingerprint",
				valuePattern: new RegExp("(\\d)?$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fingerprintjs:pageGlobal:3",
				kind: "pageGlobal",
				property: "Fingerprint2",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fingerprintjs:pageGlobal:4",
				kind: "pageGlobal",
				property: "Fingerprint2.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fingerprintjs:pageGlobal:5",
				kind: "pageGlobal",
				property: "FingerprintJS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "flagsmith",
		name: "FlagSmith",
		website: "https://flagsmith.com",
		description: "FlagSmith is an open-source, fully supported feature flag & remote configuration solution, which provides hosted API to help deployment to a private cloud or on-premises environment.",
		icon: "FlagSmith.svg",
		categories: [
			"developer-tooling",
			"api-pattern"
		],
		rules: [
			{
				id: "flagsmith:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.flagsmith\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flagsmith:pageGlobal:1",
				kind: "pageGlobal",
				property: "flagsmith",
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
		id: "flickity",
		name: "Flickity",
		website: "https://flickity.metafizzy.co",
		description: "Flickity is a JavaScript slider library, built by David DeSandro of Metafizzy fame.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "flickity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("flickity(?:/|@)([\\d\\.]+).+flickity(?:\\.pkgd)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flickity:dom:1",
				kind: "dom",
				selector: "style[data-context='foundation-flickity-css'], div.flickity-enabled",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "flickity:pageGlobal:2",
				kind: "pageGlobal",
				property: "Flickity",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "floating-ui",
		name: "Floating UI",
		website: "https://floating-ui.com/",
		description: "A JavaScript library to position floating elements and create interactions for them.",
		icon: "Floating UI.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "floating-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("floating-ui(?:\\/core)?(?:\\/dom)?(?:\\.js)?(?:@?(?:\\?v(?:er)?=)?((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "flyspray",
		name: "Flyspray",
		website: "https://flyspray.org",
		icon: "Flyspray.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "flyspray:html:0",
				kind: "html",
				pattern: new RegExp("(?:<a[^>]+>Powered by Flyspray|<map id=\"projectsearchform)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "flyspray:dom:1",
				kind: "dom",
				selector: "map#projectsearchform",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "flyspray:cookie:2",
				kind: "cookie",
				key: "flyspray_project",
				description: "Cookie name matches a known technology marker."
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
		id: "footable",
		name: "FooTable",
		website: "https://fooplugins.github.io/FooTable/index.html",
		description: "FooTable is a jQuery plugin that converts HTML tables into expandable responsive tables.",
		icon: "FooPlugins.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "footable:pageGlobal:0",
				kind: "pageGlobal",
				property: "$FOOTABLE.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "footable:pageGlobal:1",
				kind: "pageGlobal",
				property: "footable.plugins",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "forgejo",
		name: "Forgejo",
		website: "https://forgejo.org",
		description: "Forgejo is a community-driven fork of Gitea that provides a self-hosted Git service with enhancements in governance, transparency, and long-term sustainability.",
		icon: "Forgejo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "forgejo:dom:0",
				kind: "dom",
				selector: "link[href*='/theme-forgejo-auto.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "forgejo:pageGlobal:1",
				kind: "pageGlobal",
				property: "window.config.assetVersionEncoded",
				valuePattern: new RegExp("([\\d.]+).+gitea-[\\d.]+"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "forgejo:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Forgejo – Beyond coding\\. We forge\\."),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"go",
			"jquery",
			"pwa",
			"rss"
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "formstone",
		name: "Formstone",
		website: "https://formstone.it",
		description: "Formstone is a front-end library that simplifies web development by providing customizable jQuery plugins that abstract modern web patterns.",
		icon: "Formstone.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "formstone:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.formstone\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			],
			cpe: "cpe:2.3:a:formstone:formstone:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "formwise",
		name: "FormWise",
		website: "https://www.formwise.ai",
		description: "FormWise is a platform that enables the creation of white-label AI tools using ChatGPT prompts for customizable applications across industries.",
		icon: "FormWise.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "formwise:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.formwise\\.ai"),
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
		id: "framework7",
		name: "framework7",
		website: "https://framework7.io/",
		description: "Full Featured Mobile HTML Framework For Building iOS & Android Apps.",
		icon: "framework7.png",
		categories: [
			"developer-tooling",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "framework7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/(?:js\\/)?)?framework7(?:-((?:\\d+\\.)+\\d+))?(?:\\.custom)?(?:\\.min)?(?:-vue)?_?[\\w\\.]{0,29}\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "framework7:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:js\\/)?)?framework7(?:-)?(?:\\.custom)?(?:\\.min)?(?:-vue)?_?[\\w\\.]{0,29}\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "framework7:dom:2",
				kind: "dom",
				selector: "link[href*='framework7'], .framework7-root, .framework7-modals",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "fullpage-js",
		name: "fullPage.js",
		website: "https://github.com/alvarotrigo/fullpage.js",
		description: "fullPage.js a jQuery and vanilla JavaScript plugin for fullscreen scrolling websites.",
		icon: "fullPage.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "fullpage-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/fullPage\\.js(?:/([\\d\\.]+)/)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fullpage-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "fullpage_api.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "gamma",
		name: "Gamma",
		website: "https://gamma.app",
		description: "Gamma is an AI-powered platform for creating presentations, documents, and websites without requiring design or coding skills.",
		icon: "Gamma.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gamma:pageGlobal:0",
				kind: "pageGlobal",
				property: "gammaSiteAnimationsInitialized",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gamma:pageGlobal:1",
				kind: "pageGlobal",
				property: "gammaTiming",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gamma:cookie:2",
				kind: "cookie",
				key: "gamma_visitor_id",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "genexus",
		name: "GeneXus",
		website: "https://www.genexus.com/",
		icon: "GeneXus.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "genexus:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+?id=\"gxtheme_css_reference\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "genexus:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/static/gxgral\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "genexus:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/static/gxtimezone\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "genexus:dom:3",
				kind: "dom",
				selector: "link[id^='gxtheme_css_reference']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "genexus:pageGlobal:4",
				kind: "pageGlobal",
				property: "gx.gxVersion",
				valuePattern: new RegExp("^(.+)-.*$"),
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
		id: "gerrit",
		name: "Gerrit",
		website: "https://www.gerritcodereview.com",
		icon: "gerrit.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gerrit:html:0",
				kind: "html",
				pattern: new RegExp(">Gerrit Code Review</a>\\s*\"\\s*\\(([0-9.]+)\\)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "gerrit:html:1",
				kind: "html",
				pattern: new RegExp("<(?:div|style) id=\"gerrit_"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gerrit:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("^gerrit_ui/gerrit_ui"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gerrit:pageGlobal:3",
				kind: "pageGlobal",
				property: "Gerrit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gerrit:pageGlobal:4",
				kind: "pageGlobal",
				property: "gerrit_ui",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gerrit:meta:5",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Gerrit Code Review$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java",
			"git"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "get-satisfaction",
		name: "Get Satisfaction",
		website: "https://getsatisfaction.com/corp/",
		icon: "Get Satisfaction.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "get-satisfaction:pageGlobal:0",
				kind: "pageGlobal",
				property: "GSFN",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "getfeedback",
		name: "GetFeedback",
		website: "https://www.getfeedback.com",
		description: "GetFeedback (formerly Usabilla) is a user feedback solution for collecting qualitative and quantitative user feedback across digital channels including websites, apps and emails.",
		icon: "GetFeedback.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "getfeedback:pageGlobal:0",
				kind: "pageGlobal",
				property: "usabilla_live",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gijgo",
		name: "Gijgo",
		website: "https://gijgo.com",
		description: "Gijgo is a set of free for commercial use javascript controls.",
		icon: "Gijgo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gijgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/gijgo@([\\d\\.]+)/js/gijgo\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "git",
		name: "git",
		website: "https://git-scm.com",
		icon: "git.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "git:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("\\bgit/([\\d.]+\\d)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:git-scm:git:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gitea",
		name: "Gitea",
		website: "https://gitea.io",
		description: "Gitea is an open-source forge software package for hosting software development version control using Git as well as other collaborative features like bug tracking, wikis and code review. It supports self-hosting but also provides a free public first-party instance hosted on DiDi's cloud.",
		icon: "gitea.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitea:html:0",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© Gitea Version: ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "gitea:pageGlobal:1",
				kind: "pageGlobal",
				property: "window.config.assetVersionEncoded",
				valuePattern: new RegExp(".+-gitea-([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gitea:cookie:2",
				kind: "cookie",
				key: "i_like_gitea",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "gitea:meta:3",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("^go,git,self-hosted,gitea$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"go"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring"
			],
			cpe: "cpe:2.3:a:gitea:gitea:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gitiles",
		name: "Gitiles",
		website: "https://gerrit.googlesource.com/gitiles/",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitiles:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"https://gerrit\\.googlesource\\.com/gitiles/\">Gitiles<"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"java",
			"git"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gitlab",
		name: "GitLab",
		website: "https://about.gitlab.com",
		description: "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features, using an open-source license.",
		icon: "GitLab.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitlab:html:0",
				kind: "html",
				pattern: new RegExp("<meta content=\"https?://[^/]+/assets/gitlab_logo-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gitlab:html:1",
				kind: "html",
				pattern: new RegExp("<header class=\"navbar navbar-fixed-top navbar-gitlab with-horizontal-nav\">"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gitlab:pageGlobal:2",
				kind: "pageGlobal",
				property: "GitLab",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gitlab:pageGlobal:3",
				kind: "pageGlobal",
				property: "gl.dashboardOptions",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gitlab:cookie:4",
				kind: "cookie",
				key: "_gitlab_session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "gitlab:meta:5",
				kind: "meta",
				key: "og:site_name",
				valuePattern: new RegExp("^GitLab$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails",
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:gitlab:gitlab:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gitlab-ci-cd",
		name: "GitLab CI/CD",
		website: "https://about.gitlab.com/gitlab-ci",
		icon: "GitLab.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitlab-ci-cd:meta:0",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("GitLab CI/CD is a tool built into GitLab for software development through continuous methodologies."),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gitlist",
		name: "gitlist",
		website: "https://gitlist.org",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitlist:html:0",
				kind: "html",
				pattern: new RegExp("<p>Powered by <a[^>]+>GitList ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"php",
			"git"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:gitlist:gitlist:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gitweb",
		name: "gitweb",
		website: "https://git-scm.com",
		icon: "git.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gitweb:html:0",
				kind: "html",
				pattern: new RegExp("<!-- git web interface version ([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "gitweb:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("static/gitweb\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gitweb:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("gitweb(?:/([\\d.]+\\d))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"perl",
			"git"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "glide-js",
		name: "Glide.js",
		website: "https://glidejs.com",
		description: "Glide.js is a dependency-free JavaScript ES6 slider and carousel.",
		icon: "Glide.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "glide-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/@glidejs/glide(?:@([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "glide-js:dom:1",
				kind: "dom",
				selector: "div[data-glide-el]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "glide-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Glide",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "glider-js",
		name: "Glider.js",
		website: "https://nickpiscitelli.github.io/Glider.js",
		description: "Glider.js is a fast, lightweight, responsive, dependency-free scrollable list with customisable paging controls.",
		icon: "Glider.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "glider-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/|@)?([\\d\\.]{2,})?/glider\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "glitchtip",
		name: "GlitchTip",
		website: "https://glitchtip.com",
		description: "GlitchTip is an open-source platform for error tracking, monitoring errors, performance, and uptime.",
		icon: "GlitchTip.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "glitchtip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.glitchtip\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "go",
		name: "Go",
		website: "https://go.dev",
		description: "Go is an open source high-level programming language.",
		icon: "Go.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:golang:go:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "goat-slider",
		name: "Goat Slider",
		website: "https://goatslider.com",
		description: "Goat Slider is a webflow library that enables users to construct advanced sliders for their sites.",
		icon: "GoatSlider.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "goat-slider:pageGlobal:0",
				kind: "pageGlobal",
				property: "GoatSliderCarousel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "goat-slider:pageGlobal:1",
				kind: "pageGlobal",
				property: "GoatSliderSlider",
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
		id: "gogs",
		name: "Gogs",
		website: "https://gogs.io",
		description: "Gogs is a self-hosted Git service written in Go.",
		icon: "gogs.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gogs:html:0",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© \\d{4} Gogs Version: ([\\d.]+) Page:"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "gogs:html:1",
				kind: "html",
				pattern: new RegExp("<button class=\"ui basic clone button\" id=\"repo-clone-ssh\" data-link=\"gogs@"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gogs:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("js/gogs\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gogs:cookie:3",
				kind: "cookie",
				key: "i_like_gogits",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "gogs:meta:4",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("go, git, self-hosted, gogs"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"go",
			"macaron"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:gogs:gogs:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "goober",
		name: "Goober",
		website: "https://goober.js.org",
		description: "Goober is a minified CSS-in-JS styling solution.",
		icon: "Goober.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "goober:dom:0",
				kind: "dom",
				selector: "style#_goober",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "goober:pageGlobal:1",
				kind: "pageGlobal",
				property: "goober",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "goober:pageGlobal:2",
				kind: "pageGlobal",
				property: "gooberGlobal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "goober:pageGlobal:3",
				kind: "pageGlobal",
				property: "gooberPrefixer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "google-cloud-trace",
		name: "Google Cloud Trace",
		website: "https://cloud.google.com/trace",
		description: "Google Cloud Trace is a distributed tracing system that collects latency data from applications and displays it in the Google Cloud Console.",
		icon: "google-cloud-trace.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "google-cloud-trace:responseHeader:0",
				kind: "responseHeader",
				key: "x-cloud-trace-context",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"google-cloud"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "grain-harvest",
		name: "Grain Harvest",
		website: "https://graindata.com",
		description: "Grain Harvest is an online platform that provides data science tools and resources for professionals and learners in the field.",
		icon: "GrainData.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "grain-harvest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.harvest\\.graindata\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "granim-js",
		name: "Granim.js",
		website: "https://sarcadass.github.io/granim.js",
		description: "Granim.js is a lightweight javascript library to create fluid and interactive gradients animations.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "granim-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "Granim",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "graphql",
		name: "GraphQL",
		website: "https://graphql.org",
		description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
		icon: "GraphQL.svg",
		categories: [
			"developer-tooling",
			"api-pattern"
		],
		rules: [
			{
				id: "graphql:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("graphql\\.[\\w]+\\.(?:com|net)/"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "graphql:meta:1",
				kind: "meta",
				key: "store-config",
				valuePattern: new RegExp("graphqlMethod"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:graphql:graphql:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gumlet",
		name: "Gumlet",
		website: "https://www.gumlet.com/",
		description: "Gumlet is a solution to optimize images.",
		icon: "Gumlet.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "gumlet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gumlet\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gumlet:pageGlobal:1",
				kind: "pageGlobal",
				property: "gumlet",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hammer-js",
		name: "Hammer.js",
		website: "https://hammerjs.github.io",
		description: "Hammer.js is a JavaScript library for adding touch gestures like swipe, pinch, and rotate to web applications.",
		icon: "Hammer.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "hammer-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hammer(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hammer-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ha.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hammer-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Hammer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hammer-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "Hammer.VERSION",
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
		id: "haskell",
		name: "Haskell",
		website: "https://wiki.haskell.org/Haskell",
		icon: "Haskell.png",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "headjs",
		name: "HeadJS",
		website: "https://headjs.github.io",
		description: "HeadJS is a JavaScript library that optimizes web performance by managing the loading and execution of scripts and stylesheets to ensure faster page loads and efficient resource handling.",
		icon: "HeadJS.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "headjs:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]*data-headjs-load"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "headjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("head\\.(?:core|load)(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "headjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "head.browser.name",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "help-scout",
		name: "Help Scout",
		website: "https://www.helpscout.com",
		description: "Help Scout is a customer service platform including email, a knowledge base tool and live chat.",
		icon: "Help Scout.svg",
		categories: [
			"developer-tooling",
			"email-messaging"
		],
		rules: [
			{
				id: "help-scout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helpscout\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "help-scout:pageGlobal:1",
				kind: "pageGlobal",
				property: "__onBeaconDestroy",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "help-scout:pageGlobal:2",
				kind: "pageGlobal",
				property: "beaconStore",
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
		id: "hetrixtools",
		name: "HetrixTools",
		website: "https://hetrixtools.com",
		description: "HetrixTools is an uptime and blacklist monitoring platform.",
		icon: "HetrixTools.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "hetrixtools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hetrixtools\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hetrixtools:pageGlobal:1",
				kind: "pageGlobal",
				property: "htoolz",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hetrixtools:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.hetrixtools\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "highlight-js",
		name: "Highlight.js",
		website: "https://highlightjs.org/",
		description: "Highlight.js is a JavaScript library for syntax highlighting, supporting 192 languages and 496 themes.",
		icon: "Highlight.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "highlight-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:([\\d.])+/)?highlight(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "highlight-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "hljs.highlightBlock",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "highlight-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "hljs.listLanguages",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "honeybadger",
		name: "Honeybadger",
		website: "https://www.honeybadger.io",
		description: "Honeybadger provides exception and uptime monitoring to keep your web apps error-free.",
		icon: "honey-badger.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "honeybadger:pageGlobal:0",
				kind: "pageGlobal",
				property: "Honeybadger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "honeybadger:pageGlobal:1",
				kind: "pageGlobal",
				property: "initHoneyBadger",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "html2canvas",
		name: "html2canvas",
		website: "https://html2canvas.hertzen.com/",
		description: "Screenshots with JavaScript.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "html2canvas:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("html2canvas(?:\\.min)?(?:[_\\w]{0,8})?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "html2canvas:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?html2canvas(?:\\.min)?(?:[_\\w]{0,8})?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "html5-media",
		name: "HTML5 Media",
		website: "https://html5media.info/",
		description: "HTML5 Media enables video and audio tags in all major browsers.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "html5-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?html5media(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hund-io",
		name: "Hund.io",
		website: "https://hund.io",
		description: "Hund.io is an automated status pages with monitoring.",
		icon: "Hund.io.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "hund-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hund\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hund-io:dom:1",
				kind: "dom",
				selector: "link[href*='hund-client-logos']",
				description: "DOM selector matches a known technology marker."
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
		id: "hyperspeed",
		name: "Hyperspeed",
		website: "https://www.hyperspeed.me",
		description: "Hyperspeed is the most advanced speed booster for Shopify.",
		icon: "Hyperspeed.svg",
		categories: [
			"developer-tooling",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "hyperspeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com/.+/assets/hs-(?:instantload|lazysizes)\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hyperspeed:pageGlobal:1",
				kind: "pageGlobal",
				property: "hyperscripts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"shopify",
			"instant-page"
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
		id: "icheck",
		name: "iCheck",
		website: "https://github.com/drgullin/icheck",
		description: "iCheck is a library for customizable checkboxes and radio buttons.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "icheck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:js|iCheck)/icheck\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "imagesloaded",
		name: "imagesLoaded",
		website: "https://imagesloaded.desandro.com/",
		description: "jQuery plugin for seeing if the images are loaded.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "imagesloaded:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("imagesloaded(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "imba",
		name: "Imba",
		website: "https://imba.io",
		description: "Imba is a Web programming language that compiles to performant JavaScript, providing language-level support for defining, extending, subclassing, and instantiating.",
		icon: "Imba.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "imba:pageGlobal:0",
				kind: "pageGlobal",
				property: "Imba",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "imba:pageGlobal:1",
				kind: "pageGlobal",
				property: "Imba.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "imba:pageGlobal:2",
				kind: "pageGlobal",
				property: "imba",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "immutable-js",
		name: "Immutable.js",
		website: "https://facebook.github.io/immutable-js/",
		description: "Immutable.js is a JavaScript library developed by Facebook that provides immutable data structures for more predictable state management in applications.",
		icon: "Immutable.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "immutable-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^immutable\\.(?:min\\.)?js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "immutable-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Immutable",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "immutable-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Immutable.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "incident-io",
		name: "Incident.io",
		website: "https://incident.io",
		description: "Incident.io is a Slack-integrated incident management tool used to announce, manage, and resolve all incidents in a single channel.",
		icon: "Incident.io.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "incident-io:responseHeader:0",
				kind: "responseHeader",
				key: "x-webkit-csp",
				valuePattern: new RegExp("incident-io-team\\.vercel\\.app"),
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
		id: "infinite-scroll",
		name: "Infinite Scroll",
		website: "https://infinite-scroll.com/",
		description: "jQuery plugin for infinite scrolling.",
		icon: "Infinite Scroll.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "infinite-scroll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("infinite-?scroll(?:\\.pkgd)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "infinite-scroll:pageGlobal:1",
				kind: "pageGlobal",
				property: "infinitescroll",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "infinity",
		name: "Infinity",
		website: "https://startinfinity.com",
		description: "Infinity is an all-in-one workspace that allows project organization, task tracking, and team collaboration in a centralized platform.",
		icon: "Infinity.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "infinity:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.startinfinity\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "infinity:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.startinfinity.com/']",
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
		id: "instafeed-js",
		name: "Instafeed.js",
		website: "https://instafeedjs.com/",
		description: "A way to add Instagram photos to your website.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "instafeed-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instafeed(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "instant-page",
		name: "Instant.Page",
		website: "https://instant.page/",
		description: "Instant.Page is a JavaScript library which uses just-in-time preloading technique to make websites faster.",
		icon: "Instant.page.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "instant-page:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instant\\.page"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "instantclick",
		name: "InstantClick",
		website: "https://instantclick.io/",
		description: "InstantClick is a JavaScript library that speeds up your website, making navigation faster.",
		icon: "InstantClick.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "instantclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instantclick\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instantclick:pageGlobal:1",
				kind: "pageGlobal",
				property: "InstantClick",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "instantgeo",
		name: "InstantGeo",
		website: "https://instantgeo.info",
		description: "InstantGeo is a service that provides IP geolocation to web pages",
		icon: "InstantGeo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "instantgeo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.instantgeo\\.info"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instantgeo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.instantgeo\\.info"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instantgeo:pageGlobal:2",
				kind: "pageGlobal",
				property: "geojs",
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
		id: "instatus",
		name: "Instatus",
		website: "https://instatus.com",
		description: "Instatus is a status and incident communication tool.",
		icon: "Instatus.svg",
		categories: [
			"developer-tooling"
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
		id: "intervo",
		name: "Intervo",
		website: "https://intervo.ai",
		description: "Intervo is a platform for building and managing enterprise-grade voice agents at scale, enabling reliable voice automation, system integration, and deployment across large organizations.",
		icon: "Intervo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "intervo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.intervo\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "intervo:pageGlobal:1",
				kind: "pageGlobal",
				property: "IntervoWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "isotope",
		name: "Isotope",
		website: "https://isotope.metafizzy.co",
		description: "Isotope.js is a JavaScript library that makes it easy to sort, filter, and add Masonry layouts to items on a webpage.",
		icon: "Isotope.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "isotope:pageGlobal:0",
				kind: "pageGlobal",
				property: "Isotope",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "isotope:pageGlobal:1",
				kind: "pageGlobal",
				property: "init_isotope",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"low",
				"freemium",
				"onetime"
			]
		}
	},
	{
		id: "java",
		name: "Java",
		website: "https://java.com",
		description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
		icon: "Java.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "java:cookie:0",
				kind: "cookie",
				key: "JSESSIONID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:oracle:jre:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jenkins",
		name: "Jenkins",
		website: "https://jenkins.io/",
		description: "Jenkins is an open-source automation tool written in Java with plugins built for Continuous Integration (CI) purposes.",
		icon: "Jenkins.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jenkins:html:0",
				kind: "html",
				pattern: new RegExp("<span class=\"jenkins_ver\"><a href=\"https://jenkins\\.io/\">Jenkins ver\\. ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "jenkins:dom:1",
				kind: "dom",
				selector: "span.jenkins_ver > a[href='https://jenkins.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "jenkins:pageGlobal:2",
				kind: "pageGlobal",
				property: "jenkinsCIGlobal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jenkins:pageGlobal:3",
				kind: "pageGlobal",
				property: "jenkinsRules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jenkins:responseHeader:4",
				kind: "responseHeader",
				key: "X-Jenkins",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jenkins:jenkins:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jquery-blockui",
		name: "jQuery BlockUI",
		website: "https://jquery.malsup.com/block",
		description: "jQuery BlockUI is a plugin that simulates synchronous behavior in AJAX by temporarily blocking user interaction and adding DOM elements that visually indicate restricted activity until the block is removed.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-blockui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.blockUI\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jquery-devbridge-autocomplete",
		name: "jQuery DevBridge Autocomplete",
		website: "https://www.devbridge.com/sourcery/components/jquery-autocomplete/",
		description: "Ajax Autocomplete for jQuery allows you to easily create autocomplete/autosuggest boxes for text input fields.",
		icon: "jQuery.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-devbridge-autocomplete:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/devbridgeAutocomplete(?:-min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-devbridge-autocomplete:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.devbridge-autocomplete/([0-9.]+)/jquery\\.autocomplete(?:.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-devbridge-autocomplete:pageGlobal:2",
				kind: "pageGlobal",
				property: "$.devbridgeAutocomplete",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery-devbridge-autocomplete:pageGlobal:3",
				kind: "pageGlobal",
				property: "jQuery.devbridgeAutocomplete",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jquery-migrate",
		name: "jQuery Migrate",
		website: "https://github.com/jquery/jquery-migrate",
		description: "Query Migrate is a javascript library that allows you to preserve the compatibility of your jQuery code developed for versions of jQuery older than 1.9.",
		icon: "jQuery.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-migrate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery-migrate(?:\\.min)?(?:-)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-migrate:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("jquery-migrate(?:\\.min)?(?:-?((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-migrate:pageGlobal:2",
				kind: "pageGlobal",
				property: "jQuery.migrateVersion",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery-migrate:pageGlobal:3",
				kind: "pageGlobal",
				property: "jQuery.migrateWarnings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery-migrate:pageGlobal:4",
				kind: "pageGlobal",
				property: "jqueryMigrate",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jquery-modal",
		name: "jQuery Modal",
		website: "https://jquerymodal.com",
		description: "jQuery Modal is an overlay dialog box or in other words, a popup window that is made to display on the top or 'overlayed' on the current page.",
		icon: "jQuery Modal.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-modal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery-modal/([\\d\\.]+)/jquery\\.modal\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-modal:dom:1",
				kind: "dom",
				selector: "link[href*='jquery.modal.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "jquery-popup-overlay",
		name: "jQuery Popup Overlay",
		website: "https://www.npmjs.com/package/jquery-popup-overlay",
		description: "jQuery Popup Overlay is a responsive overlay which lets you create modal windows, tooltips, and more.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-popup-overlay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(\\d+\\.\\d+\\.\\d+)/jquery\\.popupoverlay\\.js"),
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
		id: "jquery-ui",
		name: "jQuery UI",
		website: "https://jqueryui.com",
		description: "jQuery UI is a collection of GUI widgets, animated visual effects, and themes implemented with jQuery, Cascading Style Sheets, and HTML.",
		icon: "jQuery UI.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery-ui[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-ui:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)/jquery-ui(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-ui:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("jquery-ui.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-ui:pageGlobal:3",
				kind: "pageGlobal",
				property: "jQuery.ui.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jquery:jquery_ui:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jsobservable",
		name: "JsObservable",
		website: "https://www.jsviews.com/#jsobservable",
		description: "JsObservable is integrated with JsViews and facilitates observable data manipulations that are immediately reflected in the data-bound templates. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsObservable.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "jspdf",
		name: "jsPDF",
		website: "https://parall.ax/products/jspdf",
		description: "jsPDF is a HTML5 client-side solution for generating PDF documents directly within web browsers.",
		icon: "jsPDF.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jspdf:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jspdf\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jspdf:pageGlobal:1",
				kind: "pageGlobal",
				property: "jsPDF.API",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "jsrender",
		name: "JsRender",
		website: "https://www.jsviews.com/#jsrender",
		description: "JsRender is the template library. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsRender.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jsrender:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)?/jsrender(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jsviews"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "jsviews",
		name: "JsViews",
		website: "https://www.jsviews.com/#jsviews",
		description: "JsViews is the MVVM library which provides two-way data binding for the template. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsViews.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jsviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)?/jsviews(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jsobservable",
			"jsrender"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "jszip",
		name: "JSZip",
		website: "https://stuk.github.io/jszip/",
		description: "JSZip is a JavaScript library that enables the creation, reading, and manipulation of zip files in a browser environment.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jszip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jszip\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jszip:pageGlobal:1",
				kind: "pageGlobal",
				property: "JSZip.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:jszip_project:jszip:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "jumbo",
		name: "Jumbo",
		website: "https://www.tryjumbo.com/",
		description: "Jumbo is a page speed optimizer app for Shopify based sites.",
		icon: "Jumbo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "jumbo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mt\\.tryjumbo\\.com"),
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
		id: "karma",
		name: "Karma",
		website: "https://karma-runner.github.io",
		description: "Karma is a test runner for JavaScript that runs on Node.js.",
		icon: "Karma.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "karma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("karma\\.mdpcdn\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "karma:pageGlobal:1",
				kind: "pageGlobal",
				property: "karma.vars.version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "keen-slider",
		name: "Keen-Slider",
		website: "https://keen-slider.io",
		description: "Keen-Slider is a free library agnostic touch slider with native touch/swipe behavior.",
		icon: "keen-slider.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "keen-slider:dom:0",
				kind: "dom",
				selector: "div.keen-slider, div.keen-slider__slide",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "keen-slider:pageGlobal:1",
				kind: "pageGlobal",
				property: "KeenSlider",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "kerningjs",
		name: "KerningJS",
		website: "https://webupon.com/blog/what-is-kerning",
		description: "Kerning.js is a JavaScript library that applies real CSS rules to style, transform, and scale web typography.",
		icon: "Kerning.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "kerningjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.FLAutoKerning\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kerningjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "FLAutoKerning",
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
		id: "kotlin",
		name: "Kotlin",
		website: "https://kotlinlang.org",
		description: "Kotlin is a general purpose, free, open-source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android that combines object-oriented and functional programming features.",
		icon: "Kotlin.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:jetbrains:kotlin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "kphp",
		name: "KPHP",
		website: "https://vkcom.github.io/kphp",
		description: "KPHP (kPHP or KittenPHP) is a free PHP-to- C++ source-to-source translator, developed by VKontakte.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "kphp:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^KPHP/([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "kubernetes-dashboard",
		name: "Kubernetes Dashboard",
		website: "https://kubernetes.io/",
		icon: "Kubernetes.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "kubernetes-dashboard:dom:0",
				kind: "dom",
				selector: "[ng-app='kubernetesDashboard']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:kubernetes:kubernetes:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "laravel-echo",
		name: "Laravel Echo",
		website: "https://laravel.com/docs/broadcasting#client-side-installation",
		description: "Laravel Echo is a JavaScript library that makes it painless to subscribe to channels and listen for events broadcast by Laravel.",
		icon: "Laravel Echo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "laravel-echo:pageGlobal:0",
				kind: "pageGlobal",
				property: "Echo.connector",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "laravel-echo:pageGlobal:1",
				kind: "pageGlobal",
				property: "echo.connector",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"laravel"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "launchdarkly",
		name: "LaunchDarkly",
		website: "https://launchdarkly.com",
		description: "LaunchDarkly is a continuous delivery and feature flags as a service platform that integrates into a company's current development cycle.",
		icon: "LaunchDarkly.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "launchdarkly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\.|\\-)launchdarkly(?:\\.com/|\\-sdk\\.)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "launchdarkly:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("app\\.launchdarkly\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "launchdarkly:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("events\\.launchdarkly\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "launchdarkly:dom:3",
				kind: "dom",
				selector: "link[href*='.launchdarkly.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "launchdarkly:pageGlobal:4",
				kind: "pageGlobal",
				property: "DDC.WS.state",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "launchdarkly:pageGlobal:5",
				kind: "pageGlobal",
				property: "launchDarkly",
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
		id: "launchnotes",
		name: "LaunchNotes",
		website: "https://launchnotes.com",
		description: "LaunchNotes is a platform that aligns teams with product development and release pipelines while keeping users informed and engaged with product updates.",
		icon: "LaunchNotes.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "launchnotes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.launchnotes\\.com/"),
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
		id: "lazysizes",
		name: "LazySizes",
		website: "https://github.com/aFarkas/lazysizes",
		description: "LazySizes is a JavaScript library used to delay the loading of images (iframes, scripts, etc) until they come into view.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lazysizes:pageGlobal:0",
				kind: "pageGlobal",
				property: "lazySizes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lazysizes:pageGlobal:1",
				kind: "pageGlobal",
				property: "lazySizesConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lazysizes-unveilhooks-plugin",
		name: "LazySizes unveilhooks plugin",
		website: "https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks",
		description: "LazySizes unveilhooks plugin extends lazySizes to lazyload scripts/widgets, background images, styles and video/audio elements.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lazysizes-unveilhooks-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ls\\.unveilhooks(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lenis",
		name: "Lenis",
		website: "http://lenis.darkroom.engineering",
		description: "Lenis is a smooth scroll library to normalise the scrolling experience across devices.",
		icon: "Lenis.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lenis:pageGlobal:0",
				kind: "pageGlobal",
				property: "Lenis",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lenis:pageGlobal:1",
				kind: "pageGlobal",
				property: "lenisVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "libphonenumber",
		name: "libphonenumber",
		website: "https://github.com/google/libphonenumber",
		description: "libphonenumber is a JavaScript library for parsing, formatting, and validating international phone numbers.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "libphonenumber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d\\.]+))?/libphonenumber(?:-js\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "libphonenumber:pageGlobal:1",
				kind: "pageGlobal",
				property: "libphonenumber.AsYouType",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "libphonenumber:pageGlobal:2",
				kind: "pageGlobal",
				property: "libphonenumber.DIGITS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lightbox",
		name: "Lightbox",
		website: "https://lokeshdhakar.com/projects/lightbox2/",
		description: "Lightbox is small javascript library used to overlay images on top of the current page.",
		icon: "Lightbox.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lightbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lightbox(?:-plus-jquery)?.{0,32}\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lightbox:pageGlobal:2",
				kind: "pageGlobal",
				property: "Lightbox.activeImage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lightbox:pageGlobal:3",
				kind: "pageGlobal",
				property: "lightbox.$lightbox",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:lightbox_photo_gallery_project:lightbox_photo_gallery:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "list-js",
		name: "List.js",
		website: "https://listjs.com",
		description: "List.js is a small, fast JavaScript library that adds search, sort, and filter functionalities to plain HTML lists, tables, or other elements without requiring any dependencies.",
		icon: "List.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "list-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("list\\.js/"),
				confidence: 50,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "list-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("@([\\d.]+)/(?:/dist)?list\\.(?:min\\.)?js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "list-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "List",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lite-youtube-embed",
		name: "lite-youtube-embed",
		website: "https://github.com/paulirish/lite-youtube-embed",
		description: "The lite-youtube-embed technique renders the YouTube video inside the IFRAME tag only when the play button in clicked thus improving the core web vitals score of your website.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lite-youtube-embed:dom:0",
				kind: "dom",
				selector: "lite-youtube",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"youtube"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "loadify",
		name: "Loadify",
		website: "https://apps.shopify.com/loadify",
		description: "Loadify is a shopify app which helps merchants deploy performance techniques like loading screen, transitions & lazy Load.",
		icon: "Loadify.svg",
		categories: [
			"developer-tooling",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "loadify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.loadifyapp\\.ninety9\\.dev"),
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
		id: "locomotive-scroll",
		name: "Locomotive Scroll",
		website: "https://github.com/locomotivemtl/locomotive-scroll",
		description: "Locomotive Scroll is an opinionated JavaScript library that provides smooth scrolling animations and advanced scroll interactions for web applications.",
		icon: "Locomotive Scroll.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "locomotive-scroll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("locomotive-scroll(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "locomotive-scroll:dom:1",
				kind: "dom",
				selector: "div[data-scroll-section]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "locomotive-scroll:pageGlobal:2",
				kind: "pageGlobal",
				property: "LocomotiveScroll",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "locomotive-scroll:pageGlobal:3",
				kind: "pageGlobal",
				property: "locomotiveScrollVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"lenis"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lodash",
		name: "Lodash",
		website: "https://www.lodash.com",
		description: "Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
		icon: "Lodash.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lodash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lodash.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lodash:pageGlobal:1",
				kind: "pageGlobal",
				property: "_.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lodash:pageGlobal:2",
				kind: "pageGlobal",
				property: "_.differenceBy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lodash:pageGlobal:3",
				kind: "pageGlobal",
				property: "_.templateSettings.imports._.templateSettings.imports._.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		excludes: [
			"underscore-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:lodash:lodash:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "loop-web",
		name: "Loop Web",
		website: "https://www.loopweb.net",
		description: "Loop Web is a provider in web, internet, network, and design services. Their offerings encompass website design, SMS, VoIP&IVR, Type, hosting, VPS, and more.",
		icon: "Loop Web.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "loop-web:dom:0",
				kind: "dom",
				selector: "link[href*='.loopweb.net']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "loop-web:meta:1",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("LoopWeb"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "loop-web:meta:2",
				kind: "meta",
				key: "loopweb",
				description: "Meta tag matches a known technology marker."
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
		id: "loopedin",
		name: "LoopedIn",
		website: "https://www.loopedin.io",
		description: "LoopedIn is an all-in-one tool for collecting feedback, building roadmaps, sharing changelogs, and publishing knowledge bases.",
		icon: "LoopedIn.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "loopedin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.productstash\\.io/"),
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
		id: "lozad-js",
		name: "Lozad.js",
		website: "https://apoorv.pro/lozad.js/",
		description: "Lozad.js is a lightweight lazy-loading library that's just 535 bytes minified & gzipped.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lozad-js:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("/lozad\\.min\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "lozad-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "lozad",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lua",
		name: "Lua",
		website: "https://www.lua.org",
		description: "Lua is a multi-paradigm programming language designed primarily for embedded use in applications.",
		icon: "Lua.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lua:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("\\bLua(?: ([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:lua:lua:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "lunr-js",
		name: "Lunr.js",
		website: "https://lunrjs.com/",
		description: "A very simple search index.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "lunr-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?lunr(?:-store)?(?:-en)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lunr-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "lunr",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "magnific-popup",
		name: "Magnific Popup",
		website: "https://dimsemenov.com/plugins/magnific-popup/",
		description: "Magnific Popup is a responsive lightbox & dialog script with focus on performance and providing best experience for user with any device.",
		icon: "Magnific Popup.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "magnific-popup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("magnific-popup(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mailcheck",
		name: "Mailcheck",
		website: "https://github.com/mailcheck/mailcheck",
		description: "Mailcheck is a JavaScript library designed to address the issue of misspelled email addresses during user input.",
		icon: "Mailcheck.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mailcheck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mailcheck(?:\\.min)?\\.js(?:\\?v(?:er)?=(\\d+\\.\\d+\\.\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mantisbt",
		name: "MantisBT",
		website: "https://www.mantisbt.org",
		description: "MantisBT is an open-source, web-based issue tracking system written in PHP with a MySQL database backend, designed to facilitate bug tracking and project management for software development teams.",
		icon: "MantisBT.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mantisbt:dom:0",
				kind: "dom",
				selector: "link[rel='stylesheet'][href*='/css/ace-mantis.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"mysql"
		],
		requires: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:mantisbt:mantisbt:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "marked",
		name: "Marked",
		website: "https://marked.js.org",
		icon: "Marked.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "marked:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/marked(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marked:pageGlobal:1",
				kind: "pageGlobal",
				property: "marked",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:marked_project:marked:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "marker",
		name: "Marker",
		website: "https://marker.io",
		description: "Marker.io is an issue tracker solution for Project Managers, QA Testers and Agency Clients to report feedback & bugs to developers.",
		icon: "Marker.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "marker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("edge\\.marker\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marker:pageGlobal:1",
				kind: "pageGlobal",
				property: "markerConfig",
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
		id: "marsx",
		name: "MarsX",
		website: "https://www.marsx.dev",
		description: "MarsX is an AI-powered coding platform designed to develop Software as a Service (SaaS) tools.",
		icon: "MarsX.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "marsx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytic-api\\.marsx\\.dev/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "math-js",
		name: "math.js",
		website: "https://mathjs.org",
		description: "Math.js a JavaScript library that provides a comprehensive set of mathematical functions and capabilities for performing complex calculations and operations in web applications.",
		icon: "math.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "math-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("math(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "math-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "mathjs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "matter-js",
		name: "Matter.js",
		website: "https://brm.io/matter-js",
		description: "Matter.js is a JavaScript 2D rigid body physics engine for the web.",
		icon: "MatterJs.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "matter-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("matter(?:-wrap)?(?:\\/demo\\/js\\/lib(?:\\/matter-tools\\/jquery)?(?:\\/decomp)?)?(?:\\/?-?((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "matter-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Matter.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "mavo",
		name: "Mavo",
		website: "https://mavo.io",
		description: "Mavo is a JavaScript library that enables web developers to turn regular HTML into reactive web applications without the need for writing custom JavaScript.",
		icon: "Mavo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mavo:pageGlobal:0",
				kind: "pageGlobal",
				property: "Mavo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mavo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mavo.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mendix",
		name: "Mendix",
		website: "https://www.mendix.com",
		description: "Mendix is a low-code platform utilized by businesses for development of mobile and web applications at scale.",
		icon: "Mendix.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mendix:dom:0",
				kind: "dom",
				selector: "script[type='mendix/widget']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mendix:pageGlobal:1",
				kind: "pageGlobal",
				property: "CKEditorForMendix",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mendix:pageGlobal:2",
				kind: "pageGlobal",
				property: "mendix",
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
		id: "metismenu",
		name: "metisMenu",
		website: "https://github.com/onokumus/metismenu",
		description: "metisMenu is a collapsible jQuery menu plugin.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "metismenu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/|\\.)metisMenu(?:js)?(?:\\.min)?\\.js(?:\\?([\\d\\.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "metismenu:pageGlobal:1",
				kind: "pageGlobal",
				property: "MetisMenu",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "metismenu:pageGlobal:2",
				kind: "pageGlobal",
				property: "metisMenu",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "michijs",
		name: "MichiJS",
		website: "https://dev.michijs.com",
		description: "MichiJS is a library enabling the creation of web components using TSX.",
		icon: "MichiJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "michijs:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.michijs\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "michijs:dom:1",
				kind: "dom",
				selector: "michi-fragment > michi-fragment",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "microsoft-visual-studio",
		name: "Microsoft Visual Studio",
		website: "https://visualstudio.microsoft.com",
		description: "Microsoft Visual Studio is an integrated development environment from Microsoft.",
		icon: "Microsoft Visual Studio.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "microsoft-visual-studio:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Microsoft\\sVisual\\sStudio"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "milonic",
		name: "Milonic",
		website: "https://milonic.com",
		description: "Milonic is a platform for developing Dynamic Hypertext Markup Language (DHTML) JavaScript and building dynamic, DHTML-based websites.",
		icon: "Milonic.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "milonic:pageGlobal:0",
				kind: "pageGlobal",
				property: "milonic.C",
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
		id: "mindstudio",
		name: "MindStudio",
		website: "https://www.mindstudio.ai",
		description: "MindStudio is a platform for creating AI solutions that are simple and hassle-free.",
		icon: "MindStudio.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mindstudio:pageGlobal:0",
				kind: "pageGlobal",
				property: "MindStudioSettings",
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
				"payg",
				"poa"
			]
		}
	},
	{
		id: "mixitup",
		name: "Mixitup",
		website: "https://www.kunkalabs.com/mixitup/",
		description: "A CSS3 and jQuery Filter & Sort Plugin.",
		icon: "kunkalabs.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mixitup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mixitup(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mobile-detect-js",
		name: "mobile-detect.js",
		website: "https://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html",
		description: "Mobile-detect.js is a compact JavaScript library designed to detect devices by comparing patterns against a given User-Agent string.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mobile-detect-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mobile-detect(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mochikit",
		name: "MochiKit",
		website: "https://mochi.github.io/mochikit/",
		icon: "MochiKit.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mochikit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("MochiKit(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mochikit:pageGlobal:1",
				kind: "pageGlobal",
				property: "MochiKit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mochikit:pageGlobal:2",
				kind: "pageGlobal",
				property: "MochiKit.MochiKit.VERSION",
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
		id: "modernizr",
		name: "Modernizr",
		website: "https://modernizr.com",
		description: "Modernizr is a JavaScript library that detects the features available in a user's browser.",
		icon: "Modernizr.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "modernizr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("modernizr(?:\\.([\\d.]+))?.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "modernizr:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)?/modernizr.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "modernizr:pageGlobal:2",
				kind: "pageGlobal",
				property: "Modernizr._version",
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
		id: "mojo-helpdesk",
		name: "Mojo Helpdesk",
		website: "https://mojohelpdesk.com",
		description: "Mojo Helpdesk is a ticketing system used to centralize requests, assign tasks, automate workflows, and track progress for improved organization.",
		icon: "MojoHelpdesk.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mojo-helpdesk:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("asset\\.mojohelpdesk\\.com"),
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
		id: "mopinion",
		name: "Mopinion",
		website: "https://mopinion.com",
		description: "Mopinion is an all-in-one user feedback platform that helps digital enterprises listen, understand, and act across all digital touchpoints.",
		icon: "Mopinion.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mopinion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("deploy\\.mopinion\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mopinion:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pastease",
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
		id: "morris-js",
		name: "Morris.js",
		website: "https://morrisjs.github.io/morris.js/",
		description: "A JavaScript library that simplifies the process of creating interactive and responsive data visualizations on the web.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "morris-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("morris(?:\\/(?:area|bar|donut|grid|hover|line))?(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery",
			"raphael"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mscode-pl",
		name: "MsCode.pl",
		website: "https://mscode.pl",
		description: "MsCode.pl is a platform focused on developing innovative solutions in programming, hosting, and marketing.",
		icon: "MsCode.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "mscode-pl:responseHeader:0",
				kind: "responseHeader",
				key: "X-Hosting-Provider",
				valuePattern: new RegExp("MsCode\\.pl"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "mscode-pl:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("MsCode\\.pl"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "muscula",
		name: "Muscula",
		website: "https://www.muscula.com/",
		description: "Muscula is an error logging solution that collects and analyzes errors for websites or applications, providing actionable insights.",
		icon: "Muscula.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "muscula:pageGlobal:0",
				kind: "pageGlobal",
				property: "Muscula.settings",
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
		id: "muuri",
		name: "Muuri",
		website: "https://muuri.dev",
		description: "Muuri is a JavaScript layout engine that allows you to build all kinds of layouts and make them responsive, sortable, filterable, draggable and/or animated.",
		icon: "Muuri.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "muuri:pageGlobal:0",
				kind: "pageGlobal",
				property: "Muuri",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "naver-rua",
		name: "Naver RUA",
		website: "https://analytics.naver.com",
		description: "Naver RUA (Real User Analytics) collects performance data from real users to analyze the speed of your website by country, operating system, and browser.",
		icon: "Naver.svg",
		categories: [
			"developer-tooling",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "naver-rua:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rua-api\\.ncloud\\.com/"),
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
		id: "node-js",
		name: "Node.js",
		website: "https://nodejs.org",
		description: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
		icon: "Node.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "node-js:dom:0",
				kind: "dom",
				selector: "div.appVersion i.icon-nodejs",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:nodejs:node.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "nodeping",
		name: "NodePing",
		website: "https://nodeping.com",
		description: "NodePing is a tool in the Website Monitoring category of a tech stack. NodePing is an open source tool with GitHub stars and GitHub forks.",
		icon: "NodePing.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "nodeping:dom:0",
				kind: "dom",
				selector: "footer#poweredbynodeping",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "noibu",
		name: "Noibu",
		website: "https://noibu.com",
		description: "Noibu helps ecommerce websites detect revenue-impacting errors on their websites and provides them with the information needed to resolve them.",
		icon: "noibu.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "noibu:pageGlobal:0",
				kind: "pageGlobal",
				property: "NOIBUJS_CONFIG",
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
		id: "nolt",
		name: "Nolt",
		website: "https://nolt.io",
		description: "Nolt is a collaborative platform for managing user requests, designed to replace outdated spreadsheets and Trello boards while providing actionable customer insights.",
		icon: "Nolt.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "nolt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.nolt\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nolt:pageGlobal:1",
				kind: "pageGlobal",
				property: "Nolt.initialized",
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
		id: "nootiz",
		name: "Nootiz",
		website: "https://www.nootiz.com",
		description: "Nootiz is a visual feedback tool designed to streamline the process of collecting and managing user feedback on websites.",
		icon: "Nootiz.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "nootiz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("load\\.nootiz\\.com/"),
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
		id: "nostra",
		name: "Nostra",
		website: "https://www.nostra.ai/",
		description: "Nostra is a web performance optimisation solution.",
		icon: "Nostra.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "nostra:pageGlobal:0",
				kind: "pageGlobal",
				property: "Nostra",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nostra:pageGlobal:1",
				kind: "pageGlobal",
				property: "NostraEventManager",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "noticeable",
		name: "Noticeable",
		website: "https://noticeable.io",
		description: "Noticeable is a platform that simplifies product updates and company announcements while enhancing user communication and feedback analysis.",
		icon: "Noticeable.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "noticeable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.noticeable\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "noticeable:pageGlobal:1",
				kind: "pageGlobal",
				property: "noticeable",
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
		id: "notie",
		name: "Notie",
		website: "https://github.com/jaredreich/notie",
		description: "Notie is a notification, input, and selection suite for javascript, with no dependencies.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "notie:pageGlobal:0",
				kind: "pageGlobal",
				property: "notie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "nprogress",
		name: "NProgress",
		website: "https://ricostacruz.com/nprogress/",
		description: "NProgress is a JavaScript library that displays a nanoscopic progress bar at the top of websites or web applications. It includes trickle animations to indicate loading activity, enhancing user experience by showing that content is being loaded.",
		icon: "NProgress.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "nprogress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/nprogress\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nprogress:pageGlobal:1",
				kind: "pageGlobal",
				property: "NProgress.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "offline-js",
		name: "Offline.js",
		website: "https://github.hubspot.com/offline/docs/welcome",
		description: "Offline.js is a library that automatically alerts users when they have lost internet connectivity.",
		icon: "HubSpot.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "offline-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:bundles/[^/]+|assets/javascripts|js)/offline\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "offline-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Offline.confirmDown",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "offline-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Offline.state",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "oh-dear",
		name: "Oh Dear",
		website: "https://ohdear.app",
		description: "The all-in-one monitoring tool for your entire website. Oh Dear monitors uptime, SSL certificates, broken links, scheduled tasks, application health, DNS, domain expiry and more.",
		icon: "Oh Dear.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "oh-dear:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ohdear\\.app/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "oh-dear:pageGlobal:1",
				kind: "pageGlobal",
				property: "__NEXT_DATA__.props.pageProps.config.userAgent",
				valuePattern: new RegExp("OhDear\\.app"),
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
		id: "olvy",
		name: "Olvy",
		website: "https://olvy.co",
		description: "Olvy is a feedback management platform that enables user-centric teams to analyze insights, streamline product development, and keep stakeholders informed.",
		icon: "Olvy.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "olvy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.olvy\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "olvy:pageGlobal:1",
				kind: "pageGlobal",
				property: "OlvyConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "olvy:pageGlobal:2",
				kind: "pageGlobal",
				property: "OlvyInstances",
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
		id: "oneapm",
		name: "OneAPM",
		website: "https://www.oneapm.com",
		description: "OneAPM is a platform providing end-to-end application performance management solutions, including real-time monitoring, anomaly detection, and data analysis for optimizing IT operations.",
		icon: "OneAPM.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "oneapm:pageGlobal:0",
				kind: "pageGlobal",
				property: "BWEUM",
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
		id: "opal",
		name: "Opal",
		website: "https://opalrb.org",
		description: "Opal is a Ruby-to-JavaScript compiler that allows Ruby code to run in web browsers by converting it into JavaScript.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "opal:dom:0",
				kind: "dom",
				selector: "script#opal-elementor-frontend-js, link[href*='opal-boostrap.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "opencv",
		name: "OpenCV",
		website: "https://opencv.org",
		description: "OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library.",
		icon: "OpenCV.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "opencv:pageGlobal:0",
				kind: "pageGlobal",
				property: "opencvIsReady",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"webassembly"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:opencv:opencv:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "orbit-slider",
		name: "Orbit Slider",
		website: "https://zurb.com/playground/orbit-jquery-image-slider",
		description: "Orbit is a jQuery slider.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "orbit-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("orbit(?:\\.min)?([\\d.]{2,}[\\d])?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "osticket",
		name: "osTicket",
		website: "https://osticket.com",
		description: "osTicket is an open-source support ticket system that allows businesses to manage and streamline customer support requests through a centralized platform, including features for ticket tracking, automation, and reporting.",
		icon: "osTicket.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "osticket:cookie:0",
				kind: "cookie",
				key: "OSTSESSID",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php",
			"mysql"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:enhancesoft:osticket:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "otrs",
		name: "otrs",
		website: "https://www.otrs.com",
		icon: "otrs.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "otrs:html:0",
				kind: "html",
				pattern: new RegExp("<!--\\s+OTRS: Copyright"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "otrs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("^/otrs-web/js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "otrs:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("OTRS ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:otrs:otrs:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "outsystems",
		name: "OutSystems",
		website: "https://www.outsystems.com",
		description: "OutSystems is a low-code platform which provides tools for companies to develop, deploy and manage omnichannel enterprise applications.",
		icon: "OutSystems.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "outsystems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts/OutSystems(?:[\\w]+)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "outsystems:pageGlobal:1",
				kind: "pageGlobal",
				property: "OutSystemsDebugger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "outsystems:pageGlobal:2",
				kind: "pageGlobal",
				property: "outsystems",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"windows-server",
			"iis"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			],
			cpe: "cpe:2.3:a:outsystems:outsystems:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "overwolf",
		name: "Overwolf",
		website: "https://www.overwolf.com",
		description: "Overwolf is a platform that enables the creation, sharing, and monetization of in-game apps and mods.",
		icon: "Overwolf.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "overwolf:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("download\\.overwolf\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "owl-carousel",
		name: "OWL Carousel",
		website: "https://owlcarousel2.github.io/OwlCarousel2/",
		description: "OWL Carousel is an enabled jQuery plugin that lets you create responsive carousel sliders.",
		icon: "OWL Carousel.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "owl-carousel:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^\"]+owl\\.carousel(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "owl-carousel:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("owl\\.carousel.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "owl-carousel:dom:2",
				kind: "dom",
				selector: "link[href*='owl.carousel.css'], link[href*='owl.carousel.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "p5-js",
		name: "p5.js",
		website: "https://p5js.org",
		description: "p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else.",
		icon: "p5.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "p5-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:addons\\/)?)?p5(?:\\.sound)?(?:\\.dom)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "p5-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "p5.Camera",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "p5-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "p5.ColorConversion",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "packery",
		name: "Packery",
		website: "https://packery.metafizzy.co",
		description: "Packery is a JavaScript library and jQuery plugin that makes gapless and draggable layouts.",
		icon: "Packery.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "packery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("packery(?:\\.pkgd)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "pannellum",
		name: "Pannellum",
		website: "https://pannellum.org/",
		description: "Pannellum is a lightweight, free, and open source panorama viewer for the web.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pannellum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:build\\/)?)?pannellum(?:-plugin)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "papa-parse",
		name: "Papa Parse",
		website: "https://www.papaparse.com",
		description: "Papa Parse is a JavaScript library that functions as an in-browser CSV parser, enabling parsing of CSV files within web applications.",
		icon: "PapaParse.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "papa-parse:pageGlobal:0",
				kind: "pageGlobal",
				property: "Papa.Parser",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "papa-parse:pageGlobal:1",
				kind: "pageGlobal",
				property: "Papa.parse",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "parallax-js",
		name: "parallax.js",
		website: "https://github.com/pixelcog/parallax.js",
		description: "Simple parallax scrolling effect.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "parallax-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("parallax(?:\\/assets\\/js)?(?:\\/jquery)?(?:\\/scripts)?(?:\\/wow)?(?:[_\\.]move)?(?:\\.inview)?(?:\\.pkgd)?(?:\\.scrolling)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "parallax-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?parallax(?:\\/assets\\/js)?(?:\\/jquery)?(?:\\/scripts)?(?:\\/wow)?(?:[_\\.]move)?(?:\\.inview)?(?:\\.pkgd)?(?:\\.scrolling)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "parallax-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "parallax",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "parallax-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "parallaxInstance",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "parsley-js",
		name: "Parsley.js",
		website: "https://parsleyjs.org",
		description: "Javascript forms validation script.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "parsley-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("parsley(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "parsley-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "parsley",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "partytown",
		name: "Partytown",
		website: "https://partytown.builder.io/",
		description: "Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread.",
		icon: "Partytown.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "partytown:dom:0",
				kind: "dom",
				selector: "script[type*='text/partytown']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "partytown:pageGlobal:1",
				kind: "pageGlobal",
				property: "partytown",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pdfmake",
		name: "pdfmake",
		website: "https://bpampuch.github.io/pdfmake",
		description: "Client/server side PDF printing in pure JavaScript.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pdfmake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pdfmake(?:[\\/-]((?:\\d+\\.)+\\d+)\\/(?:build\\/)?)?(?:pdfmake)?(?:vfs_fonts)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "peerjs",
		name: "PeerJS",
		website: "https://peerjs.com",
		description: "PeerJS is a JavaScript library that enables WebRTC-based peer-to-peer data, video, and audio connections.",
		icon: "PeerJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "peerjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "Peer.DEFAULT_KEY",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "peity",
		name: "Peity",
		website: "https://benpickles.github.io/peity/",
		description: "Peity is a jQuery plugin that converts an element's content into a simple mini svg pie, line or bar chart.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "peity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:jquery\\.)?peity(?:-demo)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "peity:pageGlobal:1",
				kind: "pageGlobal",
				property: "peity",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "perl",
		name: "Perl",
		website: "https://perl.org",
		description: "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.",
		icon: "Perl.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "perl:dom:0",
				kind: "dom",
				selector: "form[action*='/discus/search.pl']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "perl:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("\\bPerl\\b(?: ?/?v?([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:perl:perl:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "phabricator",
		name: "Phabricator",
		website: "https://phacility.com",
		description: "Phabricator is a suite of web-based software development collaboration tools, including the Differential code review tool, the Diffusion repository browser, the Herald change monitoring tool, the Maniphest bug tracker and the Phriction wiki. Phabricator integrates with Git, Mercurial, and Subversion.",
		icon: "Phabricator.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "phabricator:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+(?:class|id)=\"phabricator-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "phabricator:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/phabricator/[a-f0-9]{8}/rsrc/js/phui/[a-z-]+\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "phabricator:cookie:2",
				kind: "cookie",
				key: "phsid",
				description: "Cookie name matches a known technology marker."
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
		id: "php",
		name: "PHP",
		website: "https://php.net",
		description: "PHP is a general-purpose scripting language used for web development.",
		icon: "PHP.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "php:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.php(?:\\?|$)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "php:url:1",
				kind: "url",
				pattern: new RegExp("\\.php(?:$|\\?)"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "php:dom:2",
				kind: "dom",
				selector: "form[action*='login_process.php'], form[action*='assets/mail.php']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "php:cookie:3",
				kind: "cookie",
				key: "PHPSESSID",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "php:responseHeader:4",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("php/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "php:responseHeader:5",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^php/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:php:php:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "phpdebugbar",
		name: "PHPDebugBar",
		website: "https://phpdebugbar.com/",
		icon: "phpdebugbar.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "phpdebugbar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("debugbar.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "phpdebugbar:pageGlobal:1",
				kind: "pageGlobal",
				property: "PhpDebugBar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "phpdebugbar:pageGlobal:2",
				kind: "pageGlobal",
				property: "phpdebugbar",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pickadate-js",
		name: "pickadate.js",
		website: "https://amsul.ca/pickadate.js/",
		description: "Mobile-friendly, responsive, and lightweight jQuery date & time input picker.",
		icon: "pickadate.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pickadate-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pickadate(?:\\/translations)?(?:\\/de_DE)?(?:\\/picker)?(?:\\.date)?(?:\\.time)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pickadate-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "pickadate",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "piio",
		name: "Piio",
		website: "https://piio.co",
		description: "Piio is a tool designed to optimise images for websites, enhancing loading speeds and user experience.",
		icon: "Piio.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "piio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.piiojs\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "piio:dom:1",
				kind: "dom",
				selector: "link[href*='.piiojs.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "pikaday",
		name: "Pikaday",
		website: "https://github.com/dbushell/Pikaday",
		description: "A refreshing JavaScript Datepicker.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pikaday:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pikaday(?:-jquery)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pingdom-uptime-monitoring",
		name: "Pingdom Uptime Monitoring",
		website: "https://www.pingdom.com/product/uptime-monitoring/",
		description: "Pingdom Uptime Monitoring is a feature provided by the Pingdom website monitoring and performance testing service. It allows you to monitor the uptime and availability of your website.",
		icon: "Pingdom.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pingdom-uptime-monitoring:meta:0",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Pingdom Public Reports Overview$"),
				description: "Meta tag matches a known technology marker."
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
		id: "planio",
		name: "Planio",
		website: "https://plan.io",
		description: "Planio is a platform that offers issue tracking, project management, version control, help desk functionality, wikis, and team chat in a unified environment.",
		icon: "Planio.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "planio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.plan\\.io"),
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
		id: "polyfill",
		name: "Polyfill",
		website: "https://polyfill.io",
		description: "Polyfill is a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser.",
		icon: "polyfill.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "polyfill:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("polyfill\\.io/v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "prefix-free",
		name: "Prefix-Free",
		website: "https://leaverou.github.io/prefixfree/",
		description: "Prefix-Free is a JavaScript library that automatically removes browser vendor prefixes from CSS properties, enabling developers to use standard CSS without worrying about cross-browser compatibility issues.",
		icon: "Prefix-Free.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "prefix-free:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prefixfree\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "prefix-free:pageGlobal:1",
				kind: "pageGlobal",
				property: "PrefixFree",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "prettyphoto",
		name: "prettyPhoto",
		website: "https://github.com/scaron/prettyphoto",
		icon: "prettyPhoto.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "prettyphoto:html:0",
				kind: "html",
				pattern: new RegExp("(?:<link [^>]*href=\"[^\"]*prettyPhoto(?:\\.min)?\\.css|<a [^>]*rel=\"prettyPhoto)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "prettyphoto:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.prettyPhoto\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "prettyphoto:dom:2",
				kind: "dom",
				selector: "link[href*='prettyPhoto.css'], link[href*='prettyPhoto.min.css'], a[rel='prettyPhoto']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "prettyphoto:pageGlobal:3",
				kind: "pageGlobal",
				property: "pp_alreadyInitialized",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "prettyphoto:pageGlobal:4",
				kind: "pageGlobal",
				property: "pp_descriptions",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "prettyphoto:pageGlobal:5",
				kind: "pageGlobal",
				property: "pp_images",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "prettyphoto:pageGlobal:6",
				kind: "pageGlobal",
				property: "pp_titles",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "priority-hints",
		name: "Priority Hints",
		website: "https://wicg.github.io/priority-hints/",
		description: "Priority Hints exposes a mechanism for developers to signal a relative priority for browsers to consider when fetching resources.",
		icon: "Priority Hints.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "priority-hints:dom:0",
				kind: "dom",
				selector: "iframe[fetchpriority], img[fetchpriority], script[fetchpriority], link[fetchpriority]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "prisme",
		name: "Prisme",
		website: "https://www.prisme.ai",
		description: "Prisme is an event-driven studio designed for building and automating workflows with minimal coding.",
		icon: "Prisme.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "prisme:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.prisme\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "progressbar-js",
		name: "ProgressBar.js",
		website: "https://kimmobrunfeldt.github.io/progressbar.js/",
		description: "Responsive progress bars with animated SVG paths.",
		icon: "ProgressBar.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "progressbar-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("progressbar(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "progressbar-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?progressbar(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pubsubjs",
		name: "PubSubJS",
		website: "https://github.com/mroderick/PubSubJS",
		description: "PubSubJS is a topic-based publish/subscribe library written in JavaScript.",
		icon: "pubsub-js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "pubsubjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "PubSub",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pubsubjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "PubSub.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "punycode",
		name: "punycode",
		website: "https://github.com/mathiasbynens/punycode.js",
		description: "A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "punycode:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("punycode(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.){1,2}\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "puter-js",
		name: "Puter.js",
		website: "https://docs.puter.com",
		description: "Puter.js is a JavaScript library that provides serverless authentication, cloud services, and AI capabilities directly in the browser without requiring backend code or configuration.",
		icon: "PuterJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "puter-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "puter.APIOrigin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "puter-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "puter_gui_enabled",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "python",
		name: "Python",
		website: "https://python.org",
		description: "Python is an interpreted and general-purpose programming language.",
		icon: "Python.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "python:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("(?:^|\\s)Python(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:python:python:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "qiankun",
		name: "qiankun",
		website: "https://qiankun.umijs.org",
		description: "qiankun is a JS library who helps developers to build a micro frontends system.",
		icon: "qiankun.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "qiankun:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("__POWERED_BY_QIANKUN__"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "quadran",
		name: "Quadran",
		website: "https://www.quadran.eu",
		description: "Quadran is a real-time end-user monitoring and performance analysis tool.",
		icon: "Quadran.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "quadran:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tracker\\.quadran\\.eu"),
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
		id: "queue-it",
		name: "Queue-it",
		website: "https://queue-it.com",
		description: "Queue-it is a virtual waiting room platform designed to protect your website and mobile app from slowdowns or crashes during end-user peaks.",
		icon: "Queue-it.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "queue-it:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.queue-it\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "queue-it:pageGlobal:1",
				kind: "pageGlobal",
				property: "QueueIt.Javascript.Version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "queue-it:pageGlobal:2",
				kind: "pageGlobal",
				property: "queueit_clientside_config",
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
		id: "quic-cloud",
		name: "QUIC.cloud",
		website: "https://www.quic.cloud",
		description: "QUIC.cloud is a content delivery network (CDN) and optimisation service that uses the QUIC protocol, a next-generation internet transport protocol developed by Google, to deliver content faster and more securely over the internet.",
		icon: "QUIC.cloud.svg",
		categories: [
			"developer-tooling",
			"server-runtime-infra",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "quic-cloud:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.quicns\\.(?:net|com)"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
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
		id: "quicklink",
		name: "Quicklink",
		website: "https://getquick.link/",
		description: "Quicklink is a JS library which aims to be a drop-in solution for sites to prefetch links based on what is in the user's viewport.",
		icon: "Quicklink.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "quicklink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("quicklink@([\\d.]+)/dist/quicklink.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "quicklink:pageGlobal:1",
				kind: "pageGlobal",
				property: "drupalSettings.quicklink",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quicklink:pageGlobal:2",
				kind: "pageGlobal",
				property: "quicklink",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "quicksprout",
		name: "Quicksprout",
		website: "https://www.quicksprout.com",
		description: "Quicksprout is a website optimization service focused on improving site performance and user engagement.",
		icon: "Quicksprout.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "quicksprout:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.quicksprout\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "quicksprout:pageGlobal:1",
				kind: "pageGlobal",
				property: "_QS.CDN",
				valuePattern: new RegExp("cdn\\.quicksprout\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "quicq",
		name: "Quicq",
		website: "https://afosto.com/apps/quicq",
		description: "Quicq is an image optimisation tool by Afosto.",
		icon: "Quicq.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "quicq:dom:0",
				kind: "dom",
				selector: "img[src*='.qcqcdn.com/'], img[data-src*='.qcqcdn.com/'], img[src*='cdn.quicq.io/'], img[data-src*='cdn.quicq.io/']",
				description: "DOM selector matches a known technology marker."
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
		id: "ractive-js",
		name: "Ractive.js",
		website: "https://www.ractivejs.org",
		description: "Ractive.js is a template-driven UI library.",
		icon: "Ractive.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ractive-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ractive/ractive\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ramda",
		name: "Ramda",
		website: "https://ramdajs.com",
		description: "Ramda is a practical functional programming library for JavaScript that emphasizes immutability, currying, and function composition to facilitate writing more declarative and modular code.",
		icon: "Ramda.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ramda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ramda.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rapidspike",
		name: "RapidSpike",
		website: "https://www.rapidspike.com",
		description: "RapidSpike is an uptime and performance monitoring service for web sites and applications.",
		icon: "RapidSpike.svg",
		categories: [
			"developer-tooling",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "rapidspike:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rapidspike\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rapidspike:pageGlobal:1",
				kind: "pageGlobal",
				property: "rspike_timing",
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
		id: "rcode-vision",
		name: "Rcode Vision",
		website: "https://www.rcodevision.com",
		description: "Rcode Vision is a platform that develops and delivers web applications.",
		icon: "RcodeVision.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "rcode-vision:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Rcode Vision$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "redmine",
		name: "Redmine",
		website: "https://www.redmine.org",
		description: "Redmine is a free and open-source, web-based project management and issue tracking tool.",
		icon: "Redmine.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "redmine:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^>]+Redmine"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "redmine:cookie:1",
				kind: "cookie",
				key: "_redmine_session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "redmine:meta:2",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("Redmine"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:redmine:redmine:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "render-better",
		name: "Render Better",
		website: "https://www.renderbetter.com",
		description: "Render Better is automated site speed and core web vital optimisation platform for Shopify.",
		icon: "renderbetter.svg",
		categories: [
			"developer-tooling",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "render-better:pageGlobal:0",
				kind: "pageGlobal",
				property: "renderbetter",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "render-better:dns:1",
				kind: "dns",
				valuePattern: new RegExp("\\.renderbetter\\.app"),
				recordType: "CNAME",
				description: "DNS record matches a known technology marker.",
			}
		],
		requires: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "replit",
		name: "Replit",
		website: "https://replit.com",
		description: "Replit is a platform for creating and sharing software.",
		icon: "Replit.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "replit:responseHeader:0",
				kind: "responseHeader",
				key: "expect-ct",
				valuePattern: new RegExp("\\.repl\\.it/"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "replit:responseHeader:1",
				kind: "responseHeader",
				key: "replit-cluster",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "request-metrics",
		name: "Request Metrics",
		website: "https://requestmetrics.com",
		description: "Request Metrics is a tool that tracks and analyzes website performance, measuring speed, uptime, and overall responsiveness.",
		icon: "RequestMetrics.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "request-metrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.requestmetrics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "request-metrics:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.requestmetrics\\.com"),
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
		id: "responsive-nav",
		name: "Responsive Nav",
		website: "http://responsive-nav.com/",
		description: "Responsive navigation plugin without library dependencies and with fast touch screen support.",
		icon: "Responsive Nav.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "responsive-nav:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("responsive-nav(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "retina-js",
		name: "Retina.js",
		website: "https://imulus.github.io/retinajs",
		description: "Retina.js is an open-source script designed to facilitate the delivery of high-resolution images to devices with retina displays.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "retina-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/retina(\\.min)?\\.js\\?ver=([\\d\\.]+)"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "retina-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "RetinaImage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "retina-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "retinajs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "retool",
		name: "Retool",
		website: "https://retool.com",
		description: "Retool is a development platform that enables the rapid creation and customisation of internal tools, including admin dashboards and database interfaces, through a combination of drag-and-drop components and code.",
		icon: "Retool.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "retool:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("retool(?:-edge)?(?:\\.com)?(?:\\/embed)?\\/?(?:runtime)?~?(?:app)?(?:custom-components)?(?:\\.\\w{0,20})?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "retool:url:1",
				kind: "url",
				pattern: new RegExp("^https://retool\\.[\\d\\w\\-]+\\.(?:com|io)/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "retool:pageGlobal:2",
				kind: "pageGlobal",
				property: "RETOOL_PAGE_SUSPEND_DETECTED",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "robixcm-dv-team",
		name: "RobixCM DV Team",
		website: "https://robixcm.ir",
		description: "RobixCM DV Team is a provider of web design and management services, offering solutions for website creation, maintenance, and optimization.",
		icon: "Robixcm.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "robixcm-dv-team:meta:0",
				kind: "meta",
				key: "robixcmteam",
				valuePattern: new RegExp("RobixCM"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rollbar",
		name: "Rollbar",
		website: "https://rollbar.com/",
		icon: "Rollbar.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "rollbar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rollbar\\.js/([0-9.]+)"),
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
		id: "rual",
		name: "Rual",
		website: "https://rual.nl",
		description: "Rual is a software development platform that designs and builds tailor-made digital solutions to meet specific business or operational requirements.",
		icon: "Rual.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "rual:pageGlobal:0",
				kind: "pageGlobal",
				property: "RUALCONFIG.api",
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
		id: "ruby",
		name: "Ruby",
		website: "https://ruby-lang.org",
		description: "Ruby is an open-source object-oriented programming language.",
		icon: "Ruby.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ruby:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("(?:Mongrel|Ruby(?:/([\\d\\.]+))?)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:ruby-lang:ruby:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "runkit",
		name: "RunKit",
		website: "https://runkit.com",
		description: "RunKit is a tool for prototyping server-side JavaScript.",
		icon: "RunKit.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "runkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.runkit\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "runkit:pageGlobal:1",
				kind: "pageGlobal",
				property: "RunKit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "runkit:pageGlobal:2",
				kind: "pageGlobal",
				property: "RunKit.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rust",
		name: "Rust",
		website: "https://www.rust-lang.org",
		description: "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.",
		icon: "Rust.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:rust-lang:rust:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ruttl",
		name: "Ruttl",
		website: "https://ruttl.com",
		description: "Ruttl is a platform that enables visual and design feedback by allowing users to review layouts, content, and bugs across websites, applications, PDFs, and images.",
		icon: "Ruttl.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ruttl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ruttl\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ruttl:pageGlobal:1",
				kind: "pageGlobal",
				property: "__RUTTL_PRODUCT__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ruttl:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkruttl",
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
		id: "sass",
		name: "Sass",
		website: "https://sass-lang.com",
		description: "Sass is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more.",
		icon: "Sass.svg",
		categories: [
			"developer-tooling",
			"styling-processor"
		],
		rules: [
			{
				id: "sass:dom:0",
				kind: "dom",
				selector: "link[href*='/index.scss']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "scala",
		name: "Scala",
		website: "https://www.scala-lang.org",
		description: "Scala is a general-purpose programming language providing support for both object-oriented programming and functional programming.",
		icon: "Scala.png",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "scapbot",
		name: "ScapBot",
		website: "https://scapbot.com",
		description: "ScapBot is a tool designed to automate tasks and workflows, helping streamline repetitive processes across various work environments.",
		icon: "ScapBot.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "scapbot:dom:0",
				kind: "dom",
				selector: "script[data-host*='analytics.scapbot.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "script-aculo-us",
		name: "script.aculo.us",
		website: "https://script.aculo.us",
		icon: "script.aculo.us.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "script-aculo-us:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:scriptaculous|protoaculous)(?:\\.js|/)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "script-aculo-us:pageGlobal:1",
				kind: "pageGlobal",
				property: "Scriptaculous.Version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:script.aculo.us:script.aculo.us:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "scrollmagic",
		name: "ScrollMagic",
		website: "https://scrollmagic.io",
		description: "ScrollMagic is a jQuery plugin which essentially lets you use the scrollbar like a playback scrub control.",
		icon: "ScrollMagic.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "scrollmagic:pageGlobal:0",
				kind: "pageGlobal",
				property: "ScrollMagic",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "scrollmagic:pageGlobal:1",
				kind: "pageGlobal",
				property: "ScrollMagic.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery",
			"gsap"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "scrollreveal",
		name: "scrollreveal",
		website: "https://scrollrevealjs.org",
		description: "Reveal elements as they enter the viewport.",
		icon: "scrollreveal.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "scrollreveal:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+data-sr(?:-id)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "scrollreveal:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("scrollreveal(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "scrollreveal:pageGlobal:2",
				kind: "pageGlobal",
				property: "ScrollReveal",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "sections-design-shopify-app-optimization",
		name: "Sections.design Shopify App Optimization",
		website: "https://github.com/mirceapiturca/Sections/tree/master/App%20Optimization",
		description: "Sections.design Shopify App Optimization is a Shopify section written in liquid for the purpose of improving performance of Shopify stores by optimizing how Shopify app loads.",
		icon: "Sections-Design.png",
		categories: [
			"developer-tooling",
			"ecommerce-extensions"
		],
		rules: [
			{
				id: "sections-design-shopify-app-optimization:dom:0",
				kind: "dom",
				selector: "div#shopify-section-app-optimization",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "select2",
		name: "Select2",
		website: "https://select2.org/",
		description: "Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.",
		icon: "Select2.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "select2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("select2(?:\\.min|\\.full)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "select2:pageGlobal:1",
				kind: "pageGlobal",
				property: "jQuery.fn.select2",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:select2:select2:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "selectize",
		name: "Selectize",
		website: "https://selectize.dev",
		description: "Selectize is an extensible jQuery-based custom <select> UI control.",
		icon: "Selectize.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "selectize:pageGlobal:0",
				kind: "pageGlobal",
				property: "Selectize",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "selectize:pageGlobal:1",
				kind: "pageGlobal",
				property: "selectize",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sentry",
		name: "Sentry",
		website: "https://sentry.io/",
		description: "Sentry is an open-source platform for workflow productivity, aggregating errors from across the stack in real time.",
		icon: "Sentry.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sentry:html:0",
				kind: "html",
				pattern: new RegExp("<script[^>]*>\\s*Raven\\.config\\('[^']*', \\{\\s+release: '([0-9\\.]+)'"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "sentry:html:1",
				kind: "html",
				pattern: new RegExp("<script[^>]*src=\"[^\"]*browser\\.sentry\\-cdn\\.com/([0-9.]+)/bundle(?:\\.tracing)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "sentry:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("browser\\.sentry\\-cdn\\.com/([0-9.]+)/bundle(?:\\.tracing)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sentry:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sentry-cdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:4",
				kind: "pageGlobal",
				property: "Raven.config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:5",
				kind: "pageGlobal",
				property: "SENTRY_SDK_SOURCE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:6",
				kind: "pageGlobal",
				property: "Sentry",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:7",
				kind: "pageGlobal",
				property: "Sentry.SDK_VERSION",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:8",
				kind: "pageGlobal",
				property: "__SENTRY__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:pageGlobal:9",
				kind: "pageGlobal",
				property: "ravenOptions.whitelistUrls",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sentry:responseHeader:10",
				kind: "responseHeader",
				key: "Sentry-Trace",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:sentry:sentry:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "shepherd",
		name: "Shepherd",
		website: "https://shepherdjs.dev/",
		description: "Shepherd is a JavaScript library which makes an use-friendly user-guide to any website.",
		icon: "Shepherd.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "shepherd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shepherd(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "showdown",
		name: "Showdown",
		website: "https://showdownjs.com/",
		description: "A Markdown to HTML converter written in Javascript.",
		icon: "Showdown.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "showdown:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:dist\\/)?)?showdown(?:\\.min)?(?:-?((?:\\d+\\.)+\\d+))?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "showdown:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dist\\/)?)?showdown(?:\\.min)?(?:-)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "showdown:pageGlobal:2",
				kind: "pageGlobal",
				property: "showdown",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sidr",
		name: "sidr",
		website: "https://www.albertovarela.net/sidr/",
		description: "Sidr is a jQuery plugin for creating side menus.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sidr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sidr(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sigma-js",
		name: "Sigma.js",
		website: "https://www.sigmajs.org",
		description: "Sigma.js is a JavaScript library designed for visualizing large-scale graphs with thousands of nodes and edges.",
		icon: "SigmaJs.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sigma-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(static/js/|)sigma\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sigma-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "sigma.canvas",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "signalr",
		name: "SignalR",
		website: "https://dotnet.microsoft.com/es-es/apps/aspnet/signalr",
		description: "Realtime web communication framework from Microsoft for ASP.NET.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "signalr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:jquery\\.)?signal[rR](?:-((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "signalr:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/jquery\\.)?signal[rR](?:-)?(?:\\.min)?\\.js"),
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
		id: "simplexnoise-js",
		name: "SimplexNoise.js",
		website: "https://github.com/jwagner/simplex-noise.js",
		description: "SimplexNoise.js is a library that generates pseudorandom noise functions, designed for use in video games, graphical applications, and demoscene production.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "simplexnoise-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/simplex-noise/([\\d\\.]+)/simplex-noise.min.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simplexnoise-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "SimplexNoise",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "skitter",
		name: "Skitter",
		website: "https://skitter-slider.net",
		description: "Skitter is a jQuery-based slider system.",
		icon: "Skitter.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "skitter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.skitter\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "skrollr",
		name: "Skrollr",
		website: "https://prinzhorn.github.io/skrollr/",
		description: "Skrollr is a JavaScript library supporting parallax scrolling on mobile and desktop platforms in a compact 12k minified size.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "skrollr:pageGlobal:0",
				kind: "pageGlobal",
				property: "skrollr.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sleekplan",
		name: "Sleekplan",
		website: "https://sleekplan.com",
		description: "Sleekplan is a customer feedback and product management platform that enables businesses to collect, analyse, and act upon user feedback, prioritise feature requests, track bugs, and collaborate on product development.",
		icon: "Sleekplan.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sleekplan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sleekplan\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"vue-js"
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
		id: "slick",
		name: "Slick",
		website: "https://kenwheeler.github.io/slick",
		icon: "Slick.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "slick:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]+(?:/([\\d.]+)/)?slick-theme\\.css"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "slick:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d.]+))?/slick(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slick:dom:2",
				kind: "dom",
				selector: "link[href*='slick-theme.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "slickstack",
		name: "SlickStack",
		website: "https://slickstack.io",
		description: "SlickStack is a free LEMP stack automation script written in Bash designed to enhance and simplify WordPress provisioning, performance, and security.",
		icon: "SlickStack.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting"
		],
		rules: [
			{
				id: "slickstack:responseHeader:0",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("SlickStack"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"wordpress"
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
		id: "slideout",
		name: "slideout",
		website: "https://slideout.js.org/",
		description: "A touch slideout navigation menu for your mobile web apps.",
		icon: "slideout.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "slideout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("slideout(?:-init)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slideout:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?slideout(?:-init)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slideout:pageGlobal:2",
				kind: "pageGlobal",
				property: "slideout",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "slim-select",
		name: "Slim Select",
		website: "https://slimselectjs.com",
		description: "Slim Select is a JavaScript library designed to enable the creation of select dropdowns with enhanced functionality and features.",
		icon: "SlimSelect.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "slim-select:dom:0",
				kind: "dom",
				selector: "div.ss-values, div.ss-deselect.ss-hide",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "slimbox",
		name: "Slimbox",
		website: "https://www.digitalia.be/software/slimbox",
		icon: "Slimbox.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "slimbox:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^/]*slimbox(?:-rtl)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "slimbox:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("slimbox\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slimbox:dom:2",
				kind: "dom",
				selector: "link[href*='slimbox.css'],link[href*='slimbox-rtl.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"mootools"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "slimbox-2",
		name: "Slimbox 2",
		website: "https://www.digitalia.be/software/slimbox2",
		icon: "Slimbox.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "slimbox-2:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^/]*slimbox2(?:-rtl)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "slimbox-2:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("slimbox2\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slimbox-2:dom:2",
				kind: "dom",
				selector: "link[href*='slimbox2.css'], link[href*='slimbox2-rtl.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "snap-svg",
		name: "Snap.svg",
		website: "https://snapsvg.io",
		icon: "Snap.svg.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "snap-svg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snap\\.svg(?:-min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snap-svg:pageGlobal:1",
				kind: "pageGlobal",
				property: "Snap.version",
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
		id: "sonarqube",
		name: "SonarQube",
		website: "https://www.sonarqube.org/",
		description: "SonarQube is an open-source platform for the continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
		icon: "SonarQube.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sonarqube:html:0",
				kind: "html",
				pattern: new RegExp("<link href=\"/css/sonar\\.css\\?v=([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "sonarqube:html:1",
				kind: "html",
				pattern: new RegExp("<title>SonarQube</title>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "sonarqube:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("^/js/bundles/sonar\\.js?v=([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sonarqube:pageGlobal:3",
				kind: "pageGlobal",
				property: "SonarMeasures",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sonarqube:pageGlobal:4",
				kind: "pageGlobal",
				property: "SonarRequest",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sonarqube:meta:5",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^SonarQube$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sonarqubes",
		name: "SonarQubes",
		website: "https://www.sonarqube.org/",
		description: "SonarQube is an open-source platform for the continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
		icon: "Sonar.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sonarqubes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^/js/bundles/sonar\\.js?v=([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sonarqubes:dom:1",
				kind: "dom",
				selector: "link[href*='/css/sonar.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "sonarqubes:pageGlobal:2",
				kind: "pageGlobal",
				property: "SonarMeasures",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sonarqubes:pageGlobal:3",
				kind: "pageGlobal",
				property: "SonarRequest",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sonarqubes:meta:4",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^SonarQubes$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "soplanning",
		name: "SOPlanning",
		website: "https://www.soplanning.org/en/",
		description: "SOPlanning is an online project management software that enhances team visibility and facilitates task coordination through a centralized platform.",
		icon: "SOPlanning.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "soplanning:meta:0",
				kind: "meta",
				key: "email",
				valuePattern: new RegExp("^support@soplanning\\.org$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "soundmanager",
		name: "SoundManager",
		website: "https://www.schillmania.com/projects/soundmanager2",
		icon: "SoundManager.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "soundmanager:pageGlobal:0",
				kind: "pageGlobal",
				property: "BaconPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "soundmanager:pageGlobal:1",
				kind: "pageGlobal",
				property: "SoundManager",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "soundmanager:pageGlobal:2",
				kind: "pageGlobal",
				property: "soundManager.version",
				valuePattern: new RegExp("V(.+) "),
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
		id: "speed-kit",
		name: "Speed Kit",
		website: "https://www.speedkit.com",
		description: "Speed Kit develops a performance add-on that uses caching algorithms to minimize loading times of ecommerce websites.",
		icon: "Speed Kit.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "speed-kit:pageGlobal:0",
				kind: "pageGlobal",
				property: "speedKit",
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
		id: "speedimize",
		name: "Speedimize",
		website: "https://speedimize.io",
		description: "Speedimize is a Shopify agency that focuses on website speed optimisation and performance issues.",
		icon: "Speedimize.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "speedimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com/.+/assets/speedimize\\.js"),
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
		id: "speedof-me",
		name: "SpeedOf.Me",
		website: "https://speedof.me/api.html",
		description: "SpeedOf.Me is a client-based bandwidth test API that measures internet speed without requiring plugins, using HTML5 and JavaScript for real-time results.",
		icon: "SpeedOfMe.svg",
		categories: [
			"developer-tooling",
			"api-pattern"
		],
		rules: [
			{
				id: "speedof-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("speedof\\.me/api/"),
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
		id: "speedsize",
		name: "SpeedSize",
		website: "https://speedsize.com",
		description: "SpeedSize is an AI-based media-compression technology that can auto-detect and compress all of a website's images and videos down to 99% of their original size without lowering the image quality.",
		icon: "SpeedSize.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "speedsize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/speedsize(?:-sw)?\\.js"),
				confidence: 90,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "speedsize:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.speedsize\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "speedsize:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("data-speedsize-(?:srcset|src|params)?"),
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
		id: "spicy-rocket",
		name: "Spicy Rocket",
		website: "https://spicyrocket.xyz",
		description: "Spicy Rocket is a web design and digital development platform providing innovative solutions to enhance online business performance.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "spicy-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spicyrocket\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spicy-rocket:cookie:1",
				kind: "cookie",
				key: "spicyrocket_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "spin-js",
		name: "Spin.js",
		website: "https://spin.js.org",
		description: "Spin.js is a configurable JavaScript/CSS spinner serving as a resolution-independent loading indicator.",
		icon: "SpinJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "spin-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com/ajax/libs/spin\\.js/([\\d\\.]+)/spin\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spin-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Spinner",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "spine-js",
		name: "Spine.js",
		website: "https://spine.github.io",
		description: "Spine is a lightweight MVC library for building JavaScript web applications.",
		icon: "SpineJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "spine-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "Spine",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spine-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Spine.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spine-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "pixi_spine.Spine",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "splide",
		name: "Splide",
		website: "https://splidejs.com",
		description: "Splide.js is a lightweight, responsive, and customizable slider and carousel library for JavaScript.",
		icon: "Splide.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "splide:pageGlobal:0",
				kind: "pageGlobal",
				property: "Splide.STATES",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "splide:pageGlobal:1",
				kind: "pageGlobal",
				property: "Splide.name",
				valuePattern: new RegExp("i"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "split",
		name: "Split",
		website: "https://www.split.io",
		description: "Split is a feature delivery platform that powers feature flag management, software experimentation, and continuous delivery.",
		icon: "Split.svg",
		categories: [
			"developer-tooling",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "split:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.split\\.io/(?:sdk/split-([\\d\\.]+)\\.min\\.js)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "split:pageGlobal:1",
				kind: "pageGlobal",
				property: "SPLITIO_API_KEY",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "split:pageGlobal:2",
				kind: "pageGlobal",
				property: "split_shopper_client",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "split:pageGlobal:3",
				kind: "pageGlobal",
				property: "split_visitor_client",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "split:pageGlobal:4",
				kind: "pageGlobal",
				property: "splitio",
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
		id: "spritespin",
		name: "SpriteSpin",
		website: "https://github.com/giniedp/spritespin",
		description: "SpriteSpin is a JavaScript plugin that enables users to create 360-degree image spin animations on their websites.",
		icon: "SprintHub.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "spritespin:pageGlobal:0",
				kind: "pageGlobal",
				property: "SpriteSpin",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "stackify",
		name: "Stackify",
		website: "https://stackify.com",
		description: "Stackify offers the only solution that fully integrates application performance monitoring with errors and logs.",
		icon: "Stackify.svg",
		categories: [
			"developer-tooling",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "stackify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stackify\\.com/"),
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
		id: "stammer-ai",
		name: "Stammer.ai",
		website: "https://stammer.ai",
		description: "Stammer.ai is a platform that enables the creation of custom AI agents tailored for various business needs across different industries.",
		icon: "Stammer.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "stammer-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.stammer\\.ai"),
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
		id: "statping",
		name: "Statping",
		website: "https://github.com/statping/statping",
		description: "Statping is an open-source status monitoring tool that helps you to monitor and analyse the performance of your websites, applications, and services. It can monitor multiple endpoints such as HTTP, HTTPS, TCP, DNS, and more.",
		icon: "Statping.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		requires: [
			"vue-js",
			"core-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "status-io",
		name: "Status.io",
		website: "https://status.io",
		description: "Status.io is a hosted system status page manager with features such as customised incident tracking, subscriber notifications, and more.",
		icon: "Status.io.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "status-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.status\\.io/"),
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
		id: "statuscake",
		name: "StatusCake",
		website: "https://www.statuscake.com",
		description: "StatusCake is a website monitoring service that sends alerts when a website goes down or experiences technical issues, such as slow loading times.",
		icon: "StatusCake.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "statuscake:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.statuscake\\.com"),
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
		id: "statuscast",
		name: "StatusCast",
		website: "https://statuscast.com/status-page/",
		description: "StatusCast is a hosted status page management software.",
		icon: "StatusCast.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "statuscast:pageGlobal:0",
				kind: "pageGlobal",
				property: "statuscast.libs.datatables",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "statuscast:pageGlobal:1",
				kind: "pageGlobal",
				property: "statuscast.ui",
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
		id: "statuspal",
		name: "Statuspal",
		website: "https://statuspal.io",
		description: "Statuspal is a hosted status page and monitoring software for businesses of all kinds.",
		icon: "Statuspal.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "statuspal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//statuspal\\.io/"),
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
		id: "staytus",
		name: "Staytus",
		website: "https://staytus.co",
		description: "Staytus is a free, open-source status site that you can install on your own servers.",
		icon: "Staytus.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "staytus:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Staytus/([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "stellar-js",
		name: "Stellar.js",
		website: "https://markdalgleish.com/projects/stellar.js/",
		description: "Stellar.js is a JavaScript library and jQuery plugin specifically designed to deliver parallax scrolling effects for web pages.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "stellar-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("stellar(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "storybook",
		name: "Storybook",
		website: "https://storybook.js.org",
		description: "Storybook is a frontend workshop for building UI components and pages in isolation.",
		icon: "storybook.svg",
		categories: [
			"developer-tooling",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "storybook:pageGlobal:0",
				kind: "pageGlobal",
				property: "STORYBOOK_ADDON_STATE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "storybook:pageGlobal:1",
				kind: "pageGlobal",
				property: "STORYBOOK_BUILDER",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "storybook:pageGlobal:2",
				kind: "pageGlobal",
				property: "__STORYBOOKADDONS__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "storybook:pageGlobal:3",
				kind: "pageGlobal",
				property: "__STORYBOOK_ADDONS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "subversion",
		name: "Subversion",
		website: "https://subversion.apache.org",
		description: "Subversion is a centralized version control system for managing files and directories across software development teams.",
		icon: "Subversion.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "subversion:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("\\sSVN/([\\d\\.]+)\\s"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:subversion:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "sugar",
		name: "Sugar",
		website: "https://sugarjs.com",
		description: "Sugar is a Javascript utility library for working with native objects.",
		icon: "Sugar.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sugar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/sugar/([\\d\\.]+)/release/sugar\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sugar:pageGlobal:1",
				kind: "pageGlobal",
				property: "SUGAR.AutoComplete",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sugarjs",
		name: "SugarJS",
		website: "https://sugarjs.com/",
		description: "SugarJS is a JavaScript library that simplifies working with native JavaScript objects, enhancing productivity and code readability.",
		icon: "SugarJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sugarjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sugar\\/?((?:\\d+\\.)+\\d+)?(?:\\/sugar(?:-full)?)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "supabase",
		name: "Supabase",
		website: "https://supabase.com",
		description: "Supabase is an open-source platform that offers a Postgres database, Authentication, APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings for project development.",
		icon: "Supabase.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "supabase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.supabase\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "supabase:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.supabase\\.co/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "supabase:dom:2",
				kind: "dom",
				selector: "a[href*='supabase.com'] > img[src*='/supabase-logo-wordmark\\-\\-dark.png']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "supabase:pageGlobal:3",
				kind: "pageGlobal",
				property: "__NUXT__.config.public.SUPABASE_URL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "supabase:pageGlobal:4",
				kind: "pageGlobal",
				property: "__NUXT__.config.public.supabase",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "supabase:pageGlobal:5",
				kind: "pageGlobal",
				property: "createClient",
				valuePattern: new RegExp("supabase\\."),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "supabase:pageGlobal:6",
				kind: "pageGlobal",
				property: "supabase.AuthAdminApi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "supabase:pageGlobal:7",
				kind: "pageGlobal",
				property: "supabase.storageKey",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"postgresql"
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
		id: "superspeed",
		name: "Superspeed",
		website: "https://apps.shopify.com/superspeed-free-speed-boost",
		description: "Superspeed is a page speed optimizer app for Shopify based sites.",
		icon: "Superspeed.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "superspeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("superspeed\\.gadget-edge\\.com"),
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
		id: "sweetalert",
		name: "SweetAlert",
		website: "https://sweetalert.js.org",
		description: "SweetAlert is a JavaScript library that provides alternative alert and modal dialog boxes for web applications, with customisable features, aiming to improve the user interface of the default browser dialogs.",
		icon: "SweetAlert.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sweetalert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sweet(?:-)?alert(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sweetalert2",
		name: "SweetAlert2",
		website: "https://sweetalert2.github.io/",
		description: "SweetAlert2 is a JavaScript library that provides customisable, visually appealing, and responsive alert and modal dialog boxes for web applications.",
		icon: "SweetAlert2.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "sweetalert2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sweetalert2(?:\\.all)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sweetalert2:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/sweetalert2@([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sweetalert2:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("sweetalert2@([\\d.]+)/dist/sweetalert2(?:\\.all)(?:\\.min)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sweetalert2:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("limonte-sweetalert2/([\\d.]+)/sweetalert2(?:\\.all)(?:\\.min)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sweetalert2:pageGlobal:5",
				kind: "pageGlobal",
				property: "Sweetalert2",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "swiffy-slider",
		name: "Swiffy Slider",
		website: "https://swiffyslider.com",
		description: "Swiffy Slider is a wrapper defined in html with slides, navigation and indicators as its children.",
		icon: "Swiffy Slider.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "swiffy-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/swiffy-slider@([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swiffy-slider:dom:1",
				kind: "dom",
				selector: "link[href*='/swiffy-slider.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "swiper",
		name: "Swiper",
		website: "https://swiperjs.com",
		description: "Swiper is a JavaScript library that creates modern touch sliders with hardware-accelerated transitions.",
		icon: "Swiper.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "swiper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swiper(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swiper:dom:1",
				kind: "dom",
				selector: "div[data-swiper-slide-index]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:dom:2",
				kind: "dom",
				selector: "swiper-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:dom:3",
				kind: "dom",
				selector: "swiper-slide",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:dom:4",
				kind: "dom",
				selector: "div.swiper-wrapper",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:dom:5",
				kind: "dom",
				selector: "div.swiper-initialized",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:dom:6",
				kind: "dom",
				selector: "div.swiper-vertical",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swiper:pageGlobal:7",
				kind: "pageGlobal",
				property: "Swiper",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "swup",
		name: "Swup",
		website: "https://swup.js.org",
		description: "Swup is a versatile and expandable library for implementing page transitions on websites that use server-side rendering.",
		icon: "Swup.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "swup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dist\\/)?)?swup(?:-preload)?(?:-plugin)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swup:dom:1",
				kind: "dom",
				selector: "html[class*='swup-enabled']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "swup:pageGlobal:2",
				kind: "pageGlobal",
				property: "Swup",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "syncfusion",
		name: "Syncfusion",
		website: "https://www.syncfusion.com",
		description: "Syncfusion is a JavaScript UI controls library that includes a wide range of UI components in a single package.",
		icon: "Syncfusion.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "syncfusion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.syncfusion\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "syncfusion:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.syncfusion.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "syncfusion:pageGlobal:2",
				kind: "pageGlobal",
				property: "Syncfusion",
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
		id: "taiga",
		name: "Taiga",
		website: "https://taiga.io",
		description: "Taiga is an open-source agile project management software that supports Scrum and Kanban methodologies for cross-functional teams.",
		icon: "Taiga.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "taiga:pageGlobal:0",
				kind: "pageGlobal",
				property: "taigaConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"django",
			"angularjs"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "teamcity",
		name: "TeamCity",
		website: "https://www.jetbrains.com/teamcity/",
		description: "TeamCity is a build management and continuous integration server from JetBrains.",
		icon: "TeamCity.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "teamcity:html:0",
				kind: "html",
				pattern: new RegExp("<span class=\"versionTag\"><span class=\"vWord\">Version</span> ([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "teamcity:dom:1",
				kind: "dom",
				selector: "span[class*='versionTag'], span[class*='vWord']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "teamcity:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("TeamCity"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"apache-tomcat",
			"java",
			"jquery",
			"moment-js",
			"prototype",
			"react",
			"underscore-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "teamlinkt",
		name: "TeamLinkt",
		website: "https://teamlinkt.com",
		description: "Teamlinkt is a software facilitating team management, enabling users to track progress, assign tasks, and coordinate activities.",
		icon: "TeamLinkt.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "teamlinkt:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^TeamLinkt$"),
				description: "Meta tag matches a known technology marker."
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
		id: "thinkstack",
		name: "Thinkstack",
		website: "https://www.thinkstack.ai",
		description: "Thinkstack is a platform that develops custom AI chatbots tailored to specific business requirements.",
		icon: "Thinkstack.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "thinkstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.thinkstack\\.ai/"),
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
		id: "timeago",
		name: "timeago",
		website: "https://timeago.yarp.com/",
		description: "Timeago is a jQuery plugin that makes it easy to support automatically updating fuzzy timestamps.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "timeago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?[Tt]imeago(?:_mkdocs_material)?(?:\\.full)?(?:\\.locales)?(?:\\.native)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "timeago:pageGlobal:1",
				kind: "pageGlobal",
				property: "timeago",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "timeago",
		name: "Timeago",
		website: "https://timeago.yarp.com",
		description: "Timeago is a jQuery plugin that automatically updates fuzzy timestamps.",
		icon: "Timeago.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "timeago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.timeago\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tiny-slider",
		name: "Tiny Slider",
		website: "https://github.com/ganlanyuan/tiny-slider",
		description: "Tiny Slider is a vanilla javascript slider for all purposes.",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "tiny-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d\\.]+)/min/)?tiny-slider(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tinycon",
		name: "Tinycon",
		website: "https://github.com/tommoor/tinycon",
		description: "A library for manipulating a websites favicon.",
		categories: [
			"developer-tooling",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "tinycon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tinycon(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tippy-js",
		name: "Tippy.js",
		website: "https://atomiks.github.io/tippyjs",
		description: "Tippy.js is the complete tooltip, popover, dropdown, and menu solution for the web, powered by Popper.",
		icon: "Tippy.js.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "tippy-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/tippy\\.js(?:@|/)?([\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tippy-js:dom:1",
				kind: "dom",
				selector: "style[data-tippy-stylesheet]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tippy-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "tippy.defaultProps",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tipso",
		name: "Tipso",
		website: "https://tipso.object505.com",
		description: "Tipso is a lightweight, responsive jQuery plugin designed to display customizable tooltips across devices and screen sizes.",
		icon: "Tipso.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "tipso:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/tipso\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tipso:pageGlobal:1",
				kind: "pageGlobal",
				property: "tipsoData.background",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "togetherjs",
		name: "TogetherJS",
		website: "https://togetherjs.com",
		description: "TogetherJS is an open-source JavaScript library by Mozilla that integrates collaboration tools and features into websites.",
		icon: "TogetherJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "togetherjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "TogetherJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "togetherjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "TogetherJSConfig_cloneClicks",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "togetherjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "TogetherJSConfig_toolName",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "trac",
		name: "Trac",
		website: "https://trac.edgewall.org",
		description: "Trac is an enhanced wiki and issue tracking system for software development projects, using a minimalistic approach to web-based software project management.",
		icon: "Trac.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "trac:html:0",
				kind: "html",
				pattern: new RegExp("<a id=\"tracpowered"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "trac:html:1",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^\"]*\"><strong>Trac(?:[ /]([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "trac:dom:2",
				kind: "dom",
				selector: "link[type*='text/x-trac-wiki']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "trac:cookie:3",
				kind: "cookie",
				key: "trac_form_token",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "trac:cookie:4",
				kind: "cookie",
				key: "trac_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tryzens",
		name: "Tryzens",
		website: "https://tryzens.com",
		description: "Tryzens is a digital transformation specialist focused on implementing technology-driven strategies to improve business processes.",
		icon: "Tryzens.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "tryzens:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tryzens-analytics\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tryzens:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tryzens-analytics\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "turbo",
		name: "Turbo",
		website: "https://turbo.hotwired.dev/",
		description: "Turbo is a JavaScript framework for building fast web applications.",
		icon: "Turbo.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "turbo:pageGlobal:0",
				kind: "pageGlobal",
				property: "Turbo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "turbolinks",
		name: "Turbolinks",
		website: "https://github.com/turbolinks/turbolinks",
		description: "Turbolinks is a Rails feature, available as a gem and enabled by default in new Rails apps. It is intended to speed up navigating between pages of your application.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "turbolinks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("turolinks\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "turbolinks:pageGlobal:1",
				kind: "pageGlobal",
				property: "Turbolinks",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "turfjs",
		name: "TurfJS",
		website: "https://turfjs.org/",
		description: "Turf is a modular geospatial engine written in JavaScript.",
		icon: "TurfJS.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "turfjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(turf@[\\d.]+)?/?turf\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "turfjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "turf.feature",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "turfjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "turf.point",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "turfjs:pageGlobal:3",
				kind: "pageGlobal",
				property: "turf.random",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "twitter-typeahead-js",
		name: "Twitter typeahead.js",
		website: "https://twitter.github.io/typeahead.js",
		icon: "Twitter typeahead.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "twitter-typeahead-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:typeahead|bloodhound)\\.(?:jquery|bundle)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "twitter-typeahead-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "typeahead",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "typed-js",
		name: "Typed.js",
		website: "https://mattboldt.com/demos/typed-js/",
		description: "Typed.js is a library that types. It is designed to create typewriter-style animations with ease.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "typed-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("typed(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "typer-js",
		name: "Typer.js",
		website: "https://github.com/straversi/Typer.js",
		description: "Typer.js is a JavaScript library for creating a fully configurable typing effect in HTML.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "typer-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com/typer-dot-js@([\\d\\.]+)/typer\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "typescript",
		name: "TypeScript",
		website: "https://www.typescriptlang.org",
		description: "TypeScript is an open-source language which builds on JavaScript  by adding static type definitions.",
		icon: "TypeScript.svg",
		categories: [
			"developer-tooling",
			"transpiler"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "underscore-js",
		name: "Underscore.js",
		website: "https://underscorejs.org",
		description: "Underscore.js is a JavaScript library which provides utility functions for common programming tasks. It is comparable to features provided by Prototype.js and the Ruby language, but opts for a functional programming design instead of extending object prototypes.",
		icon: "Underscore.js.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "underscore-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("underscore.*\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "underscore-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "_.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "underscore-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "_.restArguments",
				description: "Page-owned global matches a known technology marker."
			}
		],
		excludes: [
			"lodash"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "upptime",
		name: "Upptime",
		website: "https://upptime.js.org",
		description: "Upptime is the open-source uptime monitor and status page, powered entirely by GitHub Actions, Issues, and Pages.",
		icon: "Upptime.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "uppy",
		name: "Uppy",
		website: "https://uppy.io",
		description: "Uppy is an open-source, modular JavaScript file uploader designed for integration and file management across web applications.",
		icon: "Uppy.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "uppy:pageGlobal:0",
				kind: "pageGlobal",
				property: "Uppy.Audio",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "uppy:pageGlobal:1",
				kind: "pageGlobal",
				property: "UppyUploader",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "uptimerobot",
		name: "UptimeRobot",
		website: "https://uptimerobot.com",
		description: "UptimeRobot is a web-based software that is designed to monitor the sites frequently to check whether any site is down owing to server problem or any bug in coding.",
		icon: "UptimeRobot.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "uptimerobot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uptimerobot\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "uptimerobot:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.uptimerobot\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "upvoty",
		name: "Upvoty",
		website: "https://upvoty.com",
		description: "Upvoty is a platform for collecting and managing user feedback and feature requests.",
		icon: "upvoty.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "upvoty:pageGlobal:1",
				kind: "pageGlobal",
				property: "upvoty",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"php"
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
		id: "userreport",
		name: "UserReport",
		website: "https://www.userreport.com",
		description: "UserReport is an online survey and feedback management platform.",
		icon: "UserReport.svg",
		categories: [
			"developer-tooling",
			"surveys-feedback"
		],
		rules: [
			{
				id: "userreport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userreport\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "userreport:dom:1",
				kind: "dom",
				selector: "a[href*='feedback.userreport.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
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
		id: "userrules",
		name: "UserRules",
		website: "https://www.userrules.com",
		icon: "UserRules.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "userrules:pageGlobal:0",
				kind: "pageGlobal",
				property: "_usrp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "usersnap",
		name: "Usersnap",
		website: "https://usersnap.com",
		description: "Usersnap is a user feedback platform for product teams to collect issues, ideas, and surveys, aiding in user testing and product decisions.",
		icon: "Usersnap.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "usersnap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usersnap\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "usersnap:dom:1",
				kind: "dom",
				selector: "link[href*='.usersnap.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "usersnap:pageGlobal:2",
				kind: "pageGlobal",
				property: "onUsersnapCXLoad",
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
		id: "uservoice",
		name: "UserVoice",
		website: "https://uservoice.com",
		description: "UserVoice is a management to collect and analyse feedback from customers.",
		icon: "UserVoice.svg",
		categories: [
			"developer-tooling",
			"surveys-feedback"
		],
		rules: [
			{
				id: "uservoice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uservoice\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "uservoice:pageGlobal:1",
				kind: "pageGlobal",
				property: "UserVoice",
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
		id: "vex",
		name: "Vex",
		website: "https://github.hubspot.com/vex",
		description: "Vex is a lightweight library for creating functional dialogs using vanilla JavaScript without external dependencies.",
		icon: "HubSpot.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "vex:pageGlobal:0",
				kind: "pageGlobal",
				property: "vex.close",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vigil",
		name: "Vigil",
		website: "https://github.com/valeriansaliou/vigil",
		description: "Vigil is a microservices status page. Monitors a distributed infrastructure and sends alerts (Slack, SMS, etc.).",
		icon: "default.svg",
		categories: [
			"developer-tooling"
		],
		rules: [],
		implies: [
			"rust",
			"docker"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "waitforimages",
		name: "waitForImages",
		website: "https://github.com/alexanderdickson/waitForImages",
		description: "waitForImages is a lightweight, high-performance JavaScript library that simplifies the handling of image preloading events.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "waitforimages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:jquery\\.)?)?waitforimages(?:-modded)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "waitforimages:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:jquery\\.)?)?waitforimages(?:-((?:\\d+\\.)+\\d+)-modded)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "web-font-loader",
		name: "Web Font Loader",
		website: "https://github.com/typekit/webfontloader",
		description: "WebFont Loader is a versatile JavaScript library that provides enhanced control and flexibility in managing web fonts.",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "web-font-loader:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?webfontloader(?:\\.min)?(?:[-\\.][\\d\\w]{0,32})?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "web-vitals",
		name: "web-vitals",
		website: "https://github.com/GoogleChrome/web-vitals",
		description: "The web-vitals JavaScript is a tiny, modular library for measuring all the web vitals metrics on real users.",
		icon: "web-vitals.svg",
		categories: [
			"developer-tooling",
			"monitoring-error-tracking",
			"analytics"
		],
		rules: [
			{
				id: "web-vitals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-vitals@([\\d.]+)/dist/web-vitals.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "web-vitals:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("(8999999999999[\\s\\S]+1e12[\\s\\S]+(largest-contentful-paint|first-input|layout-shift)|(largest-contentful-paint|first-input|layout-shift)[\\s\\S]+8999999999999[\\s\\S]+1e12)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "web-vitals:pageGlobal:2",
				kind: "pageGlobal",
				property: "webVitals",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webassembly",
		name: "WebAssembly",
		website: "https://webassembly.org/",
		description: "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.",
		icon: "WebAssembly.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "webassembly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wasm_exec\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webassembly:pageGlobal:1",
				kind: "pageGlobal",
				property: "wasmBinary",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webassembly:pageGlobal:2",
				kind: "pageGlobal",
				property: "wasmBinaryFile",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webassembly:responseHeader:3",
				kind: "responseHeader",
				key: "Content-Type",
				valuePattern: new RegExp("application/wasm"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:webassembly:webassembly:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "website-speedy",
		name: "Website Speedy",
		website: "https://websitespeedy.com/",
		description: "Website Speedy is a tool that improves website speed by identifying and optimizing render-blocking elements, enabling asynchronous resource loading for better performance.",
		icon: "WebsiteSpeedy.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "website-speedy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("websitespeedy\\.com"),
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
		id: "wordpress-project-manager",
		name: "WordPress Project Manager",
		website: "https://wedevs.com/wp-project-manager-pro",
		description: "WordPress Project Manager is an open-source project management tool designed to organize tasks and ensure timely project delivery.",
		icon: "WPProjectManager.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "wordpress-project-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/wedevs-project-manager/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "wurfl",
		name: "Wurfl",
		website: "https://web.wurfl.io/",
		description: "WURFL.js is JavaScript that detects device models of smartphones, tablets, smart TVs and game consoles accessing your website.",
		icon: "Wurfl.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "wurfl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wurfl\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wurfl:pageGlobal:1",
				kind: "pageGlobal",
				property: "WURFL",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "xajax",
		name: "Xajax",
		website: "https://xajax-project.org",
		icon: "Xajax.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "xajax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xajax_core.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:xajax:xajax:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "xregexp",
		name: "XRegExp",
		website: "https://xregexp.com",
		icon: "XRegExp.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "xregexp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xregexp[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xregexp:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d.]+)/xregexp(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xregexp:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("xregexp.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xregexp:pageGlobal:3",
				kind: "pageGlobal",
				property: "XRegExp.version",
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
		id: "xslt",
		name: "XSLT",
		website: "https://www.w3.org/TR/xslt-10",
		description: "XSLT is designed for use as part of XSL, which is a stylesheet language for XML.",
		icon: "W3C.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "xslt:html:0",
				kind: "html",
				pattern: new RegExp("<xsl[^>]* version=\"(.+)\""),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ybug",
		name: "Ybug",
		website: "https://ybug.io",
		description: "Ybug is a visual feedback and bug tracking tool designed for users and clients, enabling identification and reporting of issues.",
		icon: "Ybug.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ybug:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ybug\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ybug:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ybug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ybug:pageGlobal:2",
				kind: "pageGlobal",
				property: "ybug_settings",
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
		id: "yourgpt",
		name: "YourGPT",
		website: "https://yourgpt.ai",
		description: "YourGPT is a platform that provides customizable AI and GPT tools, enabling the integration of large language models for diverse operational needs and supporting more efficient business processes.",
		icon: "YourGPT.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "yourgpt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.yourgpt\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yourgpt:pageGlobal:1",
				kind: "pageGlobal",
				property: "$yourgptChatbot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yourgpt:pageGlobal:2",
				kind: "pageGlobal",
				property: "YOURGPT_WIDGET_UID",
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
		id: "youtrack",
		name: "YouTrack",
		website: "https://www.jetbrains.com/youtrack/",
		description: "YouTrack is a browser-based bug tracker, issue tracking system and project management software.",
		icon: "YouTrack.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "youtrack:html:0",
				kind: "html",
				pattern: new RegExp("no-title=\"YouTrack\">"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "youtrack:html:1",
				kind: "html",
				pattern: new RegExp("data-reactid=\"[^\"]+\">youTrack ([0-9.]+)<"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "youtrack:html:2",
				kind: "html",
				pattern: new RegExp("type=\"application/opensearchdescription\\+xml\" title=\"YouTrack\"/>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "youtrack:dom:3",
				kind: "dom",
				selector: "[no-title='YouTrack'], link[type='application/opensearchdescription+xml'][title='YouTrack']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yui",
		name: "YUI",
		website: "https://clarle.github.io/yui3",
		description: "YUI is a JavaScript and CSS library with more than 30 unique components including low-level DOM utilities and high-level user-interface widgets.",
		icon: "YUI.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "yui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/yui/|yui\\.yahooapis\\.com)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yui:pageGlobal:1",
				kind: "pageGlobal",
				property: "YAHOO.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yui:pageGlobal:2",
				kind: "pageGlobal",
				property: "YUI.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:yahoo:yui:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "zammad",
		name: "Zammad",
		website: "https://zammad.org",
		description: "Zammad is a web-based, open-source support and ticketing system designed for managing user inquiries and organizing customer service workflows.",
		icon: "Zammad.svg",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "zammad:dom:0",
				kind: "dom",
				selector: "script[id*='zammad_form_script']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zepto",
		name: "Zepto",
		website: "https://zeptojs.com",
		icon: "Zepto.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "zepto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zepto.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zepto:pageGlobal:1",
				kind: "pageGlobal",
				property: "Zepto",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ziggy",
		name: "Ziggy",
		website: "https://github.com/tighten/ziggy",
		description: "Ziggy is a library that allows using Laravel named routes in JavaScript.",
		icon: "Ziggy.png",
		categories: [
			"developer-tooling"
		],
		rules: [
			{
				id: "ziggy:pageGlobal:0",
				kind: "pageGlobal",
				property: "Ziggy",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"laravel",
			"inertia-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
