import type { TechnologyDefinition } from '../types';

export const mobileTechnologyDefinitions = [
	{
		id: "foxappy",
		name: "FoxAppy",
		website: "https://foxappy.com",
		description: "FoxAppy is a service that converts ecommerce platforms into native mobile applications for mobile devices.",
		icon: "FoxAppy.svg",
		categories: [
			"mobile",
		],
		rules: [
			{
				id: "foxappy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("com\\.foxappy\\."),
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
		id: "framework7",
		name: "Framework7",
		website: "https://framework7.io",
		description: "Framework7 is a mobile HTML framework designed for creating iOS and Android applications with a native-like user experience.",
		icon: "Framework7.svg",
		categories: [
			"mobile",
			"widgets-misc",
			"component-library",
		],
		rules: [
			{
				id: "framework7:jsGlobal:0",
				kind: "jsGlobal",
				property: "Framework7.Component",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "framework7:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/(?:js\\/)?)?framework7(?:-((?:\\d+\\.)+\\d+))?(?:\\.custom)?(?:\\.min)?(?:-vue)?_?[\\w\\.]{0,29}\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "framework7:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("(?:((?:\\d+\\.)+\\d+)\\/(?:js\\/)?)?framework7(?:-)?(?:\\.custom)?(?:\\.min)?(?:-vue)?_?[\\w\\.]{0,29}\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "framework7:dom:3",
				kind: "dom",
				selector: "link[href*='framework7'], .framework7-root, .framework7-modals",
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
	},
	{
		id: "jqtouch",
		name: "jQTouch",
		website: "https://jqtouch.com",
		description: "jQTouch is an open-source Zepto/ JQuery plugin with native animations, automatic navigation, and themes for mobile WebKit browsers like iPhone, G1 (Android), and Palm Pre.",
		icon: "jQTouch.png",
		categories: [
			"mobile",
		],
		rules: [
			{
				id: "jqtouch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jqtouch.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jqtouch:jsGlobal:1",
				kind: "jsGlobal",
				property: "jQT",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "onsen-ui",
		name: "Onsen UI",
		website: "https://onsen.io",
		description: "Onsen UI is an open-source HTML5 hybrid app framework offering mobile UI components for PhoneGap and Cordova development.",
		icon: "OnsenUI.svg",
		categories: [
			"mobile",
		],
		rules: [
			{
				id: "onsen-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(\\/.*onsen.*min\\.js|.*angular-onsenui\\.min\\.js)"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
		},
	},
	{
		id: "starti-app",
		name: "starti.app",
		website: "https://starti.app",
		description: "starti.app is a subscription-based platform that converts websites into mobile applications.",
		icon: "StartiApp.svg",
		categories: [
			"mobile",
		],
		rules: [
			{
				id: "starti-app:jsGlobal:0",
				kind: "jsGlobal",
				property: "startiapp.App",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "starti-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "startiappAlternateIcons",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "starti-app:jsGlobal:2",
				kind: "jsGlobal",
				property: "startiappApp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "starti-app:jsGlobal:3",
				kind: "jsGlobal",
				property: "startiappUser",
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
		id: "wink",
		name: "Wink",
		website: "https://winktoolkit.org",
		description: "Wink Toolkit is a JavaScript toolkit used to build mobile web apps.",
		icon: "Wink.png",
		categories: [
			"mobile",
			"ui-library",
		],
		rules: [
			{
				id: "wink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:_base\\/js\\/base|wink).*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wink:jsGlobal:1",
				kind: "jsGlobal",
				property: "wink.version",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:wink:wink:*:*:*:*:*:android:*:*",
		},
	},
] as const satisfies readonly TechnologyDefinition[];
