import type { TechnologyDefinition } from '../types';

export const stylingLibraryTechnologyDefinitions = [
	{
		id: "adobe-fonts",
		name: "Adobe Fonts",
		website: "https://fonts.adobe.com",
		description: "Adobe Fonts is a web-based service providing access to a vast library of high-quality fonts for web and print design.",
		icon: "Adobe Fonts.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "adobe-fonts:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^\"]+use\\.typekit\\.(?:net|com)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "adobe-fonts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("use\\.typekit\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "adobe-fonts:dom:2",
				kind: "dom",
				selector: "link[href*='use.typekit.net'], link[href*='use.typekit.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adobe-fonts:pageGlobal:3",
				kind: "pageGlobal",
				property: "Typekit.config.js",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
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
		id: "bootbox-js",
		name: "Bootbox.js",
		website: "https://bootboxjs.com/",
		description: "Bootbox.js is a small JavaScript library which allows you to create custom modal dialogs using Bootstrap modals, without having to worry about creating, managing, or removing any of the required DOM elements or JavaScript event handlers.",
		icon: "Bootbox.js.png",
		categories: [
			"styling-library",
			"component-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "bootbox-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?bootbox(?:\\.min)?\\.js"),
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
		id: "bootstrap",
		name: "Bootstrap",
		website: "https://getbootstrap.com",
		description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
		icon: "Bootstrap.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "bootstrap:html:0",
				kind: "html",
				pattern: new RegExp("<style>\\s+/\\*!\\s+\\* Bootstrap v(\\d\\.\\d\\.\\d)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "bootstrap:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]*?bootstrap(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>-]*?(?:\\.min)?\\.css"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "bootstrap:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("bootstrap(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bootstrap:pageGlobal:4",
				kind: "pageGlobal",
				property: "bootstrap.Alert",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bootstrap:pageGlobal:5",
				kind: "pageGlobal",
				property: "bootstrap.Alert.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bootstrap:pageGlobal:6",
				kind: "pageGlobal",
				property: "jQuery.fn.tooltip.Constructor.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:getbootstrap:bootstrap:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "bootstrap-icons",
		name: "Bootstrap Icons",
		website: "https://icons.getbootstrap.com",
		description: "Bootstrap Icons is a growing library of SVG icons that are designed by @mdo and maintained by the Bootstrap Team.",
		icon: "Bootstrap Icons.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "bulma",
		name: "Bulma",
		website: "https://bulma.io",
		description: "Bulma is a free class-based framework for CSS.",
		icon: "Bulma.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "bulma:pageGlobal:1",
				kind: "pageGlobal",
				property: "Bulma.VERSION",
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
		id: "bunny-fonts",
		name: "Bunny Fonts",
		website: "https://fonts.bunny.net",
		description: "Bunny Fonts is an open-source, privacy-first web font platform designed to put privacy back into the internet.",
		icon: "Bunny.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "bunny-fonts:dom:0",
				kind: "dom",
				selector: "link[href*='fonts.bunny.net']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"bunny"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cufon",
		name: "Cufon",
		website: "https://cufon.shoqolate.com",
		description: "Cufon is a tool used to overlap real text with an image.",
		icon: "Cufon.png",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "cufon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cufon-yui\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cufon:pageGlobal:1",
				kind: "pageGlobal",
				property: "Cufon",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "daisyui",
		name: "daisyUI",
		website: "https://daisyui.com",
		description: "daisyUI is a customisable Tailwind CSS component library that prevents verbose markup in frontend applications. With a focus on customising and creating themes for user interfaces, daisyUI uses pure CSS and Tailwind utility classes, allowing developers to write clean HTML.",
		icon: "daisyUI.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "daisyui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("daisyUI"),
				description: "Script content contains a bounded technology signature."
			}
		],
		implies: [
			"tailwind-css"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "emfont",
		name: "Emfont",
		website: "https://font.emtech.cc",
		description: "Emfont is an open-source CJK webfont service that enables self-hosted, cache-efficient, and privacy-conscious distribution of open-source fonts.",
		icon: "Emfont.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "emfont:pageGlobal:0",
				kind: "pageGlobal",
				property: "emfont.Emfont",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "flowbite",
		name: "Flowbite",
		website: "https://github.com/themesberg/flowbite",
		description: "Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.",
		icon: "Flowbite.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "flowbite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/flowbite(?:@([\\d\\.]+)/|\\.bundle\\.js)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"tailwind-css"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "font-awesome",
		name: "Font Awesome",
		website: "https://fontawesome.com/",
		description: "Font Awesome is a font and icon toolkit based on CSS and Less.",
		icon: "Font Awesome.svg",
		categories: [
			"styling-library",
			"component-library",
			"styling-processor"
		],
		rules: [
			{
				id: "font-awesome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:F|f)o(?:n|r)t-?(?:A|a)wesome(?:.*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "font-awesome:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fontawesome\\.com/([0-9a-z]+).js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "font-awesome:pageGlobal:3",
				kind: "pageGlobal",
				property: "FontAwesomeCdnConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "font-awesome:pageGlobal:4",
				kind: "pageGlobal",
				property: "FontAwesomeKitConfig.asyncLoading",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "font-awesome:pageGlobal:5",
				kind: "pageGlobal",
				property: "___FONT_AWESOME___",
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
		id: "fontserver",
		name: "FontServer",
		website: "https://fontserver.ir",
		description: "FontServer is a online font delivery network service-provider for websites.",
		icon: "FontServer.svg",
		categories: [
			"styling-library"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "fork-awesome",
		name: "Fork Awesome",
		website: "https://forkaweso.me",
		description: "Fork Awesome is now a community effort based on Font Awesome by Dave Gandy.",
		icon: "Fork Awesome.png",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "glyphicons",
		name: "Glyphicons",
		website: "https://glyphicons.com",
		description: "Glyphicons are icon fonts which you can use in your web projects.",
		icon: "Glyphicons.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "glyphicons:html:0",
				kind: "html",
				pattern: new RegExp("(?:<link[^>]* href=[^>]+glyphicons(?:\\.min)?\\.css|<img[^>]* src=[^>]+glyphicons)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "glyphicons:dom:1",
				kind: "dom",
				selector: "link[href*='glyphicons.css'], link[href*='glyphicons.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-font-api",
		name: "Google Font API",
		website: "https://fonts.google.com/",
		description: "Google Font API is a web service that supports open-source font files that can be used on your web designs.",
		icon: "Google Font API.svg",
		categories: [
			"styling-library",
			"api-pattern"
		],
		rules: [
			{
				id: "google-font-api:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("googleapis\\.com/.+webfont"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "google-font-api:pageGlobal:2",
				kind: "pageGlobal",
				property: "WebFonts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hoefler-and-co",
		name: "Hoefler&Co",
		website: "https://www.typography.com",
		description: "Hoefler&Co is a digital type foundry (font design studio) in Woburn, Massachusetts (formerly New York City), founded by type designer Jonathan Hoefler. Hoefler&Co designs typefaces for clients and for retail on its website.",
		icon: "Hoefler&Co.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "hoefler-and-co:dom:0",
				kind: "dom",
				selector: "link[href*='cloud.typography.com/']",
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
		id: "i30con",
		name: "i30con",
		website: "https://30nama.com/",
		description: "i30con is an icon toolkit based on CSS and JavaScript.",
		icon: "30namaPlayer.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "i30con:dom:0",
				kind: "dom",
				selector: "[class^='i30con']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ionicons",
		name: "Ionicons",
		website: "https://ionicons.com",
		description: "Ionicons is an open-source icon set crafted for web, iOS, Android, and desktop apps.",
		icon: "Ionicons.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "ionicons:dom:0",
				kind: "dom",
				selector: "link[href*='/ionicons.min.css'], link[href*='/ionicons.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lucide",
		name: "Lucide",
		website: "https://lucide.dev",
		description: "Lucide is an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols in digital and non-digital projects.",
		icon: "Lucide.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "lucide:dom:0",
				kind: "dom",
				selector: "svg.lucide",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "myfonts",
		name: "MyFonts",
		website: "https://www.myfonts.com",
		description: "MyFonts is a digital fonts distributor, based in Woburn, Massachusetts.",
		icon: "MyFonts.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "myfonts:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.myfonts\\.net/"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "myfonts:dom:1",
				kind: "dom",
				selector: "link[href*='.myfonts.net']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "myfonts:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.myfonts\\.net"),
				description: "Response header matches a known technology marker."
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
		id: "preline-ui",
		name: "Preline UI",
		website: "https://preline.co",
		description: "Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.",
		icon: "Preline UI.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "preline-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/preline\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"tailwind-css"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "shadcn-ui",
		name: "shadcn/ui",
		website: "https://ui.shadcn.com",
		description: "shadcn/ui is a component system built with Radix UI and Tailwind CSS.",
		icon: "shadcn-ui.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "shadcn-ui:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--destructive-foreground"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		implies: [
			"radix-ui",
			"tailwind-css"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sifr",
		name: "sIFR",
		website: "https://www.mikeindustries.com/blog/sifr",
		description: "sIFR is a JavaScript and Adobe Flash dynamic web fonts implementation.",
		icon: "sIFR.png",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "sifr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sifr\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "symbolset",
		name: "Symbolset",
		website: "https://symbolset.com",
		description: "Symbolset is a tool that converts words into icons by utilizing font technology, enabling visual representation of text-based content for various applications.",
		icon: "Symbolset.svg",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "symbolset:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.symbolset\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tailwind-css",
		name: "Tailwind CSS",
		website: "https://tailwindcss.com/",
		description: "Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.",
		icon: "tailwindcss.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "tailwind-css:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tailwindcss(?:tailwind-config-cdn)?\\.(?:com|js)|/npm/@tailwindcss/browser"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tailwind-css:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("--tw-(?:rotate|translate|space-x|text-opacity|border-opacity|bg-opacity|scale|ring|blur|shadow|brightness|contrast|grayscale|invert|sepia)"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "tailwind-css:pageGlobal:3",
				kind: "pageGlobal",
				property: "hexToTailwindColorVar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tailwind-css:pageGlobal:4",
				kind: "pageGlobal",
				property: "tailwind",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tailwind-css:meta:5",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Tailwind CSS$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "twitter-emoji-twemoji",
		name: "Twitter Emoji (Twemoji)",
		website: "https://twitter.github.io/twemoji/",
		description: "Twitter Emoji is a set of open-source emoticons and emojis for Twitter, TweetDeck, and also for Android and iOS versions of the application.",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "twitter-emoji-twemoji:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("twemoji(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "twitter-emoji-twemoji:pageGlobal:1",
				kind: "pageGlobal",
				property: "twemoji",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "twitter-emoji-twemoji:pageGlobal:2",
				kind: "pageGlobal",
				property: "twemoji.base",
				valuePattern: new RegExp("twemoji\\.maxcdn\\.com/v/([\\d\\.]+)/"),
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
		id: "typekit",
		name: "Typekit",
		website: "https://typekit.com",
		description: "Typekit is an online service which offers a subscription library of fonts.",
		icon: "Typekit.png",
		categories: [
			"styling-library"
		],
		rules: [
			{
				id: "typekit:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^\"]+use\\.typekit\\.(?:net|com)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "typekit:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("use\\.typekit\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "typekit:pageGlobal:2",
				kind: "pageGlobal",
				property: "Typekit.config.js",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
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
		id: "zurb-foundation",
		name: "ZURB Foundation",
		website: "https://foundation.zurb.com",
		description: "Zurb Foundation is used to prototype in the browser. Allows rapid creation of websites or applications while leveraging mobile and responsive technology. The front end framework is the collection of HTML, CSS, and Javascript containing design patterns.",
		icon: "ZURBFoundation.svg",
		categories: [
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "zurb-foundation:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+foundation[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "zurb-foundation:html:1",
				kind: "html",
				pattern: new RegExp("<div [^>]*class=\"[^\"]*(?:small|medium|large)-\\d{1,2} columns"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "zurb-foundation:dom:2",
				kind: "dom",
				selector: "link[href*='foundation'][href*='css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "zurb-foundation:pageGlobal:3",
				kind: "pageGlobal",
				property: "Foundation.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
