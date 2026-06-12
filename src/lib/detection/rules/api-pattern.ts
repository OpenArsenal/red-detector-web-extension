import type { TechnologyDefinition } from '../types';

export const apiPatternTechnologyDefinitions = [
	{
		id: "amplify-js",
		name: "Amplify JS",
		website: "https://amplifyjs.com/",
		description: "AmplifyJS is a set of components designed to solve common web application problems with a simplistic API. Amplify's goal is to simplify all forms of data handling by providing a unified API for various data sources.",
		icon: "Amplify JS.png",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "amplify-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?amplify(?:-production)?(?:\\.core)?(?:\\.store)?(?:\\.min)?(?:[-\\.][\\d\\w]{0,40})?\\.js"),
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
		id: "anime-js",
		name: "anime.js",
		website: "https://animejs.com/",
		description: "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects.",
		icon: "anime.js.svg",
		categories: [
			"api-pattern",
			"animation",
			"graphics-visualization"
		],
		rules: [
			{
				id: "anime-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "AnimeJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "anime-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "anime.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "anime-js:responseHeader:2",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("animejs\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "api-spreadsheets",
		name: "API Spreadsheets",
		website: "https://apispreadsheets.com",
		description: "API Spreadsheets is a developer tool for integrating spreadsheet features into applications, enabling data management, automation, and real-time updates.",
		icon: "APISpreadsheets.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "api-spreadsheets:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.apispreadsheets\\.com"),
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
		id: "apiary",
		name: "Apiary",
		website: "https://apiary.io",
		description: "Apiary is an API design stack that provides tools for designing, testing, and documenting APIs, built specifically to support developers throughout the API development process.",
		icon: "Apiary.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "apiary:pageGlobal:0",
				kind: "pageGlobal",
				property: "Apiary",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apiary:pageGlobal:1",
				kind: "pageGlobal",
				property: "apiaryUserModel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apiary:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Apiary$"),
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
		id: "bowser",
		name: "bowser",
		website: "https://opencollective.com/bowser",
		description: "A small, fast and rich-API browser/platform/engine detector for both browser and node.",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "bowser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?bowser(?:\\.min)?(?:[-\\.][\\d\\w]{0,64})?\\.js"),
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
		id: "dimple",
		name: "dimple",
		website: "http://dimplejs.org/",
		description: "dimple.js is a powerful and flexible open-source charting API for d3 letting you quickly and easily create and combine bar, line, area and scatter charts.",
		categories: [
			"api-pattern",
			"graphics-visualization",
			"developer-tooling"
		],
		rules: [
			{
				id: "dimple:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dimple(?:\\/lib\\/[\\w\\.]+)?(?:\\/theme\\/js\\/[\\w\\.-]+)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"d3"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "feednami",
		name: "Feednami",
		website: "https://toolkit.sekando.com/docs/en/feednami",
		description: "Feednami is a web service developed as a replacement for the discontinued Google Feed API, enabling applications to access and parse RSS and Atom feeds.",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "feednami:pageGlobal:0",
				kind: "pageGlobal",
				property: "feednami.load",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "feednami:pageGlobal:1",
				kind: "pageGlobal",
				property: "feednami.promiseLoaded",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fixer",
		name: "Fixer",
		website: "https://fixer.io",
		description: "Fixer is a lightweight JSON API that provides current and historical foreign exchange rates and supports currency conversion.",
		icon: "Fixer.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "fixer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.fixer\\.io/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fresco",
		name: "Fresco",
		website: "https://github.com/staaky/fresco",
		description: "Fresco is a responsive lightbox. Fresco comes with thumbnail support, fullscreen zoom, Youtube and Vimeo integration for HTML5 video and a powerful Javascript API.",
		icon: "default.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "fresco:pageGlobal:0",
				kind: "pageGlobal",
				property: "Fresco.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "genezio",
		name: "genezio",
		website: "https://genez.io",
		description: "Genezio is a code generation tool that facilitates app logic focus, organises backend API code in deployable classes, autogenerates class interfaces with JSON-RPC for typesafe API calls, supports REST and Webhooks, enables simple API code deployment on pre-configured infrastructure using a shell command, and provides an SDK that eliminates the need to handle URLs, headers.",
		icon: "genezio.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "genezio:responseHeader:0",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("^genezio$"),
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
		id: "hexia",
		name: "Hexia",
		website: "https://sdk.hexia.io",
		description: "Hexia is a public Application Programming Interface (API) provided by Hex Technologies for accessing its services and data.",
		icon: "Hexia.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "hexia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.hexia\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hexia:pageGlobal:1",
				kind: "pageGlobal",
				property: "hexia.address",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "howler-js",
		name: "Howler.js",
		website: "https://howlerjs.com",
		description: "Howler.js is an audio library with support for the Web Audio API and a fallback mechanism for HTML5 Audio.",
		icon: "Howler.js.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "howler-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("howler@([\\d.]+)/dist/howler\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "howler-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("howler/([\\d.]+)/howler(?:\\.core)?\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "howler-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Howler",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "howler-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "HowlerGlobal",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "htmx",
		name: "Htmx",
		website: "https://htmx.org",
		description: "Htmx is a JavaScript library for performing AJAX requests, triggering CSS transitions, and invoking WebSocket and server-sent events directly from HTML elements.",
		icon: "Htmx.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "htmx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/htmx\\.org@([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "htmx:dom:1",
				kind: "dom",
				selector: "script[data-src*='/dist/htmx.min.js']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "htmx:pageGlobal:2",
				kind: "pageGlobal",
				property: "htmx",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "intersection-observer",
		name: "Intersection Observer",
		website: "https://www.w3.org/TR/intersection-observer",
		description: "Intersection Observer is a browser API that provides a way to observe the visibility and position of a DOM element relative to the containing root element or viewport.",
		icon: "W3C.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "intersection-observer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.jsdelivr\\.net/npm/intersection-observer@([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "intersection-observer:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/assets/(?:.+)?intersection-observer\\.[\\d\\w\\.]+\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "kuroco",
		name: "Kuroco",
		website: "https://kuroco.app",
		description: "Kuroco is an API-centric platform that enables developers to create customizable APIs, manage content, and leverage a CDN for fast content delivery across various devices.",
		icon: "Kuroco.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "kuroco:responseHeader:0",
				kind: "responseHeader",
				key: "x-kuroco-edge-log",
				description: "Response header matches a known technology marker."
			},
			{
				id: "kuroco:responseHeader:1",
				kind: "responseHeader",
				key: "x-rcms-hash",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "moxie",
		name: "mOxie",
		website: "https://github.com/moxiecode/moxie",
		description: "mOxie is a library providing polyfills for XHR2 and File API, ensuring compatibility with older browsers that lack native support.",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "moxie:pageGlobal:0",
				kind: "pageGlobal",
				property: "mOxie",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moxie:pageGlobal:1",
				kind: "pageGlobal",
				property: "moxie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"low",
				"recurring"
			]
		}
	},
	{
		id: "plupload",
		name: "Plupload",
		website: "https://plupload.com",
		description: "Plupload is a JavaScript API for dealing with file uploads.",
		icon: "Plupload.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "plupload:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plupload(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plupload:pageGlobal:1",
				kind: "pageGlobal",
				property: "plupload.DONE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "plupload:pageGlobal:2",
				kind: "pageGlobal",
				property: "plupload.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			],
			cpe: "cpe:2.3:a:plupload:plupload:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "riot-js",
		name: "Riot.js",
		website: "https://riot.js.org",
		description: "Riot.js is a minimalistic, component-based UI library that enables developers to create custom elements in modern browsers with a small footprint and simple API.",
		icon: "Riot.js.svg",
		categories: [
			"api-pattern",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "riot-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("riot(?:\\+compiler)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "riot-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "riot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "riot-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "riot.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:riot.js:riot-compiler:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "scalar",
		name: "Scalar",
		website: "https://scalar.com",
		description: "Scalar is a platform that offers tools for API documentation, testing, and discovery, with strong support for OpenAPI standards.",
		icon: "Scalar.svg",
		categories: [
			"api-pattern",
			"content-publishing",
			"developer-tooling"
		],
		rules: [
			{
				id: "scalar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/@scalar/api-reference@(\\d+\\.\\d+\\.\\d+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "scalar:dom:1",
				kind: "dom",
				selector: "div[class*='scalar-api-reference']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"vue-js",
			"typescript"
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
		id: "screenfull-js",
		name: "Screenfull.js",
		website: "https://sindresorhus.com/screenfull/",
		description: "Simple wrapper for cross-browser usage of the JavaScript Fullscreen API.",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "screenfull-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("screenfull(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "screenfull-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?screenfull(?:\\.min)?\\.js"),
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
		id: "sheety",
		name: "Sheety",
		website: "https://sheety.co/",
		description: "Sheety is a service that transforms your Google Sheet into an API, enabling easy access to your data for integration with other applications.",
		icon: "Sheety.svg",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "sheety:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sheety\\.co/"),
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
		id: "sockjs",
		name: "SockJS",
		website: "https://github.com/sockjs/sockjs-client",
		description: "SockJS is a browser-based JavaScript library that offers a WebSocket-like communication interface for applications.",
		icon: "SockJS.png",
		categories: [
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "sockjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sockjs(?:-((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sockjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?sockjs(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sockjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "SockJS.CLOSED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sockjs:pageGlobal:3",
				kind: "pageGlobal",
				property: "SockJS.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
