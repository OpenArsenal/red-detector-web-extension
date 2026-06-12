import type { TechnologyDefinition } from '../types';

export const businessToolsTechnologyDefinitions = [
	{
		id: "7shifts",
		name: "7Shifts",
		website: "https://www.7shifts.com",
		description: "7Shifts is an all-in-one team management platform designed to streamline restaurant operations, providing tools for scheduling, communication, and task management to simplify day-to-day activities for both managers and staff.",
		icon: "7Shifts.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "7shifts:dom:0",
				kind: "dom",
				selector: "a[href*='7shifts.com/'] > img[src*='.7shifts.com/']",
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
		id: "agile-crm",
		name: "Agile CRM",
		website: "https://www.agilecrm.com",
		description: "Agile CRM is a software for Customer Relationship Management (CRM) that provides sales and marketing automation features for businesses.",
		icon: "AgileCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "agile-crm:pageGlobal:0",
				kind: "pageGlobal",
				property: "AgileCRMTracker",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "agile-crm:pageGlobal:1",
				kind: "pageGlobal",
				property: "Agile_API",
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
		id: "agorize",
		name: "Agorize",
		website: "https://www.agorize.com",
		description: "Agorize is a platform that enables businesses to identify and connect with talent through innovation challenges and collaborative programs.",
		icon: "Agorize.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "agorize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.fs\\.agorize\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "aidbase",
		name: "Aidbase",
		website: "https://www.aidbase.ai",
		description: "Aidbase is an AI-driven support ecosystem designed to enhance user experiences.",
		icon: "Aidbase.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "aidbase:pageGlobal:0",
				kind: "pageGlobal",
				property: "AIDBASE_CHATBOT_ID",
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
		id: "airship-crm",
		name: "Airship CRM",
		website: "https://airship.co.uk",
		description: "Airship CRM is a hospitality-focused platform that centralizes data, enables tailored email communication, and enhances visit frequency.",
		icon: "AirshipCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "airship-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.airship\\.co\\.uk/"),
				description: "Script source URL matches a known technology marker."
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
		id: "aiva",
		name: "Aiva",
		website: "https://hireaiva.com",
		description: "Aiva is a real estate lead conversion platform that qualifies and engages leads 24/7.",
		icon: "Aiva.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "aiva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hireaiva\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "aiva:pageGlobal:1",
				kind: "pageGlobal",
				property: "__AivaLiveChat",
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
		id: "akaunting",
		name: "Akaunting",
		website: "https://akaunting.com",
		description: "Akaunting is a free and online accounting software.",
		icon: "akaunting.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "akaunting:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+akaunting-green\\.css"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "akaunting:html:1",
				kind: "html",
				pattern: new RegExp("Powered By Akaunting: <a [^>]*href=\"https?://(?:www\\.)?akaunting\\.com[^>]+>"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "akaunting:responseHeader:2",
				kind: "responseHeader",
				key: "X-Akaunting",
				valuePattern: new RegExp("^Free Accounting Software$"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"laravel"
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:akaunting:akaunting:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "alumni-channel",
		name: "Alumni Channel",
		website: "https://alumnichannel.com",
		description: "Alumni Channel is a platform facilitating organization and communication with alumni and members.",
		icon: "AlumniChannel.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "alumni-channel:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("Alumni Channel - www.alumnichannel.com"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"high",
				"recurring"
			]
		}
	},
	{
		id: "amilia",
		name: "Amilia",
		website: "https://www.amilia.com",
		description: "Amilia is a membership management software.",
		icon: "Amilia.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "amilia:pageGlobal:0",
				kind: "pageGlobal",
				property: "AMILIA",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amilia:pageGlobal:1",
				kind: "pageGlobal",
				property: "AMILIA_APP",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amilia:meta:2",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Amilia$"),
				description: "Meta tag matches a known technology marker."
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
		id: "amocrm",
		name: "amoCRM",
		website: "https://www.amocrm.com",
		description: "amoCRM is a web-based customer relationship management software solution.",
		icon: "amoCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "amocrm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.amocrm\\.(?:ru|com)"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "amocrm:pageGlobal:1",
				kind: "pageGlobal",
				property: "AMOCRM",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amocrm:pageGlobal:2",
				kind: "pageGlobal",
				property: "AMO_PIXEL_CLIENT",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amocrm:pageGlobal:3",
				kind: "pageGlobal",
				property: "amoFormsWidget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "amocrm:pageGlobal:4",
				kind: "pageGlobal",
				property: "amoSocialButton",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "anexis",
		name: "Anexis",
		website: "https://anex.is",
		description: "Anexis is a software provider offering tools that streamline communication, sales, and management processes for lodging businesses.",
		icon: "Anexis.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "anexis:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloud\\.anex\\.is"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "anthology-encompass",
		name: "Anthology Encompass",
		website: "https://www.anthology.com/products/lifecycle-engagement/alumni-and-advancement/anthology-encompass",
		description: "Anthology Encompass is a constituent engagement management provider or educational institutions that provides modules to help you manage events, websites and content, data, and more.",
		icon: "Anthology.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "anthology-encompass:url:0",
				kind: "url",
				pattern: new RegExp("https.+\\.imodules\\.com/s/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "anthology-encompass:dom:1",
				kind: "dom",
				selector: "a[href*='.imodules.com/s/']",
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
		id: "apodle",
		name: "Apodle",
		website: "https://apodle.com",
		description: "Apodle is a generic business management solution designed to support a range of operational and administrative functions across various industries.",
		icon: "Apodle.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "apodle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.apodle\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "apodle:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.apodle\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "appcast",
		name: "Appcast",
		website: "https://www.appcast.io",
		description: "Appcast is a service that allows job advertisements on a 'pay-per-applicant' basis across a network of career and consumer sites, instead of the traditional per-click or per-post charges.",
		icon: "Appcast.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "appcast:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("click\\.appcast\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "applicantstack",
		name: "ApplicantStack",
		website: "https://www.applicantstack.com",
		description: "ApplicantStack is a full-service applicant tracking system that automates and streamlines all stages of the hiring process.",
		icon: "ApplicantStack.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "applicantstack:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.applicantstack\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "applicantstack:dom:1",
				kind: "dom",
				selector: "a[href*='.applicantstack.com/']",
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
		id: "arketa",
		name: "Arketa",
		website: "https://www.arketa.com",
		description: "Arketa is a business platform for the fitness and wellness industry, providing tools to manage operations and support business growth.",
		icon: "Arketa.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "arketa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.arketa\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "arketa:pageGlobal:1",
				kind: "pageGlobal",
				property: "ArketaChatbot",
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
		id: "armin",
		name: "Armin",
		website: "https://chatarmin.com",
		description: "Armin is a customer experience software solution for ecommerce that centralizes interaction data, supports service management, and helps maintain online operations.",
		icon: "Armin.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "armin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chatarmin\\.com/"),
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
		id: "arnica",
		name: "Arnica",
		website: "https://arnica.pro",
		description: "Arnica is a CRM system that consolidates customer relationship processes into a single platform.",
		icon: "Arnica.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "arnica:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.arnica\\.pro"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "arnica:pageGlobal:1",
				kind: "pageGlobal",
				property: "arnicaBooking.init",
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
		id: "arosoftware",
		name: "AroSoftware",
		website: "https://www.arosoftware.com",
		description: "AroSoftware provides real estate CRM and website design solutions.",
		icon: "AroSoftware.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "arosoftware:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^AroSoftware Pty Ltd$"),
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
		id: "astute-solutions",
		name: "Astute Solutions",
		website: "https://astutesolutions.com",
		description: "Astute Solutions is a customer engagement software.",
		icon: "Astute Solutions.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "astute-solutions:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.iperceptions\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "astute-solutions:dom:1",
				kind: "dom",
				selector: "iframe[src*='.iperceptions.com'], link[href*='.iperceptions.com']",
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
		id: "automabots",
		name: "Automabots",
		website: "https://automabots.com",
		description: "Automabots is an automated intelligent workforce designed to match home buyers with suitable properties.",
		icon: "Automabots.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "automabots:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.automabots\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "automabots:pageGlobal:1",
				kind: "pageGlobal",
				property: "automabots.appRoot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "automabots:pageGlobal:2",
				kind: "pageGlobal",
				property: "automabotsWebpackJsonp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "autovitals",
		name: "AutoVitals",
		website: "https://www.autovitals.com",
		description: "AutoVitals is a shop productivity, acquisition, and retention tool designed for the automotive industry.",
		icon: "AutoVitals.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "autovitals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("docs\\.autovitals\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "avature",
		name: "Avature",
		website: "https://www.avature.net",
		description: "Avature is a talent acquisition and talent management platform that provides solutions for recruitment, onboarding, and employee engagement.",
		icon: "Avature.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "avature:meta:0",
				kind: "meta",
				key: "avature.portal.id",
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "avature:meta:1",
				kind: "meta",
				key: "avature.portal.name",
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"recurring"
			]
		}
	},
	{
		id: "avizi",
		name: "Avizi",
		website: "https://www.avizi.fr",
		description: "Avizi is a tourism CRM system from France designed to manage customer relationships, bookings, and marketing for travel businesses.",
		icon: "Avizi.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "avizi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.avizi\\.fr"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "avizi:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.avizi\\.fr"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "backbase",
		name: "Backbase",
		website: "https://www.backbase.com",
		description: "Backbase is an engagement banking platform, facilitating the modernization of core customer interactions and the restructuring of business operations with a customer-centric approach.",
		icon: "Backbase.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "backbase:pageGlobal:0",
				kind: "pageGlobal",
				property: "backbase_com_2013_aurora",
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
		id: "bamboohr",
		name: "BambooHR",
		website: "https://www.bamboohr.com",
		description: "BambooHR is an American technology company that provides human resources software as a service.",
		icon: "BambooHR.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bamboohr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bamboohr\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bamboohr:dom:1",
				kind: "dom",
				selector: "a[href*='.bamboohr.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bamboohr:pageGlobal:2",
				kind: "pageGlobal",
				property: "scrollToBambooHR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bamboohr:responseHeader:3",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.bamboohr\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "batchbook",
		name: "Batchbook",
		website: "https://batchbook.com",
		description: "Batchbook is a customer relationship management (CRM) tool designed for small businesses.",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "batchbook:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.batchbook\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "batchbook:dom:1",
				kind: "dom",
				selector: "iframe[src*='.batchbook.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "beamery",
		name: "Beamery",
		website: "https://beamery.com",
		description: "Beamery is an AI platform that helps organizations transform their workforce by optimizing talent acquisition, development, and management through data-driven insights and automation.",
		icon: "Beamery.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "beamery:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.beamery\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "beamery:responseHeader:1",
				kind: "responseHeader",
				key: "Access-Control-Allow-Headers",
				valuePattern: new RegExp("^X-BEAMERY"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "beddy",
		name: "Beddy",
		website: "https://www.beddy.io",
		description: "Beddy is a hospitality management software designed to streamline operations, enhance guest experiences, and improve efficiency in hotels and other hospitality establishments.",
		icon: "Beddy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "beddy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.beddy\\.io/"),
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
		id: "bettermode",
		name: "Bettermode",
		website: "https://bettermode.com",
		description: "Bettermode is an all-in-one community engagement platform designed to help businesses streamline the customer experience and build better relationships.",
		icon: "Bettermode.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bettermode:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("bettermode\\.com"),
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
		id: "bevy",
		name: "Bevy",
		website: "https://bevy.com",
		description: "Bevy is a platform designed to elevate communities by transforming engagement into measurable enterprise return on investment (ROI).",
		icon: "Bevy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bevy:pageGlobal:0",
				kind: "pageGlobal",
				property: "_BEVY_LANGUAGE_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bevy:pageGlobal:1",
				kind: "pageGlobal",
				property: "_BEVY_SETTINGS_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bevy:pageGlobal:2",
				kind: "pageGlobal",
				property: "_BEVY_STYLES_",
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
		id: "bigin",
		name: "Bigin",
		website: "https://en.bigin.io",
		description: "Bigin is a cloud-based customer relationship management (CRM) software.",
		icon: "Bigin.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bigin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.bigin\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bigin:pageGlobal:1",
				kind: "pageGlobal",
				property: "BIGIN_SDK_API",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bigin:pageGlobal:2",
				kind: "pageGlobal",
				property: "bigin._checkDataSize",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bigin:pageGlobal:3",
				kind: "pageGlobal",
				property: "biginCafe24DisableOptions",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bigin:pageGlobal:4",
				kind: "pageGlobal",
				property: "bigin_search",
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
		id: "bite",
		name: "BITE",
		website: "https://www.b-ite.de",
		description: "BITE is an e-recruiting software platform that supports digital recruitment processes, including candidate sourcing, application management, and hiring workflow automation.",
		icon: "BITE.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bite:pageGlobal:0",
				kind: "pageGlobal",
				property: "Bite.JobAdsLoaderFilterCreator",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bite:pageGlobal:1",
				kind: "pageGlobal",
				property: "BiteJobsApiV5.BUILD",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bitrix24",
		name: "Bitrix24",
		website: "https://www.bitrix24.com",
		description: "Bitrix24 is a set of tools for the organization and management of business processes.",
		icon: "Bitrix24.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bitrix24:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.bitrix24\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bitrix24:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bitrix24\\..+/bitrix/js/crm/form_loader\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bitrix24:pageGlobal:2",
				kind: "pageGlobal",
				property: "Bitrix24FormLoader",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bitrix24:pageGlobal:3",
				kind: "pageGlobal",
				property: "Bitrix24FormObject",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bitrix24:pageGlobal:4",
				kind: "pageGlobal",
				property: "b24Tracker",
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
			],
			cpe: "cpe:2.3:a:bitrix24:bitrix24:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "bnovo",
		name: "Bnovo",
		website: "https://bnovo.ru",
		description: "Bnovo is a hotel industry management system.",
		icon: "Bnovo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bnovo:pageGlobal:0",
				kind: "pageGlobal",
				property: "Bnovo_Widget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "bnovo:pageGlobal:1",
				kind: "pageGlobal",
				property: "_bnovo_widget",
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
		id: "bomb-bomb",
		name: "Bomb Bomb",
		website: "https://bombbomb.com",
		description: "BombBomb is a CRM platform that integrates lead capture and video messaging to manage customer relationships and enhance engagement throughout the sales process.",
		icon: "BombBomb.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bomb-bomb:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.bombbomb\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "bonsai",
		name: "Bonsai",
		website: "https://www.hellobonsai.com",
		description: "Bonsai is a platform that creates, sends, and tracks proposals online for streamlined client communication and project management.",
		icon: "Bonsai.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bonsai:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.hellobonsai.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bonsai:meta:1",
				kind: "meta",
				key: "apple-mobile-web-app-title",
				valuePattern: new RegExp("^Bonsai$"),
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
		id: "bookboost",
		name: "Bookboost",
		website: "https://www.bookboost.io",
		description: "Bookboost is a CRM designed to manage hotel guest interactions and improve guest retention.",
		icon: "Bookboost.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bookboost:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web-messenger\\.bookboost\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bookboost:pageGlobal:1",
				kind: "pageGlobal",
				property: "BookboostWebMessengerObject",
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
		id: "bookster",
		name: "Bookster",
		website: "https://www.booksterhq.com",
		description: "Bookster is a property management software designed for holiday rental owners and managers.",
		icon: "Bookster.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bookster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.booksterhq\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "bookster:pageGlobal:1",
				kind: "pageGlobal",
				property: "bookster",
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
		id: "bowtie",
		name: "Bowtie",
		website: "https://www.bowtie.ai",
		description: "Bowtie is an AI-powered messaging platform for businesses that lets customers book appointments, buy products, and ask questions.",
		icon: "Bowtie.png",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "bowtie:dom:0",
				kind: "dom",
				selector: "div#bowtie-widget-container",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "bowtie:pageGlobal:1",
				kind: "pageGlobal",
				property: "bowtieDataToken",
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
		id: "breezy-hr",
		name: "Breezy HR",
		website: "https://breezy.hr",
		description: "Breezy HR is a recruiting software and applicant tracking system designed to streamline hiring processes.",
		icon: "BreezyHR.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "breezy-hr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.breezy\\.hr"),
				description: "Script content contains a bounded technology signature."
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
		id: "brivity",
		name: "Brivity",
		website: "https://www.brivity.com",
		description: "Brivity is a real estate CRM and software platform that helps agents manage contacts, automate workflows, track transactions, and support business development and deal management.",
		icon: "Brivity.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "brivity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn1\\.brivityidx\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brivity:pageGlobal:1",
				kind: "pageGlobal",
				property: "getBrivityHomeMiddlewareBaseUrl",
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
		id: "buz-club",
		name: "Buz Club",
		website: "https://buzsoftware.com",
		description: "Buz Club is a provider of private club management software featuring real-time integration.",
		icon: "BuzClub.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "buz-club:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.buzclubsoftware\\.com"),
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
		id: "capsule-crm",
		name: "Capsule CRM",
		website: "https://capsulecrm.com",
		description: "Capsule CRM is an online customer relationship management system for managing contacts, sales opportunities, and basic business interactions.",
		icon: "CapsuleCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "capsule-crm:dom:0",
				kind: "dom",
				selector: "form[action*='service.capsulecrm.com/']",
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
		id: "capys",
		name: "CAPYS",
		website: "https://capys.com.br",
		description: "CAPYS is a CRM system designed to support builders in Brazil by managing client relationships, projects, and operational data.",
		icon: "CAPYS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "capys:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("crmapi\\.capys\\.com\\.br"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "capys:dom:1",
				kind: "dom",
				selector: "form[action*='crmapi.capys.com.br']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "carecloud",
		name: "CareCloud",
		website: "https://www.carecloud.com/",
		description: "CareCloud is a platform that provides healthcare providers with a set of tools designed to enhance clinical workflows, improve patient outcomes, and streamline daily business operations.",
		icon: "CareCloud.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "carecloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("community\\.carecloud\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "carecloud:pageGlobal:1",
				kind: "pageGlobal",
				property: "CareCloud",
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
		id: "caremerge",
		name: "Caremerge",
		website: "https://caremerge.com",
		description: "Caremerge is a provider of resident engagement, family communication, and EHR/eMAR solutions for the senior living industry.",
		icon: "Caremerge.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "caremerge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.caremerge\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "caremerge:pageGlobal:1",
				kind: "pageGlobal",
				property: "cm.domain",
				valuePattern: new RegExp("\\.caremerge\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "carta",
		name: "Carta",
		website: "https://carta.com",
		description: "Carta is an equity management platform.",
		icon: "Carta.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "carta:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.carta\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "carta:dom:1",
				kind: "dom",
				selector: "link[href*='.app.carta.com/']",
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
		id: "casafari",
		name: "Casafari",
		website: "https://casafaricrm.com",
		description: "Casafari is a real estate CRM platform designed for professionals to manage content, properties, tasks, and client relationships.",
		icon: "Casafari.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "casafari:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("admin\\.casafaricrm\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "casafari:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("casafaricrm\\.com"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "casafari:meta:2",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^Casafari CRM$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cats",
		name: "CATS",
		website: "https://catsone.com",
		description: "CATS is an applicant tracking system designed to help professional recruiters manage job postings, candidate applications, and hiring workflows.",
		icon: "CATS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "cats:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cp\\.static\\.catsone\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "cdk-global",
		name: "CDK Global",
		website: "https://www.cdkglobal.com",
		description: "CDK Global offered a range of software and digital marketing solutions designed to help automotive businesses manage their operations, improve customer engagement, and enhance their online presence. Their services included dealership management systems (DMS), customer relationship management (CRM) software, website and digital marketing services, and various other tools tailored to the automotive industry.",
		icon: "CDK Global.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "cdk-global:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.connectcdk\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "centium",
		name: "Centium",
		website: "http://centiumsoftware.com",
		description: "Centium is a provider of technology solutions specializing in property and event management software for the hospitality industry, landmark world events, and the aviation sector.",
		icon: "Centium.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "centium:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("bookings\\.centiumsoftware\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "centium:dom:1",
				kind: "dom",
				selector: "div#page-footer > div[class*='centiumLink'], form[action*='bookings.centiumsoftware.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "chefpreneur",
		name: "Chefpreneur",
		website: "https://chefpreneur.com",
		description: "Chefpreneur is a platform providing solutions for starting or enhancing personal chef businesses.",
		icon: "Chefpreneur.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "chefpreneur:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.chefpreneur.com/']",
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
		id: "civic-champs",
		name: "Civic Champs",
		website: "https://www.civicchamps.com",
		description: "Civic Champs is a volunteer management platform that streamlines event coordination, tracks volunteer hours, and simplifies communication between organizations and their volunteers.",
		icon: "CivicChamps.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "civic-champs:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.civicchamps\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "civicrm",
		name: "CiviCRM",
		website: "https://civicrm.org",
		description: "CiviCRM is a web-based suite of internationalised open-source software for constituency relationship management.",
		icon: "CiviCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "civicrm:dom:0",
				kind: "dom",
				selector: "a[href*='/civicrm/contribute/transact'], link[href*='/com_civicrm/civicrm/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true,
			cpe: "cpe:2.3:a:civicrm:civicrm:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "cleancore",
		name: "CleanCore",
		website: "https://cleancore.io",
		description: "CleanCore is an AI-driven CRM designed to automate operations for cleaning companies.",
		icon: "CleanCore.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "cleancore:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.cleancore\\.io"),
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
		id: "clevy",
		name: "Clevy",
		website: "https://www.clevy.io",
		description: "Clevy is a platform that automates internal processes and queries within organizations, streamlining operations and improving efficiency.",
		icon: "Clevy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "clevy:pageGlobal:0",
				kind: "pageGlobal",
				property: "clevyWidget.showIframe",
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
		id: "clinicsense",
		name: "ClinicSense",
		website: "https://clinicsense.com",
		description: "ClinicSense is a practice management software solution that reduces administrative costs and workload in healthcare clinics.",
		icon: "ClinicSense.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "clinicsense:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.clinicsense\\.com"),
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
		id: "clio",
		name: "Clio",
		website: "https://www.clio.com",
		description: "Clio is a legal software platform for managing clients, cases, and billing within law practices.",
		icon: "Clio.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "clio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.clio\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "clio:cookie:1",
				kind: "cookie",
				key: "clio_grow_support_id",
				description: "Cookie name matches a known technology marker."
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
		id: "conexa",
		name: "Conexa",
		website: "https://conexa.ai",
		description: "Conexa is a business scaling technology partner platform designed to support growth through strategic solutions and automation.",
		icon: "Conexa.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "conexa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.conexa\\.ai"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "convert-and-flow",
		name: "Convert and Flow",
		website: "https://convertandflow.com",
		description: "Convert and Flow is a customer relationship management tool designed to manage customer relationships and enhance customer satisfaction.",
		icon: "ConvertAndFlow.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "convert-and-flow:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.convertandflow\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "converzee",
		name: "Converzee",
		website: "https://converzee.com",
		description: "Converzee is a digital platform created to help companies manage their human resource processes.",
		icon: "Converzee.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "converzee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.converzee\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "cosmedcloud",
		name: "Cosmedcloud",
		website: "https://www.cosmedcloud.com",
		description: "Cosmedcloud is cloud-based practice management software tailored for cosmetic and aesthetic medicine clinics.",
		icon: "CosmedCloud.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "cosmedcloud:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cosmedcloud\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "crm",
		name: "CRM+",
		website: "https://www.brainformatik.com",
		description: "CRM+ is a German CRM software product building on Vtiger with GDPR-compliant extensions and improvements.",
		icon: "CRM+.svg",
		categories: [
			"business-tools"
		],
		rules: [],
		implies: [
			"mariadb",
			"amcharts",
			"sentry",
			"vtiger"
		],
		requires: [
			"apache-http-server",
			"php"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring",
				"poa",
				"freemium"
			]
		}
	},
	{
		id: "crmboost",
		name: "CRMBOOST",
		website: "https://www.crmboost.com",
		description: "CRMBOOST is a customer relationship management (CRM) platform that helps businesses organize, track, and manage interactions with clients and leads.",
		icon: "CRMBOOST.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "crmboost:dom:0",
				kind: "dom",
				selector: "iframe[src*='.crmboost.com'], form[action*='crmboost.com']",
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
			]
		}
	},
	{
		id: "daktela-omnichannel",
		name: "Daktela Omnichannel",
		website: "https://daktela.com",
		description: "Daktela Omnichannel is a unified platform that streamlines customer interactions across multiple channels to enhance satisfaction and support business growth.",
		icon: "Daktela.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "daktela-omnichannel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.daktela\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "daktela-omnichannel:pageGlobal:1",
				kind: "pageGlobal",
				property: "daktelaCli",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "daktela-omnichannel:pageGlobal:2",
				kind: "pageGlobal",
				property: "daktelaGuiConfig",
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
		id: "datascape",
		name: "Datascape",
		website: "https://datacom.com/nz/en/products/datascape/digital-experience/my-datascape",
		description: "Datascape is a cloud-based ERP solution that enables councils to manage services while supporting transparent and collaborative communication.",
		icon: "Datascape.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "datascape:dom:0",
				kind: "dom",
				selector: "link[href*='cdn-sites.datascape.cloud']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "datascape:pageGlobal:1",
				kind: "pageGlobal",
				property: "DatacomSphere",
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
		id: "demandforce",
		name: "Demandforce",
		website: "https://www.demandforce.com",
		description: "Demandforce is an AI-powered patient communication platform that helps healthcare practices attract and retain patients.",
		icon: "Demandforce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "demandforce:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.demandforce\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "demandforce:dom:1",
				kind: "dom",
				selector: "link[href*='.demandforce.com/']",
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
		id: "dengro",
		name: "DenGro",
		website: "https://dengro.com",
		description: "DenGro is a software solution tailored for dental practitioners, facilitating streamlined practice operations.",
		icon: "DenGro.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "dengro:dom:0",
				kind: "dom",
				selector: "form[action*='app.dengro.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "dengro:pageGlobal:1",
				kind: "pageGlobal",
				property: "dengro.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
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
		id: "deskero",
		name: "Deskero",
		website: "https://www.deskero.com/",
		description: "Deskero is a customizable cloud-based help desk software and support ticket system designed to manage customer service.",
		icon: "Deskero.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "deskero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.deskero\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "deskero:pageGlobal:1",
				kind: "pageGlobal",
				property: "deskeroUser",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "deskero:pageGlobal:2",
				kind: "pageGlobal",
				property: "deskeroWidget.init",
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
		id: "didar",
		name: "Didar",
		website: "https://didar.me",
		description: "Didar is a platform offering tools for managing relationships and enhancing sales.",
		icon: "Didar.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "didar:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunkdidarx",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "didar:meta:1",
				kind: "meta",
				key: "apple-mobile-web-app-title",
				valuePattern: new RegExp("^Didar CRM$"),
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
		id: "dito",
		name: "Dito",
		website: "https://www.dito.com.br",
		description: "Dito is a tool that centralizes and manages the relationship between brands and their customers.",
		icon: "Dito.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "dito:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("storage\\.googleapis\\.com/dito/sdk\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dito:pageGlobal:1",
				kind: "pageGlobal",
				property: "dito.AppSettings",
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
		id: "dixa",
		name: "Dixa",
		website: "https://www.dixa.com",
		description: "Dixa is a customer experience platform designed for consumer brands, enabling management of customer interactions across channels.",
		icon: "Dixa.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "dixa:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dixa\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dixa:pageGlobal:1",
				kind: "pageGlobal",
				property: "_dixa_.addListener",
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
		id: "docket",
		name: "Docket",
		website: "https://www.yourdocket.com",
		description: "Docket is a waste management and dumpster rental software, helping businesses manage assets, invoices, accounting, and communication.",
		icon: "Docket.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "docket:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("dockethosting\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "docket:pageGlobal:1",
				kind: "pageGlobal",
				property: "DocketPay",
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
		id: "doorloop",
		name: "DoorLoop",
		website: "https://www.doorloop.com",
		description: "DoorLoop is a property management software designed to streamline tasks such as leasing, accounting, maintenance tracking, and tenant communication.",
		icon: "DoorLoop.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "doorloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.doorloop\\.com"),
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
		id: "dover",
		name: "Dover",
		website: "https://www.dover.com",
		description: "Dover is a platform that streamlines recruiting by identifying and scheduling qualified candidates.",
		icon: "Dover.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "dover:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.dover\\.io"),
				description: "Script content contains a bounded technology signature."
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
		id: "dreamapply",
		name: "DreamApply",
		website: "https://dreamapply.com",
		description: "DreamApply is a specialised student application management system designed with and for education institutions.",
		icon: "DreamApply.png",
		categories: [
			"business-tools",
			"widgets-misc"
		],
		rules: [
			{
				id: "dreamapply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.cdn\\.dreamapply\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"linkedin-sign-in",
			"facebook-login",
			"google-sign-in"
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
		id: "dx1",
		name: "DX1",
		website: "https://www.dx1app.com",
		description: "DX1 is an entirely cloud-based dealership management system for the motorcycle and powersports industry. Offering DMS, website, CRM and marketing tools.",
		icon: "DX1.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "dx1:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.dx1app\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "dx1:pageGlobal:1",
				kind: "pageGlobal",
				property: "Dx1.Dnn",
				description: "Page-owned global matches a known technology marker."
			}
		],
		requires: [
			"dnn"
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
		id: "easybroker",
		name: "EasyBroker",
		website: "https://www.easybroker.com",
		description: "EasyBroker is a property management platform facilitating sharing of properties through WhatsApp and email.",
		icon: "EasyBroker.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "easybroker:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easybroker\\.com/"),
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
		id: "edrone",
		name: "Edrone",
		website: "https://edrone.me",
		description: "Edrone is a purpose-built ecommerce CRM that includes marketing automation and voice commerce features.",
		icon: "Edrone.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "edrone:pageGlobal:0",
				kind: "pageGlobal",
				property: "_edrone",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "edrone:pageGlobal:1",
				kind: "pageGlobal",
				property: "_edrone.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "edrone:pageGlobal:2",
				kind: "pageGlobal",
				property: "_edrone_send_handler",
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
		id: "elenore",
		name: "Elenore",
		website: "https://elenore.io",
		description: "Elenore is an all-in-one business management software platform designed to streamline operations and support business growth.",
		icon: "Elenore.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "elenore:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.elenore\\.io"),
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
		id: "ellucian-crm-recruit",
		name: "Ellucian CRM Recruit",
		website: "https://www.ellucian.com/solutions/ellucian-crm-recruit",
		description: "Ellucian CRM Recruit is a comprehensive solution that supports your entire recruiting and admissions lifecycle.",
		icon: "Ellucian CRM Recruit.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ellucian-crm-recruit:dom:0",
				kind: "dom",
				selector: " a[href*='.elluciancrmrecruit.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ellucian-crm-recruit:pageGlobal:1",
				kind: "pageGlobal",
				property: "Ellucian.Recruit",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ellucian-crm-recruit:pageGlobal:2",
				kind: "pageGlobal",
				property: "ellucianAddressChooseLabel",
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
		id: "elromco",
		name: "Elromco",
		website: "https://www.elromco.com",
		description: "Elromco is a software platform that provides moving companies with a CRM and management solution.",
		icon: "Elromco.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "elromco:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.elromco\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "elromco:pageGlobal:1",
				kind: "pageGlobal",
				property: "ElromcoAPI",
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
		id: "employment-hero",
		name: "Employment Hero",
		website: "https://employmenthero.com",
		description: "Employment Hero is a cloud-based human resources information system (HRIS) designed to manage HR operations, payroll processing, and recruitment workflows for small and medium-sized businesses.",
		icon: "EmploymentHero.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "employment-hero:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("employmenthero\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "employment-hero:pageGlobal:1",
				kind: "pageGlobal",
				property: "emhTheme.siteSlug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "employment-hero:pageGlobal:2",
				kind: "pageGlobal",
				property: "emhTracking.token",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "entresoft",
		name: "Entresoft",
		website: "https://entresoft.com",
		description: "Entresoft is a platform that offers CRM and pipeline management tools for business operations.",
		icon: "Entresoft.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "entresoft:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.entresoft\\.com"),
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
		id: "epicor",
		name: "Epicor",
		website: "https://www.epicor.com",
		description: "Epicor is an enterprise resource planning software suite built to support manufacturing, distribution, retail, and service industries.",
		icon: "Epicor.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "epicor:pageGlobal:0",
				kind: "pageGlobal",
				property: "Epicor_Common",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "epicor:pageGlobal:1",
				kind: "pageGlobal",
				property: "Epicor_SalesrepPricing",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "eploy",
		name: "Eploy",
		website: "https://www.eploy.co.uk",
		description: "Eploy is an end-to-end multilingual e-recruitment platform that helps to manage the entire recruitment process from job requisition through to onboarding.",
		icon: "Eploy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "eploy:pageGlobal:0",
				kind: "pageGlobal",
				property: "$Eploy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "eploy:cookie:1",
				kind: "cookie",
				key: "Eploy.Session",
				description: "Cookie name matches a known technology marker."
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
		id: "erxes",
		name: "Erxes",
		website: "https://erxes.io",
		description: "Erxes is a platform that provides tools for marketing, sales, and customer service management.",
		icon: "Erxes.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "erxes:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp(".app\\.erxes\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "erxes:pageGlobal:1",
				kind: "pageGlobal",
				property: "Erxes.showMessenger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "erxes:pageGlobal:2",
				kind: "pageGlobal",
				property: "erxesEnv",
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
		id: "eshopcrm",
		name: "eShopCRM",
		website: "https://eshopcrm.com",
		description: "eShopCRM is an ecommerce CRM for Shopify.",
		icon: "eShopCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "eshopcrm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("eshopcrm\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"shopify"
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
		id: "espocrm",
		name: "EspoCRM",
		website: "https://www.espocrm.com",
		description: "EspoCRM is an open-source CRM software solution designed for businesses of all sizes.",
		icon: "EspoCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "espocrm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("espo(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "espocrm:dom:1",
				kind: "dom",
				selector: "meta[content*='EspoCRM'], link[href*='/espo/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "espocrm:pageGlobal:2",
				kind: "pageGlobal",
				property: "Espo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"handlebars",
			"backbone-js"
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium"
			],
			cpe: "cpe:2.3:a:espocrm:espocrm:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "ezlynx",
		name: "EZLynx",
		website: "https://www.ezlynx.com",
		description: "EZLynx is a cloud-based software offering real-time comparative insurance rating, integrating with over 330 carriers for automated quoting and policy management​.",
		icon: "EZLynx.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ezlynx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ezlynx\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "ezlynx:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^EZLynx$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "facilita",
		name: "Facilita",
		website: "https://www.appfacilita.com",
		description: "Facilita is a CRM designed for the real estate market, providing tools to manage client interactions, listings, and transactions.",
		icon: "Facilita.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "facilita:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.appfacilita\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "facilita:pageGlobal:1",
				kind: "pageGlobal",
				property: "facilitaFormTrackerFnc",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "firefish-software",
		name: "Firefish Software",
		website: "https://www.firefishsoftware.com",
		description: "Firefish Software is a recruitment CRM for professional recruiters and recruitment agencies.",
		icon: "FireFish.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "firefish-software:pageGlobal:0",
				kind: "pageGlobal",
				property: "ffControlSystem",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "firefish-software:pageGlobal:1",
				kind: "pageGlobal",
				property: "firefish",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "flarelane",
		name: "FlareLane",
		website: "https://www.flarelane.com",
		description: "FlareLane is a customer engagement platform that enables businesses to send personalized notifications through multiple channels such as mobile push, web push, SMS, email, and in-app messaging, with features for automation, A/B testing, and real-time analytics.",
		icon: "FlareLane.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "flarelane:pageGlobal:0",
				kind: "pageGlobal",
				property: "FlareLane",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "flarelane:pageGlobal:1",
				kind: "pageGlobal",
				property: "flarelane_state",
				description: "Page-owned global matches a known technology marker."
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
		id: "fleetee",
		name: "Fleetee",
		website: "https://en.fleetee.io",
		description: "Fleetee is a platform that enables users to develop and manage rental operations.",
		icon: "Fleetee.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "fleetee:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.fleetee\\.io"),
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
		id: "flip",
		name: "Flip",
		website: "https://www.getflip.com",
		description: "Flip is an employee app combining top features from popular social media platforms. It enables communication between deskless workers and those with corporate devices, offering chat, newsfeed, shift planning, timesheets, and more.",
		icon: "Flip.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "flip:cookie:0",
				kind: "cookie",
				key: "flip_sentry_dsn",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "flip:meta:1",
				kind: "meta",
				key: "apple-mobile-web-app-title",
				valuePattern: new RegExp("^Flip$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "flipping-pro-crm",
		name: "Flipping Pro CRM",
		website: "https://flippingpro.com",
		description: "Flipping Pro is an all-in-one real estate marketing CRM offering essential tools to help real estate business owners grow their operations.",
		icon: "FlippingPro.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "flipping-pro-crm:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.flippingpro\\.com"),
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
		id: "fluro",
		name: "Fluro",
		website: "https://www.fluro.io",
		description: "Fluro is an automation platform designed to support operational growth and management for expanding churches.",
		icon: "Fluro.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "fluro:pageGlobal:0",
				kind: "pageGlobal",
				property: "$flurosite",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "fluro:pageGlobal:1",
				kind: "pageGlobal",
				property: "__FLUROSITE__",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "follow-up-boss",
		name: "Follow Up Boss",
		website: "https://www.followupboss.com/customer-results/debra-beagle",
		description: "Follow Up Boss is a real estate CRM system that manages leads, tracks client interactions, and organizes sales processes for real estate professionals.",
		icon: "FollowUpBoss.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "follow-up-boss:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.followupboss\\.com"),
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
		id: "freshteam",
		name: "Freshteam",
		website: "https://www.freshworks.com/hrms/",
		description: "Freshteam is a cloud-based HR and applicant tracking solution offered by Freshworks.",
		icon: "Freshteam.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "freshteam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.freshteam\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "freshteam:dom:1",
				kind: "dom",
				selector: "a[href*='.freshteam.com/jobs']",
				description: "DOM selector matches a known technology marker."
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
		id: "freshworks-crm",
		name: "Freshworks CRM",
		website: "https://www.freshworks.com/crm",
		description: "Freshworks CRM is a cloud-based customer relationship management (CRM) solution. Key features include one-click phone, sales lead tracking, sales management, event tracking and more.",
		icon: "Freshworks CRM.svg",
		categories: [
			"business-tools",
			"marketing-automation",
			"experimentation-optimization"
		],
		rules: [
			{
				id: "freshworks-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.freshmarketer\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "freshworks-crm:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.zarget\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "freshworks-crm:dom:2",
				kind: "dom",
				selector: "div[class*='Footer-PoweredBy'] > span > a[href*='www.freshworks.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "freshworks-crm:pageGlobal:3",
				kind: "pageGlobal",
				property: "ZargetForm",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "freshworks-crm:pageGlobal:4",
				kind: "pageGlobal",
				property: "zarget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "freshworks-crm:pageGlobal:5",
				kind: "pageGlobal",
				property: "zargetAPI",
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
		id: "fullbay",
		name: "Fullbay",
		website: "https://www.fullbay.com",
		description: "Fullbay is heavy-duty repair shop software that provides a clear view of ongoing activities in your repair shop while enhancing staff productivity.",
		icon: "Fullbay.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "fullbay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.fullbay\\.com/"),
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
		id: "fuzey-channels",
		name: "Fuzey Channels",
		website: "https://www.getfuzey.com/features/channels",
		description: "Fuzey Channels is an AI-powered communication platform designed specifically for the automotive industry to streamline customer interactions.",
		icon: "Fuzey.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "fuzey-channels:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.fuzey\\.io"),
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
		id: "gallabox",
		name: "Gallabox",
		website: "https://gallabox.com",
		description: "Gallabox is a tool that transforms WhatsApp into a web chat widget, facilitating management of leads, bookings, deals, and orders.",
		icon: "Gallabox.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "gallabox:pageGlobal:0",
				kind: "pageGlobal",
				property: "gbwawc",
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
		id: "gestim",
		name: "Gestim",
		website: "https://www.gestim.it",
		description: "Gestim is an Italian real estate management system.",
		icon: "Gestim.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "gestim:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("stats\\.gestim\\.biz"),
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
		id: "getro",
		name: "Getro",
		website: "https://www.getro.com",
		description: "Gentro is an automated job board and private talent network that removes the manual effort of linking individuals and companies within a network.",
		icon: "Getro.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "getro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("an\\.getro\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "giveffect",
		name: "Giveffect",
		website: "https://www.giveffect.com",
		description: "Giveffect is a not-for-profit customer relationship management system designed to support organizational operations and engagement.",
		icon: "Giveffect.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "giveffect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.giveffect\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "giveffect:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.giveffect\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "gloo",
		name: "Gloo",
		website: "https://www.gloo.us",
		description: "Gloo is a platform designed to help churches develop a more connected ministry.",
		icon: "Gloo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "gloo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gloo\\.us/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gloo:pageGlobal:1",
				kind: "pageGlobal",
				property: "__GLOO_ONLINE",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "glueup",
		name: "GlueUp",
		website: "https://www.glueup.com",
		description: "GlueUp is an all-in-one CRM platform.",
		icon: "GlueUp.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "glueup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.glueup\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "gorilla-dash",
		name: "Gorilla Dash",
		website: "https://gorilladash.com",
		description: "Gorilla Dash is a tool for franchises and businesses with multiple locations, providing management and operational support.",
		icon: "GorillaDash.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "gorilla-dash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//gorilladash\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gorilla-dash:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.gorilladash\\.com"),
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
		id: "greenhouse",
		name: "Greenhouse",
		website: "https://www.greenhouse.io",
		description: "Greenhouse is an applicant tracking and hiring tool. Greenhouse features automated workflow, recruitment analytics, CRM, and onboarding.",
		icon: "Greenhouse.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "greenhouse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.greenhouse\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "greenhouse:dom:1",
				kind: "dom",
				selector: "link[href*='cdn\\.greenhouse\\.io/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "greenhouse:pageGlobal:2",
				kind: "pageGlobal",
				property: "populateGreenhouseJobs",
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
		id: "greenrope",
		name: "GreenRope",
		website: "https://www.greenrope.com",
		description: "GreenRope is an all-in-one CRM platform that integrates sales, marketing, and operational tools into a single system for business management.",
		icon: "GreenRope.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "greenrope:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.greenrope\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "greenrope:pageGlobal:1",
				kind: "pageGlobal",
				property: "bfpd",
				valuePattern: new RegExp("app\\.greenrope\\.com"),
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
		id: "hapana",
		name: "Hapana",
		website: "https://www.hapana.com",
		description: "Hapana is a gym and fitness studio management platform designed to streamline operations.",
		icon: "Hapana.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hapana:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hapana\\.com/"),
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
		id: "happyfox-helpdesk",
		name: "HappyFox Helpdesk",
		website: "https://www.happyfox.com/customer-service-software/",
		description: "HappyFox is a help desk ticketing system that is hosted on cloud, supporting multiple customer support channels like email, voice and live chat.",
		icon: "HappyFox.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "happyfox-helpdesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.happyfox\\.com/media/"),
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
		id: "helpwise",
		name: "Helpwise",
		website: "https://helpwise.io",
		description: "Helpwise is a customer service platform that helps you manage all customer communication from a single place.",
		icon: "Helpwise.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "helpwise:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.helpwise\\.io"),
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
		id: "hesk",
		name: "Hesk",
		website: "https://www.hesk.com",
		description: "Hesk is a helpdesk and customer support system.",
		icon: "Hesk.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hesk:pageGlobal:0",
				kind: "pageGlobal",
				property: "heskKBquery",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hesk:pageGlobal:1",
				kind: "pageGlobal",
				property: "hesk_rate",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "hesk:pageGlobal:2",
				kind: "pageGlobal",
				property: "hesk_window",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "hi-platform",
		name: "Hi Platform",
		website: "https://www.hiplatform.com",
		description: "Hi Platform provider of an online customer relationship platform.",
		icon: "Hi Platform.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hi-platform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hiplatform\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hi-platform:dom:1",
				kind: "dom",
				selector: "link[href*='.hiplatform.com']",
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
		id: "hibob",
		name: "HiBob",
		website: "https://www.hibob.com",
		description: "HiBob is a modern HR platform designed to enhance productivity, employee engagement, and retention for businesses.",
		icon: "HiBob.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hibob:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.hibob\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "higherme-hr",
		name: "HigherMe HR",
		website: "https://higherme.com/products/hr-software",
		description: "HigherMe HR is a hiring software platform designed for hourly workforces, supporting job postings, applicant screening, interview scheduling, and onboarding workflows.",
		icon: "HigherMe.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "higherme-hr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.higherme\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hikari-cs",
		name: "Hikari CS",
		website: "https://www.hikarics.com",
		description: "Hicari CS is a solution that helps webshops increase sales and customer loyalty with excellent customer service.",
		icon: "HikariCS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hikari-cs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.hikarics\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "hireology",
		name: "Hireology",
		website: "https://hireology.com",
		description: "Hireology is a staffing and hiring platform for the franchise and retail-automotive industries.",
		icon: "Hireology.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hireology:url:0",
				kind: "url",
				pattern: new RegExp("sites\\.hireology\\.com/"),
				description: "Page URL matches a known technology marker."
			},
			{
				id: "hireology:dom:1",
				kind: "dom",
				selector: "a[href*='sites.hireology.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"poa",
				"recurring"
			]
		}
	},
	{
		id: "hiver",
		name: "Hiver",
		website: "https://hiverhq.com",
		description: "Hiver is a tool that transforms Gmail into a collaboration and customer support system.",
		icon: "Hiver.svg",
		categories: [
			"business-tools",
			"email-messaging"
		],
		rules: [
			{
				id: "hiver:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat-widget\\.hiverhq\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hiver:dom:1",
				kind: "dom",
				selector: "link[href*='chat-widget.hiverhq.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "hiver:pageGlobal:2",
				kind: "pageGlobal",
				property: "$hiverChatWidget",
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
		id: "homerun",
		name: "Homerun",
		website: "https://www.homerun.co",
		description: "Homerun is a platform used to organize hiring processes and manage candidate applications.",
		icon: "Homerun.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "homerun:pageGlobal:0",
				kind: "pageGlobal",
				property: "homerunI18n",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "homerun:pageGlobal:1",
				kind: "pageGlobal",
				property: "homerunPrivacySettings",
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
		id: "hoowla",
		name: "Hoowla",
		website: "https://www.hoowla.com",
		description: "Hoowla is a case management software designed to organize, track, and manage legal workflows and client information for law firms.",
		icon: "Hoowla.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hoowla:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.hoowla\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hoowla:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.hoowla\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "hoowla:pageGlobal:2",
				kind: "pageGlobal",
				property: "hoowlainit",
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
		id: "hrflow-ai",
		name: "HrFlow.ai",
		website: "https://hrflow.ai",
		description: "HrFlow.ai is an HR data automation API platform.",
		icon: "HrFlow.ai.svg",
		categories: [
			"business-tools",
			"api-pattern"
		],
		rules: [
			{
				id: "hrflow-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hrflow\\.ai"),
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
		id: "hubtiger",
		name: "Hubtiger",
		website: "https://hubtiger.com",
		description: "Hubtiger offers rental and workshop management software solutions to help businesses elevate their operations and efficiency.",
		icon: "Hubtiger.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "hubtiger:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Hubtiger$"),
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
		id: "ice",
		name: "ICE",
		website: "https://www.enterice.com/web/",
		description: "ICE is integrated customer engagement software designed to streamline communication, support, and interaction across multiple channels for businesses.",
		icon: "Enterice.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.enterice\\.com/"),
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
		id: "icims",
		name: "iCIMS",
		website: "https://www.icims.com",
		description: "iCIMS is a talent acquisition and internal mobility platform that delivers solutions to build, retain, and scale your workforce.",
		icon: "iCIMS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "icims:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("icims\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ignition",
		name: "Ignition",
		website: "https://www.ignitionapp.com",
		description: "Ignition is an all-in-one platform streamlining proposals, billing, payments, and workflows for accounting and professional services firms.",
		icon: "Ignition.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ignition:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.practiceignition\\.com/"),
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
		id: "indeed",
		name: "Indeed",
		website: "https://www.indeed.com",
		description: "Indeed is a platform that provides embedded code for tracking job-related clicks and supports job search functionality.",
		icon: "Indeed.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "indeed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.indeed\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "indeed:pageGlobal:1",
				kind: "pageGlobal",
				property: "indeed_clk",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "infor",
		name: "Infor",
		website: "https://www.infor.com",
		description: "Infor is a resource planning solution designed to streamline operations, manage workflows, and support data-driven decision-making across various business functions.",
		icon: "Infor.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "infor:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cloud\\.infor\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "infor:dom:1",
				kind: "dom",
				selector: "iframe[src*='.cloud.infor.com/']",
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
		id: "insightly-crm",
		name: "Insightly CRM",
		website: "https://www.insightly.com/crm/",
		description: "Insightly CRM is a cloud-based customer relationship management software, helps businesses manage leads, contacts, and opportunities, track customer interactions, create custom reports, automate workflows, and integrate with third-party applications, improving customer engagement and streamlining business processes.",
		icon: "Insightly.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "insightly-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.insightly\\.services/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "insightly-crm:dom:1",
				kind: "dom",
				selector: "form[action*='.insightly.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low",
				"payg"
			]
		}
	},
	{
		id: "iress",
		name: "Iress",
		website: "https://www.iress.com",
		description: "Iress is a platform that provides software solutions for the financial services industry.",
		icon: "Iress.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "iress:pageGlobal:0",
				kind: "pageGlobal",
				property: "IRESSWebToolbox",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "iteras",
		name: "Iteras",
		website: "https://www.iteras.com",
		description: "Iteras is a subscriber management system that organizes user accounts, tracks subscription activity, and supports controlled access to digital services.",
		icon: "Iteras.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "iteras:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.iteras\\.dk"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "iteras:pageGlobal:1",
				kind: "pageGlobal",
				property: "Iteras.cookieDomain",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "jazzhr",
		name: "JazzHR",
		website: "https://www.jazzhr.com",
		description: "JazzHR is SaaS recruiting software to source talent, conduct interviews and hires.",
		icon: "JazzHR.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jazzhr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.jazz\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jazzhr:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("JazzHR"),
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
		id: "jboard",
		name: "JBoard",
		website: "https://jboard.io",
		description: "JBoard is a platform for creating and managing job boards with no coding required, enabling users to post, organize, and maintain job listings.",
		icon: "JBoard.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jboard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.jboard\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jboard:pageGlobal:1",
				kind: "pageGlobal",
				property: "$JBoardAPI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jboard:pageGlobal:2",
				kind: "pageGlobal",
				property: "$jBoard.adminUserToken",
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
		id: "job-board-fire",
		name: "Job Board Fire",
		website: "https://www.jobboardfire.com",
		description: "JobBoardFire is a platform that provides software for managing job boards, connecting entrepreneurs and community members.",
		icon: "JobBoardFire.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "job-board-fire:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("jobboardfire\\.twic\\.pics"),
				description: "Script content contains a bounded technology signature."
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
		id: "jobadder",
		name: "JobAdder",
		website: "https://jobadder.com",
		description: "JobAdder is a cloud-based recruitment management platform for staffing agencies and in-house corporate hiring teams.",
		icon: "JobAdder.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jobadder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jobadder\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jobadder:dom:1",
				kind: "dom",
				selector: "a[href*='clientapps.jobadder.com/'], link[href*='jobadder.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "jobiqo",
		name: "Jobiqo",
		website: "https://www.jobiqo.com",
		description: "Jobiqo is a job board platform that enables publishers to expand reach and increase recruitment advertising revenue.",
		icon: "Jobiqo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jobiqo:meta:0",
				kind: "meta",
				key: "owner",
				valuePattern: new RegExp("^Jobiqo$"),
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
		id: "jobvite",
		name: "Jobvite",
		website: "https://www.jobvite.com",
		description: "Jobvite is an applicant tracking software and recruiting platform.",
		icon: "Jobvite.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jobvite:dom:0",
				kind: "dom",
				selector: "a[href*='.jobvite.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "jobvite:pageGlobal:1",
				kind: "pageGlobal",
				property: "Jobvite",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"high",
				"recurring",
				"payg"
			]
		}
	},
	{
		id: "jobylon",
		name: "Jobylon",
		website: "https://www.jobylon.com",
		description: "Jobylon is a flexible talent acquisition platform designed to help leading employers streamline recruitment and manage hiring processes.",
		icon: "Jobylon.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jobylon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jobylon\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "join-it",
		name: "Join It",
		website: "https://joinit.com",
		description: "Join It is a membership management platform that helps nonprofits, clubs, and growing organizations manage members, track payments, and streamline administrative tasks.",
		icon: "JoinIt.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "join-it:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.joinit\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "jonas-club-software",
		name: "Jonas Club Software",
		website: "https://jonasclub.com",
		description: "Jonas Club Software is a provider of club management solutions, facilitating relationship building with members, revenue growth, and cost reduction.",
		icon: "Jonas.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "jonas-club-software:pageGlobal:0",
				kind: "pageGlobal",
				property: "jonasPrivacyPolicy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jonas-club-software:pageGlobal:1",
				kind: "pageGlobal",
				property: "jonasPrivacyPolicyClassName",
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
		id: "keap",
		name: "Keap",
		website: "https://keap.com",
		description: "Keap offers an email marketing and sales platform for small businesses, including products to manage customers, customer relationship management, marketing, and ecommerce.",
		icon: "Keap.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "keap:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.infusionsoft\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "keap:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("property\\.infusionsoft\\.com"),
				description: "Observed request URL matches a known technology marker."
			},
			{
				id: "keap:dom:2",
				kind: "dom",
				selector: "form[action*='property.infusionsoft.com'], link[href*='.infusionsoft.com']",
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
		id: "kenect",
		name: "Kenect",
		website: "https://www.kenect.com",
		description: "Kenect is a platform that provides reputation management and business texting solutions for customer engagement and feedback collection.",
		icon: "Kenect.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "kenect:dom:0",
				kind: "dom",
				selector: "iframe[src*='.kenect.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kenect:pageGlobal:1",
				kind: "pageGlobal",
				property: "toggleKenectWidget",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kicksite",
		name: "Kicksite",
		website: "https://kicksite.com",
		description: "Kicksite is a gym and martial arts member management software with attendance tracking, automated billing, free texting, lead capture forms and more.",
		icon: "Kicksite.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "kicksite:dom:0",
				kind: "dom",
				selector: "iframe[src*='.kicksite.net/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kicksite:cookie:1",
				kind: "cookie",
				key: "_kicksite_session",
				description: "Cookie name matches a known technology marker."
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
		id: "kintone",
		name: "Kintone",
		website: "https://kintone.cybozu.co.jp",
		description: "Kintone is a versatile cloud-based platform offering business data management, CRM, and custom app development.",
		icon: "Kintone.png",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "kintone:dom:0",
				kind: "dom",
				selector: "iframe[src*='.kintoneapp.com/'], a[href*='.kintoneapp.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "kintone:pageGlobal:1",
				kind: "pageGlobal",
				property: "kintoneappHost",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "kundo",
		name: "Kundo",
		website: "https://www.kundo.se",
		description: "Kundo is a customer service system for all digital channels, enhanced with AI and automation to resolve inquiries.",
		icon: "Kundo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "kundo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static-chat\\.kundo\\.se"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "kundo:pageGlobal:1",
				kind: "pageGlobal",
				property: "$kundo_chat.DEFAULT_AVATAR_URL",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "kvcore",
		name: "KVCore",
		website: "https://kvcore.com",
		description: "KVCore is an all-in-one real estate technology platform for agents, teams, and brokers, offering CRM, lead generation, marketing automation, and transaction tools in a single system.",
		icon: "KVCore.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "kvcore:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("sociallogin\\.kvcore\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lasso-crm",
		name: "Lasso CRM",
		website: "https://www.ecisolutions.com/products/lasso-crm",
		description: "Lasso CRM is a new home sales CRM solution for builders, developers, and new homes agencies.",
		icon: "LassoCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lasso-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lassocrm\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lasso-crm:pageGlobal:1",
				kind: "pageGlobal",
				property: "LassoAnalytics",
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
		id: "lawmatics",
		name: "Lawmatics",
		website: "https://www.lawmatics.com",
		description: "Lawmatics is a growth platform for law firms that streamlines client intake, marketing automation, and workflow management.",
		icon: "Lawmatics.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lawmatics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("navi\\.lawmatics\\.com"),
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
		id: "laylo",
		name: "Laylo",
		website: "https://laylo.com",
		description: "Laylo is a drop CRM platform that enables artists to notify fans when merchandise, tickets, or content becomes available.",
		icon: "Laylo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "laylo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.laylo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "laylo:pageGlobal:1",
				kind: "pageGlobal",
				property: "layloSdkLoading",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "lead-generated",
		name: "Lead Generated",
		website: "https://leadgenerated.com",
		description: "Lead Generated is a marketing CRM tool that centralizes customer data, tracks engagement, and automates marketing campaigns.",
		icon: "LeadGenerated.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lead-generated:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.leadgenerated\\.com/"),
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
		id: "leadchat",
		name: "LeadChat",
		website: "https://www.leadchat.com",
		description: "LeadChat offers live-operators and CRM solutions that utilise LiveChat chat software to facilitate real-time engagement with website visitors for businesses.",
		icon: "LeadChat.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "leadchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?://|\\.)chatsystem\\.io/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"livechat"
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"payg",
				"poa"
			]
		}
	},
	{
		id: "leadific",
		name: "Leadific",
		website: "https://leadific.co",
		description: "Leadific is a customer relationship management platform designed to help digital agencies manage clients, track communications, and streamline workflows in a single system.",
		icon: "Leadific.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "leadific:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.leadific\\.io"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "leadsimple",
		name: "LeadSimple",
		website: "https://www.leadsimple.com",
		description: "LeadSimple is a platform that allows property managers to automate their sales and operational processes.",
		icon: "LeadSimple.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "leadsimple:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets2\\.leadsimple\\.com/"),
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
		id: "leandata",
		name: "LeanData",
		website: "https://www.leandata.com",
		description: "LeanData is a platform that enhances demand management by providing lead-to-account matching and intelligent lead routing.",
		icon: "LeanData.svg",
		categories: [
			"business-tools",
			"router"
		],
		rules: [
			{
				id: "leandata:pageGlobal:0",
				kind: "pageGlobal",
				property: "LDBookItPopup",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leandata:pageGlobal:1",
				kind: "pageGlobal",
				property: "LDBookItV2",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "leandata:pageGlobal:2",
				kind: "pageGlobal",
				property: "LDCalendaring",
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
		id: "lendi",
		name: "Lendi",
		website: "https://www.lendi.pl",
		description: "Lendi is a Poland-based provider of loan system solutions designed to support financial operations and lending processes.",
		icon: "Lendi.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lendi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.lendi\\.pl"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "lendi:responseHeader:1",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("www\\.lendi\\.pl"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "lenus",
		name: "Lenus",
		website: "https://lenushealth.com",
		description: "Lenus is a platform that develops healthcare optimization systems designed to improve operational efficiency.",
		icon: "Lenus.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lenus:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Lenus$"),
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
		id: "lever",
		name: "Lever",
		website: "https://www.lever.co",
		description: "Lever is a software company headquartered in San Francisco, California and Toronto, Canada that provides an applicant tracking system for hiring.",
		icon: "Lever.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "lever:dom:0",
				kind: "dom",
				selector: "a[href*='jobs.lever.co/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "lever:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.lever\\.co"),
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
		id: "leverade",
		name: "LEVERADE",
		website: "https://leverade.com",
		description: "LEVERADE is a sports management and monetization system designed to organize, track, and optimize sporting events and related financial operations.",
		icon: "LEVERADE.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "leverade:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.leverade\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "ligna",
		name: "Ligna",
		website: "https://www.ligna.io",
		description: "Ligna is a sales, marketing, and enablement platform offering features to close clients, manage content, oversee projects, and track details, providing an all-in-one solution for business operations.",
		icon: "Ligna.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ligna:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ligna\\.io/"),
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
		id: "liine",
		name: "Liine",
		website: "https://www.liine.com",
		description: "Liine is an all-in-one platform for monitoring, optimizing, and incentivizing the management of new patient calls.",
		icon: "Liine.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "liine:pageGlobal:0",
				kind: "pageGlobal",
				property: "Liine.addURLChangeListener",
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
		id: "linear",
		name: "Linear",
		website: "https://linear.fi/hinnasto",
		description: "Linear is a platform for collecting payments and managing business operations, offering sales and marketing tools for real estate agents, extending beyond a traditional brokerage system.",
		icon: "Linear.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "linear:pageGlobal:0",
				kind: "pageGlobal",
				property: "linearFrontend",
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
		id: "liscio",
		name: "Liscio",
		website: "https://www.liscio.me",
		description: "Liscio is an AI assistant for accounting firms that supports client communication, task coordination, and document workflows to help manage accounting operations.",
		icon: "Liscio.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "liscio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.liscio\\.me/"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "liscio:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunkliscio_ui.push",
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
		id: "mashore-method",
		name: "Mashore Method",
		website: "https://mashoremethod.com",
		description: "Mashore Method is a CRM software designed for real estate businesses to manage customer relationships in one centralized platform.",
		icon: "MashoreMethod.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mashore-method:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.mashoremethod\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "matchlab",
		name: "Matchlab",
		website: "https://match-lab.nl",
		description: "Matchlab is a recruitment platform that enables employers to attract top talent by directly identifying and engaging the best candidates.",
		icon: "Matchlab.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "matchlab:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("matchlabSections"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mazrica",
		name: "Mazrica",
		website: "https://mazrica.com",
		description: "Mazrica is a sales support tool that leverages organizational knowledge, using AI algorithms to analyze accumulated sales data and evaluate success and failure cases.",
		icon: "Mazrica.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mazrica:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mazrica\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mds-brand",
		name: "MDS Brand",
		website: "https://mdsbrand.com",
		description: "MDS Brand is a provider of website, CRM, vrtual BDC, SEO, PPC, and live chat solutions for Marine, RV, Powersports, and automotive industries.",
		icon: "MDS Brand.png",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mds-brand:dom:0",
				kind: "dom",
				selector: "a[href*='mdsbrand.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		requires: [
			"nginx",
			"userway"
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
		id: "membership-toolkit",
		name: "Membership Toolkit",
		website: "https://membershiptoolkit.com",
		description: "Membership Toolkit is a volunteer management platform that organizes scheduling, tracks participation, and streamlines administrative tasks for groups that coordinate community, school, or event-based service activities.",
		icon: "MembershipToolkit.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "membership-toolkit:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.membershiptoolkit\\.com"),
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
		id: "membershipworks",
		name: "MembershipWorks",
		website: "https://membershipworks.com",
		description: "MembershipWorks is a membership software platform that provides tools for managing member records, offering a searchable member directory, and supporting event calendars with integrated registration features.",
		icon: "MembershipWorks.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "membershipworks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.membershipworks\\.com"),
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
		id: "mercer",
		name: "Mercer",
		website: "https://www.mercer.com",
		description: "Mercer is a platform that supports companies in transforming talent, health, retirement, and investment strategies to enhance overall performance and outcomes.",
		icon: "Mercer.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mercer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("career-analytics\\.mercer\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mico",
		name: "Mico",
		website: "https://mico-inc.com",
		description: "Mico is a customer relationship management platform that supports personalized, continuous communication between businesses and customers and includes tools to improve brand visibility across search engines and AI-driven platforms.",
		icon: "Mico.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mico:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mico-cloud\\.jp/"),
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
		id: "mimiran",
		name: "Mimiran",
		website: "https://www.mimiran.com",
		description: "Mimiran is a CRM system designed for managing customer relationships.",
		icon: "Mimiran.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mimiran:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mimiran\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mimiran:pageGlobal:1",
				kind: "pageGlobal",
				property: "mimiran_widget_show",
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
		id: "mintox",
		name: "Mintox",
		website: "https://www.mintox.com",
		description: "Mintox is a business software designed to streamline operations and enhance efficiency.",
		icon: "Mintox.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mintox:pageGlobal:0",
				kind: "pageGlobal",
				property: "MintoxJS",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mintox:pageGlobal:1",
				kind: "pageGlobal",
				property: "mintoxPaging",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mintox:pageGlobal:2",
				kind: "pageGlobal",
				property: "mintoxTrim",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "mintox:meta:3",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^Mintox"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mirai",
		name: "Mirai",
		website: "https://www.mirai.com",
		description: "Mirai is a hotel management system.",
		icon: "Mirai.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mirai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mirai\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mirai:pageGlobal:1",
				kind: "pageGlobal",
				property: "Mirai",
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
		id: "moka-hr",
		name: "Moka HR",
		website: "https://mokahr.com",
		description: "Moka HR is an AI-driven human resources management system offering full-module support for streamlined employee administration.",
		icon: "Moka.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "moka-hr:pageGlobal:0",
				kind: "pageGlobal",
				property: "MOKA_RETRY",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moka-hr:pageGlobal:1",
				kind: "pageGlobal",
				property: "_MOKA_ENV_",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "moka-hr:pageGlobal:2",
				kind: "pageGlobal",
				property: "__moka__extension__kit",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "molin-ai",
		name: "Molin AI",
		website: "https://molin.ai",
		description: "Molin AI is a multilingual tool that reduces support volume by 70%, recommends relevant products to shoppers, and uses up-to-date information from client websites to enhance store revenue.",
		icon: "MolinAI.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "molin-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.molin\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "molin-ai:pageGlobal:1",
				kind: "pageGlobal",
				property: "__INIT_MOLIN_SHOP_AI",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "molin-ai:pageGlobal:2",
				kind: "pageGlobal",
				property: "__INIT_MOLIN_SHOP_AI_OPTIONS",
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
		id: "moyklass",
		name: "Moyklass",
		website: "https://moyklass.com",
		description: "Moyklass is a Russian customer relationship management platform designed to help schools manage student data, track performance, and organize administrative tasks.",
		icon: "Moyklass.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "moyklass:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.moyklass\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mri-box-and-dice",
		name: "MRI Box and Dice",
		website: "https://www.mrisoftware.com/au/products/box-and-dice/",
		description: "MRI Box and Dice is a CRM platform designed for real estate agencies, providing tools for managing client relationships, property listings, and transactions.",
		icon: "MRISoftware.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mri-box-and-dice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.boxdice\\.com\\.au"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "mri-eagle",
		name: "MRI Eagle",
		website: "https://www.mrisoftware.com/au/products/eagle",
		description: "MRI Eagle is a technology solution catering to real estate firms, offering efficiency and cost-saving benefits.",
		icon: "MRISoftware.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "mri-eagle:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.eaglesoftware\\.com\\.au"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "mri-eagle:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.eaglesoftware.com.au']",
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
		id: "myalice",
		name: "MyAlice",
		website: "https://www.myalice.ai",
		description: "MyAlice is a customer support platform designed for ecommerce brands to manage and streamline customer service operations.",
		icon: "MyAlice.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "myalice:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.myalice\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "myalice:pageGlobal:1",
				kind: "pageGlobal",
				property: "MyAliceWebChat",
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
		id: "naukri",
		name: "Naukri",
		website: "https://www.naukri.com",
		description: "Naukri is a job board that connects employers and job seekers by listing employment opportunities across industries and locations.",
		icon: "Naukri.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "naukri:pageGlobal:0",
				kind: "pageGlobal",
				property: "naukriWidget",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "naukri:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("www\\.naukri\\.com"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "neon-crm",
		name: "Neon CRM",
		website: "https://neonone.com",
		description: "Neon CRM, a Neon One company, is a cloud-based customer relationship management (CRM) software suite for nonprofits of all sizes. Applications include fundraising management, donor management, membership management, event registration and management, customised reporting, and more.",
		icon: "Neon One.svg",
		categories: [
			"business-tools",
			"fundraising-donations"
		],
		rules: [
			{
				id: "neon-crm:dom:0",
				kind: "dom",
				selector: "a[href*='.app.neoncrm.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "neon-crm:pageGlobal:1",
				kind: "pageGlobal",
				property: "_neoncrm_ga",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "neon-crm:pageGlobal:2",
				kind: "pageGlobal",
				property: "neonPayCard",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "neon-crm:pageGlobal:3",
				kind: "pageGlobal",
				property: "neoncrm_email_ajax_object",
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
		id: "nexxt",
		name: "Nexxt",
		website: "https://www.nexxt.com",
		description: "Nexxt is a job finder-based system designed to help users search for employment opportunities by matching skills and preferences with job listings across various industries.",
		icon: "Nexxt.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "nexxt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.nexxt\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "nexxt:pageGlobal:1",
				kind: "pageGlobal",
				property: "_bydWto.host",
				valuePattern: new RegExp("\\.nexxt\\.com"),
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "nocnok",
		name: "NOCNOK",
		website: "https://www.nocnok.com",
		description: "NOCNOK is a CRM for real estate agencies that uses AI to automate lead responses, reduce response time, and support sales workflow management.",
		icon: "NOCNOK.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "nocnok:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.nocnok\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "nopaperforms",
		name: "NoPaperForms",
		website: "https://www.nopaperforms.com",
		description: "NoPaperForms is a cloud-based platform that automates and manages student enrollment processes.",
		icon: "NoPaperForms.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "nopaperforms:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("track\\.nopaperforms\\.com"),
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
		id: "northstar-club-management",
		name: "Northstar Club Management",
		website: "https://www.globalnorthstar.com",
		description: "Northstar Club Management is a platform that integrates membership, accounting, reservations, events, and communication tools to streamline daily operations for private clubs and associations.",
		icon: "NorthstarClubManagement.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "northstar-club-management:responseHeader:0",
				kind: "responseHeader",
				key: "Portal",
				valuePattern: new RegExp("^Northstar Connect"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "onlyfy-application-manager",
		name: "onlyfy Application Manager",
		website: "https://recruiting.xing.com/en/products/application-manager",
		description: "onlyfy Application Manager is applicant tracking and recruitment software formerly known as Prescreen, designed to manage hiring processes and candidate applications.",
		icon: "Onlyfy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "onlyfy-application-manager:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("prescreen\\.io/.*iframeWidget\\.js"),
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
		id: "operatebeyond",
		name: "OperateBeyond",
		website: "https://operatebeyond.com/dealer-websites-marketing",
		description: "OperateBeyond is a software development company that offers website design, automated inventory management, CRM, dealer websites, and DMS.",
		icon: "OperateBeyond.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "operatebeyond:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//dealer-cdn\\.com/"),
				description: "Script source URL matches a known technology marker."
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
		id: "otys",
		name: "OTYS",
		website: "https://www.otys.nl",
		description: "OTYS is a Dutch company that specialises in providing recruitment and staffing agencies with software solutions to manage their workflows, including applicant tracking systems, job board integrations, and candidate sourcing tools.",
		icon: "OTYS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "otys:pageGlobal:0",
				kind: "pageGlobal",
				property: "OTYS.siteId",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "otys:pageGlobal:1",
				kind: "pageGlobal",
				property: "otysSelect",
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
		id: "pageup",
		name: "PageUp",
		website: "https://www.pageuppeople.com",
		description: "",
		icon: "PageUp.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pageup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("careers-static\\.pageuppeople\\.com/"),
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
		id: "paradox",
		name: "Paradox",
		website: "https://www.paradox.ai",
		description: "Paradox is an AI company that helps companies capture and screen candidates, improve conversions, and answer all candidate questions.",
		icon: "Paradox.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "paradox:pageGlobal:0",
				kind: "pageGlobal",
				property: "_applybase",
				valuePattern: new RegExp("\\.paradox\\.ai"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "paradox:pageGlobal:1",
				kind: "pageGlobal",
				property: "oliviaChatBaseUrl",
				valuePattern: new RegExp("\\.paradox\\.ai"),
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
		id: "paylocity",
		name: "Paylocity",
		website: "https://www.paylocity.com",
		description: "Paylocity is an American company which provides cloud-based payroll and human capital management software.",
		icon: "Paylocity.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "paylocity:dom:0",
				kind: "dom",
				selector: "a[href*='recruiting\\.paylocity\\.com/recruiting/jobs/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"payg",
				"recurring"
			]
		}
	},
	{
		id: "pcrecruiter",
		name: "PCRecruiter",
		website: "https://www.pcrecruiter.net",
		description: "PCRecruiter is an ATS/CRM hybrid SaaS solution for recruiting and sourcing professionals.",
		icon: "PCRecruiter.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pcrecruiter:pageGlobal:0",
				kind: "pageGlobal",
				property: "pcrbaseurl",
				valuePattern: new RegExp("\\.pcrecruiter\\.net/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pcrecruiter:pageGlobal:1",
				kind: "pageGlobal",
				property: "pcrdialog",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pcrecruiter:pageGlobal:2",
				kind: "pageGlobal",
				property: "pcrframeoptions",
				description: "Page-owned global matches a known technology marker."
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
		id: "pepper-cloud",
		name: "Pepper Cloud",
		website: "https://peppercloud.com",
		description: "Pepper Cloud is a SaaS provider offering CRM solutions for small and middle scale companies across multiple industries.",
		icon: "PepperCloud.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pepper-cloud:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.peppercloud.com/'], text[id*='Powered_by_Pepper_Cloud'] [data-name*='Powered by Pepper Cloud']",
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
		id: "percy",
		name: "Percy",
		website: "https://percy.ai",
		description: "Percy is a platform that uses behavioral data to help real estate agents and mortgage loan officers connect effectively with each other and their clients to increase transactions.",
		icon: "Percy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "percy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/npm/@percy\\.ai/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "perfect-storm",
		name: "Perfect Storm",
		website: "https://www.perfectstormnow.com",
		description: "Perfect Storm is an all-in-one platform for real estate lead generation and customer relationship management, designed to support business scaling.",
		icon: "PerfectStorm.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "perfect-storm:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.perfectstormnow\\.com"),
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
		id: "perfex-crm",
		name: "Perfex CRM",
		website: "https://www.perfexcrm.com",
		description: "Perfex CRM is self hosted customer relationship management software that is a great fit for almost any company, freelancer or many other uses.",
		icon: "Perfex CRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "perfex-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/assets/themes/perfex/js/global\\.min\\.js(?:\\?v=(\\d+(?:\\.\\d+)+))?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "perfex-crm:dom:1",
				kind: "dom",
				selector: "link[href*='perfexcrm.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime",
				"low"
			]
		}
	},
	{
		id: "personio",
		name: "Personio",
		website: "https://www.personio.com",
		description: "Personio is the all-in-one HR software for small- and medium-sized companies with 10 to 2000 employees.",
		icon: "Personio.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "personio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.cdn\\.personio\\."),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "personio:dom:1",
				kind: "dom",
				selector: "a[href*='.jobs.personio.']",
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
		id: "phenom",
		name: "Phenom",
		website: "https://www.phenom.com",
		description: "Phenom is a talent relationship marketing platform.",
		icon: "Phenom.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "phenom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.phenompeople\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "phorest",
		name: "Phorest",
		website: "https://www.phorest.com",
		description: "Phorest software is an all-in-one solution for managing and growing businesses in the hair, beauty, barber, and spa industries.",
		icon: "Phorest.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "phorest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("booking-widget\\.phorestcdn\\.com/"),
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
		id: "pico",
		name: "Pico",
		website: "https://trypico.com",
		icon: "pico.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pico:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.pico\\.tools"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pico:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pico",
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
		id: "pilera",
		name: "Pilera",
		website: "https://www.pilera.com",
		description: "Pilera is a property management software platform that organizes community operations, resident communications, and maintenance activities.",
		icon: "Pilera.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pilera:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.pilera\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "pilera:pageGlobal:1",
				kind: "pageGlobal",
				property: "Pilera.logosRootUrl",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "pilera:pageGlobal:2",
				kind: "pageGlobal",
				property: "PileraBackboneCollection",
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
		id: "piperun",
		name: "Piperun",
		website: "https://crmpiperun.com",
		description: "Piperun is a CRM designed to automate and enhance sales performance for companies managing complex sales processes and channel partnerships.",
		icon: "Piperun.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "piperun:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.crmpiperun\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "piperun:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.pipe\\.run/"),
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
		id: "plait",
		name: "Plait",
		website: "http://plaithealth.com",
		description: "Plait is a productivity software for health practices that supports team collaboration with patients to enhance efficiency and drive business growth.",
		icon: "Plait.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "plait:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.plaithealth\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "plait:pageGlobal:1",
				kind: "pageGlobal",
				property: "$plait",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "plait:pageGlobal:2",
				kind: "pageGlobal",
				property: "plaitSDK",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "plait:pageGlobal:3",
				kind: "pageGlobal",
				property: "plaitSettings",
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
		id: "plannit",
		name: "Plannit",
		website: "https://plannit.io",
		description: "Plannit is a task management home services network.",
		icon: "Plannit.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "plannit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.plannit\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "plannit:pageGlobal:1",
				kind: "pageGlobal",
				property: "PlannitCallTracking",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "plutio",
		name: "Plutio",
		website: "https://www.plutio.com",
		description: "Plutio is an all-in-one platform for business management, team collaboration, and client interaction.",
		icon: "Plutio.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "plutio:dom:0",
				kind: "dom",
				selector: "link[href*='cdn.plutio.com/']",
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
		id: "podio",
		name: "Podio",
		website: "https://www.podio.com",
		description: "Podio is a customizable social work platform for collaboration with co-workers and clients, enabling task management and communication.",
		icon: "Podio.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "podio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//podio\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "podio:pageGlobal:1",
				kind: "pageGlobal",
				property: "_podioWebForm",
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
		id: "point",
		name: "POINT",
		website: "https://pointapp.org",
		description: "POINT is a volunteer management platform and app for nonprofits to find and manage volunteers.",
		icon: "POINT.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "point:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//pointapp\\.org(?:/.*)?(?:\\?.*)?$"),
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
		id: "popcorn-crm",
		name: "Popcorn CRM",
		website: "https://popcorncrm.co.uk",
		description: "Popcorn CRM is a visual CRM providing essential tools to manage customer relationships and support business growth.",
		icon: "PopcornCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "popcorn-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.popcorn\\.email"),
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
		id: "popmix",
		name: "Popmix",
		website: "https://popmixcrm.com",
		description: "Popmix CRM is a customer relationship management platform designed to manage sales, marketing, and recruitment activities through unified tools for tracking, communication, and performance analysis.",
		icon: "PopmixCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "popmix:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.popmixcrm\\.com"),
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
		id: "power-crm",
		name: "Power CRM",
		website: "https://site.powercrm.com.br",
		description: "Power CRM is a platform tailored for vehicle protection associations, offering support to meet operational needs.",
		icon: "PowerCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "power-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.powercrm\\.com\\.br"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "power-crm:pageGlobal:1",
				kind: "pageGlobal",
				property: "PowerCRM.init",
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
		id: "practice-perfect",
		name: "Practice Perfect",
		website: "https://practiceperfectemr.com",
		description: "Practice Perfect is a cloud-based EMR and practice management application that integrates scheduling, billing, documentation, and reporting for healthcare providers.",
		icon: "PracticePerfect.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "practice-perfect:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.practiceperfectemr\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "praedium",
		name: "Praedium",
		website: "https://praedium.com.br",
		description: "",
		icon: "Praedium.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "praedium:dom:0",
				kind: "dom",
				selector: "link[href*='.praedium.com.br/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "praedium:pageGlobal:1",
				kind: "pageGlobal",
				property: "PraediumFilters",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "praedium:cookie:2",
				kind: "cookie",
				key: "site_praedium_session",
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
		id: "prodpad",
		name: "ProdPad",
		website: "https://www.prodpad.com",
		description: "ProdPad is a product management software platform enabling teams to gather ideas, set priorities, and create adaptable product roadmaps.",
		icon: "ProdPad.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "prodpad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.prodpad\\.com/"),
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
		id: "profeat",
		name: "Profeat",
		website: "https://profeat.team",
		description: "Profeat is a CRM software enabling integration of WhatsApp and Instagram.",
		icon: "Profeat.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "profeat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.profeat\\.team/"),
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
		id: "property-shell",
		name: "Property Shell",
		website: "https://propertyshell.com",
		description: "Property Shell is a real estate CRM solution to manage, develop, and drive the selling of residential and commercial property, and more.",
		icon: "PropertyShell.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "property-shell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.propertyshell\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "property-shell:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("api\\.propertyshell\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "propflo",
		name: "PropFlo",
		website: "https://www.propflo.ai",
		description: "PropFlo is an AI-powered real estate CRM designed for developers and channel partners to streamline customer relationship management and enhance sales processes.",
		icon: "PropFlo.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "propflo:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.propflo\\.ai"),
				description: "Script content contains a bounded technology signature."
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
		id: "proposify",
		name: "Proposify",
		website: "https://www.proposify.com",
		description: "Proposify is a proposal software that provides sales leaders with control and visibility over key stages of the sales process.",
		icon: "Proposify.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "proposify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.proposify\\.com"),
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
		id: "prostoy",
		name: "Prostoy",
		website: "https://www.prostoy.ru",
		description: "Prostoy is a business CRM system designed for small and medium businesses to manage customer relationships and streamline operations.",
		icon: "Prostoy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "prostoy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.prostoy\\.ru"),
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
		id: "proto-aicx",
		name: "Proto AICX",
		website: "https://www.proto.cx",
		description: "Proto AICX is a provider of inclusive CX automation and multilingual contact center solutions, enabling deployment of AI chatbots, live chat, ticketing systems, and CRM for businesses and governments.",
		icon: "ProtoAICX.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "proto-aicx:pageGlobal:0",
				kind: "pageGlobal",
				property: "Proto.close",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "proto-aicx:pageGlobal:1",
				kind: "pageGlobal",
				property: "protoSettings",
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
		id: "ptminder",
		name: "PTminder",
		website: "https://www.ptminder.com",
		description: "PTminder is a business management platform designed for personal trainers.",
		icon: "PTMinder.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "ptminder:pageGlobal:0",
				kind: "pageGlobal",
				property: "ptminder_clients_auth",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ptminder:pageGlobal:1",
				kind: "pageGlobal",
				property: "ptminder_jsonp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ptminder:pageGlobal:2",
				kind: "pageGlobal",
				property: "ptminder_jsonp_forgot_password",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ptminder:pageGlobal:3",
				kind: "pageGlobal",
				property: "ptminder_jsonp_keep_logged",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ptminder:pageGlobal:4",
				kind: "pageGlobal",
				property: "ptminder_jsonp_sign_up",
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
		id: "pubfunnels",
		name: "Pubfunnels",
		website: "https://pubfunnels.com",
		description: "Pubfunnels is a business hub designed for publishers and authors to manage, promote, and grow their publishing operations.",
		icon: "Pubfunnels.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "pubfunnels:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.pubfunnels\\.com"),
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
		id: "q4",
		name: "Q4",
		website: "https://www.q4inc.com/products/investor-relations-websites/default.aspx",
		description: "Q4 is a SaaS platform that provides communication and intelligence solutions to investor relations professionals.",
		icon: "Q4.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "q4:pageGlobal:0",
				kind: "pageGlobal",
				property: "q4App.a11yAnnouncement",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "q4:pageGlobal:1",
				kind: "pageGlobal",
				property: "q4Defaults.fancySignup",
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
		id: "qomon",
		name: "Qomon",
		website: "https://qomon.com",
		description: "Qomon is a Saas software and citizen engagement platform and mobile app for NGOs, movements, campaigns, advocacy groups, and citizen-driven organisations.",
		icon: "Qomon.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "qomon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.qomon\\.org"),
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
		id: "radancy",
		name: "Radancy",
		website: "https://www.radancy.com",
		description: "Radancy is an online platform facilitating virtual hiring events and career fairs.",
		icon: "Radancy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "radancy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.brazenconnect\\.com/js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "radancy:pageGlobal:1",
				kind: "pageGlobal",
				property: "brazenTechnologies",
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
		id: "rapid-active-crm",
		name: "Rapid Active CRM",
		website: "https://rapidactivecrm.com",
		description: "Rapid Active CRM is an all-in-one sales and marketing automation platform designed to drive business growth.",
		icon: "RapidActiveCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rapid-active-crm:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.rapidactivecrm\\.com"),
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
		id: "re-os-com",
		name: "RE-OS.com",
		website: "https://re-os.com",
		description: "RE-OS.com is a platform providing multiple listing service (MLS) functionality and customer relationship management (CRM) tools for managing real estate data and client interactions.",
		icon: "RE-OS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "re-os-com:dom:0",
				kind: "dom",
				selector: "link[href*='cdnc.re-os.com/']",
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
		id: "recooty-job-widget",
		name: "Recooty Job Widget",
		website: "https://recooty.com/job-widget-tool",
		description: "Recooty Job Widget is a web integration tool that allows businesses to embed live job listings directly onto their websites.",
		icon: "Recooty.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "recooty-job-widget:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("jobwidget\\.recooty\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "recooty-job-widget:pageGlobal:1",
				kind: "pageGlobal",
				property: "RecootyWidget.init",
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
		id: "recop",
		name: "Recop",
		website: "https://recop.jp",
		description: "Recop is a recruitment optimization system from Japan.",
		icon: "Recop.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "recop:pageGlobal:0",
				kind: "pageGlobal",
				property: "$recop.Event",
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
		id: "recruitee",
		name: "Recruitee",
		website: "https://recruitee.com",
		description: "Recruitee is an integrated cloud-based recruitment management and applicant tracking system.",
		icon: "Recruitee.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "recruitee:dom:0",
				kind: "dom",
				selector: "a[href*='.recruitee.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "recruitee:pageGlobal:1",
				kind: "pageGlobal",
				property: "RtApp.mapBoxToken",
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
		id: "recruition",
		name: "Recruition",
		website: "https://recruition.nl",
		description: "Recruition is a software platform designed to streamline and manage the recruitment process.",
		icon: "Recruition.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "recruition:meta:0",
				kind: "meta",
				key: "publisher",
				valuePattern: new RegExp("^Recruition"),
				description: "Meta tag matches a known technology marker."
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
		id: "refari",
		name: "Refari",
		website: "https://www.refari.co",
		description: "Refari is a platform that provides digital tools designed to streamline and support recruitment processes for hiring teams and agencies.",
		icon: "Refari.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "refari:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.refari\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "refari:pageGlobal:1",
				kind: "pageGlobal",
				property: "refari.load",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rent-syst",
		name: "Rent Syst",
		website: "https://rentsyst.com",
		description: "Rent Syst is a CRM system designed to manage customer relationships, bookings, and communication for car rental businesses.",
		icon: "RentSyst.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rent-syst:pageGlobal:0",
				kind: "pageGlobal",
				property: "RentsystFrame",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "rent-syst:pageGlobal:1",
				kind: "pageGlobal",
				property: "Rentsyst_Activate",
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
		id: "rentcafe",
		name: "RentCafe",
		website: "https://www.rentcafe.com",
		description: "RentCafe is a residential rent management platform.",
		icon: "RentCafe.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rentcafe:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.rentcafe\\.com/"),
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
		id: "resimpli",
		name: "REsimpli",
		website: "https://resimpli.com",
		description: "REsimpli is a customer relationship management platform designed for real estate investors, providing integrated tools for managing sales, marketing, and business operations.",
		icon: "REsimpli.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "resimpli:pageGlobal:0",
				kind: "pageGlobal",
				property: "resimpli_iframe_stop_comman_callback",
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
		id: "reviews-up",
		name: "Reviews Up",
		website: "https://reviewsup.com",
		description: "Reviews Up is a platform that collects and displays user ratings and feedback to evaluate products, services, or experiences.",
		icon: "ReviewsUp.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "reviews-up:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getreviewsup\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "reviews-up:pageGlobal:1",
				kind: "pageGlobal",
				property: "ReviewsUpWidgets",
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
		id: "richpanel",
		name: "Richpanel",
		website: "https://www.richpanel.com",
		description: "Richpanel is a purpose-built CRM and customer support platform for ecommerce and DTC brands.",
		icon: "Richpanel.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "richpanel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.richpanel\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "richpanel:pageGlobal:1",
				kind: "pageGlobal",
				property: "Richpanel.PLUGIN_API_URL",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "richpanel:pageGlobal:2",
				kind: "pageGlobal",
				property: "RichpanelAppProxy",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "richpanel:pageGlobal:3",
				kind: "pageGlobal",
				property: "richpanel_messenger_url",
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
		id: "rinsed",
		name: "Rinsed",
		website: "https://www.rinsed.com",
		description: "Rinsed is a customer relationship management software tailored for the car wash industry.",
		icon: "Rinsed.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rinsed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.app\\.rinsed\\.co/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rinsed:pageGlobal:1",
				kind: "pageGlobal",
				property: "isRinsedScriptLoaded",
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
		id: "roller",
		name: "Roller",
		website: "https://www.roller.software",
		description: "Roller is an all-in-one software that helps operators boost revenue and deliver a better guest experience.",
		icon: "Roller.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "roller:dom:0",
				kind: "dom",
				selector: "iframe#roller-widget, template[data-nitro-marker-id='roller-checkout']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "roller:pageGlobal:1",
				kind: "pageGlobal",
				property: "RollerCheckout",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "roller:pageGlobal:2",
				kind: "pageGlobal",
				property: "RollerConstants",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "roller:pageGlobal:3",
				kind: "pageGlobal",
				property: "rollerDL",
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
		id: "rollick",
		name: "Rollick",
		website: "https://rollick.io",
		description: "Rollick is a lead management solution that connects manufacturers and dealers in the powersports, RV, marine, and industrial equipment industries.",
		icon: "Rollick.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rollick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.rollick\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "rubic",
		name: "Rubic",
		website: "https://rubic.no",
		description: "Rubic is an association management software designed to support organizations in handling membership, events, and administrative tasks.",
		icon: "Rubic.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "rubic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.rubic\\.no"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "rubic:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.rubic\\.no"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "saabu",
		name: "Saabu",
		website: "https://saabu.io",
		description: "Saabu is a CRM automation platform designed to streamline sales processes and support the growth of sales teams.",
		icon: "Saabu.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "saabu:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.saabu\\.io"),
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
		id: "sabeeapp",
		name: "SabeeApp",
		website: "https://www.sabeeapp.com",
		description: "SabeeApp is a property management system for hoteliers, managing reservations, controlling online distribution platforms, handling payments, and engaging with guests.",
		icon: "SabeeApp.svg",
		categories: [
			"business-tools",
			"booking-scheduling"
		],
		rules: [
			{
				id: "sabeeapp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ibe\\.sabeeapp\\.com/v(\\d+)/scripts"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sabeeapp:pageGlobal:1",
				kind: "pageGlobal",
				property: "webhome",
				valuePattern: new RegExp("ibe\\.sabeeapp\\.com"),
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
		id: "salescandy",
		name: "SalesCandy",
		website: "https://www.salescandy.com",
		description: "SalesCandy is a sales performance improvement solution designed to optimize sales team efficiency through automated lead distribution, real-time tracking, and actionable insights.",
		icon: "SalesCandy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salescandy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salescandy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salescandy:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.salescandy\\.com/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "salesforce",
		name: "Salesforce",
		website: "https://www.salesforce.com",
		description: "Salesforce is a cloud computing service software (SaaS) that specializes in customer relationship management (CRM).",
		icon: "Salesforce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salesforce:html:0",
				kind: "html",
				pattern: new RegExp("<[^>]+=\"brandQuaternaryFgrs\""),
				description: "HTML contains a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:1",
				kind: "pageGlobal",
				property: "SFDCApp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:2",
				kind: "pageGlobal",
				property: "SFDCCmp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:3",
				kind: "pageGlobal",
				property: "SFDCPage",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:4",
				kind: "pageGlobal",
				property: "SFDCSessionVars",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:5",
				kind: "pageGlobal",
				property: "pardot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:pageGlobal:6",
				kind: "pageGlobal",
				property: "piHostname",
				valuePattern: new RegExp("pi.pardot"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce:cookie:7",
				kind: "cookie",
				key: "com.salesforce",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "salesforce:dns:8",
				kind: "dns",
				valuePattern: new RegExp("salesforce\\.com"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low"
			],
			cpe: "cpe:2.3:a:salesforce:*:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "salesforce-desk",
		name: "Salesforce Desk",
		website: "https://www.salesforce.com/solutions/small-business-solutions/help-desk-software/",
		description: "Salesforce Desk(Desk.com) is software as a service (SaaS) tool on the help desk.",
		icon: "Salesforce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salesforce-desk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^/s/sfsites/auraFW/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesforce-desk:dom:1",
				kind: "dom",
				selector: "link[href*='/s/sfsites/']",
				description: "DOM selector matches a known technology marker."
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
		id: "salesforce-experience-cloud",
		name: "Salesforce Experience Cloud",
		website: "https://www.salesforce.com/ca/products/community-cloud/solutions/",
		description: "Salesforce Experience Cloud is a CRM-powered SaaS solution for creating external portals and communities connected to Salesforce data and workflows.",
		icon: "Salesforce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salesforce-experience-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^/s/sfsites/auraFW/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesforce-experience-cloud:dom:1",
				kind: "dom",
				selector: "link[href*='/s/sfsites/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "salesforce-experience-cloud:pageGlobal:2",
				kind: "pageGlobal",
				property: "lwcRuntimeFlags",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "salesforce-experience-cloud:meta:3",
				kind: "meta",
				key: "salesforce-community",
				description: "Meta tag matches a known technology marker."
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
		id: "salesmachine",
		name: "Salesmachine",
		website: "https://salesmachine.io",
		description: "Salesmachine is a platform that boosts sales, enhances performance, and supports customer retention through data-driven strategies.",
		icon: "Salesmachine.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salesmachine:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.salesmachine\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "salesmachine:pageGlobal:1",
				kind: "pageGlobal",
				property: "salesmachine",
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
		id: "salesmatch",
		name: "SalesMatch",
		website: "https://salesmatch.ai",
		description: "SalesMatch is a business automation platform that streamlines operations through integrated applications, optimizing process management and growth.",
		icon: "SalesMatch.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salesmatch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.salesmatch\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salesmatch:pageGlobal:1",
				kind: "pageGlobal",
				property: "salesmatchSettings",
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
		id: "salespype",
		name: "Salespype",
		website: "https://salespype.com",
		description: "Salespype is a CRM platform with integrated marketing automation tools to streamline customer relationship management and marketing processes.",
		icon: "Salespype.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "salespype:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.salespype\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "salespype:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.salespype\\.com"),
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
		id: "sap",
		name: "SAP",
		website: "https://sap.com",
		icon: "SAP.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sap:responseHeader:0",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("SAP NetWeaver Application Server"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:sap:netweaver_application_server:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "sbercrm",
		name: "SberCRM",
		website: "https://sbercrm.com",
		description: "SberCRM is a customer relationship management system designed to help businesses manage leads, track customer interactions, and convert prospects into sales.",
		icon: "SberCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sbercrm:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.macro\\.sbercrm\\.com"),
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
		id: "sellsy",
		name: "Sellsy",
		website: "https://go.sellsy.com",
		description: "Sellsy is a cloud-based sales management solution for small to midsize businesses",
		icon: "Sellsy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sellsy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sellsy\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sellsy:pageGlobal:1",
				kind: "pageGlobal",
				property: "SellsySnippet",
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
		id: "servicecore",
		name: "ServiceCore",
		website: "https://servicecore.com",
		description: "ServiceCore is a software solution for portable toilet, septic, and dumpster businesses that manages jobs, optimizes routes, tracks inventory, and automates billing to improve operational efficiency.",
		icon: "ServiceCore.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "servicecore:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.servicecorecms\\.wpengine\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "servicem8",
		name: "ServiceM8",
		website: "https://www.servicem8.com",
		description: "ServiceM8 is a field service management application that enables job dispatch, staff location, and communication with employees and clients without phone calls.",
		icon: "ServiceM8.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "servicem8:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.servicem8\\.com/"),
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
		id: "sherlock",
		name: "Sherlock",
		website: "https://sherlocksoftware.com",
		description: "Sherlock is a platform that offers specialized real estate property management software, including trust accounting, for residential, commercial, sales, and holiday properties.",
		icon: "Sherlock.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sherlock:pageGlobal:0",
				kind: "pageGlobal",
				property: "Sherlock_favourite_properties",
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
		id: "showdigs",
		name: "Showdigs",
		website: "https://www.showdigs.com",
		description: "Showdigs is an AI-backed leasing automation platform designed to streamline the entire rental funnel.",
		icon: "Showdigs.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "showdigs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.showdigs\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "showdigs:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.showdigs\\.com"),
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
		id: "sierra-interactive",
		name: "Sierra Interactive",
		website: "https://www.sierrainteractive.com",
		description: "Sierra Interactive is a real estate platform that enables brand differentiation and personalized lead nurturing for property professionals.",
		icon: "SierraInteractive.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sierra-interactive:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.sierrainteractive\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sierra-interactive:pageGlobal:1",
				kind: "pageGlobal",
				property: "SI_BASE_URL_CAA",
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
		id: "signals",
		name: "Signals",
		website: "https://getsignals.ai",
		description: "Signals is a cloud-based platform for managing employee pipelines, handling tickets, training new hires, and scaling recruiting operations.",
		icon: "Signals.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "signals:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.getsignals\\.ai"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "signals:pageGlobal:1",
				kind: "pageGlobal",
				property: "SignalsSDK",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "simbla",
		name: "Simbla",
		website: "https://www.simbla.com",
		description: "Simbla is an AI-powered CRM platform.",
		icon: "Simbla.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "simbla:pageGlobal:0",
				kind: "pageGlobal",
				property: "Simbla",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "simbla:pageGlobal:1",
				kind: "pageGlobal",
				property: "createSimblaObj",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "simbla:pageGlobal:2",
				kind: "pageGlobal",
				property: "isSimblaObject",
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
		id: "sinch",
		name: "Sinch",
		website: "https://www.sinch.com",
		description: "Sinch is a platform that connects businesses and customers through tools that enable personal engagement.",
		icon: "Sinch.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sinch:pageGlobal:0",
				kind: "pageGlobal",
				property: "SinchClient",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sinch:pageGlobal:1",
				kind: "pageGlobal",
				property: "SinchSdk",
				description: "Page-owned global matches a known technology marker."
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
		id: "slate",
		name: "Slate",
		website: "https://technolutions.com",
		description: "Slate is a CRM system designed specifically for higher education institutions, which helps them to manage student interactions, track admissions, and analyze student data in a flexible and user-friendly way.",
		icon: "Slate.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "slate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("slate-technolutions-net\\.cdn\\.technolutions\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "slate:dom:1",
				kind: "dom",
				selector: "link[href*='slate-technolutions-net.cdn.technolutions.net/']",
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
		id: "sm-sold",
		name: "SM Sold",
		website: "https://smsold.com",
		description: "SM Sold is a platform providing integrated solutions for real estate agents and brokers to manage listings, client interactions, and transactions.",
		icon: "SMSold.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sm-sold:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.smsold\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "sm-sold:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^SMSold$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "smartrecruiters",
		name: "SmartRecruiters",
		website: "https://www.smartrecruiters.com",
		description: "SmartRecruiters is a web-based talent acquisition platform.",
		icon: "SmartRecruiters.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "smartrecruiters:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartrecruiters\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "smartrecruiters:dom:1",
				kind: "dom",
				selector: "a[href*='careers.smartrecruiters.com/']",
				description: "DOM selector matches a known technology marker."
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
		id: "snaphop",
		name: "SnapHop",
		website: "https://snaphop.com",
		description: "SnapHop is a recruitment marketing platform that helps organizations attract, engage, and convert job seekers through targeted employer branding and outreach strategies.",
		icon: "SnapHop.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "snaphop:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.snaphop-analytics\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "snaphop:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^SnapHop$"),
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
		id: "snipercrm",
		name: "SniperCRM",
		website: "https://snipercrm.io",
		description: "SniperCRM is a platform designed to automate, manage, and scale ecommerce operations.",
		icon: "SniperCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "snipercrm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.snipercrm\\.io/"),
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
		id: "soffront-crm",
		name: "Soffront CRM",
		website: "https://soffront.com/white-label-crm",
		description: "Soffront is a white-label CRM software platform for managing customer data, sales workflows, and marketing activities within a customizable interface.",
		icon: "Soffront.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "soffront-crm:dom:0",
				kind: "dom",
				selector: "form[action*='api.soffront.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "softwaresuggest",
		name: "SoftwareSuggest",
		website: "https://www.softwaresuggest.com",
		description: "SoftwareSuggest is a platform assisting businesses in locating suitable software solutions.",
		icon: "SoftwareSuggest.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "softwaresuggest:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("trk\\.softwaresuggest\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "softwaresuggest:dom:1",
				kind: "dom",
				selector: "iframe[src*='trk.softwaresuggest.com']",
				description: "DOM selector matches a known technology marker."
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
		id: "solutionreach",
		name: "SolutionReach",
		website: "https://www.solutionreach.com",
		description: "SolutionReach is a patient engagement and retention platform that helps healthcare providers maintain contact with patients from initial appointment through final payment.",
		icon: "SolutionReach.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "solutionreach:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.solutionreach\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "solutionreach:dom:1",
				kind: "dom",
				selector: "iframe[src*='.solutionreach.com/']",
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
		id: "sonar",
		name: "Sonar",
		website: "https://sendsonar.com",
		description: "Sonar is a fully integrated system offering loan origination and point-of-sale solutions, combined with customer relationship management capabilities.",
		icon: "Sonar.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sonar:pageGlobal:0",
				kind: "pageGlobal",
				property: "SonarChatWidget.display",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sonar:pageGlobal:1",
				kind: "pageGlobal",
				property: "mySonar.ajaxProtocol",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "sota-crm",
		name: "SOTA CRM",
		website: "https://sotacrm.com",
		description: "SOTA CRM is a software solution designed to help businesses manage customer relationships and related data.",
		icon: "SOTACRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sota-crm:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.sotacrm\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "spektrix",
		name: "Spektrix",
		website: "https://www.spektrix.com",
		description: "Spektrix is a cloud-based ticketing, marketing, and fundraising CRM system putting audience insight at your fingertips.",
		icon: "Spektrix.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "spektrix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.spektrix\\.com/"),
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
		id: "spoki",
		name: "Spoki",
		website: "https://spoki.it",
		description: "Spoki is a WhatsApp conversational platform designed to provide marketing, sales, and customer support.",
		icon: "Spoki.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "spoki:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.spoki\\.it/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spoki:dom:1",
				kind: "dom",
				selector: "style#spoki-style-buttons",
				description: "DOM selector matches a known technology marker."
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
		id: "sprinklr",
		name: "Sprinklr",
		website: "https://www.sprinklr.com",
		description: "Sprinklr is a customer experience management platform that unifies front-office teams, tools, and touchpoints using AI technology.",
		icon: "Sprinklr.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "sprinklr:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sprinklr\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sprinklr:pageGlobal:1",
				kind: "pageGlobal",
				property: "sprChat",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "sprinklr:pageGlobal:2",
				kind: "pageGlobal",
				property: "sprChatSettings",
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
		id: "spruce",
		name: "Spruce",
		website: "https://sprucehealth.com",
		description: "Spruce is a digital healthcare platform that provides virtual medical services and tools for managing patient care.",
		icon: "Spruce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "spruce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget-api\\.sprucehealth\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "spruce:pageGlobal:1",
				kind: "pageGlobal",
				property: "__SPRUCE_WIDGET_CONFIG__",
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
		id: "staffbase",
		name: "Staffbase",
		website: "https://staffbase.com",
		description: "Staffbase is an internal communications platform provider.",
		icon: "Staffbase.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "staffbase:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.staffbasestatic\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "staffbase:pageGlobal:1",
				kind: "pageGlobal",
				property: "staffbase",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "staffbase:pageGlobal:2",
				kind: "pageGlobal",
				property: "staffbaseIconFontVersion",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "staffbase:pageGlobal:3",
				kind: "pageGlobal",
				property: "webpackChunkStaffbase",
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
		id: "storagepug",
		name: "StoragePug",
		website: "https://www.storagepug.com",
		description: "StoragePug is a real estate rental conversion tool designed to capture and manage inquiries from property listings.",
		icon: "StoragePug.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "storagepug:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.storagepug\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "store-vantage",
		name: "Store Vantage",
		website: "https://storevantage.com",
		description: "Store Vantage is a scheduling and customer relationship management platform designed to help small businesses organize appointments, manage client records, and track interactions.",
		icon: "StoreVantage.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "store-vantage:pageGlobal:0",
				kind: "pageGlobal",
				property: "_storevantage.account",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "store-vantage:cookie:1",
				kind: "cookie",
				key: "storevantage",
				description: "Cookie name matches a known technology marker."
			},
			{
				id: "store-vantage:cookie:2",
				kind: "cookie",
				key: "svSession",
				description: "Cookie name matches a known technology marker."
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
		id: "strolid",
		name: "Strolid",
		website: "https://strolid.com",
		description: "Strolid is an automotive BDC that integrates with various industry CRMs, enabling dealerships to automate workflows.",
		icon: "Strolid.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "strolid:pageGlobal:0",
				kind: "pageGlobal",
				property: "STROLID.strolid_chat_widget_url",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "subscribfy",
		name: "Subscribfy",
		website: "https://subscribfy.ai",
		description: "Subscribfy is a platform that enables users to organize, track, and manage their subscriptions in one place.",
		icon: "Subscribfy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "subscribfy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app1\\.subscribfy\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "subscribfy:pageGlobal:1",
				kind: "pageGlobal",
				property: "SUBSCRIBFYFASTMODE",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "subscribfy:pageGlobal:2",
				kind: "pageGlobal",
				property: "SUBSCRIBFY_CLR",
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
		id: "suitecrm",
		name: "SuiteCRM",
		website: "https://suitecrm.com",
		description: "SuiteCRM is an open-source alternative to proprietary software such as Salesforce and Dynamics, offering customer relationship management features.",
		icon: "SuiteCRM.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "suitecrm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("themes/SuiteP/js/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "suitecrm:dom:1",
				kind: "dom",
				selector: "link[href*='dist/themes/suite8/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "suitecrm:cookie:2",
				kind: "cookie",
				key: "SCRMSESSID",
				description: "Cookie name matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: true
		}
	},
	{
		id: "survale",
		name: "Survale",
		website: "https://survale.com",
		description: "Survale is an employer satisfaction platform.",
		icon: "Survale.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "survale:pageGlobal:0",
				kind: "pageGlobal",
				property: "survale.add_event",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "survale:pageGlobal:1",
				kind: "pageGlobal",
				property: "survale_custom",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "survale:pageGlobal:2",
				kind: "pageGlobal",
				property: "survale_obj",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "survale:pageGlobal:3",
				kind: "pageGlobal",
				property: "survale_site_ids",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "swapcard",
		name: "Swapcard",
		website: "https://www.swapcard.com",
		description: "Swapcard is a platform that helps convert event engagement into revenue by connecting attendees, enhancing interaction, and providing monetization tools for organizers.",
		icon: "Swapcard.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "swapcard:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.swapcard\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "swat-io",
		name: "Swat.io",
		website: "https://swat.io",
		description: "Swat.io is a platform offering social media management solutions for teams.",
		icon: "Swat.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "swat-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.swat\\.io/"),
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
		id: "talent-clue",
		name: "Talent Clue",
		website: "https://talentclue.com",
		description: "Talent Clue is an inbound recruitment tool designed to help organizations connect with top talent.",
		icon: "TalentClue.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "talent-clue:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("careers\\.talentclue\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "talent-clue:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.talentclue\\.com/"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "talentbrew",
		name: "TalentBrew",
		website: "https://talentbrewrecruitment.co.uk",
		description: "TalentBrew is a platform that streamlines the recruitment process.",
		icon: "TalentBrew.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "talentbrew:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tbcdn\\.talentbrew\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "talentegy",
		name: "Talentegy",
		website: "https://www.talentegy.com",
		description: "Talentegy is an employee management system.",
		icon: "Talentegy.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "talentegy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.talentegy\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "talention",
		name: "Talention",
		website: "https://www.talention.com",
		description: "Talention is a recruitment marketing software designed to help companies attract, engage, and convert job candidates through data-driven strategies and tools.",
		icon: "Talention.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "talention:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.eu\\.talention\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "talention:pageGlobal:1",
				kind: "pageGlobal",
				property: "myTalentionConfig",
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
		id: "taxdome",
		name: "Taxdome",
		website: "https://taxdome.com",
		description: "Taxdome is a practice management software designed for tax and accounting firms to streamline workflows, manage clients, and organize documents.",
		icon: "Taxdome.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "taxdome:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.taxdome\\.com/"),
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
		id: "tdo-software",
		name: "TDO Software",
		website: "https://wwww.tdo4endo.com",
		description: "TDO is a practice management software designed for endodontists to build a modern office environment.",
		icon: "TDOSoftware.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tdo-software:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("tdosites\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tdo-software:dom:1",
				kind: "dom",
				selector: "link[href*='//tdosites.com'][rel='dns-prefetch']",
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
		id: "teamtailor",
		name: "Teamtailor",
		website: "https://www.teamtailor.com",
		description: "Teamtailor is an applicant tracking system, career site and analytics dashboard combined, mobile friendly, and  all-in-one recruitment platform.",
		icon: "teamtailor.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "teamtailor:pageGlobal:0",
				kind: "pageGlobal",
				property: "Teamtailor.Ziggeo",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "teamunify",
		name: "TeamUnify",
		website: "https://www.teamunify.com",
		description: "TeamUnify is an all-in-one swim platform that simplifies swim team management.",
		icon: "TeamUnify.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "teamunify:pageGlobal:0",
				kind: "pageGlobal",
				property: "TeamUnifyUpdateSubsystem",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "teamunify:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^TeamUnify$"),
				description: "Meta tag matches a known technology marker."
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
		id: "tebra",
		name: "Tebra",
		website: "https://www.tebra.com",
		description: "Tebra is an all-in-one EHR solution designed to streamline practice operations, improve patient care, and support financial performance.",
		icon: "Tebra.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tebra:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.tebra\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "tender-support",
		name: "Tender Support",
		website: "https://tenderapp.com",
		description: "Tender Support is a customer service software offering essential tools to enhance customer support.",
		icon: "TenderSupport.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tender-support:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.tenderapp\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tender-support:pageGlobal:1",
				kind: "pageGlobal",
				property: "Tender",
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
		id: "tessitura",
		name: "Tessitura",
		website: "https://www.tessituranetwork.com",
		icon: "tessitura.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tessitura:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]+Tessitura Version: (\\d*\\.\\d*\\.\\d*)?"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net",
			"iis",
			"windows-server"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "textline",
		name: "Textline",
		website: "https://www.textline.com",
		description: "Textline is a business texting platform designed for customer support, sales, marketing, and logistics teams to streamline communication and improve workflow efficiency.",
		icon: "Textline.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "textline:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.textline\\.com/"),
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
		id: "tiled",
		name: "Tiled",
		website: "https://www.tiled.co",
		description: "Tiled is a microapp platform proven to drive engagement and deliver insight.",
		icon: "Tiled.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tiled:dom:0",
				kind: "dom",
				selector: "iframe[src*='s.tiled.co/']",
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
		id: "tiller",
		name: "Tiller",
		website: "https://www.tillerhq.com",
		description: "Tiller is a tool that automatically tracks your spending, balances, and budgets in flexible spreadsheets owned by you.",
		icon: "Tiller.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tiller:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.by\\.tiller\\.co/"),
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
		id: "tint-wiz",
		name: "Tint Wiz",
		website: "https://tintwiz.com",
		description: "Tint Wiz is a customer management platform designed to streamline operations, increase sales and provide exceptional service to customers.",
		icon: "TintWiz.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tint-wiz:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.tintwiz.com/']",
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
		id: "top-producer",
		name: "Top Producer",
		website: "https://www.topproducer.com",
		description: "Top Producer is an all-in-one business management platform, tailored for real estate as a CRM solution.",
		icon: "TopProducer.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "top-producer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.topproducerwebsite\\.com/"),
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
		id: "travpro",
		name: "TravPRO",
		website: "https://travpromobile.com",
		description: "TravPRO is a mobile sales solution designed to support travel agents in managing bookings and client interactions.",
		icon: "TravPRO.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "travpro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("data\\.travpromobile\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "travpro:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("data\\.travpromobile\\.com"),
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
		id: "tribus",
		name: "TRIBUS",
		website: "https://tribus.com",
		description: "TRIBUS is a custom platform designed for real estate brokerages, offering tailored tools and features to support business operations and client management.",
		icon: "TRIBUS.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "tribus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.mytribus\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tribus:pageGlobal:1",
				kind: "pageGlobal",
				property: "MyTribusEmbed",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tribus:pageGlobal:2",
				kind: "pageGlobal",
				property: "MyTribusEmbedInstance",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "tula",
		name: "Tula",
		website: "https://tulasoftware.com",
		description: "Tula is a web-based yoga studio software facilitating management of payments, memberships, calendar sharing, registrations, credit tracking, attendance recording, and more for studio owners.",
		icon: "TulaSoftware.svg",
		categories: [
			"business-tools",
			"booking-scheduling"
		],
		rules: [
			{
				id: "tula:pageGlobal:0",
				kind: "pageGlobal",
				property: "Tula",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tula:pageGlobal:1",
				kind: "pageGlobal",
				property: "TulaSpinner",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tula:pageGlobal:2",
				kind: "pageGlobal",
				property: "TulaUtil",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tula:cookie:3",
				kind: "cookie",
				key: "_tulayoga_session",
				description: "Cookie name matches a known technology marker."
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
		id: "twyne",
		name: "Twyne",
		website: "https://twyne.io",
		description: "Twyne is an advanced lead management, lead optimization, lead distribution and monetization platform with analytics.",
		icon: "Twyne.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "twyne:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.twyne\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "twyne:pageGlobal:1",
				kind: "pageGlobal",
				property: "twyne.alreadyLoadAnura",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"high",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "universe-soft",
		name: "Universe Soft",
		website: "https://universe-soft.ru",
		description: "Universe-Soft is a business automation platform for salons, clinics, and fitness centers in Russia.",
		icon: "UniverseSoft.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "universe-soft:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.universe-soft\\.ru/"),
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
		id: "unless",
		name: "Unless",
		website: "https://unless.com/",
		description: "Unless is an AI-driven solution to enhance customer success.",
		icon: "Unless.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "unless:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.unless\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unless:dom:1",
				kind: "dom",
				selector: "script[data-unless]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "unless:pageGlobal:2",
				kind: "pageGlobal",
				property: "unlessComponentCleanUp",
				description: "Page-owned global matches a known technology marker."
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
		id: "uplifter",
		name: "Uplifter",
		website: "https://www.uplifterinc.com",
		description: "Uplifter is a membership management software that organizes member data, tracks participation, processes payments, and supports communication within organizations.",
		icon: "Uplifter.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "uplifter:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.uplifterinc\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "uplifter:pageGlobal:1",
				kind: "pageGlobal",
				property: "UPLIFTER_STRTOTIME_SETTINGS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vantaca",
		name: "Vantaca",
		website: "https://www.vantaca.com/",
		description: "Vantaca is a community management performance software that enables owners, operators, community management teams, accounting teams, and association boards to improve business performance.",
		icon: "Vantaca.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "vantaca:dom:0",
				kind: "dom",
				selector: "link[href*='/style-vantaca_']",
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
		id: "vcita",
		name: "vcita",
		website: "https://www.vcita.com",
		description: "vcita is an all-in-one customer service and business management software designed for service providers.",
		icon: "vcita.svg",
		categories: [
			"business-tools",
			"booking-scheduling"
		],
		rules: [
			{
				id: "vcita:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.vcita\\.com/widgets/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vcita:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("widgets\\.vcdnita\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "vcita:dom:2",
				kind: "dom",
				selector: "iframe[src*='www.vcita.com/widgets/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "vcita:pageGlobal:3",
				kind: "pageGlobal",
				property: "LiveSite.btCheckout",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vcita:pageGlobal:4",
				kind: "pageGlobal",
				property: "Vcita",
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
		id: "veloce",
		name: "Veloce",
		website: "https://www.velocesolutions.net",
		description: "Veloce is a provider of CRM, marketing, and website services designed for healthcare practices to improve patient engagement and operational efficiency.",
		icon: "Veloce.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "veloce:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("VeloceSolutions\\.net"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "velocify",
		name: "Velocify",
		website: "https://mortgagetech.ice.com/products/velocify",
		description: "Velocify is a conversion optimization sales tool designed to improve sales processes and increase lead conversion rates.",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "velocify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.velocify\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "vepaar",
		name: "Vepaar",
		website: "https://vepaar.com",
		description: "Vepaar is a software solution designed to help boost online businesses, providing features such as WhatsApp CRM, an online store, and a WhatsApp poll.",
		icon: "Vepaar.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "vepaar:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.vepaar\\.com/"),
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
		id: "vincere",
		name: "Vincere",
		website: "https://www.vincere.io",
		description: "Vincere is an all-in-one software for recruitment agencies.",
		icon: "Vincere.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "vincere:dom:0",
				kind: "dom",
				selector: "link[href*='static.vincere-digital.io/']",
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
		id: "virtuagym",
		name: "Virtuagym",
		website: "https://business.virtuagym.com",
		description: "Virtuagym is a cloud-based membership management and coaching platform designed for personal trainers and fitness businesses of all sizes.",
		icon: "Virtuagym.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "virtuagym:dom:0",
				kind: "dom",
				selector: "a[href*='.virtuagym.com'][target='_blank'], iframe[src*='.virtuagym.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "virtuagym:pageGlobal:1",
				kind: "pageGlobal",
				property: "VGTutorial",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "virtuagym:pageGlobal:2",
				kind: "pageGlobal",
				property: "open_vg_custom_modal",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "virtuagym:pageGlobal:3",
				kind: "pageGlobal",
				property: "trigger_vg_neutral_message",
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
		id: "vtiger",
		name: "Vtiger",
		website: "https://www.vtiger.com",
		description: "Vtiger is a cloud-based suite of marketing, sales and help desk offerings, which can be deployed separately or as an integrated, all-in-one ecosystem.",
		icon: "Vtiger.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "vtiger:pageGlobal:0",
				kind: "pageGlobal",
				property: "Vtiger",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vtiger:pageGlobal:1",
				kind: "pageGlobal",
				property: "Vtiger_Base_Js",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "vtiger:pageGlobal:2",
				kind: "pageGlobal",
				property: "Vtiger_Helper_Js",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"payg",
				"recurring"
			],
			cpe: "cpe:2.3:a:vtiger:vtiger_crm:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "wabi",
		name: "Wabi",
		website: "https://wabi-app.com",
		description: "Wabi is a platform facilitating customer engagement through WhatsApp.",
		icon: "Wabi.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "wabi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wabi-app\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wabi:pageGlobal:1",
				kind: "pageGlobal",
				property: "Wabi",
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
		id: "wati",
		name: "Wati",
		website: "https://www.wati.io",
		description: "Wati is a WhatsApp Business API platform facilitating multiple-agent customer support.",
		icon: "Wati.svg",
		categories: [
			"business-tools",
			"api-pattern"
		],
		rules: [
			{
				id: "wati:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wati-integration-prod-service\\.clare\\.ai/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "wati:pageGlobal:1",
				kind: "pageGlobal",
				property: "wati_options",
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
		id: "webscribble",
		name: "Webscribble",
		website: "https://www.webscribble.com",
		description: "Webscribble is a career platform for associations that enhances member engagement and drives revenue growth through innovative solutions.",
		icon: "Webscribble.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "webscribble:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.webscribble\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "wise-agent",
		name: "Wise Agent",
		website: "https://wiseagent.com",
		description: "Wise Agent is a real estate CRM platform that helps manage contacts and automate workflows.",
		icon: "WiseAgent.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "wise-agent:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.wiseagent\\.com"),
				description: "Script content contains a bounded technology signature."
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
		id: "wodify",
		name: "Wodify",
		website: "https://www.wodify.com",
		description: "Wodify is a gym management software.",
		icon: "Wodify.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "wodify:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("wodify\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "wodify:pageGlobal:1",
				kind: "pageGlobal",
				property: "validateWodifyLeadForm",
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
		id: "woowup",
		name: "WoowUp",
		website: "https://www.woowup.com",
		description: "WoowUp is a tool of CRM and predictive marketing.",
		icon: "WoowUp.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "woowup:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets-cdn\\.woowup\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "woowup:pageGlobal:1",
				kind: "pageGlobal",
				property: "WU._trackProductVTEXField",
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
		id: "workable",
		name: "Workable",
		website: "https://www.workable.com",
		description: "Workable is the all-in-one hiring solution.",
		icon: "Workable.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "workable:dom:0",
				kind: "dom",
				selector: "a[href*='.workable.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "workable:pageGlobal:1",
				kind: "pageGlobal",
				property: "webpackChunk_workable_candidate",
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
		id: "workadu",
		name: "Workadu",
		website: "https://www.workadu.com",
		description: "Workadu is a business management system designed to simplify operations and streamline processes for businesses.",
		icon: "Workadu.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "workadu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.workadu\\.com"),
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
		id: "workbooks",
		name: "Workbooks",
		website: "https://www.workbooks.com",
		description: "Workbooks is a platform that helps manage sales leads, automate tasks, and track marketing efforts from advertisements to invoices.",
		icon: "Workbooks.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "workbooks:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.workbooks\\.com"),
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
		id: "workday",
		name: "Workday",
		website: "https://www.workday.com",
		description: "Workday is an enterprise cloud platform that provides solutions for finance, human resources, and business planning.",
		icon: "Workday.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "workday:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.myworkday\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "workday:pageGlobal:1",
				kind: "pageGlobal",
				property: "workday.appRoot",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "workday:pageGlobal:2",
				kind: "pageGlobal",
				property: "workdayMessages",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "worketc",
		name: "WORKetc",
		website: "https://www.worketc.com",
		description: "WORKetc is an all-in-one cloud computing platform offering web-based CRM, project management, and collaboration tools.",
		icon: "WORKetc.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "worketc:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.worketc\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "worketc:dom:1",
				kind: "dom",
				selector: "iframe[src*='.worketc.com/']",
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
		id: "yogatrail",
		name: "YogaTrail",
		website: "https://www.buzzwoo.de/projekte-kunden/yogatrail",
		description: "YogaTrail is a software platform for managing yoga businesses.",
		icon: "YogaTrail.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "yogatrail:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.yogatrail\\.com"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zenu",
		name: "Zenu",
		website: "https://www.zenu.com.au",
		description: "Zenu is an all-in-one CRM solution designed to manage real estate operations, including client interactions, property listings, and sales processes.",
		icon: "Zenu.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "zenu:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.zenu\\.com\\.au"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zenu:pageGlobal:1",
				kind: "pageGlobal",
				property: "zenuDebug",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "zenu:pageGlobal:2",
				kind: "pageGlobal",
				property: "zenuHp",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "zoho",
		name: "Zoho",
		website: "https://www.zoho.com/",
		description: "Zoho is a web-based online office suite.",
		icon: "Zoho.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "zoho:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.zoho\\.com"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"low",
				"freemium"
			]
		}
	},
	{
		id: "zoho-recruit",
		name: "Zoho Recruit",
		website: "https://www.zoho.com/recruit/",
		description: "Zoho Recruit is a recruitment platform that integrates an applicant tracking system (ATS) with customer relationship management (CRM) functionality.",
		icon: "Zoho.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "zoho-recruit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.zohocdn\\.com/recruit/"),
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
		id: "zwayam",
		name: "Zwayam",
		website: "https://www.zwayam.com",
		description: "Zwayam is a recruitment software designed to manage the entire hiring process.",
		icon: "Zwayam.svg",
		categories: [
			"business-tools"
		],
		rules: [
			{
				id: "zwayam:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/zwayam\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "zwayam:dom:1",
				kind: "dom",
				selector: "link[href*='/zwayam.min.css']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	}
] as const satisfies readonly TechnologyDefinition[];
