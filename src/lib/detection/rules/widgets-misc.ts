import type { TechnologyDefinition } from '../types';

export const widgetsMiscTechnologyDefinitions = [
	{
		id: "sulu-web",
		name: "@sulu/web",
		website: "https://github.com/sulu/web-js",
		icon: "Sulu.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sulu-web:jsGlobal:0",
				kind: "jsGlobal",
				property: "web.startComponents",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "hyperscript",
		name: "_hyperscript",
		website: "https://hyperscript.org",
		description: "_​hyperscript is a scripting language for adding interactivity to the front-end.",
		icon: "_hyperscript.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hyperscript:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/unpkg\\.com\\/hyperscript\\.org@([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hyperscript:jsGlobal:1",
				kind: "jsGlobal",
				property: "_hyperscript",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "accuweather",
		name: "AccuWeather",
		website: "https://partners.accuweather.com",
		description: "AccuWeather provides weather forecasts and warnings and additional weather products and services.",
		icon: "AccuWeather.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "accuweather:dom:0",
				kind: "dom",
				selector: "a[href*='.accuweather.com'][target='_blank']",
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
		id: "acquia-content-hub",
		name: "Acquia Content Hub",
		website: "https://www.acquia.com/products/drupal-cloud/content-hub",
		description: "Acquia Content Hub is a cloud-based, centralized content distribution and syndication service.",
		icon: "acquia-content-hub.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "acquia-content-hub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("content-hub\\.acquia\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquia-content-hub:url:1",
				kind: "url",
				pattern: new RegExp("https?:\\/\\/.+\\.content-hub\\.acquia\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "acquia-content-hub:dom:2",
				kind: "dom",
				selector: "[data-lift-slot]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acquia-content-hub:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("content-hub\\.acquia\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "acquire-cobrowse",
		name: "Acquire Cobrowse",
		website: "https://acquire.io/co-browsing",
		description: "Acquire Cobrowse is a safe and secure method of interacting with a customer's browser without downloading any additional software.",
		icon: "Acquire.svg",
		categories: [
			"widgets-misc",
			"media-video",
		],
		rules: [
			{
				id: "acquire-cobrowse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.acquire\\.io\\/cobrowse\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquire-cobrowse:jsGlobal:1",
				kind: "jsGlobal",
				property: "acquireCobrowseRTC",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acquire-cobrowse:jsGlobal:2",
				kind: "jsGlobal",
				property: "acquireCobrowseSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acquire-cobrowse:jsGlobal:3",
				kind: "jsGlobal",
				property: "acquireConfigNodeServer",
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
		id: "addshoppers",
		name: "AddShoppers",
		website: "https://www.addshoppers.com",
		description: "AddShoppers is the social media marketing command center for small-medium online retailers.",
		icon: "AddShoppers.png",
		categories: [
			"widgets-misc",
			"analytics",
		],
		rules: [
			{
				id: "addshoppers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn\\.)?shop\\.pe\\/widget\\/"),
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
		id: "addthis",
		name: "AddThis",
		website: "https://www.addthis.com",
		description: "AddThis is a social bookmarking service that can be integrated into a website with the use of a web widget.",
		icon: "AddThis.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "addthis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addthis\\.com\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "addthis:jsGlobal:1",
				kind: "jsGlobal",
				property: "addthis",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "addtoany",
		name: "AddToAny",
		website: "https://www.addtoany.com",
		description: "AddToAny is a universal sharing platform that can be integrated into a website by use of a web widget or plugin.",
		icon: "AddToAny.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "addtoany:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addtoany\\.com\\/menu\\/page\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "addtoany:jsGlobal:1",
				kind: "jsGlobal",
				property: "a2apage_init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "admiral",
		name: "Admiral",
		website: "https://www.getadmiral.com",
		description: "Admiral is a Visitor Relationship Management (VRM) platform.",
		icon: "Admiral.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "admiral:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("admiral(?:-engaged|:enabled)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "admiral:jsGlobal:1",
				kind: "jsGlobal",
				property: "admiral",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "airrobe",
		name: "AirRobe",
		website: "https://airrobe.com",
		description: "AirRobe partners with brands and retailers to power the circular fashion economy.",
		icon: "AirRobe.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "airrobe:jsGlobal:0",
				kind: "jsGlobal",
				property: "airrobe.app_id",
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
		id: "airtable",
		name: "Airtable",
		website: "https://www.airtable.com",
		description: "Airtable is a low-code platform for building collaborative apps.",
		icon: "Airtable.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "airtable:dom:0",
				kind: "dom",
				selector: "iframe[scr*='//airtable.com/'], a[href*='//airtable.com/'][target='_blank']",
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
		id: "algolia-docsearch",
		name: "Algolia DocSearch",
		website: "https://docsearch.algolia.com",
		description: "Algolia DocSearch is a search widget specifically designed for documentation websites.",
		icon: "DocSearch.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "algolia-docsearch:jsGlobal:0",
				kind: "jsGlobal",
				property: "docsearch.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "algolia-docsearch:dom:1",
				kind: "dom",
				selector: "link[href*='.algolia.net'][rel='preconnect']",
				description: "DOM selector matches a known technology marker.",
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
		implies: [
			"algolia",
		],
	},
	{
		id: "amaze-ui",
		name: "Amaze UI",
		website: "https://amazeui.shopxo.net/",
		description: "Amaze UI is a mobile-first JavaScript library designed to simplify front-end development.",
		icon: "Amaze UI.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "amaze-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:js\\/)?)?amazeui(?:\\/js\\/jquery)?(?:\\.widgets)?(?:\\.helper)?(?:\\.legacy)?(?:\\.min)?\\.js"),
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
	},
	{
		id: "amplify-js",
		name: "Amplify JS",
		website: "https://amplifyjs.com/",
		description: "AmplifyJS is a set of components designed to solve common web application problems with a simplistic API. Amplify's goal is to simplify all forms of data handling by providing a unified API for various data sources.",
		icon: "Amplify JS.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "amplify-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?amplify(?:-production)?(?:\\.core)?(?:\\.store)?(?:\\.min)?(?:[-\\.][\\d\\w]{0,40})?\\.js"),
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
	},
	{
		id: "answerbase",
		name: "Answerbase",
		website: "https://answerbase.com",
		description: "Answerbase is a management platform for customer support and ecommerce, allowing users to ask questions, receive answers, and browse content and articles to meet their demand for information about products and services.",
		icon: "Answerbase.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "answerbase:jsGlobal:0",
				kind: "jsGlobal",
				property: "loadAnswerbaseCTAWidget",
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
		id: "answerdash",
		name: "AnswerDash",
		website: "https://www.answerdash.com",
		description: "AnswerDash is a question and answer platform that serves business customers thereby reducing support costs and revealing customer needs.",
		icon: "AnswerDash.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "answerdash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.answerdash\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "answerdash:jsGlobal:1",
				kind: "jsGlobal",
				property: "AnswerDash",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "answerdash:jsGlobal:2",
				kind: "jsGlobal",
				property: "AnswerDash.__plugin",
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
		id: "anythingslider",
		name: "AnythingSlider",
		website: "https://css-tricks.com/anythingslider-jquery-plugin/",
		description: "A robust jQuery-based slider plugin.",
		icon: "AnythingSlider.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "anythingslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("anythingslider(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "apollo",
		name: "Apollo",
		website: "https://www.apollographql.com",
		description: "Apollo is a fully-featured caching GraphQL client with integrations for React, Angular, and more.",
		icon: "Apollo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "apollo:dom:0",
				kind: "dom",
				selector: "script#__APOLLO_STATE__",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apollo:jsGlobal:1",
				kind: "jsGlobal",
				property: "__APOLLO_CLIENT__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apollo:jsGlobal:2",
				kind: "jsGlobal",
				property: "__APOLLO_CLIENT__.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apollo:jsGlobal:3",
				kind: "jsGlobal",
				property: "__NEXT_DATA__.props.pageProps.__APOLLO_STATE__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apollo:header:4",
				kind: "header",
				key: "Access-Control-Allow-Headers",
				valuePattern: new RegExp("^x-apollo-tracing", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "apollo:jsGlobal:5",
				kind: "jsGlobal",
				property: "__APOLLO_STATE__",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"graphql",
			"typescript-confidence-50",
		],
	},
	{
		id: "appcues",
		name: "Appcues",
		website: "https://www.appcues.com/",
		description: "Appcues is a solution for measuring and improving product adoption.",
		icon: "Appcues.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "appcues:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fast\\.appcues\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appcues:jsGlobal:1",
				kind: "jsGlobal",
				property: "Appcues",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "appuonline",
		name: "AppuOnline",
		website: "https://www.appuonline.com",
		description: "AppuOnline is a tool that provides embeddable stock charts for integration into websites or applications.",
		icon: "AppuOnline.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "appuonline:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.appuonline.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "arena",
		name: "Arena",
		website: "https://arena.im",
		description: "Arena widget is an embeddable widget provided by the Arena platform, which allows users to embed live blogs directly on their website.",
		icon: "Arena.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "arena:dom:0",
				kind: "dom",
				selector: "iframe[scr*='//go.arena.im/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "arena:jsGlobal:1",
				kind: "jsGlobal",
				property: "arenaHub.arenaIdentify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arena:jsGlobal:2",
				kind: "jsGlobal",
				property: "arenaLiveblog",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arena:jsGlobal:3",
				kind: "jsGlobal",
				property: "arenaim.initializeLiveblog",
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
		id: "arengu",
		name: "Arengu",
		website: "https://www.arengu.com",
		description: "Arengu is an online form builder designed to streamline user onboarding.",
		icon: "Arengu.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
		],
		rules: [
			{
				id: "arengu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.arengu\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "arm-js",
		name: "ARM JS",
		website: "https://github.com/michaeljymsgutierrez/arm-js-library",
		description: "ARM JS is a JavaScript library that centralizes data management and streamlines interactions with APIs.",
		icon: "ARMJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "arm-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "ARM.aliases",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "autocomplete-js",
		name: "autoComplete.js",
		website: "https://tarekraafat.github.io/autoComplete.js",
		description: "autoComplete.js is a simple, pure vanilla Javascript library.",
		icon: "autoComplete.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "autocomplete-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("@tarekraafat\\/autocomplete\\.js@([\\d\\.]+)\\/"),
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
	},
	{
		id: "avasize",
		name: "Avasize",
		website: "https://www.avasize.com",
		icon: "Avasize.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "avasize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/cdn\\.avasize\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "azure-edge-network",
		name: "Azure Edge Network",
		website: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
		description: "Azure Edge Network is a global network infrastructure provided by Microsoft Azure. It is designed to deliver content, applications, and services to end-users with low latency and high performance. The Azure Edge Network consists of a combination of Azure Content Delivery Network (CDN), Azure Front Door, and Azure Traffic Manager.",
		icon: "Azure.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "azure-edge-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.azureedge\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "azure-edge-network:dom:1",
				kind: "dom",
				selector: "link[href*='.azureedge.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "azure-edge-network:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.azureedge\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "babel",
		name: "Babel",
		website: "https://babeljs.io",
		description: "Babel is a free and open-source transcompiler for writing next generation JavaScript.",
		icon: "Babel.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "babel:jsGlobal:0",
				kind: "jsGlobal",
				property: "_babelPolyfill",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "babylist",
		name: "Babylist",
		website: "https://www.babylist.com",
		description: "Babylist is a universal wish list.",
		icon: "Babylist.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "babylist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("babylist\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "bandsintown-events-widget",
		name: "BandsInTown Events Widget",
		website: "https://artists.bandsintown.com/support/events-widget",
		description: "Bandsintown Events Widget is a free widget which makes it simple to embed your event listings and allow fans to buy tickets, RSVP, follow you and join your Email & SMS lists.",
		icon: "BandsInTown.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "bandsintown-events-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.bandsintown\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "barba-js",
		name: "Barba.js",
		website: "https://barba.js.org",
		description: "Barba.js is a small and easy-to-use javascript library that helps you creating fluid and smooth transitions between your website's pages.",
		icon: "Barba.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "barba-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "barba.version",
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
		},
	},
	{
		id: "basket-js",
		name: "basket.js",
		website: "https://addyosmani.github.io/basket.js/",
		description: "basket.js is a JavaScript library for caching and loading scripts with localStorage.",
		icon: "basket.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "basket-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "basket.isValidItem",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "bdow",
		name: "BDOW",
		website: "https://bdow.com/",
		description: "BDOW is a plugin offering set of marketing tools to automate a website's growth. These tools help drive extra traffic, engage visitors, increase email subscribers and build community.",
		icon: "Bdow.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "bdow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sumo(?:me)?\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bdow:jsGlobal:1",
				kind: "jsGlobal",
				property: "sumo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bdow:jsGlobal:2",
				kind: "jsGlobal",
				property: "sumome",
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
		id: "beyond",
		name: "Beyond",
		website: "https://www.getbeyond.io",
		description: "Beyond is a slide-out panels system designed to expand or retract sections within a structure for flexible space management.",
		icon: "Beyond.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "beyond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getbeyond\\.io"),
				description: "Script source URL matches a known technology marker.",
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
		id: "boba-js",
		name: "Boba.js",
		website: "https://boba.space150.com",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "boba-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("boba(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"google-analytics",
		],
	},
	{
		id: "bokun",
		name: "Bokun",
		website: "https://www.bokun.io",
		description: "Bokun is a cloud-based booking management solution which enables small to large travel and tourism businesses manage reservations, products content, images, categorisation, pricing, inventory, and payments.",
		icon: "Bokun.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "bokun:jsGlobal:0",
				kind: "jsGlobal",
				property: "BokunWidgetEmbedder",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:1",
				kind: "jsGlobal",
				property: "__bokunWidgets",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:2",
				kind: "jsGlobal",
				property: "bokunBookingChannelUUID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:3",
				kind: "jsGlobal",
				property: "bokunSessionId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:4",
				kind: "jsGlobal",
				property: "BokunWidgets",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:5",
				kind: "jsGlobal",
				property: "__BokunWidgetsLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bokun:jsGlobal:6",
				kind: "jsGlobal",
				property: "bokunPolyfillReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "booking-com-widget",
		name: "Booking.com widget",
		website: "https://www.booking.com/affiliate-program/v2/selfmanaged.html",
		description: "Booking.com is one of the largest ecommerce travel companies in the world. As an affiliate member, you can make up to 40% commission.",
		icon: "Booking.com.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "booking-com-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("q\\.bstatic\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "booking-com-widget:dom:1",
				kind: "dom",
				selector: "form[action*='.booking.com/'][target='_blank'], img[src*='q-xx.bstatic.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"booking-com",
		],
	},
	{
		id: "bookingkit",
		name: "Bookingkit",
		website: "https://bookingkit.net/",
		description: "Bookingkit is an online booking management solution. Bookingkit helps its users generate PDF invoices, manage day-to-day scheduling operations, and automatically sync availabilities in real time.",
		icon: "Bookingkit.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookingkit:jsGlobal:0",
				kind: "jsGlobal",
				property: "BookingKitApp",
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
		id: "booksy",
		name: "Booksy",
		website: "https://booksy.com/",
		description: "Booksy is a booking system for people looking to schedule appointments for health and beauty services.",
		icon: "Booksy.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "booksy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booksy\\.com\\/widget\\/code\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "booksy:jsGlobal:1",
				kind: "jsGlobal",
				property: "booksy",
				description: "Page-owned global matches a known technology marker.",
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
		id: "boomerang",
		name: "Boomerang",
		website: "https://akamai.github.io/boomerang",
		description: "boomerang is a JavaScript library that measures the page load time experienced by real users, commonly called RUM (Real User Measurement).",
		icon: "boomerang.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "boomerang:jsGlobal:0",
				kind: "jsGlobal",
				property: "BOOMR",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boomerang:jsGlobal:1",
				kind: "jsGlobal",
				property: "BOOMR_lstart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boomerang:jsGlobal:2",
				kind: "jsGlobal",
				property: "BOOMR_mq",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "bootbox-js",
		name: "Bootbox.js",
		website: "https://bootboxjs.com/",
		description: "Bootbox.js is a small JavaScript library which allows you to create custom modal dialogs using Bootstrap modals, without having to worry about creating, managing, or removing any of the required DOM elements or JavaScript event handlers.",
		icon: "Bootbox.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "bootbox-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?bootbox(?:\\.min)?\\.js"),
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
	},
	{
		id: "bowser",
		name: "bowser",
		website: "https://opencollective.com/bowser",
		description: "A small, fast and rich-API browser/platform/engine detector for both browser and node.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "bowser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?bowser(?:\\.min)?(?:[-\\.][\\d\\w]{0,64})?\\.js"),
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
	},
	{
		id: "browser-update-org",
		name: "Browser-Update.org",
		website: "https://browser-update.org",
		description: "Browser-update.org is a tool to unobtrusively notify visitors that they should update their web browser in order to use your website.",
		icon: "Browser-Update.org.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "browser-update-org:jsGlobal:0",
				kind: "jsGlobal",
				property: "$bu_.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "browser-update-org:jsGlobal:1",
				kind: "jsGlobal",
				property: "$bu_getBrowser",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "buildertrend",
		name: "Buildertrend",
		website: "https://buildertrend.com",
		icon: "Buildertrend.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "buildertrend:dom:0",
				kind: "dom",
				selector: "iframe[src*='buildertrend.net'], script[src*='buildertrend.net']",
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
		id: "buttonizer",
		name: "Buttonizer",
		website: "https://buttonizer.pro",
		description: "Buttonizer is a widget that enables website owners to incorporate custom and attention-grabbing call-to-action (CTA) buttons into their website design.",
		icon: "Buttonizer.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "buttonizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content\\/plugins\\/buttonizer-multifunctional-button\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buttonizer:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.buttonizer\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buttonizer:jsGlobal:2",
				kind: "jsGlobal",
				property: "Buttonizer",
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
	},
	{
		id: "buy-me-a-coffee",
		name: "Buy me a coffee",
		website: "https://www.buymeacoffee.com",
		description: "Buy me a coffee is a service for online content creators that they may use to receive tips and donations to support their work.",
		icon: "Buy me a coffee.svg",
		categories: [
			"widgets-misc",
			"fundraising-donations",
		],
		rules: [
			{
				id: "buy-me-a-coffee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.buymeacoffee\\.com\\/([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buy-me-a-coffee:dom:1",
				kind: "dom",
				selector: "a[href*='www.buymeacoffee.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		id: "buy-with-prime",
		name: "Buy with Prime",
		website: "https://buywithprime.amazon.com",
		description: "Buy with Prime is a feature offered by Amazon that allows Amazon Prime members to make purchases with the benefits associated with their Prime membership.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "buy-with-prime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.buywithprime\\.amazon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "buy-with-prime:jsGlobal:1",
				kind: "jsGlobal",
				property: "bwp.sku",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"recurring",
			],
		},
		implies: [
			"amazon-pay",
		],
	},
	{
		id: "buyee",
		name: "Buyee",
		website: "https://buyee.jp",
		description: "Buyee is a widget that facilitates purchasing products from Japan.",
		icon: "Buyee.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "buyee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.buyee\\.jp"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bvalidator",
		name: "bValidator",
		website: "https://code.google.com/archive/p/bvalidator",
		description: "bValidator is a jQuery plug-in for client side form validation.",
		icon: "bValidator.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "bvalidator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jquery\\.bvalidator\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bvalidator:jsGlobal:1",
				kind: "jsGlobal",
				property: "bValidator",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "c3-js",
		name: "C3.js",
		website: "https://c3js.org/",
		description: "D3 based reusable chart library",
		icon: "C3.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "c3-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c3(?:\\.min)?(?:-[a-zA-Z0-9]{8})?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "c3-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("c3(?:\\.min)?(?:-[a-za-z0-9]{8})?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		requires: [
			"d3",
		],
	},
	{
		id: "caast-tv",
		name: "Caast.tv",
		website: "https://en.caast.tv",
		description: "Caast.tv is a digital commercial animation solution integrated into the ecommerce customer journey.",
		icon: "Caast.tv.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "caast-tv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.caast\\.tv\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "caast-tv:jsGlobal:1",
				kind: "jsGlobal",
				property: "caast.open",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "caast-tv:jsGlobal:2",
				kind: "jsGlobal",
				property: "caastInstance",
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
		id: "callpage",
		name: "CallPage",
		website: "https://www.callpage.io",
		description: "CallPage is a lead capture tool that automatically schedules callbacks and meetings with potential customers, enhancing lead management efficiency.",
		icon: "CallPage.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "callpage:jsGlobal:0",
				kind: "jsGlobal",
				property: "callpage.__cp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "callpage:jsGlobal:1",
				kind: "jsGlobal",
				property: "callpage.__cp.version",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "callpage:jsGlobal:2",
				kind: "jsGlobal",
				property: "callpageWebpackJsonp",
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
		id: "camanjs",
		name: "CamanJS",
		website: "https://github.com/meltingice/CamanJS",
		description: "CamanJS is a JavaScript library designed for image editing directly on the browser, allowing manipulation of canvas elements.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "camanjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "Caman",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "camanjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "Caman.version.release",
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
		id: "campusgroups",
		name: "CampusGroups",
		website: "https://www.readyeducation.com/en-us/campusgroups",
		description: "CampusGroups is a student engagement platform that supports community building by facilitating broad student participation across campus organizations and activities.",
		icon: "CampusGroups.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "campusgroups:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^CG\\.SessionID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "canopy-connect",
		name: "Canopy Connect",
		website: "https://www.usecanopy.com",
		description: "Canopy Connect is a tool that enables instant collection of insurance information for verification, analysis, or onboarding processes.",
		icon: "CanopyConnect.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "canopy-connect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usecanopy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "canopy-connect:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.usecanopy.com/']",
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
		id: "captivate-fm",
		name: "Captivate.fm",
		website: "https://www.captivate.fm",
		description: "Captivate.fm is a podcast hosting and analytics platform that provides tools for creating, hosting, and distributing podcasts.",
		icon: "Captivate.fm.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "captivate-fm:dom:0",
				kind: "dom",
				selector: "iframe[src*='player.captivate.fm/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "captivate-fm:jsGlobal:1",
				kind: "jsGlobal",
				property: "CAPTIVATE_PLAYER_APP_URL",
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
		id: "carbonfact",
		name: "Carbonfact",
		website: "https://www.carbonfact.com",
		description: "Carbonfact is a platform for fashion brands to manage their carbon emissions. It enables the measurement, reporting, and reduction of emissions in the apparel, textile, leather, and luxury sectors.",
		icon: "Carbonfact.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "carbonfact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.carbonfact\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "carbonfact:jsGlobal:1",
				kind: "jsGlobal",
				property: "carbonfact.refreshModule",
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
		id: "cart-js",
		name: "Cart.js",
		website: "https://cartjs.org",
		description: "Cart.js is a very small open-source Javascript library that makes the addition of powerful Ajax cart functionality to your Shopify theme a breeze.",
		icon: "Cart.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "cart-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:shopify-cartjs\\/([\\d\\.]+)|assets)\\/rivets-cart\\.min\\.js"),
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
			"shopify",
		],
	},
	{
		id: "cgit",
		name: "cgit",
		website: "https://git.zx2c4.com/cgit",
		description: "cgit is a web interface (cgi) for Git repositories, written in C. licensed under GPLv2.",
		icon: "cgit.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "cgit:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^cgit v([\\d.a-z-]+)$", "i"),
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
		implies: [
			"c",
			"git",
		],
	},
	{
		id: "chai",
		name: "Chai",
		website: "https://www.chaijs.com",
		description: "Chai is a BDD / TDD assertion library for node and the browser that can be paired with any javascript testing framework.",
		icon: "Chai.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "chai:jsGlobal:0",
				kind: "jsGlobal",
				property: "chai",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chai:jsGlobal:1",
				kind: "jsGlobal",
				property: "chai.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "chameleon",
		name: "Chameleon",
		website: "https://www.trychameleon.com",
		description: "Chameleon is a sophisticated no-code platform for product success, empowering SaaS teams to build self-service user onboarding, feature adoption, and feedback collection.",
		icon: "Chameleon.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "chameleon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trychameleon\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chameleon:jsGlobal:1",
				kind: "jsGlobal",
				property: "chmln.Snippet.urls.fast",
				valuePattern: new RegExp("fast\\.trychameleon\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chameleon:jsGlobal:2",
				kind: "jsGlobal",
				property: "chmlnData.organizationAttributes",
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
		id: "chameleon-power",
		name: "Chameleon Power",
		website: "https://chameleonpower.com",
		description: "Chameleon Power is a software platform that enables visualization, design, decoration, and selection of digital images and materials.",
		icon: "ChameleonPower.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "chameleon-power:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chameleonpower\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chameleon-power:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChamStats.addEvent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:hyphensolutions:chameleon_power:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "chatango",
		name: "Chatango",
		website: "https://chatango.com",
		description: "Chatango is a website used for connecting to a large selection of users.",
		icon: "Chatango.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "chatango:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("st\\.chatango\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatango:dom:1",
				kind: "dom",
				selector: "iframe[src*='st.chatango.com']",
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
		id: "checkfront",
		name: "Checkfront",
		website: "https://www.checkfront.com",
		description: "Checkfront is a cloud-based booking management application and ecommerce platform.",
		icon: "Checkfront.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "checkfront:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.checkfront\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "checkin",
		name: "Checkin",
		website: "https://www.checkin.no",
		description: "Checkin is a system that automates registration processes.",
		icon: "Checkin.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "checkin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("registration\\.checkin\\.no"),
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
		id: "choices",
		name: "Choices",
		website: "https://github.com/Choices-js/Choices",
		description: "Choices.js is a lightweight, configurable select box/text input plugin.",
		icon: "Choices.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "choices:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("choices\\.js(?:@|\\/)?([\\d\\.]+)?.+choices\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "choices:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/modules\\/choices\\/js\\/choices\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "choices:jsGlobal:2",
				kind: "jsGlobal",
				property: "Choices",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "chroma-js",
		name: "chroma.js",
		website: "https://www.vis4.net/chromajs/",
		description: "chroma.js is a small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "chroma-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chroma(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chroma-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?chroma(?:\\.min)?\\.js"),
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
	},
	{
		id: "classnames",
		name: "Classnames",
		website: "https://jedwatson.github.io/classnames/",
		description: "Javascript utility for conditionally joining classNames together.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "classnames:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("classnames\\.?\\w{0,20}(?:\\.chunk)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "cleave-js",
		name: "Cleave.js",
		website: "https://nosir.github.io/cleave.js/",
		description: "JavaScript library for formatting input text content when you are typing.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "cleave-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cleave(?:\\.min)?(?:\\.\\w{0,32})?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "clientjs",
		name: "ClientJS",
		website: "https://clientjs.org",
		description: "ClientJS is a JavaScript library for generating browser fingerprints, exposing all the browser data-points.",
		icon: "ClientJS.png",
		categories: [
			"widgets-misc",
			"privacy-compliance",
		],
		rules: [
			{
				id: "clientjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/clientjs@(\\d.*?)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clientjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/ClientJS\\/(?:(\\d.*?)\\/)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clientjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "ClientJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clientjs:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\/clientjs@([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clientjs:scriptSrc:4",
				kind: "scriptSrc",
				pattern: new RegExp("\\/ClientJS\\/([\\d.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clientjs:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("\\/clientjs\\/([\\d.]+)\\/"),
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
	},
	{
		id: "clipboard-js",
		name: "Clipboard.js",
		website: "https://clipboardjs.com/",
		description: "Clipboard.js is a JavaScript library for copy-to-clipboard interactions.",
		icon: "Clipboard.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "clipboard-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clipboard(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "closure-library",
		name: "Closure Library",
		website: "https://github.com/google/closure-library",
		description: "Closure Library is a JavaScript library developed by Google for building robust web applications, offering utilities for DOM manipulation, event handling, data structures, and more.",
		icon: "Google.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "closure-library:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:closure-library|goog/base\\.js|closure/goog)", "i"),
				description: "Script source URL contains a Closure Library marker.",
			},
			{
				id: "closure-library:html:2",
				kind: "html",
				pattern: new RegExp("Copyright\\s+The\\s+Closure\\s+Library\\s+Authors", "i"),
				confidence: 90,
				description: "Document HTML contains the Closure Library copyright marker.",
			},
			{
				id: "closure-library:text:1",
				kind: "text",
				pattern: new RegExp("Copyright\\sThe\\sClosure\\sLibrary\\sAuthors"),
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:google:closure_library:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cloverly",
		name: "Cloverly",
		website: "https://www.cloverly.com",
		description: "Cloverly is an API integration for ethical ecommerce brands to help their customers offset the carbon footprint of their online transactions.",
		icon: "Cloverly.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "cloverly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.cloverly\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cloverly:jsGlobal:1",
				kind: "jsGlobal",
				property: "removeCloverly",
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
		id: "coconstruct",
		name: "CoConstruct",
		website: "https://www.coconstruct.com",
		icon: "CoConstruct.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "coconstruct:dom:0",
				kind: "dom",
				selector: "a[href*='co-construct.com/skins'], iframe[src*='co-construct.com']",
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
		id: "coconutsoftware",
		name: "CoconutSoftware",
		website: "https://www.coconutsoftware.com/",
		description: "Coconut is a cloud-based appointment scheduling solution designed for enterprise financial services organisations such as credit unions, retail banks and more.",
		icon: "CoconutSoftware.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "coconutsoftware:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^coconut_calendar$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
	},
	{
		id: "cocos2d",
		name: "Cocos2d",
		website: "https://www.cocos.com/en/cocos2dx",
		description: "Cocos2d is a mature open source cross-platform game development framework.",
		icon: "Cocos2d.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "cocos2d:jsGlobal:0",
				kind: "jsGlobal",
				property: "CocosEngine",
				valuePattern: new RegExp("([\\d\\.]{2,})"),
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
		id: "codesandbox",
		name: "CodeSandbox",
		website: "https://codesandbox.io/",
		description: "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.",
		icon: "CodeSandbox.svg",
		categories: [
			"widgets-misc",
			"rich-text-editors",
		],
		rules: [
			{
				id: "codesandbox:dom:0",
				kind: "dom",
				selector: "iframe[src^='https://codesandbox.io/embed/']",
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
		id: "colbass",
		name: "Colbass",
		website: "https://colbass.com",
		description: "Colbass is AI System that transforms text into real-human voiceovers.",
		icon: "colbass.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "colbass:jsGlobal:0",
				kind: "jsGlobal",
				property: "colbassRunning",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "comeet",
		name: "Comeet",
		website: "https://www.comeet.com",
		description: "Comeet is an Collaborative Recruiting, and Applicant Tracking System.",
		icon: "comeet.svg",
		categories: [
			"widgets-misc",
			"business-tools",
		],
		rules: [
			{
				id: "comeet:jsGlobal:0",
				kind: "jsGlobal",
				property: "COMEET",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "comeet:jsGlobal:1",
				kind: "jsGlobal",
				property: "comeetInit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "community-box",
		name: "Community Box",
		website: "https://www.communitybox.co",
		description: "Community Box is a tool that allows users to create directories within a website without writing any code.",
		icon: "CommunityBox.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "community-box:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cfapi\\.communitybox\\.co"),
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
		id: "conditional-fields-for-contact-form-7",
		name: "Conditional Fields for Contact Form 7",
		website: "https://wordpress.org/plugins/cf7-conditional-fields",
		description: "Adds conditional logic to Contact Form 7.",
		icon: "Conditional Fields for Contact Form 7.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "conditional-fields-for-contact-form-7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cf7-conditional-fields(?:\\/js)?(?:\\/scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "conditional-fields-for-contact-form-7:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/cf7-conditional-fields/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"contact-form-7",
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "contentviews",
		name: "ContentViews",
		website: "https://wordpress.org/plugins/content-views-query-and-display-post-page/",
		description: "ContentViews is a lightweight and user-friendly WordPress Plugin, crafted specifically for efficient content management and display. This plugin offers seamless integration with Widgets and enables users to showcase their posts, pages, or custom post types in a highly responsive grid, list, or timeline layout.",
		icon: "ContentViews.svg",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "contentviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("content-views(?:-pro)?(?:-query-and-display-post-page)?(?:\\/public)?(?:\\/assets)?(?:\\/js)?(?:\\/cv(?:pro)?)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "contentviews:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/content-views-query-and-display-post-page/'], link[href*='/wp-content/plugins/pt-content-views-pro/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
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
		id: "contextual-related-posts",
		name: "Contextual Related Posts",
		website: "https://wordpress.org/plugins/contextual-related-posts/",
		description: "Add related posts to your WordPress site with inbuilt caching.",
		icon: "Contextual Related Posts.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "contextual-related-posts:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/contextual-related-posts/']",
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
		id: "contrib",
		name: "Contrib",
		website: "https://www.contrib.com",
		description: "Contrib is a crypto marketplace widget that enables users to back and fund businesses through blockchain-based transactions.",
		icon: "Contrib.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "contrib:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.contrib\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "contrib:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^contrib$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cool-tag-cloud",
		name: "Cool Tag Cloud",
		website: "https://wordpress.org/plugins/cool-tag-cloud",
		description: "A simple tag cloud system for WordPress.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cool-tag-cloud:dom:0",
				kind: "dom",
				selector: "link#cool-tag-cloud-css[href*='/wp-content/plugins/cool-tag-cloud/'], .cool-tag-cloud, .widget_cool_tag_cloud, .cool-tag-cloud-open, .cool-tag-cloud-close, .cool-tag-cloud-inner",
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
		id: "cool-timeline",
		name: "Cool Timeline",
		website: "https://wordpress.org/plugins/cool-timeline",
		description: "Creates vertical and horizontal history timeline blocks.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "cool-timeline:dom:0",
				kind: "dom",
				selector: "link[href*='/plugins/cool-timeline/'], script[src*='/cool-timeline/'], .cooltimeline-body",
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
		id: "copypoison",
		name: "CopyPoison",
		website: "https://copypoison.com/",
		description: "Copypoison is a plagarism protection tool that protects content by replacing text with symbols that are visually similar.",
		icon: "Copypoison.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "copypoison:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("copypoison\\.com\\/cp\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "core-js",
		name: "core-js",
		website: "https://github.com/zloirock/core-js",
		description: "core-js is a modular standard library for JavaScript, with polyfills for cutting-edge ECMAScript features.",
		icon: "core-js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "core-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "__core-js_shared__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "core-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "__core-js_shared__.versions.0.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "core-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "_babelPolyfill",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "core-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "core",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "core-js:jsGlobal:4",
				kind: "jsGlobal",
				property: "core.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "countdown-timer-ultimate",
		name: "Countdown Timer Ultimate",
		website: "https://wordpress.org/plugins/countdown-timer-ultimate",
		description: "Add and display responsive Countdown timer on your website.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "countdown-timer-ultimate:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/countdown-timer-ultimate/']",
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
		id: "crayon-syntax-highlighter",
		name: "Crayon Syntax Highlighter",
		website: "https://wordpress.org/plugins/crayon-syntax-highlighter/",
		description: "Syntax Highlighter supporting multiple languages, themes, fonts, highlighting from a URL, local file or post text.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "crayon-syntax-highlighter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("crayon-syntax-highlighter(?:\\/js)?(?:\\/min)?(?:\\/crayon)?(?:\\.te)?(?:\\.min)?\\.js(?:\\?v(?:er)?=_((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crayon-syntax-highlighter:dom:1",
				kind: "dom",
				selector: "link#crayon-css, link#crayon",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "crayon-syntax-highlighter:jsGlobal:2",
				kind: "jsGlobal",
				property: "CrayonSyntaxSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crayon-syntax-highlighter:jsGlobal:3",
				kind: "jsGlobal",
				property: "CrayonSyntaxStrings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crayon-syntax-highlighter:jsGlobal:4",
				kind: "jsGlobal",
				property: "CrayonTagEditorSettings",
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
		id: "crobox",
		name: "Crobox",
		website: "https://crobox.com/",
		icon: "Crobox.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "crobox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.crobox\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crobox:jsGlobal:1",
				kind: "jsGlobal",
				property: "crobox",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "crownpeak",
		name: "CrownPeak",
		website: "https://www.crownpeak.com",
		description: "CrownPeak is a cloud-based Digital Experience Management (DEM) platform that is designed to in the management of digital experiences across multiple touch-points, especially for marketing and a freer IT architecture.",
		icon: "CrownPeak.png",
		categories: [
			"widgets-misc",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "crownpeak:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/crownpeak\\."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crownpeak:jsGlobal:1",
				kind: "jsGlobal",
				property: "CrownPeakAutocomplete",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crownpeak:jsGlobal:2",
				kind: "jsGlobal",
				property: "CrownPeakSearch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crownpeak:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("crownpeak\\.net"),
				description: "Script content contains a bounded technology signature.",
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
		id: "crypto-js",
		name: "crypto-js",
		website: "https://github.com/brix/crypto-js",
		description: "crypto-js is a JavaScript library that implements common cryptographic algorithms and encodings.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "crypto-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d\\.-]+))?\\/crypto-js(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crypto-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "CryptoJS.Rabbit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crypto-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "CryptoJS.algo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:crypto-js_project:crypto-js:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ctawidget",
		name: "CTAwidget",
		website: "https://ctawidget.ru",
		description: "CTAwidget is a tool designed to increase website conversion through customizable widgets aimed at enhancing user engagement and optimizing conversion rates.",
		icon: "CTAwidget.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ctawidget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ctawidget\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ctawidget:jsGlobal:1",
				kind: "jsGlobal",
				property: "get_visible_cta",
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
		id: "custom-twitter-feeds",
		name: "Custom Twitter Feeds",
		website: "https://wordpress.org/plugins/custom-twitter-feeds",
		description: "Custom Twitter Feeds for Wordpress.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "custom-twitter-feeds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("custom-twitter-feeds(?:\\/js)?(?:\\/ctf-scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "custom-twitter-feeds:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/custom-twitter-feeds/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "daily-deals",
		name: "Daily Deals",
		website: "https://dailydeals.ai",
		description: "Daily Deals is a flash sale, limited-time discounts, countdown timers, and sales analytics solution.",
		icon: "Daily Deals.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "daily-deals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.dailydeals\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "daily-deals:jsGlobal:1",
				kind: "jsGlobal",
				property: "ddAddToCheckout",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "daily-deals:jsGlobal:2",
				kind: "jsGlobal",
				property: "ddAddToOrder",
				confidence: 50,
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
		id: "dailykarma",
		name: "DailyKarma",
		website: "https://www.dailykarma.com",
		description: "DailyKarma is a turnkey cause marketing solutions for ecommerce merchants.",
		icon: "DailyKarma.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dailykarma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.dailykarma\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dailykarma:jsGlobal:1",
				kind: "jsGlobal",
				property: "dkWidgetInit",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dailykarma:jsGlobal:2",
				kind: "jsGlobal",
				property: "dk_widget",
				confidence: 50,
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
		id: "darkmode-js",
		name: "Darkmode.js",
		website: "https://github.com/sandoche/Darkmode.js",
		description: "Darkmode.js is a JavaScript library that enables an HTML element to switch between CSS themes.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "darkmode-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("darkmode-js@([\\d\\.]+)\\/lib\\/darkmode-js\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "darkmode-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Darkmode",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "decimal-js",
		name: "decimal.js",
		website: "https://mikemcl.github.io/decimal.js/",
		icon: "decimal.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "decimal-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("decimal[.-]([\\d.]*\\d+)(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "decimal-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/([\\d.]*\\d+)\\/decimal(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "decimal-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("decimal(?:\\.min)?\\.js(?:\\?ver(?:sion)?=([\\d.]*\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "decimal-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "Decimal.ROUND_HALF_FLOOR",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "dexie-js",
		name: "Dexie.js",
		website: "https://dexie.org",
		description: "A Minimalistic Wrapper for IndexedDB.",
		icon: "Dexie.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dexie-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?dexie(?:\\.bitrix)?(?:\\.bundle)?(?:\\.min)?\\.js"),
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
	},
	{
		id: "dhtmlx",
		name: "DHTMLX",
		website: "https://dhtmlx.com",
		description: "DHTMLX specialises in building JavaScript UI libraries for project management, event planning, big data visualisation, and reporting.",
		icon: "DHTMLX.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dhtmlx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/dhtmlxcommon\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dhtmlx:jsGlobal:1",
				kind: "jsGlobal",
				property: "dhtmlDragAndDropObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dhtmlx:jsGlobal:2",
				kind: "jsGlobal",
				property: "dhtmlXTreeItemObject",
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
		id: "dockvine",
		name: "Dockvine",
		website: "https://dockvine.com",
		description: "Dockvine is a tool that enables visitors to browse social media pages within a website interface without navigating away.",
		icon: "Dockvine.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dockvine:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.dockvine\\.com"),
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
		id: "docusign",
		name: "DocuSign",
		website: "https://www.docusign.com",
		description: "DocuSign allows organisations to manage electronic agreements.",
		icon: "DocuSign.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "docusign:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("docusign\\.net"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "docusign:dns:1",
				kind: "dns",
				valuePattern: new RegExp("docusign", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "dojo",
		name: "Dojo",
		website: "https://dojotoolkit.org",
		description: "Dojo is an open-source JavaScript toolkit for building web applications.",
		icon: "Dojo.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dojo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)\\/dojo\\/dojo(?:\\.xd)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dojo:jsGlobal:1",
				kind: "jsGlobal",
				property: "dojo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dojo:jsGlobal:2",
				kind: "jsGlobal",
				property: "dojo.version.major",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dojo:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("((?:\\d+\\.)+\\d+)\\/dojo\\/dojo(?:\\.xd)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:dojotoolkit:dojo:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "douban",
		name: "Douban",
		website: "https://m.douban.com",
		description: "Douban is a Chinese social sharing service for recording books, movies, and music.",
		icon: "Douban.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "douban:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("movie\\.douban\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "douban:jsGlobal:1",
				kind: "jsGlobal",
				property: "doubanmovie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dropzone",
		name: "Dropzone",
		website: "https://www.dropzone.dev",
		description: "Dropzone is a JavaScript library that turns any HTML element into a dropzone.",
		icon: "Dropzone.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dropzone:jsGlobal:0",
				kind: "jsGlobal",
				property: "Dropzone",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dropzone:jsGlobal:1",
				kind: "jsGlobal",
				property: "Dropzone.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
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
		id: "dynamic-conditions",
		name: "Dynamic Conditions",
		website: "https://wordpress.org/plugins/dynamicconditions",
		description: "Dynamic Conditions of Widgets is a cutting-edge WordPress plugin that extends the functionality of your website using conditional logic.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "dynamic-conditions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dynamic-conditions-public\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "dynamics-js",
		name: "Dynamics.js",
		website: "https://dynamicsjs.com",
		description: "Javascript library to create physics-related animations",
		icon: "Dynamics.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "dynamics-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dynamics(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "easeljs",
		name: "EaselJS",
		website: "https://createjs.com/easeljs",
		description: "EaselJS is a JavaScript library designed to simplify working with the HTML5 Canvas element, making it useful for creating games, generative art, and other graphical applications.",
		icon: "EaselJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "easeljs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/easeljs\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "easy-pie-chart",
		name: "Easy Pie Chart",
		website: "https://rendro.github.io/easy-pie-chart/",
		description: "Lightweight jQuery plugin to render and animate nice pie charts with the HTML5 canvas element.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "easy-pie-chart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[Ee]asy-?[Pp]ie-?[Cc]hart(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easy-pie-chart:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("[ee]asy-?[pp]ie-?[cc]hart(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "ekomi",
		name: "eKomi",
		website: "https://www.ekomi.de",
		description: "eKomi is a German supplier and product review service.",
		icon: "eKomi.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ekomi:dom:0",
				kind: "dom",
				selector: ".ekomi-widget-container",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ekomi:jsGlobal:1",
				kind: "jsGlobal",
				property: "ekomiWidgetMain",
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
		id: "elementor-addon-elements",
		name: "Elementor Addon Elements",
		website: "https://wordpress.org/plugins/addon-elements-for-elementor-page-builder",
		description: "Widgets and extensions to extend the Elementor Page Builder.",
		icon: "Elementor Addon Elements.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "elementor-addon-elements:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addon-elements-for-elementor-page-builder(?:\\/assets)?(?:\\/js)?(?:\\/lib)?(?:\\/animated-main)?(?:\\/build)?(?:\\/eae)?(?:\\/iconHelper)?(?:\\/index)?(?:\\/magnific)?(?:\\/particles)?(?:\\/vegas){0,2}(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elementor-addon-elements:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/addon-elements-for-elementor-page-builder/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "elementor-addon-elements:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("addon-elements-for-elementor-page-builder(?:\\/assets)?(?:\\/js)?(?:\\/lib)?(?:\\/animated-main)?(?:\\/build)?(?:\\/eae)?(?:\\/iconhelper)?(?:\\/index)?(?:\\/magnific)?(?:\\/particles)?(?:\\/vegas){0,2}(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "elevio",
		name: "Elevio",
		website: "https://elev.io",
		description: "Elevio is a self-service support platform for SaaS that delivers contextual knowledge to customers, support agents, and internal teams.",
		icon: "Elevio.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "elevio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.elev\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elevio:jsGlobal:1",
				kind: "jsGlobal",
				property: "_elev",
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
		id: "elfsight",
		name: "Elfsight",
		website: "https://elfsight.com",
		description: "Elfsight is an all-in-one platform offering 70+ customisable widgets for websites.",
		icon: "Elfsight.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "elfsight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.elfsight\\.com\\/"),
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
		id: "elliptic",
		name: "Elliptic",
		website: "https://github.com/indutny/elliptic",
		description: "Fast Elliptic Curve Cryptography in plain javascript.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "elliptic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("elliptic(?:[\\w\\.-]{0,27})?(?:\\.bundle)?(?:\\.chunk)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "elog",
		name: "ELOG",
		website: "https://midas.psi.ch/elog",
		icon: "ELOG.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "elog:html:0",
				kind: "html",
				pattern: new RegExp("<title>ELOG Logbook Selection<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "elog:html:1",
				kind: "html",
				pattern: new RegExp("<title>elog logbook selection<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "email-encoder-for-wordpress",
		name: "Email Encoder for Wordpress",
		website: "https://wordpress.org/plugins/email-encoder-bundle",
		description: "Protect email addresses and phone numbers from spambots.",
		icon: "Email Encoder for Wordpress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "email-encoder-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("email-encoder-bundle(?:\\/core)?(?:\\/includes)?(?:\\/assets)?(?:\\/js)?(?:\\/custom)?(?:\\/encoder-form)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "email-encoder-for-wordpress:dom:1",
				kind: "dom",
				selector: "link#eeb-css-frontend-css, link[href*='/wp-content/plugins/email-encoder-bundle/']",
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
		id: "embed-any-document",
		name: "Embed Any Document",
		website: "https://wordpress.org/plugins/embed-any-document",
		description: "Embed PDF, DOC, PPT and XLS documents easily on your WordPress website.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "embed-any-document:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed-any-document(?:\\/js)?(?:\\/embed-public)?(?:\\/pdfobject)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "embed-any-document:dom:1",
				kind: "dom",
				selector: "#awsm-ead-public-css, link[href*='/wp-content/plugins/embed-any-document/']",
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
		id: "embed-pdf-viewer",
		name: "Embed PDF Viewer",
		website: "https://wordpress.org/plugins/embed-pdf-viewer",
		description: "Embed a PDF from the Media Library or elsewhere via oEmbed.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "embed-pdf-viewer:dom:0",
				kind: "dom",
				selector: "#embed-pdf-viewer-css, link[href*='/wp-content/plugins/embed-pdf-viewer/']",
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
		id: "embedly",
		name: "Embedly",
		website: "https://embed.ly",
		description: "Embedly is a service that allows developers to convert URLs into rich previews and embeddable content.",
		icon: "Embedly.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "embedly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.embedly\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "embedly:jsGlobal:1",
				kind: "jsGlobal",
				property: "embedly",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "embedly:dom:2",
				kind: "dom",
				selector: "div.w-embed > iframe.embedly-embed",
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
		id: "embedpress",
		name: "EmbedPress",
		website: "https://wordpress.org/plugins/embedpress",
		description: "Embed videos, images, posts, audio, maps and upload PDF, DOC, PPT in Wordpress.",
		icon: "EmbedPress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "embedpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embedpress(?:\\/assets)?(?:\\/js)?(?:\\/ads)?(?:\\/pdfobject)?(?:\\/front)?(?:\\/documents-viewer-script)?(?:\\/vimeo-player)?(?:\\/initplyr)?(?:\\/plyr)?(?:\\.polyfilled)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "embedpress:dom:1",
				kind: "dom",
				selector: "#embedpress-css, #embedpress-elementor-css-css, #embedpress_blocks-cgb-style-css-css, link[href*='/wp-content/plugins/embedpress/']",
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
		id: "embedsocial",
		name: "EmbedSocial",
		website: "https://embedsocial.com",
		description: "EmbedSocial is a social media management platform.",
		icon: "EmbedSocial.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "embedsocial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embedsocial\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "embedsocial:jsGlobal:1",
				kind: "jsGlobal",
				property: "EMBEDSOCIALHASHTAG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "embedsocial:jsGlobal:2",
				kind: "jsGlobal",
				property: "EmbedSocialIframeLightbox",
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
		id: "enamad",
		name: "eNamad",
		website: "https://enamad.ir/",
		description: "eNamad is an electronic trust symbol.",
		icon: "eNamad.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "enamad:dom:0",
				kind: "dom",
				selector: "a[href*='.enamad.ir/'][target='_blank'], div.e-namad-widget-wrapper, img[src*='.enamad.ir/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "enamad:meta:1",
				kind: "meta",
				key: "enamad",
				valuePattern: new RegExp("^\\d+$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "enllax",
		name: "Enllax",
		website: "https://github.com/mmkjony/enllax.js",
		description: "Enllax.js is a JavaScript plugin that enables parallax scrolling effects by adjusting the position and speed of page elements relative to the scroll movement.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "enllax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jquery\\.enllax\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "enquire-js",
		name: "Enquire.js",
		website: "https://wicky.nillia.ms/enquire.js/",
		description: "enquire.js is a lightweight, pure JavaScript library for responding to CSS media queries.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "enquire-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("enquire(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "envybox",
		name: "Envybox",
		website: "https://envybox.io",
		description: "Envybox is a multiservice for increasing sales.",
		icon: "Envybox.svg",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "envybox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.saas-support\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "envybox:jsGlobal:1",
				kind: "jsGlobal",
				property: "EnvyWidget",
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
		id: "eprints",
		name: "EPrints",
		website: "https://www.eprints.org",
		description: "EPrints is an open-source platform for institutional repositories and research archives.",
		icon: "EPrints.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "eprints:jsGlobal:0",
				kind: "jsGlobal",
				property: "EPJS_menu_template",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eprints:jsGlobal:1",
				kind: "jsGlobal",
				property: "EPrints",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eprints:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("EPrints ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "eprints:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("eprints ([\\d.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:eprints:eprints:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "ethers",
		name: "Ethers",
		website: "https://ethers.org/",
		description: "Ethers is a complete, tiny and simple Ethereum library.",
		icon: "Ethers.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ethers:jsGlobal:0",
				kind: "jsGlobal",
				property: "_ethers",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "everwondr",
		name: "EverWondr",
		website: "https://everwondr.com",
		description: "EverWondr is a network providing a collection of plug-ins, including a calendar, directory, blog, guestbook, gallery, and survey.",
		icon: "EverWondr.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "everwondr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.everwondr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "everwondr:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.everwondr\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eveve",
		name: "Eveve",
		website: "https://www.eveve.com",
		description: "Eveve is a restaurant table booking widget.",
		icon: "Eveve.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "eveve:html:0",
				kind: "html",
				pattern: new RegExp("<iframe[^>]*[\\w]+\\.eveve\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "eveve:dom:1",
				kind: "dom",
				selector: "iframe[src*='.eveve.com']",
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
		implies: [
			"php",
		],
	},
	{
		id: "ex-co",
		name: "EX.CO",
		website: "https://ex.co",
		description: "EX. CO (formerly Playbuzz) is an online publishing platform for publishers, brand agencies, and individual content creators to create content in interactive formats such as polls, quizzes, lists, video snippets, slideshows, and countdowns.",
		icon: "EX.CO.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ex-co:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ex\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ex-co:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.playbuzz\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ex-co:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("prd-collector-anon\\.ex\\.co"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "ex-co:jsGlobal:3",
				kind: "jsGlobal",
				property: "__EXCO",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ex-co:jsGlobal:4",
				kind: "jsGlobal",
				property: "__EXCO_INTEGRATION_TYPE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ex-co:jsGlobal:5",
				kind: "jsGlobal",
				property: "excoPixelUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "exo-platform",
		name: "Exo Platform",
		website: "https://www.exoplatform.com",
		description: "Exo Platform is a social-collaboration software designed for enterprises.",
		icon: "ExoPlatform.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "exo-platform:jsGlobal:0",
				kind: "jsGlobal",
				property: "eXo.core",
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
		id: "fancybox",
		name: "FancyBox",
		website: "https://fancyapps.com/fancybox",
		description: "FancyBox is a tool for displaying images, html content and multi-media in a Mac-style 'lightbox' that floats overtop of web page.",
		icon: "FancyBox.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "fancybox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.fancybox(?:\\.pack|\\.min)?\\.js(?:\\?v=([\\d.]+))?$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fancybox:jsGlobal:1",
				kind: "jsGlobal",
				property: "$.fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fancybox:jsGlobal:2",
				kind: "jsGlobal",
				property: "Fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fancybox:jsGlobal:3",
				kind: "jsGlobal",
				property: "jQuery.fancybox.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "fareharbor",
		name: "FareHarbor",
		website: "https://fareharbor.com",
		description: "FareHarbor is an booking and schedule management solution intended for tour and activity companies.",
		icon: "FareHarbor.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "fareharbor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fareharbor\\.com\\/embeds\\/api\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fareharbor:html:1",
				kind: "html",
				pattern: new RegExp("<iframe[^>]+fareharbor"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fareharbor:dom:2",
				kind: "dom",
				selector: "iframe[src*='fareharbor']",
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
		id: "feederninja",
		name: "FeederNinja",
		website: "https://www.feederninja.com",
		description: "FeederNinja is a tool that allows users to create customizable RSS and social media feed widgets for embedding on websites.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "feederninja:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feederninja\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "feedspring",
		name: "FeedSpring",
		website: "https://www.feedspring.com",
		description: "FeedSpring is a platform that creates visually appealing social media feeds for websites.",
		icon: "FeedSpring.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "feedspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.feedspring\\.co\\/"),
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
		id: "filehippo",
		name: "FileHippo",
		website: "https://filehippo.com",
		description: "FileHippo is a widget that provides the latest software updates, allowing users to stay informed about new versions and releases.",
		icon: "FileHippo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "filehippo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.filehippo\\.com"),
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
		id: "filepond",
		name: "FilePond",
		website: "https://pqina.nl/filepond/",
		description: "FilePond is a JavaScript file upload library with previews, validation, and image processing support.",
		icon: "filepond.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "filepond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("filepond.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "filepond:jsGlobal:1",
				kind: "jsGlobal",
				property: "FilePond",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "filepond:jsGlobal:2",
				kind: "jsGlobal",
				property: "FilePond.create",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "filepond:jsGlobal:3",
				kind: "jsGlobal",
				property: "FilePond.setOptions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "fillout",
		name: "Fillout",
		website: "https://www.fillout.com/",
		description: "Fillout is a form builder for creating forms, surveys, quizzes, and workflows.",
		icon: "Fillout.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
		],
		rules: [
			{
				id: "fillout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https:\\/\\/server\\.fillout\\.com\\/embed\\/v(\\d)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fillout:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("server\\.fillout\\.com\\/embed\\/v1\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fillout:dom:2",
				kind: "dom",
				selector: "[data-fillout-id]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fillout:jsGlobal:3",
				kind: "jsGlobal",
				property: "__filloutStandardInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "fingerprintjs",
		name: "FingerprintJS",
		website: "https://fingerprintjs.com",
		description: "FingerprintJS is a browser fingerprinting library that queries browser attributes and computes a hashed visitor identifier from them.",
		icon: "FingerprintJS.svg",
		categories: [
			"widgets-misc",
			"privacy-compliance",
		],
		rules: [
			{
				id: "fingerprintjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fingerprint(?:\\/fp)?(\\d)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fingerprintjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("fingerprintjs(?:\\-pro|2)?(?:@|\\/)(\\d.*?)?\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fingerprintjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "Fingerprint",
				valuePattern: new RegExp("(\\d)?$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fingerprintjs:jsGlobal:3",
				kind: "jsGlobal",
				property: "Fingerprint2",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fingerprintjs:jsGlobal:4",
				kind: "jsGlobal",
				property: "Fingerprint2.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fingerprintjs:jsGlobal:5",
				kind: "jsGlobal",
				property: "FingerprintJS",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "fintechos",
		name: "FintechOS",
		website: "https://fintechos.com",
		description: "FintechOS is a low-code platform for banking and insurance.",
		icon: "FintechOS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "fintechos:jsGlobal:0",
				kind: "jsGlobal",
				property: "FtosChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fintechos:jsGlobal:1",
				kind: "jsGlobal",
				property: "ftos.core.getB2CCulture",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fintechos:meta:2",
				kind: "meta",
				key: "ftos-app-version",
				valuePattern: new RegExp("\\sv([\\d\\.]+)\\s", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "fitvids-js",
		name: "FitVids.JS",
		website: "https://fitvidsjs.com/",
		description: "jQuery plugin for fluid width video embeds",
		icon: "FitVids.JS.png",
		categories: [
			"widgets-misc",
			"media-video",
		],
		rules: [
			{
				id: "fitvids-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fitvids(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
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
	},
	{
		id: "flexslider",
		name: "FlexSlider",
		website: "https://woocommerce.com/flexslider/",
		description: "FlexSlider is a free jQuery slider plugin.",
		icon: "FlexSlider.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "flexslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.flexslider(?:\\.min)?\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "flickity",
		name: "Flickity",
		website: "https://flickity.metafizzy.co",
		description: "Flickity is a JavaScript slider library, built by David DeSandro of Metafizzy fame.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "flickity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("flickity(?:\\/|@)([\\d\\.]+).+flickity(?:\\.pkgd)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flickity:dom:1",
				kind: "dom",
				selector: "style[data-context='foundation-flickity-css'], div.flickity-enabled",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "flickity:jsGlobal:2",
				kind: "jsGlobal",
				property: "Flickity",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "flippingbook",
		name: "FlippingBook",
		website: "https://flippingbook.com",
		description: "FlippingBook is a web-based software platform that enables users to create, publish, and share digital publications such as magazines, brochures, catalogs, and presentations.",
		icon: "FlippingBook.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "flippingbook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("online\\.flippingbook\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flippingbook:dom:1",
				kind: "dom",
				selector: "a[href*='flippingbook.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "flippingbook:jsGlobal:2",
				kind: "jsGlobal",
				property: "__flippingbook_csrf__",
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
		id: "floating-ui",
		name: "Floating UI",
		website: "https://floating-ui.com/",
		description: "A JavaScript library to position floating elements and create interactions for them.",
		icon: "Floating UI.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "floating-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("floating-ui(?:\\/core)?(?:\\/dom)?(?:\\.js)?(?:@?(?:\\?v(?:er)?=)?((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "flockler",
		name: "Flockler",
		website: "https://flockler.com",
		description: "Flockler is a social hub content integration system that aggregates and displays social media content from multiple platforms onto websites or digital screens.",
		icon: "Flockler.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "flockler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.flockler\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flockler:jsGlobal:1",
				kind: "jsGlobal",
				property: "FLOCKLER_EMBEDS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flockler:jsGlobal:2",
				kind: "jsGlobal",
				property: "_flocklerOverride",
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
		id: "footable",
		name: "FooTable",
		website: "https://fooplugins.github.io/FooTable/index.html",
		description: "FooTable is a jQuery plugin that converts HTML tables into expandable responsive tables.",
		icon: "FooPlugins.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "footable:jsGlobal:0",
				kind: "jsGlobal",
				property: "$FOOTABLE.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "footable:jsGlobal:1",
				kind: "jsGlobal",
				property: "footable.plugins",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "forethought-solve",
		name: "Forethought Solve",
		website: "https://forethought.ai/platform/solve/",
		description: "Forethought Solve is a live-chat widget that uses generative AI to automate responses for common questions across all channels.",
		icon: "Forethought Solve.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "forethought-solve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("solve-widget\\.forethought\\.ai\\/"),
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
		id: "formstone",
		name: "Formstone",
		website: "https://formstone.it",
		description: "Formstone is a front-end library that simplifies web development by providing customizable jQuery plugins that abstract modern web patterns.",
		icon: "Formstone.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "formstone:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.formstone\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"onetime",
			],
			cpe: "cpe:2.3:a:formstone:formstone:*:*:*:*:*:*:*:*",
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "foxpush",
		name: "FoxPush",
		website: "https://www.foxpush.com",
		description: "FoxPush is a platform that supports pushing of notifications through the browser.",
		icon: "FoxPush.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "foxpush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.foxpush\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "foxpush:jsGlobal:1",
				kind: "jsGlobal",
				property: "_foxpush",
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
		id: "freedom-farmers",
		name: "Freedom Farmers",
		website: "https://freedomfarmers.com",
		description: "Freedom Farmers is a micro farm platform designed for individuals interested in growing food, starting an agricultural business, or gaining access to land.",
		icon: "FreedomFarmers.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "freedom-farmers:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/\\/freedomfarmers\\.com"),
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
		id: "fresco",
		name: "Fresco",
		website: "https://github.com/staaky/fresco",
		description: "Fresco is a responsive lightbox. Fresco comes with thumbnail support, fullscreen zoom, Youtube and Vimeo integration for HTML5 video and a powerful Javascript API.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "fresco:jsGlobal:0",
				kind: "jsGlobal",
				property: "Fresco.version",
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
			],
		},
	},
	{
		id: "fullcalendar",
		name: "FullCalendar",
		website: "https://fullcalendar.io",
		description: "FullCalendar is a full-sized drag and drop JavaScript event calendar.",
		icon: "FullCalendar.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "fullcalendar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/fullcalendar\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fullcalendar:jsGlobal:1",
				kind: "jsGlobal",
				property: "FullCalendar.version",
				valuePattern: new RegExp("^([\\d\\.\\-\\w]+)$"),
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
				"mid",
				"poa",
			],
		},
		implies: [
			"typescript",
		],
	},
	{
		id: "fullpage-js",
		name: "fullPage.js",
		website: "https://github.com/alvarotrigo/fullpage.js",
		description: "fullPage.js a jQuery and vanilla JavaScript plugin for fullscreen scrolling websites.",
		icon: "fullPage.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "fullpage-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/fullPage\\.js(?:\\/([\\d\\.]+)\\/)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fullpage-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "fullpage_api.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fullpage-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/fullpage\\.js(?:\\/([\\d\\.]+)\\/)?"),
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
			"jquery",
		],
	},
	{
		id: "getbutton",
		name: "GetButton",
		website: "https://getbutton.io",
		description: "The chat button by GetButton takes website visitor directly to the messaging app such as Facebook Messenger or WhatsApp and allows them to initiate a conversation with you.",
		icon: "GetButton.svg",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "getbutton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getbutton\\.io\\/"),
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
		id: "getsitecontrol",
		name: "Getsitecontrol",
		website: "https://getsitecontrol.com",
		description: "Getsitecontrol is a form and popup builder.",
		icon: "Getsitecontrol.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
		],
		rules: [
			{
				id: "getsitecontrol:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getsitecontrol\\.com\\/"),
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
		id: "gijgo",
		name: "Gijgo",
		website: "https://gijgo.com",
		description: "Gijgo is a set of free for commercial use javascript controls.",
		icon: "Gijgo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gijgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/gijgo@([\\d\\.]+)\\/js\\/gijgo\\.min\\.js"),
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
	},
	{
		id: "glide-js",
		name: "Glide.js",
		website: "https://glidejs.com",
		description: "Glide.js is a dependency-free JavaScript ES6 slider and carousel.",
		icon: "Glide.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "glide-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/@glidejs\\/glide(?:@([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "glide-js:dom:1",
				kind: "dom",
				selector: "div[data-glide-el]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "glide-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "Glide",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "glider-js",
		name: "Glider.js",
		website: "https://nickpiscitelli.github.io/Glider.js",
		description: "Glider.js is a fast, lightweight, responsive, dependency-free scrollable list with customisable paging controls.",
		icon: "Glider.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "glider-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/|@)?([\\d\\.]{2,})?\\/glider\\.min\\.js"),
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
	},
	{
		id: "goanywhere",
		name: "GoAnywhere",
		website: "https://www.goanywhere.com/",
		description: "GoAnywhere by HelpSystems is a Managed File Transfer (MFT) system with sharing and collaboration features.",
		icon: "goanywhere.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "goanywhere:jsGlobal:0",
				kind: "jsGlobal",
				property: "appContainer",
				valuePattern: new RegExp("GoAnywhereWebClientContainer"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goanywhere:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("goanywhere", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "goanywhere:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("goanywhere", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "goat-slider",
		name: "Goat Slider",
		website: "https://goatslider.com",
		description: "Goat Slider is a webflow library that enables users to construct advanced sliders for their sites.",
		icon: "GoatSlider.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "goat-slider:jsGlobal:0",
				kind: "jsGlobal",
				property: "GoatSliderCarousel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goat-slider:jsGlobal:1",
				kind: "jsGlobal",
				property: "GoatSliderSlider",
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
		id: "gocertify",
		name: "GoCertify",
		website: "https://www.gocertify.me",
		description: "GoCertify is a conversion-focused and cost-effective way to verify students, key workers, under-26s, over-60s, military and more for exclusive discounts.",
		icon: "GoCertify.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gocertify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.gocertify\\.me\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gocertify:dom:1",
				kind: "dom",
				selector: "a[href*='secure.gocertify.me']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "gocertify:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_gocertify_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
			],
		},
	},
	{
		id: "godot",
		name: "Godot",
		website: "https://godotengine.org",
		description: "Godot is a game engine that supports exporting to HTML5 with WebAssembly compatibility.",
		icon: "Godot.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "godot:jsGlobal:0",
				kind: "jsGlobal",
				property: "GODOT_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "godot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Godot",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:godotengine:godot:*:*:*:*:*:*:*:*",
		},
		implies: [
			"webassembly",
		],
	},
	{
		id: "gokwik",
		name: "GoKwik",
		website: "https://www.gokwik.co",
		description: "GoKwik is a platform for solving shopping experience problems on ecommerce websites on the internet.",
		icon: "GoKwik.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gokwik:jsGlobal:0",
				kind: "jsGlobal",
				property: "gokwikBuyNow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gokwik:jsGlobal:1",
				kind: "jsGlobal",
				property: "gokwikCheckoutApp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gokwik:jsGlobal:2",
				kind: "jsGlobal",
				property: "gokwikSdk",
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
		id: "goober",
		name: "Goober",
		website: "https://goober.js.org",
		description: "Goober is a minified CSS-in-JS styling solution.",
		icon: "Goober.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "goober:dom:0",
				kind: "dom",
				selector: "style#_goober",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "goober:jsGlobal:1",
				kind: "jsGlobal",
				property: "goober",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goober:jsGlobal:2",
				kind: "jsGlobal",
				property: "gooberGlobal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goober:jsGlobal:3",
				kind: "jsGlobal",
				property: "gooberPrefixer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "google-cloud-storage",
		name: "Google Cloud Storage",
		website: "https://cloud.google.com/storage",
		description: "Google Cloud Storage allows world-wide storage and retrieval of any amount of data at any time.",
		icon: "google-cloud-storage.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "google-cloud-storage:header:0",
				kind: "header",
				key: "x-goog-storage-class",
				valuePattern: new RegExp("^\\w+$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"google-cloud",
		],
	},
	{
		id: "google-code-prettify",
		name: "Google Code Prettify",
		website: "https://code.google.com/p/google-code-prettify",
		icon: "Google.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "google-code-prettify:jsGlobal:0",
				kind: "jsGlobal",
				property: "prettyPrint",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "granim-js",
		name: "Granim.js",
		website: "https://sarcadass.github.io/granim.js",
		description: "Granim.js is a lightweight javascript library to create fluid and interactive gradients animations.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "granim-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "Granim",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "gravatar",
		name: "Gravatar",
		website: "https://gravatar.com",
		description: "Gravatar is a service for providing globally unique avatars.",
		icon: "Gravatar.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gravatar:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+gravatar\\.com\\/avatar\\/"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "gravatar:jsGlobal:1",
				kind: "jsGlobal",
				property: "Gravatar",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "gravitec",
		name: "Gravitec",
		website: "https://gravitec.net",
		description: "Gravitec is a push notification tool.",
		icon: "Gravitec.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gravitec:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|id)\\.gravitec\\.(?:media|net)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gravitec:jsGlobal:1",
				kind: "jsGlobal",
				property: "Gravitec",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gravitec:jsGlobal:2",
				kind: "jsGlobal",
				property: "gravitecWebpackJsonp",
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
		id: "gridster",
		name: "Gridster",
		website: "https://dsmorse.github.io/gridster.js",
		description: "Gridster is a jQuery plugin used to draw dashboards with drag-and-drop widgets.",
		categories: [
			"widgets-misc",
			"ui-library",
		],
		rules: [
			{
				id: "gridster:jsGlobal:0",
				kind: "jsGlobal",
				property: "Gridster",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gridster:jsGlobal:1",
				kind: "jsGlobal",
				property: "GridsterCollision",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gridster:jsGlobal:2",
				kind: "jsGlobal",
				property: "GridsterCoords",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gridster:jsGlobal:3",
				kind: "jsGlobal",
				property: "GridsterDraggable",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
		implies: [
			"jquery",
		],
	},
	{
		id: "gumstack",
		name: "Gumstack",
		website: "https://gumstack.com/",
		description: "Gumstack provides a live video shopping solution for eCommerce.",
		icon: "Gumstack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "gumstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("w\\.gumstack\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gumstack:jsGlobal:1",
				kind: "jsGlobal",
				property: "Gumstack",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "h5ai",
		name: "h5ai",
		website: "https://github.com/lrsjng/h5ai",
		description: "h5ai is a modern HTTP web server index for Apache httpd, lighttpd, and nginx.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "h5ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/_h5ai\\/(?:public|client)\\/js\\/scripts\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:h5ai_project:h5ai:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "hammer-js",
		name: "Hammer.js",
		website: "https://hammerjs.github.io",
		description: "Hammer.js is a JavaScript library for adding touch gestures like swipe, pinch, and rotate to web applications.",
		icon: "Hammer.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hammer-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hammer(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hammer-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ha.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hammer-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "Hammer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hammer-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "Hammer.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "hansel",
		name: "Hansel",
		website: "https://hansel.io",
		description: "Hansel is a B2B enterprise software that deploys real-time Nudges to drive feature adoption and address user drop-offs, at scale.",
		icon: "Hansel.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hansel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hansel\\.io\\/web\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hansel:jsGlobal:1",
				kind: "jsGlobal",
				property: "Hansel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hansel:jsGlobal:2",
				kind: "jsGlobal",
				property: "HanselPX",
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
		id: "harborbyte",
		name: "HarborByte",
		website: "https://harborbyte.com",
		description: "HarborByte is a small business website platform that provides templated sites with integrated ecommerce, marketing, and hosting solutions.",
		icon: "HarborByte.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "harborbyte:header:0",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("harborbyte\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "harborbyte:meta:1",
				kind: "meta",
				key: "content-security-policy",
				valuePattern: new RegExp("harborbyte-media-assets\\.pages\\.dev", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "harborbyte:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Website by HarborByte$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "harborbyte:header:3",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("harborbyte\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "harborbyte:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^website by harborbyte$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "hasura",
		name: "Hasura",
		website: "https://hasura.io",
		description: "Hasura is an open-source engine that enables developers to effortlessly create real-time GraphQL APIs by auto-generating them from existing database schemas.",
		icon: "Hasura.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hasura:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hasura\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
			],
			cpe: "cpe:2.3:a:hasura:graphql_engine:*:*:*:*:*:*:*:*",
		},
		implies: [
			"graphql",
		],
	},
	{
		id: "headjs",
		name: "HeadJS",
		website: "https://headjs.github.io",
		description: "HeadJS is a JavaScript library that optimizes web performance by managing the loading and execution of scripts and stylesheets to ensure faster page loads and efficient resource handling.",
		icon: "HeadJS.png",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "headjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("head\\.(?:core|load)(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "headjs:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]*data-headjs-load"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "headjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "head.browser.name",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "headroom-js",
		name: "Headroom.js",
		website: "https://wicky.nillia.ms/headroom.js/",
		description: "Headroom.js is a JS widget that allows you to react to the user's scroll. The header slides out of view when scrolling down and slides back in when scrolling up.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "headroom-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("headroom(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "headway",
		name: "Headway",
		website: "https://headwayapp.co",
		description: "Headway is a product widget that keeps customers informed about updates and changes.",
		icon: "Headway.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "headway:header:0",
				kind: "header",
				key: "X-Hello",
				valuePattern: new RegExp("^headway$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "headway:header:1",
				kind: "header",
				key: "x-hello",
				valuePattern: new RegExp("^headway$", "i"),
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
		id: "hearth",
		name: "Hearth",
		website: "https://gethearth.com",
		description: "Hearth is a financial services platform that provides financing options for home improvement projects.",
		icon: "Hearth.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hearth:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.gethearth\\.com"),
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
		id: "hello-bar",
		name: "Hello Bar",
		website: "https://hellobar.com",
		description: "Hello Bar is a customizable notification bar that draws visitors to an important call to action on the website.",
		icon: "Hello Bar.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "hello-bar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.?hellobar\\.(?:com|js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hello-bar:jsGlobal:1",
				kind: "jsGlobal",
				property: "HelloBar",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hello-bar:jsGlobal:2",
				kind: "jsGlobal",
				property: "hellobarSiteSettings",
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
		id: "highlight-js",
		name: "Highlight.js",
		website: "https://highlightjs.org/",
		description: "Highlight.js is a JavaScript library for syntax highlighting, supporting 192 languages and 496 themes.",
		icon: "Highlight.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "highlight-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:([\\d.])+\\/)?highlight(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "highlight-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "hljs.highlightBlock",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "highlight-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "hljs.listLanguages",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "history",
		name: "History",
		website: "https://github.com/ReactTraining/history",
		description: "Manage session history with JavaScript.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "history:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/history(@|\\/)([\\d.]+)(?:\\/[a-z]+)?\\/history(?:(.production|.development))?(?:.min)?\\.js"),
				version: {
					source: "match",
					group: 2,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "howler-js",
		name: "Howler.js",
		website: "https://howlerjs.com",
		description: "Howler.js is an audio library with support for the Web Audio API and a fallback mechanism for HTML5 Audio.",
		icon: "Howler.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "howler-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("howler@([\\d.]+)\\/dist\\/howler\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "howler-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("howler\\/([\\d.]+)\\/howler(?:\\.core)?\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "howler-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "Howler",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "howler-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "HowlerGlobal",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			oss: true,
		},
	},
	{
		id: "ht-mega",
		name: "HT Mega",
		website: "https://wordpress.org/plugins/ht-mega-for-elementor/",
		description: "Elementor addons package for Elementor.",
		icon: "HT Mega.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "ht-mega:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ht-mega-for-elementor(?:\\/admin)?\\/assets\\/js(?:\\/admin)?(?:\\/(?:htb)?bootstrap)?(?:\\/jquery)?(?:\\/popper)?(?:\\/slick)?(?:\\/waypoints)?(?:\\.counterup)?(?:\\/htmega-widgets-active)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ht-mega:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ht-mega-for-elementor/']",
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
		id: "html2canvas",
		name: "html2canvas",
		website: "https://html2canvas.hertzen.com/",
		description: "Screenshots with JavaScript.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "html2canvas:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("html2canvas(?:\\.min)?(?:[_\\w]{0,8})?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "html2canvas:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?html2canvas(?:\\.min)?(?:[_\\w]{0,8})?\\.js"),
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
	},
	{
		id: "html5-media",
		name: "HTML5 Media",
		website: "https://html5media.info/",
		description: "HTML5 Media enables video and audio tags in all major browsers.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "html5-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?html5media(?:\\.min)?\\.js"),
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
	},
	{
		id: "htmx",
		name: "Htmx",
		website: "https://htmx.org",
		description: "Htmx is a JavaScript library for performing AJAX requests, triggering CSS transitions, and invoking WebSocket and server-sent events directly from HTML elements.",
		icon: "Htmx.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "htmx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/htmx\\.org@([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "htmx:dom:1",
				kind: "dom",
				selector: "script[data-src*='/dist/htmx.min.js']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "htmx:jsGlobal:2",
				kind: "jsGlobal",
				property: "htmx",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "http-2",
		name: "HTTP/2",
		website: "https://http2.github.io",
		description: "HTTP/2 (originally named HTTP/2.0) is a major revision of the HTTP network protocol used by the World Wide Web.",
		icon: "HTTP2.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "http-2:header:0",
				kind: "header",
				key: "Alt-Svc",
				valuePattern: new RegExp("h2", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-2:header:1",
				kind: "header",
				key: "X-Firefox-Spdy",
				valuePattern: new RegExp("h2", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-2:header:2",
				kind: "header",
				key: "alt-svc",
				valuePattern: new RegExp("h2", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-2:header:3",
				kind: "header",
				key: "x-firefox-spdy",
				valuePattern: new RegExp("h2", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		excludes: [
			"spdy",
		],
	},
	{
		id: "http-3",
		name: "HTTP/3",
		website: "https://httpwg.org/",
		description: "HTTP/3 is the third major version of the Hypertext Transfer Protocol used to exchange information on the World Wide Web.",
		icon: "HTTP3.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "http-3:header:0",
				kind: "header",
				key: "Alt-Svc",
				valuePattern: new RegExp("h3", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-3:header:1",
				kind: "header",
				key: "X-Firefox-Http3",
				valuePattern: new RegExp("h3", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-3:header:2",
				kind: "header",
				key: "alt-svc",
				valuePattern: new RegExp("h3", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "http-3:header:3",
				kind: "header",
				key: "x-firefox-http3",
				valuePattern: new RegExp("h3", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		excludes: [
			"http-2",
		],
	},
	{
		id: "hurrytimer",
		name: "HurryTimer",
		website: "https://wordpress.org/plugins/hurrytimer",
		description: "HurryTimer is a cutting-edge WordPress plugin that enables users to create customizable, scheduled countdown timers to further engage visitors and increase conversions.",
		icon: "HurryTimer.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "hurrytimer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hurrytimer(?:\\/assets)?(?:\\/js)?(?:\\/cookie)?(?:\\/jquery)?(?:\\.countdown)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hurrytimer:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/hurrytimer/'], #hurrytimer, #hurrytimer-css",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hurrytimer:jsGlobal:2",
				kind: "jsGlobal",
				property: "hurrytimer_ajax_object",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
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
		id: "icheck",
		name: "iCheck",
		website: "https://github.com/drgullin/icheck",
		description: "iCheck is a library for customizable checkboxes and radio buttons.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "icheck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:js|iCheck)\\/icheck\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "icheck:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:js|icheck)\\/icheck\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "iconscout",
		name: "IconScout",
		website: "https://iconscout.com",
		description: "IconScout is a platform that offers a diverse collection of high-quality icons and design resources for creative professionals, allowing them to enhance their projects with visually appealing elements.",
		icon: "IconScout.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "iconscout:dom:0",
				kind: "dom",
				selector: "link[href*='.iconscout.com/'], img[src*='.iconscout.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "iframely",
		name: "Iframely",
		website: "https://iframely.com",
		description: "Iframely is a uniform delivery service for rich media embeds and URL metadata across various platforms.",
		icon: "Iframely.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "iframely:jsGlobal:0",
				kind: "jsGlobal",
				property: "iframely.ASPECT_WRAPPER_CLASS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "iframely:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadIframelyEmbedJs",
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
		id: "ihomefinder-idx",
		name: "iHomefinder IDX",
		website: "https://www.ihomefinder.com",
		description: "iHomefinder provides IDX property search, built-in CRM, and marketing tools.",
		icon: "iHomefinder IDX.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ihomefinder-idx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.idxhome\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ihomefinder-idx:jsGlobal:1",
				kind: "jsGlobal",
				property: "ihfJquery",
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
		id: "imagesloaded",
		name: "imagesLoaded",
		website: "https://imagesloaded.desandro.com/",
		description: "jQuery plugin for seeing if the images are loaded.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "imagesloaded:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("imagesloaded(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "immutable-js",
		name: "Immutable.js",
		website: "https://facebook.github.io/immutable-js/",
		description: "Immutable.js is a JavaScript library developed by Facebook that provides immutable data structures for more predictable state management in applications.",
		icon: "Immutable.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "immutable-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^immutable\\.(?:min\\.)?js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "immutable-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Immutable",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "immutable-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "Immutable.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "infinite-scroll",
		name: "Infinite Scroll",
		website: "https://infinite-scroll.com/",
		description: "jQuery plugin for infinite scrolling.",
		icon: "Infinite Scroll.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "infinite-scroll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("infinite-?scroll(?:\\.pkgd)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "infinite-scroll:jsGlobal:1",
				kind: "jsGlobal",
				property: "infinitescroll",
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
		id: "infogram",
		name: "Infogram",
		website: "https://infogram.com",
		description: "Infogram is a web-based data visualisation and infographics platform.",
		icon: "Infogram.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "infogram:dom:0",
				kind: "dom",
				selector: "iframe[src*='.infogram.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "infogram:jsGlobal:1",
				kind: "jsGlobal",
				property: "InfogramEmbeds",
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
		id: "instabot",
		name: "Instabot",
		website: "https://instabot.io/",
		description: "Instabot is a conversion chatbot that understands your users, and curates information, answers questions, captures contacts, and books meetings instantly.",
		icon: "Instabot.png",
		categories: [
			"widgets-misc",
			"analytics",
			"marketing-automation",
			"email-messaging",
		],
		rules: [
			{
				id: "instabot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/rokoInstabot\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "instabot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Instabot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "instabot:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/rokoinstabot\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "instafeed-js",
		name: "Instafeed.js",
		website: "https://instafeedjs.com/",
		description: "A way to add Instagram photos to your website.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "instafeed-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instafeed(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "instagram-feed-for-wordpress",
		name: "Instagram Feed for WordPress",
		website: "https://wordpress.org/plugins/instagram-feed/",
		description: "Display Instagram photos from any non-private Instagram accounts.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "instagram-feed-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instagram-feed(?:\\/js)?(?:\\/sbi-scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "instagram-feed-for-wordpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/instagram-feed'], a[data-full-res*='/wp-content/uploads/sb-instagram-feed-images/'], img[src*='/wp-content/uploads/sb-instagram-feed-images/'], img[src*='/wp-content/plugins/instagram-feed/'], img[data-src*='/wp-content/uploads/sb-instagram-feed-images/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"low",
			],
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "instant-page",
		name: "Instant.Page",
		website: "https://instant.page/",
		description: "Instant. Page is a JavaScript library which uses just-in-time preloading technique to make websites faster.",
		icon: "Instant.page.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "instant-page:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instant\\.page"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "instantclick",
		name: "InstantClick",
		website: "https://instantclick.io/",
		description: "InstantClick is a JavaScript library that speeds up your website, making navigation faster.",
		icon: "InstantClick.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "instantclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instantclick\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "instantclick:jsGlobal:1",
				kind: "jsGlobal",
				property: "InstantClick",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "instantgeo",
		name: "InstantGeo",
		website: "https://instantgeo.info",
		description: "InstantGeo is a service that provides IP geolocation to web pages.",
		icon: "InstantGeo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "instantgeo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.instantgeo\\.info"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "instantgeo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.instantgeo\\.info"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "instantgeo:jsGlobal:2",
				kind: "jsGlobal",
				property: "geojs",
				description: "Page-owned global matches a known technology marker.",
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
		id: "interact",
		name: "Interact",
		website: "https://www.tryinteract.com",
		description: "Interact is a tool for creating online quizzes.",
		icon: "Interact.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "interact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tryinteract\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "interact:jsGlobal:1",
				kind: "jsGlobal",
				property: "InteractApp.name",
				valuePattern: new RegExp("InteractApp"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "interact:jsGlobal:2",
				kind: "jsGlobal",
				property: "InteractPromotionObject",
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
		id: "interactivecalculator",
		name: "InteractiveCalculator",
		website: "https://www.interactivecalculator.com",
		description: "InteractiveCalculator is a platform that enables users to create customized calculators that can be embedded on their website.",
		icon: "InteractiveCalculator.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "interactivecalculator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.interactivecalculator\\.com\\/"),
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
		id: "intlayer",
		name: "Intlayer",
		website: "https://intlayer.org",
		description: "Intlayer is an internationalization framework and content management platform for JavaScript applications.",
		icon: "Intlayer.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "intlayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("IntlayerProvider-[\\w-]+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intlayer:jsGlobal:1",
				kind: "jsGlobal",
				property: "intlayer.enabled",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "isotope",
		name: "Isotope",
		website: "https://isotope.metafizzy.co",
		description: "Isotope.js is a JavaScript library that makes it easy to sort, filter, and add Masonry layouts to items on a webpage.",
		icon: "Isotope.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "isotope:jsGlobal:0",
				kind: "jsGlobal",
				property: "Isotope",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "isotope:jsGlobal:1",
				kind: "jsGlobal",
				property: "init_isotope",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
			],
		},
	},
	{
		id: "issuu",
		name: "Issuu",
		website: "https://issuu.com",
		description: "Issuu is a digital discovery and publishing platform.",
		icon: "Issuu.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "issuu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.issuu\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "issuu:dom:1",
				kind: "dom",
				selector: "a[href*='issuu.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "issuu:jsGlobal:2",
				kind: "jsGlobal",
				property: "IssuuReaders",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "issuu:jsGlobal:3",
				kind: "jsGlobal",
				property: "issuuPanel",
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
		id: "jade",
		name: "Jade",
		website: "https://jade-lang.com",
		description: "Jade is a templating engine primarily used for server-side templating in NodeJS.",
		icon: "Jade.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jade:jsGlobal:0",
				kind: "jsGlobal",
				property: "JADE.components",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "jetboost",
		name: "Jetboost",
		website: "https://www.jetboost.io",
		description: "Jetboost is a tool that enables real-time search, dynamic filtering, and other features for Webflow sites without requiring code.",
		icon: "Jetboost.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jetboost:jsGlobal:0",
				kind: "jsGlobal",
				property: "JETBOOST_SITE_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jetboost:jsGlobal:1",
				kind: "jsGlobal",
				property: "Jetboost.loaded",
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
		requires: [
			"webflow",
		],
	},
	{
		id: "jive",
		name: "Jive",
		website: "https://www.jivesoftware.com",
		icon: "Jive.png",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			cpe: "cpe:2.3:a:jivesoftware:jive:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "jobberbase",
		name: "JobberBase",
		website: "https://www.jobberbase.com",
		description: "Jobberbase is an open-source job board platform that enables the creation of job sites.",
		icon: "JobberBase.png",
		categories: [
			"widgets-misc",
			"business-tools",
		],
		rules: [
			{
				id: "jobberbase:jsGlobal:0",
				kind: "jsGlobal",
				property: "Jobber",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jobberbase:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Jobberbase", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "jobberbase:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("jobberbase", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:jobberbase:jobberbase:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "jsobservable",
		name: "JsObservable",
		website: "https://www.jsviews.com/#jsobservable",
		description: "JsObservable is integrated with JsViews and facilitates observable data manipulations that are immediately reflected in the data-bound templates. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsObservable.svg",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			oss: true,
		},
	},
	{
		id: "jspdf",
		name: "jsPDF",
		website: "https://parall.ax/products/jspdf",
		description: "jsPDF is an HTML5 client-side solution for generating PDF documents directly within web browsers.",
		icon: "jsPDF.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jspdf:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jspdf\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jspdf:jsGlobal:1",
				kind: "jsGlobal",
				property: "jsPDF.API",
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
		id: "jsrender",
		name: "JsRender",
		website: "https://www.jsviews.com/#jsrender",
		description: "JsRender is the template library. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsRender.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jsrender:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)?\\/jsrender(?:\\.min)?\\.js"),
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
			"jsviews",
		],
	},
	{
		id: "jsviews",
		name: "JsViews",
		website: "https://www.jsviews.com/#jsviews",
		description: "JsViews is the MVVM library which provides two-way data binding for the template. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
		icon: "JsViews.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jsviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)?\\/jsviews(?:\\.min)?\\.js"),
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
			"jsobservable",
			"jsrender",
		],
	},
	{
		id: "jszip",
		name: "JSZip",
		website: "https://stuk.github.io/jszip/",
		description: "JSZip is a JavaScript library that enables the creation, reading, and manipulation of zip files in a browser environment.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "jszip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jszip\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jszip:jsGlobal:1",
				kind: "jsGlobal",
				property: "JSZip.version",
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
			cpe: "cpe:2.3:a:jszip_project:jszip:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "k2",
		name: "K2",
		website: "https://getk2.org",
		description: "K2 is a content management extension for Joomla, developed by JoomlaWorks, that enhances Joomla's capabilities by providing features like rich content forms, nested categories, tags, comments, and more.",
		icon: "K2.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "k2:html:0",
				kind: "html",
				pattern: new RegExp("<!--(?: JoomlaWorks \"K2\"| Start K2)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "k2:jsGlobal:1",
				kind: "jsGlobal",
				property: "K2RatingURL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "k2:html:2",
				kind: "html",
				pattern: new RegExp("<!--(?: joomlaworks \"k2\"| start k2)"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"joomla",
		],
	},
	{
		id: "kakao",
		name: "Kakao",
		website: "https://developers.kakao.com/product",
		description: "Kakao platform provides various services such as Kakao Talk, Kakao Talk Channel, Kakao Story as well as Kakao Pay, Kakao Commerce, Kakao Page provided by the subsidiaries. Users can use all Kakao platform services with a united account called Kakao Account.",
		icon: "Kakao.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "kakao:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kakao\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kakao:dom:1",
				kind: "dom",
				selector: "a[href*='.kakao.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kakao:jsGlobal:2",
				kind: "jsGlobal",
				property: "Kakao.VERSION",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "karma",
		name: "Karma",
		website: "https://karma-runner.github.io",
		description: "Karma is a test runner for JavaScript that runs on Node.js.",
		icon: "Karma.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "karma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("karma\\.mdpcdn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "karma:jsGlobal:1",
				kind: "jsGlobal",
				property: "karma.vars.version",
				valuePattern: new RegExp("(.+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:karma_project:karma:*:*:*:*:*:node.js:*:*",
		},
		implies: [
			"node-js",
		],
	},
	{
		id: "keen-slider",
		name: "Keen-Slider",
		website: "https://keen-slider.io",
		description: "Keen-Slider is a free library agnostic touch slider with native touch/swipe behavior.",
		icon: "keen-slider.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "keen-slider:dom:0",
				kind: "dom",
				selector: "div.keen-slider, div.keen-slider__slide",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "keen-slider:jsGlobal:1",
				kind: "jsGlobal",
				property: "KeenSlider",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "kerningjs",
		name: "KerningJS",
		website: "https://webupon.com/blog/what-is-kerning",
		description: "Kerning.js is a JavaScript library that applies real CSS rules to style, transform, and scale web typography.",
		icon: "Kerning.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "kerningjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.FLAutoKerning\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kerningjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "FLAutoKerning",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kerningjs:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.flautokerning\\.js"),
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
		id: "klaviyo-customer-hub",
		name: "Klaviyo Customer Hub",
		website: "https://www.klaviyo.com/products/customer-experience-hub",
		description: "Klaviyo Customer Hub gives customers a unified signed-in experience to track orders, manage returns, and get help",
		icon: "Klaviyo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "klaviyo-customer-hub:dom:0",
				kind: "dom",
				selector: "div#k-hub",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "klaviyo-customer-hub:jsGlobal:1",
				kind: "jsGlobal",
				property: "customerHub",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ko-fi",
		name: "Ko-fi",
		website: "https://ko-fi.com",
		description: "Ko-fi is an online platform that helps content creators get the financial support.",
		icon: "Ko-fi.svg",
		categories: [
			"widgets-misc",
			"fundraising-donations",
		],
		rules: [
			{
				id: "ko-fi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ko-fi\\.com\\/widgets"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ko-fi:dom:1",
				kind: "dom",
				selector: "a[href*='ko-fi.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ko-fi:jsGlobal:2",
				kind: "jsGlobal",
				property: "kofiwidget2",
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
		id: "laga-widget",
		name: "Laga Widget",
		website: "https://laga.se",
		description: "Laga Widget is a tool for car dismantlers to search and manage parts within their inventory.",
		icon: "LagaWidget.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "laga-widget:jsGlobal:0",
				kind: "jsGlobal",
				property: "laga-widget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laga-widget:jsGlobal:1",
				kind: "jsGlobal",
				property: "lagaWidgetOptions",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "laravel-echo",
		name: "Laravel Echo",
		website: "https://laravel.com/docs/broadcasting#client-side-installation",
		description: "Laravel Echo is a JavaScript library that makes it painless to subscribe to channels and listen for events broadcast by Laravel.",
		icon: "Laravel Echo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "laravel-echo:jsGlobal:0",
				kind: "jsGlobal",
				property: "Echo.connector",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "laravel-echo:jsGlobal:1",
				kind: "jsGlobal",
				property: "echo.connector",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"laravel",
		],
	},
	{
		id: "lazysizes",
		name: "LazySizes",
		website: "https://github.com/aFarkas/lazysizes",
		description: "LazySizes is a JavaScript library used to delay the loading of images (iframes, scripts, etc) until they come into view.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "lazysizes:jsGlobal:0",
				kind: "jsGlobal",
				property: "lazySizes",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lazysizes:jsGlobal:1",
				kind: "jsGlobal",
				property: "lazySizesConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:lazysizes_project:lazysizes:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "lazysizes-unveilhooks-plugin",
		name: "LazySizes unveilhooks plugin",
		website: "https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks",
		description: "LazySizes unveilhooks plugin extends lazySizes to lazyload scripts/widgets, background images, styles and video/audio elements.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "lazysizes-unveilhooks-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ls\\.unveilhooks(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "lengow",
		name: "Lengow",
		website: "https://www.lengow.com",
		description: "Lengow is an ecommerce automation solution that enables brands and retailers to integrate, structure and optimise their product content across all distribution channels: marketplaces, comparison shopping engines, affiliate platforms, display and retargeting.",
		icon: "Lengow.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lengow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lengow\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
			],
		},
	},
	{
		id: "lenis",
		name: "Lenis",
		website: "https://lenis.studiofreight.com",
		description: "Lenis is a smooth scroll library to normalise the scrolling experience across devices.",
		icon: "Lenis.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lenis:jsGlobal:0",
				kind: "jsGlobal",
				property: "lenisVersion",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lenis:jsGlobal:1",
				kind: "jsGlobal",
				property: "Lenis",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "libphonenumber",
		name: "libphonenumber",
		website: "https://github.com/google/libphonenumber",
		description: "libphonenumber is a JavaScript library for parsing, formatting, and validating international phone numbers.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "libphonenumber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d\\.]+))?\\/libphonenumber(?:-js\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "libphonenumber:jsGlobal:1",
				kind: "jsGlobal",
				property: "libphonenumber.AsYouType",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "libphonenumber:jsGlobal:2",
				kind: "jsGlobal",
				property: "libphonenumber.DIGITS",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "libravatar",
		name: "Libravatar",
		website: "https://www.libravatar.org/",
		description: "Libravatar is a service for fetching avatar images for e-mail addresses and OpenIDs in a privacy respecting way.",
		icon: "libravatar.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "libravatar:dom:0",
				kind: "dom",
				selector: "img[src*='.libravatar.org/avatar/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "lifter-apps-pop-up-window",
		name: "Lifter Apps Pop-up Window",
		website: "https://lifterapps.com",
		description: "Lifter Apps Pop-up Window is a customizable on-site feature designed to capture visitor emails and highlight sales promotions.",
		icon: "LifterApps.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lifter-apps-pop-up-window:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("(?:\\.lifterpopup\\.com|popup\\.lifterapps\\.com)"),
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
			"shopify",
		],
	},
	{
		id: "lightbox",
		name: "Lightbox",
		website: "https://lokeshdhakar.com/projects/lightbox2/",
		description: "Lightbox is small javascript library used to overlay images on top of the current page.",
		icon: "Lightbox.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lightbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lightbox(?:-plus-jquery)?.{0,32}\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lightbox:html:1",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^\"]+lightbox(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "lightbox:dom:2",
				kind: "dom",
				selector: "link[href*='lightbox']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lightbox:jsGlobal:3",
				kind: "jsGlobal",
				property: "Lightbox.activeImage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lightbox:jsGlobal:4",
				kind: "jsGlobal",
				property: "lightbox.$lightbox",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:lightbox_photo_gallery_project:lightbox_photo_gallery:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "list-js",
		name: "List.js",
		website: "https://listjs.com",
		description: "List.js is a small, fast JavaScript library that adds search, sort, and filter functionalities to plain HTML lists, tables, or other elements without requiring any dependencies.",
		icon: "List.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "list-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("list\\.js\\/"),
				confidence: 50,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "list-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("@([\\d.]+)\\/(?:\\/dist)?list\\.(?:min\\.)?js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "list-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "List",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "lite-youtube-embed",
		name: "lite-youtube-embed",
		website: "https://github.com/paulirish/lite-youtube-embed",
		description: "The lite-youtube-embed technique renders the YouTube video inside the IFRAME tag only when the play button in clicked thus improving the core web vitals score of your website.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lite-youtube-embed:dom:0",
				kind: "dom",
				selector: "lite-youtube",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"youtube",
		],
	},
	{
		id: "loadable-components",
		name: "Loadable-Components",
		website: "https://github.com/gregberge/loadable-components",
		description: "Loadable-Components is a library to solve the React code-splitting client-side and server-side.",
		icon: "Loadable-Components.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "loadable-components:dom:0",
				kind: "dom",
				selector: "script#__LOADABLE_REQUIRED_CHUNKS__",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "loadable-components:jsGlobal:1",
				kind: "jsGlobal",
				property: "__LOADABLE_LOADED_CHUNKS__",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "locomotive-scroll",
		name: "Locomotive Scroll",
		website: "https://github.com/locomotivemtl/locomotive-scroll",
		description: "Locomotive Scroll is an opinionated JavaScript library that provides smooth scrolling animations and advanced scroll interactions for web applications.",
		icon: "Locomotive Scroll.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "locomotive-scroll:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("locomotive-scroll(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "locomotive-scroll:dom:1",
				kind: "dom",
				selector: "div[data-scroll-section]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "locomotive-scroll:jsGlobal:2",
				kind: "jsGlobal",
				property: "LocomotiveScroll",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "locomotive-scroll:jsGlobal:3",
				kind: "jsGlobal",
				property: "locomotiveScrollVersion",
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
		implies: [
			"lenis",
		],
	},
	{
		id: "lodash",
		name: "Lodash",
		website: "https://www.lodash.com",
		description: "Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
		icon: "Lodash.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lodash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lodash.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lodash:jsGlobal:1",
				kind: "jsGlobal",
				property: "_.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lodash:jsGlobal:2",
				kind: "jsGlobal",
				property: "_.differenceBy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lodash:jsGlobal:3",
				kind: "jsGlobal",
				property: "_.templateSettings.imports._.templateSettings.imports._.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:lodash:lodash:*:*:*:*:*:*:*:*",
		},
		excludes: [
			"underscore-js",
		],
	},
	{
		id: "loqate",
		name: "Loqate",
		website: "https://www.loqate.com",
		description: "Loqate is an address verification solution.",
		icon: "Loqate.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "loqate:jsGlobal:0",
				kind: "jsGlobal",
				property: "loqateAccountCode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loqate:jsGlobal:1",
				kind: "jsGlobal",
				property: "pca.platform.productList",
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
		id: "lottiefiles",
		name: "LottieFiles",
		website: "https://lottiefiles.com",
		description: "LottieFiles is an open-source animation file format that's tiny, high quality, interactive, and can be manipulated at runtime.",
		icon: "LottieFiles.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lottiefiles:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/dist\\/lottie-player\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lottiefiles:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/dist\\/tgs-player\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lottiefiles:dom:2",
				kind: "dom",
				selector: "lottie-player, div[data-animation-type='lottie'], div[data-testid='lottie-player'], clipPath[id*='__lottie_element_']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lottiefiles:jsGlobal:3",
				kind: "jsGlobal",
				property: "dotlottie-player",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lottiefiles:jsGlobal:4",
				kind: "jsGlobal",
				property: "lottie.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "lou",
		name: "LOU",
		website: "https://www.louassist.com",
		description: "LOU is a Digital Adoption Platform that streamlines user onboarding and training.",
		icon: "LOU.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lou:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.louassist\\.com*"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "lozad-js",
		name: "Lozad.js",
		website: "https://apoorv.pro/lozad.js/",
		description: "Lozad.js is a lightweight lazy-loading library that's just 535 bytes minified & gzipped.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "lozad-js:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/lozad\\.min\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "lozad-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "lozad",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "lunr-js",
		name: "Lunr.js",
		website: "https://lunrjs.com/",
		description: "A very simple search index.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "lunr-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?lunr(?:-store)?(?:-en)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lunr-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "lunr",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "magewire",
		name: "Magewire",
		website: "https://github.com/magewirephp/magewire",
		description: "Magewire is a Laravel Livewire port for Magento 2.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "magewire:jsGlobal:0",
				kind: "jsGlobal",
				property: "Magewire.connection-author",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "magewire:jsGlobal:1",
				kind: "jsGlobal",
				property: "magewire",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"laravel",
			"livewire",
		],
	},
	{
		id: "magicbell",
		name: "MagicBell",
		website: "https://www.magicbell.com",
		description: "MagicBell is an embeddable notification inbox that allows applications to display and manage user notifications within their interfaces.",
		icon: "MagicBell.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "magicbell:header:0",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.magicbell\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "magicbell:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.magicbell\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "magnific-popup",
		name: "Magnific Popup",
		website: "https://dimsemenov.com/plugins/magnific-popup/",
		description: "Magnific Popup is a responsive lightbox & dialog script with focus on performance and providing best experience for user with any device.",
		icon: "Magnific Popup.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "magnific-popup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("magnific-popup(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "mailcheck",
		name: "Mailcheck",
		website: "https://github.com/mailcheck/mailcheck",
		description: "Mailcheck is a JavaScript library designed to address the issue of misspelled email addresses during user input.",
		icon: "Mailcheck.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mailcheck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mailcheck(?:\\.min)?\\.js(?:\\?v(?:er)?=(\\d+\\.\\d+\\.\\d+))?"),
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
	},
	{
		id: "mailoptin",
		name: "MailOptin",
		website: "https://mailoptin.io/",
		description: "MailOptin is a marketing automation platform that supports lead generation, email automation, and newsletter creation for managing subscriber engagement and email campaigns.",
		icon: "MailOptin.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
			"marketing-automation",
		],
		rules: [
			{
				id: "mailoptin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mailoptin(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailoptin:jsGlobal:1",
				kind: "jsGlobal",
				property: "mailoptin_globals",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mailoptin:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/scripts\\/mailoptin\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "mangeznotez",
		name: "Mangeznotez",
		website: "https://www.mangeznotez.com",
		description: "Mangeznotez is a restaurant table booking widget.",
		icon: "Mangeznotez.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "mangeznotez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.mangeznotez\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mangeznotez:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\w+.mangeznotez\\.\\w+(?:.*\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "mappress",
		name: "MapPress",
		website: "https://mappresspro.com",
		description: "MapPress is a WordPress plugin that provides easy integration of interactive maps into WordPress websites.",
		icon: "MapPress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mappress:dom:0",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/mappress-google-maps-for-wordpress/'], #mappress-leaflet-css, #mappress-css",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
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
		id: "marked",
		name: "Marked",
		website: "https://marked.js.org",
		icon: "Marked.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "marked:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/marked(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "marked:jsGlobal:1",
				kind: "jsGlobal",
				property: "marked",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:marked_project:marked:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "marketo-forms",
		name: "Marketo Forms",
		website: "https://www.marketo.com",
		description: "Marketo Forms help create web forms without programming knowledge. Forms can reside on Marketo landing pages and also be embedded on any page of website.",
		icon: "Marketo.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
		],
		rules: [
			{
				id: "marketo-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("marketo\\.\\w+\\/js\\/forms(?:[\\d.]+)\\/js\\/forms([\\d.]+)\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "marketo-forms:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("v([\\d.]+)\\/js\\/marketo-alt-form\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "marketo-forms:jsGlobal:2",
				kind: "jsGlobal",
				property: "formatMarketoForm",
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
		id: "masonry",
		name: "Masonry",
		website: "https://masonry.desandro.com",
		description: "Masonry is a JavaScript library that enables a cascading grid layout, positioning elements based on available vertical space for an optimized, gap-free arrangement.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "masonry:jsGlobal:0",
				kind: "jsGlobal",
				property: "Masonry.Item",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "math-js",
		name: "math.js",
		website: "https://mathjs.org",
		description: "Math.js a JavaScript library that provides a comprehensive set of mathematical functions and capabilities for performing complex calculations and operations in web applications.",
		icon: "math.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "math-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("math(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "math-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "mathjs",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:mathjs:math.js:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "matter-js",
		name: "Matter.js",
		website: "https://brm.io/matter-js",
		description: "Matter.js is a JavaScript 2D rigid body physics engine for the web.",
		icon: "MatterJs.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "matter-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("matter(?:-wrap)?(?:\\/demo\\/js\\/lib(?:\\/matter-tools\\/jquery)?(?:\\/decomp)?)?(?:\\/?-?((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "matter-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Matter.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "matter-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/matter\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "mavo",
		name: "Mavo",
		website: "https://mavo.io",
		description: "Mavo is a JavaScript library that enables web developers to turn regular HTML into reactive web applications without the need for writing custom JavaScript.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mavo:jsGlobal:0",
				kind: "jsGlobal",
				property: "Mavo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mavo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mavo.version",
				valuePattern: new RegExp("v([\\d\\.]+)"),
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
		id: "max-mega-menu",
		name: "Max Mega Menu",
		website: "https://www.megamenu.com/",
		description: "Max Mega Menu is a popular WordPress plugin that enhances the menu functionality on WordPress websites.",
		icon: "Max Mega Menu.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "max-mega-menu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:max)?megamenu(?:-pro)?(?:\\/assets)?(?:\\/public)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "max-mega-menu:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/maxmegamenu/'], link[href*='/wp-content/plugins/megamenu-pro/'], link#megamenu-css, .mega-menu, .max-mega-menu, .mega-menu-megamenu, .mega-menu-primary, .mega-menu-item",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "max-mega-menu:jsGlobal:2",
				kind: "jsGlobal",
				property: "megamenu",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
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
		id: "meebo",
		name: "Meebo",
		website: "https://www.meebo.com",
		description: "Meebo is a widget that is integrated into websites to facilitate link sharing.",
		icon: "Meebo.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "meebo:html:0",
				kind: "html",
				pattern: new RegExp("(?:<iframe id=\"meebo-iframe\"|Meebo\\('domReady'\\))"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "meebo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meebo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "meebo:jsGlobal:2",
				kind: "jsGlobal",
				property: "Meebo._",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "meebo:html:3",
				kind: "html",
				pattern: new RegExp("(?:<iframe id=\"meebo-iframe\"|meebo\\('domready'\\))"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "meeting-scheduler",
		name: "Meeting Scheduler",
		website: "https://bookmenow.info",
		description: "Meeting Scheduler is a schedule appointments widget.",
		icon: "Meeting Scheduler.png",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "meeting-scheduler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bookmenow\\.info\\/(?:runtime|main).+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "meeting-scheduler:dom:1",
				kind: "dom",
				selector: "a[href*='bookmenow.info/book']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "meks-simple-flickr-widget",
		name: "Meks Simple Flickr Widget",
		website: "https://wordpress.org/plugins/meks-simple-flickr-widget",
		description: "Meks Simple Flickr Widget is a WordPress plugin created by Meks. This plugin is designed to help WordPress website owners easily integrate Flickr photo streams into their websites.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "meks-simple-flickr-widget:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/meks-simple-flickr-widget/'], link#meks-flickr-widget-css",
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
		id: "memberspace",
		name: "MemberSpace",
		website: "https://www.memberspace.com",
		description: "MemberSpace is a cloud-based membership solution, which allows users to provide role-based access to content.",
		icon: "MemberSpace.svg",
		categories: [
			"widgets-misc",
			"commerce-operations",
		],
		rules: [
			{
				id: "memberspace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("memberspace\\.com(?:\\/widget)?(?:\\/\\w{0,25})?(?:\\/scripts)?(?:\\/widgets)?(?:\\/main)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "memberspace:jsGlobal:1",
				kind: "jsGlobal",
				property: "MemberSpace",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "memberspace:jsGlobal:2",
				kind: "jsGlobal",
				property: "MemberSpaceParams",
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
		id: "mentaya",
		name: "Mentaya",
		website: "https://www.mentaya.com",
		description: "Mentaya is a platform that simplifies mental health care by leveraging out-of-network benefits to reduce patient costs while ensuring therapists receive full fees.",
		icon: "Mentaya.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mentaya:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.mentaya.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mentaya:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Mentaya", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mentaya:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("mentaya", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "mesmerize-companion",
		name: "Mesmerize Companion",
		website: "https://wordpress.org/plugins/mesmerize-companion",
		description: "The Mesmerize Companion is a WordPress plugin that enhances the Mesmerize theme by adding drag-and-drop page builder functionality.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "mesmerize-companion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mesmerize-companion\\/theme-data\\/mesmerize\\/assets\\/js\\/companion(?:\\.bundle)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mesmerize-companion:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/mesmerize-companion/'], link#companion-bundle-css",
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
		id: "meticular",
		name: "Meticular",
		website: "https://www.metikular.ch",
		description: "Meticular is a Swiss platform that provides business solutions and services to support organizational operations.",
		icon: "Meticular.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "meticular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.metikular\\.ch"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "metismenu",
		name: "metisMenu",
		website: "https://github.com/onokumus/metismenu",
		description: "metisMenu is a collapsible jQuery menu plugin.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "metismenu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/|\\.)metisMenu(?:js)?(?:\\.min)?\\.js(?:\\?([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "metismenu:jsGlobal:1",
				kind: "jsGlobal",
				property: "MetisMenu",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "metismenu:jsGlobal:2",
				kind: "jsGlobal",
				property: "metisMenu",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "metismenu:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/|\\.)metismenu(?:js)?(?:\\.min)?\\.js(?:\\?([\\d\\.]+))?"),
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
			"jquery",
		],
	},
	{
		id: "metronet-profile-picture",
		name: "Metronet Profile Picture",
		website: "https://wordpress.org/plugins/metronet-profile-picture/",
		description: "Set a custom profile image for a user using the standard WordPress media upload tool.",
		icon: "Metronet Profile Picture.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "metronet-profile-picture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metronet-profile-picture(?:\\/js)?(?:\\/mpp-frontend)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "metronet-profile-picture:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/metronet-profile-picture/']",
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
		id: "mice-operations",
		name: "MICE Operations",
		website: "https://www.miceoperations.com",
		description: "MICE Operations is a software solution tailored for event venues, catering, and hospitality businesses, streamlining operational processes, sales, and client relationship management.",
		icon: "MICEOperations.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mice-operations:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.miceoperations\\.com\\/widget\\/widget\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mice-operations:jsGlobal:1",
				kind: "jsGlobal",
				property: "miceWidgetSettings",
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
		},
	},
	{
		id: "microsoft-silverlight",
		name: "Microsoft Silverlight",
		website: "http://silverlight.net",
		description: "Microsoft Silverlight is a cross-browser, cross-platform plug-in designed for delivering advanced .NET-based media experiences.",
		icon: "MicrosoftSilverlight.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "microsoft-silverlight:jsGlobal:0",
				kind: "jsGlobal",
				property: "SILVERLIGHT_SUPPORTED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "microsoft-silverlight:jsGlobal:1",
				kind: "jsGlobal",
				property: "Silverlight.getSilverlight",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "milonic",
		name: "Milonic",
		website: "https://milonic.com",
		description: "Milonic is a platform for developing Dynamic Hypertext Markup Language (DHTML) JavaScript and building dynamic, DHTML-based websites.",
		icon: "Milonic.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "milonic:jsGlobal:0",
				kind: "jsGlobal",
				property: "milonic.C",
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
		id: "milotree",
		name: "MiloTree",
		website: "https://milotree.com",
		description: "MiloTree is a pop-up tool that helps websites grow by converting visitors into social media followers and customers.",
		icon: "MiloTree.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "milotree:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn001\\.milotree\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "milotree:jsGlobal:1",
				kind: "jsGlobal",
				property: "milotree_closeBox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "milotree:jsGlobal:2",
				kind: "jsGlobal",
				property: "milotree_openBox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "milotree:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^milotree", "i"),
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
		id: "mindbody",
		name: "MindBody",
		website: "https://www.mindbodyonline.com",
		description: "Mindbody is a (SaaS) company that provides cloud-based online scheduling and other business management software for the wellness services industry.",
		icon: "MindBody.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "mindbody:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\w+\\.healcode\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mindbody:jsGlobal:1",
				kind: "jsGlobal",
				property: "HealcodeWidget",
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
		id: "miniorange-login",
		name: "MiniOrange Login",
		website: "https://wordpress.org/plugins/miniorange-login-openid",
		description: "Social Login with Discord, Facebook, Google, Twitter, LinkedIn and other apps.",
		icon: "MiniOrange Login.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "miniorange-login:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("miniorange-login-openid\\/includes\\/js(?:\\/mo_openid_jquery)?(?:\\/mo-openid-social_login)?(?:\\/social_login)?(?:\\/jquery)?(?:\\.cookie)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "miniorange-login:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/miniorange-login-openid/'], #js-cookie-script-js, #mo-social-login-script-js",
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
		id: "mixitup",
		name: "Mixitup",
		website: "https://www.kunkalabs.com/mixitup/",
		description: "A CSS3 and jQuery Filter & Sort Plugin.",
		icon: "kunkalabs.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mixitup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mixitup(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "mobile-detect-js",
		name: "mobile-detect.js",
		website: "https://hgoebl.github.io/mobile-detect.js/doc/MobileDetect.html",
		description: "Mobile-detect.js is a compact JavaScript library designed to detect devices by comparing patterns against a given User-Agent string.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mobile-detect-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mobile-detect(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "mochikit",
		name: "MochiKit",
		website: "https://mochi.github.io/mochikit/",
		icon: "MochiKit.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mochikit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("MochiKit(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mochikit:jsGlobal:1",
				kind: "jsGlobal",
				property: "MochiKit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mochikit:jsGlobal:2",
				kind: "jsGlobal",
				property: "MochiKit.MochiKit.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mochikit:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("mochikit(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "modernizr",
		name: "Modernizr",
		website: "https://modernizr.com",
		description: "Modernizr is a JavaScript library that detects the features available in a user's browser.",
		icon: "Modernizr.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "modernizr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)?\\/modernizr(?:\\.([\\d.]+))?.*\\.js"),
				version: {
					source: "match",
					template: "$1?$1:$2",
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "modernizr:jsGlobal:1",
				kind: "jsGlobal",
				property: "Modernizr._version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "modernizr:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("modernizr(?:\\.([\\d.]+))?.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "modernizr:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d.]+)?\\/modernizr.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "module-federation",
		name: "Module Federation",
		website: "https://webpack.js.org/concepts/module-federation/",
		description: "Module Federation is a webpack technology for dynamically loading parts of other independently deployed builds.",
		icon: "Webpack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "module-federation:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("data-webpack"),
				confidence: 50,
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "module-federation:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("Container initialization failed as it has already been initialized with a different share scope"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "module-federation:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("container initialization failed as it has already been initialized with a different share scope"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		implies: [
			"webpack",
		],
	},
	{
		id: "moofx",
		name: "Moofx",
		website: "https://github.com/kamicane/moofx",
		description: "Moofx is a CSS3-enabled JavaScript animation library for creating and managing lightweight, hardware-accelerated animations.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "moofx:jsGlobal:0",
				kind: "jsGlobal",
				property: "moofx.parse",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "moon-organizer",
		name: "Moon Organizer",
		website: "https://moonorganizer.com",
		description: "Moon Organizer is a platform that tracks lunar cycles, phases, and moon-related events to support planning and provide timely updates.",
		icon: "MoonOrganizer.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "moon-organizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.moonorganizer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "morningtrain",
		name: "Morningtrain",
		website: "https://morningtrain.dk/vi-lukker-morningcatch",
		description: "Morningtrain is a pop-up window tool designed in Denmark for generating and capturing leads through on-site user engagement.",
		icon: "Morningtrain.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "morningtrain:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.morningcatch\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "morningtrain:meta:1",
				kind: "meta",
				key: "designer",
				valuePattern: new RegExp("^Morning Train$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "morningtrain:meta:2",
				kind: "meta",
				key: "designer",
				valuePattern: new RegExp("^morning train$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "morphext",
		name: "Morphext",
		website: "https://morphext.fyianlai.com/",
		description: "Morphext is a lightweight jQuery plugin that rotates text using Animate.css transitions for smooth, dynamic visual effects.",
		icon: "Morphext.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "morphext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("morphext(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "morphext:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/morphext\\/morphext\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "morris-js",
		name: "Morris.js",
		website: "https://morrisjs.github.io/morris.js/",
		description: "A JavaScript library that simplifies the process of creating interactive and responsive data visualizations on the web.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "morris-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("morris(?:\\/(?:area|bar|donut|grid|hover|line))?(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
		requires: [
			"jquery",
			"raphael",
		],
	},
	{
		id: "moverbase",
		name: "MoverBase",
		website: "https://www.moverbase.com",
		description: "MoverBase is a software solution that includes features designed to support the management of a moving company.",
		icon: "MoverBase.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "moverbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lead\\.moverbase\\.com\\/"),
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
		id: "moxie",
		name: "mOxie",
		website: "https://github.com/moxiecode/moxie",
		description: "mOxie is a library providing polyfills for XHR2 and File API, ensuring compatibility with older browsers that lack native support.",
		categories: [
			"widgets-misc",
			"accessibility",
		],
		rules: [
			{
				id: "moxie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moxie(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moxie:jsGlobal:1",
				kind: "jsGlobal",
				property: "mOxie",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moxie:jsGlobal:2",
				kind: "jsGlobal",
				property: "moxie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"low",
				"recurring",
			],
		},
	},
	{
		id: "mulberry",
		name: "Mulberry",
		website: "https://www.getmulberry.com",
		description: "Mulberry is a developer of personalised product protection solutions used to help brands unlock additional revenue.",
		icon: "Mulberry.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mulberry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getmulberry\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mulberry:jsGlobal:1",
				kind: "jsGlobal",
				property: "mulberry.cta",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mulberry:jsGlobal:2",
				kind: "jsGlobal",
				property: "mulberryShop",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "muuri",
		name: "Muuri",
		website: "https://muuri.dev",
		description: "Muuri is a JavaScript layout engine that allows you to build all kinds of layouts and make them responsive, sortable, filterable, draggable and/or animated.",
		icon: "Muuri.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "muuri:jsGlobal:0",
				kind: "jsGlobal",
				property: "Muuri",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "mybloglog",
		name: "MyBlogLog",
		website: "https://www.mybloglog.com",
		icon: "MyBlogLog.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "mybloglog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pub\\.mybloglog\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "myhkw-player",
		name: "Myhkw player",
		website: "https://myhkw.cn",
		description: "Myhkw player is a website music player.",
		icon: "Myhkw player.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "myhkw-player:jsGlobal:0",
				kind: "jsGlobal",
				property: "myhk_player_songid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "myhkw-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "myhkplayerlist",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "navidium-shipping-protection",
		name: "Navidium Shipping Protection",
		website: "https://navidiumapp.com",
		description: "Navidium is a shipping insurance company that covers packages that are lost, stolen, or damaged in transit. Navidium Shipping Protection is an optional shipping protection service where, in the event of an incident (the order is damaged, lost, or stolen during transit), we will immediately re-ship any damaged, lost, or stolen products.",
		icon: "Navidium.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "navidium-shipping-protection:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^.*\\/navidium-extension-checker\\.js$"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "navidium-shipping-protection:jsGlobal:1",
				kind: "jsGlobal",
				property: "nvdShop",
				valuePattern: new RegExp("\\.myshopify\\.com"),
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
		id: "newstore",
		name: "NewStore",
		website: "https://www.newstore.com",
		description: "NewStore is the only integrated platform offering omnichannel solutions for stores and consumers.",
		icon: "NewStore.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "newstore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.api\\.highstreetapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "newstore:jsGlobal:1",
				kind: "jsGlobal",
				property: "highstreetBanner.config",
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
		id: "nextsale",
		name: "Nextsale",
		website: "https://nextsale.io",
		description: "Nextsale is a conversion optimisation platform that provides social proof and urgency tools for ecommerce websites.",
		icon: "Nextsale.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "nextsale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:api|sdk)\\.nextsale\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nextsale:jsGlobal:1",
				kind: "jsGlobal",
				property: "NextsaleObject",
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
		id: "nido-tecnologia",
		name: "Nido Tecnologia",
		website: "https://www.nido.com.br",
		description: "Nido Tecnologia is a platform that provides software solutions for the real estate industry in Brazil.",
		icon: "NidoTecnologia.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "nido-tecnologia:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.nidoimovel\\.com\\.br"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "nido-tecnologia:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Nido Tecnologia$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "nido-tecnologia:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^nido tecnologia$", "i"),
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
		id: "nogin",
		name: "Nogin",
		website: "https://www.nogin.com",
		description: "Nogin is a platform operating as Commerce-as-a-Service (CaaS), offering cloud-based ecommerce functionalities and infrastructure for seamless integration and development of ecommerce solutions.",
		icon: "Nogin.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "nogin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nogin\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nogin:jsGlobal:1",
				kind: "jsGlobal",
				property: "NoginConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nogin:jsGlobal:2",
				kind: "jsGlobal",
				property: "nogin.wishlist",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "nopstation",
		name: "nopStation",
		website: "https://www.nop-station.com",
		description: "nopStation is an one stop ecommerce solution with custom integrations and custom built plugins based on custom tailored requirements on top of nopCommerce.",
		icon: "nopStation.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "nopstation:dom:0",
				kind: "dom",
				selector: "a[href*='.nop-station.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"microsoft-asp-net",
		],
		requires: [
			"nopcommerce",
		],
	},
	{
		id: "notie",
		name: "Notie",
		website: "https://github.com/jaredreich/notie",
		description: "Notie is a notification, input, and selection suite for javascript, with no dependencies.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "notie:jsGlobal:0",
				kind: "jsGlobal",
				property: "notie",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "nowbuttons",
		name: "NowButtons",
		website: "https://nowbuttons.com",
		description: "NowButtons is a floating action button plugin that enhances website interactivity by providing quick access to key actions and improving user conversion rates.",
		icon: "NowButtons.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "nowbuttons:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.callnowbutton\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nowbuttons:dom:1",
				kind: "dom",
				selector: "link[href*='static.callnowbutton.com/']",
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
		id: "nprogress",
		name: "NProgress",
		website: "https://ricostacruz.com/nprogress/",
		description: "NProgress is a JavaScript library that displays a nanoscopic progress bar at the top of websites or web applications. It includes trickle animations to indicate loading activity, enhancing user experience by showing that content is being loaded.",
		icon: "NProgress.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "nprogress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/nprogress\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nprogress:jsGlobal:1",
				kind: "jsGlobal",
				property: "NProgress.version",
				valuePattern: new RegExp("([\\d.]+)"),
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
		id: "octane-ai",
		name: "Octane AI",
		website: "https://www.octaneai.com",
		description: "Octane AI provides an all-in-one platform for engaging quizzes, data collection, and personalised Facebook Messenger and SMS automation.",
		icon: "Octane AI.svg",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "octane-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.octaneai\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "octane-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "OctaneConfig",
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
		id: "odometer-js",
		name: "Odometer.js",
		website: "https://github.hubspot.com/odometer/docs/welcome",
		description: "Odometer.js is a JavaScript library that smoothly animates transitions between numeric values for counters and metrics.",
		icon: "HubSpot.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "odometer-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/odometer\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "odometer-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Odometer.init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "offline-js",
		name: "Offline.js",
		website: "https://github.hubspot.com/offline/docs/welcome",
		description: "Offline.js is a library that automatically alerts users when they have lost internet connectivity.",
		icon: "HubSpot.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "offline-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:bundles\\/[^/]+|assets\\/javascripts|js)\\/offline\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "offline-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Offline.confirmDown",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "offline-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "Offline.state",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "okmenu",
		name: "OkMenu",
		website: "https://oktabletmenu.com",
		description: "OkMenu is a provider of an all-in-one restaurant QR menu.",
		icon: "OkMenu.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "okmenu:dom:0",
				kind: "dom",
				selector: "div#__okmenu__",
				description: "DOM selector matches a known technology marker.",
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
	},
	{
		id: "omny-studio",
		name: "Omny Studio",
		website: "https://omnystudio.com",
		description: "Omny Studio is a podcast hosting solution, which enables radio stations and enterprises to manage, monetize, publish, share, edit and analyze audio episodes.",
		icon: "Omny Studio.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "omny-studio:dom:0",
				kind: "dom",
				selector: "iframe[src*='//omny.fm/shows/']",
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
		id: "ookla-speedtest-custom",
		name: "Ookla Speedtest Custom",
		website: "https://www.ookla.com/speedtest-custom",
		description: "Speedtest Custom is a robust and accurate testing solution that is HTML5-based, Flash-free and supports both mobile and desktop browsers built by Ookla.",
		icon: "Ookla.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ookla-speedtest-custom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.speedtestcustom\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ookla-speedtest-custom:dom:1",
				kind: "dom",
				selector: "iframe[src*='.speedtestcustom.com'], a[href*='.speedtestcustom.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ookla-speedtest-custom:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.speedtestcustom\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "open-graph",
		name: "Open Graph",
		website: "https://ogp.me",
		description: "Open Graph is a protocol that is used to integrate any web page into the social graph.",
		icon: "Open Graph.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "open-graph:dom:0",
				kind: "dom",
				selector: "meta[property*='og:']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "opencv",
		name: "OpenCV",
		website: "https://opencv.org",
		description: "OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library.",
		icon: "OpenCV.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "opencv:jsGlobal:0",
				kind: "jsGlobal",
				property: "opencvIsReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:opencv:opencv:*:*:*:*:*:*:*:*",
		},
		implies: [
			"webassembly",
		],
	},
	{
		id: "opengrok",
		name: "OpenGrok",
		website: "https://hub.opensolaris.org/bin/view/Project+opengrok/WebHome",
		icon: "OpenGrok.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "opengrok:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^OpenGrok$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "opengrok:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("OpenGrok(?: v?([\\d.]+))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "opengrok:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^opengrok$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "opengrok:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("opengrok(?: v?([\\d.]+))?", "i"),
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
		id: "oracle-dynamic-monitoring-service",
		name: "Oracle Dynamic Monitoring Service",
		website: "https://oracle.com",
		description: "Oracle Dynamic Monitoring Service is a feature of Oracle WebLogic Server that provides real-time monitoring and diagnostic capabilities for Java applications running on the WebLogic Server.",
		icon: "Oracle.svg",
		categories: [
			"widgets-misc",
		],
		rules: [],
		implies: [
			"oracle-weblogic-server",
		],
	},
	{
		id: "orbit-slider",
		name: "Orbit Slider",
		website: "https://zurb.com/playground/orbit-jquery-image-slider",
		description: "Orbit is a jQuery slider.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "orbit-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("orbit(?:\\.min)?([\\d.]{2,}[\\d])?\\.js"),
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
	},
	{
		id: "outbrain",
		name: "Outbrain",
		website: "https://www.outbrain.com",
		description: "Outbrain is a web advertising platform that displays boxes of links, known as chumboxes, to pages within websites.",
		icon: "Outbrain.svg",
		categories: [
			"widgets-misc",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "outbrain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.outbrain\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "outbrain:jsGlobal:1",
				kind: "jsGlobal",
				property: "OB_ADV_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outbrain:jsGlobal:2",
				kind: "jsGlobal",
				property: "OB_releaseVer",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outbrain:jsGlobal:3",
				kind: "jsGlobal",
				property: "OutbrainPermaLink",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outbrain:jsGlobal:4",
				kind: "jsGlobal",
				property: "obApi.version",
				valuePattern: new RegExp("^[\\d.]+$"),
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
		id: "owids",
		name: "Owids",
		website: "https://owids.com",
		description: "Owids is a set of widgets designed to improve website conversion rates and visitor engagement across platforms without requiring coding skills.",
		icon: "Owids.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "owids:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.owids\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "owids:jsGlobal:1",
				kind: "jsGlobal",
				property: "owidsSDKJSP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "owids:header:2",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("^X-Owids-Key$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "owids:header:3",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("^x-owids-key$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
				"poa",
			],
		},
	},
	{
		id: "owl-carousel",
		name: "OWL Carousel",
		website: "https://owlcarousel2.github.io/OwlCarousel2/",
		description: "OWL Carousel is an enabled jQuery plugin that lets you create responsive carousel sliders.",
		icon: "OWL Carousel.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "owl-carousel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("owl\\.carousel.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "owl-carousel:html:1",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^\"]+owl\\.carousel(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "owl-carousel:dom:2",
				kind: "dom",
				selector: "link[href*='owl.carousel.css'], link[href*='owl.carousel.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "owncloud",
		name: "ownCloud",
		website: "https://owncloud.org",
		icon: "ownCloud.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "owncloud:html:0",
				kind: "html",
				pattern: new RegExp("<a href=\"https:\\/\\/owncloud\\.com\" target=\"_blank\">ownCloud Inc\\.<\\/a><br\\/>Your Cloud, Your Data, Your Way!"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "owncloud:meta:1",
				kind: "meta",
				key: "apple-itunes-app",
				valuePattern: new RegExp("app-id=543672169", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "owncloud:jsGlobal:2",
				kind: "jsGlobal",
				property: "oc_defaults",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "owncloud:html:3",
				kind: "html",
				pattern: new RegExp("<a href=\"https:\\/\\/owncloud\\.com\" target=\"_blank\">owncloud inc\\.<\\/a><br\\/>your cloud, your data, your way!"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:owncloud:owncloud:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "p5-js",
		name: "p5.js",
		website: "https://p5js.org",
		description: "p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else.",
		icon: "p5.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "p5-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:addons\\/)?)?p5(?:\\.sound)?(?:\\.dom)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "p5-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "p5.Camera",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "p5-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "p5.ColorConversion",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "packery",
		name: "Packery",
		website: "https://packery.metafizzy.co",
		description: "Packery is a JavaScript library and jQuery plugin that makes gapless and draggable layouts.",
		icon: "Packery.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "packery:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("packery(?:\\.pkgd)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "packery:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/packery-mode\\.pkgd\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		id: "page-js",
		name: "Page.js",
		website: "https://github.com/visionmedia/page.js",
		description: "Page.js is a micro client-side router designed to handle client-side routing within web applications.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "page-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "page.Route",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "pagelayer",
		name: "PageLayer",
		website: "https://wordpress.org/plugins/pagelayer",
		description: "Drag and drop page builder for Wordpress.",
		icon: "PageLayer.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "pagelayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pagelayer(?:-frontend)?(?:\\/js)?(?:\\/combined)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pagelayer:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/pagelayer/'], #pagelayer-frontend-css, #pagelayer-global-styles, .pagelayer-body, .pagelayer-header, .pagelayer-footer, .pagelayer-content",
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
		id: "pannellum",
		name: "Pannellum",
		website: "https://pannellum.org/",
		description: "Pannellum is a lightweight, free, and open source panorama viewer for the web.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pannellum:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:build\\/)?)?pannellum(?:-plugin)?\\.js"),
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
	},
	{
		id: "papa-parse",
		name: "Papa Parse",
		website: "https://www.papaparse.com",
		description: "Papa Parse is a JavaScript library that functions as an in-browser CSV parser, enabling parsing of CSV files within web applications.",
		icon: "PapaParse.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "papa-parse:jsGlobal:0",
				kind: "jsGlobal",
				property: "Papa.Parser",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "papa-parse:jsGlobal:1",
				kind: "jsGlobal",
				property: "Papa.parse",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:papaparse:papaparse:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "paraglide-js",
		name: "Paraglide JS",
		website: "https://inlang.com/m/gerre34r/library-inlang-paraglideJs",
		description: "Paraglide JS is a compiler-based i18n library that emits tree-shakable message functions for optimized localization workflows.",
		icon: "ParaglideJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "paraglide-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "__paraglide",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "parallax-js",
		name: "parallax.js",
		website: "https://github.com/pixelcog/parallax.js",
		description: "Simple parallax scrolling effect.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "parallax-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("parallax(?:\\/assets\\/js)?(?:\\/jquery)?(?:\\/scripts)?(?:\\/wow)?(?:[_\\.]move)?(?:\\.inview)?(?:\\.pkgd)?(?:\\.scrolling)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "parallax-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?parallax(?:\\/assets\\/js)?(?:\\/jquery)?(?:\\/scripts)?(?:\\/wow)?(?:[_\\.]move)?(?:\\.inview)?(?:\\.pkgd)?(?:\\.scrolling)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "parallax-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "parallax",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "parallax-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "parallaxInstance",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "parcel",
		name: "parcel",
		website: "https://parceljs.org/",
		description: "Parcel is an open-source web application bundler known for its zero-config approach, simplifying the process of building and bundling web projects.",
		icon: "Parcel.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "parcel:jsGlobal:0",
				kind: "jsGlobal",
				property: "parcelRequire",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:parceljs:parcel:*:*:*:*:*:*:*:*",
		},
		implies: [
			"swc",
		],
	},
	{
		id: "parkingcrew",
		name: "ParkingCrew",
		website: "https://www.parkingcrew.com",
		description: "ParkingCrew is a direct navigation monetisation provider.",
		icon: "ParkingCrew.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "parkingcrew:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("var\\slink\\s=\\s'www\\.parkingcrew\\.net'"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "parkingcrew:jsGlobal:1",
				kind: "jsGlobal",
				property: "pcrewAdloaded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "parsley-js",
		name: "Parsley.js",
		website: "https://parsleyjs.org",
		description: "Javascript forms validation script.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "parsley-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("parsley(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "parsley-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "parsley",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "patreon",
		name: "Patreon",
		website: "https://www.patreon.com",
		description: "Patreon is an American membership platform that provides business tools for content creators to run a subscription service.",
		icon: "Patreon.svg",
		categories: [
			"widgets-misc",
			"commerce-operations",
		],
		rules: [
			{
				id: "patreon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("patreon-connect\\/assets\\/.+ver=([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "patreon:dom:1",
				kind: "dom",
				selector: "a[href*='www.patreon.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "paykickstart",
		name: "PayKickStart",
		website: "https://paykickstart.com",
		description: "PayKickstart is an online shopping cart and affiliate management platform with built-in conversion enhancing features like one-click upsells for credit card/paypal, order bumps, custom checkout pages/widgets/embed forms, coupon management, auto-complete shipping fields, subscription saver sequences, and more.",
		icon: "PayKickStart.png",
		categories: [
			"widgets-misc",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "paykickstart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.paykickstart\\.com"),
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
		id: "pdf-js",
		name: "PDF.js",
		website: "https://mozilla.github.io/pdf.js/",
		icon: "PDF.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pdf-js:html:0",
				kind: "html",
				pattern: new RegExp("<\\/div>\\s*<!-- outerContainer -->\\s*<div\\s*id=\"printContainer\"><\\/div>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "pdf-js:url:1",
				kind: "url",
				pattern: new RegExp("\\/web\\/viewer\\.html?file=[^&]\\.pdf"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pdf-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "PDFJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pdf-js:jsGlobal:3",
				kind: "jsGlobal",
				property: "PDFJS.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pdf-js:jsGlobal:4",
				kind: "jsGlobal",
				property: "_pdfjsCompatibilityChecked",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pdf-js:jsGlobal:5",
				kind: "jsGlobal",
				property: "pdfjsDistBuildPdf.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pdf-js:jsGlobal:6",
				kind: "jsGlobal",
				property: "pdfjsLib.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pdf-js:dom:7",
				kind: "dom",
				selector: "div[id*='printContainer']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pdf-js:html:8",
				kind: "html",
				pattern: new RegExp("<\\/div>\\s*<!-- outercontainer -->\\s*<div\\s*id=\"printcontainer\"><\\/div>"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "pdfmake",
		name: "pdfmake",
		website: "https://bpampuch.github.io/pdfmake",
		description: "Client/server side PDF printing in pure JavaScript.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pdfmake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pdfmake(?:[\\/-]((?:\\d+\\.)+\\d+)\\/(?:build\\/)?)?(?:pdfmake)?(?:vfs_fonts)?(?:\\.min)?\\.js"),
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
	},
	{
		id: "peek",
		name: "Peek",
		website: "https://www.peek.com/",
		description: "Peek is an online booking system for tour and activity providers.",
		icon: "Peek.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "peek:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.peek\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "peek:jsGlobal:1",
				kind: "jsGlobal",
				property: "Peek",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "peek:jsGlobal:2",
				kind: "jsGlobal",
				property: "PeekJsApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "peek:jsGlobal:3",
				kind: "jsGlobal",
				property: "_peekConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "peerjs",
		name: "PeerJS",
		website: "https://peerjs.com",
		description: "PeerJS is a JavaScript library that enables WebRTC-based peer-to-peer data, video, and audio connections.",
		icon: "PeerJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "peerjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "Peer.DEFAULT_KEY",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "peerpal",
		name: "PeerPal",
		website: "https://gravyty.com/peerpal",
		description: "PeerPal is a platform that enhances the admission experience by connecting prospective families with students, alumni, faculty, and parent ambassadors.",
		icon: "PeerPal.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "peerpal:jsGlobal:0",
				kind: "jsGlobal",
				property: "initPeerPal",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "peity",
		name: "Peity",
		website: "https://benpickles.github.io/peity/",
		description: "Peity is a jQuery plugin that converts an element's content into a simple mini svg pie, line or bar chart.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "peity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:jquery\\.)?peity(?:-demo)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "peity:jsGlobal:1",
				kind: "jsGlobal",
				property: "peity",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "peity:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.peity\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "permutive",
		name: "Permutive",
		website: "https://permutive.com",
		description: "Permutive is a publisher-focused data management platform.",
		icon: "Permutive.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "permutive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.permutive\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "permutive:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.permutive\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "permutive:jsGlobal:2",
				kind: "jsGlobal",
				property: "permutive",
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
		id: "pickadate-js",
		name: "pickadate.js",
		website: "https://amsul.ca/pickadate.js/",
		description: "Mobile-friendly, responsive, and lightweight jQuery date & time input picker.",
		icon: "pickadate.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pickadate-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pickadate(?:\\/translations)?(?:\\/de_DE)?(?:\\/picker)?(?:\\.date)?(?:\\.time)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pickadate-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "pickadate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pickadate-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("pickadate(?:\\/translations)?(?:\\/de_de)?(?:\\/picker)?(?:\\.date)?(?:\\.time)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "pikaday",
		name: "Pikaday",
		website: "https://github.com/dbushell/Pikaday",
		description: "A refreshing JavaScript Datepicker.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pikaday:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pikaday(?:-jquery)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "pinboard",
		name: "Pinboard",
		website: "https://pinboard.in",
		description: "Pinboard is a widget that displays bookmarks directly on a website for easy access and organization.",
		icon: "Pinboard.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pinboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("feeds\\.pinboard\\.in"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pinboard:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pinboard_Linkroll",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pinboard:jsGlobal:2",
				kind: "jsGlobal",
				property: "pinboardNS_callback",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pinterest",
		name: "Pinterest",
		website: "https://pinterest.com",
		description: "Pinterest is an image sharing and social media service designed to enable saving and discovery of information.",
		icon: "Pinterest.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pinterest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/assets\\.pinterest\\.com\\/js\\/pinit\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "pixc",
		name: "Pixc",
		website: "https://pixc.com",
		description: "Pixc is human powered image editing platform.",
		icon: "Pixc.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pixc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/pixc\\.com\\/"),
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
		id: "plum-popup",
		name: "Plum Popup",
		website: "https://plumpopup.com",
		description: "Plum Popup is a tool for creating customizable popups designed to help increase sales by engaging visitors and promoting offers.",
		icon: "Plum.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "plum-popup:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.plumpopup\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "plum-popup:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^plumPopupWixPerDayNew$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "plum-popup:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^plumPopupWixStartDatePerDay$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "plum-popup:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^plumpopupwixperdaynew$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "plum-popup:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^plumpopupwixstartdateperday$", "i"),
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
		id: "plupload",
		name: "Plupload",
		website: "https://plupload.com",
		description: "Plupload is a JavaScript API for dealing with file uploads.",
		icon: "Plupload.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "plupload:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plupload(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plupload:jsGlobal:1",
				kind: "jsGlobal",
				property: "plupload.DONE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "plupload:jsGlobal:2",
				kind: "jsGlobal",
				property: "plupload.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:plupload:plupload:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "po-st",
		name: "Po.st",
		website: "https://www.po.st/",
		icon: "Po.st.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "po-st:jsGlobal:0",
				kind: "jsGlobal",
				property: "pwidget_config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "pocket",
		name: "Pocket",
		website: "https://getpocket.com",
		description: "Pocket is a social bookmarking service that can be integrated into a website with the use of a web widget.",
		icon: "pocket.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.getpocket\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pocket:dom:1",
				kind: "dom",
				selector: "iframe[src*='widgets.getpocket.com/']",
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
		id: "podigee",
		name: "Podigee",
		website: "https://www.podigee.com",
		description: "Podigee is an independent company for podcast publishers. Podigee offers hosting, distribution, analytics and monetisation of podcasts.",
		icon: "Podigee.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "podigee:dom:0",
				kind: "dom",
				selector: "iframe[src*='cdn.podigee.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "podigee:jsGlobal:1",
				kind: "jsGlobal",
				property: "podigeePodcastPlayers",
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
		id: "podium",
		name: "Podium",
		website: "https://www.podium.com",
		description: "Podium is a customer communication platform for businesses who interact with customers on a local level.",
		icon: "Podium.png",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "podium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.podium\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "podium:jsGlobal:1",
				kind: "jsGlobal",
				property: "PodiumWebChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "podium:jsGlobal:2",
				kind: "jsGlobal",
				property: "podiumWebsiteWidgetLoaded",
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
		id: "polyfill",
		name: "Polyfill",
		website: "https://polyfill.io",
		description: "Polyfill is a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser.",
		icon: "polyfill.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "polyfill:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("polyfill\\.io\\/v([\\d\\.]+)"),
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
	},
	{
		id: "poper",
		name: "Poper",
		website: "https://www.poper.ai",
		description: "Poper is an AI-powered onsite engagement platform designed to enhance user interactions, increase retention, and improve conversion rates.",
		icon: "Poper.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "poper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.poper\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "poper:jsGlobal:1",
				kind: "jsGlobal",
				property: "POPER_EXECUTED_STATE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "poper:jsGlobal:2",
				kind: "jsGlobal",
				property: "POPER_INSTANCES",
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
		id: "popmotion",
		name: "Popmotion",
		website: "https://popmotion.io",
		description: "Popmotion is a collection of low-level JavaScript animation functions and utils for advanced animators.",
		icon: "Popmotion.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "popmotion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("popmotion\\.global\\.min\\.js(?:\\?ver=\\d+\\.\\d+)?"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popmotion:jsGlobal:1",
				kind: "jsGlobal",
				property: "popmotion",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "popper",
		name: "Popper",
		website: "https://popper.js.org",
		description: "Popper is a positioning engine, its purpose is to calculate the position of an element to make it possible to position it near a given reference element.",
		icon: "Popper.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "popper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/popper(?:\\.min)?\\.js(?:\\/([0-9.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popper:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("popperjs(?:\\/|-)core(?:@|-)([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popper:jsGlobal:2",
				kind: "jsGlobal",
				property: "Popper.Defaults",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "popper:jsGlobal:3",
				kind: "jsGlobal",
				property: "Popper.applyStyles",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "popper:jsGlobal:4",
				kind: "jsGlobal",
				property: "createPopper",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "popupular",
		name: "Popupular",
		website: "https://popupular.io",
		description: "Popupular is a platform that allows easy embedding of Mailchimp forms, YouTube videos, Calendly calendars, etc. into fully controllable popups on your site, with no coding required.",
		icon: "Popupular.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "popupular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.popupular\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "popupular:jsGlobal:1",
				kind: "jsGlobal",
				property: "Popupular",
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
		id: "porch",
		name: "Porch",
		website: "https://porch.com",
		description: "Porch is a moving management system that simplifies moving, insurance, and home improvement processes.",
		icon: "Porch.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "porch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.porch\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "porch:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^PorchBITracking$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "porch:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^porchbitracking$", "i"),
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
		id: "powr",
		name: "POWR",
		website: "https://www.powr.io",
		description: "POWR is a cloud-based system of plugins that work on almost any website.",
		icon: "POWR.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "powr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.powr\\.io\\/powr\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "powr:jsGlobal:1",
				kind: "jsGlobal",
				property: "POWR_RECEIVERS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "powr:jsGlobal:2",
				kind: "jsGlobal",
				property: "loadPowr",
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
		id: "prefix-free",
		name: "Prefix-Free",
		website: "https://leaverou.github.io/prefixfree/",
		description: "Prefix-Free is a JavaScript library that automatically removes browser vendor prefixes from CSS properties, enabling developers to use standard CSS without worrying about cross-browser compatibility issues.",
		icon: "Prefix-Free.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "prefix-free:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prefixfree\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prefix-free:jsGlobal:1",
				kind: "jsGlobal",
				property: "PrefixFree",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "prettyphoto",
		name: "prettyPhoto",
		website: "https://github.com/scaron/prettyphoto",
		icon: "prettyPhoto.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "prettyphoto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.prettyPhoto\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prettyphoto:html:1",
				kind: "html",
				pattern: new RegExp("(?:<link [^>]*href=\"[^\"]*prettyPhoto(?:\\.min)?\\.css|<a [^>]*rel=\"prettyPhoto)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "prettyphoto:jsGlobal:2",
				kind: "jsGlobal",
				property: "pp_alreadyInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prettyphoto:jsGlobal:3",
				kind: "jsGlobal",
				property: "pp_descriptions",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prettyphoto:jsGlobal:4",
				kind: "jsGlobal",
				property: "pp_images",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prettyphoto:jsGlobal:5",
				kind: "jsGlobal",
				property: "pp_titles",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prettyphoto:dom:6",
				kind: "dom",
				selector: "link[href*='prettyPhoto.css'], link[href*='prettyPhoto.min.css'], a[rel='prettyPhoto']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "prettyphoto:scriptSrc:7",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.prettyphoto\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prettyphoto:html:8",
				kind: "html",
				pattern: new RegExp("(?:<link [^>]*href=\"[^\"]*prettyphoto(?:\\.min)?\\.css|<a [^>]*rel=\"prettyphoto)"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "priice",
		name: "Priice",
		website: "https://priice.net",
		description: "Priice is a widget that tracks and monitors product prices, providing up-to-date information for comparison and analysis.",
		icon: "Priice.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "priice:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.priice.net']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "prism",
		name: "Prism",
		website: "https://prismjs.com",
		description: "Prism is an extensible syntax highlighter.",
		icon: "Prism.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "prism:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prism\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "prism:jsGlobal:1",
				kind: "jsGlobal",
				property: "Prism",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prism:jsGlobal:2",
				kind: "jsGlobal",
				property: "apex.libVersions.prismJs",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "prism:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("prism(?:\\.min)?(?:-\\w{0,64})?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "product-hunt",
		name: "Product Hunt",
		website: "https://www.producthunt.com",
		description: "Product Hunt is a community-based website that allows makers and marketers to launch their products or services and get in touch with their first real users.",
		icon: "Product Hunt.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "product-hunt:dom:0",
				kind: "dom",
				selector: "a[href*='.producthunt.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "progress-moveit",
		name: "Progress MOVEit",
		website: "https://www.progress.com/moveit",
		description: "Progress MOVEit is a managed file transfer solution that enables secure and compliant transfer of sensitive files while providing automation, central management, and auditing capabilities.",
		icon: "Progress.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "progress-moveit:header:0",
				kind: "header",
				key: "X-Moveitisapi-Version",
				valuePattern: new RegExp("^(.+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "progress-moveit:meta:1",
				kind: "meta",
				key: "apple-itunes-app",
				valuePattern: new RegExp("app-id=1500056420", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "progress-moveit:meta:2",
				kind: "meta",
				key: "google-play-app",
				valuePattern: new RegExp("app-id=com\\.progress\\.moveit\\.transfer\\.dev\\.appid", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "progress-moveit:header:3",
				kind: "header",
				key: "x-moveitisapi-version",
				valuePattern: new RegExp("^(.+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "progress-ws-ftp",
		name: "Progress WS_FTP",
		website: "https://www.progress.com/ws_ftp",
		description: "Progress WS_FTP is a file transfer client software developed by Progress Software Corporation, supporting FTP, FTPS, SFTP, and HTTPS protocols with features like drag-and-drop support, file synchronization, and encrypted data transmission.",
		icon: "Progress.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "progress-ws-ftp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/ThinClient\\/(?:WTM|WebResource)(?:\\.axd|\\/public)"),
				confidence: 60,
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "progress-ws-ftp:dom:1",
				kind: "dom",
				selector: "form[name='formLogin'][action='login.aspx' i][id='formLogin']\\;confidence:40",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "progress-ws-ftp:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/thinclient\\/(?:wtm|webresource)(?:\\.axd|\\/public)"),
				confidence: 60,
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:progress:ws_ftp_server:*:*:*:*:*:*:*:*",
		},
		requires: [
			"microsoft-asp-net",
		],
	},
	{
		id: "progressbar-js",
		name: "ProgressBar.js",
		website: "https://kimmobrunfeldt.github.io/progressbar.js/",
		description: "Responsive progress bars with animated SVG paths.",
		icon: "ProgressBar.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "progressbar-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("progressbar(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "progressbar-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?progressbar(?:\\.min)?\\.js"),
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
	},
	{
		id: "proprofs-quiz-maker",
		name: "ProProfs Quiz Maker",
		website: "https://www.proprofs.com/quiz-school",
		description: "ProProfs Quiz Maker is a quiz-based widget builder that enables the creation of interactive quizzes for embedding on websites or digital platforms.",
		icon: "ProProfs.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "proprofs-quiz-maker:jsGlobal:0",
				kind: "jsGlobal",
				property: "GetSecureUrlProProfs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "proprofs-quiz-maker:jsGlobal:1",
				kind: "jsGlobal",
				property: "ProProfsSaveBotReport",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "proprofs-quiz-maker:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^pp_bot_kb_detail$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "provenexpert",
		name: "ProvenExpert",
		website: "https://www.provenexpert.com",
		description: "ProvenExpert is a review based marketing platform that allows users to create customer surveys, provides aggregate reviews and ratings.",
		icon: "ProvenExpert.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "provenexpert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("provenexpert\\.\\w+\\/widget"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "provenexpert:dom:1",
				kind: "dom",
				selector: "img[src*='provenexpert']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "proximis",
		name: "Proximis",
		website: "https://www.proximis.com",
		icon: "Proximis Omnichannel.png",
		categories: [
			"widgets-misc",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "proximis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget-commerce(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "pubsubjs",
		name: "PubSubJS",
		website: "https://github.com/mroderick/PubSubJS",
		description: "PubSubJS is a topic-based publish/subscribe library written in JavaScript.",
		icon: "pubsub-js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pubsubjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "PubSub",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubsubjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "PubSub.version",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "punycode",
		name: "punycode",
		website: "https://github.com/mathiasbynens/punycode.js",
		description: "A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "punycode:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("punycode(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.){1,2}\\d+))?"),
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
	},
	{
		id: "pushad",
		name: "PushAd",
		website: "https://push-ad.com/en/home-page",
		description: "PushAd is a notification system from Poland.",
		icon: "PushAd.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pushad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.push-ad\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushad:jsGlobal:1",
				kind: "jsGlobal",
				property: "PushAdReady",
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
		id: "pushly",
		name: "Pushly",
		website: "https://www.pushly.com",
		description: "Pushly is a web push notification platform that allows businesses to send real-time messages to their website visitors.",
		icon: "Pushly.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pushly:jsGlobal:0",
				kind: "jsGlobal",
				property: "PushlySDK",
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
		id: "puter-js",
		name: "Puter.js",
		website: "https://docs.puter.com",
		description: "Puter.js is a JavaScript library that provides serverless authentication, cloud services, and AI capabilities directly in the browser without requiring backend code or configuration.",
		icon: "PuterJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "puter-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "puter.APIOrigin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "puter-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "puter_gui_enabled",
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
		id: "pwa",
		name: "PWA",
		website: "https://web.dev/progressive-web-apps/",
		description: "Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.",
		icon: "PWA.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pwa:dom:0",
				kind: "dom",
				selector: "link[rel='manifest']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "pydata-sphinx-theme",
		name: "PyData Sphinx Theme",
		website: "https://pydata-sphinx-theme.readthedocs.io/",
		description: "PyData Sphinx Theme is a styling template for Sphinx documentation tailored to PyData projects.",
		icon: "PyData Sphinx Theme.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pydata-sphinx-theme:dom:0",
				kind: "dom",
				selector: "p.theme-version",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pydata-sphinx-theme:text:1",
				kind: "text",
				pattern: new RegExp("([\\d]+(?:\\.[\\d]+)*)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page text contains a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"sphinx",
		],
	},
	{
		id: "pygments",
		name: "Pygments",
		website: "https://pygments.org",
		icon: "pygments.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pygments:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+pygments\\.css[\"']"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "pygments:dom:1",
				kind: "dom",
				selector: "link[href*='pygments.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:pygments:pygments:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "pyscript",
		name: "PyScript",
		website: "https://pyscript.net",
		description: "PyScript is a python script that can be run in the browser using a mix of Python and standard HTML.",
		icon: "PyScript.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "pyscript:dom:0",
				kind: "dom",
				selector: "py-script",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pyscript:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_mkto_trk$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:pyscript:pyscript:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "q4-cookie-monster",
		name: "Q4 Cookie Monster",
		website: "https://q4mobile.github.io/q4widgets-jquery-ui/doc_html/q4.cookieMonster.html",
		description: "Q4 Cookie Monster is an cookie compliance widget built by Q4.",
		icon: "Q4.png",
		categories: [
			"widgets-misc",
			"privacy-compliance",
		],
		rules: [
			{
				id: "q4-cookie-monster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.q4app\\.com\\/widgets\\/q4\\.cookiemonster\\.([\\d\\.]+)\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "qiankun",
		name: "qiankun",
		website: "https://qiankun.umijs.org",
		description: "qiankun is a JS library who helps developers to build a micro frontends system.",
		icon: "qiankun.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "qiankun:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("__POWERED_BY_QIANKUN__"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "qiankun:dom:1",
				kind: "dom",
				selector: "div[id^='__qiankun_']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "qiankun:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("__powered_by_qiankun__"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "quicklink",
		name: "Quicklink",
		website: "https://getquick.link/",
		description: "Quicklink is a JS library which aims to be a drop-in solution for sites to prefetch links based on what is in the user's viewport.",
		icon: "Quicklink.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "quicklink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("quicklink@([\\d.]+)\\/dist\\/quicklink.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "quicklink:jsGlobal:1",
				kind: "jsGlobal",
				property: "drupalSettings.quicklink",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "quicklink:jsGlobal:2",
				kind: "jsGlobal",
				property: "quicklink",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ractive-js",
		name: "Ractive.js",
		website: "https://www.ractivejs.org",
		description: "Ractive.js is a template-driven UI library.",
		icon: "Ractive.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ractive-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ractive\\/ractive\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ramda",
		name: "Ramda",
		website: "https://ramdajs.com",
		description: "Ramda is a practical functional programming library for JavaScript that emphasizes immutability, currying, and function composition to facilitate writing more declarative and modular code.",
		icon: "Ramda.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ramda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ramda.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:ramdajs:ramda:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "rateparity",
		name: "RateParity",
		website: "https://www.rateparity.com",
		description: "RateParity is a conversion rate optimisation platform for hotels.",
		icon: "RateParity.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "rateparity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.rateparity\\.com\\/"),
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
		id: "readaloud",
		name: "ReadAloud",
		website: "https://www.readaloudwidget.com",
		description: "The SiteSpeaker text-to-speech widget is embedded into your posts and give users an alternate way to consume your content as audio.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "readaloud:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("assets\\.sitespeaker\\.link"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "readaloud:dom:1",
				kind: "dom",
				selector: "div#ra-player, div[data-skin*='assets\\.sitespeaker\\.link/embed/skins']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "readspeaker",
		name: "ReadSpeaker",
		website: "https://www.readspeaker.com",
		description: "ReadSpeaker is an intuitive text-to-speech API that converts text into natural-sounding audio files for websites and applications.",
		icon: "ReadSpeaker.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "readspeaker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.readspeaker\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "readspeaker:jsGlobal:1",
				kind: "jsGlobal",
				property: "ReadSpeaker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "readspeaker:jsGlobal:2",
				kind: "jsGlobal",
				property: "ReadSpeaker.meta.version",
				valuePattern: new RegExp("^([\\d\\.]+)_.+$"),
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
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "recurate",
		name: "Recurate",
		website: "https://www.recurate.com",
		description: "Recurate is a tech-enabled resale service that empowers brands & retailers to establish their own integrated resale platforms directly on their ecommerce sites.",
		icon: "Recurate.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "recurate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\"(?:vendor|title)?\"\\:\"Recurate\""),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "recurate:dom:1",
				kind: "dom",
				selector: "a[href*='support@recurate.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "recurate:dom:2",
				kind: "dom",
				selector: "link[href*='/recurate-site.css']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "recurate:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("\"(?:vendor|title)?\"\\:\"recurate\""),
				description: "Script content contains a bounded technology signature.",
			},
		],
		requires: [
			"shopify",
		],
	},
	{
		id: "regiondo",
		name: "Regiondo",
		website: "https://www.regiondo.com",
		description: "Regiondo is an online booking system for tour and activity providers.",
		icon: "Regiondo.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "regiondo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.regiondo\\.net"),
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
		id: "remixd",
		name: "Remixd",
		website: "https://www.remixd.com",
		description: "Remixd is a platform that enables podcast creators to efficiently produce and share their podcasts with a worldwide audience. The platform provides various tools and features to support podcast creation, hosting, and distribution, such as podcast hosting, analytics, monetisation, and social media integration.",
		icon: "remixd.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "remixd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.remixd\\.com\\/player"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "replyment",
		name: "Replyment",
		website: "https://replyment.com",
		description: "Engage with your customers effortlessly on their preferred messaging app using Replyment, including WhatsApp, Messenger, and more. We support 20+ apps and platforms for seamless engagement.",
		icon: "Replyment.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "replyment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.replyment\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "responsive-nav",
		name: "Responsive Nav",
		website: "http://responsive-nav.com/",
		description: "Responsive navigation plugin without library dependencies and with fast touch screen support.",
		icon: "Responsive Nav.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "responsive-nav:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("responsive-nav(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "responsivevoice",
		name: "ResponsiveVoice",
		website: "https://responsivevoice.org",
		description: "ResponsiveVoice is a Text-To-Speech API supported in 51 languages.",
		icon: "ResponsiveVoice.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "responsivevoice:jsGlobal:0",
				kind: "jsGlobal",
				property: "responsiveVoice.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "retina-js",
		name: "Retina.js",
		website: "https://imulus.github.io/retinajs",
		description: "Retina.js is an open-source script designed to facilitate the delivery of high-resolution images to devices with retina displays.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "retina-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/retina(\\.min)?\\.js\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 2,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "retina-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "RetinaImage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "retina-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "retinajs",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "rezdy",
		name: "Rezdy",
		website: "https://www.rezdy.com",
		description: "Rezdy is an online booking software for tours and attractions.",
		icon: "Rezdy.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "rezdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rezdy\\.\\w+\\/pluginJs"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rezdy:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("rezdy\\.\\w+\\/pluginjs"),
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
		id: "rezgo",
		name: "Rezgo",
		website: "https://www.rezgo.com",
		description: "Rezgo is a tour operator software that provides online booking system.",
		icon: "Rezgo.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "rezgo:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rezgo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rezgo:dom:3",
				kind: "dom",
				selector: "iframe[id*='rezgo_content_frame']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rezgo:dom:4",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/rezgo/rezgo/templates']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rezgo:dom:5",
				kind: "dom",
				selector: "iframe[id*='rezgo_content_frame'], link[href*='wp-content/plugins/rezgo/rezgo/templates']",
				description: "DOM selector matches a known technology marker.",
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
		id: "robixcm-generator",
		name: "RobixCM Generator",
		website: "https://robixcm.ir",
		description: "RobixCM Generator is a service specializing in designing, developing, updating, and managing websites and online services.",
		icon: "Robixcm.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "robixcm-generator:meta:0",
				kind: "meta",
				key: "robixcm",
				valuePattern: new RegExp("RobixCM", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "robixcm-generator:meta:1",
				kind: "meta",
				key: "robixcm",
				valuePattern: new RegExp("robixcm", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rspack",
		name: "Rspack",
		website: "https://www.rspack.dev",
		description: "Rspack is a JavaScript bundler written in Rust, offering faster build times and compatibility with the Webpack ecosystem​.",
		icon: "Rspack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			oss: true,
		},
		implies: [
			"rust",
		],
	},
	{
		id: "rss",
		name: "RSS",
		website: "https://www.rssboard.org/rss-specification",
		description: "RSS is a family of web feed formats used to publish frequently updated works—such as blog entries, news headlines, audio, and video—in a standardized format.",
		icon: "RSS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "rss:dom:0",
				kind: "dom",
				selector: "link[type*='application']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rss:dom:1",
				kind: "dom",
				selector: "rss",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "ruby-receptionists",
		name: "Ruby Receptionists",
		website: "https://www.ruby.com",
		description: "Ruby Receptionists is a Portland, Oregon based virtual answering service for small businesses.",
		icon: "Ruby Receptionists.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ruby-receptionists:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chatwidget\\.ruby\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ruby-receptionists:jsGlobal:1",
				kind: "jsGlobal",
				property: "rubyApi",
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
		id: "salesfloor",
		name: "Salesfloor",
		website: "https://salesfloor.net",
		description: "Salesfloor is a mobile clienteling and virtual selling platform designed for store associates to connect with customers-beyond the store and a mpos platform for frictionless in-store experiences.",
		icon: "salesfloor.png",
		categories: [
			"widgets-misc",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "salesfloor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salesfloor\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesfloor:dom:1",
				kind: "dom",
				selector: "iframe[src*='.salesfloor.net'], div[data-siterefer='salesfloor']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "salesfloor:jsGlobal:2",
				kind: "jsGlobal",
				property: "NMConfig.SALESFLOOR_ENV",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "salesfloor:jsGlobal:3",
				kind: "jsGlobal",
				property: "salesFloorHost",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"recurring",
			],
		},
	},
	{
		id: "sassy-social-share",
		name: "Sassy Social Share",
		website: "https://wordpress.org/plugins/sassy-social-share",
		description: "Sassy Social Share allows your website visitors to share your content over Facebook, Twitter, Google, Linkedin, Whatsapp, Tumblr, Pinterest, Reddit, Gab, Gettr and over 110 more social sharing and bookmarking services.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "sassy-social-share:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sassy-social-share(?:-public)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sassy-social-share:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/sassy-social-share/']",
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
		id: "screenfull-js",
		name: "Screenfull.js",
		website: "https://sindresorhus.com/screenfull/",
		description: "Simple wrapper for cross-browser usage of the JavaScript Fullscreen API.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "screenfull-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("screenfull(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "screenfull-js:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?screenfull(?:\\.min)?\\.js"),
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
	},
	{
		id: "script-aculo-us",
		name: "script.aculo.us",
		website: "https://script.aculo.us",
		icon: "script.aculo.us.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "script-aculo-us:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(?:scriptaculous|protoaculous)(?:\\.js|\\/)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "script-aculo-us:jsGlobal:1",
				kind: "jsGlobal",
				property: "Scriptaculous.Version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:script.aculo.us:script.aculo.us:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "scrollmagic",
		name: "ScrollMagic",
		website: "https://scrollmagic.io",
		description: "ScrollMagic is a jQuery plugin which essentially lets you use the scrollbar like a playback scrub control.",
		icon: "ScrollMagic.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "scrollmagic:jsGlobal:0",
				kind: "jsGlobal",
				property: "ScrollMagic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "scrollmagic:jsGlobal:1",
				kind: "jsGlobal",
				property: "ScrollMagic.version",
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
		},
		implies: [
			"gsap",
			"jquery",
		],
	},
	{
		id: "scrollreveal",
		name: "scrollreveal",
		website: "https://scrollrevealjs.org",
		description: "Reveal elements as they enter the viewport.",
		icon: "scrollreveal.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "scrollreveal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scrollreveal(?:\\.min)(?:\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "scrollreveal:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]+data-sr(?:-id)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "scrollreveal:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("scrollreveal(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "scrollreveal:jsGlobal:3",
				kind: "jsGlobal",
				property: "ScrollReveal",
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
		id: "select2",
		name: "Select2",
		website: "https://select2.org/",
		description: "Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.",
		icon: "Select2.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "select2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("select2(?:\\.min|\\.full)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "select2:jsGlobal:1",
				kind: "jsGlobal",
				property: "jQuery.fn.select2",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:select2:select2:*:*:*:*:*:*:*:*",
		},
		implies: [
			"jquery",
		],
	},
	{
		id: "selectize",
		name: "Selectize",
		website: "https://selectize.dev",
		description: "Selectize is an extensible jQuery-based custom <select> UI control.",
		icon: "Selectize.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "selectize:jsGlobal:0",
				kind: "jsGlobal",
				property: "Selectize",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "selectize:jsGlobal:1",
				kind: "jsGlobal",
				property: "selectize",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"jquery",
		],
	},
	{
		id: "sentara",
		name: "Sentara",
		website: "https://www.sentara.com",
		description: "Sentara is a nonprofit healthcare system focused on improving health through integrated care delivery.",
		icon: "Sentara.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sentara:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.sentara\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "servicenow",
		name: "ServiceNow",
		website: "https://www.servicenow.com",
		description: "ServiceNow is a cloud computing platform to help companies manage digital workflows for enterprise operations.",
		icon: "ServiceNow.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "servicenow:dom:0",
				kind: "dom",
				selector: "a[href*='.service-now.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "servicenow:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.service-now\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "servicenow:jsGlobal:2",
				kind: "jsGlobal",
				property: "s_giq",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"high",
				"poa",
			],
			cpe: "cpe:2.3:a:servicenow:servicenow:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "setmore",
		name: "Setmore",
		website: "https://www.setmore.com",
		description: "Setmore is a cloud-based appointment scheduling solution.",
		icon: "Setmore.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "setmore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.setmore\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "setmore:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/setmore-appointments\\/script\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "setmore:jsGlobal:2",
				kind: "jsGlobal",
				property: "setmorePopup",
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
		id: "sevenrooms",
		name: "SevenRooms",
		website: "https://sevenrooms.com",
		description: "SevenRooms is an fully-integrated reservation, seating and restaurant management system.",
		icon: "SevenRooms.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "sevenrooms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sevenrooms\\.\\w+\\/widget\\/embed\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sevenrooms:dom:1",
				kind: "dom",
				selector: "iframe[src*='sevenrooms']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sevenrooms:jsGlobal:2",
				kind: "jsGlobal",
				property: "SevenroomsWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "shareaholic",
		name: "Shareaholic",
		website: "https://www.shareaholic.com/",
		description: "Shareaholic is a all-in-one content amplification and monetisation platform.",
		icon: "shareaholic.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "shareaholic:jsGlobal:0",
				kind: "jsGlobal",
				property: "Shareaholic",
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
	},
	{
		id: "sharethis",
		name: "ShareThis",
		website: "https://sharethis.com",
		description: "ShareThis provides free engagement and growth tools (e.g., share buttons, follow buttons, and reaction buttons) for site owners.",
		icon: "ShareThis.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sharethis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sharethis\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sharethis:jsGlobal:1",
				kind: "jsGlobal",
				property: "SHARETHIS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sharethis:jsGlobal:2",
				kind: "jsGlobal",
				property: "__sharethis__docReady",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:sharethis:sharethis:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "sharper-mms",
		name: "Sharper MMS",
		website: "https://sharpermms.com",
		description: "Sharper MMS is a provider of marina management services, focusing on operations and maintenance for marina facilities.",
		icon: "SharperMMS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sharper-mms:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sharpermms\\.com"),
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
		id: "sheerid",
		name: "SheerID",
		website: "https://www.sheerid.com/",
		description: "SheerID is a highly specialised solution offering online verification support for retailers, marketers and service providers.",
		icon: "SheerID.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sheerid:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\"sheerIdEndpoint\":"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "sheerid:dom:1",
				kind: "dom",
				selector: "a[href*='.sheerid.com/'], img[src*='.sheerid.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "sheerid:jsGlobal:2",
				kind: "jsGlobal",
				property: "SheerID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sheerid:jsGlobal:3",
				kind: "jsGlobal",
				property: "sheerid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sheerid:header:4",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.sheerid\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sheerid:header:5",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.sheerid\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "sheerid:scriptContent:6",
				kind: "scriptContent",
				pattern: new RegExp("\"sheeridendpoint\":"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "shepherd",
		name: "Shepherd",
		website: "https://shepherdjs.dev/",
		description: "Shepherd is a JavaScript library which makes an use-friendly user-guide to any website.",
		icon: "Shepherd.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "shepherd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("shepherd(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "shoppingfeeder",
		name: "ShoppingFeeder",
		website: "https://sfdr.co",
		description: "ShoppingFeeder is a feed management solution for online retailers.",
		icon: "ShoppingFeeder.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "shoppingfeeder:jsGlobal:0",
				kind: "jsGlobal",
				property: "sfdrOrderData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shoppingfeeder:jsGlobal:1",
				kind: "jsGlobal",
				property: "sfdrUniqid",
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
		requires: [
			"magento",
			"opencart",
			"prestashop",
			"shopify",
			"woocommerce",
		],
	},
	{
		id: "shoppinggives",
		name: "ShoppingGives",
		website: "https://shoppinggives.com",
		description: "ShoppingGives is a B2B social ecommerce platform that allows companies of all sizes to make charitable donations through their customers' purchases.",
		icon: "ShoppingGives.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "shoppinggives:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shoppinggives\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shoppinggives:jsGlobal:1",
				kind: "jsGlobal",
				property: "sgObservables.getCharities",
				description: "Page-owned global matches a known technology marker.",
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
		id: "showdown",
		name: "Showdown",
		website: "https://showdownjs.com/",
		description: "A Markdown to HTML converter written in Javascript.",
		icon: "Showdown.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "showdown:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:dist\\/)?)?showdown(?:\\.min)?(?:-?((?:\\d+\\.)+\\d+))?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "showdown:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dist\\/)?)?showdown(?:\\.min)?(?:-)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "showdown:jsGlobal:2",
				kind: "jsGlobal",
				property: "showdown",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "sidr",
		name: "sidr",
		website: "https://www.albertovarela.net/sidr/",
		description: "Sidr is a jQuery plugin for creating side menus.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sidr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sidr(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "sigma-js",
		name: "Sigma.js",
		website: "https://www.sigmajs.org",
		description: "Sigma.js is a JavaScript library designed for visualizing large-scale graphs with thousands of nodes and edges.",
		icon: "SigmaJs.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sigma-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/(static\\/js\\/|)sigma\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sigma-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "sigma.canvas",
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
		id: "signalr",
		name: "SignalR",
		website: "https://dotnet.microsoft.com/es-es/apps/aspnet/signalr",
		description: "Realtime web communication framework from Microsoft for ASP.NET.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "signalr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:jquery\\.)?signal[rR](?:-((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signalr:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/jquery\\.)?signal[rR](?:-)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signalr:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/jquery\\.)?signal[rr](?:-)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signalr:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("(?:jquery\\.)?signal[rr](?:-((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "simplexnoise-js",
		name: "SimplexNoise.js",
		website: "https://github.com/jwagner/simplex-noise.js",
		description: "SimplexNoise.js is a library that generates pseudorandom noise functions, designed for use in video games, graphical applications, and demoscene production.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "simplexnoise-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/simplex-noise\\/([\\d\\.]+)\\/simplex-noise.min.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simplexnoise-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "SimplexNoise",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "sirv",
		name: "Sirv",
		website: "https://sirv.com",
		description: "Sirv is a solution for serving images, offering easy management, manipulation, and delivery.",
		icon: "Sirv.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sirv:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("scripts\\.sirv\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "siteminder",
		name: "SiteMinder",
		website: "https://www.siteminder.com",
		description: "SiteMinder is an appointment booking solution designed for hotels.",
		icon: "SiteMinder.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
		],
		rules: [
			{
				id: "siteminder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.siteminder\\.com"),
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
		id: "skitter",
		name: "Skitter",
		website: "https://skitter-slider.net",
		description: "Skitter is a jQuery-based slider system.",
		icon: "Skitter.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "skitter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jquery\\.skitter\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "skrollr",
		name: "Skrollr",
		website: "https://prinzhorn.github.io/skrollr/",
		description: "Skrollr is a JavaScript library supporting parallax scrolling on mobile and desktop platforms in a compact 12k minified size.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "skrollr:jsGlobal:0",
				kind: "jsGlobal",
				property: "skrollr.VERSION",
				valuePattern: new RegExp("^(.+)$"),
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
		id: "slick",
		name: "Slick",
		website: "https://kenwheeler.github.io/slick",
		icon: "Slick.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d.]+))?\\/slick(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slick:html:1",
				kind: "html",
				pattern: new RegExp("<link [^>]+(?:\\/([\\d.]+)\\/)?slick-theme\\.css"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "slick:dom:2",
				kind: "dom",
				selector: "link[href*='slick-theme.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "slidebean",
		name: "Slidebean",
		website: "https://slidebean.com",
		description: "Slidebean is an all-in-one pitch deck software designed to streamline the creation, design, and presentation of business pitches.",
		icon: "Slidebean.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slidebean:dom:0",
				kind: "dom",
				selector: "iframe[src*='.slidebean.com/']",
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
		id: "slideout",
		name: "slideout",
		website: "https://slideout.js.org/",
		description: "A touch slideout navigation menu for your mobile web apps.",
		icon: "slideout.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slideout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("slideout(?:-init)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slideout:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?slideout(?:-init)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slideout:jsGlobal:2",
				kind: "jsGlobal",
				property: "slideout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "slider-revolution",
		name: "Slider Revolution",
		website: "https://www.sliderrevolution.com",
		description: "Slider Revolution is a flexible and highly customisable slider.",
		icon: "Slider Revolution.svg",
		categories: [
			"widgets-misc",
			"content-publishing",
		],
		rules: [
			{
				id: "slider-revolution:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/revslider\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:1",
				kind: "jsGlobal",
				property: "RS_MODULES.main.version",
				valuePattern: new RegExp("^Slider Revolution\\s([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:2",
				kind: "jsGlobal",
				property: "revapi1",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:3",
				kind: "jsGlobal",
				property: "revapi2",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:4",
				kind: "jsGlobal",
				property: "revapi3",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:5",
				kind: "jsGlobal",
				property: "revapi4",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:6",
				kind: "jsGlobal",
				property: "revapi5",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:7",
				kind: "jsGlobal",
				property: "revslider_showDoubleJqueryError",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:meta:8",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Powered\\sby\\sSlider Revolution\\s([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "slider-revolution:scriptSrc:9",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.themepunch\\.revolution\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slider-revolution:jsGlobal:10",
				kind: "jsGlobal",
				property: "SR7.version",
				valuePattern: new RegExp("^Slider Revolution\\s([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slider-revolution:meta:11",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("powered\\sby\\sslider revolution\\s([\\d\\.]+)", "i"),
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
				"low",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "slim-select",
		name: "Slim Select",
		website: "https://slimselectjs.com",
		description: "Slim Select is a JavaScript library designed to enable the creation of select dropdowns with enhanced functionality and features.",
		icon: "SlimSelect.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slim-select:dom:0",
				kind: "dom",
				selector: "div.ss-values, div.ss-deselect.ss-hide",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "slimbox",
		name: "Slimbox",
		website: "https://www.digitalia.be/software/slimbox",
		icon: "Slimbox.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slimbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("slimbox\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slimbox:html:1",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^/]*slimbox(?:-rtl)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "slimbox:dom:2",
				kind: "dom",
				selector: "link[href*='slimbox.css'],link[href*='slimbox-rtl.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"mootools",
		],
	},
	{
		id: "slimbox-2",
		name: "Slimbox 2",
		website: "https://www.digitalia.be/software/slimbox2",
		icon: "Slimbox 2.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "slimbox-2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("slimbox2\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slimbox-2:html:1",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"[^/]*slimbox2(?:-rtl)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "slimbox-2:dom:2",
				kind: "dom",
				selector: "link[href*='slimbox2.css'], link[href*='slimbox2-rtl.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "snabbt",
		name: "Snabbt",
		website: "https://daniel-lundin.github.io/snabbt.js/",
		description: "Minimalistic animation library in javascript Snabbt.js.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "snabbt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?snabbt(?:[\\.-]min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snabbt:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("snabbt(?:[\\.-]min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "snap-svg",
		name: "Snap.svg",
		website: "https://snapsvg.io",
		icon: "Snap.svg.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "snap-svg:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snap\\.svg(?:-min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snap-svg:jsGlobal:1",
				kind: "jsGlobal",
				property: "Snap.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "snapwidget",
		name: "SnapWidget",
		website: "https://snapwidget.com",
		description: "SnapWidget is a set of interactive Instagram, Twitter and 500px widgets.",
		icon: "SnapWidget.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "snapwidget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snapwidget\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snapwidget:dom:1",
				kind: "dom",
				selector: "iframe[src*='snapwidget.com/']",
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
		id: "sobi-2",
		name: "SOBI 2",
		website: "https://www.sigsiu.net/sobi2.html",
		description: "SOBI2 is an older version of the SOBI (Simple Open Business Index) directory extension for Joomla. It was used for creating and managing directory listings on Joomla-powered websites, allowing users to list businesses, services, or other types of entries.",
		icon: "SOBI 2.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sobi-2:html:0",
				kind: "html",
				pattern: new RegExp("(?:<!-- start of Sigsiu Online Business Index|<div[^>]* class=\"sobi2)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sobi-2:jsGlobal:1",
				kind: "jsGlobal",
				property: "sobi2Cats",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sobi-2:html:2",
				kind: "html",
				pattern: new RegExp("(?:<!-- start of sigsiu online business index|<div[^>]* class=\"sobi2)"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"joomla",
		],
	},
	{
		id: "sobipro",
		name: "SobiPro",
		website: "https://sigsiu.net/sobipro.html",
		description: "SobiPro is a directory and listing management extension for Joomla, used to create and manage directories, business listings, and other types of structured content on websites.",
		icon: "SobiPro.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sobipro:jsGlobal:0",
				kind: "jsGlobal",
				property: "SobiProUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"joomla",
		],
	},
	{
		id: "social9",
		name: "Social9",
		website: "https://social9.com",
		description: "Social9 is a social sharing widgets and plugins.",
		icon: "Social9.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "social9:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("social9\\.com\\/.+\\.js(?:\\?ver=([\\d.]+))?"),
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
				"freemium",
				"poa",
			],
		},
	},
	{
		id: "sockjs",
		name: "SockJS",
		website: "https://github.com/sockjs/sockjs-client",
		description: "SockJS is a browser-based JavaScript library that offers a WebSocket-like communication interface for applications.",
		icon: "SockJS.png",
		categories: [
			"widgets-misc",
			"framework",
		],
		rules: [
			{
				id: "sockjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sockjs(?:-((?:\\d+\\.)+\\d+))?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sockjs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?sockjs(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sockjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "SockJS.CLOSED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sockjs:jsGlobal:3",
				kind: "jsGlobal",
				property: "SockJS.version",
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
		id: "sorry",
		name: "Sorry",
		website: "https://www.sorryapp.com",
		description: "Sorry is a status page service that displays system downtime and operational incidents.",
		icon: "Sorry.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sorry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sorryapp\\.com\\/"),
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
		id: "soundcloud",
		name: "SoundCloud",
		website: "https://developers.soundcloud.com/docs/api/html5-widget",
		description: "SoundCloud widget gives you the ability to upload, manage and share tracks.",
		icon: "SoundCloud.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "soundcloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sndcdn\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "soundcloud:dom:1",
				kind: "dom",
				selector: "iframe[src*='.soundcloud.com/'], img[src*='.sndcdn.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "soundcloud:jsGlobal:2",
				kind: "jsGlobal",
				property: "SC.Widget.Events.PLAY",
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
		id: "soundmanager",
		name: "SoundManager",
		website: "https://www.schillmania.com/projects/soundmanager2",
		icon: "SoundManager.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "soundmanager:jsGlobal:0",
				kind: "jsGlobal",
				property: "BaconPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "soundmanager:jsGlobal:1",
				kind: "jsGlobal",
				property: "SoundManager",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "soundmanager:jsGlobal:2",
				kind: "jsGlobal",
				property: "soundManager.version",
				valuePattern: new RegExp("V(.+) "),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "spdy",
		name: "SPDY",
		website: "https://chromium.org/spdy",
		icon: "SPDY.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spdy:header:0",
				kind: "header",
				key: "X-Firefox-Spdy",
				valuePattern: new RegExp("\\d\\.\\d", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "spdy:header:1",
				kind: "header",
				key: "x-firefox-spdy",
				valuePattern: new RegExp("\\d\\.\\d", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		excludes: [
			"http-2",
		],
	},
	{
		id: "spin-js",
		name: "Spin.js",
		website: "https://spin.js.org",
		description: "Spin.js is a configurable JavaScript/CSS spinner serving as a resolution-independent loading indicator.",
		icon: "SpinJS.svg",
		categories: [
			"widgets-misc",
			"graphics-visualization",
		],
		rules: [
			{
				id: "spin-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/spin\\.js\\/([\\d\\.]+)\\/spin\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spin-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Spinner",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spin-js:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("spin(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "spine-js",
		name: "Spine.js",
		website: "https://spine.github.io",
		description: "Spine is a lightweight MVC library for building JavaScript web applications.",
		icon: "SpineJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spine-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "Spine",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spine-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "Spine.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spine-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "pixi_spine.Spine",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "splide",
		name: "Splide",
		website: "https://splidejs.com",
		description: "Splide.js is a lightweight, responsive, and customizable slider and carousel library for JavaScript.",
		icon: "Splide.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "splide:jsGlobal:0",
				kind: "jsGlobal",
				property: "Splide.STATES",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "splide:jsGlobal:1",
				kind: "jsGlobal",
				property: "Splide.name",
				valuePattern: new RegExp("i"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "splunkd",
		name: "Splunkd",
		website: "https://splunk.com",
		description: "Splunkd is the system process that handles indexing, searching, forwarding.",
		icon: "Splunk.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "splunkd:header:0",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("Splunkd", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "splunkd:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("splunkd", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "sporcle",
		name: "Sporcle",
		website: "https://www.sporcle.com",
		description: "Sporkle is a trivia and quiz widget that provides interactive question-based content for testing knowledge across various topics through embedded or web-based quizzes.",
		icon: "Sporcle.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sporcle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.sporcle\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "spotify-web-api",
		name: "Spotify Web API",
		website: "https://developer.spotify.com/documentation/web-api",
		description: "Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue.",
		icon: "Spotify.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spotify-web-api:dom:0",
				kind: "dom",
				selector: "link[href*='.spotify.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "spotify-web-api:jsGlobal:1",
				kind: "jsGlobal",
				property: "getSpotifyData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spotify-web-api:jsGlobal:2",
				kind: "jsGlobal",
				property: "spotify_tracks",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "spotify-web-api:jsGlobal:3",
				kind: "jsGlobal",
				property: "spotifyme",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "spotify-widgets",
		name: "Spotify Widgets",
		website: "https://developer.spotify.com/documentation/widgets",
		description: "Spotify Widgets provide an embeddable view of a track, artist, album, user, playlist, podcast or episode for use within your web project.",
		icon: "Spotify.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spotify-widgets:dom:0",
				kind: "dom",
				selector: "iframe[src*='open.spotify.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "spotify-widgets:dom:1",
				kind: "dom",
				selector: "iframe[src*='open.spotify.com/'], link[href*='open.spotify.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "spritespin",
		name: "SpriteSpin",
		website: "https://github.com/giniedp/spritespin",
		description: "SpriteSpin is a JavaScript plugin that enables users to create 360-degree image spin animations on their websites.",
		icon: "SprintHub.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spritespin:jsGlobal:0",
				kind: "jsGlobal",
				property: "SpriteSpin",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "spurit",
		name: "SpurIT",
		website: "https://spur-i-t.com",
		description: "SpurIT is a team of certified Shopify experts which provide ecommerce software solutions.",
		icon: "SpurIT.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "spurit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com\\/shopify-apps\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "spurit:jsGlobal:1",
				kind: "jsGlobal",
				property: "Spurit.global.version",
				valuePattern: new RegExp("(.+)"),
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
				"freemium",
				"low",
				"recurring",
			],
		},
		implies: [
			"shopify",
		],
	},
	{
		id: "squadded",
		name: "Squadded",
		website: "https://www.squadded.co",
		description: "Squadded is a social ecommerce solution that allows visitors to shop together with their friends and with other members of the brands online community.",
		icon: "Squadded.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "squadded:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.squadded\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "stellar-js",
		name: "Stellar.js",
		website: "https://markdalgleish.com/projects/stellar.js/",
		description: "Stellar.js is a JavaScript library and jQuery plugin specifically designed to deliver parallax scrolling effects for web pages.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "stellar-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("stellar(?:\\.min)?\\.js(?:\\?ver=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "stonly",
		name: "Stonly",
		website: "https://stonly.com",
		description: "Stonly is a platform that enhances support efficiency by enabling customer self-service through personalized knowledge, AI-driven assistance, and process automation.",
		icon: "Stonly.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "stonly:jsGlobal:0",
				kind: "jsGlobal",
				property: "STONLY_WID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stonly:jsGlobal:1",
				kind: "jsGlobal",
				property: "StonlyWidget.queue",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "stonly:jsGlobal:2",
				kind: "jsGlobal",
				property: "jsonpStonlyWidget",
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
		id: "storifyme",
		name: "StorifyMe",
		website: "https://www.storifyme.com",
		description: "StorifyMe is a storytelling platform for creating and distributing web stories on social networks and the open web.",
		icon: "StorifyMe.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "storifyme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.storifyme\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "storifyme:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.storifyme.com/']",
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
		id: "strava",
		name: "Strava",
		website: "https://www.strava.com",
		description: "Strava is a community-driven platform that enables users to track progress and support each other through shared motivation.",
		icon: "Strava.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "strava:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.strava\\.com"),
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
		id: "streamwood",
		name: "Streamwood",
		website: "https://streamwood.ru",
		description: "Streamwood is a call back and chat system designed to facilitate efficient communication.",
		icon: "Streamwood.svg",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "streamwood:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clients\\.streamwood\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "streamwood:jsGlobal:1",
				kind: "jsGlobal",
				property: "__STREAMWOOD_MUTEX_QP3",
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
		id: "sugar",
		name: "Sugar",
		website: "https://sugarjs.com",
		description: "Sugar is a Javascript utility library for working with native objects.",
		icon: "Sugar.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sugar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/sugar\\/([\\d\\.]+)\\/release\\/sugar\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sugar:jsGlobal:1",
				kind: "jsGlobal",
				property: "SUGAR.AutoComplete",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "sugarjs",
		name: "SugarJS",
		website: "https://sugarjs.com/",
		description: "SugarJS is a JavaScript library that simplifies working with native JavaScript objects, enhancing productivity and code readability.",
		icon: "SugarJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sugarjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sugar\\/?((?:\\d+\\.)+\\d+)?(?:\\/sugar(?:-full)?)?(?:\\.min)?\\.js"),
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
	},
	{
		id: "sumo",
		name: "Sumo",
		website: "https://sumo.com",
		description: "Sumo is a plugin offering set of marketing tools to automate a website's growth. These tools help drive extra traffic, engage visitors, increase email subscribers and build community.",
		icon: "Sumo.png",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "sumo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sumo(?:me)?\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sumo:jsGlobal:1",
				kind: "jsGlobal",
				property: "sumo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sumo:jsGlobal:2",
				kind: "jsGlobal",
				property: "sumome",
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
		id: "supademo",
		name: "Supademo",
		website: "https://supademo.com",
		description: "Supademo is a widget-based tool for creating interactive product demos that can be embedded into websites or shared via links.",
		icon: "Supademo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "supademo:dom:0",
				kind: "dom",
				selector: "iframe[src*='supademo']",
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
		id: "swc",
		name: "SWC",
		website: "https://swc.rs",
		description: "SWC is an extensible Rust-based platform for the next generation of fast developer tools.",
		icon: "swc.svg",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			oss: true,
		},
	},
	{
		id: "sweetalert",
		name: "SweetAlert",
		website: "https://sweetalert.js.org",
		description: "SweetAlert is a JavaScript library that provides alternative alert and modal dialog boxes for web applications, with customisable features, aiming to improve the user interface of the default browser dialogs.",
		icon: "SweetAlert.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sweetalert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sweet(?:-)?alert(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sweetalert:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+sweet-alert(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sweetalert:dom:2",
				kind: "dom",
				selector: "link[href*='sweet-alert']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "sweetalert2",
		name: "SweetAlert2",
		website: "https://sweetalert2.github.io/",
		description: "SweetAlert2 is a JavaScript library that provides customisable, visually appealing, and responsive alert and modal dialog boxes for web applications.",
		icon: "SweetAlert2.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "sweetalert2:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sweetalert2(?:\\.all)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sweetalert2:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/npm\\/sweetalert2@([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sweetalert2:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("sweetalert2@([\\d.]+)\\/dist\\/sweetalert2(?:\\.all)(?:\\.min)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sweetalert2:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("limonte-sweetalert2\\/([\\d.]+)\\/sweetalert2(?:\\.all)(?:\\.min)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sweetalert2:html:4",
				kind: "html",
				pattern: new RegExp("<link[^>]+?href=\"[^\"]+sweetalert2(?:\\.min)?\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sweetalert2:jsGlobal:5",
				kind: "jsGlobal",
				property: "Sweetalert2",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sweetalert2:dom:6",
				kind: "dom",
				selector: "link[href*='sweetalert2']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		excludes: [
			"sweetalert",
		],
	},
	{
		id: "swfobject",
		name: "SWFObject",
		website: "https://github.com/swfobject/swfobject",
		description: "SWFObject is an open-source JavaScript library used to embed Adobe Flash content onto web pages.",
		icon: "SWFObject.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "swfobject:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swfobject.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swfobject:jsGlobal:1",
				kind: "jsGlobal",
				property: "SWFObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "swiffy-slider",
		name: "Swiffy Slider",
		website: "https://swiffyslider.com",
		description: "Swiffy Slider is a wrapper defined in html with slides, navigation and indicators as its children.",
		icon: "Swiffy Slider.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "swiffy-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/npm\\/swiffy-slider@([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swiffy-slider:dom:1",
				kind: "dom",
				selector: "link[href*='/swiffy-slider.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "swiper",
		name: "Swiper",
		website: "https://swiperjs.com",
		description: "Swiper is a JavaScript library that creates modern touch sliders with hardware-accelerated transitions.",
		icon: "Swiper.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "swiper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swiper(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swiper:dom:1",
				kind: "dom",
				selector: "div[data-swiper-slide-index], [swiper-container]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:jsGlobal:2",
				kind: "jsGlobal",
				property: "Swiper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "swiper:dom:3",
				kind: "dom",
				selector: "div[data-swiper-slide-index]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:dom:4",
				kind: "dom",
				selector: "swiper-container",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:dom:5",
				kind: "dom",
				selector: "swiper-slide",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:dom:6",
				kind: "dom",
				selector: "div.swiper-wrapper",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:dom:7",
				kind: "dom",
				selector: "div.swiper-initialized",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swiper:dom:8",
				kind: "dom",
				selector: "div.swiper-vertical",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "swup",
		name: "Swup",
		website: "https://swup.js.org",
		description: "Swup is a versatile and expandable library for implementing page transitions on websites that use server-side rendering.",
		icon: "Swup.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "swup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:dist\\/)?)?swup(?:-preload)?(?:-plugin)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swup:dom:1",
				kind: "dom",
				selector: "html[class*='swup-enabled']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "swup:jsGlobal:2",
				kind: "jsGlobal",
				property: "Swup",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "syncfusion",
		name: "Syncfusion",
		website: "https://www.syncfusion.com",
		description: "Syncfusion is a JavaScript UI controls library that includes a wide range of UI components in a single package.",
		icon: "Syncfusion.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "syncfusion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.syncfusion\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "syncfusion:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.syncfusion.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "syncfusion:jsGlobal:2",
				kind: "jsGlobal",
				property: "Syncfusion",
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
		id: "syntaxhighlighter",
		name: "SyntaxHighlighter",
		website: "https://github.com/syntaxhighlighter",
		icon: "SyntaxHighlighter.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "syntaxhighlighter:html:0",
				kind: "html",
				pattern: new RegExp("<(?:script|link)[^>]*sh(?:Core|Brush|ThemeDefault)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "syntaxhighlighter:jsGlobal:1",
				kind: "jsGlobal",
				property: "SyntaxHighlighter",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "syntaxhighlighter:dom:2",
				kind: "dom",
				selector: "script[src*='shCore'], script[src*='shBrush'], script[src*='shThemeDefault'], link[href*='shCore'], link[href*='shBrush'], link[href*='shThemeDefault']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "syntaxhighlighter:html:3",
				kind: "html",
				pattern: new RegExp("<(?:script|link)[^>]*sh(?:core|brush|themedefault)"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "t1-comercios",
		name: "T1 Comercios",
		website: "https://www.t1comercios.com",
		description: "T1 Comercios is an integrator platform with marketplaces(https://www.claroshop.com/,https://www.sears.com.mx/,https://www.sanborns.com.mx/).",
		icon: "T1 Comercios.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "t1-comercios:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^T1COMERCIOS$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "t1-comercios:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^t1comercios$", "i"),
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
		id: "tablesorter",
		name: "Tablesorter",
		website: "https://mottie.github.io/tablesorter/",
		description: "Flexible client-side table sorting.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tablesorter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)[-\\/](?:dist\\/js\\/)?)?(?:jquery\\.)?tablesorter(?:[\\.\\/]pager)?(?:-custom-controls)?(?:\\.widgets)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "taggbox",
		name: "Taggbox",
		website: "https://taggbox.com/",
		description: "Taggbox is an UGC platform to collect, curate, manage rights, and publish user-generated content marketing campaigns across multiple channels.",
		icon: "Taggbox.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "taggbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.taggbox\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "taggbox:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("taggbox\\.com\\/app\\/js\\/embed\\.min\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "taggbox:url:2",
				kind: "url",
				pattern: new RegExp("\\.taggbox\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "taggbox:jsGlobal:3",
				kind: "jsGlobal",
				property: "taggboxAjaxurl",
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
		id: "tamago",
		name: "Tamago",
		website: "https://tamago.temonalab.com",
		description: "Tamago is a Japanese subscription management platform by Temonalab for optimizing recurring billing services.",
		icon: "Tamago.png",
		categories: [
			"widgets-misc",
			"commerce-operations",
		],
		rules: [
			{
				id: "tamago:html:0",
				kind: "html",
				pattern: new RegExp("<link [^>]*href=\"http:\\/\\/tamago\\.temonalab\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "tamago:dom:1",
				kind: "dom",
				selector: "link[href*='tamago.temonalab.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "tanstack",
		name: "TanStack",
		website: "https://tanstack.com",
		description: "TanStack is a set of headless JavaScript libraries for building web application features such as data fetching, tables, routing, virtualization, and state management.",
		icon: "TanStack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tanstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/.*npm\\.tanstack.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tanstack:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("(?:https?:)?\\/\\/(?:www\\.)?tanstack\\.com(?:\\/[^\"'>]*)?"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "tanstack:dom:2",
				kind: "dom",
				selector: "link[href*='@tanstack']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tanstack:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("\\$_TSR\\.router="),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "tanstack:dom:4",
				kind: "dom",
				selector: "link[rel='modulepreload'][href*='tanstack-query-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tanstack:dom:5",
				kind: "dom",
				selector: "link[rel='modulepreload'][href*='tanstack-router-']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tapcart",
		name: "Tapcart",
		website: "https://tapcart.com",
		description: "Tapcart is a mobile commerce SaaS platform that integrates directly with Shopify.",
		icon: "Tapcart.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tapcart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tapcart\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tapcart:dom:1",
				kind: "dom",
				selector: "a[href*='tapcart.app'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tapcart:jsGlobal:2",
				kind: "jsGlobal",
				property: "tapcartwebBanner",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tapcart:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tapcart\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tapcart:jsGlobal:4",
				kind: "jsGlobal",
				property: "Tapcart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tapcart:jsGlobal:5",
				kind: "jsGlobal",
				property: "tapcartParams",
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
		requires: [
			"shopify",
		],
	},
	{
		id: "teambrain",
		name: "TeamBrain",
		website: "https://www.teambrain.io",
		description: "TeamBrain is a knowledge management solution that allows users to use a self-learning dynamic FAQ on a website or widget on the bottom right of any page.",
		icon: "TeamBrain.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "teambrain:dom:0",
				kind: "dom",
				selector: "link[href*='//teambrain.app/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "teambrain:jsGlobal:1",
				kind: "jsGlobal",
				property: "TeamBrainExternalApp",
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
		id: "tempus",
		name: "Tempus",
		website: "https://github.com/darkroomengineering/tempus",
		description: "Tempus is a lightweight animation frame manager for JavaScript applications, designed to optimize timing and control of visual updates.",
		icon: "Tempus.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tempus:jsGlobal:0",
				kind: "jsGlobal",
				property: "tempusVersion",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "threadles",
		name: "Threadles",
		website: "https://threadles.net",
		description: "Threadles is a social networking platform that uses advanced AI-driven algorithms to enhance digital interaction.",
		icon: "Threadles.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "threadles:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("web\\.threadles\\.net\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "threadles:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Threadles$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "threadles:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^threadles$", "i"),
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
		id: "timeago",
		name: "Timeago",
		website: "https://timeago.yarp.com",
		description: "Timeago is a jQuery plugin that makes it easy to support automatically updating fuzzy timestamps.",
		icon: "Timeago.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "timeago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.timeago\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "timeago:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?[Tt]imeago(?:_mkdocs_material)?(?:\\.full)?(?:\\.locales)?(?:\\.native)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "timeago:jsGlobal:2",
				kind: "jsGlobal",
				property: "timeago",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "timeago:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?(?:jquery\\.)?[tt]imeago(?:_mkdocs_material)?(?:\\.full)?(?:\\.locales)?(?:\\.native)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "tiny-slider",
		name: "Tiny Slider",
		website: "https://github.com/ganlanyuan/tiny-slider",
		description: "Tiny Slider is a vanilla javascript slider for all purposes.",
		icon: "default.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tiny-slider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/([\\d\\.]+)\\/min\\/)?tiny-slider(?:\\.min)?\\.js"),
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
	},
	{
		id: "tinycon",
		name: "Tinycon",
		website: "https://github.com/tommoor/tinycon",
		description: "A library for manipulating a websites favicon.",
		categories: [
			"widgets-misc",
			"component-library",
		],
		rules: [
			{
				id: "tinycon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tinycon(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tippy-js",
		name: "Tippy.js",
		website: "https://atomiks.github.io/tippyjs",
		description: "Tippy.js is the complete tooltip, popover, dropdown, and menu solution for the web, powered by Popper.",
		icon: "Tippy.js.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tippy-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/tippy\\.js(?:@|\\/)?([\\d\\.]+)?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tippy-js:dom:1",
				kind: "dom",
				selector: "style[data-tippy-stylesheet]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tippy-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "tippy.defaultProps",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tipso",
		name: "Tipso",
		website: "https://tipso.object505.com",
		description: "Tipso is a lightweight, responsive jQuery plugin designed to display customizable tooltips across devices and screen sizes.",
		icon: "Tipso.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tipso:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/tipso\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tipso:jsGlobal:1",
				kind: "jsGlobal",
				property: "tipsoData.background",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "tiqets",
		name: "Tiqets",
		website: "https://www.tiqets.com/affiliate",
		description: "Tiqets provides a complete overview of a city - museums, attractions, zoos, canal cruises, concerts. Publishers joined to the Tiqets affiliate program can receive 6% commission during our 30-day cookie window from completed total bookings resulting from featuring links to Tiqets products and content across their brand: blog/website, social media, newsletters, etc.",
		icon: "Tiqets.svg",
		categories: [
			"widgets-misc",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "tiqets:dom:0",
				kind: "dom",
				selector: "a[href*='.tiqets.com/'][target='_blank'], iframe[src*='.tiqets.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tiqets:jsGlobal:1",
				kind: "jsGlobal",
				property: "__TIQETS_LOADER_REINIT",
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
		id: "tockify",
		name: "Tockify",
		website: "https://tockify.com",
		description: "Tockify is a customizable web calendar platform designed for embedding interactive event calendars into websites.",
		icon: "Tockify.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tockify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("public\\.tockify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "toctoc",
		name: "TocToc",
		website: "https://www.toctoc.me",
		description: "Tolstoy is a BPM platform enabling the modeling, automation, and optimization of business processes, simplifying workflows and expediting tasks.",
		icon: "TocToc.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "toctoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.toctoc\\.me\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "toctoc:jsGlobal:1",
				kind: "jsGlobal",
				property: "_toctoc.close",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "togetherjs",
		name: "TogetherJS",
		website: "https://togetherjs.com",
		description: "TogetherJS is an open-source JavaScript library by Mozilla that integrates collaboration tools and features into websites.",
		icon: "TogetherJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "togetherjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "TogetherJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "togetherjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "TogetherJSConfig_cloneClicks",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "togetherjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "TogetherJSConfig_toolName",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "toky",
		name: "Toky",
		website: "https://toky.co",
		description: "Toky is a phone system that integrates across devices, enabling calls and messages through phone, app, or desktop.",
		icon: "Toky.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "toky:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.toky\\.co\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "toky:jsGlobal:1",
				kind: "jsGlobal",
				property: "TokyBase64",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "toky:jsGlobal:2",
				kind: "jsGlobal",
				property: "TokyBusiness",
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
		id: "toonimo",
		name: "Toonimo",
		website: "https://www.toonimo.com",
		description: "Toonimo is a cloud-based platform that enables businesses to showcase key website features and guide site visitors.",
		icon: "Toonimo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "toonimo:jsGlobal:0",
				kind: "jsGlobal",
				property: "TMO_jsFetchTimeStart",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "toonimo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Toonimo.Analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "toonimo:jsGlobal:2",
				kind: "jsGlobal",
				property: "ToonimoLoader",
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
		id: "topic-it",
		name: "Topic'it",
		website: "https://topicit.net",
		description: "Topic'it is a tool that optimizes forums for mobile devices, enhancing usability and accessibility across smartphones and tablets.",
		icon: "TopicIt.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "topic-it:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.topicit\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "topic-it:jsGlobal:1",
				kind: "jsGlobal",
				property: "topicit_action",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "track-hospitality-software",
		name: "Track Hospitality Software",
		website: "https://trackhs.com",
		description: "TRACK Hospitality Software is a provider of property management and hospitality SaaS solutions for managing operations in the hospitality industry.",
		icon: "TrackHS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "track-hospitality-software:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trackhs\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "transistor-fm",
		name: "Transistor.fm",
		website: "https://transistor.fm",
		description: "Transistor.fm is a podcast host, distribution and management platform.",
		icon: "Transistor.fm.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "transistor-fm:dom:0",
				kind: "dom",
				selector: "iframe[src*='.transistor.fm/']",
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
		id: "tremor",
		name: "Tremor",
		website: "https://tremor.so",
		description: "Tremor is an open-source library for building charts and dashboards using React components, designed on top of Tailwind CSS.",
		icon: "Tremor.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tremor:dom:0",
				kind: "dom",
				selector: "div[tremor-id*='tremor-raw'], div[class*='text-tremor-']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "trinity-audio",
		name: "Trinity Audio",
		website: "https://www.trinityaudio.ai",
		description: "Trinity Audio's AI-driven solutions help publishers and content creators create a world of smart audio experiences for their audiences, covering every stage of the audio journey from creation to distribution.",
		icon: "Trinity Audio.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "trinity-audio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/trinitymedia\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trinity-audio:jsGlobal:1",
				kind: "jsGlobal",
				property: "TRINITY_DISPLAY",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trinity-audio:jsGlobal:2",
				kind: "jsGlobal",
				property: "TRINITY_PLAYER",
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
		id: "tripadviser-widget",
		name: "Tripadviser.Widget",
		website: "https://www.tripadvisor.com/Widgets",
		description: "Tripadvisor embed reviews widget.",
		icon: "Tripadviser.Widget.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tripadviser-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tripadvisor\\.[\\w]+\\/WidgetEmbed"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tripadviser-widget:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("tripadvisor\\.[\\w]+\\/widgetembed"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "tripit",
		name: "TripIt",
		website: "https://www.tripit.com",
		description: "TripIt is a travel management platform that organizes travel plans and consolidates details in one place.",
		icon: "TripIt.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "tripit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.tripit\\.com"),
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
		id: "trustyou",
		name: "TrustYou",
		website: "https://www.trustyou.com",
		description: "TrustYou is guest feedback and hotel reputation software company located in Germany.",
		icon: "TrustYou.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "trustyou:dom:0",
				kind: "dom",
				selector: "iframe[src*='api.trustyou.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "turfjs",
		name: "TurfJS",
		website: "https://turfjs.org/",
		description: "Turf is a modular geospatial engine written in JavaScript.",
		icon: "TurfJS.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "turfjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(turf@[\\d.]+)?\\/?turf\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "turfjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "turf.feature",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "turfjs:jsGlobal:2",
				kind: "jsGlobal",
				property: "turf.point",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "turfjs:jsGlobal:3",
				kind: "jsGlobal",
				property: "turf.random",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "twitter",
		name: "Twitter",
		website: "https://twitter.com",
		description: "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets.",
		icon: "Twitter.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "twitter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/platform\\.twitter\\.com\\/widgets\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "twitter-typeahead-js",
		name: "Twitter typeahead.js",
		website: "https://twitter.github.io/typeahead.js",
		icon: "Twitter typeahead.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "twitter-typeahead-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:typeahead|bloodhound)\\.(?:jquery|bundle)?(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twitter-typeahead-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "typeahead",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"jquery",
		],
	},
	{
		id: "typed-js",
		name: "Typed.js",
		website: "https://mattboldt.com/demos/typed-js/",
		description: "Typed.js is a library that types. It is designed to create typewriter-style animations with ease.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "typed-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("typed(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
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
	},
	{
		id: "typer-js",
		name: "Typer.js",
		website: "https://github.com/straversi/Typer.js",
		description: "Typer.js is a JavaScript library for creating a fully configurable typing effect in HTML.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "typer-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("unpkg\\.com\\/typer-dot-js@([\\d\\.]+)\\/typer\\.js"),
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
	},
	{
		id: "ubiliz",
		name: "Ubiliz",
		website: "https://www.ubiliz.com",
		description: "Ubiliz is a gift voucher ecommerce solution.",
		icon: "Ubiliz.svg",
		categories: [
			"widgets-misc",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "ubiliz:jsGlobal:0",
				kind: "jsGlobal",
				property: "ubilizSettings",
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
		id: "ucalc",
		name: "Ucalc",
		website: "https://ucalc.pro",
		description: "Ucalc is a platform offering calculators and form building tools, facilitating efficient computation and streamlined data collection processes.",
		icon: "Ucalc.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
		],
		rules: [
			{
				id: "ucalc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ucalc\\.pro\\/api\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ucalc:jsGlobal:1",
				kind: "jsGlobal",
				property: "uCalc",
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
		id: "underscore-js",
		name: "Underscore.js",
		website: "https://underscorejs.org",
		description: "Underscore.js is a JavaScript library which provides utility functions for common programming tasks. It is comparable to features provided by Prototype.js and the Ruby language, but opts for a functional programming design instead of extending object prototypes.",
		icon: "Underscore.js.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "underscore-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("underscore.*\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "underscore-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "_.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "underscore-js:jsGlobal:2",
				kind: "jsGlobal",
				property: "_.restArguments",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		excludes: [
			"lodash",
		],
	},
	{
		id: "unity",
		name: "Unity",
		website: "https://unity.com",
		description: "Unity is a gaming widget that enables the playing of games developed using 3D gaming engine.",
		icon: "Unity.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "unity:jsGlobal:0",
				kind: "jsGlobal",
				property: "UnityLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "unity:jsGlobal:1",
				kind: "jsGlobal",
				property: "createUnityInstance",
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
		id: "uppy",
		name: "Uppy",
		website: "https://uppy.io",
		description: "Uppy is an open-source, modular JavaScript file uploader designed for integration and file management across web applications.",
		icon: "Uppy.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "uppy:jsGlobal:0",
				kind: "jsGlobal",
				property: "Uppy.Audio",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uppy:jsGlobal:1",
				kind: "jsGlobal",
				property: "UppyUploader",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "userflow",
		name: "Userflow",
		website: "https://userflow.com",
		description: "Userflow is a user onboarding software for building product tours and onboarding checklists, tailored to your app and your users.",
		icon: "Userflow.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "userflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userflow\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userflow:jsGlobal:1",
				kind: "jsGlobal",
				property: "USERFLOWJS_QUEUE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userflow:jsGlobal:2",
				kind: "jsGlobal",
				property: "userflow.endAllFlows",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userflow:jsGlobal:3",
				kind: "jsGlobal",
				property: "userflow.endChecklist",
				confidence: 50,
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
		id: "userlane",
		name: "Userlane",
		website: "https://www.userlane.com",
		description: "Userlane is a platform that provides an interactive step-by-step guide system designed to help users navigate software applications.",
		icon: "Userlane.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "userlane:jsGlobal:0",
				kind: "jsGlobal",
				property: "Userlane",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userlane:jsGlobal:1",
				kind: "jsGlobal",
				property: "UserlaneCommandObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "userpilot",
		name: "Userpilot",
		website: "https://userpilot.com",
		description: "Userpilot is a cloud-based product experience platform designed for customer success and product teams to onboard users and increase product adoption through behavior-triggered experiences.",
		icon: "Userpilot.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "userpilot:jsGlobal:0",
				kind: "jsGlobal",
				property: "userpilot.triggerById",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userpilot:jsGlobal:1",
				kind: "jsGlobal",
				property: "userpilotInitiatorSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userpilot:jsGlobal:2",
				kind: "jsGlobal",
				property: "userpilotPako",
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
		id: "usocial",
		name: "uSocial",
		website: "https://usocial.pro",
		description: "uSocial is a tool that generates customizable Share and Like buttons for websites, enabling quick integration of social interaction features.",
		icon: "uSocial.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "usocial:jsGlobal:0",
				kind: "jsGlobal",
				property: "uSocial.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "usocial:jsGlobal:1",
				kind: "jsGlobal",
				property: "uSocialLogin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "usocial:jsGlobal:2",
				kind: "jsGlobal",
				property: "uSocialShare",
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
		id: "venly",
		name: "Venly",
		website: "https://www.venly.io",
		description: "Venly is a blockchain technology provider creating products to help companies succeed in Web3.",
		icon: "Venly.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "venly:jsGlobal:0",
				kind: "jsGlobal",
				property: "VenlyConnect",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "venly:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Venly$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "venly:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^venly$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "verifypass",
		name: "VerifyPass",
		website: "https://verifypass.com",
		description: "VerifyPass is a company which provide secure identity proofing, authentication, and group affiliation verification for teachers and students.",
		icon: "VerifyPass.png",
		categories: [
			"widgets-misc",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "verifypass:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.id\\.services"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verifypass:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.verifypass\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "verifypass:jsGlobal:2",
				kind: "jsGlobal",
				property: "verifypass_api_instantiator",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "verifypass:jsGlobal:3",
				kind: "jsGlobal",
				property: "verifypass_is_loaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "verifypass:jsGlobal:4",
				kind: "jsGlobal",
				property: "verifypass_popup",
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
		id: "vex",
		name: "Vex",
		website: "https://github.hubspot.com/vex",
		description: "Vex is a lightweight library for creating functional dialogs using vanilla JavaScript without external dependencies.",
		icon: "HubSpot.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "vex:jsGlobal:0",
				kind: "jsGlobal",
				property: "vex.close",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "videopal",
		name: "VideoPal",
		website: "https://www.videopal.io/go/",
		description: "VideoPal is an avatar widget that functions as a help system, providing interactive assistance directly within the user interface.",
		icon: "VideoPal.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "videopal:jsGlobal:0",
				kind: "jsGlobal",
				property: "VideoPalEmbed",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "videopal:jsGlobal:1",
				kind: "jsGlobal",
				property: "VpPlayer",
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
		id: "vite",
		name: "Vite",
		website: "https://vitejs.dev",
		description: "Vite is a frontend build tool and dev server for modern web applications.",
		icon: "vite.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "vite:dom:0",
				kind: "dom",
				selector: "script#vite-legacy-polyfill, script#vite-legacy-entry",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vite:jsGlobal:1",
				kind: "jsGlobal",
				property: "__vite_is_modern_browser",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vite:dom:2",
				kind: "dom",
				selector: "script#vite-legacy-polyfill",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vite:dom:3",
				kind: "dom",
				selector: "script#vite-legacy-entry",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vite:dom:4",
				kind: "dom",
				selector: "link[href*='vite.svg'][rel='icon']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vite:dom:5",
				kind: "dom",
				selector: "script[id^='vite-plugin-']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vite:dom:6",
				kind: "dom",
				selector: "script#vite-legacy-polyfill, script#vite-legacy-entry, link[href*='vite.svg'][rel='icon'], script[id^='vite-plugin-']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "volley",
		name: "Volley",
		website: "https://meetvolley.com",
		description: "Volley is a website annotation tool that enables visual feedback on websites.",
		icon: "Volley.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "volley:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.meetvolley\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "vue2-animate",
		name: "Vue2-animate",
		website: "https://github.com/asika32764/vue2-animate",
		description: "Vue2-animate is a Vue.js port of Animate.css.",
		icon: "vue.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "vue2-animate:dom:0",
				kind: "dom",
				selector: "link[href*='/vue2-animate.min.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"animate-css",
			"sass",
			"vue-js",
		],
	},
	{
		id: "vuex",
		name: "Vuex",
		website: "https://vuex.vuejs.org/",
		description: "Vuex is a state management pattern + library for Vue.js applications.",
		icon: "vue.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "vuex:jsGlobal:0",
				kind: "jsGlobal",
				property: "Vuex.version",
				valuePattern: new RegExp("(.*)"),
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
		implies: [
			"vue-js",
		],
	},
	{
		id: "vxe-table",
		name: "vxe-table",
		website: "https://vxetable.cn",
		description: "vxe-table is a Vue.js based PC form component, support add, delete, change, virtual scroll, lazy load, shortcut menu, data validation, tree structure, print export, form rendering, data paging, virtual list, modal window, custom template, renderer, flexible configuration items, extension interface.",
		icon: "vxe-table.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "vxe-table:dom:0",
				kind: "dom",
				selector: "div[class*='vxe-table']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"vue-js",
		],
	},
	{
		id: "waitforimages",
		name: "waitForImages",
		website: "https://github.com/alexanderdickson/waitForImages",
		description: "waitForImages is a lightweight, high-performance JavaScript library that simplifies the handling of image preloading events.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "waitforimages:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:jquery\\.)?)?waitforimages(?:-modded)?(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "waitforimages:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:(?:jquery\\.)?)?waitforimages(?:-((?:\\d+\\.)+\\d+)-modded)?(?:\\.min)?\\.js"),
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
	},
	{
		id: "waitlist",
		name: "Waitlist",
		website: "https://www.getwaitlist.com",
		description: "Waitlist is a web-based tool that helps businesses to create a waitlist for their product or service.",
		icon: "Waitlist.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "waitlist:jsGlobal:0",
				kind: "jsGlobal",
				property: "gw_backend_url",
				valuePattern: new RegExp("\\/\\/api\\.getwaitlist\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "waitlist:jsGlobal:1",
				kind: "jsGlobal",
				property: "gw_waitlist_name",
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
		id: "walkme",
		name: "WalkMe",
		website: "https://www.walkme.com",
		description: "WalkMe is a cloud-based interactive guidance and engagement platform.",
		icon: "WalkMe.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "walkme:dom:0",
				kind: "dom",
				selector: "link[href*='.walkme.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "walkme:jsGlobal:1",
				kind: "jsGlobal",
				property: "WalkMeAPI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "walkme:jsGlobal:2",
				kind: "jsGlobal",
				property: "_walkmeConfig",
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
		id: "waste-connections",
		name: "Waste Connections",
		website: "https://www.wasteconnections.com",
		description: "Waste Connections is a provider of waste management solutions, offering trash collection, dumpster rental, and recycling services across the United States.",
		icon: "WasteConnections.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "waste-connections:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.wasteconnections\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "waveform",
		name: "Waveform",
		website: "https://music.flatfull.com/waveme/about/",
		description: "Waveform is a media player that supports various media formats, including audio, video, Youtube, and Vimeo, and includes a waveform visualisation feature, utilising Web Audio API and HTML5 Canvas technologies.",
		icon: "Waveme.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "waveform:jsGlobal:0",
				kind: "jsGlobal",
				property: "Waveform",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		requires: [
			"wordpress",
		],
	},
	{
		id: "weatherstack",
		name: "Weatherstack",
		website: "https://weatherstack.com",
		description: "Weatherstack is a weather API providing JSON and XML data for global locations in a lightweight format.",
		icon: "Weatherstack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "weatherstack:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.apixu.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "web-font-loader",
		name: "Web Font Loader",
		website: "https://github.com/typekit/webfontloader",
		description: "WebFont Loader is a versatile JavaScript library that provides enhanced control and flexibility in managing web fonts.",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "web-font-loader:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/)?webfontloader(?:\\.min)?(?:[-\\.][\\d\\w]{0,32})?\\.js"),
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
	},
	{
		id: "web-stories",
		name: "Web Stories",
		website: "https://amp.dev/about/stories/",
		description: "Web Stories is a format for visual storytelling for the open web.",
		icon: "Web-Stories.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "web-stories:dom:0",
				kind: "dom",
				selector: "amp-story",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"amp",
		],
	},
	{
		id: "web-vitals",
		name: "web-vitals",
		website: "https://github.com/GoogleChrome/web-vitals",
		description: "The web-vitals JavaScript is a tiny, modular library for measuring all the web vitals metrics on real users.",
		icon: "web-vitals.svg",
		categories: [
			"widgets-misc",
			"monitoring-error-tracking",
		],
		rules: [
			{
				id: "web-vitals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-vitals@([\\d.]+)\\/dist\\/web-vitals.*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "web-vitals:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("(8999999999999[\\s\\S]+1e12[\\s\\S]+(largest-contentful-paint|first-input|layout-shift)|(largest-contentful-paint|first-input|layout-shift)[\\s\\S]+8999999999999[\\s\\S]+1e12)"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "web-vitals:jsGlobal:2",
				kind: "jsGlobal",
				property: "webVitals",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "web-vitals:scriptContent:3",
				kind: "scriptContent",
				pattern: new RegExp("(8999999999999[\\s\\s]+1e12[\\s\\s]+(largest-contentful-paint|first-input|layout-shift)|(largest-contentful-paint|first-input|layout-shift)[\\s\\s]+8999999999999[\\s\\s]+1e12)"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "webestools",
		name: "Webestools",
		website: "https://www.webestools.com",
		description: "Webestools is a platform offering online tools, including counters and widgets, for various functionalities.",
		icon: "Webestools.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "webestools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.webestools\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webestools:dom:1",
				kind: "dom",
				selector: "iframe[src*='.webestools.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "webmin",
		name: "Webmin",
		website: "https://www.webmin.com",
		description: "Webmin is a free, open-source application for Linux server administration.",
		icon: "Webmin.png",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:webmin:webmin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "webpack",
		name: "Webpack",
		website: "https://webpack.js.org/",
		description: "Webpack is a JavaScript module bundler for web applications and assets.",
		icon: "Webpack.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "webpack:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webpack:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackJsonp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "webrtc",
		name: "WebRTC",
		website: "https://webrtc.org",
		description: "WebRTC is an open-source project that enables real-time voice, text and video communications capabilities between web browsers and devices.",
		icon: "WebRTC.svg",
		categories: [
			"widgets-misc",
		],
		rules: [],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:webrtc_project:webrtc:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "websocket",
		name: "WebSocket",
		website: "https://en.wikipedia.org/wiki/WebSocket",
		description: "WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection, enabling interactive communication between web browsers and servers.",
		icon: "websocket.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "websocket:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+rel=[\"']web-socket[\"']"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "websocket:html:1",
				kind: "html",
				pattern: new RegExp("<(?:link|a)[^>]+href=[\"']wss?:\\/\\/"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "websocket:dom:2",
				kind: "dom",
				selector: "link[rel='web-socket']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "websocket:dom:3",
				kind: "dom",
				selector: "link[href^='ws://']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "websocket:dom:4",
				kind: "dom",
				selector: "link[href^='wss://']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "websocket:header:5",
				kind: "header",
				key: "Upgrade",
				valuePattern: new RegExp("websocket", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "websocket:header:6",
				kind: "header",
				key: "upgrade",
				valuePattern: new RegExp("websocket", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "websocket:dom:7",
				kind: "dom",
				selector: "link[rel='web-socket'], link[href^='ws://'],link[href^='wss://']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "weekdone",
		name: "Weekdone",
		website: "https://weekdone.com",
		description: "Weekdone is a tool for managers and leaders who want to get more insights into their teams and organizations and improve team collaboration and focus.",
		icon: "Weekdone.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "weekdone:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("weekdone\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "weltpixel-pearl-theme",
		name: "WeltPixel Pearl Theme",
		website: "https://www.weltpixel.com/magento-2-theme-pearl",
		description: "Pearl Theme for Magento 2 by WeltPixel. Pearl Theme is following the Magento architecture, layouts and best practice in order to assure highest compatibility with 3rd party extensions.",
		icon: "WeltPixel.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "weltpixel-pearl-theme:dom:0",
				kind: "dom",
				selector: "body.theme-pearl",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "weltpixel-pearl-theme:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pearl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"high",
				"onetime",
			],
		},
		implies: [
			"magento-version-2",
		],
	},
	{
		id: "whatfix",
		name: "Whatfix",
		website: "https://whatfix.com",
		description: "Whatfix is a SaaS based platform which provides in-app guidance and performance support for web applications and software products.",
		icon: "Whatfix.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "whatfix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.whatfix\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "whatfix:jsGlobal:1",
				kind: "jsGlobal",
				property: "_wfx_add_logger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "whatfix:jsGlobal:2",
				kind: "jsGlobal",
				property: "_wfx_settings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "whatfix:jsGlobal:3",
				kind: "jsGlobal",
				property: "wfx_is_playing__",
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
		id: "wheelio",
		name: "Wheelio",
		website: "https://wheelio-app.com/",
		description: "Wheelio is gamified pop-up/widget for ecommerce sites.",
		icon: "Wheelio.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wheelio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wheelioapp\\.azureedge\\.net"),
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
		id: "whooshkaa",
		name: "Whooshkaa",
		website: "https://www.whooshkaa.com",
		icon: "Whooshkaa.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "whooshkaa:html:0",
				kind: "html",
				pattern: new RegExp("<iframe src=\"[^>]+whooshkaa\\.com"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "whooshkaa:dom:1",
				kind: "dom",
				selector: "iframe[src*='whooshkaa.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "wijmo",
		name: "Wijmo",
		website: "https://developer.mescius.com/wijmo",
		description: "Wijmo is a JavaScript UI component library built in TypeScript, ideal for developing lightweight, high-speed HTML5/JavaScript applications with no dependencies, and designed for enterprise use.",
		icon: "Wijmo.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wijmo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/Scripts\\/Acts\\/Wijmo\\/wijmo\\.min\\.js\\?v=([\\d]+\\.\\d+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wijmo:jsGlobal:1",
				kind: "jsGlobal",
				property: "wijmo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wijmo:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/scripts\\/acts\\/wijmo\\/wijmo\\.min\\.js\\?v=([\\d]+\\.\\d+)"),
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
	},
	{
		id: "wisepops",
		name: "Wisepops",
		website: "https://wisepops.com",
		description: "Wisepops is an intelligent popup and marketing automation system that offers marketers a single platform from which to create and manage website popups.",
		icon: "Wisepops.svg",
		categories: [
			"widgets-misc",
			"marketing-automation",
		],
		rules: [
			{
				id: "wisepops:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("loader\\.wisepops\\.com\\/get-loader\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wisepops:jsGlobal:1",
				kind: "jsGlobal",
				property: "WisePopsObject",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wisepops:jsGlobal:2",
				kind: "jsGlobal",
				property: "wisepops._api",
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
		id: "wolframalpha",
		name: "WolframAlpha",
		website: "https://www.wolframalpha.com/widgets",
		description: "WolframAlpha is a tool that integrates live computational knowledge into blogs or websites.",
		icon: "WolframAlpha.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wolframalpha:jsGlobal:0",
				kind: "jsGlobal",
				property: "WolframAlphaWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "wookmark",
		name: "WookMark",
		website: "https://wookmark.com",
		description: "WookMark is a plugin for laying out elements of varying heights in a column-based grid.",
		icon: "WookMark.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wookmark:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wookmark\\.min\\.js(?:\\?ver=([\\d\\.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wookmark:jsGlobal:1",
				kind: "jsGlobal",
				property: "Wookmark",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "workplace-by-meta",
		name: "Workplace by Meta",
		website: "https://www.workplace.com",
		description: "Workplace was an enterprise collaboration and communication platform developed by Meta (formerly Facebook), used for messaging, news feeds, and groups within organisations.",
		icon: "Workplace.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "workplace-by-meta:dns:0",
				kind: "dns",
				valuePattern: new RegExp("workplace-domain-verification=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "worldz",
		name: "Worldz",
		website: "https://www.worldz-business.net",
		description: "Worldz calculates the economic value of a user’s social popularity (qualitatively and quantitatively). In proportion to this value, it provides a personalised discount, which can be applied in exchange for a social sharing by the user on their Instagram or Facebook profile.",
		icon: "Worldz.png",
		categories: [
			"widgets-misc",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "worldz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.worldztool\\.com\\/"),
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
		id: "wowee",
		name: "Wowee",
		website: "https://wowee.cz",
		description: "Wowee is a wishlist creation tool designed to help users organise and manage their desired items.",
		icon: "Wowee.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wowee:dom:0",
				kind: "dom",
				selector: "script#wowee-script",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "wowee:jsGlobal:1",
				kind: "jsGlobal",
				property: "woweeScriptUrl",
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
		id: "wurfl",
		name: "Wurfl",
		website: "https://web.wurfl.io/",
		description: "WURFL.js is JavaScript that detects device models of smartphones, tablets, smart TVs and game consoles accessing your website.",
		icon: "Wurfl.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "wurfl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wurfl\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wurfl:jsGlobal:1",
				kind: "jsGlobal",
				property: "WURFL",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "x-clacks-overhead",
		name: "X-Clacks-Overhead",
		website: "https://xclacksoverhead.org/home/about",
		description: "X-Clacks-Overhead is a non-standard HTTP header used to transmit tribute messages within server responses.",
		icon: "XClacksOverhead.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "x-clacks-overhead:header:0",
				kind: "header",
				key: "X-Clacks-Overhead",
				valuePattern: new RegExp("^GNU Terry Pratchett$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "x-clacks-overhead:header:1",
				kind: "header",
				key: "x-clacks-overhead",
				valuePattern: new RegExp("^gnu terry pratchett$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "xajax",
		name: "Xajax",
		website: "https://xajax-project.org",
		icon: "Xajax.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "xajax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xajax_core.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:xajax:xajax:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "xregexp",
		name: "XRegExp",
		website: "https://xregexp.com",
		icon: "XRegExp.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "xregexp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("xregexp[.-]([\\d.]*\\d)[^/]*\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xregexp:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/([\\d.]+)\\/xregexp(?:\\.min)?\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xregexp:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("xregexp.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xregexp:jsGlobal:3",
				kind: "jsGlobal",
				property: "XRegExp.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "yandex-messenger",
		name: "Yandex.Messenger",
		website: "https://dialogs.yandex.ru",
		description: "Yandex. Messenger is an instant messaging application.",
		icon: "Yandex.Messenger.svg",
		categories: [
			"widgets-misc",
			"email-messaging",
		],
		rules: [
			{
				id: "yandex-messenger:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.s3\\.yandex\\.net\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yandex-messenger:jsGlobal:1",
				kind: "jsGlobal",
				property: "yandexChatWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
			],
		},
	},
	{
		id: "yelp-review-badge",
		name: "Yelp Review Badge",
		website: "https://yelp.com",
		description: "Yelp Review Badges showcase business reviews from Yelp on websites.",
		icon: "Yelp.svg",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "yelp-review-badge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("yelp\\.com\\/biz_badge_js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yelp-review-badge:dom:1",
				kind: "dom",
				selector: "img[src*='dyn.yelpcdn.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "yui",
		name: "YUI",
		website: "https://clarle.github.io/yui3",
		description: "YUI is a JavaScript and CSS library with more than 30 unique components including low-level DOM utilities and high-level user-interface widgets.",
		icon: "YUI.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "yui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/yui\\/|yui\\.yahooapis\\.com)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yui:jsGlobal:1",
				kind: "jsGlobal",
				property: "YAHOO.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yui:jsGlobal:2",
				kind: "jsGlobal",
				property: "YUI.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:yahoo:yui:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "zabbix",
		name: "Zabbix",
		website: "https://zabbix.com",
		description: "Zabbix is an open-source monitoring tool that provides real-time monitoring, alerting, and reporting for IT infrastructure, including networks, servers, and applications.",
		icon: "Zabbix.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "zabbix:html:0",
				kind: "html",
				pattern: new RegExp("<body[^>]+zbxCallPostScripts"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "zabbix:url:1",
				kind: "url",
				pattern: new RegExp("\\/zabbix\\/"),
				confidence: 30,
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "zabbix:jsGlobal:2",
				kind: "jsGlobal",
				property: "zbxCallPostScripts",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zabbix:meta:3",
				kind: "meta",
				key: "Author",
				valuePattern: new RegExp("ZABBIX SIA", "i"),
				confidence: 70,
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "zabbix:html:4",
				kind: "html",
				pattern: new RegExp("<body[^>]+zbxcallpostscripts"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "zabbix:meta:5",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("zabbix sia", "i"),
				confidence: 70,
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:zabbix:zabbix:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "zepto",
		name: "Zepto",
		website: "https://zeptojs.com",
		icon: "Zepto.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "zepto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zepto.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zepto:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zepto",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ziggy",
		name: "Ziggy",
		website: "https://github.com/tighten/ziggy",
		description: "Ziggy is a library that allows using Laravel named routes in JavaScript.",
		icon: "Ziggy.png",
		categories: [
			"widgets-misc",
		],
		rules: [
			{
				id: "ziggy:jsGlobal:0",
				kind: "jsGlobal",
				property: "Ziggy",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"inertia-js",
			"laravel",
		],
	},
] as const satisfies readonly TechnologyDefinition[];
