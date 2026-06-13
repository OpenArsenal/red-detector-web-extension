import type { TechnologyDefinition } from '../types';

export const wordpressEcosystemTechnologyDefinitions = [
	{
		id: "a3-lazy-load",
		name: "a3 Lazy Load",
		website: "https://a3rev.com/shop/a3-lazy-load/",
		description: "a3 Lazy Load is a mobile oriented, very simple to use plugin that will speed up sites page load speed.",
		icon: "a3.png",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "a3-lazy-load:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/a3-lazy-load\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "a3-lazy-load:jsGlobal:1",
				kind: "jsGlobal",
				property: "a3_lazyload_extend_params",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "a3-lazy-load:jsGlobal:2",
				kind: "jsGlobal",
				property: "a3_lazyload_params",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "addtoany-share-buttons",
		name: "AddToAny Share Buttons",
		website: "https://github.com/projectestac/wordpress-add-to-any",
		description: "AddToAny Share Buttons plugin for WordPress increases traffic and engagement by helping people share your posts and pages to any service.",
		icon: "AddToAny.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "addtoany-share-buttons:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/add-to-any\\/addtoany\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"addtoany",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "advanced-custom-fields",
		name: "Advanced Custom Fields",
		website: "https://www.advancedcustomfields.com",
		description: "Advanced Custom Fields is a WordPress plugin which allows you to add extra content fields to your WordPress edit screens.",
		icon: "Advanced Custom Fields.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "advanced-custom-fields:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/advanced-custom-fields(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "advanced-custom-fields:jsGlobal:1",
				kind: "jsGlobal",
				property: "acf",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "advanced-custom-fields:jsGlobal:2",
				kind: "jsGlobal",
				property: "acfL10n",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:advancedcustomfields:advanced_custom_fields:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "afthemes-covernews",
		name: "AFThemes CoverNews",
		website: "https://afthemes.com/products/covernews",
		description: "AFThemes CoverNews is a clean and elegant free WordPress theme that is perfect for online blog and magazine.",
		icon: "AFThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "afthemes-covernews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/covernews(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "age-gate",
		name: "Age Gate",
		website: "https://wordpress.org/plugins/age-gate",
		description: "A plugin to check the age of a visitor for Wordpress.",
		icon: "Age Gate.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "age-gate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("age-gate(?:\\/dist)?(?:\\/all)?(?:\\/focus)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "age-gate:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/age-gate/'], .age-gate, .age-gate-form, button[name='age_gate[confirm]']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "age-gate:jsGlobal:2",
				kind: "jsGlobal",
				property: "age_gate",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "aitthemes",
		name: "AitThemes",
		website: "https://www.ait-themes.club",
		description: "AitThemes is a customisable theme suitable for business, ecommerce, content, and directory websites.",
		icon: "AitThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "aitthemes:jsGlobal:0",
				kind: "jsGlobal",
				property: "AitSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aitthemes:jsGlobal:1",
				kind: "jsGlobal",
				property: "ait",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aitthemes:meta:2",
				kind: "meta",
				key: "Author",
				valuePattern: new RegExp("AitThemes\\.club", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "aitthemes:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("aitthemes\\.club", "i"),
				description: "Meta tag matches a known technology marker.",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "akismet",
		name: "Akismet",
		website: "https://akismet.com",
		description: "Akismet is a service that filters spam from comments, trackbacks, and contact form messages.",
		icon: "Akismet.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "akismet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/akismet\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "akismet:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/akismet/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "akismet:jsGlobal:2",
				kind: "jsGlobal",
				property: "ak_js.checkValidity",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "amp-for-wordpress",
		name: "AMP for WordPress",
		website: "https://amp-wp.org",
		description: "AMP for WordPress automatically adds Accelerated Mobile Pages (Google AMP Project) functionality to your WordPress site.",
		icon: "Accelerated-Mobile-Pages.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "amp-for-wordpress:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/amp/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "amp-for-wordpress:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^AMP Plugin v(\\d+\\.\\d+.*)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "amp-for-wordpress:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^amp plugin v(\\d+\\.\\d+.*)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:ampforwp:accelerated_mobile_pages:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"amp",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "andersnoren-baskerville",
		name: "AndersNoren Baskerville",
		website: "https://andersnoren.se/teman/baskerville-wordpress-theme",
		description: "AndersNoren Baskerville is a responsive and retina-ready masonry WordPress theme for hoarders.",
		icon: "AndersNoren.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "andersnoren-baskerville:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/baskerville(?:-2)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "andersnoren-fukasawa",
		name: "AndersNoren Fukasawa",
		website: "https://andersnoren.se/teman/fukasawa-wordpress-theme",
		description: "AndersNoren Fukasawa is a minimal masonry style blog WordPress theme for photographers and collectors.",
		icon: "AndersNoren.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "andersnoren-fukasawa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/fukasawa\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "andersnoren-hemingway",
		name: "AndersNoren Hemingway",
		website: "https://andersnoren.se/teman/hemingway-wordpress-theme",
		description: "AndersNoren Hemingway is a clean and beautiful two-column WordPress theme for bloggers.",
		icon: "AndersNoren.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "andersnoren-hemingway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/hemingway\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "andersnoren-hitchcock",
		name: "AndersNoren Hitchcock",
		website: "https://andersnoren.se/teman/hitchcock-wordpress-theme",
		description: "AndersNoren Hitchcock is a portfolio WordPress theme for designers, photographers and other creatives.",
		icon: "AndersNoren.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "andersnoren-hitchcock:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/hitchcock\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "andersnoren-lovecraft",
		name: "AndersNoren Lovecraft",
		website: "https://andersnoren.se/teman/lovecraft-wordpress-theme",
		description: "AndersNoren Lovecraft is a beautiful two-column WordPress theme for bloggers.",
		icon: "AndersNoren.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "andersnoren-lovecraft:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/lovecraft\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "animate-it",
		name: "Animate It",
		website: "https://wordpress.org/plugins/animate-it/",
		description: "Animate It! adds CSS3 animations to your content.",
		icon: "Animate It.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "animate-it:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("animate-it(?:\\/assets)?(?:\\/js)?(?:\\/animo)?(?:\\/edsanimate)?(?:\\/jquery)?(?:\\/viewportchecker)?(?:\\.ba-throttle-debounce)?(?:\\.min)?(?:\\.site)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "animate-it:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/animate-it/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "animation-addons",
		name: "Animation Addons",
		website: "https://animation-addons.com",
		description: "Animation Addons is a WordPress plugin that extends the Elementor page builder with advanced animation effects and widgets for creating visually dynamic content.",
		icon: "Animation Addons.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "animation-addons:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/extension-for-animation-addons\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "animation-addons:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\/animation-addons\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"elementor",
			"wordpress",
		],
	},
	{
		id: "apollo13themes-rife",
		name: "Apollo13Themes Rife",
		website: "https://apollo13themes.com/rife",
		description: "Apollo13Themes Rife is a great portfolio and photography WordPress theme with 7 ready-to-use demo layouts.",
		icon: "Apollo13Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "apollo13themes-rife:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/rife(?:-free)?\\/(?:.+script\\.min\\.js(?:\\?ver=([\\d\\.]+)))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "asgaros-forum",
		name: "Asgaros Forum",
		website: "https://www.asgaros.de",
		description: "Asgaros Forum is a lightweight and simple forum plugin for WordPress.",
		icon: "Asgaros Forum.png",
		categories: [
			"wordpress-ecosystem",
			"community-ugc",
		],
		rules: [
			{
				id: "asgaros-forum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/asgaros-forum\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "asgaros-forum:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/asgaros-forum/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:asgaros:asgaros_forum:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "astra",
		name: "Astra",
		website: "https://wpastra.com/",
		description: "Astra is a fast, lightweight, and highly customizable WordPress Theme.",
		icon: "Astra.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "astra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/astra\\S*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "astra:dom:1",
				kind: "dom",
				selector: "link[href*='themes/astra']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "astra:dom:2",
				kind: "dom",
				selector: "style[id*='astra-theme'], body[class*='astra-'], script[id*='astra-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "astra:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/astra\\s*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
			],
			cpe: "cpe:2.3:a:brainstormforce:astra:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "astra-widgets",
		name: "Astra Widgets",
		website: "https://wpastra.com/did-you-know-astra-is-widget-ready",
		description: "Astra Widgets is a handy little free plugin that lets you display address, list icons or social profiles within the Astra Theme.",
		icon: "Astra.svg",
		categories: [
			"wordpress-ecosystem",
			"widgets-misc",
		],
		rules: [
			{
				id: "astra-widgets:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/astra-widgets/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"astra",
			"wordpress",
		],
	},
	{
		id: "athemes-airi",
		name: "aThemes Airi",
		website: "https://athemes.com/theme/airi",
		description: "aThemes Airi is a powerful yet lightweight and flexible WordPress theme for organization or freelancer.",
		icon: "aThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "athemes-airi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/airi\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athemes-airi:dom:1",
				kind: "dom",
				selector: "link#airi-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "athemes-astrid",
		name: "aThemes Astrid",
		website: "https://athemes.com/theme/astrid",
		description: "aThemes Astrid is a powerful yet lightweight and flexible WordPress theme.",
		icon: "aThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "athemes-astrid:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/astrid\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athemes-astrid:dom:1",
				kind: "dom",
				selector: "link#astrid-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "athemes-hiero",
		name: "aThemes Hiero",
		website: "https://athemes.com/theme/hiero",
		description: "aThemes Hiero is an awesome magazine theme for your WordPress site feature bold colors and details to the content.",
		icon: "aThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "athemes-hiero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/hiero\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "athemes-moesia",
		name: "aThemes Moesia",
		website: "https://athemes.com/theme/moesia",
		description: "aThemes Moesia is the business theme you need in order to build your presence on the Internet.",
		icon: "aThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "athemes-moesia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/moesia(?:-pro-ii)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athemes-moesia:dom:1",
				kind: "dom",
				selector: "link#moesia-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "athemes-sydney",
		name: "aThemes Sydney",
		website: "https://athemes.com/theme/sydney",
		description: "aThemes Sydney is a powerful business WordPress theme that provides a fast way for companies or freelancers to create an online presence.",
		icon: "aThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "athemes-sydney:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/sydney(?:-pro-ii)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "athemes-sydney:dom:1",
				kind: "dom",
				selector: "link#sydney-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "auberge",
		name: "Auberge",
		website: "https://www.webmandesign.eu/portfolio/auberge-wordpress-theme/",
		description: "Auberge is a responsive WordPress theme designed for restaurants, cafes, and recipe blogs.",
		icon: "Auberge.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "auberge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/auberge\\/.+\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "auberge:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/auberge/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "autoptimize",
		name: "Autoptimize",
		website: "https://autoptimize.com",
		description: "Autoptimize is a WordPress plugin that optimises website performance by aggregating, minifying, and compressing HTML, CSS, and JavaScript files.",
		icon: "Autoptimize.png",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "autoptimize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/autoptimize\\/.+\\.js(?:\\?ao_version=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "autoptimize:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/autoptimize/'], link[href*='/wp-content/cache/autoptimize/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:autoptimize:autoptimize:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "beaver-builder",
		name: "Beaver Builder",
		website: "https://www.wpbeaverbuilder.com/",
		description: "Beaver Builder is a drag-and-drop page builder for WordPress.",
		icon: "BeaverBuilder.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "beaver-builder:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/bb-plugin/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "beaver-builder:html:1",
				kind: "html",
				pattern: new RegExp("<body[^>]+fl-builder"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "beaver-builder:dom:2",
				kind: "dom",
				selector: "body[class*='fl-builder'], link[id*='fl-builder']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:fastlinemedia:beaver_builder:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"wordpress",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "betheme",
		name: "BeTheme",
		website: "https://www.betheme.com",
		description: "BeTheme is a collection of WordPress themes developed by Muffin Group.",
		icon: "BeTheme.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "betheme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/betheme\\/js\\/scripts(?:\\.min)?\\.js\\?ver=([\\d.]+)"),
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
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "better-click-to-tweet",
		name: "Better Click To Tweet",
		website: "https://wordpress.org/plugins/better-click-to-tweet/",
		description: "Adds click to tweet boxes into your posts.",
		icon: "Better Click To Tweet.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "better-click-to-tweet:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/better-click-to-tweet/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"mid",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "better-search",
		name: "Better Search",
		website: "https://webberzone.com/plugins/better-search/",
		description: "Better Search is a WordPress plugin designed to enhance your search experience.",
		icon: "BetterSearch.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "better-search:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/better-search/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:webberzone:better_search:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "betterdocs-plugin",
		name: "BetterDocs plugin",
		website: "https://betterdocs.co/docs/wordpress",
		description: "BetterDocs plugin is an advanced documentation and knowledge base plugin for WordPress.",
		icon: "BetterDocs.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "betterdocs-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/betterdocs(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		implies: [
			"betterdocs",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "blocksy",
		name: "Blocksy",
		website: "https://creativethemes.com/blocksy",
		description: "Blocksy is a modern and lightweight WordPress theme designed for a variety of websites, including blogs, portfolios, ecommerce stores, and business websites.",
		icon: "Blocksy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "blocksy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/blocksy\\/(?:.+main\\.js(?:\\?ver=([\\d\\.]+)))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blocksy:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/blocksy/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "blocksy:jsGlobal:2",
				kind: "jsGlobal",
				property: "blocksyJsonP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blocksy:jsGlobal:3",
				kind: "jsGlobal",
				property: "blocksyResponsiveMenuCache",
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
			cpe: "cpe:2.3:a:creativethemes:blocksy:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "blocksy-companion",
		name: "Blocksy Companion",
		website: "https://creativethemes.com/blocksy/companion/",
		description: "Blocksy Companion is a WordPress plugin that provides additional functionality and features for the Blocksy theme.",
		icon: "Blocksy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "blocksy-companion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/blocksy-companion(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blocksy-companion:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/blocksy-companion']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:creativethemes:blocksy_companion:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"blocksy",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "blossom-travel",
		name: "Blossom Travel",
		website: "https://blossomthemes.com/wordpress-themes/blossom-travel",
		description: "Blossom Travel is a free WordPress theme which allows you to create various types of feminine blogs such as travel blog, personal blog, fashion blog, beauty blog, and many more.",
		icon: "Blossom.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "blossom-travel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/blossom-travel(?:-pro)?\\/.+custom\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blossom-travel:jsGlobal:1",
				kind: "jsGlobal",
				property: "blossom_travel_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blossom-travel:jsGlobal:2",
				kind: "jsGlobal",
				property: "blossom_travel_pro_data",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "bold-page-builder",
		name: "Bold Page Builder",
		website: "https://wordpress.org/plugins/bold-page-builder",
		description: "Bold Page Builder is a plugin or a theme component that allows users to structure and design responsive pages.",
		icon: "Bold Page Builder.png",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "bold-page-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/bold-page-builder\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:bold-themes:bold_page_builder:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "bold-themes",
		name: "Bold Themes",
		website: "https://bold-themes.com/wordpress-themes-plugins/",
		description: "Bold Themes is a powerful and easy to use premium WordPress themes.",
		icon: "Bold Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "bold-themes:jsGlobal:0",
				kind: "jsGlobal",
				property: "BoldThemesURI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bold-themes:jsGlobal:1",
				kind: "jsGlobal",
				property: "boldthemes_theme_loaded",
				valuePattern: new RegExp("^true$"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		implies: [
			"wordpress",
		],
	},
	{
		id: "breadcrumb-navxt",
		name: "Breadcrumb NavXT",
		website: "https://github.com/mtekk/Breadcrumb-NavXT",
		description: "Breadcrumb NavXT is a WordPress plugin compatible with WordPress versions 4.9 and up.",
		icon: "Breadcrumb NavXT.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "breadcrumb-navxt:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Breadcrumb NavXT ([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "breadcrumb-navxt:html:1",
				kind: "html",
				pattern: new RegExp("<!-- breadcrumb navxt ([\\d\\.]+)"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "brilliant-web-to-lead",
		name: "Brilliant Web-to-Lead",
		website: "https://brilliantplugins.com/downloads/salesforce/",
		description: "Brilliant Web-to-Lead plugin facilitates the technical integration between WordPress installations and Salesforce CRM accounts, enabling the exchange and synchronization of data.",
		icon: "Brilliant Web-to-Lead.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "brilliant-web-to-lead:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/salesforce-wordpress-to-lead\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"salesforce",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "buddypress",
		name: "BuddyPress",
		website: "https://buddypress.org",
		description: "BuddyPress is designed to allow schools, companies, sports teams, or any other niche community to start their own social network or communication tool.",
		icon: "BuddyPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "buddypress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/buddypress\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:buddypress:buddypress:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "caldera-forms",
		name: "Caldera Forms",
		website: "https://calderaforms.com",
		description: "Caldera Forms is the free WordPress form builder plugin.",
		icon: "Caldera Forms.png",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "caldera-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/caldera-forms\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "caldera-forms:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/caldera-forms/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "caldera-forms:jsGlobal:2",
				kind: "jsGlobal",
				property: "calderaForms",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "candid-themes-fairy",
		name: "Candid Themes Fairy",
		website: "https://www.candidthemes.com/themes/fairy",
		description: "Fairy is a free and minimal WordPress blog theme by Candid Themes.",
		icon: "Candid Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "candid-themes-fairy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/fairy(?:-premium)?\\/.+custom\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "catch-themes-catch-box",
		name: "Catch Themes Catch Box",
		website: "https://catchthemes.com/themes/catch-box",
		description: "Catch Box is a lightweight, box shaped, clean responsive WordPress theme by Catch Themes.",
		icon: "Catch Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "catch-themes-catch-box:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/catch-box(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "catch-themes-catch-box:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/catch-box/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "catch-themes-fotografie",
		name: "Catch Themes Fotografie",
		website: "https://catchthemes.com/themes/fotografie",
		description: "Fotografie is a modern photography WordPress theme that comes with high-quality features and minimal design by Catch Themes.",
		icon: "Catch Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "catch-themes-fotografie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/fotografie(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "catch-themes-fotografie:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/fotografie/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "chimpmatic",
		name: "Chimpmatic",
		website: "https://chimpmatic.com",
		description: "Chimpmatic is a premium Contact Form 7 and Mailchimp integration plugin.",
		icon: "default.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "chimpmatic:dom:0",
				kind: "dom",
				selector: "form[class*='chimpmatic']",
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
		implies: [
			"contact-form-7",
			"mailchimp",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "civicrm-plugins",
		name: "CiviCRM plugins",
		website: "https://wordpress.org/plugins/search/civicrm/",
		description: "CiviCRM is a web-based suite of internationalised open-source software for constituency relationship management.",
		icon: "CiviCRM.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "civicrm-plugins:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/(?:[\\w\\-]+)?civicrm(?:[\\w\\-]+)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"civicrm",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "cloudflare-turnstile-for-woocommerce",
		name: "Cloudflare Turnstile for WooCommerce",
		website: "https://wordpress.org/plugins/simple-cloudflare-turnstile/",
		description: "Cloudflare Turnstile Integration Plugin for WooCommerce adds Cloudflare Turnstile support to WooCommerce forms.",
		icon: "CloudFlare.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cloudflare-turnstile-for-woocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/simple-cloudflare-turnstile\\/js\\/integrations\\/woocommerce\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "codetipi",
		name: "Codetipi",
		website: "https://codetipi.com",
		description: "Codetipi is a provider of WordPress themes and plugins designed for premium users.",
		icon: "Codetipi.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "codetipi:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("codetipi-"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "colibri-wp",
		name: "Colibri WP",
		website: "https://colibriwp.com",
		description: "Colibri WP is a drag-and-drop website builder and theme system for WordPress.",
		icon: "Colibri WP.png",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "colibri-wp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/colibri-page-builder.+\\.js(?:.+ver=([\\d\\.\\-\\w]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colibri-wp:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/colibri-page-builder']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "colibri-wp:jsGlobal:2",
				kind: "jsGlobal",
				property: "Colibri",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "colibri-wp:jsGlobal:3",
				kind: "jsGlobal",
				property: "colibriData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "colibri-wp:jsGlobal:4",
				kind: "jsGlobal",
				property: "colibriFrontendData",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colorlib-activello",
		name: "Colorlib Activello",
		website: "https://colorlib.com/wp/themes/activello",
		description: "Colorlib Activello is a clean, minimal multipurpose WordPress blog theme developer using the Bootstrap frontend framework making it fully responsive and mobile-friendly.",
		icon: "Colorlib.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colorlib-activello:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/activello\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colorlib-activello:dom:1",
				kind: "dom",
				selector: "link#activello-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "colorlib-activello:jsGlobal:2",
				kind: "jsGlobal",
				property: "ActivelloIsMobile",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colorlib-illdy",
		name: "Colorlib Illdy",
		website: "https://colorlib.com/wp/themes/illdy",
		description: "Colorlib Illdy is a stunning multipurpose WordPress theme built based on Bootstrap frontend framework making it fully responsive and mobile friendly.",
		icon: "Colorlib.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colorlib-illdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/illdy\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colorlib-illdy:dom:1",
				kind: "dom",
				selector: "link#illdy-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colorlib-shapely",
		name: "Colorlib Shapely",
		website: "https://colorlib.com/wp/themes/shapely",
		description: "Colorlib Shapely is considered as a powerful, clean and beautiful full-width free WordPress theme.",
		icon: "Colorlib.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colorlib-shapely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/shapely\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colorlib-shapely:dom:1",
				kind: "dom",
				selector: "link#shapely-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "colorlib-shapely:jsGlobal:2",
				kind: "jsGlobal",
				property: "ShapelyAdminObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colorlib-sparkling",
		name: "Colorlib Sparkling",
		website: "https://colorlib.com/wp/themes/sparkling",
		description: "Colorlib Sparkling is a clean, modern, flat design WordPress theme developed using Bootstrap.",
		icon: "Colorlib.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colorlib-sparkling:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/sparkling\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colorlib-sparkling:dom:1",
				kind: "dom",
				selector: "link#sparkling-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colorlib-travelify",
		name: "Colorlib Travelify",
		website: "https://colorlib.com/wp/themes/travelify",
		description: "Colorlib Travelify is a responsive, free, travel WordPress theme.",
		icon: "Colorlib.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colorlib-travelify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/travelify\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colorlib-travelify:dom:1",
				kind: "dom",
				selector: "link#travelify-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "colorlib-travelify:jsGlobal:2",
				kind: "jsGlobal",
				property: "travelify_slider_value",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "colormag",
		name: "ColorMag",
		website: "https://themegrill.com/themes/colormag/",
		description: "ColorMag theme is for creating news, magazine, newspaper and other kinds of publishing sites. Compatible with Elementor.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "colormag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/colormag.*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "colormag:dom:1",
				kind: "dom",
				selector: "body[class*='colormag-theme']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "colormag:dom:2",
				kind: "dom",
				selector: "link[id*='colormag']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:themegrill:colormag:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "contact-form-7",
		name: "Contact Form 7",
		website: "https://contactform7.com",
		description: "Contact Form 7 is an WordPress plugin which can manage multiple contact forms. The form supports Ajax-powered submitting, CAPTCHA, Akismet spam filtering.",
		icon: "Contact Form 7.png",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "contact-form-7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/contact-form-7\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "contact-form-7:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/contact-form-7/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "contact-form-7:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpcf7",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:rocklobster:contact_form_7:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "cookie-information-plugin",
		name: "Cookie Information plugin",
		website: "https://wordpress.org/plugins/wp-gdpr-compliance",
		description: "Cookie Information plugin helps your website stay compliant with GDPR using a free cookie pop-up, consent log, and more.",
		icon: "Cookie Information.svg",
		categories: [
			"wordpress-ecosystem",
			"privacy-compliance",
		],
		rules: [
			{
				id: "cookie-information-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-gdpr-compliance\\/"),
				description: "Script source URL matches a known technology marker.",
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
			"cookie-information",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "core-framework",
		name: "Core Framework",
		website: "https://coreframework.com",
		description: "Core Framework is a visual CSS framework for WordPress and other platforms.",
		icon: "CoreFramework.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "core-framework:dom:0",
				kind: "dom",
				selector: "link#core-framework-frontend-css, style#core-framework-inline-inline-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"onetime",
			],
		},
	},
	{
		id: "creativ-email",
		name: "Creativ.eMail",
		website: "https://www.creativemail.com",
		description: "Creativ.eMail is an email editor WordPress plugin which simplifies email marketing campaign creation and pulls your WordPress blog posts, website images and WooCommerce products right into your email content.",
		icon: "Creativ.eMail.svg",
		categories: [
			"wordpress-ecosystem",
			"email-messaging",
		],
		rules: [
			{
				id: "creativ-email:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/creative-mail-by-constant-contact\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "crocoblock-jetelements",
		name: "Crocoblock JetElements",
		website: "https://crocoblock.com/plugins/jetelements",
		description: "Crocoblock JetElements is an addon for Elementor that adds additional customisation options to the page builder.",
		icon: "Crocoblock.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "crocoblock-jetelements:jsGlobal:0",
				kind: "jsGlobal",
				property: "jetElements",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		requires: [
			"elementor",
		],
	},
	{
		id: "cryout-creations-bravada",
		name: "Cryout Creations Bravada",
		website: "https://www.cryoutcreations.eu/wordpress-themes/bravada",
		description: "Bravada is an unparalleled fullscreen WordPress theme created by Cryout Creations.",
		icon: "Cryout Creations.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cryout-creations-bravada:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/bravada(?:-plus)?\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cryout-creations-bravada:dom:1",
				kind: "dom",
				selector: "link#bravada-style-css, img[src*='/wp-content/themes/bravada/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "cryout-creations-fluida",
		name: "Cryout Creations Fluida",
		website: "https://www.cryoutcreations.eu/wordpress-themes/fluida",
		description: "Fluida is a modern, crystal clear and squeaky clean WordPress theme by Cryout Creations.",
		icon: "Cryout Creations.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cryout-creations-fluida:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/fluida(?:-plus)?\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cryout-creations-fluida:dom:1",
				kind: "dom",
				selector: "link#fluida-themefonts-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "cryout-creations-mantra",
		name: "Cryout Creations Mantra",
		website: "https://www.cryoutcreations.eu/wordpress-themes/mantra",
		description: "Mantra is a do-it-yourself WordPress theme, featuring a pack of over 100 customization option created by Cryout Creations.",
		icon: "Cryout Creations.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cryout-creations-mantra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/mantra(?:-plus)?\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cryout-creations-mantra:dom:1",
				kind: "dom",
				selector: "link#mantra-style-css, img[src*='/wp-content/themes/mantra/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cryout-creations-mantra:jsGlobal:2",
				kind: "jsGlobal",
				property: "mantra_mobilemenu_init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cryout-creations-mantra:jsGlobal:3",
				kind: "jsGlobal",
				property: "mantra_onload",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cryout-creations-mantra:jsGlobal:4",
				kind: "jsGlobal",
				property: "mantra_options",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "cryout-creations-parabola",
		name: "Cryout Creations Parabola",
		website: "https://www.cryoutcreations.eu/wordpress-themes/parabola",
		description: "Parabola is an fully responsive, clean and elegant design WordPress theme created by Cryout Creations.",
		icon: "Cryout Creations.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cryout-creations-parabola:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/parabola\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cryout-creations-parabola:dom:1",
				kind: "dom",
				selector: "link#parabola-style-css, img[src*='/wp-content/themes/parabola/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cryout-creations-parabola:jsGlobal:2",
				kind: "jsGlobal",
				property: "parabola_mobilemenu_init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cryout-creations-parabola:jsGlobal:3",
				kind: "jsGlobal",
				property: "parabola_settings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "cssigniter-olsen-light",
		name: "CSSIgniter Olsen Light",
		website: "https://www.cssigniter.com/themes/olsen-light",
		description: "CSSIgniter Olsen Light is a clean, minimal, stylish and elegant WordPress blog theme, perfect for lifestyle, food, cooking, fashion, travel, wedding, health & fitness, photography and beauty blogging.",
		icon: "CSSIgniter.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cssigniter-olsen-light:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/olsen-light\\/.+scripts(?:\\.min)?\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "custom-fonts",
		name: "Custom Fonts",
		website: "https://github.com/brainstormforce/custom-fonts",
		description: "Custom Fonts plugin helps you easily embed custom fonts files (woff2, woff, ttf, svg, eot, otf) easily in your WordPress website.",
		icon: "Custom Fonts.png",
		categories: [
			"wordpress-ecosystem",
			"styling-library",
		],
		rules: [
			{
				id: "custom-fonts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/custom-fonts\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "cwicly",
		name: "Cwicly",
		website: "https://cwicly.com",
		description: "Cwicly is an advanced professional design and block toolkit that integrates directly with the WordPress editor.",
		icon: "Cwicly.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cwicly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/cwicly\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cwicly:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/cwicly/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"gutenberg",
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "cyberchimps-responsive",
		name: "CyberChimps Responsive",
		website: "https://cyberchimps.com/responsive",
		description: "CyberChimps Responsive is a modern, lightweight, fully customizable, fast and responsive WordPress theme.",
		icon: "CyberChimps.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cyberchimps-responsive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/responsive(?:pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cyberchimps-responsive:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/responsive/'], link[href*='/wp-content/themes/responsivepro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "distributor",
		name: "Distributor",
		website: "https://distributorplugin.com",
		description: "Distributor is a WordPress plugin that helps distribute and reuse content across your websites.",
		icon: "distributor.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "distributor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/distributor"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "distributor:header:1",
				kind: "header",
				key: "x-distributor",
				valuePattern: new RegExp("yes", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "dominate-woocommerce",
		name: "Dominate WooCommerce",
		website: "https://www.dominate.co/woocommerce",
		description: "Dominate WooCommerce is a cloud-based checkout-page which supports PayPal Smart buttons for Venmo, PayPal Credit, and other payment methods.",
		icon: "Dominate.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "dominate-woocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/iwd-checkout-connector\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
			],
		},
		requires: [
			"woocommerce",
			"wordpress",
		],
	},
	{
		id: "doppler-for-woocommerce",
		name: "Doppler for WooCommerce",
		website: "https://wordpress.org/plugins/doppler-for-woocommerce/",
		description: "The Doppler for WooCommerce plugin adds submit your WooCommerce customers and buyers to a Doppler List.",
		icon: "Doppler.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "doppler-for-woocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/doppler-for-woocommerce\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"doppler",
		],
		requires: [
			"woocommerce",
			"wordpress",
		],
	},
	{
		id: "doppler-forms",
		name: "Doppler Forms",
		website: "https://wordpress.org/plugins/doppler-form/",
		description: "The Doppler Forms plugin allows you to create fully customised subscription forms that you can add to your website or blog.",
		icon: "Doppler.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "doppler-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/doppler-form\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"doppler",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "download-monitor",
		name: "Download Monitor",
		website: "https://www.download-monitor.com",
		description: "Download Monitor is a plugin for selling, uploading and managing downloads, tracking downloads and displaying links.",
		icon: "Download Monitor.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "download-monitor:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/download-monitor/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "download-monitor:jsGlobal:1",
				kind: "jsGlobal",
				property: "DLM_XHR_Download",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "download-monitor:jsGlobal:2",
				kind: "jsGlobal",
				property: "dlmXHR.prevent_duplicates",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "download-monitor:meta:3",
				kind: "meta",
				key: "dlm-version",
				valuePattern: new RegExp("^([\\d\\.]+)$", "i"),
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
				"onetime",
			],
			cpe: "cpe:2.3:a:wpchill:download_monitor:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "draftpress-hfcm",
		name: "Draftpress HFCM",
		website: "https://draftpress.com/products/header-footer-code-manager-pro/",
		description: "Header Footer Code Manager by Draftpress is an easy interface to add snippets to the header or footer or above or below the content of your page.",
		icon: "Draftpress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "draftpress-hfcm:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]*HFCM\\sby\\s99\\sRobots"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "draftpress-hfcm:html:1",
				kind: "html",
				pattern: new RegExp("<!--[^>]*hfcm\\sby\\s99\\srobots"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
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
		id: "easy-accordion",
		name: "Easy Accordion",
		website: "https://easyaccordion.io",
		description: "Easy Accordion is a flexible and customisable accordion and FAQs builder plugin for WordPress.",
		icon: "EasyAccordion.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "easy-accordion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/easy-accordion-free\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easy-accordion:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/easy-accordion-free/']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "elasticpress",
		name: "ElasticPress",
		website: "https://www.elasticpress.io/",
		description: "ElasticPress is a hosting service that connects your WordPress site to search hosting.",
		icon: "elasticpress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
			cpe: "cpe:2.3:a:10up:elasticpress:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"elasticsearch",
		],
	},
	{
		id: "elementor-header-and-footer-builder",
		name: "Elementor Header & Footer Builder",
		website: "https://github.com/brainstormforce/header-footer-elementor",
		description: "Elementor Header & Footer Builder is a simple yet powerful WordPress plugin that allows you to create a layout with Elementor and set it as.",
		icon: "Elementor Header & Footer Builder.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "elementor-header-and-footer-builder:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/header-footer-elementor/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		implies: [
			"elementor",
		],
		requires: [
			"elementor",
			"wordpress",
		],
	},
	{
		id: "elementskit",
		name: "ElementsKit",
		website: "https://wpmet.com/plugin/elementskit",
		description: "ElementsKit is an addon for Elementor that adds additional customisation options to the page builder.",
		icon: "elementskit.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "elementskit:jsGlobal:0",
				kind: "jsGlobal",
				property: "ElementsKit_Helper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "elementskit:jsGlobal:1",
				kind: "jsGlobal",
				property: "elementskit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"elementor",
		],
	},
	{
		id: "embed-optimizer",
		name: "Embed Optimizer",
		website: "https://wordpress.org/plugins/embed-optimizer/",
		description: "Performance plugin from the WordPress Performance Team, which optimizes embeds by lazy loading them only as they come into view.",
		icon: "embed-optimizer.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "embed-optimizer:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^embed-optimizer ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "embedplus",
		name: "EmbedPlus",
		website: "https://www.embedplus.com",
		description: "EmbedPlus is a WordPress plugin for YouTube allows you to embed gallery, channel, playlist, or even live stream on your webpage.",
		icon: "EmbedPlus.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "embedplus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/youtube-embed-plus(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "endurance-page-cache",
		name: "Endurance Page Cache",
		website: "https://github.com/bluehost/endurance-page-cache",
		description: "Endurance Page Cache adds basic file-based caching to WordPress.",
		icon: "endurance-cache.png",
		categories: [
			"wordpress-ecosystem",
			"server-runtime-infra",
		],
		rules: [],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "enhanced-responsive-images",
		name: "Enhanced Responsive Images",
		website: "https://wordpress.org/plugins/auto-sizes/",
		description: "Performance plugin from the WordPress Performance Team, which improves image sizes attribute accuracy and implements the HTML spec for adding sizes='auto' to lazy loaded images.",
		icon: "enhanced-image-sizes.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "enhanced-responsive-images:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^auto-sizes ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "enigma",
		name: "Enigma",
		website: "https://wordpress.org/themes/enigma",
		description: "Enigma is the popular superfine multipurpose responsive WordPress theme from Infigo Software.",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "enigma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/enigma\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "envo-ecommerce",
		name: "Envo eCommerce",
		website: "https://envothemes.com/free-envo-ecommerce/",
		description: "Envo eCommerce is a fast, clean and modern-looking responsive free WooCommerce theme for WordPress.",
		icon: "Envo Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "envo-ecommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/envo-ecommerce\\/.+customscript\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "envo-shop",
		name: "Envo Shop",
		website: "https://envothemes.com/free-envo-shop",
		description: "Envo Shop is a fast, clean and modern-looking responsive free WooCommerce WordPress theme by Envo Themes.",
		icon: "Envo Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "envo-shop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/envo-shop\\/.+customscript\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "envo-storefront",
		name: "Envo Storefront",
		website: "https://envothemes.com/free-envo-storefront",
		description: "Envo Storefront is a fast, clean and modern-looking responsive WooCommerce theme for WordPress.",
		icon: "Envo Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "envo-storefront:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/envo-storefront\\/.+customscript\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "essential-addons-for-elementor",
		name: "Essential Addons for Elementor",
		website: "https://essential-addons.com/elementor/",
		description: "Essential Addons for Elementor gives you 70+ creative elements and extensions to help you extend the stock features of Elementor page builder.",
		icon: "Essential Addons for Elementor.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "essential-addons-for-elementor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/uploads\\/essential-addons-elementor\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "essential-addons-for-elementor:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/essential-addons-elementor/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:wpdeveloper:essential_addons_for_elementor:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "essential-blocks",
		name: "Essential Blocks",
		website: "https://essential-blocks.com",
		description: "Essential Blocks is a Gutenberg Blocks page builder plugin that adds extra functionality to the WordPress Block Editor.",
		icon: "essential-blocks.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "essential-blocks:html:0",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=[\"']wp-block-essential-blocks-*"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "essential-blocks:dom:1",
				kind: "dom",
				selector: "link#essential-blocks-frontend-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "essential-blocks:dom:2",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/eb-style/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "etch",
		name: "Etch",
		website: "https://etchwp.com",
		description: "Etch is a developer-focused visual development environment for WordPress that combines WYSIWYG editing with IDE-level control and full block editor compatibility.",
		icon: "Etch.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "etch:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/etch/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "ewww-image-optimizer",
		name: "EWWW Image Optimizer",
		website: "https://github.com/nosilver4u/ewww-image-optimizer",
		description: "EWWW Image Optimizer is an image optimisation WordPress plugin designed to improve the performance of your website.",
		icon: "EWWW Image Optimizer.png",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "ewww-image-optimizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ewww-image-optimizer\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ewww-image-optimizer:jsGlobal:1",
				kind: "jsGlobal",
				property: "ewww_webp_supported",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "exactmetrics",
		name: "ExactMetrics",
		website: "https://www.exactmetrics.com",
		description: "ExactMetrics (formerly Google Analytics Dashboard for WP) plugin helps you properly setup all the powerful Google Analytics tracking features without writing any code or hiring a developer.",
		icon: "ExactMetrics.svg",
		categories: [
			"wordpress-ecosystem",
			"analytics",
		],
		rules: [
			{
				id: "exactmetrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/google-analytics-dashboard-for-wp\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "exactmetrics:jsGlobal:1",
				kind: "jsGlobal",
				property: "ExactMetrics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "exactmetrics:jsGlobal:2",
				kind: "jsGlobal",
				property: "exactmetrics_frontend",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:monsterinsights:exactmetrics:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "extendify",
		name: "Extendify",
		website: "https://extendify.com",
		description: "Extendify (formerly Redux framework) is one of the most popular, advanced, and free to use option panel frameworks for WordPress themes and plugins.",
		icon: "Extendify.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendify:meta:0",
				kind: "meta",
				key: "framework",
				valuePattern: new RegExp("^Redux ([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "extendify:dom:1",
				kind: "dom",
				selector: "link[href*='/plugins/extendify/'], #extendify-utility-styles-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
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
		id: "extendthemes-calliope",
		name: "ExtendThemes Calliope",
		website: "https://wordpress.org/themes/calliope",
		description: "ExtendThemes Calliope is an flexible, multipurpose WordPress child theme of Colibri WP.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendthemes-calliope:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/calliope\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extendthemes-calliope:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/calliope/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "extendthemes-empowerwp",
		name: "ExtendThemes EmpowerWP",
		website: "https://extendthemes.com/empowerwp",
		description: "ExtendThemes EmpowerWP is an flexible, multipurpose WordPress theme.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendthemes-empowerwp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/empowerwp(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extendthemes-empowerwp:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/empowerwp']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
		excludes: [
			"extendthemes-mesmerize",
		],
	},
	{
		id: "extendthemes-highlight",
		name: "ExtendThemes Highlight",
		website: "https://extendthemes.com/highlight",
		description: "ExtendThemes Highlight is an flexible, multipurpose WordPress theme.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendthemes-highlight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/highlight(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extendthemes-highlight:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/highlight/'], link[href*='/wp-content/themes/highlight-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
		excludes: [
			"extendthemes-mesmerize",
		],
	},
	{
		id: "extendthemes-materialis",
		name: "ExtendThemes Materialis",
		website: "https://extendthemes.com/materialis",
		description: "ExtendThemes Materialis is an flexible, multipurpose WordPress theme.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendthemes-materialis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/materialis(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extendthemes-materialis:dom:1",
				kind: "dom",
				selector: "link#materialis-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "extendthemes-materialis:jsGlobal:2",
				kind: "jsGlobal",
				property: "MaterialisTheme",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "extendthemes-materialis:jsGlobal:3",
				kind: "jsGlobal",
				property: "materialisSetHeaderTopSpacing",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "extendthemes-materialis:jsGlobal:4",
				kind: "jsGlobal",
				property: "materialis_theme_pro_settings",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "extendthemes-mesmerize",
		name: "ExtendThemes Mesmerize",
		website: "https://extendthemes.com/mesmerize",
		description: "ExtendThemes Mesmerize is an flexible, multipurpose WordPress theme.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "extendthemes-mesmerize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/mesmerize(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "extendthemes-mesmerize:dom:1",
				kind: "dom",
				selector: "link#mesmerize-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "extendthemes-mesmerize:jsGlobal:2",
				kind: "jsGlobal",
				property: "MesmerizeKube",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "extendthemes-mesmerize:jsGlobal:3",
				kind: "jsGlobal",
				property: "mesmerizeDomReady",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "extendthemes-mesmerize:jsGlobal:4",
				kind: "jsGlobal",
				property: "mesmerizeFooterParalax",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "extendthemes-mesmerize:jsGlobal:5",
				kind: "jsGlobal",
				property: "mesmerizeMenuSticky",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "falgunithemes-nisarg",
		name: "FalguniThemes Nisarg",
		website: "https://www.falgunithemes.com/downloads/nisarg",
		description: "FalguniThemes Nisarg is a new fully responsive and translation ready WordPress theme.",
		icon: "FalguniThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "falgunithemes-nisarg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/nisarg(?:pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "falgunithemes-nisarg:jsGlobal:1",
				kind: "jsGlobal",
				property: "nisargpro_script_vars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "famethemes-onepress",
		name: "FameThemes OnePress",
		website: "https://www.famethemes.com/themes/onepress",
		description: "FameThemes OnePress is a free portfolio one page WordPress theme suited for an individual or digital agency.",
		icon: "FameThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "famethemes-onepress:jsGlobal:0",
				kind: "jsGlobal",
				property: "OnePress_Plus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "famethemes-onepress:jsGlobal:1",
				kind: "jsGlobal",
				property: "onepressIsMobile",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "famethemes-onepress:jsGlobal:2",
				kind: "jsGlobal",
				property: "onepress_js_settings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "famethemes-screenr",
		name: "FameThemes Screenr",
		website: "https://www.famethemes.com/themes/screenr",
		description: "FameThemes Screenr is a fullscreen parallax WordPress theme suited for business, portfolio, digital agency, freelancers.",
		icon: "FameThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "famethemes-screenr:jsGlobal:0",
				kind: "jsGlobal",
				property: "Screenr.autoplay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "famethemes-screenr:jsGlobal:1",
				kind: "jsGlobal",
				property: "Screenr_Plus",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "fluent-forms",
		name: "Fluent Forms",
		website: "https://fluentforms.com",
		description: "Fluent Forms is a drag-and-drop form builder plugin for WordPress.",
		icon: "Fluent Forms.svg",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "fluent-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/fluentform\\/assets\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fluent-forms:dom:1",
				kind: "dom",
				selector: "form.frm-fluent-form",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fluent-forms:dom:2",
				kind: "dom",
				selector: "input[name='__fluent_form_embded_post_id']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fluent-forms:jsGlobal:3",
				kind: "jsGlobal",
				property: "fluentFormVars",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "flying-analytics",
		name: "Flying Analytics",
		website: "https://wordpress.org/plugins/flying-analytics/",
		description: "Flying Analytics is a performance optimisation plugin for WordPress websites designed to reduce page load times and improve the user experience.",
		icon: "default.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "flying-analytics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/flying-analytics\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flying-analytics:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/flying-analytics/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "flying-images",
		name: "Flying Images",
		website: "https://wordpress.org/plugins/nazy-load/",
		description: "Flying Images is a performance optimisation plugin for WordPress websites designed to reduce page load times and improve the user experience.",
		icon: "default.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "flying-images:jsGlobal:0",
				kind: "jsGlobal",
				property: "flyingImages",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "flying-pages",
		name: "Flying Pages",
		website: "https://wordpress.org/plugins/flying-pages/",
		description: "Flying Pages is a performance optimisation plugin for WordPress websites designed to reduce page load times and improve the user experience.",
		icon: "Flying Pages.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "flying-pages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/flying-pages\\/.+\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flying-pages:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/flying-pages/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "flying-pages:jsGlobal:2",
				kind: "jsGlobal",
				property: "flyingPages",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "flyingpress",
		name: "FlyingPress",
		website: "https://flying-press.com",
		description: "FlyingPress is a WordPress plugin that helps to improve website performance by optimising various aspects of a WordPress site. The plugin offers a range of features, including caching, image optimisation, lazy loading, database optimisation, and more.",
		icon: "FlyingPress.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "flyingpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/flying-press\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flyingpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/flying-press/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "fooplugins-foogallery",
		name: "FooPlugins FooGallery",
		website: "https://fooplugins.com/foogallery-wordpress-gallery-plugin",
		description: "FooPlugins FooGallery is a great image gallery plugin for WordPress.",
		icon: "FooPlugins.svg",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "fooplugins-foogallery:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/foogallery/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fooplugins-foogallery:jsGlobal:1",
				kind: "jsGlobal",
				property: "FooGallery",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "formidable-form",
		name: "Formidable Form",
		website: "https://formidableforms.com",
		description: "Formidable Forms is a WordPress plugin that enables you to create quizzes, surveys, calculators, timesheets, multi-page application forms.",
		icon: "Formidable Form.png",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "formidable-form:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/formidable/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "frames",
		name: "Frames",
		website: "https://getframes.io",
		description: "Frames is a tool that allows you to create wireframes in real time, design and develop systems, and access a library of components to help you build custom websites quickly and easily, without any restrictions on your creative input.",
		icon: "Frames.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "frames:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/frames-plugin/']",
				description: "DOM selector matches a known technology marker.",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "funnelforms",
		name: "Funnelforms",
		website: "https://en.funnelforms.io",
		description: "Funnelforms is a WordPress plugin for creating intelligent multi-step forms, integrating AI to streamline business processes, enhance customer acquisition, and optimise staff recruitment.",
		icon: "Funnelforms.svg",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "funnelforms:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/Funnelforms']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "futurio",
		name: "Futurio",
		website: "https://futuriowp.com",
		description: "Futurio is a lightweight and customizable multi-purpose and WooCommerce WordPress theme.",
		icon: "Futurio.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "futurio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/futurio\\/.+customscript\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "futurio:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/futurio/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "generateblocks",
		name: "GenerateBlocks",
		website: "https://generateblocks.com",
		description: "GenerateBlocks is a small collection of lightweight WordPress blocks for the WordPress Block Editor.",
		icon: "GenerateBlocks.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "generateblocks:dom:0",
				kind: "dom",
				selector: "link#generateblocks-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "generateblocks:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* id=[^>]+generateblocks-css"),
				description: "HTML contains a known technology signature.",
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
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "generatepress",
		name: "GeneratePress",
		website: "https://generatepress.com",
		description: "GeneratePress is a lightweight WordPress theme that focuses on speed, stability, and accessibility.",
		icon: "generatepress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "generatepress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/generatepress\\S*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "generatepress:dom:1",
				kind: "dom",
				selector: "body[class*='generatepress-theme']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "generatepress:dom:2",
				kind: "dom",
				selector: "link[id*='generate-style']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "generatepress:dom:3",
				kind: "dom",
				selector: "link[id*='generatepress']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "generatepress:jsGlobal:4",
				kind: "jsGlobal",
				property: "generatepressMenu",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "generatepress:jsGlobal:5",
				kind: "jsGlobal",
				property: "generatepressNavSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "generatepress:scriptSrc:6",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/generatepress\\s*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:generatepress:generatepress:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "generatepress-gp-premium",
		name: "GeneratePress GP Premium",
		website: "https://docs.generatepress.com/article/installing-gp-premium/",
		description: "GP Premium is a premium add-on plugin for the GeneratePress WordPress theme.",
		icon: "generatepress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "generatepress-gp-premium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/gp-premium\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
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
				"onetime",
				"recurring",
			],
		},
		implies: [
			"generatepress",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "genesis-blocks",
		name: "Genesis blocks",
		website: "https://www.studiopress.com/genesis-blocks/",
		description: "Premium block library & block editor enhancements from StudioPress.",
		icon: "genesis-blocks.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "genesis-blocks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/genesis-blocks\\/lib\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genesis-blocks:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=[\"']wp-block-atomic-blocks-*"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "genesis-blocks:dom:2",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/atomic-blocks']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "genesis-blocks:dom:3",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/genesis-blocks']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "genesis-theme",
		name: "Genesis theme",
		website: "https://www.studiopress.com/themes/genesis",
		description: "Genesis theme is a WordPress theme that has been developed using the Genesis Framework from Studiopress.",
		icon: "Genesis theme.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "genesis-theme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/genesis\\/lib\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "genesis-theme:jsGlobal:1",
				kind: "jsGlobal",
				property: "genesisBlocksShare",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "genesis-theme:jsGlobal:2",
				kind: "jsGlobal",
				property: "genesis_responsive_menu",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "genesis-theme:dom:3",
				kind: "dom",
				selector: "body[class*='theme-genesis']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "genesis-theme:dom:4",
				kind: "dom",
				selector: "body[class*='genesis-breadcrumbs-hidden']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "genesis-theme:dom:5",
				kind: "dom",
				selector: "body[class*='genesis-title-hidden']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "godaddy-coblocks",
		name: "GoDaddy CoBlocks",
		website: "https://github.com/godaddy-wordpress/coblocks",
		description: "GoDaddy CoBlocks is a suite of professional page building content blocks for the WordPress Gutenberg block editor.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "godaddy-coblocks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/coblocks\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "godaddy-coblocks:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/coblocks/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "godaddy-escapade",
		name: "GoDaddy Escapade",
		website: "https://github.com/godaddy-wordpress/primer-child-escapade",
		description: "GoDaddy Escapade is a GoDaddy Primer child theme with a unique sidebar navigation.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "godaddy-escapade:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/escapade/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
		excludes: [
			"godaddy-primer",
		],
	},
	{
		id: "godaddy-go",
		name: "GoDaddy Go",
		website: "https://github.com/godaddy-wordpress/go",
		description: "GoDaddy Go is a flexible Gutenberg-first WordPress theme built for go-getters everywhere.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "godaddy-go:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/go\\/.+frontend\\.min\\.js(?:.+ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "godaddy-go:dom:1",
				kind: "dom",
				selector: "link#go-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "godaddy-go:jsGlobal:2",
				kind: "jsGlobal",
				property: "goFrontend.openMenuOnHover",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "godaddy-lyrical",
		name: "GoDaddy Lyrical",
		website: "https://github.com/godaddy-wordpress/primer-child-lyrical",
		description: "GoDaddy Lyrical is a GoDaddy Primer child theme with a focus on photography and beautiful fonts.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "godaddy-lyrical:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/lyrical/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
		excludes: [
			"godaddy-primer",
		],
	},
	{
		id: "godaddy-primer",
		name: "GoDaddy Primer",
		website: "https://github.com/godaddy-wordpress/primer",
		description: "GoDaddy Primer is a powerful theme that brings clarity to your content in a fresh design. This is the parent for all themes in the GoDaddy Primer theme family.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "godaddy-primer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/primer\\/.+navigation\\.min\\.js(?:.+ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "godaddy-primer:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/primer/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "godaddy-uptown-style",
		name: "GoDaddy Uptown Style",
		website: "https://github.com/godaddy-wordpress/primer-child-uptownstyle",
		description: "GoDaddy Uptown Style is a GoDaddy Primer child theme with elegance and class.",
		icon: "GoDaddy.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "godaddy-uptown-style:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/uptown-style/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
		excludes: [
			"godaddy-primer",
		],
	},
	{
		id: "google-tag-manager-for-wordpress",
		name: "Google Tag Manager for WordPress",
		website: "https://gtm4wp.com",
		description: "Google Tag Manager for WordPress plugin places the GTM container code snippets onto your wordpress website so that you do not need to add this manually.",
		icon: "Google Tag Manager for WordPress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "google-tag-manager-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/duracelltomi-google-tag-manager\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "google-tag-manager-for-wordpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/duracelltomi-google-tag-manager/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"google-tag-manager",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "gpt-ai-power",
		name: "GPT AI Power",
		website: "https://gptaipower.com",
		description: "GPT AI Power is a WordPress plugin that offers a comprehensive AI package.",
		icon: "GPT AI Power.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "gpt-ai-power:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/gpt3-ai-content-generator\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:gptaipower:gpt_ai_power:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "graphene",
		name: "Graphene",
		website: "https://www.graphene-theme.com/graphene-theme",
		description: "Graphene is a WordPress theme created by Graphene Themes.",
		icon: "Graphene Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "graphene:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/graphene(?:-plus)?\\/.+graphene\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "graphene:jsGlobal:1",
				kind: "jsGlobal",
				property: "grapheneGetInfScrollBtnLbl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "graphene:jsGlobal:2",
				kind: "jsGlobal",
				property: "grapheneJS.templateUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "gravity-forms",
		name: "Gravity Forms",
		website: "https://gravityforms.com",
		icon: "gravityforms.svg",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "gravity-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/gravityforms\\/js\\/[^/]+\\.js\\?ver=([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gravity-forms:html:1",
				kind: "html",
				pattern: new RegExp("<div class=(?:\"|')[^>]*gform_wrapper"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gravity-forms:html:2",
				kind: "html",
				pattern: new RegExp("<div class=(?:\"|')[^>]*gform_body"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gravity-forms:html:3",
				kind: "html",
				pattern: new RegExp("<ul [^>]*class=(?:\"|')[^>]*gform_fields"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gravity-forms:html:4",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=(?:\"|')[^>]*wp-content\\/plugins\\/gravityforms\\/css\\/"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:gravityforms:gravity_forms:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "greyd-suite",
		name: "Greyd.Suite",
		website: "https://greyd.io/",
		description: "Greyd.Suite is an all-in-one platform designed to streamline WordPress business operations, integrating site management, design, and marketing tools into a unified system.",
		icon: "GreydSuite.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "greyd-suite:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.greyd\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "greyd-suite:jsGlobal:1",
				kind: "jsGlobal",
				property: "greyd.animations",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "greyd-suite:jsGlobal:2",
				kind: "jsGlobal",
				property: "greydFormSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:greyd:greyd.suite:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "gtranslate",
		name: "GTranslate",
		website: "https://gtranslate.io",
		description: "GTranslate is a website translator which can translate any website to any language automatically.",
		icon: "GTranslate.svg",
		categories: [
			"wordpress-ecosystem",
			"translations",
		],
		rules: [
			{
				id: "gtranslate:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/gtranslate/'], img[src*='/wp-content/plugins/gtranslate/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:gtranslate:gtranslate:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "gutenberg",
		name: "Gutenberg",
		website: "https://github.com/WordPress/gutenberg",
		description: "Gutenberg is the development plugin in which new features for the WordPress Block Editor are tested.",
		icon: "Gutenberg.png",
		categories: [
			"wordpress-ecosystem",
			"rich-text-editors",
		],
		rules: [
			{
				id: "gutenberg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/gutenberg\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gutenberg:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/gutenberg/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:wordpress:gutenberg:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "hashthemes-total",
		name: "HashThemes Total",
		website: "https://hashthemes.com/wordpress-theme/total",
		description: "HashThemes Total is the powerful and creative multipurpose WordPress theme.",
		icon: "HashThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hashthemes-total:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/(?:t|T)otal(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hashthemes-total:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/(?:t|t)otal(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "hello-elementor",
		name: "Hello Elementor",
		website: "https://elementor.com/hello-theme/",
		description: "Hello Elementor is a WordPress theme built for the Elementor website builder platform. It uses minimal styling and scripts for maximum speed and design freedom.",
		icon: "Hello Elementor.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hello-elementor:dom:0",
				kind: "dom",
				selector: "link[id*='elementor-hello']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hello-elementor:dom:1",
				kind: "dom",
				selector: "link[id*='hello-elementor']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hello-elementor:dom:2",
				kind: "dom",
				selector: "script[id*='hello-elementor']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
			],
		},
		implies: [
			"elementor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "hestia",
		name: "Hestia",
		website: "https://themeisle.com/themes/hestia/",
		description: "Hestia is a modern WordPress theme for professionals a multipurpose one-page design, widgetized footer, blog/news page, and a clean look.",
		icon: "ThemeIsle.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hestia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/hestia.*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hestia:dom:1",
				kind: "dom",
				selector: "body[class*='hestia-theme']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hestia:dom:2",
				kind: "dom",
				selector: "link[id*='hestia']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "hollerbox",
		name: "HollerBox",
		website: "https://hollerwp.com",
		description: "HollerBox is a lead generation popup tool for WordPress.",
		icon: "HollerBox.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hollerbox:jsGlobal:0",
				kind: "jsGlobal",
				property: "HollerBox.active",
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
		id: "hubspot-wordpress-plugin",
		name: "HubSpot WordPress plugin",
		website: "https://wordpress.org/plugins/leadin/",
		description: "HubSpot is a platform with all the tools and integrations you need for marketing, sales, and customer service. HubSpot WordPress plugin allows you to manage contacts (CRM), engage visitors with live chat and chatbots, add beautiful forms to pages, create engaging email marketing campaigns, and more.",
		icon: "HubSpot.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hubspot-wordpress-plugin:jsGlobal:0",
				kind: "jsGlobal",
				property: "leadin_wordpress.leadinPluginVersion",
				valuePattern: new RegExp("^([\\d.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"hubspot",
			"hubspot-analytics",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "image-placeholders",
		name: "Image Placeholders",
		website: "https://wordpress.org/plugins/dominant-color-images/",
		description: "Performance plugin from the WordPress Performance Team, which determines and stores the dominant color for newly uploaded images in the media library, then uses that as a placeholder background during front end image loads.",
		icon: "dominant-color-images.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "image-placeholders:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^dominant-color-images ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "image-prioritizer",
		name: "Image Prioritizer",
		website: "https://wordpress.org/plugins/image-prioritizer/",
		description: "Performance plugin from the WordPress Performance Team, which optimizes the loading of images which are the LCP (Largest Contentful Paint) element, including both img elements and elements with CSS background images.",
		icon: "image-prioritizer.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "image-prioritizer:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^image-prioritizer ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "imagely-nextgen-gallery",
		name: "Imagely NextGEN Gallery",
		website: "https://www.imagely.com/wordpress-gallery-plugin",
		description: "NextGEN Gallery is a WordPress gallery plugin maintained by Imagely.",
		icon: "Imagely.png",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "imagely-nextgen-gallery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/nextgen-gallery(?:-pro|-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "imagely-nextgen-gallery:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/nextgen-gallery/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "ithemes-security",
		name: "iThemes Security",
		website: "https://ithemes.com/security",
		description: "iThemes Security(formerly known as Better WP Security) plugin enhances the security and protection of your WordPress website.",
		icon: "iThemes Security.svg",
		categories: [
			"wordpress-ecosystem",
			"security",
		],
		rules: [
			{
				id: "ithemes-security:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/better-wp-security\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ithemes-security:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/better-wp-security/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:ithemes:ithemes_security:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "ivory-search",
		name: "Ivory Search",
		website: "https://ivorysearch.com",
		description: "Ivory Search is a WordPress search plugin that improves WordPress search by providing advanced options to extend search or exclude specific content from search.",
		icon: "ivory_searc.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ivory-search:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/add-search-to-menu\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ivory-search:jsGlobal:1",
				kind: "jsGlobal",
				property: "IvorySearchVars",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ivory-search:jsGlobal:2",
				kind: "jsGlobal",
				property: "ivory_search_analytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:ivorysearch:ivory_search:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "jetengine",
		name: "JetEngine",
		website: "https://crocoblock.com/plugins/jetengine",
		description: "JetEngine is a content plugin for WordPress that allows users to create custom post types, taxonomies, and meta boxes, offering flexibility in building complex websites without requiring coding skills.",
		icon: "JetEngine.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "jetengine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/jet-engine\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:crocoblock:jetengine:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "jetpack",
		name: "Jetpack",
		website: "https://jetpack.com",
		description: "Jetpack is a popular WordPress plugin created by Automattic, the people behind WordPress.com.",
		icon: "Jetpack.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "jetpack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/jetpack\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jetpack:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/jetpack/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:automattic:jetpack:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "jetpack-boost",
		name: "Jetpack Boost",
		website: "https://jetpack.com",
		description: "Jetpack Boost – Website Speed, Performance and Critical CSS.",
		icon: "Jetpack.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "jetpack-boost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/jetpack-boost\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jetpack-boost:dom:1",
				kind: "dom",
				selector: "style[id='jetpack-boost-critical-css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:automattic:jetpack_boost:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "jettabs",
		name: "JetTabs",
		website: "https://crocoblock.com/plugins/jettabs",
		description: "JetTabs is a plugin for Elementor that enables the creation of customizable tabs and accordion widgets for organizing content within web pages.",
		icon: "JetTabs.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "jettabs:jsGlobal:0",
				kind: "jsGlobal",
				property: "JetTabs.accordionInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jettabs:jsGlobal:1",
				kind: "jsGlobal",
				property: "JetTabsSettings",
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
			"elementor",
		],
	},
	{
		id: "jilt-plugin",
		name: "Jilt plugin",
		website: "https://wordpress.org/plugins/jilt-for-woocommerce",
		description: "Jilt plugin helps ecommerce store owners track and recover abandoned orders. Works seamlessly with Shopify and WooCommerce.",
		icon: "Jilt.svg",
		categories: [
			"wordpress-ecosystem",
			"commerce-operations",
		],
		rules: [
			{
				id: "jilt-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jilt\\.com\\/.+\\/jilt\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "kadence-wp-blocks",
		name: "Kadence WP Blocks",
		website: "https://www.kadencewp.com/kadence-blocks/",
		description: "Kadence Blocks is a plugin for WordPress that provides a collection of custom blocks for the WordPress Block Editor, allowing users to create custom layouts and designs for their website without needing to know how to code.",
		icon: "Kadence WP.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "kadence-wp-blocks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/kadence-blocks\\/dist\\/.+\\/kb-form-block\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kadence-wp-blocks:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/kadence-blocks/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kadence-wp-blocks:html:2",
				kind: "html",
				pattern: new RegExp("<style[^>]* id=[^>]+kadence-blocks-"),
				description: "HTML contains a known technology signature.",
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
			"gutenberg",
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "kadence-wp-kadence",
		name: "Kadence WP Kadence",
		website: "https://www.kadencewp.com/kadence-theme",
		description: "Kadence WP Kadence is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
		icon: "Kadence WP.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "kadence-wp-kadence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/kadence\\/.+navigation\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kadence-wp-kadence:dom:1",
				kind: "dom",
				selector: "link#kadence-global-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kadence-wp-kadence:jsGlobal:2",
				kind: "jsGlobal",
				property: "kadence",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kadence-wp-kadence:jsGlobal:3",
				kind: "jsGlobal",
				property: "kadenceConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"mid",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "kadence-wp-virtue",
		name: "Kadence WP Virtue",
		website: "https://www.kadencewp.com/product/virtue-free-theme",
		description: "Kadence WP Virtue is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
		icon: "Kadence WP.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "kadence-wp-virtue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/virtue\\/.+main-min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kadence-wp-virtue:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/virtue/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "kaira-vogue",
		name: "Kaira Vogue",
		website: "https://kairaweb.com/wordpress-theme/vogue",
		description: "Vogue is a very easy to use multipurpose WordPress theme created by Kaira.",
		icon: "Kaira.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "kaira-vogue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/vogue(?:-child)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kaira-vogue:dom:1",
				kind: "dom",
				selector: "link#vogue-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "kirki-customizer-framework",
		name: "Kirki Customizer Framework",
		website: "https://kirki.org",
		description: "Kirki Customizer Framework is a toolkit allowing WordPress developers to use the Customizer and take advantage of its advanced features and flexibility by abstracting the code.",
		icon: "Kirki Customizer Framework.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "kirki-customizer-framework:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/kirki\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kirki-customizer-framework:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/kirki/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"poa",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "landingpress",
		name: "LandingPress",
		website: "https://landingpress.net",
		description: "LandingPress is a WordPress theme.",
		icon: "LandingPress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "landingpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/landingpress-wp\\/.+script\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "leaky-paywall",
		name: "Leaky Paywall",
		website: "https://leakypaywall.com",
		description: "Leaky Paywall is a metered paywall system for WordPress websites that limits user access to content based on predefined viewing thresholds and subscription rules.",
		icon: "LeakyPaywall.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "leaky-paywall:jsGlobal:0",
				kind: "jsGlobal",
				property: "leaky_paywall_quick_register",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leaky-paywall:jsGlobal:1",
				kind: "jsGlobal",
				property: "leaky_paywall_recurring",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "lightning",
		name: "Lightning",
		website: "https://lightning.vektor-inc.co.jp/en/",
		description: "Lightning is a very simple and easy to customize WordPress theme which is based on the Bootstrap.",
		icon: "Lightning.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "lightning:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/lightning(?:-pro)?\\/.+lightning\\.min\\.js(?:.+ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lightning:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/lightning/'], link[href*='/wp-content/themes/lightning-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lightning:jsGlobal:2",
				kind: "jsGlobal",
				property: "lightningOpt.header_scrool",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "limit-login-attempts-reloaded",
		name: "Limit Login Attempts Reloaded",
		website: "https://www.limitloginattempts.com",
		description: "Limit Login Attempts Reloaded stops brute-force attacks and optimizes your site performance by limiting the number of login attempts that are possible through the normal login as well as XMLRPC, Woocommerce and custom login pages.",
		icon: "Limit Login Attempts Reloaded.png",
		categories: [
			"wordpress-ecosystem",
			"security",
		],
		rules: [
			{
				id: "limit-login-attempts-reloaded:dom:0",
				kind: "dom",
				selector: "link#llar-login-page-styles-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:limitloginattempts:limit_login_attempts_reloaded:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "livecanvas",
		name: "LiveCanvas",
		website: "https://livecanvas.com",
		description: "LiveCanvas is a Bootstrap 5 WordPress page builder.",
		icon: "LiveCanvas.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "livecanvas:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/livecanvas\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
		implies: [
			"bootstrap",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "ltheme",
		name: "LTheme",
		website: "https://ltheme.com",
		description: "LTheme is a provider of Joomla and WordPress themes.",
		icon: "LTheme.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ltheme:dom:0",
				kind: "dom",
				selector: "script[id*='ltheme-custom-js']",
				description: "DOM selector matches a known technology marker.",
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
		id: "lyrathemes-kale",
		name: "LyraThemes Kale",
		website: "https://www.lyrathemes.com/kale",
		description: "LyraThemes Kale is a charming and elegant, aesthetically minimal and uncluttered food blog WordPress theme.",
		icon: "LyraThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "lyrathemes-kale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/kale(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lyrathemes-kale:jsGlobal:1",
				kind: "jsGlobal",
				property: "kale_responsive_videos",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "machothemes-newsmag",
		name: "MachoThemes NewsMag",
		website: "https://www.machothemes.com/item/newsmag-lite",
		description: "MachoThemes Newsmag is a clean and modern magazine, news or blog WordPress theme.",
		icon: "MachoThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "machothemes-newsmag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/Newsmag(?:-child)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "machothemes-newsmag:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/Newsmag']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "machothemes-newsmag:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/newsmag(?:-child)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "mailchimp-for-woocommerce",
		name: "MailChimp for WooCommerce",
		website: "https://mailchimp.com/integrations/woocommerce",
		description: "MailChimp for WooCommerce gives you the ability to automatically sync customer purchase data to your MailChimp account.",
		icon: "mailchimp.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mailchimp-for-woocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mailchimp-for-woocommerce\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:mailchimp:mailchimp_for_woocommerce:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"mailchimp",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "mailchimp-for-wordpress",
		name: "MailChimp for WordPress",
		website: "https://www.mc4wp.com",
		description: "MailChimp for WordPress is an email marketing plugin that enables you to build subscriber lists.",
		icon: "MailChimp for WordPress.png",
		categories: [
			"wordpress-ecosystem",
			"marketing-automation",
		],
		rules: [
			{
				id: "mailchimp-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/mailchimp-for-wp\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailchimp-for-wordpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/mailchimp-for-wp/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mailchimp-for-wordpress:jsGlobal:2",
				kind: "jsGlobal",
				property: "mc4wp",
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
		implies: [
			"mailchimp",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "mailerlite-plugin",
		name: "MailerLite plugin",
		website: "https://ru.wordpress.org/plugins/official-mailerlite-sign-up-forms/",
		description: "The official MailerLite signup forms plugin makes it easy to grow your newsletter subscriber list from your WordPress blog or website. The plugin automatically integrates your WordPress form with your MailerLite email marketing account.",
		icon: "MailerLite.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mailerlite-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woo-mailerlite\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"mailerlite",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "mangareader",
		name: "MangaReader",
		website: "https://themesia.com/mangareader-wordpress-theme",
		description: "MangaReader is a WordPress theme designed for creating websites, offering customizable layouts and responsive design.",
		icon: "MangaReader.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mangareader:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("mangareader\\.themesia"),
				description: "Script content contains a bounded technology signature.",
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
		id: "master-slider-plugin",
		name: "Master Slider Plugin",
		website: "https://wordpress.org/plugins/master-slider",
		description: "Master Slider Plugin is an SEO friendly, responsive image and video slider plugin for WordPress.",
		icon: "master_slider.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "master-slider-plugin:dom:0",
				kind: "dom",
				selector: "link#ms-main-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"master-slider",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "mdbootstrap-wp-theme",
		name: "MDBootstrap WP theme",
		website: "https://mdbgo.com/docs/projects/wordpress/",
		description: "MDBootstrap WP theme is a WordPress theme built on top of the MDBootstrap front-end UI library. It provides a set of pre-designed layouts, widgets, and components that can be easily customised and integrated into WordPress websites.",
		icon: "MDBootstrap.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mdbootstrap-wp-theme:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/mdbootstrap']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"mdbootstrap",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "metaslider",
		name: "MetaSlider",
		website: "https://www.metaslider.com",
		description: "MetaSlider is a WordPress plugin for adding responsive sliders and carousels to websites.",
		icon: "MetaSlider.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "metaslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ml-slider(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "metaslider:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ml-slider/'], link#metaslider-pro-public-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:matchalabs:metaslider:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "metro-creativex",
		name: "Metro CreativeX",
		website: "https://themeisle.com/themes/metrox/",
		description: "Metro CreativeX is a free WordPress theme with a fully responsive design.",
		icon: "MetroCreativeX.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "metro-creativex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/metro-creativex\\/js\\/.*\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
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
		id: "modern-image-formats",
		name: "Modern Image Formats",
		website: "https://wordpress.org/plugins/webp-uploads/",
		description: "Performance plugin from the WordPress Performance Team, which adds support for outputting images in WebP or AVIF format and supports the `picture` element to enable format fallbacks.",
		icon: "modern-image-formats.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "modern-image-formats:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^webp-uploads ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "modula",
		name: "Modula",
		website: "https://wp-modula.com",
		description: "Modula is a customizable gallery plugin for WordPress.",
		icon: "Modula.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "modula:jsGlobal:0",
				kind: "jsGlobal",
				property: "ModulaIsotope",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "modula:jsGlobal:1",
				kind: "jsGlobal",
				property: "modulaInViewport",
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
		id: "moneris-payment-gateway",
		name: "Moneris Payment Gateway",
		website: "https://wordpress.org/plugins/wc-moneris-payment-gateway",
		description: "Moneris is Canada’s leading processor of Debit and credit card payments. This WooCommerce extension automatically adds moneris payment gateway to your woocommerce website and allows you to keep the customer on your site for the checkout process.",
		icon: "Moneris.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "moneris-payment-gateway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woocommerce-gateway-moneris\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moneris-payment-gateway:jsGlobal:1",
				kind: "jsGlobal",
				property: "wc_moneris_hosted_tokenization_params",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"moneris",
			"woocommerce",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "monsterinsights",
		name: "MonsterInsights",
		website: "https://www.monsterinsights.com",
		description: "MonsterInsights is the most popular Google Analytics plugin for WordPress.",
		icon: "MonsterInsights.png",
		categories: [
			"wordpress-ecosystem",
			"analytics",
		],
		rules: [
			{
				id: "monsterinsights:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/google-analytics-for-wordpress\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "monsterinsights:jsGlobal:1",
				kind: "jsGlobal",
				property: "MonsterInsights",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "monsterinsights:jsGlobal:2",
				kind: "jsGlobal",
				property: "monsterinsights_frontend",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:monsterinsights:monsterinsights:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "motion-page",
		name: "Motion.page",
		website: "https://motion.page",
		description: "Motion.page is a WordPress animation plugin utilizing GSAP and ScrollTrigger.",
		icon: "Motion.Page.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "motion-page:jsGlobal:0",
				kind: "jsGlobal",
				property: "MOTIONPAGE_FRONT.version",
				valuePattern: new RegExp("^([0-9\\.]+)$"),
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
		id: "moyasar-plugin",
		name: "Moyasar Plugin",
		website: "https://wordpress.org/plugins/moyasar/",
		description: "Moyasar Plugin is a WooCommerce payment gateway plugin that adds Moyasar card and wallet payment methods to WordPress stores.",
		icon: "Moyasar.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "moyasar-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/moyasar\\/assets\\/general\\/js\\/helpers\\/(?:triggers|samsungHelper)\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moyasar-plugin:dom:1",
				kind: "dom",
				selector: "script#moyasar_triggers_js-js, script#moyasar_samsung_helper_js-js",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"moyasar",
		],
		requires: [
			"woocommerce",
		],
	},
	{
		id: "mysterythemes-news-portal",
		name: "MysteryThemes News Portal",
		website: "https://mysterythemes.com/wp-themes/news-portal",
		description: "News Portal is the ultimate magazine WordPress theme by MysteryThemes.",
		icon: "MysteryThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mysterythemes-news-portal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/news-portal(?:-pro)?\\/.+np-custom-scripts\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "mysterythemes-news-portal-lite",
		name: "MysteryThemes News Portal Lite",
		website: "https://mysterythemes.com/wp-themes/news-portal-lite",
		description: "News Portal Lite is child theme of News Portal ultimate magazine WordPress theme by MysteryThemes.",
		icon: "MysteryThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mysterythemes-news-portal-lite:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/news-portal-lite/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
		excludes: [
			"mysterythemes-news-portal",
		],
	},
	{
		id: "mysterythemes-news-portal-mag",
		name: "MysteryThemes News Portal Mag",
		website: "https://mysterythemes.com/wp-themes/news-portal-mag",
		description: "News Portal Mag is child theme of News Portal ultimate magazine WordPress theme by MysteryThemes.",
		icon: "MysteryThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mysterythemes-news-portal-mag:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/news-portal-mag/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
		excludes: [
			"mysterythemes-news-portal",
		],
	},
	{
		id: "neve",
		name: "Neve",
		website: "https://themeisle.com/themes/neve/",
		description: "Neve is a super-fast, easily customizable, multi-purpose theme that works perfectly with the WordPress Block Editor and the most popular page builders as well as WooCommerce",
		icon: "ThemeIsle.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "neve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/neve\\S*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "neve:dom:1",
				kind: "dom",
				selector: "body[class*='neve-theme']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "neve:dom:2",
				kind: "dom",
				selector: "link[id*='neve-style']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "neve:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/neve\\s*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "newspack",
		name: "Newspack",
		website: "https://github.com/Automattic/newspack-plugin",
		description: "Newspack is an open-source publishing platform built on WordPress for small to medium sized news organizations. It is an “opinionated” platform that stakes out clear, best-practice positions on technology, design, and business practice for news publishers.",
		icon: "NewspackLogo.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "newspack:dom:0",
				kind: "dom",
				selector: "a.imprint[href*='newspack.pub']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "ninja-forms",
		name: "Ninja Forms",
		website: "https://ninjaforms.com",
		description: "Ninja Forms is the WordPress form builder.",
		icon: "Ninja Forms.svg",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "ninja-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ninja-forms\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ninja-forms:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ninja-forms/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ninja-forms:jsGlobal:2",
				kind: "jsGlobal",
				property: "nfForms",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:ninjaforms:ninja_forms:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "oceanwp",
		name: "OceanWP",
		website: "https://oceanwp.org",
		description: "OceanWP is a fast-loading WordPress theme that has great support for third-party plugins and drag-and-drop page builders.",
		icon: "OceanWP.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "oceanwp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/oceanwp\\S*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oceanwp:dom:1",
				kind: "dom",
				selector: "body[class*='oceanwp-theme']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "oceanwp:dom:2",
				kind: "dom",
				selector: "link[id*='oceanwp']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "oceanwp:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("themes\\/oceanwp\\s*\\.js(?:\\?ver=([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:oceanwp:oceanwp:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "onepage-express",
		name: "OnePage Express",
		website: "https://onepageexpress.com",
		description: "OnePage Express is a beautiful WordPress theme that can be used to create an one page website in minutes by drag and drop.",
		icon: "ExtendThemes.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "onepage-express:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/one-page-express(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onepage-express:dom:1",
				kind: "dom",
				selector: "link#one-page-express-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "onepage-express:jsGlobal:2",
				kind: "jsGlobal",
				property: "one_page_express_settings",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "onepress-social-locker",
		name: "OnePress Social Locker",
		website: "https://wordpress.org/plugins/social-locker",
		description: "Social Locker locks your most valuable site content behind a set of social buttons until the visitor likes, shares, +1s or tweets your page.",
		icon: "OnePress Social Locker.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "onepress-social-locker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/social-?locker(?:-next-premium)?\\/bizpanda\\/assets\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onepress-social-locker:jsGlobal:1",
				kind: "jsGlobal",
				property: "__pandalockers",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "onepress-social-locker:jsGlobal:2",
				kind: "jsGlobal",
				property: "bizpanda",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "optimization-detective",
		name: "Optimization Detective",
		website: "https://wordpress.org/plugins/optimization-detective/",
		description: "Performance plugin from the WordPress Performance Team, which captures real user metrics about what elements are displayed on the page across a variety of device form factors (e.g. desktop, tablet, and phone) in order to apply loading optimizations.",
		icon: "optimization-detective.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "optimization-detective:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^optimization-detective ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "optinmonster-plugin",
		name: "OptinMonster plugin",
		website: "https://optinmonster.com",
		description: "OptinMonster is a lead-generation plugin for WordPress.",
		icon: "OptinMonster.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "optinmonster-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/optinmonster\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"optinmonster",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "orbitfox",
		name: "OrbitFox",
		website: "https://themeisle.com/plugins/orbit-fox-companion",
		description: "OrbitFox is a multi-featured WordPress plugin that works with the Elementor, Beaver Builder and WordPress Block Editor site-building utilities by Themeisle.",
		icon: "OrbitFox.svg",
		categories: [
			"wordpress-ecosystem",
			"widgets-misc",
		],
		rules: [
			{
				id: "orbitfox:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/themeisle-companion/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:themeisle:orbit_fox:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "otter-blocks",
		name: "Otter Blocks",
		website: "https://wordpress.org/plugins/otter-blocks/",
		description: "Otter blocks is a Gutenberg Blocks page builder plugin that adds extra functionality to the WordPress Block Editor.",
		icon: "otter-blocks.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "otter-blocks:html:0",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=[\"']wp-block-themeisle-blocks-*"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "otter-blocks:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/otter-blocks']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "outtheboxthemes-panoramic",
		name: "OutTheBoxThemes Panoramic",
		website: "https://www.outtheboxthemes.com/wordpress-themes/panoramic",
		description: "Panoramic is a fully responsive WordPress theme with a homepage slider by OutTheBoxThemes.",
		icon: "OutTheBoxThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "outtheboxthemes-panoramic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/panoramic\\/.+custom\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outtheboxthemes-panoramic:dom:1",
				kind: "dom",
				selector: "link#panoramic_customizer_theme_fonts-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "page-builder-framework",
		name: "Page Builder Framework",
		website: "https://wp-pagebuilderframework.com",
		description: "Page Builder Framework is a lightweight (less than 50kb on the frontend) and highly customizible WordPress theme.",
		icon: "Page Builder Framework.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "page-builder-framework:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/page-builder-framework\\/.+site-min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "perfmatters",
		name: "Perfmatters",
		website: "https://perfmatters.io",
		description: "Perfmatters is a performance optimisation plugin for WordPress websites.",
		icon: "Perfmatters.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "perfmatters:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/(?:plugins|cache|uploads)\\/perfmatters\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:perfmatters:perfmatters:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "performance-lab",
		name: "Performance Lab",
		website: "https://wordpress.org/plugins/performance-lab/",
		description: "Performance plugin from the WordPress Performance Group, which is a collection of standalone performance modules.",
		icon: "Performance Lab.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "performance-lab:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Performance Lab ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "performance-lab:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^(Performance Lab|performance-lab) ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 2,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "performance-lab:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^(performance lab|performance-lab) ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 2,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:wordpress:performance_lab:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "performant-translations",
		name: "Performant Translations",
		website: "https://wordpress.org/plugins/performant-translations/",
		description: "Performance plugin from the WordPress Performance Team, which makes internationalization/localization in WordPress faster than ever before.",
		icon: "performant-translations.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "performant-translations:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^performant-translations ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "phlox",
		name: "Phlox",
		website: "https://www.phlox.pro",
		description: "Phlox is a modern, lightweight and customizable WordPress theme gratify for almost any type of website.",
		icon: "Phlox.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "phlox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/phlox(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "phlox:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/phlox/'], link[href*='/wp-content/themes/phlox-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"onetime",
			],
			cpe: "cpe:2.3:a:averta:phlox:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "photo-gallery",
		name: "Photo Gallery",
		website: "https://10web.io/plugins/wordpress-photo-gallery",
		description: "Photo Gallery plugin is a feature-rich, yet easy-to-use WordPress tool, which lets you add mobile-friendly image galleries and gallery groups to your website by 10Web.",
		icon: "Photo Gallery.svg",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "photo-gallery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/photo-gallery\\/.+scripts\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "photo-gallery:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/photo-gallery/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:10web:photo_gallery:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "pixelyoursite",
		name: "PixelYourSite",
		website: "https://www.pixelyoursite.com",
		description: "PixelyourSite is now probably the most complex tracking tool for WordPress, managing the Facebook Pixel, Google Analytics, Google Ads Remarketing, Pinterest Tag, Bing Tag, and virtually any other script.",
		icon: "PixelYourSite.png",
		categories: [
			"wordpress-ecosystem",
			"analytics",
		],
		rules: [
			{
				id: "pixelyoursite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/pixelyoursite\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pixelyoursite:jsGlobal:1",
				kind: "jsGlobal",
				property: "pys.Facebook",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixelyoursite:jsGlobal:2",
				kind: "jsGlobal",
				property: "pysOptions",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pixelyoursite:jsGlobal:3",
				kind: "jsGlobal",
				property: "pys_generate_token",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:pixelyoursite:pixelyoursite:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "polylang",
		name: "Polylang",
		website: "https://wordpress.org/plugins/polylang",
		description: "Polylang is a WordPress plugin which allows you to create multilingual WordPress site.",
		icon: "Polylang.svg",
		categories: [
			"wordpress-ecosystem",
			"translations",
		],
		rules: [
			{
				id: "polylang:dom:0",
				kind: "dom",
				selector: "#pll_switcher",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "polylang:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^pll_language$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "polylang:header:2",
				kind: "header",
				key: "x-redirected-by",
				valuePattern: new RegExp("Polylang(?: (Pro))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "polylang:header:3",
				kind: "header",
				key: "x-redirected-by",
				valuePattern: new RegExp("polylang(?: (pro))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:polylang_plugin_project:polylang:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "popularfx",
		name: "PopularFX",
		website: "https://popularfx.com",
		description: "PopularFX is a fully customizable responsive WordPress theme. It comes with drag and drop page builder.",
		icon: "PopularFX.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "popularfx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/popularfx\\/.+\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popularfx:dom:1",
				kind: "dom",
				selector: "link#popularfx-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "popup-maker",
		name: "Popup Maker",
		website: "https://wppopupmaker.com",
		description: "Popup Maker is a plugin that lets you create popup windows for your WordPress website.",
		icon: "Popup Maker.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "popup-maker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/popup-maker\\/(?:.+site(?:\\.min)?\\.js\\?.+ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popup-maker:jsGlobal:1",
				kind: "jsGlobal",
				property: "pum_popups",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:code-atlantic:popup_maker:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "powerfolio",
		name: "Powerfolio",
		website: "https://powerfoliowp.com",
		description: "Powerfolio is a portfolio plugin for Elementor, offering various customization options for creating a tailored portfolio.",
		icon: "Powerfolio.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "powerfolio:dom:0",
				kind: "dom",
				selector: "link[id='elpt-portfolio-css-css'][href*='portfolio-elementor']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "powerfolio:dom:1",
				kind: "dom",
				selector: "style#powerfolio-portfolio-block-style-inline-css",
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
			cpe: "cpe:2.3:a:pwrplugins:powerfolio:*:*:*:*:*:*:*:*",
		},
		requires: [
			"elementor",
			"wordpress",
		],
	},
	{
		id: "premio-chaty",
		name: "Premio Chaty",
		website: "https://premio.io/downloads/chaty",
		description: "Chat with your website visitors via their favorite channels with Chaty by Premio.",
		icon: "Premio.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "premio-chaty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/chaty\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "premio-chaty:jsGlobal:1",
				kind: "jsGlobal",
				property: "chaty_settings.chaty_widgets",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "premio-chaty:jsGlobal:2",
				kind: "jsGlobal",
				property: "chaty_settings.object_settings",
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
		id: "press-customizr",
		name: "Press Customizr",
		website: "https://presscustomizr.com/customizr",
		description: "Press Customizr is a multipurpose WordPress theme suitable for small businesses and ecommerce sites.",
		icon: "Press.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "press-customizr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/customizr\\/.+js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "press-customizr:dom:1",
				kind: "dom",
				selector: "style#customizr-skin-inline-css, link#customizr-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "press-hueman",
		name: "Press Hueman",
		website: "https://presscustomizr.com/hueman",
		description: "Press Hueman is a mobile friendly WordPress theme for blogs, magazines and business websites.",
		icon: "Press.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "press-hueman:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/hueman\\/.+scripts\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "press-hueman:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/hueman/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "press-hueman:jsGlobal:2",
				kind: "jsGlobal",
				property: "HUParams",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "pressmaximum-customify",
		name: "PressMaximum Customify",
		website: "https://pressmaximum.com/customify",
		description: "PressMaximum Customify is lightweight, responsive and flexible multipurpose WordPress theme.",
		icon: "PressMaximum.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "pressmaximum-customify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/customify\\/.+theme\\.min\\.js(?:.+ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pressmaximum-customify:jsGlobal:1",
				kind: "jsGlobal",
				property: "Customify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pressmaximum-customify:jsGlobal:2",
				kind: "jsGlobal",
				property: "Customify_JS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pressmaximum-customify:jsGlobal:3",
				kind: "jsGlobal",
				property: "customify_is_mobile",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "pretty-links",
		name: "Pretty Links",
		website: "https://prettylinks.com",
		description: "Pretty Links is a WordPress plugin URL shortener, link cloaker, branded link, and QR code generator.",
		icon: "Pretty Links.png",
		categories: [
			"wordpress-ecosystem",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "pretty-links:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/pretty-link/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "price-by-country",
		name: "Price By Country",
		website: "https://woocommerce.com/products/price-by-country",
		description: "Price By Country is a WooCommerce plugin that enables store owners to set different product prices based on the customer's country.",
		icon: "WooCommerce.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "price-by-country:jsGlobal:0",
				kind: "jsGlobal",
				property: "wc_price_based_country_ajax_geo_params",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "price-by-country:jsGlobal:1",
				kind: "jsGlobal",
				property: "wc_price_based_country_pro_frontend_params",
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
		id: "profilepress",
		name: "ProfilePress",
		website: "https://profilepress.net",
		description: "ProfilePress is a WordPress registration plugin that lets you create login forms, registration forms, user profiles, and more.",
		icon: "ProfilePress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "profilepress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-user-avatar(?:-pro)?\\/.+frontend\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "profilepress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/wp-user-avatar/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "profilepress:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^ppwp_wp_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:properfraction:profilepress:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "publishpress-blocks",
		name: "PublishPress Blocks",
		website: "https://publishpress.com/blocks/",
		description: "PublishPress Blocks is a Gutenberg Blocks page builder plugin that adds extra functionality to the WordPress Block Editor.",
		icon: "publishpress-blocks.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "publishpress-blocks:html:0",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=[\"']wp-block-advgb-*"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "publishpress-blocks:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/advanced-gutenberg/assets/css/blocks.css?ver=([\\d\\.]+))?\\;version:\\1']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "rafflepress",
		name: "RafflePress",
		website: "https://rafflepress.com",
		description: "RafflePress is a WordPress plugin designed for creating and managing giveaways to boost website engagement and grow audiences.",
		icon: "RafflePress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "rafflepress:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.rafflepress\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "rafflepress:jsGlobal:1",
				kind: "jsGlobal",
				property: "rafflepress_api_url",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rafflepress:jsGlobal:2",
				kind: "jsGlobal",
				property: "rafflepress_cookies",
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
		id: "rankmath-seo",
		name: "RankMath SEO",
		website: "https://rankmath.com",
		description: "RankMath SEO is a search engine optimisation plugin for WordPress.",
		icon: "RankMath SEO.svg",
		categories: [
			"wordpress-ecosystem",
			"marketing-automation",
		],
		rules: [
			{
				id: "rankmath-seo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/seo-by-rank-math(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rankmath-seo:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/seo-by-rank-math/'], script.rank-math-schema-pro, script.rank-math-schema",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "really-simple-captcha",
		name: "Really Simple CAPTCHA",
		website: "https://wordpress.org/plugins/really-simple-captcha",
		description: "Really Simple CAPTCHA does not work alone and is intended to work with other plugins. It is originally created for Contact Form 7, however, you can use it with your own plugin.",
		icon: "Really Simple CAPTCHA.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "really-simple-captcha:dom:0",
				kind: "dom",
				selector: "img[src*='/wp-content/plugins/really-simple-captcha/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "recaptcha-v2-for-contact-form-7",
		name: "ReCaptcha v2 for Contact Form 7",
		website: "https://wordpress.org/plugins/wpcf7-recaptcha/",
		description: "Contact Form 7 v5.1 dropped support for reCaptcha v2 along with the [recaptcha] tag December 2018. This plugin brings that functionality back from Contact Form 7 5.0.5 and re-adds the [recaptcha] tag.",
		icon: "ReCaptcha v2 for Contact Form 7.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "recaptcha-v2-for-contact-form-7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wpcf7-recaptcha\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		implies: [
			"contact-form-7",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "recent-posts-widget-with-thumbnails",
		name: "Recent Posts Widget With Thumbnails",
		website: "https://wordpress.org/plugins/recent-posts-widget-with-thumbnails/",
		description: "Recent Posts Widget With Thumbnails is based on the well-known WordPress default widget 'Recent Posts' and extended to display more informations about the posts.",
		icon: "Recent Posts Widget With Thumbnails.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "recent-posts-widget-with-thumbnails:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/recent-posts-widget-with-thumbnails/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "registrationmagic",
		name: "RegistrationMagic",
		website: "https://registrationmagic.com",
		description: "RegistrationMagic is a WordPress plugin that enables the creation and management of customized user registration forms and associated submission workflows.",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "registrationmagic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/custom-registration-form-builder-with-submission-manager\\/public\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:metagauss:registrationmagic:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "responsive-lightbox-and-gallery",
		name: "Responsive Lightbox & Gallery",
		website: "https://dfactory.eu/products/responsive-lightbox-gallery-extensions/",
		description: "Responsive Lightbox & Gallery plugin is a lightweight WordPress gallery plugin by Digital Factory.",
		icon: "Digital Factory.png",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "responsive-lightbox-and-gallery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/responsive-lightbox\\/.+front\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "responsive-lightbox-and-gallery:jsGlobal:1",
				kind: "jsGlobal",
				property: "rlArgs.activeGalleries",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "responsive-lightbox-and-gallery:jsGlobal:2",
				kind: "jsGlobal",
				property: "rl_hide_image",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "responsive-lightbox-and-gallery:jsGlobal:3",
				kind: "jsGlobal",
				property: "rl_view_image",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "rich-plugins-reviews",
		name: "Rich Plugins Reviews",
		website: "https://richplugins.com/business-reviews-bundle-wordpress-plugin",
		description: "Rich Plugins Reviews is a WordPress plugin that integrates verified reviews from trusted sources such as Google and Facebook.",
		icon: "Rich Plugins.svg",
		categories: [
			"wordpress-ecosystem",
			"community-ugc",
		],
		rules: [
			{
				id: "rich-plugins-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/widget-google-reviews\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rich-plugins-reviews:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/widget-google-reviews/']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "satori-studio-bento",
		name: "Satori Studio Bento",
		website: "https://satoristudio.net/bento-free-wordpress-theme",
		description: "Satori Studio Bento is a powerful yet user-friendly free WordPress theme intended for use in the broadest range of web projects.",
		icon: "Satori Studio.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "satori-studio-bento:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/bento\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "scissor-themes-writee",
		name: "Scissor Themes Writee",
		website: "https://www.scissorthemes.com/themes/writee-free",
		description: "Writee is an elegant free personal WordPress blog theme and well suited for personal, food, travel, fashion, corporate, or any other amazing blog.",
		icon: "Scissor Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "scissor-themes-writee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/writee(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "scissor-themes-writee:dom:1",
				kind: "dom",
				selector: "link#WRT-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "seedprod-coming-soon",
		name: "SeedProd Coming Soon",
		website: "https://www.seedprod.com/features/coming-soon-page-templates-for-wordpress",
		description: "SeedProd Coming Soon is a page builder allows you to add a new website under construction page to your WordPress site without hiring a developer.",
		icon: "SeedProd.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "seedprod-coming-soon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/coming-soon\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "seedprod-coming-soon:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/coming-soon/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "semplice",
		name: "Semplice",
		website: "https://www.semplice.com",
		description: "Semplice is a Wordpress-based website builder made by designers for designers.",
		icon: "Semplice.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "semplice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/semplice(?:\\d+)?(?:-child)?(?:-theme)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "semplice:jsGlobal:1",
				kind: "jsGlobal",
				property: "semplice.template_dir",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "shortcodes-ultimate",
		name: "Shortcodes Ultimate",
		website: "https://getshortcodes.com",
		description: "Shortcodes Ultimate is a comprehensive collection of visual components for WordPress.",
		icon: "Shortcodes Ultimate.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "shortcodes-ultimate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/shortcodes-ultimate\\/.+index\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shortcodes-ultimate:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/shortcodes-ultimate/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:getshortcodes:shortcodes_ultimate:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "shortpixel-image-optimizer",
		name: "ShortPixel Image Optimizer",
		website: "https://shortpixel.com",
		description: "ShortPixel Image Optimizer is a lightweight WordPress plugin that can compress all of your site's images and PDF documents.",
		icon: "ShortPixel.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "shortpixel-image-optimizer:jsGlobal:0",
				kind: "jsGlobal",
				property: "spPicTest",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "sinatra",
		name: "Sinatra",
		website: "https://try.sinatrawp.com",
		description: "Sinatra is a lightweight and highly customizable multi-purpose WordPress theme.",
		icon: "Sinatra.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "sinatra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/sinatra\\/.+sinatra\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sinatra:jsGlobal:1",
				kind: "jsGlobal",
				property: "sinatraSlideUp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sinatra:jsGlobal:2",
				kind: "jsGlobal",
				property: "sinatra_vars.nonce",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "siteguard-wp-plugin",
		name: "SiteGuard WP Plugin",
		website: "https://www.jp-secure.com/siteguard_wp_plugin_en",
		description: "SiteGurad WP Plugin is the plugin specialised for the protection against the attack to the management page and login.",
		icon: "SiteGuard WP Plugin.png",
		categories: [
			"wordpress-ecosystem",
			"security",
		],
		rules: [
			{
				id: "siteguard-wp-plugin:dom:0",
				kind: "dom",
				selector: "img[src*='/wp-content/plugins/siteguard/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "siteorigin-page-builder",
		name: "SiteOrigin Page Builder",
		website: "https://siteorigin.com/page-builder",
		description: "Page Builder by SiteOrigin makes it easy to build responsive grid-based page content that adapts to mobile devices with pixel perfect accuracy.",
		icon: "SiteOrigin.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "siteorigin-page-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/siteorigin-panels\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "siteorigin-page-builder:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/siteorigin-panels/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "siteorigin-vantage",
		name: "SiteOrigin Vantage",
		website: "https://siteorigin.com/theme/vantage",
		description: "SiteOrigin Vantage is a response, multi-purpose theme carefully developed with seamless integration into an array of amazing third-party plugins.",
		icon: "SiteOrigin.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "siteorigin-vantage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/vantage\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "siteorigin-vantage:dom:1",
				kind: "dom",
				selector: "style#vantage-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "siteorigin-widgets-bundle",
		name: "SiteOrigin Widgets Bundle",
		website: "https://siteorigin.com/widgets-bundle",
		description: "SiteOrigin Widgets Bundle is a WordPress plugin that gives you all the elements you need to build modern, responsive, and engaging website pages.",
		icon: "SiteOrigin.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "siteorigin-widgets-bundle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/so-widgets-bundle\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "siteorigin-widgets-bundle:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/so-widgets-bundle/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:siteorigin:siteorigin_widgets_bundle:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "sitepoint",
		name: "SitePoint",
		website: "https://www.sitepoint.com/wordpress",
		description: "Sitepoint is a platform for creating beautiful and responsive custom WordPress themes.",
		icon: "SitePoint.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "sitepoint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/sitepoint-base\\/js\\/vendors(?:\\.min)?\\.js\\?ver=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sitepoint:dom:1",
				kind: "dom",
				selector: "script#sitepoint-base-vendors-js",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "slim-seo",
		name: "Slim SEO",
		website: "https://wpslimseo.com",
		description: "Slim SEO is a full-featured SEO plugin for WordPress that's lightweight, blazing fast with minimum configuration.",
		icon: "Slim-SEO.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "slim-seo:dom:0",
				kind: "dom",
				selector: "#slim-seo-schema",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
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
		id: "smart-slider-3",
		name: "Smart Slider 3",
		website: "https://smartslider3.com",
		description: "Smart Slider 3 is a responsive, SEO optimised WordPress plugin.",
		icon: "Smart Slider 3.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "smart-slider-3:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/smart-slider-3(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:nextendweb:smart_slider_3:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "smash-balloon-instagram-feed",
		name: "Smash Balloon Instagram Feed",
		website: "https://smashballoon.com/instagram-feed",
		description: "Instagram Feed displays Instagram posts from your Instagram accounts, either in the same single feed or in multiple different ones. Created by Smash Balloon.",
		icon: "Smash Balloon.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "smash-balloon-instagram-feed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/instagram-feed\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smash-balloon-instagram-feed:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/instagram-feed/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "sno-flex",
		name: "SNO Flex",
		website: "https://snosites.com",
		description: "SNO Flex is a WordPress theme developed by SNO Sites. SNO Sites is a company that specialises in providing website solutions for schools and educational institutions.",
		icon: "SNO.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "sno-flex:jsGlobal:0",
				kind: "jsGlobal",
				property: "sno_infographics_ajax_object",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "societe-des-avis-garantis",
		name: "Societe des Avis Garantis",
		website: "https://www.societe-des-avis-garantis.fr",
		description: "Societe des Avis Garantis is a French company that provides customer review and rating services for businesses through its online platform.",
		icon: "Societe des Avis Garantis.svg",
		categories: [
			"wordpress-ecosystem",
			"community-ugc",
		],
		rules: [
			{
				id: "societe-des-avis-garantis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ag-core\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "societe-des-avis-garantis:jsGlobal:1",
				kind: "jsGlobal",
				property: "agVanillaCode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "societe-des-avis-garantis:jsGlobal:2",
				kind: "jsGlobal",
				property: "urlCertificate",
				valuePattern: new RegExp("\\.societe-des-avis-garantis\\.fr\\/"),
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
		id: "spectra",
		name: "Spectra",
		website: "https://wpspectra.com",
		description: "Spectra is a WordPress plugin that provides a collection of new and enhanced blocks for the WordPress Block editor.",
		icon: "Spectra.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "spectra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ultimate-addons-for-gutenberg\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spectra:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ultimate-addons-for-gutenberg/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:brainstormforce:spectra:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"gutenberg",
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "speculative-loading",
		name: "Speculative Loading",
		website: "https://wordpress.org/plugins/speculation-rules/",
		description: "Performance plugin from the WordPress Performance Team, which adds support for the Speculation Rules API, by which certain URLs are dynamically prefetched or prerendered based on user interaction.",
		icon: "speculation-rules.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "speculative-loading:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^speculation-rules ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "speedycache",
		name: "SpeedyCache",
		website: "https://speedycache.com",
		description: "SpeedyCache is a WordPress plugin for optimizing page load times and caching efficiency.",
		icon: "SpeedyCache.svg",
		categories: [
			"wordpress-ecosystem",
			"server-runtime-infra",
		],
		rules: [
			{
				id: "speedycache:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/cache/speedycache/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "speedycache:jsGlobal:1",
				kind: "jsGlobal",
				property: "speedycachell",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"freemium",
				"low",
			],
			cpe: "cpe:2.3:a:softaculous:speedycache:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "spexo-addons",
		name: "Spexo Addons",
		website: "https://spexoaddons.com/",
		description: "Spexo Addons is a tool offering essential features for Elementor, enhancing website design and functionality in a single solution.",
		icon: "SpexoAddons.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "spexo-addons:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/sastra-essential-addons-for-elementor\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "spicethemes-spicepress",
		name: "SpiceThemes SpicePress",
		website: "https://spicethemes.com/spicepress-wordpress-theme",
		description: "SpicePress is a responsive and fully customizable business template by SpiceThemes.",
		icon: "SpiceThemes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "spicethemes-spicepress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/spicepress(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "stackable",
		name: "Stackable",
		website: "https://wpstackable.com",
		description: "Stackable is a plugin for WordPress that offers a collection of blocks, templates, and other design tools to help users create custom, professional-looking websites.",
		icon: "Stackable.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "stackable:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/stackable-ultimate-gutenberg-blocks']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "stackable:jsGlobal:1",
				kind: "jsGlobal",
				property: "stackable.restUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stackable:jsGlobal:2",
				kind: "jsGlobal",
				property: "stackableAnimations",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
		},
		implies: [
			"gutenberg",
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "superpwa",
		name: "SuperPWA",
		website: "https://superpwa.com",
		description: "SuperPWA helps to easily convert your WordPress website into Progressive Web Apps instantly through our widely used PWA software without in coding.",
		icon: "superpwa.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "superpwa:jsGlobal:0",
				kind: "jsGlobal",
				property: "superpwa_sw",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
				"recurring",
			],
		},
		implies: [
			"pwa",
			"wordpress",
		],
	},
	{
		id: "supsystic",
		name: "Supsystic",
		website: "https://supsystic.com",
		description: "Supsystic is a WordPress plugin that enables opt-in popups for collecting user information or promoting content.",
		icon: "Supsystic.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "supsystic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/plugins\\/data-tables-generator-by-supsystic\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "supsystic:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\/plugins\\/data-tables-generator-by-supsystic\\/"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "svg-support",
		name: "SVG Support",
		website: "https://github.com/wp-plugins/svg-support",
		description: "SVG Support is a WordPress plugin which allows you to safely upload SVG files to your media library and use them like any other image.",
		icon: "SVG Support.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "svg-support:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/svg-support\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "svg-support:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/svg-support/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "tablepress",
		name: "TablePress",
		website: "https://tablepress.org",
		description: "TablePress is a free and open source plugin for the WordPress publishing platform. It enables you to create and manage tables on your website, without any coding knowledge.",
		icon: "TablePress.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "tablepress:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/tablepress/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:tablepress:tablepress:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "the-events-calendar",
		name: "The Events Calendar",
		website: "https://theeventscalendar.com",
		description: "The Events Calendar is a free event management plugin for WordPress.",
		icon: "The Events Calendar.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "the-events-calendar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/the-events-calendar(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "the-events-calendar:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/the-events-calendar/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "the-events-calendar:jsGlobal:2",
				kind: "jsGlobal",
				property: "TribeCalendar",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "the-events-calendar:jsGlobal:3",
				kind: "jsGlobal",
				property: "tribe_l10n_datatables",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:stellarwp:the_events_calendar:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "the-theme-foundry-make",
		name: "The Theme Foundry Make",
		website: "https://thethemefoundry.com/wordpress-themes/make",
		description: "Make is a free, open-source builder WordPress theme by The Theme Foundry.",
		icon: "The Theme Foundry.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "the-theme-foundry-make:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/make(?:-child)?\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "the-theme-foundry-make:jsGlobal:1",
				kind: "jsGlobal",
				property: "MakeDynamicStylesheet",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "the-theme-foundry-make:jsGlobal:2",
				kind: "jsGlobal",
				property: "MakeFrontEnd",
				confidence: 50,
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-freesia-edge",
		name: "Theme Freesia Edge",
		website: "https://themefreesia.com/themes/edge",
		description: "Edge is a responsive blogger WordPress theme by Theme Freesia.",
		icon: "Theme Freesia.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-freesia-edge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/edge(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme-freesia-edge:jsGlobal:1",
				kind: "jsGlobal",
				property: "edge_slider_value",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-freesia-photograph",
		name: "Theme Freesia Photograph",
		website: "https://themefreesia.com/themes/Photograph",
		description: "Photograph is a WordPress theme exclusively built for photographer, blogger, portfolio, photography agency or photo studio websites.",
		icon: "Theme Freesia.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-freesia-photograph:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/photograph(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-freesia-shoppingcart",
		name: "Theme Freesia ShoppingCart",
		website: "https://themefreesia.com/themes/shoppingcart",
		description: "ShoppingCart is a WordPress theme especially build for store and ecommerce by Theme Freesia.",
		icon: "Theme Freesia.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-freesia-shoppingcart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/shoppingcart(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme-freesia-shoppingcart:jsGlobal:1",
				kind: "jsGlobal",
				property: "shoppingcart_slider_value",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-horse-attitude",
		name: "Theme Horse Attitude",
		website: "https://www.themehorse.com/themes/attitude",
		description: "Attitude is a simple, clean and responsive retina ready WordPress theme by Theme Horse.",
		icon: "Theme Horse.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-horse-attitude:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/attitude(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme-horse-attitude:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/attitude-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-horse-newscard",
		name: "Theme Horse NewsCard",
		website: "https://www.themehorse.com/themes/newscard",
		description: "NewsCard is a multi-purpose magazine/news WordPress theme by Theme Horse.",
		icon: "Theme Horse.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-horse-newscard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/newscard(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme-horse-newscard:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/newscard-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme-vision-agama",
		name: "Theme Vision Agama",
		website: "https://theme-vision.com/agama",
		description: "Agama is a free multi-purpose WordPress theme by Theme Vision.",
		icon: "Theme Vision.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme-vision-agama:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/agama(?:-pro)?\\/.+functions\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme-vision-agama:jsGlobal:1",
				kind: "jsGlobal",
				property: "agama",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "theme-vision-agama:jsGlobal:2",
				kind: "jsGlobal",
				property: "agama_pro",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "theme4press-evolve",
		name: "Theme4Press Evolve",
		website: "https://theme4press.com/evolve-multipurpose-wordpress-theme",
		description: "Theme4Press Evolve is an multipurpose and minimal WordPress theme.",
		icon: "Theme4Press.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "theme4press-evolve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/evolve(?:-plus)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "theme4press-evolve:jsGlobal:1",
				kind: "jsGlobal",
				property: "evolve_js_local_vars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themeansar-newsberg",
		name: "Themeansar Newsberg",
		website: "https://themeansar.com/free-themes/newsberg",
		description: "Themeansar Newsberg is a fast, clean, modern-looking, responsive news magazine WordPress theme.",
		icon: "Themeansar.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themeansar-newsberg:dom:0",
				kind: "dom",
				selector: "link#newsberg-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
		excludes: [
			"themeansar-newsup",
		],
	},
	{
		id: "themeansar-newsup",
		name: "Themeansar Newsup",
		website: "https://themeansar.com/free-themes/newsup",
		description: "Themeansar Newsup is a fast, clean, modern-looking responsive news magazine WordPress theme.",
		icon: "Themeansar.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themeansar-newsup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/newsup(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themebeez-cream-magazine",
		name: "Themebeez Cream Magazine",
		website: "https://themebeez.com/themes/cream-magazine",
		description: "Cream Magazine is a news and magazine WordPress theme by Themebeez.",
		icon: "Themebeez.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themebeez-cream-magazine:jsGlobal:0",
				kind: "jsGlobal",
				property: "cream_magazine_script_obj",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themebeez-orchid-store",
		name: "Themebeez Orchid Store",
		website: "https://themebeez.com/themes/orchid-store",
		description: "Orchid Store is a clean, flexible, stylish and dynamic ecommerce WordPress theme by Themebeez.",
		icon: "Themebeez.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themebeez-orchid-store:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/orchid-store(?:-child)?\\/.+bundle\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themebeez-orchid-store:jsGlobal:1",
				kind: "jsGlobal",
				property: "orchid_store_obj",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themegraphy-graphy",
		name: "Themegraphy Graphy",
		website: "https://themegraphy.com/wordpress-themes/graphy",
		description: "Themegraphy Graphy is now compatible with WordPress 5.0 and WordPress Block Editor blog-oriented WordPress theme.",
		icon: "Themegraphy.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegraphy-graphy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/graphy(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themegrill-accelerate",
		name: "ThemeGrill Accelerate",
		website: "https://themegrill.com/themes/accelerate",
		description: "ThemeGrill Accelerate is free minimal WordPress theme.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-accelerate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/accelerate(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-accelerate:dom:1",
				kind: "dom",
				selector: "link#accelerate_style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "themegrill-cenote",
		name: "ThemeGrill Cenote",
		website: "https://themegrill.com/themes/cenote",
		description: "ThemeGrill Cenote is a creative blogging WordPress theme, fully compatible with WooCommerce and popular page builders.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-cenote:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/cenote(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-cenote:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/cenote/'], link[href*='/wp-content/themes/cenote-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "themegrill-colormag",
		name: "ThemeGrill ColorMag",
		website: "https://themegrill.com/themes/colormag",
		description: "ThemeGrill ColorMag is most popular magazine-newspaper style WordPress theme.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-colormag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/colormag(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-colormag:dom:1",
				kind: "dom",
				selector: "link#colormag_style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "themegrill-estore",
		name: "ThemeGrill eStore",
		website: "https://themegrill.com/themes/estore",
		description: "ThemeGrill eStore is one of the most popular WooCommerce integrated WordPress themes.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-estore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/e(?:s|S)tore(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-estore:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("eStore v\\.([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "themegrill-estore:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/e(?:s|s)tore(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-estore:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("estore v\\.([\\d\\.]+)", "i"),
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
				"onetime",
				"recurring",
			],
		},
		implies: [
			"cart-functionality",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "themegrill-flash",
		name: "ThemeGrill Flash",
		website: "https://themegrill.com/themes/flash",
		description: "ThemeGrill Flash is one of the most flexible multipurpose WordPress themes.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-flash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/flash(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-flash:dom:1",
				kind: "dom",
				selector: "link[href='/wp-content/themes/flash']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
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
		id: "themegrill-radiate",
		name: "ThemeGrill Radiate",
		website: "https://themegrill.com/themes/radiate",
		description: "ThemeGrill Radiate is a simple and minimal WordPress theme focused on blogging.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-radiate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/radiate(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-radiate:dom:1",
				kind: "dom",
				selector: "link#radiate-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "themegrill-radiate:jsGlobal:2",
				kind: "jsGlobal",
				property: "radiateScriptParam",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themegrill-spacious",
		name: "ThemeGrill Spacious",
		website: "https://themegrill.com/themes/spacious",
		description: "ThemeGrill Spacious is beautiful small to medium business responsive WordPress theme.",
		icon: "ThemeGrill.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themegrill-spacious:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/spacious(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themegrill-spacious:dom:1",
				kind: "dom",
				selector: "link#spacious_style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "themegrill-spacious:jsGlobal:2",
				kind: "jsGlobal",
				property: "spacious_slider_value",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themeisle-menu-icons",
		name: "ThemeIsle Menu Icons",
		website: "https://wordpress.org/plugins/menu-icons",
		description: "ThemeIsle Menu Icons plugin gives you the ability to add icons to your menu items, similar to the look of the latest dashboard menu.",
		icon: "ThemeIsle.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themeisle-menu-icons:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/menu-icons/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "themes4wp-bulk",
		name: "Themes4Wp Bulk",
		website: "https://themes4wp.com/theme/bulk",
		description: "Themes4Wp Bulk is a modern and responsive multipurpose WordPress theme.",
		icon: "Themes4Wp.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themes4wp-bulk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/bulk(?:-pro)?\\/.+customscript\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themezee-donovan",
		name: "ThemeZee Donovan",
		website: "https://themezee.com/themes/donovan",
		description: "ThemeZee Donovan is a flexible, yet easy-to-use blogging WordPress theme.",
		icon: "ThemeZee.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themezee-donovan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/donovan\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themezee-donovan:jsGlobal:1",
				kind: "jsGlobal",
				property: "donovanScreenReaderText",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "themezee-donovan:jsGlobal:2",
				kind: "jsGlobal",
				property: "donovan_menu_title",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themezee-poseidon",
		name: "ThemeZee Poseidon",
		website: "https://themezee.com/themes/poseidon",
		description: "ThemeZee Poseidon is an elegant designed WordPress theme featuring a splendid fullscreen image slideshow.",
		icon: "ThemeZee.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themezee-poseidon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/poseidon\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themezee-poseidon:jsGlobal:1",
				kind: "jsGlobal",
				property: "poseidonScreenReaderText",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themezee-wellington",
		name: "ThemeZee Wellington",
		website: "https://themezee.com/themes/wellington",
		description: "Wellington is a clean and simple magazine WordPress theme by ThemeZee.",
		icon: "ThemeZee.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themezee-wellington:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/wellington\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "themezee-wellington:jsGlobal:1",
				kind: "jsGlobal",
				property: "wellingtonScreenReaderText",
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
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themezhut-bam",
		name: "ThemezHut Bam",
		website: "https://themezhut.com/themes/bam",
		description: "ThemezHut Bam is a great flexible WordPress theme for blogging sites.",
		icon: "ThemezHut.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themezhut-bam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/bam(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themezhut-hitmag",
		name: "ThemezHut HitMag",
		website: "https://themezhut.com/themes/hitmag",
		description: "ThemezHut HitMag is a stylish and powerful WordPress theme crafted for magazines, newspapers or personal blogs.",
		icon: "ThemezHut.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themezhut-hitmag:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/hitmag(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "themonic-iconic-one",
		name: "Themonic Iconic One",
		website: "https://themonic.com/iconic-one",
		description: "Themonic Iconic One is a premium quality WordPress theme with pixel perfect typography and responsiveness and is built for speed.",
		icon: "Themonic.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "themonic-iconic-one:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/iconic-one(?:-[\\w]+)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "thimpress-course-review",
		name: "ThimPress Course Review",
		website: "https://wordpress.org/plugins/learnpress-course-review",
		description: "Course Review is a WordPress plugin by ThimPress. Course Review gives students the opportunity to evaluate and provide feedback in order to improve the course.",
		icon: "ThimPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thimpress-course-review:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/learnpress-course-review/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "thimpress-course-wishlist",
		name: "ThimPress Course Wishlist",
		website: "https://wordpress.org/plugins/learnpress-wishlist",
		description: "Course Wishlist is a WordPress plugin by ThimPress. Course Wishlist bring wishlist feature for LearnPress.",
		icon: "ThimPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thimpress-course-wishlist:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/learnpress-wishlist/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"thimpress-learnpress",
			"wordpress",
		],
	},
	{
		id: "thimpress-gradebook",
		name: "ThimPress Gradebook",
		website: "https://thimpress.com/product/gradebook-add-on-for-learnpress",
		description: "Gradebook is a WordPress plugin by ThimPress. Gradebook add-on for LearnPress makes it easier to track the students learning progress and result.",
		icon: "ThimPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thimpress-gradebook:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/learnpress-gradebook/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"thimpress-learnpress",
			"wordpress",
		],
	},
	{
		id: "thimpress-learnpress",
		name: "ThimPress LearnPress",
		website: "https://wordpress.org/plugins/learnpress",
		description: "LearnPress is a WordPress LMS plugin by ThimPress.",
		icon: "ThimPress.svg",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "thimpress-learnpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/learnpress\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thimpress-learnpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/learnpress/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "think-up-themes-consulting",
		name: "Think Up Themes Consulting",
		website: "https://www.thinkupthemes.com/themes/consulting",
		description: "Think Up Themes Consulting is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
		icon: "Think Up Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "think-up-themes-consulting:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/consulting(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "think-up-themes-consulting:dom:1",
				kind: "dom",
				selector: "link#consulting-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "think-up-themes-minamaze",
		name: "Think Up Themes Minamaze",
		website: "https://www.thinkupthemes.com/themes/minamaze",
		description: "Think Up Themes Minamaze is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
		icon: "Think Up Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "think-up-themes-minamaze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/minamaze(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "think-up-themes-minamaze:dom:1",
				kind: "dom",
				selector: "link#minamaze-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-apprentice",
		name: "Thrive Apprentice",
		website: "https://thrivethemes.com/apprentice/",
		description: "Thrive Apprentice is a WordPress plugin for creating online courses and also a membership plugin.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "thrive-apprentice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-apprentice\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-apprentice:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-apprentice/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:thrivethemes:thrive_apprentice:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-architect",
		name: "Thrive Architect",
		website: "https://thrivethemes.com/architect/",
		description: "Thrive Architect is the visual page builder for WordPress.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "thrive-architect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-visual-editor\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-architect:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-visual-editor/']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-comments",
		name: "Thrive Comments",
		website: "https://thrivethemes.com/comments/",
		description: "Thrive Comments plugin replaces the standard WordPress comments from your website.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thrive-comments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-comments\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-comments:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-comments/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:thrivethemes:thrive_comments:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-leads",
		name: "Thrive Leads",
		website: "https://thrivethemes.com/leads/",
		description: "Thrive Leads is an all-in-one email list building plugin for WordPress.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thrive-leads:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-leads\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-leads:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-leads/']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-quiz-builder",
		name: "Thrive Quiz Builder",
		website: "https://thrivethemes.com/quizbuilder",
		description: "Thrive Quiz Builder is a powerful WordPress plugin that can help you to create quizzes for your website or blog.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thrive-quiz-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-quiz-builder\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-quiz-builder:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-quiz-builder/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:thrivethemes:thrive_quiz_builder:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "thrive-ultimatum",
		name: "Thrive Ultimatum",
		website: "https://thrivethemes.com/ultimatum/",
		description: "Thrive Ultimatum is a WordPress scarcity marketing plugin with built-in templates and campaign tracking tools from developer Thrive Themes.",
		icon: "Thrive.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "thrive-ultimatum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/thrive-ultimatum\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "thrive-ultimatum:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/thrive-ultimatum/']",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "translate-wordpress",
		name: "Translate WordPress",
		website: "https://gtranslate.io",
		description: "Translate WordPress is a website translator plugin which can translate any website to any language automatically. Translate WordPress plugin is now a part of GTranslate family.",
		icon: "GTranslate.svg",
		categories: [
			"wordpress-ecosystem",
			"translations",
		],
		rules: [
			{
				id: "translate-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/google-language-translator\\/.+scripts\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "translatepress",
		name: "TranslatePress",
		website: "https://translatepress.com",
		description: "TranslatePress is a WordPress plugin that simplifies website translation, enabling multilingual functionality to enhance global traffic.",
		icon: "TranslatePress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "translatepress:jsGlobal:0",
				kind: "jsGlobal",
				property: "trp_el",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "translatepress:jsGlobal:1",
				kind: "jsGlobal",
				property: "trp_ls_shortcode_width",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "translatepress:jsGlobal:2",
				kind: "jsGlobal",
				property: "trp_ls_shortcodes",
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
		id: "trustindex-google-reviews",
		name: "Trustindex Google Reviews",
		website: "https://www.trustindex.io",
		description: "Google Reviews s a premium plugin that can help you to embed reviews on your site by Trustindex.",
		icon: "Trustindex.svg",
		categories: [
			"wordpress-ecosystem",
			"community-ugc",
		],
		rules: [
			{
				id: "trustindex-google-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/widget-google-reviews\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustindex-google-reviews:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/widget-google-reviews/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-eleven",
		name: "Twenty Eleven",
		website: "https://wordpress.org/themes/twentyeleven",
		description: "Twenty Eleven is the default WordPress theme for 2011.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-eleven:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/twentyeleven/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-fifteen",
		name: "Twenty Fifteen",
		website: "https://wordpress.org/themes/twentyfifteen",
		description: "Twenty Fifteen is the default WordPress theme for 2015.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-fifteen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentyfifteen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-fifteen:dom:1",
				kind: "dom",
				selector: "link#twentyfifteen-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-fourteen",
		name: "Twenty Fourteen",
		website: "https://wordpress.org/themes/twentyfourteen",
		description: "Twenty Fourteen is the default WordPress theme for 2014.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-fourteen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentyfourteen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-fourteen:dom:1",
				kind: "dom",
				selector: "link#twentyfourteen-style-css, style#twentyfourteen-lato-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-nineteen",
		name: "Twenty Nineteen",
		website: "https://wordpress.org/themes/twentynineteen",
		description: "Twenty Nineteen is the default WordPress theme for 2019.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-nineteen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentynineteen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-nineteen:dom:1",
				kind: "dom",
				selector: "link#twentynineteen-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-seventeen",
		name: "Twenty Seventeen",
		website: "https://wordpress.org/themes/twentyseventeen",
		description: "Twenty Seventeen is the default WordPress theme for 2017.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-seventeen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentyseventeen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-seventeen:dom:1",
				kind: "dom",
				selector: "link#twentyseventeen-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-seventeen:jsGlobal:2",
				kind: "jsGlobal",
				property: "twentyseventeenScreenReaderText",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-sixteen",
		name: "Twenty Sixteen",
		website: "https://wordpress.org/themes/twentysixteen",
		description: "Twenty Sixteen is the default WordPress theme for 2016.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-sixteen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentysixteen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-sixteen:dom:1",
				kind: "dom",
				selector: "link#twentysixteen-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-ten",
		name: "Twenty Ten",
		website: "https://wordpress.org/themes/twentyten",
		description: "Twenty Ten is the default WordPress theme for 2010.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-ten:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentyten\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-ten:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/twentyten/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-thirteen",
		name: "Twenty Thirteen",
		website: "https://wordpress.org/themes/twentythirteen",
		description: "Twenty Thirteen is the default WordPress theme for 2013.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-thirteen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentythirteen\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-thirteen:dom:1",
				kind: "dom",
				selector: "link#twentythirteen-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twelve",
		name: "Twenty Twelve",
		website: "https://wordpress.org/themes/twentytwelve",
		description: "Twenty Twelve is the default WordPress theme for 2012.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twelve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwelve\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-twelve:dom:1",
				kind: "dom",
				selector: "link#twentytwelve-style-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty",
		name: "Twenty Twenty",
		website: "https://wordpress.org/themes/twentytwenty",
		description: "Twenty Twenty is the default WordPress theme for 2020.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwenty\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-twenty:dom:1",
				kind: "dom",
				selector: "link#twentytwenty-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-twenty:jsGlobal:2",
				kind: "jsGlobal",
				property: "twentytwenty",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty-five",
		name: "Twenty Twenty-Five",
		website: "https://wordpress.org/themes/twentytwentyfive",
		description: "Twenty Twenty-Five is the default WordPress theme for 2025.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty-five:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwentyfive\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-twenty-five:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/twentytwentyfive/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty-four",
		name: "Twenty Twenty-Four",
		website: "https://wordpress.org/themes/twentytwentyfour",
		description: "Twenty Twenty-Four is the default WordPress theme for 2024.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty-four:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwentyfour\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-twenty-four:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/twentytwentyfour/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty-one",
		name: "Twenty Twenty-One",
		website: "https://wordpress.org/themes/twentytwentyone",
		description: "Twenty Twenty-One is the default WordPress theme for 2021.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty-one:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwentyone\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twenty-twenty-one:dom:1",
				kind: "dom",
				selector: "link#twenty-twenty-one-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-twenty-one:jsGlobal:2",
				kind: "jsGlobal",
				property: "twentytwentyoneCollapseMenuOnClickOutside",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "twenty-twenty-one:jsGlobal:3",
				kind: "jsGlobal",
				property: "twentytwentyoneResponsiveEmbeds",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty-three",
		name: "Twenty Twenty-Three",
		website: "https://wordpress.org/themes/twentytwentythree",
		description: "Twenty Twenty-Three is the default WordPress theme for 2023.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty-three:dom:0",
				kind: "dom",
				selector: "style#webfonts-inline-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-twenty-three:text:1",
				kind: "text",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwentythree\\/assets\\/fonts\\/"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "twenty-twenty-three:dom:2",
				kind: "dom",
				selector: "style#wp-webfonts-inline-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "twenty-twenty-two",
		name: "Twenty Twenty-Two",
		website: "https://wordpress.org/themes/twentytwentytwo",
		description: "Twenty Twenty-Two is the default WordPress theme for 2022.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "twenty-twenty-two:dom:0",
				kind: "dom",
				selector: "link#twentytwentytwo-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-twenty-two:dom:1",
				kind: "dom",
				selector: "style#webfonts-inline-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twenty-twenty-two:text:2",
				kind: "text",
				pattern: new RegExp("\\/wp-content\\/themes\\/twentytwentytwo\\/assets\\/fonts\\/"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "twenty-twenty-two:dom:3",
				kind: "dom",
				selector: "style#wp-webfonts-inline-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "ultimate-addons-for-elementor",
		name: "Ultimate Addons for Elementor",
		website: "https://ultimateelementor.com",
		description: "Ultimate Addons for Elementor is a plugin that adds new widgets and modules to the Elementor page builder for WordPress, providing additional design options and functionality.",
		icon: "Ultimate Addons for Elementor.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ultimate-addons-for-elementor:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ultimate-elementor/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ultimate-addons-for-elementor:jsGlobal:1",
				kind: "jsGlobal",
				property: "uael_particles_script.particles_url",
				valuePattern: new RegExp("\\/wp-content\\/plugins\\/ultimate-elementor\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:brainstormforce:ultimate_addons_for_elementor:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"elementor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "ultimate-tables",
		name: "Ultimate Tables",
		website: "https://wphive.com/plugins/ultimate-tables",
		description: "Ultimate Tables is a tool for creating, managing, and designing tables without writing HTML code.",
		icon: "UltimateTables.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ultimate-tables:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ultimate-tables\\/"),
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
		id: "ultimatelysocial",
		name: "UltimatelySocial",
		website: "https://www.ultimatelysocial.com",
		description: "Ultimately Social (Share Buttons & Sharing Icons) is a plugin that allows you to place fancy social media icons and buttons on your WordPress website.",
		icon: "UltimatelySocial.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ultimatelysocial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/ultimate-social-media-icons\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "understrap",
		name: "Understrap",
		website: "https://understrap.com",
		description: "Understrap is a renowned WordPress starter theme framework that combined Underscores and Bootstrap.",
		icon: "Understrap.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "understrap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/themes\\/understrap(?:[masterchild-]+)?(?:[masterchild-]+)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		implies: [
			"bootstrap",
			"underscore-js",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "upsolution-zephyr",
		name: "UpSolution Zephyr",
		website: "https://zephyr.us-themes.com",
		description: "Zephyr is a WordPress theme developed by UpSolution, a software development company based in Ukraine that specialises in creating themes and plugins for WordPress.",
		icon: "UpSolution.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "upsolution-zephyr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/Zephyr\\/.+us\\.theme\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "upsolution-zephyr:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/zephyr\\/.+us\\.theme\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "vertex",
		name: "Vertex",
		website: "https://dessign.net/vertex-theme/",
		description: "Vertex is a responsive and simple theme mostly for portfolio websites or photography and blog sites powered by DessignThemes.",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "vertex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/Vertex\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vertex:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Vertex v\\.([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "vertex:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/vertex\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vertex:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("vertex v\\.([\\d.]+)", "i"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "visual-portfolio",
		name: "Visual Portfolio",
		website: "https://visualportfolio.co",
		description: "Visual Portfolio is a plugin with a robust set of features, designed to help you create galleries that effectively display your creative projects.",
		icon: "Visual Portfolio.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "visual-portfolio:jsGlobal:0",
				kind: "jsGlobal",
				property: "VPData.screenSizes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visual-portfolio:jsGlobal:1",
				kind: "jsGlobal",
				property: "VPData.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "waveme",
		name: "Waveme",
		website: "https://music.flatfull.com/waveme/about/",
		description: "Waveme is a WordPress theme that is suitable for individuals or businesses involved in the music industry, such as music producers, record labels, artist managers, or independent artists.",
		icon: "Waveme.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "waveme:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/waveme/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		implies: [
			"gutenberg",
			"waveform",
			"wordpress-block-editor",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "weaver-xtreme",
		name: "Weaver Xtreme",
		website: "https://weavertheme.com",
		description: "Weaver Xtreme is the orginal options-based WordPress theme.",
		icon: "Weaver Xtreme.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "weaver-xtreme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/weaver-xtreme\\/.+weaverxjslib-end\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "weaver-xtreme:dom:1",
				kind: "dom",
				selector: "link#weaverx-style-sheet-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "weaver-xtreme:jsGlobal:2",
				kind: "jsGlobal",
				property: "weaverxBottomFooter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "weaver-xtreme:jsGlobal:3",
				kind: "jsGlobal",
				property: "weaverxMonitorContent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "weaver-xtreme:jsGlobal:4",
				kind: "jsGlobal",
				property: "weaverxOnResize",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "web-worker-offloading",
		name: "Web Worker Offloading",
		website: "https://wordpress.org/plugins/web-worker-offloading/",
		description: "Performance plugin from the WordPress Performance Team, which offloads JavaScript execution to a Web Worker, improving performance by freeing up the main thread.",
		icon: "web-worker-offloading.svg",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "web-worker-offloading:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^web-worker-offloading ([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "webfactory-maintenance",
		name: "WebFactory Maintenance",
		website: "https://wordpress.org/plugins/maintenance",
		description: "WebFactory Maintenance is a WordPress plugin which allows you to create an maintenance page.",
		icon: "WebFactory.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "webfactory-maintenance:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/maintenance/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "webfactory-maintenance:jsGlobal:1",
				kind: "jsGlobal",
				property: "mtnc_front_options",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "webfactory-under-construction",
		name: "WebFactory Under Construction",
		website: "https://wordpress.org/plugins/under-construction-page",
		description: "WebFactory Under Construction is a WordPress plugin which allows you to create an under construction page.",
		icon: "WebFactory.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "webfactory-under-construction:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/under-construction-page/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "webriti-busiprof",
		name: "Webriti Busiprof",
		website: "https://webriti.com/busiprof-premium-wordpress-theme-1",
		description: "Busiprof is a fully responsive and translation-ready WordPress theme by Webriti.",
		icon: "Webriti.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "webriti-busiprof:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/busiprof(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "webtoffee-stripe-payment-plugin-for-woocommerce",
		name: "WebToffee Stripe Payment Plugin for WooCommerce",
		website: "https://www.webtoffee.com/product/woocommerce-stripe-payment-gateway/",
		description: "WebToffee Stripe Payment Plugin for WooCommerce is a software add-on that allows online retailers using the WooCommerce ecommerce platform to accept payments through the Stripe payment gateway.",
		icon: "WebToffee.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "webtoffee-stripe-payment-plugin-for-woocommerce:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/payment-gateway-stripe-and-woocommerce-integration/']",
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
		implies: [
			"stripe",
			"woocommerce",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wen-themes-education-hub",
		name: "WEN Themes Education Hub",
		website: "https://wenthemes.com/item/wordpress-themes/education-hub",
		description: "WEN Themes Education Hub is a clean and elegant WordPress education theme.",
		icon: "WEN Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wen-themes-education-hub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/education-hub(?:-pro)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wen-themes-education-hub:jsGlobal:1",
				kind: "jsGlobal",
				property: "EducationHubScreenReaderText",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wen-themes-signify-dark",
		name: "WEN Themes Signify Dark",
		website: "https://wenthemes.com/item/wordpress-themes/signify-dark",
		description: "Signify Dark is a free dark blog and corporate WordPress theme that is trendy, responsive, and dynamic by WEN Themes.",
		icon: "WEN Themes.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wen-themes-signify-dark:jsGlobal:0",
				kind: "jsGlobal",
				property: "signifyOptions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "woocommerce-blocks",
		name: "WooCommerce Blocks",
		website: "https://github.com/woocommerce/woocommerce-gutenberg-products-block",
		description: "WooCommerce Blocks offers a range of blocks for the WordPress Block Editor you can use to build and customise your site.",
		icon: "WooCommerce Blocks.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woocommerce-blocks:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/woo-gutenberg-products-block/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:automattic:woocommerce_blocks:*:*:*:*:*:wordpress:*:*",
		},
		implies: [
			"wordpress-block-editor",
		],
		requires: [
			"woocommerce",
			"wordpress",
		],
	},
	{
		id: "woocommerce-multilingual",
		name: "WooCommerce Multilingual",
		website: "https://wordpress.org/plugins/woocommerce-multilingual",
		description: "WooCommerce Multilingual plugin makes it possible to run fully multilingual ecommerce sites using WooCommerce and WPML.",
		icon: "WooCommerce Multilingual.png",
		categories: [
			"wordpress-ecosystem",
			"translations",
		],
		rules: [
			{
				id: "woocommerce-multilingual:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woocommerce-multilingual\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"woocommerce",
			"wordpress",
		],
	},
	{
		id: "woocommerce-paypal-checkout-payment-gateway",
		name: "WooCommerce PayPal Checkout Payment Gateway",
		website: "https://github.com/woocommerce/woocommerce-gateway-paypal-express-checkout",
		description: "WooCommerce PayPal Checkout Payment Gateway is a WordPress plugin which allows you to securely sell your products and subscriptions online using in-context checkout.",
		icon: "WooCommerce PayPal.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woocommerce-paypal-checkout-payment-gateway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woocommerce-gateway-paypal-express-checkout\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "woocommerce-paypal-checkout-payment-gateway:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/woocommerce-gateway-paypal-express-checkout/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
		},
		implies: [
			"paypal",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "woocommerce-paypal-payments",
		name: "WooCommerce PayPal Payments",
		website: "https://github.com/woocommerce/woocommerce-paypal-payments",
		description: "WooCommerce PayPal Payments is a latest WordPress plugin with most complete payment processing solution. Accept PayPal exclusives, credit/debit cards and local payment methods.",
		icon: "WooCommerce PayPal.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woocommerce-paypal-payments:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woocommerce-paypal-payments\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "woocommerce-paypal-payments:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/woocommerce-paypal-payments/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"paypal",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "woocommerce-stripe-payment-gateway",
		name: "WooCommerce Stripe Payment Gateway",
		website: "https://woocommerce.com/products/stripe",
		description: "WooCommerce Stripe Payment Gateway plugin extends WooCommerce allowing you to take payments directly on your store via Stripe’s API.",
		icon: "WooCommerce Stripe Payment Gateway.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woocommerce-stripe-payment-gateway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/woocommerce-gateway-stripe\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "woocommerce-stripe-payment-gateway:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/woocommerce-gateway-stripe/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		implies: [
			"stripe",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "woocommerce-subscriptions",
		name: "WooCommerce Subscriptions",
		website: "https://woocommerce.com/products/woocommerce-subscriptions",
		description: "WooCommerce Subscriptions primarily allows you to create and sell subscription products from your WooCommerce shop.",
		icon: "WooCommerce.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woocommerce-subscriptions:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/woocommerce-subscriptions/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
		},
		implies: [
			"woocommerce",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "woodmart",
		name: "Woodmart",
		website: "https://woodmart.xtemos.com",
		description: "Woodmart is a multipurpose WordPress theme offering for website creation and customization.",
		icon: "Woodmart.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woodmart:jsGlobal:0",
				kind: "jsGlobal",
				property: "woodmartThemeModule",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "woodmart:jsGlobal:1",
				kind: "jsGlobal",
				property: "woodmart_settings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
			cpe: "cpe:2.3:a:xtemos:woodmart:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "woostify",
		name: "Woostify",
		website: "https://woostify.com",
		description: "Woostify is fast, lightweight, responsive and flexible WooCommerce theme built with SEO, speed, and usability in mind.",
		icon: "Woostify.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "woostify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/woostify\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "woostify:jsGlobal:1",
				kind: "jsGlobal",
				property: "woostifyConditionScrolling",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "woostify:jsGlobal:2",
				kind: "jsGlobal",
				property: "woostify_woocommerce_general",
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
		implies: [
			"woocommerce",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wordfence",
		name: "Wordfence",
		website: "https://www.wordfence.com",
		description: "Wordfence is a security plugin for sites that use WordPress. Wordfence includes an endpoint firewall and malware scanner.",
		icon: "Wordfence.svg",
		categories: [
			"wordpress-ecosystem",
			"security",
		],
		rules: [
			{
				id: "wordfence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wordfence\\/.+admin\\.ajaxWatcher\\.\\d+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wordfence:jsGlobal:1",
				kind: "jsGlobal",
				property: "wordfenceAJAXWatcher",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wordfence:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wordfence\\/.+admin\\.ajaxwatcher\\.\\d+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:wordfence:wordfence:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wordfence-login-security",
		name: "Wordfence Login Security",
		website: "https://www.wordfence.com",
		description: "Wordfence Login Security contains a subset of the functionality found in the full Wordfence plugin: Two-factor Authentication, XML-RPC Protection and Login Page CAPTCHA.",
		icon: "Wordfence.svg",
		categories: [
			"wordpress-ecosystem",
			"security",
		],
		rules: [
			{
				id: "wordfence-login-security:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wordfence\\/.+login\\.\\d+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "wordpress-default",
		name: "WordPress Default",
		website: "https://wordpress.org/themes/default",
		description: "WordPress Default is a default WordPress theme.",
		icon: "WordPress.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wordpress-default:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/default\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wordpress-default:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/default/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wordpress-popular-posts",
		name: "WordPress Popular Posts",
		website: "https://wordpress.org/plugins/wordpress-popular-posts/",
		description: "WordPress Popular Posts is a plugin for the WordPress content management system that allows users to display a widget or shortcode featuring a list of the most popular posts on their website based on criteria such as pageviews or comments.",
		icon: "WordPress Popular Posts.svg",
		categories: [
			"wordpress-ecosystem",
			"widgets-misc",
		],
		rules: [
			{
				id: "wordpress-popular-posts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wordpress-popular-posts\\/.+wpp\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:wordpress_popular_posts_project:wordpress_popular_posts:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-automatic",
		name: "WP Automatic",
		website: "https://wpautomatic.com",
		description: "WP Automatic is a WordPress plugin that automates the process of creating posts on your WordPress site by automatically fetching content from various sources like RSS feeds, Amazon, eBay, ClickBank, and more.",
		icon: "WP Automatic.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-automatic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-automatic\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-courseware",
		name: "WP Courseware",
		website: "https://flyplugins.com/wp-courseware-wordpress-lms",
		description: "WP Courseware is an LMS plugin that allows novice and professional users to build online courses using its easy-to-use drag and drop course builder.",
		icon: "WP Courseware.svg",
		categories: [
			"wordpress-ecosystem",
			"content-publishing",
		],
		rules: [
			{
				id: "wp-courseware:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-courseware\\/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-courseware:jsGlobal:1",
				kind: "jsGlobal",
				property: "wpcw_course_note_params.api_url",
				valuePattern: new RegExp("\\/wp-json\\/wpcw\\/"),
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
		id: "wp-fastest-cache",
		name: "WP Fastest Cache",
		website: "https://www.wpfastestcache.com",
		description: "WP Fastest Cache is one of a number of plugins for WordPress designed to accelerate the performance of your website.",
		icon: "WP Fastest Cache.png",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "wp-fastest-cache:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/cache\\/wpfc-minified\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-fastest-cache:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/cache/wpfc-minified/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wp-fastest-cache:jsGlobal:2",
				kind: "jsGlobal",
				property: "Wpfcll",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:wpfastestcache:wp_fastest_cache:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-featherlight",
		name: "WP Featherlight",
		website: "https://wordpress.org/plugins/wp-featherlight",
		description: "WP Featherlight is a WordPress lightbox plugin for adding a minimal, high-performance, responsive jQuery lightbox to your WordPress website.",
		icon: "WP_Featherlight.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-featherlight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wpFeatherlight\\.pkgd\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-featherlight:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wpfeatherlight\\.pkgd\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-google-map-embed",
		name: "WP Google Map Embed",
		website: "https://wpgooglemap.com",
		description: "WP Google Map Embed is a lightweight WordPress plugin for embedding Google Maps with custom markers via shortcodes in posts, pages, and sidebars.",
		icon: "WP Google Map Embed.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-google-map-embed:dom:0",
				kind: "dom",
				selector: "link#wp-gmap-embed-front-css-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		implies: [
			"google-maps",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-google-map-plugin",
		name: "WP Google Map Plugin",
		website: "https://www.wpmapspro.com",
		description: "WP Google Map Plugin allows you to create google maps shortcodes to display responsive google maps on pages, widgets and custom templates.",
		icon: "WP Google Map Plugin.png",
		categories: [
			"wordpress-ecosystem",
			"maps-location",
		],
		rules: [
			{
				id: "wp-google-map-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-google-map-plugin\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-google-map-plugin:jsGlobal:1",
				kind: "jsGlobal",
				property: "wpgmp_local",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		implies: [
			"google-maps",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-grid-builder",
		name: "WP Grid Builder",
		website: "https://wpgridbuilder.com",
		description: "WP Grid Builder is a WordPress plugin that enables the creation of advanced grid layouts.",
		icon: "WpGridBuilder.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-grid-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-grid-builder\\/frontend\\/assets\\/js\\/layout\\.js\\?ver=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-grid-builder:jsGlobal:1",
				kind: "jsGlobal",
				property: "WP_Grid_Builder",
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
		id: "wp-job-openings",
		name: "WP Job Openings",
		website: "https://wpjobopenings.com",
		description: "WP Job Openings is a job listing and recruitment plugin for WordPress websites.",
		icon: "WP Job Openings.svg",
		categories: [
			"wordpress-ecosystem",
			"business-tools",
		],
		rules: [
			{
				id: "wp-job-openings:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-job-openings\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-job-openings:jsGlobal:1",
				kind: "jsGlobal",
				property: "awsmJobs",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:awsm:wp_job_openings:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-live-visitor-counter",
		name: "WP Live Visitor Counter",
		website: "https://wordpress.org/plugins/wp-visitors-widget/",
		description: "WP Live Visitor Counter is a WordPress plugin that displays the number of online visitors on a website in real-time.",
		icon: "default.svg",
		categories: [
			"wordpress-ecosystem",
			"widgets-misc",
		],
		rules: [
			{
				id: "wp-live-visitor-counter:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/wp-visitors-widget/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-maintenance-mode",
		name: "WP Maintenance Mode",
		website: "https://github.com/andrianvaleanu/WP-Maintenance-Mode",
		description: "WP Maintenance Mode is a WordPress plugin which add a maintenance page to your blog.",
		icon: "WP Maintenance Mode.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-maintenance-mode:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-maintenance-mode\\/.+wpmm\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-maintenance-mode:jsGlobal:1",
				kind: "jsGlobal",
				property: "wpmm_vars",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-portfolio",
		name: "WP Portfolio",
		website: "https://wpportfolio.net",
		description: "WP Portfolio is a premium standalone WordPress plugin designed for creating and showcasing portfolios.",
		icon: "WP Portfolio.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-portfolio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/astra-portfolio\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"onetime",
				"recurring",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-puzzle-basic",
		name: "WP Puzzle Basic",
		website: "https://wp-puzzle.com/basic",
		description: "WP Puzzle Basic is fully responsive, clean and minimal WordPress theme.",
		icon: "WP Puzzle.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-puzzle-basic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/basic\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-optimize",
		name: "WP-Optimize",
		website: "https://getwpo.com",
		description: "WP-Optimize is an all-in-one WordPress plugin that cleans your database, compresses your large images and caches your site.",
		icon: "WP-Optimize.png",
		categories: [
			"wordpress-ecosystem",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "wp-optimize:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+Cached by WP-Optimize"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "wp-optimize:html:1",
				kind: "html",
				pattern: new RegExp("<!--[^>]+cached by wp-optimize"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
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
		id: "wp-pagenavi",
		name: "WP-PageNavi",
		website: "https://github.com/lesterchan/wp-pagenavi",
		description: "WP-PageNavi is a WordPress plugin which adds a more advanced paging navigation interface to your WordPress blog.",
		icon: "WP-PageNavi.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-pagenavi:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/wp-pagenavi/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-royal-ashe",
		name: "WP-Royal Ashe",
		website: "https://wp-royal.com/themes/item-ashe-free",
		description: "WP-Royal Ashe is a personal and multi-author WordPress blog theme.",
		icon: "WP-Royal.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-royal-ashe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/ashe(?:-pro-premium)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-royal-ashe:dom:1",
				kind: "dom",
				selector: "link#ashe-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wp-royal-ashe:jsGlobal:2",
				kind: "jsGlobal",
				property: "ashePreloader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wp-royal-ashe:jsGlobal:3",
				kind: "jsGlobal",
				property: "asheStickySidebar",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wp-royal-bard",
		name: "WP-Royal Bard",
		website: "https://wp-royal.com/themes/item-bard-free",
		description: "WP-Royal Bard is a personal and multi-author WordPress blog theme.",
		icon: "WP-Royal.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wp-royal-bard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/bard(?:-pro-premium)?\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wp-royal-bard:dom:1",
				kind: "dom",
				selector: "link#bard-style-css, style#bard_predefined_custom_css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wpforms",
		name: "WPForms",
		website: "https://wpforms.com",
		description: "WPForms is a drag and drop WordPress form builder.",
		icon: "WPForms.svg",
		categories: [
			"wordpress-ecosystem",
			"surveys-feedback",
		],
		rules: [
			{
				id: "wpforms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wpforms(?:-lite)?\\/.+(?:frontend\\.min|wpforms)\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wpforms:jsGlobal:1",
				kind: "jsGlobal",
				property: "wpforms",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wpforms:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpforms_settings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:wpforms:wpforms:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wpml",
		name: "WPML",
		website: "https://wpml.org/",
		description: "WPML plugin makes it possible to build and run fully multilingual WordPress sites.",
		icon: "WPML.svg",
		categories: [
			"wordpress-ecosystem",
			"translations",
		],
		rules: [
			{
				id: "wpml:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/sitepress-multilingual-cms\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wpml:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^wp\\-wpml_current_language$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "wpml:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^WPML\\sver\\:([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "wpml:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^wpml\\sver\\:([\\d\\.]+)", "i"),
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
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:wpml:wpml:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "wpmu-dev-smush",
		name: "WPMU DEV Smush",
		website: "https://wpmudev.com/project/wp-smush-pro",
		description: "WPMU DEV Smush is a WordPress plugin that allows you to optimise images without losing quality.",
		icon: "WPMU DEV.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wpmu-dev-smush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/wp-smushit(?:-pro)?\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
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
		id: "wps-visitor-counter",
		name: "WPS Visitor Counter",
		website: "https://wordpress.org/plugins/wps-visitor-counter/",
		description: "WPS Visitor Counter is a plugin for WordPress that counts the number of visitors to a website.",
		icon: "WPS Visitor Counter.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "wps-visitor-counter:jsGlobal:0",
				kind: "jsGlobal",
				property: "wpspagevisit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "xtra",
		name: "Xtra",
		website: "https://xtratheme.com",
		description: "Xtra is a creative, responsive, live drag and drop and easy-to-use WordPress theme for any kind of websites.",
		icon: "Xtra.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "xtra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/xtra\\/.+custom\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xtra:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/themes/xtra/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "xyzscripts",
		name: "XYZScripts",
		website: "https://xyzscripts.com",
		description: "XYZScripts is a provider of PHP clone scripts and WordPress plugins. It offers top-quality PHP and MySQL scripts to help build online businesses, with ready-to-deploy solutions that enable website setup.",
		icon: "XYZScripts.svg",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "xyzscripts:dom:0",
				kind: "dom",
				selector: "a[href*='xyzscripts.com/'] + a[href*='www.xyzscripts.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yoast-duplicate-post",
		name: "Yoast Duplicate Post",
		website: "https://wordpress.org/plugins/duplicate-post",
		description: "Yoast Duplicate Post is a WordPress plugin which allows users to clone posts of any type, or copy them to new drafts for further editing.",
		icon: "Yoast SEO.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "yoast-duplicate-post:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/duplicate-post/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "zakeke-interactive-product-designer",
		name: "Zakeke Interactive Product Designer",
		website: "https://www.zakeke.com",
		description: "Zakeke Interactive Product Designer allows customers to personalize any product and visualise how they’ll look before checking out.",
		icon: "Zakeke.png",
		categories: [
			"wordpress-ecosystem",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "zakeke-interactive-product-designer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/zakeke-interactive-product-designer\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
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
				"low",
				"recurring",
			],
		},
		implies: [
			"zakeke",
		],
		requires: [
			"woocommerce",
		],
	},
	{
		id: "zakra",
		name: "Zakra",
		website: "https://zakratheme.com",
		description: "Zakra is flexible, fast, lightweight and modern multipurpose WordPress theme that comes with many starter free sites.",
		icon: "Zakra.png",
		categories: [
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "zakra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/themes\\/zakra\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zakra:dom:1",
				kind: "dom",
				selector: "link#zakra-style-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "zakra:jsGlobal:2",
				kind: "jsGlobal",
				property: "zakraFrontend",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zakra:jsGlobal:3",
				kind: "jsGlobal",
				property: "zakraNavHelper.dimension",
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
		},
		requires: [
			"wordpress",
		],
	},
] as const satisfies readonly TechnologyDefinition[];
