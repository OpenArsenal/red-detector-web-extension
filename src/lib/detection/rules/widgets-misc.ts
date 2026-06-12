import type { TechnologyDefinition } from '../types';

export const widgetsMiscTechnologyDefinitions = [
	{
		id: "accuweather",
		name: "AccuWeather",
		website: "https://partners.accuweather.com",
		description: "AccuWeather provides weather forecasts and warnings and additional weather products and services.",
		icon: "AccuWeather.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "accuweather:dom:0",
				kind: "dom",
				selector: "a[href*='.accuweather.com'][target='_blank']",
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
		id: "acquia-content-hub",
		name: "Acquia Content Hub",
		website: "https://www.acquia.com/products/drupal-cloud/content-hub",
		description: "Acquia Content Hub is a cloud-based, centralized content distribution and syndication service.",
		icon: "acquia-content-hub.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "acquia-content-hub:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("content-hub\\.acquia\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquia-content-hub:url:1",
				kind: "url",
				pattern: new RegExp("https?:\\/\\/.+\\.content-hub\\.acquia\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "acquia-content-hub:dom:2",
				kind: "dom",
				selector: "[data-lift-slot]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "acquia-content-hub:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("content-hub\\.acquia\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"acquia-cloud-platform"
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "acquire-cobrowse",
		name: "Acquire Cobrowse",
		website: "https://acquire.io/co-browsing",
		description: "Acquire Cobrowse is a safe and secure method of interacting with a customer's browser without downloading any additional software.",
		icon: "Acquire.svg",
		categories: [
			"widgets-misc",
			"media-video"
		],
		rules: [
			{
				id: "acquire-cobrowse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.acquire\\.io/cobrowse/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "acquire-cobrowse:pageGlobal:1",
				kind: "pageGlobal",
				property: "acquireCobrowseRTC",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acquire-cobrowse:pageGlobal:2",
				kind: "pageGlobal",
				property: "acquireCobrowseSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "acquire-cobrowse:pageGlobal:3",
				kind: "pageGlobal",
				property: "acquireConfigNodeServer",
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
		id: "addshoppers",
		name: "AddShoppers",
		website: "https://www.addshoppers.com",
		description: "AddShoppers is the social media marketing command center for small-medium online retailers.",
		icon: "AddShoppers.svg",
		categories: [
			"widgets-misc",
			"analytics"
		],
		rules: [
			{
				id: "addshoppers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn\\.)?shop\\.pe/widget/"),
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
		id: "addthis",
		name: "AddThis",
		website: "https://www.addthis.com",
		description: "AddThis is a social bookmarking service that can be integrated into a website with the use of a web widget.",
		icon: "AddThis.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "addthis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addthis\\.com/js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "addthis:pageGlobal:1",
				kind: "pageGlobal",
				property: "addthis",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "addtoany",
		name: "AddToAny",
		website: "https://www.addtoany.com",
		description: "AddToAny is a universal sharing platform that can be integrated into a website by use of a web widget or plugin.",
		icon: "AddToAny.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "addtoany:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addtoany\\.com/menu/page\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "addtoany:pageGlobal:1",
				kind: "pageGlobal",
				property: "a2apage_init",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "admiral",
		name: "Admiral",
		website: "https://www.getadmiral.com",
		description: "Admiral is a Visitor Relationship Management (VRM) platform.",
		icon: "Admiral.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "admiral:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("admiral(?:-engaged|:enabled)"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "admiral:pageGlobal:1",
				kind: "pageGlobal",
				property: "admiral",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "airrobe",
		name: "AirRobe",
		website: "https://airrobe.com",
		description: "AirRobe partners with brands and retailers to power the circular fashion economy.",
		icon: "AirRobe.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "airrobe:pageGlobal:0",
				kind: "pageGlobal",
				property: "airrobe.app_id",
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
		id: "airtable",
		name: "Airtable",
		website: "https://www.airtable.com",
		description: "Airtable is a low-code platform for building collaborative apps.",
		icon: "Airtable.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "airtable:dom:0",
				kind: "dom",
				selector: "iframe[scr*='//airtable.com/'], a[href*='//airtable.com/'][target='_blank']",
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
		id: "algolia-docsearch",
		name: "Algolia DocSearch",
		website: "https://docsearch.algolia.com",
		description: "Algolia DocSearch is a search widget specifically designed for documentation websites.",
		icon: "DocSearch.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "algolia-docsearch:dom:0",
				kind: "dom",
				selector: "link[href*='.algolia.net'][rel='preconnect']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "algolia-docsearch:pageGlobal:1",
				kind: "pageGlobal",
				property: "docsearch.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"algolia"
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
		id: "answerbase",
		name: "Answerbase",
		website: "https://answerbase.com",
		description: "Answerbase is a management platform for customer support and ecommerce, allowing users to ask questions, receive answers, and browse content and articles to meet their demand for information about products and services.",
		icon: "Answerbase.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "answerbase:pageGlobal:0",
				kind: "pageGlobal",
				property: "loadAnswerbaseCTAWidget",
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
		id: "answerdash",
		name: "AnswerDash",
		website: "https://www.answerdash.com",
		description: "AnswerDash is a question and answer platform that serves business customers thereby reducing support costs and revealing customer needs.",
		icon: "AnswerDash.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "answerdash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.answerdash\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "answerdash:pageGlobal:1",
				kind: "pageGlobal",
				property: "AnswerDash",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "answerdash:pageGlobal:2",
				kind: "pageGlobal",
				property: "AnswerDash.__plugin",
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
		id: "appcues",
		name: "Appcues",
		website: "https://www.appcues.com/",
		description: "Appcues is a solution for measuring and improving product adoption.",
		icon: "Appcues.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "appcues:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fast\\.appcues\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "appcues:pageGlobal:1",
				kind: "pageGlobal",
				property: "Appcues",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "appuonline",
		name: "AppuOnline",
		website: "https://www.appuonline.com",
		description: "AppuOnline is a tool that provides embeddable stock charts for integration into websites or applications.",
		icon: "AppuOnline.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "appuonline:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.appuonline.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "arena",
		name: "Arena",
		website: "https://arena.im",
		description: "Arena widget is an embeddable widget provided by the Arena platform, which allows users to embed live blogs directly on their website.",
		icon: "Arena.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "arena:dom:0",
				kind: "dom",
				selector: "iframe[scr*='//go.arena.im/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "arena:pageGlobal:1",
				kind: "pageGlobal",
				property: "arenaHub.arenaIdentify",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "arena:pageGlobal:2",
				kind: "pageGlobal",
				property: "arenaLiveblog",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "arena:pageGlobal:3",
				kind: "pageGlobal",
				property: "arenaim.initializeLiveblog",
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
		id: "arengu",
		name: "Arengu",
		website: "https://www.arengu.com",
		description: "Arengu is an online form builder designed to streamline user onboarding.",
		icon: "Arengu.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "arengu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.arengu\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "avasize",
		name: "Avasize",
		website: "https://www.avasize.com",
		icon: "Avasize.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "avasize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?://cdn\\.avasize\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "azure-edge-network",
		name: "Azure Edge Network",
		website: "https://learn.microsoft.com/en-us/azure/cdn/cdn-overview",
		description: "Azure Edge Network is a global network infrastructure provided by Microsoft Azure. It is designed to deliver content, applications, and services to end-users with low latency and high performance. The Azure Edge Network consists of a combination of Azure Content Delivery Network (CDN), Azure Front Door, and Azure Traffic Manager.",
		icon: "Azure.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "azure-edge-network:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.azureedge\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "azure-edge-network:dom:1",
				kind: "dom",
				selector: "link[href*='.azureedge.net/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "azure-edge-network:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.azureedge\\.net"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "babel",
		name: "Babel",
		website: "https://babeljs.io",
		description: "Babel is a free and open-source transcompiler for writing next generation JavaScript.",
		icon: "Babel.svg",
		categories: [
			"widgets-misc",
			"transpiler"
		],
		rules: [
			{
				id: "babel:pageGlobal:0",
				kind: "pageGlobal",
				property: "_babelPolyfill",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "babylist",
		name: "Babylist",
		website: "https://www.babylist.com",
		description: "Babylist is a universal wish list.",
		icon: "Babylist.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "babylist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("babylist\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bandsintown-events-widget",
		name: "BandsInTown Events Widget",
		website: "https://artists.bandsintown.com/support/events-widget",
		description: "Bandsintown Events Widget is a free widget which makes it simple to embed your event listings and allow fans to buy tickets, RSVP, follow you and join your Email & SMS lists.",
		icon: "BandsInTown.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "bandsintown-events-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.bandsintown\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bdow",
		name: "BDOW",
		website: "https://bdow.com/",
		description: "BDOW is a plugin offering set of marketing tools to automate a website's growth. These tools help drive extra traffic, engage visitors, increase email subscribers and build community.",
		icon: "Bdow.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "bdow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sumo(?:me)?\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bdow:pageGlobal:1",
				kind: "pageGlobal",
				property: "sumo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bdow:pageGlobal:2",
				kind: "pageGlobal",
				property: "sumome",
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
		id: "beyond",
		name: "Beyond",
		website: "https://www.getbeyond.io",
		description: "Beyond is a slide-out panels system designed to expand or retract sections within a structure for flexible space management.",
		icon: "Beyond.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "beyond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getbeyond\\.io"),
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
		id: "bokun",
		name: "Bokun",
		website: "https://www.bokun.io",
		description: "Bokun is a cloud-based booking management solution which enables small to large travel and tourism businesses manage reservations, products content, images, categorisation, pricing, inventory, and payments.",
		icon: "Bokun.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "bokun:pageGlobal:0",
				kind: "pageGlobal",
				property: "BokunWidgetEmbedder",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:1",
				kind: "pageGlobal",
				property: "BokunWidgets",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:2",
				kind: "pageGlobal",
				property: "__BokunWidgetsLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:3",
				kind: "pageGlobal",
				property: "__bokunWidgets",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:4",
				kind: "pageGlobal",
				property: "bokunBookingChannelUUID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:5",
				kind: "pageGlobal",
				property: "bokunPolyfillReady",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bokun:pageGlobal:6",
				kind: "pageGlobal",
				property: "bokunSessionId",
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
		id: "booking-com-widget",
		name: "Booking.com widget",
		website: "https://www.booking.com/affiliate-program/v2/selfmanaged.html",
		description: "Booking.com is one of the largest ecommerce travel companies in the world. As an affiliate member, you can make up to 40% commission.",
		icon: "Booking.com.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "booking-com-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("q\\.bstatic\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "booking-com-widget:dom:1",
				kind: "dom",
				selector: "form[action*='.booking.com/'][target='_blank'], img[src*='q-xx.bstatic.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"booking-com"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "bookingkit",
		name: "Bookingkit",
		website: "https://bookingkit.net/",
		description: "Bookingkit is an online booking management solution. Bookingkit helps its users generate PDF invoices, manage day-to-day scheduling operations, and automatically sync availabilities in real time.",
		icon: "Bookingkit.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "bookingkit:pageGlobal:0",
				kind: "pageGlobal",
				property: "BookingKitApp",
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
		id: "booksy",
		name: "Booksy",
		website: "https://booksy.com/",
		description: "Booksy is a booking system for people looking to schedule appointments for health and beauty services.",
		icon: "Booksy.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "booksy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booksy\\.com/widget/code\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "booksy:pageGlobal:1",
				kind: "pageGlobal",
				property: "booksy",
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
		id: "browser-update-org",
		name: "Browser-Update.org",
		website: "https://browser-update.org",
		description: "Browser-update.org is a tool to unobtrusively notify visitors that they should update their web browser in order to use your website.",
		icon: "Browser-Update.org.png",
		categories: [
			"widgets-misc",
			"developer-tooling"
		],
		rules: [
			{
				id: "browser-update-org:pageGlobal:0",
				kind: "pageGlobal",
				property: "$bu_.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "browser-update-org:pageGlobal:1",
				kind: "pageGlobal",
				property: "$bu_getBrowser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "buildertrend",
		name: "Buildertrend",
		website: "https://buildertrend.com",
		icon: "Buildertrend.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "buildertrend:dom:0",
				kind: "dom",
				selector: "iframe[src*='buildertrend.net'], script[src*='buildertrend.net']",
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
		id: "buttonizer",
		name: "Buttonizer",
		website: "https://buttonizer.pro",
		description: "Buttonizer is a widget that enables website owners to incorporate custom and attention-grabbing call-to-action (CTA) buttons into their website design.",
		icon: "Buttonizer.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "buttonizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wp-content/plugins/buttonizer-multifunctional-button/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buttonizer:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.buttonizer\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buttonizer:pageGlobal:2",
				kind: "pageGlobal",
				property: "Buttonizer",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"low"
			]
		}
	},
	{
		id: "buy-me-a-coffee",
		name: "Buy me a coffee",
		website: "https://www.buymeacoffee.com",
		description: "Buy me a coffee is a service for online content creators that they may use to receive tips and donations to support their work.",
		icon: "Buy me a coffee.svg",
		categories: [
			"widgets-misc",
			"fundraising-donations"
		],
		rules: [
			{
				id: "buy-me-a-coffee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdnjs\\.buymeacoffee\\.com/([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buy-me-a-coffee:dom:1",
				kind: "dom",
				selector: "a[href*='www.buymeacoffee.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
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
		id: "buy-with-prime",
		name: "Buy with Prime",
		website: "https://buywithprime.amazon.com",
		description: "Buy with Prime is a feature offered by Amazon that allows Amazon Prime members to make purchases with the benefits associated with their Prime membership.",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "buy-with-prime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.buywithprime\\.amazon\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "buy-with-prime:pageGlobal:1",
				kind: "pageGlobal",
				property: "bwp.sku",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"amazon-pay"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "buyee",
		name: "Buyee",
		website: "https://buyee.jp",
		description: "Buyee is a widget that facilitates purchasing products from Japan.",
		icon: "Buyee.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "buyee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.buyee\\.jp"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "caast-tv",
		name: "Caast.tv",
		website: "https://en.caast.tv",
		description: "Caast.tv is a digital commercial animation solution integrated into the ecommerce customer journey.",
		icon: "Caast.tv.svg",
		categories: [
			"widgets-misc",
			"animation"
		],
		rules: [
			{
				id: "caast-tv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.caast\\.tv/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "caast-tv:pageGlobal:1",
				kind: "pageGlobal",
				property: "caast.open",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "caast-tv:pageGlobal:2",
				kind: "pageGlobal",
				property: "caastInstance",
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
		id: "callpage",
		name: "CallPage",
		website: "https://www.callpage.io",
		description: "CallPage is a lead capture tool that automatically schedules callbacks and meetings with potential customers, enhancing lead management efficiency.",
		icon: "CallPage.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "callpage:pageGlobal:0",
				kind: "pageGlobal",
				property: "callpage.__cp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "callpage:pageGlobal:1",
				kind: "pageGlobal",
				property: "callpage.__cp.version",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "callpage:pageGlobal:2",
				kind: "pageGlobal",
				property: "callpageWebpackJsonp",
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
		id: "canopy-connect",
		name: "Canopy Connect",
		website: "https://www.usecanopy.com",
		description: "Canopy Connect is a tool that enables instant collection of insurance information for verification, analysis, or onboarding processes.",
		icon: "CanopyConnect.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "canopy-connect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usecanopy\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "canopy-connect:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.usecanopy.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "captivate-fm",
		name: "Captivate.fm",
		website: "https://www.captivate.fm",
		description: "Captivate.fm is a podcast hosting and analytics platform that provides tools for creating, hosting, and distributing podcasts.",
		icon: "Captivate.fm.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "captivate-fm:dom:0",
				kind: "dom",
				selector: "iframe[src*='player.captivate.fm/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "captivate-fm:pageGlobal:1",
				kind: "pageGlobal",
				property: "CAPTIVATE_PLAYER_APP_URL",
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
		id: "carbonfact",
		name: "Carbonfact",
		website: "https://www.carbonfact.com",
		description: "Carbonfact is a platform for fashion brands to manage their carbon emissions. It enables the measurement, reporting, and reduction of emissions in the apparel, textile, leather, and luxury sectors.",
		icon: "Carbonfact.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "carbonfact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.carbonfact\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "carbonfact:pageGlobal:1",
				kind: "pageGlobal",
				property: "carbonfact.refreshModule",
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
		id: "cgit",
		name: "cgit",
		website: "https://git.zx2c4.com/cgit",
		description: "cgit is a web interface (cgi) for Git repositories, written in C. licensed under GPLv2.",
		icon: "cgit.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "cgit:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^cgit v([\\d.a-z-]+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"git",
			"c"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "chameleon",
		name: "Chameleon",
		website: "https://www.trychameleon.com",
		description: "Chameleon is a sophisticated no-code platform for product success, empowering SaaS teams to build self-service user onboarding, feature adoption, and feedback collection.",
		icon: "Chameleon.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "chameleon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trychameleon\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chameleon:pageGlobal:1",
				kind: "pageGlobal",
				property: "chmln.Snippet.urls.fast",
				valuePattern: new RegExp("fast\\.trychameleon\\.com"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "chameleon:pageGlobal:2",
				kind: "pageGlobal",
				property: "chmlnData.organizationAttributes",
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
		id: "chameleon-power",
		name: "Chameleon Power",
		website: "https://chameleonpower.com",
		description: "Chameleon Power is a software platform that enables visualization, design, decoration, and selection of digital images and materials.",
		icon: "ChameleonPower.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "chameleon-power:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chameleonpower\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chameleon-power:pageGlobal:1",
				kind: "pageGlobal",
				property: "ChamStats.addEvent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "chatango",
		name: "Chatango",
		website: "https://chatango.com",
		description: "Chatango is a website used for connecting to a large selection of users.",
		icon: "Chatango.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "chatango:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("st\\.chatango\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "chatango:dom:1",
				kind: "dom",
				selector: "iframe[src*='st.chatango.com']",
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
		id: "checkfront",
		name: "Checkfront",
		website: "https://www.checkfront.com",
		description: "Checkfront is a cloud-based booking management application and ecommerce platform.",
		icon: "Checkfront.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "checkfront:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.checkfront\\.com/"),
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
		id: "checkin",
		name: "Checkin",
		website: "https://www.checkin.no",
		description: "Checkin is a system that automates registration processes.",
		icon: "Checkin.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "checkin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("registration\\.checkin\\.no"),
				description: "Script source URL matches a known technology marker."
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
		id: "cloverly",
		name: "Cloverly",
		website: "https://www.cloverly.com",
		description: "Cloverly is an API integration for ethical ecommerce brands to help their customers offset the carbon footprint of their online transactions.",
		icon: "Cloverly.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "cloverly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.cloverly\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "cloverly:pageGlobal:1",
				kind: "pageGlobal",
				property: "removeCloverly",
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
		id: "coconstruct",
		name: "CoConstruct",
		website: "https://www.coconstruct.com",
		icon: "CoConstruct.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "coconstruct:dom:0",
				kind: "dom",
				selector: "a[href*='co-construct.com/skins'], iframe[src*='co-construct.com']",
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
		id: "coconutsoftware",
		name: "CoconutSoftware",
		website: "https://www.coconutsoftware.com/",
		description: "Coconut is a cloud-based appointment scheduling solution designed for enterprise financial services organisations such as credit unions, retail banks and more.",
		icon: "CoconutSoftware.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "coconutsoftware:cookie:0",
				kind: "cookie",
				key: "coconut_calendar",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "cocos2d",
		name: "Cocos2d",
		website: "https://www.cocos.com/en/cocos2dx",
		description: "Cocos2d is a mature open source cross-platform game development framework.",
		icon: "Cocos2d.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "cocos2d:pageGlobal:0",
				kind: "pageGlobal",
				property: "CocosEngine",
				valuePattern: new RegExp("([\\d\\.]{2,})"),
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
		id: "codesandbox",
		name: "CodeSandbox",
		website: "https://codesandbox.io/",
		description: "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.",
		icon: "CodeSandbox.svg",
		categories: [
			"widgets-misc",
			"rich-text-editors"
		],
		rules: [
			{
				id: "codesandbox:dom:0",
				kind: "dom",
				selector: "iframe[src^='https://codesandbox.io/embed/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "colbass",
		name: "Colbass",
		website: "https://colbass.com",
		description: "Colbass is AI System that transforms text into real-human voiceovers.",
		icon: "colbass.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "colbass:pageGlobal:0",
				kind: "pageGlobal",
				property: "colbassRunning",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"low",
				"onetime",
				"recurring"
			]
		}
	},
	{
		id: "comeet",
		name: "Comeet",
		website: "https://www.comeet.com",
		description: "Comeet is an Collaborative Recruiting, and Applicant Tracking System.",
		icon: "comeet.svg",
		categories: [
			"widgets-misc",
			"business-tools"
		],
		rules: [
			{
				id: "comeet:pageGlobal:0",
				kind: "pageGlobal",
				property: "COMEET",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "comeet:pageGlobal:1",
				kind: "pageGlobal",
				property: "comeetInit",
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
		id: "community-box",
		name: "Community Box",
		website: "https://www.communitybox.co",
		description: "Community Box is a tool that allows users to create directories within a website without writing any code.",
		icon: "CommunityBox.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "community-box:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cfapi\\.communitybox\\.co"),
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
		id: "conditional-fields-for-contact-form-7",
		name: "Conditional Fields for Contact Form 7",
		website: "https://wordpress.org/plugins/cf7-conditional-fields",
		description: "Adds conditional logic to Contact Form 7.",
		icon: "Conditional Fields for Contact Form 7.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem",
			"form-schema-library"
		],
		rules: [
			{
				id: "conditional-fields-for-contact-form-7:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cf7-conditional-fields(?:\\/js)?(?:\\/scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "conditional-fields-for-contact-form-7:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/cf7-conditional-fields/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"contact-form-7"
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
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
			"table-library"
		],
		rules: [
			{
				id: "contentviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("content-views(?:-pro)?(?:-query-and-display-post-page)?(?:\\/public)?(?:\\/assets)?(?:\\/js)?(?:\\/cv(?:pro)?)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "contentviews:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/content-views-query-and-display-post-page/'], link[href*='/wp-content/plugins/pt-content-views-pro/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "contextual-related-posts",
		name: "Contextual Related Posts",
		website: "https://wordpress.org/plugins/contextual-related-posts/",
		description: "Add related posts to your WordPress site with inbuilt caching.",
		icon: "Contextual Related Posts.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "contextual-related-posts:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/contextual-related-posts/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cool-tag-cloud",
		name: "Cool Tag Cloud",
		website: "https://wordpress.org/plugins/cool-tag-cloud",
		description: "A simple tag cloud system for WordPress.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "cool-tag-cloud:dom:0",
				kind: "dom",
				selector: "link#cool-tag-cloud-css[href*='/wp-content/plugins/cool-tag-cloud/'], .cool-tag-cloud, .widget_cool_tag_cloud, .cool-tag-cloud-open, .cool-tag-cloud-close, .cool-tag-cloud-inner",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "cool-timeline",
		name: "Cool Timeline",
		website: "https://wordpress.org/plugins/cool-timeline",
		description: "Creates vertical and horizontal history timeline blocks.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "cool-timeline:dom:0",
				kind: "dom",
				selector: "link[href*='/plugins/cool-timeline/'], script[src*='/cool-timeline/'], .cooltimeline-body",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "copypoison",
		name: "CopyPoison",
		website: "https://copypoison.com/",
		description: "Copypoison is a plagarism protection tool that protects content by replacing text with symbols that are visually similar.",
		icon: "Copypoison.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "copypoison:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("copypoison\\.com/cp\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "countdown-timer-ultimate",
		name: "Countdown Timer Ultimate",
		website: "https://wordpress.org/plugins/countdown-timer-ultimate",
		description: "Add and display responsive Countdown timer on your website.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "countdown-timer-ultimate:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/countdown-timer-ultimate/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "crayon-syntax-highlighter",
		name: "Crayon Syntax Highlighter",
		website: "https://wordpress.org/plugins/crayon-syntax-highlighter/",
		description: "Syntax Highlighter supporting multiple languages, themes, fonts, highlighting from a URL, local file or post text.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "crayon-syntax-highlighter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("crayon-syntax-highlighter(?:\\/js)?(?:\\/min)?(?:\\/crayon)?(?:\\.te)?(?:\\.min)?\\.js(?:\\?v(?:er)?=_((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crayon-syntax-highlighter:dom:1",
				kind: "dom",
				selector: "link#crayon-css, link#crayon",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "crayon-syntax-highlighter:pageGlobal:2",
				kind: "pageGlobal",
				property: "CrayonSyntaxSettings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crayon-syntax-highlighter:pageGlobal:3",
				kind: "pageGlobal",
				property: "CrayonSyntaxStrings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "crayon-syntax-highlighter:pageGlobal:4",
				kind: "pageGlobal",
				property: "CrayonTagEditorSettings",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "crobox",
		name: "Crobox",
		website: "https://crobox.com/",
		icon: "Crobox.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "crobox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.crobox\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "crobox:pageGlobal:1",
				kind: "pageGlobal",
				property: "crobox",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ctawidget",
		name: "CTAwidget",
		website: "https://ctawidget.ru",
		description: "CTAwidget is a tool designed to increase website conversion through customizable widgets aimed at enhancing user engagement and optimizing conversion rates.",
		icon: "CTAwidget.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ctawidget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.ctawidget\\.ru"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ctawidget:pageGlobal:1",
				kind: "pageGlobal",
				property: "get_visible_cta",
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
		id: "custom-twitter-feeds",
		name: "Custom Twitter Feeds",
		website: "https://wordpress.org/plugins/custom-twitter-feeds",
		description: "Custom Twitter Feeds for Wordpress.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "custom-twitter-feeds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("custom-twitter-feeds(?:\\/js)?(?:\\/ctf-scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "custom-twitter-feeds:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/custom-twitter-feeds/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "daily-deals",
		name: "Daily Deals",
		website: "https://dailydeals.ai",
		description: "Daily Deals is a flash sale, limited-time discounts, countdown timers, and sales analytics solution.",
		icon: "Daily Deals.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "daily-deals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.dailydeals\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "daily-deals:pageGlobal:1",
				kind: "pageGlobal",
				property: "ddAddToCheckout",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "daily-deals:pageGlobal:2",
				kind: "pageGlobal",
				property: "ddAddToOrder",
				confidence: 50,
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
		id: "dailykarma",
		name: "DailyKarma",
		website: "https://www.dailykarma.com",
		description: "DailyKarma is a turnkey cause marketing solutions for ecommerce merchants.",
		icon: "DailyKarma.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "dailykarma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.dailykarma\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dailykarma:pageGlobal:1",
				kind: "pageGlobal",
				property: "dkWidgetInit",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dailykarma:pageGlobal:2",
				kind: "pageGlobal",
				property: "dk_widget",
				confidence: 50,
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
		id: "docusign",
		name: "DocuSign",
		website: "https://www.docusign.com",
		description: "DocuSign allows organisations to manage electronic agreements.",
		icon: "DocuSign.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "docusign:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("docusign\\.net"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "docusign:dns:1",
				kind: "dns",
				valuePattern: new RegExp("docusign"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
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
		id: "douban",
		name: "Douban",
		website: "https://m.douban.com",
		description: "Douban is a Chinese social sharing service for recording books, movies, and music.",
		icon: "Douban.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "douban:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("movie\\.douban\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "douban:pageGlobal:1",
				kind: "pageGlobal",
				property: "doubanmovie",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "dynamic-conditions",
		name: "Dynamic Conditions",
		website: "https://wordpress.org/plugins/dynamicconditions",
		description: "Dynamic Conditions of Widgets is a cutting-edge WordPress plugin that extends the functionality of your website using conditional logic.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "dynamic-conditions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dynamic-conditions-public\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "ekomi",
		name: "eKomi",
		website: "https://www.ekomi.de",
		description: "eKomi is a German supplier and product review service.",
		icon: "eKomi.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ekomi:dom:0",
				kind: "dom",
				selector: ".ekomi-widget-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ekomi:pageGlobal:1",
				kind: "pageGlobal",
				property: "ekomiWidgetMain",
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
		id: "elementor-addon-elements",
		name: "Elementor Addon Elements",
		website: "https://wordpress.org/plugins/addon-elements-for-elementor-page-builder",
		description: "Widgets and extensions to extend the Elementor Page Builder.",
		icon: "Elementor Addon Elements.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "elementor-addon-elements:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("addon-elements-for-elementor-page-builder(?:\\/assets)?(?:\\/js)?(?:\\/lib)?(?:\\/animated-main)?(?:\\/build)?(?:\\/eae)?(?:\\/iconHelper)?(?:\\/index)?(?:\\/magnific)?(?:\\/particles)?(?:\\/vegas){0,2}(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "elementor-addon-elements:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/addon-elements-for-elementor-page-builder/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "elevio",
		name: "Elevio",
		website: "https://elev.io",
		description: "Elevio is a self-service support platform for SaaS that delivers contextual knowledge to customers, support agents, and internal teams.",
		icon: "Elevio.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "elevio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.elev\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "elevio:pageGlobal:1",
				kind: "pageGlobal",
				property: "_elev",
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
		id: "elfsight",
		name: "Elfsight",
		website: "https://elfsight.com",
		description: "Elfsight is an all-in-one platform offering 70+ customisable widgets for websites.",
		icon: "Elfsight.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "elfsight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.elfsight\\.com/"),
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
		id: "elog",
		name: "ELOG",
		website: "https://midas.psi.ch/elog",
		icon: "ELOG.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "elog:html:0",
				kind: "html",
				pattern: new RegExp("<title>ELOG Logbook Selection</title>"),
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "email-encoder-for-wordpress",
		name: "Email Encoder for Wordpress",
		website: "https://wordpress.org/plugins/email-encoder-bundle",
		description: "Protect email addresses and phone numbers from spambots.",
		icon: "Email Encoder for Wordpress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "email-encoder-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("email-encoder-bundle(?:\\/core)?(?:\\/includes)?(?:\\/assets)?(?:\\/js)?(?:\\/custom)?(?:\\/encoder-form)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "email-encoder-for-wordpress:dom:1",
				kind: "dom",
				selector: "link#eeb-css-frontend-css, link[href*='/wp-content/plugins/email-encoder-bundle/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "embed-any-document",
		name: "Embed Any Document",
		website: "https://wordpress.org/plugins/embed-any-document",
		description: "Embed PDF, DOC, PPT and XLS documents easily on your WordPress website.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "embed-any-document:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed-any-document(?:\\/js)?(?:\\/embed-public)?(?:\\/pdfobject)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "embed-any-document:dom:1",
				kind: "dom",
				selector: "#awsm-ead-public-css, link[href*='/wp-content/plugins/embed-any-document/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "embed-pdf-viewer",
		name: "Embed PDF Viewer",
		website: "https://wordpress.org/plugins/embed-pdf-viewer",
		description: "Embed a PDF from the Media Library or elsewhere via oEmbed.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "embed-pdf-viewer:dom:0",
				kind: "dom",
				selector: "#embed-pdf-viewer-css, link[href*='/wp-content/plugins/embed-pdf-viewer/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "embedly",
		name: "Embedly",
		website: "https://embed.ly",
		description: "Embedly is a service that allows developers to convert URLs into rich previews and embeddable content.",
		icon: "Embedly.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "embedly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.embedly\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "embedly:dom:1",
				kind: "dom",
				selector: "div.w-embed > iframe.embedly-embed",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "embedly:pageGlobal:2",
				kind: "pageGlobal",
				property: "embedly",
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
		id: "embedpress",
		name: "EmbedPress",
		website: "https://wordpress.org/plugins/embedpress",
		description: "Embed videos, images, posts, audio, maps and upload PDF, DOC, PPT in Wordpress.",
		icon: "EmbedPress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "embedpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embedpress(?:\\/assets)?(?:\\/js)?(?:\\/ads)?(?:\\/pdfobject)?(?:\\/front)?(?:\\/documents-viewer-script)?(?:\\/vimeo-player)?(?:\\/initplyr)?(?:\\/plyr)?(?:\\.polyfilled)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "embedpress:dom:1",
				kind: "dom",
				selector: "#embedpress-css, #embedpress-elementor-css-css, #embedpress_blocks-cgb-style-css-css, link[href*='/wp-content/plugins/embedpress/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "embedsocial",
		name: "EmbedSocial",
		website: "https://embedsocial.com",
		description: "EmbedSocial is a social media management platform.",
		icon: "EmbedSocial.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "embedsocial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embedsocial\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "embedsocial:pageGlobal:1",
				kind: "pageGlobal",
				property: "EMBEDSOCIALHASHTAG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "embedsocial:pageGlobal:2",
				kind: "pageGlobal",
				property: "EmbedSocialIframeLightbox",
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
		id: "enamad",
		name: "eNamad",
		website: "https://enamad.ir/",
		description: "eNamad is an electronic trust symbol.",
		icon: "eNamad.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "enamad:dom:0",
				kind: "dom",
				selector: "a[href*='.enamad.ir/'][target='_blank'], div.e-namad-widget-wrapper, img[src*='.enamad.ir/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "enamad:meta:1",
				kind: "meta",
				key: "enamad",
				valuePattern: new RegExp("^\\d+$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "envybox",
		name: "Envybox",
		website: "https://envybox.io",
		description: "Envybox is a multiservice for increasing sales.",
		icon: "Envybox.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "envybox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.saas-support\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "envybox:pageGlobal:1",
				kind: "pageGlobal",
				property: "EnvyWidget",
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
		id: "eprints",
		name: "EPrints",
		website: "https://www.eprints.org",
		icon: "EPrints.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "eprints:pageGlobal:0",
				kind: "pageGlobal",
				property: "EPJS_menu_template",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eprints:pageGlobal:1",
				kind: "pageGlobal",
				property: "EPrints",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eprints:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("EPrints ([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "everwondr",
		name: "EverWondr",
		website: "https://everwondr.com",
		description: "EverWondr is a network providing a collection of plug-ins, including a calendar, directory, blog, guestbook, gallery, and survey.",
		icon: "EverWondr.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "everwondr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.everwondr\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "everwondr:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.everwondr\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
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
			"table-library"
		],
		rules: [
			{
				id: "eveve:html:0",
				kind: "html",
				pattern: new RegExp("<iframe[^>]*[\\w]+\\.eveve\\.com"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "eveve:dom:1",
				kind: "dom",
				selector: "iframe[src*='.eveve.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"php"
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
		id: "ex-co",
		name: "EX.CO",
		website: "https://ex.co",
		description: "EX.CO (formerly Playbuzz) is an online publishing platform for publishers, brand agencies, and individual content creators to create content in interactive formats such as polls, quizzes, lists, video snippets, slideshows, and countdowns.",
		icon: "EX.CO.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ex-co:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ex\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ex-co:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.playbuzz\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ex-co:requestUrl:2",
				kind: "requestUrl",
				pattern: new RegExp("prd-collector-anon\\.ex\\.co"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "ex-co:pageGlobal:3",
				kind: "pageGlobal",
				property: "__EXCO",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ex-co:pageGlobal:4",
				kind: "pageGlobal",
				property: "__EXCO_INTEGRATION_TYPE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ex-co:pageGlobal:5",
				kind: "pageGlobal",
				property: "excoPixelUrl",
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
		id: "exo-platform",
		name: "Exo Platform",
		website: "https://www.exoplatform.com",
		description: "Exo Platform is a social-collaboration software designed for enterprises.",
		icon: "ExoPlatform.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "exo-platform:pageGlobal:0",
				kind: "pageGlobal",
				property: "eXo.core",
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
		id: "fareharbor",
		name: "FareHarbor",
		website: "https://fareharbor.com",
		description: "FareHarbor is an booking and schedule management solution intended for tour and activity companies.",
		icon: "FareHarbor.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "fareharbor:html:0",
				kind: "html",
				pattern: new RegExp("<iframe[^>]+fareharbor"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "fareharbor:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("fareharbor\\.com/embeds/api/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fareharbor:dom:2",
				kind: "dom",
				selector: "iframe[src*='fareharbor']",
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
		id: "feederninja",
		name: "FeederNinja",
		website: "https://www.feederninja.com",
		description: "FeederNinja is a tool that allows users to create customizable RSS and social media feed widgets for embedding on websites.",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "feederninja:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feederninja\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "feedspring",
		name: "FeedSpring",
		website: "https://www.feedspring.com",
		description: "FeedSpring is a platform that creates visually appealing social media feeds for websites.",
		icon: "FeedSpring.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "feedspring:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.feedspring\\.co/"),
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
		id: "filehippo",
		name: "FileHippo",
		website: "https://filehippo.com",
		description: "FileHippo is a widget that provides the latest software updates, allowing users to stay informed about new versions and releases.",
		icon: "FileHippo.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "filehippo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.filehippo\\.com"),
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
		id: "fillout",
		name: "Fillout",
		website: "https://www.fillout.com/",
		description: "Fillout is a form builder widget.",
		categories: [
			"widgets-misc",
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "fillout:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https://server\\.fillout\\.com/embed/v(\\d)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "fintechos",
		name: "FintechOS",
		website: "https://fintechos.com",
		description: "FintechOS is a low-code platform for banking and insurance.",
		icon: "FintechOS.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "fintechos:pageGlobal:0",
				kind: "pageGlobal",
				property: "FtosChat",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fintechos:pageGlobal:1",
				kind: "pageGlobal",
				property: "ftos.core.getB2CCulture",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fintechos:meta:2",
				kind: "meta",
				key: "ftos-app-version",
				valuePattern: new RegExp("\\sv([\\d\\.]+)\\s"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
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
		id: "fitvids-js",
		name: "FitVids.JS",
		website: "https://fitvidsjs.com/",
		description: "jQuery plugin for fluid width video embeds",
		icon: "FitVids.JS.png",
		categories: [
			"widgets-misc",
			"media-video"
		],
		rules: [
			{
				id: "fitvids-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("fitvids(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
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
		id: "flexslider",
		name: "FlexSlider",
		website: "https://woocommerce.com/flexslider/",
		description: "FlexSlider is a free jQuery slider plugin.",
		icon: "FlexSlider.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "flexslider:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.flexslider(?:\\.min)?\\.js$"),
				description: "Script source URL matches a known technology marker."
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
		id: "flippingbook",
		name: "FlippingBook",
		website: "https://flippingbook.com",
		description: "FlippingBook is a web-based software platform that enables users to create, publish, and share digital publications such as magazines, brochures, catalogs, and presentations.",
		icon: "FlippingBook.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "flippingbook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("online\\.flippingbook\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flippingbook:dom:1",
				kind: "dom",
				selector: "a[href*='flippingbook.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "flippingbook:pageGlobal:2",
				kind: "pageGlobal",
				property: "__flippingbook_csrf__",
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
		id: "flockler",
		name: "Flockler",
		website: "https://flockler.com",
		description: "Flockler is a social hub content integration system that aggregates and displays social media content from multiple platforms onto websites or digital screens.",
		icon: "Flockler.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "flockler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.flockler\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "flockler:pageGlobal:1",
				kind: "pageGlobal",
				property: "FLOCKLER_EMBEDS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flockler:pageGlobal:2",
				kind: "pageGlobal",
				property: "_flocklerOverride",
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
		id: "forethought-solve",
		name: "Forethought Solve",
		website: "https://forethought.ai/platform/solve/",
		description: "Forethought Solve is a live-chat widget that uses generative AI to automate responses for common questions across all channels.",
		icon: "Forethought Solve.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "forethought-solve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("solve-widget\\.forethought\\.ai/"),
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
		id: "foxpush",
		name: "FoxPush",
		website: "https://www.foxpush.com",
		description: "FoxPush is a platform that supports pushing of notifications through the browser.",
		icon: "FoxPush.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "foxpush:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.foxpush\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "foxpush:pageGlobal:1",
				kind: "pageGlobal",
				property: "_foxpush",
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
		id: "freedom-farmers",
		name: "Freedom Farmers",
		website: "https://freedomfarmers.com",
		description: "Freedom Farmers is a micro farm platform designed for individuals interested in growing food, starting an agricultural business, or gaining access to land.",
		icon: "FreedomFarmers.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "freedom-farmers:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("//freedomfarmers\\.com"),
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
		id: "fullcalendar",
		name: "FullCalendar",
		website: "https://fullcalendar.io",
		description: "FullCalendar is a full-sized drag and drop JavaScript event calendar.",
		icon: "FullCalendar.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "fullcalendar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/fullcalendar\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "fullcalendar:pageGlobal:1",
				kind: "pageGlobal",
				property: "FullCalendar.version",
				valuePattern: new RegExp("^([\\d\\.\\-\\w]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"typescript"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"mid",
				"poa"
			]
		}
	},
	{
		id: "getbutton",
		name: "GetButton",
		website: "https://getbutton.io",
		description: "The chat button by GetButton takes website visitor directly to the messaging app such as Facebook Messenger or WhatsApp and allows them to initiate a conversation with you.",
		icon: "GetButton.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "getbutton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getbutton\\.io/"),
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
		id: "getsitecontrol",
		name: "Getsitecontrol",
		website: "https://getsitecontrol.com",
		description: "Getsitecontrol is a form and popup builder.",
		icon: "Getsitecontrol.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "getsitecontrol:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getsitecontrol\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "goanywhere",
		name: "GoAnywhere",
		website: "https://www.goanywhere.com/",
		description: "GoAnywhere by HelpSystems is a Managed File Transfer (MFT) system with sharing and collaboration features",
		icon: "goanywhere.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "goanywhere:pageGlobal:0",
				kind: "pageGlobal",
				property: "appContainer",
				valuePattern: new RegExp("GoAnywhereWebClientContainer"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "goanywhere:responseHeader:1",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("goanywhere"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gocertify",
		name: "GoCertify",
		website: "https://www.gocertify.me",
		description: "GoCertify is a conversion-focused and cost-effective way to verify students, key workers, under-26s, over-60s, military and more for exclusive discounts.",
		icon: "GoCertify.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "gocertify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.gocertify\\.me/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gocertify:dom:1",
				kind: "dom",
				selector: "a[href*='secure.gocertify.me']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "gocertify:cookie:2",
				kind: "cookie",
				key: "_gocertify_session",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"payg"
			]
		}
	},
	{
		id: "godot",
		name: "Godot",
		website: "https://godotengine.org",
		description: "Godot is a game engine that supports exporting to HTML5 with WebAssembly compatibility.",
		icon: "Godot.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "godot:pageGlobal:0",
				kind: "pageGlobal",
				property: "GODOT_CONFIG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "godot:pageGlobal:1",
				kind: "pageGlobal",
				property: "Godot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"webassembly"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "gokwik",
		name: "GoKwik",
		website: "https://www.gokwik.co",
		description: "GoKwik is a platform for solving shopping experience problems on ecommerce websites on the internet.",
		icon: "GoKwik.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "gokwik:pageGlobal:0",
				kind: "pageGlobal",
				property: "gokwikBuyNow",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gokwik:pageGlobal:1",
				kind: "pageGlobal",
				property: "gokwikCheckoutApp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gokwik:pageGlobal:2",
				kind: "pageGlobal",
				property: "gokwikSdk",
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
		id: "google-cloud-storage",
		name: "Google Cloud Storage",
		website: "https://cloud.google.com/storage",
		description: "Google Cloud Storage allows world-wide storage and retrieval of any amount of data at any time.",
		icon: "google-cloud-storage.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "google-cloud-storage:responseHeader:0",
				kind: "responseHeader",
				key: "x-goog-storage-class",
				valuePattern: new RegExp("^\\w+$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"google-cloud"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "google-code-prettify",
		name: "Google Code Prettify",
		website: "https://code.google.com/p/google-code-prettify",
		icon: "Google.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "google-code-prettify:pageGlobal:0",
				kind: "pageGlobal",
				property: "prettyPrint",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gravatar",
		name: "Gravatar",
		website: "https://gravatar.com",
		description: "Gravatar is a service for providing globally unique avatars.",
		icon: "Gravatar.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "gravatar:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+gravatar\\.com/avatar/"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "gravatar:pageGlobal:1",
				kind: "pageGlobal",
				property: "Gravatar",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gravitec",
		name: "Gravitec",
		website: "https://gravitec.net",
		description: "Gravitec is a push notification tool.",
		icon: "Gravitec.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "gravitec:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn|id)\\.gravitec\\.(?:media|net)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gravitec:pageGlobal:1",
				kind: "pageGlobal",
				property: "Gravitec",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gravitec:pageGlobal:2",
				kind: "pageGlobal",
				property: "gravitecWebpackJsonp",
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
		id: "gridster",
		name: "Gridster",
		website: "https://dsmorse.github.io/gridster.js",
		description: "Gridster is a jQuery plugin used to draw dashboards with drag-and-drop widgets.",
		categories: [
			"widgets-misc",
			"ui-library",
			"framework"
		],
		rules: [
			{
				id: "gridster:pageGlobal:0",
				kind: "pageGlobal",
				property: "Gridster",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gridster:pageGlobal:1",
				kind: "pageGlobal",
				property: "GridsterCollision",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gridster:pageGlobal:2",
				kind: "pageGlobal",
				property: "GridsterCoords",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gridster:pageGlobal:3",
				kind: "pageGlobal",
				property: "GridsterDraggable",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "gumstack",
		name: "Gumstack",
		website: "https://gumstack.com/",
		description: "Gumstack provides a live video shopping solution for eCommerce.",
		icon: "Gumstack.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "gumstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("w\\.gumstack\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gumstack:pageGlobal:1",
				kind: "pageGlobal",
				property: "Gumstack",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "h5ai",
		name: "h5ai",
		website: "https://github.com/lrsjng/h5ai",
		description: "h5ai is a modern HTTP web server index for Apache httpd, lighttpd, and nginx.",
		icon: "default.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "h5ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/_h5ai/(?:public|client)/js/scripts\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "hansel",
		name: "Hansel",
		website: "https://hansel.io",
		description: "Hansel is a B2B enterprise software that deploys real-time Nudges to drive feature adoption and address user drop-offs, at scale.",
		icon: "Hansel.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "hansel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hansel\\.io/web/([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hansel:pageGlobal:1",
				kind: "pageGlobal",
				property: "Hansel",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hansel:pageGlobal:2",
				kind: "pageGlobal",
				property: "HanselPX",
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
		id: "harborbyte",
		name: "HarborByte",
		website: "https://harborbyte.com",
		description: "HarborByte is a small business website platform that provides templated sites with integrated ecommerce, marketing, and hosting solutions.",
		icon: "HarborByte.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "harborbyte:responseHeader:0",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("harborbyte\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "harborbyte:meta:1",
				kind: "meta",
				key: "content-security-policy",
				valuePattern: new RegExp("harborbyte-media-assets\\.pages\\.dev"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "harborbyte:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Website by HarborByte$"),
				description: "Meta tag matches a known technology marker."
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
		id: "hasura",
		name: "Hasura",
		website: "https://hasura.io",
		description: "Hasura is an open-source engine that enables developers to effortlessly create real-time GraphQL APIs by auto-generating them from existing database schemas.",
		icon: "Hasura.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "hasura:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hasura\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"graphql"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"freemium",
				"payg",
				"poa"
			],
			cpe: "cpe:2.3:a:hasura:graphql_engine:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "headway",
		name: "Headway",
		website: "https://headwayapp.co",
		description: "Headway is a product widget that keeps customers informed about updates and changes.",
		icon: "Headway.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "headway:responseHeader:0",
				kind: "responseHeader",
				key: "X-Hello",
				valuePattern: new RegExp("^headway$"),
				description: "Response header matches a known technology marker."
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
		id: "hearth",
		name: "Hearth",
		website: "https://gethearth.com",
		description: "Hearth is a financial services platform that provides financing options for home improvement projects.",
		icon: "Hearth.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "hearth:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.gethearth\\.com"),
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
		id: "hello-bar",
		name: "Hello Bar",
		website: "https://hellobar.com",
		description: "Hello Bar is a customizable notification bar that draws visitors to an important call to action on the website.",
		icon: "Hello Bar.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "hello-bar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.?hellobar\\.(?:com|js)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hello-bar:pageGlobal:1",
				kind: "pageGlobal",
				property: "HelloBar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hello-bar:pageGlobal:2",
				kind: "pageGlobal",
				property: "hellobarSiteSettings",
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
		id: "history",
		name: "History",
		website: "https://github.com/ReactTraining/history",
		description: "Manage session history with JavaScript",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "history:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/history(@|/)([\\d.]+)(?:/[a-z]+)?/history(?:(.production|.development))?(?:.min)?\\.js"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ht-mega",
		name: "HT Mega",
		website: "https://wordpress.org/plugins/ht-mega-for-elementor/",
		description: "Elementor addons package for Elementor.",
		icon: "HT Mega.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "ht-mega:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ht-mega-for-elementor(?:\\/admin)?\\/assets\\/js(?:\\/admin)?(?:\\/(?:htb)?bootstrap)?(?:\\/jquery)?(?:\\/popper)?(?:\\/slick)?(?:\\/waypoints)?(?:\\.counterup)?(?:\\/htmega-widgets-active)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ht-mega:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/ht-mega-for-elementor/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "http-2",
		name: "HTTP/2",
		website: "https://http2.github.io",
		description: "HTTP/2 (originally named HTTP/2.0) is a major revision of the HTTP network protocol used by the World Wide Web.",
		icon: "HTTP2.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "http-2:responseHeader:0",
				kind: "responseHeader",
				key: "Alt-Svc",
				valuePattern: new RegExp("h2"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "http-2:responseHeader:1",
				kind: "responseHeader",
				key: "X-Firefox-Spdy",
				valuePattern: new RegExp("h2"),
				description: "Response header matches a known technology marker."
			}
		],
		excludes: [
			"spdy"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "http-3",
		name: "HTTP/3",
		website: "https://httpwg.org/",
		description: "HTTP/3 is the third major version of the Hypertext Transfer Protocol used to exchange information on the World Wide Web.",
		icon: "HTTP3.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "http-3:responseHeader:0",
				kind: "responseHeader",
				key: "Alt-Svc",
				valuePattern: new RegExp("h3"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "http-3:responseHeader:1",
				kind: "responseHeader",
				key: "X-Firefox-Http3",
				valuePattern: new RegExp("h3"),
				description: "Response header matches a known technology marker."
			}
		],
		excludes: [
			"http-2"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hurrytimer",
		name: "HurryTimer",
		website: "https://wordpress.org/plugins/hurrytimer",
		description: "HurryTimer is a cutting-edge WordPress plugin that enables users to create customizable, scheduled countdown timers to further engage visitors and increase conversions.",
		icon: "HurryTimer.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "hurrytimer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("hurrytimer(?:\\/assets)?(?:\\/js)?(?:\\/cookie)?(?:\\/jquery)?(?:\\.countdown)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hurrytimer:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/hurrytimer/'], #hurrytimer, #hurrytimer-css",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "hurrytimer:pageGlobal:2",
				kind: "pageGlobal",
				property: "hurrytimer_ajax_object",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "iconscout",
		name: "IconScout",
		website: "https://iconscout.com",
		description: "IconScout is a platform that offers a diverse collection of high-quality icons and design resources for creative professionals, allowing them to enhance their projects with visually appealing elements.",
		icon: "IconScout.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "iconscout:dom:0",
				kind: "dom",
				selector: "link[href*='.iconscout.com/'], img[src*='.iconscout.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "iframely",
		name: "Iframely",
		website: "https://iframely.com",
		description: "Iframely is a uniform delivery service for rich media embeds and URL metadata across various platforms.",
		icon: "Iframely.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "iframely:pageGlobal:0",
				kind: "pageGlobal",
				property: "iframely.ASPECT_WRAPPER_CLASS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "iframely:pageGlobal:1",
				kind: "pageGlobal",
				property: "loadIframelyEmbedJs",
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
		id: "ihomefinder-idx",
		name: "iHomefinder IDX",
		website: "https://www.ihomefinder.com",
		description: "iHomefinder provides IDX property search, built-in CRM, and marketing tools.",
		icon: "iHomefinder IDX.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ihomefinder-idx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.idxhome\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ihomefinder-idx:pageGlobal:1",
				kind: "pageGlobal",
				property: "ihfJquery",
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
		id: "infogram",
		name: "Infogram",
		website: "https://infogram.com",
		description: "Infogram is a web-based data visualisation and infographics platform.",
		icon: "Infogram.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "infogram:dom:0",
				kind: "dom",
				selector: "iframe[src*='.infogram.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "infogram:pageGlobal:1",
				kind: "pageGlobal",
				property: "InfogramEmbeds",
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
		id: "instabot",
		name: "Instabot",
		website: "https://instabot.io/",
		description: "Instabot is a conversion chatbot that understands your users, and curates information, answers questions, captures contacts, and books meetings instantly.",
		icon: "Instabot.svg",
		categories: [
			"widgets-misc",
			"analytics",
			"marketing-automation",
			"email-messaging"
		],
		rules: [
			{
				id: "instabot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/rokoInstabot\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instabot:pageGlobal:1",
				kind: "pageGlobal",
				property: "Instabot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "instagram-feed-for-wordpress",
		name: "Instagram Feed for WordPress",
		website: "https://wordpress.org/plugins/instagram-feed/",
		description: "Display Instagram photos from any non-private Instagram accounts.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "instagram-feed-for-wordpress:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("instagram-feed(?:\\/js)?(?:\\/sbi-scripts)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "instagram-feed-for-wordpress:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/instagram-feed'], a[data-full-res*='/wp-content/uploads/sb-instagram-feed-images/'], img[src*='/wp-content/uploads/sb-instagram-feed-images/'], img[src*='/wp-content/plugins/instagram-feed/'], img[data-src*='/wp-content/uploads/sb-instagram-feed-images/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true,
			pricing: [
				"low"
			]
		}
	},
	{
		id: "interact",
		name: "Interact",
		website: "https://www.tryinteract.com",
		description: "Interact is a tool for creating online quizzes.",
		icon: "Interact.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "interact:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tryinteract\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "interact:pageGlobal:1",
				kind: "pageGlobal",
				property: "InteractApp.name",
				valuePattern: new RegExp("InteractApp"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "interact:pageGlobal:2",
				kind: "pageGlobal",
				property: "InteractPromotionObject",
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
		id: "interactivecalculator",
		name: "InteractiveCalculator",
		website: "https://www.interactivecalculator.com",
		description: "InteractiveCalculator is a platform that enables users to create customized calculators that can be embedded on their website.",
		icon: "InteractiveCalculator.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "interactivecalculator:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.interactivecalculator\\.com/"),
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
		id: "issuu",
		name: "Issuu",
		website: "https://issuu.com",
		description: "Issuu is a digital discovery and publishing platform.",
		icon: "Issuu.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "issuu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.issuu\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "issuu:dom:1",
				kind: "dom",
				selector: "a[href*='issuu.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "issuu:pageGlobal:2",
				kind: "pageGlobal",
				property: "IssuuReaders",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "issuu:pageGlobal:3",
				kind: "pageGlobal",
				property: "issuuPanel",
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
		id: "jade",
		name: "Jade",
		website: "https://jade-lang.com",
		description: "Jade is a templating engine primarily used for server-side templating in NodeJS.",
		icon: "Jade.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "jade:pageGlobal:0",
				kind: "pageGlobal",
				property: "JADE.components",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jetboost",
		name: "Jetboost",
		website: "https://www.jetboost.io",
		description: "Jetboost is a tool that enables real-time search, dynamic filtering, and other features for Webflow sites without requiring code.",
		icon: "Jetboost.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "jetboost:pageGlobal:0",
				kind: "pageGlobal",
				property: "JETBOOST_SITE_ID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jetboost:pageGlobal:1",
				kind: "pageGlobal",
				property: "Jetboost.loaded",
				description: "Page-owned global matches a known technology marker."
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
		id: "jive",
		name: "Jive",
		website: "https://www.jivesoftware.com",
		icon: "Jive.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "jive:responseHeader:0",
				kind: "responseHeader",
				key: "X-JIVE-USER-ID",
				description: "Response header matches a known technology marker."
			},
			{
				id: "jive:responseHeader:1",
				kind: "responseHeader",
				key: "X-JSL",
				description: "Response header matches a known technology marker."
			},
			{
				id: "jive:responseHeader:2",
				kind: "responseHeader",
				key: "X-Jive-Flow-Id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "jive:responseHeader:3",
				kind: "responseHeader",
				key: "X-Jive-Request-Id",
				description: "Response header matches a known technology marker."
			},
			{
				id: "jive:responseHeader:4",
				kind: "responseHeader",
				key: "x-jive-chrome-wrapped",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "jobberbase",
		name: "JobberBase",
		website: "https://www.jobberbase.com",
		description: "Jobberbase is an open-source job board platform that enables the creation of job sites.",
		icon: "JobberBase.svg",
		categories: [
			"widgets-misc",
			"business-tools"
		],
		rules: [
			{
				id: "jobberbase:pageGlobal:0",
				kind: "pageGlobal",
				property: "Jobber",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jobberbase:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Jobberbase"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "k2",
		name: "K2",
		website: "https://getk2.org",
		description: "K2 is a content management extension for Joomla, developed by JoomlaWorks, that enhances Joomla's capabilities by providing features like rich content forms, nested categories, tags, comments, and more.",
		icon: "K2.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "k2:html:0",
				kind: "html",
				pattern: new RegExp("<!--(?: JoomlaWorks \"K2\"| Start K2)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "k2:pageGlobal:1",
				kind: "pageGlobal",
				property: "K2RatingURL",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"joomla"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "kakao",
		name: "Kakao",
		website: "https://developers.kakao.com/product",
		description: "Kakao platform provides various services such as Kakao Talk, Kakao Talk Channel, Kakao Story as well as Kakao Pay, Kakao Commerce, Kakao Page provided by the subsidiaries. Users can use all Kakao platform services with a united account called Kakao Account.",
		icon: "Kakao.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "kakao:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kakao\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kakao:dom:1",
				kind: "dom",
				selector: "a[href*='.kakao.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kakao:pageGlobal:2",
				kind: "pageGlobal",
				property: "Kakao.VERSION",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
		id: "klaviyo-customer-hub",
		name: "Klaviyo Customer Hub",
		website: "https://www.klaviyo.com/products/customer-experience-hub",
		description: "Klaviyo Customer Hub gives customers a unified signed-in experience to track orders, manage returns, and get help",
		icon: "Klaviyo.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "klaviyo-customer-hub:pageGlobal:1",
				kind: "pageGlobal",
				property: "customerHub",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ko-fi",
		name: "Ko-fi",
		website: "https://ko-fi.com",
		description: "Ko-fi is an online platform that helps content creators get the financial support.",
		icon: "Ko-fi.svg",
		categories: [
			"widgets-misc",
			"fundraising-donations"
		],
		rules: [
			{
				id: "ko-fi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ko-fi\\.com/widgets"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ko-fi:dom:1",
				kind: "dom",
				selector: "a[href*='ko-fi.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ko-fi:pageGlobal:2",
				kind: "pageGlobal",
				property: "kofiwidget2",
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
		id: "laga-widget",
		name: "Laga Widget",
		website: "https://laga.se",
		description: "Laga Widget is a tool for car dismantlers to search and manage parts within their inventory.",
		icon: "LagaWidget.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "laga-widget:pageGlobal:0",
				kind: "pageGlobal",
				property: "laga-widget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "laga-widget:pageGlobal:1",
				kind: "pageGlobal",
				property: "lagaWidgetOptions",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lengow",
		name: "Lengow",
		website: "https://www.lengow.com",
		description: "Lengow is an ecommerce automation solution that enables brands and retailers to integrate, structure and optimise their product content across all distribution channels: marketplaces, comparison shopping engines, affiliate platforms, display and retargeting.",
		icon: "Lengow.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "lengow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lengow\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"poa"
			]
		}
	},
	{
		id: "less",
		name: "Less",
		website: "https://lesscss.org",
		description: "Less is a CSS preprocessor, providing a set of extensions and features to traditional Cascading Style Sheets (CSS) for improved maintainability and ease of styling in web development.",
		icon: "Less.svg",
		categories: [
			"widgets-misc",
			"styling-processor"
		],
		rules: [
			{
				id: "less:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+ rel=\"stylesheet/less\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "less:dom:1",
				kind: "dom",
				selector: "link[rel='stylesheet/less']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "libravatar",
		name: "Libravatar",
		website: "https://www.libravatar.org/",
		description: "Libravatar is a service for fetching avatar images for e-mail addresses and OpenIDs in a privacy respecting way.",
		icon: "libravatar.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "libravatar:dom:0",
				kind: "dom",
				selector: "img[src*='.libravatar.org/avatar/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "lifter-apps-pop-up-window",
		name: "Lifter Apps Pop-up Window",
		website: "https://lifterapps.com",
		description: "Lifter Apps Pop-up Window is a customizable on-site feature designed to capture visitor emails and highlight sales promotions.",
		icon: "LifterApps.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "lifter-apps-pop-up-window:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("(?:\\.lifterpopup\\.com|popup\\.lifterapps\\.com)"),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
			"shopify"
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
		id: "loqate",
		name: "Loqate",
		website: "https://www.loqate.com",
		description: "Loqate is an address verification solution.",
		icon: "Loqate.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "loqate:pageGlobal:0",
				kind: "pageGlobal",
				property: "loqateAccountCode",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "loqate:pageGlobal:1",
				kind: "pageGlobal",
				property: "pca.platform.productList",
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
		id: "lottiefiles",
		name: "LottieFiles",
		website: "https://lottiefiles.com",
		description: "LottieFiles is an open-source animation file format that's tiny, high quality, interactive, and can be manipulated at runtime.",
		icon: "LottieFiles.svg",
		categories: [
			"widgets-misc",
			"animation"
		],
		rules: [
			{
				id: "lottiefiles:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/dist/lottie-player\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lottiefiles:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/dist/tgs-player\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lottiefiles:dom:2",
				kind: "dom",
				selector: "lottie-player, div[data-animation-type='lottie'], div[data-testid='lottie-player'], clipPath[id*='__lottie_element_']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "lottiefiles:pageGlobal:3",
				kind: "pageGlobal",
				property: "dotlottie-player",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "lottiefiles:pageGlobal:4",
				kind: "pageGlobal",
				property: "lottie.version",
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
		id: "lou",
		name: "LOU",
		website: "https://www.louassist.com",
		description: "LOU is a Digital Adoption Platform that streamlines user onboarding and training.",
		icon: "LOU.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "lou:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.louassist\\.com*"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "magewire",
		name: "Magewire",
		website: "https://github.com/magewirephp/magewire",
		description: "Magewire is a Laravel Livewire port for Magento 2.",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "magewire:pageGlobal:0",
				kind: "pageGlobal",
				property: "Magewire.connection-author",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "magewire:pageGlobal:1",
				kind: "pageGlobal",
				property: "magewire",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"laravel",
			"livewire"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "magicbell",
		name: "MagicBell",
		website: "https://www.magicbell.com",
		description: "MagicBell is an embeddable notification inbox that allows applications to display and manage user notifications within their interfaces.",
		icon: "MagicBell.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "magicbell:responseHeader:0",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.magicbell\\.com"),
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
		id: "mailoptin",
		name: "MailOptin",
		website: "https://mailoptin.io/",
		description: "WordPress plugin to create email signup forms that convert visitors into subscribers combined with email automation and newsletter features.",
		icon: "MailOptin.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "mailoptin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mailoptin(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mailoptin:pageGlobal:1",
				kind: "pageGlobal",
				property: "mailoptin_globals",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "mangeznotez",
		name: "Mangeznotez",
		website: "https://www.mangeznotez.com",
		description: "Mangeznotez is a restaurant table booking widget.",
		icon: "Mangeznotez.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling",
			"table-library"
		],
		rules: [
			{
				id: "mangeznotez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.mangeznotez\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mangeznotez:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\w+.mangeznotez\\.\\w+(?:.*\\?ver=([\\d.]+))?"),
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
		id: "mappress",
		name: "MapPress",
		website: "https://mappresspro.com",
		description: "MapPress is a WordPress plugin that provides easy integration of interactive maps into WordPress websites.",
		icon: "MapPress.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "mappress:dom:0",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/mappress-google-maps-for-wordpress/'], #mappress-leaflet-css, #mappress-css",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "marketo-forms",
		name: "Marketo Forms",
		website: "https://www.marketo.com",
		description: "Marketo Forms help create web forms without programming knowledge. Forms can reside on Marketo landing pages and also be embedded on any page of website.",
		icon: "Marketo.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "marketo-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("marketo\\.\\w+/js/forms(?:[\\d.]+)/js/forms([\\d.]+)\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marketo-forms:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("v([\\d.]+)/js/marketo-alt-form\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "marketo-forms:pageGlobal:2",
				kind: "pageGlobal",
				property: "formatMarketoForm",
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
		id: "max-mega-menu",
		name: "Max Mega Menu",
		website: "https://www.megamenu.com/",
		description: "Max Mega Menu is a popular WordPress plugin that enhances the menu functionality on WordPress websites.",
		icon: "Max Mega Menu.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "max-mega-menu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:max)?megamenu(?:-pro)?(?:\\/assets)?(?:\\/public)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "max-mega-menu:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/uploads/maxmegamenu/'], link[href*='/wp-content/plugins/megamenu-pro/'], link#megamenu-css, .mega-menu, .max-mega-menu, .mega-menu-megamenu, .mega-menu-primary, .mega-menu-item",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "max-mega-menu:pageGlobal:2",
				kind: "pageGlobal",
				property: "megamenu",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
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
		id: "meebo",
		name: "Meebo",
		website: "https://www.meebo.com",
		description: "Meebo is a widget that is integrated into websites to facilitate link sharing.",
		icon: "Meebo.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "meebo:html:0",
				kind: "html",
				pattern: new RegExp("(?:<iframe id=\"meebo-iframe\"|Meebo\\('domReady'\\))"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "meebo:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.meebo\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "meebo:pageGlobal:2",
				kind: "pageGlobal",
				property: "Meebo._",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "meeting-scheduler",
		name: "Meeting Scheduler",
		website: "https://bookmenow.info",
		description: "Meeting Scheduler is a schedule appointments widget.",
		icon: "Meeting Scheduler.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "meeting-scheduler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bookmenow\\.info/(?:runtime|main).+\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "meeting-scheduler:dom:1",
				kind: "dom",
				selector: "a[href*='bookmenow.info/book']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "meks-simple-flickr-widget",
		name: "Meks Simple Flickr Widget",
		website: "https://wordpress.org/plugins/meks-simple-flickr-widget",
		description: "Meks Simple Flickr Widget is a WordPress plugin created by Meks. This plugin is designed to help WordPress website owners easily integrate Flickr photo streams into their websites.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "meks-simple-flickr-widget:dom:0",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/meks-simple-flickr-widget/'], link#meks-flickr-widget-css",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "memberspace",
		name: "MemberSpace",
		website: "https://www.memberspace.com",
		description: "MemberSpace is a cloud-based membership solution, which allows users to provide role-based access to content.",
		icon: "MemberSpace.svg",
		categories: [
			"widgets-misc",
			"commerce-operations"
		],
		rules: [
			{
				id: "memberspace:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("memberspace\\.com(?:\\/widget)?(?:\\/\\w{0,25})?(?:\\/scripts)?(?:\\/widgets)?(?:\\/main)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "memberspace:pageGlobal:1",
				kind: "pageGlobal",
				property: "MemberSpace",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "memberspace:pageGlobal:2",
				kind: "pageGlobal",
				property: "MemberSpaceParams",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "mentaya",
		name: "Mentaya",
		website: "https://www.mentaya.com",
		description: "Mentaya is a platform that simplifies mental health care by leveraging out-of-network benefits to reduce patient costs while ensuring therapists receive full fees.",
		icon: "Mentaya.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "mentaya:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.mentaya.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "mentaya:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Mentaya"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "mesmerize-companion",
		name: "Mesmerize Companion",
		website: "https://wordpress.org/plugins/mesmerize-companion",
		description: "The Mesmerize Companion is a WordPress plugin that enhances the Mesmerize theme by adding drag-and-drop page builder functionality.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "mesmerize-companion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mesmerize-companion\\/theme-data\\/mesmerize\\/assets\\/js\\/companion(?:\\.bundle)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mesmerize-companion:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/mesmerize-companion/'], link#companion-bundle-css",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "meticular",
		name: "Meticular",
		website: "https://www.metikular.ch",
		description: "Meticular is a Swiss platform that provides business solutions and services to support organizational operations.",
		icon: "Meticular.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "meticular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.metikular\\.ch"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "metronet-profile-picture",
		name: "Metronet Profile Picture",
		website: "https://wordpress.org/plugins/metronet-profile-picture/",
		description: "Set a custom profile image for a user using the standard WordPress media upload tool.",
		icon: "Metronet Profile Picture.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "metronet-profile-picture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("metronet-profile-picture(?:\\/js)?(?:\\/mpp-frontend)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "metronet-profile-picture:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/metronet-profile-picture/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "mice-operations",
		name: "MICE Operations",
		website: "https://www.miceoperations.com",
		description: "MICE Operations is a software solution tailored for event venues, catering, and hospitality businesses, streamlining operational processes, sales, and client relationship management.",
		icon: "MICEOperations.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "mice-operations:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.miceoperations\\.com/widget/widget\\.js\\?ver=([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mice-operations:pageGlobal:1",
				kind: "pageGlobal",
				property: "miceWidgetSettings",
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
		id: "microsoft-silverlight",
		name: "Microsoft Silverlight",
		website: "http://silverlight.net",
		description: "Microsoft Silverlight is a cross-browser, cross-platform plug-in designed for delivering advanced .NET-based media experiences.",
		icon: "MicrosoftSilverlight.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "microsoft-silverlight:pageGlobal:0",
				kind: "pageGlobal",
				property: "SILVERLIGHT_SUPPORTED",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "microsoft-silverlight:pageGlobal:1",
				kind: "pageGlobal",
				property: "Silverlight.getSilverlight",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "milotree",
		name: "MiloTree",
		website: "https://milotree.com",
		description: "MiloTree is a pop-up tool that helps websites grow by converting visitors into social media followers and customers.",
		icon: "MiloTree.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "milotree:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn001\\.milotree\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "milotree:pageGlobal:1",
				kind: "pageGlobal",
				property: "milotree_closeBox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "milotree:pageGlobal:2",
				kind: "pageGlobal",
				property: "milotree_openBox",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "milotree:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^milotree"),
				description: "Meta tag matches a known technology marker."
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
		id: "mindbody",
		name: "MindBody",
		website: "https://www.mindbodyonline.com",
		description: "Mindbody is a (SaaS) company that provides cloud-based online scheduling and other business management software for the wellness services industry.",
		icon: "MindBody.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "mindbody:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\w+\\.healcode\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mindbody:pageGlobal:1",
				kind: "pageGlobal",
				property: "HealcodeWidget",
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
		id: "miniorange-login",
		name: "MiniOrange Login",
		website: "https://wordpress.org/plugins/miniorange-login-openid",
		description: "Social Login with Discord, Facebook, Google, Twitter, LinkedIn and other apps.",
		icon: "MiniOrange Login.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "miniorange-login:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("miniorange-login-openid\\/includes\\/js(?:\\/mo_openid_jquery)?(?:\\/mo-openid-social_login)?(?:\\/social_login)?(?:\\/jquery)?(?:\\.cookie)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "miniorange-login:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/miniorange-login-openid/'], #js-cookie-script-js, #mo-social-login-script-js",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "module-federation",
		name: "Module Federation",
		website: "https://webpack.js.org/concepts/module-federation/",
		description: "Module Federation is a webpack technology for dynamically loading parts of other independently deployed builds.",
		icon: "Webpack.svg",
		categories: [
			"widgets-misc",
			"bundler"
		],
		rules: [
			{
				id: "module-federation:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("Container initialization failed as it has already been initialized with a different share scope"),
				description: "Script content contains a bounded technology signature."
			}
		],
		implies: [
			"webpack"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "moon-organizer",
		name: "Moon Organizer",
		website: "https://moonorganizer.com",
		description: "Moon Organizer is a platform that tracks lunar cycles, phases, and moon-related events to support planning and provide timely updates.",
		icon: "MoonOrganizer.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "moon-organizer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.moonorganizer\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "morningtrain",
		name: "Morningtrain",
		website: "https://morningtrain.dk/vi-lukker-morningcatch",
		description: "Morningtrain is a pop-up window tool designed in Denmark for generating and capturing leads through on-site user engagement.",
		icon: "Morningtrain.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "morningtrain:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.morningcatch\\.net"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "morningtrain:meta:1",
				kind: "meta",
				key: "designer",
				valuePattern: new RegExp("^Morning Train$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "moverbase",
		name: "MoverBase",
		website: "https://www.moverbase.com",
		description: "MoverBase is a software solution that includes features designed to support the management of a moving company.",
		icon: "MoverBase.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "moverbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lead\\.moverbase\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "moxie",
		name: "Moxie",
		website: "https://github.com/moxiecode/moxie",
		description: "Pollyfills for XHR2 and File API",
		categories: [
			"widgets-misc",
			"accessibility",
			"api-pattern"
		],
		rules: [
			{
				id: "moxie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("moxie(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?"),
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
		id: "mulberry",
		name: "Mulberry",
		website: "https://www.getmulberry.com",
		description: "Mulberry is a developer of personalised product protection solutions used to help brands unlock additional revenue.",
		icon: "Mulberry.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "mulberry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getmulberry\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mulberry:pageGlobal:1",
				kind: "pageGlobal",
				property: "mulberry.cta",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mulberry:pageGlobal:2",
				kind: "pageGlobal",
				property: "mulberryShop",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"cart-functionality"
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
		id: "mybloglog",
		name: "MyBlogLog",
		website: "https://www.mybloglog.com",
		icon: "MyBlogLog.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "mybloglog:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pub\\.mybloglog\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "myhkw-player",
		name: "Myhkw player",
		website: "https://myhkw.cn",
		description: "Myhkw player is a website music player.",
		icon: "Myhkw player.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "myhkw-player:pageGlobal:0",
				kind: "pageGlobal",
				property: "myhk_player_songid",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "myhkw-player:pageGlobal:1",
				kind: "pageGlobal",
				property: "myhkplayerlist",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "navidium-shipping-protection",
		name: "Navidium Shipping Protection",
		website: "https://navidiumapp.com",
		description: "Navidium is a shipping insurance company that covers packages that are lost, stolen, or damaged in transit. Navidium Shipping Protection is an optional shipping protection service where, in the event of an incident (the order is damaged, lost, or stolen during transit), we will immediately re-ship any damaged, lost, or stolen products.",
		icon: "Navidium.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "navidium-shipping-protection:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^.*/navidium-extension-checker\\.js$"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "navidium-shipping-protection:pageGlobal:1",
				kind: "pageGlobal",
				property: "nvdShop",
				valuePattern: new RegExp("\\.myshopify\\.com"),
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
		id: "newstore",
		name: "NewStore",
		website: "https://www.newstore.com",
		description: "NewStore is the only integrated platform offering omnichannel solutions for stores and consumers.",
		icon: "NewStore.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "newstore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.api\\.highstreetapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "newstore:pageGlobal:1",
				kind: "pageGlobal",
				property: "highstreetBanner.config",
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
		id: "nextsale",
		name: "Nextsale",
		website: "https://nextsale.io",
		description: "Nextsale is a conversion optimisation platform that provides social proof and urgency tools for ecommerce websites.",
		icon: "Nextsale.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "nextsale:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:api|sdk)\\.nextsale\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nextsale:pageGlobal:1",
				kind: "pageGlobal",
				property: "NextsaleObject",
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
		id: "nido-tecnologia",
		name: "Nido Tecnologia",
		website: "https://www.nido.com.br",
		description: "Nido Tecnologia is a platform that provides software solutions for the real estate industry in Brazil.",
		icon: "NidoTecnologia.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "nido-tecnologia:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.nidoimovel\\.com\\.br"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "nido-tecnologia:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Nido Tecnologia$"),
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
		id: "nogin",
		name: "Nogin",
		website: "https://www.nogin.com",
		description: "Nogin is a platform operating as Commerce-as-a-Service (CaaS), offering cloud-based ecommerce functionalities and infrastructure for seamless integration and development of ecommerce solutions.",
		icon: "Nogin.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "nogin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nogin\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nogin:pageGlobal:1",
				kind: "pageGlobal",
				property: "NoginConfig",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "nogin:pageGlobal:2",
				kind: "pageGlobal",
				property: "nogin.wishlist",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "nopstation",
		name: "nopStation",
		website: "https://www.nop-station.com",
		description: "nopStation is a one stop ecommerce solution with custom integrations and custom built plugins based on custom tailored requirements on top of nopCommerce.",
		icon: "nopStation.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "nopstation:dom:0",
				kind: "dom",
				selector: "a[href*='.nop-station.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		requires: [
			"nopcommerce"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "nowbuttons",
		name: "NowButtons",
		website: "https://nowbuttons.com",
		description: "NowButtons is a floating action button plugin that enhances website interactivity by providing quick access to key actions and improving user conversion rates.",
		icon: "NowButtons.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "nowbuttons:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.callnowbutton\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nowbuttons:dom:1",
				kind: "dom",
				selector: "link[href*='static.callnowbutton.com/']",
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
		id: "octane-ai",
		name: "Octane AI",
		website: "https://www.octaneai.com",
		description: "Octane AI provides an all-in-one platform for engaging quizzes, data collection, and personalised Facebook Messenger and SMS automation.",
		icon: "Octane AI.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "octane-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.octaneai\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "octane-ai:pageGlobal:1",
				kind: "pageGlobal",
				property: "OctaneConfig",
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
		id: "okmenu",
		name: "OkMenu",
		website: "https://oktabletmenu.com",
		description: "OkMenu is a provider of an all-in-one restaurant QR menu.",
		icon: "OkMenu.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "okmenu:dom:0",
				kind: "dom",
				selector: "div#__okmenu__",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "omny-studio",
		name: "Omny Studio",
		website: "https://omnystudio.com",
		description: "Omny Studio is a podcast hosting solution, which enables radio stations and enterprises to manage, monetize, publish, share, edit and analyze audio episodes.",
		icon: "Omny Studio.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "omny-studio:dom:0",
				kind: "dom",
				selector: "iframe[src*='//omny.fm/shows/']",
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
		id: "ookla-speedtest-custom",
		name: "Ookla Speedtest Custom",
		website: "https://www.ookla.com/speedtest-custom",
		description: "Speedtest Custom is a robust and accurate testing solution that is HTML5-based, Flash-free and supports both mobile and desktop browsers built by Ookla.",
		icon: "Ookla.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ookla-speedtest-custom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.speedtestcustom\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ookla-speedtest-custom:dom:1",
				kind: "dom",
				selector: "iframe[src*='.speedtestcustom.com'], a[href*='.speedtestcustom.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ookla-speedtest-custom:responseHeader:2",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.speedtestcustom\\.com"),
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
		id: "open-graph",
		name: "Open Graph",
		website: "https://ogp.me",
		description: "Open Graph is a protocol that is used to integrate any web page into the social graph.",
		icon: "Open Graph.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "open-graph:dom:0",
				kind: "dom",
				selector: "meta[property*='og:']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "opengrok",
		name: "OpenGrok",
		website: "https://hub.opensolaris.org/bin/view/Project+opengrok/WebHome",
		icon: "OpenGrok.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "opengrok:cookie:0",
				kind: "cookie",
				key: "OpenGrok",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "opengrok:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("OpenGrok(?: v?([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"java"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "oracle-dynamic-monitoring-service",
		name: "Oracle Dynamic Monitoring Service",
		website: "https://oracle.com",
		description: "Oracle Dynamic Monitoring Service is a feature of Oracle WebLogic Server that provides real-time monitoring and diagnostic capabilities for Java applications running on the WebLogic Server.",
		icon: "Oracle.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "oracle-dynamic-monitoring-service:responseHeader:0",
				kind: "responseHeader",
				key: "x-oracle-dms-ecid",
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"oracle-weblogic-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "outbrain",
		name: "Outbrain",
		website: "https://www.outbrain.com",
		description: "Outbrain is a web advertising platform that displays boxes of links, known as chumboxes, to pages within websites.",
		icon: "Outbrain.svg",
		categories: [
			"widgets-misc",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "outbrain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.outbrain\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "outbrain:pageGlobal:1",
				kind: "pageGlobal",
				property: "OB_ADV_ID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "outbrain:pageGlobal:2",
				kind: "pageGlobal",
				property: "OB_releaseVer",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "outbrain:pageGlobal:3",
				kind: "pageGlobal",
				property: "OutbrainPermaLink",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "outbrain:pageGlobal:4",
				kind: "pageGlobal",
				property: "obApi.version",
				valuePattern: new RegExp("^[\\d.]+$"),
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
		id: "owids",
		name: "Owids",
		website: "https://owids.com",
		description: "Owids is a set of widgets designed to improve website conversion rates and visitor engagement across platforms without requiring coding skills.",
		icon: "Owids.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "owids:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("sdk\\.owids\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "owids:pageGlobal:1",
				kind: "pageGlobal",
				property: "owidsSDKJSP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "owids:responseHeader:2",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("^X-Owids-Key$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "owncloud",
		name: "ownCloud",
		website: "https://owncloud.org",
		icon: "ownCloud.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "owncloud:html:0",
				kind: "html",
				pattern: new RegExp("<a href=\"https://owncloud\\.com\" target=\"_blank\">ownCloud Inc\\.</a><br/>Your Cloud, Your Data, Your Way!"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "owncloud:pageGlobal:1",
				kind: "pageGlobal",
				property: "oc_defaults",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "owncloud:meta:2",
				kind: "meta",
				key: "apple-itunes-app",
				valuePattern: new RegExp("app-id=543672169"),
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:owncloud:owncloud:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "pagelayer",
		name: "PageLayer",
		website: "https://wordpress.org/plugins/pagelayer",
		description: "Drag and drop page builder for Wordpress.",
		icon: "PageLayer.png",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "pagelayer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pagelayer(?:-frontend)?(?:\\/js)?(?:\\/combined)?(?:\\.min)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pagelayer:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/pagelayer/'], #pagelayer-frontend-css, #pagelayer-global-styles, .pagelayer-body, .pagelayer-header, .pagelayer-footer, .pagelayer-content",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "parcel",
		name: "parcel",
		website: "https://parceljs.org",
		description: "Parcel is an open-source web application bundler known for its zero-config approach, simplifying the process of building and bundling web projects.",
		icon: "Parcel.svg",
		categories: [
			"widgets-misc",
			"bundler"
		],
		rules: [
			{
				id: "parcel:pageGlobal:0",
				kind: "pageGlobal",
				property: "parcelRequire",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"swc"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:parceljs:parcel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "parkingcrew",
		name: "ParkingCrew",
		website: "https://www.parkingcrew.com",
		description: "ParkingCrew is a direct navigation monetisation provider.",
		icon: "ParkingCrew.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "parkingcrew:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("var\\slink\\s=\\s'www\\.parkingcrew\\.net'"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "parkingcrew:pageGlobal:1",
				kind: "pageGlobal",
				property: "pcrewAdloaded",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "patreon",
		name: "Patreon",
		website: "https://www.patreon.com",
		description: "Patreon is an American membership platform that provides business tools for content creators to run a subscription service.",
		icon: "Patreon.svg",
		categories: [
			"widgets-misc",
			"commerce-operations"
		],
		rules: [
			{
				id: "patreon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("patreon-connect/assets/.+ver=([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
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
		id: "paykickstart",
		name: "PayKickStart",
		website: "https://paykickstart.com",
		description: "PayKickstart is an online shopping cart and affiliate management platform with built-in conversion enhancing features like one-click upsells for credit card/paypal, order bumps, custom checkout pages/widgets/embed forms, coupon management, auto-complete shipping fields, subscription saver sequences, and more.",
		icon: "PayKickStart.svg",
		categories: [
			"widgets-misc",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "paykickstart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.paykickstart\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "pdf-js",
		name: "PDF.js",
		website: "https://mozilla.github.io/pdf.js/",
		icon: "PDF.js.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pdf-js:html:0",
				kind: "html",
				pattern: new RegExp("<\\/div>\\s*<!-- outerContainer -->\\s*<div\\s*id=\"printContainer\"><\\/div>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "pdf-js:url:1",
				kind: "url",
				pattern: new RegExp("/web/viewer\\.html?file=[^&]\\.pdf"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "pdf-js:dom:2",
				kind: "dom",
				selector: "div[id*='printContainer']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pdf-js:pageGlobal:3",
				kind: "pageGlobal",
				property: "PDFJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pdf-js:pageGlobal:4",
				kind: "pageGlobal",
				property: "PDFJS.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pdf-js:pageGlobal:5",
				kind: "pageGlobal",
				property: "_pdfjsCompatibilityChecked",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pdf-js:pageGlobal:6",
				kind: "pageGlobal",
				property: "pdfjsDistBuildPdf.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pdf-js:pageGlobal:7",
				kind: "pageGlobal",
				property: "pdfjsLib.version",
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
		id: "peek",
		name: "Peek",
		website: "https://www.peek.com/",
		description: "Peek is a online booking system for tour and activity providers.",
		icon: "Peek.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "peek:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.peek\\.\\w+"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "peek:pageGlobal:1",
				kind: "pageGlobal",
				property: "Peek",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "peek:pageGlobal:2",
				kind: "pageGlobal",
				property: "PeekJsApi",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "peek:pageGlobal:3",
				kind: "pageGlobal",
				property: "_peekConfig",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "peerpal",
		name: "PeerPal",
		website: "https://gravyty.com/peerpal",
		description: "PeerPal is a platform that enhances the admission experience by connecting prospective families with students, alumni, faculty, and parent ambassadors.",
		icon: "PeerPal.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "peerpal:pageGlobal:0",
				kind: "pageGlobal",
				property: "initPeerPal",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "permutive",
		name: "Permutive",
		website: "https://permutive.com",
		description: "Permutive is a publisher-focused data management platform.",
		icon: "Permutive.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "permutive:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.permutive\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "permutive:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("api\\.permutive\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "permutive:pageGlobal:2",
				kind: "pageGlobal",
				property: "permutive",
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
		id: "petite-vue",
		name: "petite-vue",
		website: "https://github.com/vuejs/petite-vue",
		description: "petite-vue is an alternative distribution of Vue optimised for progressive enhancement.",
		icon: "vue.svg",
		categories: [
			"widgets-misc",
			"ui-library"
		],
		rules: [
			{
				id: "petite-vue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/petite-vue"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "petite-vue:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("/petite-vue@([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pinboard",
		name: "Pinboard",
		website: "https://pinboard.in",
		description: "Pinboard is a widget that displays bookmarks directly on a website for easy access and organization.",
		icon: "Pinboard.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pinboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("feeds\\.pinboard\\.in"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pinboard:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pinboard_Linkroll",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pinboard:pageGlobal:2",
				kind: "pageGlobal",
				property: "pinboardNS_callback",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "pinterest",
		name: "Pinterest",
		website: "https://pinterest.com",
		description: "Pinterest is an image sharing and social media service designed to enable saving and discovery of information.",
		icon: "Pinterest.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pinterest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//assets\\.pinterest\\.com/js/pinit\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pixc",
		name: "Pixc",
		website: "https://pixc.com",
		description: "Pixc is human powered image editing platform.",
		icon: "Pixc.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pixc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//pixc\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "plum-popup",
		name: "Plum Popup",
		website: "https://plumpopup.com",
		description: "Plum Popup is a tool for creating customizable popups designed to help increase sales by engaging visitors and promoting offers.",
		icon: "Plum.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "plum-popup:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.plumpopup\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "plum-popup:cookie:1",
				kind: "cookie",
				key: "plumPopupWixPerDayNew",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "plum-popup:cookie:2",
				kind: "cookie",
				key: "plumPopupWixStartDatePerDay",
				description: "Cookie name matches a known technology marker."
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
		id: "po-st",
		name: "Po.st",
		website: "https://www.po.st/",
		icon: "Po.st.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "po-st:pageGlobal:0",
				kind: "pageGlobal",
				property: "pwidget_config",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pocket",
		name: "Pocket",
		website: "https://getpocket.com",
		description: "Pocket is a social bookmarking service that can be integrated into a website with the use of a web widget.",
		icon: "pocket.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.getpocket\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pocket:dom:1",
				kind: "dom",
				selector: "iframe[src*='widgets.getpocket.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pocket:meta:2",
				kind: "meta",
				key: "pocket-site-verification'",
				description: "Meta tag matches a known technology marker."
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
		id: "podigee",
		name: "Podigee",
		website: "https://www.podigee.com",
		description: "Podigee is an independent company for podcast publishers. Podigee offers hosting, distribution, analytics and monetisation of podcasts.",
		icon: "Podigee.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "podigee:dom:0",
				kind: "dom",
				selector: "iframe[src*='cdn.podigee.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "podigee:pageGlobal:1",
				kind: "pageGlobal",
				property: "podigeePodcastPlayers",
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
		id: "podium",
		name: "Podium",
		website: "https://www.podium.com",
		description: "Podium is a customer communication platform for businesses who interact with customers on a local level.",
		icon: "Podium.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "podium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.podium\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "podium:pageGlobal:1",
				kind: "pageGlobal",
				property: "PodiumWebChat",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "podium:pageGlobal:2",
				kind: "pageGlobal",
				property: "podiumWebsiteWidgetLoaded",
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
		id: "poper",
		name: "Poper",
		website: "https://www.poper.ai",
		description: "Poper is an AI-powered onsite engagement platform designed to enhance user interactions, increase retention, and improve conversion rates.",
		icon: "Poper.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "poper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.poper\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "poper:pageGlobal:1",
				kind: "pageGlobal",
				property: "POPER_EXECUTED_STATE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "poper:pageGlobal:2",
				kind: "pageGlobal",
				property: "POPER_INSTANCES",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "popper",
		name: "Popper",
		website: "https://popper.js.org",
		description: "Popper is a positioning engine, its purpose is to calculate the position of an element to make it possible to position it near a given reference element.",
		icon: "Popper.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "popper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/popper(?:\\.min)?\\.js(?:/([0-9.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "popper:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("popperjs(?:/|-)core(?:@|-)([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "popper:pageGlobal:2",
				kind: "pageGlobal",
				property: "Popper.Defaults",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "popper:pageGlobal:3",
				kind: "pageGlobal",
				property: "Popper.applyStyles",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "popper:pageGlobal:4",
				kind: "pageGlobal",
				property: "createPopper",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "popupular",
		name: "Popupular",
		website: "https://popupular.io",
		description: "Popupular is a platform that allows easy embedding of Mailchimp forms, YouTube videos, Calendly calendars, etc. into fully controllable popups on your site, with no coding required.",
		icon: "Popupular.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "popupular:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.popupular\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "popupular:pageGlobal:1",
				kind: "pageGlobal",
				property: "Popupular",
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
		id: "porch",
		name: "Porch",
		website: "https://porch.com",
		description: "Porch is a moving management system that simplifies moving, insurance, and home improvement processes.",
		icon: "Porch.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "porch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.porch\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "porch:cookie:1",
				kind: "cookie",
				key: "PorchBITracking",
				description: "Cookie name matches a known technology marker."
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
		id: "powr",
		name: "POWR",
		website: "https://www.powr.io",
		description: "POWR is a cloud-based system of plugins that work on almost any website.",
		icon: "POWR.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "powr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.powr\\.io/powr\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "powr:pageGlobal:1",
				kind: "pageGlobal",
				property: "POWR_RECEIVERS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "powr:pageGlobal:2",
				kind: "pageGlobal",
				property: "loadPowr",
				description: "Page-owned global matches a known technology marker."
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
		id: "priice",
		name: "Priice",
		website: "https://priice.net",
		description: "Priice is a widget that tracks and monitors product prices, providing up-to-date information for comparison and analysis.",
		icon: "Priice.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "priice:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.priice.net']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "prism",
		name: "Prism",
		website: "https://prismjs.com",
		description: "Prism is an extensible syntax highlighter.",
		icon: "Prism.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "prism:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prism(?:\\.min)?(?:-\\w{0,64})?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "prism:pageGlobal:1",
				kind: "pageGlobal",
				property: "Prism",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "prism:pageGlobal:2",
				kind: "pageGlobal",
				property: "apex.libVersions.prismJs",
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
		id: "product-hunt",
		name: "Product Hunt",
		website: "https://www.producthunt.com",
		description: "Product Hunt is a community-based website that allows makers and marketers to launch their products or services and get in touch with their first real users.",
		icon: "Product Hunt.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "progress-moveit",
		name: "Progress MOVEit",
		website: "https://www.progress.com/moveit",
		description: "Progress MOVEit is a managed file transfer solution that enables secure and compliant transfer of sensitive files while providing automation, central management, and auditing capabilities.",
		icon: "Progress.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "progress-moveit:responseHeader:0",
				kind: "responseHeader",
				key: "X-Moveitisapi-Version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Response header matches a known technology marker."
			},
			{
				id: "progress-moveit:meta:1",
				kind: "meta",
				key: "apple-itunes-app",
				valuePattern: new RegExp("app-id=1500056420"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "progress-moveit:meta:2",
				kind: "meta",
				key: "google-play-app",
				valuePattern: new RegExp("app-id=com\\.progress\\.moveit\\.transfer\\.dev\\.appid"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "progress-ws-ftp",
		name: "Progress WS_FTP",
		website: "https://www.progress.com/ws_ftp",
		description: "Progress WS_FTP is a file transfer client software developed by Progress Software Corporation, supporting FTP, FTPS, SFTP, and HTTPS protocols with features like drag-and-drop support, file synchronization, and encrypted data transmission.",
		icon: "Progress.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "progress-ws-ftp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/ThinClient/(?:WTM|WebResource)(?:\\.axd|/public)"),
				confidence: 60,
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "progress-ws-ftp:dom:1",
				kind: "dom",
				selector: "form[name='formLogin'][action='login.aspx' i][id='formLogin']",
				confidence: 40,
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:progress:ws_ftp_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "proprofs-quiz-maker",
		name: "ProProfs Quiz Maker",
		website: "https://www.proprofs.com/quiz-school",
		description: "ProProfs Quiz Maker is a quiz-based widget builder that enables the creation of interactive quizzes for embedding on websites or digital platforms.",
		icon: "ProProfs.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "proprofs-quiz-maker:pageGlobal:0",
				kind: "pageGlobal",
				property: "GetSecureUrlProProfs",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "proprofs-quiz-maker:pageGlobal:1",
				kind: "pageGlobal",
				property: "ProProfsSaveBotReport",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "proprofs-quiz-maker:cookie:2",
				kind: "cookie",
				key: "pp_bot_kb_detail",
				description: "Cookie name matches a known technology marker."
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
		id: "provenexpert",
		name: "ProvenExpert",
		website: "https://www.provenexpert.com",
		description: "ProvenExpert is a review based marketing platform that allows users to create customer surveys, provides aggregate reviews and ratings.",
		icon: "ProvenExpert.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "provenexpert:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("provenexpert\\.\\w+/widget"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "proximis",
		name: "Proximis",
		website: "https://www.proximis.com",
		icon: "ProximisOmnichannel.svg",
		categories: [
			"widgets-misc",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "proximis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget-commerce(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pushad",
		name: "PushAd",
		website: "https://push-ad.com/en/home-page",
		description: "PushAd is a notification system from Poland.",
		icon: "PushAd.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pushad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.push-ad\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pushad:pageGlobal:1",
				kind: "pageGlobal",
				property: "PushAdReady",
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
		id: "pushly",
		name: "Pushly",
		website: "https://www.pushly.com",
		description: "Pushly is a web push notification platform that allows businesses to send real-time messages to their website visitors.",
		icon: "Pushly.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pushly:pageGlobal:0",
				kind: "pageGlobal",
				property: "PushlySDK",
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
		id: "pwa",
		name: "PWA",
		website: "https://web.dev/progressive-web-apps/",
		description: "Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.",
		icon: "PWA.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pwa:dom:0",
				kind: "dom",
				selector: "link[rel='manifest']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "pydata-sphinx-theme",
		name: "PyData Sphinx Theme",
		website: "https://pydata-sphinx-theme.readthedocs.io/",
		description: "PyData Sphinx Theme is a styling template for Sphinx documentation tailored to PyData projects.",
		icon: "PyData Sphinx Theme.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		requires: [
			"sphinx"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "pygments",
		name: "Pygments",
		website: "https://pygments.org",
		icon: "pygments.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pygments:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+pygments\\.css[\"']"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "pygments:dom:1",
				kind: "dom",
				selector: "link[href*='pygments.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:pygments:pygments:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "pyscript",
		name: "PyScript",
		website: "https://pyscript.net",
		description: "PyScript is a python script that can be run in the browser using a mix of Python and standard HTML.",
		icon: "PyScript.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "pyscript:dom:0",
				kind: "dom",
				selector: "py-script",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "pyscript:cookie:1",
				kind: "cookie",
				key: "_mkto_trk",
				description: "Cookie name matches a known technology marker."
			}
		],
		implies: [
			"python"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:pyscript:pyscript:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "q4-cookie-monster",
		name: "Q4 Cookie Monster",
		website: "https://q4mobile.github.io/q4widgets-jquery-ui/doc_html/q4.cookieMonster.html",
		description: "Q4 Cookie Monster is an cookie compliance widget built by Q4.",
		icon: "Q4.svg",
		categories: [
			"widgets-misc",
			"privacy-compliance"
		],
		rules: [
			{
				id: "q4-cookie-monster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.q4app\\.com/widgets/q4\\.cookiemonster\\.([\\d\\.]+)\\.min\\.js"),
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
		id: "rateparity",
		name: "RateParity",
		website: "https://www.rateparity.com",
		description: "RateParity is a conversion rate optimisation platform for hotels.",
		icon: "RateParity.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "rateparity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.rateparity\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
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
		id: "readaloud",
		name: "ReadAloud",
		website: "https://www.readaloudwidget.com",
		description: "The SiteSpeaker text-to-speech widget is embedded into your posts and give users an alternate way to consume your content as audio.",
		icon: "default.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "readaloud:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("assets\\.sitespeaker\\.link"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "readaloud:dom:1",
				kind: "dom",
				selector: "div#ra-player, div[data-skin*='assets\\.sitespeaker\\.link/embed/skins']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "readspeaker",
		name: "ReadSpeaker",
		website: "https://www.readspeaker.com",
		description: "ReadSpeaker is an intuitive text-to-speech API that converts text into natural-sounding audio files for websites and applications.",
		icon: "ReadSpeaker.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "readspeaker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.readspeaker\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "readspeaker:pageGlobal:1",
				kind: "pageGlobal",
				property: "ReadSpeaker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "readspeaker:pageGlobal:2",
				kind: "pageGlobal",
				property: "ReadSpeaker.meta.version",
				valuePattern: new RegExp("^([\\d\\.]+)_.+$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "recurate",
		name: "Recurate",
		website: "https://www.recurate.com",
		description: "Recurate is a tech-enabled resale service that empowers brands & retailers to establish their own integrated resale platforms directly on their ecommerce sites.",
		icon: "Recurate.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "recurate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\"(?:vendor|title)?\"\\:\"Recurate\""),
				description: "Script content contains a bounded technology signature."
			}
		],
		requires: [
			"shopify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "regiondo",
		name: "Regiondo",
		website: "https://www.regiondo.com",
		description: "Regiondo is a online booking system for tour and activity providers.",
		icon: "Regiondo.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "regiondo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.regiondo\\.net"),
				description: "Script source URL matches a known technology marker."
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
		id: "remixd",
		name: "Remixd",
		website: "https://www.remixd.com",
		description: "Remixd is a platform that enables podcast creators to efficiently produce and share their podcasts with a worldwide audience. The platform provides various tools and features to support podcast creation, hosting, and distribution, such as podcast hosting, analytics, monetisation, and social media integration.",
		icon: "remixd.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "remixd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tags\\.remixd\\.com/player"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "replyment",
		name: "Replyment",
		website: "https://replyment.com",
		description: "Engage with your customers effortlessly on their preferred messaging app using Replyment, including WhatsApp, Messenger, and more. We support 20+ apps and platforms for seamless engagement.",
		icon: "Replyment.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "replyment:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.replyment\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "responsivevoice",
		name: "ResponsiveVoice",
		website: "https://responsivevoice.org",
		description: "ResponsiveVoice is a Text-To-Speech API supported in 51 languages.",
		icon: "ResponsiveVoice.png",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "responsivevoice:pageGlobal:0",
				kind: "pageGlobal",
				property: "responsiveVoice.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "rezdy",
		name: "Rezdy",
		website: "https://www.rezdy.com",
		description: "Rezdy is an online booking software for tours and attractions.",
		icon: "Rezdy.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "rezdy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rezdy\\.\\w+/pluginJs"),
				description: "Script source URL matches a known technology marker."
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
		id: "rezgo",
		name: "Rezgo",
		website: "https://www.rezgo.com",
		description: "Rezgo is a tour operator software that provides online booking system.",
		icon: "Rezgo.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "rezgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rezgo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rezgo:dom:1",
				kind: "dom",
				selector: "iframe[id*='rezgo_content_frame']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "rezgo:dom:2",
				kind: "dom",
				selector: "link[href*='wp-content/plugins/rezgo/rezgo/templates']",
				description: "DOM selector matches a known technology marker."
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
		id: "robixcm-generator",
		name: "RobixCM Generator",
		website: "https://robixcm.ir",
		description: "RobixCM Generator is a service specializing in designing, developing, updating, and managing websites and online services.",
		icon: "Robixcm.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "robixcm-generator:meta:0",
				kind: "meta",
				key: "robixcm",
				valuePattern: new RegExp("RobixCM"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rspack",
		name: "Rspack",
		website: "https://www.rspack.dev",
		description: "Rspack is a JavaScript bundler written in Rust, offering faster build times and compatibility with the Webpack ecosystem​.",
		icon: "Rspack.svg",
		categories: [
			"widgets-misc",
			"bundler"
		],
		rules: [],
		implies: [
			"rust"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "rss",
		name: "RSS",
		website: "https://www.rssboard.org/rss-specification",
		description: "RSS is a family of web feed formats used to publish frequently updated works—such as blog entries, news headlines, audio, and video—in a standardized format.",
		icon: "RSS.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ruby-receptionists",
		name: "Ruby Receptionists",
		website: "https://www.ruby.com",
		description: "Ruby Receptionists is a Portland, Oregon based virtual answering service for small businesses.",
		icon: "Ruby Receptionists.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "ruby-receptionists:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chatwidget\\.ruby\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ruby-receptionists:pageGlobal:1",
				kind: "pageGlobal",
				property: "rubyApi",
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
		id: "salesfloor",
		name: "Salesfloor",
		website: "https://salesfloor.net",
		description: "Salesfloor is a mobile clienteling and virtual selling platform designed for store associates to connect with customers-beyond the store and a mpos platform for frictionless in-store experiences.",
		icon: "salesfloor.svg",
		categories: [
			"widgets-misc",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "salesfloor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salesfloor\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesfloor:dom:1",
				kind: "dom",
				selector: "iframe[src*='.salesfloor.net'], div[data-siterefer='salesfloor']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "salesfloor:pageGlobal:2",
				kind: "pageGlobal",
				property: "NMConfig.SALESFLOOR_ENV",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesfloor:pageGlobal:3",
				kind: "pageGlobal",
				property: "salesFloorHost",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring"
			]
		}
	},
	{
		id: "sassy-social-share",
		name: "Sassy Social Share",
		website: "https://wordpress.org/plugins/sassy-social-share",
		description: "Sassy Social Share allows your website visitors to share your content over Facebook, Twitter, Google, Linkedin, Whatsapp, Tumblr, Pinterest, Reddit, Gab, Gettr and over 110 more social sharing and bookmarking services.",
		categories: [
			"widgets-misc",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "sassy-social-share:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sassy-social-share(?:-public)?\\.js(?:\\?v(?:er)?=((?:\\d+\\.)+\\d+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sassy-social-share:dom:1",
				kind: "dom",
				selector: "link[href*='/wp-content/plugins/sassy-social-share/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "sentara",
		name: "Sentara",
		website: "https://www.sentara.com",
		description: "Sentara is a nonprofit healthcare system focused on improving health through integrated care delivery.",
		icon: "Sentara.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sentara:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.sentara\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "servicenow",
		name: "ServiceNow",
		website: "https://www.servicenow.com",
		description: "ServiceNow is a cloud computing platform to help companies manage digital workflows for enterprise operations.",
		icon: "ServiceNow.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "servicenow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.service-now\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "servicenow:pageGlobal:2",
				kind: "pageGlobal",
				property: "s_giq",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"poa",
				"high"
			]
		}
	},
	{
		id: "setmore",
		name: "Setmore",
		website: "https://www.setmore.com",
		description: "Setmore is a cloud-based appointment scheduling solution.",
		icon: "Setmore.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "setmore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.setmore\\.\\w+/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "setmore:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/setmore-appointments/script/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "setmore:pageGlobal:2",
				kind: "pageGlobal",
				property: "setmorePopup",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium",
				"recurring"
			]
		}
	},
	{
		id: "sevenrooms",
		name: "SevenRooms",
		website: "https://sevenrooms.com",
		description: "SevenRooms is an fully-integrated reservation, seating and restaurant management system.",
		icon: "SevenRooms.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "sevenrooms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sevenrooms\\.\\w+/widget/embed\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sevenrooms:pageGlobal:2",
				kind: "pageGlobal",
				property: "SevenroomsWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "shareaholic",
		name: "Shareaholic",
		website: "https://www.shareaholic.com/",
		description: "Shareaholic is a all-in-one content amplification and monetisation platform.",
		icon: "shareaholic.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "shareaholic:pageGlobal:0",
				kind: "pageGlobal",
				property: "Shareaholic",
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
		id: "sharethis",
		name: "ShareThis",
		website: "https://sharethis.com",
		description: "ShareThis provides free engagement and growth tools (e.g., share buttons, follow buttons, and reaction buttons) for site owners.",
		icon: "ShareThis.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sharethis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sharethis\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sharethis:pageGlobal:1",
				kind: "pageGlobal",
				property: "SHARETHIS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sharethis:pageGlobal:2",
				kind: "pageGlobal",
				property: "__sharethis__docReady",
				description: "Page-owned global matches a known technology marker."
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
		id: "sharper-mms",
		name: "Sharper MMS",
		website: "https://sharpermms.com",
		description: "Sharper MMS is a provider of marina management services, focusing on operations and maintenance for marina facilities.",
		icon: "SharperMMS.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sharper-mms:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sharpermms\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "sheerid",
		name: "SheerID",
		website: "https://www.sheerid.com/",
		description: "SheerID is a highly specialised solution offering online verification support for retailers, marketers and service providers.",
		icon: "SheerID.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sheerid:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\"sheerIdEndpoint\":"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sheerid:dom:1",
				kind: "dom",
				selector: "a[href*='.sheerid.com/'], img[src*='.sheerid.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "sheerid:pageGlobal:2",
				kind: "pageGlobal",
				property: "SheerID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sheerid:pageGlobal:3",
				kind: "pageGlobal",
				property: "sheerid",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sheerid:responseHeader:4",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.sheerid\\.com"),
				description: "Response header matches a known technology marker."
			},
			{
				id: "sheerid:responseHeader:5",
				kind: "responseHeader",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.sheerid\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "shoppingfeeder",
		name: "ShoppingFeeder",
		website: "https://sfdr.co",
		description: "ShoppingFeeder is a feed management solution for online retailers.",
		icon: "ShoppingFeeder.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "shoppingfeeder:pageGlobal:0",
				kind: "pageGlobal",
				property: "sfdrOrderData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "shoppingfeeder:pageGlobal:1",
				kind: "pageGlobal",
				property: "sfdrUniqid",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"magento",
			"shopify",
			"opencart",
			"prestashop",
			"woocommerce"
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
		id: "shoppinggives",
		name: "ShoppingGives",
		website: "https://shoppinggives.com",
		description: "ShoppingGives is a B2B social ecommerce platform that allows companies of all sizes to make charitable donations through their customers' purchases.",
		icon: "ShoppingGives.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "shoppinggives:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shoppinggives\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "shoppinggives:pageGlobal:1",
				kind: "pageGlobal",
				property: "sgObservables.getCharities",
				description: "Page-owned global matches a known technology marker."
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
		id: "sirv",
		name: "Sirv",
		website: "https://sirv.com",
		description: "Sirv is a solution for serving images, offering easy management, manipulation, and delivery.",
		icon: "Sirv.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sirv:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("scripts\\.sirv\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sirv:responseHeader:1",
				kind: "responseHeader",
				key: "X-Sirv-Cache",
				description: "Response header matches a known technology marker."
			},
			{
				id: "sirv:responseHeader:2",
				kind: "responseHeader",
				key: "X-Sirv-Server",
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
		id: "siteminder",
		name: "SiteMinder",
		website: "https://www.siteminder.com",
		description: "SiteMinder is a appointment booking solution designed for hotels.",
		icon: "SiteMinder.svg",
		categories: [
			"widgets-misc",
			"booking-scheduling"
		],
		rules: [
			{
				id: "siteminder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.siteminder\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "slidebean",
		name: "Slidebean",
		website: "https://slidebean.com",
		description: "Slidebean is an all-in-one pitch deck software designed to streamline the creation, design, and presentation of business pitches.",
		icon: "Slidebean.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "slidebean:dom:0",
				kind: "dom",
				selector: "iframe[src*='.slidebean.com/']",
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
		id: "slider-revolution",
		name: "Slider Revolution",
		website: "https://www.sliderrevolution.com",
		description: "Slider Revolution is a flexible and highly customisable slider.",
		icon: "Slider Revolution.svg",
		categories: [
			"widgets-misc",
			"content-publishing"
		],
		rules: [
			{
				id: "slider-revolution:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/wp-content/plugins/revslider/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slider-revolution:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("jquery\\.themepunch\\.revolution\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:2",
				kind: "pageGlobal",
				property: "RS_MODULES.main.version",
				valuePattern: new RegExp("^Slider Revolution\\s([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:3",
				kind: "pageGlobal",
				property: "revapi1",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:4",
				kind: "pageGlobal",
				property: "revapi2",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:5",
				kind: "pageGlobal",
				property: "revapi3",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:6",
				kind: "pageGlobal",
				property: "revapi4",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:7",
				kind: "pageGlobal",
				property: "revapi5",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:pageGlobal:8",
				kind: "pageGlobal",
				property: "revslider_showDoubleJqueryError",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "slider-revolution:meta:9",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Powered\\sby\\sSlider Revolution\\s([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"onetime"
			]
		}
	},
	{
		id: "snapwidget",
		name: "SnapWidget",
		website: "https://snapwidget.com",
		description: "SnapWidget is a set of interactive Instagram, Twitter and 500px widgets.",
		icon: "SnapWidget.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "snapwidget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("snapwidget\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "snapwidget:dom:1",
				kind: "dom",
				selector: "iframe[src*='snapwidget.com/']",
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
		id: "sobi-2",
		name: "SOBI 2",
		website: "https://www.sigsiu.net/sobi2.html",
		description: "SOBI2 is an older version of the SOBI (Simple Open Business Index) directory extension for Joomla. It was used for creating and managing directory listings on Joomla-powered websites, allowing users to list businesses, services, or other types of entries.",
		icon: "Sobi.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sobi-2:html:0",
				kind: "html",
				pattern: new RegExp("(?:<!-- start of Sigsiu Online Business Index|<div[^>]* class=\"sobi2)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "sobi-2:pageGlobal:1",
				kind: "pageGlobal",
				property: "sobi2Cats",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"joomla"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "sobipro",
		name: "SobiPro",
		website: "https://sigsiu.net/sobipro.html",
		description: "SobiPro is a directory and listing management extension for Joomla, used to create and manage directories, business listings, and other types of structured content on websites.",
		icon: "Sobi.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sobipro:pageGlobal:0",
				kind: "pageGlobal",
				property: "SobiProUrl",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"joomla"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "social9",
		name: "Social9",
		website: "https://social9.com",
		description: "Social9 is a social sharing widgets and plugins.",
		icon: "Social9.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "social9:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("social9\\.com/.+\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"freemium"
			]
		}
	},
	{
		id: "sorry",
		name: "Sorry",
		website: "https://www.sorryapp.com",
		description: "Sorry is a status page service that displays system downtime and operational incidents.",
		icon: "Sorry.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sorry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sorryapp\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "soundcloud",
		name: "SoundCloud",
		website: "https://developers.soundcloud.com/docs/api/html5-widget",
		description: "SoundCloud widget gives you the ability to upload, manage and share tracks.",
		icon: "SoundCloud.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "soundcloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sndcdn\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "soundcloud:dom:1",
				kind: "dom",
				selector: "iframe[src*='.soundcloud.com/'], img[src*='.sndcdn.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "soundcloud:pageGlobal:2",
				kind: "pageGlobal",
				property: "SC.Widget.Events.PLAY",
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
		id: "spdy",
		name: "SPDY",
		website: "https://chromium.org/spdy",
		icon: "SPDY.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "spdy:responseHeader:0",
				kind: "responseHeader",
				key: "X-Firefox-Spdy",
				valuePattern: new RegExp("\\d\\.\\d"),
				description: "Response header matches a known technology marker."
			}
		],
		excludes: [
			"http-2"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "splunkd",
		name: "Splunkd",
		website: "https://splunk.com",
		description: "Splunkd is the system process that handles indexing, searching, forwarding.",
		icon: "Splunk.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "splunkd:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("Splunkd"),
				description: "Response header matches a known technology marker."
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
		id: "sporcle",
		name: "Sporcle",
		website: "https://www.sporcle.com",
		description: "Sporkle is a trivia and quiz widget that provides interactive question-based content for testing knowledge across various topics through embedded or web-based quizzes.",
		icon: "Sporcle.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "sporcle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.sporcle\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "spotify-web-api",
		name: "Spotify Web API",
		website: "https://developer.spotify.com/documentation/web-api",
		description: "Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue.",
		icon: "Spotify.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "spotify-web-api:dom:0",
				kind: "dom",
				selector: "link[href*='.spotify.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "spotify-web-api:pageGlobal:1",
				kind: "pageGlobal",
				property: "getSpotifyData",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spotify-web-api:pageGlobal:2",
				kind: "pageGlobal",
				property: "spotify_tracks",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "spotify-web-api:pageGlobal:3",
				kind: "pageGlobal",
				property: "spotifyme",
				description: "Page-owned global matches a known technology marker."
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
		id: "spotify-widgets",
		name: "Spotify Widgets",
		website: "https://developer.spotify.com/documentation/widgets",
		description: "Spotify Widgets provide an embeddable view of a track, artist, album, user, playlist, podcast or episode for use within your web project.",
		icon: "Spotify.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "spotify-widgets:dom:0",
				kind: "dom",
				selector: "iframe[src*='open.spotify.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "spurit",
		name: "SpurIT",
		website: "https://spur-i-t.com",
		description: "SpurIT is a team of certified Shopify experts which provide ecommerce software solutions.",
		icon: "SpurIT.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "spurit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-spurit\\.com/shopify-apps/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spurit:pageGlobal:1",
				kind: "pageGlobal",
				property: "Spurit.global.version",
				valuePattern: new RegExp("(.+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"shopify"
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
		id: "squadded",
		name: "Squadded",
		website: "https://www.squadded.co",
		description: "Squadded is a social ecommerce solution that allows visitors to shop together with their friends and with other members of the brands online community.",
		icon: "Squadded.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "squadded:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.squadded\\.co"),
				description: "Script source URL matches a known technology marker."
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
		id: "stonly",
		name: "Stonly",
		website: "https://stonly.com",
		description: "Stonly is a platform that enhances support efficiency by enabling customer self-service through personalized knowledge, AI-driven assistance, and process automation.",
		icon: "Stonly.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "stonly:pageGlobal:0",
				kind: "pageGlobal",
				property: "STONLY_WID",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "stonly:pageGlobal:1",
				kind: "pageGlobal",
				property: "StonlyWidget.queue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "stonly:pageGlobal:2",
				kind: "pageGlobal",
				property: "jsonpStonlyWidget",
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
		id: "storifyme",
		name: "StorifyMe",
		website: "https://www.storifyme.com",
		description: "StorifyMe is a storytelling platform for creating and distributing web stories on social networks and the open web.",
		icon: "StorifyMe.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "storifyme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.storifyme\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "storifyme:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.storifyme.com/']",
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
		id: "strava",
		name: "Strava",
		website: "https://www.strava.com",
		description: "Strava is a community-driven platform that enables users to track progress and support each other through shared motivation.",
		icon: "Strava.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "strava:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.strava\\.com"),
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
		id: "streamwood",
		name: "Streamwood",
		website: "https://streamwood.ru",
		description: "Streamwood is a call back and chat system designed to facilitate efficient communication.",
		icon: "Streamwood.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "streamwood:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clients\\.streamwood\\.ru/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "streamwood:pageGlobal:1",
				kind: "pageGlobal",
				property: "__STREAMWOOD_MUTEX_QP3",
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
		id: "sumo",
		name: "Sumo",
		website: "https://sumo.com",
		description: "Sumo is a plugin offering set of marketing tools to automate a website's growth. These tools help drive extra traffic, engage visitors, increase email subscribers and build community.",
		icon: "Sumo.png",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "sumo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sumo(?:me)?\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sumo:pageGlobal:1",
				kind: "pageGlobal",
				property: "sumo",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sumo:pageGlobal:2",
				kind: "pageGlobal",
				property: "sumome",
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
		id: "supademo",
		name: "Supademo",
		website: "https://supademo.com",
		description: "Supademo is a widget-based tool for creating interactive product demos that can be embedded into websites or shared via links.",
		icon: "Supademo.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "supademo:dom:0",
				kind: "dom",
				selector: "iframe[src*='supademo']",
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
		id: "swc",
		name: "SWC",
		website: "https://swc.rs",
		description: "SWC is an extensible Rust-based platform for the next generation of fast developer tools.",
		icon: "swc.svg",
		categories: [
			"widgets-misc",
			"transpiler"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "swfobject",
		name: "SWFObject",
		website: "https://github.com/swfobject/swfobject",
		description: "SWFObject is an open-source JavaScript library used to embed Adobe Flash content onto web pages.",
		icon: "SWFObject.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "swfobject:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("swfobject.*\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "swfobject:pageGlobal:1",
				kind: "pageGlobal",
				property: "SWFObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "syntaxhighlighter",
		name: "SyntaxHighlighter",
		website: "https://github.com/syntaxhighlighter",
		icon: "SyntaxHighlighter.png",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "syntaxhighlighter:html:0",
				kind: "html",
				pattern: new RegExp("<(?:script|link)[^>]*sh(?:Core|Brush|ThemeDefault)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "syntaxhighlighter:dom:1",
				kind: "dom",
				selector: "script[src*='shCore'], script[src*='shBrush'], script[src*='shThemeDefault'], link[href*='shCore'], link[href*='shBrush'], link[href*='shThemeDefault']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "syntaxhighlighter:pageGlobal:2",
				kind: "pageGlobal",
				property: "SyntaxHighlighter",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "t1-comercios",
		name: "T1 Comercios",
		website: "https://www.t1comercios.com",
		description: "T1 Comercios is an integrator platform with marketplaces(https://www.claroshop.com/,https://www.sears.com.mx/,https://www.sanborns.com.mx/).",
		icon: "T1 Comercios.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "t1-comercios:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^T1COMERCIOS$"),
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
		id: "taggbox",
		name: "Taggbox",
		website: "https://taggbox.com/",
		description: "Taggbox is an UGC platform to collect, curate, manage rights, and publish user-generated content marketing campaigns across multiple channels.",
		icon: "Taggbox.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "taggbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.taggbox\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "taggbox:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("taggbox\\.com/app/js/embed\\.min\\.js(?:\\?ver=([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "taggbox:url:2",
				kind: "url",
				pattern: new RegExp("\\.taggbox\\.com"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "taggbox:pageGlobal:3",
				kind: "pageGlobal",
				property: "taggboxAjaxurl",
				description: "Page-owned global matches a known technology marker."
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
		id: "tapcart",
		name: "Tapcart",
		website: "https://tapcart.com",
		description: "Tapcart is a mobile commerce SaaS platform that integrates directly with Shopify.",
		icon: "Tapcart.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "tapcart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tapcart\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tapcart:dom:1",
				kind: "dom",
				selector: "a[href*='tapcart.app'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tapcart:pageGlobal:2",
				kind: "pageGlobal",
				property: "tapcartwebBanner",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"shopify"
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
		id: "teambrain",
		name: "TeamBrain",
		website: "https://www.teambrain.io",
		description: "TeamBrain is a knowledge management solution which allows to use a self-learning dynamic FAQ on a website or widget on the bottom right of any page.",
		icon: "TeamBrain.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "teambrain:dom:0",
				kind: "dom",
				selector: "link[href*='//teambrain.app/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "teambrain:pageGlobal:1",
				kind: "pageGlobal",
				property: "TeamBrainExternalApp",
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
		id: "threadles",
		name: "Threadles",
		website: "https://threadles.net",
		description: "Threadles is a social networking platform that uses advanced AI-driven algorithms to enhance digital interaction.",
		icon: "Threadles.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "threadles:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("web\\.threadles\\.net/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "threadles:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Threadles$"),
				description: "Meta tag matches a known technology marker."
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
		id: "tiqets",
		name: "Tiqets",
		website: "https://www.tiqets.com/affiliate",
		description: "Tiqets provides a complete overview of a city - museums, attractions, zoos, canal cruises, concerts. Publishers joined to the Tiqets affiliate program can receive 6% commission during our 30-day cookie window from completed total bookings resulting from featuring links to Tiqets products and content across their brand: blog/website, social media, newsletters, etc.",
		icon: "Tiqets.svg",
		categories: [
			"widgets-misc",
			"advertising-paid-media"
		],
		rules: [
			{
				id: "tiqets:dom:0",
				kind: "dom",
				selector: "a[href*='.tiqets.com/'][target='_blank'], iframe[src*='.tiqets.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tiqets:pageGlobal:1",
				kind: "pageGlobal",
				property: "__TIQETS_LOADER_REINIT",
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
		id: "tockify",
		name: "Tockify",
		website: "https://tockify.com",
		description: "Tockify is a customizable web calendar platform designed for embedding interactive event calendars into websites.",
		icon: "Tockify.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "tockify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("public\\.tockify\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "toctoc",
		name: "TocToc",
		website: "https://www.toctoc.me",
		description: "Tolstoy is a BPM platform enabling the modeling, automation, and optimization of business processes, simplifying workflows and expediting tasks.",
		icon: "TocToc.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "toctoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.toctoc\\.me/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "toctoc:pageGlobal:1",
				kind: "pageGlobal",
				property: "_toctoc.close",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "toky",
		name: "Toky",
		website: "https://toky.co",
		description: "Toky is a phone system that integrates across devices, enabling calls and messages through phone, app, or desktop.",
		icon: "Toky.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "toky:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.toky\\.co/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "toky:pageGlobal:1",
				kind: "pageGlobal",
				property: "TokyBase64",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "toky:pageGlobal:2",
				kind: "pageGlobal",
				property: "TokyBusiness",
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
		id: "toonimo",
		name: "Toonimo",
		website: "https://www.toonimo.com",
		description: "Toonimo is a cloud-based platform that enables businesses to showcase key website features and guide site visitors.",
		icon: "Toonimo.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "toonimo:pageGlobal:0",
				kind: "pageGlobal",
				property: "TMO_jsFetchTimeStart",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "toonimo:pageGlobal:1",
				kind: "pageGlobal",
				property: "Toonimo.Analytics",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "toonimo:pageGlobal:2",
				kind: "pageGlobal",
				property: "ToonimoLoader",
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
		id: "topic-it",
		name: "Topic'it",
		website: "https://topicit.net",
		description: "Topic'it is a tool that optimizes forums for mobile devices, enhancing usability and accessibility across smartphones and tablets.",
		icon: "TopicIt.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "topic-it:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.topicit\\.net"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "topic-it:pageGlobal:1",
				kind: "pageGlobal",
				property: "topicit_action",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "track-hospitality-software",
		name: "Track Hospitality Software",
		website: "https://trackhs.com",
		description: "TRACK Hospitality Software is a provider of property management and hospitality SaaS solutions for managing operations in the hospitality industry.",
		icon: "TrackHS.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "track-hospitality-software:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trackhs\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "transistor-fm",
		name: "Transistor.fm",
		website: "https://transistor.fm",
		description: "Transistor.fm is a podcast host, distribution and management platform.",
		icon: "Transistor.fm.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "transistor-fm:dom:0",
				kind: "dom",
				selector: "iframe[src*='.transistor.fm/']",
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
		id: "trinity-audio",
		name: "Trinity Audio",
		website: "https://www.trinityaudio.ai",
		description: "Trinity Audio's AI-driven solutions help publishers and content creators create a world of smart audio experiences for their audiences, covering every stage of the audio journey from creation to distribution.",
		icon: "Trinity Audio.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "trinity-audio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//trinitymedia\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "trinity-audio:pageGlobal:1",
				kind: "pageGlobal",
				property: "TRINITY_DISPLAY",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "trinity-audio:pageGlobal:2",
				kind: "pageGlobal",
				property: "TRINITY_PLAYER",
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
		id: "tripadviser-widget",
		name: "Tripadviser.Widget",
		website: "https://www.tripadvisor.com/Widgets",
		description: "Tripadvisor embed reviews widget.",
		icon: "Tripadviser.Widget.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "tripadviser-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tripadvisor\\.[\\w]+/WidgetEmbed"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "tripit",
		name: "TripIt",
		website: "https://www.tripit.com",
		description: "TripIt is a travel management platform that organizes travel plans and consolidates details in one place.",
		icon: "TripIt.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "tripit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.tripit\\.com"),
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
		id: "trustyou",
		name: "TrustYou",
		website: "https://www.trustyou.com",
		description: "TrustYou is guest feedback and hotel reputation software company located in Germany.",
		icon: "TrustYou.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "twitter",
		name: "Twitter",
		website: "https://twitter.com",
		description: "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets.",
		icon: "Twitter.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "twitter:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//platform\\.twitter\\.com/widgets\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ubiliz",
		name: "Ubiliz",
		website: "https://www.ubiliz.com",
		description: "Ubiliz is a gift voucher ecommerce solution.",
		icon: "Ubiliz.svg",
		categories: [
			"widgets-misc",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "ubiliz:pageGlobal:0",
				kind: "pageGlobal",
				property: "ubilizSettings",
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
		id: "ucalc",
		name: "Ucalc",
		website: "https://ucalc.pro",
		description: "Ucalc is a platform offering calculators and form building tools, facilitating efficient computation and streamlined data collection processes.",
		icon: "Ucalc.svg",
		categories: [
			"widgets-misc",
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "ucalc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ucalc\\.pro/api/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ucalc:pageGlobal:1",
				kind: "pageGlobal",
				property: "uCalc",
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
		id: "unity",
		name: "Unity",
		website: "https://unity.com",
		description: "Unity is a gaming widget that enables the playing of games developed using 3D gaming engine.",
		icon: "Unity.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "unity:pageGlobal:0",
				kind: "pageGlobal",
				property: "UnityLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "unity:pageGlobal:1",
				kind: "pageGlobal",
				property: "createUnityInstance",
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
		id: "userflow",
		name: "Userflow",
		website: "https://userflow.com",
		description: "Userflow is a user onboarding software for building product tours and onboarding checklists, tailored to your app and your users.",
		icon: "Userflow.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "userflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.userflow\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "userflow:pageGlobal:1",
				kind: "pageGlobal",
				property: "USERFLOWJS_QUEUE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "userflow:pageGlobal:2",
				kind: "pageGlobal",
				property: "userflow.endAllFlows",
				confidence: 50,
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "userflow:pageGlobal:3",
				kind: "pageGlobal",
				property: "userflow.endChecklist",
				confidence: 50,
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
		id: "userlane",
		name: "Userlane",
		website: "https://www.userlane.com",
		description: "Userlane is a platform that provides an interactive step-by-step guide system designed to help users navigate software applications.",
		icon: "Userlane.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "userlane:pageGlobal:0",
				kind: "pageGlobal",
				property: "Userlane",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "userlane:pageGlobal:1",
				kind: "pageGlobal",
				property: "UserlaneCommandObject",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
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
			"analytics"
		],
		rules: [
			{
				id: "userpilot:pageGlobal:0",
				kind: "pageGlobal",
				property: "userpilot.triggerById",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "userpilot:pageGlobal:1",
				kind: "pageGlobal",
				property: "userpilotInitiatorSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "userpilot:pageGlobal:2",
				kind: "pageGlobal",
				property: "userpilotPako",
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
		id: "usocial",
		name: "uSocial",
		website: "https://usocial.pro",
		description: "uSocial is a tool that generates customizable Share and Like buttons for websites, enabling quick integration of social interaction features.",
		icon: "uSocial.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "usocial:pageGlobal:0",
				kind: "pageGlobal",
				property: "uSocial.init",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "usocial:pageGlobal:1",
				kind: "pageGlobal",
				property: "uSocialLogin",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "usocial:pageGlobal:2",
				kind: "pageGlobal",
				property: "uSocialShare",
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
		id: "venly",
		name: "Venly",
		website: "https://www.venly.io",
		description: "Venly is a blockchain technology provider creating products to help companies succeed in Web3.",
		icon: "Venly.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "venly:pageGlobal:0",
				kind: "pageGlobal",
				property: "VenlyConnect",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "venly:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Venly$"),
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
		id: "verifypass",
		name: "VerifyPass",
		website: "https://verifypass.com",
		description: "VerifyPass is a company which provide secure identity proofing, authentication, and group affiliation verification for teachers and students.",
		icon: "VerifyPass.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "verifypass:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.id\\.services"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "verifypass:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.verifypass\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "verifypass:pageGlobal:2",
				kind: "pageGlobal",
				property: "verifypass_api_instantiator",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "verifypass:pageGlobal:3",
				kind: "pageGlobal",
				property: "verifypass_is_loaded",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "verifypass:pageGlobal:4",
				kind: "pageGlobal",
				property: "verifypass_popup",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "videopal",
		name: "VideoPal",
		website: "https://www.videopal.io/go/",
		description: "VideoPal is an avatar widget that functions as a help system, providing interactive assistance directly within the user interface.",
		icon: "VideoPal.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "videopal:pageGlobal:0",
				kind: "pageGlobal",
				property: "VideoPalEmbed",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "videopal:pageGlobal:1",
				kind: "pageGlobal",
				property: "VpPlayer",
				description: "Page-owned global matches a known technology marker."
			}
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
		id: "vite",
		name: "Vite",
		website: "https://vitejs.dev",
		description: "Vite is a rapid development tool for modern web projects.",
		icon: "vite.svg",
		categories: [
			"widgets-misc",
			"bundler"
		],
		rules: [
			{
				id: "vite:dom:0",
				kind: "dom",
				selector: "script#vite-legacy-polyfill",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vite:dom:1",
				kind: "dom",
				selector: "script#vite-legacy-entry",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vite:dom:2",
				kind: "dom",
				selector: "link[href*='vite.svg'][rel='icon']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vite:dom:3",
				kind: "dom",
				selector: "script[id^='vite-plugin-']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vite:pageGlobal:4",
				kind: "pageGlobal",
				property: "__vite_is_modern_browser",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "volley",
		name: "Volley",
		website: "https://meetvolley.com",
		description: "Volley is a website annotation tool that enables visual feedback on websites.",
		icon: "Volley.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "volley:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.meetvolley\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "vue2-animate",
		name: "Vue2-animate",
		website: "https://github.com/asika32764/vue2-animate",
		description: "Vue2-animate is a Vue.js port of Animate.css.",
		icon: "vue.svg",
		categories: [
			"widgets-misc",
			"ui-library",
			"animation"
		],
		rules: [
			{
				id: "vue2-animate:dom:0",
				kind: "dom",
				selector: "link[href*='/vue2-animate.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"vue-js",
			"sass",
			"animate-css"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "waitlist",
		name: "Waitlist",
		website: "https://www.getwaitlist.com",
		description: "Waitlist is a web-based tool that helps businesses to create a waitlist for their product or service.",
		icon: "Waitlist.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "waitlist:pageGlobal:0",
				kind: "pageGlobal",
				property: "gw_backend_url",
				valuePattern: new RegExp("//api\\.getwaitlist\\.com/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "waitlist:pageGlobal:1",
				kind: "pageGlobal",
				property: "gw_waitlist_name",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"recurring",
				"low"
			]
		}
	},
	{
		id: "walkme",
		name: "WalkMe",
		website: "https://www.walkme.com",
		description: "WalkMe is a cloud-based interactive guidance and engagement platform.",
		icon: "WalkMe.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "walkme:dom:0",
				kind: "dom",
				selector: "link[href*='.walkme.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "walkme:pageGlobal:1",
				kind: "pageGlobal",
				property: "WalkMeAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "walkme:pageGlobal:2",
				kind: "pageGlobal",
				property: "_walkmeConfig",
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
		id: "waste-connections",
		name: "Waste Connections",
		website: "https://www.wasteconnections.com",
		description: "Waste Connections is a provider of waste management solutions, offering trash collection, dumpster rental, and recycling services across the United States.",
		icon: "WasteConnections.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "waste-connections:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.wasteconnections\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "waveform",
		name: "Waveform",
		website: "https://music.flatfull.com/waveme/about/",
		description: "Waveform is a media player that supports various media formats, including audio, video, Youtube, and Vimeo, and includes a waveform visualisation feature, utilising Web Audio API and HTML5 Canvas technologies.",
		icon: "Waveme.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "waveform:pageGlobal:0",
				kind: "pageGlobal",
				property: "Waveform",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "weatherstack",
		name: "Weatherstack",
		website: "https://weatherstack.com",
		description: "Weatherstack is a weather API providing JSON and XML data for global locations in a lightweight format.",
		icon: "Weatherstack.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "weatherstack:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.apixu.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "web-stories",
		name: "Web Stories",
		website: "https://amp.dev/about/stories/",
		description: "Web Stories is a format for visual storytelling for the open web.",
		icon: "Web-Stories.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "web-stories:dom:0",
				kind: "dom",
				selector: "amp-story",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"amp"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webestools",
		name: "Webestools",
		website: "https://www.webestools.com",
		description: "Webestools is a platform offering online tools, including counters and widgets, for various functionalities.",
		icon: "Webestools.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "webestools:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.webestools\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "webestools:dom:1",
				kind: "dom",
				selector: "iframe[src*='.webestools.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "webmin",
		name: "Webmin",
		website: "https://www.webmin.com",
		description: "Webmin is a free, open-source application for Linux server administration.",
		icon: "Webmin.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		implies: [
			"perl"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:webmin:webmin:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "webpack",
		name: "Webpack",
		website: "https://webpack.js.org/",
		description: "Webpack is an open-source JavaScript module bundler.",
		icon: "Webpack.svg",
		categories: [
			"widgets-misc",
			"bundler"
		],
		rules: [
			{
				id: "webpack:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunk",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "webpack:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackJsonp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webrtc",
		name: "WebRTC",
		website: "https://webrtc.org",
		description: "WebRTC is an open-source project that enables real-time voice, text and video communications capabilities between web browsers and devices.",
		icon: "WebRTC.svg",
		categories: [
			"widgets-misc"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "websocket",
		name: "Websocket",
		website: "https://en.wikipedia.org/wiki/WebSocket",
		icon: "websocket.png",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "websocket:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+rel=[\"']web-socket[\"']"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "websocket:html:1",
				kind: "html",
				pattern: new RegExp("<(?:link|a)[^>]+href=[\"']wss?://"),
				description: "HTML contains a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "websocket",
		name: "WebSocket",
		website: "https://en.wikipedia.org/wiki/WebSocket",
		description: "WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection, enabling interactive communication between web browsers and servers.",
		icon: "WebSocket.svg",
		categories: [
			"widgets-misc",
			"api-pattern"
		],
		rules: [
			{
				id: "websocket:html:0",
				kind: "html",
				pattern: new RegExp("<(?:link|a)[^>]+href=[\"']wss?://"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "websocket:dom:1",
				kind: "dom",
				selector: "link[rel='web-socket']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "websocket:dom:2",
				kind: "dom",
				selector: "link[href^='ws://']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "websocket:dom:3",
				kind: "dom",
				selector: "link[href^='wss://']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "websocket:responseHeader:4",
				kind: "responseHeader",
				key: "Upgrade",
				valuePattern: new RegExp("websocket"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "weekdone",
		name: "Weekdone",
		website: "https://weekdone.com",
		description: "Weekdone is a tool for managers and leaders who want to get more insights into their teams and organizations and improve team collaboration and focus.",
		icon: "Weekdone.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "weekdone:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("weekdone\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "weltpixel-pearl-theme",
		name: "WeltPixel Pearl Theme",
		website: "https://www.weltpixel.com/magento-2-theme-pearl",
		description: "Pearl Theme for Magento 2 by WeltPixel. Pearl Theme is following the Magento architecture, layouts and best practice in order to assure highest compatibility with 3rd party extensions.",
		icon: "WeltPixel.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "weltpixel-pearl-theme:dom:0",
				kind: "dom",
				selector: "body.theme-pearl",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "weltpixel-pearl-theme:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pearl",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"magento-version-2"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"high",
				"onetime"
			]
		}
	},
	{
		id: "whatfix",
		name: "Whatfix",
		website: "https://whatfix.com",
		description: "Whatfix is a SaaS based platform which provides in-app guidance and performance support for web applications and software products.",
		icon: "Whatfix.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "whatfix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.whatfix\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "whatfix:pageGlobal:1",
				kind: "pageGlobal",
				property: "_wfx_add_logger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "whatfix:pageGlobal:2",
				kind: "pageGlobal",
				property: "_wfx_settings",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "whatfix:pageGlobal:3",
				kind: "pageGlobal",
				property: "wfx_is_playing__",
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
		id: "wheelio",
		name: "Wheelio",
		website: "https://wheelio-app.com/",
		description: "Wheelio is gamified pop-up/widget for ecommerce sites.",
		icon: "Wheelio.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "wheelio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wheelioapp\\.azureedge\\.net"),
				description: "Script source URL matches a known technology marker."
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
		id: "whooshkaa",
		name: "Whooshkaa",
		website: "https://www.whooshkaa.com",
		icon: "Whooshkaa.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "whooshkaa:html:0",
				kind: "html",
				pattern: new RegExp("<iframe src=\"[^>]+whooshkaa\\.com"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "whooshkaa:dom:1",
				kind: "dom",
				selector: "iframe[src*='whooshkaa.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wisepops",
		name: "Wisepops",
		website: "https://wisepops.com",
		description: "Wisepops is an intelligent popup and marketing automation system that offers marketers a single platform from which to create and manage website popups.",
		icon: "Wisepops.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "wisepops:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("loader\\.wisepops\\.com/get-loader\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wisepops:pageGlobal:1",
				kind: "pageGlobal",
				property: "WisePopsObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "wisepops:pageGlobal:2",
				kind: "pageGlobal",
				property: "wisepops._api",
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
		id: "wolframalpha",
		name: "WolframAlpha",
		website: "https://www.wolframalpha.com/widgets",
		description: "WolframAlpha is a tool that integrates live computational knowledge into blogs or websites.",
		icon: "WolframAlpha.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "wolframalpha:pageGlobal:0",
				kind: "pageGlobal",
				property: "WolframAlphaWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "worldz",
		name: "Worldz",
		website: "https://www.worldz-business.net",
		description: "Worldz calculates the economic value of a user’s social popularity (qualitatively and quantitatively). In proportion to this value, it provides a personalised discount, which can be applied in exchange for a social sharing by the user on their Instagram or Facebook profile.",
		icon: "Worldz.svg",
		categories: [
			"widgets-misc",
			"marketing-automation"
		],
		rules: [
			{
				id: "worldz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.worldztool\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "wowee",
		name: "Wowee",
		website: "https://wowee.cz",
		description: "Wowee is a wishlist creation tool designed to help users organise and manage their desired items.",
		icon: "Wowee.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "wowee:dom:0",
				kind: "dom",
				selector: "script#wowee-script",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "wowee:pageGlobal:1",
				kind: "pageGlobal",
				property: "woweeScriptUrl",
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
		id: "x-clacks-overhead",
		name: "X-Clacks-Overhead",
		website: "https://xclacksoverhead.org/home/about",
		description: "X-Clacks-Overhead is a non-standard HTTP header used to transmit tribute messages within server responses.",
		icon: "XClacksOverhead.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "x-clacks-overhead:responseHeader:0",
				kind: "responseHeader",
				key: "X-Clacks-Overhead",
				valuePattern: new RegExp("^GNU Terry Pratchett$"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "yandex-messenger",
		name: "Yandex.Messenger",
		website: "https://dialogs.yandex.ru",
		description: "Yandex.Messenger is an instant messaging application.",
		icon: "Yandex.Messenger.svg",
		categories: [
			"widgets-misc",
			"email-messaging"
		],
		rules: [
			{
				id: "yandex-messenger:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.s3\\.yandex\\.net/widget\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "yandex-messenger:pageGlobal:1",
				kind: "pageGlobal",
				property: "yandexChatWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"payg"
			]
		}
	},
	{
		id: "yelp-review-badge",
		name: "Yelp Review Badge",
		website: "https://yelp.com",
		description: "Yelp Review Badges showcase business reviews from Yelp on websites.",
		icon: "Yelp.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "yelp-review-badge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("yelp\\.com/biz_badge_js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "zabbix",
		name: "Zabbix",
		website: "https://zabbix.com",
		description: "Zabbix is an open-source monitoring tool that provides real-time monitoring, alerting, and reporting for IT infrastructure, including networks, servers, and applications.",
		icon: "Zabbix.svg",
		categories: [
			"widgets-misc"
		],
		rules: [
			{
				id: "zabbix:html:0",
				kind: "html",
				pattern: new RegExp("<body[^>]+zbxCallPostScripts"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "zabbix:url:1",
				kind: "url",
				pattern: new RegExp("\\/zabbix\\/"),
				confidence: 30,
				description: "Page URL matches a known technology marker."
			},
			{
				id: "zabbix:pageGlobal:2",
				kind: "pageGlobal",
				property: "zbxCallPostScripts",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zabbix:meta:3",
				kind: "meta",
				key: "Author",
				valuePattern: new RegExp("ZABBIX SIA"),
				confidence: 70,
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"php"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:zabbix:zabbix:*:*:*:*:*:*:*:*"
		}
	}
] as const satisfies readonly TechnologyDefinition[];
