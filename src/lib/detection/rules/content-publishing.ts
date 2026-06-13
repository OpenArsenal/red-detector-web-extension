import type { TechnologyDefinition } from '../types';

export const contentPublishingTechnologyDefinitions = [
	{
		id: "absorb",
		name: "Absorb",
		website: "https://www.absorblms.com",
		description: "Absorb is a cloud-based learning management system.",
		icon: "Absorb.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "absorb:jsGlobal:0",
				kind: "jsGlobal",
				property: "AbsorbLMS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "absorb:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_absorb_ui_session$", "i"),
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
		id: "accessally",
		name: "AccessAlly",
		website: "https://accessally.com",
		description: "AccessAlly is a customizable platform designed for scalable growth, offering tools for membership management, online courses, and automation.",
		icon: "AccessAlly.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "accessally:jsGlobal:0",
				kind: "jsGlobal",
				property: "accessally_order_form_data_is_during_restore",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "accessally:jsGlobal:1",
				kind: "jsGlobal",
				property: "accessally_script_object",
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
		id: "accredible",
		name: "Accredible",
		website: "https://www.accredible.com",
		description: "Accredible is a branded digital certificates provider that supports learner and program growth through secure, verifiable credentialing.",
		icon: "Accredible.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "accredible:dom:0",
				kind: "dom",
				selector: "iframe[src*='api.accredible.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "accredible:header:1",
				kind: "header",
				key: "Access-Control-Allow-Headers",
				valuePattern: new RegExp("^Accredible-Authorization", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "accredible:header:2",
				kind: "header",
				key: "access-control-allow-headers",
				valuePattern: new RegExp("^accredible-authorization", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "activenow",
		name: "ActiveNow",
		website: "https://activenow.io",
		description: "ActiveNow is a platform for managing school extracurricular activities, including program organization, participation tracking, scheduling, and administrative coordination.",
		icon: "ActiveNow.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "activenow:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.activenow\\.pl"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "activenow:jsGlobal:1",
				kind: "jsGlobal",
				property: "activeNowFormSelector",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "activenow:jsGlobal:2",
				kind: "jsGlobal",
				property: "activeNowOrigin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "activenow:jsGlobal:3",
				kind: "jsGlobal",
				property: "activenow",
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
		id: "adobe-robohelp",
		name: "Adobe RoboHelp",
		website: "https://adobe.com/products/robohelp.html",
		description: "Adobe RoboHelp is a Help Authoring Tool (HAT) that allows you to create help systems, e-learning content and knowledge bases.",
		icon: "Adobe RoboHelp.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "adobe-robohelp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:wh(?:utils|ver|proxy|lang|topic|msg)|ehlpdhtm)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:jsGlobal:1",
				kind: "jsGlobal",
				property: "gbWhLang",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:jsGlobal:2",
				kind: "jsGlobal",
				property: "gbWhMsg",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:jsGlobal:3",
				kind: "jsGlobal",
				property: "gbWhProxy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:jsGlobal:4",
				kind: "jsGlobal",
				property: "gbWhUtil",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:jsGlobal:5",
				kind: "jsGlobal",
				property: "gbWhVer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:meta:6",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Adobe RoboHelp(?: ([\\d]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "adobe-robohelp:meta:7",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^adobe robohelp(?: ([\\d]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:adobe:robohelp:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "aegea",
		name: "Aegea",
		website: "https://blogengine.ru",
		description: "Aegea is a blog engine created by Ilya Birman.",
		icon: "Aegea.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "aegea:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^E2 Aegea v(\\d+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "aegea:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^(?:E2\\s)?Aegea\\s(?:v)?([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "aegea:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^(?:e2\\s)?aegea\\s(?:v)?([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
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
		implies: [
			"jquery",
			"php",
		],
	},
	{
		id: "aforest-lms",
		name: "Aforest LMS",
		website: "https://www.groupe-aforest.com",
		description: "AFOREST LMS is a training management system that supports the entire training cycle, including client needs assessment, course organization, learner tracking, quality control, assessments, certification, and e-learning integration, with invoicing capabilities.",
		icon: "AforestLMS.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "aforest-lms:meta:0",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^Aforest Lux - C.I.D.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "aforest-lms:meta:1",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^aforest lux - c.i.d.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "alboom-proof",
		name: "Alboom Proof",
		website: "https://www.alboompro.com/ferramentas/alboom-proof",
		description: "Alboom Proof is a platform that provides client photo galleries, photo sales, and proofing services in one location, enabling photographers and visual artists to deliver their work.",
		icon: "Alboom.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "alboom-proof:dom:0",
				kind: "dom",
				selector: "img[data-original*='alfred.alboompro.com/']",
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
		id: "announcekit",
		name: "AnnounceKit",
		website: "https://announcekit.app",
		description: "AnnounceKit is a platform facilitating announcements for product updates and company news.",
		icon: "AnnounceKit.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "announcekit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.announcekit\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "announcekit:jsGlobal:1",
				kind: "jsGlobal",
				property: "announcekit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "announcekit:jsGlobal:2",
				kind: "jsGlobal",
				property: "announcekit_feed",
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
		id: "apache-jspwiki",
		name: "Apache JSPWiki",
		website: "https://jspwiki.org",
		description: "Apache JSPWiki is an open-source Wiki engine, built around standard JEE components (Java, servlets, JSP).",
		icon: "Apache.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "apache-jspwiki:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jspwiki"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "apache-jspwiki:html:1",
				kind: "html",
				pattern: new RegExp("<html[^>]* xmlns:jspwiki="),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "apache-jspwiki:url:2",
				kind: "url",
				pattern: new RegExp("wiki\\.jsp"),
				description: "Page URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apache:jspwiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"apache-tomcat",
		],
	},
	{
		id: "apigee",
		name: "Apigee",
		website: "https://cloud.google.com/apigee/",
		description: "Apigee is an API gateway management tool to exchange data across cloud services and applications.",
		icon: "Apigee.svg",
		categories: [
			"content-publishing",
			"widgets-misc",
		],
		rules: [
			{
				id: "apigee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/profiles\\/apigee"),
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
		id: "asc-edupage",
		name: "aSc EduPage",
		website: "https://www.edupage.org",
		description: "aSc EduPage is a cloud-based school management system.",
		icon: "aScEduPage.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "asc-edupage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.edupage\\.org"),
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
		id: "asciidoctor",
		name: "Asciidoctor",
		website: "https://github.com/asciidoctor/asciidoctor",
		description: "Asciidoctor is an open-source text processor and publishing toolchain, written in Ruby, for converting AsciiDoc content to HTML 5, DocBook 5, and other formats.",
		icon: "Asciidoctor.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "asciidoctor:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Asciidoctor\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "asciidoctor:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^asciidoctor\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:asciidoctor:asciidoctor:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby",
		],
	},
	{
		id: "atlassian-confluence",
		name: "Atlassian Confluence",
		website: "https://www.atlassian.com/software/confluence/overview/team-collaboration-software",
		description: "Confluence is Atlassian's team workspace and wiki for documentation and collaboration.",
		icon: "Atlassian Confluence.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "atlassian-confluence:dom:0",
				kind: "dom",
				selector: "li.print-only",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "atlassian-confluence:text:1",
				kind: "text",
				pattern: new RegExp("Atlassian Confluence ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:atlassian:confluence:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "bear-blog",
		name: "Bear Blog",
		website: "https://bearblog.dev",
		description: "BearBlog is a privacy-first blogging platform that uses no trackers, JavaScript, or stylesheets, delivering plain text publishing focused solely on content.",
		icon: "BearBlog.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "bear-blog:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.bearblog\\.dev"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bear-blog:dom:1",
				kind: "dom",
				selector: "footer a[href='https://bearblog.dev'], footer a[href='https://bearblog.dev/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bear-blog:text:2",
				kind: "text",
				pattern: new RegExp("Bear"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "beehiiv",
		name: "Beehiiv",
		website: "https://www.beehiiv.com",
		description: "Beehiiv is a relatively young, hosted newsletter platform built for businesses and creators.",
		icon: "Beehiiv.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "beehiiv:dom:0",
				kind: "dom",
				selector: "link[href*='media.beehiiv.com/']",
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
		id: "beehiiv-rss-feed",
		name: "Beehiiv RSS feed",
		website: "https://www.beehiiv.com",
		description: "Beehiiv RSS feed is a feature of the Beehiiv. Beehiiv is a relatively young, hosted newsletter platform built for businesses and creators.",
		icon: "Beehiiv.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "beehiiv-rss-feed:dom:0",
				kind: "dom",
				selector: "iframe[src*='embeds.beehiiv.com/']",
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
		id: "betterdocs",
		name: "BetterDocs",
		website: "https://betterdocs.co",
		description: "BetterDocs is an advanced documentation and knowledge base plugin for WordPress and Shopify.",
		icon: "BetterDocs.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "betterdocs:jsGlobal:0",
				kind: "jsGlobal",
				property: "betterdocs.FEEDBACK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "betterdocs:jsGlobal:1",
				kind: "jsGlobal",
				property: "betterdocs_pro.FEEDBACK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "betterdocs:jsGlobal:2",
				kind: "jsGlobal",
				property: "betterdocspublic.post_id",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
	},
	{
		id: "blendle",
		name: "Blendle",
		website: "https://www.blendle.com",
		description: "Blendle is a digital magazine system that allows users to access and read articles from various publications.",
		icon: "Blendle.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "blendle:jsGlobal:0",
				kind: "jsGlobal",
				property: "asyncBlendleButtonInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blendle:jsGlobal:1",
				kind: "jsGlobal",
				property: "blendleButtonInit.locale",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blessing-skin",
		name: "Blessing Skin",
		website: "https://github.com/bs-community/blessing-skin-server",
		description: "Blessing Skin is a plubin that brings your custom skins back in offline Minecraft servers.",
		icon: "Blessing Skin.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "blessing-skin:jsGlobal:0",
				kind: "jsGlobal",
				property: "blessing.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"laravel",
		],
	},
	{
		id: "blogger",
		name: "Blogger",
		website: "https://www.blogger.com",
		description: "Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries.",
		icon: "Blogger.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "blogger:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.(?:blogspot|blogger)\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "blogger:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Blogger$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "blogger:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("blogger\\.googleusercontent\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "blogger:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^blogger$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"python",
		],
	},
	{
		id: "bloom-portfolio",
		name: "Bloom Portfolio",
		website: "https://bloom.io/features/website-portfolio",
		description: "Bloom Portfolio is an online platform for showcasing work in a structured manner.",
		icon: "BloomIO.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "bloom-portfolio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.bloom\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bloom-portfolio:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("Bloom\\.io", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "bloom-portfolio:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("bloom\\.io", "i"),
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
		id: "blr",
		name: "BLR",
		website: "https://blr.com",
		description: "BLR is a compliance and training partner that provides resources and support for HR and EHS teams.",
		icon: "BLR.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "blr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blr:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.blr\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bookstack",
		name: "BookStack",
		website: "https://www.bookstackapp.com",
		description: "BookStack is a simple, open-source, self-hosted, easy-to-use platform for organising and storing information.",
		icon: "BookStack.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "bookstack:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^bookstack_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:bookstackapp:bookstack:*:*:*:*:*:*:*:*",
		},
		implies: [
			"laravel",
			"mysql",
			"php",
		],
	},
	{
		id: "bump",
		name: "Bump",
		website: "https://bump.sh",
		description: "Bump is an API contract management platform that helps document and track APIs by identifying changes in API structure, and keeping developers informed through an elegant documentation.",
		icon: "Bump.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "bump:dom:0",
				kind: "dom",
				selector: ".doc-navigation footer, footer.catalog-footer",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bump:text:1",
				kind: "text",
				pattern: new RegExp("Powered by Bump"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "bump:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("bump\\.sh\\/packs\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bump:dom:3",
				kind: "dom",
				selector: "body[data-bump]",
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
		id: "burogu",
		name: "BUROGU",
		website: "https://burogu.pro",
		description: "Burogu is a no-code platform that enables users to create and manage blogs.",
		icon: "BUROGU.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "burogu:dom:0",
				kind: "dom",
				selector: "link[href*='stats.burogu.pro']",
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
		id: "bxslider",
		name: "bxSlider",
		website: "https://bxslider.com/",
		description: "Add a respsonsive image slider to any website.",
		icon: "bxSlider.png",
		categories: [
			"content-publishing",
			"widgets-misc",
		],
		rules: [
			{
				id: "bxslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bxslider(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"low",
				"onetime",
			],
		},
	},
	{
		id: "canvas-lms",
		name: "Canvas LMS",
		website: "https://www.instructure.com/canvas",
		description: "Canvas LMS is a web-based learning management system, or LMS.",
		icon: "Canvas LMS.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "canvas-lms:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunkcanvas_lms",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "canvas-lms:header:1",
				kind: "header",
				key: "x-canvas-meta",
				valuePattern: new RegExp("login\\/canvas", "i"),
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
			"react",
			"ruby-on-rails",
		],
	},
	{
		id: "canvy",
		name: "Canvy",
		website: "https://canvy.com",
		description: "Canvy is an online tool designed for fine art painters and poster designers to enhance the promotion and presentation of their artwork online.",
		icon: "Canvy.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "canvy:jsGlobal:0",
				kind: "jsGlobal",
				property: "config.apiPath",
				valuePattern: new RegExp("api\\.canvy\\.app\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "canvy:jsGlobal:1",
				kind: "jsGlobal",
				property: "config.cdnPath",
				valuePattern: new RegExp("api\\.canvy\\.app\\/"),
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
		id: "chamilo",
		name: "Chamilo",
		website: "https://www.chamilo.org",
		description: "Chamilo is an open-source learning management and collaboration system.",
		icon: "Chamilo.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "chamilo:dom:0",
				kind: "dom",
				selector: "link[href*='chamilo.org/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "chamilo:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Chamilo ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "chamilo:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Chamilo ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "chamilo:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("chamilo ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "chamilo:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("chamilo ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:chamilo:chamilo_lms:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "chevereto",
		name: "Chevereto",
		website: "https://chevereto.com",
		description: "Chevereto is an image hosting software that allows you to create a full-featured image hosting website on your own server.",
		icon: "Chevereto.svg",
		categories: [
			"content-publishing",
			"widgets-misc",
		],
		rules: [
			{
				id: "chevereto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/chevereto\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chevereto:jsGlobal:1",
				kind: "jsGlobal",
				property: "CHEVERETO.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chevereto:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Chevereto\\s(?:[\\d\\.]+)", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "chevereto:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("chevereto\\s(?:[\\d\\.]+)", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
			],
			cpe: "cpe:2.3:a:chevereto:chevereto:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "classeh",
		name: "Classeh",
		website: "https://fanavar.org",
		description: "Classeh is a LMS that allows user to participate in webinars and also use LMS options like messanger,finances,homework,quiz and some extra options like sending messages and more.",
		icon: "Classeh.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "classeh:dom:0",
				kind: "dom",
				selector: "a[href*='apps.classeh.ir'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "classeh:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^fanavar\\.org$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"recurring",
			],
		},
		implies: [
			"php",
			"python",
			"react",
		],
	},
	{
		id: "clever",
		name: "Clever",
		website: "https://www.clever.com",
		description: "Clever is an identity platform for education that helps schools and applications secure identities, manage data access, and support classroom learning.",
		icon: "Clever.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clever:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("clever\\.com"),
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
		id: "clickbooq",
		name: "Clickbooq",
		website: "https://www.clickbooq.com",
		description: "Clickbooq is a website builder specially designed for photographers to showcase their work.",
		icon: "Clickbooq.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clickbooq:dom:0",
				kind: "dom",
				selector: "div[data-large*='//fast.clickbooq.com/']",
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
		id: "clickhelp",
		name: "ClickHelp",
		website: "https://clickhelp.com",
		description: "ClickHelp is an AI-powered all-in-one documentation tool designed to create, manage, and publish technical content.",
		icon: "ClickHelp.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clickhelp:dom:0",
				kind: "dom",
				selector: "script#dxss_CI_301868994",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "clickhelp:header:1",
				kind: "header",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.clickhelp\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "clickhelp:header:2",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.clickhelp\\.com", "i"),
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
		implies: [
			"microsoft-asp-net",
		],
	},
	{
		id: "clicksign",
		name: "Clicksign",
		website: "https://www.clicksign.com",
		description: "Clicksign is a platform offering document signing services.",
		icon: "Clicksign.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clicksign:jsGlobal:0",
				kind: "jsGlobal",
				property: "Clicksign",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clicksign:jsGlobal:1",
				kind: "jsGlobal",
				property: "endpointClickSign",
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
		id: "clickup",
		name: "ClickUp",
		website: "https://clickup.com",
		description: "ClickUp is a project management software suitable for businesses of all sizes and industries.",
		icon: "ClickUp.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clickup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/app-cdn\\.clickup\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clickup:jsGlobal:1",
				kind: "jsGlobal",
				property: "clickupCanBootstrapPromise",
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
		id: "clinked",
		name: "Clinked",
		website: "https://clinked.com",
		description: "Clinked is a cloud-based platform for secure file sharing, project management, and team collaboration with client portals.",
		icon: "Clinked.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "clinked:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("a\\.clinked\\.com\\/(\\d+\\.\\d+\\.\\d+)\\/standard\\/js\\/.+\\.js"),
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
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "coachy",
		name: "Coachy",
		website: "https://coachy.net",
		description: "Coachy is a platform for creating and selling online courses with integrated payment systems and GDPR-compliant data storage​.",
		icon: "Coachy.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "coachy:dom:0",
				kind: "dom",
				selector: "iframe[src*='embed.coachy.net/']",
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
		id: "coassemble",
		name: "Coassemble",
		website: "https://coassemble.com",
		description: "Coassemble is an eLearning and team training platform that provides tools for creating, delivering, and managing training content for organizations and teams.",
		icon: "Coassemble.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "coassemble:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("frontend\\.coassemble\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
			],
		},
	},
	{
		id: "coppermine",
		name: "Coppermine",
		website: "https://coppermine-gallery.net",
		description: "Coppermine is an open-source image gallery application.",
		icon: "Coppermine.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "coppermine:html:0",
				kind: "html",
				pattern: new RegExp("<!--Coppermine Photo Gallery ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "coppermine:dom:1",
				kind: "dom",
				selector: "link[href*='/coppermine.css'][rel='stylesheet']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "coppermine:html:2",
				kind: "html",
				pattern: new RegExp("<!--coppermine photo gallery ([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:coppermine-gallery:coppermine_photo_gallery:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "data8",
		name: "Data8",
		website: "https://www.data-8.co.uk",
		description: "Data8 is a data quality management and validation platform.",
		icon: "Data8.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "data8:jsGlobal:0",
				kind: "jsGlobal",
				property: "data8",
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
		id: "docfx",
		name: "DocFX",
		website: "https://github.com/dotnet/docfx",
		description: "DocFX is a tool for building and publishing API documentation for .NET projects.",
		icon: "DocFX.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "docfx:meta:0",
				kind: "meta",
				key: "docfx:navrel",
				valuePattern: new RegExp("toc.html", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "docfx:meta:1",
				kind: "meta",
				key: "docfx:tocrel",
				valuePattern: new RegExp("toc.html", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "docfx:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("docfx\\s([\\d\\.]+)", "i"),
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
		id: "docsify",
		name: "Docsify",
		website: "https://docsify.js.org",
		description: "Docsify is an open-source documentation generator for creating user-friendly documentation websites.",
		icon: "Docsify.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "docsify:jsGlobal:0",
				kind: "jsGlobal",
				property: "Docsify.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "docsify:jsGlobal:1",
				kind: "jsGlobal",
				property: "DocsifyCompiler",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:docsifyjs:docsify:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "doctave",
		name: "Doctave",
		website: "https://www.doctave.com",
		description: "Doctave is a platform for creating modern Markdown and OpenAPI-based developer documentation portals using a Git-friendly docs-as-code workflow.",
		icon: "Doctave.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "doctave:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Doctave$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "doctave:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^doctave$", "i"),
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
		id: "docusaurus",
		name: "Docusaurus",
		website: "https://docusaurus.io/",
		description: "Docusaurus is a tool for teams to publish documentation websites.",
		icon: "docusaurus.svg",
		categories: [
			"content-publishing",
			"framework",
		],
		rules: [
			{
				id: "docusaurus:jsGlobal:0",
				kind: "jsGlobal",
				property: "__DOCUSAURUS_INSERT_BASEURL_BANNER",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "docusaurus:jsGlobal:1",
				kind: "jsGlobal",
				property: "docusaurus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "docusaurus:jsGlobal:2",
				kind: "jsGlobal",
				property: "search.indexName",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "docusaurus:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Docusaurus(?: v(.+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "docusaurus:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^docusaurus(?: v(.+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"react",
			"webpack",
		],
	},
	{
		id: "dokeos",
		name: "Dokeos",
		website: "https://dokeos.com",
		description: "Dokeos is an e-learning and course management web application.",
		icon: "Dokeos.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "dokeos:html:0",
				kind: "html",
				pattern: new RegExp("(?:Portal <a[^>]+>Dokeos|@import \"[^\"]+dokeos_blue)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "dokeos:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Dokeos", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dokeos:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Dokeos", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "dokeos:html:3",
				kind: "html",
				pattern: new RegExp("(?:portal <a[^>]+>dokeos|@import \"[^\"]+dokeos_blue)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "dokeos:header:4",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("dokeos", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "dokeos:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("dokeos", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:dokeos:dokeos:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ckeditor",
			"jquery",
			"php",
			"xajax",
		],
	},
	{
		id: "dokuwiki",
		name: "DokuWiki",
		website: "https://www.dokuwiki.org",
		description: "DokuWiki is an open-source wiki application that stores content in plain text files.",
		icon: "DokuWiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "dokuwiki:jsGlobal:0",
				kind: "jsGlobal",
				property: "DOKU_TPL",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dokuwiki:jsGlobal:1",
				kind: "jsGlobal",
				property: "doku_edit_text_content",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dokuwiki:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^DokuWiki$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "dokuwiki:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^DokuWiki( Release [\\d-]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "dokuwiki:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^dokuwiki$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "dokuwiki:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^dokuwiki( release [\\d-]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:dokuwiki:dokuwiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "doxygen",
		name: "Doxygen",
		website: "https://www.doxygen.nl/",
		description: "Doxygen is a documentation generator, a tool for writing software reference documentation.",
		icon: "Doxygen.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "doxygen:html:0",
				kind: "html",
				pattern: new RegExp("(?:<!-- Generated by Doxygen ([\\d.]+)|<link[^>]+doxygen\\.css)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "doxygen:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Doxygen ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "doxygen:dom:2",
				kind: "dom",
				selector: "link[href*='doxygen.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "doxygen:html:3",
				kind: "html",
				pattern: new RegExp("(?:<!-- generated by doxygen ([\\d.]+)|<link[^>]+doxygen\\.css)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "doxygen:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("doxygen ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:doxygen:doxygen:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "dropinblog",
		name: "DropInBlog",
		website: "https://dropinblog.com",
		description: "DropInBlog is a remotely hosted, cloud based platform that is designed to embed a blog into your html site.",
		icon: "DropInBlog.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "dropinblog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dropinblog\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dropinblog:dom:1",
				kind: "dom",
				selector: "link[href*='.dropinblog.com/']",
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
		id: "dspace",
		name: "DSpace",
		website: "https://dspace.org/",
		description: "DSpace is a software platform for academic, non-profit, and commercial organizations to create and manage open digital repositories.",
		icon: "DSpace.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "dspace:jsGlobal:0",
				kind: "jsGlobal",
				property: "DSpaceChoiceLookup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dspace:jsGlobal:1",
				kind: "jsGlobal",
				property: "DSpaceChoicesSetup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dspace:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("DSpace ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "dspace:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("dspace ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ead-plataforma",
		name: "EAD Plataforma",
		website: "https://eadplataforma.com",
		description: "EAD Plataforma is a distance learning platform designed to deliver online educational content and support remote instruction across various subjects.",
		icon: "EADPlataforma.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "ead-plataforma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.eadplataforma\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ead-plataforma:jsGlobal:1",
				kind: "jsGlobal",
				property: "getEadPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ead-plataforma:jsGlobal:2",
				kind: "jsGlobal",
				property: "taxa_ead_base_boleto",
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
		id: "echalk",
		name: "eChalk",
		website: "https://www.echalk.com",
		description: "eChalk is a school website and learning management system.",
		icon: "eChalk.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "echalk:dom:0",
				kind: "dom",
				selector: "link[href*='echalk-slate-prod.s3.amazonaws']",
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
		id: "edmingle",
		name: "Edmingle",
		website: "https://www.edmingle.com",
		description: "Edmingle is a course creation system that enables organizations to design, manage, and deliver online training programs.",
		icon: "Edmingle.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "edmingle:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("edmingle\\.b-cdn\\.net"),
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
		id: "edwiser-bridge",
		name: "Edwiser Bridge",
		website: "https://edwiser.org",
		description: "Edwiser Bridge is a Wordpress plugin facilitating the sale of Moodle courses with synchronized data and single sign-on capability.",
		icon: "EdwiserBridge.svg",
		categories: [
			"content-publishing",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "edwiser-bridge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/edwiser-bridge(?:-sso|-pro)?\\/public\\/assets\\/js\\/.+\\.js\\?ver=(\\d+(?:\\.\\d+)+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "edwiser-bridge:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/edwiser-bridge']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "eloomi",
		name: "Eloomi",
		website: "https://eloomi.com",
		description: "Eloomi is a cloud-based learning management system (LMS) and performance management platform.",
		icon: "Eloomi.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "eloomi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/cdn\\.eloomi\\.com\\/"),
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
		id: "elopage",
		name: "Elopage",
		website: "https://elopage.com",
		description: "Elopage is a tool made for entrepreneurs to setup, manage, and scale their digital businesses around digital products, online courses, memberships, tickets, and digital services.",
		icon: "Elopage.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "elopage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.myelopage\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elopage:dom:1",
				kind: "dom",
				selector: "iframe[src*='elopage.com']",
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
		id: "enrollware",
		name: "Enrollware",
		website: "https://www.enrollwaresolutions.com",
		description: "Enrollware is a CPR class management software that streamlines course scheduling, student registration, instructor tracking, and certification management for training providers.",
		icon: "Enrollware.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "enrollware:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.enrollware\\.js"),
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
		id: "evernote",
		name: "Evernote",
		website: "https://evernote.com",
		description: "Evernote is a digital workspace that organizes notes, tasks, and schedules in one place for project management and information retention.",
		icon: "Evernote.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "evernote:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.evernote\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "evernote:jsGlobal:1",
				kind: "jsGlobal",
				property: "Evernote.Ajax",
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
			cpe: "cpe:2.3:a:evernote:evernote:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "famly",
		name: "Famly",
		website: "https://www.famly.co",
		description: "Famly is a digital platform enabling early educators and families to collaborate, share responsibilities, and support child development.",
		icon: "Famly.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "famly:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.famly\\.co"),
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
		id: "forento",
		name: "Forento",
		website: "https://forento.io",
		description: "Forento is a platform that allows selling courses and digital downloads while managing creation, marketing, and scaling of online businesses under custom branding.",
		icon: "Forento.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "forento:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.forento\\.site"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "forento:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^forento$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "foswiki",
		name: "Foswiki",
		website: "https://foswiki.org",
		description: "Foswiki is a free open-source collaboration platform.",
		icon: "foswiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "foswiki:html:0",
				kind: "html",
				pattern: new RegExp("<div class=\"foswiki(?:Copyright|Page|Main)\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "foswiki:jsGlobal:1",
				kind: "jsGlobal",
				property: "foswiki",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "foswiki:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^FOSWIKISTRIKEONE$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "foswiki:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^SFOSWIKISID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "foswiki:dom:4",
				kind: "dom",
				selector: "div.foswikiCopyright, div.foswikiPage, div.foswikiMain",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "foswiki:html:5",
				kind: "html",
				pattern: new RegExp("<div class=\"foswiki(?:copyright|page|main)\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "foswiki:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^foswikistrikeone$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "foswiki:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^sfoswikisid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:foswiki:foswiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "furo",
		name: "Furo",
		website: "https://pradyunsg.me/furo",
		description: "Furo is a customizable Sphinx documentation theme designed to provide a clean, responsive, and user-friendly layout for technical and project documentation.",
		icon: "Furo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "furo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\/scripts\\/furo\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "gallery",
		name: "Gallery",
		website: "https://galleryproject.org/",
		description: "Gallery is an open-source web based photo album organiser.",
		icon: "Gallery.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "gallery:html:0",
				kind: "html",
				pattern: new RegExp("<div id=\"gsNavBar\" class=\"gcBorder1\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gallery:html:1",
				kind: "html",
				pattern: new RegExp("<a href=\"http:\\/\\/gallery\\.sourceforge\\.net\"><img[^>]+Powered by Gallery\\s*(?:(?:v|Version)\\s*([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gallery:jsGlobal:2",
				kind: "jsGlobal",
				property: "$.fn.gallery_valign",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gallery:jsGlobal:3",
				kind: "jsGlobal",
				property: "galleryAuthToken",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gallery:dom:4",
				kind: "dom",
				selector: "div[id*='gsNavBar']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "gallery:dom:5",
				kind: "dom",
				selector: "div[class*='gcBorder1']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "gallery:html:6",
				kind: "html",
				pattern: new RegExp("<a href=\"http:\\/\\/gallery\\.sourceforge\\.net\"><img[^>]+powered by gallery\\s*(?:(?:v|version)\\s*([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gallery:html:7",
				kind: "html",
				pattern: new RegExp("<div id=\"gsnavbar\" class=\"gcborder1\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gallery:dom:8",
				kind: "dom",
				selector: "div[id*='gsNavBar'], div[class*='gcBorder1']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:galleryproject:gallery:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "genially",
		name: "Genially",
		website: "https://genially.com",
		description: "Genially is a platform that enables the creation of interactive and gamified digital experiences for presentations, training, and educational content.",
		icon: "Genially.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "genially:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.genially\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "genially:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Genially", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "genially:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.genially\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "genially:header:3",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^genially", "i"),
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
		id: "getterms",
		name: "GetTerms",
		website: "https://getterms.io",
		description: "GetTerms is a tool that generates privacy policies for web platforms.",
		icon: "GetTerms.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "getterms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getterms\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "gitbook",
		name: "GitBook",
		website: "https://www.gitbook.com",
		description: "GitBook is a command-line tool for creating documentation using Git and Markdown.",
		icon: "GitBook.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "gitbook:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.gitbook\\.com\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "gitbook:jsGlobal:1",
				kind: "jsGlobal",
				property: "__GITBOOK_INITIAL_PROPS__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitbook:jsGlobal:2",
				kind: "jsGlobal",
				property: "__GITBOOK_INITIAL_STATE__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitbook:jsGlobal:3",
				kind: "jsGlobal",
				property: "__GITBOOK_LAZY_MODULES__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gitbook:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("GitBook ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gitbook:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("gitbook ([\\d.]+)?", "i"),
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
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:gitbook:gitbook:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "graphy",
		name: "Graphy",
		website: "https://graphy.com",
		description: "Graphy is a platform that enables the creation and scaling of courses, communities, and digital products using AI tools.",
		icon: "Graphy.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "graphy:jsGlobal:0",
				kind: "jsGlobal",
				property: "getGraphyCookie",
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
		id: "gurucan",
		name: "Gurucan",
		website: "https://www.gurucan.com",
		description: "Gurucan is a platform that enables users to create and sell online courses through a single interface.",
		icon: "Gurucan.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "gurucan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.gurucan\\.com"),
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
		id: "haddock",
		name: "Haddock",
		website: "https://www.haskell.org/haddock/",
		description: "Haddock is a tool for automatically generating documentation from annotated Haskell source code.",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "haddock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("haddock-util\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "haddock:html:1",
				kind: "html",
				pattern: new RegExp("<p>Produced by <a href=\"http:\\/\\/www\\.haskell\\.org\\/haddock\\/\">Haddock<\\/a> version ([0-9.]+)<\\/p>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "haddock:html:2",
				kind: "html",
				pattern: new RegExp("<p>produced by <a href=\"http:\\/\\/www\\.haskell\\.org\\/haddock\\/\">haddock<\\/a> version ([0-9.]+)<\\/p>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "haloscan",
		name: "Haloscan",
		website: "https://www.haloscan.com",
		description: "Haloscan is a tool that enables blogs to incorporate trackbacks and comments, allowing users to engage with blog content through discussions and feedback.",
		icon: "Haloscan.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "haloscan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.haloscan\\.com\\/"),
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
		id: "hashnode",
		name: "Hashnode",
		website: "https://hashnode.com/",
		description: "Hashnode is a free developer blogging platform that allows you to publish articles on your own domain and helps you stay connected with a global developer community.",
		icon: "hashnode.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "hashnode:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hashnode\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hashnode:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.(?:hashnode)\\.dev"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "hashnode:dom:2",
				kind: "dom",
				selector: "div.css-zigog8",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "heights-platform",
		name: "Heights Platform",
		website: "https://www.heightsplatform.com",
		description: "Heights Platform is an all-in-one platform for creating and selling online courses.",
		icon: "HeightsPlatform.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "heights-platform:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_Heights_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "heights-platform:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("uploads\\.heightsplatform\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "heights-platform:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_heights_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "heights-platform:header:3",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("uploads\\.heightsplatform\\.com", "i"),
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
		id: "helpdocs",
		name: "HelpDocs",
		website: "https://www.helpdocs.io",
		description: "HelpDocs is an knowledge management system.",
		icon: "HelpDocs.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "helpdocs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.helpdocs\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "helpdocs:jsGlobal:1",
				kind: "jsGlobal",
				property: "HDAnalytics",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "helpdocs:jsGlobal:2",
				kind: "jsGlobal",
				property: "HDUtils",
				confidence: 25,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "helpdocs:jsGlobal:3",
				kind: "jsGlobal",
				property: "hd_instant_search",
				confidence: 50,
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
		id: "huddle",
		name: "Huddle",
		website: "https://www.thehuddle.nl",
		description: "Huddle is a digital product agency based in Amsterdam, Netherlands, specialising in developing and designing custom software solutions for startups and enterprises, including e-learning products, community platforms, and mobile applications.",
		icon: "Huddle.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "huddle:dom:0",
				kind: "dom",
				selector: "link[href*='.thehuddle.nl/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "huddle:jsGlobal:1",
				kind: "jsGlobal",
				property: "HuddleEvent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "huddle:jsGlobal:2",
				kind: "jsGlobal",
				property: "HuddleUser",
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
		id: "ikiwiki",
		name: "ikiwiki",
		website: "https://ikiwiki.info",
		description: "ikiwiki is a free and open-source wiki application.",
		icon: "ikiwiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "ikiwiki:html:0",
				kind: "html",
				pattern: new RegExp("<link rel=\"alternate\" type=\"application\\/x-wiki\" title=\"Edit this page\" href=\"[^\"]*\\/ikiwiki\\.cgi"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "ikiwiki:html:1",
				kind: "html",
				pattern: new RegExp("<a href=\"\\/(?:cgi-bin\\/)?ikiwiki\\.cgi\\?do="),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "ikiwiki:dom:2",
				kind: "dom",
				selector: "link[rel='alternate'][type='application/x-wiki'][title='Edit this page'][href*='/ikiwiki.cgi']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ikiwiki:html:3",
				kind: "html",
				pattern: new RegExp("<link rel=\"alternate\" type=\"application\\/x-wiki\" title=\"edit this page\" href=\"[^\"]*\\/ikiwiki\\.cgi"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:ikiwiki:ikiwiki:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ilias",
		name: "Ilias",
		website: "https://www.ilias.de",
		description: "Ilias is an open source learning management system.",
		icon: "Ilias.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "ilias:jsGlobal:0",
				kind: "jsGlobal",
				property: "il.Accordion",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ilias:jsGlobal:1",
				kind: "jsGlobal",
				property: "ilAccordionsInits",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ilias:jsGlobal:2",
				kind: "jsGlobal",
				property: "ilTagging",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:ilias:ilias:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "imagekit",
		name: "Imagekit",
		website: "https://imagekit.io/",
		description: "ImageKit is a real-time image and video transformation, optimization, and delivery service with built-in digital asset management, powered by a global CDN.",
		icon: "ImageKit.svg",
		categories: [
			"content-publishing",
			"infrastructure-hosting",
			"media-video",
		],
		rules: [
			{
				id: "imagekit:dom:0",
				kind: "dom",
				selector: "link[href*='ik.imagekit.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "imagekit:header:1",
				kind: "header",
				key: "x-server",
				valuePattern: new RegExp("imagekit\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "imagekit:dom:2",
				kind: "dom",
				selector: "img[src*='.imagekit.io/'], img[data-src*='.imagekit.io/'], source[src*='.imagekit.io/'], source[data-src*='.imagekit.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "imagekit:header:3",
				kind: "header",
				key: "x-server",
				valuePattern: new RegExp("ImageKit\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "imagekit:dns:4",
				kind: "dns",
				valuePattern: new RegExp("\\.imgkit\\.net", "i"),
				recordType: "SOA",
				description: "DNS record matches a known technology marker.",
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
		id: "inso",
		name: "Inso",
		website: "https://inso.pl",
		description: "Inso is an application for kindergartens and nurseries that facilitates communication with parents and supports the automated preparation of billing information.",
		icon: "Inso.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "inso:header:0",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("app\\.inso\\.pl", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "inso:header:1",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("app\\.inso\\.pl", "i"),
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
		id: "intercom-articles",
		name: "Intercom Articles",
		website: "https://www.intercom.com/articles",
		description: "Intercom Articles is a tool to create, organise and publish help articles.",
		icon: "Intercom.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "intercom-articles:html:0",
				kind: "html",
				pattern: new RegExp("<a href=\"https:\\/\\/www.intercom.com\\/intercom-link[^\"]+solution=customer-support[^>]+>We run on Intercom"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "intercom-articles:html:1",
				kind: "html",
				pattern: new RegExp("<a href=\"https:\\/\\/www.intercom.com\\/intercom-link[^\"]+solution=customer-support[^>]+>we run on intercom"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "invenio",
		name: "Invenio",
		website: "https://invenio-software.org",
		description: "Invenio is an open-source software framework for large-scale digital repositories that provides the tools for management of digital assets in an institutional repository and research data management systems.",
		icon: "Invenio.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "invenio:html:0",
				kind: "html",
				pattern: new RegExp("(?:Powered by|System)\\s+(?:CERN )?<a (?:class=\"footer\" )?href=\"http:\\/\\/(?:cdsware\\.cern\\.ch(?:\\/invenio)?|invenio-software\\.org|cern\\.ch\\/invenio)(?:\\/)?\">(?:CDS )?Invenio<\\/a>\\s*v?([\\d\\.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "invenio:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^INVENIOSESSION$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "invenio:html:2",
				kind: "html",
				pattern: new RegExp("(?:powered by|system)\\s+(?:cern )?<a (?:class=\"footer\" )?href=\"http:\\/\\/(?:cdsware\\.cern\\.ch(?:\\/invenio)?|invenio-software\\.org|cern\\.ch\\/invenio)(?:\\/)?\">(?:cds )?invenio<\\/a>\\s*v?([\\d\\.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "invenio:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^inveniosession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "irislms",
		name: "IrisLMS",
		website: "https://irislms.ir",
		description: "IrisLMS comprehensive education management system, in order to support e-learning and provide suitable conditions for holding online and offline classes with all facilities.",
		icon: "IrisLMS.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "irislms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.irislms\\.ir\\/"),
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
		id: "jalbum",
		name: "JAlbum",
		website: "https://jalbum.net/en",
		description: "jAlbum is across-platform photo website software for creating and uploading galleries from images and videos.",
		icon: "JAlbum.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "jalbum:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("JAlbum( [\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "jalbum:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("jalbum( [\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"java",
		],
	},
	{
		id: "javadoc",
		name: "Javadoc",
		website: "https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html",
		description: "Javadoc is a tool used for generating Java code documentation in HTML format from Java source code.",
		icon: "Java.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "javadoc:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Generated by javadoc -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "javadoc:html:1",
				kind: "html",
				pattern: new RegExp("<!-- generated by javadoc -->"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "jugem",
		name: "Jugem",
		website: "https://jugem.jp",
		description: "Jugem is a blogging software from Japan that allows users to create, manage, and publish online content.",
		icon: "Jugem.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "jugem:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("imaging\\.jugem\\.jp"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kamar",
		name: "KAMAR",
		website: "https://kamar.nz",
		description: "KAMAR is a Student Management System utilised by secondary schools.",
		icon: "KAMAR.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "kamar:jsGlobal:0",
				kind: "jsGlobal",
				property: "KAMAR.has_address_ben_found",
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
		id: "keepeek",
		name: "Keepeek",
		website: "https://www.keepeek.com",
		description: "Keepeek is a digital asset management and photo library solutions provider.",
		icon: "Keepeek.svg",
		categories: [
			"content-publishing",
			"media-video",
		],
		rules: [
			{
				id: "keepeek:jsGlobal:0",
				kind: "jsGlobal",
				property: "keepeekScrollToName",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "kiwify",
		name: "Kiwify",
		website: "https://kiwify.com.br",
		description: "Kiwify is an AI-powered platform for creators and students that provides smart tools to support teaching, learning, and content creation.",
		icon: "Kiwify.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "kiwify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.kiwify\\.com\\.br"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "knoma",
		name: "Knoma",
		website: "https://www.knoma.io",
		description: "Knoma is a platform where users can search hundreds of courses from leading schools and bootcamps.",
		icon: "Knoma.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "knoma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.knoma\\.io\\/"),
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
		id: "knorish",
		name: "Knorish",
		website: "https://knorish.com",
		description: "Knorish is a platform that enables users to create and sell online courses directly from their own websites.",
		icon: "Knorish.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "knorish:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^kn\\-antiforgery\\-cookie$", "i"),
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
		id: "koha",
		name: "Koha",
		website: "https://koha-community.org/",
		description: "Koha is an open-source Integrated Library System (ILS).",
		icon: "koha.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "koha:html:0",
				kind: "html",
				pattern: new RegExp("<input name=\"koha_login_context\" value=\"intranet\" type=\"hidden\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "koha:html:1",
				kind: "html",
				pattern: new RegExp("<a href=\"\\/cgi-bin\\/koha\\/"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "koha:jsGlobal:2",
				kind: "jsGlobal",
				property: "KOHA",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "koha:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Koha ([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "koha:dom:4",
				kind: "dom",
				selector: "input[name*='koha_login_context'][type='hidden'], a[href*='/cgi-bin/koha/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "koha:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^koha ([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:koha:koha:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "launchlms",
		name: "LaunchLMS",
		website: "https://launchlms.com.br",
		description: "LaunchLMS is a learning management system that provides a customizable platform designed to adapt to different business training and development needs.",
		icon: "LaunchLMS.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "launchlms:dom:0",
				kind: "dom",
				selector: "link[href*='static.launchlab.com.br/']",
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
		id: "learnbase",
		name: "Learnbase",
		website: "https://uselearnbase.com",
		description: "Learnbase is an AI-powered platform for creators and students that provides tools to support teaching, learning, and content creation.",
		icon: "Learnbase.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "learnbase:jsGlobal:0",
				kind: "jsGlobal",
				property: "Learnbase",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "learnbase:jsGlobal:1",
				kind: "jsGlobal",
				property: "Learnbase.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "learnbase:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Learnbase$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "learnbase:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^learnbase$", "i"),
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
		id: "learndash",
		name: "LearnDash",
		website: "https://www.learndash.com",
		description: "LearnDash is a WordPress plugin that enables the creation and management of online courses, quizzes, and educational content within a website.",
		icon: "LearnDash.svg",
		categories: [
			"content-publishing",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "learndash:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/sfwd-lms/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:learndash:learndash:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "learnupon",
		name: "LearnUpon",
		website: "https://www.learnupon.com/",
		description: "LearnUpon is a learning management system (LMS) that helps businesses enhance employee development by streamlining the delivery, management, and tracking of training programs.",
		icon: "LearnUpon.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "learnupon:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_LearnUpon_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "learnupon:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_learnupon_session$", "i"),
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
		id: "learnworlds",
		name: "LearnWorlds",
		website: "https://www.learnworlds.com",
		description: "LearnWorlds is a powerful yet lightweight, user-friendly, white-labeled cloud-based LMS ideal for versatile employee training.",
		icon: "LearnWorlds.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "learnworlds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mycourse\\.app\\/v([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "learnworlds:jsGlobal:1",
				kind: "jsGlobal",
				property: "LWClient.ebooks",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "learnworlds:jsGlobal:2",
				kind: "jsGlobal",
				property: "LWSettings.deactive_components",
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
		id: "learnybox",
		name: "LearnyBox",
		website: "https://learnybox.com",
		description: "LearnyBox is an all-in-one platform that enables users to launch, manage, and sell training courses.",
		icon: "LearnyBox.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "learnybox:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("learnybox\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "learnybox:jsGlobal:1",
				kind: "jsGlobal",
				property: "ExecuteActionLearnyMail",
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
		id: "lifterlms",
		name: "LifterLMS",
		website: "https://lifterlms.com",
		description: "LifterLMS is a learning management system plugin for WordPress.",
		icon: "LifterLMS.svg",
		categories: [
			"content-publishing",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "lifterlms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/plugins\\/lifterlms\\/assets\\/js\\/llms\\.min\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lifterlms:dom:1",
				kind: "dom",
				selector: "link#lifterlms-styles-css",
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
		id: "lightfolio",
		name: "Lightfolio",
		website: "https://www.lightfolio.com",
		description: "Lightfolio is a platform that offers online photo galleries designed for easy sharing, downloading, and selling of images.",
		icon: "Lightfolio.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "lightfolio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lfpublicstatic\\.lightfolio\\.com"),
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
		id: "lightspeed-vt",
		name: "LightSpeed VT",
		website: "https://lightspeedvt.com",
		description: "LightSpeed VT is a learning management system designed to deliver, track, and manage educational courses and training programs.",
		icon: "LightSPeedVT.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "lightspeed-vt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lightspeedvt\\.com"),
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
		id: "livejournal",
		name: "LiveJournal",
		website: "https://www.livejournal.com",
		description: "LiveJournal is a social networking service where users can keep a blog, journal or diary.",
		icon: "LiveJournal.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "livejournal:url:0",
				kind: "url",
				pattern: new RegExp("\\.livejournal\\.com"),
				description: "Page URL matches a known technology marker.",
			},
		],
	},
	{
		id: "lychee",
		name: "Lychee",
		website: "https://lycheeorg.github.io",
		description: "Lychee is a photo-management tool designed to operate on your server or web-space.",
		icon: "Lychee.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "lychee:jsGlobal:0",
				kind: "jsGlobal",
				property: "lychee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lychee:jsGlobal:1",
				kind: "jsGlobal",
				property: "lychee.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lychee:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Lychee v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "lychee:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("lychee v([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:lycheeorg:lychee:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "maestrus",
		name: "Maestrus",
		website: "https://maestrus.com",
		description: "Maestrus is a complete EAD platform that enables course sales, employee training, and secure content delivery with personalization.",
		icon: "Maestrus.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "maestrus:dom:0",
				kind: "dom",
				selector: "div#maestrus-carousel > div#myMaestrus-carousel",
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
		id: "manula",
		name: "Manula",
		website: "https://www.manula.com",
		description: "Manula is an online software for creating user manuals.",
		icon: "Manula.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "manula:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.manula\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "manula:jsGlobal:1",
				kind: "jsGlobal",
				property: "ManulaWebProductVersionCookiePath",
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
		id: "master-slider",
		name: "Master Slider",
		website: "https://www.masterslider.com",
		description: "Master Slider is an SEO friendly, responsive image and video slider.",
		icon: "master_slider.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "master-slider:jsGlobal:0",
				kind: "jsGlobal",
				property: "MasterSlider",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "master-slider:jsGlobal:1",
				kind: "jsGlobal",
				property: "MasterSlider.version",
				valuePattern: new RegExp("^([0-9\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "masteriyo",
		name: "Masteriyo",
		website: "https://masteriyo.com",
		description: "Masteriyo is a course creation and monetization tool for WordPress.",
		icon: "Masteriyo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "masteriyo:dom:0",
				kind: "dom",
				selector: "style[id*='masteriyo-public-inline-css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "masteriyo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_MASTERIYO_WISHLIST_ADDON_",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:themegrill:masteriyo:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "mastery-manager",
		name: "Mastery Manager",
		website: "https://masterymanager.com",
		description: "Mastery Manager is a student learning system designed to track academic progress, evaluate performance, and support data-driven instructional planning.",
		icon: "MasteryManager.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mastery-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.masterymanager\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "material-for-mkdocs",
		name: "Material for MkDocs",
		website: "https://squidfunk.github.io/mkdocs-material/",
		description: "Material for MkDocs is a documentation framework built on MkDocs, a static site generator, providing tools and features for creating and organizing project documentation websites.",
		icon: "MaterialMkDocs.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "material-for-mkdocs:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^mkdocs-([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "mdbook",
		name: "mdBook",
		website: "https://github.com/rust-lang/mdBook",
		description: "mdBook is a utility to create modern online books from Markdown files.",
		icon: "mdBook.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mdbook:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("localStorage\\.getItem\\('mdbook-(?:sidebar|theme)'\\)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "mdbook:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("localstorage\\.getitem\\('mdbook-(?:sidebar|theme)'\\)"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mediawiki",
		name: "MediaWiki",
		website: "https://www.mediawiki.org",
		description: "MediaWiki is a free and open-source wiki engine.",
		icon: "MediaWiki.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mediawiki:html:0",
				kind: "html",
				pattern: new RegExp("<body[^>]+class=\"mediawiki\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mediawiki:html:1",
				kind: "html",
				pattern: new RegExp("<(?:a|img)[^>]+>Powered by MediaWiki<\\/a>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mediawiki:html:2",
				kind: "html",
				pattern: new RegExp("<a[^>]+\\/Special:WhatLinksHere\\/"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mediawiki:jsGlobal:3",
				kind: "jsGlobal",
				property: "mw.util.toggleToc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mediawiki:jsGlobal:4",
				kind: "jsGlobal",
				property: "wgTitle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mediawiki:jsGlobal:5",
				kind: "jsGlobal",
				property: "wgVersion",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mediawiki:meta:6",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^MediaWiki ?(.+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mediawiki:dom:7",
				kind: "dom",
				selector: "body[class*='mediawiki']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mediawiki:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^wiki\\\\d\\+_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "mediawiki:html:9",
				kind: "html",
				pattern: new RegExp("<(?:a|img)[^>]+>powered by mediawiki<\\/a>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mediawiki:html:10",
				kind: "html",
				pattern: new RegExp("<a[^>]+\\/special:whatlinkshere\\/"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mediawiki:meta:11",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^mediawiki ?(.+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mediawiki:mediawiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "medium",
		name: "Medium",
		website: "https://medium.com",
		description: "Medium is an online publishing platform.",
		icon: "Medium.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "medium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("medium\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "medium:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?medium\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "medium:header:2",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Medium$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "medium:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^medium$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"node-js",
		],
	},
	{
		id: "mexty",
		name: "Mexty",
		website: "https://mexty.ai",
		description: "Mexty is a no-code, AI-powered authoring platform that enables educators to create interactive lessons, activities, and courses quickly.",
		icon: "Mexty.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mexty:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Mexty Team$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mexty:meta:1",
				kind: "meta",
				key: "creator",
				valuePattern: new RegExp("^Mexty$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mexty:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^mexty team$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mexty:meta:3",
				kind: "meta",
				key: "creator",
				valuePattern: new RegExp("^mexty$", "i"),
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
		id: "mkdocs",
		name: "MkDocs",
		website: "https://www.mkdocs.org/",
		description: "MkDocs is a static site generator, used for building project documentation.",
		icon: "mkdocs.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mkdocs:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^mkdocs-([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:mkdocs:mkdocs:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "moinmoin",
		name: "MoinMoin",
		website: "https://moinmo.in",
		description: "MoinMoin is a wiki engine implemented in Python.",
		icon: "MoinMoin.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "moinmoin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moin(?:_static(\\d)(\\d)(\\d)|.+)\\/common\\/js\\/common\\.js"),
				version: {
					source: "match",
					template: "$1.$2.$3",
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moinmoin:jsGlobal:1",
				kind: "jsGlobal",
				property: "show_switch2gui",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moinmoin:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^MOIN_SESSION$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "moinmoin:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^moin_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:moinmo:moinmoin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "moodle",
		name: "Moodle",
		website: "https://moodle.org",
		description: "Moodle is a free and open-source Learning Management System (LMS) written in PHP and distributed under the GNU General Public License.",
		icon: "Moodle.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "moodle:html:0",
				kind: "html",
				pattern: new RegExp("<img[^>]+moodlelogo"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "moodle:jsGlobal:1",
				kind: "jsGlobal",
				property: "M.core",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moodle:jsGlobal:2",
				kind: "jsGlobal",
				property: "Y.Moodle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moodle:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^MOODLEID_$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "moodle:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^MoodleSession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "moodle:meta:5",
				kind: "meta",
				key: "keywords",
				valuePattern: new RegExp("^moodle", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "moodle:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^moodleid_$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "moodle:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^moodlesession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:moodle:moodle:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "mypersonas",
		name: "MyPersonas",
		website: "https://mypersonas.ai",
		description: "MyPersonas is an AI-powered platform that creates digital replicas of key employees to handle repetitive, routine inquiries, reducing interruptions and streamlining access to internal knowledge.",
		icon: "MyPersonas.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "mypersonas:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.mypersonas\\.ai\\/"),
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
		id: "nextgen-gallery",
		name: "NextGEN Gallery",
		website: "https://www.imagely.com/wordpress-gallery-plugin",
		description: "NextGEN Gallery is a free open-source image management plugin for the WordPress content management system.",
		icon: "NextGEN Gallery.png",
		categories: [
			"content-publishing",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "nextgen-gallery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/nextgen-gallery\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nextgen-gallery:html:1",
				kind: "html",
				pattern: new RegExp("<!-- <meta name=\"NextGEN\" version=\"([\\d.]+)\" \\/> -->"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "nextgen-gallery:jsGlobal:2",
				kind: "jsGlobal",
				property: "nextgen_lightbox_settings.static_path",
				valuePattern: new RegExp("\\/wp-content\\/plugins\\/nextgen-gallery\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nextgen-gallery:meta:3",
				kind: "meta",
				key: "NextGEN",
				valuePattern: new RegExp("^([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "nextgen-gallery:html:4",
				kind: "html",
				pattern: new RegExp("<!-- <meta name=\"nextgen\" version=\"([\\d.]+)\" \\/> -->"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:imagely:nextgen_gallery:*:*:*:*:*:*:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "noodle-factory",
		name: "Noodle Factory",
		website: "https://www.noodlefactory.ai",
		description: "Noodle Factory is a tutor platform that enhances teaching through personalized and engaging student learning experiences.",
		icon: "NoodleFactory.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "noodle-factory:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("portalapi\\.noodlefactory\\.ai"),
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
		id: "obsidian-publish",
		name: "Obsidian Publish",
		website: "https://obsidian.md/publish",
		description: "Obsidian Publish is an official, paid plugin for Obsidian that allows users to post selected notes to a directory on the publish.obsidian.md domain.",
		icon: "Obsidian Publish.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "obsidian-publish:jsGlobal:0",
				kind: "jsGlobal",
				property: "siteInfo.host",
				valuePattern: new RegExp("\\.obsidian\\.md"),
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
			"pixijs",
			"prism",
		],
	},
	{
		id: "onehub",
		name: "Onehub",
		website: "https://www.onehub.com",
		description: "Onehub is a cloud-based platform that enables secure file sharing and access control for businesses and teams.",
		icon: "Onehub.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "onehub:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.onehub\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "onehub:jsGlobal:1",
				kind: "jsGlobal",
				property: "Onehub",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "onehub:jsGlobal:2",
				kind: "jsGlobal",
				property: "OnehubBarView",
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
		id: "open-journal-systems",
		name: "Open Journal Systems",
		website: "https://pkp.sfu.ca/ojs",
		description: "Open Journal Systems (OJS) is an open-source software application for managing and publishing scholarly journals.",
		icon: "Open Journal Systems.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "open-journal-systems:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^OJSSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "open-journal-systems:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Open Journal Systems(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "open-journal-systems:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^ojssid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "open-journal-systems:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("open journal systems(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:public_knowledge_project:open_journal_systems:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "operoo",
		name: "Operoo",
		website: "https://operoo.com",
		description: "Operoo is a school workflow platform that supports administrative processes and communication management within educational institutions.",
		icon: "Operoo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "operoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.operoo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "opigno-lms",
		name: "Opigno LMS",
		website: "https://www.opigno.org",
		description: "Opigno LMS is an open-source Learning Management System (LMS) based on Drupal, designed for creating and delivering online courses and educational content.",
		icon: "Opigno LMS.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "opigno-lms:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("opigno_(?:commerce|wtp_app|scorm|learning_path)"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"drupal",
		],
	},
	{
		id: "oreed",
		name: "Oreed",
		website: "https://oreed.org/en",
		description: "Oreed is an all-in-one learning experience platform, centralizing all organizational learning, training, and development activities.",
		icon: "Oreed.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "oreed:dom:0",
				kind: "dom",
				selector: "body[class*='oreed-lms'], link[href*='.oreed.app/']",
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
		id: "overblog",
		name: "Overblog",
		website: "https://www.over-blog.com",
		description: "Overblog is a French blog platform that enables users to create and share content.",
		icon: "OverBlog.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "overblog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.over-blog-kiwi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paperless-pipeline",
		name: "Paperless Pipeline",
		website: "https://www.paperlesspipeline.com",
		description: "Paperless Pipeline is a real estate transaction management software.",
		icon: "PaperlessPipeline.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "paperless-pipeline:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.paperlesspipeline\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "paperless-pipeline:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Paperless Pipeline$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "paperless-pipeline:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^paperless pipeline$", "i"),
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
		id: "parentapps",
		name: "Parentapps",
		website: "https://www.parentapps.co.uk",
		description: "Parentapps is a school communication platform designed to streamline interaction between parents and teachers through centralized messaging and updates.",
		icon: "Parentapps.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "parentapps:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Parentapps(?: v\\.([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "parentapps:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("parentapps(?: v\\.([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "peachie",
		name: "Peachie",
		website: "https://peachie.io",
		description: "Peachie is an all-in-one CMS for creating and selling online courses while managing website content and related digital operations.",
		icon: "Peachie.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "peachie:dom:0",
				kind: "dom",
				selector: "iframe[src*='.mypeachie.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "peachie:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("go\\.mypeachie\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "peachie:header:2",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("go\\.mypeachie\\.com", "i"),
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
		id: "photoswipe",
		name: "PhotoSwipe",
		website: "https://photoswipe.com",
		description: "PhotoSwipe is an open-source gallery to support JavaScript-based image zooming.",
		icon: "PhotoSwipe.png",
		categories: [
			"content-publishing",
			"widgets-misc",
		],
		rules: [
			{
				id: "photoswipe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("photoswipe\\/([\\d\\.]+)\\/photoswipe\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "photoswipe:jsGlobal:1",
				kind: "jsGlobal",
				property: "PhotoSwipe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "photoswipe:jsGlobal:2",
				kind: "jsGlobal",
				property: "PhotoSwipeUI_Default",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "photoswipe:jsGlobal:3",
				kind: "jsGlobal",
				property: "photoswipeParseHash",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "phpalbum",
		name: "phpAlbum",
		website: "https://phpalbum.net",
		description: "phpAlbum is an open-source PHP script which allows you to create your personal photo album.",
		icon: "phpAlbum.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "phpalbum:html:0",
				kind: "html",
				pattern: new RegExp("<!--phpalbum ([.\\d\\s]+)-->"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:phpalbum:phpalbum:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "phpdocumentor",
		name: "phpDocumentor",
		website: "https://www.phpdoc.org",
		description: "phpDocumentor is an open-source documentation generator written in PHP.",
		icon: "phpDocumentor.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "phpdocumentor:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Generated by phpDocumentor"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpdocumentor:html:1",
				kind: "html",
				pattern: new RegExp("<!-- generated by phpdocumentor"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpdocumentor:dom:2",
				kind: "dom",
				selector: "header.phpdocumentor-header, nav.phpdocumentor-topnav",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"php",
		],
	},
	{
		id: "piwigo",
		name: "Piwigo",
		website: "https://piwigo.com",
		description: "Piwigo is an open-source photo management software designed for creating and managing online photo galleries.",
		icon: "Piwigo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "piwigo:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Piwigo\\s", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "piwigo:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^piwigo\\s", "i"),
				description: "Meta tag matches a known technology marker.",
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
			cpe: "cpe:2.3:a:piwigo:piwigo:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
		],
	},
	{
		id: "pixpa",
		name: "Pixpa",
		website: "https://www.pixpa.com",
		description: "Pixpa is a software that enables photographers, artists and creative designers build and manage online presence by letting them create a professional portfolio website without the need of any coding skills.",
		icon: "Pixpa.svg",
		categories: [
			"content-publishing",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "pixpa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themeassets\\.pixpa\\.com\\/"),
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
		id: "planet",
		name: "Planet",
		website: "https://planetplanet.org",
		description: "Planet is a feed aggregator, which creates pages with entries from the original feeds in chronological order, most recent entries first.",
		icon: "Planet.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "planet:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Planet(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "planet:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^planet(?:\\/([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:planet:planet:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "podia",
		name: "Podia",
		website: "https://www.podia.com",
		description: "Podia is a platform to host and sell online courses, memberships, and digital downloads.",
		icon: "Podia.svg",
		categories: [
			"content-publishing",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "podia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.podia\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "podia:jsGlobal:1",
				kind: "jsGlobal",
				property: "Podia.Checkout",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "podia:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_podia_storefront_visitor_id$", "i"),
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
		id: "populi",
		name: "Populi",
		website: "https://populi.co",
		description: "Populi is a platform that helps colleges manage academic and administrative operations while supporting a streamlined educational experience for students.",
		icon: "Populi.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "populi:dom:0",
				kind: "dom",
				selector: "iframe[src*='.populiweb.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "populi:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Populi$", "i"),
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
		id: "postach",
		name: "Postach",
		website: "https://postach.io",
		description: "Postach is a blogging platform integrated with Evernote, allowing users to create and manage blog posts directly from their Evernote account.",
		icon: "Postach.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "postach:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.postach\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "postman-api-documentation",
		name: "Postman API Documentation",
		website: "https://www.postman.com",
		description: "Postman is an API design and documentation platform.",
		icon: "PostmanAPIDocumentation.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "postman-api-documentation:jsGlobal:0",
				kind: "jsGlobal",
				property: "PostmanRunObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "postman-api-documentation:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Postman Documenter$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "postman-api-documentation:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^postman documenter$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "powerschool",
		name: "PowerSchool",
		website: "https://www.powerschool.com",
		description: "PowerSchool is a widely used student information system (SIS) used by K-12 schools, districts, and other educational institutions to manage student data and information. The software is developed and marketed by PowerSchool Group LLC, which is based in California, USA.",
		icon: "PowerSchool.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "powerschool:header:0",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.powerschool\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "powerschool:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^PowerSchool$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "powerschool:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^powerschool$", "i"),
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
		id: "productdyno",
		name: "ProductDyno",
		website: "https://productdyno.com",
		description: "ProductDyno is a digital platform designed to help users manage, protect, and deliver digital products while enhancing online presence.",
		icon: "ProductDyno.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "productdyno:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.productdyno\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "productdyno:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^productdyno_session$", "i"),
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
		id: "pronote",
		name: "PRONOTE",
		website: "https://www.index-education.com/fr/logiciel-gestion-vie-scolaire.php",
		description: "PRONOTE is an information system created by Index Education, a French company, designed for deployment in approximately 7,400 schools to enable streamlined communication among administrative personnel, teachers, and families.",
		icon: "PRONOTE.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "pronote:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^PRONOTE\\s[\\d]{4}\\s-\\s([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pronote:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^PRONOTE$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "pronote:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^pronote\\s[\\d]{4}\\s-\\s([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "pronote:meta:3",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^pronote$", "i"),
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
		id: "pukiwiki",
		name: "PukiWiki",
		website: "https://pukiwiki.sourceforge.io",
		description: "PukiWiki is a web-based WikiEngine that enables collaborative editing by allowing anyone to modify pages.",
		icon: "PukiWiki.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "pukiwiki:dom:0",
				kind: "dom",
				selector: "link[href*='/pukiwiki.css'], link[href*='/skin/pukiwiki.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:pukiwiki:pukiwiki:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "punchpass",
		name: "Punchpass",
		website: "https://punchpass.com",
		description: "Punchpass is a class management system designed to organize schedules, track attendance, and manage client information.",
		icon: "Punchpass.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "punchpass:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.punchpass\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "punchpass:jsGlobal:1",
				kind: "jsGlobal",
				property: "punchpassForm",
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
		id: "quickblog",
		name: "Quickblog",
		website: "https://www.quickblog.co",
		description: "Quickblog is a platform that aids bloggers and agencies in producing embedded, SEO-ready blog content seamlessly compatible with any existing website.",
		icon: "Quickblog.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "quickblog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quickblog\\.co\\/"),
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
		id: "raneto",
		name: "Raneto",
		website: "https://raneto.com",
		description: "Raneto is a Markdown-powered open-source Knowledgebase for Node.js that uses static files to manage and serve structured documentation.",
		icon: "Raneto.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "raneto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/scripts\\/raneto\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		id: "rapidoc",
		name: "RapiDoc",
		website: "https://rapidocweb.com",
		description: "RapiDoc is an open-source web component that generates interactive API documentation from OpenAPI specifications.",
		icon: "RapiDoc.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "rapidoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:^|\\/)rapidoc(?:-min)?\\.js(?:[?#]|$)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rapidoc:dom:1",
				kind: "dom",
				selector: "rapi-doc",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "rdoc",
		name: "RDoc",
		website: "https://github.com/ruby/rdoc",
		description: "RDoc produces HTML and command-line documentation for Ruby projects.",
		icon: "RDoc.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "rdoc:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+href=\"[^\"]*rdoc-style\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "rdoc:html:1",
				kind: "html",
				pattern: new RegExp("Generated by <a[^>]+href=\"https?:\\/\\/rdoc\\.rubyforge\\.org[^>]+>RDoc<\\/a> ([\\d.]*\\d)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "rdoc:html:2",
				kind: "html",
				pattern: new RegExp("Generated by <a href=\"https:\\/\\/ruby\\.github\\.io\\/rdoc\\/\">RDoc<\\/a> ([\\d.]*\\d)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "rdoc:jsGlobal:3",
				kind: "jsGlobal",
				property: "rdoc_rel_prefix",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rdoc:dom:4",
				kind: "dom",
				selector: "link[href*='rdoc-style.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rdoc:html:5",
				kind: "html",
				pattern: new RegExp("generated by <a href=\"https:\\/\\/ruby\\.github\\.io\\/rdoc\\/\">rdoc<\\/a> ([\\d.]*\\d)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "rdoc:html:6",
				kind: "html",
				pattern: new RegExp("generated by <a[^>]+href=\"https?:\\/\\/rdoc\\.rubyforge\\.org[^>]+>rdoc<\\/a> ([\\d.]*\\d)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:dave_thomas:rdoc:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby",
		],
	},
	{
		id: "read-the-docs",
		name: "Read the Docs",
		website: "https://about.readthedocs.com",
		description: "Read the Docs is a documentation platform that uses a Docs-as-Code workflow to provide versioned content, integrated previews, and secure authentication directly within standard Git development processes.",
		icon: "ReadtheDocs.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "read-the-docs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.readthedocs\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "read-the-docs:jsGlobal:1",
				kind: "jsGlobal",
				property: "ReadTheDocsEventData._data",
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
			cpe: "cpe:2.3:a:readthedocs:read_the_docs:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "readme",
		name: "ReadMe",
		website: "https://readme.com",
		description: "ReadMe is a content management system that businesses use to create and manage technical or API documentation.",
		icon: "readme.svg",
		categories: [
			"content-publishing",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "readme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/cdn\\.readme\\.io\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "readme:meta:1",
				kind: "meta",
				key: "readme-deploy",
				valuePattern: new RegExp("^[\\d\\.]+$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "readme:meta:2",
				kind: "meta",
				key: "readme-version",
				valuePattern: new RegExp("^[\\d\\.]+$", "i"),
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
		id: "redoc",
		name: "ReDoc",
		website: "https://github.com/Rebilly/ReDoc",
		description: "Redoc is an open-source tool that generates API documentation from OpenAPI specifications.",
		icon: "redoc.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "redoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/redoc\\.(?:min\\.)?js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "redoc:html:1",
				kind: "html",
				pattern: new RegExp("<redoc "),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "redoc:jsGlobal:2",
				kind: "jsGlobal",
				property: "Redoc.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:redocly:redoc:*:*:*:*:*:*:*:*",
		},
		implies: [
			"react",
		],
	},
	{
		id: "released",
		name: "Released",
		website: "https://www.released.so",
		description: "Released is a tool that generates release notes from Jira tickets, reducing the time required to craft and publish release notes.",
		icon: "Released.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "released:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.released\\.so\\/"),
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
		id: "respec",
		name: "ReSpec",
		website: "https://respec.org",
		description: "ReSpec is a technical documentation generator that simplifies the creation and maintenance of structured technical specifications and standards documents.",
		icon: "ReSpec.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "respec:jsGlobal:0",
				kind: "jsGlobal",
				property: "respecConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "respec:jsGlobal:1",
				kind: "jsGlobal",
				property: "respecVersion",
				valuePattern: new RegExp("([\\d.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "respec:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("ReSpec ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "respec:meta:3",
				kind: "meta",
				key: "monetization",
				valuePattern: new RegExp("respec\\.org", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "respec:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("respec ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ruzuku",
		name: "Ruzuku",
		website: "https://www.ruzuku.com",
		description: "Ruzuku is a platform for creating and managing online courses and communities, enabling instructors to organize content, engage learners, and deliver educational programs through a web-based interface.",
		icon: "Ruzuku.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "ruzuku:jsGlobal:0",
				kind: "jsGlobal",
				property: "ruzukuGlobal",
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
		id: "sakai",
		name: "Sakai",
		website: "https://www.sakailms.org",
		description: "Sakai is a robust open-source learning management system created by higher ed for higher ed.",
		icon: "Sakai.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "sakai:jsGlobal:0",
				kind: "jsGlobal",
				property: "sakai",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sakai:jsGlobal:1",
				kind: "jsGlobal",
				property: "sakaiPortalWindow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sakai:jsGlobal:2",
				kind: "jsGlobal",
				property: "sakaiTutorialSkin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sakai:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^SAKAIID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "sakai:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^sakaiid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:sakailms:sakai:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "scalar",
		name: "Scalar",
		website: "https://scalar.com",
		description: "Scalar is a platform that offers tools for API documentation, testing, and discovery, with strong support for OpenAPI standards.",
		icon: "Scalar.svg",
		categories: [
			"content-publishing",
			"developer-tooling",
		],
		rules: [
			{
				id: "scalar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/npm\\/@scalar\\/api-reference@(\\d+\\.\\d+\\.\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "scalar:dom:1",
				kind: "dom",
				selector: "div[class*='scalar-api-reference']",
				description: "DOM selector matches a known technology marker.",
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
		implies: [
			"typescript",
			"vue-js",
		],
	},
	{
		id: "school-kiwi",
		name: "School Kiwi",
		website: "https://kamar.nz/support/hosted",
		description: "School Kiwi is a student management system designed to streamline administrative tasks, track student records, and enhance communication within educational institutions.",
		icon: "SchoolKiwi.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "school-kiwi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.school\\.kiwi"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "schudio",
		name: "Schudio",
		website: "https://www.schudio.com",
		description: "Schudio is a provider of school website software and tracking tools, offering custom analytics solutions for educational institutions.",
		icon: "Schudio.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "schudio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.schudio\\.app"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "simplero-websites",
		name: "Simplero Websites",
		website: "https://simplero.com/websites",
		description: "Simplero Websites are a learning management system which suited for courses, coaching programs, memberships and digital products by Simplero.",
		icon: "Simplero.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "simplero-websites:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_simplero_session_id$", "i"),
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
			"cart-functionality",
		],
	},
	{
		id: "skilljar",
		name: "Skilljar",
		website: "https://www.skilljar.com/",
		description: "Skilljar is a B2B customer training platform and learning management system.",
		icon: "skilljar.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "skilljar:jsGlobal:0",
				kind: "jsGlobal",
				property: "SKILLJAR_DASHBOARD_GLOBALS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "skilljar:jsGlobal:1",
				kind: "jsGlobal",
				property: "skilljarCatalogPage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "skilljar:jsGlobal:2",
				kind: "jsGlobal",
				property: "skilljarThemeVersionMajor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "skilljar:jsGlobal:3",
				kind: "jsGlobal",
				property: "skilljarTranslate",
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
		id: "skillspace",
		name: "Skillspace",
		website: "https://skillspace.ru",
		description: "Skillspace is a platform for creating, managing, and selling online courses, providing tools that support course delivery, learner access, and instructional content management.",
		icon: "Skillspace.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "skillspace:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.storageskillspace\\.ru"),
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
		id: "smugmug",
		name: "SmugMug",
		website: "https://www.smugmug.com",
		description: "SmugMug is a paid image sharing, image hosting service, and online video platform on which users can upload photos and videos.",
		icon: "SmugMug.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "smugmug:dom:0",
				kind: "dom",
				selector: ".sm-page-footer-copyright",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "smugmug:text:1",
				kind: "text",
				pattern: new RegExp("SmugMug"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "smugmug:jsGlobal:2",
				kind: "jsGlobal",
				property: "_smugsp",
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
		id: "sourcey",
		name: "Sourcey",
		website: "https://sourcey.com",
		description: "Sourcey is an open-source documentation platform and static site generator.",
		icon: "default.svg",
		categories: [
			"content-publishing",
			"framework",
		],
		rules: [
			{
				id: "sourcey:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Sourcey(?: ([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "sourcey:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("sourcey(?: ([\\d.]+))?", "i"),
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
		id: "spayee",
		name: "Spayee",
		website: "https://learn.spayee.com",
		description: "Spayee is a platform that enables creators and businesses to build and sell online courses and digital products.",
		icon: "Spayee.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "spayee:dom:0",
				kind: "dom",
				selector: "link[href*='.spayee.com'][rel='canonical']",
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
		id: "speca",
		name: "Speca",
		website: "https://speca.io",
		description: "Speca is a platform for API design and documentation.",
		icon: "Speca.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "speca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/speca\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "speca:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Speca$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "speca:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^speca$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "sphinx",
		name: "Sphinx",
		website: "https://www.sphinx-doc.org/",
		description: "Sphinx is a documentation generator for Python projects using reStructuredText.",
		icon: "Sphinx.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "sphinx:html:0",
				kind: "html",
				pattern: new RegExp("Created using <a href=\"https?:\\/\\/(?:www\\.)?sphinx-doc\\.org\\/\">Sphinx<\\/a> ([0-9.]+)\\."),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sphinx:jsGlobal:1",
				kind: "jsGlobal",
				property: "DOCUMENTATION_OPTIONS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sphinx:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sphinx-book-theme\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sphinx:dom:3",
				kind: "dom",
				selector: "div.sphinxsidebar > div.sphinxsidebarwrapper",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sphinx:dom:4",
				kind: "dom",
				selector: "p.sphinx-version",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sphinx:text:5",
				kind: "text",
				pattern: new RegExp("([\\d]+(?:\\.[\\d]+)*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page text contains a known technology marker.",
			},
			{
				id: "sphinx:jsGlobal:6",
				kind: "jsGlobal",
				property: "SPHINX_HIGHLIGHT_ENABLED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sphinx:jsGlobal:7",
				kind: "jsGlobal",
				property: "SphinxHighlight",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sphinx:jsGlobal:8",
				kind: "jsGlobal",
				property: "SphinxRtdTheme",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sphinx:html:9",
				kind: "html",
				pattern: new RegExp("created using <a href=\"https?:\\/\\/(?:www\\.)?sphinx-doc\\.org\\/\">sphinx<\\/a> ([0-9.]+)\\."),
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
	},
	{
		id: "spring-metrics",
		name: "Spring Metrics",
		website: "https://springmetrics.com",
		description: "Spring Metrics is an online learning platform for management software in the hospitality industry.",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "spring-metrics:jsGlobal:0",
				kind: "jsGlobal",
				property: "_springMetq",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "starlight",
		name: "Starlight",
		website: "https://starlight.astro.build",
		description: "Starlight is a documentation website builder for the Astro framework.",
		icon: "Starlight.svg",
		categories: [
			"content-publishing",
			"framework",
		],
		rules: [
			{
				id: "starlight:jsGlobal:0",
				kind: "jsGlobal",
				property: "StarlightThemeProvider.updatePickers",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "starlight:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Starlight v([\\d.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "starlight:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Starlight\\sv([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "starlight:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^starlight\\sv([\\d\\.]+)$", "i"),
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
		requires: [
			"astro",
		],
	},
	{
		id: "stoplight",
		name: "Stoplight",
		website: "https://stoplight.io",
		description: "Stoplight is a company that offers a platform for API design, documentation, testing, and collaboration throughout the API development lifecycle.",
		icon: "Stoplight.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "stoplight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/stoplight\\.io\\/"),
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
		id: "substack",
		name: "Substack",
		website: "https://substack.com/",
		description: "Substack is an American online platform that provides publishing, payment, analytics, and design infrastructure to support subscription newsletters.",
		icon: "Substack.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "substack:header:0",
				kind: "header",
				key: "x-cluster",
				valuePattern: new RegExp("substack", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "substack:header:1",
				kind: "header",
				key: "x-served-by",
				valuePattern: new RegExp("Substack", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "substack:header:2",
				kind: "header",
				key: "x-served-by",
				valuePattern: new RegExp("substack", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "superblog",
		name: "Superblog",
		website: "https://superblog.ai",
		description: "Superblog is a blogging platform that automatically manages SEO audits, page speed optimization, sudden traffic spikes, and reader experience.",
		icon: "Superblog.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "superblog:dom:0",
				kind: "dom",
				selector: "link[href*='superblog.supercdn.cloud/']",
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
		id: "support-hero",
		name: "Support Hero",
		website: "https://www.supporthero.com/",
		description: "Support Hero is a knowledge base solution to reduce inbound support requests.",
		icon: "Support Hero.png",
		categories: [
			"content-publishing",
			"developer-tooling",
		],
		rules: [
			{
				id: "support-hero:dom:0",
				kind: "dom",
				selector: "a[href*='.supporthero.io/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "support-hero:jsGlobal:1",
				kind: "jsGlobal",
				property: "supportHeroWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "support-hero:jsGlobal:2",
				kind: "jsGlobal",
				property: "supporthero",
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
		id: "svbtle",
		name: "Svbtle",
		website: "https://www.svbtle.com",
		description: "Svbtle is a minimalist blogging platform that focuses on simplicity and a clean writing experience.",
		icon: "svbtle.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "svbtle:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/[^/]+\\.svbtle\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "svbtle:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Svbtle\\.com$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "svbtle:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^svbtle\\.com$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "swagger-ui",
		name: "Swagger UI",
		website: "https://swagger.io/tools/swagger-ui",
		description: "Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate documentation from a Swagger-compliant API.",
		icon: "Swagger UI.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "swagger-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d.]+))?\\/swagger-ui-bundle\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swagger-ui:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("swagger-ui"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "swagger-ui:jsGlobal:2",
				kind: "jsGlobal",
				property: "SwaggerUIBundle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "swagger-ui:jsGlobal:3",
				kind: "jsGlobal",
				property: "SwaggerUIStandalonePreset",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "swagger-ui:jsGlobal:4",
				kind: "jsGlobal",
				property: "versions.swaggerUi.version",
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
			cpe: "cpe:2.3:a:smartbear:swagger_ui:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "teachable",
		name: "Teachable",
		website: "https://teachable.com",
		description: "Teachable is a learning management system or LMS platform.",
		icon: "Teachable.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "teachable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.teachablecdn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "teachable:jsGlobal:1",
				kind: "jsGlobal",
				property: "isTeachable",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teachable:jsGlobal:2",
				kind: "jsGlobal",
				property: "teachableIcons",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teachable:jsGlobal:3",
				kind: "jsGlobal",
				property: "trackTeachableGAEvent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teachable:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^_gat_teachableTracker$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "teachable:meta:5",
				kind: "meta",
				key: "asset_host",
				valuePattern: new RegExp("\\.teachablecdn\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "teachable:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^_gat_teachabletracker$", "i"),
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
		id: "techtarget",
		name: "TechTarget",
		website: "https://www.techtarget.com",
		description: "TechTarget is a resource providing technology professionals and buyers with the technical information required to perform in their roles.",
		icon: "TechTarget.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "techtarget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.techtarget\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "techtarget:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadTechTarget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "techtarget:jsGlobal:2",
				kind: "jsGlobal",
				property: "techtargetic.client",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "theasys",
		name: "Theasys",
		website: "https://www.theasys.io",
		description: "Theasys is a platform for creating, uploading, and embedding 360° VR panoramic images and virtual tours online.",
		icon: "Theasys.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "theasys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.theasys\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theasys:jsGlobal:1",
				kind: "jsGlobal",
				property: "theasys.api",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
			],
		},
	},
	{
		id: "thinkific",
		name: "Thinkific",
		website: "https://www.thinkific.com",
		description: "Thinkific is a software platform that enables entrepreneurs to create, market, sell, and deliver their own online courses.",
		icon: "Thinkific.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "thinkific:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn(?:-themes)?\\.thinkific\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thinkific:jsGlobal:1",
				kind: "jsGlobal",
				property: "Thinkific",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thinkific:jsGlobal:2",
				kind: "jsGlobal",
				property: "ThinkificAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thinkific:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^_thinkific_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:thinkific:thinkific:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "thought-industries",
		name: "Thought Industries",
		website: "https://www.thoughtindustries.com",
		description: "Thought Industries is an enterprise learning platform designed for customer, partner, and professional training, offering a structured learning experiences system.",
		icon: "ThoughtIndustries.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "thought-industries:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("thoughtindustries\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "totara",
		name: "Totara",
		website: "https://www.totaralearning.com",
		description: "Totara is a learning management system designed for businesses.",
		icon: "Totara.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "totara:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^TotaraSession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "totara:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^totarasession$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:totara:totara:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "tumblr",
		name: "Tumblr",
		website: "https://www.tumblr.com",
		description: "Tumblr is a microblogging and social networking website. The service allows users to post multimedia and other content to a short-form blog.",
		icon: "Tumblr.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "tumblr:html:0",
				kind: "html",
				pattern: new RegExp("<iframe src=\"[^>]+tumblr\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "tumblr:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?[^/]+\\.tumblr\\.com\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "tumblr:dom:2",
				kind: "dom",
				selector: "iframe[src*='tumblr.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "tutor-lms",
		name: "Tutor LMS",
		website: "https://tutorlms.com",
		description: "Tutor LMS is an all-in-one learning management system.",
		icon: "TutorLMS.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "tutor-lms:jsGlobal:0",
				kind: "jsGlobal",
				property: "tutorElementorData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tutor-lms:jsGlobal:1",
				kind: "jsGlobal",
				property: "tutor_prevent_copy",
				description: "Page-owned global matches a known technology marker.",
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
		id: "tutorcruncher",
		name: "TutorCruncher",
		website: "https://tutorcruncher.com",
		description: "TutorCruncher is a tutoring management software.",
		icon: "TutorCruncher.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "tutorcruncher:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tutorcruncher\\.com\\/"),
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
		id: "twiki",
		name: "TWiki",
		website: "https://twiki.org",
		description: "TWiki is an open-source wiki and application platform.",
		icon: "TWiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "twiki:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:TWikiJavascripts|twikilib(?:\\.min)?\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twiki:html:1",
				kind: "html",
				pattern: new RegExp("<img [^>]*(?:title|alt)=\"This site is powered by the TWiki collaboration platform"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "twiki:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^TWIKISID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "twiki:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("(?:twikijavascripts|twikilib(?:\\.min)?\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twiki:html:4",
				kind: "html",
				pattern: new RegExp("<img [^>]*(?:title|alt)=\"this site is powered by the twiki collaboration platform"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "twiki:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^twikisid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:twiki:twiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "typecho",
		name: "Typecho",
		website: "https://typecho.org/",
		description: "Typecho is a PHP Blogging Platform.",
		icon: "typecho.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "typecho:url:0",
				kind: "url",
				pattern: new RegExp("\\/admin\\/login\\.php?referer=http%3A%2F%2F"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "typecho:jsGlobal:1",
				kind: "jsGlobal",
				property: "TypechoComment",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "typecho:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Typecho( [\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "typecho:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("typecho( [\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:typecho:typecho:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "typedoc",
		name: "TypeDoc",
		website: "https://typedoc.org",
		description: "TypeDoc is an API documentation generator for TypeScript projects.",
		icon: "TypeDoc.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "typedoc:dom:0",
				kind: "dom",
				selector: "script#tsd-search-script, footer .tsd-generator a[href='https://typedoc.org/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"typescript",
		],
	},
	{
		id: "typeflo",
		name: "Typeflo",
		website: "https://typeflo.io",
		description: "Typeflo is a platform that simplifies blogging by allowing users to create websites directly from Google Docs, offering features such as analytics, custom domains, and theme customization.",
		icon: "Typeflo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "typeflo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.typeflo\\.io\\/"),
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
		id: "typepad",
		name: "TypePad",
		website: "https://www.typepad.com",
		description: "Typepad is a blog hosting service.",
		icon: "TypePad.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "typepad:url:0",
				kind: "url",
				pattern: new RegExp("typepad\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "typepad:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("typepad", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "uportal",
		name: "uPortal",
		website: "https://www.apereo.org/projects/uportal",
		description: "uPortal is an open source enterprise portal framework built by and for higher education institutions.",
		icon: "uPortal.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "uportal:jsGlobal:0",
				kind: "jsGlobal",
				property: "uportal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uportal:meta:1",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp(" uPortal ", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "uportal:meta:2",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp(" uportal ", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:apereo:uportal:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "vclasses",
		name: "VClasses",
		website: "https://vclasses.net",
		description: "VClasses is a subscription-based software platform that enables users to set up a secure learning management system (LMS) and offer courses for sale.",
		icon: "VClasses.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "vclasses:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.vclasses\\.net"),
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
		id: "virgool",
		name: "Virgool",
		website: "https://virgool.io",
		icon: "Virgool.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "virgool:url:0",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?virgool\\.io"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "virgool:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Virgool$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "virgool:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^virgool$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "voomly",
		name: "Voomly",
		website: "https://www.voomly.com",
		description: "Voomly is a hosted video course system that facilitates the creation, management, and distribution of video-based educational content.",
		icon: "Voomly.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "voomly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.voomly\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "voomly:jsGlobal:1",
				kind: "jsGlobal",
				property: "attachVoomlyPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "voomly:jsGlobal:2",
				kind: "jsGlobal",
				property: "voomlyEmbedPlayerApp",
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
		id: "wfolio",
		name: "Wfolio",
		website: "https://wfolio.com",
		description: "Wfolio is an online solution designed to help photographers showcase their work and grow their business.",
		icon: "Wfolio.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "wfolio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.wfolio\\.pro"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "wfolio:jsGlobal:1",
				kind: "jsGlobal",
				property: "initWfolioCard",
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
		id: "wiki-js",
		name: "Wiki.js",
		website: "https://js.wiki",
		description: "Wiki.js is a wiki engine running on Node.js and written in JavaScript.",
		icon: "Wiki.js.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "wiki-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "WIKI.$_apolloInitData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wiki-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "WIKI.$apolloProvider",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:requarks:wiki.js:*:*:*:*:*:*:*:*",
		},
		implies: [
			"node-js",
		],
	},
	{
		id: "wikkawiki",
		name: "WikkaWiki",
		website: "https://wikkawiki.org",
		description: "WikkaWiki is an open-source wiki application written in PHP.",
		icon: "WikkaWiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "wikkawiki:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^>]+WikkaWiki"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wikkawiki:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("WikkaWiki", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wikkawiki:html:2",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"[^>]+wikkawiki"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wikkawiki:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("wikkawiki", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:wikkawiki:wikkawiki:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "xwiki",
		name: "XWiki",
		website: "https://www.xwiki.org",
		description: "XWiki is a free wiki software platform written in Java.",
		icon: "xwiki.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "xwiki:html:0",
				kind: "html",
				pattern: new RegExp("<html[^>]data-xwiki-[^>]>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xwiki:meta:1",
				kind: "meta",
				key: "wiki",
				valuePattern: new RegExp("xwiki", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "xwiki:dom:2",
				kind: "dom",
				selector: "html[data-xwiki-]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "xwiki:jsGlobal:3",
				kind: "jsGlobal",
				property: "XWiki.mainWiki",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:xwiki:xwiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java-confidence-99",
		],
		excludes: [
			"mediawiki",
		],
	},
	{
		id: "yeswiki",
		name: "YesWiki",
		website: "https://yeswiki.net",
		description: "YesWiki is a collaborative website creation and management Free Software under the AGPL license, enabling any web user to create, delete, edit, or comment on site pages with unlimited editors or pages.",
		icon: "YesWiki.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "yeswiki:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("javascripts\\/yeswiki-base\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yeswiki:dom:1",
				kind: "dom",
				selector: "#yw-container",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:yeswiki:yeswiki:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "yo-coach",
		name: "Yo!Coach",
		website: "https://www.yo-coach.com",
		description: "Yo!Coach is a tutoring and consultation platform designed to connect learners with experts for one-on-one sessions.",
		icon: "Yo!Coach.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "yo-coach:header:0",
				kind: "header",
				key: "Set-Cookie",
				valuePattern: new RegExp("\\.yo-coach\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "yo-coach:header:1",
				kind: "header",
				key: "set-cookie",
				valuePattern: new RegExp("\\.yo-coach\\.com", "i"),
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
		id: "yui-doc",
		name: "YUI Doc",
		website: "https://developer.yahoo.com/yui/yuidoc",
		description: "YUI Doc is a Node.js application used at build time to generate API documentation.",
		icon: "Yahoo.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "yui-doc:html:0",
				kind: "html",
				pattern: new RegExp("(?:<html[^>]* yuilibrary\\.com\\/rdf\\/[\\d.]+\\/yui\\.rdf|<body[^>]+class=\"yui3-skin-sam)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yui-doc:dom:1",
				kind: "dom",
				selector: "body[class*='yui3-skin-sam']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "zendesk",
		name: "Zendesk",
		website: "https://zendesk.com",
		description: "Zendesk is a cloud-based help desk management solution offering customizable tools to build customer service portal, knowledge base and online communities.",
		icon: "Zendesk.svg",
		categories: [
			"content-publishing",
			"developer-tooling",
			"email-messaging",
		],
		rules: [
			{
				id: "zendesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.zdassets\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zendesk:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zendesk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zendesk:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_help_center_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zendesk:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^_zendesk_cookie$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zendesk:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^_zendesk_shared_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zendesk:dns:5",
				kind: "dns",
				valuePattern: new RegExp("mail\\.zendesk\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
			],
		},
	},
	{
		id: "zenfolio",
		name: "Zenfolio",
		website: "https://zenfolio.com",
		description: "Zenfolio is a photography website builder.",
		icon: "Zenfolio.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "zenfolio:jsGlobal:0",
				kind: "jsGlobal",
				property: "Zenfolio",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "zenler",
		name: "Zenler",
		website: "https://www.newzenler.com",
		description: "Zenler is a course creation platform that combines live classes, webinars, community building, and marketing tools in one system.",
		icon: "Zenler.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "zenler:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("webtracker\\.newzenler\\.com"),
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
		id: "zensical",
		name: "Zensical",
		website: "https://zensical.org",
		description: "Zensical is an open-source platform that enables scalable technical-writing systems designed to maintain uninterrupted workflow.",
		icon: "Zensical.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "zensical:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("zensical-([\\d\\.]+)", "i"),
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
		id: "ziber",
		name: "Ziber",
		website: "https://ziber.eu",
		description: "Ziber is an education platform that connects professionals, educators, and organizations involved in childcare and primary education through a centralized digital ecosystem.",
		icon: "Ziber.svg",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "ziber:jsGlobal:0",
				kind: "jsGlobal",
				property: "ZiberTracker.getTracker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ziber:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^ZIBER$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "ziber:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^ziber$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "zinnia",
		name: "Zinnia",
		website: "https://django-blog-zinnia.com",
		description: "Zimbra is an is a collaborative software suite that includes an email server and a web client.",
		icon: "Zinnia.png",
		categories: [
			"content-publishing",
		],
		rules: [
			{
				id: "zinnia:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Zinnia", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "zinnia:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("zinnia", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"django",
		],
	},
] as const satisfies readonly TechnologyDefinition[];
