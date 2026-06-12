import type { TechnologyDefinition } from '../types';

export const frameworkTechnologyDefinitions = [
	{
		id: "abp-framework",
		name: "ABP Framework",
		website: "https://abp.io/",
		description: "ABP Framework is a complete infrastructure to create modern web applications by following the best practices and conventions of software development.",
		icon: "abp.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "abp-framework:pageGlobal:0",
				kind: "pageGlobal",
				property: "abp.timing.timeZone",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "abp-framework:pageGlobal:1",
				kind: "pageGlobal",
				property: "abp.version",
				valuePattern: new RegExp("(.*)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "actionhero-js",
		name: "actionhero.js",
		website: "https://www.actionherojs.com",
		icon: "ActionHeroJs.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "actionhero-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("actionheroClient\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "actionhero-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "actionheroClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "actionhero-js:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("actionhero API"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "adobe-coldfusion",
		name: "Adobe ColdFusion",
		website: "https://adobe.com/products/coldfusion-family.html",
		description: "Adobe ColdFusion is a server-side scripting platform for building web applications and APIs, using a language called CFML (ColdFusion Markup Language).",
		icon: "Adobe ColdFusion.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "adobe-coldfusion:html:0",
				kind: "html",
				pattern: new RegExp("<!-- START headerTags\\.cfm"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "adobe-coldfusion:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/cfajax/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adobe-coldfusion:url:2",
				kind: "url",
				pattern: new RegExp("\\.cfm(?:$|\\?)"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "adobe-coldfusion:pageGlobal:3",
				kind: "pageGlobal",
				property: "_cfEmails",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-coldfusion:cookie:4",
				kind: "cookie",
				key: "CFID|CFTOKEN|CFMAGIC|CFGLOBALS",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "adobe-coldfusion:responseHeader:5",
				kind: "responseHeader",
				key: "Cookie",
				valuePattern: new RegExp("CFTOKEN="),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"cfml"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:adobe:coldfusion:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "adobe-muse",
		name: "Adobe Muse",
		website: "https://helpx.adobe.com/muse/kb/adobe-muse-end-of-service.html",
		description: "Adobe Muse is a no code offline website builder used to create fixed, fluid, or adaptive websites, without the need to write code.",
		icon: "AdobeMuse.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "adobe-muse:pageGlobal:0",
				kind: "pageGlobal",
				property: "Muse",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-muse:pageGlobal:1",
				kind: "pageGlobal",
				property: "museConfigLoadedAndExecuted",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "adobe-muse:pageGlobal:2",
				kind: "pageGlobal",
				property: "muse_init",
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
		id: "adonisjs",
		name: "AdonisJS",
		website: "https://adonisjs.com",
		description: "AdonisJS is a Node.js web application framework that follows the MVC pattern, simplifying web development with features like ORM, authentication, and WebSockets.",
		icon: "AdonisJS.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "adonisjs:dom:0",
				kind: "dom",
				selector: "link[href*='adonisjs.com/'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adonisjs:cookie:1",
				kind: "cookie",
				key: "adonis-session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "adonisjs:cookie:2",
				kind: "cookie",
				key: "adonis-session-values",
				description: "Cookie name matches a known technology marker."
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
		id: "akka-http",
		name: "Akka HTTP",
		website: "https://akka.io",
		icon: "AkkaHttp.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "akka-http:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("akka-http(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:lightbend:akka_http:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "amber",
		name: "Amber",
		website: "https://amberframework.org",
		description: "Amber is a web application framework written in Crystal inspired by Kemal, Rails, Phoenix and other popular application frameworks.",
		icon: "Amber.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "amber:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Amber$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "angulardart",
		name: "AngularDart",
		website: "https://webdev.dartlang.org/angular/",
		icon: "AngularDart.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "angulardart:pageGlobal:0",
				kind: "pageGlobal",
				property: "ngTestabilityRegistries",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"dart"
		],
		excludes: [
			"angular",
			"angularjs"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "apache-wicket",
		name: "Apache Wicket",
		website: "https://wicket.apache.org",
		description: "Apache Wicket is an open-source Java web application framework for building scalable and maintainable web applications.",
		icon: "Apache Wicket.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "apache-wicket:pageGlobal:0",
				kind: "pageGlobal",
				property: "Wicket",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:apache:wicket:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "arwes",
		name: "Arwes",
		website: "https://arwes.dev",
		description: "Arwes is a futuristic sci-fi UI web framework.",
		icon: "Arwes.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "arwes:dom:0",
				kind: "dom",
				selector: "style[data-meta^='ArwesSounds(t)']",
				description: "DOM selector matches a known technology marker."
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
		id: "aseqbase",
		name: "Aseqbase",
		website: "https://aseqbase.mimfa.net",
		description: "Aseqbase is a sequence-based web development framework designed to create robust websites.",
		icon: "Aseqbase.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "aseqbase:meta:0",
				kind: "meta",
				key: "framwork",
				valuePattern: new RegExp("^aseqbase$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "aseqbase:meta:1",
				kind: "meta",
				key: "product",
				valuePattern: new RegExp("www\\.aseqbase\\.ir"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "asp-net-boilerplate",
		name: "ASP.NET Boilerplate",
		website: "https://www.aspnetboilerplate.com",
		description: "ASP.NET Boilerplate is a general purpose application framework especially designed for new modern web applications. It uses already familiar tools and implements best practices around them to provide you a SOLID development experience.",
		icon: "aspnetboilerplate.png",
		categories: [
			"framework",
			"ui-library"
		],
		rules: [
			{
				id: "asp-net-boilerplate:pageGlobal:0",
				kind: "pageGlobal",
				property: "abp.aspnetboilerplate.version",
				valuePattern: new RegExp("(.*)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "asp-net-boilerplate:pageGlobal:1",
				kind: "pageGlobal",
				property: "abp.timing.utcClockProvider",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "astro",
		name: "Astro",
		website: "https://astro.build",
		description: "Astro is a new JavaScript-based static site builder.",
		icon: "Astro.svg",
		categories: [
			"framework",
			"content-publishing",
			"ui-library"
		],
		rules: [
			{
				id: "astro:pageGlobal:1",
				kind: "pageGlobal",
				property: "Astro",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "astro:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Astro(?:\\sv([\\d\\.]+))?$"),
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
		id: "blade",
		name: "Blade",
		website: "https://lets-blade.com",
		icon: "Blade.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "blade:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("blade-([\\w.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "blazor",
		name: "Blazor",
		website: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
		icon: "Blazor.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "blazor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("blazor\\.server\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blazor:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("blazor\\.host\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blazor:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("blazor\\.webassembly\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "blazor:pageGlobal:3",
				kind: "pageGlobal",
				property: "Blazor",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "blitz-js",
		name: "Blitz.js",
		website: "https://blitzjs.com",
		description: "Blitz.js is a web development framework that uses Next.js and React and includes features for authentication, authorization, and database integration to simplify the creation of high-performance and scalable web applications.",
		icon: "blitzjs.svg",
		categories: [
			"framework",
			"ui-library"
		],
		rules: [
			{
				id: "blitz-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "__BLITZ_MIDDLEWARE_HOOKS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blitz-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "__BLITZ_SUSPENSE_ENABLED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blitz-js:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Blitz\\.js?([0-9.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"next-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "bonfire",
		name: "Bonfire",
		website: "https://cibonfire.com",
		icon: "Bonfire.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "bonfire:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a[^>]+href=\"https?://(?:www\\.)?cibonfire\\.com[^>]*>Bonfire v([^<]+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "bonfire:cookie:1",
				kind: "cookie",
				key: "bf_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"codeigniter"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bridgetown",
		name: "Bridgetown",
		website: "https://www.bridgetownrb.com",
		description: "Bridgetown is an open-source static site generator built with Ruby, facilitating the creation of fast and efficient websites by generating static HTML and CSS files.",
		icon: "Bridgetown.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "bridgetown:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^/_bridgetown/static/.+\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bridgetown:dom:1",
				kind: "dom",
				selector: "link[href^='/_bridgetown/static/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"ruby"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cakephp",
		name: "CakePHP",
		website: "https://cakephp.org",
		description: "CakePHP is an open-source web framework. It follows the model–view–controller (MVC) approach and is written in PHP.",
		icon: "CakePHP.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "cakephp:pageGlobal:0",
				kind: "pageGlobal",
				property: "__cakeDebugBlockInit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cakephp:cookie:1",
				kind: "cookie",
				key: "cakephp",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "cakephp:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("CakePHP"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:cakephp:cakephp:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cecil",
		name: "Cecil",
		website: "https://cecil.app",
		description: "Cecil is a CLI application, powered by PHP, that merge plain text files (written in Markdown), images and Twig templates to generate a static website.",
		icon: "Cecil.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "cecil:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Cecil(?: ([0-9.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:cecil:cecil:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "chicago-boss",
		name: "Chicago Boss",
		website: "http://chicagoboss.org/",
		description: "Chicago Boss is a web framework for Erlang.",
		icon: "Chicago Boss.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "chicago-boss:cookie:0",
				kind: "cookie",
				key: "_boss_session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "chicago-boss:cookie:1",
				kind: "cookie",
				key: "book_like_a_boss_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"erlang"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "codeigniter",
		name: "CodeIgniter",
		website: "https://codeigniter.com",
		icon: "CodeIgniter.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "codeigniter:html:0",
				kind: "html",
				pattern: new RegExp("<input[^>]+name=\"ci_csrf_token\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "codeigniter:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("codeigniter\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "codeigniter:dom:2",
				kind: "dom",
				selector: "input[name*='ci_csrf_token']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "codeigniter:cookie:3",
				kind: "cookie",
				key: "ci_csrf_token",
				version: { source: "match", template: "$1?2+:" },
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "codeigniter:cookie:4",
				kind: "cookie",
				key: "ci_session",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "codeigniter:cookie:5",
				kind: "cookie",
				key: "exp_last_activity",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "codeigniter:cookie:6",
				kind: "cookie",
				key: "exp_tracker",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:codeigniter:codeigniter:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "dancer",
		name: "Dancer",
		website: "https://perldancer.org",
		description: "Dancer is a simple but powerful web application framework for Perl.",
		icon: "Dancer.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "dancer:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Perl Dancer ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "dancer:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Perl Dancer ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			],
			cpe: "cpe:2.3:a:dancer:dancer:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "django",
		name: "Django",
		website: "https://djangoproject.com",
		description: "Django is a Python-based free and open-source web application framework.",
		icon: "Django.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "django:html:0",
				kind: "html",
				pattern: new RegExp("(?:powered by <a[^>]+>Django ?([\\d.]+)?<\\/a>|<input[^>]*name=[\"']csrfmiddlewaretoken[\"'][^>]*>)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "django:dom:1",
				kind: "dom",
				selector: "input[name='csrfmiddlewaretoken']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "django:pageGlobal:2",
				kind: "pageGlobal",
				property: "__admin_media_prefix__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "django:pageGlobal:3",
				kind: "pageGlobal",
				property: "django",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "django:cookie:4",
				kind: "cookie",
				key: "django_language",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:djangoproject:django:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "eleventy",
		name: "Eleventy",
		website: "https://www.11ty.dev",
		description: "Eleventy (11ty) a simpler static site generator.",
		icon: "Eleventy.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "eleventy:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Eleventy\\sv([\\d\\.]+)$"),
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
		id: "express",
		name: "Express",
		website: "https://expressjs.com",
		description: "Express is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
		icon: "Express.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "express:cookie:0",
				kind: "cookie",
				key: "connect\\.sid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "express:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Express(?:$|,)"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:expressjs:express:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "farcry",
		name: "FarCry",
		website: "https://www.farcrycore.org",
		description: "FarCry is a web application framework that helps CFML developers build tailor-made content solutions.",
		icon: "FarCry.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "farcry:pageGlobal:0",
				kind: "pageGlobal",
				property: "farcryForgotPassword",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "farcry:pageGlobal:1",
				kind: "pageGlobal",
				property: "farcryLogin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "farcry:cookie:2",
				kind: "cookie",
				key: "FARCRYDEVICETYPE",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "fastapi",
		name: "FastAPI",
		website: "https://fastapi.tiangolo.com",
		description: "FastAPI is a web framework for building APIs with Python, utilizing standard Python type hints.",
		icon: "FastAPI.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "fastapi:dom:0",
				kind: "dom",
				selector: "link[href*='fastapi.tiangolo.com'][rel='shortcut icon']",
				description: "DOM selector matches a known technology marker."
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
		id: "fat-free-framework",
		name: "Fat-Free Framework",
		website: "https://fatfreeframework.com",
		description: "Fat-Free Framework (F3) is a lightweight PHP micro-framework that enables rapid development of dynamic web applications with built-in features like URL routing, caching, multilingual support, and database integration for high performance.",
		icon: "Fat-Free Framework.svg",
		categories: [
			"framework",
			"router"
		],
		rules: [
			{
				id: "fat-free-framework:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Fat-Free Framework$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:fatfreeframework:fat-free_framework:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "flask",
		name: "Flask",
		website: "https://github.com/pallets/flask/",
		description: "Flask is a Python micro web framework ideal for rapidly constructing web applications, offering minimalism, flexibility, and modularity.",
		icon: "Flask.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "flask:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Werkzeug/?([\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:palletsprojects:flask:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "frappe",
		name: "Frappe",
		website: "https://frappeframework.com",
		description: "Frappe is a full stack, batteries-included, web framework written in Python and Javascript.",
		icon: "Frappe.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "frappe:pageGlobal:0",
				kind: "pageGlobal",
				property: "frappe.avatar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "frappe:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^frappe$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"python",
			"mariadb"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:frappe:frappe:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "fresh",
		name: "Fresh",
		website: "https://fresh.deno.dev",
		description: "Fresh is a full stack modern web framework for JavaScript and TypeScript developers, designed to make it trivial to create high-quality, performant, and personalized web applications.",
		icon: "Fresh.svg",
		categories: [
			"framework",
			"server-runtime-infra",
			"transpiler"
		],
		rules: [
			{
				id: "fresh:dom:0",
				kind: "dom",
				selector: "style[id='__FRSH_TWIND']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "fresh:dom:1",
				kind: "dom",
				selector: "style[id='__FRSH_STYLE']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "fresh:dom:2",
				kind: "dom",
				selector: "script[id='__FRSH_STATE']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "fresh:dom:3",
				kind: "dom",
				selector: "link[href*='?__frsh_c=']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"deno",
			"preact"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "glpi",
		name: "GLPI",
		website: "https://glpi-project.org",
		description: "GLPI is an open-source IT Asset Management, issue tracking and service desk system.",
		icon: "GLPI.svg",
		categories: [
			"framework",
			"business-tools"
		],
		rules: [
			{
				id: "glpi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//.*glpi.+common\\.min\\.js\\?v=(\\d+\\.\\d+\\.\\d+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "glpi:pageGlobal:2",
				kind: "pageGlobal",
				property: "glpiUnsavedFormChanges",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "glpi:meta:3",
				kind: "meta",
				key: "glpi:csrf_token",
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"mid",
				"recurring"
			],
			cpe: "cpe:2.3:a:glpi-project:glpi:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "google-web-toolkit",
		name: "Google Web Toolkit",
		website: "https://developers.google.com/web-toolkit",
		description: "Google Web Toolkit (GWT) is an open-source Java software development framework that makes writing AJAX applications.",
		icon: "Google Web Toolkit.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "google-web-toolkit:pageGlobal:0",
				kind: "pageGlobal",
				property: "__gwt_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:pageGlobal:1",
				kind: "pageGlobal",
				property: "__gwt_activeModules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:pageGlobal:2",
				kind: "pageGlobal",
				property: "__gwt_getMetaProperty",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:pageGlobal:3",
				kind: "pageGlobal",
				property: "__gwt_isKnownPropertyValue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:pageGlobal:4",
				kind: "pageGlobal",
				property: "__gwt_stylesLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:pageGlobal:5",
				kind: "pageGlobal",
				property: "__gwtlistener",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "google-web-toolkit:meta:6",
				kind: "meta",
				key: "gwt:property",
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:google:web_toolkit:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "gridsome",
		name: "Gridsome",
		website: "https://gridsome.org",
		description: "Gridsome is a free and open-source Vue-powered static site generator for building static websites.",
		icon: "Gridsome.svg",
		categories: [
			"framework",
			"content-publishing",
			"ui-library"
		],
		rules: [
			{
				id: "gridsome:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Gridsome v([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "guppy",
		name: "GuppY",
		website: "https://www.freeguppy.org",
		description: "Guppy is a platform for generating an interactive website using a database-free architecture.",
		icon: "Guppy.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "guppy:meta:0",
				kind: "meta",
				key: "Author",
				valuePattern: new RegExp("^GuppY$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "guppy:meta:1",
				kind: "meta",
				key: "Generator",
				valuePattern: new RegExp("^GuppY$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hamechio",
		name: "Hamechio",
		website: "https://hamech.io",
		description: "Hamechio is a web application framework.",
		icon: "Hamechio.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "hamechio:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("hamech\\.io/"),
				description: "Meta tag matches a known technology marker."
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
		id: "heliumweb",
		name: "HeliumWeb",
		website: "https://heliumweb.adrikikicp-development.ml",
		description: "HeliumWeb is a server-side (backend) web framework written in PHP & JavaScript",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "heliumweb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("helium/src/helium.js/helium_web.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "heliumweb:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("http://maven.enriquitomcfh.ml/helium.js/helium_web.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "heliumweb:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("http://maven.enriquitomcfh.ml/helium.js/helium_web.min.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "heliumweb:pageGlobal:3",
				kind: "pageGlobal",
				property: "helium.js",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heliumweb:responseHeader:4",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Adrikikicp Development"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
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
		id: "helix-ultimate",
		name: "Helix Ultimate",
		website: "https://www.joomshaper.com/joomla-templates/helixultimate",
		description: "Helix Ultimate a free template framework for Joomla.",
		icon: "HelixUltimate.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "helix-ultimate:dom:0",
				kind: "dom",
				selector: "header#sp-header, body.helix-ultimate",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"joomla"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hexo",
		name: "Hexo",
		website: "https://hexo.io",
		description: "Hexo is a blog framework powered by Node.js.",
		icon: "Hexo.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "hexo:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"https?://hexo\\.io/?\"[^>]*>Hexo</"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "hexo:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Hexo(?: v?([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:hexo:hexo:*:*:*:*:*:node.js:*:*"
		}
	},
	{
		id: "hono",
		name: "Hono",
		website: "https://hono.dev",
		description: "Hono is a small, simple, and ultrafast web framework for the Edge.",
		icon: "Hono.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "hono:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Hono"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hugo",
		name: "Hugo",
		website: "https://gohugo.io",
		description: "Hugo is an open-source static site generator written in Go.",
		icon: "Hugo.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "hugo:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Hugo ([\\d.]+)?"),
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
		id: "includable",
		name: "Includable",
		website: "https://includable.com",
		icon: "Includable.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "includable:responseHeader:0",
				kind: "responseHeader",
				key: "X-Includable-Version",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ionic",
		name: "Ionic",
		website: "https://ionicframework.com",
		description: "Ionic is an open-source framework that enables developers to create cross-platform mobile, web, and desktop applications using web technologies like HTML, CSS, and JavaScript.",
		icon: "Ionic.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "ionic:pageGlobal:0",
				kind: "pageGlobal",
				property: "Ionic.config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ionic:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ionic.version",
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
		id: "java-servlet",
		name: "Java Servlet",
		website: "https://www.oracle.com/technetwork/java/index-jsp-135475.html",
		icon: "Java.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "java-servlet:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Servlet(?:\\/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "javaserver-faces",
		name: "JavaServer Faces",
		website: "https://javaserverfaces.java.net",
		icon: "JavaServer Faces.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "javaserver-faces:dom:0",
				kind: "dom",
				selector: "input[type='hidden'][name='javax.faces.ViewState']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "javaserver-faces:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("JSF(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "javaserver-pages",
		name: "JavaServer Pages",
		website: "https://www.oracle.com/technetwork/java/javaee/jsp/index.html",
		icon: "Java.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "javaserver-pages:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("JSP(?:/([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
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
		id: "jekyll",
		name: "Jekyll",
		website: "https://jekyllrb.com",
		description: "Jekyll is a blog-aware, static site generator for personal, project, or organisation sites.",
		icon: "Jekyll.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "jekyll:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"https?://jekyllrb\\.com\"[^>]*>Jekyll</"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "jekyll:html:1",
				kind: "html",
				pattern: new RegExp("<!-- Created with Jekyll Now -"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "jekyll:html:2",
				kind: "html",
				pattern: new RegExp("<!-- Begin Jekyll SEO tag"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "jekyll:pageGlobal:3",
				kind: "pageGlobal",
				property: "SimpleJekyllSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jekyll:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Jekyll\\sv([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"ruby"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jekyllrb:jekyll:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "kemal",
		name: "Kemal",
		website: "https://kemalcr.com",
		description: "Kemal is a fast and efficient web framework for the Crystal programming language.",
		icon: "kemalcr.svg",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "kemal:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Kemal"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "koa",
		name: "Koa",
		website: "https://koajs.com",
		icon: "Koa.png",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "koa:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^koa$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:koajs:koa:*:*:*:*:*:node.js:*:*"
		}
	},
	{
		id: "kohana",
		name: "Kohana",
		website: "https://kohanaframework.org",
		description: "Kohana is an open-source PHP web framework designed for building web applications, following the Model-View-Controller (MVC) architectural pattern.",
		icon: "Kohana.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "kohana:cookie:0",
				kind: "cookie",
				key: "kohanasession",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "kohana:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Kohana Framework ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:kohanaframework:kohana:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ktor",
		name: "Ktor",
		website: "https://ktor.io",
		description: "Ktor is a Kotlin framework that allow developers to write asynchronous clients and servers applications, in Kotlin.",
		icon: "Ktor.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "ktor:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^Ktor/debug$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ktor:responseHeader:1",
				kind: "responseHeader",
				key: "x-engine",
				valuePattern: new RegExp("^Ktor$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"kotlin"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:jetbrains:ktor:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "laravel",
		name: "Laravel",
		website: "https://laravel.com",
		description: "Laravel is a free, open-source PHP web framework.",
		icon: "Laravel.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "laravel:pageGlobal:0",
				kind: "pageGlobal",
				property: "Laravel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "laravel:cookie:1",
				kind: "cookie",
				key: "laravel_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:laravel:laravel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "leptos",
		name: "Leptos",
		website: "https://leptos.dev",
		description: "Leptos is a full-stack, isomorphic Rust web framework leveraging fine-grained reactivity to build declarative user interfaces.",
		icon: "Leptos.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "leptos:html:0",
				kind: "html",
				pattern: new RegExp("<!--hk=_.*"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "leptos:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("export function microtask\\(f\\)"),
				confidence: 75,
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "leptos:dom:2",
				kind: "dom",
				selector: "link[id^='leptos']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "leptos:pageGlobal:3",
				kind: "pageGlobal",
				property: "__LEPTOS_PENDING_RESOURCES",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leptos:pageGlobal:4",
				kind: "pageGlobal",
				property: "__LEPTOS_RESOLVED_RESOURCES",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leptos:pageGlobal:5",
				kind: "pageGlobal",
				property: "__LEPTOS_RESOURCE_RESOLVERS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"rust"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lift",
		name: "Lift",
		website: "https://liftweb.net",
		description: "Lift is a secure, scalable web framework written in Scala, designed for high performance and modularity, supporting AJAX and Comet for interactive applications.",
		icon: "Lift.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "lift:responseHeader:0",
				kind: "responseHeader",
				key: "X-Lift-Version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"scala"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:liftweb:lift:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "livewire",
		name: "Livewire",
		website: "https://laravel-livewire.com",
		description: "Livewire is a full-stack Laravel framework for building dynamic interfaces.",
		icon: "Livewire.svg",
		categories: [
			"framework",
			"widgets-misc"
		],
		rules: [
			{
				id: "livewire:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]{1,512}\\bwire:"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "livewire:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("livewire(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "livewire:pageGlobal:2",
				kind: "pageGlobal",
				property: "livewire",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "livewire:pageGlobal:3",
				kind: "pageGlobal",
				property: "livewireScriptConfig",
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
		id: "luana",
		name: "Luana",
		website: "https://luanaframework.github.io",
		description: "Luana is a web framework that uses web browser APIs and features to make a cross-platform web app look like a Native one and bring the same experience.",
		icon: "Luana.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "luana:pageGlobal:0",
				kind: "pageGlobal",
				property: "luanaframework",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luana:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Luana\\sFramework\\s([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"pwa"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lume",
		name: "Lume",
		website: "https://lume.land",
		description: "Lume is a static site generator based on Deno.",
		icon: "Lume.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "lume:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Lume\\sv([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"deno"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "macaron",
		name: "Macaron",
		website: "https://go-macaron.com",
		description: "Macaron is a high productive and modular web framework in Go.",
		icon: "Macaron.svg",
		categories: [
			"framework"
		],
		rules: [],
		implies: [
			"go"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:go-macaron:macaron:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "marko",
		name: "Marko",
		website: "https://markojs.com",
		description: "Marko is HTML re-imagined as a language for building dynamic and reactive user interfaces.",
		icon: "Marko.svg",
		categories: [
			"framework",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "marko:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.marko(\\.js)?"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "marko:dom:1",
				kind: "dom",
				selector: "#data-marko-key, html[data-framework='marko']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "marko:pageGlobal:2",
				kind: "pageGlobal",
				property: "markoComponent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "marko:pageGlobal:3",
				kind: "pageGlobal",
				property: "markoSections",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "marko:pageGlobal:4",
				kind: "pageGlobal",
				property: "markoVars",
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
		id: "masterking32-framework",
		name: "MasterkinG32 Framework",
		website: "https://masterking32.com",
		description: "MasterkinG32 framework.",
		icon: "Masterking32.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "masterking32-framework:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-Framework",
				valuePattern: new RegExp("MasterkinG(?:)"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "masterking32-framework:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^MasterkinG(?:)"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "microsoft-asp-net",
		name: "Microsoft ASP.NET",
		website: "https://www.asp.net",
		description: "ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages.",
		icon: "Microsoft ASP.NET.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "microsoft-asp-net:html:0",
				kind: "html",
				pattern: new RegExp("<input[^>]+name=\"__VIEWSTATE"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "microsoft-asp-net:url:1",
				kind: "url",
				pattern: new RegExp("\\.aspx?(?:$|\\?)"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:dom:2",
				kind: "dom",
				selector: "input[name*='__VIEWSTATE']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:cookie:3",
				kind: "cookie",
				key: "ASPSESSION",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:cookie:4",
				kind: "cookie",
				key: "ASP\\.NET_SessionId",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:cookie:5",
				kind: "cookie",
				key: "\\.ASPXAUTH",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:responseHeader:6",
				kind: "responseHeader",
				key: "X-AspNet-Version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:responseHeader:7",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^ASP\\.NET"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "microsoft-asp-net:responseHeader:8",
				kind: "responseHeader",
				key: "set-cookie",
				valuePattern: new RegExp("\\.AspNetCore"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:asp.net:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mintlify",
		name: "Mintlify",
		website: "https://mintlify.com",
		description: "Mintlify is a platform that enables developers to create and maintain documentation for their projects using Markdown format and automatically generate and deploy static websites via a continuous integration and deployment system.",
		icon: "Mintlify.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "mintlify:pageGlobal:0",
				kind: "pageGlobal",
				property: "__NEXT_DATA__.props.pageProps.favicons.browserconfig",
				valuePattern: new RegExp("mintlify\\..+\\.amazonaws\\.com"),
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
		id: "mojolicious",
		name: "Mojolicious",
		website: "https://mojolicio.us",
		description: "Mojolicious is a Perl-based web framework designed for building web applications and APIs.",
		icon: "Mojolicious.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "mojolicious:responseHeader:0",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^mojolicious"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "mojolicious:responseHeader:1",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("mojolicious"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:mojolicious:mojolicious:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mono",
		name: "Mono",
		website: "https://mono-project.com",
		description: "Mono is an open-source platform that enables developers to create and run .NET applications across different operating systems, facilitating cross-platform compatibility.",
		icon: "Mono.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "mono:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Mono"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:mono:mono:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "neos-flow",
		name: "Neos Flow",
		website: "https://flow.neos.io",
		icon: "Neos.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "neos-flow:responseHeader:0",
				kind: "responseHeader",
				key: "X-Flow-Powered",
				valuePattern: new RegExp("Flow/?(.+)?$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		excludes: [
			"typo3-cms"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nette-framework",
		name: "Nette Framework",
		website: "https://nette.org",
		icon: "Nette Framework.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "nette-framework:html:0",
				kind: "html",
				pattern: new RegExp("<input[^>]+data-nette-rules"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nette-framework:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+id=\"snippet-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nette-framework:html:2",
				kind: "html",
				pattern: new RegExp("<input[^>]+id=\"frm-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nette-framework:dom:3",
				kind: "dom",
				selector: "input[data-nette-rules], div[id^='snippet-'], input[id^='frm-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nette-framework:pageGlobal:4",
				kind: "pageGlobal",
				property: "Nette",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nette-framework:pageGlobal:5",
				kind: "pageGlobal",
				property: "Nette.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nette-framework:cookie:6",
				kind: "cookie",
				key: "nette-browser",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "nette-framework:responseHeader:7",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Nette Framework"),
				description: "Response header matches a known technology marker."
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
		id: "next-js-page-router-ssg",
		name: "Next.js Page Router SSG",
		website: "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation",
		description: "Next.js Static Site Generation.",
		icon: "Next.js.svg",
		categories: [
			"framework",
			"content-publishing",
			"router"
		],
		rules: [
			{
				id: "next-js-page-router-ssg:pageGlobal:0",
				kind: "pageGlobal",
				property: ".__NEXT_DATA__.autoExport",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "next-js-page-router-ssg:pageGlobal:1",
				kind: "pageGlobal",
				property: ".__NEXT_DATA__.gsp",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "next-js-page-router-ssg:pageGlobal:2",
				kind: "pageGlobal",
				property: ".__NEXT_DATA__.nextExport",
				valuePattern: new RegExp("true"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"next-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nextra",
		name: "Nextra",
		website: "https://nextra.site/",
		description: "Nextra is Next.js based static site generator.",
		icon: "Nextra.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "nextra:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("nextra//.site/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "nextra:dom:1",
				kind: "dom",
				selector: "div.nextra-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nextra:dom:2",
				kind: "dom",
				selector: "div.nextra-nav-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nextra:dom:3",
				kind: "dom",
				selector: "div.nextra-sidebar-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nextra:pageGlobal:4",
				kind: "pageGlobal",
				property: "__nextra_internal__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nextra:pageGlobal:5",
				kind: "pageGlobal",
				property: "__nextra_pageContext__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"next-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "nordcraft",
		name: "Nordcraft",
		website: "https://nordcraft.com",
		description: "Nordcraft is a platform that integrates a visual design tool with a web framework, enabling the creation of web applications and websites in a unified environment.",
		icon: "Nordcraft.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "nordcraft:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Nordcraft$"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "nordcraft:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Nordcraft$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "oat",
		name: "Oat++",
		website: "https://oatpp.io",
		description: "Oat++ is an open source C++ Web Framework.",
		icon: "Oat.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "oat:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^oatpp/?([\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "octopress",
		name: "Octopress",
		website: "https://octopress.org",
		description: "Octopress is a static blogging framework.",
		icon: "octopress.png",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "octopress:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"http://octopress\\.org\">"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "octopress:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/octopress\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "octopress:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Octopress"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"jekyll"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "openswoole",
		name: "OpenSwoole",
		website: "https://openswoole.com",
		description: "OpenSwoole is a high-performance, asynchronous, event-driven, coroutine-based PHP framework.",
		icon: "OpenSwoole.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "openswoole:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("OpenSwoole(?:/([\\d.]+))?"),
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
		id: "parse-platform",
		name: "Parse Platform",
		website: "https://parseplatform.org",
		description: "Parse Platform is a backend framework offering built-in support for object and file storage, user authentication, push notifications, and a customizable dashboard.",
		icon: "ParsePlatform.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "parse-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.parsecdn\\.com"),
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
		id: "pelican",
		name: "Pelican",
		website: "https://getpelican.com",
		description: "Pelican is a static site generator written in Python.",
		icon: "pelican.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "pelican:html:0",
				kind: "html",
				pattern: new RegExp("(?:powered|built|generated)\\s(?:by|with).*?<a\\s+href(?:\\s)?=(?:\\s)?\"[^\"]*(?:getpelican\\.com|pelican-bootstrap3|pelican-pure|notmyidea\\.org)[^\"]*\".*?>"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "phenomic",
		name: "Phenomic",
		website: "https://phenomic.io/",
		description: "Phenomic is a modular website compiler.",
		icon: "Phenomic.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "phenomic:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+id=\"phenomic(?:root)?\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "phenomic:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/phenomic\\.browser\\.[a-f0-9]+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "phenomic:dom:2",
				kind: "dom",
				selector: "[id^='phenomic']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "phoenix",
		name: "Phoenix",
		website: "https://github.com/Sazito/phoenix/",
		icon: "sazito-phoenix.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "phoenix:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^phoenix"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"react",
			"webpack",
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "phoenix-framework",
		name: "Phoenix Framework",
		website: "https://www.phoenixframework.org",
		description: "Phoenix Framework is an open-source web application framework built using the Elixir programming language.",
		icon: "Phoenix Framework.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "phoenix-framework:pageGlobal:0",
				kind: "pageGlobal",
				property: "Phoenix.Channel",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"elixir"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "phoenix-liveview",
		name: "Phoenix LiveView",
		website: "https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html",
		description: "Phoenix LiveView is a library that brings live, interactive, real-time user experiences to your Phoenix applications.",
		icon: "Phoenix Framework.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "phoenix-liveview:dom:0",
				kind: "dom",
				selector: "div[data-phx-session]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "phoenix-liveview:pageGlobal:1",
				kind: "pageGlobal",
				property: "liveSocket.socket",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"phoenix-framework"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pinoox",
		name: "pinoox",
		website: "https://pinoox.com",
		description: "Pinoox is a software development company that provides custom solutions for web, mobile, and software applications.",
		icon: "pinoox.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "pinoox:pageGlobal:0",
				kind: "pageGlobal",
				property: "pinoox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pinoox:cookie:1",
				kind: "cookie",
				key: "pinoox_session",
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
		id: "play",
		name: "Play",
		website: "https://www.playframework.com",
		icon: "Play.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "play:cookie:0",
				kind: "cookie",
				key: "PLAY_SESSION",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"scala"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:playframework:play_framework:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "publii",
		name: "Publii",
		website: "https://getpublii.com",
		description: "Publii is a SEO- and privacy-focused website generator designed for creating static websites.",
		icon: "Publii.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "publii:dom:0",
				kind: "dom",
				selector: "meta[content*='Publii Open-Source CMS for Static Site']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "publii:pageGlobal:1",
				kind: "pageGlobal",
				property: "publiiDetectLoadedImages",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "publii:pageGlobal:2",
				kind: "pageGlobal",
				property: "publiiThemeMenuConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pywebio",
		name: "PyWebIO",
		website: "https://pywebio.readthedocs.io/en/latest/",
		description: "PyWebIO is a browser-based framework that transforms the browser into a rich text terminal, allowing developers to create simple web or GUI applications using input and print functions without needing HTML or JavaScript knowledge.",
		icon: "PyWebIO.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "pywebio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/js/pywebio\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "quarto",
		name: "Quarto",
		website: "https://quarto.org",
		description: "Quarto is an open-source technical publishing system.",
		icon: "Quarto.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "quarto:pageGlobal:0",
				kind: "pageGlobal",
				property: "quartoOpenSearch",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quarto:pageGlobal:1",
				kind: "pageGlobal",
				property: "quartoToggleHeadroom",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quarto:pageGlobal:2",
				kind: "pageGlobal",
				property: "quartoToggleReader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quarto:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^quarto-([\\d\\.]+)$"),
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
		id: "qwik",
		name: "Qwik",
		website: "https://qwik.builder.io",
		description: "Qwik is designed for the fastest possible page load time, by delivering pure HTML with near 0 JavaScript.",
		icon: "Qwik.svg",
		categories: [
			"framework"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "reflex",
		name: "Reflex",
		website: "https://reflex.dev",
		description: "Reflex is an open-source framework to build and deploy web apps.",
		icon: "Reflex.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "reflex:pageGlobal:0",
				kind: "pageGlobal",
				property: "__reflex.react",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "reflex:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Reflex$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
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
		id: "remix",
		name: "Remix",
		website: "https://remix.run/",
		description: "Remix is a React framework used for server-side rendering (SSR).",
		icon: "Remix.svg",
		categories: [
			"framework",
			"server-runtime-infra",
			"ui-library"
		],
		rules: [
			{
				id: "remix:pageGlobal:0",
				kind: "pageGlobal",
				property: "__remixContext",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "remix:pageGlobal:1",
				kind: "pageGlobal",
				property: "__remixRouteModules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "remix:pageGlobal:2",
				kind: "pageGlobal",
				property: "__remixRouter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "retype",
		name: "Retype",
		website: "https://retype.com",
		description: "Retype is an open-source static site generator built with Node.js that allows users to create and manage websites with ease using Markdown as the primary content format.",
		icon: "retype.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "retype:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Retype\\s([\\d\\.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "revel",
		name: "Revel",
		website: "https://revel.github.io",
		icon: "Revel.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "revel:cookie:0",
				kind: "cookie",
				key: "REVEL_FLASH",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "revel:cookie:1",
				kind: "cookie",
				key: "REVEL_SESSION",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"go"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "rspress",
		name: "Rspress",
		website: "https://rspress.dev",
		description: "Rspress is a static site generator built on Rspack, offering features like MDX support, full-text search, internationalization, and customizable themes​.",
		icon: "Rspress.svg",
		categories: [
			"framework",
			"content-publishing",
			"bundler"
		],
		rules: [
			{
				id: "rspress:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Rspress\\sv([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"rspack"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ruby-on-rails",
		name: "Ruby on Rails",
		website: "https://rubyonrails.org",
		description: "Ruby on Rails is a server-side web application framework written in Ruby under the MIT License.",
		icon: "Ruby on Rails.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "ruby-on-rails:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/assets/application-[a-z\\d]{32}/\\.js"),
				confidence: 50,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ruby-on-rails:pageGlobal:1",
				kind: "pageGlobal",
				property: "ReactOnRails",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ruby-on-rails:pageGlobal:2",
				kind: "pageGlobal",
				property: "__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ruby-on-rails:pageGlobal:3",
				kind: "pageGlobal",
				property: "_rails_loaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ruby-on-rails:cookie:4",
				kind: "cookie",
				key: "_session_id",
				confidence: 75,
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "ruby-on-rails:responseHeader:5",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("mod_(?:rails|rack)"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ruby-on-rails:responseHeader:6",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("mod_(?:rails|rack)"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "ruby-on-rails:meta:7",
				kind: "meta",
				key: "csrf-param",
				valuePattern: new RegExp("^authenticity_token$"),
				confidence: 50,
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"ruby"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:rubyonrails:rails:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "saber",
		name: "Saber",
		website: "https://saber.land/",
		description: "Saber is a framework for building static websites.",
		icon: "Saber.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "saber:html:0",
				kind: "html",
				pattern: new RegExp("<div [^>]*id=\"_saber\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "saber:dom:1",
				kind: "dom",
				selector: "div[id*='_saber']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "saber:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Saber v([\\d.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sails-js",
		name: "Sails.js",
		website: "https://sailsjs.org",
		icon: "Sails.js.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "sails-js:cookie:0",
				kind: "cookie",
				key: "sails\\.sid",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "sails-js:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^Sails(?:$|[^a-z0-9])"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"express"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sapper",
		name: "Sapper",
		website: "https://sapper.svelte.dev",
		icon: "Sapper.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "sapper:html:0",
				kind: "html",
				pattern: new RegExp("<script[^>]*>__SAPPER__"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "sapper:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("__SAPPER__"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sapper:pageGlobal:2",
				kind: "pageGlobal",
				property: "__SAPPER__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"svelte",
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "scully",
		name: "Scully",
		website: "https://scully.io",
		description: "Scully is a static site generator for Angular projects looking to embrace the Jamstack.",
		icon: "Scully.svg",
		categories: [
			"framework",
			"content-publishing",
			"ui-library"
		],
		rules: [
			{
				id: "scully:pageGlobal:0",
				kind: "pageGlobal",
				property: "ScullyIO",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "scully:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Scully\\s([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"angular"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "seosphera",
		name: "Seosphera",
		website: "https://seosphera.com",
		description: "Seosphera is a web development platform designed to build, manage, and deploy websites and web applications.",
		icon: "Seosphera.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "seosphera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.seosphera\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "seosphera:dom:1",
				kind: "dom",
				selector: "link[href*='.seosphera.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "shiny",
		name: "Shiny",
		website: "https://shiny.posit.co",
		description: "Shiny is an R package that enables the creation of interactive web applications using only R code, facilitating reactive programming and providing a variety of prebuilt widgets for dynamic user interfaces.",
		icon: "Shiny.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "shiny:pageGlobal:0",
				kind: "pageGlobal",
				property: "Shiny.addCustomMessageHandler",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "shiny:responseHeader:1",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^Shiny Server$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:rstudio:shiny_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "shopify-web-components",
		name: "Shopify Web Components",
		website: "https://shopify.dev/docs/api/storefront-web-components",
		description: "Storefront Web Components let you bring Shopify-powered commerce capabilities to any website.",
		icon: "Shopify.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "shopify-web-components:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com/storefront/web-components\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sitepad",
		name: "SitePad",
		website: "https://sitepad.com",
		description: "SitePad is a WYSIWYG drag and drop website building and maintenance program.",
		icon: "SitePad.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "sitepad:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^SitePad(?:\\s([\\d\\.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"low"
			]
		}
	},
	{
		id: "snap",
		name: "Snap",
		website: "https://snapframework.com",
		icon: "Snap.png",
		categories: [
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "snap:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Snap/([.\\d]+)"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"haskell"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "solidstart",
		name: "SolidStart",
		website: "https://start.solidjs.com",
		description: "SolidStart is the Solid app framework.",
		icon: "SolidJS.svg",
		categories: [
			"framework",
			"server-runtime-infra",
			"ui-library"
		],
		rules: [
			{
				id: "solidstart:pageGlobal:0",
				kind: "pageGlobal",
				property: "_$HY.init",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"solidjs"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "spring",
		name: "Spring",
		website: "https://spring.io",
		description: "Spring is a comprehensive framework for building enterprise-level Java applications, providing tools and infrastructure for application development, including dependency injection, transaction management, and integration with various technologies.",
		icon: "Spring.svg",
		categories: [
			"framework",
			"animation"
		],
		rules: [
			{
				id: "spring:responseHeader:0",
				kind: "responseHeader",
				key: "X-Application-Context",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:vmware:spring_framework:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "stencil",
		name: "Stencil",
		website: "https://stenciljs.com",
		description: "Stenciljs is an open-source web component compiler that enables developers to create reusable, interoperable UI components that can work across different frameworks and platforms.",
		icon: "Stencil.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "stencil:dom:0",
				kind: "dom",
				selector: "html[data-stencil-build][class*='hydrated'], stencil-router, stencil-route-link",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "stencil:pageGlobal:1",
				kind: "pageGlobal",
				property: "stencil.inspect",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "stimulusreflex",
		name: "StimulusReflex",
		website: "https://docs.stimulusreflex.com",
		description: "StimulusReflex lets you create reactive web interfaces with Ruby on Rails.",
		icon: "stimulus-reflex-logo.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "stimulusreflex:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.stimulate"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "stimulusreflex:dom:1",
				kind: "dom",
				selector: "[data-reflex]",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"ruby-on-rails",
			"stimulus"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "streamlit",
		name: "Streamlit",
		website: "https://streamlit.io",
		description: "Streamlit is an open-source Python framework enabling data scientists and AI/ML engineers to create data applications with minimal coding requirements.",
		icon: "Streamlit.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "streamlit:pageGlobal:0",
				kind: "pageGlobal",
				property: "streamlitDebug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "streamlit:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunk_streamlit_app",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "streamlit:cookie:2",
				kind: "cookie",
				key: "_streamlit_csrf",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "streamlit:cookie:3",
				kind: "cookie",
				key: "_streamlit_xsrf",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "streamlit:cookie:4",
				kind: "cookie",
				key: "streamlit_session",
				description: "Cookie name matches a known technology marker."
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
		id: "surge",
		name: "Surge",
		website: "https://surge.sh",
		description: "Surge is a static web publishing platform designed for front-end developers to deploy projects.",
		icon: "Surge.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "surge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("surge\\.sh(?:\\/[-\\w]{0,40})?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "surge:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.surge\\.sh"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "surge:url:2",
				kind: "url",
				pattern: new RegExp("surge\\.sh"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "surge:dom:3",
				kind: "dom",
				selector: "link[href*='.surge.sh/']",
				description: "DOM selector matches a known technology marker."
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
		id: "symfony",
		name: "Symfony",
		website: "https://symfony.com",
		description: "Symfony is a PHP web application framework and a set of reusable PHP components/libraries.",
		icon: "Symfony.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "symfony:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("/@?symfony/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "symfony:dom:1",
				kind: "dom",
				selector: "div.sf-toolbar-block, div.sf-toolbar",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "symfony:pageGlobal:2",
				kind: "pageGlobal",
				property: "Sfjs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "symfony:cookie:3",
				kind: "cookie",
				key: "sf_redirect",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:sensiolabs:symfony:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "the-com",
		name: "The.com",
		website: "https://www.the.com",
		description: "The.com is a low-code website building platform with community-created components that you can share and own.",
		icon: "The.com.svg",
		categories: [
			"framework",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "the-com:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("the-dotcom-public-cdn\\.s3\\.amazonaws\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"react",
			"amazon-s3"
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
		id: "thinkphp",
		name: "ThinkPHP",
		website: "https://www.thinkphp.cn",
		description: "ThinkPHP is an open-source PHP framework with MVC structure developed and maintained by Shanghai Topthink Company.",
		icon: "ThinkPHP.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "thinkphp:cookie:0",
				kind: "cookie",
				key: "thinkphp_show_page_trace",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "thinkphp:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("ThinkPHP"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:thinkphp:thinkphp:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "total-js",
		name: "total.js",
		website: "https://totaljs.com",
		description: "Total.js is a versatile platform offering open-source JavaScript/Node.js libraries and tools for both server-side and client-side web development.",
		icon: "total.js.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "total-js:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^total\\.js"),
				description: "Response header matches a known technology marker."
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
		id: "twistphp",
		name: "TwistPHP",
		website: "https://twistphp.com",
		icon: "TwistPHP.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "twistphp:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("TwistPHP"),
				description: "Response header matches a known technology marker."
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
		id: "vaadin",
		name: "Vaadin",
		website: "https://vaadin.com",
		description: "Vaadin is an open-source framework for building user interfaces and single-page applications using Java and TypeScript.",
		icon: "Vaadin.svg",
		categories: [
			"framework",
			"transpiler"
		],
		rules: [
			{
				id: "vaadin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vaadinBootstrap\\.js(?:\\?v=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vaadin:pageGlobal:1",
				kind: "pageGlobal",
				property: "Vaadin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vaadin:pageGlobal:2",
				kind: "pageGlobal",
				property: "vaadin",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:vaadin:vaadin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "vitepress",
		name: "VitePress",
		website: "https://vitepress.vuejs.org/",
		description: "VitePress is a Vite & Vue Powered Static Site Generator.",
		icon: "vite.svg",
		categories: [
			"framework",
			"content-publishing",
			"ui-library",
			"bundler"
		],
		rules: [
			{
				id: "vitepress:pageGlobal:0",
				kind: "pageGlobal",
				property: "__VP_HASH_MAP__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"vue-js",
			"vite"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vuepress",
		name: "VuePress",
		website: "https://vuepress.vuejs.org/",
		description: "VuePress is a static site generator with a Vue-powered theming system, and a default theme for writing technical documentation.",
		icon: "VuePress.svg",
		categories: [
			"framework",
			"content-publishing",
			"ui-library"
		],
		rules: [
			{
				id: "vuepress:pageGlobal:0",
				kind: "pageGlobal",
				property: "__VUEPRESS__.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vuepress:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^VuePress(?: ([0-9.]+)(-[a-z]+.[0-9]+)?)?$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "web2py",
		name: "Web2py",
		website: "https://web2py.com",
		icon: "Web2py.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "web2py:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web2py\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "web2py:responseHeader:1",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("web2py"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "web2py:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Web2py"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"python",
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:web2py:web2py:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "wt",
		name: "Wt",
		website: "https://www.webtoolkit.eu/wt",
		description: "Wt is a C++ library for developing web applications.",
		icon: "Wt.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "wt:pageGlobal:0",
				kind: "pageGlobal",
				property: "Wt.WT.$",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wt:pageGlobal:1",
				kind: "pageGlobal",
				property: "WtOnLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wt:pageGlobal:2",
				kind: "pageGlobal",
				property: "WtSignalEmit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "xeora",
		name: "Xeora",
		website: "https://www.xeora.org",
		icon: "xeora.png",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "xeora:html:0",
				kind: "html",
				pattern: new RegExp("<input type=\"hidden\" name=\"_sys_bind_\\d+\" id=\"_sys_bind_\\d+\" />"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "xeora:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/_bi_sps_v.+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "xeora:dom:2",
				kind: "dom",
				selector: "input[type='hidden'][name^='_sys_bind_'][id^='_sys_bind_']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "xeora:responseHeader:3",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("XeoraEngine"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "xeora:responseHeader:4",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("XeoraCube"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "yii",
		name: "Yii",
		website: "https://www.yiiframework.com",
		description: "Yii is an open-source, object-oriented, component-based MVC PHP web application framework.",
		icon: "Yii.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "yii:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"http://www\\.yiiframework\\.com/\" rel=\"external\">Yii Framework</a>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "yii:html:1",
				kind: "html",
				pattern: new RegExp("<input type=\"hidden\" value=\"[a-zA-Z0-9]{40}\" name=\"YII_CSRF_TOKEN\" \\/>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "yii:html:2",
				kind: "html",
				pattern: new RegExp("<!\\[CDATA\\[YII-BLOCK-(?:HEAD|BODY-BEGIN|BODY-END)\\]"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "yii:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("/assets/[a-zA-Z0-9]{8}\\/yii\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yii:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("yii(?:\\.|)?(?:validation|activeform)\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yii:dom:5",
				kind: "dom",
				selector: "input[name='YII_CSRF_TOKEN'][type='hidden'], a[href*='//www.yiiframework.com/'][rel='external']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "yii:pageGlobal:6",
				kind: "pageGlobal",
				property: "yii.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "yii:cookie:7",
				kind: "cookie",
				key: "YII_CSRF_TOKEN",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:yiiframework:yii:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "zk",
		name: "ZK",
		website: "https://zkoss.org",
		description: "ZK is a framework for building rich, interactive web applications using Java, providing a set of tools and components to create dynamic user interfaces.",
		icon: "ZK.svg",
		categories: [
			"framework"
		],
		rules: [
			{
				id: "zk:html:0",
				kind: "html",
				pattern: new RegExp("<!-- ZK [.\\d\\s]+-->"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "zk:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("zkau/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "zola",
		name: "Zola",
		website: "https://www.getzola.org/",
		description: "Zola is a static site engine that consolidates essential features in a single binary.",
		icon: "Zola.svg",
		categories: [
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "zola:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getzola\\.org"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zola:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Zola(?:\\s[\\d\\.]+)?$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
