import type { TechnologyDefinition } from '../types';

export const mediaVideoTechnologyDefinitions = [
	{
		id: "model-viewer",
		name: "<model-viewer>",
		website: "https://modelviewer.dev",
		description: "<model-viewer> is an open-source web component developed by Google and maintained through GitHub. <model-viewer> aims at putting 3D content on the web easily with a few lines of HTML code. This was first introduced with Chrome 72 in July 2019 and enables users to view 3D in the browser and mobile devices.",
		icon: "model-viewer.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "model-viewer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/model-viewer/dist/model-viewer\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "model-viewer:dom:1",
				kind: "dom",
				selector: "model-viewer",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "30namaplayer",
		name: "30namaPlayer",
		website: "https://30nama.com/",
		description: "30namaPlayer is a modified version of Video.js to work with videos on HTML using javascript.",
		icon: "30namaPlayer.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "30namaplayer:dom:0",
				kind: "dom",
				selector: "section[class*='player30nama']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "adobe-dynamic-media-classic",
		name: "Adobe Dynamic Media Classic",
		website: "https://business.adobe.com/uk/products/experience-manager/scene7-login.html",
		description: "Adobe Dynamic Media Classic is a platform that enables customers to manage, enhance, publish, and deliver dynamic rich media content and personal experiences to consumers across all channels and devices, including web, print material, email campaigns, desktops, social, and mobile.",
		icon: "Adobe Experience Platform.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "adobe-dynamic-media-classic:dom:0",
				kind: "dom",
				selector: "source[srcset*='.scene7.com/'], link[href*='.scene7.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "adobe-dynamic-media-classic:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.scene7\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aniview-video-ad-player",
		name: "Aniview Video Ad Player",
		website: "https://aniview.com/video-ad-player/",
		description: "Aniview Video Ad Player is a video player technology developed by Aniview, a company that specialises in providing video advertising solutions.",
		icon: "Aniview.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "aniview-video-ad-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("player\\.aniview\\.com/script/([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aniview-video-ad-player:dom:1",
				kind: "dom",
				selector: "link[href*='player.aniview.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"aniview-ad-server"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "apizee",
		name: "Apizee",
		website: "https://www.apizee.com",
		description: "Apizee is a platform for easy, real-time, multi-device video interaction services.",
		icon: "Apizee.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "apizee:pageGlobal:0",
				kind: "pageGlobal",
				property: "Apizee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "apizee:pageGlobal:1",
				kind: "pageGlobal",
				property: "apizee",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "aprimo",
		name: "Aprimo",
		website: "https://www.aprimo.com",
		description: "Aprimo is a United States-based company that develops and sells marketing automation software and digital asset management technology.",
		icon: "Aprimo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "aprimo:dom:0",
				kind: "dom",
				selector: "source[data-srcset*='/media/aprimo'], img[data-src*='/media/Aprimo'], img[src*='aprimo']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "aprimo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Aprimo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "artplayer-js",
		name: "Artplayer.js",
		website: "https://artplayer.org",
		description: "Artplayer.js is an HTML5 video player that supports customizable UI, subtitles, and plugins, offering a flexible and modern video playback solution.",
		icon: "Artplayer.js.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "artplayer-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "Artplayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "aryeo",
		name: "Aryeo",
		website: "https://www.aryeo.com",
		description: "Aryeo is an all-in-one platform designed to manage, deliver, and organize media for real estate photographers.",
		icon: "Aryeo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "aryeo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.aryeo\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "aryeo:pageGlobal:1",
				kind: "pageGlobal",
				property: "ARYEO_COMPANY_API_V1_BASE_URL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "aryeo:pageGlobal:2",
				kind: "pageGlobal",
				property: "ARYEO_ENVIRONMENT",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "asciinema",
		name: "Asciinema",
		website: "https://asciinema.org/",
		description: "Asciinema is a free and open-source solution for recording terminal sessions and sharing them on the web.",
		icon: "Asciinema.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "asciinema:html:0",
				kind: "html",
				pattern: new RegExp("<asciinema-player"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "asciinema:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("asciinema\\.org/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "asciinema:dom:2",
				kind: "dom",
				selector: "div.asciinema-player-wrapper",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "asciinema:dom:3",
				kind: "dom",
				selector: "div.asciinema-player",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "asciinema:pageGlobal:4",
				kind: "pageGlobal",
				property: "AsciinemaPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "asciinema:pageGlobal:5",
				kind: "pageGlobal",
				property: "asciinema",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "auglio",
		name: "Auglio",
		website: "https://auglio.com",
		description: "Auglio is a virtual try-on tool enabling customers to try products using camera and augmented reality before the purchase.",
		icon: "Auglio.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "auglio:pageGlobal:0",
				kind: "pageGlobal",
				property: "VirtooalApp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "auglio:pageGlobal:1",
				kind: "pageGlobal",
				property: "loadVirtooalScript",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "auglio:pageGlobal:2",
				kind: "pageGlobal",
				property: "virtooal_logger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "auglio:pageGlobal:3",
				kind: "pageGlobal",
				property: "virtooal_script_loaded",
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
		id: "ausha",
		name: "Ausha",
		website: "https://www.ausha.co",
		description: "Ausha is an all-in-one platform for hosting, distributing, and monetizing podcasts.",
		icon: "Ausha.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "ausha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.ausha\\.co"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "azuracast",
		name: "AzuraCast",
		website: "https://www.azuracast.com",
		description: "AzuraCast is an open-source self-hosted web radio station in a box.",
		icon: "AzuraCast.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "azuracast:dom:0",
				kind: "dom",
				selector: "link[href*='/public/azuratest_radio/']",
				description: "DOM selector matches a known technology marker."
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
		id: "bambuser",
		name: "Bambuser",
		website: "https://bambuser.com",
		description: "Bambuser is a SaaS company based in Stockholm that provides live video shopping technology.",
		icon: "Bambuser.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "bambuser:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bambuser\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bambuser:pageGlobal:1",
				kind: "pageGlobal",
				property: "BambuserLiveShopping",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bambuser:pageGlobal:2",
				kind: "pageGlobal",
				property: "_bambuser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "bigmarker",
		name: "BigMarker",
		website: "https://www.bigmarker.com",
		description: "BigMarker is a platform for hosting webinars, virtual, and hybrid events, providing tools for presentations, audience engagement, and event management in one solution.",
		icon: "BigMarker.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "bigmarker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bigmarker\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bigmarker:dom:1",
				kind: "dom",
				selector: "input[value*='.bigmarker.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "bigpoint",
		name: "BigPoint",
		website: "https://www.bigpoint.net",
		description: "BigPoint is a browser game portal that offers a collection of free online games.",
		icon: "BigPoint.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "bigpoint:dom:0",
				kind: "dom",
				selector: "form[action*='/Authentication/Bigpoint']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bigpoint:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Bigpoint GmbH"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "bitmovin",
		name: "Bitmovin",
		website: "https://bitmovin.com",
		description: "Bitmovin is a platform that enables live and on-demand video workflows, supporting video processing, delivery, and playback across different streaming environments.",
		icon: "Bitmovin.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "bitmovin:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bitmovin\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "bitmovin:pageGlobal:1",
				kind: "pageGlobal",
				property: "bitmovin.player",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "blinklink",
		name: "Blinklink",
		website: "https://blinklink.com",
		description: "Blinklink is a platform that offers enterprises AI-curated short-form video solutions.",
		icon: "Blinklink.svg",
		categories: [
			"media-video",
			"form-schema-library"
		],
		rules: [
			{
				id: "blinklink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.blinklink\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "blippa",
		name: "Blippa",
		website: "https://blippa.com",
		description: "Blippa is a platform for digital product passports, enabling no-code product lifecycle management and integration with smart services and data.",
		icon: "Blippa.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "blippa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("blippa\\.constants"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "blippa:responseHeader:1",
				kind: "responseHeader",
				key: "X-Servedby",
				valuePattern: new RegExp("^blippa1$"),
				description: "Response header matches a known technology marker."
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
		id: "bluestone-pim",
		name: "Bluestone PIM",
		website: "https://www.bluestonepim.com",
		description: "Bluestone PIM is primarily a product information management (PIM) solution, which is focused on managing and distributing product data across multiple channels. However, it also includes some features that are typically associated with digital asset management (DAM), such as the ability to manage and store product images, videos, and other digital assets.",
		icon: "Bluestone PIM.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "bluestone-pim:dom:0",
				kind: "dom",
				selector: "img[src*='media.bluestonepim.com/'], img[data-srcset*='media.bluestonepim.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "brandfolder",
		name: "Brandfolder",
		website: "https://brandfolder.com",
		description: "Brandfolder is a cloud-based digital asset management platform.",
		icon: "Brandfolder.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "brandfolder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.brandfolder\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brandfolder:pageGlobal:1",
				kind: "pageGlobal",
				property: "Brandfolder.account",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "brightcove",
		name: "Brightcove",
		website: "https://www.brightcove.com",
		description: "Brightcove is a cloud-based online video platform.",
		icon: "Brightcove.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "brightcove:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("players\\.brightcove\\.net/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "brightcove:dom:1",
				kind: "dom",
				selector: "iframe[src*='players.brightcove.'], link[href*='players.brightcove.']",
				description: "DOM selector matches a known technology marker."
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
		id: "bynder",
		name: "Bynder",
		website: "https://www.bynder.com",
		description: "Bynder is a cloud-based marketing platform where brands create, find, and use all their digital content.",
		icon: "Bynder.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "bynder:pageGlobal:0",
				kind: "pageGlobal",
				property: "Bynder.cloudfront",
				valuePattern: new RegExp("\\.cloudfront\\.net/frontend/([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bynder:cookie:1",
				kind: "cookie",
				key: "bynder",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "canto",
		name: "Canto",
		website: "https://www.canto.com",
		description: "Canto is a digital asset management solution.",
		icon: "Canto.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "canto:dom:0",
				kind: "dom",
				selector: "link[href*='.canto.com/'], a[href*='.canto.com/'], img[src*='.canto.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "celum",
		name: "Celum",
		website: "https://www.celum.com",
		description: "Celum is a software developer that specialises in enterprise digital asset management and marketing content management systems.",
		icon: "Celum.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "celum:dom:0",
				kind: "dom",
				selector: "img[src*='/celum/'], img[src*='/celum_assets/']",
				description: "DOM selector matches a known technology marker."
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
		id: "censhare",
		name: "Censhare",
		website: "https://www.censhare.com",
		description: "Censhare is a commercial digital experience platform in the form of an enterprise content management system.",
		icon: "Censhare.svg",
		categories: [
			"media-video",
			"form-schema-library"
		],
		rules: [
			{
				id: "censhare:dom:0",
				kind: "dom",
				selector: "img[data-src*='CENSHARE'], img[src*='CENSHARE']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "cleeng",
		name: "Cleeng",
		website: "https://cleeng.com",
		description: "Cleeng is a platform that enables the sale and protection of premium video content through access control and secure streaming features.",
		icon: "Cleeng.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "cleeng:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cleeng\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cleeng:pageGlobal:1",
				kind: "pageGlobal",
				property: "CleengApi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "cleeng:pageGlobal:2",
				kind: "pageGlobal",
				property: "cleengStatus",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "clipara",
		name: "Clipara",
		website: "https://www.getclipara.com",
		description: "Clipara is a platform that helps businesses connect with customers using video by adding video content to websites, emails, and SMS without coding.",
		icon: "Clipara.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "clipara:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getclipara\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "clipara:pageGlobal:1",
				kind: "pageGlobal",
				property: "__clipara",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "clipara:pageGlobal:2",
				kind: "pageGlobal",
				property: "cliparaCurrentUrl",
				description: "Page-owned global matches a known technology marker."
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
		id: "cloudflare-stream",
		name: "Cloudflare Stream",
		website: "https://www.cloudflare.com/products/cloudflare-stream",
		description: "Cloudflare Stream is a serverless live and on-demand video streaming platform.",
		icon: "CloudFlare.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "cloudflare-stream:dom:0",
				kind: "dom",
				selector: "iframe[src*='.cloudflarestream\\.com'], iframe[src*='iframe\\.videodelivery\\.net/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "collectiveaccess",
		name: "CollectiveAccess",
		website: "https://collectiveaccess.org",
		description: "CollectiveAccess is a free, open-source software for cataloguing and publishing museum and archival collections.",
		icon: "CollectiveAccess.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "collectiveaccess:cookie:0",
				kind: "cookie",
				key: "CA_collectiveaccess_ui_locale",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "collectiveaccess:cookie:1",
				kind: "cookie",
				key: "collectiveaccess",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "confer-with",
		name: "Confer With",
		website: "https://conferwith.io",
		description: "Confer With triggers live streaming video calls between shoppers and instore experts from a website, or outside a store.",
		icon: "Confer With.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "confer-with:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.conferwith\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "conviva",
		name: "Conviva",
		website: "https://www.conviva.com",
		description: "Conviva is a census, continuous measurement and engagement platform for streaming media.",
		icon: "conviva.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "conviva:pageGlobal:0",
				kind: "pageGlobal",
				property: "Conviva",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "conviva:pageGlobal:1",
				kind: "pageGlobal",
				property: "Conviva.Client",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "conviva:pageGlobal:2",
				kind: "pageGlobal",
				property: "Conviva.Client.version",
				valuePattern: new RegExp("^([0-9\\.]+)$"),
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
		id: "corebook",
		name: "Corebook",
		website: "https://www.corebook.io",
		description: "Corebook is a platform for brand guidelines, designed to assist creators of brilliant brands in managing their brand.",
		icon: "CoreBook.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "corebook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.corebook\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa",
				"onetime"
			]
		}
	},
	{
		id: "cylindo",
		name: "Cylindo",
		website: "https://www.cylindo.com",
		description: "Cylindo is a provider of automated content creation for 3D assets and photorealistic images, facilitating product visualization that can be utilized in various settings.",
		icon: "Cylindo.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "cylindo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("viewer-cdn\\.cylindo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "dailymotion",
		name: "Dailymotion",
		website: "https://www.dailymotion.com",
		description: "Dailymotion is a French video-sharing technology platform.",
		icon: "Dailymotion.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "dailymotion:dom:0",
				kind: "dom",
				selector: "img[data-src*='.dailymotion.com/'], iframe[scr*='.dailymotion.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "dailymotion:meta:1",
				kind: "meta",
				key: "name",
				valuePattern: new RegExp("dailymotion-domain-verification"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "deepar",
		name: "DeepAR",
		website: "https://www.deepar.ai",
		description: "DeepAR is SDK that integrates AR face filters, 3D masks, effects, and background removal into websites, apps, or games.",
		icon: "DeepAR.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "deepar:dom:0",
				kind: "dom",
				selector: "source[src*='demo.deepar.ai/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "delight-xr",
		name: "Delight XR",
		website: "https://delight-vr.com",
		description: "Delight XR is a video platform catering to regular, AR, and VR content with high-quality delivery.",
		icon: "DelightXR.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "delight-xr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.delight-vr\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "delight-xr:pageGlobal:1",
				kind: "pageGlobal",
				property: "DelightVR",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "digizuite",
		name: "Digizuite",
		website: "https://www.digizuite.com",
		description: "Digizuite is a Digital Asset Management software for enterprises.",
		icon: "Digizuite.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "digizuite:dom:0",
				kind: "dom",
				selector: "img[src^='/globalassets/digizuite/'], source[srcset^='/globalassets/digizuite/'], video[src^='/globalassets/digizuite/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "dplayer",
		name: "DPlayer",
		website: "https://dplayer.js.org",
		description: "DPlayer is an HTML 5 video player that supports pop-up.",
		icon: "DPlayer.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "dplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/dplayer\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dplayer:pageGlobal:1",
				kind: "pageGlobal",
				property: "DPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dplayer:pageGlobal:2",
				kind: "pageGlobal",
				property: "DPlayer.version",
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
		id: "dresson",
		name: "DressOn",
		website: "https://dresson.com.br",
		description: "DressOn is an AI-powered virtual fitting room that lets online shoppers try on clothes digitally.",
		icon: "DressOn.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "dresson:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.dresson\\.com\\.br/widget/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "dropbox",
		name: "Dropbox",
		website: "https://www.dropbox.com",
		icon: "Dropbox.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "dropbox:dns:0",
				kind: "dns",
				valuePattern: new RegExp("dropbox-domain-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:dropbox:dropbox:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "dyte",
		name: "Dyte",
		website: "https://dyte.io",
		description: "Dyte is a developer-friendly, real-time audio and video communication software development kit (SDK).",
		icon: "Dyte.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "dyte:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("cdn\\.dyte\\.in/"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "dyte:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.dyte-client-selfVideo"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "dyte:pageGlobal:2",
				kind: "pageGlobal",
				property: "triggerDyteRecording",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"webrtc"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "easywebinar",
		name: "EasyWebinar",
		website: "https://easywebinar.com",
		description: "EasyWebinar is a webinar platform designed for marketing and growing businesses.",
		icon: "EasyWebinar.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "easywebinar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easywebinar\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "expivi",
		name: "Expivi",
		website: "https://www.expivi.com",
		description: "Expivi specialises in 3D visualisation technology for ecommerce stores.",
		icon: "Expivi.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "expivi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.expivi\\.(?:com|net)/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "expivi:dom:1",
				kind: "dom",
				selector: "iframe[src*='.expivi.net/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "expivi:pageGlobal:2",
				kind: "pageGlobal",
				property: "ExpiviComponent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "expivi:pageGlobal:3",
				kind: "pageGlobal",
				property: "expivi",
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
		id: "firework",
		name: "Firework",
		website: "https://firework.com",
		description: "Firework is a video commerce solution for brands, retailers, and publishers, enhancing digital storefronts with interactive livestream and shoppable video features.",
		icon: "Firework.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "firework:pageGlobal:0",
				kind: "pageGlobal",
				property: "_fwn",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "firework:pageGlobal:1",
				kind: "pageGlobal",
				property: "_fwnPerformance",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "firework:pageGlobal:2",
				kind: "pageGlobal",
				property: "fwnPolyfillPromise",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "fittingbox",
		name: "Fittingbox",
		website: "https://www.fittingbox.com",
		description: "Fittingbox is a software provider of augmented reality and 3D solutions designed for the eyewear industry.",
		icon: "Fittingbox.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "fittingbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fittingbox\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fittingbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "FitMix",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fleeq",
		name: "Fleeq",
		website: "https://www.fleeq.io",
		description: "Fleeq is a platform facilitating the creation of training videos, followed by tracking, embedding, optimization, localization, and sharing capabilities.",
		icon: "Fleeq.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "fleeq:pageGlobal:0",
				kind: "pageGlobal",
				property: "FleeqSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:pageGlobal:1",
				kind: "pageGlobal",
				property: "FleeqSDKLight",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:pageGlobal:2",
				kind: "pageGlobal",
				property: "_fleeqBarSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:pageGlobal:3",
				kind: "pageGlobal",
				property: "_fleeqData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:pageGlobal:4",
				kind: "pageGlobal",
				property: "_fleeqWiki",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:pageGlobal:5",
				kind: "pageGlobal",
				property: "fleeqBarConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fleeq:cookie:6",
				kind: "cookie",
				key: "__FLEEQ",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "floori",
		name: "Floori",
		website: "https://floori.io",
		description: "Floori is an online tool designed to help users visualize different types of flooring in their home.",
		icon: "Floori.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "floori:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunkfloori",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "flowplayer",
		name: "Flowplayer",
		website: "https://flowplayer.com",
		description: "Flowplayer is a scalable, performance-first HTML 5 video player and platform hosting solution for publishers, broadcasters and digital media.",
		icon: "Flowplayer.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "flowplayer:pageGlobal:0",
				kind: "pageGlobal",
				property: "flowplayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flowplayer:pageGlobal:1",
				kind: "pageGlobal",
				property: "flowplayer.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
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
		id: "fluid-player",
		name: "Fluid Player",
		website: "https://www.fluidplayer.com",
		description: "Fluid Player is an open-source HTML5 video player.",
		icon: "FluidPlayer.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "fluid-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fluidplayer\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fluid-player:pageGlobal:1",
				kind: "pageGlobal",
				property: "fluidPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fluid-player:pageGlobal:2",
				kind: "pageGlobal",
				property: "webpackChunkfluid_player",
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
		id: "frontify",
		name: "Frontify",
		website: "https://www.frontify.com",
		description: "Frontify is a cloud-based brand management platform for creators and collaborators of brands.",
		icon: "Frontify.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "frontify:dom:0",
				kind: "dom",
				selector: "a[href*='.frontify.com/'], img[src*='.frontify.com/'], link[href*='.frontify.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "frontify:responseHeader:1",
				kind: "responseHeader",
				key: "server",
				valuePattern: new RegExp("^frontify$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "go-instore",
		name: "Go Instore",
		website: "https://goinstore.com",
		description: "Go Instore uses high-definition live video to connect online customers with in-store product experts.",
		icon: "Go Instore.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "go-instore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//gis\\.goinstore\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "go-instore:pageGlobal:1",
				kind: "pageGlobal",
				property: "GISAPP.videoJsCtrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "go-instore:pageGlobal:2",
				kind: "pageGlobal",
				property: "gisAppLib.postRobot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "go-instore:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.goinstore\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "graphicsflow",
		name: "GraphicsFlow",
		website: "https://www.graphicsflow.com",
		description: "GraphicsFlow is an online tool that enables print shops to create, manage, and approve customer artwork.",
		icon: "GraphicsFlow.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "graphicsflow:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.graphicsflow.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "graphicsflow:responseHeader:1",
				kind: "responseHeader",
				key: "Set-Cookie",
				valuePattern: new RegExp("graphicsflowprodapi\\.azurewebsites\\.net"),
				description: "Response header matches a known technology marker."
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
		id: "hero",
		name: "Hero",
		website: "https://www.usehero.com/",
		description: "Hero is a virtual shopping platform for ecommerce and retail stores.",
		icon: "Hero.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "hero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usehero\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hero:pageGlobal:1",
				kind: "pageGlobal",
				property: "HeroWebPluginSettings",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"cart-functionality"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "heysummit",
		name: "HeySummit",
		website: "https://heysummit.com",
		description: "HeySummit is a platform facilitating the organization of virtual summits.",
		icon: "HeySummit.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "heysummit:pageGlobal:0",
				kind: "pageGlobal",
				property: "heySummitAnimationItems",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:pageGlobal:1",
				kind: "pageGlobal",
				property: "prepHeySummitAnimationParent",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:pageGlobal:2",
				kind: "pageGlobal",
				property: "resetHeySummitAnimation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:pageGlobal:3",
				kind: "pageGlobal",
				property: "startHeySummitAnimation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:pageGlobal:4",
				kind: "pageGlobal",
				property: "startHeySummitAnimationLoadTop",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:pageGlobal:5",
				kind: "pageGlobal",
				property: "stopHeySummitAnimation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "heysummit:meta:6",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^HeySummit$"),
				description: "Meta tag matches a known technology marker."
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
		id: "image-relay",
		name: "Image Relay",
		website: "https://www.imagerelay.com",
		description: "Image Relay is a digital asset management system that allows organizations to upload, manage, organize, monitor and track their digital assets.",
		icon: "Image Relay.svg",
		categories: [
			"media-video",
			"api-pattern"
		],
		rules: [
			{
				id: "image-relay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.imagerelay\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "image-relay:dom:1",
				kind: "dom",
				selector: "a[href*='.imagerelay.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "image-relay:pageGlobal:2",
				kind: "pageGlobal",
				property: "ImageRelay.accounts",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "inplayer",
		name: "Inplayer",
		website: "https://inplayer.com",
		description: "Inplayer is a platform that enables video streaming at scale, supports audience expansion across devices, and provides tools for content monetization.",
		icon: "Inplayer.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "inplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.inplayer\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ipaper",
		name: "iPaper",
		website: "https://www.ipaper.io",
		description: "iPaper is a platform that converts printed materials into interactive digital catalogs designed to enhance customer engagement and support sales.",
		icon: "iPaper.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "ipaper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embeds\\.ipaper\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ipaper:pageGlobal:1",
				kind: "pageGlobal",
				property: "iPaper.API",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ipaper:pageGlobal:2",
				kind: "pageGlobal",
				property: "iPaperDebugger",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "jplayer",
		name: "jPlayer",
		website: "https://jplayer.org",
		description: "jPlayer is a cross-browser JavaScript library developed as a jQuery plugin which facilitates the embedding of web based media, notably HTML5 audio and video in addition to Adobe Flash based media.",
		icon: "jPlayer.svg",
		categories: [
			"media-video",
			"developer-tooling"
		],
		rules: [
			{
				id: "jplayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.jplayer\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jplayer:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("jquery\\.jplayer\\.min\\.js"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "jplayer:pageGlobal:2",
				kind: "pageGlobal",
				property: "jPlayerPlaylist",
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
		id: "jw-player",
		name: "JW Player",
		website: "https://www.jwplayer.com",
		description: "JW Player is a online video player with video engagement analytics, custom video player skins, and live video streaming capability.",
		icon: "JW Player.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "jw-player:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jwplayer\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jw-player:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jwpcdn\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jw-player:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("\\.jwpsrv\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "jw-player:dom:3",
				kind: "dom",
				selector: "div[data-video-provider*=jwplayer]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "jw-player:dom:4",
				kind: "dom",
				selector: "div[class^='jwplayer']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "jw-player:pageGlobal:5",
				kind: "pageGlobal",
				property: "jwDefaults",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jw-player:pageGlobal:6",
				kind: "pageGlobal",
				property: "jwplayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jw-player:pageGlobal:7",
				kind: "pageGlobal",
				property: "jwplayerApiUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jw-player:pageGlobal:8",
				kind: "pageGlobal",
				property: "webpackJsonpjwplayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"low",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "kaltura",
		name: "Kaltura",
		website: "https://corp.kaltura.com",
		description: "Kaltura is a video content management platform that allows users to upload, manage, share, publish, and stream videos.",
		icon: "Kaltura.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "kaltura:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.kaltura\\.(?:nordu\\.net|com)/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kaltura:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("kalturaPlayer"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "kaltura:dom:2",
				kind: "dom",
				selector: "link[href*='.kaltura.com'], div.kaltura-zone",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kaltura:pageGlobal:3",
				kind: "pageGlobal",
				property: "Kplayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kaltura:pageGlobal:4",
				kind: "pageGlobal",
				property: "kGetKalturaEmbedSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kaltura:pageGlobal:5",
				kind: "pageGlobal",
				property: "kGetKalturaPlayerList",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kaltura:pageGlobal:6",
				kind: "pageGlobal",
				property: "kalturaIframeEmbed",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "kaltura:pageGlobal:7",
				kind: "pageGlobal",
				property: "restoreKalturaKDPCallback",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "keep-archeevo",
		name: "keep. archeevo",
		website: "https://www.keep.pt/en/produts/archeevo-archival-management-software",
		description: "keep. archeevo is an archival management software that aims to support all the functional areas of an archival institution, covering activities ranging from archival description to employee performance assessment.",
		icon: "keep. archeevo.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "keep-archeevo:pageGlobal:0",
				kind: "pageGlobal",
				property: "ArcheevoSnippets.mostviewedDocumentsURL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "keep-archeevo:pageGlobal:1",
				kind: "pageGlobal",
				property: "embedArcheevoBasicSearch",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "klarna-virtual-shopping",
		name: "Klarna Virtual Shopping",
		website: "https://www.klarna.com/us/business/marketing-solutions/",
		description: "Klarna Virtual Shopping is a service that allows online shoppers to interact with in-store retail experts via live chats and video calls, providing real-time advice and product demonstrations to enhance the online shopping experience.",
		icon: "Klarna.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "klarna-virtual-shopping:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usehero\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "klarna-virtual-shopping:pageGlobal:1",
				kind: "pageGlobal",
				property: "HeroWebPluginSettings",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"cart-functionality"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "levar",
		name: "Levar",
		website: "https://levar.io",
		description: "Levar specialises in 3D visualisation technology for ecommerce stores.",
		icon: "Levar.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "levar:pageGlobal:0",
				kind: "pageGlobal",
				property: "levARActivationHelper",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "levar:pageGlobal:1",
				kind: "pageGlobal",
				property: "levar.session_info",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "levar:pageGlobal:2",
				kind: "pageGlobal",
				property: "levar_onload_variant_id",
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
		id: "loom",
		name: "Loom",
		website: "https://www.loom.com",
		icon: "Loom.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "loom:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("loom\\.com/api"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "loom:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("luna\\.loom\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "loom:dns:2",
				kind: "dns",
				valuePattern: new RegExp("loom-verification"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "luna",
		name: "Luna",
		website: "https://luna.io",
		description: "Luna is a company that sells software that aids eyewear companies sell their products online using virtual fitting.",
		icon: "Luna.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "luna:dom:0",
				kind: "dom",
				selector: "link[href*='bsdk.api.ditto.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "luna:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ditto.__esModule",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luna:pageGlobal:2",
				kind: "pageGlobal",
				property: "dittoIdLifetime",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luna:pageGlobal:3",
				kind: "pageGlobal",
				property: "globalDittoKey",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luna:pageGlobal:4",
				kind: "pageGlobal",
				property: "globalDittoServer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luna:pageGlobal:5",
				kind: "pageGlobal",
				property: "jstextmap.DittoSdkUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "luna:responseHeader:6",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("bsdk\\.api\\.ditto.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "magisto",
		name: "Magisto",
		website: "https://www.magisto.com",
		description: "Magisto is a video management solution designed to help marketing professionals, agencies, and businesses of all sizes.",
		icon: "Magisto.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "magisto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.magisto\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "magisto:pageGlobal:1",
				kind: "pageGlobal",
				property: "MagistoPlayerFrame",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "magisto:pageGlobal:2",
				kind: "pageGlobal",
				property: "magisto_server",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "mediaelement-js",
		name: "MediaElement.js",
		website: "https://www.mediaelementjs.com",
		description: "MediaElement.js is a set of custom Flash plugins that mimic the HTML5 MediaElement API for browsers that don't support HTML5 or don't support the media codecs.",
		icon: "MediaElement.js.svg",
		categories: [
			"media-video",
			"api-pattern"
		],
		rules: [
			{
				id: "mediaelement-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "mejs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mediaelement-js:pageGlobal:1",
				kind: "pageGlobal",
				property: "mejs.version",
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
		id: "mediaplatform",
		name: "MediaPlatform",
		website: "https://www.mediaplatform.com",
		description: "MediaPlatform is enterprise video and webcasting software designed for corporate communications.",
		icon: "MediaPlatform.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "mediaplatform:pageGlobal:0",
				kind: "pageGlobal",
				property: "mediaPlatformLoginUrl",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mirador",
		name: "Mirador",
		website: "https://www.miradortech.com",
		description: "Mirador is a platform designed to enhance customer acquisition, streamline digital loan applications, and enable intelligent product routing and digitization.",
		icon: "Mirador.svg",
		categories: [
			"media-video",
			"router"
		],
		rules: [
			{
				id: "mirador:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.miradorfin\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mirrar",
		name: "mirrAR",
		website: "https://www.mirrar.com",
		description: "mirrAR is a real-time augmented reality platform for retail brands that enables consumers to virtually try on products and experience how it feels to own them before the actual purchase, both in-store and online.",
		icon: "mirrAR.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "mirrar:pageGlobal:0",
				kind: "pageGlobal",
				property: "initMirrarUI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mirrar:pageGlobal:1",
				kind: "pageGlobal",
				property: "loadmirrAR",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "modelo",
		name: "Modelo",
		website: "https://modelo.io",
		description: "Modelo is a 3D viewer and model platform that allows users to edit, share, and collaborate on digital models.",
		icon: "Modelo.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "modelo:pageGlobal:0",
				kind: "pageGlobal",
				property: "@pub/modelo-site-cmty-micros-common-dialogs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "modelo:pageGlobal:1",
				kind: "pageGlobal",
				property: "ModeloCommonDialogs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "modelo:meta:2",
				kind: "meta",
				key: "feBu",
				valuePattern: new RegExp("^modelo-site-cmty-home$"),
				description: "Meta tag matches a known technology marker."
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
		id: "modiface",
		name: "ModiFace",
		website: "https://modiface.com",
		description: "ModiFace is a provider of Augmented Reality technology for the beauty industry.",
		icon: "ModiFace.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "modiface:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.modiface\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "modiface:dom:1",
				kind: "dom",
				selector: "iframe[src*='.modiface.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "modiface:pageGlobal:2",
				kind: "pageGlobal",
				property: "initModiface",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "modiface:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.modiface\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "muvi",
		name: "Muvi",
		website: "https://www.muvi.com",
		description: "Muvi is a SaaS-based provider of over-the-top (OTT) platform solutions for video streaming, offering end-to-end infrastructure for content delivery and monetization.",
		icon: "Muvi.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "muvi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.muvi\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "muvi:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("www\\.muvi\\.com"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "muvi:meta:2",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("www\\.muvi\\.com"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "nextcloud",
		name: "Nextcloud",
		website: "https://nextcloud.com",
		description: "Nextcloud is a suite of client-server software for creating and using file hosting services.",
		icon: "Nextcloud.svg",
		categories: [
			"media-video",
			"widgets-misc"
		],
		rules: [
			{
				id: "nextcloud:pageGlobal:0",
				kind: "pageGlobal",
				property: "oc_config.version",
				valuePattern: new RegExp("^([\\.\\d]+)$"),
				confidence: 0,
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nextcloud:cookie:1",
				kind: "cookie",
				key: "__Host-nc_sameSiteCookielax",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "nextcloud:cookie:2",
				kind: "cookie",
				key: "__Host-nc_sameSiteCookiestrict",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"payg",
				"recurring"
			],
			cpe: "cpe:2.3:a:nextcloud:nextcloud:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ocuco-fitmix",
		name: "Ocuco FitMix",
		website: "https://www.ocuco.com/fitmix",
		description: "Ocuco is now offering its customers FittingBox's FitMix, a virtual frame try-on tool.",
		icon: "Ocuco.png",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "ocuco-fitmix:pageGlobal:0",
				kind: "pageGlobal",
				property: "FitMix.WIDGET_BASE_URL",
				valuePattern: new RegExp("static\\.fittingbox\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "ocular",
		name: "Ocular",
		website: "https://ocularsolution.com/",
		description: "Ocular is a video ecommerce and live commerce platform facilitating transactions and shopping experiences through live broadcasts and interactive features.",
		icon: "Ocular.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "ocular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.ocularsolution\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "odeum",
		name: "Odeum",
		website: "https://odeum.io",
		description: "Odeum is a SaaS platform for creating a video-based subscription service including a completely branded website & set of apps.",
		icon: "Odeum.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "odeum:pageGlobal:0",
				kind: "pageGlobal",
				property: "OdeumAccount",
				description: "Page-owned global matches a known technology marker."
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
		id: "optimole",
		name: "Optimole",
		website: "https://optimole.com",
		description: "Optimole is a cloud-based platform that provides media optimization, real-time image transformations, and digital asset management for improved website performance and delivery.",
		icon: "Optimole.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "optimole:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.i\\.optimole\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "optimole:pageGlobal:1",
				kind: "pageGlobal",
				property: "optimoleData",
				description: "Page-owned global matches a known technology marker."
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
		id: "panda-video",
		name: "Panda Video",
		website: "https://pandavideo.com",
		description: "Panda Video is a video hosting platform that provide streaming, engages viewers, and supports sales growth.",
		icon: "PandaVideo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "panda-video:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.tv\\.pandavideo\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "panda-video:dom:1",
				kind: "dom",
				selector: "iframe[src*='tv.pandavideo.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "panda-video:pageGlobal:2",
				kind: "pageGlobal",
				property: "pandaLoad",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "panda-video:pageGlobal:3",
				kind: "pageGlobal",
				property: "pandatag",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "perfect-corp",
		name: "Perfect Corp",
		website: "https://www.perfectcorp.com/business",
		description: "Perfect Corp is a beauty augmented reality company and makeup AR technology platform that develops virtual try-on solutions for cosmetics brands.",
		icon: "PerfectCorp.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "perfect-corp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins-media\\.perfectcorp\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "photoshelter-for-brands",
		name: "PhotoShelter for Brands",
		website: "https://brands.photoshelter.com",
		description: "PhotoShelter for Brands is a cloud-based media management system for companies and organizations.",
		icon: "PhotoShelter.svg",
		categories: [
			"media-video"
		],
		rules: [],
		excludes: [
			"photoshelter"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "picturepark",
		name: "Picturepark",
		website: "https://picturepark.com",
		description: "Picturepark is designed to facilitate your DAM policies by storing, tagging, searching and delivering files in an automated and controlled way.",
		icon: "Picturepark.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "picturepark:dom:0",
				kind: "dom",
				selector: "img[data-name*='Picturepark'], img[data-srcset*='picturepark'], div[style*='picturepark'], source[srcset*='picturepark']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "picturepark:pageGlobal:1",
				kind: "pageGlobal",
				property: "pictureparkConfiguration",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "plattar",
		name: "Plattar",
		website: "https://www.plattar.com",
		description: "Plattar is a 3D and augmented reality platform for businesses that facilitates product customization to help retailers increase sales and reduce returns.",
		icon: "Plattar.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "plattar:pageGlobal:0",
				kind: "pageGlobal",
				property: "PlattarARAdapter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "plaza",
		name: "Plaza",
		website: "https://www.useplaza.com",
		description: "Plaza is a ecommerce platform that allows brands and retailers to communicate with customers via live video.",
		icon: "Plaza.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "plaza:dom:0",
				kind: "dom",
				selector: "iframe[src*='stream.useplaza.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "plyr",
		name: "Plyr",
		website: "https://plyr.io",
		description: "Plyr is a simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers.",
		icon: "Plyr.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "plyr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.plyr\\.io/([0-9.]+)/.+\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plyr:stylesheetContent:1",
				kind: "stylesheetContent",
				pattern: new RegExp("--plyr-progress"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "plyr:pageGlobal:2",
				kind: "pageGlobal",
				property: "Plyr",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "plytix",
		name: "Plytix",
		website: "https://www.plytix.com",
		description: "Plytix is an AI-powered product information management platform that provides tools for managing and organizing product content.",
		icon: "Plytix.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "plytix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("analytics\\.plytix\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "plytix:pageGlobal:1",
				kind: "pageGlobal",
				property: "PlytixAnalyticsObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "presto-player",
		name: "Presto Player",
		website: "https://prestoplayer.com",
		description: "Presto Player is a WordPress plugin designed for embedding optimised video and audio on WordPress websites.",
		icon: "PrestoPlayer.svg",
		categories: [
			"media-video",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "presto-player:pageGlobal:0",
				kind: "pageGlobal",
				property: "prestoComponents",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "presto-player:pageGlobal:1",
				kind: "pageGlobal",
				property: "prestoPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "presto-player:pageGlobal:2",
				kind: "pageGlobal",
				property: "prestoPlayer.proVersion",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "prime-ai",
		name: "Prime AI",
		website: "https://www.primeai.co.uk",
		description: "Prime AI is a platform that uses AI-powered technology to match customers' body shapes with garment SKU specifications, helping them choose the best-fitting clothing size.",
		icon: "PrimeAI.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "prime-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.primeai\\.co\\.uk"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "remotion",
		name: "Remotion",
		website: "https://remotion.dev",
		description: "Remotion is a software tool that enables the creation of videos through React programming.",
		icon: "Remotion.svg",
		categories: [
			"media-video",
			"ui-library"
		],
		rules: [
			{
				id: "remotion:pageGlobal:0",
				kind: "pageGlobal",
				property: "remotion_imported",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "remotion:pageGlobal:1",
				kind: "pageGlobal",
				property: "remotion_renderReady",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"react"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "ruffle",
		name: "Ruffle",
		website: "https://ruffle.rs",
		description: "Ruffle is an open-source Flash Player emulator that allows users to view and play Flash content on modern web browsers without requiring the original Adobe Flash Player.",
		icon: "Ruffle.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "ruffle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("[\\/@]?ruffle(?:-rs)?/ruffle\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ruffle:pageGlobal:1",
				kind: "pageGlobal",
				property: "RufflePlayer.config",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rumble",
		name: "Rumble",
		website: "https://rumble.com",
		description: "Rumble is a Canadian video-streaming platform that presents itself as an alternative to YouTube.",
		icon: "Rumble.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "rumble:dom:0",
				kind: "dom",
				selector: "iframe[src*='//rumble.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "rumble:pageGlobal:1",
				kind: "pageGlobal",
				property: "Rumble.gdpr",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "rumble:pageGlobal:2",
				kind: "pageGlobal",
				property: "Rumble.resize",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "salsify",
		name: "Salsify",
		website: "https://www.salsify.com",
		description: "Salsify is a product experience management platform which connects digital asset management, content syndication, and digital catalog capabilities.",
		icon: "Salsify.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "salsify:dom:0",
				kind: "dom",
				selector: "a[href*='.salsify.com/'][target='_blank'], img[data-src*='images.salsify.com/'], link[href*='.salsify.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "salsify:pageGlobal:1",
				kind: "pageGlobal",
				property: "salsify_vars",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "sardius-media",
		name: "Sardius Media",
		website: "https://www.sardius.media",
		description: "Sardius Media is a platform focused on streamlining broadcast workflows by developing solutions that improve efficiency, organization, and content delivery across digital media platforms.",
		icon: "Sardius.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "sardius-media:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sardiuslive\\.sardius\\.media"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sardius-media:pageGlobal:1",
				kind: "pageGlobal",
				property: "sardius.libs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "shaka-player",
		name: "Shaka Player",
		website: "https://github.com/shaka-project/shaka-player",
		description: "Shaka Player is an open-source JavaScript library for adaptive media.",
		icon: "Shaka Player.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "shaka-player:pageGlobal:0",
				kind: "pageGlobal",
				property: "shaka.Player.version",
				valuePattern: new RegExp("v([\\d\\.\\-\\w]+)"),
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
		id: "sightcall",
		name: "SightCall",
		website: "https://sightcall.com",
		description: "SightCall is a platform that provides real-time AR and AI-powered guidance to help service teams resolve issues quicker.",
		icon: "SightCall.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "sightcall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sightcall\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sightcall:pageGlobal:1",
				kind: "pageGlobal",
				property: "SightcallConsole",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sublimevideo",
		name: "SublimeVideo",
		website: "https://sublimevideo.net",
		description: "SublimeVideo is a framework for HTML5 Video Player.",
		icon: "SublimeVideo.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "sublimevideo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.sublimevideo\\.net/js/[a-z\\d]+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sublimevideo:pageGlobal:1",
				kind: "pageGlobal",
				property: "sublimevideo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "syncle",
		name: "Syncle",
		website: "https://syncle.com",
		description: "Syncle is a tool that automatically integrates relevant product video reviews from YouTube into online shops.",
		icon: "Syncle.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "syncle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.videoly\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "syncle:pageGlobal:1",
				kind: "pageGlobal",
				property: "VideolyWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tangiblee",
		name: "Tangiblee",
		website: "https://www.tangiblee.com",
		description: "Tangiblee is an enterprise-ready, immersive shopping and augmented reality ecommerce platform.",
		icon: "Tangiblee.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "tangiblee:pageGlobal:0",
				kind: "pageGlobal",
				property: "globalTangiblee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tangiblee:pageGlobal:1",
				kind: "pageGlobal",
				property: "tangiblee",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tangiblee:pageGlobal:2",
				kind: "pageGlobal",
				property: "tangibleeScriptLoaded",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tanx",
		name: "Tanx",
		website: "https://tanx.com",
		description: "Tanx is a platform for media resource management and business-cooperation workflows.",
		icon: "Tanx.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "tanx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tanx\\.co."),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tanx:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tanx\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "thera-link",
		name: "thera-LINK",
		website: "https://www.thera-link.com",
		description: "Thera Link is a telehealth video platform designed to facilitate secure virtual sessions between mental health professionals and clients.",
		icon: "TheraLink.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "thera-link:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.thera-link\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "thera-link:dom:1",
				kind: "dom",
				selector: "div[data-items-type-array*='app.thera-link.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "threekit",
		name: "Threekit",
		website: "https://www.threekit.com",
		description: "Threekit is a visual customer experience solution that enables brands to create, manage and scale photorealistic images and 3D product visuals, all from a single design file.",
		icon: "Threekit.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "threekit:pageGlobal:0",
				kind: "pageGlobal",
				property: "threekit.configuratorForm",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "threekit:pageGlobal:1",
				kind: "pageGlobal",
				property: "threekitAR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "threekit:pageGlobal:2",
				kind: "pageGlobal",
				property: "threekitPlayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "thridify",
		name: "Thridify",
		website: "https://www.thridify.store",
		description: "Thirdify is a tool that enables businesses to convert browsers into buyers using 3D and AR technologies, with no app installation or coding required.",
		icon: "Thridify.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "thridify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.thridify\\.store"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "thridify:pageGlobal:1",
				kind: "pageGlobal",
				property: "getThridifyFrame",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "thridify:pageGlobal:2",
				kind: "pageGlobal",
				property: "thridifyData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "thridify:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("thridify\\.com"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "thron",
		name: "THRON",
		website: "https://www.thron.com",
		description: "THRON is a digital asset management platform that provides a centralised hub for storing, organising, and distributing digital assets like images, videos, and documents.",
		icon: "THRON.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "thron:dom:0",
				kind: "dom",
				selector: "link[href*='.thron.com/'], img[src*='.thron.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "thron:pageGlobal:1",
				kind: "pageGlobal",
				property: "THRONPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "thron:pageGlobal:2",
				kind: "pageGlobal",
				property: "thronHlsJs",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "transloadit",
		name: "Transloadit",
		website: "https://transloadit.com",
		description: "Transloadit is a service for file uploading, conversion, and processing across various formats.",
		icon: "Transloadit.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "transloadit:dom:0",
				kind: "dom",
				selector: "link[href*='transloadit.edgly.net/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			],
			cpe: "cpe:2.3:a:transloadit:uppy:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "trovo",
		name: "Trovo",
		website: "https://trovo.live",
		description: "Trovo is a platform for live streaming and connecting with others through gaming, music, and other interactive content.",
		icon: "Trovo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "trovo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tag\\.trovo-tag\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "twitch-player",
		name: "Twitch Player",
		website: "https://dev.twitch.tv/docs/embed/video-and-clips/",
		description: "Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions.",
		icon: "Twitch.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "twitch-player:dom:0",
				kind: "dom",
				selector: "iframe[src*='player\\.twitch\\.tv']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "twitch-player:pageGlobal:1",
				kind: "pageGlobal",
				property: "Twitch.Embed",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "twitch-player:pageGlobal:2",
				kind: "pageGlobal",
				property: "twitchPlayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "uplynk",
		name: "Uplynk",
		website: "https://www.uplynk.com",
		description: "Uplynk is a video streaming platform that provides tools for live and on-demand video delivery, including encoding, transcoding, and content management.",
		icon: "Uplynk.svg",
		categories: [
			"media-video",
			"server-runtime-infra"
		],
		rules: [
			{
				id: "uplynk:dom:0",
				kind: "dom",
				selector: "video[src*='.uplynk.com/'], img[data-thumbnailurl*='.uplynk.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "uplynk:pageGlobal:1",
				kind: "pageGlobal",
				property: "UPLYNK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "uplynk:pageGlobal:2",
				kind: "pageGlobal",
				property: "_uplynk_async_wget2_data",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "uplynk:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.uplynk\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg",
				"recurring",
				"high"
			]
		}
	},
	{
		id: "uscreen",
		name: "Uscreen",
		website: "https://uscreen.tv/",
		description: "Uscreen is a CMS to monetize VOD and live content. They provide site hosting, video hosting, and a payment gateway for selling video based content.",
		icon: "Uscreen.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "uscreen:pageGlobal:1",
				kind: "pageGlobal",
				property: "analyticsHost",
				valuePattern: new RegExp("stats\\.uscreen\\.io"),
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
		id: "vectary",
		name: "Vectary",
		website: "https://www.vectary.com",
		description: "Vectary is fully-featured 3D modeling tool with photorealistic real-time rendering, augmented reality, interactions and animations.",
		icon: "vectary.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "vectary:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.vectary.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "vestico",
		name: "Vestico",
		website: "https://vestico.co",
		description: "Vestico is a digital asset management platform for organizing, managing, and distributing digital content.",
		icon: "Vestico.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "vestico:pageGlobal:0",
				kind: "pageGlobal",
				property: "vesticoReportingDisabled",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vestico:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunk_vestico_widget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa"
			]
		}
	},
	{
		id: "videojs",
		name: "VideoJS",
		website: "https://videojs.com",
		description: "Video.js is a JavaScript and CSS library that makes it easier to work with and build on HTML5 video.",
		icon: "VideoJS.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "videojs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zencdn\\.net/c/video\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "videojs:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/video\\.js\\/([\\d\\.]+)\\/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
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
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "videojs:pageGlobal:5",
				kind: "pageGlobal",
				property: "VideoJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "videojs:pageGlobal:6",
				kind: "pageGlobal",
				property: "videojs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "videojs:pageGlobal:7",
				kind: "pageGlobal",
				property: "videojs.VERSION",
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
		id: "videoly",
		name: "Videoly",
		website: "https://videoly.co",
		description: "Videoly is a tool that automatically integrates relevant product video reviews from YouTube into online shops.",
		icon: "Videoly.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "videoly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.videoly\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "videoly:pageGlobal:1",
				kind: "pageGlobal",
				property: "VideolyWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "videoo-tv",
		name: "Videoo.tv",
		website: "https://videoo.tv",
		description: "Videoo.tv is a platform that enhances website performance and user experience through innovative video and display formats, offering advanced tools to maximize revenue generation.",
		icon: "VideooTv.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "videoo-tv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.videoo\\.tv"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "videoo-tv:pageGlobal:1",
				kind: "pageGlobal",
				property: "videooTVCtrlLoaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "videoo-tv:pageGlobal:2",
				kind: "pageGlobal",
				property: "videootv",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vidjet",
		name: "Vidjet",
		website: "https://www.vidjet.com",
		description: "Vidjet is a shoppable-video platform designed for modern ecommerce stores, allowing videos to be embedded on websites and triggered based on visitor actions.",
		icon: "Vidjet.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "vidjet:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app-api\\.vidjet\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "vidjet:pageGlobal:1",
				kind: "pageGlobal",
				property: "Vidjet.init",
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
		id: "vidscrip",
		name: "Vidscrip",
		website: "https://studio.vidscrip.com",
		description: "Vidscrip is a digital platform that enables physicians to communicate with patients through personalized video content, enhancing patient engagement and improving care coordination.",
		icon: "Vidscrip.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "vidscrip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.vidscrip\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vidscrip:pageGlobal:1",
				kind: "pageGlobal",
				property: "addVidscripWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "viloud",
		name: "Viloud",
		website: "https://viloud.tv",
		description: "Viloud is a platform that enables the creation of online TV channels for brands, allowing scheduled or on-demand content streaming.",
		icon: "Viloud.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "viloud:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.viloud\\.tv"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "viloud:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.viloud.tv/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "vimeo",
		name: "Vimeo",
		website: "https://vimeo.com",
		description: "Vimeo is a video hosting, sharing and services platform. Vimeo operation an ad-free basis by providing subscription plans.",
		icon: "Vimeo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "vimeo:dom:0",
				kind: "dom",
				selector: "iframe[src*='vimeo.com'],embed[src*='vimeo.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vimeo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Vimeo.Player",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vimeo:pageGlobal:2",
				kind: "pageGlobal",
				property: "VimeoPlayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vimeo-ott",
		name: "Vimeo OTT",
		website: "https://vimeo.com/ott",
		description: "Vimeo OTT allows brands and creators to launch their own white-label video subscription channels, where subscribers can access video content for free, as a rental, or for purchase.",
		icon: "Vimeo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "vimeo-ott:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("api\\.vhx\\.tv"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "vimeo-ott:pageGlobal:1",
				kind: "pageGlobal",
				property: "VHX.config",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vimeo-ott:pageGlobal:2",
				kind: "pageGlobal",
				property: "_vhx",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"vimeo"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"mid"
			]
		}
	},
	{
		id: "viqeo",
		name: "Viqeo",
		website: "https://viqeo.tv",
		description: "Viqeo is a short video platform to make media and ecommerce more visual and interesting.",
		icon: "Viqeo.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "viqeo:pageGlobal:0",
				kind: "pageGlobal",
				property: "VIQEO",
				description: "Page-owned global matches a known technology marker."
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
		id: "virtooal",
		name: "Virtooal",
		website: "https://try.virtooal.com",
		description: "Virtooal allows shoppers to try on and combine decorative cosmetics, sunglasses, contact lenses, jewellery and fashion accessories using models, their own photo or a live webcam feed.",
		icon: "Virtooal.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "virtooal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.virtooal\\.com/"),
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
		id: "vntana",
		name: "Vntana",
		website: "https://www.vntana.com",
		description: "Vntana (stylised as VNTANA) is an American social augmented reality company.",
		icon: "Vntana.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "vntana:dom:0",
				kind: "dom",
				selector: "iframe[src*='embed.vntana.com/'], iframe[nitro-lazy-src*='embed.vntana.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"poa"
			]
		}
	},
	{
		id: "vonage-video-api",
		name: "Vonage Video API",
		website: "https://www.vonage.com/communications-apis/video/",
		description: "Vonage Video API platform makes it easy to embed real-time, high-quality interactive video, messaging, screen-sharing, and more into web and mobile apps.",
		icon: "Vonage.svg",
		categories: [
			"media-video",
			"api-pattern"
		],
		rules: [
			{
				id: "vonage-video-api:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.opentok\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "webinato",
		name: "Webinato",
		website: "https://www.webinato.com",
		description: "Webinato is a webinar automation software that schedules, manages, and streams online seminars for businesses and educational purposes.",
		icon: "Webinato.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "webinato:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.webinato\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "widde",
		name: "Widde",
		website: "https://widde.io",
		description: "Widde is a platform that enables the use of interactive ecommerce videos on webpages, enhancing the shopping experience and providing businesses with a competitive advantage.",
		icon: "Widde.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "widde:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.widde\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "widde:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.widde\\.io"),
				description: "Response header matches a known technology marker."
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
		id: "widen",
		name: "Widen",
		website: "https://www.widen.com",
		description: "Widen is a digital asset management and product information management solutions provider.",
		icon: "Widen.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "widen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets/\\d+-\\d+/stack/en/widenjs\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "widen:pageGlobal:1",
				kind: "pageGlobal",
				property: "WidenSessionTimer",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "widen:pageGlobal:2",
				kind: "pageGlobal",
				property: "WidenUI",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring"
			]
		}
	},
	{
		id: "wistia",
		name: "Wistia",
		website: "https://wistia.com",
		description: "Wistia is designed exclusively to serve companies using video on their websites for marketing, support, and sales.",
		icon: "Wistia.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "wistia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wistia\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wistia:pageGlobal:1",
				kind: "pageGlobal",
				property: "Wistia",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wistia:pageGlobal:2",
				kind: "pageGlobal",
				property: "wistiaEmbeds",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wistia:pageGlobal:3",
				kind: "pageGlobal",
				property: "wistiaUtils",
				description: "Page-owned global matches a known technology marker."
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
		id: "wowza-video-player",
		name: "Wowza Video Player",
		website: "https://www.wowza.com/video/player",
		description: "Wowza Video Player is a robust, industry standard player that provides HTML5, HLS, MPEG-DASH, and LL-DASH playback.",
		icon: "wowza.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "wowza-video-player:pageGlobal:0",
				kind: "pageGlobal",
				property: "WowzaPlayer",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wowza-video-player:pageGlobal:1",
				kind: "pageGlobal",
				property: "WowzaPlayer.jsplayer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "youcam-makeup",
		name: "YouCam Makeup",
		website: "https://www.perfectcorp.com/business/products/virtual-makeup",
		description: "YouCam Makeup is a cross-platform virtual makeup solution for omnichannel ecommerce.",
		icon: "YouCam Makeup.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "youcam-makeup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugins-media\\.(?:perfectcorp|makeupar)\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "youcam-makeup:pageGlobal:1",
				kind: "pageGlobal",
				property: "YMK.applyMakeupByLook",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "youcam-makeup:pageGlobal:2",
				kind: "pageGlobal",
				property: "YMK.calDeltaE",
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
		id: "youtube",
		name: "YouTube",
		website: "https://www.youtube.com",
		description: "YouTube is a video sharing service where users can create their own profile, upload videos, watch, like and comment on other videos.",
		icon: "YouTube.svg",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "youtube:html:0",
				kind: "html",
				pattern: new RegExp("<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com/(?:v|embed)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "youtube:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.youtube\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "youtube:dom:2",
				kind: "dom",
				selector: "embed[src*='youtube.com'], embed[src*='youtube-nocookie.com'], iframe[src*='youtube.com'], iframe[src*='youtube-nocookie.com'], param[value*='youtube.com'], param[value*='youtube-nocookie.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zieny",
		name: "Zieny",
		website: "https://zieny.com",
		description: "Zieny is a platform that enables businesses to integrate 3D and augmented reality (AR) into websites, providing an interactive product experience without complex implementation.",
		icon: "Zieny.svg",
		categories: [
			"media-video",
			"graphics-visualization"
		],
		rules: [
			{
				id: "zieny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ar-view-zieny\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zmags-creator",
		name: "Zmags Creator",
		website: "https://www.creatorbyzmags.com",
		description: "Zmags Creator enables marketers to design and publish endless types of interactive digital experiences without coding.",
		icon: "Zmags Creator.png",
		categories: [
			"media-video"
		],
		rules: [
			{
				id: "zmags-creator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("c(?:reator)?\\.zmags\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zmags-creator:pageGlobal:1",
				kind: "pageGlobal",
				property: "__zmags",
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
	}
] as const satisfies readonly TechnologyDefinition[];
