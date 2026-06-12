import type { TechnologyDefinition } from '../types';

export const animationTechnologyDefinitions = [
	{
		id: "animate-css",
		name: "Animate.css",
		website: "https://animate.style",
		description: "Animate.css is a ready-to-use library collection of CSS3 animation effects.",
		icon: "Animate.css.svg",
		categories: [
			"animation",
			"component-library",
			"styling-library"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "aos",
		name: "AOS",
		website: "https://michalsnik.github.io/aos/",
		description: "JavaScript library to animate elements on your page as you scroll.",
		icon: "AOS.svg",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "aos:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com/aos@([\\d\\.]+)/dist/aos\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aos:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/typo3conf/ext/udem_vendor/Resources/Public/aos-([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aos:dom:2",
				kind: "dom",
				selector: " body[data-aos-easing]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "aos:pageGlobal:3",
				kind: "pageGlobal",
				property: "AOS.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aos:pageGlobal:4",
				kind: "pageGlobal",
				property: "AOS.refresh",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aos:pageGlobal:5",
				kind: "pageGlobal",
				property: "AOS.refreshHard",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aos:responseHeader:6",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^AdministerAOS"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "easy-pie-chart",
		name: "Easy Pie Chart",
		website: "https://rendro.github.io/easy-pie-chart/",
		description: "Lightweight jQuery plugin to render and animate nice pie charts with the HTML5 canvas element.",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "easy-pie-chart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[Ee]asy-?[Pp]ie-?[Cc]hart(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "gsap",
		name: "GSAP",
		website: "https://greensock.com/gsap",
		description: "GSAP is an animation library that allows you to create animations with JavaScript.",
		icon: "GSAP.svg",
		categories: [
			"animation",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "gsap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("TweenMax(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gsap:pageGlobal:1",
				kind: "pageGlobal",
				property: "TweenLite.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gsap:pageGlobal:2",
				kind: "pageGlobal",
				property: "TweenMax.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gsap:pageGlobal:3",
				kind: "pageGlobal",
				property: "gsap.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gsap:pageGlobal:4",
				kind: "pageGlobal",
				property: "gsapVersions",
				description: "Page-owned global matches a known technology marker."
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
		id: "jquery",
		name: "jQuery",
		website: "https://jquery.com",
		description: "jQuery is a JavaScript library which is a free, open-source software designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
		icon: "jQuery.svg",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "jquery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery(?:-(\\d+\\.\\d+\\.\\d+))[/.-]"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/(\\d+\\.\\d+\\.\\d+)/jquery(?!\\.popupoverlay\\.js|(?:\\.[\\w-]*)*fancybox)[/.-][^u]"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery:pageGlobal:3",
				kind: "pageGlobal",
				property: "$.fn.jquery",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery:pageGlobal:4",
				kind: "pageGlobal",
				property: "jQuery.fn.jquery",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery:pageGlobal:5",
				kind: "pageGlobal",
				property: "jQuery.prototype.jquery",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:jquery:jquery:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "moofx",
		name: "Moofx",
		website: "https://github.com/kamicane/moofx",
		description: "Moofx is a CSS3-enabled JavaScript animation library for creating and managing lightweight, hardware-accelerated animations.",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "moofx:pageGlobal:0",
				kind: "pageGlobal",
				property: "moofx.parse",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "morphext",
		name: "Morphext",
		website: "https://morphext.fyianlai.com/",
		description: "Morphext is a lightweight jQuery plugin that rotates text using Animate.css transitions for smooth, dynamic visual effects.",
		icon: "Morphext.svg",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "morphext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("morphext(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		id: "popmotion",
		name: "Popmotion",
		website: "https://popmotion.io",
		description: "Popmotion is a collection of low-level JavaScript animation functions and utils for advanced animators.",
		icon: "Popmotion.svg",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "popmotion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("popmotion\\.global\\.min\\.js(?:\\?ver=\\d+\\.\\d+)?"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "popmotion:pageGlobal:1",
				kind: "pageGlobal",
				property: "popmotion",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rive",
		name: "Rive",
		website: "https://rive.app",
		description: "Rive is a real-time interactive design and animation tool.",
		icon: "Rive.svg",
		categories: [
			"animation",
			"graphics-visualization"
		],
		rules: [
			{
				id: "rive:dom:0",
				kind: "dom",
				selector: "link[href*='rive.app/'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "rive:pageGlobal:1",
				kind: "pageGlobal",
				property: "rive.Rive",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "snabbt",
		name: "Snabbt",
		website: "https://daniel-lundin.github.io/snabbt.js/",
		description: "Minimalistic animation library in javascript Snabbt.js.",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "snabbt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?snabbt(?:[\\.-]min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snabbt:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("snabbt(?:[\\.-]min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
		id: "tdesign",
		name: "TDesign",
		website: "https://tdesign.tencent.com",
		description: "TDesign launched by Tencent contains rich and reusable design component resources, such as color system, text system, motion design, etc.",
		icon: "TDesign.svg",
		categories: [
			"animation",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "tdesign:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tdesign\\.gtimg\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tdesign:dom:1",
				kind: "dom",
				selector: ".t-button__text, .t-layout",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tempus",
		name: "Tempus",
		website: "https://github.com/darkroomengineering/tempus",
		description: "Tempus is a lightweight animation frame manager for JavaScript applications, designed to optimize timing and control of visual updates.",
		icon: "Tempus.svg",
		categories: [
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "tempus:pageGlobal:0",
				kind: "pageGlobal",
				property: "tempusVersion",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "theatre-js",
		name: "Theatre.js",
		website: "https://www.theatrejs.com",
		description: "Theatre.js is a javascript animation library with a professional motion design toolset.",
		icon: "Theatre.js.svg",
		categories: [
			"animation",
			"graphics-visualization"
		],
		rules: [
			{
				id: "theatre-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "__TheatreJS_CoreBundle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "theatre-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "__TheatreJS_CoreBundle.version",
				valuePattern: new RegExp("((?:\\d+\\.)+\\d+)"),
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
		id: "wow",
		name: "WOW",
		website: "https://www.delac.io/WOW",
		description: "Reveal CSS animation as you scroll down a page.",
		categories: [
			"animation",
			"ui-library",
			"framework",
			"graphics-visualization"
		],
		rules: [
			{
				id: "wow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wow(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"low",
				"onetime"
			]
		}
	}
] as const satisfies readonly TechnologyDefinition[];
