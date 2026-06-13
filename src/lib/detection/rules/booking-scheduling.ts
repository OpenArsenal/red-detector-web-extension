import type { TechnologyDefinition } from '../types';

export const bookingSchedulingTechnologyDefinitions = [
	{
		id: "a2z-events",
		name: "A2Z Events",
		website: "https://mya2zevents.com",
		description: "A2Z Events is an event management solution designed by and for event professionals.",
		icon: "A2ZEvents.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "a2z-events:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.a2zinc\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "a2z-events:jsGlobal:1",
				kind: "jsGlobal",
				property: "a2z.Widget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "a2z-events:jsGlobal:2",
				kind: "jsGlobal",
				property: "a2zAnalytics",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "accelevents",
		name: "Accelevents",
		website: "https://www.accelevents.com",
		description: "Accelevents is an enterprise-grade event management software platform that supports planning, hosting, and managing virtual, hybrid, and in-person events.",
		icon: "Accelevents.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "accelevents:dom:0",
				kind: "dom",
				selector: "link[href*='analytics.accelevents.com']",
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
		id: "acceptd",
		name: "Acceptd",
		website: "https://getacceptd.com",
		description: "Acceptd is a premier application and audition management platform designed to streamline the submission, review, and selection process for organizations and educational institutions.",
		icon: "Acceptd.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "acceptd:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.getacceptd\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "acceptd:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Acceptd Application$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "acceptd:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^acceptd application$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "acuity-scheduling",
		name: "Acuity Scheduling",
		website: "https://acuityscheduling.com",
		description: "Acuity Scheduling is a cloud-based appointment scheduling software solution.",
		icon: "Acuity Scheduling.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "acuity-scheduling:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.acuityscheduling\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acuity-scheduling:dom:1",
				kind: "dom",
				selector: "a[href*='app.acuityscheduling.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "acuity-scheduling:jsGlobal:2",
				kind: "jsGlobal",
				property: "ACUITY_MODAL_INIT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acuity-scheduling:dom:3",
				kind: "dom",
				selector: "iframe[src*='app.acuityscheduling.com/']",
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
		id: "adalte",
		name: "Adalte",
		website: "https://www.adalte.com",
		description: "Adalte is an online solution designed for travel agencies, tour operators, and DMCs, offering travel management capabilities.",
		icon: "Adalte.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "adalte:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("www\\.adalte\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "addevent",
		name: "AddEvent",
		website: "https://www.addevent.com",
		description: "AddEvent is used to Add to Calendar and event tools for websites and newsletters.",
		icon: "addevent.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "addevent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/addevent\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "addevent:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("(?:\\/\\/|\\.)addevent\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "addevent:jsGlobal:2",
				kind: "jsGlobal",
				property: "addeventatc",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "agendize",
		name: "Agendize",
		website: "https://www.agendize.com",
		description: "Agendize is a next-generation, all-in-one platform that streamlines scheduling, secures data, and improves the performance and efficiency of appointment management.",
		icon: "Agendize.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "agendize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.agendize\\.com\\/"),
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
		id: "agoda",
		name: "Agoda",
		website: "https://www.agoda.com",
		description: "Agoda is an online travel platform offering its services globally via its app and website.",
		icon: "Agoda.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "agoda:dom:0",
				kind: "dom",
				selector: "link[href*='banner.agoda.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "agoda:jsGlobal:1",
				kind: "jsGlobal",
				property: "agoda",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "agoda:jsGlobal:2",
				kind: "jsGlobal",
				property: "agoda_ad_client",
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
		id: "aimharder",
		name: "Aimharder",
		website: "https://aimharder.com",
		description: "Aimharder is a software platform for managing sports facility operations, including scheduling, memberships, bookings, payments, and administrative tasks.",
		icon: "Aimharder.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "aimharder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/aimharder\\.com\\/js\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aimharder:dom:1",
				kind: "dom",
				selector: "iframe[src*='.aimharder.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aimy",
		name: "Aimy",
		website: "https://meetaimy.com",
		description: "Aimy is a salon management platform that provides scheduling tools, a virtual assistant, and calendar maintenance features to streamline salon operations.",
		icon: "Aimy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "aimy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.meetaimy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aimy:jsGlobal:1",
				kind: "jsGlobal",
				property: "MeetAimyMeta",
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
		id: "airdata",
		name: "Airdata",
		website: "https://airdata.vn",
		description: "Airdata is a ticket booking system for agents in Vietnam, offering unique features to maximize benefits for businesses in managing and selling flight tickets.",
		icon: "Airdata.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "airdata:jsGlobal:0",
				kind: "jsGlobal",
				property: "BOOKING_BASE_API_URL",
				valuePattern: new RegExp("api\\.airdata\\.vn"),
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
		id: "allbookable",
		name: "Allbookable",
		website: "https://allbookable.com",
		description: "Allbookable is an online booking solution that enables users to book services through a digital platform.",
		icon: "Allbookable.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "allbookable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.allbookable\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "appointedd",
		name: "Appointedd",
		website: "https://www.appointedd.com",
		description: "Appointedd is an online booking technology.",
		icon: "Appointedd.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "appointedd:jsGlobal:0",
				kind: "jsGlobal",
				property: "Appointedd",
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
		id: "appointo",
		name: "Appointo",
		website: "https://www.sidepanda.com/appointo",
		description: "Appointo is a Shopify based booking engine from Sidepanda.",
		icon: "Appointo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "appointo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/appointo-14\\/assets\\/appointo_bundle.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "appointo:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.appointo\\.me"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "appointo:jsGlobal:2",
				kind: "jsGlobal",
				property: "onRefreshAppointoWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		requires: [
			"shopify",
		],
	},
	{
		id: "appointy",
		name: "Appointy",
		website: "https://www.appointy.com/",
		description: "Appointy is a cloud-based scheduling solution that helps professionals and businesses to manage their appointment scheduling activities and routines.",
		icon: "Appointy.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "appointy:dom:0",
				kind: "dom",
				selector: "a[href*='.appointy.com/'][target='_blank'], iframe[src*='.appointy.com/']",
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
		id: "arlo",
		name: "Arlo",
		website: "https://www.arlo.co",
		description: "Arlo is an event management tool that helps organize, schedule, and track events.",
		icon: "Arlo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "arlo:jsGlobal:0",
				kind: "jsGlobal",
				property: "ArloST.apiClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arlo:jsGlobal:1",
				kind: "jsGlobal",
				property: "ArloStarterTemplate",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arlo:header:2",
				kind: "header",
				key: "Content-Security-Policy-Report-Only",
				valuePattern: new RegExp("\\.arlocdn\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "arlo:header:3",
				kind: "header",
				key: "content-security-policy-report-only",
				valuePattern: new RegExp("\\.arlocdn\\.net", "i"),
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
		id: "asksuite",
		name: "Asksuite",
		website: "https://asksuite.com",
		description: "Asksuite is a platform that enhances direct bookings and revenue for hotels and resorts by improving service experiences and boosting reservation sales productivity.",
		icon: "Asksuite.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "asksuite:jsGlobal:0",
				kind: "jsGlobal",
				property: "AsksuiteUtil.calcTime",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "asksuite:jsGlobal:1",
				kind: "jsGlobal",
				property: "asksuiteLocalStorage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "asksuite:jsGlobal:2",
				kind: "jsGlobal",
				property: "asksuiteLog",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "asksuite:jsGlobal:3",
				kind: "jsGlobal",
				property: "asksuiteSessionStorage",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aspio",
		name: "Aspio",
		website: "https://aspio.io",
		description: "Aspio is a platform that streamlines bookings and manages sales.",
		icon: "Aspio.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "aspio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/aspio-io-customer\\/public\\/js\\/aspio-io-customer-public\\.js"),
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
		requires: [
			"wordpress",
		],
	},
	{
		id: "autoops",
		name: "AutoOps",
		website: "https://www.autoops.com/",
		description: "AutoOps is an online scheduling tool that integrates with shop management softwares for auto shops.",
		icon: "AutoOps.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "autoops:jsGlobal:0",
				kind: "jsGlobal",
				property: "AutoOps.addSourceTracking",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bedbooking",
		name: "BedBooking",
		website: "https://bed-booking.com",
		description: "BedBooking is an all-in-one software platform designed to manage short-term and vacation rental operations, including reservations.",
		icon: "BedBooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bedbooking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panel\\.bed-booking\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bedbooking:jsGlobal:1",
				kind: "jsGlobal",
				property: "bedbookingAsyncInit",
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
		id: "beyonk",
		name: "Beyonk",
		website: "https://beyonk.com",
		description: "Beyonk is an online ticketing software that provides EPOS and booking management solutions for businesses.",
		icon: "Beyonk.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "beyonk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.beyonk\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "bileto",
		name: "Bileto",
		website: "https://www.bileto.com",
		description: "Bileto is an all-in-one platform for ticket sale and inspection.",
		icon: "Bileto.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bileto:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bileto\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "blink-ai",
		name: "BLiNK AI",
		website: "https://blinkai.com",
		description: "BLiNK AI is a platform that assists businesses in automating service scheduling and marketing operations for dealerships.",
		icon: "BLiNKAI.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "blink-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.blinkai\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blink-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "BlinkAI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blink-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "blinkai.autoOpen",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bobonus",
		name: "Bobonus",
		website: "https://bobonus.com",
		description: "Bobonus is an ecommerce platform for restaurants.",
		icon: "Bobonus.svg",
		categories: [
			"booking-scheduling",
			"platform-cms-builder",
		],
		rules: [
			{
				id: "bobonus:header:0",
				kind: "header",
				key: "X-Powered-By",
				valuePattern: new RegExp("https\\:\\/\\/bobonus\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "bobonus:header:1",
				kind: "header",
				key: "x-powered-by",
				valuePattern: new RegExp("https\\:\\/\\/bobonus\\.com", "i"),
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
		id: "bokabord",
		name: "BokaBord",
		website: "https://www.bokabord.se",
		description: "BokaBord is a platform that enables users to discover restaurants and book tables across Sweden.",
		icon: "BokaBord.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bokabord:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.bokabord\\.se"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "book-n-pay",
		name: "Book N Pay",
		website: "https://booknpay.net",
		description: "Book N Pay is a platform for booking and paying for various services and activities.",
		icon: "BookNPay.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "book-n-pay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.booknpay\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bookafy",
		name: "Bookafy",
		website: "https://bookafy.com",
		description: "Bookafy is a service that offers appointment scheduling and booking solutions for businesses and professionals.",
		icon: "Bookafy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookafy:jsGlobal:0",
				kind: "jsGlobal",
				property: "bookafyPopup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookafy:jsGlobal:1",
				kind: "jsGlobal",
				property: "openBookafyPopup",
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
		id: "bookatable",
		name: "Bookatable",
		website: "https://www.bookatable.co.uk",
		description: "Bookatable is a restaurant table booking widget.",
		icon: "Bookatable.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookatable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bda\\.bookatable\\.com\\/deploy\\/lbui\\.direct\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "bookbanket",
		name: "BookBanket",
		website: "https://bookbanket.ru",
		description: "BookBanket is a banquet management service designed to coordinate event planning and organize venue arrangements.",
		icon: "BookBanket.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookbanket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.bbanket\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bookbanket:jsGlobal:1",
				kind: "jsGlobal",
				property: "bbanketMetrikaIdInc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookbanket:jsGlobal:2",
				kind: "jsGlobal",
				property: "bbanketWidget.addStyle",
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
		id: "bookdinners",
		name: "BookDinners",
		website: "https://www.bookdinners.nl",
		description: "BookDinners is a restaurant table booking widget.",
		icon: "BookDinners.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookdinners:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bookdinners\\.nl\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "booked",
		name: "Booked",
		website: "https://www.bookedscheduler.com/",
		description: "Booked is a scheduling solution designed for organizational use.",
		icon: "Booked.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booked:dom:0",
				kind: "dom",
				selector: "link[href*='css/booked.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:twinkletoessoftware:booked:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "bookeo",
		name: "Bookeo",
		website: "https://www.bookeo.com",
		description: "Bookeo is a cloud-based booking and reservation solution that caters to tour operators, travel agencies, schools, therapists, photographers and event organizers.",
		icon: "Bookeo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookeo:dom:0",
				kind: "dom",
				selector: "a[href*='//bookeo.com/'], iframe[src*='//bookeo.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "bookeo:jsGlobal:1",
				kind: "jsGlobal",
				property: "bookeo_start",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookeo:jsGlobal:2",
				kind: "jsGlobal",
				property: "bookeo_startMobileLabel",
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
		id: "booker",
		name: "Booker",
		website: "https://www.mindbodyonline.com/business/booker",
		description: "Booker is a spa and salon management platform that supports scheduling, client management, staff coordination, and payment processing.",
		icon: "Booker.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booker:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.booker\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bookero",
		name: "Bookero",
		website: "https://www.bookero.org",
		description: "Bookero is online booking system for you website or Facebook page.",
		icon: "Bookero.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.bookero\\.pl"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bookero:url:1",
				kind: "url",
				pattern: new RegExp("\\.bookero\\.(?:org|pl)"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "bookero:jsGlobal:2",
				kind: "jsGlobal",
				property: "bookero_config",
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
		id: "booking-experts",
		name: "Booking Experts",
		website: "https://www.bookingexperts.com",
		description: "Booking Experts is an all-in-one reservation management system that integrates booking, availability, and pricing into a single platform.",
		icon: "BookingExperts.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booking-experts:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn-cms\\.bookingexperts\\.com"),
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
		id: "booking-factory",
		name: "Booking Factory",
		website: "https://bookingfactory.io",
		description: "Booking Factory is an all-in-one hotel management system that facilitates management of hotel operations.",
		icon: "BookingFactory.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booking-factory:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.thebookingbutton\\.com"),
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
		id: "bookitit",
		name: "Bookitit",
		website: "https://www.bookitit.com",
		description: "Bookitit is an online scheduling system.",
		icon: "Bookitit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookitit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.bookitit\\.com\\/"),
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
		id: "booklux",
		name: "Booklux",
		website: "https://www.booklux.com",
		description: "Booklux is an online booking system that enables users to schedule, manage, and organize reservations through a centralized digital platform.",
		icon: "Booklux.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booklux:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.booklux\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "booklux:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.booklux\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"poa",
			],
		},
	},
	{
		id: "bookly",
		name: "Bookly",
		website: "https://www.booking-wp-plugin.com",
		description: "Bookly is a WordPress scheduling plugin that allows you to accept online reservations on your website and automate your booking system.",
		icon: "bookly.png",
		categories: [
			"booking-scheduling",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "bookly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/bookly-responsive-appointment-booking-tool\\/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bookly:jsGlobal:1",
				kind: "jsGlobal",
				property: "BooklyL10n.daysShort",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookly:jsGlobal:2",
				kind: "jsGlobal",
				property: "bookly",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookly:jsGlobal:3",
				kind: "jsGlobal",
				property: "booklyCustomerProfile",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"onetime",
			],
			cpe: "cpe:2.3:a:booking-wp-plugin:bookly:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "bookteq",
		name: "Bookteq",
		website: "https://www.bookteq.com",
		description: "Bookteq is a sports facility booking software that enables schools, clubs, and councils to manage reservations online.",
		icon: "Bookteq.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookteq:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("widget\\.bookteq\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "bookteq:dom:1",
				kind: "dom",
				selector: "link[href*='.bookteq.com']",
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
		id: "bookvisit",
		name: "BookVisit",
		website: "https://bookvisit.com",
		description: "BookVisit is an online booking and channel management platform used by hotels and tourism organizations, primarily in Scandinavia.",
		icon: "BookVisit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bookvisit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bookvisit\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bookvisit:jsGlobal:1",
				kind: "jsGlobal",
				property: "initBookVisitWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bookvisit:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("online\\.bookvisit\\.com\\/"),
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
		id: "booxi",
		name: "Booxi",
		website: "https://www.booxi.com",
		description: "Booxi is a cloud-based appointment management platform for small to midsize businesses.",
		icon: "Booxi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "booxi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/bxe_core\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "booxi:jsGlobal:1",
				kind: "jsGlobal",
				property: "booxi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "booxi:jsGlobal:2",
				kind: "jsGlobal",
				property: "booxiController",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "booxi:jsGlobal:3",
				kind: "jsGlobal",
				property: "bxe_core",
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
		id: "bottle",
		name: "Bottle",
		website: "https://bottle.com",
		description: "Bottle is an all-in-one software for meal delivery businesses, enhancing operational efficiency and customer management.",
		icon: "Bottle.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bottle:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunkbottle_merchant_vue",
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
		implies: [
			"stripe",
			"vue-js",
		],
	},
	{
		id: "boulevard",
		name: "Boulevard",
		website: "https://www.joinblvd.com",
		description: "Boulevard is a business management platform tailored to streamline appointment-based operations, specifically designed for the wellness industry.",
		icon: "Boulevard.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "boulevard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.joinboulevard\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "boulevard:dom:1",
				kind: "dom",
				selector: "iframe[src*='.boulevard.io']",
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
		id: "brella",
		name: "Brella",
		website: "https://www.brella.io",
		description: "Brella is an event networking platform that matches attendees, enables meeting scheduling, and supports in-person, virtual, and hybrid events.",
		icon: "Brella.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "brella:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.brella\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "bsport",
		name: "Bsport",
		website: "https://pro.bsport.io",
		description: "Bsport is a fitness/boutique studio management software for scheduling, memberships, and client management.",
		icon: "Bsport.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "bsport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.bsport\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "bsport:jsGlobal:1",
				kind: "jsGlobal",
				property: "BsportWidget.el_list_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bsport:jsGlobal:2",
				kind: "jsGlobal",
				property: "runtimeBsport",
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
		id: "busify",
		name: "Busify",
		website: "https://www.busify.com",
		description: "Busify is a bus software platform that enables operators to issue tickets, enhance customer experiences, and manage fleets.",
		icon: "Busify.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "busify:dom:0",
				kind: "dom",
				selector: "iframe[src*='.app.busify.com/'], link[href*='app.busify.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "calendarhero",
		name: "CalendarHero",
		website: "https://calendarhero.com",
		description: "CalendarHero (formerly Zoom.ai) is meeting scheduling software that helps you book meetings automatically.",
		icon: "CalendarHero.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "calendarhero:jsGlobal:0",
				kind: "jsGlobal",
				property: "ZOOMAI.VARS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "calendarhero:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.calendarhero\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "calendarhero:dom:2",
				kind: "dom",
				selector: "iframe[src*='.calendarhero.com']",
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
		id: "calendarwiz",
		name: "CalendarWiz",
		website: "https://www.calendarwiz.com/",
		description: "CalendarWiz is an online scheduling calendar.",
		icon: "CalendarWiz.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "calendarwiz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.calendarwiz\\.com\\/"),
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
		id: "calendly",
		name: "Calendly",
		website: "https://calendly.com/",
		description: "Calendly is an app for scheduling appointments, meetings, and events.",
		icon: "Calendly.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "calendly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.calendly\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "calendly:dom:1",
				kind: "dom",
				selector: "a[href*='//calendly.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "calendly:jsGlobal:2",
				kind: "jsGlobal",
				property: "Calendly",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "calendly:jsGlobal:3",
				kind: "jsGlobal",
				property: "Calendly.closePopupWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "calendly:jsGlobal:4",
				kind: "jsGlobal",
				property: "Calendly.showPopupWidget",
				description: "Page-owned global matches a known technology marker.",
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
		id: "calenso",
		name: "Calenso",
		website: "https://calenso.com",
		description: "Calenso is an online enterprise scheduling solution that helps companies in consulting-intensive industries organize appointments.",
		icon: "Calenso.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "calenso:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.calenso\\.com\\/"),
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
		id: "casablanca",
		name: "Casablanca",
		website: "https://casablanca.at",
		description: "Casablanca is a hotel booking and property management platform for accommodation businesses.",
		icon: "default.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "casablanca:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("frontend\\.casablanca\\.at\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "casablanca:dom:1",
				kind: "dom",
				selector: "a[href*='://ibe.casablanca.at/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "casablanca:dom:2",
				kind: "dom",
				selector: "iframe[src*='://ibe.casablanca.at/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cfix",
		name: "Cfixé",
		website: "https://cfixe.com",
		description: "Cfixé is a scheduling platform that enables online booking for everyday services and allows professionals to embed a scheduling widget directly on their website.",
		icon: "Cfixe.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "cfix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cfixe\\.com"),
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
		id: "chili-piper",
		name: "Chili Piper",
		website: "https://www.chilipiper.com/",
		description: "Chili Piper is a suite of automated scheduling tools that help revenue teams convert leads.",
		icon: "Chili Piper.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "chili-piper:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.chilipiper\\.com\\/marketing\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chili-piper:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChiliPiper",
				description: "Page-owned global matches a known technology marker.",
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
		id: "classcreator",
		name: "ClassCreator",
		website: "https://www.classcreator.com",
		description: "ClassCreator is a school class reunion planning tool that helps organize events, manage guest lists, and track RSVPs, streamlining the coordination of reunions.",
		icon: "ClassCreator.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "classcreator:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.classcreator\\.com\\/"),
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
		id: "classfit",
		name: "ClassFit",
		website: "https://classfit.com",
		description: "ClassFit is a provider of a booking and scheduling software for fitness centers.",
		icon: "ClassFit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "classfit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.classfit\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "classfit:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.classfit\\.com"),
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
		id: "clickbus",
		name: "ClickBus",
		website: "https://www.clickbus.com.br",
		description: "ClickBus is an online platform that enables users to search, compare, and book bus travel routes.",
		icon: "ClickBus.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "clickbus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.clickbus\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "client-diary",
		name: "Client Diary",
		website: "https://clientdiary.com",
		description: "Client Diary is a scheduling and booking system used to manage appointments, track availability, and organize client interactions in one platform.",
		icon: "ClientDiary.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "client-diary:dom:0",
				kind: "dom",
				selector: "iframe[src*='booking.clientdiary.com']",
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
		id: "clock-pms",
		name: "Clock PMS",
		website: "https://www.clock-software.com",
		description: "Clock PMS is a hotel booking software designed to streamline reservations, manage guest information, and optimise hotel operations.",
		icon: "ClockPMS.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "clock-pms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clock-software\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "clock-pms:jsGlobal:1",
				kind: "jsGlobal",
				property: "clock_pms_iframe",
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
		id: "clorder",
		name: "Clorder",
		website: "https://www.clorder.com",
		description: "Clorder is a digital platform for ordering and marketing designed to reduce costs and enhance sales for businesses.",
		icon: "Clorder.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "clorder:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.clorder\\.com"),
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
		id: "cloudbeds",
		name: "Cloudbeds",
		website: "https://www.cloudbeds.com",
		description: "Cloudbeds is a cloud-based hotel management platform which includes tools for managing reservations, availability, rates, distribution channels, payments, guests, housekeeping, and more.",
		icon: "Cloudbeds.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "cloudbeds:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloudbeds\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cloudbeds:dom:1",
				kind: "dom",
				selector: "a[href*='.cloudbeds.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "cloudbeds:jsGlobal:2",
				kind: "jsGlobal",
				property: "CloudBeds_widget",
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
		id: "configio",
		name: "Configio",
		website: "https://www.configio.com",
		description: "Configio is an event registration software platform that supports event planning, promotion, and execution through integrated tools for managing registrations, payments, and attendee data.",
		icon: "Configio.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "configio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("media\\.configio\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cooltix",
		name: "Cooltix",
		website: "https://cooltix.com",
		description: "Cooltix is an event and ticketing system designed to manage and sell tickets for concerts.",
		icon: "Cooltix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "cooltix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cooltix\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "counseling-kit",
		name: "Counseling Kit",
		website: "https://counselingkit.com",
		description: "Counseling Kit is a HIPAA-compliant platform offering professional online tools designed specifically for therapists to support virtual therapy sessions.",
		icon: "CounselingKit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "counseling-kit:dom:0",
				kind: "dom",
				selector: "div[data-url*='www.counselingkit.com/'], link[href*='/ico/counselingkit/']",
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
		id: "covermanager",
		name: "CoverManager",
		website: "https://www.covermanager.com",
		description: "CoverManager is a restaurant table booking widget.",
		icon: "CoverManager.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "covermanager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.covermanager\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "covermanager:dom:1",
				kind: "dom",
				selector: "iframe[src*='.covermanager.com/']",
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
		id: "cubilis",
		name: "Cubilis",
		website: "https://www.cubilis.com",
		description: "Cubilis is a management and reservation system for all types of accommodation, such as hotels, B&Bs and hostels.",
		icon: "Cubilis.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "cubilis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cubilis\\.eu\\/"),
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
		id: "cvent",
		name: "Cvent",
		website: "https://www.cvent.com",
		description: "Cvent is an event management software that offers a platform for managing in-person, virtual, and hybrid events.",
		icon: "Cvent.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "cvent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cvent-assets\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cvent:jsGlobal:1",
				kind: "jsGlobal",
				property: "CVENT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cvent:jsGlobal:2",
				kind: "jsGlobal",
				property: "CVENT.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cvent:jsGlobal:3",
				kind: "jsGlobal",
				property: "Cvent_findElement",
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
		id: "deardoc",
		name: "DearDoc",
		website: "https://www.getdeardoc.com",
		description: "DearDoc is an appointment scheduling system that organizes, manages, and tracks appointments to streamline booking processes.",
		icon: "DearDoc.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "deardoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ai\\.getdeardoc\\.com"),
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
		id: "dice",
		name: "Dice",
		website: "https://dice.fm",
		description: "Dice is an event and ticketing platform that enables users to discover, access, and attend live events through a streamlined digital experience.",
		icon: "Dice.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "dice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.dice\\.fm"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dice:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.dice\\.fm"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "dice:jsGlobal:2",
				kind: "jsGlobal",
				property: "DiceEventListWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "dish",
		name: "DISH",
		website: "https://www.dish.co/XX",
		description: "DISH is a platform that allows restaurants to independently manage online reservations and customer orders.",
		icon: "DISH.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "dish:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dish\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "doctena",
		name: "Doctena",
		website: "https://www.doctena.at",
		description: "Doctena is an online appointment booking platform that allows users to schedule visits with doctors, dentists, and other healthcare practitioners.",
		icon: "Doctena.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "doctena:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.doctena\\.at"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "doctena:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^PRODDOCTENASESSID$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "doctena:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^proddoctenasessid$", "i"),
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
		id: "drchrono",
		name: "DrChrono",
		website: "https://www.drchrono.com",
		description: "DrChrono is an electronic health record system that centralizes clinical documentation, scheduling, billing, and patient management to support healthcare operations.",
		icon: "DrChrono.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "drchrono:dom:0",
				kind: "dom",
				selector: "form[action*='drchrono.com/scheduling/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "drchrono:jsGlobal:1",
				kind: "jsGlobal",
				property: "DRCHRONO_REACT_BUNDLE_LOADED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "drchrono:jsGlobal:2",
				kind: "jsGlobal",
				property: "dispatchDrChronoEvent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "droplabs",
		name: "Droplabs",
		website: "https://droplabs.pl",
		description: "Droplabs is a Poland-based ticketing system, reservation system, and channel management tool designed to manage bookings and distribution across multiple sales channels.",
		icon: "Droplabs.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "droplabs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.droplabs\\.pl\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "droplabs:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkdroplabs_widget",
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
		id: "easy-rez",
		name: "Easy Rez",
		website: "https://www.easy-rez.com",
		description: "Easy Rez is a hotel property management and booking system designed to streamline reservations, room management, and guest services.",
		icon: "EasyRez.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "easy-rez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.easy-rez\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easy-rez:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Easy-Rez$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "easy-rez:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^easy-rez$", "i"),
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
		id: "easyweek",
		name: "EasyWeek",
		website: "https://easyweek.io",
		description: "EasyWeek is a software platform that enables appointment scheduling for businesses across various industries.",
		icon: "EasyWeek.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "easyweek:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easyweek\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easyweek:jsGlobal:1",
				kind: "jsGlobal",
				property: "EasyWeekWidget",
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
		id: "eatself",
		name: "Eatself",
		website: "https://www.eatself.com",
		description: "Eatself is an online platform that facilitates meal ordering and delivery services.",
		icon: "Eatself.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eatself:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.eatself\\.com"),
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
		id: "eatstreet",
		name: "EatStreet",
		website: "https://eatstreet.com",
		description: "EatStreet is a food booking platform that enables users to browse restaurants, place meal orders, and schedule deliveries or pickups through an online or mobile interface.",
		icon: "EatStreet.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eatstreet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.eatstreet\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eatstreet:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^eatstreet\\-year\\-session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "elina-pms",
		name: "Elina PMS",
		website: "https://www.elinapms.com",
		description: "Elina PMS is a software suite that includes a channel manager, booking engine, and property management system for handling reservations, availability, and operations.",
		icon: "Elina.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "elina-pms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.elinapms\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "elina-pms:jsGlobal:1",
				kind: "jsGlobal",
				property: "elinaGlobalConst",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eola",
		name: "eola",
		website: "https://eola.co",
		description: "eola is a booking platform that enables users to manage reservations, schedules, and availability for services or events through a centralized online system.",
		icon: "eola.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eola:dom:0",
				kind: "dom",
				selector: "link[href*='backend.eola.co/'][rel*='stylesheet']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "eola:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^_eola_session_eola$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"poa",
			],
		},
	},
	{
		id: "etermio",
		name: "Etermio",
		website: "https://www.etermio.com",
		description: "Etermio is an automated system for online appointment scheduling.",
		icon: "Etermio.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "etermio:jsGlobal:0",
				kind: "jsGlobal",
				property: "$eTermio",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "etermio:jsGlobal:1",
				kind: "jsGlobal",
				property: "eTermio_autoOpenWindow",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "etermio:jsGlobal:2",
				kind: "jsGlobal",
				property: "etermio_handler",
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
		id: "etix",
		name: "Etix",
		website: "https://hello.etix.com",
		description: "Etix is an international web-based ticketing service provider for the entertainment, travel, and sports industries.",
		icon: "Etix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "etix:dom:0",
				kind: "dom",
				selector: "a[href*='.etix.com/ticket/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "etix:jsGlobal:1",
				kind: "jsGlobal",
				property: "Etix.javaContext",
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
		id: "eventlink",
		name: "Eventlink",
		website: "https://eventlink.com",
		description: "Eventlink is a platform for managing events, offering tools for registration, communication, and collaboration in a unified interface.",
		icon: "Eventlink.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eventlink:dom:0",
				kind: "dom",
				selector: "link[href*='.eventlink.com/'], iframe[src*='.eventlink.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "eventlink:jsGlobal:1",
				kind: "jsGlobal",
				property: "eventlink.organizationID",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "eventon",
		name: "EventOn",
		website: "https://www.myeventon.com",
		description: "EventON is event calendar for WordPress.",
		icon: "eventon.png",
		categories: [
			"booking-scheduling",
			"wordpress-ecosystem",
		],
		rules: [
			{
				id: "eventon:dom:0",
				kind: "dom",
				selector: "link#eventon_dynamic_styles-css, link[href*='/css/eventon_styles\\.css']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "eviivo",
		name: "Eviivo",
		website: "https://eviivo.com",
		description: "Eviivo is an online booking system that enables hosts and hoteliers to manage reservations and availability.",
		icon: "Eviivo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eviivo:jsGlobal:0",
				kind: "jsGlobal",
				property: "eviivo.announcement",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "eviivo:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^eviivo_lang$", "i"),
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
		id: "evvnt",
		name: "Evvnt",
		website: "https://evvnt.com",
		description: "Evvnt is a digital events marketing and management platform.",
		icon: "Evvnt.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "evvnt:dom:0",
				kind: "dom",
				selector: "script[data-source*='evvnt']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "evvnt:jsGlobal:1",
				kind: "jsGlobal",
				property: "evvnt_require",
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
		id: "eztix",
		name: "EzTix",
		website: "https://www.eztix.com",
		description: "EzTix is an event ticketing system.",
		icon: "EzTix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "eztix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("kiosk\\.eztix\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "eztix:dom:1",
				kind: "dom",
				selector: "script#eztixKioskLinkId",
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
		id: "ezyvet",
		name: "ezyVet",
		website: "https://www.ezyvet.com",
		description: "ezyVet is a cloud-based veterinary practice management platform designed to support clinical workflows, patient records, scheduling, and operational processes.",
		icon: "ezyVet.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ezyvet:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.ezyvet\\.com\\/"),
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
		id: "fatsoma",
		name: "Fatsoma",
		website: "https://www.fatsoma.com",
		description: "Fatsoma is a platform for creating event and concert websites, enabling organizers to manage listings and ticket sales.",
		icon: "Fatsoma.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fatsoma:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.fatsoma\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "fatsoma:dom:1",
				kind: "dom",
				selector: "link[href*='.fatsomasites.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fever",
		name: "Fever",
		website: "https://feverup.com",
		description: "Fever is a digital platform facilitating the discovery and booking of top events and experiences worldwide.",
		icon: "Fever.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fever:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("feverup\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "fieldd",
		name: "Fieldd",
		website: "https://fieldd.co",
		description: "Fieldd is a scheduling software used to plan, assign, and manage field service operations.",
		icon: "Fieldd.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fieldd:jsGlobal:0",
				kind: "jsGlobal",
				property: "FielddBooking.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "fieldd:jsGlobal:1",
				kind: "jsGlobal",
				property: "FielddLeadForm",
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
		id: "findigs",
		name: "Findigs",
		website: "https://www.findigs.com",
		description: "Findigs is an all-in-one renting platform that streamlines the entire process from application to approval.",
		icon: "Findigs.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "findigs:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.findigs\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "firefly-reservations",
		name: "Firefly Reservations",
		website: "https://fireflyreservations.com",
		description: "Firefly Reservations is a management platform that provides tools for handling campground reservations.",
		icon: "FireflyReservations.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "firefly-reservations:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.fireflyreservations\\.com"),
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
		id: "fitssey",
		name: "Fitssey",
		website: "https://fitssey.com",
		description: "Fitssey is a booking software designed to manage studio appointments and scheduling.",
		icon: "Fitssey.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fitssey:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.fitssey\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fitssey:jsGlobal:1",
				kind: "jsGlobal",
				property: "FitsseyWidget",
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
		id: "fleksa",
		name: "Fleksa",
		website: "https://fleksa.com",
		description: "Fleksa is an online ordering system for restaurants and delivery.",
		icon: "Fleksa.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fleksa:dom:0",
				kind: "dom",
				selector: "a[href*='play.google.com/store/apps/details?id=com.fleksa.'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		implies: [
			"next-js",
			"node-js",
		],
	},
	{
		id: "flipdish",
		name: "Flipdish",
		website: "https://www.flipdish.com",
		description: "Flipdish is an all-in-one technology solution designed to streamline restaurant operations.",
		icon: "Flipdish.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "flipdish:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.web\\.flipdish\\.com\\/"),
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
		id: "flybook",
		name: "Flybook",
		website: "https://www.theflybook.com",
		description: "Flybook is specialized reservation software designed to manage bookings, availability, and operations for businesses in the adventure, tours, and rentals industry.",
		icon: "Flybook.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "flybook:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^flybook\\-generated\\-session\\-guid$", "i"),
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
		id: "foodbooking",
		name: "FoodBooking",
		website: "https://www.foodbooking.com",
		description: "FoodBooking is a virtual food court based on a curated list of restaurants that use the GloriaFood ordering system.",
		icon: "FoodBooking.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "foodbooking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:fbgcdn|foodbooking)\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "foodbooking:dom:1",
				kind: "dom",
				selector: "a[href*='.foodbooking.com/ordering/restaurant/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		implies: [
			"gloriafood",
		],
	},
	{
		id: "foodomaa",
		name: "Foodomaa",
		website: "https://foodomaa.com",
		description: "Foodomaa is a multi-restaurant food ordering and restaurant membership system.",
		icon: "Foodomaa.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "foodomaa:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^foodomaa_session$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "foodomaa:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^cloudify_session$", "i"),
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
		id: "foratable",
		name: "Foratable",
		website: "https://go.foratable.com",
		description: "Foratable is a reservation system for restaurants that manages table bookings, customer scheduling, and availability tracking.",
		icon: "Foratable.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "foratable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.foratable\\.com"),
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
		id: "foreup",
		name: "ForeUP",
		website: "https://www.foreupgolf.com",
		description: "ForeUP is a golf course management platform that provides integrated tools for operations in a single system.",
		icon: "ForeUP.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "foreup:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("foreupsoftware\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "formitable",
		name: "Formitable",
		website: "https://formitable.com",
		description: "Formitable is an reservation management system for restaurants.",
		icon: "Formitable.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "formitable:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("formitable\\.js(?:\\?ver=([\\d.]+))?"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "formitable:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.formitable\\.com"),
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
		id: "fresha",
		name: "Fresha",
		website: "https://www.fresha.com",
		description: "Fresha is a leading marketplace enabling consumers to discover, book, and pay for local beauty and wellness services.",
		icon: "Fresha.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fresha:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fresha\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "fresha:dom:1",
				kind: "dom",
				selector: "a[data-href*='.fresha.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "fresha:jsGlobal:2",
				kind: "jsGlobal",
				property: "FRESHA_VARS",
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
		id: "full-on-sport",
		name: "Full On Sport",
		website: "https://www.fullonsport.com",
		description: "Full On Sport is an online event-registration platform designed for race directors, offering tools to manage sign-ups, participant data, and race operations.",
		icon: "FullOnSport.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "full-on-sport:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.fullonsport\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "full-slate",
		name: "Full Slate",
		website: "https://www.fullslate.com",
		description: "Full Slate is an appointment scheduling software designed to help businesses manage bookings, client information, and availability.",
		icon: "FullSlate.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "full-slate:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.fullslate\\.com"),
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
		id: "fullseats",
		name: "FullSeats",
		website: "https://www.fullseats.com",
		description: "FullSeats is a booking system designed to streamline scheduling and support business growth through reservation management.",
		icon: "FullSeats.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "fullseats:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("apps\\.fullseats\\.com"),
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
		id: "funbutler-booking",
		name: "Funbutler Booking",
		website: "https://business.funbutler.com",
		description: "Funbutler Booking is a booking and operations system designed for activity centers and entertainment venues to manage reservations and streamline daily operations.",
		icon: "FunbutlerBooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "funbutler-booking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booking\\.funbutler\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "funbutler-booking:jsGlobal:1",
				kind: "jsGlobal",
				property: "funbutlerAPI",
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
		id: "gastronaut",
		name: "Gastronaut",
		website: "https://get.gastronaut.ai",
		description: "Gastronaut is a reservation system designed to automate the booking process, streamlining operations to enhance sales efficiency.",
		icon: "Gastronaut.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "gastronaut:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.gastronaut\\.ai\\/"),
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
		id: "gbooking",
		name: "GBooking",
		website: "https://gbooking.ru",
		description: "GBooking is an online platform that provides booking and business management services for scheduling, reservations, and operational organization.",
		icon: "GBooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "gbooking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gbooking\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "getyourguide",
		name: "GetYourGuide",
		website: "https://partner.getyourguide.com",
		description: "GetYourGuide is a Berlin-based online travel agency and online marketplace for tour guides and excursions.",
		icon: "GetYourGuide.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "getyourguide:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getyourguide\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "getyourguide:dom:1",
				kind: "dom",
				selector: "a[href*='.getyourguide.']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "getyourguide:dom:2",
				kind: "dom",
				selector: "img[src*='cdn.getyourguide.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "getyourguide:dom:3",
				kind: "dom",
				selector: "link[href*='cdn.getyourguide.com/']",
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
		id: "gevme",
		name: "Gevme",
		website: "https://www.gevme.com",
		description: "Gevme is an omnichannel event management platform designed to streamline planning, coordination, and execution across physical, virtual, and hybrid events.",
		icon: "Gevme.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "gevme:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.gevme\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gevme:jsGlobal:1",
				kind: "jsGlobal",
				property: "GEVME.analytics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gevme:jsGlobal:2",
				kind: "jsGlobal",
				property: "GevmeActivityFeed",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gevme:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^GEVME Analytics$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "gevme:meta:4",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^gevme analytics$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "glampmanager",
		name: "GlampManager",
		website: "https://www.glampmanager.com",
		description: "GlampManager is a booking and management software designed to streamline reservations, scheduling, and operational tasks for hospitality businesses.",
		icon: "GlampManager.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "glampmanager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bookings\\.glampmanager\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "glampmanager:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("Glampmanager"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "glampmanager:scriptContent:2",
				kind: "scriptContent",
				pattern: new RegExp("glampmanager"),
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
		id: "globres",
		name: "GlobRes",
		website: "https://globres.com",
		description: "GlobRes is a hospitality management solution designed to streamline operations, reservations, and customer service for hotels and other lodging providers.",
		icon: "GlobRes.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "globres:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.globres\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "globres:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.globres\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "glofox",
		name: "Glofox",
		website: "https://www.glofox.com",
		description: "Glofox is a fitness management platform that assists gyms and fitness studios in managing memberships, class scheduling, and other business operations.",
		icon: "Glofox.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "glofox:dom:0",
				kind: "dom",
				selector: "a[href*='.glofox.com/'], iframe[src*='.glofox.com/']",
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
		id: "gloriafood",
		name: "GloriaFood",
		website: "https://www.gloriafood.com",
		description: "GloriaFood is an online ordering and food delivery platform that helps restaurant owners manage orders and streamline point-of-sale operations.",
		icon: "Oracle.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "gloriafood:jsGlobal:0",
				kind: "jsGlobal",
				property: "glfBindButtons",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gloriafood:jsGlobal:1",
				kind: "jsGlobal",
				property: "glfWidget",
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
		id: "goprep",
		name: "GoPrep",
		website: "https://goprep.com",
		description: "GoPrep is a meal prep software tailored for the Meal Preparation & Delivery industry.",
		icon: "GoPrep.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "goprep:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^goprep_session$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "gorendezvous",
		name: "GOrendezvous",
		website: "https://gorendezvous.com",
		description: "GOrendezvous is an online scheduling and appointment booking software for managing availability, bookings, and calendar coordination across services and users.",
		icon: "GOrendezvous.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "gorendezvous:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.gorendezvous\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "greminders",
		name: "GReminders",
		website: "https://www.greminders.com",
		description: "GReminders is an end-to-end meeting management platform designed for professionals to schedule, organize, and manage meetings.",
		icon: "GReminders.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "greminders:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.greminders\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "greminders:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.greminders.com/']",
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
		id: "growcer",
		name: "Growcer",
		website: "https://www.yogrowcer.com",
		description: "Growcer is an online marketplace for grocery ordering and delivery, connecting customers with local stores for convenient shopping.",
		icon: "Growcer.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "growcer:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.yogrowcer\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"onetime",
				"poa",
			],
		},
	},
	{
		id: "guestonline",
		name: "Guestonline",
		website: "https://www.guestonline.io",
		description: "Guestonline is a restaurant table booking widget.",
		icon: "Guestonline.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "guestonline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ib\\.guestonline\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "guestonline:dom:1",
				kind: "dom",
				selector: "iframe[src*='ib.guestonline.']",
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
		id: "guesty",
		name: "Guesty",
		website: "https://www.guesty.com/",
		description: "Guesty is a cloud-based platform, designed exclusively for Airbnb and vacation rental managers.",
		icon: "Guesty.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "guesty:dom:0",
				kind: "dom",
				selector: "script[id*='guesty-js-extra']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "guesty:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^guesty\\-muid$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "guesty:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^guesty\\-utms$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "guidap",
		name: "Guidap",
		website: "https://guidap.com",
		description: "Guidap is a platform enabling online activity sales, streamlining booking, scheduling, and payment collection processes across all devices, without commissions.",
		icon: "Guidap.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "guidap:dom:0",
				kind: "dom",
				selector: "link[href*='//cart.guidap.net/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "guidap:jsGlobal:1",
				kind: "jsGlobal",
				property: "GUIDAP",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "guidap:jsGlobal:2",
				kind: "jsGlobal",
				property: "GUIDAPInitConfig",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "haku",
		name: "Haku",
		website: "https://hakusports.com",
		description: "Haku is a technology platform for endurance races that supports organizations in growing participation, increasing registrations, and improving event experiences.",
		icon: "Haku.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "haku:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hakuapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "haku:jsGlobal:1",
				kind: "jsGlobal",
				property: "addHakuRegisterEvent",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "haku:jsGlobal:2",
				kind: "jsGlobal",
				property: "addHakuSubmitEvent",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "harmonizely",
		name: "Harmonizely",
		website: "https://harmonizely.com",
		description: "Harmonizely is a scheduling system that enables online appointment booking, calendar management, and time coordination through a web-based interface.",
		icon: "Harmonizely.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "harmonizely:dom:0",
				kind: "dom",
				selector: "link[href*='app.harmonizely.com/']",
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
		id: "helixpay",
		name: "HelixPay",
		website: "https://helixpay.ph",
		description: "HelixPay is an event ticketing platform providing online payment integration, digital tickets, and customizable event websites for large-scale events.",
		icon: "HelixPay.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "helixpay:jsGlobal:0",
				kind: "jsGlobal",
				property: "HELIXPAY.PAGE",
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
		id: "holdmyticket",
		name: "HoldMyTicket",
		website: "https://tickets.holdmyticket.com",
		description: "HoldMyTicket is a platform offering event ticketing and box office solutions for organizers.",
		icon: "HoldMyTicket.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "holdmyticket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/holdmyticket\\.com\\/widgets"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "homhero",
		name: "HomHero",
		website: "https://homhero.com.au",
		description: "Homhero is a platform that offers a range of tools and services to help vacation rental owners manage their properties and bookings.",
		icon: "HomHero.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "homhero:dom:0",
				kind: "dom",
				selector: "script#homhero-scripts-js",
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
		id: "hostmeapp",
		name: "Hostmeapp",
		website: "https://www.hostmeapp.com",
		description: "Hostmeapp is an restaurant software. Includes reservation, waitlist, guestbook and marketing tools.",
		icon: "Hostmeapp.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "hostmeapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tables\\.hostmeapp\\.com"),
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
		id: "hotdoc",
		name: "HotDoc",
		website: "https://www.hotdoc.com.au",
		description: "HotDoc is a platform for booking healthcare appointments, providing patients with access to medical practitioners and clinics.",
		icon: "HotDoc.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "hotdoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.hotdoc\\.com\\.au"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hotdoc:jsGlobal:1",
				kind: "jsGlobal",
				property: "hotdoc.assetsURL",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "housecall-pro",
		name: "Housecall Pro",
		website: "https://www.housecallpro.com",
		description: "Housecall Pro is a platform that enables businesses to schedule, dispatch, invoice, and receive online bookings from customers.",
		icon: "HousecallPro.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "housecall-pro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.housecallpro\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "housecall-pro:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("housecallpro\\.com\\/"),
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
		id: "iclose",
		name: "iClose",
		website: "https://iclosed.io",
		description: "iClose is an appointment scheduling tool that helps businesses streamline lead generation and meeting coordination without additional advertising expenses.",
		icon: "iClosed.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "iclose:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.iclosed\\.io\\/"),
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
		id: "indexic",
		name: "Indexic",
		website: "https://www.indexic.net",
		description: "Indexic is a booking management platform designed for tours, activities, and rental operations.",
		icon: "Indexic.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "indexic:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.web\\.indexic\\.net"),
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
		id: "inevent",
		name: "InEvent",
		website: "https://inevent.com",
		description: "InEvent is event management software designed to streamline planning, organization, and execution of virtual, hybrid, and in-person events.",
		icon: "InEvent.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "inevent:meta:0",
				kind: "meta",
				key: "apiURL",
				valuePattern: new RegExp("inevent\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "inevent:meta:1",
				kind: "meta",
				key: "namespace",
				valuePattern: new RegExp("^InEvent$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "inevent:meta:2",
				kind: "meta",
				key: "apiurl",
				valuePattern: new RegExp("inevent\\.com", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "inevent:meta:3",
				kind: "meta",
				key: "namespace",
				valuePattern: new RegExp("^inevent$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "ingresse",
		name: "Ingresse",
		website: "https://ingresse.com",
		description: "Ingresse is a booking system that enables users to manage reservations.",
		icon: "Ingresse.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ingresse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ingresse\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ingresse:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.ingresse\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "invitario",
		name: "Invitario",
		website: "https://invitario.com",
		description: "Invitario is an event marketing platform that provides a digital invitation and guest management for business events.",
		icon: "Invitario.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "invitario:jsGlobal:0",
				kind: "jsGlobal",
				property: "InvitarioWidget",
				description: "Page-owned global matches a known technology marker.",
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
		id: "jameda",
		name: "Jameda",
		website: "https://www.jameda.de",
		description: "Jameda is an online appointment scheduling system for doctors, enabling patients to book medical consultations.",
		icon: "Jameda.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "jameda:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn1\\.jameda-elements\\.de\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jameda:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn1.\\jameda-elements\\.de\\/"),
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
		id: "jrni",
		name: "jrni",
		website: "https://www.jrni.com",
		description: "jrni is a platform that supports customer revenue generation by centralizing booking, scheduling, and customer engagement processes within a single system.",
		icon: "jrni.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "jrni:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bookingbug\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jrni:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.jrni\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "kalix",
		name: "Kalix",
		website: "https://kalixhealth.com",
		description: "Kalix is a HIPAA-compliant electronic medical record, practice management, and telehealth platform designed for dietitians, nutritionists, and other healthcare professionals.",
		icon: "Kalix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "kalix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.kalixhealth\\.com"),
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
		id: "kktix",
		name: "KKTIX",
		website: "https://kktix.com",
		description: "KKTIX is a Taiwanese software platform that provides online ticketing and event management solutions.",
		icon: "KKTIX.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "kktix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.kktix\\.io"),
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
		id: "koobcamp",
		name: "KoobCamp",
		website: "https://www.koobcamp.com/en/home-page",
		description: "KoobCamp is a provider of camping, village, and glamping holiday solutions.",
		icon: "KoobCamp.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "koobcamp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.koobcamp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "koobcamp:jsGlobal:1",
				kind: "jsGlobal",
				property: "KOOBCAMP_WIDGETS",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "koobcamp:jsGlobal:2",
				kind: "jsGlobal",
				property: "KoobCampWidgets",
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
		id: "kross-booking",
		name: "Kross Booking",
		website: "https://www.krossbooking.com",
		description: "Kross Booking is a booking management system that automates reservations, scheduling, and resource allocation to streamline operational workflows.",
		icon: "KrossBooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "kross-booking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("data\\.krossbooking\\.com\\/"),
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
		id: "legitfit",
		name: "LegitFit",
		website: "https://legitfit.com",
		description: "Legitfit is a booking and management platform designed to support scheduling and operations for boutique fitness studios.",
		icon: "LegitFit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "legitfit:meta:0",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^LegitFit$", "i"),
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
		id: "limecall",
		name: "Limecall",
		website: "https://limecall.com",
		description: "Limecall is a software platform that facilitates instant callback requests and manages call scheduling to enhance customer engagement and lead generation processes.",
		icon: "Limecall.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "limecall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.limecall\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "limecall:dom:1",
				kind: "dom",
				selector: "script[data-api-url*='app.limecall.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "limecall:jsGlobal:2",
				kind: "jsGlobal",
				property: "limeCallClient",
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
		id: "little-hotelier",
		name: "Little Hotelier",
		website: "https://www.littlehotelier.com",
		description: "Little Hotelier is an all-in-one property management solution designed for small accomodation businesses.",
		icon: "LittleHotelier.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "little-hotelier:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_littlehotelier_session$", "i"),
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
		id: "lobbypms",
		name: "LobbyPMS",
		website: "https://lobbypms.com",
		description: "LobbyPMS is a platform developed to streamline daily accommodation management.",
		icon: "LobbyPMS.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "lobbypms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.lobbypms\\.com"),
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
		id: "lodgify",
		name: "Lodgify",
		website: "https://www.lodgify.com",
		description: "Lodgify is a platform facilitating vacation rentals and bookings.",
		icon: "Lodgify.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "lodgify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lodgify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "loopi",
		name: "Loopi",
		website: "https://www.loopi.fr",
		description: "Loopi is a digital ecosystem offering tools, integrations, and resources for tourism professionals to create, manage, and distribute multimodal tourist circuits.",
		icon: "Loopi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "loopi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.loopi-velo\\.fr\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "luma",
		name: "Luma",
		website: "https://lu.ma",
		description: "Luma is a platform for creating event pages, sending invites, and managing tickets.",
		icon: "Luma.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "luma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.lu\\.ma"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "luma:jsGlobal:1",
				kind: "jsGlobal",
				property: "luma.initCheckout",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "lumit",
		name: "Lumit",
		website: "https://lumit.app/se",
		description: "Lumit is an online ordering system for restaurants.",
		icon: "Lumit.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "lumit:dom:0",
				kind: "dom",
				selector: "iframe[src*='.lumit.se']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "lumit:jsGlobal:1",
				kind: "jsGlobal",
				property: "injectLumit",
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
		id: "mainboard",
		name: "Mainboard",
		website: "https://www.mainboard.com",
		description: "Mainboard is a software platform designed to manage, schedule, and book talent.",
		icon: "Mainboard.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "mainboard:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("Mainboard\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "mainboard:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("mainboard\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "makeplans",
		name: "Makeplans",
		website: "https://makeplans.com",
		description: "Makeplans is a scheduling system designed for appointment booking and event registration, providing tools to manage availability, reservations, and attendee organization.",
		icon: "Makeplans.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "makeplans:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.makeplans\\.com"),
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
		id: "mangomint",
		name: "Mangomint",
		website: "https://www.mangomint.com",
		description: "Mangomint is a salon and spa management platform that centralizes scheduling, client records, payments, and operational tools for service-based businesses.",
		icon: "Mangomint.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "mangomint:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booking\\.mangomint\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mangomint:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mangomint.CompanyId",
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
		id: "matchi",
		name: "Matchi",
		website: "https://www.matchi.se",
		description: "Matchi is a platform for racket sports enthusiasts to search, book, and play tennis, badminton, table tennis, squash, or padel.",
		icon: "Matchi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "matchi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.matchi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maxxton",
		name: "Maxxton",
		website: "https://maxxton.com",
		description: "Maxxton is a reservation and property management system.",
		icon: "Maxxton.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "maxxton:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.maxxton\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maxxton:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.maxxton\\.net"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "meetup-express",
		name: "Meetup Express",
		website: "https://meetupexpress.com",
		description: "Meetup Express is an appointment scheduling system designed to simplify booking and managing meetings.",
		icon: "MeetupExpress.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "meetup-express:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^meetup_express_quick_appointment_session$", "i"),
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
		id: "menufy-online-ordering",
		name: "Menufy Online Ordering",
		website: "https://restaurant.menufy.com",
		description: "Menufy is an online and mobile meal ordering service.",
		icon: "Menufy.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "menufy-online-ordering:dom:0",
				kind: "dom",
				selector: "a[href*='.menufy.com/'][target='_blank']",
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
		id: "menuu",
		name: "Menuu",
		website: "https://menuu.com",
		description: "MENUU is an online ordering system for restaurants and food delivery.",
		icon: "Menuu.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "menuu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("frontend\\.menuu\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "menuu:header:1",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("frontend\\.menuu\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "menuu:header:2",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("frontend\\.menuu\\.com", "i"),
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
		id: "mews",
		name: "Mews",
		website: "https://www.mews.com",
		description: "Mews is a hospitalitions service that enables hotels to track their bookings.",
		icon: "Mews.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "mews:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mews\\.li\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mews:dom:1",
				kind: "dom",
				selector: "a[href*='.mews.li/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mews:jsGlobal:2",
				kind: "jsGlobal",
				property: "Mews",
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
		id: "miyn-online-appointment",
		name: "MIYN Online Appointment",
		website: "https://miyn.app/online-appointment",
		description: "MIYN Online Appointment is an advanced cloud-based online appointment scheduling software.",
		icon: "MIYN.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "miyn-online-appointment:jsGlobal:0",
				kind: "jsGlobal",
				property: "MIYNLive.settings",
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
		id: "moder",
		name: "Moder",
		website: "https://moder.fi",
		description: "Moder is a PMS system for hotels and resorts to manage and grow their tourism businesses.",
		icon: "Moder.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "moder:jsGlobal:0",
				kind: "jsGlobal",
				property: "Moder.$attrs",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moder:jsGlobal:1",
				kind: "jsGlobal",
				property: "ModerSettings.property",
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
		id: "momence",
		name: "Momence",
		website: "https://momence.com",
		description: "Momence is an all-in-one toolbox for gyms and studios, enabling scheduling of online and in-person classes, events, appointments, and experiences.",
		icon: "Momence.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "momence:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/momence\\.com\\/plugin\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "momence:dom:1",
				kind: "dom",
				selector: "div[id*='momence-plugin-lead-form']",
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
		id: "momice",
		name: "Momice",
		website: "https://www.momice.com/nl/welkom",
		description: "Momice is an event management platform that offers tools for organising and managing events.",
		icon: "Momice.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "momice:jsGlobal:0",
				kind: "jsGlobal",
				property: "webpackChunkmomice_eventsite_new",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "momice:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Momice$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "momice:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^momice$", "i"),
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
		id: "motion",
		name: "Motion",
		website: "https://www.usemotion.com",
		description: "Motion is an AI-powered tool that helps users manage their calendars, meetings, and projects.",
		icon: "Motion.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "motion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("segmentcdn\\.usemotion\\.com\\/next-integrations\\/integrations\\/vendor\\/commons\\.[a-z0-9]+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "motion:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.usemotion.com']",
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
		id: "musement",
		name: "Musement",
		website: "https://www.musement.com",
		description: "Musement is a platform that allows users to book tickets for attractions, museums, and activities, providing access to various cultural and entertainment experiences.",
		icon: "Musement.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "musement:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.musement\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "myrest",
		name: "MyRest",
		website: "https://myrest.io/",
		description: "MyRest is a reservation system for restaurants that incorporates updated guidelines for gastro marketing.",
		icon: "MyRest.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "myrest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.myrest\\.io"),
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
		id: "mytime",
		name: "MyTime",
		website: "https://mytime.com",
		description: "MyTime is a scheduling and customer engagement platform that streamlines appointment management and client interactions for businesses.",
		icon: "MyTime.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "mytime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.mytime\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mytime:jsGlobal:1",
				kind: "jsGlobal",
				property: "myTimeWidget",
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
		id: "namastay",
		name: "Namastay",
		website: "https://www.namastay.io",
		description: "Namastay is an optimized booking engine that simplifies the online guest journey to increase direct bookings.",
		icon: "Namastay.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "namastay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.namastay\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "namastay:jsGlobal:1",
				kind: "jsGlobal",
				property: "closeNamastay",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "namastay:jsGlobal:2",
				kind: "jsGlobal",
				property: "initNamastay",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "need-street",
		name: "Need Street",
		website: "https://www.needstreet.com",
		description: "Need Street is a web and mobile platform that connects healthcare providers with patients, enabling digital communication and management of healthcare services.",
		icon: "NeedStreet.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "need-street:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("data\\.needstreet\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "nightsbridge",
		name: "NightsBridge",
		website: "https://site.nightsbridge.com",
		description: "NightsBridge is a SaaS platform that provides booking and channel management tools for accommodation providers.",
		icon: "NightsBridge.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "nightsbridge:dom:0",
				kind: "dom",
				selector: "a[target='_blank'][href*='.nightsbridge.co']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "nightsbridge:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkNightsbridgeBookingForm",
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
		id: "nookal",
		name: "Nookal",
		website: "https://www.nookal.com",
		description: "Nookal is a practice management software that organizes and manages medical appointments.",
		icon: "Nookal.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "nookal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("nookal\\.bookings\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "nookal:jsGlobal:1",
				kind: "jsGlobal",
				property: "nookal",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "nookal:header:2",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("bookings\\.nookal\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "nookal:header:3",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("bookings\\.nookal\\.com", "i"),
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
		id: "noshow",
		name: "NoShow",
		website: "https://noshow.io",
		description: "NoShow is a software platform for managing restaurant reservations, enabling booking scheduling, table allocation, and customer reservation tracking.",
		icon: "NoShow.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "noshow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.noshow\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "noshow:jsGlobal:1",
				kind: "jsGlobal",
				property: "initNoShowBooking",
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
		id: "occasion",
		name: "Occasion",
		website: "https://www.getoccasion.com",
		description: "Occasion is an online booking system.",
		icon: "Occasion.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "occasion:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getoccasion\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "occasion:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.getoccasion.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "occasion:dom:2",
				kind: "dom",
				selector: "a[href*='app.getoccasion.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "occasion:jsGlobal:3",
				kind: "jsGlobal",
				property: "OCCSN.stack",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "occasion:jsGlobal:4",
				kind: "jsGlobal",
				property: "occsnMerchantToken",
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
		id: "octorate",
		name: "Octorate",
		website: "https://octorate.com",
		description: "Octorate is a hotel booking system and channel manager, facilitating management of reservations across various platforms.",
		icon: "Octorate.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "octorate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.octorate\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "octorate:jsGlobal:1",
				kind: "jsGlobal",
				property: "octorate",
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
		id: "oddle",
		name: "Oddle",
		website: "https://oddle.me",
		description: "Oddle is an online ordering system designed to streamline restaurant operations.",
		icon: "Oddle.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "oddle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("oddle-pass-wrapper\\.s3\\.ap-southeast-1"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oddle:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^enableOddlePass$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "oddle:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^enableoddlepass$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "opentable",
		name: "OpenTable",
		website: "https://restaurant.opentable.com",
		description: "OpenTable is an online restaurant-reservation service company founded by Sid Gorham, Eric Moe and Chuck Templeton on 2 July 1998 and is based in San Francisco, California.",
		icon: "OpenTable.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "opentable:dom:0",
				kind: "dom",
				selector: "iframe[src*='.opentable.com/'], form[action*='.opentable.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
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
		id: "optune",
		name: "OpTuNE",
		website: "https://www.optune.me",
		description: "OpTuNE is an online platform for booking and managing events, designed for artists, venues, and promoters.",
		icon: "OpTuNE.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "optune:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.optune\\.me"),
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
		id: "ordering",
		name: "Ordering",
		website: "https://www.ordering.co",
		description: "Ordering is a multi-store online ordering and delivery platform providing marketing and loyalty tools, along with native apps for businesses.",
		icon: "Ordering.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ordering:dom:0",
				kind: "dom",
				selector: "link[href*='apiv4.ordering.co']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "orioly",
		name: "Orioly",
		website: "https://orioly.com",
		description: "Orioly is a booking and management platform for tours and activities that automates scheduling, reservations, and related business processes.",
		icon: "Orioly.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "orioly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("book-now\\.orioly\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "orioly:jsGlobal:1",
				kind: "jsGlobal",
				property: "isOriolyLoaded",
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
		id: "otto",
		name: "Otto",
		website: "https://otto.vet/otto-flow",
		description: "Otto is a veterinary workflow platform that streamlines scheduling, communication, and payment processes in a single system.",
		icon: "Otto.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "otto:jsGlobal:0",
				kind: "jsGlobal",
				property: "otto.id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "otto:jsGlobal:1",
				kind: "jsGlobal",
				property: "ottoCareMicrosite",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "overfull",
		name: "Overfull",
		website: "https://www.overfull.fr",
		description: "Overfull is a reservation management system designed for restaurants to handle bookings, manage tables, and streamline guest scheduling.",
		icon: "Overfull.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "overfull:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.overfull\\.fr"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "overfull:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.overfull.fr']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ownerrez",
		name: "OwnerRez",
		website: "https://www.ownerrez.com",
		description: "OwnerRez is a vacation rental software platform that provides property managers with tools to manage bookings, guest communications, and property operations from a centralized system.",
		icon: "OwnerRez.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ownerrez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ownerrez\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "parkflow",
		name: "ParkFlow",
		website: "https://parkflow.io",
		description: "ParkFlow is a system for managing bookings at airport parking facilities, enabling streamlined scheduling, allocation, and tracking of parking reservations.",
		icon: "ParkFlow.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "parkflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.parkflow\\.io\\/"),
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
		id: "periodic",
		name: "Periodic",
		website: "https://periodic.is",
		description: "Periodic is a white-label scheduling system.",
		icon: "Periodic.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "periodic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/integrations\\/embed\\/periodic-embed-resize\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "periodic:dom:1",
				kind: "dom",
				selector: "#periodic-embedded-calendar-script, .periodic-embedded-calendar-window, .bookingmain__maincontent",
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
		id: "planfy",
		name: "Planfy",
		website: "https://www.planfy.com",
		description: "Planfy is a booking system for businesses designed to streamline appointment scheduling and customer management.",
		icon: "Planfy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "planfy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.planfy\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "planfy:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("www\\.planfy\\.com"),
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
		id: "planne",
		name: "Planne",
		website: "https://www.planne.com.br",
		description: "Planne is a ticketing and booking reservation system.",
		icon: "Planne.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "planne:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Planne$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "planne:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^planne$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "planning-pod",
		name: "Planning Pod",
		website: "https://www.planningpod.com",
		description: "Planning Pod is an all-in-one event management software offering integrated online solutions for planning, organizing, and executing events.",
		icon: "PlanningPod.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "planning-pod:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("run\\.planningpod\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "planway",
		name: "Planway",
		website: "https://planway.com",
		description: "Planway is an online booking system that allows businesses to manage appointments, schedule services, and streamline client reservations through a digital platform.",
		icon: "Planway.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "planway:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.planway\\.com"),
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
		id: "planyo",
		name: "Planyo",
		website: "https://www.planyo.com",
		description: "Planyo is a flexible reservation system designed to manage bookings for various services and resources across different industries.",
		icon: "Planyo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "planyo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.planyo\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "pluralo",
		name: "Pluralo",
		website: "https://pluralo.com",
		description: "Pluralo is an online booking platform that enables users to schedule and manage reservations across various services.",
		icon: "Pluralo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "pluralo:dom:0",
				kind: "dom",
				selector: "iframe[src*='widget.pluralo.com/']",
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
		id: "practo",
		name: "Practo",
		website: "https://www.practo.com",
		description: "Practo is an appointment system designed for health practitioners to manage and schedule patient appointments.",
		icon: "Practo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "practo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.practo\\.com\\/"),
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
		id: "promotix",
		name: "PromoTix",
		website: "https://www.promotix.com",
		description: "PromoTix is a ticketing software application designed to streamline event ticket sales and management.",
		icon: "PromoTix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "promotix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.promotix\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "promotix:meta:1",
				kind: "meta",
				key: "apple-mobile-web-app-title",
				valuePattern: new RegExp("^PromoTix$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "promotix:meta:2",
				kind: "meta",
				key: "apple-mobile-web-app-title",
				valuePattern: new RegExp("^promotix$", "i"),
				description: "Meta tag matches a known technology marker.",
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
		id: "quandoo",
		name: "Quandoo",
		website: "https://www.quandoo.co.uk",
		description: "Quandoo is a platform that allows users to find and reserve restaurants.",
		icon: "Quandoo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "quandoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booking-widget\\.quandoo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "quinbook",
		name: "QuinBook",
		website: "https://quinbook.com",
		description: "QuinBook is a booking and management platform for the leisure and events industry.",
		icon: "QuinBook.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "quinbook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.quinbook\\.com"),
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
		id: "race-roster",
		name: "Race Roster",
		website: "https://raceroster.com",
		description: "Race Roster is an event organization platform that provides tools for planning, managing, and tracking endurance events such as races and fundraisers.",
		icon: "RaceRoster.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "race-roster:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.raceroster\\.com\\/"),
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
		id: "radario",
		name: "Radario",
		website: "https://business.radario.ru",
		description: "Radario is a Russia-based ticketing system designed for event management and ticket sales.",
		icon: "Radario.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "radario:jsGlobal:0",
				kind: "jsGlobal",
				property: "radario.accentColor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "radario:jsGlobal:1",
				kind: "jsGlobal",
				property: "radarioButtonScript",
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
		id: "reconline",
		name: "Reconline",
		website: "http://reconline.com",
		description: "Reconline is a cloud-based online reservation system designed for hotels and hotel groups to manage bookings and availability.",
		icon: "Reconline.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "reconline:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.reconline\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "recranet",
		name: "Recranet",
		website: "https://recranet.com",
		description: "Recranet is a software solution for booking and sales, providing businesses with tools to manage trips and activities in an organized and centralized system.",
		icon: "Recranet.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "recranet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.recranet\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recranet:jsGlobal:1",
				kind: "jsGlobal",
				property: "recranetConfig",
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
		id: "recras",
		name: "Recras",
		website: "https://www.recras.com",
		description: "Recras is a Dutch-based booking engine that manages reservations, schedules, and operational data for service providers.",
		icon: "Recras.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "recras:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.recras\\.nl\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "recras:jsGlobal:1",
				kind: "jsGlobal",
				property: "RecrasBooking",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "recras:jsGlobal:2",
				kind: "jsGlobal",
				property: "submitRecrasForm",
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
		id: "resdiary",
		name: "ResDiary",
		website: "https://www.resdiary.com",
		description: "ResDiary, is an online reservation system for hospitality operators.",
		icon: "ResDiary.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "resdiary:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.resdiary\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "resdiary:dom:1",
				kind: "dom",
				selector: "iframe[src*='resdiary']",
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
		id: "resengo",
		name: "Resengo",
		website: "https://wwc.resengo.com",
		description: "Resengo is a restaurant table booking widget.",
		icon: "Resengo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "resengo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.resengo\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "resengo:dom:1",
				kind: "dom",
				selector: "iframe[src*='resengo']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "resengo:jsGlobal:2",
				kind: "jsGlobal",
				property: "wpJsonpResengoReservationWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "reservio",
		name: "Reservio",
		website: "https://www.reservio.com",
		description: "Reservio is a cloud-based appointment scheduling and online booking solution.",
		icon: "Reservio.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "reservio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.reservio\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reservio:dom:1",
				kind: "dom",
				selector: ".reservio-booking-button",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "reservio:dom:2",
				kind: "dom",
				selector: "a[href*='.reservio.com'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "reservio:dom:3",
				kind: "dom",
				selector: "a[href*='bookings.reservio.com']",
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
		id: "resmio",
		name: "Resmio",
		website: "https://www.resmio.com",
		description: "Resmio is a restaurant table booking widget.",
		icon: "Resmio.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "resmio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.resmio\\.\\w+\\/static\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "resmio:jsGlobal:1",
				kind: "jsGlobal",
				property: "ResmioButton",
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
		id: "resova",
		name: "Resova",
		website: "https://resova.com",
		description: "Resova is an online booking software.",
		icon: "Resova.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "resova:dom:0",
				kind: "dom",
				selector: "a[href*='.resova.']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "resova:jsGlobal:1",
				kind: "jsGlobal",
				property: "baseUrl",
				valuePattern: new RegExp("\\.resova\\.(?:us|eu|co\\.uk)"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "resova:jsGlobal:2",
				kind: "jsGlobal",
				property: "initResova",
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
		id: "resy",
		name: "Resy",
		website: "https://resy.com",
		description: "Resy is an technology and media company that provides an app and back-end management software for restaurant reservations.",
		icon: "Resy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "resy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.resy\\.\\w+"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "resy:jsGlobal:1",
				kind: "jsGlobal",
				property: "resyWidget",
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
		id: "revinate",
		name: "Revinate",
		website: "https://www.revinate.com",
		description: "Revinate is a direct booking platform used in the hospitality industry to help hotels increase reservations and manage guest engagement.",
		icon: "Revinate.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "revinate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("contact-api\\.inguest\\.com\\/.*\\/revinate-form\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "revinate:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("contact-api\\.inguest\\.com\\/.*\\/revinate-form\\.js"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ridebits",
		name: "RideBits",
		website: "https://ridebits.com",
		description: "RideBits is a provider of trip booking apps for ground transportation companies, offering solutions for managing bookings.",
		icon: "RideBits.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ridebits:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ridebitsapp\\.com\\/"),
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
		id: "roompot",
		name: "Roompot",
		website: "https://www.roompot.com",
		description: "Roompot is a provider of holiday parks, specialising in the management and operation of parks and campsites.",
		icon: "Roompot.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "roompot:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.roompot.com']",
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
		id: "salonist",
		name: "Salonist",
		website: "https://salonist.io",
		description: "Salonist is a salon management software.",
		icon: "Salonist.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "salonist:dom:0",
				kind: "dom",
				selector: "iframe[src*='.salonist.io/'], a[href*='.salonist.io/'][target='_blank']",
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
		id: "savvycal",
		name: "SavvyCal",
		website: "https://savvycal.com",
		description: "SavvyCal is a meeting scheduling tool.",
		icon: "SavvyCal.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "savvycal:jsGlobal:0",
				kind: "jsGlobal",
				property: "SavvyCal",
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
		id: "sched",
		name: "Sched",
		website: "https://sched.com",
		description: "Sched is an AI-powered platform that provides an all-in-one toolkit for event planning.",
		icon: "Sched.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "sched:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sched\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sched:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.sched\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "scheduleanyone",
		name: "ScheduleAnyone",
		website: "https://www.scheduleanyone.com",
		description: "Schedule Anyone is a business management system designed to streamline operations with a focus on automation.",
		icon: "ScheduleAnyone.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "scheduleanyone:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.ScheduleAnyone\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "scheduleanyone:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("www\\.scheduleanyone\\.com"),
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
		id: "seated",
		name: "Seated",
		website: "https://www.seated.com",
		description: "Seated is a platform offering a ticketing system for live events and live streams.",
		icon: "Seated.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "seated:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.seated\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "shore",
		name: "Shore",
		website: "https://shore.com",
		description: "Shore is an appointment management software designed to streamline scheduling and organization for businesses.",
		icon: "Shore.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "shore:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.shore\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shore:jsGlobal:1",
				kind: "jsGlobal",
				property: "ShoreBookingButtonAlreadyLoaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shore:jsGlobal:2",
				kind: "jsGlobal",
				property: "shoreBookingSettings",
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
		id: "showclix",
		name: "ShowClix",
		website: "https://www.showclix.com",
		description: "ShoClix is a full-service event ticketing platform that provides tools for managing ticket sales, event promotion, and attendee registration.",
		icon: "ShowClix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "showclix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.showclix\\.com"),
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
		id: "simplotel",
		name: "Simplotel",
		website: "https://www.simplotel.com",
		description: "Simplotel is a hotel booking engine.",
		icon: "Simplotel.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "simplotel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.simplotel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simplotel:jsGlobal:1",
				kind: "jsGlobal",
				property: "validateform_simplotel",
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
		id: "simplybook-me",
		name: "SimplyBook.me",
		website: "https://simplybook.me",
		description: "SimplyBook.me is an online appointment scheduling and booking software.",
		icon: "SimplyBook.me.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "simplybook-me:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.simplybook\\.(?:asia|it|me)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "simplybook-me:dom:1",
				kind: "dom",
				selector: "a[href*='.simplybook.'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "simplybook-me:jsGlobal:2",
				kind: "jsGlobal",
				property: "configSoinSimplyPush",
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
		id: "singenuity",
		name: "Singenuity",
		website: "https://singenuity.com",
		description: "Singenuity is a software platform that enables customers to book tours and attractions online through a centralized digital system.",
		icon: "Singenuity.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "singenuity:jsGlobal:0",
				kind: "jsGlobal",
				property: "__CONFIG_URL",
				valuePattern: new RegExp("book\\.singenuity\\.com"),
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
		id: "sirvoy",
		name: "Sirvoy",
		website: "https://sirvoy.com",
		description: "Sirvoy is a cloud-based hotel management software that streamlines various hotel operations, including reservation management, channel management, online booking, and property management.",
		icon: "Sirvoy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "sirvoy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("svSession"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "sirvoy:jsGlobal:1",
				kind: "jsGlobal",
				property: "SirvoyBookingWidget",
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
		id: "skedify",
		name: "Skedify",
		website: "https://calendly.com/",
		description: "Skedify is an appointment booking solution created for enterprises.",
		icon: "Skedify.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "skedify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plugin\\.skedify\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "skedify:jsGlobal:1",
				kind: "jsGlobal",
				property: "Skedify.Plugin.version",
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
		id: "skiperformance",
		name: "Skiperformance",
		website: "https://www.skiperformance.com",
		description: "Skiperformance is an online platform that provides solutions for selling lift tickets and ski passes, tailored to the needs of the ski industry.",
		icon: "Skiperformance.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "skiperformance:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.skiperformance\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "slice",
		name: "Slice",
		website: "https://slicelife.com/owners",
		description: "Slice is an online food ordering platform for independent pizzerias.",
		icon: "Slice.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "slice:dom:0",
				kind: "dom",
				selector: "a[href*='slicelife.com/restaurants/']",
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
		id: "slotti",
		name: "Slotti",
		website: "https://slotti.fi",
		description: "Slotti is a cloud-based appointment booking and checkout system tailored for service companies.",
		icon: "Slotti.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "slotti:jsGlobal:0",
				kind: "jsGlobal",
				property: "Slotti",
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
		id: "smile-virtual",
		name: "Smile Virtual",
		website: "https://www.smilevirtual.com",
		description: "Smile Virtual is a platform that enables patients to consult with a dentist remotely to explore options for enhancing their smile from home.",
		icon: "SmileVirtual.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "smile-virtual:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.smilevirtual\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smile-virtual:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.smilevirtual\\.com"),
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
		id: "sonline",
		name: "Sonline",
		website: "https://sonline.su",
		description: "Sonline is a beauty salon software developed in Russia.",
		icon: "Sonline.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "sonline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/sonline\\.su\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sonline:jsGlobal:1",
				kind: "jsGlobal",
				property: "showSonlineWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sonline:jsGlobal:2",
				kind: "jsGlobal",
				property: "sonlineWidgetOptions",
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
		id: "squadup",
		name: "SquadUP",
		website: "https://www.squadup.com",
		description: "SquadUP is a white-label event ticketing platform that enables organizers to create, manage, and sell event tickets under their own branding.",
		icon: "SquadUP.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "squadup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.squadup\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "squadup:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.squadup\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "squadup:jsGlobal:2",
				kind: "jsGlobal",
				property: "SquadupConfig.configValues",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "squire",
		name: "Squire",
		website: "https://getsquire.com",
		description: "Squire is a business management platform for barbershops, offering appointment scheduling, payment processing, and customer relationship management tools​.",
		icon: "Squire.svg",
		categories: [
			"booking-scheduling",
			"business-tools",
			"commerce-operations",
		],
		rules: [
			{
				id: "squire:jsGlobal:0",
				kind: "jsGlobal",
				property: "SquireWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "squire:jsGlobal:1",
				kind: "jsGlobal",
				property: "_squireQueryClient",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "squire:jsGlobal:2",
				kind: "jsGlobal",
				property: "_squireWidgetConfig",
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
		id: "starboard-suite",
		name: "Starboard Suite",
		website: "https://www.starboardsuite.com",
		description: "Starboard Suite is a boat-based booking system that facilitates reservations, scheduling, and customer management for maritime services.",
		icon: "StarboardSuite.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "starboard-suite:dom:0",
				kind: "dom",
				selector: "a[href*='www.starboardsuite.com'] > div#poweredby, form[action*='.starboardsuite.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
				"poa",
			],
		},
	},
	{
		id: "stay22",
		name: "Stay22",
		website: "https://www.stay22.com",
		description: "Stay22 is a travel tech company that offers affiliate revenue generation opportunities for events, ticketing and travel media publications.",
		icon: "Stay22.svg",
		categories: [
			"booking-scheduling",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "stay22:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.stay22\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "stay22:jsGlobal:1",
				kind: "jsGlobal",
				property: "Stay22.version",
				valuePattern: new RegExp("([\\d\\.]+)$"),
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
				"payg",
			],
		},
	},
	{
		id: "straiv",
		name: "Straiv",
		website: "https://straiv.io",
		description: "Straiv is a hotel software platform that digitalizes the guest journey, offering features such as check-in, guest directory, registration forms, messaging, and more.",
		icon: "Straiv.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "straiv:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.straiv\\.io"),
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
		id: "styleseat",
		name: "StyleSeat",
		website: "https://www.styleseat.com",
		description: "StyleSeat is a web-based appointment scheduling platform that enables users to book and manage beauty and personal care services online through a centralized system.",
		icon: "StyleSeat.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "styleseat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.styleseat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "superhote",
		name: "SuperHote",
		website: "https://www.superhote.com",
		description: "SuperHote is a hotel management software designed to streamline hotel bookings, reservations, and other management tasks.",
		icon: "SuperHote.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "superhote:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.superhote\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "swoogo",
		name: "Swoogo",
		website: "https://swoogo.events",
		description: "Swoogo is an event management software.",
		icon: "Swoogo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "swoogo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.swoogo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swoogo:jsGlobal:1",
				kind: "jsGlobal",
				property: "swoogoUrl",
				description: "Page-owned global matches a known technology marker.",
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
		id: "synbird",
		name: "SynBird",
		website: "https://www.synbird.com",
		description: "SynBird is a software tool that streamlines user-community interactions through online appointments, agendas, queues, and GRU services.",
		icon: "SynBird.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "synbird:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.synbird\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tablebooker",
		name: "TableBooker",
		website: "https://www.tablebooker.com",
		description: "Tablebooker is an online reservation system for restaurants.",
		icon: "TableBooker.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tablebooker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("reservations\\.tablebooker\\.\\w+\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tablebooker:dom:1",
				kind: "dom",
				selector: "iframe[src*='tablebooker'], iframe[src*='reservations.tablebooker']",
				description: "DOM contains a TableBooker reservation iframe.",
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
		id: "tablecheck",
		name: "TableCheck",
		website: "https://www.tablecheck.com",
		description: "TableCheck is a restaurant table booking widget.",
		icon: "TableCheck.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tablecheck:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tc_widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tablecheck:dom:1",
				kind: "dom",
				selector: "form[action*='tablecheck']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "tablefever",
		name: "TableFever",
		website: "https://www.tablefever.com",
		description: "TableFever is a platform that helps locate top restaurants, make reservations, and explore nearby dining options for a curated culinary experience.",
		icon: "TableFever.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tablefever:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tablefever\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tablefever:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.tablefever\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tableo",
		name: "Tableo",
		website: "https://tableo.com",
		description: "Tableo is a platform that streamlines restaurant reservation management, optimizing booking schedules and improving table utilization.",
		icon: "Tableo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tableo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tableo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tableo:dom:1",
				kind: "dom",
				selector: "iframe[src*='.tableo.com']",
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
	},
	{
		id: "tashi",
		name: "Tashi",
		website: "https://tashi.travel",
		description: "Tashi is a web-based booking software that enables accommodation providers and tour operators to manage reservations and schedules.",
		icon: "Tashi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tashi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("meet\\.tashi\\.travel"),
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
		id: "teamup",
		name: "TeamUp",
		website: "https://goteamup.com",
		description: "TeamUp is fitness management software catering to boutique gyms, studios, and fitness boxes worldwide.",
		icon: "TeamUp.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "teamup:dom:0",
				kind: "dom",
				selector: "a[href*='//goteamup.com/']",
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
		id: "termed",
		name: "TerMed",
		website: "https://www.termed.de",
		description: "TerMed is a platform that simplifies online booking of medical appointments.",
		icon: "TerMed.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "termed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.termed\\.de"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "termed:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.termed\\.de"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "thecut",
		name: "theCut",
		website: "https://thecut.co",
		description: "theCut is a barber booking app that allows users to schedule appointments with barbers through a centralized digital platform.",
		icon: "theCut.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "thecut:dom:0",
				kind: "dom",
				selector: "iframe[src*='.thecut.co']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "thefork",
		name: "Thefork",
		website: "https://www.thefork.com",
		description: "Thefork is a restaurant booking, managing system.",
		icon: "Thefork.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "thefork:dom:0",
				kind: "dom",
				selector: "iframe[data-src*='lafourchette']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "thefork:dom:1",
				kind: "dom",
				selector: "iframe[src*='lafourchette']",
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
	},
	{
		id: "tickera",
		name: "Tickera",
		website: "https://tickera.com",
		description: "Tickera is a WordPress plugin that enables event organizers to sell tickets directly from their websites.",
		icon: "Tickera.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tickera:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/wp-content\\/plugins\\/tickera\\/js\\/"),
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
			cpe: "cpe:2.3:a:tickera:tickera:*:*:*:*:*:wordpress:*:*",
		},
		requires: [
			"wordpress",
		],
	},
	{
		id: "ticketbro",
		name: "Ticketbro",
		website: "https://www.ticketbro.com",
		description: "Ticketbro is a mobile ticket booking system that enables users to browse, select, and purchase event or travel tickets directly from a smartphone.",
		icon: "Ticketbro.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ticketbro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ticketbro\\.(tools|io)(?:\\/widget)?\\/widget\\.min\\.js"),
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
		id: "ticketmeo",
		name: "Ticketmeo",
		website: "https://www.ticketmeo.com",
		description: "Ticketmeo is a platform for managing live and virtual events, formerly known as Ploxel, that enables users to sell tickets online.",
		icon: "Ticketmeo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ticketmeo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/plugins\\/ploxel\\/js\\/ploxel\\.js"),
				description: "Script source URL matches a known technology marker.",
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
		id: "ticketspice",
		name: "TicketSpice",
		website: "https://www.ticketspice.com",
		description: "TicketSpice is a ticketing software platform that enables businesses to sell tickets online and manage event registrations through a web-based interface.",
		icon: "TicketSpice.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ticketspice:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.ticketspice\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "ticketure",
		name: "Ticketure",
		website: "https://tixtrack.com/ticketure-timed-entry-ticketing",
		description: "Ticketure is a cloud-based admission ticketing system designed for arts and cultural organizations with timed entry requirements.",
		icon: "Ticketure.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ticketure:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Built by Ticketure", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "ticketure:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^built by ticketure", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "timepad",
		name: "Timepad",
		website: "https://afisha.timepad.ru",
		description: "Timepad is a Russian events system for creating, managing, and ticketing events online.",
		icon: "Timepad.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "timepad:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.timepad\\.ru"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "timetap",
		name: "TimeTap",
		website: "https://timetap.com",
		description: "TimeTap is a scheduling automation platform that helps organizations manage and customize appointment booking workflows to streamline scheduling operations.",
		icon: "TimeTap.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "timetap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.timetap\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "timetap:dom:1",
				kind: "dom",
				selector: "iframe[src*='www.timetap.com']",
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
		id: "timify",
		name: "Timify",
		website: "https://www.timify.com",
		description: "Timify is an online scheduling and resource management software for small, medium and large businesses.",
		icon: "Timify.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "timify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.timify\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "timify:jsGlobal:1",
				kind: "jsGlobal",
				property: "TimifyWidget",
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
		id: "timma",
		name: "Timma",
		website: "https://timma.no",
		description: "Timma is a hair and salon booking system that enables users to schedule appointments with salons and stylists through an online platform.",
		icon: "Timma.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "timma:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.timma\\.no"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "timma:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Timma", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "timma:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^timma", "i"),
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
		id: "tito",
		name: "Tito",
		website: "https://ti.to",
		description: "Tito is an event software platform that provides a solution for selling tickets online.",
		icon: "Tito.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tito:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.tito\\.io\\/v([\\d.]+)"),
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
				"payg",
			],
		},
	},
	{
		id: "tix",
		name: "Tix",
		website: "https://www.tix.com",
		description: "Tix is a system designed for managing event tickets, allowing users to organize, distribute, and track tickets.",
		icon: "Tix.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.secure-tix\\.com\\/"),
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
		id: "tourcms",
		name: "TourCMS",
		website: "https://www.tourcms.com",
		description: "TourCMS is a platform designed for tour and activity operators, offering solutions for managing online and offline bookings and distribution.",
		icon: "TourCMS.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tourcms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mp\\.tourcms\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tourcms:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("mp\\.tourcms\\.com"),
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
		id: "traveljoy",
		name: "TravelJoy",
		website: "https://traveljoy.com",
		description: "TravelJoy is an all-in-one platform for travel advisors, providing tools for managing client bookings, payments, and communication.",
		icon: "TravelJoy.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "traveljoy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("traveljoy\\.com"),
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
		id: "travello",
		name: "Travello",
		website: "https://www.travello.com",
		description: "Travello is a booking platform that provides discounted travel options, tours, and holiday packages across multiple destinations worldwide.",
		icon: "Travello.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "travello:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.travelloapp\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tripleseat",
		name: "Tripleseat",
		website: "https://tripleseat.com",
		description: "Tripleseat is an event management platform that streamlines venue booking, guest communication, and event coordination for restaurants, hotels, and hospitality teams.",
		icon: "Tripleseat.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tripleseat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.tripleseat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "triptease",
		name: "Triptease",
		website: "https://www.triptease.com",
		description: "Triptease is a SaaS that provides digital tools that create better experiences and relationships between hotels and guests.",
		icon: "Triptease.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "triptease:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.triptease\\.io\\/"),
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
		id: "trumba",
		name: "Trumba",
		website: "https://www.trumba.com",
		description: "Trumba offers web-hosted event calendar software for publishing online, interactive, calendars of events.",
		icon: "Trumba.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "trumba:dom:0",
				kind: "dom",
				selector: "a[href*='www.trumba.com/calendars/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "trumba:jsGlobal:1",
				kind: "jsGlobal",
				property: "$Trumba",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trumba:jsGlobal:2",
				kind: "jsGlobal",
				property: "$Trumba.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "trumba:jsGlobal:3",
				kind: "jsGlobal",
				property: "Trumba",
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
		id: "tucalendi",
		name: "TuCalendi",
		website: "https://www.tucalendi.com",
		description: "TuCalendi is an online appointment scheduling tool for meetings.",
		icon: "TuCalendi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "tucalendi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tucalendi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tucalendi:jsGlobal:1",
				kind: "jsGlobal",
				property: "Tucalendi.initConfig",
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
		id: "turitop",
		name: "TuriTop",
		website: "https://www.turitop.com",
		description: "TuriTop is a booking software for tours and activities that streamlines scheduling and reservation management through an automated interface.",
		icon: "TuriTop.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "turitop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.turitop\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "turitop:jsGlobal:1",
				kind: "jsGlobal",
				property: "httpTuritop",
				valuePattern: new RegExp("app\\.turitop\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "turitop:jsGlobal:2",
				kind: "jsGlobal",
				property: "turitopBuild",
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
		id: "typo-00",
		name: "Typo 00",
		website: "https://www.typo00.com",
		description: "Typo00 is a digital ordering system designed for restaurants to streamline order management.",
		icon: "Typo00.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "typo-00:dom:0",
				kind: "dom",
				selector: "link[href*='typo00-public.s3']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "uplisting",
		name: "Uplisting",
		website: "https://www.uplisting.io",
		description: "Uplisting is a property management system for Vacation Rental owners, operators and managers.",
		icon: "Uplisting.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "uplisting:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("Uplisting", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "uplisting:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("uplisting", "i"),
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
		id: "upserve",
		name: "Upserve",
		website: "https://onlineordering.upserve.com",
		description: "Upserve is a restaurant management solution featuring an Android or iOS-based point-of-sale system, online ordering, contactless payments, automated inventory management, sales analytics, and more.",
		icon: "Upserve.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "upserve:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.upserve\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "upserve:dom:1",
				kind: "dom",
				selector: "a[href*='app.upserve.com/']",
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
		id: "ureserv",
		name: "Ureserv",
		website: "https://ureserv.com",
		description: "Ureserv is an online restaurant reservation and table management system that enables booking, availability tracking, and seating coordination for dining establishments.",
		icon: "Ureserv.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ureserv:dom:0",
				kind: "dom",
				selector: "iframe[src*='www.ureserv.com/']",
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
		id: "vacation-labs",
		name: "Vacation Labs",
		website: "https://www.vacationlabs.com",
		description: "Vacation Labs is a travel management platform with a fully integrated booking engine that is mobile responsive.",
		icon: "VacationLabs.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vacation-labs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.vacationlabs\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "vacation-labs:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.vacationlabs\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "vagaro",
		name: "Vagaro",
		website: "https://www.vagaro.com/pro/schedulicity",
		description: "Vagaro is a software platform that enables businesses to manage and book appointments online through a centralized scheduling system.",
		icon: "Vagaro.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vagaro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.schedulicity\\.com"),
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
		id: "vectera",
		name: "Vectera",
		website: "https://go.vectera.com",
		description: "Vectera is an online client meeting booking system that enables scheduling, managing, and organizing virtual appointments through a web-based platform.",
		icon: "Vectera.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vectera:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.vectera\\.com"),
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
		id: "vello",
		name: "Vello",
		website: "https://www.vello.fi",
		description: "Vello is an online booking tool that automates business bookings.",
		icon: "Vello.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vello:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.vello\\.fi\\/"),
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
		id: "ventrata",
		name: "Ventrata",
		website: "https://ventrata.com",
		description: "Ventrata is a booking platform designed for high volume tours and attractions, offering all-in-one ticketing systems.",
		icon: "Ventrata.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "ventrata:dom:0",
				kind: "dom",
				selector: "script#ventratajs-js",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "ventrata:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ventrata.version",
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
				"high",
				"recurring",
			],
		},
	},
	{
		id: "venuesumo",
		name: "VenueSumo",
		website: "https://venuesumo.com",
		description: "VenueSumo is a cloud-based venue management platform that centralizes sales, booking, and operational workflows to support revenue tracking and optimize administrative efficiency.",
		icon: "VenueSumo.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "venuesumo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.venuesumo\\.app"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "venuesumo:jsGlobal:1",
				kind: "jsGlobal",
				property: "venueSumo",
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
		id: "vertaflow-booking",
		name: "VertaFlow Booking",
		website: "https://vertaflow.io",
		description: "VertaFlow Booking is an embeddable appointment-scheduling widget that syncs bookings to VertaFlow CRM.",
		icon: "VertaFlow.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vertaflow-booking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vertaflow\\.io\\/v1\\/book\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "vertical-booking",
		name: "Vertical Booking",
		website: "https://verticalbooking.com",
		description: "Vertical Booking is a central reservation system (CRS) that provides modular tools for managing bookings.",
		icon: "VerticalBooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vertical-booking:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("reservations\\.verticalbooking\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "vfairs",
		name: "vFairs",
		website: "https://www.vfairs.com",
		description: "vFairs is an event management platform for organizing customizable in-person and virtual events.",
		icon: "vFairs.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "vfairs:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("vfairs\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "vfairs:dom:1",
				kind: "dom",
				selector: "scripts[data-domain*='vfairscombined.com']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:vfairs:vfairs:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "visbook",
		name: "VisBook",
		website: "https://visbook.com",
		description: "VisBook is a property management system used by hotels and accommodation providers to manage reservations, daily operations, and guest-related activities in a centralized platform.",
		icon: "VisBook.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "visbook:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("reservations\\.visbook\\.com\\/"),
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
		id: "waverez",
		name: "WaveRez",
		website: "https://waverez.com",
		description: "WaveRez is an online booking software platform designed for the watersport and boat tour industry.",
		icon: "WaveRez.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "waverez:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("reservations\\.waverez\\.com"),
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
		id: "weebnb",
		name: "WeeBnB",
		website: "https://www.weebnb.com",
		description: "WeeBnB is a rental optimization platform that provides a website for managing and promoting vacation rentals.",
		icon: "WeeBnB.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "weebnb:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^WeeBnB$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "weebnb:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^weebnb$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "weezevent",
		name: "Weezevent",
		website: "https://weezevent.com",
		description: "Weezevent is an online ticketing and event management solution that enables organizers to sell tickets, manage registrations, and track attendance for events.",
		icon: "Weezevent.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "weezevent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.weezevent\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "wetravel",
		name: "WeTravel",
		website: "https://www.wetravel.com",
		description: "WeTravel is a platform providing booking and payment solutions tailored for travel companies.",
		icon: "WeTravel.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "wetravel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wetravel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wetravel:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.wetravel.com/']",
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
		id: "wherewolf",
		name: "Wherewolf",
		website: "https://getwherewolf.com",
		description: "Wherewolf is a platform that offers capture waivers, facilitates drive bookings, and automates review processes to streamline business operations.",
		icon: "Wherewolf.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "wherewolf:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.wherewolf\\.co"),
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
		id: "whova",
		name: "Whova",
		website: "https://whova.com",
		description: "Whova is an all-in-one event management platform supporting in-person, hybrid, and virtual events.",
		icon: "Whova.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "whova:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/whova\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "whova:header:1",
				kind: "header",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("whova\\.com", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "whova:header:2",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("whova\\.com", "i"),
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
		id: "winearound",
		name: "WINEAROUND",
		website: "https://winearound.com",
		description: "WINEAROUND is a booking software that enables businesses to manage online and offline reservations, schedule appointments, streamline operations, and enhance customer service for guided tours and activities.",
		icon: "WineAround.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "winearound:jsGlobal:0",
				kind: "jsGlobal",
				property: "_winearoundDefaultLanguage",
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
		id: "witbooking",
		name: "Witbooking",
		website: "https://www.witbooking.com",
		description: "Witbooking is a hotel booking engine that enables the management of reservations, availability, and pricing through an online platform.",
		icon: "Witbooking.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "witbooking:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.witbooking\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "witbooking:dom:1",
				kind: "dom",
				selector: "form[action*='engine.witbooking.com']",
				description: "DOM selector matches a known technology marker.",
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
		id: "wubook",
		name: "WuBook",
		website: "https://wubook.net",
		description: "WuBook is a software platform that allows efficient management of rooms and rates for hospitality operations.",
		icon: "WuBook.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "wubook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/wubook\\.net\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wubook:jsGlobal:1",
				kind: "jsGlobal",
				property: "_WuBook",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "wubook:jsGlobal:2",
				kind: "jsGlobal",
				property: "wbWuBookUrl",
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
		id: "x-ai",
		name: "X.ai",
		website: "https://x.ai",
		description: "X.ai is a scheduling tool that organizes meeting times and improves lead conversion by adding embedded booking buttons to websites or within live chat applications.",
		icon: "X.ai.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "x-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:cdn)?x\\.ai\\/.*\\/xdotai-embed\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "x-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "xdotaiAction",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "x-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "xdotaiButton",
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
		id: "xtime",
		name: "Xtime",
		website: "https://xtime.com",
		description: "Xtime is a company that provides automotive service scheduling and management solutions primarily for car dealerships and automotive service centers.",
		icon: "Xtime.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "xtime:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.xtime\\.com\\/scheduling"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xtime:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("xtime\\.net\\.au"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "xtime:dom:2",
				kind: "dom",
				selector: "a[data-modified-by='xtime']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "xtime:dom:3",
				kind: "dom",
				selector: "iframe[src*='xtime.net.au']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "xtime:dom:4",
				kind: "dom",
				selector: "iframe[src*='x-time']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "xtime:jsGlobal:5",
				kind: "jsGlobal",
				property: "xtime",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xtime:header:6",
				kind: "header",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("\\.xtime\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "xtime:header:7",
				kind: "header",
				key: "access-control-allow-origin",
				valuePattern: new RegExp("\\.xtime\\.net", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "xtime:dom:8",
				kind: "dom",
				selector: "a[data-modified-by='xtime'],iframe[src*='xtime.net.au'],iframe[src*='x-time']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"poa",
			],
		},
	},
	{
		id: "yachtsys",
		name: "YachtSys",
		website: "https://www.yachtsys.com",
		description: "YachtSys is a booking management system.",
		icon: "YachtSys.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "yachtsys:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("apps\\.yachtsys\\.com\\/"),
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
		id: "yelp-reservations",
		name: "Yelp Reservations",
		website: "https://yelp.com",
		description: "Yelp Reservations is a cloud-based restaurant management system.",
		icon: "Yelp.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "yelp-reservations:dom:0",
				kind: "dom",
				selector: "iframe[src*='yelp']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "yoplanning",
		name: "YoPlanning",
		website: "https://yoplanning.pro",
		description: "YoPlanning is an online software designed for booking and planning activities.",
		icon: "YoPlanning.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "yoplanning:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booking\\.yoplanning\\.pro"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "youcanbookme",
		name: "YouCanBookMe",
		website: "https://youcanbook.me",
		description: "YouCanBookMe is an online scheduling solution for small businesses that enables appointment booking, calendar integration, and automated availability management.",
		icon: "YouCanBookMe.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "youcanbookme:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.youcanbook\\.me"),
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
		id: "zen-planner",
		name: "Zen Planner",
		website: "https://zenplanner.com",
		description: "Zen Planner is a software platform designed for fitness and wellness businesses, offering features such as membership management, class scheduling, and billing automation.",
		icon: "Zen Planner.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zen-planner:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zenplanner\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zen-planner:jsGlobal:1",
				kind: "jsGlobal",
				property: "zenplanner",
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
		id: "zenbooker",
		name: "Zenbooker",
		website: "https://zenbooker.com",
		description: "Zenbooker is a system that enables users to book appointments or reservations online.",
		icon: "Zenbooker.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zenbooker:jsGlobal:0",
				kind: "jsGlobal",
				property: "Zenbooker.BadgeWidget",
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
		id: "zenchef",
		name: "Zenchef",
		website: "https://www.zenchef.com",
		description: "Zenchef is a restaurant management software solution that simplifies the customer restaurant experience.",
		icon: "Zenchef.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zenchef:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.zenchef\\.com\\/"),
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
		id: "zenmaid",
		name: "ZenMaid",
		website: "https://get.zenmaid.com",
		description: "ZenMaid is a residential cleaning scheduling software that helps manage appointments.",
		icon: "ZenMaid.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zenmaid:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.zenmaid\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "zenoti",
		name: "Zenoti",
		website: "https://www.zenoti.com/",
		description: "Zenoti is a cloud-based business software for spas, salons, and medspas, providing tools for managing appointment books, employee scheduling, and enabling online booking.",
		icon: "Zenoti.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zenoti:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.zenoti\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "zenoti:meta:1",
				kind: "meta",
				key: "Author",
				valuePattern: new RegExp("^zenoti$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "zenoti:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^zenoti$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"poa",
			],
		},
	},
	{
		id: "zocdoc",
		name: "Zocdoc",
		website: "https://www.zocdoc.com",
		description: "Zocdoc is a New York City-based company offering an online service that allows people to find and book in-person or telemedicine appointments for medical or dental care.",
		icon: "Zocdoc.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zocdoc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("offsiteschedule\\.zocdoc\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zocdoc:dom:1",
				kind: "dom",
				selector: "a[href*='www.zocdoc.com'][target='_blank']",
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
		id: "zonal-bookings",
		name: "Zonal Bookings",
		website: "https://www.zonal.co.uk/products/bookings",
		description: "Zonal Bookings is a reservations platform that enables hospitality businesses to centralize and manage all booking activities without charging commissions.",
		icon: "Zonal.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zonal-bookings:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.reservationDetails\\.zonalBookingReference"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "zonal-bookings:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.reservationdetails\\.zonalbookingreference"),
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
		id: "zozi",
		name: "Zozi",
		website: "https://zozi.com",
		description: "Zozi is a bookings widget and calendar used to manage reservations, availability, and scheduling.",
		icon: "Zozi.svg",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zozi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("a\\.zozi\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zuppler",
		name: "Zuppler",
		website: "https://www.zuppler.com",
		description: "Zuppler is a complete and branded online ordering solution for restaurants and caterers with multi-locations.",
		icon: "Zuppler.png",
		categories: [
			"booking-scheduling",
		],
		rules: [
			{
				id: "zuppler:dom:0",
				kind: "dom",
				selector: "link[href*='.zuppler.com/']",
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
] as const satisfies readonly TechnologyDefinition[];
