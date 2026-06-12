import type { TechnologyDefinition } from '../types';

export const surveysFeedbackTechnologyDefinitions = [
	{
		id: "airform",
		name: "Airform",
		website: "https://airform.io",
		description: "Airform is a functional HTML forms for front-end developers.",
		icon: "Airform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "airform:dom:0",
				kind: "dom",
				selector: "form[action*='airform.io/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "basin",
		name: "Basin",
		website: "https://usebasin.com",
		description: "Basin is a plug-and-play form backend for designers and developers, allowing users to collect submissions and track conversions without coding.",
		icon: "Basin.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "basin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.usebasin\\.com/v([\\d\\.]+)\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "basin:dom:1",
				kind: "dom",
				selector: "form[action*='usebasin.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "basin:pageGlobal:2",
				kind: "pageGlobal",
				property: "onloadBasinCallback",
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
		id: "bestie",
		name: "Bestie",
		website: "https://www.bestie.ai",
		description: "Bestie is a platform that provides AI-powered post-purchase surveys for Shopify brands, automating the survey creation process.",
		icon: "Bestie.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "bestie:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.bestie\\.ai"),
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
		id: "brandquiz",
		name: "Brandquiz",
		website: "https://www.brandquiz.io",
		description: "Brandquiz is a platform for creating quizzes and surveys to capture leads, collect feedback, and engage audiences.",
		icon: "Brandquiz.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "brandquiz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.brandquiz\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "brandquiz:pageGlobal:1",
				kind: "pageGlobal",
				property: "brandquizEmbed",
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
		id: "campflow",
		name: "Campflow",
		website: "https://www.campflow.de",
		description: "Campflow is a SaaS platform for event and membership management that provides online registration forms, participant tracking, communication tools, and financial reporting.",
		icon: "Campflow.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "campflow:dom:0",
				kind: "dom",
				selector: "iframe[src*='on.campflow.de/']",
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
		id: "clicktools",
		name: "Clicktools",
		website: "https://clicktools.com",
		description: "Clicktools is a feedback system developed by CallidusCloud for collecting and analyzing customer input across various channels.",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "clicktools:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.clicktools\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "courbanize",
		name: "coUrbanize",
		website: "https://www.courbanize.com",
		description: "coUrbanize is a platform that assists real estate development and planning teams in conducting community engagement online.",
		icon: "coUrbanize.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "courbanize:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("assets\\.courbanize\\.com"),
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
		id: "crowdsignal",
		name: "Crowdsignal",
		website: "https://crowdsignal.com",
		description: "Crowdsignal is an online tool formerly known as Polldaddy that enables the creation of free polls for embedding on websites.",
		icon: "Crowdsignal.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "crowdsignal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("secure\\.polldaddy\\.com"),
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
		id: "customersure",
		name: "CustomerSure",
		website: "https://www.customersure.com",
		description: "CustomerSure is a software platform designed to gather, manage, and respond to customer feedback, enhancing satisfaction and driving sales growth.",
		icon: "CustomerSure.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "customersure:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("resources\\.customersure\\.com"),
				description: "Script source URL matches a known technology marker."
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
		id: "delighted",
		name: "Delighted",
		website: "https://delighted.com",
		description: "Delighted is a feedback collection and analysis SaaS, offering a web and mobile solution that uses the Net Promoter System (NPS) to gauge and score customer experience.",
		icon: "Delighted.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "delighted:pageGlobal:0",
				kind: "pageGlobal",
				property: "_delighted",
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
		id: "digioh",
		name: "Digioh",
		website: "https://www.digioh.com/",
		description: "Digioh is a lead generation and marketing company helping to convert clicks to customers known for it's email/sms sign-up units",
		icon: "Digioh.png",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "digioh:pageGlobal:0",
				kind: "pageGlobal",
				property: "DIGIOH_API",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "doorbell",
		name: "Doorbell",
		website: "https://doorbell.io",
		description: "Doorbell is a platform that enables the collection, management, and analysis of customer feedback.",
		icon: "Doorbell.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "doorbell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.doorbell\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "doorbell:pageGlobal:1",
				kind: "pageGlobal",
				property: "Doorbell",
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
		id: "easypolls",
		name: "EasyPolls",
		website: "https://easypolls.net",
		description: "EasyPolls is a tool that allows poll creation and sharing across websites, Facebook, Twitter, or via a direct link to the poll, enabling users to engage audiences across multiple platforms.",
		icon: "EasyPolls.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "easypolls:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easypolls\\.net"),
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
		id: "emojicom",
		name: "Emojicom",
		website: "https://emojicom.io",
		description: "Emojicom is a tool for collecting feedback through emojis, enabling the capture of visitors' emotions.",
		icon: "Emojicom.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "emojicom:pageGlobal:0",
				kind: "pageGlobal",
				property: "$emojicom",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emojicom:pageGlobal:1",
				kind: "pageGlobal",
				property: "EMOJICOM_BASE_PATH",
				valuePattern: new RegExp("cdn\\.emojicom\\.io/"),
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "emojicom:pageGlobal:2",
				kind: "pageGlobal",
				property: "emojicom",
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
		id: "enalyzer",
		name: "Enalyzer",
		website: "https://www.enalyzer.com",
		description: "Enalyzer is an online survey creation platform.",
		icon: "Enalyzer.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "enalyzer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("surveys\\.enalyzer\\.com/"),
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
		id: "feedbackautomatic",
		name: "FeedbackAutomatic",
		website: "https://feedbackautomatic.com",
		description: "FeedbackAutomatic is a platform that enables businesses to collect customer feedback through surveys, generating more online reviews to enhance their online reputation.",
		icon: "FeedbackAutomatic.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "feedbackautomatic:dom:0",
				kind: "dom",
				selector: "iframe[src*='app.feedbackautomatic.com/']",
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
		id: "form-io",
		name: "Form.io",
		website: "https://form.io",
		description: "Form.io is a platform for designing, managing, and converting forms and data within applications.",
		icon: "FormIO.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "form-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.form\\.io"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "form-io:pageGlobal:1",
				kind: "pageGlobal",
				property: "Formio.Form",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "form-io:pageGlobal:2",
				kind: "pageGlobal",
				property: "FormioUtils",
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
		id: "form-taxi",
		name: "Form.taxi",
		website: "https://form.taxi/en/backend",
		description: "Form.taxi is a backend service that enables reliable HTML form submissions without requiring any programming.",
		icon: "FormTaxi.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "form-taxi:dom:0",
				kind: "dom",
				selector: "form[action*='form.taxi/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "formaloo",
		name: "Formaloo",
		website: "https://www.formaloo.com",
		description: "Formaloo is a no-code collaboration platform that helps businesses create custom data-driven business applications and internal tools, automate their processes and engage their audience.",
		icon: "Formaloo.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formaloo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//formaloo\\.net/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formaloo:dom:1",
				kind: "dom",
				selector: "iframe[src*='//formaloo.net/']",
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
		id: "formassembly",
		name: "FormAssembly",
		website: "https://www.formassembly.com",
		description: "FormAssembly is a platform that enables to collection of data and processing via workflow.",
		icon: "FormAssembly.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formassembly:dom:0",
				kind: "dom",
				selector: "form[action*='tfaforms.net'], iframe[src*='tfaforms.net']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "formassembly:pageGlobal:1",
				kind: "pageGlobal",
				property: "wFORMS.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			pricing: [
				"recurring",
				"low"
			]
		}
	},
	{
		id: "formbold",
		name: "FormBold",
		website: "https://formbold.com",
		description: "FormBold is a complete web forms solution for static websites that allows you to create forms, collect data, and send notifications.",
		icon: "FormBold.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formbold:dom:0",
				kind: "dom",
				selector: "form[action*='//formbold.com/']",
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
		id: "formbucket",
		name: "FormBucket",
		website: "https://formbucket.com",
		description: "FormBucket is a platform for building custom forms and capturing submitted data for structured collection and analysis.",
		icon: "FormBucket.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formbucket:dom:0",
				kind: "dom",
				selector: "form[action*='api.formbucket.com/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "formcake",
		name: "Formcake",
		website: "https://formcake.com",
		description: "Formcake is a backend service that enables developers to integrate forms and manage form data within their applications.",
		icon: "Formcake.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formcake:dom:0",
				kind: "dom",
				selector: "form[action*='api.formcake.com/']",
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
		id: "formcan",
		name: "Formcan",
		website: "https://www.formcan.com",
		description: "Formcan is a form builder that enables creation, customization, and deployment of online forms for data collection and management.",
		icon: "Formcan.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formcan:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.formcan\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formcan:cookie:1",
				kind: "cookie",
				key: "formcan-color-mode",
				description: "Cookie name matches a known technology marker."
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
		id: "formdr",
		name: "FormDr",
		website: "https://formdr.com",
		description: "FormDr is a HIPAA-compliant platform providing secure online forms for collecting and managing sensitive healthcare information.",
		icon: "FormDr.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formdr:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.formdr\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "formdr:dom:1",
				kind: "dom",
				selector: "iframe[src*='app.formdr.com']",
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
		id: "formester",
		name: "Formester",
		website: "https://formester.com",
		description: "Formester is a platform for creating interactive forms with AI, supporting logic jumps and automation without requiring coding.",
		icon: "Formester.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formester:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.formester\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "formester:dom:1",
				kind: "dom",
				selector: "form[action*='app.formester.com'], iframe[src*='app.formester.com']",
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
		id: "formless",
		name: "Formless",
		website: "https://formless.ai",
		description: "Formless is an AI-powered solution that creates interactive forms, enabling natural conversation, asking and answering questions, and engaging users at any touchpoint.",
		icon: "Formless.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formless:pageGlobal:0",
				kind: "pageGlobal",
				property: "__formless_cleanup_signals",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "formless:pageGlobal:1",
				kind: "pageGlobal",
				property: "__formless_init",
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
		id: "formli",
		name: "Formli",
		website: "https://formli.com",
		description: "Formli is a web-based form builder service that permits users to produce and personalise online forms for different purposes, including surveys, feedback forms, event registrations, and others.",
		icon: "Formli.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formli:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:app|cdn)\\.(?:formli|humanagency)\\.(?:com|org)/"),
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
		id: "formrun",
		name: "Formrun",
		website: "https://form.run",
		description: "Formrun is a form creation tool.",
		icon: "Formrun.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formrun:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.form\\.run"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formrun:pageGlobal:1",
				kind: "pageGlobal",
				property: "Formrun.init",
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
		id: "formsite",
		name: "Formsite",
		website: "https://www.formsite.com",
		description: "Formsite is a platform for creating professional online forms, surveys, and workflows for data collection and process automation.",
		icon: "Formsite.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formsite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.formsite\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "formsite:dom:1",
				kind: "dom",
				selector: "form[action*='.formsite.com/']",
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
		id: "formsort",
		name: "Formsort",
		website: "https://formsort.com",
		description: "Formsort is a system that enables form design and data conversion within applications.",
		icon: "Formsort.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formsort:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunk_formsort_flow",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "formsort:meta:1",
				kind: "meta",
				key: "powered-by",
				valuePattern: new RegExp("^formsort$"),
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
				"poa"
			]
		}
	},
	{
		id: "formstack",
		name: "Formstack",
		website: "https://www.formstack.com",
		description: "Formstack is a platform offering no-code solutions for digital workflows, including forms, documents, and signatures.",
		icon: "Formstack.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "formstack:dom:0",
				kind: "dom",
				selector: "form[action*='.formstack.com/forms']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "formstack:pageGlobal:1",
				kind: "pageGlobal",
				property: "Formstack",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "formstack:pageGlobal:2",
				kind: "pageGlobal",
				property: "loadFormstack",
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
		id: "frontlead",
		name: "Frontlead",
		website: "https://frontlead.io",
		description: "Frontlead is a platform that enables the creation of forms, funnels, and surveys to streamline workflows and collect actionable insights.",
		icon: "Frontlead.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "frontlead:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.frontlead\\.io"),
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
		id: "google-forms",
		name: "Google Forms",
		website: "https://www.google.com/forms/about/",
		description: "Google Forms is a free online form builder that allows you to create and publish online forms, surveys, quizzes, order forms, and more.",
		icon: "Google Forms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "google-forms:dom:0",
				kind: "dom",
				selector: "form[action*='docs.google.com/forms/']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "gozen-forms",
		name: "GoZen Forms",
		website: "https://gozen.io/forms/",
		description: "GoZen Forms is an AI-powered no-code form builder that automates form creation, collects signup data, payments, and e-signatures.",
		icon: "GoZenForms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "gozen-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("signup-forms-cdn\\.app\\.gozen\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "gozen-forms:pageGlobal:1",
				kind: "pageGlobal",
				property: "GzFormAjax.send",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gozen-forms:pageGlobal:2",
				kind: "pageGlobal",
				property: "GzFormMain",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gozen-forms:pageGlobal:3",
				kind: "pageGlobal",
				property: "GzFormPopup",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "gozen-forms:pageGlobal:4",
				kind: "pageGlobal",
				property: "GzForms",
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
		id: "growform",
		name: "Growform",
		website: "https://www.growform.co",
		description: "Growform is a multi-step form builder that includes email alerts, Zapier integrations, and built-in templates.",
		icon: "Growform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "growform:pageGlobal:0",
				kind: "pageGlobal",
				property: "embedGrowform",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "growform:pageGlobal:1",
				kind: "pageGlobal",
				property: "growform.setHiddenField",
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
		id: "guest-suite",
		name: "Guest Suite",
		website: "https://guestapp.me",
		description: "Guest Suite is a tool that collects customer opinions during their stay, directly from the reception of the establishment.",
		icon: "GuestSuite.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "guest-suite:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.guestapp\\.me"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "guest-suite:pageGlobal:1",
				kind: "pageGlobal",
				property: "guestsuite",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "guildquality",
		name: "GuildQuality",
		website: "https://www.guildquality.com",
		description: "GuildQuality is a customer satisfaction surveying and performance reporting platform that collects feedback, measures service quality, and provides structured insights for operational improvement.",
		icon: "GuildQuality.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "guildquality:dom:0",
				kind: "dom",
				selector: "iframe[src*='guildquality.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "guildquality:responseHeader:1",
				kind: "responseHeader",
				key: "Access-Control-Allow-Origin",
				valuePattern: new RegExp("www\\.guildquality\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "hotjar-incoming-feedback",
		name: "Hotjar Incoming Feedback",
		website: "https://www.hotjar.com",
		description: "Hotjar Incoming Feedback is a widget that sits at the edge of a page.",
		icon: "Hotjar.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "hotjar-incoming-feedback:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.hotjar\\.com/preact-incoming-feedback"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "hotjar-incoming-feedback:dom:1",
				kind: "dom",
				selector: "a[href*='hotjar.com/incoming-feedback'][target='_blank']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "hulkapps-form-builder",
		name: "HulkApps Form Builder",
		website: "https://www.hulkapps.com/products/form-builder-shopify",
		description: "HulkApps Form Builder is an application that creates customizable, job-specific forms for unit needs.",
		icon: "HulkApps.svg",
		categories: [
			"surveys-feedback",
			"ecommerce-extensions",
			"form-schema-library"
		],
		rules: [
			{
				id: "hulkapps-form-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("formbuilder\\.hulkapps\\.com/"),
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "impressure",
		name: "Impressure",
		website: "https://impressure.io",
		description: "Impressure is a platform for creating and publishing offer paths, dynamic forms, and surveys through a user-friendly interface.",
		icon: "Impressure.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "impressure:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("events\\.impressure\\.io"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "impressure:pageGlobal:1",
				kind: "pageGlobal",
				property: "Impressure.commands",
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
		id: "informizely",
		name: "Informizely",
		website: "https://www.informizely.com",
		description: "Informizely is a customer feedback platform used to run surveys on websites and applications to understand user behavior and generate actionable insights.",
		icon: "Informizely.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "informizely:dom:0",
				kind: "dom",
				selector: "script[id*='_informizely_script_tag']",
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
		id: "inputflow",
		name: "Inputflow",
		website: "https://inputflow.com",
		description: "Inputflow is a tool for creating multi-step forms in Webflow with full customization options.",
		icon: "Inputflow.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "inputflow:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.inputflow\\.io"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"webflow"
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
		id: "iterate",
		name: "Iterate",
		website: "https://iteratehq.com",
		description: "Iterate is a customer insights manager (CIM) system, facilitating website and email surveys to harness customer insights across your entire business.",
		icon: "Iterate.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "iterate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.iteratehq\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "iterate:pageGlobal:1",
				kind: "pageGlobal",
				property: "Iterate",
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
		id: "jotform",
		name: "Jotform",
		website: "https://www.jotform.com",
		description: "Jotform is an online form builder that enables the creation of robust forms.",
		icon: "Jotform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "jotform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jotform\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "jotform:pageGlobal:1",
				kind: "pageGlobal",
				property: "JOTFORM_ENV",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jotform:pageGlobal:2",
				kind: "pageGlobal",
				property: "JotForm.FBCollectInformation",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "jotform:pageGlobal:3",
				kind: "pageGlobal",
				property: "JotFormActions",
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
		id: "klaviyo-forms",
		name: "Klaviyo Forms",
		website: "https://www.klaviyo.com/features/web-forms",
		description: "Klaviyo Forms are used to capture Email and SMS sign-ups",
		icon: "Klaviyo.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "knocommerce",
		name: "KnoCommerce",
		website: "https://knocommerce.com",
		description: "KnoCommerce is a post-purchase surveys system designed to collect customer feedback.",
		icon: "KnoCommerce.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "knocommerce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.knocdn\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "knocommerce:pageGlobal:1",
				kind: "pageGlobal",
				property: "Kno.survey",
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
		id: "marquiz",
		name: "Marquiz",
		website: "https://marquiz.io",
		description: "Marquiz is an online tool designed for creating user-friendly forms, quizzes, and surveys tailored for digital marketing.",
		icon: "Marquiz.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "marquiz:pageGlobal:0",
				kind: "pageGlobal",
				property: "webpackChunkmarquiz_quiz",
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
		id: "modal-forms",
		name: "Modal Forms",
		website: "https://www.modalforms.com",
		description: "Modal Forms is a tool that enhances your website by adding interactive pop-ups.",
		icon: "ModalForms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "modal-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.modalforms\\.com/"),
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
		id: "mosio",
		name: "Mosio",
		website: "https://www.mosio.com",
		description: "Mosio is a text messaging software solution for research that supports participant communication and data collection.",
		icon: "Mosio.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "mosio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.mosio\\.com/"),
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
		id: "nativeforms",
		name: "NativeForms",
		website: "https://nativeforms.com",
		description: "NativeForms is a tool for creating forms, surveys, and polls across various platforms.",
		icon: "NativeForms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "nativeforms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.nativeforms\\.com"),
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
		id: "netlify-forms",
		name: "Netlify Forms",
		website: "https://www.netlify.com/products/forms",
		description: "Netlify Forms is a serverless form handling solution for static websites.",
		icon: "Netlify.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "netlify-forms:dom:0",
				kind: "dom",
				selector: "form[data-netlify]",
				description: "DOM selector matches a known technology marker."
			}
		],
		implies: [
			"netlify"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "opinionbar",
		name: "OpinionBar",
		website: "https://www.opinionbar.com",
		description: "OpinionBar is a platform offering feedback forms and surveys that provide cash payments.",
		icon: "OpinionBar.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "opinionbar:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.opinionbar\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "opinionbar:responseHeader:1",
				kind: "responseHeader",
				key: "Content-Security-Policy",
				valuePattern: new RegExp("\\.opinionbar\\.com"),
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "opinionlab",
		name: "OpinionLab",
		website: "https://www.opinionlab.com",
		description: "OpinionLab is a omnichannel customer feedback solution provider.",
		icon: "OpinionLab.png",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "opinionlab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.foresee\\.com/code/([\\d.]+)-oo/oo_engine\\.min\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "opinionlab:pageGlobal:1",
				kind: "pageGlobal",
				property: "OOo.Browser",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "opinionlab:pageGlobal:2",
				kind: "pageGlobal",
				property: "OOo.version",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
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
		id: "opnform",
		name: "OpnForm",
		website: "https://opnform.com",
		description: "OpnForm is a web-based tool for creating and sharing forms without requiring coding knowledge, enabling users to design and distribute forms.",
		icon: "OpnForm.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "opnform:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.opnform\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "opnform:cookie:1",
				kind: "cookie",
				key: "OpnForm_session",
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
		id: "pabbly-form-builder",
		name: "Pabbly Form Builder",
		website: "https://www.pabbly.com",
		description: "Pabbly Form Builder is a no-code tool for creating professional business forms, offering customization options without requiring programming skills.",
		icon: "Pabbly.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "pabbly-form-builder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("forms\\.pabbly\\.com"),
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
		id: "poll-everywhere",
		name: "Poll Everywhere",
		website: "https://www.polleverywhere.com",
		description: "Poll Everywhere is a tool that transforms presentations, meetings, and classes into immersive, interactive experiences, enabling audience engagement through real-time participation.",
		icon: "PollEverywhere.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "poll-everywhere:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.polleverywhere\\.com"),
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
		id: "pollster",
		name: "Pollster",
		website: "https://pollster.pl",
		description: "Pollster is a feedback and research system based in Poland that collects and analyses survey data.",
		icon: "Pollster.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "pollster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.pollster\\.pl"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "pollster:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.pollster\\.pl"),
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
		id: "powerful-form",
		name: "Powerful Form",
		website: "https://powerfulform.com",
		description: "Powerful Form is a tool that enables custom form creation for Shopify stores, allowing collection and management of customer information directly within the storefront.",
		icon: "PowerfulForm.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "powerful-form:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.powerfulform\\.com"),
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
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "pulse-insights",
		name: "Pulse Insights",
		website: "https://www.pulseinsights.com",
		description: "Pulse Insights is a customer feedback platform that helps enterprises gather and analyze insights to understand customer needs and improve decision-making.",
		icon: "PulseInsights.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "pulse-insights:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.pulseinsights\\.com"),
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
		id: "qform",
		name: "QForm",
		website: "https://qform.io",
		description: "QForm is a tool for designing and managing customizable forms for data collection and processing.",
		icon: "QForm.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "qform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.qform(?:24\\.com|\\.io)/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "qualaroo",
		name: "Qualaroo",
		website: "https://qualaroo.com",
		description: "Qualaroo provides surveys on websites and apps to get user feedback.",
		icon: "Qualaroo.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "qualaroo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qualaroo\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "qualaroo:dom:1",
				kind: "dom",
				selector: "link[href*='.qualaroo.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "qualaroo:pageGlobal:2",
				kind: "pageGlobal",
				property: "QUALAROO_DNT",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"recurring",
				"mid",
				"payg"
			]
		}
	},
	{
		id: "qualitando",
		name: "Qualitando",
		website: "https://www.qualitando.com",
		description: "Qualitando is an Italian customer satisfaction widget designed to collect, measure, and analyze user feedback to support service quality evaluation and improvement.",
		icon: "Qualitando.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "qualitando:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qualitando\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "qualitando:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.qualitando\\.com"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "qualtrics",
		name: "Qualtrics",
		website: "https://www.qualtrics.com",
		description: "Qualtrics is an cloud-based platform for creating and distributing web-based surveys.",
		icon: "Qualtrics.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "qualtrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qualtrics\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "qualtrics:pageGlobal:1",
				kind: "pageGlobal",
				property: "QSI.ClientSideTargeting",
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
		id: "quform",
		name: "Quform",
		website: "https://www.quform.com",
		description: "Quform is a WordPress plugin designed for building and managing forms.",
		icon: "Quform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "quform:pageGlobal:0",
				kind: "pageGlobal",
				property: "Quform.captchaRefreshFormQueue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "quform:pageGlobal:1",
				kind: "pageGlobal",
				property: "QuformRecaptchaLoaded",
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
				"onetime"
			]
		}
	},
	{
		id: "recommy",
		name: "Recommy",
		website: "https://recommy.com",
		description: "Recommy is a customer feedback gathering tool designed to collect, organize, and analyze user input to support service evaluation and improvement.",
		icon: "Recommy.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "recommy:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.recommy\\.com"),
				description: "Script content contains a bounded technology signature."
			},
			{
				id: "recommy:pageGlobal:1",
				kind: "pageGlobal",
				property: "RecommyFeedbackWidget",
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
		id: "refiner",
		name: "Refiner",
		website: "https://refiner.io",
		description: "Refiner provides a survey solution designed to help SaaS companies get more survey responses and gain a better understanding of their users.",
		icon: "Refiner.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "refiner:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.refiner\\.io/v([\\d]+)/client\\.js"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "refiner:dom:1",
				kind: "dom",
				selector: "div#refiner-widget-wrapper",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "refiner:pageGlobal:2",
				kind: "pageGlobal",
				property: "_refiner",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "refiner:pageGlobal:3",
				kind: "pageGlobal",
				property: "_refinerAlreadyBooted",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "refiner:pageGlobal:4",
				kind: "pageGlobal",
				property: "_refinerQueue",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "refiner:pageGlobal:5",
				kind: "pageGlobal",
				property: "_refinerTracker",
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
		id: "reform",
		name: "Reform",
		website: "https://www.reform.app",
		description: "Reform is a conversion-focused form builder designed to optimize data collection.",
		icon: "Reform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "reform:pageGlobal:0",
				kind: "pageGlobal",
				property: "Reform",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "reform:pageGlobal:1",
				kind: "pageGlobal",
				property: "ReformHandlers",
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
		id: "respondi",
		name: "Respondi",
		website: "https://respondi.app",
		description: "Respondi is a tool for creating forms, including surveys, questionnaires, quizzes, and other custom data collection formats.",
		icon: "Respondi.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "respondi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.respondi\\.app"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "respondi:pageGlobal:1",
				kind: "pageGlobal",
				property: "respondiElement",
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
		id: "riddle",
		name: "Riddle",
		website: "https://www.riddle.com",
		description: "Riddle is a platform enabling creation of lists, polls, and quizzes.",
		icon: "Riddle.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "riddle:pageGlobal:0",
				kind: "pageGlobal",
				property: "riddleAPI",
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
		id: "segmanta",
		name: "Segmanta",
		website: "https://segmanta.com",
		description: "Segmanta is a mobile-first survey platform designed for product feedback, brand awareness and concept testing research.",
		icon: "Segmanta.png",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "segmanta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pge\\.segmanta\\.com/widget_embed_js(?:/widgetEmbed-v([\\d.]+)\\.min\\.js)?"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "segmanta:pageGlobal:1",
				kind: "pageGlobal",
				property: "SEGMANTA__DYNAMIC_EMBED_CONFIG",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "segmanta:pageGlobal:2",
				kind: "pageGlobal",
				property: "SEGMANTA__USER_METADATA",
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
		id: "service-management-group",
		name: "Service Management Group",
		website: "https://www.smg.com",
		description: "Service Management Group offers customer experience measurement, employee engagement, social monitoring, publishing, and brand research services.",
		icon: "Service Management Group.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "service-management-group:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smg\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "service-management-group:dom:1",
				kind: "dom",
				selector: "link[href*='api.smg.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "service-management-group:pageGlobal:2",
				kind: "pageGlobal",
				property: "smgETrackParams",
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
		id: "sheet-monkey",
		name: "Sheet Monkey",
		website: "https://sheetmonkey.io",
		description: "Sheet Monkey is a form builder that stores data in Google Sheets, eliminating the need for a backend.",
		icon: "SheetMonkey.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "sheet-monkey:dom:0",
				kind: "dom",
				selector: "form[action*='api.sheetmonkey.io/']",
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
		id: "simplesat",
		name: "SimpleSat",
		website: "https://www.simplesat.io",
		description: "SimpleSat is a customer satisfaction survey tool designed for service businesses to collect feedback from their customers in an engaging manner.",
		icon: "SimpleSat.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "simplesat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.simplesat\\.io/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "simplesat:dom:1",
				kind: "dom",
				selector: "link[href*='cdn.simplesat.io/']",
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
		id: "slapform",
		name: "Slapform",
		website: "https://slapform.com",
		description: "Slapform is a backend service for forms that securely stores submissions in the cloud and sends them via email.",
		icon: "Slapform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "slapform:dom:0",
				kind: "dom",
				selector: "form[action*='api.slapform.com/']",
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
		id: "sprig",
		name: "Sprig",
		website: "https://sprig.com",
		description: "Sprig is a UX analysis and management tool to understand what motivates customers to sign up, engage, and remain loyal to products.",
		icon: "Sprig.svg",
		categories: [
			"surveys-feedback",
			"analytics"
		],
		rules: [
			{
				id: "sprig:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.userleap\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "sprig:pageGlobal:1",
				kind: "pageGlobal",
				property: "UserLeap",
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
		id: "superform",
		name: "Superform",
		website: "https://superformjs.webflow.io/",
		description: "Superform is a next-gen form engine developed for Webflow's no-code community, enabling form creation and management without requiring coding knowledge.",
		icon: "Superform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "superform:pageGlobal:0",
				kind: "pageGlobal",
				property: "Superform",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "superform:pageGlobal:1",
				kind: "pageGlobal",
				property: "SuperformAPI.version",
				valuePattern: new RegExp("^v([\\d\\.]+)"),
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
		id: "survicate",
		name: "Survicate",
		website: "https://survicate.com",
		description: "Survicate is an all-in-one customer feedback tool that allows you collect feedback.",
		icon: "Survicate.svg",
		categories: [
			"surveys-feedback"
		],
		rules: [
			{
				id: "survicate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.survicate\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "survicate:dom:1",
				kind: "dom",
				selector: "link[href*='.survicate.com']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "survicate:pageGlobal:2",
				kind: "pageGlobal",
				property: "survicate",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "survicate:responseHeader:3",
				kind: "responseHeader",
				key: "content-security-policy",
				valuePattern: new RegExp("api\\.survicate\\.com"),
				description: "Response header matches a known technology marker."
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
		id: "tally",
		name: "Tally",
		website: "https://tally.so/",
		description: "Tally is the simplest way to create free forms & surveys. Create any type of form in seconds, without knowing how to code, and for free.",
		icon: "Tally.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "tally:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("//tally\\.so/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tally:dom:1",
				kind: "dom",
				selector: "iframe[data-tally-src^='https://tally.so/embed/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tally:dom:2",
				kind: "dom",
				selector: "a[href*='//tally.so/r/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "tally:pageGlobal:3",
				kind: "pageGlobal",
				property: "Tally",
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
		id: "typeform",
		name: "Typeform",
		website: "https://www.typeform.com",
		description: "Typeform is a Spanish online software as a service (SaaS) company that specialises in online form building and online surveys.",
		icon: "Typeform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "typeform:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.typeform\\.com/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "typeform:dom:1",
				kind: "dom",
				selector: "link[href*='.typeform.com/']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "typeform:pageGlobal:2",
				kind: "pageGlobal",
				property: "tf.createPopover",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "typeform:pageGlobal:3",
				kind: "pageGlobal",
				property: "tf.createWidget",
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
		id: "userback",
		name: "Userback",
		website: "https://userback.io",
		description: "Userback is a platform offering visual feedback and bug tracking solutions for websites and web applications, allowing users to provide feedback through screenshots and annotations.",
		icon: "Userback.svg",
		categories: [
			"surveys-feedback",
			"developer-tooling"
		],
		rules: [
			{
				id: "userback:pageGlobal:0",
				kind: "pageGlobal",
				property: "Userback.access_token",
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
		id: "web3forms",
		name: "Web3Forms",
		website: "https://web3forms.com",
		description: "Web3Forms is a contact form to email service utilising the Web3 API.",
		icon: "Web3Forms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library",
			"api-pattern"
		],
		rules: [
			{
				id: "web3forms:dom:0",
				kind: "dom",
				selector: "form[action*='api.web3forms.com/']",
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
		id: "wufoo",
		name: "Wufoo",
		website: "https://www.wufoo.com",
		description: "Wufoo is an online form builder that creates forms including contact forms, online payments, online surveys and event registrations.",
		icon: "Wufoo.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "wufoo:dom:0",
				kind: "dom",
				selector: "a[href*='.wufoo.com/forms/'][target='_blank']",
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
		id: "yay-forms",
		name: "Yay! Forms",
		website: "https://yayforms.com",
		description: "Yay! Forms is an AI-powered tool for creating forms and surveys designed to capture audience sentiments.",
		icon: "YayForms.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "yay-forms:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.yayforms\\.link"),
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
		id: "youform",
		name: "Youform",
		website: "https://youform.com",
		description: "Youform is a no-code form builder to create conversational style forms for collecting leads, surveys, and feedback.",
		icon: "Youform.svg",
		categories: [
			"surveys-feedback",
			"form-schema-library"
		],
		rules: [
			{
				id: "youform:pageGlobal:0",
				kind: "pageGlobal",
				property: "youForm.blurActiveElement",
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
	}
] as const satisfies readonly TechnologyDefinition[];
