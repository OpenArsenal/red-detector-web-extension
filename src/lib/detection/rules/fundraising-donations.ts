import type { TechnologyDefinition } from '../types';

export const fundraisingDonationsTechnologyDefinitions = [
	{
		id: "actblue",
		name: "ActBlue",
		website: "https://secure.actblue.com",
		description: "ActBlue is an online fundraising platform that facilitates secure donations to Democratic candidates and progressive causes, streamlining the process of processing and distributing campaign contributions.",
		icon: "ActBlue.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "actblue:dom:0",
				kind: "dom",
				selector: "a[href*='//secure.actblue.com/donate/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "actblue:jsGlobal:1",
				kind: "jsGlobal",
				property: "actblue.__configuration",
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
		id: "alumniq",
		name: "AlumnIQ",
		website: "https://www.alumniq.com/platform/",
		description: "AlumnIQ is a set of services to manage events, giving, email, volunteers, class agents, and more, all designed to work with your database of record.",
		icon: "AlumnIQ.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "alumniq:dom:0",
				kind: "dom",
				selector: "a[href*='.alumniq.com/giving/to/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "alumniq:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^alumniq\\-online\\-giving$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "arreva",
		name: "Arreva",
		website: "https://www.arreva.com",
		description: "Arreva is a fundraising software that provides the ability to mobilise constituents using the donor tracking system.",
		icon: "Arreva.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "arreva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/Arreva-OnlineDonations-Portlet\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "arreva:dom:1",
				kind: "dom",
				selector: "a[href*='=ArrevaOnlineDonationsPortlet_WA']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "arreva:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/arreva-onlinedonations-portlet\\/"),
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
		id: "backerkit",
		name: "BackerKit",
		website: "https://www.backerkit.com",
		description: "BackerKit is a crowdfunding backer management and post-campaign commerce platform.",
		icon: "BackerKit.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "backerkit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.backerkit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "backerkit:jsGlobal:1",
				kind: "jsGlobal",
				property: "BackerKitPreorders",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "backerkit:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_backerkit_sessionv2$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blackbaud-crm",
		name: "Blackbaud CRM",
		website: "https://www.blackbaud.com",
		description: "Blackbaud CRM gathers fundraising, online applications, actionable prospect research and analytics, and multichannel direct marketing into one platform.",
		icon: "Blackbaud.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "blackbaud-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\/convio\\/modules\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blackbaud-crm:url:1",
				kind: "url",
				pattern: new RegExp("\\/site\\/Donation2?.*df_id="),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "blackbaud-crm:jsGlobal:2",
				kind: "jsGlobal",
				property: "BLACKBAUD",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blackbaud-crm:jsGlobal:3",
				kind: "jsGlobal",
				property: "don_premium_map",
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
		id: "brynk",
		name: "BRYNK",
		website: "https://www.brynk.com",
		description: "BRYNK is an all-in-one platform for managing memberships, donors, events, and payments or fundraising activities.",
		icon: "BRYNK.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "brynk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.brynk\\.org"),
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
		id: "classy",
		name: "Classy",
		website: "https://www.classy.org/",
		description: "Classy is an online fundraising platform.",
		icon: "classy.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "classy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("classy\\.org"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "classy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Classy.clientId",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "click-and-pledge",
		name: "Click & Pledge",
		website: "https://clickandpledge.com",
		description: "Click & Pledge is an online fundraising and payment platform for nonprofits.",
		icon: "Click & Pledge.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "click-and-pledge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clickandpledge\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "click-and-pledge:dom:1",
				kind: "dom",
				selector: "a[href*='.clickandpledge.com/']",
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
		id: "community-funded",
		name: "Community Funded",
		website: "https://www.communityfunded.com",
		description: "Community Funded is a digital fundraising and engagement platform.",
		icon: "Community Funded.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "community-funded:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/give\\.communityfunded\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "community-funded:dom:1",
				kind: "dom",
				selector: "a[href*='//give.communityfunded.com/']",
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
		id: "customdonations",
		name: "CustomDonations",
		website: "https://customdonations.com",
		description: "CustomDonations is a cloud-based service providing nonprofits with tools to create and manage online donation forms.",
		icon: "CustomDonations.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "customdonations:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.customdonations\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "customdonations:jsGlobal:1",
				kind: "jsGlobal",
				property: "CustomDonations.BuildForm",
				description: "Page-owned global matches a known technology marker.",
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
		id: "donorbox",
		name: "Donorbox",
		website: "https://donorbox.org",
		description: "Donorbox is a US-based technology company. It offers an online fundraising software that allows individuals and nonprofit organisations to receive donations over the Internet.",
		icon: "Donorbox.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "donorbox:dom:0",
				kind: "dom",
				selector: "a[href*='//donorbox.org/'], iframe[src*='//donorbox.org/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "donorbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "DONORBOX",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "donorbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "DonorBox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "donorbox:jsGlobal:3",
				kind: "jsGlobal",
				property: "donorbox_check_donation_period",
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
		id: "donorperfect",
		name: "DonorPerfect",
		website: "https://www.donorperfect.com",
		description: "DonorPerfect is a fundraising management software.",
		icon: "DonorPerfect.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "donorperfect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.donorperfect\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "donorperfect:dom:1",
				kind: "dom",
				selector: "a[href*='.donorperfect.']",
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
		id: "everyaction",
		name: "EveryAction",
		website: "https://www.everyaction.com",
		description: "EveryAction provides fundraising software, donor management software, and CRM software to nonprofit organisations.",
		icon: "EveryAction.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "everyaction:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.everyaction\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "everyaction:dom:1",
				kind: "dom",
				selector: "a[href*='secure.everyaction.com/'], div[data-form-url*='secure.everyaction.com/']",
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
		id: "frontstream",
		name: "Frontstream",
		website: "https://www.frontstream.com",
		description: "FrontStream is a fundraising platform, formerly FirstGiving, that supports walks, runs, rides, DIY, and virtual activity challenge campaigns.",
		icon: "FrontStream.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "frontstream:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.firstgiving\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fundraise-up",
		name: "Fundraise Up",
		website: "https://fundraiseup.com",
		description: "Fundraise Up is a platform for online donations.",
		icon: "Fundraise Up.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "fundraise-up:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fundraiseup\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fundraise-up:jsGlobal:1",
				kind: "jsGlobal",
				property: "FundraiseUp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "fundrazr",
		name: "FundRazr",
		website: "https://fundrazr.com",
		description: "FundRazr is an online fundraising and crowdfunding platform.",
		icon: "FundRazr.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "fundrazr:dom:0",
				kind: "dom",
				selector: "link[href*='//static.fundrazr.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fundrazr:jsGlobal:1",
				kind: "jsGlobal",
				property: "FundRazr",
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
		id: "funraise",
		name: "Funraise",
		website: "https://funraise.org",
		description: "Funraise is a nonprofit fundraising platform that enables organisations to build fundraising websites as well as manage donations and campaigns.",
		icon: "Funraise.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "funraise:dom:0",
				kind: "dom",
				selector: "a[href*='.funraise.org/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "funraise:jsGlobal:1",
				kind: "jsGlobal",
				property: "FR.IMAGE_BASE_URL",
				valuePattern: new RegExp("\\.funraise\\.io"),
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
		id: "givecampus",
		name: "GiveCampus",
		website: "https://go.givecampus.com",
		description: "GiveCampus is a fundraising platform for nonprofit educational institutions.",
		icon: "GiveCampus.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "givecampus:dom:0",
				kind: "dom",
				selector: "a[href*='.givecampus.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "givecampus:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^GiveCampus$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "givecampus:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^givecampus$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "givesmart",
		name: "GiveSmart",
		website: "https://www.givesmart.com",
		description: "GiveSmart is an event fund gathering technology that offers customisable event size, mobile bidding, text-to-donate, enhanced dashboard and reporting, seating arrangement, and more.",
		icon: "GiveSmart.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "givesmart:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.givesmart\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "givesmart:dom:1",
				kind: "dom",
				selector: "a[href*='.givesmart.com/']",
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
		id: "givewp",
		name: "GiveWP",
		website: "https://givewp.com",
		description: "GiveWP is a donation plugin for WordPress.",
		icon: "GiveWP.svg",
		categories: [
			"fundraising-donations",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "givewp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/give\\/.+give\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "givewp:jsGlobal:1",
				kind: "jsGlobal",
				property: "Give.donor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "givewp:jsGlobal:2",
				kind: "jsGlobal",
				property: "giveApiSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"onetime",
			],
			cpe: "cpe:2.3:a:givewp:givewp:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "givingfuel",
		name: "GivingFuel",
		website: "https://www.givingfuel.com",
		description: "GivingFuel is a fundraising software solution.",
		icon: "GivingFuel.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "givingfuel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.givingfuel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "givingfuel:dom:1",
				kind: "dom",
				selector: "a[href*='.givingfuel.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
			],
		},
	},
	{
		id: "golden-volunteer",
		name: "Golden Volunteer",
		website: "https://www.goldenvolunteer.com",
		description: "Golden Volunteer is a volunteer management platform that uses automation and fundraising AI to streamline tasks, ensure compliance, and support volunteer-to-donor conversion.",
		icon: "GoldenVolunteer.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "golden-volunteer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.goldenvolunteer\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "golden-volunteer:dom:1",
				kind: "dom",
				selector: "link[href*='.goldenvolunteer.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "golden-volunteer:header:2",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.goldenvolunteer\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "golden-volunteer:header:3",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.goldenvolunteer\\.com", "i"),
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
		id: "harness",
		name: "Harness",
		website: "https://www.goharness.com/nonprofits",
		description: "Harness is a fundraising solution designed to streamline the process of raising funds for various causes and initiatives.",
		icon: "Harness.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "harness:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.harnessapp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "harness:jsGlobal:1",
				kind: "jsGlobal",
				property: "HarnessWidget",
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
		id: "iraiser",
		name: "iRaiser",
		website: "https://www.iraiser.com",
		description: "iRaiser is a platform that provides charities with tailored solutions to optimize and manage fundraising activities.",
		icon: "iRaiser.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "iraiser:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.iraiser\\.eu"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "iraiser:jsGlobal:1",
				kind: "jsGlobal",
				property: "iRaiser.PaymentStartDate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "iraiser:jsGlobal:2",
				kind: "jsGlobal",
				property: "iraiser_counter",
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
		id: "kindful",
		name: "Kindful",
		website: "https://kindful.com",
		description: "Kindful is a cloud-based donor management and fundraising software and database designed for nonprofit organisations.",
		icon: "Kindful.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "kindful:dom:0",
				kind: "dom",
				selector: "a[href*='.kindful.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "kindful:jsGlobal:1",
				kind: "jsGlobal",
				property: "Bloomerang.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kindful:jsGlobal:2",
				kind: "jsGlobal",
				property: "KindfulPaymentsConnect",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kindful:jsGlobal:3",
				kind: "jsGlobal",
				property: "bloomerangLoadStarted",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kindful:jsGlobal:4",
				kind: "jsGlobal",
				property: "kindful_gtag",
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
		id: "kiva",
		name: "Kiva",
		website: "https://www.kiva.org",
		description: "Kiva is a charity organization that connects individuals through micro-lending to help alleviate poverty.",
		icon: "Kiva.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "kiva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.kiva\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "minelabz-donations",
		name: "MineLabz donations",
		website: "https://minelabz.com",
		description: "Minelabz is a donations platform built on WordPress and WooCommerce, enabling cracked Minecraft servers to accept donations through their stores.",
		icon: "MineLabz.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "minelabz-donations:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("minelabz\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "network-for-good",
		name: "Network for Good",
		website: "https://www.networkforgood.com",
		description: "Network for Good is an American certified B Corporation software company that offers fundraising software and coaching for charities and non-profit organisations.",
		icon: "Network for Good.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "network-for-good:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.networkforgood\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "network-for-good:dom:1",
				kind: "dom",
				selector: "a[href*='.networkforgood.com/']",
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
		id: "onecause",
		name: "OneCause",
		website: "https://www.onecause.com",
		description: "OneCause is a fundraising platform designed for nonprofits to manage all types of fundraising campaigns.",
		icon: "OneCause.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "onecause:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.onecause\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onecause:dom:1",
				kind: "dom",
				selector: "a[href*='.onecause.com/'][target='_blank']",
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
		id: "optimy",
		name: "Optimy",
		website: "https://www.optimy.com",
		description: "Optimy is an all-in-one CSR platform that enhances social and business impact by streamlining social programs.",
		icon: "Optimy.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "optimy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/optimy\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "optimy:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("optimyapp-css\\.s3", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "optimy:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("optimyapp-css\\.s3", "i"),
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
		id: "pushpay",
		name: "Pushpay",
		website: "https://pushpay.com",
		description: "Pushpay is a digital giving and engagement platform designed to help churches manage processes related to donations and fundraising.",
		icon: "Pushpay.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "pushpay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/pushpay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pushpay:dom:1",
				kind: "dom",
				selector: "a[href*='//ppay.co/'][target='_blank']",
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
		id: "qgiv",
		name: "Qgiv",
		website: "https://www.qgiv.com",
		description: "Qgiv is an online fundraising platform helping nonprofit, faith-based, healthcare, and education organisations raise funds.",
		icon: "Qgiv.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "qgiv:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/secure\\.qgiv\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qgiv:dom:1",
				kind: "dom",
				selector: "a[href*='//secure.qgiv.com/']",
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
		id: "raisedonors",
		name: "RaiseDonors",
		website: "https://explore.raisedonors.com",
		description: "RaiseDonors is for anyone raising money and cultivating donor relationships online.",
		icon: "RaiseDonors.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "raisedonors:dom:0",
				kind: "dom",
				selector: "a[href*='//raisedonors.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "raisedonors:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^RaiseDonors$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "raisedonors:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^raisedonors$", "i"),
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
		id: "raisely",
		name: "Raisely",
		website: "https://raisely.com",
		description: "Raisely is a cloud-based fundraising platform that helps non-profits and charities drive fundraising campaigns and collect donations.",
		icon: "Raisely.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "raisely:jsGlobal:0",
				kind: "jsGlobal",
				property: "RaiselyComponents",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raisely:jsGlobal:1",
				kind: "jsGlobal",
				property: "__raiselyDebug",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "raisely:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpRaisely",
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
		id: "resupply",
		name: "Resupply",
		website: "https://resupplyapp.com",
		description: "Resupply is a service that offers 24-hour furniture donation pickups, supporting local nonprofits by facilitating the collection and redistribution of donated items.",
		icon: "Resupply.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "resupply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.resupplyapp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "revv",
		name: "Revv",
		website: "https://revv.com",
		description: "Revv is a lead optimisation and donation platform.",
		icon: "Revv.png",
		categories: [
			"fundraising-donations",
		],
		rules: [],
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
		id: "thrinacia",
		name: "Thrinacia",
		website: "https://www.thrinacia.com",
		description: "Thrinacia is a scalable Enterprise SaaS crowdfunding engine that enables the operation of custom white-labeled crowdfunding websites.",
		icon: "Thrinacia.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "thrinacia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.thrinacia\\.com\\/"),
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
		id: "twingle",
		name: "Twingle",
		website: "https://www.twingle.de",
		description: "Twingle is a fundraising platform that enables users to create campaigns and collect donations for various causes.",
		icon: "Twingle.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "twingle:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("spenden\\.twingle\\.de"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"payg",
			],
		},
	},
	{
		id: "vanco-payment-solutions",
		name: "Vanco Payment Solutions",
		website: "https://www.vancopayments.com",
		description: "Vanco Payment Solutions provides credit card processing to nonprofits.",
		icon: "Vanco.svg",
		categories: [
			"fundraising-donations",
			"commerce-operations",
		],
		rules: [
			{
				id: "vanco-payment-solutions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.eservicepayments\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vanco-payment-solutions:dom:1",
				kind: "dom",
				selector: "a[href*='.eservicepayments.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "virtuous",
		name: "Virtuous",
		website: "https://virtuous.org",
		description: "Virtuous is the responsive fundraising software platform.",
		icon: "Virtuous.svg",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "virtuous:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.virtuoussoftware\\.com\\/"),
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
		id: "yapla",
		name: "Yapla",
		website: "https://www.yapla.com",
		description: "Yapla is a web-based software platform that provides event management and fundraising solutions for non-profit organisations, associations, and event planners.",
		icon: "Yapla.png",
		categories: [
			"fundraising-donations",
		],
		rules: [
			{
				id: "yapla:dom:0",
				kind: "dom",
				selector: "a[href*='\\.yapla\\.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "yapla:jsGlobal:1",
				kind: "jsGlobal",
				property: "yaplaConsent.cookieName",
				valuePattern: new RegExp("yapla-consent"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yapla:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Yapla\\sv([\\d\\.]+)", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "yapla:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^yapla\\sv([\\d\\.]+)", "i"),
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
] as const satisfies readonly TechnologyDefinition[];
