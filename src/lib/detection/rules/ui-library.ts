import type { TechnologyDefinition } from '../types';

export const uiLibraryTechnologyDefinitions = [
	{
		id: "adobe-client-data-layer",
		name: "Adobe Client Data Layer",
		website: "https://github.com/adobe/adobe-client-data-layer",
		description: "Adobe Client Data Layer is a framework of JavaScript objects on your site that contains all variable values used in your implementation.",
		icon: "Adobe.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "adobe-client-data-layer:pageGlobal:0",
				kind: "pageGlobal",
				property: "adobeDataLayer.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
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
		id: "ajax-net-professional",
		name: "Ajax.NET Professional",
		website: "https://github.com/michaelschwarz/Ajax.NET-Professional",
		description: "Ajax.NET Professional is a legacy framework that generates JavaScript proxies to call .NET server-side methods via AJAX.",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "ajax-net-professional:pageGlobal:0",
				kind: "pageGlobal",
				property: "AjaxPro",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ajax-net-professional:pageGlobal:1",
				kind: "pageGlobal",
				property: "AjaxPro.version",
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
		id: "alertifyjs",
		name: "AlertifyJS",
		website: "https://alertifyjs.com",
		description: "AlertifyJS is a javascript framework for developing browser dialogs and notifications.",
		icon: "AlertifyJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "alertifyjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/alertify/alertify\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alertifyjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "alertify.defaults.autoReset",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "alloyui",
		name: "AlloyUI",
		website: "https://www.alloyui.com",
		icon: "AlloyUI.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "alloyui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://cdn\\.alloyui\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alloyui:pageGlobal:1",
				kind: "pageGlobal",
				property: "AUI",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"bootstrap",
			"yui"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "alpine-js",
		name: "Alpine.js",
		website: "https://alpinejs.dev",
		description: "Alpine.js is a minimal framework for composing behavior directly in your markup.",
		icon: "Alpine.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "alpine-js:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+[^\\w-]x-data[^\\w-][^<]+"),
				confidence: 75,
				description: "HTML contains a known technology marker."
			},
			{
				id: "alpine-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/alpine(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "alpine-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Alpine",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "alpine-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "Alpine.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "alpine-js:pageGlobal:4",
				kind: "pageGlobal",
				property: "deferLoadingAlpine",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "amp",
		name: "AMP",
		website: "https://www.amp.dev",
		description: "AMP, originally created by Google, is an open-source HTML framework developed by the AMP open-source Project. AMP is designed to help webpages load faster.",
		icon: "Accelerated-Mobile-Pages.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "amp:html:0",
				kind: "html",
				pattern: new RegExp("<html[^>]* (?:amp|⚡)[^-]"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "amp:html:1",
				kind: "html",
				pattern: new RegExp("<link rel=\"amphtml\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "amp:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.ampproject\\.org"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:3",
				kind: "pageGlobal",
				property: "AMP_CONFIG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:4",
				kind: "pageGlobal",
				property: "AMP_EXP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:5",
				kind: "pageGlobal",
				property: "__AMP_BASE_CE_CLASS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:6",
				kind: "pageGlobal",
				property: "__AMP_EXTENDED_ELEMENTS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:7",
				kind: "pageGlobal",
				property: "__AMP_TAG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:8",
				kind: "pageGlobal",
				property: "ampInaboxIframes",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amp:pageGlobal:9",
				kind: "pageGlobal",
				property: "ampInaboxPendingMessages",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "angular",
		name: "Angular",
		website: "https://angular.io",
		description: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.",
		icon: "Angular.svg",
		categories: [
			"ui-library",
			"transpiler",
			"framework"
		],
		rules: [
			{
				id: "angular:pageGlobal:1",
				kind: "pageGlobal",
				property: "getAllAngularRootElements",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "angular:pageGlobal:2",
				kind: "pageGlobal",
				property: "getAngularTestability",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "angular:pageGlobal:3",
				kind: "pageGlobal",
				property: "ng.coreTokens",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "angular:pageGlobal:4",
				kind: "pageGlobal",
				property: "ng.probe",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"typescript"
		],
		excludes: [
			"angulardart",
			"angularjs"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:angularjs:angular:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "angular-gridster",
		name: "Angular Gridster",
		website: "https://tiberiuzuld.github.io/angular-gridster2/",
		description: "Gridster is a JavaScript library, with a simple drag-and-drop interface, for creating intuitive, dynamic and customizable layouts in web applications.",
		icon: "Angular.svg",
		categories: [
			"ui-library",
			"graphics-visualization",
			"developer-tooling"
		],
		rules: [
			{
				id: "angular-gridster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("angular-gridster(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "angular-material",
		name: "Angular Material",
		website: "https://material.angularjs.org",
		description: "Angular Material is a UI component library for Angular JS developers. Angular Material components assist in constructing attractive, consistent, and functional web pages and web applications.",
		icon: "AngularJS.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "angular-material:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d.rc-]+)?/angular-material(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "angular-material:pageGlobal:1",
				kind: "pageGlobal",
				property: "ngMaterial",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"angularjs"
		],
		excludes: [
			"material-design-lite"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "angularjs",
		name: "AngularJS",
		website: "https://angularjs.org",
		description: "AngularJS is a JavaScript-based open-source web application framework led by the Angular Team at Google.",
		icon: "AngularJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "angularjs:html:0",
				kind: "html",
				pattern: new RegExp("<(?:div|html)[^>]+ng-app="),
				description: "HTML contains a known technology marker."
			},
			{
				id: "angularjs:html:1",
				kind: "html",
				pattern: new RegExp("<ng-app"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "angularjs:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("angular[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "angularjs:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d.]+(?:-?rc[.\\d]*)*)/angular(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "angularjs:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("(?!angular\\.io)\\bangular.{0,32}\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "angularjs:pageGlobal:5",
				kind: "pageGlobal",
				property: "angular",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "angularjs:pageGlobal:6",
				kind: "pageGlobal",
				property: "angular.version.full",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		excludes: [
			"angular",
			"angulardart"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:angularjs:angular.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ant-design",
		name: "Ant Design",
		website: "https://ant.design",
		description: "Ant Design is a UI library that can be used with data flow solutions and application frameworks in any React ecosystem.",
		icon: "Ant Design.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "ant-design:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]*class=\"ant-(?:btn|col|row|layout|breadcrumb|menu|pagination|steps|select|cascader|checkbox|calendar|form|input-number|input|mention|rate|radio|slider|switch|tree-select|time-picker|transfer|upload|avatar|badge|card|carousel|collapse|list|popover|tooltip|table|tabs|tag|timeline|tree|alert|modal|message|notification|progress|popconfirm|spin|anchor|back-top|divider|drawer)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "ant-design:html:1",
				kind: "html",
				pattern: new RegExp("<i class=\"anticon anticon-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "ant-design:pageGlobal:3",
				kind: "pageGlobal",
				property: "__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ant-design:pageGlobal:4",
				kind: "pageGlobal",
				property: "antd.version",
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
		id: "apollo",
		name: "Apollo",
		website: "https://www.apollographql.com",
		description: "Apollo is a fully-featured caching GraphQL client with integrations for React, Angular, and more.",
		icon: "Apollo.svg",
		categories: [
			"ui-library",
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "apollo:dom:0",
				kind: "dom",
				selector: "script#__APOLLO_STATE__",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "apollo:pageGlobal:1",
				kind: "pageGlobal",
				property: "__APOLLO_CLIENT__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apollo:pageGlobal:2",
				kind: "pageGlobal",
				property: "__APOLLO_CLIENT__.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apollo:pageGlobal:3",
				kind: "pageGlobal",
				property: "__NEXT_DATA__.props.pageProps.__APOLLO_STATE__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apollo:responseHeader:4",
				kind: "responseHeader",
				key: "Access-Control-Allow-Headers",
				valuePattern: new RegExp("^x-apollo-tracing"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"graphql",
			"typescript-confidence-50"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "arco-design-vue",
		name: "Arco Design Vue",
		website: "https://arco.design",
		description: "Arco Design is a set of open-source UI Components for Vue, aiming to address experience issues in products.",
		icon: "ArcoDesign.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "arco-design-vue:dom:0",
				kind: "dom",
				selector: "link[href*='arcodesign'], link[href*='arco-design'], body[arco-theme], section[class*='arco-layout']",
				description: "DOM selector matches a known technology marker."
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
		id: "aurelia",
		name: "Aurelia",
		website: "https://aurelia.io",
		description: "Aurelia is an open-source UI JavaScript framework designed to create single page applications.",
		icon: "Aurelia.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "aurelia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/aurelia[\\d\\w\\-\\.]+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aurelia:dom:1",
				kind: "dom",
				selector: "div[aurelia-app], body[aurelia-app], a[au-target-id]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "aurelia:pageGlobal:2",
				kind: "pageGlobal",
				property: "_aureliaConfigureModuleLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aurelia:pageGlobal:3",
				kind: "pageGlobal",
				property: "localAurelia",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "backbone-js",
		name: "Backbone.js",
		website: "https://backbonejs.org",
		description: "BackboneJS is a JavaScript library that allows to develop and structure the client side applications that run in a web browser.",
		icon: "Backbone.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "backbone-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("backbone.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "backbone-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Backbone",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "backbone-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Backbone.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"underscore-js"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:backbone_project:backbone:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "base-ui",
		name: "Base UI",
		website: "https://base-ui.com/react/overview/quick-start",
		description: "Base UI is an unstyled React component library that provides accessible, high-performance building blocks for creating user interfaces, emphasizing accessibility, performance, and developer experience.",
		icon: "BaseUI.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "base-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("base-ui\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "base-ui:dom:1",
				kind: "dom",
				selector: "div[data-base-ui-focusable]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "batman-js",
		name: "Batman.js",
		website: "https://batmanjs.org",
		description: "Batman.js is a framework for building rich web applications using CoffeeScript or JavaScript.",
		icon: "BatmanJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "batman-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(^|/)(batman\\.js)(\\?|$)"),
				description: "Script source URL matches a known technology marker."
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
		id: "bem",
		name: "BEM",
		website: "https://en.bem.info",
		description: "BEM (Block, Element, Modifier) is a naming convention for classes in HTML and CSS what was developed by Yandex.",
		icon: "BEM.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "bem:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+data-bem"),
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "canjs",
		name: "CanJS",
		website: "https://canjs.com",
		description: "CanJS is an MIT-licensed client-side JavaScript framework used for building maintainable and performant web applications.",
		icon: "CanJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "canjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/canjs/can\\.custom\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "canjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "can.Animation",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "catberry-js",
		name: "Catberry.js",
		website: "https://catberry.github.io/",
		description: "Catberry.js is a framework for building isomorphic web applications that render on both the server and client sides using JavaScript.",
		icon: "Catberry.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "catberry-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "catberry",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "catberry-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "catberry.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "catberry-js:responseHeader:2",
				kind: "responseHeader",
				key: "X-Powered-By",
				valuePattern: new RegExp("Catberry"),
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
		id: "chakra-ui",
		name: "Chakra UI",
		website: "https://chakra-ui.com",
		description: "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
		icon: "Chakra UI.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "chakra-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chakra-ui\\."),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chakra-ui:dom:1",
				kind: "dom",
				selector: "html[style*='chakra-ui-color-mode'], body.chakra-ui-dark, body.chakra-ui-light, div.chakra-portal, div.chakra-container",
				description: "DOM selector matches a known technology marker."
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
		id: "chosen",
		name: "Chosen",
		website: "https://harvesthq.github.io/chosen/",
		description: "Chosen is a jQuery plugin that makes long, unwieldy select boxes much more user-friendly.",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "chosen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chosen(?:\\.jquery)?(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		id: "clarity",
		name: "Clarity",
		website: "https://clarity.design",
		description: "Clarity is an open-source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components.",
		icon: "clarity.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "clarity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clr-angular(?:\\.umd)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clarity:dom:1",
				kind: "dom",
				selector: "link[href*='clr-ui'], clr-main-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "clarity:pageGlobal:2",
				kind: "pageGlobal",
				property: "ClarityIcons",
				description: "Page-owned global matches a known technology marker."
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
		id: "coffee-script",
		name: "Coffee Script",
		website: "https://coffeescript.org/",
		description: "CoffeeScript is a language that compiles into JavaScript.",
		icon: "Coffee Script.png",
		categories: [
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "coffee-script:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("coffee-?script(?:-lint)?(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		id: "datastar",
		name: "Datastar",
		website: "https://data-star.dev",
		description: "Datastar is a lightweight framework for developing websites and real-time collaborative web applications.",
		icon: "Datastar.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "datastar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("https?://(?:[^/]+/.*)?datastar\\.js(?:\\?.*)?$"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "devextreme",
		name: "DevExtreme",
		website: "https://js.devexpress.com",
		description: "DevExtreme is a collection of JavaScript UI components designed for Angular, React, Vue, and jQuery, developed by DevExpress.",
		icon: "DevExtreme.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "devextreme:pageGlobal:0",
				kind: "pageGlobal",
				property: "DevExpress._DEVEXTREME_BUNDLE_INITIALIZED",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"react",
			"vue-js",
			"jquery",
			"angular"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ef-js",
		name: "ef.js",
		website: "https://ef.js.org",
		icon: "ef.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "ef-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/ef(?:-core)?(?:\\.min|\\.dev)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ef-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "ef.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ef-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "efCore",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "element-ui",
		name: "Element UI",
		website: "https://element.eleme.io/",
		description: "Element UI is an open-source component library specifically designed for Vue.js, offering a collection of pre-designed UI components such as buttons, forms, tables, and modals.",
		icon: "ElementUI.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ember-js",
		name: "Ember.js",
		website: "https://emberjs.com",
		description: "Ember.js is a comprehensive JavaScript framework that simplifies the development of modern web applications by providing a powerful CLI, a built-in router, and a fast rendering engine.",
		icon: "Ember.js.svg",
		categories: [
			"ui-library",
			"router",
			"framework"
		],
		rules: [
			{
				id: "ember-js:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("@overview\\s+Ember -[\\s\\S]+@version\\s+(.+)"),
				version: { source: "match", group: 1 },
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "ember-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ember",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ember-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Ember.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ember-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "EmberENV",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:emberjs:ember.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "enyo",
		name: "Enyo",
		website: "https://enyojs.com",
		description: "Enyo is an open-source JavaScript framework for cross-platform for mobile, desktop, TV and web applications.",
		icon: "Enyo.png",
		categories: [
			"ui-library",
			"framework",
			"mobile"
		],
		rules: [
			{
				id: "enyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("enyo\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "enyo:pageGlobal:1",
				kind: "pageGlobal",
				property: "enyo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "essential-js-2",
		name: "Essential JS 2",
		website: "https://www.syncfusion.com/javascript-ui-controls",
		icon: "Syncfusion.svg",
		categories: [
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "essential-js-2:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+ class ?= ?\"(?:e-control|[^\"]+ e-control)(?: )[^\"]* e-lib\\b"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "essential-js-2:dom:1",
				kind: "dom",
				selector: "[class*='e-control'][class~='e-lib']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "extjs",
		name: "ExtJS",
		website: "https://www.sencha.com",
		description: "ExtJS is a JavaScript framework developed by Sencha, designed for creating feature-rich, cross-platform web applications with a comprehensive set of UI components and tools.",
		icon: "ExtJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "extjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ext-base\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "extjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ext",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "extjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "Ext.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "extjs:pageGlobal:3",
				kind: "pageGlobal",
				property: "Ext.versions.extjs.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			],
			cpe: "cpe:2.3:a:sencha:ext_js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "fluid-framework",
		name: "Fluid Framework",
		website: "https://fluidframework.com",
		description: "Fluid Framework is a high-performance technology stack that supports real-time, collaborative innovation across applications.",
		icon: "FluidFramework.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "fluid-framework:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunk_fluidx_loop_app",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "framer-motion",
		name: "Framer Motion",
		website: "https://motion.dev",
		description: "Framer Motion is a modern animation library for JavaScript, React, and Vue.",
		icon: "FramerMotion.svg",
		categories: [
			"ui-library",
			"animation",
			"developer-tooling"
		],
		rules: [
			{
				id: "framer-motion:pageGlobal:0",
				kind: "pageGlobal",
				property: "MotionIsMounted",
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
		id: "frontity",
		name: "Frontity",
		website: "https://frontity.org",
		description: "Frontity is a React open-source framework focused on WordPress.",
		icon: "frontity.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "frontity:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Frontity"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"react",
			"webpack",
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gatsby",
		name: "Gatsby",
		website: "https://www.gatsbyjs.org/",
		description: "Gatsby is a React-based open-source framework with performance, scalability and security built-in.",
		icon: "Gatsby.svg",
		categories: [
			"ui-library",
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "gatsby:dom:0",
				kind: "dom",
				selector: "div#___gatsby, style#gatsby-inlined-css",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "gatsby:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Gatsby(?: ([0-9.]+))?$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"react",
			"webpack"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:gatsbyjs:gatsby:*:*:*:*:*:node.js:*:*"
		}
	},
	{
		id: "handlebars",
		name: "Handlebars",
		website: "https://handlebarsjs.com",
		description: "Handlebars is a JavaScript library used to create reusable webpage templates.",
		icon: "Handlebars.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "handlebars:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("handlebars(?:\\.runtime)?(?:-v([\\d.]+?))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "handlebars:dom:1",
				kind: "dom",
				selector: "script[type='text/x-handlebars-template']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "handlebars:pageGlobal:2",
				kind: "pageGlobal",
				property: "Handlebars",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "handlebars:pageGlobal:3",
				kind: "pageGlobal",
				property: "Handlebars.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:handlebars.js_project:handlebars.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "headless-ui",
		name: "Headless UI",
		website: "https://headlessui.dev",
		description: "Headless UI is an unstyled component library for either React.js or Vue.js from the same people that created Tailwind CSS.",
		icon: "Headless UI.svg",
		categories: [
			"ui-library",
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
		id: "headroom-js",
		name: "Headroom.js",
		website: "https://wicky.nillia.ms/headroom.js/",
		description: "Headroom.js is a JS widget that allows you to react to the user's scroll. The header slides out of view when scrolling down and slides back in when scrolling up.",
		categories: [
			"ui-library",
			"widgets-misc",
			"developer-tooling"
		],
		rules: [
			{
				id: "headroom-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("headroom(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		id: "heroui",
		name: "HeroUI",
		website: "https://nextui.org/",
		description: "HeroUI allows you to make beautiful, modern, and fast websites/applications regardless of your design experience, created with React.js and Stitches, based on React Aria and inspired by Vuesax.",
		icon: "HeroUI.svg",
		categories: [
			"ui-library",
			"styling-processor",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "heroui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("NextUI"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "heroui:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("--nextui-(?:colors-accents1|colors-text|space-0|fonts-sans|fonts-mono)"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "heroui:dom:2",
				kind: "dom",
				selector: "link[href*='nextui.org'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
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
		id: "highcharts",
		name: "Highcharts",
		website: "https://www.highcharts.com",
		description: "Highcharts is a charting library written in pure JavaScript, for adding interactive charts to a website or web application. Highcharts meets accessibility standards and works with Python, Angular, React, iOS, Android, and more.",
		icon: "Highcharts.svg",
		categories: [
			"ui-library",
			"graphics-visualization"
		],
		rules: [
			{
				id: "highcharts:html:0",
				kind: "html",
				pattern: new RegExp("<svg[^>]*><desc>Created with Highcharts ([\\d.]*)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "highcharts:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("highcharts.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "highcharts:pageGlobal:2",
				kind: "pageGlobal",
				property: "Highcharts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "highcharts:pageGlobal:3",
				kind: "pageGlobal",
				property: "Highcharts.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:highcharts:highcharts:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "hogan-js",
		name: "Hogan.js",
		website: "https://twitter.github.io/hogan.js/",
		description: "Hogan.js is a JavaScript templating engine developed by Twitter, designed for both client-side and server-side applications, and it follows the Mustache template syntax for efficient and flexible template rendering.",
		icon: "Hogan.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "hogan-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hogan-[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hogan-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)/hogan(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hogan-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Hogan",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hydrogen",
		name: "Hydrogen",
		website: "https://hydrogen.shopify.dev",
		description: "Hydrogen is a front-end web development framework used for building Shopify custom storefronts.",
		icon: "Hydrogen.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "hydrogen:responseHeader:0",
				kind: "responseHeader",
				key: "powered-by",
				valuePattern: new RegExp("^Shopify-Hydrogen$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"shopify",
			"react",
			"vite"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "inertia-js",
		name: "Inertia.js",
		website: "https://inertiajs.com",
		description: "Inertia.js is a protocol for creating monolithic single-page applications.",
		icon: "Inertia.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "inertia-js:responseHeader:1",
				kind: "responseHeader",
				key: "Vary",
				valuePattern: new RegExp("X-Inertia"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "inertia-js:responseHeader:2",
				kind: "responseHeader",
				key: "X-Inertia",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "infernojs",
		name: "InfernoJS",
		website: "https://infernojs.org",
		description: "InfernoJS is a JavaScript library designed for building user interfaces, known for its high performance and similarity to React.js in terms of API and structure.",
		icon: "InfernoJS.svg",
		categories: [
			"ui-library",
			"api-pattern",
			"framework"
		],
		rules: [
			{
				id: "infernojs:pageGlobal:0",
				kind: "pageGlobal",
				property: "Inferno",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "infernojs:pageGlobal:1",
				kind: "pageGlobal",
				property: "Inferno.version",
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
		id: "jcomponent",
		name: "jComponent",
		website: "https://componentator.com",
		description: "jComponent is a platform offering open-source web components and icons for easy integration into web projects.",
		icon: "jComponent.svg",
		categories: [
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "jcomponent:pageGlobal:0",
				kind: "pageGlobal",
				property: "MAIN.version",
				valuePattern: new RegExp("(.*)"),
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
		id: "jss",
		name: "JSS",
		website: "https://cssinjs.org/",
		description: "JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way.",
		icon: "JSS.svg",
		categories: [
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "jss:dom:0",
				kind: "dom",
				selector: "style[data-jss]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "knockout-js",
		name: "Knockout.js",
		website: "https://knockoutjs.com",
		description: "Knockout.js is basically a library written in JavaScript, based on MVVM pattern that helps developers build rich and responsive websites.",
		icon: "Knockout.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "knockout-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "ko.version",
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
		id: "koishi-js",
		name: "Koishi.js",
		website: "https://github.com/koishijs",
		description: "Koishi.js is a cross-platform chatbot framework.",
		icon: "Koishi.js.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "koishi-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "KOISHI_CONFIG",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"typescript"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lit-element",
		name: "lit-element",
		website: "https://lit.dev",
		description: "lit-element is a simple base class for creating web components that work in any web page with any framework. lit-element uses lit-html to render into shadow DOM, and adds API to manage properties and attributes.",
		icon: "Lit.svg",
		categories: [
			"ui-library",
			"api-pattern",
			"developer-tooling"
		],
		rules: [
			{
				id: "lit-element:pageGlobal:0",
				kind: "pageGlobal",
				property: "litElementVersions.0",
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
		id: "lit-html",
		name: "lit-html",
		website: "https://lit.dev",
		description: "lit-html is a simple, modern, safe, small and fast HTML templating library for JavaScript.",
		icon: "Lit.svg",
		categories: [
			"ui-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "lit-html:pageGlobal:0",
				kind: "pageGlobal",
				property: "litHtmlVersions.0",
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
		id: "loadable-components",
		name: "Loadable-Components",
		website: "https://github.com/gregberge/loadable-components",
		description: "Loadable-Components is a library to solve the React code-splitting client-side and server-side.",
		icon: "Loadable-Components.png",
		categories: [
			"ui-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "loadable-components:dom:0",
				kind: "dom",
				selector: "script#__LOADABLE_REQUIRED_CHUNKS__",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "loadable-components:pageGlobal:1",
				kind: "pageGlobal",
				property: "__LOADABLE_LOADED_CHUNKS__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "magic-ui",
		name: "Magic UI",
		website: "https://magicui.design/",
		description: "Magic UI is a UI library featuring open-source animated components built with React, TypeScript, Tailwind CSS, and Framer Motion.",
		icon: "MagicUI.svg",
		categories: [
			"ui-library",
			"transpiler",
			"animation",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "magic-ui:dom:0",
				kind: "dom",
				selector: "iframe[src*='.magicui.design']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "magic-ui:dom:1",
				kind: "dom",
				selector: "a[href*='magicui.design'] > video[src*='cdn.magicui.design']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mantine",
		name: "Mantine",
		website: "https://mantine.dev",
		description: "Mantine is an open-source UI framework and component library for React.",
		icon: "Mantine.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "mantine:dom:0",
				kind: "dom",
				selector: "style[data-emotion='mantine-global'], style[data-emotion='mantine'], html[data-mantine-color-scheme]",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"typescript"
		],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "marionette-js",
		name: "Marionette.js",
		website: "https://marionettejs.com",
		description: "Marionette is a composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications. It is a collection of common design and implementation patterns found in applications.",
		icon: "Marionette.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "marionette-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("backbone\\.marionette.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marionette-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Marionette",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "marionette-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "Marionette.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"underscore-js",
			"backbone-js"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "material-ui",
		name: "Material UI",
		website: "https://mui.com",
		description: "Material UI is a simple and customisable component library to build faster, beautiful, and more accessible React applications.",
		icon: "MUI.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "material-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("https://mui\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "material-ui:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.MuiPaper-root"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "material-ui:stylesheetContent:2",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.Mui-disabled"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "material-ui:dom:3",
				kind: "dom",
				selector: "style[data-meta='MuiPaper'], div.MuiBox-root, div.MuiPaper-root, style[data-meta='MuiButton'], input.MuiInputBase-input, div.MuiContainer-root, .MuiButton-root",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "mdbootstrap",
		name: "MDBootstrap",
		website: "https://mdbootstrap.com",
		description: "MDBootstrap (Material Design for Bootstrap) is a complete UI package that can be integrated with other frameworks such as Angular, React, Vue, etc. It is used to design a fully responsive and mobile-friendly layout using various components, plugins, animation.",
		icon: "MDBootstrap.svg",
		categories: [
			"ui-library",
			"animation",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "mdbootstrap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/mdbootstrap/([\\d\\.]+)/)?js/mdb\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mdbootstrap:pageGlobal:1",
				kind: "pageGlobal",
				property: "mdb.ScrollSpy",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"bootstrap"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "meteor",
		name: "Meteor",
		website: "https://www.meteor.com",
		description: "Meteor is a JavaScript-based platform used for developing web and mobile applications with a unified language across all layers of the application stack.",
		icon: "Meteor.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "meteor:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+__meteor-css__"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "meteor:dom:1",
				kind: "dom",
				selector: "link.__meteor-css__",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "meteor:pageGlobal:2",
				kind: "pageGlobal",
				property: "Meteor",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "meteor:pageGlobal:3",
				kind: "pageGlobal",
				property: "Meteor.release",
				valuePattern: new RegExp("^METEOR@([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"mongodb",
			"node-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mithril",
		name: "Mithril",
		website: "https://mithril.js.org/",
		description: "A Javascript Framework for building applications.",
		icon: "Mithril.svg",
		categories: [
			"ui-library",
			"framework",
			"developer-tooling"
		],
		rules: [
			{
				id: "mithril:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mithril(?:[\\.-]min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mithril:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?mithril(?:[\\.-]min)?\\.js"),
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
		id: "mithril-js",
		name: "Mithril.js",
		website: "https://mithril.js.org",
		description: "Mithril.js is a lightweight JavaScript framework for building efficient and declarative single-page applications (SPAs).",
		icon: "Mithril.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "mithril-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/mithril(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "moon",
		name: "Moon",
		website: "https://kbrsh.github.io/moon/",
		icon: "moon.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "moon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/moon(?:\\.min)?\\.js$"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "mootools",
		name: "MooTools",
		website: "https://mootools.net",
		description: "MooTools is a JavaScript framework that enhances web application development with utilities for DOM manipulation, animations, and AJAX interactions.",
		icon: "MooTools.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "mootools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mootools.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mootools:pageGlobal:1",
				kind: "pageGlobal",
				property: "MooTools",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mootools:pageGlobal:2",
				kind: "pageGlobal",
				property: "MooTools.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:mootools:mootools:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "mui",
		name: "MUI",
		website: "https://mui.com",
		description: "MUI(formerly Material UI) is a simple and customisable component library to build faster, beautiful, and more accessible React applications.",
		icon: "MUI.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "mui:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.MuiPaper-root"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "mui:dom:1",
				kind: "dom",
				selector: "style[data-meta='MuiPaper'], div.MuiBox-root, div.MuiPaper-root, style[data-meta='MuiButton'], input.MuiInputBase-input, div.MuiContainer-root",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg"
			]
		}
	},
	{
		id: "mustache",
		name: "Mustache",
		website: "https://mustache.github.io",
		description: "Mustache is a web template system.",
		icon: "Mustache.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "mustache:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mustache(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mustache:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mustache.version",
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
		id: "naive-ui",
		name: "Naive UI",
		website: "https://www.naiveui.com",
		description: "Naive UI is a Vue.js UI library written in TypeScript, offering more than 80 treeshakable components.",
		icon: "Naive UI.svg",
		categories: [
			"ui-library",
			"transpiler",
			"component-library",
			"styling-library"
		],
		rules: [],
		implies: [
			"vue-js",
			"typescript"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "next-js",
		name: "Next.js",
		website: "https://nextjs.org",
		description: "Next.js is a React framework for developing single page Javascript applications.",
		icon: "Next.js.svg",
		categories: [
			"ui-library",
			"framework",
			"server-runtime-infra",
			"content-publishing"
		],
		rules: [
			{
				id: "next-js:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.next\\.react"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "next-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "__NEXT_DATA__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "next-js:pageGlobal:2",
				kind: "pageGlobal",
				property: "next.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "next-js:cookie:3",
				kind: "cookie",
				key: "NEXT_LOCALE",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "next-js:responseHeader:4",
				kind: "responseHeader",
				key: "x-powered-by",
				valuePattern: new RegExp("^Next\\.js ?([0-9.]+)?"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"react",
			"webpack"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:vercel:next.js:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "next-js-app-router",
		name: "Next.js App Router",
		website: "https://nextjs.org/docs/app",
		description: "The Next.js App Router is a new paradigm for building applications using React's latest features.",
		icon: "Next.js.svg",
		categories: [
			"ui-library",
			"router",
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "next-js-app-router:pageGlobal:0",
				kind: "pageGlobal",
				property: "next.appDir",
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
		id: "nextui",
		name: "NextUI",
		website: "https://nextui.org/",
		description: "NextUI allows you to make beautiful, modern, and fast websites/applications regardless of your design experience, created with React.js and Stitches, based on React Aria and inspired by Vuesax.",
		icon: "NextUI.svg",
		categories: [
			"ui-library",
			"styling-processor",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "nextui:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--nextui-(?:colors-accents1|colors-text|space-0|fonts-sans|fonts-mono)"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "nextui:dom:1",
				kind: "dom",
				selector: "link[href*='nextui.org'][rel='canonical']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"react",
			"stitches"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "nuxt-js",
		name: "Nuxt.js",
		website: "https://nuxt.com",
		description: "Nuxt is a Vue framework for developing modern web applications.",
		icon: "Nuxt.js.svg",
		categories: [
			"ui-library",
			"framework",
			"content-publishing"
		],
		rules: [
			{
				id: "nuxt-js:html:0",
				kind: "html",
				pattern: new RegExp("<div [^>]*id=\"__nuxt\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nuxt-js:html:1",
				kind: "html",
				pattern: new RegExp("<script [^>]*>window\\.__NUXT__"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "nuxt-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/_nuxt/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nuxt-js:dom:3",
				kind: "dom",
				selector: "div[id^='__nuxt']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nuxt-js:pageGlobal:4",
				kind: "pageGlobal",
				property: "$nuxt",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nuxt-js:pageGlobal:5",
				kind: "pageGlobal",
				property: "__NUXT__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nuxt-js:pageGlobal:6",
				kind: "pageGlobal",
				property: "useNuxtApp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:nuxt:nuxt:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "openui5",
		name: "OpenUI5",
		website: "https://openui5.org",
		description: "OpenUI5 is a JavaScript UI Framework released by SAP under the Apache 2.0 license.",
		icon: "OpenUI5.svg",
		categories: [
			"ui-library",
			"framework",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "openui5:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sap-ui-core\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "openui5:pageGlobal:1",
				kind: "pageGlobal",
				property: "sap.ui.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "openui5:cookie:2",
				kind: "cookie",
				key: "sap-usercontext",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "openui5:meta:3",
				kind: "meta",
				key: "sap-ui-fesr",
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "phaser",
		name: "Phaser",
		website: "https://phaser.io",
		icon: "Phaser.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "phaser:pageGlobal:0",
				kind: "pageGlobal",
				property: "Phaser",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "phaser:pageGlobal:1",
				kind: "pageGlobal",
				property: "Phaser.VERSION",
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
		id: "pinia",
		name: "Pinia",
		website: "https://pinia.vuejs.org",
		description: "Pinia is a state management library for Vue.js.",
		icon: "Pinia.svg",
		categories: [
			"ui-library",
			"state-management",
			"developer-tooling"
		],
		rules: [
			{
				id: "pinia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/pinia/.+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pinia:pageGlobal:2",
				kind: "pageGlobal",
				property: "Pinia.createPinia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pinia:pageGlobal:3",
				kind: "pageGlobal",
				property: "__NUXT__.pinia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pinia:pageGlobal:4",
				kind: "pageGlobal",
				property: "mount_pinia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pinia:pageGlobal:5",
				kind: "pageGlobal",
				property: "pinia.state",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "polymer",
		name: "Polymer",
		website: "https://polymer-project.org",
		icon: "Polymer.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "polymer:html:0",
				kind: "html",
				pattern: new RegExp("(?:<polymer-[^>]+|<link[^>]+rel=\"import\"[^>]+/polymer\\.html\")"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "polymer:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("polymer\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "polymer:dom:2",
				kind: "dom",
				selector: "link[rel='import'][href*='/polymer.html']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "polymer:pageGlobal:3",
				kind: "pageGlobal",
				property: "Polymer.version",
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
		id: "preact",
		name: "Preact",
		website: "https://preactjs.com",
		description: "Preact is a JavaScript library that describes itself as a fast 3kB alternative to React with the same ES6 API.",
		icon: "Preact.svg",
		categories: [
			"ui-library",
			"api-pattern",
			"developer-tooling"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "primeng",
		name: "PrimeNG",
		website: "https://primeng.org",
		description: "PrimeNG is a rich set of open-source UI Components for Angular.",
		icon: "PrimeNG.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "primeng:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		requires: [
			"angular"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "primereact",
		name: "PrimeReact",
		website: "https://primereact.org",
		description: "PrimeReact is a rich set of open-source UI Components for React.",
		icon: "PrimeReact.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "primereact:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "primevue",
		name: "PrimeVue",
		website: "https://primevue.org",
		description: "PrimeVue is a rich set of open-source UI Components for Vue.js.",
		icon: "PrimeVue.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "primevue:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primevue:dom:1",
				kind: "dom",
				selector: "style[data-primevue-style-id]",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "prototype",
		name: "Prototype",
		website: "https://www.prototypejs.org",
		description: "Prototype is a JavaScript Framework that aims to ease development of web applications.",
		icon: "Prototype.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "prototype:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:prototype|protoaculous)(?:-([\\d.]*[\\d]))?.*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "prototype:pageGlobal:1",
				kind: "pageGlobal",
				property: "Prototype.Version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:prototypejs:prototype:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "quasar",
		name: "Quasar",
		website: "https://quasar.dev",
		description: "Quasar is an open-source Vue.js based framework.",
		icon: "Quasar.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [],
		implies: [
			"vue-js"
		],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "radix-ui",
		name: "Radix UI",
		website: "https://www.radix-ui.com",
		description: "Radix UI is a React-based user interface component library that offers accessible, responsive, and customisable components for building web applications.",
		icon: "Radix UI.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "radix-ui:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-accordion-content-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-toast-swipe-end-x"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:2",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-toast-swipe-move-x"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:3",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-navigation-menu-viewport-width"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:4",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-navigation-menu-viewport-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:5",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-select-trigger-width"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:6",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-select-trigger-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:7",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-context-menu-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:8",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-context-menu-content-available-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:9",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-dropdown-menu-content-available-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:10",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-dropdown-menu-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:11",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-hover-card-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:12",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-popover-trigger-width"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:13",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-popover-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:14",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-select-trigger-width"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:15",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-select-content-available-height"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:16",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-select-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:stylesheetContent:17",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-tooltip-content-transform-origin"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "radix-ui:dom:18",
				kind: "dom",
				selector: "a[data-radix-collection-item], button[data-radix-collection-item]",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "react",
		name: "React",
		website: "https://reactjs.org",
		description: "React is an open-source JavaScript library for building user interfaces or UI components.",
		icon: "React.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "react:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+data-react"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "react:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("react(?:-with-addons)?[.-](\\d+(?:\\.\\d+)+)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "react:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d\\.]+)/react(?:\\-dom)?(?:\\.production)?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "react:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("react(?:\\-dom)?(?:\\.production)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "react:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("^react\\b.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "react:scriptContent:4",
				kind: "scriptContent",
				pattern: new RegExp("react\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "react:pageGlobal:6",
				kind: "pageGlobal",
				property: "React.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "react:pageGlobal:7",
				kind: "pageGlobal",
				property: "ReactOnRails",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "react:pageGlobal:8",
				kind: "pageGlobal",
				property: "__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "react:pageGlobal:9",
				kind: "pageGlobal",
				property: "__isReactFizzContext",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "react:meta:10",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^Web site created using create-react-app$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "react:meta:11",
				kind: "meta",
				key: "og:image",
				valuePattern: new RegExp("%REACT_APP_SEO_IMAGE_URL%"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:facebook:react:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "react-flow",
		name: "React Flow",
		website: "https://reactflow.dev",
		description: "React Flow is a library for building node-based applications.",
		icon: "React Flow.svg",
		categories: [
			"ui-library",
			"developer-tooling"
		],
		rules: [],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "react-native-for-web",
		name: "React Native for Web",
		website: "https://necolas.github.io/react-native-web/",
		description: "React Native for Web is a library that allows developers to use React Native components and patterns to build cross-platform web applications alongside native mobile applications.",
		icon: "React.svg",
		categories: [
			"ui-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "react-native-for-web:dom:0",
				kind: "dom",
				selector: "style#react-native-stylesheet",
				description: "DOM selector matches a known technology marker."
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
		id: "react-redux",
		name: "React Redux",
		website: "https://react-redux.js.org/",
		description: "React Redux is the official React binding for Redux.",
		icon: "Redux.svg",
		categories: [
			"ui-library",
			"state-management",
			"framework"
		],
		rules: [
			{
				id: "react-redux:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/react-redux(@|/)([\\d.]+)(?:/[a-z]+)?/react-redux(?:.min)?\\.js"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"react",
			"redux"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "react-router",
		name: "React Router",
		website: "https://reactrouter.com",
		description: "React Router provides declarative routing for React.",
		icon: "React Router.svg",
		categories: [
			"ui-library",
			"router",
			"framework"
		],
		rules: [
			{
				id: "react-router:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/react-router(@|/)([\\d.]+)(?:/[a-z]+)?)?/react-router(?:\\.min)?\\.js"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "react-router:pageGlobal:1",
				kind: "pageGlobal",
				property: "__reactRouterVersion",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "recharts",
		name: "Recharts",
		website: "https://recharts.org/",
		description: "Recharts is a component-based charting library, which is exclusively built for React applications.",
		icon: "Recharts.svg",
		categories: [
			"ui-library",
			"graphics-visualization"
		],
		rules: [],
		implies: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "redwoodjs",
		name: "RedwoodJS",
		website: "https://redwoodjs.com",
		description: "RedwoodJS is a full-stack serverless web application framework built by Tom Preston Werner (co-founder of Github) et al.",
		icon: "RedwoodJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "redwoodjs:dom:0",
				kind: "dom",
				selector: "div#redwood-app",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"react",
			"graphql",
			"typescript"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "replicache",
		name: "Replicache",
		website: "https://replicache.dev/",
		description: "Replicache is a JavaScript framework for building high-performance, offline-capable, collaborative web apps.",
		icon: "Replicache.svg",
		categories: [
			"ui-library",
			"framework",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "replicache:responseHeader:0",
				kind: "responseHeader",
				key: "x-replicache-requestid",
				description: "Response header matches a known technology marker."
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
		id: "requirejs",
		name: "RequireJS",
		website: "https://requirejs.org",
		description: "RequireJS is a JavaScript library and file loader which manages the dependencies between JavaScript files and in modular programming.",
		icon: "RequireJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "requirejs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("require.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "requirejs:pageGlobal:1",
				kind: "pageGlobal",
				property: "requirejs.version",
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
		id: "reveal-js",
		name: "Reveal.js",
		website: "https://revealjs.com",
		description: "Reveal.js is a JavaScript framework for building dynamic and interactive presentations using web technologies like HTML, CSS, and JavaScript.",
		icon: "reveal.js.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "reveal-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:^|/)reveal(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "reveal-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "Reveal.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"highlight-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rightjs",
		name: "RightJS",
		website: "https://github.com/rightjs",
		description: "RightJS is a modular JavaScript framework.",
		icon: "RightJS.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "rightjs:pageGlobal:0",
				kind: "pageGlobal",
				property: "RightJS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "riot",
		name: "Riot",
		website: "https://riot.js.org/",
		icon: "Riot.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "riot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("riot(?:\\+compiler)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "riot:pageGlobal:1",
				kind: "pageGlobal",
				property: "riot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ripple",
		name: "Ripple",
		website: "https://dpc-sdp.github.io/sdp-docs/ripple/",
		description: "Ripple is the frontend framework for Single Digital Presence, delivered using Nuxt and Vue.js.",
		icon: "ripple.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "ripple:responseHeader:0",
				kind: "responseHeader",
				key: "x-sdp-app-type",
				valuePattern: new RegExp("ripple"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"nuxt-js",
			"vue-js",
			"drupal"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rxjs",
		name: "RxJS",
		website: "https://reactivex.io",
		description: "RxJS is a reactive library used to implement reactive programming to deal with async implementation, callbacks, and event-based programs.",
		icon: "RxJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "rxjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rx(?:\\.\\w+)?(?:\\.compat|\\.global)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rxjs:pageGlobal:1",
				kind: "pageGlobal",
				property: "Rx.CompositeDisposable",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "rxjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "Rx.Symbol",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sat-s",
		name: "Satūs",
		website: "https://github.com/darkroomengineering/satus",
		description: "Satūs is a React-based starter built with Next.js, Tailwind, and advanced WebGL features, designed as a high-performance foundation for developing new web projects.",
		icon: "Satus.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library",
			"framework"
		],
		rules: [
			{
				id: "sat-s:pageGlobal:0",
				kind: "pageGlobal",
				property: "satusVersion",
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
		id: "sencha-touch",
		name: "Sencha Touch",
		website: "https://www.sencha.com/products/touch",
		description: "Sencha Touch is a user interface (UI) JavaScript library, or web framework, specifically built for the Mobile Web.",
		icon: "Sencha Touch.svg",
		categories: [
			"ui-library",
			"framework",
			"mobile"
		],
		rules: [
			{
				id: "sencha-touch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sencha-touch.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shadcn-svelte",
		name: "shadcn-svelte",
		website: "https://www.shadcn-svelte.com",
		description: "Shadcn-svelte is an adaptation of shadcn/ui for Svelte, offering accessible and customisable components.",
		icon: "ShadCnSvelte.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "shadcn-svelte:dom:0",
				kind: "dom",
				selector: "link[href*='shadcn-svelte']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "shadcn-svelte:pageGlobal:1",
				kind: "pageGlobal",
				property: "sessionStorage.sveltekit:scroll",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "shadcn-svelte:pageGlobal:2",
				kind: "pageGlobal",
				property: "sessionStorage.sveltekit:snapshot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"svelte"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "socket-io",
		name: "Socket.io",
		website: "https://socket.io",
		icon: "Socket.io.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "socket-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("socket\\.io.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "socket-io:pageGlobal:1",
				kind: "pageGlobal",
				property: "io.Socket",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "socket-io:pageGlobal:2",
				kind: "pageGlobal",
				property: "io.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:socket:socket.io:*:*:*:*:*:node.js:*:*"
		}
	},
	{
		id: "solidjs",
		name: "SolidJS",
		website: "https://www.solidjs.com/",
		description: "SolidJS is a purely reactive library. It was designed from the ground up with a reactive core. It's influenced by reactive principles developed by previous libraries.",
		icon: "SolidJS.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "solidjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.solidjs\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "solidjs:pageGlobal:2",
				kind: "pageGlobal",
				property: "Solid$$",
				description: "Page-owned global matches a known technology marker."
			}
		],
		excludes: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "stimulus",
		name: "Stimulus",
		website: "https://stimulusjs.org/",
		description: "A modest JavaScript framework for the HTML you already have.",
		icon: "Stimulus.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "stimulus:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+data-controller"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "stimulus:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("/stimulus-bundle/controllers\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "stimulus:pageGlobal:2",
				kind: "pageGlobal",
				property: "Stimulus.Application",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "stimulus:pageGlobal:3",
				kind: "pageGlobal",
				property: "stimulus_application",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "storefront-ui",
		name: "Storefront UI",
		website: "https://vuestorefront.io/storefront-ui",
		description: "Storefront UI is an independent, Vue. js-based, library of UI components.",
		icon: "Storefront UI.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [],
		implies: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "strapdown-js",
		name: "Strapdown.js",
		website: "https://strapdownjs.com",
		icon: "strapdown.js.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "strapdown-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("strapdown\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"bootstrap",
			"google-code-prettify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "svelte",
		name: "Svelte",
		website: "https://svelte.dev",
		description: "Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members.",
		icon: "Svelte.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "svelte:dom:0",
				kind: "dom",
				selector: "link[href*='/svelte/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "svelte:dom:1",
				kind: "dom",
				selector: "main[class^='svelte-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "svelte:dom:2",
				kind: "dom",
				selector: "a[data-svelte-h^='svelte-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "svelte:dom:3",
				kind: "dom",
				selector: "nav[data-svelte-h^='svelte-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "svelte:dom:4",
				kind: "dom",
				selector: "section[data-svelte-h^='svelte-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "svelte:pageGlobal:5",
				kind: "pageGlobal",
				property: "__svelte",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "svelte:pageGlobal:6",
				kind: "pageGlobal",
				property: "svelte_taxlistteaser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:svelte:svelte:*:*:*:*:*:node.js:*:*"
		}
	},
	{
		id: "sveltekit",
		name: "SvelteKit",
		website: "https://kit.svelte.dev",
		description: "SvelteKit is the official Svelte framework for building web applications with a flexible filesystem-based routing.",
		icon: "Svelte.svg",
		categories: [
			"ui-library",
			"router",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "sveltekit:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("SvelteKit"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"svelte",
			"vite"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:svelte:sveltekit:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "toastr",
		name: "toastr",
		website: "https://github.com/CodeSeven/toastr",
		description: "toastr is a Javascript library for non-blocking notifications. The goal is to create a simple core library that can be customized and extended.",
		icon: "toastr.png",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "toastr:pageGlobal:0",
				kind: "pageGlobal",
				property: "toastr.version",
				valuePattern: new RegExp("(.*)"),
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
		id: "tremor",
		name: "Tremor",
		website: "https://tremor.so",
		description: "Tremor is an open-source library for building charts and dashboards using React components, designed on top of Tailwind CSS.",
		icon: "Tremor.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "tremor:dom:0",
				kind: "dom",
				selector: "div[tremor-id*='tremor-raw'], div[class*='text-tremor-']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "twitter-flight",
		name: "Twitter Flight",
		website: "https://flightjs.github.io/",
		description: "Twitter Flight is a lightweight, component-based JavaScript framework for building web applications.",
		icon: "Twitter Flight.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "twitter-flight:pageGlobal:0",
				kind: "pageGlobal",
				property: "flight",
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
		id: "unpoly",
		name: "Unpoly",
		website: "https://unpoly.com",
		description: "Unpoly is an unobtrusive Javascript framework for applications that render on the server.",
		icon: "Unpoly.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "unpoly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/unpoly@([\\d\\.]+)/unpoly\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unpoly:pageGlobal:1",
				kind: "pageGlobal",
				property: "up.CompilerPass",
				confidence: 25,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "unpoly:pageGlobal:2",
				kind: "pageGlobal",
				property: "up.framework",
				confidence: 26,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "unpoly:pageGlobal:3",
				kind: "pageGlobal",
				property: "up.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "unpoly:cookie:4",
				kind: "cookie",
				key: "_unpoly_demo_layers_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vant",
		name: "Vant",
		website: "https://github.com/youzan/vant",
		description: "Vant is a lightweight, customisable Vue UI library for mobile web apps.",
		icon: "Vant.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "vant:pageGlobal:1",
				kind: "pageGlobal",
				property: "vant.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"typescript"
		],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "visx",
		name: "Visx",
		website: "https://airbnb.io/visx/",
		description: "Visx is a collection of React-based data visualisation tools developed by Airbnb.",
		icon: "Visx.svg",
		categories: [
			"ui-library",
			"graphics-visualization"
		],
		rules: [],
		requires: [
			"react"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vkui",
		name: "VKUI",
		website: "https://vkcom.github.io/VKUI",
		description: "VKUI is a set of React components with which you can create interfaces that are visually indistinguishable from our iOS and Android applications.",
		icon: "vk.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "vkui:dom:0",
				kind: "dom",
				selector: "html.vkui",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "vue-js",
		name: "Vue.js",
		website: "https://vuejs.org",
		description: "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
		icon: "vue.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "vue-js:html:0",
				kind: "html",
				pattern: new RegExp("<(?!svg)[^>]+\\sdata-v(?:ue)?-"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "vue-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("vue[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vue-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d.]+))?/vue(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vue-js:stylesheetContent:3",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.vue-notification-group"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "vue-js:dom:4",
				kind: "dom",
				selector: ".vue-app",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vue-js:dom:5",
				kind: "dom",
				selector: "link[href*='docsify/themes/vue.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vue-js:dom:6",
				kind: "dom",
				selector: "meta[data-vue-meta]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vue-js:dom:7",
				kind: "dom",
				selector: "div[class*='vue-scroll-picker-group'] > div[class*='vue-scroll-picker']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vue-js:dom:8",
				kind: "dom",
				selector: "div[class*='Vue-Toastification__container']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:9",
				kind: "pageGlobal",
				property: "Vue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:10",
				kind: "pageGlobal",
				property: "Vue.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:11",
				kind: "pageGlobal",
				property: "VueRoot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:12",
				kind: "pageGlobal",
				property: "__VUE_HOT_MAP__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:13",
				kind: "pageGlobal",
				property: "__VUE__",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vue-js:pageGlobal:14",
				kind: "pageGlobal",
				property: "vueDLL",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "vuestrap",
		name: "VueStrap",
		website: "https://yuche.github.io/vue-strap",
		description: "VueStrap is a collection of Bootstrap components built with Vue.js.",
		icon: "vue.svg",
		categories: [
			"ui-library",
			"styling-library",
			"component-library",
			"framework"
		],
		rules: [
			{
				id: "vuestrap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/vue-strap/([\\d\\.]+)/vue-strap\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vuestrap:pageGlobal:1",
				kind: "pageGlobal",
				property: "VueStrap.$",
				description: "Page-owned global matches a known technology marker."
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
		id: "vuetify",
		name: "Vuetify",
		website: "https://vuetifyjs.com",
		description: "Vuetify is a reusable semantic component framework for Vue.js that aims to provide clean, semantic and reusable components.",
		icon: "Vuetify.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "vuetify:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.v-application \\.d-block"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "vuetify:dom:1",
				kind: "dom",
				selector: "style#vuetify-theme-stylesheet",
				description: "DOM selector matches a known technology marker."
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
		id: "vuex",
		name: "Vuex",
		website: "https://vuex.vuejs.org/",
		description: "Vuex is a state management pattern + library for Vue.js applications.",
		icon: "vue.svg",
		categories: [
			"ui-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "vuex:pageGlobal:0",
				kind: "pageGlobal",
				property: "Vuex.version",
				valuePattern: new RegExp("(.*)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "vxe-table",
		name: "vxe-table",
		website: "https://vxetable.cn",
		description: "vxe-table is a Vue.js based PC form component, support add, delete, change, virtual scroll, lazy load, shortcut menu, data validation, tree structure, print export, form rendering, data paging, virtual list, modal window, custom template, renderer, flexible configuration items, extension interface.",
		icon: "vxe-table.png",
		categories: [
			"ui-library",
			"form-schema-library",
			"table-library",
			"developer-tooling"
		],
		rules: [
			{
				id: "vxe-table:dom:0",
				kind: "dom",
				selector: "div[class*='vxe-table']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"vue-js"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webix",
		name: "Webix",
		website: "https://webix.com",
		description: "Webix is a JavaScript UI library that offers over 100 customizable UI components for creating web applications, supporting integration with frameworks like Angular, React, and Vue.js.",
		icon: "Webix.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "webix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\bwebix\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webix:pageGlobal:1",
				kind: "pageGlobal",
				property: "webix",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "weblocks",
		name: "WeBlocks",
		website: "https://www.weblocks.com",
		description: "WeBlocks is an educational platform for creating custom JavaScript and Webflow projects using Blocks.",
		icon: "WeBlocks.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "weblocks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//weblocks\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"webflow"
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
		id: "yamada-ui",
		name: "Yamada UI",
		website: "https://yamada-ui.com",
		description: "Yamada UI is a versatile React component library.",
		icon: "YamadaUI.svg",
		categories: [
			"ui-library",
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "yamada-ui:dom:0",
				kind: "dom",
				selector: "a[aria-label*='Yamada UI']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zone-js",
		name: "Zone.js",
		website: "https://github.com/angular/angular/tree/master/packages/zone.js",
		icon: "Angular.svg",
		categories: [
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "zone-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "Zone.root",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"angular"
		],
		metadata: {
			saas: false,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
