import type { TechnologyDefinition } from '../types';

export const componentLibraryTechnologyDefinitions = [
	{
		id: "augmented-ui",
		name: "augmented-ui",
		website: "https://augmented-ui.com",
		description: "augmented-ui is an UI framework inspired by cyberpunk and sci-fi.",
		icon: "augmented-ui.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "augmented-ui:dom:0",
				kind: "dom",
				selector: "[data-augmented-ui]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "aura",
		name: "Aura",
		website: "https://github.com/forcedotcom/aura",
		description: "Aura is an open-source UI framework built by Salesforce for developing dynamic web apps for mobile and desktop devices.",
		icon: "default.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "aura:jsGlobal:0",
				kind: "jsGlobal",
				property: "Aura.app",
				valuePattern: new RegExp("siteforce\\:communityApp"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "automatic-css",
		name: "Automatic.css",
		website: "https://automaticcss.com",
		description: "Automatic.css is a CSS framework for WordPress page builders.",
		icon: "Automatic.css.svg",
		categories: [
			"component-library",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "automatic-css:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/automatic-css/']",
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
		id: "base-ui",
		name: "Base UI",
		website: "https://base-ui.com/react/overview/quick-start",
		description: "Base UI is an unstyled React component library that provides accessible, high-performance building blocks for creating user interfaces, emphasizing accessibility, performance, and developer experience.",
		icon: "BaseUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "base-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("base-ui\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "base-ui:dom:1",
				kind: "dom",
				selector: "div[data-base-ui-focusable]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "base-ui:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("base-ui\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "base-ui:dom:3",
				kind: "dom",
				selector: "[id^='base-ui-'], [data-base-ui-navigation-menu-trigger]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
		implies: [
			"react",
		],
	},
	{
		id: "basil-css",
		name: "Basil.css",
		website: "https://basilcss.com",
		description: "Basil.css is a responsive and customizable UI framework.",
		icon: "basilcss.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "basil-css:dom:0",
				kind: "dom",
				selector: "link[href*='/basil.css'], link[href*='/basilcss']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "civictheme",
		name: "CivicTheme",
		website: "https://www.civictheme.io/",
		description: "CivicTheme is an open source, inclusive, and component-based design system. It was created so governments and corporations can rapidly assemble modern, consistent and compliant digital experiences.",
		icon: "civictheme.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "civictheme:dom:0",
				kind: "dom",
				selector: "img[class*='civictheme-image']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "civictheme:dom:1",
				kind: "dom",
				selector: "img[class*='civic-image']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "civictheme:dom:2",
				kind: "dom",
				selector: "img[class*='ct-image']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "civictheme:dom:3",
				kind: "dom",
				selector: "img[class~='civictheme-image']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "civictheme:dom:4",
				kind: "dom",
				selector: "img[class~='civic-image']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "civictheme:dom:5",
				kind: "dom",
				selector: "img[class~='ct-image']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "clarity",
		name: "Clarity",
		website: "https://clarity.design",
		description: "Clarity is an open-source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components.",
		icon: "clarity.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "clarity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clr-angular(?:\\.umd)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clarity:dom:1",
				kind: "dom",
				selector: "link[href*='clr-ui'], clr-main-container",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "clarity:jsGlobal:2",
				kind: "jsGlobal",
				property: "ClarityIcons",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"angular",
		],
	},
	{
		id: "coreui",
		name: "CoreUI",
		website: "https://coreui.io",
		description: "CoreUI provides cloud hosting, web and mobile design, animations, wireframes, and UX testing services.",
		icon: "CoreUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "coreui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("webpackJsonp@coreui\\/coreui"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "coreui:jsGlobal:1",
				kind: "jsGlobal",
				property: "coreui",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "coreui:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("webpackjsonp@coreui\\/coreui"),
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
		id: "daisyui",
		name: "daisyUI",
		website: "https://daisyui.com",
		description: "daisyUI is a customisable Tailwind CSS component library that prevents verbose markup in frontend applications. With a focus on customising and creating themes for user interfaces, daisyUI uses pure CSS and Tailwind utility classes, allowing developers to write clean HTML.",
		icon: "daisyUI.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "daisyui:dom:0",
				kind: "dom",
				selector: "link[href*='npm/daisyui']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "daisyui:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("daisyUI"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "daisyui:scriptContent:modern:0",
				kind: "scriptContent",
				pattern: new RegExp("daisyui"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "daisyui:stylesheetContent:modern:1",
				kind: "stylesheetContent",
				pattern: new RegExp("daisyui"),
				confidence: 75,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "daisyui:resourceUrl:modern:2",
				kind: "resourceUrl",
				pattern: new RegExp("daisyui"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "daisyui:html:modern:3",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*\\bbtn\\b[^\"]*\".*class=\"[^\"]*\\bcard\\b"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "daisyui:html:modern:4",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*\\bdaisy-"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "daisyui:html:modern:5",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*\\bdrawer\\b"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"tailwind-css",
		],
	},
	{
		id: "devextreme",
		name: "DevExtreme",
		website: "https://js.devexpress.com",
		description: "DevExtreme is a collection of JavaScript UI components designed for Angular, React, Vue, and jQuery, developed by DevExpress.",
		icon: "DevExtreme.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "devextreme:jsGlobal:0",
				kind: "jsGlobal",
				property: "DevExpress._DEVEXTREME_BUNDLE_INITIALIZED",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"angular",
			"jquery",
			"react",
			"vue-js",
		],
	},
	{
		id: "devup-ui",
		name: "Devup UI",
		website: "https://devup-ui.com",
		description: "Devup UI is a tool for analyzing CSS-in-JS scenarios, delivering fast styling with optimal performance.",
		icon: "DevupUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "devup-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Devup-ui"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "devup-ui:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("devup-ui"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "dorik-ai",
		name: "Dorik AI",
		website: "https://dorik.com",
		description: "Dorik is an AI website-building platform that requires no design or coding experience.",
		icon: "DorikAI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "dorik-ai:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.dorik.com'], section[class*='dorik-section'] ",
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
		id: "easyui",
		name: "EasyUI",
		website: "https://jeasyui.com",
		description: "EasyUI is an UI framework that provides a set of customizable components and widgets for building interactive web applications.",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "easyui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jquery\\.easyui\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "elm-ui",
		name: "Elm-ui",
		website: "https://github.com/mdgriffith/elm-ui",
		description: "Elm-UI is a library for creating user interfaces in Elm programming language. It provides a set of functions and abstractions for building responsive and reusable UI components, such as buttons, forms, and layouts, in a declarative and type-safe way.",
		icon: "elm.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "elm-ui:html:0",
				kind: "html",
				pattern: new RegExp("<style>[\\s\\S]*\\.explain > \\.s[\\s\\S]*\\.explain > \\.ctr > \\.s"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "elm-ui:html:1",
				kind: "html",
				pattern: new RegExp("<style>[\\s\\s]*\\.explain > \\.s[\\s\\s]*\\.explain > \\.ctr > \\.s"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"elm",
		],
	},
	{
		id: "flat-ui",
		name: "Flat UI",
		website: "https://designmodo.github.io/Flat-UI/",
		icon: "Flat UI.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "flat-ui:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]+flat-ui(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "flat-ui:dom:1",
				kind: "dom",
				selector: "link[href*='flat-ui.css'], link[href*='flat-ui.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"bootstrap",
		],
	},
	{
		id: "flowbite",
		name: "Flowbite",
		website: "https://github.com/themesberg/flowbite",
		description: "Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.",
		icon: "Flowbite.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "flowbite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/flowbite(?:@([\\d\\.]+)\\/|\\.bundle\\.js)"),
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
			"tailwind-css",
		],
	},
	{
		id: "flutter",
		name: "Flutter",
		website: "https://flutter.dev",
		description: "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
		icon: "Flutter.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "flutter:jsGlobal:0",
				kind: "jsGlobal",
				property: "_flutter.loader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flutter:jsGlobal:1",
				kind: "jsGlobal",
				property: "_flutter_web_set_location_strategy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flutter:jsGlobal:2",
				kind: "jsGlobal",
				property: "flutterCanvasKit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flutter:meta:3",
				kind: "meta",
				key: "id",
				valuePattern: new RegExp("^flutterweb-theme$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:flutter:flutter:*:*:*:*:*:*:*:*",
		},
		implies: [
			"dart",
		],
	},
	{
		id: "flyvi",
		name: "Flyvi",
		website: "https://flyvi.io",
		description: "Flyvi is a platform that generates visually engaging graphics optimized for social media.",
		icon: "Flyvi.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "flyvi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.flyvi\\.io\\/"),
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
		id: "formalize-css",
		name: "Formalize CSS",
		website: "https://formalize.me",
		description: "Formalize CSS is a stylesheet that standardizes the appearance and behavior of HTML form elements across browsers to ensure consistent rendering.",
		icon: "Formalize.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "formalize-css:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/jquery\\.formalize\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "formalize-css:jsGlobal:1",
				kind: "jsGlobal",
				property: "FORMALIZE.init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "gov-uk-elements",
		name: "GOV.UK Elements",
		website: "https://github.com/alphagov/govuk_elements/",
		icon: "govuk.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "gov-uk-elements:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+elements-page[^>\"]+css"),
				confidence: 25,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-elements:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+phase-banner-alpha"),
				confidence: 25,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-elements:html:2",
				kind: "html",
				pattern: new RegExp("<div[^>]+phase-banner-beta"),
				confidence: 25,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-elements:html:3",
				kind: "html",
				pattern: new RegExp("<div[^>]+govuk-box-highlight"),
				confidence: 25,
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"gov-uk-toolkit",
		],
	},
	{
		id: "gov-uk-frontend",
		name: "GOV.UK Frontend",
		website: "https://design-system.service.gov.uk/",
		description: "GOV.UK Frontend is the design system and component library for GOV.UK services.",
		icon: "govuk.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "gov-uk-frontend:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gov-uk-frontend:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]*?govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.css"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-frontend:html:2",
				kind: "html",
				pattern: new RegExp("<body[^>]+govuk-template__body"),
				confidence: 80,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-frontend:html:3",
				kind: "html",
				pattern: new RegExp("<a[^>]+govuk-link"),
				confidence: 10,
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-frontend:jsGlobal:4",
				kind: "jsGlobal",
				property: "GOVUKFrontend",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gov-uk-frontend:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("govuk-frontend(?:[^>]*?([0-9a-fa-f]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gov-uk-frontend:html:6",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=[^>]*?govuk-frontend(?:[^>]*?([0-9a-fa-f]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.css"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "gov-uk-template",
		name: "GOV.UK Template",
		website: "https://github.com/alphagov/govuk_template/",
		description: "GOV.UK Template provides the base HTML, CSS, and assets for GOV.UK-style pages.",
		icon: "govuk.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "gov-uk-template:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("govuk-template\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gov-uk-template:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template[^>\"]+css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-template:html:2",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-print[^>\"]+css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-template:html:3",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie6[^>\"]+css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-template:html:4",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie7[^>\"]+css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-template:html:5",
				kind: "html",
				pattern: new RegExp("<link[^>]+govuk-template-ie8[^>\"]+css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gov-uk-template:jsGlobal:6",
				kind: "jsGlobal",
				property: "GOVUK",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "gov-uk-toolkit",
		name: "GOV.UK Toolkit",
		website: "https://github.com/alphagov/govuk_frontend_toolkit",
		description: "GOV.UK Toolkit is a set of front-end utilities and helpers for GOV.UK-style services.",
		icon: "govuk.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "gov-uk-toolkit:jsGlobal:0",
				kind: "jsGlobal",
				property: "GOVUK.details",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gov-uk-toolkit:jsGlobal:1",
				kind: "jsGlobal",
				property: "GOVUK.modules",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gov-uk-toolkit:jsGlobal:2",
				kind: "jsGlobal",
				property: "GOVUK.primaryLinks",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "heroui",
		name: "HeroUI",
		website: "https://nextui.org/",
		description: "HeroUI allows you to make beautiful, modern, and fast websites/applications regardless of your design experience, created with React.js and Stitches, based on React Aria and inspired by Vuesax.",
		icon: "HeroUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "heroui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("NextUI"),
				description: "Script content contains a bounded technology signature.",
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
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "heroui:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("nextui"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"react",
		],
	},
	{
		id: "hypestyle-css",
		name: "Hypestyle CSS",
		website: "https://www.hypestylecss.xyz",
		description: "Hypestyle CSS is a small CSS library build on utility classes and components.",
		icon: "Hypestyle CSS.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "hypestyle-css:dom:0",
				kind: "dom",
				selector: "link[href*='hypestyle']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"sass",
		],
	},
	{
		id: "ibm-carbon-design-system",
		name: "IBM Carbon Design System",
		website: "https://carbondesignsystem.com",
		description: "IBM Carbon Design System is an open-source design system for building products and digital experiences.",
		icon: "CarbonDesignSystem.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "ibm-carbon-design-system:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.s81c\\.com\\/common\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "kendo-ui",
		name: "Kendo UI",
		website: "https://www.telerik.com/kendo-ui",
		description: "Kendo UI is an HTML5 user interface framework for building interactive and high-performance websites and applications.",
		icon: "Kendo UI.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "kendo-ui:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]*\\s+href=[^>]*styles\\/kendo\\.common(?:\\.min)?\\.css[^>]*\\/>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "kendo-ui:jsGlobal:1",
				kind: "jsGlobal",
				property: "kendo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kendo-ui:jsGlobal:2",
				kind: "jsGlobal",
				property: "kendo.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kendo-ui:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\/kendo\\/.*-([\\d]{4})%20([\\d\\.]{6})"),
				version: {
					source: "match",
					template: "$1.$2",
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kendo-ui:dom:4",
				kind: "dom",
				selector: "link[href*=kendo]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:progress:kendo_ui:*:*:*:*:*:*:*:*",
		},
		implies: [
			"jquery",
		],
	},
	{
		id: "kobalte",
		name: "Kobalte",
		website: "https://kobalte.dev",
		description: "Kobalte is an UI toolkit for building accessible web apps and design systems with SolidJS.",
		icon: "kobalte.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "kobalte:dom:0",
				kind: "dom",
				selector: "div[data-kb-top-layer], html[data-kb-theme]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kobalte:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^kb\\-color\\-mode$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"solidjs",
		],
	},
	{
		id: "layui",
		name: "Layui",
		website: "https://layui.gitee.io",
		description: "Layui is an open-source modular front-end UI component library.",
		icon: "Layui.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "layui:jsGlobal:0",
				kind: "jsGlobal",
				property: "layui.v",
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
			cpe: "cpe:2.3:a:layui:layui:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "magic-ui",
		name: "Magic UI",
		website: "https://magicui.design/",
		description: "Magic UI is an UI library featuring open-source animated components built with React, TypeScript, Tailwind CSS, and Framer Motion.",
		icon: "MagicUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "magic-ui:dom:0",
				kind: "dom",
				selector: "iframe[src*='.magicui.design']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "magic-ui:dom:1",
				kind: "dom",
				selector: "a[href*='magicui.design'] > video[src*='cdn.magicui.design']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "magic-ui:dom:2",
				kind: "dom",
				selector: "iframe[src*='.magicui.design'],a[href*='magicui.design'] > video[src*='cdn.magicui.design']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "material-design-lite",
		name: "Material Design Lite",
		website: "https://getmdl.io",
		description: "Material Design Lite is a library of components for web developers.",
		icon: "Material Design Lite.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "material-design-lite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d.]+))?\\/material(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "material-design-lite:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*material(?:\\.[\\w]+-[\\w]+)?(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "material-design-lite:jsGlobal:2",
				kind: "jsGlobal",
				property: "MaterialIconToggle",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "material-design-lite:jsGlobal:3",
				kind: "jsGlobal",
				property: "MaterialButton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "material-design-lite:jsGlobal:4",
				kind: "jsGlobal",
				property: "MaterialLayout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "material-ui",
		name: "Material UI",
		website: "https://mui.com",
		description: "Material UI is a simple and customisable component library to build faster, beautiful, and more accessible React applications.",
		icon: "MUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "material-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("https:\\/\\/mui\\.com"),
				description: "Script content contains a bounded technology signature.",
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
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
		implies: [
			"react",
		],
	},
	{
		id: "materialize-css",
		name: "Materialize CSS",
		website: "https://materializecss.com",
		description: "Materialize CSS is a front-end framework that helps developers create responsive and mobile-first web applications. It is based on Google's Material Design guidelines.",
		icon: "Materialize CSS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "materialize-css:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)\\/.*\\/materialize\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "materialize-css:dom:1",
				kind: "dom",
				selector: "link[href*='/materialize.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mdbootstrap",
		name: "MDBootstrap",
		website: "https://mdbootstrap.com",
		description: "MDBootstrap (Material Design for Bootstrap) is a complete UI package that can be integrated with other frameworks such as Angular, React, Vue, etc. It is used to design a fully responsive and mobile-friendly layout using various components, plugins, animation.",
		icon: "MDBootstrap.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "mdbootstrap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/mdbootstrap\\/([\\d\\.]+)\\/)?js\\/mdb\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mdbootstrap:jsGlobal:1",
				kind: "jsGlobal",
				property: "mdb.ScrollSpy",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"bootstrap",
		],
	},
	{
		id: "mdui",
		name: "MDUI",
		website: "https://www.mdui.org",
		description: "MDUI is a CSS Framework based on material design.",
		icon: "MDUI.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "mdui:jsGlobal:0",
				kind: "jsGlobal",
				property: "_mduiEventId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mdui:jsGlobal:1",
				kind: "jsGlobal",
				property: "mdui.Drawer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mdui:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("www\\.mdui\\.org"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "metroui",
		name: "MetroUI",
		website: "https://github.com/olton/Metro-UI-CSS",
		description: "MetroUI is an open-source frontend toolkit inspired by Microsoft Fluent (former Metro) design principles.",
		icon: "default.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "metroui:dom:0",
				kind: "dom",
				selector: "link[href*='//cdn.metroui.org.ua/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "metroui:jsGlobal:1",
				kind: "jsGlobal",
				property: "Metro.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:metroui:metro_ui:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "milligram",
		name: "Milligram",
		website: "https://milligram.io",
		description: "Milligram is a minimalist CSS framework designed to provide a base for web development projects.",
		icon: "Milligram.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "milligram:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+milligram(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "milligram:dom:1",
				kind: "dom",
				selector: "link[href*='milligram.css'], link[href*='milligram.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mudblazor",
		name: "MudBlazor",
		website: "https://mudblazor.com/",
		description: "MudBlazor is a component library for Blazor implementing Material Design.",
		icon: "Mudblazor.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "mudblazor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("_content\\/MudBlazor\\/MudBlazor\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mudblazor:dom:1",
				kind: "dom",
				selector: "link[href*='/MudBlazor.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mudblazor:jsGlobal:2",
				kind: "jsGlobal",
				property: "mudWindow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mudblazor:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("_content\\/mudblazor\\/mudblazor\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"blazor",
		],
	},
	{
		id: "naive-ui",
		name: "Naive UI",
		website: "https://www.naiveui.com",
		description: "Naive UI is a Vue.js UI library written in TypeScript, offering more than 80 treeshakable components.",
		icon: "Naive UI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "naive-ui:dom:0",
				kind: "dom",
				selector: "style[cssr-id^='n-']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"typescript",
			"vue-js",
		],
	},
	{
		id: "new-ui",
		name: "New UI",
		website: "https://new-ui.com/",
		description: "New UI is a framework designed for developing user interfaces for SaaS applications and websites.",
		icon: "NewUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "new-ui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("data-new-ui-theme"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "nextui",
		name: "NextUI",
		website: "https://nextui.org/",
		description: "NextUI allows you to make beautiful, modern, and fast websites/applications regardless of your design experience, created with React.js and Stitches, based on React Aria and inspired by Vuesax.",
		icon: "NextUI.svg",
		categories: [
			"component-library",
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
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "nextui:scriptContent:modern:0",
				kind: "scriptContent",
				pattern: new RegExp("\\@nextui-org\\/"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "nextui:scriptContent:modern:1",
				kind: "scriptContent",
				pattern: new RegExp("nextui"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "nextui:resourceUrl:modern:2",
				kind: "resourceUrl",
				pattern: new RegExp("nextui"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "nextui:html:modern:3",
				kind: "html",
				pattern: new RegExp("data-nextui"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "nextui:html:modern:4",
				kind: "html",
				pattern: new RegExp("class=\"nextui-"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"react",
			"stitches",
		],
	},
	{
		id: "normalize-css",
		name: "Normalize.css",
		website: "https://csstools.github.io/normalize.css",
		description: "Normalize.css is a CSS library that makes browsers render elements according to modern standards by targeting only the styles that require normalization.",
		icon: "Normalize.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "normalize-css:dom:0",
				kind: "dom",
				selector: "link[href*='/assets/css/normalize.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "nsw-design-system",
		name: "NSW Design System",
		website: "https://www.digital.nsw.gov.au/digital-design-system",
		icon: "NSW Design System.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "nsw-design-system:dom:0",
				kind: "dom",
				selector: ".nsw-container, .nsw-header, .nsw-icon, link[href*='nsw-design-system']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "nsw-design-system:jsGlobal:1",
				kind: "jsGlobal",
				property: "NSW.initSite",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "open-props",
		name: "Open-Props",
		website: "https://open-props.style",
		description: "Open-Props is a collection of CSS custom properties to help accelerate adaptive and consistent design.",
		icon: "Open-Props.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "open-props:dom:0",
				kind: "dom",
				selector: "link[href*='unpkg.com/open-props'][rel='stylesheet']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "panda-css",
		name: "Panda CSS",
		website: "https://panda-css.com/",
		description: "Panda is a styling engine that generates styling primitives to author atomic CSS and recipes in a type-safe and readable manner.",
		icon: "PandaCSS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "panda-css:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--made-with-panda"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "pico-css",
		name: "Pico CSS",
		website: "https://picocss.com",
		description: "Pico CSS is a minimal CSS framework for semantic HTML, without using classes.",
		icon: "Pico CSS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "pico-css:dom:0",
				kind: "dom",
				selector: "link[href*='/pico.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pico-css:dom:1",
				kind: "dom",
				selector: "link[href*='/pico.min.css'], link[href*='picocss.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "plusprocomponents",
		name: "PlusProComponents",
		website: "https://plus-pro-components.com",
		description: "PlusProComponents is a collection of page-level front-end components designed to streamline web development and enhance UI consistency.",
		icon: "PlusProComponents.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "plusprocomponents:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("plus-pro-components\\.js"),
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
		id: "preline-ui",
		name: "Preline UI",
		website: "https://preline.co",
		description: "Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.",
		icon: "Preline UI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "preline-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/preline\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"tailwind-css",
		],
	},
	{
		id: "primeng",
		name: "PrimeNG",
		website: "https://www.primefaces.org",
		description: "PrimeNG is a rich set of open-source UI Components for Angular.",
		icon: "PrimeNG.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "primeng:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primeng:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"onetime",
			],
		},
		requires: [
			"angular",
		],
	},
	{
		id: "primereact",
		name: "PrimeReact",
		website: "https://www.primefaces.org",
		description: "PrimeReact is a rich set of open-source UI Components for React.",
		icon: "PrimeReact.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "primereact:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primereact:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primereact:dom:2",
				kind: "dom",
				selector: ".p-button[data-pc-name='button'][data-pc-section='root'], .p-datatable[data-pc-name='datatable'][data-pc-section='root'], .p-inputnumber[data-pc-name='inputnumber'][data-pc-section='root']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"onetime",
			],
		},
		requires: [
			"react",
		],
	},
	{
		id: "primevue",
		name: "PrimeVue",
		website: "https://www.primefaces.org",
		description: "PrimeVue is a rich set of open-source UI Components for Vue.js.",
		icon: "PrimeVue.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "primevue:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primevue:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.p-(?:toast|calendar|dialog-mask|menuitem-text|sidebar)(?:-content)?\\{"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "primevue:dom:2",
				kind: "dom",
				selector: "style[data-primevue-style-id]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"onetime",
			],
		},
		requires: [
			"vue-js",
		],
	},
	{
		id: "pure-css",
		name: "Pure CSS",
		website: "https://purecss.io",
		description: "Pure CSS is a set of small, responsive CSS modules that can be used in web projects.",
		icon: "Pure CSS.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "pure-css:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+(?:([\\d.])+\\/)?pure(?:-min)?\\.css"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "pure-css:html:1",
				kind: "html",
				pattern: new RegExp("<div[^>]+class=\"[^\"]*pure-u-(?:sm-|md-|lg-|xl-)?\\d-\\d"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "pure-css:dom:2",
				kind: "dom",
				selector: "link[href*='pure.css'], link[href*='pure-min.css'], div[class*='pure-u-']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "semantic-ui",
		name: "Semantic UI",
		website: "https://semantic-ui.com/",
		description: "Semantic UI is a front-end development framework, powered by LESS and jQuery.",
		icon: "Semantic-ui.png",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "semantic-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/semantic(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "semantic-ui:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+semantic(?:\\.min)\\.css\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "semantic-ui:dom:2",
				kind: "dom",
				selector: "link[href*='/semantic.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "shadcn-ui",
		name: "shadcn/ui",
		website: "https://ui.shadcn.com",
		description: "shadcn/ui is a component system built with Radix UI and Tailwind CSS.",
		icon: "shadcn-ui.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "shadcn-ui:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--destructive-foreground"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"radix-ui",
			"tailwind-css",
		],
	},
	{
		id: "shapecss",
		name: "Shapecss",
		website: "https://shapecss.com",
		icon: "Shapecss.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "shapecss:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shapecss[-.]([\\d.]*\\d)[^/]*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shapecss:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/([\\d.]+)\\/shapecss(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shapecss:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("shapecss.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shapecss:html:3",
				kind: "html",
				pattern: new RegExp("<link[^>]* href=\"[^\"]*shapecss(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "shapecss:jsGlobal:4",
				kind: "jsGlobal",
				property: "Shapecss",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shapecss:dom:5",
				kind: "dom",
				selector: "link[href*='shapecss.css'],link[href*='shapecss.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "siimple",
		name: "siimple",
		website: "https://siimple.xyz",
		description: "siimple is a minimal CSS toolkit for building flat, clean and responsive web designs.",
		icon: "siimple.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "siimple:dom:0",
				kind: "dom",
				selector: "link[href*='siimple.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "simple-css",
		name: "Simple.css",
		website: "https://simplecss.org",
		description: "Simple.css is a CSS template.",
		icon: "Simple.css.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "simple-css:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.simplecss.org/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "socraft-ui",
		name: "Socraft-UI",
		website: "https://socraft-public.github.io/socraft-ui",
		description: "Socraft-UI is an open-source components library designed for building user interfaces with reusable and customizable elements.",
		icon: "SocraftUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "socraft-ui:dom:0",
				kind: "dom",
				selector: "link[href*='socraft.ch']",
				description: "DOM selector matches a known technology marker.",
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
		id: "spatie-media-library-pro",
		name: "Spatie Media Library Pro",
		website: "https://medialibrary.pro",
		description: "Spatie Media Library Pro is a set of customizable UI components for Spatie Media Library.",
		icon: "Spatie Media Library Pro.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "spatie-media-library-pro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("media\\-library\\-pro\\-core"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
			],
		},
		implies: [
			"laravel",
		],
	},
	{
		id: "sprig-plugin",
		name: "Sprig plugin",
		website: "https://putyourlightson.com/plugins/sprig",
		description: "Sprig is a free plugin for Craft CMS that allows you to create reactive components from Twig templates ​or PHP classes.",
		icon: "Sprig plugin.svg",
		categories: [
			"component-library",
			"widgets-misc",
		],
		rules: [
			{
				id: "sprig-plugin:dom:0",
				kind: "dom",
				selector: "form[sprig], button[sprig], input[sprig], div.sprig-component",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"craft-cms",
		],
	},
	{
		id: "storefront-ui",
		name: "Storefront UI",
		website: "https://vuestorefront.io/storefront-ui",
		description: "Storefront UI is an independent, Vue. js-based, library of UI components.",
		icon: "Storefront UI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "storefront-ui:dom:0",
				kind: "dom",
				selector: "link[href*='/dist/sfui']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"vue-js",
		],
	},
	{
		id: "syst-me-de-design-de-l-tat",
		name: "Système de Design de l'État",
		website: "https://www.systeme-de-design.gouv.fr/",
		description: "Système de Design de l'État is a design system consisting of web components used by French government websites to build and maintain official user interfaces for.gouv.fr services.",
		icon: "StateDesignSystem.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "syst-me-de-design-de-l-tat:jsGlobal:0",
				kind: "jsGlobal",
				property: "dsfr.Modes",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "tachyons",
		name: "Tachyons",
		website: "https://tachyons.io",
		description: "Tachyons is a functional CSS framework.",
		icon: "Tachyons.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "tachyons:dom:0",
				kind: "dom",
				selector: "link[href*='tachyons.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tachyons:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkgatsby_starter_blog_tachyons",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tdesign",
		name: "TDesign",
		website: "https://tdesign.tencent.com",
		description: "TDesign launched by Tencent contains rich and reusable design component resources, such as color system, text system, motion design, etc.",
		icon: "TDesign.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "tdesign:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tdesign\\.gtimg\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tdesign:dom:1",
				kind: "dom",
				selector: ".t-button__text, .t-layout",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "uikit",
		name: "UIKit",
		website: "https://getuikit.com",
		description: "UIKit is the framework used for developing iOS applications.",
		icon: "UIKit.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "uikit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("uikit.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uikit:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]+class=\"[^\"]*(?:uk-container|uk-section)"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "unocss",
		name: "UnoCSS",
		website: "https://uno.antfu.me/",
		description: "UnoCSS is instant on-demand Atomic CSS engine.",
		icon: "UnoCSS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "unocss:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("--un-(?:rotate|translate|space-x|text-opacity|border-opacity)"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "unocss:dom:1",
				kind: "dom",
				selector: "style[data-unocss]",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "uswds",
		name: "USWDS",
		website: "https://designsystem.digital.gov",
		description: "USWDS is a design system for the federal government.",
		icon: "USWDS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "uswds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\buswds\\b"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "uswds:jsGlobal:1",
				kind: "jsGlobal",
				property: "uswdsPresent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "vant",
		name: "Vant",
		website: "https://github.com/youzan/vant",
		description: "Vant is a lightweight, customisable Vue UI library for mobile web apps.",
		icon: "Vant.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "vant:dom:0",
				kind: "dom",
				selector: "link[href*='/npm/vant']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vant:dom:1",
				kind: "dom",
				selector: "link[href*='/vant-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vant:jsGlobal:2",
				kind: "jsGlobal",
				property: "vant.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vant:dom:3",
				kind: "dom",
				selector: "link[href*='/npm/vant'], link[href*='/vant-'], html[class*='van-doc-theme-dark']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"typescript",
		],
		requires: [
			"vue-js",
		],
	},
	{
		id: "vkui",
		name: "VKUI",
		website: "https://vkcom.github.io/VKUI",
		description: "VKUI is a set of React components with which you can create interfaces that are visually indistinguishable from our iOS and Android applications.",
		icon: "vk.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "vkui:dom:0",
				kind: "dom",
				selector: "html.vkui",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "vuetify",
		name: "Vuetify",
		website: "https://vuetifyjs.com",
		description: "Vuetify is a reusable semantic component framework for Vue.js that aims to provide clean, semantic and reusable components.",
		icon: "Vuetify.svg",
		categories: [
			"component-library",
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
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:vuetifyjs:vuetify:*:*:*:*:*:*:*:*",
		},
		implies: [
			"vue-js",
		],
	},
	{
		id: "w3-css",
		name: "W3.CSS",
		website: "https://www.w3schools.com/w3css/",
		description: "W3. CSS is a CSS framework developed by the World Wide Web Consortium (W3C), the main international standards organization for the World Wide Web.",
		icon: "W3.CSS.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "w3-css:dom:0",
				kind: "dom",
				selector: "link[href*='/w3.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "webawesome",
		name: "WebAwesome",
		website: "https://webawesome.com/",
		description: "Web Awesome is an open-source library of customizable, standards-based, and framework-agnostic UI components designed to support interoperable web interfaces.",
		icon: "WebAwesome.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "webawesome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/webawesome\\.loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webawesome:dom:1",
				kind: "dom",
				selector: "link[href*='/dist-cdn/styles/webawesome.css']",
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
	},
	{
		id: "xtrixui",
		name: "XtrixUI",
		website: "https://xtrixui.vercel.app",
		description: "XtrixUI is a CrossFramework UI library designed for building WebApps, regardless of design experience.",
		icon: "XtrixUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "xtrixui:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("XtrixUI"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "xtrixui:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("xtrixui"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "yamada-ui",
		name: "Yamada UI",
		website: "https://yamada-ui.com",
		description: "Yamada UI is a versatile React component library.",
		icon: "YamadaUI.svg",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "yamada-ui:dom:0",
				kind: "dom",
				selector: "a[aria-label*='Yamada UI']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "ant-design",
		name: "Ant Design",
		website: "https://ant.design/",
		description: "An enterprise-class UI design language and React UI library",
		categories: [
			"component-library",
			"styling-library",
		],
		rules: [
			{
				id: "ant-design:stylesheetContent:modern:0",
				kind: "stylesheetContent",
				pattern: new RegExp("antd"),
				confidence: 75,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:1",
				kind: "resourceUrl",
				pattern: new RegExp("antd[.\\-@/]"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:2",
				kind: "resourceUrl",
				pattern: new RegExp("ant-design[.\\-@/]"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:html:modern:3",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*ant-btn"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "ant-design:html:modern:4",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*ant-layout"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "ant-design:html:modern:5",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*ant-table"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "ant-design:html:modern:6",
				kind: "html",
				pattern: new RegExp("class=\"[^\"]*ant-modal"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:7",
				kind: "scriptContent",
				pattern: new RegExp("\"ant-design-icons\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:8",
				kind: "scriptContent",
				pattern: new RegExp("\\[Ant Design CSS-in-JS\\] Theme should have at least one derivative function"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:9",
				kind: "scriptContent",
				pattern: new RegExp("[\"']data-ant-cssinjs-cache-path[\"']"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:10",
				kind: "scriptContent",
				pattern: new RegExp("@ant-design\\/fast-color: unsupported input"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:11",
				kind: "scriptContent",
				pattern: new RegExp("@ant-design-icons"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:12",
				kind: "scriptContent",
				pattern: new RegExp("[\"']anticon[\"']"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:13",
				kind: "scriptContent",
				pattern: new RegExp("\\.displayName\\s*=\\s*[\"']AntdIcon[\"']"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:14",
				kind: "scriptContent",
				pattern: new RegExp("name:\\s*[\"']antd[\"']"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:15",
				kind: "scriptContent",
				pattern: new RegExp("antCls:\\s*[\"']\\.[\"']\\.concat\\("),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:16",
				kind: "scriptContent",
				pattern: new RegExp("[\"']data-rc-order[\"']:\\s*[\"']prependQueue[\"']"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:17",
				kind: "scriptContent",
				pattern: new RegExp("icon should be icon definiton, but got"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:18",
				kind: "scriptContent",
				pattern: new RegExp("ant-message-(?:notice|loading|success|error|warning|info)(?:-content)?"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:19",
				kind: "scriptContent",
				pattern: new RegExp("ant-notification-(?:notice|info|success|error|warning|close|btn)"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:20",
				kind: "scriptContent",
				pattern: new RegExp("ant-modal-(?:confirm|confirm-body|confirm-btns|confirm-title|wrap)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:21",
				kind: "scriptContent",
				pattern: new RegExp("ant-drawer-(?:wrapper-body|header-title|content-wrapper|mask)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:22",
				kind: "scriptContent",
				pattern: new RegExp("ant-form-item-(?:control-input|explain-(?:connected|error)|required-mark|margin|with-help|feedback-icon|extra)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:23",
				kind: "scriptContent",
				pattern: new RegExp("ant-select-(?:selection-(?:overflow|placeholder|search)|dropdown)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:24",
				kind: "scriptContent",
				pattern: new RegExp("ant-dropdown-menu-(?:submenu-(?:title|expand-icon)|title-content)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:25",
				kind: "scriptContent",
				pattern: new RegExp("ant-picker-(?:super-(?:prev|next)-icon|header-super-prev-btn|datetime-panel)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:26",
				kind: "scriptContent",
				pattern: new RegExp("ant-calendar-picker-(?:clear|separator|input|icon|container)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:27",
				kind: "scriptContent",
				pattern: new RegExp("ant-table-(?:filter-trigger-container|column-sorter-(?:up|down)|selection-extra|fixed-(?:right|left)|placeholder|measure-row)\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:28",
				kind: "scriptContent",
				pattern: new RegExp("anticon-(?:spin-dot-spin|loading-3-quarters|step-(?:forward|backward))\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:29",
				kind: "scriptContent",
				pattern: new RegExp("antd\\/(?:es|lib)\\/locale\\/[a-z]{2}_[A-Z]{2}\\b"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:30",
				kind: "scriptContent",
				pattern: new RegExp("ConfigProvider\\.config\\(\\{\\s*theme:\\s*\\{[^}]{0,500}token:"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:31",
				kind: "scriptContent",
				pattern: new RegExp("data-row-key=\"ant-table-row-[0-9]{1,10}\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:32",
				kind: "scriptContent",
				pattern: new RegExp("data-node-key=\"ant-tree-treenode-[0-9]{1,10}\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:scriptContent:modern:33",
				kind: "scriptContent",
				pattern: new RegExp("import\\s+(?:\\{[^}]*\\}|[^{}\\s]+)\\s+from\\s+['\"]antd(?:\\/[^'\"]*)?['\"]"),
				confidence: 55,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ant-design:stylesheetContent:modern:34",
				kind: "stylesheetContent",
				pattern: new RegExp("--ant-primary-color:\\s*[^;]*"),
				confidence: 65,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "ant-design:stylesheetContent:modern:35",
				kind: "stylesheetContent",
				pattern: new RegExp("--ant-font-size-base:\\s*[^;]*"),
				confidence: 65,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:36",
				kind: "resourceUrl",
				pattern: new RegExp("antd\\/(?:es|lib)\\/[^/]{1,50}\\/style\\/index\\.[jt]s$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:37",
				kind: "resourceUrl",
				pattern: new RegExp("antd\\/dist\\/(?:antd|reset)\\.(?:css|less)$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:38",
				kind: "resourceUrl",
				pattern: new RegExp("antd\\/(?:es|lib)\\/(?:message|notification|modal|table|form|select)\\/[^/]{1,50}\\.js$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:39",
				kind: "resourceUrl",
				pattern: new RegExp("antd\\/(?:es|lib)\\/locale\\/[a-z]{2}_[A-Z]{2}\\.js$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:40",
				kind: "resourceUrl",
				pattern: new RegExp("antd\\/(?:es|lib)\\/style\\/themes\\/(?:default|dark|compact)\\.less$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:41",
				kind: "resourceUrl",
				pattern: new RegExp("@ant-design\\/icons\\/lib\\/icons\\/[A-Z][^/]{1,50}\\.js$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ant-design:resourceUrl:modern:42",
				kind: "resourceUrl",
				pattern: new RegExp("@ant-design\\/icons-svg\\/inline-namespaced\\/$"),
				confidence: 45,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
		],
	},
	{
		id: "ariakit",
		name: "Ariakit",
		website: "https://ariakit.org/",
		description: "Toolkit for building accessible web apps with React",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "ariakit:scriptContent:modern:0",
				kind: "scriptContent",
				pattern: new RegExp("\\@ariakit\\/react"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ariakit:scriptContent:modern:1",
				kind: "scriptContent",
				pattern: new RegExp("\\@ariakit\\/core"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "ariakit:resourceUrl:modern:2",
				kind: "resourceUrl",
				pattern: new RegExp("ariakit"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "ariakit:html:modern:3",
				kind: "html",
				pattern: new RegExp("data-command"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "ariakit:html:modern:4",
				kind: "html",
				pattern: new RegExp("data-disclosure"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
		],
	},
	{
		id: "headless-ui",
		name: "Headless UI",
		website: "https://headlessui.com/",
		description: "Completely unstyled, fully accessible UI components",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "headless-ui:scriptContent:modern:0",
				kind: "scriptContent",
				pattern: new RegExp("\\@headlessui\\/react"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "headless-ui:scriptContent:modern:1",
				kind: "scriptContent",
				pattern: new RegExp("\\@headlessui\\/vue"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "headless-ui:resourceUrl:modern:2",
				kind: "resourceUrl",
				pattern: new RegExp("headlessui"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "headless-ui:html:modern:3",
				kind: "html",
				pattern: new RegExp("data-headlessui-state"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "headless-ui:html:modern:4",
				kind: "html",
				pattern: new RegExp("data-headlessui-focus"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
		],
	},
	{
		id: "radix-ui",
		name: "Radix UI",
		website: "https://www.radix-ui.com/",
		description: "Unstyled, accessible components for building high‑quality design systems",
		categories: [
			"component-library",
			"styling-library",
		],
		rules: [
			{
				id: "radix-ui:resourceUrl:modern:0",
				kind: "resourceUrl",
				pattern: new RegExp("@radix-ui\\/"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "radix-ui:resourceUrl:modern:1",
				kind: "resourceUrl",
				pattern: new RegExp("radix-ui"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:2",
				kind: "scriptContent",
				pattern: new RegExp("\"DialogContent\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:3",
				kind: "scriptContent",
				pattern: new RegExp("\"DialogTrigger\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:4",
				kind: "scriptContent",
				pattern: new RegExp("\"DialogOverlay\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:5",
				kind: "scriptContent",
				pattern: new RegExp("\"PopoverContent\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:6",
				kind: "scriptContent",
				pattern: new RegExp("\"PopoverTrigger\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:7",
				kind: "scriptContent",
				pattern: new RegExp("\"DropdownMenuContent\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:8",
				kind: "scriptContent",
				pattern: new RegExp("\"DropdownMenuTrigger\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:9",
				kind: "scriptContent",
				pattern: new RegExp("\"SelectContent\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:10",
				kind: "scriptContent",
				pattern: new RegExp("\"SelectTrigger\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:11",
				kind: "scriptContent",
				pattern: new RegExp("\"TooltipContent\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:12",
				kind: "scriptContent",
				pattern: new RegExp("\"TooltipTrigger\""),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:13",
				kind: "scriptContent",
				pattern: new RegExp("--radix-popover-"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:14",
				kind: "scriptContent",
				pattern: new RegExp("--radix-dropdown-"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:stylesheetContent:modern:15",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-popover-"),
				confidence: 65,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "radix-ui:stylesheetContent:modern:16",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-dropdown-"),
				confidence: 65,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "radix-ui:stylesheetContent:modern:17",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-tooltip-"),
				confidence: 65,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:18",
				kind: "scriptContent",
				pattern: new RegExp("\\[data-radix-[^\\]]*\\]"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:19",
				kind: "scriptContent",
				pattern: new RegExp("(?:\"var\\(--radix-[^)]*\\)\"|'var\\(--radix-[^)]*\\)'|var\\(--radix-[^)]*\\))"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:20",
				kind: "scriptContent",
				pattern: new RegExp("[a-zA-Z0-9_$]+\\.setAttribute\\(\"data-radix-focus-guard\",\\s*\".*?\"\\)"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:21",
				kind: "scriptContent",
				pattern: new RegExp("[\"']@radix-ui\\/(?:react|vue|svelte)-[a-z0-9-]+[\"']"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "radix-ui:stylesheetContent:modern:22",
				kind: "stylesheetContent",
				pattern: new RegExp("--radix-(?:accordion|alert-dialog|avatar|checkbox|collapsible|context-menu|dialog|dropdown-menu|hover-card|menu|navigation-menu|popover|radio-group|scroll-area|select|slider|tabs|toast|toggle-group|tooltip)-[a-z0-9-]+"),
				confidence: 75,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "radix-ui:stylesheetContent:modern:23",
				kind: "stylesheetContent",
				pattern: new RegExp("\\[data-radix-(?:accordion|alert-dialog|avatar|checkbox|collapsible|context-menu|dialog|dropdown-menu|hover-card|menu|navigation-menu|popover|radio-group|scroll-area|select|slider|tabs|toast|toggle-group|tooltip)(?:-[a-z0-9-]+)?\\]"),
				confidence: 75,
				description: "Stylesheet content matches a modern styling marker.",
			},
			{
				id: "radix-ui:scriptContent:modern:24",
				kind: "scriptContent",
				pattern: new RegExp("you can wrap it with our VisuallyHidden component\\.\\n\\nFor more information, see https:\\/\\/radix-ui\\.com\\/primitives\\/docs\\/components\\/"),
				confidence: 65,
				description: "Bundled script content matches a modern tooling marker.",
			},
		],
	},
	{
		id: "react-aria",
		name: "React Aria",
		website: "https://react-spectrum.adobe.com/react-aria/",
		description: "A library of React Hooks that provides accessible UI primitives",
		categories: [
			"component-library",
		],
		rules: [
			{
				id: "react-aria:scriptContent:modern:0",
				kind: "scriptContent",
				pattern: new RegExp("react-aria-components"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "react-aria:scriptContent:modern:1",
				kind: "scriptContent",
				pattern: new RegExp("\\@react-aria\\/"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "react-aria:scriptContent:modern:2",
				kind: "scriptContent",
				pattern: new RegExp("react-aria"),
				confidence: 75,
				description: "Bundled script content matches a modern tooling marker.",
			},
			{
				id: "react-aria:resourceUrl:modern:3",
				kind: "resourceUrl",
				pattern: new RegExp("react-aria"),
				confidence: 75,
				description: "Resource filename or URL matches a modern tooling marker.",
			},
			{
				id: "react-aria:html:modern:4",
				kind: "html",
				pattern: new RegExp("data-rac"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
			{
				id: "react-aria:html:modern:5",
				kind: "html",
				pattern: new RegExp("data-react-aria"),
				confidence: 65,
				description: "Document HTML matches a modern tooling marker.",
			},
		],
	},
] as const satisfies readonly TechnologyDefinition[];
