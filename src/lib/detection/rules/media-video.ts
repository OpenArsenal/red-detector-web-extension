import type { TechnologyDefinition } from '../types';

export const mediaVideoTechnologyDefinitions = [
	{
		id: "30namaplayer",
		name: "30namaPlayer",
		website: "https://30nama.com/",
		description: "30namaPlayer is a modified version of Video.js to work with videos on HTML using javascript.",
		icon: "30namaPlayer.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "30namaplayer:dom:0",
				kind: "dom",
				selector: "section[class*='player30nama']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "adobe-dynamic-media-classic",
		name: "Adobe Dynamic Media Classic",
		website: "https://business.adobe.com/uk/products/experience-manager/scene7-login.html",
		description: "Adobe Dynamic Media Classic is a platform that enables customers to manage, enhance, publish, and deliver dynamic rich media content and personal experiences to consumers across all channels and devices, including web, print material, email campaigns, desktops, social, and mobile.",
		icon: "Adobe Experience Platform.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "adobe-dynamic-media-classic:dom:0",
				kind: "dom",
				selector: "source[srcset*='.scene7.com/'], link[href*='.scene7.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "adobe-dynamic-media-classic:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.scene7\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "adobe-dynamic-media-classic:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.scene7\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aniview-video-ad-player",
		name: "Aniview Video Ad Player",
		website: "https://aniview.com/video-ad-player/",
		description: "Aniview Video Ad Player is a video player technology developed by Aniview, a company that specialises in providing video advertising solutions.",
		icon: "Aniview.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "aniview-video-ad-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("player\\.aniview\\.com\\/script\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aniview-video-ad-player:dom:1",
				kind: "dom",
				selector: "link[href*='player.aniview.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"aniview-ad-server",
		],
	},
	{
		id: "apizee",
		name: "Apizee",
		website: "https://www.apizee.com",
		description: "Apizee is a platform for easy, real-time, multi-device video interaction services.",
		icon: "Apizee.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "apizee:jsGlobal:0",
				kind: "jsGlobal",
				property: "Apizee",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apizee:jsGlobal:1",
				kind: "jsGlobal",
				property: "apizee",
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
		id: "aprimo",
		name: "Aprimo",
		website: "https://www.aprimo.com",
		description: "Aprimo is a United States-based company that develops and sells marketing automation software and digital asset management technology.",
		icon: "Aprimo.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "aprimo:dom:0",
				kind: "dom",
				selector: "source[data-srcset*='/media/aprimo'], img[data-src*='/media/Aprimo'], img[src*='aprimo']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "aprimo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Aprimo",
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
		id: "artplayer-js",
		name: "Artplayer.js",
		website: "https://artplayer.org",
		description: "Artplayer.js is an HTML5 video player that supports customizable UI, subtitles, and plugins, offering a flexible and modern video playback solution.",
		icon: "Artplayer.js.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "artplayer-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "Artplayer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "aryeo",
		name: "Aryeo",
		website: "https://www.aryeo.com",
		description: "Aryeo is an all-in-one platform designed to manage, deliver, and organize media for real estate photographers.",
		icon: "Aryeo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "aryeo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.aryeo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "aryeo:jsGlobal:1",
				kind: "jsGlobal",
				property: "ARYEO_COMPANY_API_V1_BASE_URL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aryeo:jsGlobal:2",
				kind: "jsGlobal",
				property: "ARYEO_ENVIRONMENT",
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
		id: "asciinema",
		name: "Asciinema",
		website: "https://asciinema.org/",
		description: "Asciinema is a free and open-source solution for recording terminal sessions and sharing them on the web.",
		icon: "Asciinema.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "asciinema:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("asciinema\\.org\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "asciinema:html:1",
				kind: "html",
				pattern: new RegExp("<asciinema-player"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "asciinema:dom:2",
				kind: "dom",
				selector: "div.asciinema-player-wrapper",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "asciinema:dom:3",
				kind: "dom",
				selector: "div.asciinema-player",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "asciinema:jsGlobal:4",
				kind: "jsGlobal",
				property: "AsciinemaPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "asciinema:jsGlobal:5",
				kind: "jsGlobal",
				property: "asciinema",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "ausha",
		name: "Ausha",
		website: "https://www.ausha.co",
		description: "Ausha is an all-in-one platform for hosting, distributing, and monetizing podcasts.",
		icon: "Ausha.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "ausha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.ausha\\.co"),
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
		id: "azuracast",
		name: "AzuraCast",
		website: "https://www.azuracast.com",
		description: "AzuraCast is an open-source self-hosted web radio station in a box.",
		icon: "AzuraCast.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "azuracast:dom:0",
				kind: "dom",
				selector: "link[href*='/public/azuratest_radio/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "azuracast:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/vite_dist\\/assets\\/(?:Layout|Login)-"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "azuracast:dom:2",
				kind: "dom",
				selector: "footer a[href='https://azuracast.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"freemium",
			],
			cpe: "cpe:2.3:a:azuracast:azuracast:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "bambuser",
		name: "Bambuser",
		website: "https://bambuser.com",
		description: "Bambuser is a SaaS company based in Stockholm that provides live video shopping technology.",
		icon: "Bambuser.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bambuser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bambuser\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bambuser:jsGlobal:1",
				kind: "jsGlobal",
				property: "BambuserLiveShopping",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bambuser:jsGlobal:2",
				kind: "jsGlobal",
				property: "_bambuser",
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
		id: "bigbluebutton",
		name: "BigBlueButton",
		website: "https://bigbluebutton.org",
		description: "BigBlueButton is an open-source virtual classroom and web conferencing platform for online teaching and collaboration.",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bigbluebutton:dom:0",
				kind: "dom",
				selector: "meta[property='og:title'][content='BigBlueButton']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bigbluebutton:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_greenlight\\-3_0_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "bigmarker",
		name: "BigMarker",
		website: "https://www.bigmarker.com",
		description: "BigMarker is a platform for hosting webinars, virtual, and hybrid events, providing tools for presentations, audience engagement, and event management in one solution.",
		icon: "BigMarker.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bigmarker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bigmarker\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bigmarker:dom:1",
				kind: "dom",
				selector: "input[value*='.bigmarker.com/']",
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
		id: "bigpoint",
		name: "BigPoint",
		website: "https://www.bigpoint.net",
		description: "BigPoint is a browser game portal that offers a collection of free online games.",
		icon: "BigPoint.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bigpoint:dom:0",
				kind: "dom",
				selector: "form[action*='/Authentication/Bigpoint']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bigpoint:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Bigpoint GmbH", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "bigpoint:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("bigpoint gmbh", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "bitmovin",
		name: "Bitmovin",
		website: "https://bitmovin.com",
		description: "Bitmovin is a platform that enables live and on-demand video workflows, supporting video processing, delivery, and playback across different streaming environments.",
		icon: "Bitmovin.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bitmovin:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bitmovin\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bitmovin:jsGlobal:1",
				kind: "jsGlobal",
				property: "bitmovin.player",
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
		id: "blinklink",
		name: "Blinklink",
		website: "https://blinklink.com",
		description: "Blinklink is a platform that offers enterprises AI-curated short-form video solutions.",
		icon: "Blinklink.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "blinklink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blinklink\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blippa",
		name: "Blippa",
		website: "https://blippa.com",
		description: "Blippa is a platform for digital product passports, enabling no-code product lifecycle management and integration with smart services and data.",
		icon: "Blippa.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "blippa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("blippa\\.constants"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "blippa:header:1",
				kind: "header",
				key: "X-Servedby",
				valuePattern: new RegExp("^blippa1$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "blippa:header:2",
				kind: "header",
				key: "x-servedby",
				valuePattern: new RegExp("^blippa1$", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "bluestone-pim",
		name: "Bluestone PIM",
		website: "https://www.bluestonepim.com",
		description: "Bluestone PIM is primarily a product information management (PIM) solution, which is focused on managing and distributing product data across multiple channels. However, it also includes some features that are typically associated with digital asset management (DAM), such as the ability to manage and store product images, videos, and other digital assets.",
		icon: "Bluestone PIM.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bluestone-pim:dom:0",
				kind: "dom",
				selector: "img[src*='media.bluestonepim.com/'], img[data-srcset*='media.bluestonepim.com/']",
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
		id: "brandfolder",
		name: "Brandfolder",
		website: "https://brandfolder.com",
		description: "Brandfolder is a cloud-based digital asset management platform.",
		icon: "Brandfolder.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "brandfolder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.brandfolder\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "brandfolder:jsGlobal:1",
				kind: "jsGlobal",
				property: "Brandfolder.account",
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
		id: "brightcove",
		name: "Brightcove",
		website: "https://www.brightcove.com",
		description: "Brightcove is an online video platform for hosting, streaming, monetizing, and analyzing video.",
		icon: "Brightcove.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "brightcove:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("players\\.brightcove\\.net\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "brightcove:dom:1",
				kind: "dom",
				selector: "iframe[src*='players.brightcove.'], link[href*='players.brightcove.']",
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
		id: "bynder",
		name: "Bynder",
		website: "https://www.bynder.com",
		description: "Bynder is a cloud-based marketing platform where brands create, find, and use all their digital content.",
		icon: "Bynder.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "bynder:jsGlobal:0",
				kind: "jsGlobal",
				property: "Bynder.cloudfront",
				valuePattern: new RegExp("\\.cloudfront\\.net\\/frontend\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bynder:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^bynder$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "canto",
		name: "Canto",
		website: "https://www.canto.com",
		description: "Canto is a digital asset management solution.",
		icon: "Canto.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "canto:dom:0",
				kind: "dom",
				selector: "link[href*='.canto.com/'], a[href*='.canto.com/'], img[src*='.canto.com/']",
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
		id: "celum",
		name: "Celum",
		website: "https://www.celum.com",
		description: "Celum is a software developer that specialises in enterprise digital asset management and marketing content management systems.",
		icon: "Celum.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "celum:dom:0",
				kind: "dom",
				selector: "img[src*='/celum/'], img[src*='/celum_assets/']",
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
		id: "censhare",
		name: "Censhare",
		website: "https://www.censhare.com",
		description: "Censhare is a commercial digital experience platform in the form of an enterprise content management system.",
		icon: "Censhare.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "censhare:dom:0",
				kind: "dom",
				selector: "img[data-src*='CENSHARE'], img[src*='CENSHARE']",
				description: "DOM selector matches a known technology marker.",
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
		id: "cleeng",
		name: "Cleeng",
		website: "https://cleeng.com",
		description: "Cleeng is a platform that enables the sale and protection of premium video content through access control and secure streaming features.",
		icon: "Cleeng.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "cleeng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cleeng\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cleeng:jsGlobal:1",
				kind: "jsGlobal",
				property: "CleengApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cleeng:jsGlobal:2",
				kind: "jsGlobal",
				property: "cleengStatus",
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
		id: "clipara",
		name: "Clipara",
		website: "https://www.getclipara.com",
		description: "Clipara is a platform that helps businesses connect with customers using video by adding video content to websites, emails, and SMS without coding.",
		icon: "Clipara.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "clipara:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getclipara\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clipara:jsGlobal:1",
				kind: "jsGlobal",
				property: "__clipara",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clipara:jsGlobal:2",
				kind: "jsGlobal",
				property: "cliparaCurrentUrl",
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
		id: "cloudflare-stream",
		name: "Cloudflare Stream",
		website: "https://www.cloudflare.com/products/cloudflare-stream",
		description: "Cloudflare Stream is a serverless live and on-demand video streaming platform.",
		icon: "CloudFlare.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "cloudflare-stream:dom:0",
				kind: "dom",
				selector: "iframe[src*='.cloudflarestream\\.com'], iframe[src*='iframe\\.videodelivery\\.net/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "collectiveaccess",
		name: "CollectiveAccess",
		website: "https://collectiveaccess.org",
		description: "CollectiveAccess is a free, open-source software for cataloguing and publishing museum and archival collections.",
		icon: "CollectiveAccess.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "collectiveaccess:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^CA_collectiveaccess_ui_locale$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "collectiveaccess:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^collectiveaccess$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "collectiveaccess:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^ca_collectiveaccess_ui_locale$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
			],
		},
	},
	{
		id: "confer-with",
		name: "Confer With",
		website: "https://conferwith.io",
		description: "Confer With triggers live streaming video calls between shoppers and instore experts from a website, or outside a store.",
		icon: "Confer With.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "confer-with:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.conferwith\\.io\\/"),
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
		id: "conviva",
		name: "Conviva",
		website: "https://www.conviva.com",
		description: "Conviva is a census, continuous measurement and engagement platform for streaming media.",
		icon: "conviva.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "conviva:jsGlobal:0",
				kind: "jsGlobal",
				property: "Conviva",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "conviva:jsGlobal:1",
				kind: "jsGlobal",
				property: "Conviva.Client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "conviva:jsGlobal:2",
				kind: "jsGlobal",
				property: "Conviva.Client.version",
				valuePattern: new RegExp("^([0-9\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "corebook",
		name: "Corebook",
		website: "https://www.corebook.io",
		description: "Corebook is a platform for brand guidelines, designed to assist creators of brilliant brands in managing their brand.",
		icon: "CoreBook.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "corebook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.corebook\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"onetime",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "dailymotion",
		name: "Dailymotion",
		website: "https://www.dailymotion.com",
		description: "Dailymotion is a French video-sharing technology platform.",
		icon: "Dailymotion.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "dailymotion:dom:0",
				kind: "dom",
				selector: "img[data-src*='.dailymotion.com/'], iframe[scr*='.dailymotion.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "dailymotion:meta:1",
				kind: "meta",
				key: "name",
				valuePattern: new RegExp("dailymotion-domain-verification", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "delight-xr",
		name: "Delight XR",
		website: "https://delight-vr.com",
		description: "Delight XR is a video platform catering to regular, AR, and VR content with high-quality delivery.",
		icon: "DelightXR.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "delight-xr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.delight-vr\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "delight-xr:jsGlobal:1",
				kind: "jsGlobal",
				property: "DelightVR",
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
		id: "digizuite",
		name: "Digizuite",
		website: "https://www.digizuite.com",
		description: "Digizuite is a Digital Asset Management software for enterprises.",
		icon: "Digizuite.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "digizuite:dom:0",
				kind: "dom",
				selector: "img[src^='/globalassets/digizuite/'], source[srcset^='/globalassets/digizuite/'], video[src^='/globalassets/digizuite/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "digizuite:dom:1",
				kind: "dom",
				selector: "img[src^='/globalassets/digizuite/']",
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
		id: "dplayer",
		name: "DPlayer",
		website: "https://dplayer.js.org",
		description: "DPlayer is an HTML 5 video player that supports pop-up.",
		icon: "DPlayer.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "dplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/dplayer\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dplayer:jsGlobal:1",
				kind: "jsGlobal",
				property: "DPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "dplayer:jsGlobal:2",
				kind: "jsGlobal",
				property: "DPlayer.version",
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
		id: "dropbox",
		name: "Dropbox",
		website: "https://www.dropbox.com",
		description: "Dropbox is a cloud storage and file synchronization service.",
		icon: "Dropbox.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "dropbox:dns:0",
				kind: "dns",
				valuePattern: new RegExp("dropbox-domain-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:dropbox:dropbox:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "dyte",
		name: "Dyte",
		website: "https://dyte.io",
		description: "Dyte is a developer-friendly, real-time audio and video communication software development kit (SDK).",
		icon: "Dyte.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "dyte:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.dyte-client-selfVideo"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "dyte:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.dyte\\.in\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "dyte:jsGlobal:2",
				kind: "jsGlobal",
				property: "triggerDyteRecording",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
			],
		},
		implies: [
			"webrtc",
		],
	},
	{
		id: "easywebinar",
		name: "EasyWebinar",
		website: "https://easywebinar.com",
		description: "EasyWebinar is a webinar platform designed for marketing and growing businesses.",
		icon: "EasyWebinar.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "easywebinar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easywebinar\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "firework",
		name: "Firework",
		website: "https://firework.com",
		description: "Firework is a video commerce solution for brands, retailers, and publishers, enhancing digital storefronts with interactive livestream and shoppable video features.",
		icon: "Firework.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "firework:jsGlobal:0",
				kind: "jsGlobal",
				property: "_fwn",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "firework:jsGlobal:1",
				kind: "jsGlobal",
				property: "_fwnPerformance",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "firework:jsGlobal:2",
				kind: "jsGlobal",
				property: "fwnPolyfillPromise",
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
		id: "fleeq",
		name: "Fleeq",
		website: "https://www.fleeq.io",
		description: "Fleeq is a platform facilitating the creation of training videos, followed by tracking, embedding, optimization, localization, and sharing capabilities.",
		icon: "Fleeq.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "fleeq:jsGlobal:0",
				kind: "jsGlobal",
				property: "FleeqSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:jsGlobal:1",
				kind: "jsGlobal",
				property: "FleeqSDKLight",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:jsGlobal:2",
				kind: "jsGlobal",
				property: "_fleeqBarSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:jsGlobal:3",
				kind: "jsGlobal",
				property: "_fleeqData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:jsGlobal:4",
				kind: "jsGlobal",
				property: "_fleeqWiki",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:jsGlobal:5",
				kind: "jsGlobal",
				property: "fleeqBarConfig",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fleeq:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^__FLEEQ$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "fleeq:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^__fleeq$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "flowplayer",
		name: "Flowplayer",
		website: "https://flowplayer.com",
		description: "Flowplayer is a scalable, performance-first HTML 5 video player and platform hosting solution for publishers, broadcasters and digital media.",
		icon: "Flowplayer.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "flowplayer:jsGlobal:0",
				kind: "jsGlobal",
				property: "flowplayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flowplayer:jsGlobal:1",
				kind: "jsGlobal",
				property: "flowplayer.version",
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
			pricing: [
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "fluid-player",
		name: "Fluid Player",
		website: "https://www.fluidplayer.com",
		description: "Fluid Player is an open-source HTML5 video player.",
		icon: "FluidPlayer.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "fluid-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fluidplayer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fluid-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "fluidPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fluid-player:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkfluid_player",
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
		id: "frontify",
		name: "Frontify",
		website: "https://www.frontify.com",
		description: "Frontify is a cloud-based brand management platform for creators and collaborators of brands.",
		icon: "Frontify.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "frontify:dom:0",
				kind: "dom",
				selector: "a[href*='.frontify.com/'], img[src*='.frontify.com/'], link[href*='.frontify.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "frontify:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^frontify$", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "go-instore",
		name: "Go Instore",
		website: "https://goinstore.com",
		description: "Go Instore uses high-definition live video to connect online customers with in-store product experts.",
		icon: "Go Instore.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "go-instore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/gis\\.goinstore\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "go-instore:jsGlobal:1",
				kind: "jsGlobal",
				property: "GISAPP.videoJsCtrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "go-instore:jsGlobal:2",
				kind: "jsGlobal",
				property: "gisAppLib.postRobot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "go-instore:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.goinstore\\.com", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "graphicsflow",
		name: "GraphicsFlow",
		website: "https://www.graphicsflow.com",
		description: "GraphicsFlow is an online tool that enables print shops to create, manage, and approve customer artwork.",
		icon: "GraphicsFlow.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "graphicsflow:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.graphicsflow.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "graphicsflow:header:1",
				kind: "header",
				key: "Set-Cookie",
				valuePattern: new RegExp("graphicsflowprodapi\\.azurewebsites\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "graphicsflow:header:2",
				kind: "header",
				key: "set-cookie",
				valuePattern: new RegExp("graphicsflowprodapi\\.azurewebsites\\.net", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "hero",
		name: "Hero",
		website: "https://www.usehero.com/",
		description: "Hero is a virtual shopping platform for ecommerce and retail stores.",
		icon: "Hero.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "hero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usehero\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hero:jsGlobal:1",
				kind: "jsGlobal",
				property: "HeroWebPluginSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"cart-functionality",
		],
	},
	{
		id: "heysummit",
		name: "HeySummit",
		website: "https://heysummit.com",
		description: "HeySummit is a platform facilitating the organization of virtual summits.",
		icon: "HeySummit.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "heysummit:jsGlobal:0",
				kind: "jsGlobal",
				property: "heySummitAnimationItems",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:jsGlobal:1",
				kind: "jsGlobal",
				property: "prepHeySummitAnimationParent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:jsGlobal:2",
				kind: "jsGlobal",
				property: "resetHeySummitAnimation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:jsGlobal:3",
				kind: "jsGlobal",
				property: "startHeySummitAnimation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:jsGlobal:4",
				kind: "jsGlobal",
				property: "startHeySummitAnimationLoadTop",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:jsGlobal:5",
				kind: "jsGlobal",
				property: "stopHeySummitAnimation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "heysummit:meta:6",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^HeySummit$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "heysummit:meta:7",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^heysummit$", "i"),
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
		id: "image-relay",
		name: "Image Relay",
		website: "https://www.imagerelay.com",
		description: "Image Relay is a digital asset management system that allows organizations to upload, manage, organize, monitor and track their digital assets.",
		icon: "Image Relay.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "image-relay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.imagerelay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "image-relay:dom:1",
				kind: "dom",
				selector: "a[href*='.imagerelay.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "image-relay:jsGlobal:2",
				kind: "jsGlobal",
				property: "ImageRelay.accounts",
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
		id: "inplayer",
		name: "Inplayer",
		website: "https://inplayer.com",
		description: "Inplayer is a platform that enables video streaming at scale, supports audience expansion across devices, and provides tools for content monetization.",
		icon: "Inplayer.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "inplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.inplayer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ipaper",
		name: "iPaper",
		website: "https://www.ipaper.io",
		description: "iPaper is a platform that converts printed materials into interactive digital catalogs designed to enhance customer engagement and support sales.",
		icon: "iPaper.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "ipaper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embeds\\.ipaper\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ipaper:jsGlobal:1",
				kind: "jsGlobal",
				property: "iPaper.API",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ipaper:jsGlobal:2",
				kind: "jsGlobal",
				property: "iPaperDebugger",
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
		id: "jplayer",
		name: "jPlayer",
		website: "https://jplayer.org",
		description: "jPlayer is a cross-browser JavaScript library developed as a jQuery plugin which facilitates the embedding of web based media, notably HTML5 audio and video in addition to Adobe Flash based media.",
		icon: "jPlayer.png",
		categories: [
			"media-video",
			"widgets-misc",
		],
		rules: [
			{
				id: "jplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/jquery\\.jplayer\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jplayer:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("jquery\\.jplayer\\.min\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "jplayer:jsGlobal:2",
				kind: "jsGlobal",
				property: "jPlayerPlaylist",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:happyworm:jplayer:*:*:*:*:*:*:*:*",
		},
		implies: [
			"jquery",
		],
	},
	{
		id: "jw-player",
		name: "JW Player",
		website: "https://www.jwplayer.com",
		description: "JW Player is an online video player with video engagement analytics, custom video player skins, and live video streaming capability.",
		icon: "JW Player.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "jw-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jwplayer\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jw-player:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jwpcdn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jw-player:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("\\.jwpsrv\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "jw-player:dom:3",
				kind: "dom",
				selector: "div[data-video-provider*=jwplayer]",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "jw-player:jsGlobal:4",
				kind: "jsGlobal",
				property: "jwDefaults",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jw-player:jsGlobal:5",
				kind: "jsGlobal",
				property: "jwplayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jw-player:jsGlobal:6",
				kind: "jsGlobal",
				property: "jwplayerApiUrl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jw-player:jsGlobal:7",
				kind: "jsGlobal",
				property: "webpackJsonpjwplayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jw-player:dom:8",
				kind: "dom",
				selector: "div[class^='jwplayer']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "jw-player:scriptSrc:9",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:jwplayer|jwpcdn)\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jw-player:dom:10",
				kind: "dom",
				selector: "div[data-video-provider*=jwplayer], div[class^='jwplayer']",
				description: "DOM selector matches a known technology marker.",
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
		id: "kaltura",
		name: "Kaltura",
		website: "https://corp.kaltura.com",
		description: "Kaltura is a video content management platform that allows users to upload, manage, share, publish, and stream videos.",
		icon: "Kaltura.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "kaltura:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.kaltura\\.(?:nordu\\.net|com)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kaltura:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("kalturaPlayer"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "kaltura:dom:2",
				kind: "dom",
				selector: "link[href*='.kaltura.com'], div.kaltura-zone",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kaltura:jsGlobal:3",
				kind: "jsGlobal",
				property: "Kplayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kaltura:jsGlobal:4",
				kind: "jsGlobal",
				property: "kGetKalturaEmbedSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kaltura:jsGlobal:5",
				kind: "jsGlobal",
				property: "kGetKalturaPlayerList",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kaltura:jsGlobal:6",
				kind: "jsGlobal",
				property: "kalturaIframeEmbed",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kaltura:jsGlobal:7",
				kind: "jsGlobal",
				property: "restoreKalturaKDPCallback",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kaltura:scriptContent:8",
				kind: "scriptContent",
				pattern: new RegExp("kalturaplayer"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "keep-archeevo",
		name: "keep. archeevo",
		website: "https://www.keep.pt/en/produts/archeevo-archival-management-software",
		description: "keep. archeevo is an archival management software that aims to support all the functional areas of an archival institution, covering activities ranging from archival description to employee performance assessment.",
		icon: "keep. archeevo.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "keep-archeevo:jsGlobal:0",
				kind: "jsGlobal",
				property: "ArcheevoSnippets.mostviewedDocumentsURL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "keep-archeevo:jsGlobal:1",
				kind: "jsGlobal",
				property: "embedArcheevoBasicSearch",
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
		id: "klarna-virtual-shopping",
		name: "Klarna Virtual Shopping",
		website: "https://www.klarna.com/us/business/marketing-solutions/",
		description: "Klarna Virtual Shopping is a service that allows online shoppers to interact with in-store retail experts via live chats and video calls, providing real-time advice and product demonstrations to enhance the online shopping experience.",
		icon: "Klarna.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "klarna-virtual-shopping:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usehero\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klarna-virtual-shopping:jsGlobal:1",
				kind: "jsGlobal",
				property: "HeroWebPluginSettings",
				description: "Page-owned global matches a known technology marker.",
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
		id: "loom",
		name: "Loom",
		website: "https://www.loom.com",
		icon: "Loom.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "loom:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("loom\\.com\\/api"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "loom:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("luna\\.loom\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "loom:dns:2",
				kind: "dns",
				valuePattern: new RegExp("loom-verification", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "magisto",
		name: "Magisto",
		website: "https://www.magisto.com",
		description: "Magisto is a video management solution designed to help marketing professionals, agencies, and businesses of all sizes.",
		icon: "Magisto.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "magisto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.magisto\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "magisto:jsGlobal:1",
				kind: "jsGlobal",
				property: "MagistoPlayerFrame",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "magisto:jsGlobal:2",
				kind: "jsGlobal",
				property: "magisto_server",
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
		id: "mediaelement-js",
		name: "MediaElement.js",
		website: "https://www.mediaelementjs.com",
		description: "MediaElement.js is a set of custom Flash plugins that mimic the HTML5 MediaElement API for browsers that don't support HTML5 or don't support the media codecs.",
		icon: "MediaElement.js.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "mediaelement-js:jsGlobal:0",
				kind: "jsGlobal",
				property: "mejs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mediaelement-js:jsGlobal:1",
				kind: "jsGlobal",
				property: "mejs.version",
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
		id: "mediaplatform",
		name: "MediaPlatform",
		website: "https://www.mediaplatform.com",
		description: "MediaPlatform is enterprise video and webcasting software designed for corporate communications.",
		icon: "MediaPlatform.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "mediaplatform:jsGlobal:0",
				kind: "jsGlobal",
				property: "mediaPlatformLoginUrl",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "mirador",
		name: "Mirador",
		website: "https://www.miradortech.com",
		description: "Mirador is a platform designed to enhance customer acquisition, streamline digital loan applications, and enable intelligent product routing and digitization.",
		icon: "Mirador.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "mirador:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.miradorfin\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "muvi",
		name: "Muvi",
		website: "https://www.muvi.com",
		description: "Muvi is a SaaS-based provider of over-the-top (OTT) platform solutions for video streaming, offering end-to-end infrastructure for content delivery and monetization.",
		icon: "Muvi.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "muvi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.muvi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "muvi:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("www\\.muvi\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "muvi:meta:2",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("www\\.muvi\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "nextcloud",
		name: "Nextcloud",
		website: "https://nextcloud.com",
		description: "Nextcloud is a suite of client-server software for creating and using file hosting services.",
		icon: "Nextcloud.svg",
		categories: [
			"media-video",
			"widgets-misc",
		],
		rules: [
			{
				id: "nextcloud:jsGlobal:0",
				kind: "jsGlobal",
				property: "oc_config.version",
				valuePattern: new RegExp("^([\\.\\d]+)$"),
				confidence: 0,
				version: {
					source: "match",
					template: "$1\\",
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nextcloud:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^__Host\\-nc_sameSiteCookielax$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextcloud:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^__Host\\-nc_sameSiteCookiestrict$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextcloud:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^__host\\-nc_samesitecookielax$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "nextcloud:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^__host\\-nc_samesitecookiestrict$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			pricing: [
				"payg",
				"recurring",
			],
			cpe: "cpe:2.3:a:nextcloud:nextcloud:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "ocular",
		name: "Ocular",
		website: "https://ocularsolution.com/",
		description: "Ocular is a video ecommerce and live commerce platform facilitating transactions and shopping experiences through live broadcasts and interactive features.",
		icon: "Ocular.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "ocular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.ocularsolution\\.com\\/"),
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
		id: "odeum",
		name: "Odeum",
		website: "https://odeum.io",
		description: "Odeum is a SaaS platform for creating a video-based subscription service including a completely branded website & set of apps.",
		icon: "Odeum.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "odeum:jsGlobal:0",
				kind: "jsGlobal",
				property: "OdeumAccount",
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
		id: "optimole",
		name: "Optimole",
		website: "https://optimole.com",
		description: "Optimole is a cloud-based platform that provides media optimization, real-time image transformations, and digital asset management for improved website performance and delivery.",
		icon: "Optimole.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "optimole:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.i\\.optimole\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "optimole:jsGlobal:1",
				kind: "jsGlobal",
				property: "optimoleData",
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
		id: "panda-video",
		name: "Panda Video",
		website: "https://pandavideo.com",
		description: "Panda Video is a video hosting platform that provide streaming, engages viewers, and supports sales growth.",
		icon: "PandaVideo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "panda-video:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.tv\\.pandavideo\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "panda-video:dom:1",
				kind: "dom",
				selector: "iframe[src*='tv.pandavideo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "panda-video:jsGlobal:2",
				kind: "jsGlobal",
				property: "pandaLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "panda-video:jsGlobal:3",
				kind: "jsGlobal",
				property: "pandatag",
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
		id: "photoshelter-for-brands",
		name: "PhotoShelter for Brands",
		website: "https://brands.photoshelter.com",
		description: "PhotoShelter for Brands is a cloud-based media management system for companies and organizations.",
		icon: "PhotoShelter.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "photoshelter-for-brands:dom:0",
				kind: "dom",
				selector: "a[href*='.photoshelter.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "photoshelter-for-brands:dom:1",
				kind: "dom",
				selector: "a[href*='brands.photoshelter.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		excludes: [
			"photoshelter",
		],
	},
	{
		id: "picturepark",
		name: "Picturepark",
		website: "https://picturepark.com",
		description: "Picturepark is designed to facilitate your DAM policies by storing, tagging, searching and delivering files in an automated and controlled way.",
		icon: "Picturepark.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "picturepark:dom:0",
				kind: "dom",
				selector: "img[data-name*='Picturepark'], img[data-srcset*='picturepark'], div[style*='picturepark'], source[srcset*='picturepark']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "picturepark:jsGlobal:1",
				kind: "jsGlobal",
				property: "pictureparkConfiguration",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"high",
				"recurring",
			],
		},
	},
	{
		id: "plaza",
		name: "Plaza",
		website: "https://www.useplaza.com",
		description: "Plaza is a ecommerce platform that allows brands and retailers to communicate with customers via live video.",
		icon: "Plaza.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "plaza:dom:0",
				kind: "dom",
				selector: "iframe[src*='stream.useplaza.com/']",
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
		id: "plyr",
		name: "Plyr",
		website: "https://plyr.io",
		description: "Plyr is a simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers.",
		icon: "Plyr.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "plyr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.plyr\\.io\\/([0-9.]+)\\/.+\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "plyr:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("--plyr-progress"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "plyr:jsGlobal:2",
				kind: "jsGlobal",
				property: "Plyr",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "plytix",
		name: "Plytix",
		website: "https://www.plytix.com",
		description: "Plytix is an AI-powered product information management platform that provides tools for managing and organizing product content.",
		icon: "Plytix.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "plytix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.plytix\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "plytix:jsGlobal:1",
				kind: "jsGlobal",
				property: "PlytixAnalyticsObject",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"recurring",
			],
		},
	},
	{
		id: "presto-player",
		name: "Presto Player",
		website: "https://prestoplayer.com",
		description: "Presto Player is a WordPress plugin designed for embedding optimised video and audio on WordPress websites.",
		icon: "PrestoPlayer.svg",
		categories: [
			"media-video",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "presto-player:jsGlobal:0",
				kind: "jsGlobal",
				property: "prestoComponents",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "presto-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "prestoPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "presto-player:jsGlobal:2",
				kind: "jsGlobal",
				property: "prestoPlayer.proVersion",
				valuePattern: new RegExp("^(.+)$"),
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
				"onetime",
				"recurring",
			],
			cpe: "cpe:2.3:a:prestoplayer:presto_player:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "remotion",
		name: "Remotion",
		website: "https://remotion.dev",
		description: "Remotion is a software tool that enables the creation of videos through React programming.",
		icon: "Remotion.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "remotion:jsGlobal:0",
				kind: "jsGlobal",
				property: "remotion_imported",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "remotion:jsGlobal:1",
				kind: "jsGlobal",
				property: "remotion_renderReady",
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
			"react",
		],
	},
	{
		id: "ruffle",
		name: "Ruffle",
		website: "https://ruffle.rs",
		description: "Ruffle is an open-source Flash Player emulator that allows users to view and play Flash content on modern web browsers without requiring the original Adobe Flash Player.",
		icon: "Ruffle.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "ruffle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[\\/@]?ruffle(?:-rs)?\\/ruffle\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ruffle:jsGlobal:1",
				kind: "jsGlobal",
				property: "RufflePlayer.config",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "rumble",
		name: "Rumble",
		website: "https://rumble.com",
		description: "Rumble is a Canadian video-streaming platform that presents itself as an alternative to YouTube.",
		icon: "Rumble.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "rumble:dom:0",
				kind: "dom",
				selector: "iframe[src*='//rumble.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rumble:jsGlobal:1",
				kind: "jsGlobal",
				property: "Rumble.gdpr",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rumble:jsGlobal:2",
				kind: "jsGlobal",
				property: "Rumble.resize",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "salsify",
		name: "Salsify",
		website: "https://www.salsify.com",
		description: "Salsify is a product experience management platform which connects digital asset management, content syndication, and digital catalog capabilities.",
		icon: "Salsify.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "salsify:dom:0",
				kind: "dom",
				selector: "a[href*='.salsify.com/'][target='_blank'], img[data-src*='images.salsify.com/'], link[href*='.salsify.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "salsify:jsGlobal:1",
				kind: "jsGlobal",
				property: "salsify_vars",
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
		id: "sardius-media",
		name: "Sardius Media",
		website: "https://www.sardius.media",
		description: "Sardius Media is a platform focused on streamlining broadcast workflows by developing solutions that improve efficiency, organization, and content delivery across digital media platforms.",
		icon: "Sardius.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "sardius-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sardiuslive\\.sardius\\.media"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sardius-media:jsGlobal:1",
				kind: "jsGlobal",
				property: "sardius.libs",
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
		id: "shaka-player",
		name: "Shaka Player",
		website: "https://github.com/shaka-project/shaka-player",
		description: "Shaka Player is an open-source JavaScript library for adaptive media.",
		icon: "Shaka Player.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "shaka-player:jsGlobal:0",
				kind: "jsGlobal",
				property: "shaka.Player.version",
				valuePattern: new RegExp("v([\\d\\.-\\w]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shaka-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "shaka.Player.version",
				valuePattern: new RegExp("v([\\d\\.\\-\\w]+)"),
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
		id: "sublimevideo",
		name: "SublimeVideo",
		website: "https://sublimevideo.net",
		description: "SublimeVideo is a framework for HTML5 Video Player.",
		icon: "SublimeVideo.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "sublimevideo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sublimevideo\\.net\\/js\\/[a-z\\d]+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sublimevideo:jsGlobal:1",
				kind: "jsGlobal",
				property: "sublimevideo",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "syncle",
		name: "Syncle",
		website: "https://syncle.com",
		description: "Syncle is a tool that automatically integrates relevant product video reviews from YouTube into online shops.",
		icon: "Syncle.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "syncle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.videoly\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "syncle:jsGlobal:1",
				kind: "jsGlobal",
				property: "VideolyWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tanx",
		name: "Tanx",
		website: "https://tanx.com",
		description: "Tanx is a platform for media resource management and business-cooperation workflows.",
		icon: "Tanx.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "tanx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tanx\\.co."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tanx:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tanx\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "thera-link",
		name: "thera-LINK",
		website: "https://www.thera-link.com",
		description: "Thera Link is a telehealth video platform designed to facilitate secure virtual sessions between mental health professionals and clients.",
		icon: "TheraLink.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "thera-link:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.thera-link\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "thera-link:dom:1",
				kind: "dom",
				selector: "div[data-items-type-array*='app.thera-link.com']",
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
		id: "thron",
		name: "THRON",
		website: "https://www.thron.com",
		description: "THRON is a digital asset management platform that provides a centralised hub for storing, organising, and distributing digital assets like images, videos, and documents.",
		icon: "THRON.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "thron:dom:0",
				kind: "dom",
				selector: "link[href*='.thron.com/'], img[src*='.thron.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "thron:jsGlobal:1",
				kind: "jsGlobal",
				property: "THRONPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "thron:jsGlobal:2",
				kind: "jsGlobal",
				property: "thronHlsJs",
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
		id: "transloadit",
		name: "Transloadit",
		website: "https://transloadit.com",
		description: "Transloadit is a service for file uploading, conversion, and processing across various formats.",
		icon: "Transloadit.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "transloadit:dom:0",
				kind: "dom",
				selector: "link[href*='transloadit.edgly.net/']",
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
			cpe: "cpe:2.3:a:transloadit:uppy:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "trovo",
		name: "Trovo",
		website: "https://trovo.live",
		description: "Trovo is a platform for live streaming and connecting with others through gaming, music, and other interactive content.",
		icon: "Trovo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "trovo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.trovo-tag\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "twitch-player",
		name: "Twitch Player",
		website: "https://dev.twitch.tv/docs/embed/video-and-clips/",
		description: "Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions.",
		icon: "Twitch.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "twitch-player:dom:0",
				kind: "dom",
				selector: "iframe[src*='player\\.twitch\\.tv']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "twitch-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "Twitch.Player",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "twitch-player:jsGlobal:2",
				kind: "jsGlobal",
				property: "Twitch.Embed",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "twitch-player:jsGlobal:3",
				kind: "jsGlobal",
				property: "twitchPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "uplynk",
		name: "Uplynk",
		website: "https://www.uplynk.com",
		description: "Uplynk is a video streaming platform that provides tools for live and on-demand video delivery, including encoding, transcoding, and content management.",
		icon: "Uplynk.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "uplynk:dom:0",
				kind: "dom",
				selector: "video[src*='.uplynk.com/'], img[data-thumbnailurl*='.uplynk.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "uplynk:jsGlobal:1",
				kind: "jsGlobal",
				property: "UPLYNK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uplynk:jsGlobal:2",
				kind: "jsGlobal",
				property: "_uplynk_async_wget2_data",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uplynk:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.uplynk\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"high",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "uscreen",
		name: "Uscreen",
		website: "https://uscreen.tv/",
		description: "Uscreen is a CMS to monetize VOD and live content. They provide site hosting, video hosting, and a payment gateway for selling video based content.",
		icon: "Uscreen.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "uscreen:dom:0",
				kind: "dom",
				selector: ".powered-by-uscreen",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "uscreen:jsGlobal:1",
				kind: "jsGlobal",
				property: "analyticsHost",
				valuePattern: new RegExp("stats\\.uscreen\\.io"),
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
		id: "vdocipher",
		name: "VdoCipher",
		website: "https://www.vdocipher.com",
		description: "VdoCipher is a secure video hosting and DRM streaming platform.",
		icon: "VdoCipher.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vdocipher:dom:0",
				kind: "dom",
				selector: "iframe[src*='player.vdocipher.com/v2/'][allow*='encrypted-media']",
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
		id: "vestico",
		name: "Vestico",
		website: "https://vestico.co",
		description: "Vestico is a digital asset management platform for organizing, managing, and distributing digital content.",
		icon: "Vestico.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vestico:jsGlobal:0",
				kind: "jsGlobal",
				property: "vesticoReportingDisabled",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vestico:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunk_vestico_widget",
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
		id: "videojs",
		name: "VideoJS",
		website: "https://videojs.com",
		description: "Video.js is a JavaScript and CSS library that makes it easier to work with and build on HTML5 video.",
		icon: "VideoJS.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "videojs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zencdn\\.net\\/c\\/video\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "videojs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/video\\.js\\/([\\d\\.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "videojs:stylesheetContent:2",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.video-js"),
				confidence: 25,
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "videojs:stylesheetContent:3",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.vjs-big-play-button"),
				confidence: 75,
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "videojs:dom:4",
				kind: "dom",
				selector: "div.video-js",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "videojs:jsGlobal:5",
				kind: "jsGlobal",
				property: "VideoJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "videojs:jsGlobal:6",
				kind: "jsGlobal",
				property: "videojs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "videojs:jsGlobal:7",
				kind: "jsGlobal",
				property: "videojs.VERSION",
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
		id: "videoly",
		name: "Videoly",
		website: "https://videoly.co",
		description: "Videoly is a tool that automatically integrates relevant product video reviews from YouTube into online shops.",
		icon: "Videoly.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "videoly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.videoly\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "videoly:jsGlobal:1",
				kind: "jsGlobal",
				property: "VideolyWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "videoo-tv",
		name: "Videoo.tv",
		website: "https://videoo.tv",
		description: "Videoo.tv is a platform that enhances website performance and user experience through innovative video and display formats, offering advanced tools to maximize revenue generation.",
		icon: "VideooTv.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "videoo-tv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.videoo\\.tv"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "videoo-tv:jsGlobal:1",
				kind: "jsGlobal",
				property: "videooTVCtrlLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "videoo-tv:jsGlobal:2",
				kind: "jsGlobal",
				property: "videootv",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vidjet",
		name: "Vidjet",
		website: "https://www.vidjet.com",
		description: "Vidjet is a shoppable-video platform designed for modern ecommerce stores, allowing videos to be embedded on websites and triggered based on visitor actions.",
		icon: "Vidjet.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vidjet:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app-api\\.vidjet\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "vidjet:jsGlobal:1",
				kind: "jsGlobal",
				property: "Vidjet.init",
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
		id: "vidscrip",
		name: "Vidscrip",
		website: "https://studio.vidscrip.com",
		description: "Vidscrip is a digital platform that enables physicians to communicate with patients through personalized video content, enhancing patient engagement and improving care coordination.",
		icon: "Vidscrip.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vidscrip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vidscrip\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vidscrip:jsGlobal:1",
				kind: "jsGlobal",
				property: "addVidscripWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "viloud",
		name: "Viloud",
		website: "https://viloud.tv",
		description: "Viloud is a platform that enables the creation of online TV channels for brands, allowing scheduled or on-demand content streaming.",
		icon: "Viloud.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "viloud:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.viloud\\.tv"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "viloud:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.viloud.tv/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "vimeo",
		name: "Vimeo",
		website: "https://vimeo.com",
		description: "Vimeo is a video hosting, sharing and services platform. Vimeo operation an ad-free basis by providing subscription plans.",
		icon: "Vimeo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vimeo:dom:0",
				kind: "dom",
				selector: "iframe[src*='vimeo.com'],embed[src*='vimeo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "vimeo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Vimeo.Player",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vimeo:jsGlobal:2",
				kind: "jsGlobal",
				property: "VimeoPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vimeo-ott",
		name: "Vimeo OTT",
		website: "https://vimeo.com/ott",
		description: "Vimeo OTT allows brands and creators to launch their own white-label video subscription channels, where subscribers can access video content for free, as a rental, or for purchase.",
		icon: "Vimeo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vimeo-ott:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.vhx\\.tv"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "vimeo-ott:jsGlobal:1",
				kind: "jsGlobal",
				property: "VHX.config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vimeo-ott:jsGlobal:2",
				kind: "jsGlobal",
				property: "_vhx",
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
		implies: [
			"vimeo",
		],
	},
	{
		id: "viqeo",
		name: "Viqeo",
		website: "https://viqeo.tv",
		description: "Viqeo is a short video platform to make media and ecommerce more visual and interesting.",
		icon: "Viqeo.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "viqeo:jsGlobal:0",
				kind: "jsGlobal",
				property: "VIQEO",
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
		id: "vonage-video-api",
		name: "Vonage Video API",
		website: "https://www.vonage.com/communications-apis/video/",
		description: "Vonage Video API platform makes it easy to embed real-time, high-quality interactive video, messaging, screen-sharing, and more into web and mobile apps.",
		icon: "Vonage.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "vonage-video-api:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.opentok\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "webinato",
		name: "Webinato",
		website: "https://www.webinato.com",
		description: "Webinato is a webinar automation software that schedules, manages, and streams online seminars for businesses and educational purposes.",
		icon: "Webinato.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "webinato:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.webinato\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "widde",
		name: "Widde",
		website: "https://widde.io",
		description: "Widde is a platform that enables the use of interactive ecommerce videos on webpages, enhancing the shopping experience and providing businesses with a competitive advantage.",
		icon: "Widde.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "widde:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.widde\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "widde:header:1",
				kind: "header",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.widde\\.io", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "widde:header:2",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.widde\\.io", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "widen",
		name: "Widen",
		website: "https://www.widen.com",
		description: "Widen is a digital asset management and product information management solutions provider.",
		icon: "Widen.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "widen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\/\\d+-\\d+\\/stack\\/en\\/widenjs\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "widen:jsGlobal:1",
				kind: "jsGlobal",
				property: "WidenSessionTimer",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "widen:jsGlobal:2",
				kind: "jsGlobal",
				property: "WidenUI",
				confidence: 50,
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
		id: "wistia",
		name: "Wistia",
		website: "https://wistia.com",
		description: "Wistia is designed exclusively to serve companies using video on their websites for marketing, support, and sales.",
		icon: "Wistia.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "wistia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wistia\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wistia:jsGlobal:1",
				kind: "jsGlobal",
				property: "Wistia",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wistia:jsGlobal:2",
				kind: "jsGlobal",
				property: "wistiaEmbeds",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wistia:jsGlobal:3",
				kind: "jsGlobal",
				property: "wistiaUtils",
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
		id: "wowza-video-player",
		name: "Wowza Video Player",
		website: "https://www.wowza.com/video/player",
		description: "Wowza Video Player is a robust, industry standard player that provides HTML5, HLS, MPEG-DASH, and LL-DASH playback.",
		icon: "wowza.svg",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "wowza-video-player:jsGlobal:0",
				kind: "jsGlobal",
				property: "WowzaPlayer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wowza-video-player:jsGlobal:1",
				kind: "jsGlobal",
				property: "WowzaPlayer.jsplayer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "youtube",
		name: "YouTube",
		website: "https://www.youtube.com",
		description: "YouTube is a video sharing service where users can create their own profile, upload videos, watch, like and comment on other videos.",
		icon: "YouTube.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "youtube:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.youtube\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "youtube:html:1",
				kind: "html",
				pattern: new RegExp("<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com\\/(?:v|embed)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "youtube:dom:2",
				kind: "dom",
				selector: "embed[src*='youtube.com'], embed[src*='youtube-nocookie.com'], iframe[src*='youtube.com'], iframe[src*='youtube-nocookie.com'], param[value*='youtube.com'], param[value*='youtube-nocookie.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "zmags-creator",
		name: "Zmags Creator",
		website: "https://www.creatorbyzmags.com",
		description: "Zmags Creator enables marketers to design and publish endless types of interactive digital experiences without coding.",
		icon: "Zmags Creator.png",
		categories: [
			"media-video",
		],
		rules: [
			{
				id: "zmags-creator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c(?:reator)?\\.zmags\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zmags-creator:jsGlobal:1",
				kind: "jsGlobal",
				property: "__zmags",
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
] as const satisfies readonly TechnologyDefinition[];
