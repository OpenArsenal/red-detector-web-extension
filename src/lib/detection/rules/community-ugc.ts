import type { TechnologyDefinition } from '../types';

export const communityUgcTechnologyDefinitions = [
	{
		id: "alchemer-mobile",
		name: "Alchemer Mobile",
		website: "https://www.alchemer.com/mobile/",
		description: "Alchemer Mobile, formerly known as Apptentive, is a tool optimized for mobile, consolidating app-store ratings, reviews, in-app customer feedback, emotion data, and key metrics in one dashboard.",
		icon: "AlchemerMobile.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "alchemer-mobile:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.apptentive\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alchemer-mobile:jsGlobal:1",
				kind: "jsGlobal",
				property: "ApptentiveSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "alchemer-mobile:jsGlobal:2",
				kind: "jsGlobal",
				property: "ApptentiveSDK.sdk.version",
				valuePattern: new RegExp("^([\\d\\.])$"),
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
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "ali-reviews",
		name: "Ali Reviews",
		website: "https://apps.shopify.com/ali-reviews",
		description: "Ali reviews is a shopify app to collect reviews from customers.",
		icon: "Alireviews.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "ali-reviews:jsGlobal:0",
				kind: "jsGlobal",
				property: "alireviews_tags",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "alpha-review",
		name: "Alpha Review",
		website: "https://alph.kr",
		description: "Alpha Review is an in-store ecommerce review tool developed in Korea, designed to gather and display customer feedback directly within retail environments.",
		icon: "AlphaReview.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "alpha-review:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/alpha_au\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alpha-review:jsGlobal:1",
				kind: "jsGlobal",
				property: "ALPHAREVIEW_FRONT_ALL",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "alpha-review:jsGlobal:2",
				kind: "jsGlobal",
				property: "alpha_review_count_update",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "alpha-review:jsGlobal:3",
				kind: "jsGlobal",
				property: "alpha_review_count_update_on",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "annoto",
		name: "Annoto",
		website: "https://www.annoto.net",
		description: "Annoto is a platform that transforms video viewing into an interactive, social, and collaborative experience rather than a passive individual activity.",
		icon: "Annoto.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "annoto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.annoto\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "annoto:jsGlobal:1",
				kind: "jsGlobal",
				property: "Annoto.boot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "annoto:jsGlobal:2",
				kind: "jsGlobal",
				property: "AnnotoApiPromise",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "appzi",
		name: "Appzi",
		website: "https://www.appzi.com",
		description: "Appzi is a customer experience software that is a user feedback and bug reporting tool.",
		icon: "Appzi.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "appzi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.appzi\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appzi:jsGlobal:1",
				kind: "jsGlobal",
				property: "appzi.At",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appzi:jsGlobal:2",
				kind: "jsGlobal",
				property: "appziSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "appzi:jsGlobal:3",
				kind: "jsGlobal",
				property: "apzbtgtr",
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
		id: "asknicely",
		name: "AskNicely",
		website: "https://www.asknicely.com",
		description: "AskNicely is a platform that measures and improves customer happiness using the Net Promoter Score (NPS) framework.",
		icon: "AskNicely.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "asknicely:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.asknice\\.ly\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "asknicely:jsGlobal:1",
				kind: "jsGlobal",
				property: "askNicelyConversation",
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
		id: "avis-verifies",
		name: "Avis Verifies",
		website: "https://www.netreviews.com",
		description: "Avis Verifies is a complete solution for managing your customer reviews.",
		icon: "Avis Verifies.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "avis-verifies:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.avis-verifies\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "avis-verifies:dom:1",
				kind: "dom",
				selector: "a[href*='.avis-verifies.com/'][target='_blank'], iframe[src*='.avis-verifies.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "avis-verifies:jsGlobal:2",
				kind: "jsGlobal",
				property: "avisVerifies",
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
		id: "bazaarvoice-reviews",
		name: "Bazaarvoice Reviews",
		website: "https://www.bazaarvoice.com/products/ratings-and-reviews/",
		description: "Bazaarvoice is a provider of user-generated content solutions like ratings and reviews and Q&A.",
		icon: "Bazaarvoice.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "bazaarvoice-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.bazaarvoice\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bazaarvoice-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "BV.api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bazaarvoice-reviews:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("apps\\.bazaarvoice\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
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
		id: "bbpress",
		name: "bbPress",
		website: "https://bbpress.org",
		description: "bbPress is a forum software built to integrate seamlessly with WordPress, allowing discussion forums to run directly within a WordPress blog.",
		icon: "bbPress.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "bbpress:jsGlobal:0",
				kind: "jsGlobal",
				property: "gdbbPressAttachmentsInit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "cackle",
		name: "Cackle",
		website: "https://cackle.me",
		description: "Cackle is a cloud services platform for increasing conversion using comments, feedback collection, online consultant and surveys.",
		icon: "Cackle.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "cackle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("k\\.cackle\\.me\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cackle:jsGlobal:1",
				kind: "jsGlobal",
				property: "Cackle.CommentCount",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cackle:jsGlobal:2",
				kind: "jsGlobal",
				property: "cackle_widget",
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
		id: "circle",
		name: "Circle",
		website: "https://circle.so",
		description: "Circie is an all-in-one community platform for businesses that brings together engaging courses, discussions, members, live streams, chat, events, and memberships.",
		icon: "Circle.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "circle:dom:0",
				kind: "dom",
				selector: "a[href*='.circle.so/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "circle:jsGlobal:1",
				kind: "jsGlobal",
				property: "circleUser",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "circle:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_circle_session:$", "i"),
				confidence: 50,
				description: "Cookie name matches a known technology marker.",
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
		id: "clutch",
		name: "Clutch",
		website: "https://clutch.co/content/add-review-widget-your-website",
		description: "Clutch review widgets are stand-alone applications that you can embed on your website to show your dynamic ratings and reviews.",
		icon: "clutch.svg",
		categories: [
			"community-ugc",
			"widgets-misc",
		],
		rules: [
			{
				id: "clutch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/widget\\.clutch\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "cometd",
		name: "CometD",
		website: "https://cometd.org",
		description: "CometD is a scalable clustered web messaging platform that provides a HTTP-based event routing bus using the Ajax Push technology pattern known as Comet.",
		icon: "CometD.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "cometd:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/cometd\\/jquery\\.cometd\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cometd:jsGlobal:1",
				kind: "jsGlobal",
				property: "cometMsgReceived",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			cpe: "cpe:2.3:a:cometd:cometd:*:*:*:*:*:*:*:*",
		},
		requires: [
			"jquery",
		],
	},
	{
		id: "commento",
		name: "Commento",
		website: "https://commento.io",
		description: "Commento is a tool for fostering discussion and improving engagement on websites.",
		icon: "Commento.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "commento:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.commento\\.io\\/"),
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
		id: "community",
		name: "Community",
		website: "https://www.community.com",
		description: "Community is a platform enabling public figures, small to midsize businesses, and enterprise brands to connect instantly with their audience through large-scale conversational text messaging.",
		icon: "Community.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "community:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.community\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "contlo",
		name: "Contlo",
		website: "https://www.contlo.com",
		description: "Contlo is an AI powered marketing software.",
		icon: "Contlo.png",
		categories: [
			"community-ugc",
			"marketing-automation",
		],
		rules: [
			{
				id: "contlo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.contlo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "contlo:jsGlobal:1",
				kind: "jsGlobal",
				property: "CONTLO_ENV",
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
		id: "copiny",
		name: "Copiny",
		website: "https://copiny.com",
		description: "Copiny is a Russian-based community support system.",
		icon: "Copiny.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "copiny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.copiny\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "countable",
		name: "Countable",
		website: "https://www.countable.com",
		description: "Countable is a community platform designed to support discussion, collaboration, and engagement among members through shared content, forums, and interactive features.",
		icon: "Countable.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "countable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.countable\\.us\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "countable:meta:1",
				kind: "meta",
				key: "appleid-signin-client-id",
				valuePattern: new RegExp("com\\.countable\\.signin", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cove",
		name: "Cove",
		website: "https://www.coveo.com",
		description: "Cove is a commenting and community platform that integrates with Ghost sites to enable reader discussions and user engagement.",
		icon: "Cove.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "cove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.cove\\.chat"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cove:jsGlobal:1",
				kind: "jsGlobal",
				property: "coveAction",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cove:jsGlobal:2",
				kind: "jsGlobal",
				property: "coveCommentCount",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "customer-alliance",
		name: "Customer Alliance",
		website: "https://www.customer-alliance.com",
		description: "Customer Alliance is a cloud-based platform facilitating customer reviews and feedback management and analysis.",
		icon: "CustomerAlliance.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "customer-alliance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.customer-alliance\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "discourse",
		name: "Discourse",
		website: "https://discourse.org",
		description: "Discourse is an open-source internet forum and mailing list management software application.",
		icon: "Discourse.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "discourse:jsGlobal:0",
				kind: "jsGlobal",
				property: "Discourse",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "discourse:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Discourse(?: ?\\/?([\\d.]+\\d))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "discourse:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("discourse(?: ?\\/?([\\d.]+\\d))?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:discourse:discourse:*:*:*:*:*:*:*:*",
		},
		implies: [
			"ruby-on-rails",
		],
	},
	{
		id: "discuz-x",
		name: "Discuz! X",
		website: "https://www.discuz.net",
		description: "Discuz! X is an internet forum software written in PHP and supports MySQL and PostgreSQL databases.",
		icon: "Discuz X.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "discuz-x:jsGlobal:0",
				kind: "jsGlobal",
				property: "DISCUZCODE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "discuz-x:jsGlobal:1",
				kind: "jsGlobal",
				property: "discuzVersion",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "discuz-x:jsGlobal:2",
				kind: "jsGlobal",
				property: "discuz_uid",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "discuz-x:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Discuz! X([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "discuz-x:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("discuz! x([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"php",
		],
	},
	{
		id: "disqus",
		name: "Disqus",
		website: "https://disqus.com",
		description: "Disqus is a worldwide blog comment hosting service for web sites and online communities that use a networked platform.",
		icon: "Disqus.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "disqus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("disqus_url"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "disqus:dom:1",
				kind: "dom",
				selector: "div#disqus_thread",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "disqus:jsGlobal:2",
				kind: "jsGlobal",
				property: "DISQUS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "disqus:jsGlobal:3",
				kind: "jsGlobal",
				property: "disqus_shortname",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "disqus:jsGlobal:4",
				kind: "jsGlobal",
				property: "disqus_url",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:disqus:disqus_comment_system:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "elkarte",
		name: "ElkArte",
		website: "https://www.elkarte.net",
		description: "ElkArte is an open-source PHP-based forum software with MySQL integration, offering features such as user authentication, topic categorisation, post formatting, private messaging, moderation tools, and customisable themes and extensions.",
		icon: "ElkArte.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "elkarte:jsGlobal:0",
				kind: "jsGlobal",
				property: "elk_forum_action",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "elkarte:jsGlobal:1",
				kind: "jsGlobal",
				property: "elk_iso_case_folding",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"mysql",
		],
		requires: [
			"php",
		],
	},
	{
		id: "famewall",
		name: "Famewall",
		website: "https://famewall.io",
		description: "Famewall is a tool that converts social media mentions into visually appealing testimonials and automates the process of collecting them from customers using a custom collection feature.",
		icon: "Famewall.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "famewall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.famewall\\.io\\/"),
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
		id: "featherx",
		name: "FeatherX",
		website: "https://featherx.ai",
		description: "FeatherX captures content from all major reviews and social media channels.",
		icon: "FeatherX.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "featherx:jsGlobal:0",
				kind: "jsGlobal",
				property: "featherx.clientId",
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
		id: "feefo",
		name: "Feefo",
		website: "https://www.feefo.com",
		description: "Feefo is a cloud-based consumer review and rating management software.",
		icon: "Feefo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "feefo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.feefo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "feefo:dom:1",
				kind: "dom",
				selector: "a[href*='.feefo.com/'][target='_blank'], link[href*='.feefo.com/'], img[src*='.feefo.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "feefo:jsGlobal:2",
				kind: "jsGlobal",
				property: "feefoTracker",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "feefo:jsGlobal:3",
				kind: "jsGlobal",
				property: "feefoWidget",
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
		id: "fera",
		name: "Fera",
		website: "https://fera.ai/",
		description: "Fera is a product review and social proof application for ecommerce websites.",
		icon: "Fera.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "fera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fera\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fera:jsGlobal:1",
				kind: "jsGlobal",
				property: "fera",
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
		id: "fider",
		name: "Fider",
		website: "https://fider.io",
		description: "Fider is an open-source platform for collecting, organizing, and prioritizing customer feedback to support product development decisions.",
		icon: "Fider.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "fider:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunkfider",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "flamp",
		name: "Flamp",
		website: "https://flamp.ru",
		description: "Flamp is a city review widget that displays user-generated ratings and reviews of local businesses, helping visitors assess service quality and reputation.",
		icon: "Flamp.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "flamp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.flamp\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "flarum",
		name: "Flarum",
		website: "https://flarum.org/",
		description: "Flarum is a discussion platform.",
		icon: "flarum.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "flarum:html:0",
				kind: "html",
				pattern: new RegExp("<div id=\"flarum-loading\""),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "flarum:jsGlobal:1",
				kind: "jsGlobal",
				property: "app.cache.discussionList",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flarum:jsGlobal:2",
				kind: "jsGlobal",
				property: "app.forum.freshness",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "flarum:dom:3",
				kind: "dom",
				selector: "div[id*='flarum-loading']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:flarum:flarum:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "flockrocket",
		name: "FlockRocket",
		website: "https://flockrocket.io",
		description: "FlockRocket is a reviews system designed to collect, manage, and display verified customer feedback.",
		icon: "FlockRocket.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "flockrocket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.flockrocket\\.io"),
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
		id: "fluxbb",
		name: "FluxBB",
		website: "https://fluxbb.org",
		description: "FluxBB is a lightweight open-source forum application written in PHP.",
		icon: "FluxBB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "fluxbb:html:0",
				kind: "html",
				pattern: new RegExp("<p id=\"poweredby\">[^<]+<a href=\"https?:\\/\\/fluxbb\\.org\\/\">"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "fluxbb:dom:1",
				kind: "dom",
				selector: "p#poweredby > a[href*='//fluxbb.org/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:fluxbb:fluxbb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "forumbee",
		name: "Forumbee",
		website: "https://forumbee.com",
		description: "Forumbee is a platform for hosting community Q&A spaces and discussion forums, providing organized threads for information exchange and user-driven support.",
		icon: "Forumbee.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "forumbee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.forumbee\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "frill",
		name: "Frill",
		website: "https://frill.co",
		description: "Frill is a platform that connects customers and businesses by enabling customers to provide feedback.",
		icon: "Frill.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "frill:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.frill\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "frill:jsGlobal:1",
				kind: "jsGlobal",
				property: "FRILL_ENV",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "frill:jsGlobal:2",
				kind: "jsGlobal",
				property: "Frill.containers",
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
		id: "fudforum",
		name: "FUDforum",
		website: "https://github.com/fudforum/FUDforum",
		description: "FUDforum is a discussion forum software with support for posts, topics, polls and attachments.",
		icon: "default.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "fudforum:jsGlobal:0",
				kind: "jsGlobal",
				property: "fud_msg_focus",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fudforum:jsGlobal:1",
				kind: "jsGlobal",
				property: "fud_tree_msg_focus",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:fudforum:fudforum:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
			"php",
		],
	},
	{
		id: "getreview",
		name: "GetReview",
		website: "https://getreview.pl",
		description: "GetReview is a website reviews system designed to collect, manage, and display user feedback.",
		icon: "GetReview.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "getreview:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getreview\\.pl"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getreview:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.getreview\\.pl"),
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
		id: "giscus",
		name: "Giscus",
		website: "https://giscus.app",
		description: "Giscus is a comment system powered by GitHub Discussions.",
		icon: "Giscus.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "giscus:dom:0",
				kind: "dom",
				selector: "link[href*='giscus.app'], div[class^='giscus-container']",
				description: "DOM selector matches a known technology marker.",
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
		id: "goodreviews",
		name: "GoodReviews",
		website: "https://goodreviews.io",
		description: "GoodReviews is a tool that displays and collects Google reviews to support online reputation management and customer feedback tracking.",
		icon: "GoodReview.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "goodreviews:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.goodreviews\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "goodreviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "GoodReviewObject",
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
		id: "google-customer-reviews",
		name: "Google Customer Reviews",
		website: "https://support.google.com/merchants/answer/7105655?hl=en",
		description: "Google Customer Reviews is a badge on your site that can help users identify your site with the Google brand and can be placed on any page of your site.",
		icon: "Google.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "google-customer-reviews:dom:0",
				kind: "dom",
				selector: "iframe[src*='.google.com/shopping/customerreviews/'], a[href*='.google.com/shopping/customerreviews/'][target='_blank']",
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
		id: "higher-logic-vanilla",
		name: "Higher Logic Vanilla",
		website: "https://vanilla.higherlogic.com",
		description: "Higher Logic Vanilla is a cloud-based customer community platform offering features like discussion forums, Q&A, ideation, gamification, and advanced analytics, enabling businesses to enhance customer engagement and support.",
		icon: "Higher Logic.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "higher-logic-vanilla:dom:0",
				kind: "dom",
				selector: "body#DiscussionsPage, body#vanilla",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "higher-logic-vanilla:jsGlobal:1",
				kind: "jsGlobal",
				property: "Vanilla",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "higher-logic-vanilla:jsGlobal:2",
				kind: "jsGlobal",
				property: "__VANILLA_GLOBALS__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "higher-logic-vanilla:header:3",
				kind: "header",
				key: " x-vanilla-version",
				valuePattern: new RegExp("([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "higher-logic-vanilla:header:4",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Vanilla", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "higher-logic-vanilla:header:5",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("vanilla", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"recurring",
			],
		},
		implies: [
			"php",
		],
	},
	{
		id: "hulkapps-product-reviews",
		name: "HulkApps Product Reviews",
		website: "https://www.hulkapps.com/products/product-reviews-shopify",
		description: "HulkApps Product Reviews is a customer product reviews app for building social proof for store.",
		icon: "HulkApps.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "hulkapps-product-reviews:dom:0",
				kind: "dom",
				selector: "link[href*='reviews.hulkapps.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "hulkapps-product-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "hulkappsProductReview",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hulkapps-product-reviews:jsGlobal:2",
				kind: "jsGlobal",
				property: "hulkappsReviews",
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
		id: "iiq-check",
		name: "iiQ Check",
		website: "https://www.iiq-check.de",
		description: "iiQ Check is a system designed to optimize hotel guest communication and manage review distribution.",
		icon: "iiQCheck.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "iiq-check:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.iiq-check\\.de"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "influenster",
		name: "Influenster",
		website: "https://www.influenster.com",
		description: "Influenster is a product reviews widget that displays feedback and ratings from shoppers on websites.",
		icon: "Influenster.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "influenster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.influenster\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "influenster:jsGlobal:1",
				kind: "jsGlobal",
				property: "showInfluensterWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "intensedebate",
		name: "IntenseDebate",
		website: "https://intensedebate.com",
		description: "IntenseDebate is a blog commenting system that supports Typepad, Blogger and Wordpress blogs. The system allows blog owners to track and moderate comments from one place with features like threading, comment analytics, user reputation, and comment aggregation.",
		icon: "IntenseDebate.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "intensedebate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("intensedebate\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "invision-power-board",
		name: "Invision Power Board",
		website: "https://invisioncommunity.com",
		description: "Invision Power Board is a commercial Internet forum software developed by Invision Community (formerly Invision Power Services).",
		icon: "Invision Power Board.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "invision-power-board:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jscripts\\/ips_"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "invision-power-board:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("ipb_url_filter_option"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "invision-power-board:html:2",
				kind: "html",
				pattern: new RegExp("<link[^>]+ipb_[^>]+\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "invision-power-board:jsGlobal:3",
				kind: "jsGlobal",
				property: "IPBoard",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "invision-power-board:jsGlobal:4",
				kind: "jsGlobal",
				property: "ipb_var",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "invision-power-board:jsGlobal:5",
				kind: "jsGlobal",
				property: "ipsSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "invision-power-board:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^ipbWWLmodpids$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "invision-power-board:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^ipbWWLsession_id$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "invision-power-board:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^ipbwwlmodpids$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "invision-power-board:cookie:9",
				kind: "cookie",
				keyPattern: new RegExp("^ipbwwlsession_id$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:invisioncommunity:invision_power_board:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "ipb",
		name: "IPB",
		website: "https://invisioncommunity.com/",
		icon: "IPB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "ipb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jscripts\\/ips_"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ipb:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]+ipb_[^>]+\\.css"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "ipb:jsGlobal:2",
				kind: "jsGlobal",
				property: "IPBoard",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ipb:jsGlobal:3",
				kind: "jsGlobal",
				property: "ipb_var",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ipb:jsGlobal:4",
				kind: "jsGlobal",
				property: "ipsSettings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ipb:cookie:5",
				kind: "cookie",
				keyPattern: new RegExp("^ipbWWLmodpids$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "ipb:cookie:6",
				kind: "cookie",
				keyPattern: new RegExp("^ipbWWLsession_id$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "ipb:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^ipbwwlmodpids$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "ipb:cookie:8",
				kind: "cookie",
				keyPattern: new RegExp("^ipbwwlsession_id$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "isso",
		name: "Isso",
		website: "https://github.com/posativ/isso/",
		description: "Isso is a lightweight commenting server written in Python and JavaScript, referred to as \"Ich schrei sonst\" in German.",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "isso:jsGlobal:0",
				kind: "jsGlobal",
				property: "Isso.fetchComments",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"python",
		],
	},
	{
		id: "jiglu",
		name: "Jiglu",
		website: "https://www.jiglu.com",
		description: "Jiglu is a collaboration and communities suite that connects enterprise content with conversations to support improved communication.",
		icon: "Jiglu.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "jiglu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jiglu\\.com\\/"),
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
		id: "judge-me",
		name: "Judge.me",
		website: "https://judge.me",
		description: "Judge.me is a reviews app that helps you collect and display product reviews and site reviews with photos, videos and Q&A.",
		icon: "Judge.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "judge-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.judge\\.me"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "judge-me:jsGlobal:1",
				kind: "jsGlobal",
				property: "judgeme",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "judge-me:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\.judge\\.me"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "judge-me:jsGlobal:3",
				kind: "jsGlobal",
				property: "jdgm",
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
		id: "junip",
		name: "Junip",
		website: "https://junip.co",
		description: "Junip provider of an ecommerce brand review platform designed to share customers' story, send review requests and display review content.",
		icon: "Junip.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "junip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.juniphq\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "junip:jsGlobal:1",
				kind: "jsGlobal",
				property: "junipLoaded",
				confidence: 50,
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "junip:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkjunip_scripts",
				confidence: 50,
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
		id: "klaviyo-reviews",
		name: "Klaviyo Reviews",
		website: "https://www.klaviyo.com/product-reviews",
		description: "Klaviyo Reviews is a built-in product review offering for Shopify and WooCommerce by Klaviyo.",
		icon: "Klaviyo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "klaviyo-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("klaviyo\\.com\\/onsite\\/js\\/reviews"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klaviyo-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "klaviyoReviewsProductDesignMode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "klaviyo-reviews:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.klaviyo\\.com\\/onsite\\/js\\/vendors~reviews"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klaviyo-reviews:dom:3",
				kind: "dom",
				selector: "div#klaviyo-product-reviews-wrapper",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"klaviyo",
		],
	},
	{
		id: "konfidency-reviews",
		name: "Konfidency Reviews",
		website: "https://www.konfidency.com.br",
		description: "Konfidency Reviews is a platform that builds trust, boosts organic traffic, and supports purchasing decisions by providing reviews from customers who are familiar with the products.",
		icon: "KonfidencyReviews.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "konfidency-reviews:jsGlobal:0",
				kind: "jsGlobal",
				property: "konfidencyCustomer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "konfidency-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "konfidencyLoader",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kudobuzz",
		name: "Kudobuzz",
		website: "https://kudobuzz.com/",
		description: "Kudobuzz is a tool for collecting and managing customer reviews.",
		icon: "kudobuzz.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "kudobuzz:jsGlobal:0",
				kind: "jsGlobal",
				property: "Kudos.apiServer",
				valuePattern: new RegExp("api\\.kudobuzz\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"svelte",
		],
	},
	{
		id: "letro",
		name: "Letro",
		website: "https://service.aainc.co.jp/product/letro/",
		description: "Letro is an UGC and review tool for ecommerce platforms.",
		icon: "Letro.svg",
		categories: [
			"community-ugc",
			"marketing-automation",
		],
		rules: [
			{
				id: "letro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("letro\\.jp\\/tags"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "letro:jsGlobal:1",
				kind: "jsGlobal",
				property: "__letroUgcGadget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "letro:jsGlobal:2",
				kind: "jsGlobal",
				property: "letroUgcSet",
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
		id: "linen",
		name: "Linen",
		website: "https://www.linen.dev",
		description: "Linen is a real-time chat platform built for communities.",
		icon: "Linen.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "linen:jsGlobal:0",
				kind: "jsGlobal",
				property: "__NEXT_DATA__.props.pageProps.currentCommunity.logoUrl",
				valuePattern: new RegExp("static\\.main\\.linendev\\.com\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"elixir",
			"typescript",
		],
	},
	{
		id: "lipscore",
		name: "LipScore",
		website: "https://lipscore.com",
		description: "LipScore is a ratings and reviews engine.",
		icon: "LipScore.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "lipscore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lipscore\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lipscore:jsGlobal:1",
				kind: "jsGlobal",
				property: "LipscoreSwiper",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lipscore:jsGlobal:2",
				kind: "jsGlobal",
				property: "wcLipscoreInit",
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
		id: "livefyre",
		name: "Livefyre",
		website: "https://livefyre.com",
		description: "Livefyre is a platform that integrates with the social web to boost social interaction.",
		icon: "Livefyre.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "livefyre:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("livefyre_init\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "livefyre:html:1",
				kind: "html",
				pattern: new RegExp("<[^>]+(?:id|class)=\"livefyre"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "livefyre:jsGlobal:2",
				kind: "jsGlobal",
				property: "FyreLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livefyre:jsGlobal:3",
				kind: "jsGlobal",
				property: "L.version",
				valuePattern: new RegExp("^(.+)$"),
				confidence: 0,
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livefyre:jsGlobal:4",
				kind: "jsGlobal",
				property: "LF.CommentCount",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livefyre:jsGlobal:5",
				kind: "jsGlobal",
				property: "fyre",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "loox",
		name: "Loox",
		website: "https://loox.app",
		description: "Loox is a reviews app for Shopify that helps you gather reviews and user-generated photos from your customers.",
		icon: "Loox.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "loox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("loox\\.io\\/widget"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loox:jsGlobal:1",
				kind: "jsGlobal",
				property: "loox_global_hash",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "loyaltyloop",
		name: "LoyaltyLoop",
		website: "https://loyaltyloop.com",
		description: "LoyaltyLoop is an online review management platform that leverages customer loyalty surveys and Net Promoter Score tracking to enhance business reputation and strengthen customer relationships.",
		icon: "LoyaltyLoop.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "loyaltyloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.loyaltyloop\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "loyaltyloop:jsGlobal:1",
				kind: "jsGlobal",
				property: "LoyaltyLoopEventListenerInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "loyaltyloop:jsGlobal:2",
				kind: "jsGlobal",
				property: "countOfLoyaltyLoopTestimonialWidgets",
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
		id: "mastodon",
		name: "Mastodon",
		website: "https://joinmastodon.org",
		description: "Mastodon is a free and open-source self-hosted social networking service.",
		icon: "Mastodon.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "mastodon:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_mastodon_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "mastodon:header:1",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^Mastodon$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mastodon:header:2",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^mastodon$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:joinmastodon:mastodon:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "mattermost",
		name: "Mattermost",
		website: "https://about.mattermost.com",
		icon: "mattermost.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "mattermost:html:0",
				kind: "html",
				pattern: new RegExp("<noscript> To use Mattermost, please enable JavaScript\\. <\\/noscript>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "mattermost:jsGlobal:1",
				kind: "jsGlobal",
				property: "mm_config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:jsGlobal:2",
				kind: "jsGlobal",
				property: "mm_current_user_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:jsGlobal:3",
				kind: "jsGlobal",
				property: "mm_license",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:jsGlobal:4",
				kind: "jsGlobal",
				property: "mm_user",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:jsGlobal:5",
				kind: "jsGlobal",
				property: "mattermost_webapp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:jsGlobal:6",
				kind: "jsGlobal",
				property: "webpackChunkmattermost_webapp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mattermost:meta:7",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Mattermost$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "mattermost:html:8",
				kind: "html",
				pattern: new RegExp("<noscript> to use mattermost, please enable javascript\\. <\\/noscript>"),
				description: "HTML contains a known technology signature.",
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
			cpe: "cpe:2.3:a:jenkins:mattermost:*:*:*:*:*:*:*:*",
		},
		implies: [
			"go",
			"react",
		],
	},
	{
		id: "mighty-network",
		name: "Mighty Network",
		website: "https://www.mightynetworks.com",
		description: "Mighty Networks is a platform that facilitates the creation and management of online communities, offering customisable websites, discussion forums, member profiles, events, courses, and multimedia content sharing for individuals and organisations.",
		icon: "Mighty Network.svg",
		categories: [
			"community-ugc",
			"content-publishing",
		],
		rules: [
			{
				id: "mighty-network:jsGlobal:0",
				kind: "jsGlobal",
				property: "Mighty.BroadcastBotApp",
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
		implies: [
			"ruby",
			"ruby-on-rails",
		],
	},
	{
		id: "misskey",
		name: "Misskey",
		website: "https://join.misskey.page/",
		description: "Misskey is a distributed microblogging platform.",
		icon: "Misskey.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "misskey:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Thank you for using Misskey! @syuilo -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "misskey:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("Misskey", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "misskey:html:2",
				kind: "html",
				pattern: new RegExp("<!-- thank you for using misskey! @syuilo -->"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "misskey:meta:3",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("misskey", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:misskey:misskey:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "morevago",
		name: "MoreVago",
		website: "https://www.morevago.com",
		description: "MoreVago is a platform that displays customer testimonials and reviews to help businesses increase conversions and sales.",
		icon: "MoreVago.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "morevago:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.morevago\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "morevago:jsGlobal:1",
				kind: "jsGlobal",
				property: "morevagoOptions",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "morevago:jsGlobal:2",
				kind: "jsGlobal",
				property: "objMorevago",
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
		id: "mybb",
		name: "MyBB",
		website: "https://mybb.com",
		description: "MyBB is a free and open-source forum software written in PHP.",
		icon: "MyBB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "mybb:jsGlobal:0",
				kind: "jsGlobal",
				property: "MyBB",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mybb:jsGlobal:1",
				kind: "jsGlobal",
				property: "MyBBEditor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mybb:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^mybb\\[lastactive\\]$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "mybb:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^mybb\\[lastvisit\\]$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:mybb:mybb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "myli",
		name: "Myli",
		website: "https://www.myli.io",
		description: "Myli is a platform enhancing customer experience, streamlining reputation management, and facilitating consumer acquisition.",
		icon: "Myli.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "myli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-app\\.myli\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "myli:jsGlobal:1",
				kind: "jsGlobal",
				property: "myli_push.geolocate",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "nabble",
		name: "Nabble",
		website: "https://nabble.com",
		description: "Nabble is a platform offering free forum hosting and online web applications with customizable features.",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "nabble:jsGlobal:0",
				kind: "jsGlobal",
				property: "Nabble.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nabble:jsGlobal:1",
				kind: "jsGlobal",
				property: "NabbleDropdown",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nabble:jsGlobal:2",
				kind: "jsGlobal",
				property: "t_show_nabble_notice",
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
		id: "nodebb",
		name: "NodeBB",
		website: "https://nodebb.org",
		description: "NodeBB forum software is powered by Node.js and built on either a Redis or MongoDB database.",
		icon: "NodeBB.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "nodebb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/nodebb\\.min\\.js\\?"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nodebb:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("^NodeBB$", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "nodebb:header:2",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("^nodebb$", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"recurring",
			],
			cpe: "cpe:2.3:a:nodebb:nodebb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"node-js",
		],
	},
	{
		id: "oclocher",
		name: "Oclocher",
		website: "https://www.oclocher.fr",
		description: "Oclocher is a parish animation app used by parishes and dioceses to help maintain connections between parishioners from one Sunday to the next.",
		icon: "OClocher.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "oclocher:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.oclocher\\.fr"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oclocher:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("widget\\.oclocher\\.fr", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "oclocher:header:2",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("widget\\.oclocher\\.fr", "i"),
				description: "Response header matches a known technology marker.",
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
		id: "oculizm",
		name: "Oculizm",
		website: "https://oculizm.com",
		description: "Oculizm is a conversion optimization tool that utilizes user-generated content and customer reviews to enhance consumer trust for retailers, resulting in increased sales and engagement.",
		icon: "Oculizm.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "oculizm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.oculizm\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "okendo",
		name: "Okendo",
		website: "https://www.okendo.io",
		description: "Okendo is a customer marketing platform with product ratings and reviews, customer photos and videos to help personalise experiences.",
		icon: "Okendo.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "okendo:dom:0",
				kind: "dom",
				selector: "div.okeReviews",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "okendo:jsGlobal:1",
				kind: "jsGlobal",
				property: "okeReviewsWidgetOnInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okendo:jsGlobal:2",
				kind: "jsGlobal",
				property: "okeWidgetControlInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okendo:jsGlobal:3",
				kind: "jsGlobal",
				property: "okendoReviews",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "okendo:jsGlobal:4",
				kind: "jsGlobal",
				property: "okeWidgetApi",
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
		implies: [
			"shopify",
		],
	},
	{
		id: "orankl",
		name: "Orankl",
		website: "https://www.orankl.com",
		description: "Orankl is a provider email marketing and review services.",
		icon: "Orankl.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "orankl:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.orankl\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "orankl:jsGlobal:1",
				kind: "jsGlobal",
				property: "Orankl",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "orankl:jsGlobal:2",
				kind: "jsGlobal",
				property: "oranklInit",
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
		id: "peerboard",
		name: "PeerBoard",
		website: "https://peerboard.com",
		description: "PeerBoard is a plug-and-play community solution, which helps groups, clubs, startups, marketplaces and businesses create discussion forums.",
		icon: "PeerBoard.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "peerboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.peerboard\\.com\\/"),
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
		id: "peertube",
		name: "PeerTube",
		website: "https://joinpeertube.org/",
		description: "PeerTube is a free and open-source, decentralized, federated video platform powered by ActivityPub and WebTorrent.",
		icon: "PeerTube.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "peertube:dom:0",
				kind: "dom",
				selector: "#incompatible-browser p",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "peertube:text:1",
				kind: "text",
				pattern: new RegExp("^We are sorry but it seems that PeerTube is not compatible with your web browser\\.$"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "peertube:meta:2",
				kind: "meta",
				key: "og:platform",
				valuePattern: new RegExp("^PeerTube$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "peertube:meta:3",
				kind: "meta",
				key: "og:platform",
				valuePattern: new RegExp("^peertube$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:framasoft:peertube:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "philomena",
		name: "Philomena",
		website: "https://github.com/derpibooru/philomena",
		description: "Philomena is an imageboard software.",
		icon: "Philomena.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "philomena:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^philomena$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"elixir",
			"erlang",
		],
	},
	{
		id: "phpbb",
		name: "phpBB",
		website: "https://phpbb.com",
		description: "phpBB is a free open-source Internet forum package in the PHP scripting language.",
		icon: "phpBB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "phpbb:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a[^>]+phpBB"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:html:1",
				kind: "html",
				pattern: new RegExp("<div class=phpbb_copyright>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:html:2",
				kind: "html",
				pattern: new RegExp("<[^>]+styles\\/(?:sub|pro)silver\\/theme"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:html:3",
				kind: "html",
				pattern: new RegExp("<img[^>]+i_icon_mini"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:html:4",
				kind: "html",
				pattern: new RegExp("<table class=\"[^\"]*forumline"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:jsGlobal:5",
				kind: "jsGlobal",
				property: "phpbb",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "phpbb:jsGlobal:6",
				kind: "jsGlobal",
				property: "style_cookie_settings",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "phpbb:cookie:7",
				kind: "cookie",
				keyPattern: new RegExp("^phpbb$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "phpbb:meta:8",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("phpBB Group", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "phpbb:dom:9",
				kind: "dom",
				selector: "div[class*='phpbb_copyright'], table[class*='forumline']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "phpbb:html:10",
				kind: "html",
				pattern: new RegExp("powered by <a[^>]+phpbb"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "phpbb:meta:11",
				kind: "meta",
				key: "copyright",
				valuePattern: new RegExp("phpbb group", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:phpbb:phpbb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "pixelfed",
		name: "PixelFed",
		website: "https://pixelfed.org",
		description: "PixelFed is an activitypub based image sharing platform.",
		icon: "PixelFed.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "pixelfed:dom:0",
				kind: "dom",
				selector: "a[href='pixelfed.org'][title*='version']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pixelfed:text:1",
				kind: "text",
				pattern: new RegExp("^Powered by Pixelfed$"),
				description: "Page text contains a known technology marker.",
			},
		],
		implies: [
			"laravel",
		],
	},
	{
		id: "pleroma",
		name: "Pleroma",
		website: "https://pleroma.social/",
		description: "Pleroma is a free, federated social networking server built on open protocols.",
		icon: "Pleroma.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "pleroma:dom:0",
				kind: "dom",
				selector: "noscript",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pleroma:text:1",
				kind: "text",
				pattern: new RegExp("^To use Pleroma, please enable JavaScript.$"),
				description: "Page text contains a known technology marker.",
			},
			{
				id: "pleroma:dom:2",
				kind: "dom",
				selector: "title",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "pleroma:text:3",
				kind: "text",
				pattern: new RegExp("^Pleroma$"),
				description: "Page text contains a known technology marker.",
			},
		],
	},
	{
		id: "poll-maker",
		name: "Poll Maker",
		website: "https://www.poll-maker.com",
		description: "Poll Maker is a system designed to create and manage online polls, allowing users to gather opinions, feedback, or votes.",
		icon: "PollMaker.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "poll-maker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.poll-maker\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "popvox",
		name: "Popvox",
		website: "https://popvox.com",
		description: "Popvox is a platform that fosters civic engagement by providing tools for citizens to influence policy decisions and engage with elected representatives on governing innovations.",
		icon: "Popvox.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "popvox:dom:0",
				kind: "dom",
				selector: "div[id*='PopVox'] > a[href*='www.popvox.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "powerreviews",
		name: "PowerReviews",
		website: "https://www.powerreviews.com/",
		description: "Powerreviews is a provider of UGC solutions like ratings and reviews.",
		icon: "PowerReviews.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "powerreviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ui\\.powerreviews\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "powerreviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "POWERREVIEWS",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "provesource",
		name: "ProveSource",
		website: "https://provesrc.com",
		description: "ProveSource is a solution to display social proof and boost conversion.",
		icon: "ProveSource.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "provesource:jsGlobal:0",
				kind: "jsGlobal",
				property: "_provesrcAsyncInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "provesource:jsGlobal:1",
				kind: "jsGlobal",
				property: "provesrc.display",
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
		id: "pulsem",
		name: "PulseM",
		website: "https://pulsem.me",
		description: "PulseM is an online platform for managing customer reviews and business reputation across digital channels.",
		icon: "PulseM.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "pulsem:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/embed-pulsemweb-gsd\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pulsem:jsGlobal:1",
				kind: "jsGlobal",
				property: "pulsem_button_installed",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "punbb",
		name: "punBB",
		website: "https://punbb.informer.com",
		icon: "punBB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "punbb:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^>]+punbb"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "punbb:jsGlobal:1",
				kind: "jsGlobal",
				property: "PUNBB",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "punbb:html:2",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"[^>]+punbb"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:gnu:punbb:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "pushwoosh",
		name: "PushWoosh",
		website: "https://www.pushwoosh.com",
		description: "PushWoosh is a messaging system that supports push notifications and in-app messages.",
		icon: "PushWoosh.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "pushwoosh:jsGlobal:0",
				kind: "jsGlobal",
				property: "Pushwoosh",
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
		id: "qualitelis",
		name: "Qualitelis",
		website: "https://www.qualitelis.septeo.com",
		description: "Qualitelis is a hotel guest review system designed to collect, manage, and analyze feedback, helping hospitality providers improve services by addressing customer experiences and satisfaction levels.",
		icon: "Qualitelis.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "qualitelis:jsGlobal:0",
				kind: "jsGlobal",
				property: "InitWidgetQualitelis",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qualitelis:jsGlobal:1",
				kind: "jsGlobal",
				property: "resizeWidgetQualitelis",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qualitelis:jsGlobal:2",
				kind: "jsGlobal",
				property: "showHideWidgetQualitelis",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qualitelis:jsGlobal:3",
				kind: "jsGlobal",
				property: "widgetQualitelisFixed",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "question2answer",
		name: "Question2Answer",
		website: "https://www.question2answer.org",
		description: "Question2Answer (Q2A) is a popular open-source Q&A platform for PHP/MySQL.",
		icon: "question2answer.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "question2answer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.\\/qa-content\\/qa-page\\.js\\?([0-9.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "question2answer:html:1",
				kind: "html",
				pattern: new RegExp("<!-- Powered by Question2Answer"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "question2answer:html:2",
				kind: "html",
				pattern: new RegExp("<!-- powered by question2answer"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:question2answer:question2answer:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "rasayel",
		name: "Rasayel",
		website: "https://www.rasayel.io",
		description: "Rasayel is a customer communication platform that helps businesses sell to and support their customers over WhatsApp and other social messaging channels.",
		icon: "Rasayel.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "rasayel:jsGlobal:0",
				kind: "jsGlobal",
				property: "RasayelOmniWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rasayel:jsGlobal:1",
				kind: "jsGlobal",
				property: "RasayelWabaWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rasayel:jsGlobal:2",
				kind: "jsGlobal",
				property: "RasayelWhatsAppWidget",
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
		id: "rateabiz",
		name: "RateAbiz",
		website: "https://rateabiz.com",
		description: "RateABiz is a reviews widgets for local service providers.",
		icon: "RateAbiz.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "rateabiz:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.rateabiz\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ratesight",
		name: "Ratesight",
		website: "https://ratesight.com",
		description: "Ratesight is an online review management software that helps businesses collect and track online reviews.",
		icon: "RateSight.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "ratesight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ratesight\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ratesight:dom:1",
				kind: "dom",
				selector: "script#ratesight-sidebar-widget",
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
		id: "ravecapture",
		name: "RaveCapture",
		website: "https://ravecapture.com",
		description: "RaveCapture is a platform for ecommerce stores to collect customer reviews, user-generated content, and survey responses in a single system to support trust-building and customer feedback management.",
		icon: "RaveCapture.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "ravecapture:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trustspot\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ravecapture:jsGlobal:1",
				kind: "jsGlobal",
				property: "trustspot_key",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "realsatisfied",
		name: "RealSatisfied",
		website: "https://www.realsatisfied.com",
		description: "RealSatisfied is a platform that enables the collection of client feedback and facilitates its promotion across online channels to enhance credibility and visibility.",
		icon: "RealSatisfied.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "realsatisfied:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.realsatisfied\\.com"),
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
		id: "reddit",
		name: "Reddit",
		website: "https://code.reddit.com",
		icon: "Reddit.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reddit:html:0",
				kind: "html",
				pattern: new RegExp("(?:<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "reddit:url:1",
				kind: "url",
				pattern: new RegExp("^https?:\\/\\/(?:www\\.)?reddit\\.com"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "reddit:jsGlobal:2",
				kind: "jsGlobal",
				property: "reddit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reddit:html:3",
				kind: "html",
				pattern: new RegExp("(?:<a[^>]+powered by reddit|powered by <a[^>]+>reddit<)"),
				description: "HTML contains a known technology signature.",
			},
		],
		implies: [
			"python",
		],
	},
	{
		id: "reevoo",
		name: "Reevoo",
		website: "https://www.reevoo.com",
		description: "Reevoo is a provider of UGC solutions like reviews.",
		icon: "Reevoo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reevoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reevoo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reevoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "ReevooApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reevoo:jsGlobal:2",
				kind: "jsGlobal",
				property: "reevooAccessCode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reevoo:jsGlobal:3",
				kind: "jsGlobal",
				property: "reevooLoader.tracking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reevoo:jsGlobal:4",
				kind: "jsGlobal",
				property: "reevooUrl",
				valuePattern: new RegExp("\\.reevoo\\.com\\/"),
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
		id: "remind",
		name: "Remind",
		website: "https://www.remind.com/chat",
		description: "Remind is a communication tool designed to connect educators with students and parents for timely updates and messages.",
		icon: "Remind.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "remind:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.remind\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rep-co",
		name: "Rep.co",
		website: "https://rep.co",
		description: "Rep.co is a review generation platform that helps businesses and agencies manage their online reputation through automated tools.",
		icon: "Repco.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "rep-co:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.rep\\.co"),
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
		id: "replybox",
		name: "ReplyBox",
		website: "https://getreplybox.com",
		description: "ReplyBox is a privacy-focused comment system designed to collect, store, and display user feedback while minimizing data exposure and supporting secure interaction.",
		icon: "ReplyBox.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "replybox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.getreplybox\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "replybox:jsGlobal:1",
				kind: "jsGlobal",
				property: "replybox.site",
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
		id: "repuso",
		name: "Repuso",
		website: "https://repuso.com",
		description: "Repuso is a tool that collects, displays, and manages customer reviews across multiple platforms to support brand reputation and engagement.",
		icon: "Repuso.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "repuso:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/repuso\\.com\\/"),
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
		id: "reputon",
		name: "Reputon",
		website: "https://reputon.com",
		description: "Reputon is an customer reviews Shopify app.",
		icon: "Reputon.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "reputon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reputon\\.com\\/"),
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
		requires: [
			"shopify",
		],
	},
	{
		id: "reviefy",
		name: "Reviefy",
		website: "https://www.reviefy.com",
		description: "Reviefy is a product review collection solution designed for integration with the MyCashFlow ecommerce platform.",
		icon: "Reviefy.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviefy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.reviefy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reviefy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Reviefy",
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
		requires: [
			"mycashflow",
		],
	},
	{
		id: "review-stars",
		name: "Review Stars",
		website: "https://reviewstars.com/",
		description: "Review Stars is a digital marketing boutique that assists businesses in enhancing their positive online reputation using review generation technology.",
		icon: "ReviewStars.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "review-stars:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reviewstars\\.com\\/"),
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
		id: "review-wave",
		name: "Review Wave",
		website: "https://www.reviewwave.com",
		description: "Review Wave is reputation management software that helps business owners obtain reviews on trusted websites to boost growth.",
		icon: "ReviewWave.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "review-wave:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.reviewwave\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "review-wave:jsGlobal:1",
				kind: "jsGlobal",
				property: "RWEmbedJS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "review-wave:jsGlobal:2",
				kind: "jsGlobal",
				property: "_rwReviewEmbed",
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
		id: "reviewdoku",
		name: "Reviewdoku",
		website: "https://reviewdoku.com",
		description: "Reviewdoku is a review management platform that integrates with eCommerce stores to analyze customer feedback and optimize conversion rates.",
		icon: "Reviewdoku.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewdoku:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.reviewdoku\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reviewforest",
		name: "ReviewForest",
		website: "https://reviewforest.org/",
		description: "ReviewForest is a service that facilitates the collection of product reviews, contributing to environmental efforts.",
		icon: "ReviewForest.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewforest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reviewforest\\.org\\/"),
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
		id: "reviewgrower",
		name: "Reviewgrower",
		website: "https://reviewgrower.com",
		description: "Reviewgrower is a white-label reputation management platform that provides tools and services to improve online presence, increase reviews, convert prospects, and boost Google rankings.",
		icon: "ReviewGrower.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewgrower:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.reviewgrower\\.com"),
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
		id: "reviewlead",
		name: "ReviewLead",
		website: "https://get.reviewlead.com",
		description: "ReviewLead is a platform that boosts reputation by systematically requesting reviews from past customers.",
		icon: "ReviewLead.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewlead:dom:0",
				kind: "dom",
				selector: "div[data-url*='www.reviewlead.com/']",
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
		id: "reviewpro",
		name: "ReviewPro",
		website: "https://reviewpro.shijigroup.com",
		description: "ReviewPro is a hotel guest review system designed to collect and analyze guest feedback.",
		icon: "ReviewPro.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewpro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sapi\\.reviewpro\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reviewrail",
		name: "ReviewRail",
		website: "https://reviewrail.com/",
		description: "ReviewRail is an online review system designed to collect, manage, and display customer feedback.",
		icon: "ReviewRail.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewrail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.reviewrail\\.com\\/"),
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
		id: "reviews-io",
		name: "Reviews.io",
		website: "https://www.reviews.io",
		description: "Reviews.io is a review collection tool for companies to collect merchant (company) & product reviews from genuine customers, then share these on Google.",
		icon: "Reviews.io.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviews-io:dom:0",
				kind: "dom",
				selector: "a[href*='.reviews.io/company-reviews/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "reviews-io:jsGlobal:1",
				kind: "jsGlobal",
				property: "reviewsio_hasVoted",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "reviews-io:jsGlobal:2",
				kind: "jsGlobal",
				property: "reviewsio_shareLink",
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
		id: "reviewshake",
		name: "Reviewshake",
		website: "https://www.reviewshake.com/",
		description: "Reviewshake is an all-in-one reputation management tool that generates reviews, enhances your brand, and monitors your reputation.",
		icon: "Reviewshake.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewshake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reviewshake\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reviewshake:jsGlobal:1",
				kind: "jsGlobal",
				property: "Rails.appUrl",
				valuePattern: new RegExp("app\\.reviewshake\\.com"),
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
		id: "reviewsolicitors",
		name: "ReviewSolicitors",
		website: "https://www.reviewsolicitors.co.uk",
		description: "ReviewSolicitors is a free and independent client-led review platform focusing on the UK legal market.",
		icon: "ReviewSolicitors.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "reviewsolicitors:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reviewsolicitors\\.co\\.uk\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reviewsolicitors:jsGlobal:1",
				kind: "jsGlobal",
				property: "rs.getWidgetHtml",
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
		id: "rockee",
		name: "Rockee",
		website: "https://rockee.io",
		description: "Rockee is a content feedback and performance platform that provides insights into audience perceptions of content.",
		icon: "Rockee.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "rockee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.rockee\\.io\\/"),
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
		id: "ryviu",
		name: "Ryviu",
		website: "https://www.ryviu.com/",
		description: "Ryviu is customer product reviews app for building social proof for store.",
		icon: "Ryviu.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "ryviu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.ryviu\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ryviu:jsGlobal:1",
				kind: "jsGlobal",
				property: "ryviu_global_settings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "safebuy",
		name: "SafeBuy",
		website: "https://www.safebuy.org.uk",
		description: "SafeBuy is a platform that reviews consumer feedback, verifies site links, ensures data privacy, and checks legal compliance to generate a reliable Universal Rating for customers.",
		icon: "SafeBuy.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "safebuy:dom:0",
				kind: "dom",
				selector: "a[href*='www.safebuy.org.uk'] > img[src*='.safebuy.org.uk']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "senja",
		name: "Senja",
		website: "https://senja.io",
		description: "Senja is a platform that enables the collection, management, and sharing of social proof to grow businesses.",
		icon: "Senja.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "senja:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.senja\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "senja:jsGlobal:1",
				kind: "jsGlobal",
				property: "SenjaAffiliatePoweredBy",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "senja:jsGlobal:2",
				kind: "jsGlobal",
				property: "SenjaBuilderInitialized",
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
		id: "serchen",
		name: "Serchen",
		website: "https://www.serchen.com",
		description: "Serchen is a platform that enables buyers to search, compare and evaluate a vast quantity of vendors in an ever increasingly diverse range of industries.",
		icon: "Serchen.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "serchen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.serchen\\.com\\/"),
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
		id: "shapo",
		name: "Shapo",
		website: "https://shapo.io/",
		description: "Shapo is a platform that simplifies the collection, management, and visualization of customer testimonials.",
		icon: "Shapo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "shapo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shapo\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shapo:jsGlobal:1",
				kind: "jsGlobal",
				property: "_shapoLoaded",
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
		id: "shopify-product-reviews",
		name: "Shopify Product Reviews",
		website: "https://apps.shopify.com/product-reviews",
		description: "Shopify Product reviews allows you to add a customer review feature to your products.",
		icon: "Shopify.svg",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopify-product-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("productreviews\\.shopifycdn\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shopify-product-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "SPR",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "shopperapproved",
		name: "ShopperApproved",
		website: "https://www.shopperapproved.com",
		description: "ShopperApproved is a platform that enhances eCommerce traffic, sales, and conversions by leveraging trust signals, user-generated content, and social proof.",
		icon: "ShopperApproved.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "shopperapproved:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.shopperapproved\\.com\\/"),
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
		id: "shoutout-testimonial",
		name: "Shoutout Testimonial",
		website: "https://shoutout.io",
		description: "Shoutout Testimonial is a platform that enables businesses to collect customer testimonials and display them on their websites through a simple and streamlined process.",
		icon: "ShoutoutTestimonial.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "shoutout-testimonial:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.shoutout\\.so"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
			],
		},
	},
	{
		id: "simple-machines-forum",
		name: "Simple Machines Forum",
		website: "https://www.simplemachines.org",
		description: "Simple Machines Forum is a free open-source software, used for community forums and is written in PHP.",
		icon: "Simple Machines Forum.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "simple-machines-forum:dom:0",
				kind: "dom",
				selector: "li > span > a[title='Simple Machines Forum']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "simple-machines-forum:text:1",
				kind: "text",
				pattern: new RegExp("^SMF\\s([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page text contains a known technology marker.",
			},
			{
				id: "simple-machines-forum:jsGlobal:2",
				kind: "jsGlobal",
				property: "smf_avatarResize",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "simple-machines-forum:jsGlobal:3",
				kind: "jsGlobal",
				property: "smf_default_theme_url",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "simple-machines-forum:jsGlobal:4",
				kind: "jsGlobal",
				property: "smf_theme_url",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:simplemachines:simple_machine_forum:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "sitejabber",
		name: "SiteJabber",
		website: "https://www.sitejabber.com/",
		description: "Sitejabber is the leading destination for customer ratings and reviews of businesses. Consumers find ratings and read reviews to ensure they buy from the best companies.",
		icon: "SiteJabber.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "sitejabber:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("biz\\.sitejabber\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "socialjuice",
		name: "SocialJuice",
		website: "https://socialjuice.io",
		description: "SocialJuice is a simple tool to collect video testimonials or textual testimonials from your clients.",
		icon: "SocialJuice.svg",
		categories: [
			"community-ugc",
			"widgets-misc",
		],
		rules: [
			{
				id: "socialjuice:dom:0",
				kind: "dom",
				selector: "iframe[src*='embed.socialjuice.io/']",
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
		id: "sotellus",
		name: "SoTellUs",
		website: "https://sotellus.com",
		description: "SoTellUs is a video review platform.",
		icon: "SoTellUs.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "sotellus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/sotellus\\.com\\/js\\/sotellus_widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sotellus:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^stu_src$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "stamped",
		name: "Stamped",
		website: "https://stamped.io/",
		description: "Stamped is a provider of reviews and ratings solution.",
		icon: "Stamped.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "stamped:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stamped\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stamped:jsGlobal:1",
				kind: "jsGlobal",
				property: "StampedFn",
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
		id: "surecritic",
		name: "SureCritic",
		website: "https://www.surecritic.com",
		description: "SureCritic is a platform that collects, manages, and publishes customer reviews, enabling businesses to gather feedback and display verified ratings about products or services.",
		icon: "SureCritic.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "surecritic:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.surecritic.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tagshop",
		name: "Tagshop",
		website: "https://tagshop.ai/",
		description: "Tagshop is a platform that allows ecommerce brands to create, collect, and integrate user-generated content on product pages, social ads, and emails, thereby increasing sales.",
		icon: "Tagshop.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "tagshop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.taggshop\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tagshop:dom:1",
				kind: "dom",
				selector: "div[view-url*='app.taggshop.io/']",
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
		id: "tapatalk",
		name: "Tapatalk",
		website: "https://www.tapatalk.com",
		description: "Tapatalk is a mobile-enablement platform that optimizes forums and blogs for engagement.",
		icon: "Tapatalk.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "tapatalk:dom:0",
				kind: "dom",
				selector: "link[href*='.quoord.tapatalkpro.activity']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "testfreaks",
		name: "TestFreaks",
		website: "https://www.testfreaks.com",
		description: "TestFreaks is an impartial source that provides product and seller review content for ecommerce websites.",
		icon: "TestFreaks.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "testfreaks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.testfreaks\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "testfreaks:jsGlobal:1",
				kind: "jsGlobal",
				property: "applyTestFreaks",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "testfreaks:jsGlobal:2",
				kind: "jsGlobal",
				property: "testFreaks",
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
		id: "testimonial-robot",
		name: "Testimonial Robot",
		website: "https://testimonialrobot.com",
		description: "Testimonial Robot is a testimonials and customer review platform.",
		icon: "TestimonialRobot.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "testimonial-robot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.testimonialrobot\\.com\\/"),
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
		id: "thimatic",
		name: "Thimatic",
		website: "https://thimatic-apps.com/",
		description: "Thimatic is a Shopify app for product reviews.",
		icon: "Thimatic.png",
		categories: [
			"community-ugc",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "thimatic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("thimatic-apps\\.com\\/product_review\\/.*?v=([\\d.]+)"),
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
		id: "true",
		name: "true",
		website: "https://usetrue.com",
		description: "true is a social proof platform that helps organizations increase conversions and credibility by displaying verified user interactions and trust signals on digital properties.",
		icon: "true.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "true:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.usetrue\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "true:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.usetrue\\.com"),
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
		id: "trusted-shops",
		name: "Trusted Shops",
		website: "https://www.trustedshops.co.uk",
		description: "Trusted Shops is a company that acts as a 3'rd party representing the common interests of both consumers and retailers.",
		icon: "Trusted Shops.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trusted-shops:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.trustedshops\\.com\\/"),
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
		id: "trustify",
		name: "Trustify",
		website: "https://trustify.ch",
		description: "Trustify is a platform that collects and generates customer reviews while offering marketing tools to support businesses.",
		icon: "Trustify.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.trustify\\.ch"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "trustify:jsGlobal:1",
				kind: "jsGlobal",
				property: "badgeGetTrustifyBadgeData",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustify:jsGlobal:2",
				kind: "jsGlobal",
				property: "initTrustifyBadge",
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
		id: "trustindex",
		name: "Trustindex",
		website: "https://www.trustindex.io",
		description: "Trustindex is a review management tool that helps businesses effectively manage and monitor customer reviews.",
		icon: "Trustindex.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustindex:dom:0",
				kind: "dom",
				selector: "link[href*='.trustindex.io/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "trustindex:jsGlobal:1",
				kind: "jsGlobal",
				property: "Trustindex",
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
		id: "trustio",
		name: "Trustio",
		website: "https://trustio.se",
		description: "Trustio is a platform that collects customer reviews on behalf of Swedish e-retailers to provide insights into their business performance.",
		icon: "Trustio.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.trustio\\.se"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustio:jsGlobal:1",
				kind: "jsGlobal",
				property: "createTrustioIcon",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustio:jsGlobal:2",
				kind: "jsGlobal",
				property: "trustioPoints",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "trustmary",
		name: "Trustmary",
		website: "https://trustmary.com",
		description: "Trustmary is a customer experience platform that structures and presents feedback data in a way that is accessible to both artificial intelligence systems and human audiences.",
		icon: "Trustmary.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustmary:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.trustmary\\.com"),
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
		id: "trustpilot",
		name: "Trustpilot",
		website: "https://business.trustpilot.com",
		description: "Trustpilot is a Danish consumer review website which provide embed stand-alone applications in your website to show your most recent reviews, TrustScore, and star ratings.",
		icon: "Trustpilot.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustpilot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.trustpilot\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustpilot:jsGlobal:1",
				kind: "jsGlobal",
				property: "Trustpilot",
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
		id: "trustspot",
		name: "Trustspot",
		website: "https://trustspot.io/",
		description: "TrustSpot provides a solution to capture ratings & reviews, video testimonials, photos, social experiences, and product Q&A.",
		icon: "Trustspot.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustspot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trustspot\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trustspot:jsGlobal:1",
				kind: "jsGlobal",
				property: "trustspot_key",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "trustvox",
		name: "Trustvox",
		website: "https://site.trustvox.com.br",
		description: "Trustvox collects reviews from customers who purchased ecommerce products and publishes them on product pages with Sincerity Seals.",
		icon: "Trustvox.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "trustvox:jsGlobal:0",
				kind: "jsGlobal",
				property: "TrustvoxCertificateWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustvox:jsGlobal:1",
				kind: "jsGlobal",
				property: "TrustvoxRatesWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustvox:jsGlobal:2",
				kind: "jsGlobal",
				property: "_trustvox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustvox:jsGlobal:3",
				kind: "jsGlobal",
				property: "_trustvox_colt",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustvox:jsGlobal:4",
				kind: "jsGlobal",
				property: "_trustvox_shelf_rate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trustvox:jsGlobal:5",
				kind: "jsGlobal",
				property: "trustvox_id",
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
		id: "twikoo",
		name: "Twikoo",
		website: "https://twikoo.js.org",
		description: "Twikoo is a simple, safe, free comment system.",
		icon: "Twikoo.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "twikoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/twikoo\\/dist\\/twikoo\\.all\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "twikoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "twikoo.version",
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
		id: "u-komi",
		name: "U-KOMI",
		website: "https://u-komi.com/en/",
		description: "U-KOMI is a user generated content review marketing tool.",
		icon: "U-KOMI.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "u-komi:jsGlobal:0",
				kind: "jsGlobal",
				property: "GetUkomiSliderItemInfo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "u-komi:jsGlobal:1",
				kind: "jsGlobal",
				property: "ukomiInstaLikeStep01",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "u-komi:jsGlobal:2",
				kind: "jsGlobal",
				property: "installUkomiShimsDebug",
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
		id: "ugc-creative",
		name: "UGC Creative",
		website: "https://ugc-creative.com/",
		description: "UGC Creative is a tool that utilises reviews, Instagram, and TikTok user-generated content on websites to enhance conversion rates and customer lifetime value.",
		categories: [
			"community-ugc",
			"marketing-automation",
		],
		rules: [
			{
				id: "ugc-creative:jsGlobal:0",
				kind: "jsGlobal",
				property: "UgcCreativeReview",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ugc-creative:jsGlobal:1",
				kind: "jsGlobal",
				property: "ugcReview.prototype._display_item_count",
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
		id: "ultimate-bulletin-board",
		name: "Ultimate Bulletin Board",
		website: "https://www.ubbcentral.com",
		description: "Ultimate Bulletin Board is an internet forum software designed for online communities, offering features such as user registration, thread organisation, moderation tools, search functionality, and customisable design options to facilitate discussions and community engagement.",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "ultimate-bulletin-board:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^UBB\\.threads\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "ultimate-bulletin-board:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^ubb\\.threads\\s([\\d\\.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"onetime",
			],
		},
		implies: [
			"php",
		],
	},
	{
		id: "utterances",
		name: "utterances",
		website: "https://utteranc.es/",
		description: "Utterances is a lightweight comments widget built on GitHub issues.",
		icon: "utterances.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "utterances:requestUrl:0",
				kind: "requestUrl",
				pattern: new RegExp("\\.utteranc\\.es"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "utterances:dom:1",
				kind: "dom",
				selector: "iframe[src*='utteranc.es']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "vanilla",
		name: "Vanilla",
		website: "https://vanillaforums.org",
		description: "Vanilla is a both a cloud-based (SaaS) open-source community forum software.",
		icon: "Vanilla.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vanilla:html:0",
				kind: "html",
				pattern: new RegExp("<body id=\"(?:DiscussionsPage|vanilla)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "vanilla:header:1",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("Vanilla", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "vanilla:html:2",
				kind: "html",
				pattern: new RegExp("<body id=\"(?:discussionspage|vanilla)"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "vanilla:header:3",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("vanilla", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		implies: [
			"php",
		],
	},
	{
		id: "vbulletin",
		name: "vBulletin",
		website: "https://www.vbulletin.com",
		description: "vBulletin is tool that is used to create and manage online forums or discussion boards. It is written in PHP and uses a MySQL database server.",
		icon: "vBulletin.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vbulletin:html:0",
				kind: "html",
				pattern: new RegExp("<div id=\"copyright\">Powered by vBulletin"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "vbulletin:jsGlobal:1",
				kind: "jsGlobal",
				property: "vBulletin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "vbulletin:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^bblastactivity$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "vbulletin:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^bblastvisit$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "vbulletin:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^bbsessionhash$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "vbulletin:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("vBulletin ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "vbulletin:html:6",
				kind: "html",
				pattern: new RegExp("<div id=\"copyright\">powered by vbulletin"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "vbulletin:meta:7",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("vbulletin ?([\\d.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:vbulletin:vbulletin:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "vizium",
		name: "Vizium",
		website: "https://www.vizium.com/products/patient-surveying",
		description: "Vizium is a platform that aggregates and analyzes patient reviews to support healthcare quality assessment.",
		icon: "Vizium.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vizium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("portal\\.vizium\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vocalreferences",
		name: "VocalReferences",
		website: "https://www.vocalreferences.com",
		description: "VocalReferences is a platform offering testimonial, review, and rating tools designed to help online businesses collect and display customer feedback.",
		icon: "VocalReferences.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vocalreferences:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("widgets\\.vocalreferences\\.com"),
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
		id: "vouchley",
		name: "Vouchley",
		website: "https://www.vouchley.com",
		description: "Vouchley is a review platform designed for freelancers, allowing them to receive and showcase client reviews to build credibility and attract more business.",
		icon: "Vouchley.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vouchley:dom:0",
				kind: "dom",
				selector: "iframe[src*='.reputize.org/widgets/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "vreview",
		name: "VReview",
		website: "https://vreview.tv",
		description: "VReview is an AI review marketing solution that boosts a shopping mall's purchase conversion rate by utilising customer reviews.",
		icon: "VReview.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vreview:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.vreview\\.tv\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vreview:jsGlobal:1",
				kind: "jsGlobal",
				property: "vreviewWidget",
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
		id: "vuukle",
		name: "Vuukle",
		website: "https://vuukle.com",
		description: "Vuukle is an audience engagement and commenting platform.",
		icon: "vuukle.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "vuukle:jsGlobal:0",
				kind: "jsGlobal",
				property: "VUUKLE_CONFIG",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "wally",
		name: "Wally",
		website: "https://getwally.net",
		description: "Wally is a tool that imports, manages, and displays reviews from platforms like Google and Trustpilot on a website, providing social proof to enhance credibility.",
		icon: "Wally.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "wally:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.getwally\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wally:jsGlobal:1",
				kind: "jsGlobal",
				property: "wallyIsEventListenerAdded",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"onetime",
			],
		},
	},
	{
		id: "web-wiz-forums",
		name: "Web Wiz Forums",
		website: "https://www.webwizforums.com",
		description: "Web Wiz Forums is a web-based forum software that enables developers to create and manage online discussion boards or forums for engaging user interactions and community building.",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "web-wiz-forums:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Web\\sWiz\\sForums(?:\\s([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "web-wiz-forums:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^web\\swiz\\sforums(?:\\s([\\d\\.]+))?$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
		],
		implies: [
			"microsoft-asp-net",
		],
	},
	{
		id: "winlocal",
		name: "WinLocal",
		website: "https://winlocal.ru",
		description: "WinLocal is a monitoring and feedback collection service that helps businesses track reviews and improve visibility on maps and search results.",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "winlocal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.winlocal\\.ru"),
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
		id: "wiremo",
		name: "Wiremo",
		website: "https://wiremo.co",
		description: "Wiremo is a customer review platform designed for eCommerce businesses to collect, manage, and display user-generated feedback.",
		icon: "Wiremo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "wiremo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wapi\\.wiremo\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wiremo:jsGlobal:1",
				kind: "jsGlobal",
				property: "pluginWiremoIntegration",
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
		id: "word-of-mouth",
		name: "Word of Mouth",
		website: "https://www.wordofmouth.com.au",
		description: "Word of Mouth is a feedback platform that allows users to compare reviews and ratings for various services and businesses.",
		icon: "WOMO.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "word-of-mouth:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.womo\\.com\\.au\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "xenforo",
		name: "XenForo",
		website: "https://xenforo.com",
		description: "XenForo is a PHP-based forum hosting program for communities that is designed to be deployed on a remote web server.",
		icon: "XenForo.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "xenforo:html:0",
				kind: "html",
				pattern: new RegExp("(?:jQuery\\.extend\\(true, XenForo|<a[^>]+>Forum software by XenForo™|<!--XF:branding|<html[^>]+id=\"XenForo\")"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xenforo:html:1",
				kind: "html",
				pattern: new RegExp("<html id=\"XF\" "),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xenforo:jsGlobal:2",
				kind: "jsGlobal",
				property: "XF.GuestUsername",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xenforo:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^xf_csrf$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "xenforo:cookie:4",
				kind: "cookie",
				keyPattern: new RegExp("^xf_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "xenforo:dom:5",
				kind: "dom",
				selector: "html[id*='XenForo'], html[id*='XF']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "xenforo:html:6",
				kind: "html",
				pattern: new RegExp("(?:jquery\\.extend\\(true, xenforo|<a[^>]+>forum software by xenforo™|<!--xf:branding|<html[^>]+id=\"xenforo\")"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xenforo:html:7",
				kind: "html",
				pattern: new RegExp("<html id=\"xf\" "),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:xenforo:xenforo:*:*:*:*:*:*:*:*",
		},
		implies: [
			"mysql",
			"php",
		],
	},
	{
		id: "xmb",
		name: "XMB",
		website: "https://www.xmbforum.com",
		icon: "XMB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "xmb:html:0",
				kind: "html",
				pattern: new RegExp("<!-- Powered by XMB"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "xmb:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^xmblva$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "xmb:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^xmblvb$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "xmb:html:3",
				kind: "html",
				pattern: new RegExp("<!-- powered by xmb"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "yabb",
		name: "YaBB",
		website: "https://www.yabbforum.com",
		icon: "YaBB.png",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "yabb:html:0",
				kind: "html",
				pattern: new RegExp("Powered by <a href=\"[^>]+yabbforum"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "yabb:html:1",
				kind: "html",
				pattern: new RegExp("powered by <a href=\"[^>]+yabbforum"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:yabb:yabb:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "yotpo-reviews",
		name: "Yotpo Reviews",
		website: "https://www.yotpo.com/platform/reviews/",
		description: "Yotpo is a user-generated content marketing platform.",
		icon: "Yotpo.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "yotpo-reviews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.yotpo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yotpo-reviews:jsGlobal:1",
				kind: "jsGlobal",
				property: "yotpo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yotpo-reviews:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("(?!cdn-loyalty)\\.yotpo\\.com\\/"),
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
		id: "zoorate",
		name: "Zoorate",
		website: "https://zoorate.com",
		description: "Zoorate is a user-generated content sharing service tailored for retailers, facilitating the exchange of customer experiences and feedback.",
		icon: "Zoorate.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "zoorate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.zoorate\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zoorate:jsGlobal:1",
				kind: "jsGlobal",
				property: "zoorate_params",
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
		id: "zyratalk",
		name: "Zyratalk",
		website: "https://www.zyratalk.com",
		description: "Zyratalk is a tool for handling customer conversations and managing reviews to support organized feedback tracking.",
		icon: "Zyratalk.svg",
		categories: [
			"community-ugc",
		],
		rules: [
			{
				id: "zyratalk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zyratalk\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
] as const satisfies readonly TechnologyDefinition[];
