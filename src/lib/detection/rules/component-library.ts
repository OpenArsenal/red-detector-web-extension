import type { TechnologyDefinition } from '../types';

export const componentLibraryTechnologyDefinitions = [
	{
		id: "augmented-ui",
		name: "augmented-ui",
		website: "https://augmented-ui.com",
		description: "augmented-ui is a UI framework inspired by cyberpunk and sci-fi.",
		icon: "Augmented-Ui.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "augmented-ui:dom:0",
				kind: "dom",
				selector: "[data-augmented-ui]",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "aura",
		name: "Aura",
		website: "https://github.com/forcedotcom/aura",
		description: "Aura is an open-source UI framework built by Salesforce for developing dynamic web apps for mobile and desktop devices.",
		icon: "default.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "aura:pageGlobal:0",
				kind: "pageGlobal",
				property: "Aura.app",
				valuePattern: new RegExp("siteforce\\:communityApp"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "automatic-css",
		name: "Automatic.css",
		website: "https://automaticcss.com",
		description: "Automatic.css is a CSS framework for WordPress page builders.",
		icon: "Automatic.css.svg",
		categories: [
			"component-library",
			"styling-library",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "automatic-css:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/automatic-css/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "basil-css",
		name: "Basil.css",
		website: "https://basilcss.com",
		description: "Basil.css is a responsive and customizable UI framework.",
		icon: "basilcss.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "basil-css:dom:0",
				kind: "dom",
				selector: "link[href*='/basil.css'], link[href*='/basilcss']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "civictheme",
		name: "CivicTheme",
		website: "https://www.civictheme.io/",
		description: "CivicTheme is an open source, inclusive and component-based design system. It was created so governments and corporations can rapidly assemble modern, consistent and compliant digital experiences.",
		icon: "CivicTheme.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "civictheme:dom:0",
				kind: "dom",
				selector: "img[class*='civictheme-image']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "civictheme:dom:1",
				kind: "dom",
				selector: "img[class*='civic-image']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "coreui",
		name: "CoreUI",
		website: "https://coreui.io",
		description: "CoreUI provides cloud hosting, web and mobile design, animations, wireframes, and UX testing services.",
		icon: "CoreUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "coreui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("webpackJsonp@coreui/coreui"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "coreui:pageGlobal:1",
				kind: "pageGlobal",
				property: "coreui",
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
		id: "devup-ui",
		name: "Devup UI",
		website: "https://devup-ui.com",
		description: "Devup UI is a tool for analyzing CSS-in-JS scenarios, delivering fast styling with optimal performance.",
		icon: "DevupUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "devup-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Devup-ui"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dorik-ai",
		name: "Dorik AI",
		website: "https://dorik.com",
		description: "Dorik is an AI website-building platform that requires no design or coding experience.",
		icon: "DorikAI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "dorik-ai:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.dorik.com'], section[class*='dorik-section'] ",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "easyui",
		name: "EasyUI",
		website: "https://jeasyui.com",
		description: "EasyUI is a UI framework that provides a set of customizable components and widgets for building interactive web applications.",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "easyui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.easyui\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "elm-ui",
		name: "Elm-ui",
		website: "https://github.com/mdgriffith/elm-ui",
		description: "Elm-UI is a library for creating user interfaces in Elm programming language. It provides a set of functions and abstractions for building responsive and reusable UI components, such as buttons, forms, and layouts, in a declarative and type-safe way.",
		icon: "elm.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "elm-ui:html:0",
				kind: "html",
				pattern: new RegExp("<style>[\\s\\S]*\\.explain > \\.s[\\s\\S]*\\.explain > \\.ctr > \\.s"),
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"elm"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "flat-ui",
		name: "Flat UI",
		website: "https://designmodo.github.io/Flat-UI/",
		icon: "Flat UI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "flat-ui:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]+flat-ui(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "flat-ui:dom:1",
				kind: "dom",
				selector: "link[href*='flat-ui.css'], link[href*='flat-ui.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"bootstrap"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "flutter",
		name: "Flutter",
		website: "https://flutter.dev",
		description: "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
		icon: "Flutter.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "flutter:pageGlobal:0",
				kind: "pageGlobal",
				property: "_flutter.loader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flutter:pageGlobal:1",
				kind: "pageGlobal",
				property: "_flutter_web_set_location_strategy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flutter:pageGlobal:2",
				kind: "pageGlobal",
				property: "flutterCanvasKit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flutter:meta:3",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("^flutterweb-theme$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"dart"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:flutter:flutter:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "flyvi",
		name: "Flyvi",
		website: "https://flyvi.io",
		description: "Flyvi is a platform that generates visually engaging graphics optimized for social media.",
		icon: "Flyvi.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "flyvi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.flyvi\\.io/"),
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
		id: "gov-uk-elements",
		name: "GOV.UK Elements",
		website: "https://github.com/alphagov/govuk_elements/",
		icon: "govuk.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "gov-uk-elements:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+elements-page[^>\"]+css"),
				confidence: 25,
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-elements:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+phase-banner-alpha"),
				confidence: 25,
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-elements:html:2",
				kind: "html",
				pattern: new RegExp("<div[^>]+phase-banner-beta"),
				confidence: 25,
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-elements:html:3",
				kind: "html",
				pattern: new RegExp("<div[^>]+govuk-box-highlight"),
				confidence: 25,
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"gov-uk-toolkit"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gov-uk-frontend",
		name: "GOV.UK Frontend",
		website: "https://design-system.service.gov.uk/",
		icon: "govuk.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "gov-uk-frontend:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]*?govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.css"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-frontend:html:1",
				kind: "html",
				pattern: new RegExp("<body[^>]+govuk-template__body"),
				confidence: 80,
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-frontend:html:2",
				kind: "html",
				pattern: new RegExp("<a[^>]+govuk-link"),
				confidence: 10,
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-frontend:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gov-uk-frontend:pageGlobal:4",
				kind: "pageGlobal",
				property: "GOVUKFrontend",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gov-uk-template",
		name: "GOV.UK Template",
		website: "https://github.com/alphagov/govuk_template/",
		icon: "govuk.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "gov-uk-template:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-template:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-print[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-template:html:2",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie6[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-template:html:3",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie7[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-template:html:4",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie8[^>\"]+css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gov-uk-template:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("govuk-template\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gov-uk-template:pageGlobal:6",
				kind: "pageGlobal",
				property: "GOVUK",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gov-uk-toolkit",
		name: "GOV.UK Toolkit",
		website: "https://github.com/alphagov/govuk_frontend_toolkit",
		icon: "govuk.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "gov-uk-toolkit:pageGlobal:0",
				kind: "pageGlobal",
				property: "GOVUK.details",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gov-uk-toolkit:pageGlobal:1",
				kind: "pageGlobal",
				property: "GOVUK.modules",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gov-uk-toolkit:pageGlobal:2",
				kind: "pageGlobal",
				property: "GOVUK.primaryLinks",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hypestyle-css",
		name: "Hypestyle CSS",
		website: "https://www.hypestylecss.xyz",
		description: "Hypestyle CSS is a small CSS library build on utility classes and components.",
		icon: "Hypestyle CSS.png",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [],
		implies: [
			"sass"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ibm-carbon-design-system",
		name: "IBM Carbon Design System",
		website: "https://carbondesignsystem.com",
		description: "IBM Carbon Design System is an open-source design system for building products and digital experiences.",
		icon: "CarbonDesignSystem.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "ibm-carbon-design-system:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.s81c\\.com/common/"),
				description: "Script source URL matches a known technology marker."
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
		id: "kendo-ui",
		name: "Kendo UI",
		website: "https://www.telerik.com/kendo-ui",
		description: "Kendo UI is a HTML5 user interface framework for building interactive and high-performance websites and applications.",
		icon: "Kendo UI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "kendo-ui:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]*\\s+href=[^>]*styles/kendo\\.common(?:\\.min)?\\.css[^>]*/>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "kendo-ui:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/kendo/.*-([\\d]{4})%20([\\d\\.]{6})"),
				version: { source: "match", template: "$1.$2" },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kendo-ui:pageGlobal:3",
				kind: "pageGlobal",
				property: "kendo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kendo-ui:pageGlobal:4",
				kind: "pageGlobal",
				property: "kendo.version",
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
			oss: true
		}
	},
	{
		id: "kobalte",
		name: "Kobalte",
		website: "https://kobalte.dev",
		description: "Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS.",
		icon: "kobalte.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "kobalte:dom:0",
				kind: "dom",
				selector: "div[data-kb-top-layer], html[data-kb-theme]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kobalte:cookie:1",
				kind: "cookie",
				key: "kb-color-mode",
				description: "Cookie name matches a known technology marker."
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
		id: "layui",
		name: "Layui",
		website: "https://layui.gitee.io",
		description: "Layui is an open-source modular front-end UI component library.",
		icon: "Layui.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "layui:pageGlobal:0",
				kind: "pageGlobal",
				property: "layui.v",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:layui:layui:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "material-design-lite",
		name: "Material Design Lite",
		website: "https://getmdl.io",
		description: "Material Design Lite is a library of components for web developers.",
		icon: "Material Design Lite.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "material-design-lite:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*material(?:\\.[\\w]+-[\\w]+)?(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "material-design-lite:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:/([\\d.]+))?/material(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "material-design-lite:pageGlobal:2",
				kind: "pageGlobal",
				property: "MaterialButton",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "material-design-lite:pageGlobal:3",
				kind: "pageGlobal",
				property: "MaterialIconToggle",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "material-design-lite:pageGlobal:4",
				kind: "pageGlobal",
				property: "MaterialLayout",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "materialize-css",
		name: "Materialize CSS",
		website: "https://materializecss.com",
		description: "Materialize CSS is a front-end framework that helps developers create responsive and mobile-first web applications. It is based on Google's Material Design guidelines.",
		icon: "Materialize CSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "materialize-css:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)/.*/materialize\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "materialize-css:dom:1",
				kind: "dom",
				selector: "link[href*='/materialize.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mdui",
		name: "MDUI",
		website: "https://www.mdui.org",
		description: "MDUI is a CSS Framework based on material design.",
		icon: "MDUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "mdui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.mdui\\.org"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "mdui:pageGlobal:1",
				kind: "pageGlobal",
				property: "_mduiEventId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mdui:pageGlobal:2",
				kind: "pageGlobal",
				property: "mdui.Drawer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "metroui",
		name: "MetroUI",
		website: "https://github.com/olton/Metro-UI-CSS",
		description: "MetroUI is an open-source frontend toolkit inspired by Microsoft Fluent (former Metro) design principles.",
		icon: "default.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "metroui:pageGlobal:1",
				kind: "pageGlobal",
				property: "Metro.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "milligram",
		name: "Milligram",
		website: "https://milligram.io",
		description: "Milligram is a minimalist CSS framework designed to provide a base for web development projects.",
		icon: "Milligram.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "milligram:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+milligram(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "milligram:dom:1",
				kind: "dom",
				selector: "link[href*='milligram.css'], link[href*='milligram.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mudblazor",
		name: "MudBlazor",
		website: "https://mudblazor.com/",
		description: "MudBlazor is a component library for Blazor implementing Material Design.",
		icon: "Mudblazor.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "mudblazor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("_content/MudBlazor/MudBlazor\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mudblazor:dom:1",
				kind: "dom",
				selector: "link[href*='/MudBlazor.min.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mudblazor:pageGlobal:2",
				kind: "pageGlobal",
				property: "mudWindow",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"blazor"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "new-ui",
		name: "New UI",
		website: "https://new-ui.com/",
		description: "New UI is a framework designed for developing user interfaces for SaaS applications and websites.",
		icon: "NewUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "new-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("data-new-ui-theme"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "normalize-css",
		name: "Normalize.css",
		website: "https://csstools.github.io/normalize.css",
		description: "Normalize.css is a CSS library that makes browsers render elements according to modern standards by targeting only the styles that require normalization.",
		icon: "Normalize.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "normalize-css:dom:0",
				kind: "dom",
				selector: "link[href*='/assets/css/normalize.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "nsw-design-system",
		name: "NSW Design System",
		website: "https://www.digital.nsw.gov.au/digital-design-system",
		icon: "NSW Design System.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "nsw-design-system:dom:0",
				kind: "dom",
				selector: ".nsw-container, .nsw-header, .nsw-icon, link[href*='nsw-design-system']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "nsw-design-system:pageGlobal:1",
				kind: "pageGlobal",
				property: "NSW.initSite",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nuxt-ui",
		name: "Nuxt UI",
		website: "https://ui.nuxt.com",
		description: "Nuxt UI is a customizable UI library designed for Nuxt.",
		icon: "Nuxt.js.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "nuxt-ui:dom:0",
				kind: "dom",
				selector: "style[id*='nuxt-ui-']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"nuxt-js"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "open-props",
		name: "Open-Props",
		website: "https://open-props.style",
		description: "Open-Props is a collection of CSS custom properties to help accelerate adaptive and consistent design.",
		icon: "Open-Props.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "open-props:dom:0",
				kind: "dom",
				selector: "link[href*='unpkg.com/open-props'][rel='stylesheet']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "panda-css",
		name: "Panda CSS",
		website: "https://panda-css.com/",
		description: "Panda is a styling engine that generates styling primitives to author atomic CSS and recipes in a type-safe and readable manner.",
		icon: "PandaCSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "panda-css:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--made-with-panda"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pico-css",
		name: "Pico CSS",
		website: "https://picocss.com",
		description: "Pico CSS is a minimal CSS framework for semantic HTML, without using classes.",
		icon: "Pico CSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "pico-css:dom:0",
				kind: "dom",
				selector: "link[href*='/pico.min.css'], link[href*='picocss.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "plusprocomponents",
		name: "PlusProComponents",
		website: "https://plus-pro-components.com",
		description: "PlusProComponents is a collection of page-level front-end components designed to streamline web development and enhance UI consistency.",
		icon: "PlusProComponents.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "plusprocomponents:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("plus-pro-components\\.js"),
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
		id: "pure-css",
		name: "Pure CSS",
		website: "https://purecss.io",
		description: "Pure CSS is a set of small, responsive CSS modules that can be used in web projects.",
		icon: "Pure CSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "pure-css:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+(?:([\\d.])+/)?pure(?:-min)?\\.css"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "pure-css:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=\"[^\"]*pure-u-(?:sm-|md-|lg-|xl-)?\\d-\\d"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "pure-css:dom:2",
				kind: "dom",
				selector: "link[href*='pure.css'], link[href*='pure-min.css'], div[class*='pure-u-']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shapecss",
		name: "Shapecss",
		website: "https://shapecss.com",
		icon: "Shapecss.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "shapecss:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*shapecss(?:\\.min)?\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "shapecss:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("shapecss[-.]([\\d.]*\\d)[^/]*\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shapecss:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("/([\\d.]+)/shapecss(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shapecss:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("shapecss.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shapecss:dom:4",
				kind: "dom",
				selector: "link[href*='shapecss.css'],link[href*='shapecss.min.css']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "shapecss:pageGlobal:5",
				kind: "pageGlobal",
				property: "Shapecss",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shoelace",
		name: "Shoelace",
		website: "https://shoelace.style",
		description: "Shoelace is an open-source, framework-agnostic component for building accessible web applications.",
		icon: "Shoelace.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "shoelace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/@shoelace-style/shoelace@([\\d.]+)"),
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
		id: "siimple",
		name: "siimple",
		website: "https://siimple.xyz",
		description: "siimple is a minimal CSS toolkit for building flat, clean and responsive web designs.",
		icon: "siimple.svg",
		categories: [
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
		id: "simple-css",
		name: "Simple.css",
		website: "https://simplecss.org",
		description: "Simple.css is a CSS template.",
		icon: "Simple.css.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "simple-css:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.simplecss.org/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "socraft-ui",
		name: "Socraft-UI",
		website: "https://socraft-public.github.io/socraft-ui",
		description: "Socraft-UI is an open-source components library designed for building user interfaces with reusable and customizable elements.",
		icon: "SocraftUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "socraft-ui:dom:0",
				kind: "dom",
				selector: "link[href*='socraft.ch']",
				description: "DOM selector matches a known technology marker."
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
		id: "spatie-media-library-pro",
		name: "Spatie Media Library Pro",
		website: "https://medialibrary.pro",
		description: "Spatie Media Library Pro is a set of customizable UI components for Spatie Media Library.",
		icon: "Spatie Media Library Pro.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "spatie-media-library-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("media\\-library\\-pro\\-core"),
				description: "Script content contains a bounded technology signature."
			}
		],
		implies: [
			"laravel"
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
		id: "sprig-plugin",
		name: "Sprig plugin",
		website: "https://putyourlightson.com/plugins/sprig",
		description: "Sprig is a free plugin for Craft CMS that allows you to create reactive components from Twig templates ​or PHP classes.",
		icon: "Sprig plugin.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "sprig-plugin:dom:0",
				kind: "dom",
				selector: "form[sprig], button[sprig], input[sprig], div.sprig-component",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"craft-cms"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tachyons",
		name: "Tachyons",
		website: "https://tachyons.io",
		description: "Tachyons is a functional CSS framework.",
		icon: "Tachyons.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "tachyons:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunkgatsby_starter_blog_tachyons",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "uikit",
		name: "UIKit",
		website: "https://getuikit.com",
		description: "UIKit is the framework used for developing iOS applications.",
		icon: "UIKit.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "uikit:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+class=\"[^\"]*(?:uk-container|uk-section)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "uikit:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("uikit.*\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "unocss",
		name: "UnoCSS",
		website: "https://uno.antfu.me/",
		description: "UnoCSS is instant on-demand Atomic CSS engine.",
		icon: "UnoCSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "unocss:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--un-(?:rotate|translate|space-x|text-opacity|border-opacity)"),
				description: "Stylesheet content contains a bounded technology signature.",
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "uswds",
		name: "USWDS",
		website: "https://designsystem.digital.gov",
		description: "USWDS is a design system for the federal government.",
		icon: "USWDS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "uswds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\buswds\\b"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "uswds:pageGlobal:1",
				kind: "pageGlobal",
				property: "uswdsPresent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "w3-css",
		name: "W3.CSS",
		website: "https://www.w3schools.com/w3css/",
		description: "W3.CSS is a CSS framework developed by the World Wide Web Consortium (W3C), the main international standards organisation for the World Wide Web.",
		icon: "W3.CSS.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "w3-css:dom:0",
				kind: "dom",
				selector: "link[href*='/w3.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webawesome",
		name: "WebAwesome",
		website: "https://webawesome.com/",
		description: "Web Awesome is an open-source library of customizable, standards-based, and framework-agnostic UI components designed to support interoperable web interfaces.",
		icon: "WebAwesome.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "webawesome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/webawesome\\.loader\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webawesome:dom:1",
				kind: "dom",
				selector: "link[href*='/dist-cdn/styles/webawesome.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "xtrixui",
		name: "XtrixUI",
		website: "https://xtrixui.vercel.app",
		description: "XtrixUI is a CrossFramework UI library designed for building WebApps, regardless of design experience.",
		icon: "XtrixUI.svg",
		categories: [
			"component-library",
			"styling-library"
		],
		rules: [
			{
				id: "xtrixui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("XtrixUI"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
