import type { TechnologyDefinition } from '../types';

export const developerToolingTechnologyDefinitions = [
	{
		id: "acquia-cloud-ide",
		name: "Acquia Cloud IDE",
		website: "https://www.acquia.com/products/drupal-cloud/cloud-ide",
		description: "Acquia Cloud IDE is a browser-based source code editor and a Drupal development stack running on the Acquia Cloud Platform.",
		icon: "acquia-cloud-ide.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "acquia-cloud-ide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?:\\/\\/.+\\.web\\.ahdev\\.cloud"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-cloud-ide:url:1",
				kind: "url",
				pattern: new RegExp("https:?\\/\\/.+\\.web\\.ahdev\\.cloud"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"acquia-cloud-platform",
		],
	},
	{
		id: "adobe-flash",
		name: "Adobe Flash",
		website: "https://www.adobe.com/products/flashplayer",
		description: "Adobe Flash is a multimedia software platform used for production of animations, rich web applications and embedded web browser video players.",
		icon: "Adobe Flash.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "adobe-flash:dom:0",
				kind: "dom",
				selector: "object[type='application/x-shockwave-flash']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adobe-flash:dom:1",
				kind: "dom",
				selector: "param[value*='.swf']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:adobe:flash:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "anima",
		name: "Anima",
		website: "https://www.animaapp.com/",
		description: "Anima is an AI-powered tool designed to assist users in converting their designs into functional code, creating interactive prototypes, and streamlining the automation of design systems.",
		icon: "Anima.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "anima:jsGlobal:0",
				kind: "jsGlobal",
				property: "__ANIMA_PROJECT_DATA__",
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
		id: "api-spreadsheets",
		name: "API Spreadsheets",
		website: "https://apispreadsheets.com",
		description: "API Spreadsheets is a developer tool for integrating spreadsheet features into applications, enabling data management, automation, and real-time updates.",
		icon: "APISpreadsheets.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "api-spreadsheets:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.apispreadsheets\\.com"),
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
		id: "apiary",
		name: "Apiary",
		website: "https://apiary.io",
		description: "Apiary is an API design stack that provides tools for designing, testing, and documenting APIs, built specifically to support developers throughout the API development process.",
		icon: "Apiary.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "apiary:jsGlobal:0",
				kind: "jsGlobal",
				property: "Apiary",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apiary:jsGlobal:1",
				kind: "jsGlobal",
				property: "apiaryUserModel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apiary:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Apiary$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "apiary:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^apiary$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "apilayer",
		name: "APILayer",
		website: "https://apilayer.com",
		description: "APILayer is an API marketplace that provides scalable APIs across multiple categories, including artificial intelligence and finance.",
		icon: "APILayer.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "apilayer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.apilayer\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "appifiny",
		name: "Appifiny",
		website: "https://www.appifiny.co.uk",
		description: "Appifiny is a platform that provides a streamlined solution for developing, customizing, and launching apps.",
		icon: "Appifiny.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "appifiny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("recently\\.appifiny\\.io\\/"),
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
		id: "appwrite",
		name: "Appwrite",
		website: "https://appwrite.io",
		description: "Appwrite is an end-to-end backend server for web, mobile or native applications packaged as a set of Docker microservices.",
		icon: "Appwrite.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "appwrite:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("appwrite\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "appwrite:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cloud\\.appwrite\\.io"),
				description: "Observed request URL matches a known technology marker.",
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
			cpe: "cpe:2.3:a:appwrite:appwrite:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "artifactory",
		name: "Artifactory",
		website: "https://jfrog.com/open-source/#os-arti",
		description: "Artifactory is a repository manager for binary artifacts, packages, containers, and build metadata.",
		icon: "Artifactory.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "artifactory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wicket\\/resource\\/org\\.artifactory\\."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "artifactory:html:1",
				kind: "html",
				pattern: new RegExp("<span class=\"version\">Artifactory(?: Pro)?(?: Power Pack)?(?: ([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "artifactory:jsGlobal:2",
				kind: "jsGlobal",
				property: "ArtifactoryUpdates",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "artifactory:html:3",
				kind: "html",
				pattern: new RegExp("<span class=\"version\">artifactory(?: pro)?(?: power pack)?(?: ([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:jfrog:artifactory:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "asana",
		name: "Asana",
		website: "https://asana.com",
		description: "Asana is a web and mobile application designed to help teams organize, track, and manage their work.",
		icon: "Asana.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "asana:dom:0",
				kind: "dom",
				selector: "a[href*='form.asana.com'], a[href*='app.asana.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "askhandle",
		name: "AskHandle",
		website: "https://www.askhandle.com",
		description: "AskHandle is a platform that enables the creation of custom AI agents in minutes using user data and requirements, without requiring coding.",
		icon: "AskHandle.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "askhandle:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("dashboard\\.askhandle\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "atarim",
		name: "Atarim",
		website: "https://atarim.io",
		description: "Atarim is an AI-based platform that enhances websites through an agentic creative system covering design, UX, SEO, copywriting, accessibility, and related optimization tasks.",
		icon: "Atarim.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "atarim:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.atarimworker\\.dev"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "atarim:jsGlobal:1",
				kind: "jsGlobal",
				property: "ATARIM.file",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "atarim:jsGlobal:2",
				kind: "jsGlobal",
				property: "atarimUI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "atarim:jsGlobal:3",
				kind: "jsGlobal",
				property: "atarim_server_down",
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
		id: "atlassian-bitbucket",
		name: "Atlassian Bitbucket",
		website: "https://www.atlassian.com/software/bitbucket/overview/",
		description: "Bitbucket is a web-based version control repository hosting service for source code and development projects that use either Mercurial or Git revision control systems.",
		icon: "Atlassian Bitbucket.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "atlassian-bitbucket:html:0",
				kind: "html",
				pattern: new RegExp("<li>Atlassian Bitbucket <span title=\"[a-z0-9]+\" id=\"product-version\" data-commitid=\"[a-z0-9]+\" data-system-build-number=\"[a-z0-9]+\"> v([\\d.]+)<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "atlassian-bitbucket:jsGlobal:1",
				kind: "jsGlobal",
				property: "bitbucket",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "atlassian-bitbucket:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("Bitbucket", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "atlassian-bitbucket:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("com\\.atlassian\\.bitbucket"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "atlassian-bitbucket:html:4",
				kind: "html",
				pattern: new RegExp("<li>atlassian bitbucket <span title=\"[a-z0-9]+\" id=\"product-version\" data-commitid=\"[a-z0-9]+\" data-system-build-number=\"[a-z0-9]+\"> v([\\d.]+)<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "atlassian-bitbucket:meta:5",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("bitbucket", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:atlassian:bitbucket:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "atlassian-fisheye",
		name: "Atlassian FishEye",
		website: "https://www.atlassian.com/software/fisheye/overview/",
		icon: "Atlassian FishEye.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "atlassian-fisheye:html:0",
				kind: "html",
				pattern: new RegExp("<title>(?:Log in to )?FishEye (?:and Crucible )?([\\d.]+)?<\\/title>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "atlassian-fisheye:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^FESESSIONID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "atlassian-fisheye:html:2",
				kind: "html",
				pattern: new RegExp("<title>(?:log in to )?fisheye (?:and crucible )?([\\d.]+)?<\\/title>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "atlassian-fisheye:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^fesessionid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:atlassian:fisheye:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "atlassian-jira",
		name: "Atlassian Jira",
		website: "https://www.atlassian.com/software/jira",
		description: "Jira is Atlassian's issue tracking and project management platform for software and business teams.",
		icon: "Atlassian Jira.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "atlassian-jira:dom:0",
				kind: "dom",
				selector: "#jira",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "atlassian-jira:jsGlobal:1",
				kind: "jsGlobal",
				property: "jira.id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "atlassian-jira:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("JIRA", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "atlassian-jira:meta:3",
				kind: "meta",
				key: "data-version",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				confidence: 0,
				version: {
					source: "match",
					template: "$1\\",
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "atlassian-jira:meta:4",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("jira", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:atlassian:jira:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "atlassian-jira-issue-collector",
		name: "Atlassian Jira Issue Collector",
		website: "https://www.atlassian.com/software/jira/overview/",
		description: "Atlassian Jira Issue Collector is a tool used to download a list of websites using with email addresses, phone numbers and LinkedIn profiles.",
		icon: "Atlassian Jira.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "atlassian-jira-issue-collector:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jira-issue-collector-plugin"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "atlassian-jira-issue-collector:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("atlassian\\.jira\\.collector\\.plugin"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "atlassian-statuspage",
		name: "Atlassian Statuspage",
		website: "https://www.atlassian.com/software/statuspage",
		description: "Statuspage is a status and incident communication tool.",
		icon: "Atlassian Statuspage.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "atlassian-statuspage:html:0",
				kind: "html",
				pattern: new RegExp("<a[^>]*href=\"https?:\\/\\/(?:www\\.)?statuspage\\.io\\/powered-by[^>]+>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "atlassian-statuspage:dns:1",
				kind: "dns",
				valuePattern: new RegExp("status-page-domain-verification=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "better-stack",
		name: "Better Stack",
		website: "https://betterstack.com/uptime",
		description: "Better Stack is the all-in-one infrastructure monitoring platform for your incident management, uptime monitoring, and status pages.",
		icon: "Better Stack.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "better-stack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/(?:uptime\\.)?(?:betteruptime|betterstack)\\.com\\/"),
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
		id: "better-uptime",
		name: "Better Uptime",
		website: "https://betterstack.com/better-uptime",
		description: "Better Uptime is the all-in-one infrastructure monitoring platform for your incident management, uptime monitoring, and status pages.",
		icon: "Better Uptime.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "better-uptime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/betteruptime\\.com\\/"),
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
		id: "betty-blocks",
		name: "Betty Blocks",
		website: "https://www.bettyblocks.com",
		description: "Betty Blocks is a cloud-based application development solution featuring a no-code, drag-and-drop interface for developing business applications.",
		icon: "Betty Blocks.svg",
		categories: [
			"developer-tooling",
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "betty-blocks:meta:0",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^Made with Betty Blocks$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "betty-blocks:meta:1",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^made with betty blocks$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"react",
		],
	},
	{
		id: "bugherd",
		name: "BugHerd",
		website: "https://bugherd.com",
		description: "BugHerd is a cloud-based feedback collection and bug management tool.",
		icon: "BugHerd.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "bugherd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bugherd\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bugherd:jsGlobal:1",
				kind: "jsGlobal",
				property: "BugHerdConfig",
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
		id: "buglog",
		name: "Buglog",
		website: "https://buglog.com",
		description: "Buglog is a tool for creating and sharing bug reports in real-time directly from the browser.",
		icon: "Buglog.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "buglog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.buglog\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buglog:jsGlobal:1",
				kind: "jsGlobal",
				property: "buglog",
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
		id: "bugzilla",
		name: "Bugzilla",
		website: "https://www.bugzilla.org",
		description: "Bugzilla is an open-source bug and issue tracking system.",
		icon: "Bugzilla.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "bugzilla:html:0",
				kind: "html",
				pattern: new RegExp("href=\"enter_bug\\.cgi\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "bugzilla:html:1",
				kind: "html",
				pattern: new RegExp("<main id=\"bugzilla-body\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "bugzilla:html:2",
				kind: "html",
				pattern: new RegExp("<a href=\"https?:\\/\\/www\\.bugzilla\\.org\\/docs\\/([0-9.]+)\\/[^>]+>Help<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "bugzilla:html:3",
				kind: "html",
				pattern: new RegExp("<span id=\"information\" class=\"header_addl_info\">version ([\\d.]+)<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "bugzilla:jsGlobal:4",
				kind: "jsGlobal",
				property: "BUGZILLA",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bugzilla:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^Bugzilla_login_request_cookie$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "bugzilla:meta:6",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Bugzilla ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "bugzilla:dom:7",
				kind: "dom",
				selector: "main[id*='bugzilla-body']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bugzilla:dom:8",
				kind: "dom",
				selector: "span[id*='information'][class*='header_addl_info']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bugzilla:html:9",
				kind: "html",
				pattern: new RegExp("<a href=\"https?:\\/\\/www\\.bugzilla\\.org\\/docs\\/([0-9.]+)\\/[^>]+>help<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "bugzilla:cookie:10",
				kind: "cookie",
				keyPattern: new RegExp("^bugzilla_login_request_cookie$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "bugzilla:meta:11",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("bugzilla ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "bugzilla:dom:12",
				kind: "dom",
				selector: "main[id*='bugzilla-body'], span[id*='information'][class*='header_addl_info']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mozilla:bugzilla:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "bun",
		name: "bun",
		website: "https://bun.sh",
		description: "Bun is a fast JavaScript runtime compatible with Node.js and Deno.",
		icon: "bun.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "bun:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Bun", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bun:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("bun", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "c",
		name: "C",
		website: "https://www.open-std.org/jtc1/sc22/wg14/",
		description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
		icon: "C.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "c:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^C$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cachet",
		name: "Cachet",
		website: "https://cachethq.io",
		description: "Cachet is the free and open-source status page for your API, service or company.",
		icon: "Cachet.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "cachet:jsGlobal:0",
				kind: "jsGlobal",
				property: "Cachet.Notifier",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:all-three:cachet:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "canny",
		name: "Canny",
		website: "https://canny.io",
		description: "Canny is a cloud-based solution that helps small to large businesses collect, analyse, prioritise and track user feedback to make informed product decisions.",
		icon: "Canny.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "canny:dom:0",
				kind: "dom",
				selector: "a[href*='.canny.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "canny:jsGlobal:1",
				kind: "jsGlobal",
				property: "Canny",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "canny:header:2",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\/\\/canny\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "canny:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\/\\/canny\\.io", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "canyon",
		name: "Canyon",
		website: "https://docs.canyonjs.io",
		description: "Canyon is a tool that enables JavaScript coverage collection and real-time report generation through Babel configuration, addressing coverage-gathering challenges in end-to-end testing.",
		icon: "Canyon.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "canyon:jsGlobal:0",
				kind: "jsGlobal",
				property: "__coverage__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "canyon:jsGlobal:1",
				kind: "jsGlobal",
				property: "canyonShowDecorations",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "cfml",
		name: "CFML",
		website: "https://adobe.com/products/coldfusion-family.html",
		description: "ColdFusion Markup Language (CFML), is a scripting language for web development that runs on the JVM, the .NET framework, and Google App Engine.",
		icon: "CFML.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "cfml:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^CFID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "checkly",
		name: "Checkly",
		website: "https://www.checklyhq.com",
		description: "Checkly is the API and E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.",
		icon: "Checkly.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "checkly:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.checklyhq\\.com\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "checkly:jsGlobal:1",
				kind: "jsGlobal",
				property: "__NUXT__.config.public.apiUrl",
				valuePattern: new RegExp("api\\.checklyhq\\.com"),
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
		requires: [
			"nuxt-js",
		],
	},
	{
		id: "cheerpj",
		name: "CheerPJ",
		website: "https://cheerpj.com",
		description: "CheerpJ is a WebAssembly-based Java Virtual Machine and OpenJDK distribution designed to run Java applications in modern browsers.",
		icon: "CheerPJ.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "cheerpj:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cheerpj\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "cheerpj:jsGlobal:1",
				kind: "jsGlobal",
				property: "CheerpJDataFolder",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cheerpj:jsGlobal:2",
				kind: "jsGlobal",
				property: "CheerpJDevFolder",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cheerpj:jsGlobal:3",
				kind: "jsGlobal",
				property: "CheerpJWebFolder",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "clarifai",
		name: "Clarifai",
		website: "https://www.clarifai.com",
		description: "Clarifai is a unified platform that enables creation and management of AI workloads while optimizing compute costs across preferred environments.",
		icon: "Clarifai.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "clarifai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.clarifai\\.com"),
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
		id: "clickonce",
		name: "ClickOnce",
		website: "https://learn.microsoft.com/en-us/visualstudio/deployment/clickonce-security-and-deployment",
		description: "ClickOnce is a Microsoft .NET deployment technology that enables the creation of self-updating Windows-based applications that can be installed and run with minimal user interaction.",
		icon: "default.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "clickonce:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.ClickOnceInfoText"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "clickonce:dom:1",
				kind: "dom",
				selector: "a[href='https://go.microsoft.com/fwlink/?LinkId=154571']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "clickonce:text:2",
				kind: "text",
				pattern: new RegExp("ClickOnce and .NET Framework Resources"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "clockwork",
		name: "Clockwork",
		website: "https://github.com/underground-works/clockwork-app",
		description: "Clockwork is a development tool for PHP available right in your browser.",
		icon: "default.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "clockwork:header:0",
				kind: "header",
				key: "x-clockwork-version",
				valuePattern: new RegExp("^([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"php",
		],
	},
	{
		id: "code-climate",
		name: "Code Climate",
		website: "https://codeclimate.com",
		description: "Code Climate is a platform that enhances code quality and efficiency.",
		icon: "CodeClimate.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "code-climate:dom:0",
				kind: "dom",
				selector: "a[href*='codeclimate.com'] > img[src*='api.codeclimate.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "combodo-itop",
		name: "Combodo iTop",
		website: "https://www.combodo.com/itop-193",
		description: "Combodo iTop is an open-source IT service management (ITSM) and IT operations management (ITOM) platform developed by Combodo, a software company based in France.",
		icon: "Combodo iTop.svg",
		categories: [
			"developer-tooling",
			"widgets-misc",
		],
		rules: [
			{
				id: "combodo-itop:dom:0",
				kind: "dom",
				selector: "a[href*='combodo.com/itop'] > img",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "conduit",
		name: "Conduit",
		website: "https://conduit.io",
		description: "Conduit is a data integration tool designed to synchronize production systems through an extensible, event-first approach with minimal dependencies for integration into existing workflows.",
		icon: "Conduit.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "conduit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.conduit\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:conduit:conduit:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "construct-3",
		name: "Construct 3",
		website: "https://www.construct.net/",
		description: "Construct 3 is a browser-based game development platform that enables the creation of 2D games using a visual, drag-and-drop interface without requiring programming knowledge.",
		icon: "Construct3.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "construct-3:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Construct 3$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "construct-3:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^construct 3$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "cssuseragent",
		name: "CssUserAgent",
		website: "https://cssuseragent.org",
		description: "CssUserAgent is a tool that applies special CSS classes to web pages, allowing conditional styling based on user agent, browser, device, or environment.",
		icon: "CssUserAgent.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "cssuseragent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/cssua\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cstate",
		name: "cState",
		website: "https://github.com/cstate/cstate",
		description: "cState is an open-source static (serverless) status page.",
		icon: "cState.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "cstate:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("cState v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cstate:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("cstate v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "dart",
		name: "Dart",
		website: "https://dart.dev",
		description: "Dart is an open-source, general-purpose, object-oriented programming language developed by Google.",
		icon: "Dart.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "dart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:\\.)?(?:dart)(?:\\.js)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dart:jsGlobal:1",
				kind: "jsGlobal",
				property: "$__dart_deferred_initializers__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dart:jsGlobal:2",
				kind: "jsGlobal",
				property: "___dart__$dart_dartObject_ZxYxX_0_",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dart:jsGlobal:3",
				kind: "jsGlobal",
				property: "___dart_dispatch_record_ZxYxX_0_",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dart:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^DARTSESSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "devblox-hub",
		name: "DevBlox Hub",
		website: "https://www.devbloxhub.com",
		description: "DevBlox is a Roblox asset marketplace for developers offering scripts and models, with an emphasis on curated, secure assets for game development.",
		icon: "DevBloxHub.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "devblox-hub:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("devbloxhub\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "developing-azerbaijan",
		name: "Developing Azerbaijan",
		website: "https://www.developing.az/",
		description: "Developing Azerbaijan is a provider of services including website creation, optimization, technical support, and hosting.",
		icon: "DevelopingAzerbaijan.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "developing-azerbaijan:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Developing.az", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "developing-azerbaijan:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("developing.az", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dimml",
		name: "Dimml",
		website: "https://www.dimml.io",
		description: "Dimml is a data flow management software.",
		icon: "Dimml.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "dimml:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dimml\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "dragon",
		name: "Dragon",
		website: "https://dragon-lang.org",
		description: "Dragon is a general-purpose programming language.",
		icon: "Dragon.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "dragon:url:0",
				kind: "url",
				pattern: new RegExp("^.*(?:\\.dgn)$"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "dragon:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Dragon Native ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dragon:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("dragon native ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"apache-http-server",
		],
	},
	{
		id: "easyengine",
		name: "EasyEngine",
		website: "https://easyengine.io",
		description: "EasyEngine is a command-line tool for the Nginx web servers to manage WordPress sites that are running on the LEMP Stack.",
		icon: "EasyEngine.png",
		categories: [
			"developer-tooling",
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "easyengine:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^EasyEngine (.*)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "easyengine:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^easyengine (.*)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"docker",
		],
	},
	{
		id: "elixir",
		name: "Elixir",
		website: "https://elixir-lang.org",
		description: "Elixir is a dynamic, functional language designed for building scalable and maintainable applications.",
		icon: "Elixir.svg",
		categories: [
			"developer-tooling",
		],
		rules: [],
		metadata: {
			oss: true,
		},
		implies: [
			"erlang",
		],
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
		],
		rules: [
			{
				id: "elm:jsGlobal:0",
				kind: "jsGlobal",
				property: "Elm.Main.embed",
				version: {
					source: "match",
					template: "0.18",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "elm:jsGlobal:1",
				kind: "jsGlobal",
				property: "Elm.Main.init",
				version: {
					source: "match",
					template: "0.19",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "elm:jsGlobal:2",
				kind: "jsGlobal",
				property: "Elm",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "erlang",
		name: "Erlang",
		website: "https://www.erlang.org",
		description: "Erlang is a general-purpose, concurrent, functional programming language, and a garbage-collected runtime system.",
		icon: "Erlang.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "erlang:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Erlang( OTP\\/(?:[\\d.ABR-]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "erlang:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Erlang(?: OTP\\/([\\d.ABR-]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "erlang:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("erlang( otp\\/(?:[\\d.abr-]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:erlang:erlang%2fotp:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "famous-ai",
		name: "Famous.ai",
		website: "https://famous.ai",
		description: "Famous.ai is a platform that transforms written concepts into functional mobile or web applications using artificial intelligence.",
		icon: "FamousAI.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "famous-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.famous\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "faveo",
		name: "Faveo",
		website: "https://faveohelpdesk.com",
		description: "Faveo is an open source help desk system and ticket management tool that enables tracking, assignment, and resolution of support tickets.",
		icon: "Faveo.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "faveo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/lb-faveo\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "faveo:dom:1",
				kind: "dom",
				selector: "link[href*='/lb-faveo/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"mid",
				"onetime",
				"poa",
				"recurring",
			],
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "feedback-fish",
		name: "Feedback Fish",
		website: "https://feedback.fish",
		description: "Feedback Fish is a widget for collecting website feedback from users.",
		icon: "feedback-fish.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "feedback-fish:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https:\\/\\/feedback\\.fish\\/ff\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "feednami",
		name: "Feednami",
		website: "https://toolkit.sekando.com/docs/en/feednami",
		description: "Feednami is a web service developed as a replacement for the discontinued Google Feed API, enabling applications to access and parse RSS and Atom feeds.",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "feednami:jsGlobal:0",
				kind: "jsGlobal",
				property: "feednami.load",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "feednami:jsGlobal:1",
				kind: "jsGlobal",
				property: "feednami.promiseLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "filamentphp",
		name: "Filamentphp",
		website: "https://filamentphp.com",
		description: "Filamentphp is a set of full-stack components designed to serve as a foundational starting point for developing applications.",
		icon: "Filament.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "filamentphp:jsGlobal:0",
				kind: "jsGlobal",
				property: "FilamentNotification",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "filamentphp:jsGlobal:1",
				kind: "jsGlobal",
				property: "filamentData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "filamentphp:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkfilament",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fixer",
		name: "Fixer",
		website: "https://fixer.io",
		description: "Fixer is a lightweight JSON API that provides current and historical foreign exchange rates and supports currency conversion.",
		icon: "Fixer.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "fixer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.fixer\\.io\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flyspray",
		name: "Flyspray",
		website: "https://flyspray.org",
		description: "Flyspray is a web-based bug tracking system.",
		icon: "Flyspray.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "flyspray:html:0",
				kind: "html",
				pattern: new RegExp("(?:<a[^>]+>Powered by Flyspray|<map id=\"projectsearchform)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "flyspray:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^flyspray_project$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "flyspray:dom:2",
				kind: "dom",
				selector: "map#projectsearchform",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "flyspray:html:3",
				kind: "html",
				pattern: new RegExp("(?:<a[^>]+>powered by flyspray|<map id=\"projectsearchform)"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:flyspray:flyspray:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "forgejo",
		name: "Forgejo",
		website: "https://forgejo.org",
		description: "Forgejo is a community-driven fork of Gitea that provides a self-hosted Git service with enhancements in governance, transparency, and long-term sustainability.",
		icon: "Forgejo.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "forgejo:dom:0",
				kind: "dom",
				selector: "link[href*='/theme-forgejo-auto.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "forgejo:jsGlobal:1",
				kind: "jsGlobal",
				property: "window.config.assetVersionEncoded",
				valuePattern: new RegExp("([\\d.]+).+gitea-[\\d.]+"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "forgejo:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Forgejo – Beyond coding\\. We forge\\.", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "forgejo:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("forgejo – beyond coding\\. we forge\\.", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			cpe: "cpe:2.3:a:forgejo:forgejo:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
			"jquery",
			"pwa",
			"rss",
		],
	},
	{
		id: "formwise",
		name: "FormWise",
		website: "https://www.formwise.ai",
		description: "FormWise is a platform that enables the creation of white-label AI tools using ChatGPT prompts for customizable applications across industries.",
		icon: "FormWise.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "formwise:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.formwise\\.ai"),
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
		id: "gamma",
		name: "Gamma",
		website: "https://gamma.app",
		description: "Gamma is an AI-powered platform for creating presentations, documents, and websites without requiring design or coding skills.",
		icon: "Gamma.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gamma:jsGlobal:0",
				kind: "jsGlobal",
				property: "gammaSiteAnimationsInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gamma:jsGlobal:1",
				kind: "jsGlobal",
				property: "gammaTiming",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gamma:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^gamma_visitor_id$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "genexus",
		name: "GeneXus",
		website: "https://www.genexus.com/",
		description: "GeneXus is a low-code development platform for building business applications.",
		icon: "GeneXus.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "genexus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/gxgral\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genexus:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/gxtimezone\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genexus:html:2",
				kind: "html",
				pattern: new RegExp("<link[^>]+?id=\"gxtheme_css_reference\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "genexus:jsGlobal:3",
				kind: "jsGlobal",
				property: "gx.gxVersion",
				valuePattern: new RegExp("^(.+)-.*$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "genexus:dom:4",
				kind: "dom",
				selector: "link[id^='gxtheme_css_reference']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "genexus:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/(gxgral|gxtimezone)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "genezio",
		name: "genezio",
		website: "https://genez.io",
		description: "Genezio is a code generation tool that facilitates app logic focus, organises backend API code in deployable classes, autogenerates class interfaces with JSON-RPC for typesafe API calls, supports REST and Webhooks, enables simple API code deployment on pre-configured infrastructure using a shell command, and provides an SDK that eliminates the need to handle URLs, headers.",
		icon: "genezio.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "genezio:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^genezio$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "genezio:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^genezio$", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "gerrit",
		name: "Gerrit",
		website: "https://www.gerritcodereview.com",
		description: "Gerrit is a web-based code review system for Git repositories.",
		icon: "gerrit.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gerrit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^gerrit_ui\\/gerrit_ui"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gerrit:html:1",
				kind: "html",
				pattern: new RegExp(">Gerrit Code Review<\\/a>\\s*\"\\s*\\(([0-9.]+)\\)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gerrit:html:2",
				kind: "html",
				pattern: new RegExp("<(?:div|style) id=\"gerrit_"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gerrit:jsGlobal:3",
				kind: "jsGlobal",
				property: "Gerrit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gerrit:jsGlobal:4",
				kind: "jsGlobal",
				property: "gerrit_ui",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gerrit:meta:5",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Gerrit Code Review$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gerrit:html:6",
				kind: "html",
				pattern: new RegExp(">gerrit code review<\\/a>\\s*\"\\s*\\(([0-9.]+)\\)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gerrit:meta:7",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^gerrit code review$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:google:gerrit:*:*:*:*:*:*:*:*",
		},
		implies: [
			"git",
			"java",
		],
	},
	{
		id: "get-satisfaction",
		name: "Get Satisfaction",
		website: "https://getsatisfaction.com/corp/",
		icon: "Get Satisfaction.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "get-satisfaction:jsGlobal:0",
				kind: "jsGlobal",
				property: "GSFN",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "getfeedback",
		name: "GetFeedback",
		website: "https://www.getfeedback.com",
		description: "GetFeedback (formerly Usabilla) is a user feedback solution for collecting qualitative and quantitative user feedback across digital channels including websites, apps and emails.",
		icon: "GetFeedback.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "getfeedback:jsGlobal:0",
				kind: "jsGlobal",
				property: "usabilla_live",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "git",
		name: "git",
		website: "https://git-scm.com",
		icon: "git.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "git:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("\\bgit\\/([\\d.]+\\d)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:git-scm:git:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "gitea",
		name: "Gitea",
		website: "https://gitea.io",
		description: "Gitea is an open-source forge software package for hosting software development version control using Git as well as other collaborative features like bug tracking, wikis and code review. It supports self-hosting but also provides a free public first-party instance hosted on DiDi's cloud.",
		icon: "gitea.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitea:html:0",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© Gitea Version: ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitea:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^i_like_gitea$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "gitea:meta:2",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("^go,git,self-hosted,gitea$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gitea:jsGlobal:3",
				kind: "jsGlobal",
				property: "window.config.assetVersionEncoded",
				valuePattern: new RegExp(".+-gitea-([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitea:html:4",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© gitea version: ([\\d.]+)"),
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
			cpe: "cpe:2.3:a:gitea:gitea:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
		],
	},
	{
		id: "gitiles",
		name: "Gitiles",
		website: "https://gerrit.googlesource.com/gitiles/",
		description: "Gitiles is a web interface for browsing Git repositories.",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitiles:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"https:\\/\\/gerrit\\.googlesource\\.com\\/gitiles\\/\">Gitiles<"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitiles:html:1",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"https:\\/\\/gerrit\\.googlesource\\.com\\/gitiles\\/\">gitiles<"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitiles:dom:2",
				kind: "dom",
				selector: ".Footer-poweredBy a[href='https://gerrit.googlesource.com/gitiles/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"git",
			"java",
		],
	},
	{
		id: "gitlab",
		name: "GitLab",
		website: "https://about.gitlab.com",
		description: "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features, using an open-source license.",
		icon: "GitLab.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitlab:html:0",
				kind: "html",
				pattern: new RegExp("<meta content=\"https?:\\/\\/[^/]+\\/assets\\/gitlab_logo-"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitlab:html:1",
				kind: "html",
				pattern: new RegExp("<header class=\"navbar navbar-fixed-top navbar-gitlab with-horizontal-nav\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitlab:jsGlobal:2",
				kind: "jsGlobal",
				property: "GitLab",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitlab:jsGlobal:3",
				kind: "jsGlobal",
				property: "gl.dashboardOptions",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitlab:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^_gitlab_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "gitlab:meta:5",
				kind: "meta",
				key: "og:site_name",
				valuePattern: new RegExp("^GitLab$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gitlab:meta:6",
				kind: "meta",
				key: "og:site_name",
				valuePattern: new RegExp("^gitlab$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:gitlab:gitlab:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby-on-rails",
			"vue-js",
		],
	},
	{
		id: "gitlab-ci-cd",
		name: "GitLab CI/CD",
		website: "https://about.gitlab.com/gitlab-ci",
		description: "GitLab CI/CD is GitLab's built-in continuous integration and delivery system.",
		icon: "GitLab CI.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitlab-ci-cd:meta:0",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("GitLab CI\\/CD is a tool built into GitLab for software development through continuous methodologies.", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gitlab-ci-cd:meta:1",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("gitlab ci\\/cd is a tool built into gitlab for software development through continuous methodologies.", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"ruby-on-rails",
		],
	},
	{
		id: "gitlist",
		name: "gitlist",
		website: "https://gitlist.org",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitlist:html:0",
				kind: "html",
				pattern: new RegExp("<p>Powered by <a[^>]+>GitList ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitlist:html:1",
				kind: "html",
				pattern: new RegExp("<p>powered by <a[^>]+>gitlist ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:gitlist:gitlist:*:*:*:*:*:*:*:*",
		},
		implies: [
			"git",
			"php",
		],
	},
	{
		id: "gitweb",
		name: "gitweb",
		website: "https://git-scm.com",
		icon: "git.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gitweb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\/gitweb\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gitweb:html:1",
				kind: "html",
				pattern: new RegExp("<!-- git web interface version ([\\d.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gitweb:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("gitweb(?:\\/([\\d.]+\\d))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"git",
			"perl",
		],
	},
	{
		id: "glitchtip",
		name: "GlitchTip",
		website: "https://glitchtip.com",
		description: "GlitchTip is an open-source platform for error tracking, monitoring errors, performance, and uptime.",
		icon: "GlitchTip.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "glitchtip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.glitchtip\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "glitchtip:dom:1",
				kind: "dom",
				selector: "gt-root + noscript",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "go",
		name: "Go",
		website: "https://golang.org",
		description: "Go is an open source high-level programming language.",
		icon: "Go.svg",
		categories: [
			"developer-tooling",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:golang:go:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "gogs",
		name: "Gogs",
		website: "https://gogs.io",
		description: "Gogs is a self-hosted Git service written in Go.",
		icon: "gogs.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "gogs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/gogs\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gogs:html:1",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© \\d{4} Gogs Version: ([\\d.]+) Page:"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gogs:html:2",
				kind: "html",
				pattern: new RegExp("<button class=\"ui basic clone button\" id=\"repo-clone-ssh\" data-link=\"gogs@"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gogs:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^i_like_gogits$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "gogs:meta:4",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("go, git, self-hosted, gogs", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gogs:html:5",
				kind: "html",
				pattern: new RegExp("<div class=\"ui left\">\\n\\s+© \\d{4} gogs version: ([\\d.]+) page:"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:gogs:gogs:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
			"macaron",
		],
	},
	{
		id: "grain-harvest",
		name: "Grain Harvest",
		website: "https://graindata.com",
		description: "Grain Harvest is an online platform that provides data science tools and resources for professionals and learners in the field.",
		icon: "GrainData.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "grain-harvest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.harvest\\.graindata\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "graphql",
		name: "GraphQL",
		website: "https://graphql.org",
		description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
		icon: "GraphQL.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "graphql:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("graphql\\.[\\w]+\\.(?:com|net)\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "graphql:meta:1",
				kind: "meta",
				key: "store-config",
				valuePattern: new RegExp("graphqlMethod", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "graphql:meta:2",
				kind: "meta",
				key: "store-config",
				valuePattern: new RegExp("graphqlmethod", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:graphql:graphql:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "haskell",
		name: "Haskell",
		website: "https://wiki.haskell.org/Haskell",
		icon: "Haskell.png",
		categories: [
			"developer-tooling",
		],
		rules: [],
	},
	{
		id: "help-scout",
		name: "Help Scout",
		website: "https://www.helpscout.com",
		description: "Help Scout is a customer service platform including email, a knowledge base tool and live chat.",
		icon: "Help Scout.svg",
		categories: [
			"developer-tooling",
			"email-messaging",
		],
		rules: [
			{
				id: "help-scout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helpscout\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "help-scout:jsGlobal:1",
				kind: "jsGlobal",
				property: "__onBeaconDestroy",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "help-scout:jsGlobal:2",
				kind: "jsGlobal",
				property: "beaconStore",
				confidence: 25,
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
		id: "hetrixtools",
		name: "HetrixTools",
		website: "https://hetrixtools.com",
		description: "HetrixTools is an uptime and blacklist monitoring platform.",
		icon: "HetrixTools.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "hetrixtools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hetrixtools\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hetrixtools:jsGlobal:1",
				kind: "jsGlobal",
				property: "htoolz",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hetrixtools:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.hetrixtools\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "hexia",
		name: "Hexia",
		website: "https://sdk.hexia.io",
		description: "Hexia is a public Application Programming Interface (API) provided by Hex Technologies for accessing its services and data.",
		icon: "Hexia.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "hexia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.hexia\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hexia:jsGlobal:1",
				kind: "jsGlobal",
				property: "hexia.address",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "honeybadger",
		name: "Honeybadger",
		website: "https://www.honeybadger.io",
		description: "Honeybadger provides exception and uptime monitoring to keep your web apps error-free.",
		icon: "honey-badger.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "honeybadger:jsGlobal:0",
				kind: "jsGlobal",
				property: "Honeybadger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "honeybadger:jsGlobal:1",
				kind: "jsGlobal",
				property: "initHoneyBadger",
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
		id: "hund-io",
		name: "Hund.io",
		website: "https://hund.io",
		description: "Hund.io is an automated status pages with monitoring.",
		icon: "Hund.io.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "hund-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hund\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hund-io:dom:1",
				kind: "dom",
				selector: "link[href*='hund-client-logos']",
				description: "DOM selector matches a known technology marker.",
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
		id: "imba",
		name: "Imba",
		website: "https://imba.io",
		description: "Imba is a Web programming language that compiles to performant JavaScript, providing language-level support for defining, extending, subclassing, and instantiating.",
		icon: "Imba.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "imba:jsGlobal:0",
				kind: "jsGlobal",
				property: "Imba",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imba:jsGlobal:1",
				kind: "jsGlobal",
				property: "Imba.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imba:jsGlobal:2",
				kind: "jsGlobal",
				property: "imba",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "incident-io",
		name: "Incident.io",
		website: "https://incident.io",
		description: "Incident.io is a Slack-integrated incident management tool used to announce, manage, and resolve all incidents in a single channel.",
		icon: "Incident.io.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "incident-io:header:0",
				kind: "header",
				key: "x-webkit-csp",
				valuePattern: new RegExp("incident-io-team\\.vercel\\.app", "i"),
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
		id: "infinity",
		name: "Infinity",
		website: "https://startinfinity.com",
		description: "Infinity is an all-in-one workspace that allows project organization, task tracking, and team collaboration in a centralized platform.",
		icon: "Infinity.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "infinity:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.startinfinity\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "infinity:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.startinfinity.com/']",
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
		id: "instatus",
		name: "Instatus",
		website: "https://instatus.com",
		description: "Instatus is a status and incident communication tool.",
		icon: "Instatus.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "instatus:dom:0",
				kind: "dom",
				selector: "a[href*='instatus.com'][target='_blank'], iframe[src*='.instatus.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "instatus:dom:1",
				kind: "dom",
				selector: "a.footer__link",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "instatus:text:2",
				kind: "text",
				pattern: new RegExp("Powered by Instatus"),
				description: "Page text contains a known technology marker.",
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
		id: "intervo",
		name: "Intervo",
		website: "https://intervo.ai",
		description: "Intervo is a platform for building and managing enterprise-grade voice agents at scale, enabling reliable voice automation, system integration, and deployment across large organizations.",
		icon: "Intervo.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "intervo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.intervo\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intervo:jsGlobal:1",
				kind: "jsGlobal",
				property: "IntervoWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "java",
		name: "Java",
		website: "https://java.com",
		description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
		icon: "Java.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "java:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^JSESSIONID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "java:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^jsessionid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:oracle:jre:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "jenkins",
		name: "Jenkins",
		website: "https://jenkins.io/",
		description: "Jenkins is an open-source automation tool written in Java with plugins built for Continuous Integration (CI) purposes.",
		icon: "Jenkins.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "jenkins:html:0",
				kind: "html",
				pattern: new RegExp("<span class=\"jenkins_ver\"><a href=\"https:\\/\\/jenkins\\.io\\/\">Jenkins ver\\. ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "jenkins:jsGlobal:1",
				kind: "jsGlobal",
				property: "jenkinsCIGlobal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jenkins:jsGlobal:2",
				kind: "jsGlobal",
				property: "jenkinsRules",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jenkins:header:3",
				kind: "header",
				key: "X-Jenkins",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "jenkins:dom:4",
				kind: "dom",
				selector: "span.jenkins_ver > a[href='https://jenkins.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "jenkins:html:5",
				kind: "html",
				pattern: new RegExp("<span class=\"jenkins_ver\"><a href=\"https:\\/\\/jenkins\\.io\\/\">jenkins ver\\. ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "jenkins:header:6",
				kind: "header",
				key: "x-jenkins",
				valuePattern: new RegExp("([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:jenkins:jenkins:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "kotlin",
		name: "Kotlin",
		website: "https://kotlinlang.org",
		description: "Kotlin is a general purpose, free, open-source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android that combines object-oriented and functional programming features.",
		icon: "Kotlin.svg",
		categories: [
			"developer-tooling",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:jetbrains:kotlin:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "kphp",
		name: "KPHP",
		website: "https://vkcom.github.io/kphp",
		description: "KPHP (kPHP or KittenPHP) is a free PHP-to- C++ source-to-source translator, developed by VKontakte.",
		icon: "default.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "kphp:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^KPHP\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "kphp:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^kphp\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"php",
		],
	},
	{
		id: "kubernetes-dashboard",
		name: "Kubernetes Dashboard",
		website: "https://kubernetes.io/",
		icon: "Kubernetes.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "kubernetes-dashboard:dom:0",
				kind: "dom",
				selector: "[ng-app='kubernetesDashboard']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:kubernetes:kubernetes:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "kuroco",
		name: "Kuroco",
		website: "https://kuroco.app",
		description: "Kuroco is an API-centric platform that enables developers to create customizable APIs, manage content, and leverage a CDN for fast content delivery across various devices.",
		icon: "Kuroco.svg",
		categories: [
			"developer-tooling",
		],
		rules: [],
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
		id: "loop-web",
		name: "Loop Web",
		website: "https://www.loopweb.net",
		description: "Loop Web is a provider in web, internet, network, and design services. Their offerings encompass website design, SMS, VoIP&IVR, Type, hosting, VPS, and more.",
		icon: "Loop Web.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "loop-web:dom:0",
				kind: "dom",
				selector: "link[href*='.loopweb.net']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "loop-web:meta:1",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("LoopWeb", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "loop-web:meta:2",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("loopweb", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "loopedin",
		name: "LoopedIn",
		website: "https://www.loopedin.io",
		description: "LoopedIn is an all-in-one tool for collecting feedback, building roadmaps, sharing changelogs, and publishing knowledge bases.",
		icon: "LoopedIn.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "loopedin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.productstash\\.io\\/"),
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
		id: "lua",
		name: "Lua",
		website: "https://www.lua.org",
		description: "Lua is a multi-paradigm programming language designed primarily for embedded use in applications.",
		icon: "Lua.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "lua:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("\\bLua(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "lua:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("\\blua(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:lua:lua:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mantisbt",
		name: "MantisBT",
		website: "https://www.mantisbt.org",
		description: "MantisBT is an open-source, web-based issue tracking system written in PHP with a MySQL database backend, designed to facilitate bug tracking and project management for software development teams.",
		icon: "MantisBT.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mantisbt:html:0",
				kind: "html",
				pattern: new RegExp("<img[^>]+ alt=\"Powered by Mantis Bugtracker"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mantisbt:dom:1",
				kind: "dom",
				selector: "link[rel='stylesheet'][href*='/css/ace-mantis.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:mantisbt:mantisbt:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
		requires: [
			"php",
		],
	},
	{
		id: "marker",
		name: "Marker",
		website: "https://marker.io",
		description: "Marker.io is an issue tracker solution for Project Managers, QA Testers and Agency Clients to report feedback & bugs to developers.",
		icon: "Marker.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "marker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("edge\\.marker\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "marker:jsGlobal:1",
				kind: "jsGlobal",
				property: "markerConfig",
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
		id: "marsx",
		name: "MarsX",
		website: "https://www.marsx.dev",
		description: "MarsX is an AI-powered coding platform designed to develop Software as a Service (SaaS) tools.",
		icon: "MarsX.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "marsx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytic-api\\.marsx\\.dev\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mendix",
		name: "Mendix",
		website: "https://www.mendix.com",
		description: "Mendix is a low-code platform utilized by businesses for development of mobile and web applications at scale.",
		icon: "Mendix.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mendix:dom:0",
				kind: "dom",
				selector: "script[type='mendix/widget']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mendix:jsGlobal:1",
				kind: "jsGlobal",
				property: "CKEditorForMendix",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mendix:jsGlobal:2",
				kind: "jsGlobal",
				property: "mendix",
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
			cpe: "cpe:2.3:a:mendix:mendix:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "michijs",
		name: "MichiJS",
		website: "https://dev.michijs.com",
		description: "MichiJS is a library enabling the creation of web components using TSX.",
		icon: "MichiJS.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "michijs:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.michijs\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "michijs:dom:1",
				kind: "dom",
				selector: "michi-fragment > michi-fragment",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "microsoft-visual-studio",
		name: "Microsoft Visual Studio",
		website: "https://visualstudio.microsoft.com",
		description: "Microsoft Visual Studio is an integrated development environment from Microsoft.",
		icon: "Microsoft Visual Studio.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "microsoft-visual-studio:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Microsoft\\sVisual\\sStudio", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "microsoft-visual-studio:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^microsoft\\svisual\\sstudio", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "mindstudio",
		name: "MindStudio",
		website: "https://www.mindstudio.ai",
		description: "MindStudio is a platform for creating AI solutions that are simple and hassle-free.",
		icon: "MindStudio.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mindstudio:jsGlobal:0",
				kind: "jsGlobal",
				property: "MindStudioSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "mojo-helpdesk",
		name: "Mojo Helpdesk",
		website: "https://mojohelpdesk.com",
		description: "Mojo Helpdesk is a ticketing system used to centralize requests, assign tasks, automate workflows, and track progress for improved organization.",
		icon: "MojoHelpdesk.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mojo-helpdesk:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("asset\\.mojohelpdesk\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mojo-helpdesk:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("asset\\.mojohelpdesk\\.com", "i"),
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
		id: "mopinion",
		name: "Mopinion",
		website: "https://mopinion.com",
		description: "Mopinion is an all-in-one user feedback platform that helps digital enterprises listen, understand, and act across all digital touchpoints.",
		icon: "Mopinion.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mopinion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("deploy\\.mopinion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mopinion:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pastease",
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
		id: "mscode-pl",
		name: "MsCode.pl",
		website: "https://mscode.pl",
		description: "MsCode.pl is a platform focused on developing innovative solutions in programming, hosting, and marketing.",
		icon: "MsCode.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "mscode-pl:header:0",
				kind: "header",
				key: "X-Hosting-Provider",
				valuePattern: new RegExp("MsCode\\.pl", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mscode-pl:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("MsCode\\.pl", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mscode-pl:header:2",
				kind: "header",
				key: "x-hosting-provider",
				valuePattern: new RegExp("mscode\\.pl", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mscode-pl:meta:3",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("mscode\\.pl", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "muscula",
		name: "Muscula",
		website: "https://www.muscula.com/",
		description: "Muscula is an error logging solution that collects and analyzes errors for websites or applications, providing actionable insights.",
		icon: "Muscula.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "muscula:jsGlobal:0",
				kind: "jsGlobal",
				property: "Muscula.settings",
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
		id: "n8n",
		name: "n8n",
		website: "https://n8n.io",
		description: "n8n is a source-available workflow automation tool that allows you to connect various services and build automated workflows with a visual node-based editor.",
		icon: "n8n.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "n8n:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("N8N_DEBOUNCE_MULTIPLIER"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "n8n:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("N8N_PASSWORD_MIN_LENGTH"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "n8n:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^n8n\\-auth$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"recurring",
			],
		},
		implies: [
			"node-js",
		],
	},
	{
		id: "node-js",
		name: "Node.js",
		website: "https://nodejs.org",
		description: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
		icon: "Node.js.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "node-js:dom:0",
				kind: "dom",
				selector: "div.appVersion i.icon-nodejs",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:nodejs:node.js:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "nodeping",
		name: "NodePing",
		website: "https://nodeping.com",
		description: "NodePing is a tool in the Website Monitoring category of a tech stack. NodePing is an open source tool with GitHub stars and GitHub forks.",
		icon: "NodePing.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "nodeping:dom:0",
				kind: "dom",
				selector: "footer#poweredbynodeping",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "noibu",
		name: "Noibu",
		website: "https://noibu.com",
		description: "Noibu helps ecommerce websites detect revenue-impacting errors on their websites and provides them with the information needed to resolve them.",
		icon: "noibu.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "noibu:jsGlobal:0",
				kind: "jsGlobal",
				property: "NOIBUJS_CONFIG",
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
		id: "nolt",
		name: "Nolt",
		website: "https://nolt.io",
		description: "Nolt is a collaborative platform for managing user requests, designed to replace outdated spreadsheets and Trello boards while providing actionable customer insights.",
		icon: "Nolt.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "nolt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.nolt\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nolt:jsGlobal:1",
				kind: "jsGlobal",
				property: "Nolt.initialized",
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
		id: "nootiz",
		name: "Nootiz",
		website: "https://www.nootiz.com",
		description: "Nootiz is a visual feedback tool designed to streamline the process of collecting and managing user feedback on websites.",
		icon: "Nootiz.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "nootiz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("load\\.nootiz\\.com\\/"),
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
		id: "oh-dear",
		name: "Oh Dear",
		website: "https://ohdear.app",
		description: "The all-in-one monitoring tool for your entire website. Oh Dear monitors uptime, SSL certificates, broken links, scheduled tasks, application health, DNS, domain expiry and more.",
		icon: "Oh Dear.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "oh-dear:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ohdear\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oh-dear:jsGlobal:1",
				kind: "jsGlobal",
				property: "__NEXT_DATA__.props.pageProps.config.userAgent",
				valuePattern: new RegExp("OhDear\\.app"),
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
		id: "opal",
		name: "Opal",
		website: "https://opalrb.org",
		description: "Opal is a Ruby-to-JavaScript compiler that allows Ruby code to run in web browsers by converting it into JavaScript.",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "opal:dom:0",
				kind: "dom",
				selector: "script#opal-elementor-frontend-js, link[href*='opal-boostrap.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "osticket",
		name: "osTicket",
		website: "https://osticket.com",
		description: "osTicket is an open-source support ticket system that allows businesses to manage and streamline customer support requests through a centralized platform, including features for ticket tracking, automation, and reporting.",
		icon: "osTicket.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "osticket:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^OSTSESSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "osticket:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^ostsessid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:enhancesoft:osticket:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "otrs",
		name: "otrs",
		website: "https://www.otrs.com",
		icon: "otrs.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "otrs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^\\/otrs-web\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "otrs:html:1",
				kind: "html",
				pattern: new RegExp("<!--\\s+OTRS: Copyright"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "otrs:header:2",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("OTRS ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "otrs:html:3",
				kind: "html",
				pattern: new RegExp("<!--\\s+otrs: copyright"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "otrs:header:4",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("otrs ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:otrs:otrs:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "outsystems",
		name: "OutSystems",
		website: "https://www.outsystems.com",
		description: "OutSystems is a low-code platform which provides tools for companies to develop, deploy and manage omnichannel enterprise applications.",
		icon: "OutSystems.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "outsystems:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\/OutSystems(?:[\\w]+)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outsystems:jsGlobal:1",
				kind: "jsGlobal",
				property: "OutSystemsDebugger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outsystems:jsGlobal:2",
				kind: "jsGlobal",
				property: "outsystems",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outsystems:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\/outsystems(?:[\\w]+)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
			cpe: "cpe:2.3:a:outsystems:outsystems:*:*:*:*:*:*:*:*",
		},
		implies: [
			"iis",
			"windows-server",
		],
	},
	{
		id: "overwolf",
		name: "Overwolf",
		website: "https://www.overwolf.com",
		description: "Overwolf is a platform that enables the creation, sharing, and monetization of in-game apps and mods.",
		icon: "Overwolf.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "overwolf:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("download\\.overwolf\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:overwolf:overwolf:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "perl",
		name: "Perl",
		website: "https://perl.org",
		description: "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.",
		icon: "Perl.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "perl:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("\\bPerl\\b(?: ?\\/?v?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "perl:dom:1",
				kind: "dom",
				selector: "form[action*='/discus/search.pl']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "perl:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\bperl\\b(?: ?\\/?v?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:perl:perl:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "phabricator",
		name: "Phabricator",
		website: "https://phacility.com",
		description: "Phabricator is a suite of web-based software development collaboration tools, including the Differential code review tool, the Diffusion repository browser, the Herald change monitoring tool, the Maniphest bug tracker and the Phriction wiki. Phabricator integrates with Git, Mercurial, and Subversion.",
		icon: "Phabricator.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "phabricator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/phabricator\\/[a-f0-9]{8}\\/rsrc\\/js\\/phui\\/[a-z-]+\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "phabricator:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]+(?:class|id)=\"phabricator-"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phabricator:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^phsid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:phacility:phabricator:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "php",
		name: "PHP",
		website: "https://php.net",
		description: "PHP is a server-side scripting language commonly used to build dynamic websites and web applications.",
		icon: "PHP.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "php:url:0",
				kind: "url",
				pattern: new RegExp("\\.php(?:$|\\?)"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "php:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^PHPSESSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "php:header:2",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("php\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "php:header:3",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^php\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "php:scriptContent:4",
				kind: "scriptContent",
				pattern: new RegExp("\\.php(?:\\?|$)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "php:dom:5",
				kind: "dom",
				selector: "form[action*='login_process.php'], form[action*='assets/mail.php']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "php:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^phpsessid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "php:header:7",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("php\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "php:header:8",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^php\\/?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "php:dom:9",
				kind: "dom",
				selector: "form[action*='login_process.php']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "php:scriptContent:10",
				kind: "scriptContent",
				pattern: new RegExp("\\/admin\\/index\\.php"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "php:header:11",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^PHP\\/?([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:php:php:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "phpdebugbar",
		name: "PHPDebugBar",
		website: "https://phpdebugbar.com/",
		icon: "phpdebugbar.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "phpdebugbar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("debugbar.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "phpdebugbar:jsGlobal:1",
				kind: "jsGlobal",
				property: "PhpDebugBar",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "phpdebugbar:jsGlobal:2",
				kind: "jsGlobal",
				property: "phpdebugbar",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "pingdom-uptime-monitoring",
		name: "Pingdom Uptime Monitoring",
		website: "https://www.pingdom.com/product/uptime-monitoring/",
		description: "Pingdom Uptime Monitoring is a feature provided by the Pingdom website monitoring and performance testing service. It allows you to monitor the uptime and availability of your website.",
		icon: "Pingdom.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "pingdom-uptime-monitoring:meta:0",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^Pingdom Public Reports Overview$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "pingdom-uptime-monitoring:meta:1",
				kind: "meta",
				key: "title",
				valuePattern: new RegExp("^pingdom public reports overview$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "planio",
		name: "Planio",
		website: "https://plan.io",
		description: "Planio is a platform that offers issue tracking, project management, version control, help desk functionality, wikis, and team chat in a unified environment.",
		icon: "Planio.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "planio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.plan\\.io"),
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
		id: "prisme",
		name: "Prisme",
		website: "https://www.prisme.ai",
		description: "Prisme is an event-driven studio designed for building and automating workflows with minimal coding.",
		icon: "Prisme.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "prisme:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.prisme\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "python",
		name: "Python",
		website: "https://python.org",
		description: "Python is a general-purpose programming language used for web development, automation, data, and scientific computing.",
		icon: "Python.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "python:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("(?:^|\\s)Python(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "python:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("(?:^|\\s)python(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:python:python:*:*:*:*:*:*:*:*",
		},
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
		],
		rules: [
			{
				id: "rapidspike:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rapidspike\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rapidspike:jsGlobal:1",
				kind: "jsGlobal",
				property: "rspike_timing",
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
		id: "rcode-vision",
		name: "Rcode Vision",
		website: "https://www.rcodevision.com",
		description: "Rcode Vision is a platform that develops and delivers web applications.",
		icon: "RcodeVision.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "rcode-vision:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Rcode Vision$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "rcode-vision:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^rcode vision$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "redmine",
		name: "Redmine",
		website: "https://www.redmine.org",
		description: "Redmine is a free and open-source, web-based project management and issue tracking tool.",
		icon: "Redmine.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "redmine:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^>]+Redmine"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "redmine:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_redmine_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "redmine:meta:2",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("Redmine", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "redmine:html:3",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"[^>]+redmine"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "redmine:meta:4",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("redmine", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:redmine:redmine:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby-on-rails",
		],
	},
	{
		id: "replit",
		name: "Replit",
		website: "https://replit.com",
		description: "Replit is a platform for creating and sharing software.",
		icon: "Replit.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "replit:header:0",
				kind: "header",
				key: "expect-ct",
				valuePattern: new RegExp("\\.repl\\.it\\/", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "retool",
		name: "Retool",
		website: "https://retool.com",
		description: "Retool is a development platform that enables the rapid creation and customisation of internal tools, including admin dashboards and database interfaces, through a combination of drag-and-drop components and code.",
		icon: "Retool.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "retool:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("retool(?:-edge)?(?:\\.com)?(?:\\/embed)?\\/?(?:runtime)?~?(?:app)?(?:custom-components)?(?:\\.\\w{0,20})?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "retool:url:1",
				kind: "url",
				pattern: new RegExp("^https:\\/\\/retool\\.[\\d\\w\\-]+\\.(?:com|io)\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "retool:jsGlobal:2",
				kind: "jsGlobal",
				property: "RETOOL_PAGE_SUSPEND_DETECTED",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:retool:retool:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "robixcm-dv-team",
		name: "RobixCM DV Team",
		website: "https://robixcm.ir",
		description: "RobixCM DV Team is a provider of web design and management services, offering solutions for website creation, maintenance, and optimization.",
		icon: "Robixcm.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "robixcm-dv-team:meta:0",
				kind: "meta",
				key: "robixcmteam",
				valuePattern: new RegExp("RobixCM", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "robixcm-dv-team:meta:1",
				kind: "meta",
				key: "robixcmteam",
				valuePattern: new RegExp("robixcm", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rual",
		name: "Rual",
		website: "https://rual.nl",
		description: "Rual is a software development platform that designs and builds tailor-made digital solutions to meet specific business or operational requirements.",
		icon: "Rual.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "rual:jsGlobal:0",
				kind: "jsGlobal",
				property: "RUALCONFIG.api",
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
		id: "ruby",
		name: "Ruby",
		website: "https://ruby-lang.org",
		description: "Ruby is an open-source object-oriented programming language.",
		icon: "Ruby.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "ruby:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("(?:Mongrel|WEBrick|Ruby)", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ruby:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("(?:Mongrel|Ruby(?:\\/([\\d\\.]+))?)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "ruby:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("(?:mongrel|ruby(?:\\/([\\d\\.]+))?)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:ruby-lang:ruby:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "runkit",
		name: "RunKit",
		website: "https://runkit.com",
		description: "RunKit is a tool for prototyping server-side JavaScript.",
		icon: "RunKit.svg",
		categories: [
			"developer-tooling",
			"widgets-misc",
		],
		rules: [
			{
				id: "runkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.runkit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "runkit:jsGlobal:1",
				kind: "jsGlobal",
				property: "RunKit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "runkit:jsGlobal:2",
				kind: "jsGlobal",
				property: "RunKit.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "rust",
		name: "Rust",
		website: "https://www.rust-lang.org",
		description: "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.",
		icon: "Rust.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "rust:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("TrunkApplicationStarted"),
				confidence: 100,
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:rust-lang:rust:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ruttl",
		name: "Ruttl",
		website: "https://ruttl.com",
		description: "Ruttl is a platform that enables visual and design feedback by allowing users to review layouts, content, and bugs across websites, applications, PDFs, and images.",
		icon: "Ruttl.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "ruttl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ruttl\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ruttl:jsGlobal:1",
				kind: "jsGlobal",
				property: "__RUTTL_PRODUCT__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ruttl:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkruttl",
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
		id: "scala",
		name: "Scala",
		website: "https://www.scala-lang.org",
		description: "Scala is a general-purpose programming language providing support for both object-oriented programming and functional programming.",
		icon: "Scala.png",
		categories: [
			"developer-tooling",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:scala-lang:scala:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "scapbot",
		name: "ScapBot",
		website: "https://scapbot.com",
		description: "ScapBot is a tool designed to automate tasks and workflows, helping streamline repetitive processes across various work environments.",
		icon: "ScapBot.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "scapbot:dom:0",
				kind: "dom",
				selector: "script[data-host*='analytics.scapbot.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sheety",
		name: "Sheety",
		website: "https://sheety.co/",
		description: "Sheety is a service that transforms your Google Sheet into an API, enabling easy access to your data for integration with other applications.",
		icon: "Sheety.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "sheety:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sheety\\.co\\/"),
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
		id: "sleekplan",
		name: "Sleekplan",
		website: "https://sleekplan.com",
		description: "Sleekplan is a customer feedback and product management platform that enables businesses to collect, analyse, and act upon user feedback, prioritise feature requests, track bugs, and collaborate on product development.",
		icon: "Sleekplan.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "sleekplan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sleekplan\\.com\\/"),
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
			"vue-js",
		],
	},
	{
		id: "slickstack",
		name: "SlickStack",
		website: "https://slickstack.io",
		description: "SlickStack is a free LEMP stack automation script written in Bash designed to enhance and simplify WordPress provisioning, performance, and security.",
		icon: "SlickStack.png",
		categories: [
			"developer-tooling",
			"infrastructure-hosting",
		],
		rules: [
			{
				id: "slickstack:header:0",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("SlickStack", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "slickstack:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("slickstack", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "snapapp",
		name: "SnapApp",
		website: "https://snapapp.com",
		description: "SnapApp is a low-code application builder that leverages artificial intelligence to accelerate enterprise application development and streamline the creation of business software solutions.",
		icon: "SnapApp.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "snapapp:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.snapapp\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sonarqube",
		name: "SonarQube",
		website: "https://www.sonarqube.org/",
		description: "SonarQube is an open-source platform for the continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
		icon: "SonarQube.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "sonarqube:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^\\/js\\/bundles\\/sonar\\.js?v=([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sonarqube:html:1",
				kind: "html",
				pattern: new RegExp("<link href=\"\\/css\\/sonar\\.css\\?v=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqube:html:2",
				kind: "html",
				pattern: new RegExp("<title>SonarQube<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqube:jsGlobal:3",
				kind: "jsGlobal",
				property: "SonarMeasures",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sonarqube:jsGlobal:4",
				kind: "jsGlobal",
				property: "SonarRequest",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sonarqube:meta:5",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^SonarQube$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "sonarqube:html:6",
				kind: "html",
				pattern: new RegExp("<title>sonarqube<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqube:meta:7",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^sonarqube$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"java",
		],
	},
	{
		id: "sonarqubes",
		name: "SonarQubes",
		website: "https://www.sonarqube.org/",
		description: "SonarQube is an open-source platform for the continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
		icon: "sonar.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "sonarqubes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^\\/js\\/bundles\\/sonar\\.js?v=([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sonarqubes:html:1",
				kind: "html",
				pattern: new RegExp("<link href=\"\\/css\\/sonar\\.css\\?v=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqubes:html:2",
				kind: "html",
				pattern: new RegExp("<title>SonarQube<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqubes:jsGlobal:3",
				kind: "jsGlobal",
				property: "SonarMeasures",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sonarqubes:jsGlobal:4",
				kind: "jsGlobal",
				property: "SonarRequest",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sonarqubes:meta:5",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^SonarQubes$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "sonarqubes:dom:6",
				kind: "dom",
				selector: "link[href*='/css/sonar.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sonarqubes:html:7",
				kind: "html",
				pattern: new RegExp("<title>sonarqube<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sonarqubes:meta:8",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^sonarqubes$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"java",
		],
	},
	{
		id: "soplanning",
		name: "SOPlanning",
		website: "https://www.soplanning.org/en/",
		description: "SOPlanning is an online project management software that enhances team visibility and facilitates task coordination through a centralized platform.",
		icon: "SOPlanning.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "soplanning:meta:0",
				kind: "meta",
				key: "email",
				valuePattern: new RegExp("^support@soplanning\\.org$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"poa",
				"recurring",
			],
			cpe: "cpe:2.3:a:soplanning:soplanning:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "spicy-rocket",
		name: "Spicy Rocket",
		website: "https://spicyrocket.xyz",
		description: "Spicy Rocket is a web design and digital development platform providing innovative solutions to enhance online business performance.",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "spicy-rocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spicyrocket\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spicy-rocket:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^spicyrocket_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
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
		],
		rules: [
			{
				id: "stackify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stackify\\.com\\/"),
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
		id: "stammer-ai",
		name: "Stammer.ai",
		website: "https://stammer.ai",
		description: "Stammer.ai is a platform that enables the creation of custom AI agents tailored for various business needs across different industries.",
		icon: "Stammer.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "stammer-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.stammer\\.ai"),
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
		id: "statping",
		name: "Statping",
		website: "https://github.com/statping/statping",
		description: "Statping is an open-source status monitoring tool that helps you to monitor and analyse the performance of your websites, applications, and services. It can monitor multiple endpoints such as HTTP, HTTPS, TCP, DNS, and more.",
		icon: "Statping.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "statping:html:0",
				kind: "html",
				pattern: new RegExp("We're\\s+sorry\\s+but\\s+Statping", "i"),
				confidence: 95,
				description: "Document HTML contains Statping's no-JavaScript app marker.",
			},
			{
				id: "statping:text:1",
				kind: "text",
				pattern: new RegExp("We're\\ssorry\\sbut\\sStatping"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"core-js",
			"vue-js",
		],
	},
	{
		id: "status-io",
		name: "Status.io",
		website: "https://status.io",
		description: "Status.io is a hosted system status page manager with features such as customised incident tracking, subscriber notifications, and more.",
		icon: "Status.io.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "status-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.status\\.io\\/"),
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
		id: "statuscast",
		name: "StatusCast",
		website: "https://statuscast.com/status-page/",
		description: "StatusCast is a hosted status page management software.",
		icon: "StatusCast.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "statuscast:jsGlobal:0",
				kind: "jsGlobal",
				property: "statuscast.libs.datatables",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "statuscast:jsGlobal:1",
				kind: "jsGlobal",
				property: "statuscast.ui",
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
		id: "statuspal",
		name: "Statuspal",
		website: "https://statuspal.io",
		description: "Statuspal is a hosted status page and monitoring software for businesses of all kinds.",
		icon: "Statuspal.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "statuspal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/statuspal\\.io\\/"),
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
		id: "staytus",
		name: "Staytus",
		website: "https://staytus.co",
		description: "Staytus is a free, open-source status site that you can install on your own servers.",
		icon: "Staytus.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "staytus:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Staytus\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "staytus:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^staytus\\/([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "subversion",
		name: "Subversion",
		website: "https://subversion.apache.org",
		description: "Subversion is a centralized version control system for managing files and directories across software development teams.",
		icon: "Subversion.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "subversion:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\sSVN\\/([\\d\\.]+)\\s", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "subversion:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("\\ssvn\\/([\\d\\.]+)\\s", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:subversion:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "supabase",
		name: "Supabase",
		website: "https://supabase.com",
		description: "Supabase is an open-source platform that offers a Postgres database, Authentication, APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings for project development.",
		icon: "Supabase.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "supabase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.supabase\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "supabase:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.supabase\\.co\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "supabase:dom:2",
				kind: "dom",
				selector: "a[href*='supabase.com'] > img[src*='/supabase-logo-wordmark\\-\\-dark.png']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "supabase:jsGlobal:3",
				kind: "jsGlobal",
				property: "__NUXT__.config.public.SUPABASE_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supabase:jsGlobal:4",
				kind: "jsGlobal",
				property: "__NUXT__.config.public.supabase",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supabase:jsGlobal:5",
				kind: "jsGlobal",
				property: "createClient",
				valuePattern: new RegExp("supabase\\."),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supabase:jsGlobal:6",
				kind: "jsGlobal",
				property: "supabase.AuthAdminApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supabase:jsGlobal:7",
				kind: "jsGlobal",
				property: "supabase.storageKey",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supabase:dom:8",
				kind: "dom",
				selector: "a[href*='supabase.com'] > img[src*='/supabase-logo-wordmark--dark.png']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
		implies: [
			"postgresql",
		],
	},
	{
		id: "taiga",
		name: "Taiga",
		website: "https://taiga.io",
		description: "Taiga is an open-source agile project management software that supports Scrum and Kanban methodologies for cross-functional teams.",
		icon: "Taiga.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "taiga:jsGlobal:0",
				kind: "jsGlobal",
				property: "taigaConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"low",
				"poa",
				"recurring",
			],
		},
		implies: [
			"angularjs",
			"django",
		],
	},
	{
		id: "teamcity",
		name: "TeamCity",
		website: "https://www.jetbrains.com/teamcity/",
		description: "TeamCity is a build management and continuous integration server from JetBrains.",
		icon: "TeamCity.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "teamcity:html:0",
				kind: "html",
				pattern: new RegExp("<span class=\"versionTag\"><span class=\"vWord\">Version<\\/span> ([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "teamcity:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("TeamCity", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "teamcity:dom:2",
				kind: "dom",
				selector: "span[class*='versionTag'], span[class*='vWord']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "teamcity:html:3",
				kind: "html",
				pattern: new RegExp("<span class=\"versiontag\"><span class=\"vword\">version<\\/span> ([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "teamcity:meta:4",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("teamcity", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "teamcity:dom:5",
				kind: "dom",
				selector: "span[class*='vWord']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:jetbrains:teamcity:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-tomcat",
			"java",
			"jquery",
			"moment-js",
			"prototype",
			"react",
			"underscore-js",
		],
	},
	{
		id: "teamlinkt",
		name: "TeamLinkt",
		website: "https://teamlinkt.com",
		description: "Teamlinkt is a software facilitating team management, enabling users to track progress, assign tasks, and coordinate activities.",
		icon: "TeamLinkt.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "teamlinkt:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^TeamLinkt$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "teamlinkt:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^teamlinkt$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "thinkstack",
		name: "Thinkstack",
		website: "https://www.thinkstack.ai",
		description: "Thinkstack is a platform that develops custom AI chatbots tailored to specific business requirements.",
		icon: "Thinkstack.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "thinkstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.thinkstack\\.ai\\/"),
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
		id: "trac",
		name: "Trac",
		website: "https://trac.edgewall.org",
		description: "Trac is an enhanced wiki and issue tracking system for software development projects, using a minimalistic approach to web-based software project management.",
		icon: "Trac.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "trac:html:0",
				kind: "html",
				pattern: new RegExp("<a id=\"tracpowered"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "trac:html:1",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^\"]*\"><strong>Trac(?:[ /]([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "trac:dom:2",
				kind: "dom",
				selector: "link[type*='text/x-trac-wiki']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "trac:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^trac_form_token$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "trac:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^trac_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "trac:html:5",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"[^\"]*\"><strong>trac(?:[ /]([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:edgewall:trac:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "tryzens",
		name: "Tryzens",
		website: "https://tryzens.com",
		description: "Tryzens is a digital transformation specialist focused on implementing technology-driven strategies to improve business processes.",
		icon: "Tryzens.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "tryzens:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tryzens-analytics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tryzens:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tryzens-analytics\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "turbopack",
		name: "Turbopack",
		website: "https://nextjs.org/docs/app/api-reference/turbopack",
		description: "Turbopack is an incremental bundler for JavaScript and TypeScript, written in Rust and integrated into the Next.js framework for optimized build performance.",
		icon: "Turbopack.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "turbopack:jsGlobal:0",
				kind: "jsGlobal",
				property: "TURBOPACK.push",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "turbopack:jsGlobal:1",
				kind: "jsGlobal",
				property: "TURBOPACK",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"next-js",
		],
	},
	{
		id: "typescript",
		name: "TypeScript",
		website: "https://www.typescriptlang.org",
		description: "TypeScript is an open-source language which builds on JavaScript  by adding static type definitions.",
		icon: "TypeScript.svg",
		categories: [
			"developer-tooling",
		],
		rules: [],
		metadata: {
			oss: true,
		},
	},
	{
		id: "upptime",
		name: "Upptime",
		website: "https://upptime.js.org",
		description: "Upptime is the open-source uptime monitor and status page, powered entirely by GitHub Actions, Issues, and Pages.",
		icon: "Upptime.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "upptime:dom:0",
				kind: "dom",
				selector: "p > a[href*='upptime.js.org']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "upptime:text:1",
				kind: "text",
				pattern: new RegExp("^Upptime$"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "uptimerobot",
		name: "UptimeRobot",
		website: "https://uptimerobot.com",
		description: "UptimeRobot is a web-based software that is designed to monitor the sites frequently to check whether any site is down owing to server problem or any bug in coding.",
		icon: "UptimeRobot.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "uptimerobot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uptimerobot\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uptimerobot:dom:1",
				kind: "dom",
				selector: "a[href*='uptimerobot.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "uptimerobot:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.uptimerobot\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "upvoty",
		name: "Upvoty",
		website: "https://upvoty.com",
		description: "Upvoty is a platform for collecting and managing user feedback and feature requests.",
		icon: "upvoty.png",
		categories: [
			"developer-tooling",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "upvoty:dom:0",
				kind: "dom",
				selector: "div.upvotyContainer",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "upvoty:jsGlobal:1",
				kind: "jsGlobal",
				property: "upvoty",
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
			"php",
		],
	},
	{
		id: "userreport",
		name: "UserReport",
		website: "https://www.userreport.com",
		description: "UserReport is an online survey and feedback management platform.",
		icon: "UserReport.svg",
		categories: [
			"developer-tooling",
			"surveys-feedback",
		],
		rules: [
			{
				id: "userreport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userreport\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userreport:dom:1",
				kind: "dom",
				selector: "a[href*='feedback.userreport.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		id: "userrules",
		name: "UserRules",
		website: "https://www.userrules.com",
		icon: "UserRules.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "userrules:jsGlobal:0",
				kind: "jsGlobal",
				property: "_usrp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "usersnap",
		name: "Usersnap",
		website: "https://usersnap.com",
		description: "Usersnap is a user feedback platform for product teams to collect issues, ideas, and surveys, aiding in user testing and product decisions.",
		icon: "Usersnap.svg",
		categories: [
			"developer-tooling",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "usersnap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.usersnap\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "usersnap:dom:1",
				kind: "dom",
				selector: "link[href*='.usersnap.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "usersnap:jsGlobal:2",
				kind: "jsGlobal",
				property: "onUsersnapCXLoad",
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
		id: "uservoice",
		name: "UserVoice",
		website: "https://uservoice.com",
		description: "UserVoice is a management to collect and analyse feedback from customers.",
		icon: "UserVoice.svg",
		categories: [
			"developer-tooling",
			"surveys-feedback",
		],
		rules: [
			{
				id: "uservoice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.uservoice\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uservoice:jsGlobal:1",
				kind: "jsGlobal",
				property: "UserVoice",
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
		id: "vigil",
		name: "Vigil",
		website: "https://github.com/valeriansaliou/vigil",
		description: "Vigil is a microservices status page. Monitors a distributed infrastructure and sends alerts (Slack, SMS, etc.).",
		icon: "default.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "vigil:dom:0",
				kind: "dom",
				selector: "p > a[href*='github.com/valeriansaliou/vigil']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vigil:text:1",
				kind: "text",
				pattern: new RegExp("^Vigil$"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"docker",
			"rust",
		],
	},
	{
		id: "webassembly",
		name: "WebAssembly",
		website: "https://webassembly.org/",
		description: "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.",
		icon: "WebAssembly.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "webassembly:header:0",
				kind: "header",
				key: "Content-Type",
				valuePattern: new RegExp("application\\/wasm", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "webassembly:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wasm_exec\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webassembly:jsGlobal:2",
				kind: "jsGlobal",
				property: "wasmBinary",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webassembly:jsGlobal:3",
				kind: "jsGlobal",
				property: "wasmBinaryFile",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webassembly:header:4",
				kind: "header",
				key: "content-type",
				valuePattern: new RegExp("application\\/wasm", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:w3:webassembly:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "wordpress-project-manager",
		name: "WordPress Project Manager",
		website: "https://wedevs.com/wp-project-manager-pro",
		description: "WordPress Project Manager is an open-source project management tool designed to organize tasks and ensure timely project delivery.",
		icon: "WPProjectManager.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "wordpress-project-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wedevs-project-manager\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "xslt",
		name: "XSLT",
		website: "https://www.w3.org/TR/xslt-10",
		description: "XSLT is designed for use as part of XSL, which is a stylesheet language for XML.",
		icon: "W3C.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "xslt:html:0",
				kind: "html",
				pattern: new RegExp("<xsl[^>]* version=\"(.+)\""),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "yaghoot-web",
		name: "Yaghoot Web",
		website: "https://yaghootweb.com",
		description: "Yaghoot Web is a provider of website design, search engine optimization, and performance optimization.",
		icon: "YaghootWeb.svg",
		categories: [
			"developer-tooling",
			"marketing-automation",
		],
		rules: [
			{
				id: "yaghoot-web:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^yaghootweb$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ybug",
		name: "Ybug",
		website: "https://ybug.io",
		description: "Ybug is a visual feedback and bug tracking tool designed for users and clients, enabling identification and reporting of issues.",
		icon: "Ybug.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "ybug:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ybug\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ybug:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ybug",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ybug:jsGlobal:2",
				kind: "jsGlobal",
				property: "ybug_settings",
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
		id: "yourgpt",
		name: "YourGPT",
		website: "https://yourgpt.ai",
		description: "YourGPT is a platform that provides customizable AI and GPT tools, enabling the integration of large language models for diverse operational needs and supporting more efficient business processes.",
		icon: "YourGPT.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "yourgpt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.yourgpt\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yourgpt:jsGlobal:1",
				kind: "jsGlobal",
				property: "$yourgptChatbot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yourgpt:jsGlobal:2",
				kind: "jsGlobal",
				property: "YOURGPT_WIDGET_UID",
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
		id: "youtrack",
		name: "YouTrack",
		website: "https://www.jetbrains.com/youtrack/",
		description: "YouTrack is a browser-based bug tracker, issue tracking system and project management software.",
		icon: "YouTrack.png",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "youtrack:html:0",
				kind: "html",
				pattern: new RegExp("no-title=\"YouTrack\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtrack:html:1",
				kind: "html",
				pattern: new RegExp("data-reactid=\"[^\"]+\">youTrack ([0-9.]+)<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtrack:html:2",
				kind: "html",
				pattern: new RegExp("type=\"application\\/opensearchdescription\\+xml\" title=\"YouTrack\"\\/>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtrack:dom:3",
				kind: "dom",
				selector: "[no-title='YouTrack'], link[type='application/opensearchdescription+xml'][title='YouTrack']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "youtrack:html:4",
				kind: "html",
				pattern: new RegExp("data-reactid=\"[^\"]+\">youtrack ([0-9.]+)<"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtrack:html:5",
				kind: "html",
				pattern: new RegExp("no-title=\"youtrack\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtrack:html:6",
				kind: "html",
				pattern: new RegExp("type=\"application\\/opensearchdescription\\+xml\" title=\"youtrack\"\\/>"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:jetbrains:youtrack:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "zammad",
		name: "Zammad",
		website: "https://zammad.org",
		description: "Zammad is a web-based, open-source support and ticketing system designed for managing user inquiries and organizing customer service workflows.",
		icon: "Zammad.svg",
		categories: [
			"developer-tooling",
		],
		rules: [
			{
				id: "zammad:dom:0",
				kind: "dom",
				selector: "script[id*='zammad_form_script']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
] as const satisfies readonly TechnologyDefinition[];
