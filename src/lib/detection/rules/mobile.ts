import type { TechnologyDefinition } from '../types';

export const mobileTechnologyDefinitions = [
	{
		id: "framework7",
		name: "Framework7",
		website: "https://framework7.io",
		description: "Framework7 is a mobile HTML framework designed for creating iOS and Android applications with a native-like user experience.",
		icon: "Framework7.svg",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "framework7:pageGlobal:0",
				kind: "pageGlobal",
				property: "Framework7.Component",
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
		id: "jqtouch",
		name: "jQTouch",
		website: "https://jqtouch.com",
		description: "jQTouch is an open-source Zepto/ jQuery plugin with native animations, automatic navigation, and themes for mobile WebKit browsers like iPhone, G1 (Android), and Palm Pre.",
		icon: "jQTouch.png",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "jqtouch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jqtouch.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jqtouch:pageGlobal:1",
				kind: "pageGlobal",
				property: "jQT",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jquery-mobile",
		name: "jQuery Mobile",
		website: "https://jquerymobile.com",
		description: "jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices.",
		icon: "jQuery Mobile.svg",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "jquery-mobile:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery[.-]mobile(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-mobile:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("jquery[.-]mobile(?:-)?(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-mobile:pageGlobal:2",
				kind: "pageGlobal",
				property: "jQuery.mobile.version",
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
			oss: false
		}
	},
	{
		id: "jquery-pjax",
		name: "jQuery-pjax",
		website: "https://github.com/defunkt/jquery-pjax",
		description: "jQuery PJAX is a plugin that uses AJAX and pushState.",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "jquery-pjax:html:0",
				kind: "html",
				pattern: new RegExp("<div[^>]+data-pjax-container"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "jquery-pjax:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("jquery[.-]pjax(?:-([\\d.]+))?(?:\\.min)?\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-pjax:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("jquery[.-]pjax(?:-)?(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jquery-pjax:pageGlobal:3",
				kind: "pageGlobal",
				property: "jQuery.pjax",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jquery-pjax:meta:4",
				kind: "meta",
				key: "pjax-push",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "jquery-pjax:meta:5",
				kind: "meta",
				key: "pjax-replace",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "jquery-pjax:meta:6",
				kind: "meta",
				key: "pjax-timeout",
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "onsen-ui",
		name: "Onsen UI",
		website: "https://onsen.io",
		description: "Onsen UI is an open-source HTML5 hybrid app framework offering mobile UI components for PhoneGap and Cordova development.",
		icon: "OnsenUI.svg",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "onsen-ui:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(/.*onsen.*min\\.js|.*angular-onsenui\\.min\\.js)"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "starti-app",
		name: "starti.app",
		website: "https://starti.app",
		description: "starti.app is a subscription-based platform that converts websites into mobile applications.",
		icon: "StartiApp.svg",
		categories: [
			"mobile",
			"ui-library"
		],
		rules: [
			{
				id: "starti-app:pageGlobal:0",
				kind: "pageGlobal",
				property: "startiapp.App",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "starti-app:pageGlobal:1",
				kind: "pageGlobal",
				property: "startiappAlternateIcons",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "starti-app:pageGlobal:2",
				kind: "pageGlobal",
				property: "startiappApp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "starti-app:pageGlobal:3",
				kind: "pageGlobal",
				property: "startiappUser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa"
			]
		}
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
			"framework"
		],
		rules: [
			{
				id: "wink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:_base/js/base|wink).*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wink:pageGlobal:1",
				kind: "pageGlobal",
				property: "wink.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:wink:wink:*:*:*:*:*:android:*:*"
		}
	}
] as const satisfies readonly TechnologyDefinition[];
