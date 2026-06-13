import type { TechnologyDefinition } from '../types';

export const emailMessagingTechnologyDefinitions = [
	{
		id: "11sight",
		name: "11Sight",
		website: "https://www.11sight.com",
		description: "11Sight is an AI-powered, omnichannel platform enabling users to receive inbound video calls from any online channel, facilitating sales conversations and lead conversions.",
		icon: "11Sight.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "11sight:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.11sight\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "11sight:jsGlobal:1",
				kind: "jsGlobal",
				property: "elevensight",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "11sight:jsGlobal:2",
				kind: "jsGlobal",
				property: "elevensightApp",
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
		id: "42chat",
		name: "42Chat",
		website: "https://www.42chat.com",
		description: "42Chat is a provider of conversational AI solutions and text-based chatbots designed to connect clients with their communities.",
		icon: "42Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "42chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.42chat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "8x8",
		name: "8x8",
		website: "https://www.8x8.com",
		description: "8x8 is a communication tool offering chat functionality for streamlined business communication.",
		icon: "8x8.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "8x8:jsGlobal:0",
				kind: "jsGlobal",
				property: "Chat8x8",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "8x8:jsGlobal:1",
				kind: "jsGlobal",
				property: "__8x8Chat",
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
		id: "acquire-live-chat",
		name: "Acquire Live Chat",
		website: "https://acquire.io",
		description: "Acquire is a multi-channel customer support platform designed to provide real-time customer support to customers.",
		icon: "Acquire.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "acquire-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.acquire\\.io\\/(?!cobrowse)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "acquire-live-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "_acquire_init_config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "acquire-live-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "acquire",
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
		id: "activengage",
		name: "ActivEngage",
		website: "https://www.activengage.com",
		description: "ActivEngage is an automotive chat service that enables real-time website messaging between dealerships and customers.",
		icon: "ActivEngage.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "activengage:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("pageview\\.activengage\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "activengage:jsGlobal:1",
				kind: "jsGlobal",
				property: "ActivEngage",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ada",
		name: "Ada",
		website: "https://www.ada.cx",
		description: "Ada is an automated customer experience company that provides chat bots used in customer support.",
		icon: "Ada.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ada:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ada\\.support"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ada:jsGlobal:1",
				kind: "jsGlobal",
				property: "__AdaEmbedConstructor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ada:jsGlobal:2",
				kind: "jsGlobal",
				property: "adaEmbed",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:ada:ada:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "ainiro",
		name: "AINIRO",
		website: "https://ainiro.io",
		description: "AINIRO is a provider of AI chatbots, AI agents, and custom AI solutions designed for various applications.",
		icon: "AINIRO.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ainiro:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.ainiro\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ainiro:jsGlobal:1",
				kind: "jsGlobal",
				property: "ainiro.init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ainiro:jsGlobal:2",
				kind: "jsGlobal",
				property: "ainiro_faq_question",
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
		id: "aircall",
		name: "Aircall",
		website: "https://aircall.io",
		description: "Aircall is a cloud-based phone system for customer support and sales teams.",
		icon: "aircall.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "aircall:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/cdn\\.aircall\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aircall:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.aircall\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "aivo",
		name: "Aivo",
		website: "https://www.aivo.co",
		description: "Aivo is a conversational AI platform offering omnichannel tools and live agent solutions to automate customer experiences.",
		icon: "Aivo.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "aivo:jsGlobal:0",
				kind: "jsGlobal",
				property: "$aivo",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "aivo:jsGlobal:1",
				kind: "jsGlobal",
				property: "aivoStorage",
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
		id: "akia",
		name: "Akia",
		website: "https://www.akia.com",
		description: "Akia is a platform offering AI-powered communication tools designed to streamline messaging and guest interactions within the hospitality industry.",
		icon: "Akia.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "akia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("web\\.akia\\.ai"),
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
		id: "alive5",
		name: "Alive5",
		website: "https://www.alive5.com",
		description: "Alive5 is a unified inbox for teams, handling SMS, web chat, and social conversations. It was formerly known as Website Alive.",
		icon: "Alive5.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "alive5:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.websitealive\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "alive5:jsGlobal:1",
				kind: "jsGlobal",
				property: "alive5_environment",
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
		id: "alloincognito",
		name: "AlloIncognito",
		website: "https://www.alloincognito.ru",
		description: "AlloIncognito is a platform that provides communication capabilities to and within Russia.",
		icon: "AlloIncognito.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "alloincognito:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.alloincognito\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "amazon-ses",
		name: "Amazon SES",
		website: "https://aws.amazon.com/ses/",
		description: "Amazon Simple Email Service (SES) is an email service that enables developers to send mail from within any application.",
		icon: "Amazon SES.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "amazon-ses:dns:0",
				kind: "dns",
				valuePattern: new RegExp("amazonses\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "animalchat",
		name: "AnimalChat",
		website: "https://animalchat.net",
		description: "AnimalChat is a messaging platform that connects pet owners and professionals, providing a flexible alternative to traditional communication methods.",
		icon: "AnimalChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "animalchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.animalchat\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "anychat",
		name: "AnyChat",
		website: "https://anychat.one",
		description: "AnyChat is a real-time conversation system designed to enable communication and message exchange between users.",
		icon: "AnyChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "anychat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.anychat\\.one"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "anychat:jsGlobal:1",
				kind: "jsGlobal",
				property: "anychat.CHATBOX_FRAME",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "anychat:jsGlobal:2",
				kind: "jsGlobal",
				property: "anychatWidget",
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
		id: "apexchat",
		name: "ApexChat",
		website: "https://www.apexchat.com",
		description: "ApexChat is a company that provides businesses with live chat software and services to facilitate real-time customer engagement, support, lead generation, and enhanced online interactions.",
		icon: "ApexChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "apexchat:jsGlobal:0",
				kind: "jsGlobal",
				property: "ApexChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "apexchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "apexchat_dompopup_chatwindow_client",
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
		id: "apple-business-chat",
		name: "Apple Business Chat",
		website: "https://developer.apple.com/documentation/businesschat",
		description: "Apple Business Chat is a service from Apple that allows your organization to directly chat with your customers using the Messages app.",
		icon: "Apple.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "apple-business-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/apple_business_chat_commerce\\/.+\\/apple_message_button_v([\\d\\.]+)\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "apple-business-chat:dom:1",
				kind: "dom",
				selector: "a[href*='bcrw.apple.com/business/api']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "apple-business-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "appleBusinessChat.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
				"poa",
			],
		},
	},
	{
		id: "apple-icloud-mail",
		name: "Apple iCloud Mail",
		website: "https://www.apple.com/icloud/",
		description: "Apple iCloud Mail is a webmail service provided by Apple, Inc.",
		icon: "Apple.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "apple-icloud-mail:dns:0",
				kind: "dns",
				valuePattern: new RegExp("mail\\.icloud\\.com", "i"),
				recordType: "MX",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "apple-icloud-mail:dns:1",
				kind: "dns",
				valuePattern: new RegExp("apple-domain", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "apple-icloud-mail:dns:2",
				kind: "dns",
				valuePattern: new RegExp("redirect=icloud\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "arabot",
		name: "Arabot",
		website: "https://arabot.io",
		description: "Arabot is a no-code chatbot platform designed to automate customer interactions and service fulfillment at scale.",
		icon: "Arabot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "arabot:jsGlobal:0",
				kind: "jsGlobal",
				property: "arabotChatScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arabot:jsGlobal:1",
				kind: "jsGlobal",
				property: "arabotSelector",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "arabot:jsGlobal:2",
				kind: "jsGlobal",
				property: "injectArabotScript",
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
		id: "arrowchat",
		name: "ArrowChat",
		website: "https://www.arrowchat.com",
		description: "ArrowChat is a communication tool that enables users to send text messages and engage in video chats with one another.",
		icon: "ArrowChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "arrowchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/arrowchat\\/.*\\/jquery\\.js"),
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
		id: "artibot",
		name: "ArtiBot",
		website: "https://www.artibot.ai",
		description: "ArtiBot is a chatbot designed for websites, providing automated assistance and customer engagement through conversational interactions.",
		icon: "ArtiBot.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "artibot:jsGlobal:0",
				kind: "jsGlobal",
				property: "ArtiBot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "artibot:jsGlobal:1",
				kind: "jsGlobal",
				property: "_artibotLauncherInitializer",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "artibot:jsGlobal:2",
				kind: "jsGlobal",
				property: "artibotApi",
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
		id: "asisteclick",
		name: "AsisteClick",
		website: "https://asisteclick.com",
		description: "AsisteClick is a customer service solution that uses chatbots and an omnichannel platform to streamline support across multiple communication channels.",
		icon: "AsisteClick.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "asisteclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.asisteclick\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "asisteclick:jsGlobal:1",
				kind: "jsGlobal",
				property: "loadAsisteClick",
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
		id: "askspot",
		name: "AskSpot",
		website: "https://askspot.ai",
		description: "AskSpot is an AI chatbot platform tailored for marketing, digital, and web development agencies.",
		icon: "AskSpot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "askspot:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.askspot\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "askspot:jsGlobal:1",
				kind: "jsGlobal",
				property: "askspot.Chatbot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "askspot:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.askspot\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "askspot:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.askspot\\.io\\/api\\/v1\\/integration\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "askspot:scriptContent:4",
				kind: "scriptContent",
				pattern: new RegExp("chat\\.askspot\\.io\\/api\\/v1\\/chat-widget\\/"),
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
		id: "atlasmic",
		name: "Atlasmic",
		website: "https://atlasmic.com",
		description: "Atlasmic is a live chat and business messenger platform designed to support modern online businesses.",
		icon: "Atlasmic.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "atlasmic:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.atlasmic\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "atlasmic:jsGlobal:1",
				kind: "jsGlobal",
				property: "atlasmic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "atlasmic:jsGlobal:2",
				kind: "jsGlobal",
				property: "atlasmic.VERSION",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
				"mid",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "audienceful",
		name: "Audienceful",
		website: "https://www.audienceful.com",
		description: "Audienceful is an email marketing software platform used to create, manage, send, and analyze email campaigns.",
		icon: "Audienceful.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "audienceful:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.audienceful\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "audienceful:dom:1",
				kind: "dom",
				selector: "form[action*='app.audienceful.com/']",
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
		id: "aument",
		name: "Aument",
		website: "https://aument.io",
		description: "Aument is an ecommerce toolbox with easy to use marketing actions and workflows.",
		icon: "Aument.svg",
		categories: [
			"email-messaging",
			"commerce-operations",
		],
		rules: [
			{
				id: "aument:dom:0",
				kind: "dom",
				selector: "div#aumentDiscountCode",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "aument:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("aumentstaticfiles\\.s3\\.amazonaws\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "aument:dom:2",
				kind: "dom",
				selector: "div#aumentDiscountCode, link[href*='aumentstaticfiles.s3.amazonaws.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"high",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "b2chat",
		name: "B2Chat",
		website: "https://www.b2chat.io",
		description: "B2Chat is an all-in-one multi-channel platform that unites WhatsApp, Facebook, Instagram, Telegram, and LiveChat in a single interface.",
		icon: "B2Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "b2chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.b2chat\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "b2chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "b2chat_livechat_setup",
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
		id: "benchmark",
		name: "Benchmark",
		website: "https://www.benchmarkemail.com",
		description: "Benchmark is an email marketing tool used to create, send, and manage email campaigns, track performance metrics, and support audience communication through automated and scheduled messaging.",
		icon: "Benchmark.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "benchmark:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.benchmarkemail\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "benchmark:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.benchmarkemail\\.com\\/"),
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
		id: "bespokechat",
		name: "BespokeChat",
		website: "https://www.bespokechat.com",
		description: "BespokeChat is a Polish-developed chat solution designed to support real-time online communication.",
		icon: "BespokeChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "bespokechat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.bespokechat\\.com"),
				description: "Script source URL matches a known technology marker.",
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
		id: "betterbot",
		name: "BetterBot",
		website: "https://betterbot.com",
		description: "BetterBot is a conversational leasing tool tailored for real estate.",
		icon: "BetterBot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "betterbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:dashboard\\.betterbot\\.ai|\\.betterbot\\.com)"),
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
		id: "biglist",
		name: "BIGLIST",
		website: "https://www.biglist.com",
		description: "BIGLIST is an opt-in email newsletter system designed to collect, manage, and distribute email updates to subscribers.",
		icon: "BIGLIST.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "biglist:meta:0",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^BIGLIST Inc.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "biglist:meta:1",
				kind: "meta",
				key: "author",
				valuePattern: new RegExp("^biglist inc.$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "birdseed",
		name: "BirdSeed",
		website: "https://birdseed.io",
		description: "BirdSeed is a suite of website tools designed to enhance customer experience, enable real-time engagement, and support revenue growth.",
		icon: "BirdSeed.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "birdseed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.birdseed\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "birdseed:jsGlobal:1",
				kind: "jsGlobal",
				property: "birdseed_widget_controller",
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
		id: "blinger",
		name: "Blinger",
		website: "https://blinger.io",
		description: "Blinger is an omnichannel customer support and sales platform that aggregates messaging apps and live chat into a single helpdesk interface.",
		icon: "Blinger.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "blinger:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.blinger\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "blinger:jsGlobal:1",
				kind: "jsGlobal",
				property: "Blinger",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "blinger:jsGlobal:2",
				kind: "jsGlobal",
				property: "blingerInit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:blinger:blinger:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "blip",
		name: "Blip",
		website: "https://www.blip.ai",
		description: "Blip is an intelligent conversation platform designed to facilitate interactive communication.",
		icon: "Blip.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "blip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/santander-partner-blipchat\\.min\\.js"),
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
		id: "boatchat",
		name: "BoatChat",
		website: "https://www.boatchat.com",
		description: "BoatChat is a customer service tool that provides live chat support for inquiries and assistance related to boat dealerships.",
		icon: "BoatChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "boatchat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.boatchat\\.com"),
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
		id: "bold-chat",
		name: "Bold Chat",
		website: "https://www.boldchat.com/",
		description: "BoldChat is a live chat platform.",
		icon: "BoldChat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "bold-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^https?:\\/\\/vmss\\.boldchat\\.com\\/aid\\/\\d{18}\\/bc\\.vms4\\/vms\\.js"),
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
		id: "boost-ai",
		name: "Boost.ai",
		website: "https://boost.ai",
		description: "Boost.ai is a conversational AI platform designed to increase self-service rates and elevate customer satisfaction levels through end-to-end solutions.",
		icon: "BoostAI.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "boost-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boost\\.ai\\/chatPanel\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "boost-ai:dom:1",
				kind: "dom",
				selector: "link[href*='.boost.ai']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "boost-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "boost",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boost-ai:jsGlobal:3",
				kind: "jsGlobal",
				property: "boostChatPanel",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boost-ai:jsGlobal:4",
				kind: "jsGlobal",
				property: "boostInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "boost-ai:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boost\\.ai\\/chatpanel\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "bot9",
		name: "Bot9",
		website: "https://bot9.ai",
		description: "Bot9 is an AI chatbot builder, tailored for customer support.",
		icon: "Bot9.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "bot9:jsGlobal:0",
				kind: "jsGlobal",
				property: "BOT9_DATA.bot9Id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bot9:jsGlobal:1",
				kind: "jsGlobal",
				property: "Bot9ChatbotInstance",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "bot9:jsGlobal:2",
				kind: "jsGlobal",
				property: "bot9CopyCodeToClipboard",
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
		id: "botbrains",
		name: "botBrains",
		website: "https://www.botbrains.io",
		description: "botBrains is an AI-powered platform offering customer support chatbots that handle inquiries and improve response times.",
		icon: "botBrains.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botbrains:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.botbrains\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "botbrains:jsGlobal:1",
				kind: "jsGlobal",
				property: "$botbrains",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botbrains:jsGlobal:2",
				kind: "jsGlobal",
				property: "botbrainsCleanup",
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
		id: "botco-ai",
		name: "Botco.ai",
		website: "https://botco.ai",
		description: "Botco.ai is a platform that provides generative AI chatbot solutions to support customer engagement, automate conversations, and deliver information across digital channels.",
		icon: "Botco.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botco-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.botco\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "botco-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "BotcoWebchat.Events",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "botmind",
		name: "Botmind",
		website: "https://www.botmind.io",
		description: "Botmind is a software that automates responses to frequently asked questions.",
		icon: "Botmind.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botmind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.botmind\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "botmind:jsGlobal:1",
				kind: "jsGlobal",
				property: "botmindWidget",
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
		id: "botpenguin",
		name: "BotPenguin",
		website: "https://botpenguin.com",
		description: "BotPenguin is an AI chatbot creator for websites, WhatsApp, Facebook, and Telegram.",
		icon: "BotPenguin.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botpenguin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.botpenguin\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "botpenguin:jsGlobal:1",
				kind: "jsGlobal",
				property: "BotPenguin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botpenguin:jsGlobal:2",
				kind: "jsGlobal",
				property: "BotPenguinWindow",
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
		id: "botpress",
		name: "Botpress",
		website: "https://botpress.com",
		description: "Botpress is a conversational AI platform that empowers individuals and teams of all sizes to design, build, and deploy AI-powered chatbots for various applications.",
		icon: "Botpress.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botpress:jsGlobal:0",
				kind: "jsGlobal",
				property: "botpressWebChat.init",
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
		id: "botsify",
		name: "Botsify",
		website: "https://botsify.com",
		description: "Botsify is a platform that enables businesses to create chatbots without requiring any coding knowledge.",
		icon: "Botsify.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botsify:jsGlobal:0",
				kind: "jsGlobal",
				property: "botsify.load",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botsify:jsGlobal:1",
				kind: "jsGlobal",
				property: "setbotsifyIcon",
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
		id: "botsonic",
		name: "Botsonic",
		website: "https://botsonic.com",
		description: "Botsonic is a no-code, custom AI chatbot builder that enables businesses to interact with their website visitors/users through natural language conversations.",
		icon: "Botsonic.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botsonic:jsGlobal:0",
				kind: "jsGlobal",
				property: "Botsonic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botsonic:jsGlobal:1",
				kind: "jsGlobal",
				property: "botsonicConfig-Botsonic",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botsonic:jsGlobal:2",
				kind: "jsGlobal",
				property: "botsonic_widget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botsonic:jsGlobal:3",
				kind: "jsGlobal",
				property: "loaded-Botsonic",
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
		id: "botsplash",
		name: "Botsplash",
		website: "https://www.botsplash.com",
		description: "Botsplash is a communication platform that manages conversations across SMS, web chat, email, voice, and AI in real time from a single interface.",
		icon: "Botsplash.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botsplash:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chatcdn\\.botsplash\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "botsplash:jsGlobal:1",
				kind: "jsGlobal",
				property: "$botsplash",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botsplash:jsGlobal:2",
				kind: "jsGlobal",
				property: "BOTSPLASH_APP_ID",
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
		id: "botstar",
		name: "BotStar",
		website: "https://botstar.com",
		description: "BotStar is a platform for creating chatbots for websites and messaging applications.",
		icon: "BotStar.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botstar:jsGlobal:0",
				kind: "jsGlobal",
				property: "BotStar.appId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botstar:jsGlobal:1",
				kind: "jsGlobal",
				property: "BotStarApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "botstar:jsGlobal:2",
				kind: "jsGlobal",
				property: "BotStarUp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "botup",
		name: "BotUp",
		website: "https://botup.com",
		description: "BotUp is a chatbot software that helps build your chatbot without coding.",
		icon: "BotUp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "botup:jsGlobal:0",
				kind: "jsGlobal",
				property: "_Botup",
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
		id: "brevo",
		name: "Brevo",
		website: "https://www.brevo.com",
		description: "Brevo is a live chat system designed for customer support and engagement on websites.",
		icon: "Brevo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "brevo:dom:0",
				kind: "dom",
				selector: "iframe[src*='meet.brevo.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "brevo:jsGlobal:1",
				kind: "jsGlobal",
				property: "BrevoConversations",
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
		id: "callbell",
		name: "Callbell",
		website: "https://www.callbell.eu",
		description: "Callbell is a web-based live chat solution designed to help businesses manage team collaboration via multiple communication channels.",
		icon: "Callbell.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "callbell:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.callbell\\.eu\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "callbell:jsGlobal:1",
				kind: "jsGlobal",
				property: "Callbell",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "callbell:jsGlobal:2",
				kind: "jsGlobal",
				property: "callbellSettings",
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
		id: "callgear",
		name: "Callgear",
		website: "https://callgear.com",
		description: "Callgear is a business communication platform that enables centralized management of voice calls and text messaging across organizational communication channels.",
		icon: "Callgear.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "callgear:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.callgear\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "callgear:jsGlobal:1",
				kind: "jsGlobal",
				property: "CallGear.Captcha",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "capacity",
		name: "Capacity",
		website: "https://capacity.com",
		description: "Capacity is a live chat system for ecommerce websites, formerly known as Needle.",
		icon: "Capacity.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "capacity:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.needle\\.com\\/"),
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
		id: "carchat24",
		name: "CarChat24",
		website: "http://carchat24.com",
		description: "CarChat24 is a live chat solution built specifically for the automotive industry to facilitate real-time customer engagement and lead generation.",
		icon: "CarChat24.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "carchat24:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service11\\.carchat24\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "cemax",
		name: "CEMax",
		website: "https://cemax.ai",
		description: "CEMax is a premium customer engagement platform.",
		icon: "CEMax.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "cemax:dom:0",
				kind: "dom",
				selector: "div[data-chat-url*='.cemaxai.com/']",
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
		id: "centribal",
		name: "Centribal",
		website: "https://centribal.com",
		description: "Centribal is a conversational platform designed for creating, managing, and training chatbots.",
		icon: "Centribal.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "centribal:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.centribal\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "centribal:jsGlobal:1",
				kind: "jsGlobal",
				property: "centribot_services",
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
		id: "channel-io",
		name: "Channel.io",
		website: "https://channel.io",
		description: "Channel.io is an all-in-one business communication platform that helps businesses connect with customers.",
		icon: "Channel.io.png",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "channel-io:jsGlobal:0",
				kind: "jsGlobal",
				property: "ChannelIO",
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
		id: "chaport",
		name: "Chaport",
		website: "https://www.chaport.com",
		description: "Chaport is a multi-channel live chat and chatbot software for business.",
		icon: "Chaport.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chaport:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chaport\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chaport:jsGlobal:1",
				kind: "jsGlobal",
				property: "chaport",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chaport:jsGlobal:2",
				kind: "jsGlobal",
				property: "chaportConfig",
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
		id: "chat-chasers",
		name: "Chat Chasers",
		website: "https://www.chatchasers.com",
		description: "Chat Chasers is a chat system designed for car dealers to streamline communication with customers.",
		icon: "ChatChasers.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chat-chasers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chatchasers\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chat-chasers:jsGlobal:1",
				kind: "jsGlobal",
				property: "_FetchChatChasersApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "chat-robot",
		name: "Chat Robot",
		website: "https://chat-robot.com",
		description: "Chat Robot is a live chat system.",
		icon: "ChatRobot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chat-robot:jsGlobal:0",
				kind: "jsGlobal",
				property: "CRChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chat-robot:jsGlobal:1",
				kind: "jsGlobal",
				property: "_crChat.browserInfo",
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
		id: "chatbaby",
		name: "Chatbaby",
		website: "https://chatbaby.co",
		description: "Chatbaby is a service for creating custom ChatGPT chatbots tailored to website content.",
		icon: "Chatbaby.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatbaby:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chatbaby\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatbaby:jsGlobal:1",
				kind: "jsGlobal",
				property: "$$chatbaby",
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
		id: "chatbase",
		name: "Chatbase",
		website: "https://www.chatbase.co",
		description: "Chatbase is an AI chatbot builder, it trains ChatGPT on your data and lets you add a chat widget to your website.",
		icon: "Chatbase.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatbase:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.chatbase\\.co"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "chatbase:jsGlobal:1",
				kind: "jsGlobal",
				property: "chatbaseConfig.chatbotId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatbase:jsGlobal:2",
				kind: "jsGlobal",
				property: "embedChatbaseChatbot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatbase:cookie:3",
				kind: "cookie",
				keyPattern: new RegExp("^chatbase_anon_id$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "chatbot",
		name: "ChatBot",
		website: "https://www.chatbot.com",
		description: "ChatBot is a framework for AI chatbots, enabling users to create chatbots for various web services.",
		icon: "ChatBot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chatbot\\.com\\/"),
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
		id: "chatbotbuilder",
		name: "ChatBotBuilder",
		website: "https://www.chatbotbuilder.ai",
		description: "ChatBotBuilderAI is an AI chatbot development platform that enables deployment of custom GPT-powered chatbots.",
		icon: "ChatBotBuilder.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatbotbuilder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.chatgptbuilder\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"onetime",
				"recurring",
			],
		},
	},
	{
		id: "chatbullet",
		name: "ChatBullet",
		website: "https://chatbullet.com",
		description: "ChatBullet is a platform that integrates chatbots and AI tools to automate customer interactions.",
		icon: "ChatBullet.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatbullet:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.chatbullet\\.com"),
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
		id: "chatfood",
		name: "ChatFood",
		website: "https://www.chatfood.io",
		description: "ChatFood is a platform providing mobile ordering tailored for hospitality brands.",
		icon: "ChatFood.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatfood:jsGlobal:0",
				kind: "jsGlobal",
				property: "ChatFoodWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatfood:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChatFoodWidgetClient",
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
		id: "chatgen",
		name: "ChatGen",
		website: "https://chatgen.ai",
		description: "ChatGen is a hybrid chatbot platform designed to facilitate communication with prospects, customers, and internal employees, aiming to reduce turnaround time and improve productivity.",
		icon: "ChatGen.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatgen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chatgen\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatgen:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChatGen",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatgen:jsGlobal:2",
				kind: "jsGlobal",
				property: "loadChatgen",
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
		id: "chatgo",
		name: "Chatgo",
		website: "https://www.chatgo.cz",
		description: "Chatgo is a messenger widget designed for integration with websites and e-shops, enabling communication and engagement.",
		icon: "Chatgo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatgo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chatgo\\.cz"),
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
		id: "chatify",
		name: "Chatify",
		website: "https://www.chatify.com",
		description: "Chatify is a chat solution for websites seeking to enhance customer engagement.",
		icon: "Chatify.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chatify\\.com\\/"),
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
		id: "chative",
		name: "Chative",
		website: "https://chative.io",
		description: "Chative is a platform that provides live chat and chatbot solutions for real-time customer interactions.",
		icon: "Chative.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chative:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.chative\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chative:jsGlobal:1",
				kind: "jsGlobal",
				property: "Chative.app_id",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chative:jsGlobal:2",
				kind: "jsGlobal",
				property: "ChativeApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chative:jsGlobal:3",
				kind: "jsGlobal",
				property: "ChativeEvents",
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
		id: "chatlab",
		name: "ChatLab",
		website: "https://www.chatlab.com",
		description: "ChatLab is an AI-powered customer service agent that operates as a chatbot on websites to assist with user inquiries.",
		icon: "ChatLab.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatlab:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.chatlab\\.com"),
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
		id: "chatlio",
		name: "Chatlio",
		website: "https://chatlio.com",
		description: "Chatlio is a live chat solution that integrates with Slack, enabling real-time communication and customer support directly within the Slack platform.",
		icon: "Chatlio.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatlio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("w\\.chatlio\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatlio:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChatlioReact",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatlio:jsGlobal:2",
				kind: "jsGlobal",
				property: "ChatlioReactDOM",
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
		id: "chatlyn",
		name: "Chatlyn",
		website: "https://chatlyn.com",
		description: "Chatlyn is an AI-powered customer engagement platform designed to automate client communication and optimize engagement, enhancing customer satisfaction.",
		icon: "Chatlyn.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "chatlyn:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.chatlyn\\.com\\/"),
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
		id: "chatnode",
		name: "ChatNode",
		website: "https://www.chatnode.ai",
		description: "ChatNode is a platform for building advanced AI chatbots that provide deep business insights, designed to enhance customer interactions through innovative technology.",
		icon: "ChatNode.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "chatnode:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("embed\\.chatnode\\.ai\\/"),
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
		id: "chatplus",
		name: "ChatPlus",
		website: "https://chatplus.jp",
		description: "ChatPlus is a provider of chat and chatbot tool with (or without) AI in Japan and abroad.",
		icon: "ChatPlus.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatplus:jsGlobal:0",
				kind: "jsGlobal",
				property: "ChatplusAction.addAgentTag",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatplus:jsGlobal:1",
				kind: "jsGlobal",
				property: "ChatplusAppScript.getLead",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatplus:jsGlobal:2",
				kind: "jsGlobal",
				property: "ChatplusScript.focusPrompt",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatplus:jsGlobal:3",
				kind: "jsGlobal",
				property: "jpChatplusOnComplete",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatplus:jsGlobal:4",
				kind: "jsGlobal",
				property: "jp_chatplus_app_accessTime",
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
		id: "chatra",
		name: "Chatra",
		website: "https://chatra.com",
		description: "Chatra is a cloud-based live chat platform aimed at small businesses and ecommerce retailers.",
		icon: "Chatra.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatra:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("call\\.chatra\\.io\\/chatra\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatra:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("chat\\.chatra\\.io\\/"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "chatra:jsGlobal:2",
				kind: "jsGlobal",
				property: "ChatraID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatra:jsGlobal:3",
				kind: "jsGlobal",
				property: "ChatraSetup",
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
		id: "chatroll",
		name: "Chatroll",
		website: "https://chatroll.com",
		description: "Chatroll is a chat platform designed for live events, enabling real-time audience engagement and interaction.",
		icon: "Chatroll.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatroll:dom:0",
				kind: "dom",
				selector: "iframe[src*='chatroll.com/']",
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
		id: "chatsimple",
		name: "Chatsimple",
		website: "https://www.chatsimple.ai",
		description: "Chatsimple provides AI chatbots for sales and support, facilitating lead generation and multilingual customer assistance.",
		icon: "Chatsimple.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "chatsimple:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chatsimple\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatsimple:jsGlobal:1",
				kind: "jsGlobal",
				property: "chatsimpleCoPilot",
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
		id: "chatstack",
		name: "ChatStack",
		website: "https://www.chatstack.com",
		description: "ChatStack is a self-hosted live chat software for websites.",
		icon: "ChatStack.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatstack:jsGlobal:0",
				kind: "jsGlobal",
				property: "Chatstack.chatState",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatstack:jsGlobal:1",
				kind: "jsGlobal",
				property: "Chatstack.server",
				description: "Page-owned global matches a known technology marker.",
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
		id: "chatthing",
		name: "ChatThing",
		website: "https://chatthing.ai",
		description: "Chat Thing is a platform that provides tools to build AI agents trained on custom content.",
		icon: "ChatThing.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatthing:jsGlobal:0",
				kind: "jsGlobal",
				property: "chatThing.chatFrame",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatthing:jsGlobal:1",
				kind: "jsGlobal",
				property: "chatThingConfig",
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
		id: "chatway",
		name: "Chatway",
		website: "https://chatway.app",
		description: "Chatway is a live chat tool for websites, designed to facilitate customer engagement through real-time conversations.",
		icon: "Chatway.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatway:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chatway\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatway:jsGlobal:1",
				kind: "jsGlobal",
				property: "$chatway",
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
		id: "chatwee",
		name: "Chatwee",
		website: "https://chatwee.com",
		description: "Chatwee is a live chat and instant messaging app designed to facilitate real-time communication on websites and online communities.",
		icon: "Chatwee.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatwee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\bchatwee(?:-api)?\\.com\\/.*\\.js"),
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
		id: "chatwing",
		name: "ChatWING",
		website: "https://chatwing.com",
		description: "ChatWING is a live website chat system designed to facilitate real-time communication between businesses and website visitors.",
		icon: "ChatWING.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatwing:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.chatwing\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "chatwing:dom:1",
				kind: "dom",
				selector: "iframe[src*='chatwing.com/chatbox/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "chatwing:jsGlobal:2",
				kind: "jsGlobal",
				property: "chatwing.browser",
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
		id: "chatwith-io",
		name: "ChatWith.io",
		website: "https://chatwith.io",
		description: "ChatWith.io is a versatile platform enabling WhatsApp link management, statistics tracking, and specialised services like WhatsApp Business Dating and widgets for efficient customer engagement.",
		icon: "ChatWith.io.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatwith-io:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.tochat\\.be\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chatwith-io:dom:1",
				kind: "dom",
				selector: "a[href*='//chatwith.io/'][target='_self']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"onetime",
			],
		},
	},
	{
		id: "chatwoot",
		name: "Chatwoot",
		website: "https://www.chatwoot.com",
		description: "Chatwoot is a customer support tool for instant messaging channels.",
		icon: "Chatwoot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chatwoot:jsGlobal:0",
				kind: "jsGlobal",
				property: "$chatwoot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chatwoot:jsGlobal:1",
				kind: "jsGlobal",
				property: "chatwootSDK",
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
			cpe: "cpe:2.3:a:chatwoot:chatwoot:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "chaty",
		name: "Chaty",
		website: "https://chaty.app/",
		description: "Chaty is a communication tool that enables customer engagement through messaging apps like WhatsApp and Messenger.",
		icon: "Chaty.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chaty:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.chaty\\.app\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chaty:jsGlobal:1",
				kind: "jsGlobal",
				property: "close_chaty",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chaty:jsGlobal:2",
				kind: "jsGlobal",
				property: "launch_chaty",
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
		id: "chekkit",
		name: "Chekkit",
		website: "https://www.chekkit.io",
		description: "Chekkit is an all-in-one review, messaging, and lead inbox software.",
		icon: "Chekkit.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "chekkit:jsGlobal:0",
				kind: "jsGlobal",
				property: "chekkitSettings.toggleChat",
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
		id: "chord",
		name: "Chord",
		website: "https://m.chord.us",
		description: "Chord is a video-enabled social community and communication platform completely customised to your brand.",
		icon: "Chord.svg",
		categories: [
			"email-messaging",
			"media-video",
		],
		rules: [
			{
				id: "chord:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chord\\.us\\/embeddable\\/client-([\\d\\.]+)\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "chord:jsGlobal:1",
				kind: "jsGlobal",
				property: "CHORDCONNECT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "chord:jsGlobal:2",
				kind: "jsGlobal",
				property: "ChordConnect.__esModule",
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
		id: "clearout",
		name: "Clearout",
		website: "https://clearout.io",
		description: "Clearout is a bulk email validation service designed to clean email lists and improve deliverability.",
		icon: "Clearout.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "clearout:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.clearout\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "clearout:jsGlobal:1",
				kind: "jsGlobal",
				property: "clearout.$",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "clearstream",
		name: "Clearstream",
		website: "https://clearstream.io",
		description: "Cloudstream is a communication platform that provides texting and email services for congregational outreach and engagement.",
		icon: "Clearstream.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "clearstream:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.clearstream\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "cleverreach",
		name: "CleverReach",
		website: "https://www.cleverreach.com",
		description: "CleverReach is email marketing software featuring a web form designed for newsletter creation and distribution.",
		icon: "CleverReach.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "cleverreach:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.cleverreach\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "cleverreach:dom:1",
				kind: "dom",
				selector: "form[action*='.cleverreach.com/']",
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
		id: "clickchat",
		name: "ClickChat",
		website: "https://click-chat.ru",
		description: "Click Chat is a web-based solution that enables chat installation on any website, facilitating real-time communication and customer engagement.",
		icon: "ClickChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "clickchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.click-chat\\.ru"),
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
		id: "clickdesk",
		name: "ClickDesk",
		website: "https://www.clickdesk.com",
		description: "ClickDesk is a live chat and online engagement software that enables real-time interaction with website visitors.",
		icon: "ClickDesk.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "clickdesk:jsGlobal:0",
				kind: "jsGlobal",
				property: "CLICKDESK_CHAT_WINDOW_UI",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickdesk:jsGlobal:1",
				kind: "jsGlobal",
				property: "CLICKDESK_LIVECHAT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "clickdesk:jsGlobal:2",
				kind: "jsGlobal",
				property: "CLICKDESK_Live_Chat",
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
		id: "cliengo",
		name: "Cliengo",
		website: "https://www.cliengo.com",
		description: "Cliengo is a platform that automates website conversations using Artificial Intelligence to enhance customer engagement and drive sales.",
		icon: "Cliengo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "cliengo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("s\\.cliengo\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cliengo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Cliengo.chatConfig",
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
		id: "client-chat-live",
		name: "Client Chat Live",
		website: "https://clientchatlive.com",
		description: "Client Chat Live is a tool that converts website visitors into clients through live chat functionality.",
		icon: "ClientChatLive.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "client-chat-live:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.clientchatlive\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "client-chat-live:dom:1",
				kind: "dom",
				selector: "link[href*='platform.clientchatlive.com/']",
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
		id: "coax",
		name: "Coax",
		website: "https://coax.com.au",
		description: "Coax is a communication platform that consolidates chat histories from multiple channels to improve business communication and customer service.",
		icon: "Coax.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "coax:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.coax\\.com\\.au"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "coax:jsGlobal:1",
				kind: "jsGlobal",
				property: "coaxAppStorage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "coax:jsGlobal:2",
				kind: "jsGlobal",
				property: "coaxCurrentWebDomain",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "coax:jsGlobal:3",
				kind: "jsGlobal",
				property: "openCoaxWidget",
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
		id: "cognigy",
		name: "Cognigy",
		website: "https://www.cognigy.com",
		description: "Cognigy is a provider of generative and conversational AI-powered customer service agents for businesses.",
		icon: "Cognigy.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "cognigy:jsGlobal:0",
				kind: "jsGlobal",
				property: "__COGNIGY_WEBCHAT",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cognigy:jsGlobal:1",
				kind: "jsGlobal",
				property: "cognigyWebchatInputPlugins",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "cognigy:jsGlobal:2",
				kind: "jsGlobal",
				property: "cognigyWebchatMessagePlugins",
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
		id: "collect-chat",
		name: "Collect.chat",
		website: "https://collect.chat",
		description: "Collect.chat is an interactive chatbot that collects data from website visitors.",
		icon: "CollectChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "collect-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("collectorcdn\\.com\\/launcher\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "collect-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "CollectAlwaysOpen",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "collect-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "CollectChatLauncher",
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
		id: "cometchat",
		name: "CometChat",
		website: "https://www.cometchat.com",
		description: "CometChat is a SaaS solution that provides apps and websites with scalable text, voice, and video chat functionality.",
		icon: "CometChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "cometchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget-js\\.cometchat\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "comm100",
		name: "Comm100",
		website: "https://www.comm100.com",
		description: "Comm100 is a provider of customer service and communication products.",
		icon: "Comm100.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "comm100:jsGlobal:0",
				kind: "jsGlobal",
				property: "Comm100API",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "comm100:jsGlobal:1",
				kind: "jsGlobal",
				property: "comm100_chatButton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "comm100:jsGlobal:2",
				kind: "jsGlobal",
				property: "comm100_livechat_open_link",
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
		id: "conferbot",
		name: "Conferbot",
		website: "https://www.conferbot.com",
		description: "Conferbot is a platform designed to improve website engagement through customisable chatbots, catering to various business requirements.",
		icon: "Conferbot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "conferbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("conferbot\\.defaults.*\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "conferbot:jsGlobal:1",
				kind: "jsGlobal",
				property: "ConferbotWidget",
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
		id: "convertobot",
		name: "ConvertoBot",
		website: "https://convertobot.com",
		description: "ConvertoBot is a chatbot and conversational marketing tool.",
		icon: "ConvertoBot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "convertobot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.convertobot\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "convertobot:jsGlobal:1",
				kind: "jsGlobal",
				property: "botUrl",
				valuePattern: new RegExp("app\\.convertobot\\.com"),
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
		id: "copilot-live",
		name: "Copilot.Live",
		website: "https://www.copilot.live",
		description: "Copilot. Live is an AI agent with human-level capabilities, enabling the creation of AI agents for customer support.",
		icon: "CopilotLive.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "copilot-live:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.copilot\\.live"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"onetime",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "corover",
		name: "CoRover",
		website: "https://corover.ai",
		description: "CoRover is a conversational AI chatbot platform with proprietary cognitive AI technology.",
		icon: "CoRover.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "corover:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.corover\\.mobi\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "corover:jsGlobal:1",
				kind: "jsGlobal",
				property: "CoRover_tag",
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
		id: "crikle",
		name: "Crikle",
		website: "https://www.crikle.com",
		description: "Crikle is a multichannel customer engagement software.",
		icon: "Crikle.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "crikle:jsGlobal:0",
				kind: "jsGlobal",
				property: "crikle.contactId",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crikle:jsGlobal:1",
				kind: "jsGlobal",
				property: "crikle.openConvertWidget",
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
		id: "crisp-live-chat",
		name: "Crisp Live Chat",
		website: "https://crisp.chat/",
		description: "Crisp Live Chat is a live chat solution with free and paid options.",
		icon: "Crisp Live Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "crisp-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.crisp\\.chat\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "crisp-live-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "$__CRISP_INCLUDED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crisp-live-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "$crisp",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "crisp-live-chat:jsGlobal:3",
				kind: "jsGlobal",
				property: "CRISP_WEBSITE_ID",
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
		id: "crossbox",
		name: "CrossBox",
		website: "https://crossbox.io",
		description: "CrossBox is a webmail client.",
		icon: "CrossBox.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "crossbox:header:0",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("CBX-WS", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "crossbox:header:1",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("cbx-ws", "i"),
				description: "Response header matches a known technology marker.",
			},
		],
	},
	{
		id: "cu-chat",
		name: "CU Chat",
		website: "https://cu.chat",
		description: "CU Chat is a custom AI chatbot designed to provide 24/7 support, tailored to the specific needs of members.",
		icon: "CUChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "cu-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "chatapp.api",
				valuePattern: new RegExp("api\\.cu\\.chat"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "czater",
		name: "Czater",
		website: "https://www.czater.pl",
		description: "Czater is an live chat solution with extended CRM and videochat features.",
		icon: "Czater.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "czater:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.czater\\.pl"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "czater:jsGlobal:1",
				kind: "jsGlobal",
				property: "$czater",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "czater:jsGlobal:2",
				kind: "jsGlobal",
				property: "$czaterMethods",
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
		id: "deskpro-chat",
		name: "DeskPro Chat",
		website: "https://www.deskpro.com/product/chat",
		description: "DeskPro is multi channel helpdesk software for managing customer and citizen requests via email, forms, chat, social and voice.",
		icon: "DeskPro.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "deskpro-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "DESKPRO_WIDGET_OPTIONS.chat",
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
		id: "desku",
		name: "Desku",
		website: "https://desku.io",
		description: "Desku is a customer support tool that helps ecommerce businesses manage and respond to customer inquiries.",
		icon: "Desku.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "desku:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.desku\\.io\\/chat-widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "desku:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("livechat\\.desku\\.io\\/cdn\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "desku:jsGlobal:2",
				kind: "jsGlobal",
				property: "Desku",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "desku:jsGlobal:3",
				kind: "jsGlobal",
				property: "isDeskuManagerRunning",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "desku:jsGlobal:4",
				kind: "jsGlobal",
				property: "isDeskuWidgetAuthSetup",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "desku:jsGlobal:5",
				kind: "jsGlobal",
				property: "isdeskuManagerRunning",
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
		id: "devrev",
		name: "DevRev",
		website: "https://devrev.ai/plug-observability",
		description: "DevRev PLuG is a customer support platform offering live chat, help documentation, search functionality, an observability engine, and product announcements, all integrated within a widget similar to a support chat widget for website assistance.",
		icon: "DevRev.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "devrev:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("plug-platform\\.devrev\\.ai\\/"),
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
		id: "dialogity",
		name: "Dialogity",
		website: "https://dialogity.com",
		description: "Dialogity Chat is a customer service chatbot platform.",
		icon: "Dialogity.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "dialogity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.dialogity\\.com"),
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
		id: "dialogshift",
		name: "DialogShift",
		website: "https://www.dialogshift.com",
		description: "DialogShift is a hotel AI solution for chat, email, and telephone communication.",
		icon: "DialogShift.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "dialogshift:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("assets\\.dialogshift\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "dialogshift:jsGlobal:1",
				kind: "jsGlobal",
				property: "Dialogshift.instance",
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
		id: "dina-kunder",
		name: "Dina Kunder",
		website: "https://dinakunder.se",
		description: "Dina Kunder is a provider of AI chatbots designed for automating customer support.",
		icon: "DinaKunder.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "dina-kunder:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.dinakunder\\.se"),
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
		id: "docsbot",
		name: "DocsBot",
		website: "https://docsbot.ai",
		description: "DocsBot is an AI-powered chatbot that helps automate customer support and improve team productivity.",
		icon: "DocsBotAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "docsbot:jsGlobal:0",
				kind: "jsGlobal",
				property: "DocsBotAI.el",
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
		id: "doppler",
		name: "Doppler",
		website: "https://www.fromdoppler.com",
		description: "Doppler is an email marketing and transactional email service.",
		icon: "Doppler.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "doppler:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/(?:hub|cdn)\\.fromdoppler\\.com\\/"),
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
		id: "dotdigital-chat",
		name: "Dotdigital Chat",
		website: "https://dotdigital.com",
		description: "Dotdigital Chat is a smart, customisable widget that makes it easy for shoppers to communicate in real-time with members of your team.",
		icon: "Dotdigital.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "dotdigital-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "_ddgChatConfig.urlBase",
				valuePattern: new RegExp("\\.dotdigital\\.com"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
		},
		implies: [
			"dotdigital",
		],
	},
	{
		id: "doubletick",
		name: "DoubleTick",
		website: "https://doubletick.io",
		description: "DoubleTick is a phone-based WhatsApp API for B2C and B2B sales, enabling bulk messaging, chatbots, and order booking.",
		icon: "DoubleTick.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "doubletick:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.doubletick\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "doubletick:jsGlobal:1",
				kind: "jsGlobal",
				property: "dt.resetConfig",
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
		id: "drift",
		name: "Drift",
		website: "https://www.drift.com/",
		description: "Drift is a conversational marketing and sales platform with chat, messaging, and meeting tools.",
		icon: "Drift.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "drift:jsGlobal:0",
				kind: "jsGlobal",
				property: "drift",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "drift:jsGlobal:1",
				kind: "jsGlobal",
				property: "driftt",
				description: "Page-owned global matches a known technology marker.",
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
		id: "droxy",
		name: "Droxy",
		website: "https://www.droxy.ai",
		description: "Droxy is a tool that transforms content into interactive AI chatbots for educational and business use, enabling more engaging knowledge sharing.",
		icon: "Droxy.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "droxy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.droxy\\.ai\\/chat"),
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
		id: "droz-bot",
		name: "Droz Bot",
		website: "https://meudroz.com/droz-bot/",
		description: "Droz Bot is a multi-channel, customisable chatbot designed to help brands provide customer service across commonly used social apps.",
		icon: "Droz.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "droz-bot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat-app\\.meudroz\\.com\\/"),
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
		id: "easichat",
		name: "EasiChat",
		website: "https://easichat.co.uk",
		description: "Easichat is an online customer service platform that uses AI to automate and manage customer interactions.",
		icon: "EasiChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "easichat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.easichat\\.co\\.uk"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easichat:jsGlobal:1",
				kind: "jsGlobal",
				property: "easiChat.widget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "easyliao",
		name: "EasyLiao",
		website: "https://easyliao.com",
		description: "EasyLiao is a pre-sales customer agent system developed in China, designed to support businesses in handling customer inquiries and engagement before a sale.",
		icon: "EasyLiao.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "easyliao:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.easyliao\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "easyliao:jsGlobal:1",
				kind: "jsGlobal",
				property: "easyliaoIsPC",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "easyliao:jsGlobal:2",
				kind: "jsGlobal",
				property: "easyliao_design_init",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "egain-conversation",
		name: "eGain Conversation",
		website: "https://www.egain.com",
		description: "eGain Conversation is a customer engagement platform that centralises and manages customer interactions across multiple channels, including chat, email, social media, and messaging apps.",
		icon: "eGain.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "egain-conversation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.analytics-egain\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "egain-conversation:jsGlobal:1",
				kind: "jsGlobal",
				property: "egainDockChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ekonsilio",
		name: "eKonsilio",
		website: "https://www.ekonsilio.com",
		description: "eKonsilio is a conversational management platform that enables organizations to design, deploy, and manage automated and human-assisted conversations across digital communication channels.",
		icon: "eKonsilio.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ekonsilio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.ekonsilio\\.com"),
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
		id: "element",
		name: "Element",
		website: "https://element.io",
		description: "Element is a Matrix-based end-to-end encrypted messenger and secure collaboration app.",
		icon: "elementio.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "element:meta:0",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Element$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "element:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^element$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"low",
				"payg",
			],
			cpe: "cpe:2.3:a:matrix:element:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "eliseai",
		name: "EliseAI",
		website: "https://www.eliseai.com",
		description: "EliseAI is an AI-powered conversational platform for business automation.",
		icon: "EliseAI.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "eliseai:dom:0",
				kind: "dom",
				selector: "div#meetelise-chat-launcher-container",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "eliseai:jsGlobal:1",
				kind: "jsGlobal",
				property: "eliseAi",
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
		id: "emaileri",
		name: "Emaileri",
		website: "https://www.emaileri.com",
		description: "Emaileri is a platform designed for email marketing and newsletter communications.",
		icon: "Emaileri.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "emaileri:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("static\\.emaileri\\.fi"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "emaileri:dom:1",
				kind: "dom",
				selector: "iframe[src*='static.emaileri.fi']",
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
		id: "emailjs",
		name: "EmailJS",
		website: "https://www.emailjs.com",
		description: "EmailJS is a cloud-based email delivery service that allows you to send emails directly from your client-side JavaScript code without the need for a server-side implementation.",
		icon: "EmailJS.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "emailjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("([\\d\\.]+)?(?:\\/dist)?\\/email\\.min\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "emailjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "emailjs.sendForm",
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
		id: "engati",
		name: "Engati",
		website: "https://www.engati.com",
		description: "Engati is a chatbot platform that allows users to build bots without requiring programming skills.",
		icon: "Engati.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "engati:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.engati\\.com\\/"),
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
		id: "enterprise-bot",
		name: "Enterprise Bot",
		website: "https://www.enterprisebot.ai",
		description: "Enterprise Bot specializes in developing and deploying complex conversational AI systems tailored for enterprise settings, leveraging natural language processing, machine learning, and automation to improve customer interactions and streamline operations.",
		icon: "Enterprise Bot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "enterprise-bot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.enterprisebot\\.co\\/"),
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
		id: "envialosimple",
		name: "EnvialoSimple",
		website: "https://envialosimple.com",
		description: "EnvialoSimple is a marketing platform and newsletter management system used to create, send, and track email campaigns.",
		icon: "EnvialoSimple.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "envialosimple:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.envialosimple\\.com\\/"),
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
		id: "envoke",
		name: "Envoke",
		website: "https://envoke.com/",
		description: "Envoke is a CASL-compliant email marketing software designed for communications professionals in business, education, and the public sector, with a focus on security and compliance.",
		icon: "Envoke.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "envoke:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.envoke\\.com\\/"),
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
		id: "envolve-tech",
		name: "Envolve Tech",
		website: "https://envolvetech.com",
		description: "Envolve Tech is a platform that provides virtual shopping assistants designed to guide customers through online purchases.",
		icon: "EnvolveTech.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "envolve-tech:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.envolvetech\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "envolve-tech:jsGlobal:1",
				kind: "jsGlobal",
				property: "envolveChatInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "envolve-tech:jsGlobal:2",
				kind: "jsGlobal",
				property: "envolveJsonp",
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
		id: "facebook-chat-plugin",
		name: "Facebook Chat Plugin",
		website: "https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/",
		description: "Facebook Chat Plugin is a website plugin that businesses with a Facebook Page can install on their website.",
		icon: "Facebook.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "facebook-chat-plugin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("connect\\.facebook\\.net\\/.+\\.customerchat\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "facebook-chat-plugin:dom:1",
				kind: "dom",
				selector: "iframe[src*='.facebook.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "facebook-chat-plugin:jsGlobal:2",
				kind: "jsGlobal",
				property: "facebookChatSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "fastmind",
		name: "Fastmind",
		website: "https://fastmind.ai",
		description: "Fastmind is an AI-powered chatbot builder that enables customer engagement using live data retrieved directly from a search engine.",
		icon: "Fastmind.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "fastmind:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.fastmind\\.ai\\/"),
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
		id: "five9",
		name: "Five9",
		website: "https://www.five9.com",
		description: "Five9 is a cloud-based contact center platform that enables businesses to manage customer interactions across multiple communication channels, including voice, email, chat, and social media.",
		icon: "Five9.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "five9:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.five9\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "five9:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("app\\.five9\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "five9:jsGlobal:2",
				kind: "jsGlobal",
				property: "Five9.Api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "five9:jsGlobal:3",
				kind: "jsGlobal",
				property: "Five9Modules",
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
		id: "flashchat",
		name: "Flashchat",
		website: "https://flashchat.ai",
		description: "Flashchat is an automated messenger conversation tool.",
		icon: "Flashchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "flashchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.flashchat\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "floatbot",
		name: "Floatbot",
		website: "https://floatbot.ai",
		description: "Floatbot is a conversational AI Platform, facilitating the construction and deployment of voicebot, chatbot, and agent assist functionalities.",
		icon: "Floatbot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "floatbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.floatbot\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "floatbot:dom:1",
				kind: "dom",
				selector: "#flb-widget-handle",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "floatbot:jsGlobal:2",
				kind: "jsGlobal",
				property: "flb.base_url",
				valuePattern: new RegExp("\\.floatbot\\.ai\\/"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "floatbot:jsGlobal:3",
				kind: "jsGlobal",
				property: "flb.botId ",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
			],
		},
	},
	{
		id: "flyzoo",
		name: "Flyzoo",
		website: "https://flyzoo.co",
		description: "Flyzoo is a platform that provides real-time chat functionality designed to support online communities.",
		icon: "Flyzoo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "flyzoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.flyzoo\\.co\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "flyzoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Flyzoo.AT",
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
		id: "forethought-ai",
		name: "Forethought AI",
		website: "https://forethought.ai",
		description: "Forethought is a customer support AI platform designed to lower support costs and enhance customer experience.",
		icon: "ForethoughtAI.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "forethought-ai:dom:0",
				kind: "dom",
				selector: "iframe#forethought-chat",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "forethought-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "Forethought",
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
		id: "freshchat",
		name: "Freshchat",
		website: "https://www.freshworks.com/live-chat-software/",
		description: "Freshchat is a cloud-hosted live messaging and engagement application.",
		icon: "Freshchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "freshchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("wchat\\.freshchat\\.com\\/js\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "freshchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "Freshbots",
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
		id: "frisbie",
		name: "Frisbie",
		website: "https://frisbie.me",
		description: "Frisbie is a Russian chat widget designed for online communication.",
		icon: "Frisbie.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "frisbie:jsGlobal:0",
				kind: "jsGlobal",
				property: "Frisbie.app",
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
		id: "froged",
		name: "Froged",
		website: "https://froged.com",
		description: "Froged is an all-in-one omnichannel communication platform designed to streamline messaging across multiple channels.",
		icon: "Froged.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "froged:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("sdk\\.froged\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "froged:jsGlobal:1",
				kind: "jsGlobal",
				property: "Froged",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "froged:jsGlobal:2",
				kind: "jsGlobal",
				property: "frogedAutoClick",
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
		id: "front-ai",
		name: "Front AI",
		website: "https://front.ai",
		description: "Front AI is a platform that offers services for Conversational AI, Virtual Agents, and Service Bots to support automated customer interactions.",
		icon: "FrontAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "front-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.front\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "front-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "FrontCFcreateCookie",
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
		id: "front-chat",
		name: "Front Chat",
		website: "https://front.com",
		description: "Front Chat is the live website chat solution that you can manage straight from your inbox.",
		icon: "Front Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "front-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/chat-assets\\.frontapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "front-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "FrontChat",
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
		id: "genesys-chat",
		name: "Genesys Chat",
		website: "https://www.genesys.com/capabilities/live-chat-software",
		description: "Genesys Chat is a customer engagement platform that facilitates real-time communication between businesses and their customers through web messaging and live chat functionalities.",
		icon: "Genesys Cloud.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "genesys-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.boldchat\\.com\\/"),
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
		id: "geniee-chat",
		name: "Geniee Chat",
		website: "https://chamo-chat.com",
		description: "Geniee Chat is a chat-based web customer service platform.",
		icon: "GenieeChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "geniee-chat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.chamo-chat\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "geniee-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "GenooCSS.add",
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
		id: "getchat",
		name: "GetChat",
		website: "https://getchat.app",
		description: "GetChat is a platform enabling communication with website visitors via preferred messaging applications.",
		icon: "GetChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "getchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("getchat\\.app\\/"),
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
		id: "giosg",
		name: "Giosg",
		website: "https://www.giosg.com",
		description: "Giosg is a live chat solution designed to support ecommerce platforms by enabling real-time customer communication and engagement.",
		icon: "Giosg.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "giosg:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("service\\.giosg\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "giosg:jsGlobal:1",
				kind: "jsGlobal",
				property: "giosgWebpackJsonp",
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
		id: "gist",
		name: "Gist",
		website: "https://getgist.com/live-chat",
		description: "Gist is email marketing automation, live chat, and helpdesk software.",
		icon: "gist_live_chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getgist\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gist:jsGlobal:1",
				kind: "jsGlobal",
				property: "gist.options.versionNumber",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gist:jsGlobal:2",
				kind: "jsGlobal",
				property: "gist.setAppId ",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "gista",
		name: "Gista",
		website: "https://gista.co",
		description: "Gista is an AI conversion agent that helps websites turn visitors into leads and customers through automated engagement.",
		icon: "Gista.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gista:jsGlobal:0",
				kind: "jsGlobal",
				property: "$gista.config",
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
		id: "gitter",
		name: "Gitter",
		website: "https://gitter.im",
		description: "Gitter is a chat and networking platform that helps to manage, grow and connect communities through messaging.",
		icon: "Gitter.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gitter:jsGlobal:0",
				kind: "jsGlobal",
				property: "gitter.chat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "gladly",
		name: "Gladly",
		website: "https://www.gladly.com",
		description: "Gladly is a customer service platform.",
		icon: "Gladly.png",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "gladly:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gladly\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gladly:jsGlobal:1",
				kind: "jsGlobal",
				property: "Gladly",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "glassix",
		name: "Glassix",
		website: "https://glassix.co.il",
		description: "Glassix is an omnichannel messaging platform for service, sales, and support centers.",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "glassix:jsGlobal:0",
				kind: "jsGlobal",
				property: "GlassixWidgetClient",
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
		id: "gleap",
		name: "Gleap",
		website: "https://www.gleap.io",
		description: "Gleap is an all-in-one customer feedback platform offering features like in-app bug reporting, live chat, AI support bots, product roadmaps, customer surveys, and marketing automation to enhance customer service and product development.",
		icon: "Gleap.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gleap:jsGlobal:0",
				kind: "jsGlobal",
				property: "Gleap",
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
		id: "gleen",
		name: "Gleen",
		website: "https://gleen.ai",
		description: "Gleen is a generative AI chatbot designed to provide customers with trustworthy answers, automate actions, and integrate unified knowledge.",
		icon: "Gleen.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gleen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.gleen\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gleen:jsGlobal:1",
				kind: "jsGlobal",
				property: "gleenWidget",
				description: "Page-owned global matches a known technology marker.",
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
		id: "glia",
		name: "Glia",
		website: "https://www.glia.com",
		description: "Glia is a chat and digital assistant utilised across various industries.",
		icon: "Glia.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "glia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.glia\\.com\\/"),
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
		id: "gobot",
		name: "Gobot",
		website: "https://www.getgobot.com",
		description: "Gobot is a tool that increases website leads, sales, and engagement through a conversational bot.",
		icon: "Gobot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gobot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getgobot\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gobot:jsGlobal:1",
				kind: "jsGlobal",
				property: "gobot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gobot:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^_gobot$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "goftino",
		name: "Goftino",
		website: "https://www.goftino.com",
		description: "Goftino is an online chat service for web users.",
		icon: "Goftino.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "goftino:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.goftino\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "goftino:jsGlobal:1",
				kind: "jsGlobal",
				property: "Goftino.setWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goftino:jsGlobal:2",
				kind: "jsGlobal",
				property: "goftinoRemoveLoad",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goftino:jsGlobal:3",
				kind: "jsGlobal",
				property: "goftino_1",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "goftino:jsGlobal:4",
				kind: "jsGlobal",
				property: "goftino_getUrl",
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
		id: "goodbits",
		name: "Goodbits",
		website: "https://goodbits.io",
		description: "Goodbits is email newsletter creation software designed to help collect and curate content for sending newsletters.",
		icon: "Goodbits.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "goodbits:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^_goodbits_session$", "i"),
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
		id: "google-workspace",
		name: "Google Workspace",
		website: "https://workspace.google.com/",
		description: "Google Workspace, formerly G Suite, is a collection of cloud computing, productivity and collaboration tools.",
		icon: "Google.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "google-workspace:dns:0",
				kind: "dns",
				valuePattern: new RegExp("aspmx\\.l\\.google\\.com", "i"),
				recordType: "MX",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "google-workspace:dns:1",
				kind: "dns",
				valuePattern: new RegExp("googlemail\\.com", "i"),
				recordType: "MX",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "gorgias",
		name: "Gorgias",
		website: "https://www.gorgias.com/",
		description: "Gorgias is a helpdesk and chat solution designed for ecommerce stores.",
		icon: "Gorgias.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gorgias:jsGlobal:0",
				kind: "jsGlobal",
				property: "gorgiasChat",
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
		id: "grasp",
		name: "Grasp",
		website: "https://www.getgrasp.com",
		description: "Grasp is a customer support software company that offers a cloud-based helpdesk and live chat solution for businesses of all sizes.",
		icon: "Grasp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "grasp:jsGlobal:0",
				kind: "jsGlobal",
				property: "CASENGO.widget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "grasp:jsGlobal:1",
				kind: "jsGlobal",
				property: "CASENGO_INLINE_COOKIE",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "grasp:jsGlobal:2",
				kind: "jsGlobal",
				property: "casengoUpdateWidget",
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
		id: "gravity",
		name: "Gravity",
		website: "https://gravi.org",
		description: "Gravity is a live chat solution designed to facilitate real-time communication for businesses.",
		icon: "Gravity.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gravity:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.gravi\\.org\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "gravity:jsGlobal:1",
				kind: "jsGlobal",
				property: "gravi_api.chatMode",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gravity:jsGlobal:2",
				kind: "jsGlobal",
				property: "gravi_init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "gravity:jsGlobal:3",
				kind: "jsGlobal",
				property: "gravi_version",
				valuePattern: new RegExp("^([\\d\\.]+[a-z]?)$"),
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
		id: "groove",
		name: "Groove",
		website: "https://www.groovehq.com",
		description: "Groove is a help desk software offering a shared inbox, knowledge base, and chat features.",
		icon: "Groove.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "groove:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.groovehq\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "groove:jsGlobal:1",
				kind: "jsGlobal",
				property: "Groove",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "groove:jsGlobal:2",
				kind: "jsGlobal",
				property: "GrooveWidget",
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
		id: "gubagoo",
		name: "Gubagoo",
		website: "https://www.gubagoo.com",
		description: "Gubagoo is a website chat software platform that provides messaging and engagement tools designed to interact with visitors and support conversion of web traffic.",
		icon: "Gubagoo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "gubagoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.gubagoo\\.io"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "happyfox-live-chat",
		name: "HappyFox Live Chat",
		website: "https://www.happyfox.com/live-chat",
		description: "HappyFox is a help desk ticketing system that is hosted on cloud, supporting multiple customer support channels like email, voice and live chat.",
		icon: "HappyFox.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "happyfox-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.happyfoxchat\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "happyfox-live-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "HappyFoxChatObject",
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
		id: "haptik",
		name: "Haptik",
		website: "https://www.haptik.ai",
		description: "Haptik is an Indian enterprise conversational AI platform founded in August 2013, and acquired by Reliance Industries Limited in 2019.",
		icon: "Haptik.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "haptik:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.haptikapi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "haptik:jsGlobal:1",
				kind: "jsGlobal",
				property: "HaptikSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "haptik:jsGlobal:2",
				kind: "jsGlobal",
				property: "haptik",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "haptik:jsGlobal:3",
				kind: "jsGlobal",
				property: "haptikInitSettings",
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
		id: "helpcrunch",
		name: "HelpCrunch",
		website: "https://helpcrunch.com",
		description: "HelpCrunch is a customer service software platform designed to support core business communication and customer support needs across organizations.",
		icon: "HelpCrunch.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "helpcrunch:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helpcrunch\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "helpcrunch:jsGlobal:1",
				kind: "jsGlobal",
				property: "HelpCrunch",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "helpcrunch:jsGlobal:2",
				kind: "jsGlobal",
				property: "helpcrunchDebug",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "helponclick",
		name: "HelpOnClick",
		website: "https://helponclick.com",
		description: "HelpOnClick is a live chat and customer tracking platform designed to support real-time communication and monitor visitor interactions on websites.",
		icon: "HelpOnClick.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "helponclick:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.helponclick\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "helponclick:jsGlobal:1",
				kind: "jsGlobal",
				property: "HelpOnClickLogoRoundMask",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "helponclick:jsGlobal:2",
				kind: "jsGlobal",
				property: "HelpOnClick_ChatPrinter_Button",
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
		id: "hoiio",
		name: "Hoiio",
		website: "https://www.hoiio.com",
		description: "Hoiio is a cloud communications platform that simplifies the setup of messaging, voice, and other communication services.",
		icon: "Hoiio.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "hoiio:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("hoiio\\.notifyEmpty"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "hoiio:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("hoiio\\.notifyempty"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "hoory",
		name: "Hoory",
		website: "https://www.hoory.com",
		description: "Hoory is a Conversational AI platform that automates customer support.",
		icon: "Hoory.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "hoory:jsGlobal:0",
				kind: "jsGlobal",
				property: "$hoory",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hoory:jsGlobal:1",
				kind: "jsGlobal",
				property: "hoorySDK.reRun",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "hoory:jsGlobal:2",
				kind: "jsGlobal",
				property: "hoorySettings",
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
		id: "hubspot-chat",
		name: "HubSpot Chat",
		website: "https://www.hubspot.com/products/crm/live-chat",
		description: "HubSpot Chat is a tool where you can view, manage, and reply to incoming messages from multiple channels.",
		icon: "HubSpot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "hubspot-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.usemessages\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "hubspot-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "HubSpotConversations",
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
		id: "huggy",
		name: "Huggy",
		website: "https://www.huggy.io",
		description: "Huggy is a service automation platform that centralizes operations and integrates chatbots capable of responding at any time.",
		icon: "Huggy.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "huggy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.huggy\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "huggy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Huggy.closeBox",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"mid",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "iadvize",
		name: "iAdvize",
		website: "https://www.iadvize.com",
		description: "iAdvize is a conversational marketing platform that connects customers in need of advice with experts who are available 24/7 via messaging.",
		icon: "iAdvize.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "iadvize:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.iadvize\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "iadvize:dom:1",
				kind: "dom",
				selector: "link[href*='.iadvize.com']",
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
		id: "ideta",
		name: "Ideta",
		website: "https://www.ideta.io",
		description: "Ideta is a platform that provides chatbots and callbots to streamline company operations through AI and automation.",
		icon: "Ideta.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ideta:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ideta-prod\\.appspot\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ideta:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackChunkideta_platoon",
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
		id: "ientry",
		name: "iEntry",
		website: "https://www.ientry.com",
		description: "iEntry is a full-service email marketing platform offering campaign management, list building, analytics, and targeted messaging for businesses.",
		icon: "iEntry.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ientry:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.ientry\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ikeono",
		name: "Ikeono",
		website: "https://www.ikeono.com",
		description: "Ikeono is an all-in-one communication tool that provides business text messaging solutions for independent retailers.",
		icon: "Ikeono.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ikeono:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.ikeono\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ikeono:jsGlobal:1",
				kind: "jsGlobal",
				property: "ikeono",
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
		id: "imber",
		name: "Imber",
		website: "https://imber.live",
		description: "Imber is an all-in-one marketing automation platform built for customer support (live chat), sales, and marketing.",
		icon: "Imber.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "imber:jsGlobal:0",
				kind: "jsGlobal",
				property: "$imber.getVisitor",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imber:jsGlobal:1",
				kind: "jsGlobal",
				property: "IMBER_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imber:jsGlobal:2",
				kind: "jsGlobal",
				property: "IMBER_SOCKET",
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
		id: "imbox",
		name: "ImBox",
		website: "https://imbox.se",
		description: "Imbox is a live chat platform that includes co-browsing features.",
		icon: "Imbox.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "imbox:jsGlobal:0",
				kind: "jsGlobal",
				property: "__IMBOX_GLOBAL__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "__IMBOX_INITIALIZED__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "_imbox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imbox:jsGlobal:3",
				kind: "jsGlobal",
				property: "imboxBuilt",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "imbox:jsGlobal:4",
				kind: "jsGlobal",
				property: "imboxManager",
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
		id: "inbox",
		name: "INBOX",
		website: "https://useinbox.com",
		description: "INBOX is an email marketing system designed to create, manage, and track email campaigns for communication, promotions, or newsletters.",
		icon: "UseInbox.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "inbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.useinbox\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "inbox:dom:1",
				kind: "dom",
				selector: "form[action*='app.useinbox.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"low",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "inforumobile",
		name: "InforUMobile",
		website: "https://www.inforu.co.il",
		description: "InforUMobile is a multi-channel system that enables digital communication with customers, offering various channels for interacting and engaging with users, developed by the Shamir Systems Group.",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "inforumobile:dom:0",
				kind: "dom",
				selector: "iframe[src*='bot.frontcld.com/bot/chat']",
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
		id: "infoset",
		name: "Infoset",
		website: "https://infoset.app",
		description: "Infoset is an advanced communication and support solutions.",
		icon: "Infoset.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "infoset:jsGlobal:0",
				kind: "jsGlobal",
				property: "InfosetChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "infoset:jsGlobal:1",
				kind: "jsGlobal",
				property: "InfosetRoot",
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
		id: "insyncai",
		name: "InSyncai",
		website: "https://www.insyncai.com",
		description: "InSyncai offers a conversational platform for enterprises to design and build chatbots having applications in customer support and services.",
		icon: "InSyncai.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "insyncai:dom:0",
				kind: "dom",
				selector: "iframe[src*='insync_iframe_webchat_js_prod'], iframe#insync-iframe",
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
		id: "intaker",
		name: "Intaker",
		website: "https://intaker.com",
		description: "Intaker is a service that enables law firms to send and receive text messages with clients, including automated follow-up messages.",
		icon: "Intaker.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "intaker:dom:0",
				kind: "dom",
				selector: "link[href*='chat-api.intaker.com/api/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "intaker:jsGlobal:1",
				kind: "jsGlobal",
				property: "Intaker",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "interakt",
		name: "Interakt",
		website: "https://www.interakt.shop",
		description: "Interakt is a messaging platform tailored for business communication, offering features such as secure messaging, file sharing, and customer support functionalities.",
		icon: "Interakt.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "interakt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.interakt\\.ai\\/"),
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
		id: "intercom",
		name: "Intercom",
		website: "https://www.intercom.com",
		description: "Intercom is an American software company that produces a messaging platform which allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email.",
		icon: "Intercom.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "intercom:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("(?:api\\.intercom\\.io\\/api|static\\.intercomcdn\\.com\\/intercom\\.v1)"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "intercom:dom:1",
				kind: "dom",
				selector: "link[href^='https://widget.intercom.io']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "intercom:dom:2",
				kind: "dom",
				selector: "div.live-chat-loader-placeholder",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "intercom:dom:3",
				kind: "dom",
				selector: "iframe#intercom-frame",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "intercom:jsGlobal:4",
				kind: "jsGlobal",
				property: "Intercom",
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
		id: "isina-chat",
		name: "iSina Chat",
		website: "https://isina.agency",
		description: "iSina Chat is a live chat service that provides online support and FAQ for customers.",
		icon: "iSina Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "isina-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.isina\\.agency\\/"),
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
		id: "jenny",
		name: "Jenny",
		website: "https://www.getjenny.com",
		description: "Jenny is a customer service chatbot platform.",
		icon: "Jenny.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "jenny:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.getjenny\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jenny:jsGlobal:1",
				kind: "jsGlobal",
				property: "webpackJsonpget-jenny",
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
		id: "jitsi",
		name: "Jitsi",
		website: "https://jitsi.org",
		description: "Jitsi is a free and open-source multiplatform voice (VoIP), videoconferencing and instant messaging applications for the web platform.",
		icon: "Jitsi.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "jitsi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("lib-jitsi-meet.*\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:jitsi:jitsi:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "jivochat",
		name: "JivoChat",
		website: "https://www.jivosite.com",
		description: "JivoChat is a live chat solution for websites offering customizable web and mobile chat widgets.",
		icon: "JivoChat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "jivochat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.jivosite\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "jivochat:jsGlobal:1",
				kind: "jsGlobal",
				property: "jivo_api",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "jivochat:jsGlobal:2",
				kind: "jsGlobal",
				property: "jivo_version",
				valuePattern: new RegExp("([\\d.]+)"),
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
				"payg",
				"recurring",
			],
			cpe: "cpe:2.3:a:jivochat:jivochat:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "joinchat",
		name: "Joinchat",
		website: "https://join.chat",
		description: "Joinchat is a tool that enables businesses to convert customer conversations into sales or leads through integrated communication features.",
		icon: "Joinchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "joinchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/js\\/joinchat\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "joinchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "joinchat_obj",
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
		id: "joonbot",
		name: "Joonbot",
		website: "https://joonbot.com",
		description: "Joonbot is a chatbot builder that enables users to create automated conversational flows without programming knowledge.",
		icon: "Joonbot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "joonbot:jsGlobal:0",
				kind: "jsGlobal",
				property: "JOONBOT_WIDGET_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "joonbot:jsGlobal:1",
				kind: "jsGlobal",
				property: "joonbot.hide",
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
		id: "kapture-crm",
		name: "Kapture CRM",
		website: "https://www.kapturecrm.com",
		description: "Kapture CRM is an enterprise-grade SaaS-based customer support automation platform.",
		icon: "Kapture CRM.png",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "kapture-crm:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kapturecrm\\.com\\/.+\\?ver=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kapture-crm:jsGlobal:1",
				kind: "jsGlobal",
				property: "Kapchat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "kapture-crm:jsGlobal:2",
				kind: "jsGlobal",
				property: "kap_chat_js",
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
		id: "karoo-chat",
		name: "Karoo Chat",
		website: "https://karoo.com.br",
		description: "Karoo Chat is a platform that combines human and automated customer service, offering online live chat for customer support.",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "karoo-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "_kwp.host",
				valuePattern: new RegExp("widget\\.karoo\\.com\\.br"),
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
		id: "kauz",
		name: "Kauz",
		website: "https://kauz.ai",
		description: "Kauz is a self-service platform for businesses to manage and train AI assistants across different operational needs.",
		icon: "Kauz.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "kauz:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.kauz\\.ai"),
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
		id: "keyreply",
		name: "KeyReply",
		website: "https://www.keyreply.com",
		description: "KeyReply is a mobile-friendly chat widget that enables websites to provide real-time messaging and user support across devices.",
		icon: "KeyReply.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "keyreply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("keyreply\\.com\\/chat\\/widget\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "keyreply:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\keyreply\\.com\\/chat\\/widget\\.js"),
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
		id: "klara",
		name: "Klara",
		website: "https://www.klara.com",
		description: "Klara is a healthcare communication platform that enables staff to communicate with patients and with each other.",
		icon: "Klara.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "klara:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.klara\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "klara:jsGlobal:1",
				kind: "jsGlobal",
				property: "klaraWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "knak",
		name: "Knak",
		website: "https://knak.com",
		description: "Knak is a platform that provides customisable email and landing page templates to simplify the creation of visually appealing marketing campaigns.",
		icon: "Knak.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "knak:dom:0",
				kind: "dom",
				selector: "img[src*='.knak.io/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "knock-knock-app",
		name: "Knock Knock App",
		website: "https://knockknockapp.ai",
		description: "Knock Knock App is a video call solution for instant communication with website visitors, designed to optimize inbound inquiries and increase sales from website and landing page traffic.",
		icon: "KnockKnockApp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "knock-knock-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.knock-knockapp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "knock-knock-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "Knock_knock_user",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "knock-knock-app:jsGlobal:2",
				kind: "jsGlobal",
				property: "knock_widget_init",
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
		id: "krible",
		name: "Krible",
		website: "https://krible.ru",
		description: "Krible is a live chat management platform designed to facilitate real-time customer interactions and support.",
		icon: "Krible.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "krible:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.krible\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "krible:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.krible\\.ru"),
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
		id: "kustomer",
		name: "Kustomer",
		website: "https://www.kustomer.com/",
		description: "Kustomer is a CRM platform.",
		icon: "Kustomer.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "kustomer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.kustomerapp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "kustomer:jsGlobal:1",
				kind: "jsGlobal",
				property: "Kustomer",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "landbot",
		name: "Landbot",
		website: "https://landbot.io",
		description: "Landbot is a no code conversational chatbots, conversational landing pages and website, interactive survey and lead generation bot.",
		icon: "landbot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "landbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.landbot\\.io\\/.*-([\\d\\.]+)\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "landbot:jsGlobal:1",
				kind: "jsGlobal",
				property: "LandbotLivechat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "landbot:jsGlobal:2",
				kind: "jsGlobal",
				property: "initLandbot",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			pricing: [
				"freemium",
				"mid",
				"recurring",
			],
		},
	},
	{
		id: "lead-finity-webchat",
		name: "Lead-Finity Webchat",
		website: "https://lead-finity.com",
		description: "Lead-Finity Webchat is a platform that converts website visitors into leads and facilitates sales conversations.",
		icon: "LeadFinity.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "lead-finity-webchat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.lead-finity\\.com"),
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
		id: "leadster",
		name: "Leadster",
		website: "https://leadster.com.br",
		description: "Leadster is a conversation marketing plataform based on chatbot.",
		icon: "Leadster.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "leadster:jsGlobal:0",
				kind: "jsGlobal",
				property: "neurolead.convoScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leadster:jsGlobal:1",
				kind: "jsGlobal",
				property: "neurolead.elChatbot",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "leadster:jsGlobal:2",
				kind: "jsGlobal",
				property: "neuroleadLanguage",
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
		id: "leadtex",
		name: "Leadtex",
		website: "https://leadteh.ru",
		description: "Leadtex is a software solution focused on the development of chatbots.",
		icon: "Leadteh.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "leadtex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.leadteh\\.ru\\/"),
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
		id: "let-s-connect",
		name: "Let's Connect",
		website: "https://www.letsconnect.at",
		description: "Let's Connect is a digital tool for businesses to manage customer interactions and communications.",
		icon: "LetsConnect.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "let-s-connect:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.letsconnect\\.at\\/"),
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
		id: "lime-talk",
		name: "Lime Talk",
		website: "https://www.limetalk.com",
		description: "Lime Talk is a real-time customer messaging platform designed for businesses to engage with website visitors and customers through live chat functionality.",
		icon: "LimeTalk.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "lime-talk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.limetalk\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lime-talk:jsGlobal:1",
				kind: "jsGlobal",
				property: "limetalk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lime-talk:jsGlobal:2",
				kind: "jsGlobal",
				property: "limetalkLoader",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "limechat",
		name: "LimeChat",
		website: "https://www.limechat.ai",
		description: "LimeChat is India's first level-3 AI chatbot company.",
		icon: "LimeChat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "limechat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.limechat\\.ai\\/"),
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
		id: "lindy",
		name: "Lindy",
		website: "https://www.lindy.ai",
		description: "Lindy is an AI assistant that helps complete tasks using custom AI, with no coding required.",
		icon: "Lindy.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "lindy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.lindy\\.ai"),
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
		id: "listagram",
		name: "Listagram",
		website: "https://www.listagram.com",
		description: "Listagram is a list building tool which increases conversions by turning newsletter signups into a game.",
		icon: "Listagram.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "listagram:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.listagram\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "listagram:jsGlobal:1",
				kind: "jsGlobal",
				property: "LISTAGRAM.config",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "listagram:jsGlobal:2",
				kind: "jsGlobal",
				property: "LISTAGRAM_CFG.base_api",
				valuePattern: new RegExp("www\\.listagram\\.com"),
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
		id: "liveagent",
		name: "LiveAgent",
		website: "https://www.liveagent.com",
		description: "LiveAgent is an online live chat platform. The software provides a ticket management system.",
		icon: "LiveAgent.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "liveagent:jsGlobal:0",
				kind: "jsGlobal",
				property: "LiveAgent",
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
		id: "livechat",
		name: "LiveChat",
		website: "https://www.livechat.com/",
		description: "LiveChat is an online customer service software with online chat, help desk software, and web analytics capabilities.",
		icon: "LiveChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "livechat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.livechatinc\\.com\\/.*tracking\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "livechat:jsGlobal:1",
				kind: "jsGlobal",
				property: "LiveChatWidget",
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
		id: "livehelp",
		name: "LiveHelp",
		website: "https://www.livehelp.it",
		description: "LiveHelp is an online chat tool.",
		icon: "LiveHelp.png",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "livehelp:jsGlobal:0",
				kind: "jsGlobal",
				property: "LHready",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
			],
		},
	},
	{
		id: "liveintent",
		name: "LiveIntent",
		website: "https://www.liveintent.com",
		description: "LiveIntent is an email ad monetization platform.",
		icon: "LiveIntent.svg",
		categories: [
			"email-messaging",
			"advertising-paid-media",
		],
		rules: [
			{
				id: "liveintent:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.liadm\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "liveintent:requestUrl:1",
				kind: "requestUrl",
				pattern: new RegExp("\\.liadm\\.com"),
				description: "Observed request URL matches a known technology marker.",
			},
			{
				id: "liveintent:jsGlobal:2",
				kind: "jsGlobal",
				property: "LI.advertiserId",
				valuePattern: new RegExp("\\d+"),
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
		id: "liveperson",
		name: "LivePerson",
		website: "https://www.liveperson.com",
		description: "LivePerson is a tool for conversational chatbots and messaging.",
		icon: "LivePerson.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "liveperson:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.(?:liveperson|contactatonce)?\\.(?:com|net|co\\.uk)\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "liveperson:jsGlobal:1",
				kind: "jsGlobal",
				property: "lpTag.Chronos",
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
	},
	{
		id: "livetex",
		name: "LiveTex",
		website: "https://livetex.ru",
		description: "LiveTex is a universal chat platform that provides digital communication solutions, allowing businesses to interact with clients across various digital channels.",
		icon: "LiveTex.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "livetex:jsGlobal:0",
				kind: "jsGlobal",
				property: "liveTex",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livetex:jsGlobal:1",
				kind: "jsGlobal",
				property: "liveTexID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livetex:jsGlobal:2",
				kind: "jsGlobal",
				property: "liveTex_object",
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
		id: "livezilla",
		name: "LiveZilla",
		website: "https://www.livezilla.net",
		description: "LiveZilla is a web-based live support platform.",
		icon: "LiveZilla.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "livezilla:dom:0",
				kind: "dom",
				selector: "#lz_overlay_chat",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "livezilla:jsGlobal:1",
				kind: "jsGlobal",
				property: "lz_chat_execute",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livezilla:jsGlobal:2",
				kind: "jsGlobal",
				property: "lz_code_id",
				valuePattern: new RegExp("(?:[\\w\\d]+)"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "livezilla:jsGlobal:3",
				kind: "jsGlobal",
				property: "lz_tracking_set_widget_visibility",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: false,
			pricing: [
				"mid",
				"onetime",
			],
			cpe: "cpe:2.3:a:livezilla:livezilla:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "lovi",
		name: "Lovi",
		website: "https://lovi.ai",
		description: "Lovi is a tool that enables the creation of customized ChatGPT instances for customer support, delivering automated, and personalized customer service.",
		icon: "Lovi.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "lovi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.lovi\\.ai\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "lovi:jsGlobal:1",
				kind: "jsGlobal",
				property: "__loviMsgHandler",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "lovi:jsGlobal:2",
				kind: "jsGlobal",
				property: "__loviWidgetClicksBound",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "magemail",
		name: "MageMail",
		website: "https://magemail.co",
		description: "MageMail is a triggered email application for Magento that helps online retailers enhance customer engagement and increase revenue.",
		icon: "MageMail.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "magemail:jsGlobal:0",
				kind: "jsGlobal",
				property: "Mage.Cookies",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "magemail:jsGlobal:1",
				kind: "jsGlobal",
				property: "MageMailData.capture_email",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "magemail:jsGlobal:2",
				kind: "jsGlobal",
				property: "MageRewards",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
		requires: [
			"magento",
		],
	},
	{
		id: "mailercloud",
		name: "Mailercloud",
		website: "https://www.mailercloud.com/",
		description: "Mailercloud is an email marketing platform that offers tools for creating, sending, and tracking email campaigns, including automation, contact segmentation, and detailed analytics.",
		icon: "Mailercloud.svg",
		categories: [
			"email-messaging",
			"marketing-automation",
		],
		rules: [
			{
				id: "mailercloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.mailercloud\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
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
		id: "mailgun",
		name: "Mailgun",
		website: "https://www.mailgun.com/",
		description: "Mailgun is a transactional email API service for developers.",
		icon: "Mailgun.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mailgun:dns:0",
				kind: "dns",
				valuePattern: new RegExp("mailgun\\.org", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "mailjet",
		name: "Mailjet",
		website: "https://www.mailjet.com/",
		description: "Mailjet is an email delivery service for marketing and developer teams.",
		icon: "Mailjet.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mailjet:dns:0",
				kind: "dns",
				valuePattern: new RegExp("mailjet\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "mailman",
		name: "Mailman",
		website: "https://list.org",
		description: "Mailman is free software for managing electronic mail discussion and e-newsletter lists. Mailman is integrated with the web, making it easy for users to manage their accounts and for list owners to administer their lists. Mailman supports built-in archiving, automatic bounce processing, content filtering, digest delivery, spam filters, and more.",
		icon: "Mailman.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mailman:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/mailman\\d+\\/static\\/.+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mailman:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/static\\/(?:hyperkitty|django-mailman3)\\/.+\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:gnu:mailman:*:*:*:*:*:*:*:*",
		},
		implies: [
			"python",
		],
	},
	{
		id: "mailmunch",
		name: "Mailmunch",
		website: "https://www.mailmunch.com",
		description: "Mailmunch is a lead generation tool that combines landing pages, forms, and email marketing.",
		icon: "Mailmunch.svg",
		categories: [
			"email-messaging",
			"marketing-automation",
		],
		rules: [
			{
				id: "mailmunch:jsGlobal:0",
				kind: "jsGlobal",
				property: "MailMunchWidgets",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mailmunch:jsGlobal:1",
				kind: "jsGlobal",
				property: "mailmunch",
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
		id: "mainstay",
		name: "Mainstay",
		website: "https://mainstay.com",
		description: "Mainstay is a student engagement platform that is powered by human-centered, AI-enhanced chatbots.",
		icon: "Mainstay.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "mainstay:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webbot\\.mainstay\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maisie",
		name: "Maisie",
		website: "https://www.maisieai.com",
		description: "Maisie is an AI-powered conversational assistant that provides automated sales and customer support by handling queries around the clock.",
		icon: "Maisie.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "maisie:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.mymaisie\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "maisie:jsGlobal:1",
				kind: "jsGlobal",
				property: "maisieChatBotContext",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "maisie:jsGlobal:2",
				kind: "jsGlobal",
				property: "maisieWebpackJsonpFunction",
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
		id: "mava",
		name: "Mava",
		website: "https://www.mava.app",
		description: "Mava is an AI-driven customer support platform that scales customer support and success by connecting to private, group, and community channels.",
		icon: "Mava.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mava:jsGlobal:0",
				kind: "jsGlobal",
				property: "Mava.identify",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mava:jsGlobal:1",
				kind: "jsGlobal",
				property: "MavaWebChatToggle",
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
		id: "medchat",
		name: "Medchat",
		website: "https://medchatapp.com",
		description: "Medchat is a HIPAA-compliant platform that provides patient chat services powered by AI agents.",
		icon: "Medchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "medchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget-ui\\.medchatapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "medchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "MedChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "medchat:jsGlobal:2",
				kind: "jsGlobal",
				property: "MedChatApp",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "melibo",
		name: "Melibo",
		website: "https://www.melibo.de",
		description: "Melibo is an AI platform focused on enhancing customer service and advancing chatbot technology.",
		icon: "Melibo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "melibo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.melibo\\.de\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "melibo:jsGlobal:1",
				kind: "jsGlobal",
				property: "melibo.openWidget",
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
		id: "merlin",
		name: "Merlin",
		website: "https://gomerlin.com.br",
		description: "Merlin is a platform that builds bots for interactive visitor, lead, and customer engagement, integrating with tools and databases to automate processes and improve lead conversion without requiring a developer.",
		icon: "Merlin.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "merlin:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("scripts\\.gomerlin\\.com\\.br"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "merlin:jsGlobal:1",
				kind: "jsGlobal",
				property: "Merlin.Chat",
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
		id: "messagemedia",
		name: "MessageMedia",
		website: "https://messagemedia.com",
		description: "MessageMedia is a software service provider that helps businesses communicate with their customers and other contacts using SMS messages.",
		icon: "MessageMedia.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "messagemedia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chatwidget\\.messagemedia\\.com\\/"),
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
		id: "microsoft-365",
		name: "Microsoft 365",
		website: "https://www.microsoft.com/microsoft-365",
		description: "Microsoft 365 is a line of subscription services offered by Microsoft as part of the Microsoft Office product line.",
		icon: "Microsoft 365.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "microsoft-365:dns:0",
				kind: "dns",
				valuePattern: new RegExp("outlook\\.com", "i"),
				recordType: "MX",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "mioot",
		name: "Mioot",
		website: "https://mioot.com",
		description: "Mioot is a live chat software that facilitates real-time communication between service agents and customers on digital platforms.",
		icon: "Mioot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mioot:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.mioot\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "mioot:jsGlobal:1",
				kind: "jsGlobal",
				property: "miootChat.addTicket",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "mioot:jsGlobal:2",
				kind: "jsGlobal",
				property: "miootFunctions",
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
		id: "moinai",
		name: "MoinAI",
		website: "https://www.moin.ai",
		description: "MoinAI is an AI platform for digital customer communication, enabling businesses to automate interactions.",
		icon: "MoinAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "moinai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.moin\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "moinai:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.moin\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "moinai:jsGlobal:2",
				kind: "jsGlobal",
				property: "___moinloader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moinai:jsGlobal:3",
				kind: "jsGlobal",
				property: "__moinrpc",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "moinai:jsGlobal:4",
				kind: "jsGlobal",
				property: "moin.addContext",
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
		id: "mottle",
		name: "Mottle",
		website: "https://mottle.com",
		description: "Mottle is a custom chatbot creation tool that allows users to build expressive ChatGPT-like chatbots using their own data.",
		icon: "Mottle.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mottle:dom:0",
				kind: "dom",
				selector: "link[href*='embed.mottle.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "mottle:jsGlobal:1",
				kind: "jsGlobal",
				property: "Mottle",
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
		id: "moveo-ai",
		name: "Moveo.AI",
		website: "https://moveo.ai",
		description: "Moveo. AI is a no-code platform that allows businesses to create, manage and deploy AI virtual agents (chatbots).",
		icon: "Moveo.AI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "moveo-ai:jsGlobal:0",
				kind: "jsGlobal",
				property: "MoveoAI",
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
		id: "muchat",
		name: "Muchat",
		website: "https://mu.chat",
		description: "Muchat is a customer support tool that uses artificial intelligence to deliver personalized conversations by leveraging customer data.",
		icon: "Muchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "muchat:dom:0",
				kind: "dom",
				selector: "div[class^='muchat-chatbox'], style[data-emotion*='muchat-chatbox-bubble']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "muchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "Muchat",
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
		id: "mylivechat",
		name: "MyLiveChat",
		website: "https://mylivechat.com",
		description: "MyLiveChat is a live chat developed by CuteSoft.",
		icon: "MyLiveChat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "mylivechat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("mylivechat\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "mylivechat:jsGlobal:1",
				kind: "jsGlobal",
				property: "MyLiveChat.Version",
				valuePattern: new RegExp("(.+)$"),
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
				"payg",
			],
		},
	},
	{
		id: "myma",
		name: "Myma",
		website: "https://www.myma.ai",
		description: "Myma is an AI-powered multi-channel chatbot designed for hotels, enabling automated guest interactions across various communication platforms.",
		icon: "Myma.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "myma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("messenger\\.myma\\.ai\\/"),
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
		id: "neexa",
		name: "Neexa",
		website: "https://neexa.ai",
		description: "Neexa is an AI-powered inquiry and sales agent designed to handle customer queries.",
		icon: "NeexaAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "neexa:jsGlobal:0",
				kind: "jsGlobal",
				property: "neexa_xgmx_cc_wpq_ms",
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
		id: "neoasist",
		name: "NeoAsist",
		website: "https://neoassist.com",
		description: "NeoAssist is an omnichannel customer service platform from Brazil focused on improving brand visibility across search engines and AI-driven platforms such as Google and GPT-based systems.",
		icon: "NeoAssist.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "neoasist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.neoassist\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "neoasist:jsGlobal:1",
				kind: "jsGlobal",
				property: "NeoAssistTag",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "netrox",
		name: "Netrox",
		website: "https://netroxsc.ru",
		description: "Netrox SC is a Russian online consultant technology platform that provides live chat and customer support tools for websites.",
		icon: "NetroxSC.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "netrox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.netroxsc\\.ru"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "netrox:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.netroxsc\\.ru"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "newo",
		name: "Newo",
		website: "https://newo.ai",
		description: "Newo is an AI platform offering automated solutions for sales, reception, and concierge services across various industries.",
		icon: "Newo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "newo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.newo\\.ai"),
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
		id: "ngage-live-chat",
		name: "Ngage Live Chat",
		website: "https://www.ngagelive.com",
		description: "Ngage Live Chat is an industry-specific live chat solution that converts website visitors into clients.",
		icon: "NgageLiveChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ngage-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("messenger\\.ngageics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ngage-live-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "NgageKillScript",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ngage-live-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "StartNgageChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ninchat",
		name: "Ninchat",
		website: "https://ninchat.com",
		description: "Ninchat is a secure messaging platform designed for organizations to facilitate encrypted communication and collaboration.",
		icon: "Ninchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ninchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.ninchat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ninchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ninchat.ERROR",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ninchat:jsGlobal:2",
				kind: "jsGlobal",
				property: "NinchatAntics",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ninchat:jsGlobal:3",
				kind: "jsGlobal",
				property: "NinchatAsyncInit",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "norby",
		name: "Norby",
		website: "https://norby.io",
		description: "Norby is an AI-powered chat solution catering to ecommerce, healthcare, crypto, and fintech industries.",
		icon: "NorbyAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "norby:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.norby\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "norby:jsGlobal:1",
				kind: "jsGlobal",
				property: "norbyChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"mid",
				"payg",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "oct8ne",
		name: "Oct8ne",
		website: "https://oct8ne.com",
		description: "Oct8ne is a visual customer service software.",
		icon: "Oct8ne.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "oct8ne:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.oct8ne\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "oct8ne:jsGlobal:1",
				kind: "jsGlobal",
				property: "oct8ne.agentsAvailable",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oct8ne:jsGlobal:2",
				kind: "jsGlobal",
				property: "oct8neApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "oct8ne:jsGlobal:3",
				kind: "jsGlobal",
				property: "oct8neVars.pluginVersion",
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
				"poa",
			],
		},
	},
	{
		id: "olark",
		name: "Olark",
		website: "https://www.olark.com/",
		description: "Olark is a cloud-based live chat solution.",
		icon: "Olark.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "olark:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.olark\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "olark:jsGlobal:1",
				kind: "jsGlobal",
				property: "olark",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "olark:jsGlobal:2",
				kind: "jsGlobal",
				property: "olarkUserData",
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
		id: "ometrics",
		name: "Ometrics",
		website: "https://www.ometrics.com",
		description: "Ometrics is an AI chatbot solution that engages website visitors by understanding queries and delivering helpful responses.",
		icon: "Ometrics.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ometrics:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.ometrics\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ometrics:jsGlobal:1",
				kind: "jsGlobal",
				property: "Ometrics.Animation",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ometrics:jsGlobal:2",
				kind: "jsGlobal",
				property: "OmetricsBody",
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
		id: "onchat",
		name: "OnChat",
		website: "https://onchat.ai",
		description: "OnChat is a platform that uses an AI chatbot to handle customer support interactions while assisting with sales-related inquiries and customer communication.",
		icon: "OnChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "onchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("onchat\\.ai\\/onchat\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "extractOnchatClickFromHref",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "onchat:jsGlobal:2",
				kind: "jsGlobal",
				property: "getOnchatClickFromURL",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ondestek",
		name: "Ondestek",
		website: "https://ondestek.com",
		description: "Ondestek is a live chat software that enables real-time customer communication through websites.",
		icon: "Ondestek.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ondestek:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("panel\\.ondestek\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ondestek:jsGlobal:1",
				kind: "jsGlobal",
				property: "$ondestek",
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
		id: "onicon",
		name: "Onicon",
		website: "https://onicon.ru",
		description: "Onicon is a Russian-based live chat software developed by Megagroup.",
		icon: "Onicon.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "onicon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.onicon\\.ru"),
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
		id: "onlim",
		name: "Onlim",
		website: "https://onlim.com",
		description: "Onlim is a software platform designed for chatbots, social media management, and intelligent personal assistants.",
		icon: "Onlim.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "onlim:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.onlim\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onlim:jsGlobal:1",
				kind: "jsGlobal",
				property: "Onlim",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "onlim:jsGlobal:2",
				kind: "jsGlobal",
				property: "OnlimChatbot",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "online-chat-centers",
		name: "Online Chat Centers",
		website: "https://www.onlinechatcenters.com",
		description: "Online Chat Centers is a live chat software platform designed to integrate with websites, enabling real-time customer communication and support across different online environments.",
		icon: "OCC.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "online-chat-centers:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("www\\.onlinechatcenters\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "online-chat-centers:jsGlobal:1",
				kind: "jsGlobal",
				property: "occEmbedClick",
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
		id: "onsip",
		name: "OnSip",
		website: "https://www.onsip.com",
		description: "OnSip is a hosted VoIP solution that includes website chat functionality for business communication.",
		icon: "OnSip.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "onsip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.onsip\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "onsip:jsGlobal:1",
				kind: "jsGlobal",
				property: "Onsip",
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
		id: "onsite-support",
		name: "Onsite Support",
		website: "https://onsitesupport.io",
		description: "Onsite Support is a platform that uses AI-enhanced helpdesk tools to reduce operational costs, minimize product returns, and accelerate customer service response times.",
		icon: "OnSiteSupport.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "onsite-support:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.onsitesupport\\.io"),
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
		id: "open-xchange-app-suite",
		name: "Open-Xchange App Suite",
		website: "https://www.open-xchange.com/",
		description: "Open-Xchange is a web-based communication, collaboration and office productivity software suite.",
		icon: "openxchange.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "open-xchange-app-suite:dom:0",
				kind: "dom",
				selector: "#io-ox-core, form > input[value='open-xchange-appsuite']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "open-xchange-app-suite:jsGlobal:1",
				kind: "jsGlobal",
				property: "ox.version",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"poa",
			],
			cpe: "cpe:2.3:a:open-xchange:app_suite:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "openchat",
		name: "OpenChat",
		website: "https://oc.app",
		description: "OpenChat is a community-owned chat application designed to prioritize privacy, security, and anonymity.",
		icon: "OpenChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "openchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cloud\\.openchat\\.so"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "outlook-web-app",
		name: "Outlook Web App",
		website: "https://help.outlook.com",
		description: "Outlook on the web is an information manager web app. It includes a web-based email client, a calendar tool, a contact manager, and a task manager.",
		icon: "Outlook.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "outlook-web-app:html:0",
				kind: "html",
				pattern: new RegExp("<link[^>]+\\/owa\\/auth\\/([\\d\\.]+)\\/themes\\/resources"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "outlook-web-app:url:1",
				kind: "url",
				pattern: new RegExp("\\/owa\\/auth\\/log(?:on|off)\\.aspx"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "outlook-web-app:jsGlobal:2",
				kind: "jsGlobal",
				property: "IsOwaPremiumBrowser",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "outlook-web-app:header:3",
				kind: "header",
				key: "X-OWA-Version",
				valuePattern: new RegExp("([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
			{
				id: "outlook-web-app:dom:4",
				kind: "dom",
				selector: "link[href*='/owa/auth/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "outlook-web-app:header:5",
				kind: "header",
				key: "x-owa-version",
				valuePattern: new RegExp("([\\d\\.]+)?", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Response header matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:microsoft:outlook_web_access:*:*:*:*:*:*:*:*",
		},
		implies: [
			"microsoft-asp-net",
		],
	},
	{
		id: "p3chat",
		name: "P3chat",
		website: "https://p3chat.com",
		description: "P3chat is a live chat platform integrated into websites to enable real-time communication with visitors.",
		icon: "P3chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "p3chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/p3chat\\.com\\/"),
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
		id: "pancake",
		name: "Pancake",
		website: "https://pancake.vn",
		description: "Pancake is an omnichannel business messaging platform that centralizes customer communications across multiple channels into a single system for managing conversations, routing messages, and maintaining consistent engagement.",
		icon: "Pancake.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "pancake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("analytics\\.pancake\\.vn"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pancake:jsGlobal:1",
				kind: "jsGlobal",
				property: "PancakeAnalytics",
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
		id: "phonon",
		name: "Phonon",
		website: "https://www.phonon.io",
		description: "Phonon is a communication automation platform that supports voice, chat, SMS, and email channels.",
		icon: "Phonon.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "phonon:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("c4c\\.phonon\\.in"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "ping-parrot",
		name: "Ping Parrot",
		website: "https://www.pingparrot.com",
		description: "Ping Parrot is an AI powered chatbot that allows any website to create a bot that is trained on their data.",
		icon: "PingParrot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ping-parrot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pingparrot\\.com\\/"),
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
		id: "pipedrive",
		name: "Pipedrive",
		website: "https://www.pipedrive.com/",
		description: "Pipedrive is a cloud-based sales CRM.",
		icon: "Pipedrive.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "pipedrive:jsGlobal:0",
				kind: "jsGlobal",
				property: "LeadBooster",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
			],
		},
	},
	{
		id: "plivo",
		name: "Plivo",
		website: "https://www.plivo.com",
		description: "Plivo is a global platform that provides SMS and voice call services for businesses of all sizes to connect with customers worldwide.",
		icon: "Plivo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "plivo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.plivo\\.com\\/"),
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
		id: "posh",
		name: "Posh",
		website: "https://www.posh.ai",
		description: "Posh is a conversational AI platform that enables machines to understand, process, and respond to human language in real time.",
		icon: "Posh.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "posh:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.poshdevelopment\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "posh:jsGlobal:1",
				kind: "jsGlobal",
				property: "posh.close",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "posh:jsGlobal:2",
				kind: "jsGlobal",
				property: "poshie.close",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "poster",
		name: "Poster",
		website: "https://poster.ooo",
		description: "Poster is a live chat and visitor segmentation tool designed to support real-time communication and audience targeting on websites.",
		icon: "Poster.svg",
		categories: [
			"email-messaging",
			"experimentation-optimization",
		],
		rules: [
			{
				id: "poster:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.poster\\.ooo"),
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
		id: "prosperous-ai",
		name: "Prosperous AI",
		website: "https://prosperousai.com",
		description: "Prosperous AI is a messaging platform that uses artificial intelligence to help local businesses automate customer communication, manage inquiries, and respond across digital channels.",
		icon: "ProsperousAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "prosperous-ai:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.prosperousai\\.com"),
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
		id: "proton-mail",
		name: "Proton Mail",
		website: "https://proton.me/mail",
		description: "Proton Mail is the world’s largest secure email service with over 70 million users. Available on Web, iOS, Android, and desktop. Protected by Swiss privacy law.",
		icon: "Proton Mail.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "proton-mail:dns:0",
				kind: "dns",
				valuePattern: new RegExp("\\.protonmail\\.ch", "i"),
				recordType: "MX",
				description: "DNS record matches a known technology marker.",
			},
			{
				id: "proton-mail:dns:1",
				kind: "dns",
				valuePattern: new RegExp("protonmail-verification=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "provide-support",
		name: "Provide Support",
		website: "https://www.providesupport.com",
		description: "Provide Support is a SaaS for customer service that includes live chat, real-time website monitoring, chat statistics.",
		icon: "Provide Support.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "provide-support:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.providesupport\\.com"),
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
		id: "pubble",
		name: "Pubble",
		website: "https://www.pubble.io",
		description: "Pubble is a messaging platform that simplifies how teams interact with their customers.",
		icon: "Pubble.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "pubble:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.pubble\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pubble:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pubble.Pubble",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubble:jsGlobal:2",
				kind: "jsGlobal",
				property: "pubble_proActiveChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pubble:jsGlobal:3",
				kind: "jsGlobal",
				property: "pubblebot",
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
		id: "pure-chat",
		name: "Pure Chat",
		website: "https://www.purechat.com",
		description: "Pure Chat is a live chat solution for small to mid-sized teams.",
		icon: "Pure Chat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "pure-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.purechat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "pure-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "PCWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pure-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "purechatApi",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:purechat:pure_chat:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "pusher",
		name: "Pusher",
		website: "https://pusher.com",
		description: "Pusher is a platform that enables real-time experiences for mobile and web applications through scalable messaging and data synchronization.",
		icon: "Pusher.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "pusher:jsGlobal:0",
				kind: "jsGlobal",
				property: "PUSHER_APP_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "pusher:jsGlobal:1",
				kind: "jsGlobal",
				property: "Pusher.Runtime",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "qiscus",
		name: "Qiscus",
		website: "https://www.qiscus.com",
		description: "Qiscus is a platform offering a Chat SDK and messaging API, enabling integration of real-time chat features into applications.",
		icon: "Qiscus.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "qiscus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qiscus\\.com\\/js\\/qiscus-sdk\\.([\\d\\.]+)\\.js\\?v=([\\d\\.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qiscus:jsGlobal:1",
				kind: "jsGlobal",
				property: "QiscusSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qiscus:jsGlobal:2",
				kind: "jsGlobal",
				property: "qiscusWidgetshowBadge",
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
		id: "qpien",
		name: "Qpien",
		website: "https://qpien.com",
		description: "Qpien is a SaaS platform that provides multi-channel customer communication management with AI reply automation, smart inbox, call center integration, and workflow orchestration.",
		icon: "Qpien.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "qpien:jsGlobal:0",
				kind: "jsGlobal",
				property: "QpienWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qpien:jsGlobal:1",
				kind: "jsGlobal",
				property: "qpienIframeAction",
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
		id: "qualified",
		name: "Qualified",
		website: "https://www.qualified.com",
		description: "Qualified is a B2B marketer that allows buyers and sales reps to connect through real-time website conversations.",
		icon: "Qualified.svg",
		categories: [
			"email-messaging",
			"marketing-automation",
		],
		rules: [
			{
				id: "qualified:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.qualified\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qualified:jsGlobal:1",
				kind: "jsGlobal",
				property: "QualifiedObject",
				valuePattern: new RegExp("^qualified$"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "qualified:jsGlobal:2",
				kind: "jsGlobal",
				property: "qualified",
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
		id: "quality-unit-help-desk",
		name: "Quality Unit Help Desk",
		website: "https://www.qualityunit.com",
		description: "Quality Unit Help Desk is a customer support and help desk software designed to manage and streamline customer service operations.",
		icon: "QualityUnitHelpDesk.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quality-unit-help-desk:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.qualityunit\\.liveagent"),
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
		id: "qualva",
		name: "Qualva",
		website: "https://qualva.com",
		description: "Qualva is a chatbot platform designed to deliver consistent, user-focused interaction and support across various applications.",
		icon: "Qualva.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "qualva:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("form\\.qualva\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "qualva:jsGlobal:1",
				kind: "jsGlobal",
				property: "qualva.Widget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "querlo",
		name: "Querlo",
		website: "https://www.querlo.com",
		description: "Querlo is a provider of custom artificial intelligence solutions tailored for business applications.",
		icon: "Querlo.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "querlo:dom:0",
				kind: "dom",
				selector: "#querloEmbd",
				description: "DOM selector matches a known technology marker.",
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
		id: "quickcep",
		name: "QuickCEP",
		website: "https://www.quickcep.com",
		description: "QuickCEP is an AI-powered chatbot solution to improve business conversions, sales, and customer satisfaction through automated interactions.",
		icon: "QuickCEP.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quickcep:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.quickcep\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "quickcep:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.quickcep\\.com"),
				description: "Script content contains a bounded technology signature.",
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
		id: "quickchat-ai",
		name: "Quickchat AI",
		website: "https://quickchat.ai",
		description: "Quickchat AI is a no-code platform that lets you create custom AI Assistants for your business.",
		icon: "QuickchatAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quickchat-ai:dom:0",
				kind: "dom",
				selector: "link[href*='/quickchat-files/appquickchat/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "quickchat-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "quickchat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "quickchat-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "quickchat_busy",
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
		id: "quicktext",
		name: "Quicktext",
		website: "https://www.quicktext.im",
		description: "Quicktext is an AI-powered hotel chatbot and instant communication platform designed to increase direct bookings for hotels.",
		icon: "Quicktext.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quicktext:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.quicktext\\.im\\/"),
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
		id: "quiq-messaging",
		name: "Quiq Messaging",
		website: "https://quiq.com",
		description: "Quiq Messaging is a business messaging solution designed to facilitate customer communication across multiple channels.",
		icon: "QuiqMessaging.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quiq-messaging:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.goquiq\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "quiq-messaging:jsGlobal:1",
				kind: "jsGlobal",
				property: "Quiq",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "quiq-messaging:jsGlobal:2",
				kind: "jsGlobal",
				property: "QuiqUtils",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "quiq-messaging:jsGlobal:3",
				kind: "jsGlobal",
				property: "QuiqUtils._.VERSION",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "quixchat",
		name: "Quixchat",
		website: "https://quixchat.com",
		description: "Quixchat is a chat support widget for websites, facilitating real-time communication with visitors via WhatsApp, Facebook Messenger, Telegram, Viber, or Line.",
		icon: "Quixchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "quixchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.quixchat\\.com\\/assets\\/js\\/quixchat\\.js\\?ver=(\\d+\\.\\d+)(?:\\.\\d+)*"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "quixchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "QuixChatClearChat",
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
		id: "rainloop",
		name: "RainLoop",
		website: "https://www.rainloop.net/",
		description: "RainLoop is a web-based email client.",
		icon: "RainLoop.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rainloop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("^rainloop\\/v\\/([0-9.]+)\\/"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "rainloop:html:1",
				kind: "html",
				pattern: new RegExp("<link[^>]href=\"rainloop\\/v\\/([0-9.]+)\\/static\\/apple-touch-icon\\.png\\/>"),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "rainloop:jsGlobal:2",
				kind: "jsGlobal",
				property: "rainloop",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rainloop:jsGlobal:3",
				kind: "jsGlobal",
				property: "rainloopI18N",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rainloop:header:4",
				kind: "header",
				key: "Server",
				valuePattern: new RegExp("^RainLoop", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "rainloop:meta:5",
				kind: "meta",
				key: "rlAppVersion",
				valuePattern: new RegExp("^([0-9.]+)$", "i"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "rainloop:dom:6",
				kind: "dom",
				selector: "link[href*='rainloop/v/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "rainloop:header:7",
				kind: "header",
				key: "server",
				valuePattern: new RegExp("^rainloop", "i"),
				description: "Response header matches a known technology marker.",
			},
			{
				id: "rainloop:meta:8",
				kind: "meta",
				key: "rlappversion",
				valuePattern: new RegExp("^([0-9.]+)$", "i"),
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
		id: "rake",
		name: "Rake",
		website: "https://www.rake.ai",
		description: "Rake is a messaging platform and conversion optimization solution designed for communication between customers, visitors, and co-workers.",
		icon: "Rake.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rake:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.rake\\.ai\\/"),
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
		id: "raychat",
		name: "Raychat",
		website: "https://raychat.io",
		description: "Raychat is a free customer messaging platform.",
		icon: "raychat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "raychat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.raychat\\.io\\/scripts\\/js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "raychat:jsGlobal:1",
				kind: "jsGlobal",
				property: "Raychat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
	},
	{
		id: "re-amaze",
		name: "Re:amaze",
		website: "https://www.reamaze.com",
		description: "Re:amaze is a multi-brand customer service, live chat, and help desk solution.",
		icon: "Re-amaze.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "re-amaze:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.reamaze\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "re-amaze:jsGlobal:1",
				kind: "jsGlobal",
				property: "reamaze.version",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
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
				"recurring",
			],
		},
	},
	{
		id: "re-plain",
		name: "Re:plain",
		website: "https://replain.cc",
		description: "Re:plain is a live chat integration for WhatsApp, Facebook Messenger, and Telegram, allowing you to connect live chat to your website.",
		icon: "Replain.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "re-plain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.replain\\.cc\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "re-plain:jsGlobal:1",
				kind: "jsGlobal",
				property: "replainInitialized",
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
		id: "rei-chat",
		name: "REI Chat",
		website: "https://reichat.ai",
		description: "REI Chat is an AI-powered chatbot designed to understand and communicate within the real estate domain.",
		icon: "REIChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rei-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.reichat\\.ai"),
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
		id: "replyco",
		name: "Replyco",
		website: "https://replyco.com",
		description: "Replyco is a helpdesk software designed for ecommerce sellers to manage and centralise inbox messages across various marketplaces.",
		icon: "Replyco.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "replyco:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.replyco\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "replyco:jsGlobal:1",
				kind: "jsGlobal",
				property: "replycoChat",
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
		id: "respond-io",
		name: "Respond.io",
		website: "https://www.respond.io",
		description: "Respond.io is an AI-powered customer conversation management software.",
		icon: "RespondIO.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "respond-io:dom:0",
				kind: "dom",
				selector: "script#respondio__growth_tool",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "respond-io:jsGlobal:1",
				kind: "jsGlobal",
				property: "$__respond",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "respond-io:jsGlobal:2",
				kind: "jsGlobal",
				property: "$respond",
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
		id: "responsa",
		name: "Responsa",
		website: "https://responsa.ai",
		description: "Responsa is a conversational AI platform designed to increase sales and reduce operational costs by automating customer interactions and streamlining communication processes.",
		icon: "Responsa.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "responsa:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/\\/goresponsa\\.com\\/"),
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
		id: "retain",
		name: "Retain",
		website: "https://retain.ir",
		description: "Retain is an online conversation system developed in Iran designed to facilitate digital communication.",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "retain:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.retain\\.ir\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "reve-chat",
		name: "REVE Chat",
		website: "https://www.revechat.com",
		description: "REVE Chat is an AI-powered platform that automates and enhances customer service interactions through chatbots and live chat support.",
		icon: "REVEChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "reve-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.revechat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "reve-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "$REVECHAT_MEDIA_GALLERY",
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
		id: "rispose",
		name: "Rispose",
		website: "https://rispose.com",
		description: "Rispose is a platform for building and embedding AI agents across websites and applications to automate support, sales, and user engagement through AI-powered assistants.",
		icon: "Rispose.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rispose:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("rispose\\.com\\/cdn\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "rispose:jsGlobal:1",
				kind: "jsGlobal",
				property: "__risposeAgent",
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
		id: "robofy",
		name: "Robofy",
		website: "https://www.robofy.ai",
		description: "Robofy is a platform providing AI chatbots for websites, enabling the creation of custom ChatGPT models trained on user-specific content.",
		icon: "Robofy.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "robofy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.robofy\\.ai\\/"),
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
		id: "roboreception",
		name: "RoboReception",
		website: "https://www.roboreception.co.uk",
		description: "RoboReception is a digital assistant that manages patient inquiries, reduces queues, and tracks new leads to ease the workload on reception staff.",
		icon: "RoboReception.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "roboreception:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bot\\.roboreception\\.co\\.uk"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "roboreception:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.bot\\.roboreception\\.co\\.uk"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "rocket-chat",
		name: "Rocket.Chat",
		website: "https://rocket.chat",
		description: "Rocket. Chat is a communication hub that facilitates team collaboration and organizes conversations.",
		icon: "Rocket.Chat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rocket-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "RocketChat.livechat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "rocket-chat:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^Rocket.Chat$", "i"),
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
			cpe: "cpe:2.3:a:rocket.chat:rocket.chat:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "rotic",
		name: "Rotic",
		website: "https://rotic.io",
		description: "Rotic is a conversion chatbot that answers questions, captures contacts, and books meetings.",
		icon: "Rotic.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "rotic:jsGlobal:0",
				kind: "jsGlobal",
				property: "Rotic.setting",
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
		id: "roundcube",
		name: "RoundCube",
		website: "https://roundcube.net",
		description: "RoundCube is free and open-source web-based IMAP email client.",
		icon: "RoundCube.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "roundcube:html:0",
				kind: "html",
				pattern: new RegExp("<title>RoundCube"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "roundcube:jsGlobal:1",
				kind: "jsGlobal",
				property: "rcmail",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "roundcube:jsGlobal:2",
				kind: "jsGlobal",
				property: "roundcube",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "roundcube:html:3",
				kind: "html",
				pattern: new RegExp("<title>roundcube"),
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:roundcube:webmail:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "ruby-chat",
		name: "Ruby Chat",
		website: "https://www.ruby.com/solutions/live-chat",
		description: "Ruby Chat is a service offering live virtual receptionists and live chat to assist businesses in managing customer interactions and inquiries in real-time.",
		icon: "RubyChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "ruby-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chatwidget\\.ruby\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "ruby-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "rubyChatLoading",
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
		id: "salesforce-marketing-cloud-email-studio",
		name: "Salesforce Marketing Cloud Email Studio",
		website: "https://www.salesforce.com/products/marketing-cloud/email-marketing",
		description: "Salesforce Marketing Cloud Email Studio is a powerful tool that allows you to build and send personalised emails.",
		icon: "Salesforce.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "salesforce-marketing-cloud-email-studio:dom:0",
				kind: "dom",
				selector: "a[href*='.exacttarget.com/'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "salesforce-marketing-cloud-email-studio:header:1",
				kind: "header",
				key: "content-security-policy",
				valuePattern: new RegExp("\\.exacttarget\\.com\\/", "i"),
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
		id: "salesforce-service-cloud",
		name: "Salesforce Service Cloud",
		website: "https://www.salesforce.com/au/products/service-cloud/",
		description: "Salesforce Service Cloud is a customer relationship management (CRM) platform for customer service and support.",
		icon: "Salesforce.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "salesforce-service-cloud:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("service\\.force\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "salesforce-service-cloud:jsGlobal:1",
				kind: "jsGlobal",
				property: "embedded_svc",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
			],
		},
		implies: [
			"salesforce",
		],
	},
	{
		id: "sameday",
		name: "Sameday",
		website: "https://www.gosameday.com",
		description: "Sameday is an AI-powered platform that provides automated phone answering and communication services for home service businesses.",
		icon: "Sameday.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sameday:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.sameday\\.ai"),
				description: "Script source URL matches a known technology marker.",
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
		id: "schedule-engine",
		name: "Schedule Engine",
		website: "https://www.scheduleengine.com/",
		description: "Schedule Engine is a customer support solution built for contractors.",
		icon: "Schedule Engine.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "schedule-engine:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webchat.scheduleengine.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "screets",
		name: "Screets",
		website: "https://screets.com",
		description: "Screets is a chat widget compatible with WordPress, HTML, and PHP websites.",
		icon: "Screets.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "screets:jsGlobal:0",
				kind: "jsGlobal",
				property: "screetsxi.appid",
				description: "Page-owned global matches a known technology marker.",
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
		id: "segmate",
		name: "SegMate",
		website: "https://segmateapp.com",
		description: "SegMate is a platform that allows businesses to create and manage Facebook Messenger bots for marketing and customer engagement.",
		icon: "SegMateApp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "segmate:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.segmate\\.io\\/"),
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
		id: "selzy",
		name: "Selzy",
		website: "https://selzy.com",
		description: "Selzy is an email marketing platform for sending bulk emails, tracking statistics, conducting A/B tests, and automating campaigns.",
		icon: "Selzy.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "selzy:dom:0",
				kind: "dom",
				selector: "form[action*='.selzy.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "sendgrid",
		name: "Sendgrid",
		website: "https://sendgrid.com/",
		description: "SendGrid is a cloud-based email delivery platform for transactional and marketing emails.",
		icon: "SendGrid.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sendgrid:dns:0",
				kind: "dns",
				valuePattern: new RegExp("sendgrid\\.net", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "sendloop",
		name: "Sendloop",
		website: "https://sendloop.com",
		description: "Sendloop is a platform that offers custom-built email marketing solutions designed to meet specific business needs.",
		icon: "Sendloop.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sendloop:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.sendloop\\.com"),
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
		id: "sendtex",
		name: "Sendtex",
		website: "https://sendpad.com",
		description: "Sendtex is an email marketing platform designed to facilitate the creation, management, and distribution of email campaigns.",
		icon: "Sendpad.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sendtex:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.sendpad\\.com"),
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
		id: "sharpen",
		name: "Sharpen",
		website: "https://sharpencx.com",
		description: "Sharpen is a platform focused on developing AI-empowered human agents to enhance communication.",
		icon: "Sharpen.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sharpen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.sharpen\\.cx"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "shopify-chat",
		name: "Shopify Chat",
		website: "https://www.shopify.com/inbox",
		description: "Shopify Chat is Shopify's native live chat function that allows you to have real-time conversations with customers visiting your Shopify store.",
		icon: "Shopify.svg",
		categories: [
			"email-messaging",
			"ecommerce-extensions",
		],
		rules: [
			{
				id: "shopify-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.shopify\\.com\\/shopifycloud\\/shopify_chat\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "shopify-chat:dom:1",
				kind: "dom",
				selector: "div#shopify-chat",
				description: "DOM selector matches a known technology marker.",
			},
		],
		implies: [
			"shopify",
		],
	},
	{
		id: "signalzen",
		name: "SignalZen",
		website: "https://www.signalzen.com",
		description: "SignalZen is a customer support platform that enables teams to manage AI-powered conversations directly from Slack or Microsoft Teams.",
		icon: "SignalZen.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "signalzen:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.signalzen\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "signalzen:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("cdn\\.signalzen\\.com"),
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
		id: "simla",
		name: "Simla",
		website: "https://www.simla.com",
		description: "Simla is a multi-agent, all-in-one solution for businesses selling products and services through WhatsApp, Facebook, Instagram, and websites.",
		icon: "Simla.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "simla:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.retailcrm\\.tech\\/"),
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
		id: "sitegpt",
		name: "SiteGPT",
		website: "https://sitegpt.ai",
		description: "SiteGPT is an AI-powered chatbot that delivers personalized customer support by generating responses grounded in a site’s existing content.",
		icon: "SiteGPT.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sitegpt:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/sitegpt\\.ai\\/widget\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sitegpt:jsGlobal:1",
				kind: "jsGlobal",
				property: "$sitegpt.push",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sitegpt:jsGlobal:2",
				kind: "jsGlobal",
				property: "$sitegpt_widget",
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
		id: "sitehood",
		name: "Sitehood",
		website: "https://www.sitehood.co.il",
		description: "Sitehood is a live chat tool for websites that enables instant support for site visitors.",
		icon: "Sitehood.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sitehood:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vtrack\\.sitehood\\.co\\.il"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "slaask",
		name: "Slaask",
		website: "https://get.slaask.com",
		description: "Slaask is a customer messaging app designed for all Slack users to streamline customer service communication within the Slack interface.",
		icon: "Slaask.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "slaask:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.slaask\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "slaask:jsGlobal:1",
				kind: "jsGlobal",
				property: "_slaaskLoader",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "slaask:jsGlobal:2",
				kind: "jsGlobal",
				property: "_slaaskSettings",
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
		id: "smallchat",
		name: "Smallchat",
		website: "https://small.chat",
		description: "Smallchat is a tool that allows users to engage with website visitors directly within Slack.",
		icon: "Smallchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "smallchat:jsGlobal:0",
				kind: "jsGlobal",
				property: "Smallchat",
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
		id: "smartemailing",
		name: "SmartEmailing",
		website: "https://www.smartemailing.cz",
		description: "SmartEmailing is a Czech-based marketing solution that provides email marketing tools for creating, managing, and analyzing email campaigns to support customer communication and engagement.",
		icon: "SmartEmailing.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "smartemailing:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.smartemailing\\.cz"),
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
		id: "smartsupp",
		name: "Smartsupp",
		website: "https://www.smartsupp.com",
		description: "Smartsupp is a live chat tool that offers visitor recording feature.",
		icon: "Smartsupp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "smartsupp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.smartsuppchat\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smartsupp:jsGlobal:1",
				kind: "jsGlobal",
				property: "$smartsupp.options.widgetVersion",
				valuePattern: new RegExp("([\\d.]+)"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "smartsupp:jsGlobal:2",
				kind: "jsGlobal",
				property: "smartsupp",
				description: "Page-owned global matches a known technology marker.",
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
		id: "smilee",
		name: "Smilee",
		website: "https://smilee.io",
		description: "Smilee is a professionally managed chat solution designed to facilitate customer communication.",
		icon: "Smilee.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "smilee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("saas\\.smilee\\.io"),
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
		id: "smith-ai",
		name: "Smith.ai",
		website: "https://smith.ai",
		description: "Smith.ai is a receptionist service combining AI and human call handling to manage business communications across various scenarios.",
		icon: "SmithAI.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "smith-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.smith\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "smith-ai:dom:1",
				kind: "dom",
				selector: "link[href*='app.smith.ai']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "smith-ai:jsGlobal:2",
				kind: "jsGlobal",
				property: "SMITH.chat",
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
		id: "smtpjs",
		name: "SmtpJS",
		website: "https://smtpjs.com",
		description: "SmtpJS is a free library you can use for sending emails from JavaScript.",
		icon: "default.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "smtpjs:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/smtpjs\\.com\\/(?:v([\\d\\.]+)\\/)?smtp\\.js"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
	},
	{
		id: "snapcall",
		name: "SnapCall",
		website: "https://www.snapcall.io",
		description: "SnapCall is a Video AI solution designed to enhance customer support by providing real-time video interactions.",
		icon: "SnapCall.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "snapcall:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("api\\.snapcall\\.io"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "snapcall:jsGlobal:1",
				kind: "jsGlobal",
				property: "sc_api",
				valuePattern: new RegExp("api\\.snapcall\\.io"),
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snapcall:jsGlobal:2",
				kind: "jsGlobal",
				property: "snapcallAPI",
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
		id: "snapengage",
		name: "SnapEngage",
		website: "https://snapengage.com/",
		description: "SnapEngage is a live chat solution that caters to businesses across various industries.",
		icon: "SnapEngage.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "snapengage:html:0",
				kind: "html",
				pattern: new RegExp("<!-- begin SnapEngage"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "snapengage:jsGlobal:1",
				kind: "jsGlobal",
				property: "SnapEngage",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snapengage:jsGlobal:2",
				kind: "jsGlobal",
				property: "SnapEngageChat",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snapengage:jsGlobal:3",
				kind: "jsGlobal",
				property: "snapengage_mobile",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "snapengage:html:4",
				kind: "html",
				pattern: new RegExp("<!-- begin snapengage"),
				description: "HTML contains a known technology signature.",
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
		id: "snatchbot",
		name: "SnatchBot",
		website: "https://snatchbot.me",
		description: "SnatchBot is a cloud-based AI chatbot platform.",
		icon: "SnatchBot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "snatchbot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("account\\.snatchbot\\.me"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "snatchbot:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("account\\.snatchbot\\.me"),
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
		id: "sobot-live-chat",
		name: "Sobot Live Chat",
		website: "https://www.sobot.io",
		description: "Sobot Live Chat is a platform for instant customer engagement, enabling real-time communication on a single interface.",
		icon: "Sobot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sobot-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sobot\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sobot-live-chat:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("\\.sobot\\.com\\/"),
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
		id: "solvemate",
		name: "Solvemate",
		website: "https://www.solvemate.com",
		description: "Solvemate is a customer service automation platform that enables brands to deliver quality customer service through meaningful conversations via chatbots.",
		icon: "Solvemate.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "solvemate:dom:0",
				kind: "dom",
				selector: "link[href*='.solvemate.com']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "solvemate:jsGlobal:1",
				kind: "jsGlobal",
				property: "solvemate.config.solvemateCDN",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "solvemate:jsGlobal:2",
				kind: "jsGlobal",
				property: "solvemateCli",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "solvemate:jsGlobal:3",
				kind: "jsGlobal",
				property: "solvemateConfig",
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
		id: "solvvy",
		name: "Solvvy",
		website: "https://solvvy.com/",
		description: "Solvvy provides live chat and chatbot services.",
		icon: "solvvy.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "solvvy:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.solvvy\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "solvvy:jsGlobal:1",
				kind: "jsGlobal",
				property: "Solvvy",
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
		id: "sonetel-chat",
		name: "Sonetel Chat",
		website: "https://sonetel.com",
		description: "Sonetel is a website chat system that enables online communication between businesses and their website visitors.",
		icon: "Sonetel.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sonetel-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.sonetel\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sonetel-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "SonetelWidget",
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
		id: "sparkpost",
		name: "SparkPost",
		website: "https://www.sparkpost.com/",
		description: "SparkPost is an email infrastructure provider.",
		icon: "SparkPost.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sparkpost:dns:0",
				kind: "dns",
				valuePattern: new RegExp("sparkpostmail\\.com", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
	},
	{
		id: "spatialchat",
		name: "SpatialChat",
		website: "https://spatial.chat",
		description: "SpatialChat is a platform for interactive video meetings, designed to host events such as all-hands meetings, keynotes, and online classes.",
		icon: "SpatialChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "spatialchat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.spatial\\.chat"),
				description: "Script content contains a bounded technology signature.",
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
		id: "spatie-support-bubble",
		name: "Spatie Support Bubble",
		website: "https://github.com/spatie/laravel-support-bubble",
		description: "Spatie Support Bubble is a non-intrusive support form.",
		icon: "Spatie.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "spatie-support-bubble:dom:0",
				kind: "dom",
				selector: "div.spatie-support-bubble",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
		},
		implies: [
			"laravel",
			"tailwind-css",
		],
	},
	{
		id: "speakpipe",
		name: "SpeakPipe",
		website: "https://www.speakpipe.com",
		description: "SpeakPipe is a tool that lets websites receive voice messages from visitors, making it easier for users to leave feedback, testimonials, or contact the site owner directly.",
		icon: "SpeakPipe.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "speakpipe:jsGlobal:0",
				kind: "jsGlobal",
				property: "_speakpipe_dialog_loaded",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "speakpipe:jsGlobal:1",
				kind: "jsGlobal",
				property: "_speakpipe_open_reply_dialog",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "speakpipe:jsGlobal:2",
				kind: "jsGlobal",
				property: "_speakpipe_open_reply_dialog_by_token",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "speakpipe:jsGlobal:3",
				kind: "jsGlobal",
				property: "_speakpipe_open_widget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "spikmi",
		name: "Spikmi",
		website: "https://spikmi.com",
		description: "Spikmi is a messenger communication button for websites that enables convenient customer support access from anywhere in the world.",
		icon: "Spikmi.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "spikmi:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/spikmi\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "splutter-ai",
		name: "Splutter AI",
		website: "https://www.splutter.ai",
		description: "Splutter AI is a platform that enables the creation of AI chatbots for websites.",
		icon: "SplutterAI.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "splutter-ai:jsGlobal:0",
				kind: "jsGlobal",
				property: "embeddedChatbotConfig.domain",
				valuePattern: new RegExp("\\/\\/splutter\\.ai"),
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"payg",
				"recurring",
			],
		},
	},
	{
		id: "squirrelmail",
		name: "SquirrelMail",
		website: "https://squirrelmail.org",
		description: "SquirrelMail is an open-source web-mail package that is based on PHP language. It provides a web-based-email client and a proxy server for IMAP protocol.",
		icon: "SquirrelMail.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "squirrelmail:html:0",
				kind: "html",
				pattern: new RegExp("<small>SquirrelMail version ([.\\d]+)[^<]*<br "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
			{
				id: "squirrelmail:url:1",
				kind: "url",
				pattern: new RegExp("\\/src\\/webmail\\.php(?:$|\\?)"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "squirrelmail:jsGlobal:2",
				kind: "jsGlobal",
				property: "squirrelmail_loginpage_onload",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "squirrelmail:html:3",
				kind: "html",
				pattern: new RegExp("<small>squirrelmail version ([.\\d]+)[^<]*<br "),
				version: {
					source: "match",
					group: 1,
				},
				description: "HTML contains a known technology signature.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:squirrelmail:squirrelmail:*:*:*:*:*:*:*:*",
		},
		implies: [
			"php",
		],
	},
	{
		id: "subiz",
		name: "Subiz",
		website: "https://subiz.com.vn",
		description: "Subiz is a live chat solution that consolidates all customer messages into a single screen for communication on websites.",
		icon: "Subiz.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "subiz:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.subiz\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "subiz:jsGlobal:1",
				kind: "jsGlobal",
				property: "subiz",
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
		id: "sugester",
		name: "Sugester",
		website: "https://sugester.pl",
		description: "Sugester is a platform that combines CRM, helpdesk, and project management features, offering an all-in-one solution for small and medium-sized businesses.",
		icon: "Sugester.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "sugester:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.sugester\\.pl\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sugester:jsGlobal:1",
				kind: "jsGlobal",
				property: "SUGESTER.ACCOUNT_ID",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "sugester:jsGlobal:2",
				kind: "jsGlobal",
				property: "sugesterChatOptions",
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
		id: "suiteshare",
		name: "Suiteshare",
		website: "https://suiteshare.com/",
		description: "Suiteshare powers conversational shopping experiences.",
		icon: "Suiteshare.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "suiteshare:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.suiteshare\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "superchat",
		name: "Superchat",
		website: "https://www.superchat.com/",
		description: "Superchat is an all-in-one messaging software that helps businesses build loyal customer relationships, send and automate newsletters, sell products, and answer questions.",
		icon: "Superchat.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "superchat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.superchat\\.de\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "superchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "Superchat.init",
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
		id: "supportbox",
		name: "SupportBox",
		website: "https://supportbox.cz",
		description: "SupportBox is a customer support platform that uses AI to deliver intelligent assistance for handling user inquiries and support interactions.",
		icon: "SupportBox.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "supportbox:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("chat\\.supportbox\\.cz\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "supportbox:jsGlobal:1",
				kind: "jsGlobal",
				property: "supportBoxApi",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "supportbox:jsGlobal:2",
				kind: "jsGlobal",
				property: "supportBoxChatConfig",
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
		id: "swell-cx",
		name: "Swell CX",
		website: "https://www.swellcx.com",
		description: "Swell CX is an online reviews and website visitor chat system.",
		icon: "SwellCX.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "swell-cx:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("platform\\.swellcx\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "swell-cx:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("platform\\.swellcx\\.com"),
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
		id: "sympa",
		name: "Sympa",
		website: "https://www.sympa.org/",
		description: "Sympa is an open-source mailing list management (MLM) software.",
		icon: "sympa.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "sympa:html:0",
				kind: "html",
				pattern: new RegExp("<a href=\"https?:\\/\\/www\\.sympa\\.org\">\\s*Powered by Sympa\\s*<\\/a>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sympa:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Sympa$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "sympa:html:2",
				kind: "html",
				pattern: new RegExp("<a href=\"https?:\\/\\/www\\.sympa\\.org\">\\s*powered by sympa\\s*<\\/a>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "sympa:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^sympa$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:sympa:sympa:*:*:*:*:*:*:*:*",
		},
		implies: [
			"perl",
		],
	},
	{
		id: "tactful",
		name: "Tactful",
		website: "https://tactful.ai",
		description: "Tactful is an AI-driven platform that enables seamless customer service across multiple communication channels.",
		icon: "Tactful.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tactful:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webchat\\.tactful\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tactful:jsGlobal:1",
				kind: "jsGlobal",
				property: "Tactful.TACTFUL_CLIENT_ID",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "talk-me",
		name: "Talk-Me",
		website: "https://talk-me.ru",
		description: "Talk-Me is a chat system designed to enhance sales growth by facilitating customer communication, offering a range of tools to help businesses find new clients through their websites.",
		icon: "TalkMe.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "talk-me:jsGlobal:0",
				kind: "jsGlobal",
				property: "MeTalk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "talk-me:jsGlobal:1",
				kind: "jsGlobal",
				property: "TalkMe",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "talk-me:jsGlobal:2",
				kind: "jsGlobal",
				property: "TalkMeIsInitialized",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "talk-me:jsGlobal:3",
				kind: "jsGlobal",
				property: "TalkMeSetup",
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
		id: "talkdesk",
		name: "Talkdesk",
		website: "https://www.talkdesk.com",
		description: "Talkdesk is a platform providing modern AI-powered customer service solutions.",
		icon: "Talkdesk.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "talkdesk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.talkdeskapp\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "talkdesk:jsGlobal:1",
				kind: "jsGlobal",
				property: "TalkdeskChatSDK",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "talkdesk:jsGlobal:2",
				kind: "jsGlobal",
				property: "webpackChunkTalkdeskChatSDK",
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
		id: "talkjs",
		name: "TalkJS",
		website: "https://talkjs.com",
		description: "TalkJS is a platform that enables user-to-user messaging within marketplaces or platforms.",
		icon: "TalkJS.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "talkjs:jsGlobal:0",
				kind: "jsGlobal",
				property: "Talk.v",
				valuePattern: new RegExp("^(.+)$"),
				version: {
					source: "match",
					group: 1,
				},
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "talkjs:jsGlobal:1",
				kind: "jsGlobal",
				property: "_talkjs_locales",
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
		id: "tallentor-widget",
		name: "Tallentor Widget",
		website: "https://tallentor.com",
		description: "Tallentor is a subscription-based software website analytics, heatmap, channel chat intergration.",
		icon: "Tallentor.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tallentor-widget:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^tallentor_widget$", "i"),
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
		id: "tars",
		name: "Tars",
		website: "https://hellotars.com/",
		description: "Tars is a platform for creating chatbots without programming knowledge.",
		icon: "Tars.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tars:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.hellotars\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tars:dom:1",
				kind: "dom",
				selector: "link[href*='api.hellotars.com/']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "tars:jsGlobal:2",
				kind: "jsGlobal",
				property: "tarsWidget",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tawk-to",
		name: "Tawk.to",
		website: "https://tawk.to",
		description: "Tawk.to is a free messaging app to monitor and chat with the visitors to a website, mobile app.",
		icon: "TawkTo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tawk-to:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/embed\\.tawk\\.to"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tawk-to:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^TawkConnectionTime$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "tawk-to:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^tawkconnectiontime$", "i"),
				description: "Cookie name matches a known technology marker.",
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
		id: "teletype-app",
		name: "Teletype App",
		website: "https://teletype.app",
		description: "Teletype App is a messenger platform that enables real-time text-based communication between users across connected devices.",
		icon: "TeletypeApp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "teletype-app:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.teletype\\.app"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "teletype-app:jsGlobal:1",
				kind: "jsGlobal",
				property: "_teletypeWidget",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "teletype-app:jsGlobal:2",
				kind: "jsGlobal",
				property: "teletypeExternalId",
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
		id: "tencent-qq",
		name: "Tencent QQ",
		website: "https://im.qq.com",
		description: "Tencent QQ also known as QQ, is an instant messaging software service and web portal developed by the Chinese tech giant Tencent.",
		icon: "Tencent QQ.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tencent-qq:dom:0",
				kind: "dom",
				selector: "a[href*='tencent://message/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "text-in-church",
		name: "Text In Church",
		website: "https://textinchurch.com",
		description: "Text In Church is a communication platform that enables churches to send text messages and manage member interactions.",
		icon: "TextInChurch.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "text-in-church:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.textinchurch\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "thebotforge",
		name: "TheBotForge",
		website: "https://thebotforge.ai",
		description: "TheBotForge is an AI chatbot creation platform.",
		icon: "TheBotForge.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "thebotforge:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.thebotforge\\.ai\\/"),
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
		id: "thinking-chat",
		name: "Thinking Chat",
		website: "https://thinkingchat.com",
		description: "Thinking Chat is an automated lead capture and chat solution.",
		icon: "ThinkingChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "thinking-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.thinkingchat\\.com\\/"),
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
		id: "tidio",
		name: "Tidio",
		website: "https://www.tidio.com",
		description: "Tidio is a customer communication product. It provides multi-channel support so users can communicate with customers on the go. Live chat, messenger, or email are all supported.",
		icon: "Tidio.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tidio:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("code\\.tidio\\.co"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tidio:jsGlobal:1",
				kind: "jsGlobal",
				property: "tidioChatApi",
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
		id: "tiledesk",
		name: "Tiledesk",
		website: "https://tiledesk.com",
		description: "Tiledesk is a multi-channel agentic AI platform for customer service, combining human handover, self-learning, and no-code visual automations.”",
		icon: "Tiledesk.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tiledesk:jsGlobal:0",
				kind: "jsGlobal",
				property: "Tiledesk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tiledesk:jsGlobal:1",
				kind: "jsGlobal",
				property: "tileDeskAsyncInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tiledesk:jsGlobal:2",
				kind: "jsGlobal",
				property: "tiledesk",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "tiledesk:jsGlobal:3",
				kind: "jsGlobal",
				property: "tiledeskSettings",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"freemium",
				"low",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "tolk",
		name: "Tolk",
		website: "https://www.tolk.ai",
		description: "Tolk is a platform that provides AI-powered live chat and chatbot solutions designed to enhance customer relations and support interactions.",
		icon: "Tolk.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tolk:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("script\\.tolk\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "tolk:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("script\\.tolk\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "tooltip",
		name: "Tooltip",
		website: "https://tooltip.io",
		description: "Tooltip is a web-based in-app messaging suite designed to enhance user engagement and communication within applications.",
		icon: "Tooltip.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tooltip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.tooltip\\.io\\/"),
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
		id: "trengo",
		name: "Trengo",
		website: "https://trengo.com",
		description: "Trengo is an omnichannel communication platform that unifies all messaging channels into one single view.",
		icon: "Trengo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "trengo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.widget\\.trengo\\.eu\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "trengo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Trengo.eventBus",
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
		id: "tuotempo",
		name: "TuoTempo",
		website: "https://tuotempo.com",
		description: "TuoTempo is a patient CRM designed to manage appointments, patient communications, and care workflows for medical centers.",
		icon: "TuoTempo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "tuotempo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.tuotempo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "uhchat",
		name: "uhChat",
		website: "https://uhchat.net",
		description: "uhChat is a tool that enables the creation of an embedded chat box on websites for real-time communication.",
		icon: "uhChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "uhchat:jsGlobal:0",
				kind: "jsGlobal",
				property: "getuhchatCookie",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uhchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "uhchatClick",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "uhchat:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^uhchatrelock$", "i"),
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
		id: "ultimate",
		name: "Ultimate",
		website: "https://www.ultimate.ai",
		description: "Ultimate is a platform for automating customer service using conversational and generative AI technology.",
		icon: "Ultimate.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "ultimate:jsGlobal:0",
				kind: "jsGlobal",
				property: "ultimateAiLogin",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "ultimate:jsGlobal:1",
				kind: "jsGlobal",
				property: "ultimateAiUpdateUser",
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
		id: "umni",
		name: "Umni",
		website: "https://umni.bg",
		description: "Umni is a platform that provides an AI chatbot designed to automate and improve customer service, sales interactions, and marketing processes.",
		icon: "Umni.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "umni:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.umni\\.bg"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "unblu-virtual-agent",
		name: "Unblu Virtual Agent",
		website: "https://www.unblu.com",
		description: "Unblu Virtual Agent is a platform that provides customers with 24/7 access to intelligent, automated conversations designed to feel human.",
		icon: "Unblu.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "unblu-virtual-agent:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.unblu\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "upscribe",
		name: "Upscribe",
		website: "https://upscribe.net",
		description: "Upscribe is a platform offering tools to create newsletter signup forms.",
		icon: "Upscribe.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "upscribe:jsGlobal:0",
				kind: "jsGlobal",
				property: "Upscribe.c",
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
		id: "useresponse",
		name: "UseResponse",
		website: "https://www.useresponse.com",
		description: "UseResponse is a multi-channel customer support software suite that provides tools for managing customer inquiries, reducing response times, and supporting improved service workflows across communication channels.",
		icon: "UseResponse.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "useresponse:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.useresponse\\.com\\/"),
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
		id: "userlike",
		name: "UserLike",
		website: "https://userlike.com",
		description: "Userlike is a cloud-based live chat solution that can be integrated with existing websites.",
		icon: "UserLike.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "userlike:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("userlike\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userlike:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("userlikelib\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userlike:scriptSrc:2",
				kind: "scriptSrc",
				pattern: new RegExp("\\/\\/userlike-cdn-widgets\\."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userlike:scriptSrc:3",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.userlike\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userlike:jsGlobal:4",
				kind: "jsGlobal",
				property: "__USERLIKE_MOUNT_GUARD__",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userlike:jsGlobal:5",
				kind: "jsGlobal",
				property: "userlike",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userlike:jsGlobal:6",
				kind: "jsGlobal",
				property: "userlikeInit",
				description: "Page-owned global matches a known technology marker.",
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
		id: "userlink",
		name: "Userlink",
		website: "https://userlink.ai",
		description: "Userlink is a platform that integrates AI chatbots into webshops to improve customer experience and boost sales.",
		icon: "Userlink.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "userlink:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("files\\.userlink\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "userlink:jsGlobal:1",
				kind: "jsGlobal",
				property: "setUserlinkChatVisible",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "userlink:jsGlobal:2",
				kind: "jsGlobal",
				property: "userlinkIsInAvailableTimePeriod",
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
		id: "vchat",
		name: "vChat",
		website: "https://vchat.vn",
		description: "vChat is a chat solution in Vietnam.",
		icon: "vChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "vchat:jsGlobal:0",
				kind: "jsGlobal",
				property: "__vnpDefault.url",
				valuePattern: new RegExp("core\\.vchat\\.vn"),
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
		id: "velaro",
		name: "Velaro",
		website: "https://velaro.com/product/live-chat",
		description: "Velaro is a live chat platform designed to engage website visitors and customers, enhancing online sales conversions.",
		icon: "Velaro.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "velaro:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/velaroscripts\\/"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "velaro:jsGlobal:1",
				kind: "jsGlobal",
				property: "Velaro.Call",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "velaro:jsGlobal:2",
				kind: "jsGlobal",
				property: "isVelaroChatClicked",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "venyoo",
		name: "Venyoo",
		website: "https://venew.io",
		description: "Venyoo is a live and robot chat widget designed to facilitate communication.",
		icon: "Venyoo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "venyoo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.venyoo\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "venyoo:jsGlobal:1",
				kind: "jsGlobal",
				property: "venyooProxyScript",
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
		id: "vergic",
		name: "Vergic",
		website: "https://www.vergic.com",
		description: "Vergic is a platform facilitating real-time online engagement between site owners, customer service agents, and individual customers, prospects, or visitors.",
		icon: "Vergic.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "vergic:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("us-content\\.vergic\\.com\\/"),
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
		id: "verloop",
		name: "Verloop",
		website: "https://verloop.io/",
		description: "Verloop is a customer support and engagement platform that focuses on automating interactions with customers through AI-powered chatbots and conversational interfaces.",
		icon: "Verloop.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "verloop:jsGlobal:0",
				kind: "jsGlobal",
				property: "Verloop",
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
		id: "vertaflow-chat",
		name: "VertaFlow Chat",
		website: "https://vertaflow.io",
		description: "VertaFlow Chat is a lightweight embeddable chat widget that routes messages to VertaFlow CRM tickets.",
		icon: "VertaFlow.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "vertaflow-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("vertaflow\\.io\\/v1\\/chat\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
		],
	},
	{
		id: "viasay",
		name: "ViaSay",
		website: "http://www.viasay.io",
		description: "ViaSay is a conversational AI tool that facilitates the creation of customised automated processes, enhancing the efficiency and speed of customer service.",
		icon: "ViaSay.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "viasay:jsGlobal:0",
				kind: "jsGlobal",
				property: "mindsayJsonP",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "virtual-chat",
		name: "Virtual Chat",
		website: "https://www.virtual-chat.co.il",
		description: "Virtual Chat is a live-chat service for web sites.",
		icon: "Virtual Chat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "virtual-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("virtual-chat\\.co\\.il\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "virtualspirits",
		name: "VirtualSpirits",
		website: "https://www.virtualspirits.com",
		description: "VirtualSpirits is a chatbot and live-chat service for websites.",
		icon: "VirtualSpirits.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "virtualspirits:jsGlobal:0",
				kind: "jsGlobal",
				property: "vspiritbutton",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "virtualspirits:jsGlobal:1",
				kind: "jsGlobal",
				property: "vspirits_chat_client",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "virtualspirits:jsGlobal:2",
				kind: "jsGlobal",
				property: "vspiritsizeheight",
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
		id: "visitor-chat",
		name: "Visitor Chat",
		website: "https://visitor.chat",
		description: "Visitor Chat is a service that provides businesses with managed automotive live chat solutions to improve customer relationships.",
		icon: "VisitorChat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "visitor-chat:jsGlobal:0",
				kind: "jsGlobal",
				property: "VisitorChatInit",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visitor-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "VisitorChat_Close",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visitor-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "VisitorChat_Init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "visitor-chat:jsGlobal:3",
				kind: "jsGlobal",
				property: "VisitorChat_clearStore",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "voizee",
		name: "Voizee",
		website: "https://voizee.com",
		description: "Voizee is an AI-powered platform that enables businesses to manage automated and human-assisted text messaging and voice calling for customer communication and operational workflows.",
		icon: "Voizee.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "voizee:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.voizee\\.com\\/"),
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
		id: "warm-welcome",
		name: "Warm Welcome",
		website: "https://www.warmwelcome.com",
		description: "Warm Welcome is a tool that provides interactive video bubbles and video email features for personalized communication.",
		icon: "WarmWelcome.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "warm-welcome:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.warmwelcome\\.com"),
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
		id: "webbotify",
		name: "Webbotify",
		website: "https://www.webbotify.com",
		description: "Webbotify is a chatbot platform that uses AI trained specifically on a website's content to provide automated responses.",
		icon: "Webbotify.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "webbotify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("api\\.webbotify\\.com\\/"),
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
		id: "webim",
		name: "Webim",
		website: "https://webim.ru",
		description: "Webim is a platform offering live chat service for website visitors, facilitating real-time communication between businesses and their online audience.",
		icon: "Webim.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "webim:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.webim\\.ru\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "webim:jsGlobal:1",
				kind: "jsGlobal",
				property: "webim",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "webim:jsGlobal:2",
				kind: "jsGlobal",
				property: "webim.version",
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
				"freemium",
				"low",
				"recurring",
			],
		},
	},
	{
		id: "webotit",
		name: "Webotit",
		website: "https://www.webotit.ai",
		description: "Webotit is a business tool that provides chatbot, callbot, and mailbot solutions powered by generative AI.",
		icon: "Webotit.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "webotit:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.webotit\\.ai"),
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
		id: "webqna",
		name: "WebQnA",
		website: "https://webqna.ai",
		description: "WebQnA is a platform that offers generative AI chatbots for businesses to enhance customer interactions and support.",
		icon: "WebQnA.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "webqna:jsGlobal:0",
				kind: "jsGlobal",
				property: "webqna",
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
		id: "weply",
		name: "Weply",
		website: "https://weply.chat",
		description: "Weply is a Nordic lead generation chat system designed to enhance lead generation from existing website traffic.",
		icon: "Weply.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "weply:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.weply\\.chat\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "weply:jsGlobal:1",
				kind: "jsGlobal",
				property: "$$weply",
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
		id: "whatsapp-business-chat",
		name: "WhatsApp Business Chat",
		website: "https://www.whatsapp.com/business",
		description: "WhatsApp Business is a free to download app available on Android and iPhone using which businesses can connect with their customers.",
		icon: "WhatsApp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "whatsapp-business-chat:dom:0",
				kind: "dom",
				selector: "a[href*='api.whatsapp.com/send'], a[href*='web.whatsapp.com/send'], a[href*='wa.me/'], div[class*='wptwa-container'], a[href*='wa.link'][target='_blank']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "whatsapp-business-chat:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("\\/plugins\\/creame-whatsapp-me.*joinchat\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "whatsapp-business-chat:dom:2",
				kind: "dom",
				selector: "a[href*='api.whatsapp.com/send'], a[href*='web.whatsapp.com/send'], div[class*='wptwa-container'], a[href*='wa.link'][target='_blank'], link[href*='plugins/creame-whatsapp-me']",
				description: "DOM selector matches a known technology marker.",
			},
		],
	},
	{
		id: "whelp",
		name: "Whelp",
		website: "https://whelp.co",
		description: "Whelp is an AI-based omnichannel customer support platform that provides automated chatbot-driven assistance across multiple communication channels.",
		icon: "Whelp.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "whelp:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("widget\\.getwhelp\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "whelp:jsGlobal:1",
				kind: "jsGlobal",
				property: "Whelp.Init",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "whelp:jsGlobal:2",
				kind: "jsGlobal",
				property: "WhelpConfig",
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
		id: "whoson",
		name: "WhosOn",
		website: "https://www.whoson.com",
		description: "WhosOn is a secure live chat and AI platform for managing and automating customer communications.",
		icon: "WhosOn.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "whoson:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.whoson\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "whoson:jsGlobal:1",
				kind: "jsGlobal",
				property: "whoson_global",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "whoson:jsGlobal:2",
				kind: "jsGlobal",
				property: "whoson_init",
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
		id: "widgetwhats",
		name: "WidgetWhats",
		website: "https://widgetwhats.com",
		description: "WidgetWhats is a fully customizable chat widget with appearance, text, color, button style and position.",
		icon: "WidgetWhats.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "widgetwhats:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.widgetwhats\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "widgetwhats:jsGlobal:1",
				kind: "jsGlobal",
				property: "wwwa_loaded",
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
		id: "wikit-live-chat",
		name: "Wikit Live Chat",
		website: "https://www.wikit.ai/solution/livechat",
		description: "Wikit Live Chat is a platform that enables the creation of intelligent chatbots, leveraging the capabilities of generative AI to enhance user interactions.",
		icon: "Wikit.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "wikit-live-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webchat\\.wikit\\.ai"),
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
		id: "wix-answers",
		name: "Wix Answers",
		website: "https://www.wixanswers.com",
		description: "Wix Answers is a cloud-based help desk software.",
		icon: "Wix Answers.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "wix-answers:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.wixanswers\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wix-answers:dom:1",
				kind: "dom",
				selector: "iframe[src*='.wixanswers.com/']",
				description: "DOM selector matches a known technology marker.",
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
		id: "wotnot",
		name: "WotNot",
		website: "https://wotnot.io",
		description: "WotNot is a no-code chatbot platform enabling users to create and deploy chatbots without programming skills.",
		icon: "WotNot.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "wotnot:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("app\\.wotnot\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "wotnot:jsGlobal:1",
				kind: "jsGlobal",
				property: "WotNot.GetChatWindow",
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
		id: "xenioo",
		name: "Xenioo",
		website: "https://www.xenioo.com",
		description: "Xenioo is an omnichannel chatbot platform designed to create, manage, and deploy conversational agents across multiple messaging channels.",
		icon: "Xenioo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "xenioo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.xenioo\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xenioo:jsGlobal:1",
				kind: "jsGlobal",
				property: "Xenioo",
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
		id: "xeno-chat",
		name: "Xeno Chat",
		website: "https://xenoapp.com",
		description: "Xeno Chat is a messaging app that enables live responses to support customer attraction, conversion, and retention.",
		icon: "Xeno.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "xeno-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.xeno\\.app"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xeno-chat:jsGlobal:1",
				kind: "jsGlobal",
				property: "_xeno._Utils",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "xeno-chat:jsGlobal:2",
				kind: "jsGlobal",
				property: "_xenoLoader",
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
		id: "xverify",
		name: "Xverify",
		website: "https://www.xverify.com",
		description: "Xverify is an intelligent email verification system that helps marketers eliminate hard bounces, reduce spam complaints, and minimize fraud to improve inbox deliverability.",
		icon: "Xverify.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "xverify:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.xverify\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "xverify:jsGlobal:1",
				kind: "jsGlobal",
				property: "user_xverify_my_domain",
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
		id: "yellow-ai",
		name: "yellow.ai",
		website: "https://yellow.ai/",
		description: "yellow.ai provides chatbot and automation services.",
		icon: "yellow.ai.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "yellow-ai:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.yellowmessenger\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yellow-ai:jsGlobal:1",
				kind: "jsGlobal",
				property: "ymConfig",
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
		id: "yomdel",
		name: "Yomdel",
		website: "https://www.yomdel.com",
		description: "Yomdel is a fully managed live chat service that handles website conversations and delivers qualified sales leads directly to businesses.",
		icon: "Yomdel.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "yomdel:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("clients\\.yomdel\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yomdel:scriptContent:1",
				kind: "scriptContent",
				pattern: new RegExp("clients\\.yomdel\\.com\\/"),
				description: "Script content contains a bounded technology signature.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "yonder",
		name: "Yonder",
		website: "https://www.yonderhq.com",
		description: "Yonder is a booking automation solution that helps tourism businesses increase bookings, collect feedback, garner positive reviews, convert website visitors, automate FAQs with an AI chatbot, and communicate with customers.",
		icon: "Yonder.svg",
		categories: [
			"email-messaging",
			"booking-scheduling",
		],
		rules: [
			{
				id: "yonder:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.yonderhq\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "yonder:jsGlobal:1",
				kind: "jsGlobal",
				property: "YONDER_APP_LOADED",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "yonder:jsGlobal:2",
				kind: "jsGlobal",
				property: "toggleYonderChat",
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
		id: "zadarma",
		name: "Zadarma",
		website: "https://zadarma.com",
		description: "Zadarma is a VoIP service that provides cloud-based voice communications for businesses, supporting internet calling, virtual phone numbers, and call management features.",
		icon: "Zadarma.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zadarma:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("my\\.zadarma\\.com"),
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
		id: "zendesk-chat",
		name: "Zendesk Chat",
		website: "https://www.zendesk.com/service/messaging/live-chat-software/",
		description: "Zendesk Chat is a live chat and communication widget.",
		icon: "Zendesk Chat.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zendesk-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("v2\\.zopim\\.com"),
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
		id: "zendesk-sunshine-conversations",
		name: "Zendesk Sunshine Conversations",
		website: "https://www.zendesk.com/platform/conversations",
		description: "Zendesk Sunshine Conversations lets you share a single, continuous conversation with every team in your business. With a unified API and native connectors to popular business applications like Zendesk and Slack, everyone in your organization can get access to a single view of the customer conversation.",
		icon: "Zendesk.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zendesk-sunshine-conversations:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cdn\\.smooch\\.io\\/"),
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
		implies: [
			"zendesk",
		],
	},
	{
		id: "zenvia",
		name: "Zenvia",
		website: "https://www.zenvia.com",
		description: "Zenvia is a customer engagement platform that enables businesses to communicate with clients through multiple digital channels.",
		icon: "Zenvia.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zenvia:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.zenvia\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zenvia:jsGlobal:1",
				kind: "jsGlobal",
				property: "ZenviaChat",
				description: "Page-owned global matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"high",
				"poa",
				"recurring",
			],
		},
	},
	{
		id: "zimbra",
		name: "Zimbra",
		website: "https://www.zimbra.com/",
		description: "Zimbra is a provider of open-source email and collaboration software, offering solutions for email, calendar, contacts, and collaboration for both individual and enterprise use.",
		icon: "Zimbra.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zimbra:cookie:0",
				kind: "cookie",
				keyPattern: new RegExp("^ZM_TEST$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "zimbra:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^zm_test$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			oss: true,
			cpe: "cpe:2.3:a:zimbra:zimbra:*:*:*:*:*:*:*:*",
		},
		implies: [
			"java",
		],
	},
	{
		id: "zipchat",
		name: "Zipchat",
		website: "https://zipchat.ai",
		description: "Zipchat is an AI chatbot for ecommerce, designed to boost sales by automating customer interactions and assisting with purchasing decisions.",
		icon: "Zipchat.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zipchat:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.zipchat\\.ai"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "zipchat:jsGlobal:1",
				kind: "jsGlobal",
				property: "zipchatWidgetLoaded",
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
		id: "zipteams",
		name: "Zipteams",
		website: "https://zipteams.com",
		description: "Zipteams is a live chat solution.",
		icon: "Zipteams.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zipteams:jsGlobal:0",
				kind: "jsGlobal",
				property: "ZipteamsWidget",
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
		id: "zoho-mail",
		name: "Zoho Mail",
		website: "https://www.zoho.com/mail/",
		description: "Zoho Mail is an email hosting service for businesses.",
		icon: "Zoho.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zoho-mail:dns:0",
				kind: "dns",
				valuePattern: new RegExp("transmail\\.net", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		implies: [
			"zoho",
		],
	},
	{
		id: "zoho-salesiq",
		name: "Zoho SalesIQ",
		website: "https://www.zoho.com/salesiq",
		description: "Zoho SalesIQ is a digital customer engagement platform that provides marketing, sales, and support teams with tools to interact with site visitors at every stage of the customer lifecycle.",
		icon: "Zoho.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zoho-salesiq:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("salesiq\\.zohopublic\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zoho-salesiq:jsGlobal:1",
				kind: "jsGlobal",
				property: "$zoho.salesiq",
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
		id: "zoko",
		name: "Zoko",
		website: "https://www.zoko.io/",
		description: "Zoko is an all-in-one system that leverages the WhatsApp API to help you do business, on WhatsApp",
		icon: "Zoko.png",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zoko:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zoko-shopify-prod\\.web\\.app"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "zoko:jsGlobal:1",
				kind: "jsGlobal",
				property: "__zoko_app_version",
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
			"whatsapp-business-chat",
		],
	},
	{
		id: "zoominfo-chat",
		name: "Zoominfo Chat",
		website: "https://www.zoominfo.com/chat",
		description: "ZoomInfo chat is a live chat solution.",
		icon: "Zoominfo.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zoominfo-chat:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("madstreetden\\.widget\\.insent\\.ai"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "zowie",
		name: "Zowie",
		website: "https://getzowie.com",
		description: "Zowie is an AI-powered customer service suite tailored for ecommerce, aimed at cost-saving and revenue generation through value-driven interactions.",
		icon: "Zowie.svg",
		categories: [
			"email-messaging",
			"business-tools",
		],
		rules: [
			{
				id: "zowie:dom:0",
				kind: "dom",
				selector: "div#zowieChatbotWrapper",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "zowie:jsGlobal:1",
				kind: "jsGlobal",
				property: "Zowie",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "zowie:jsGlobal:2",
				kind: "jsGlobal",
				property: "zowieJsonp",
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
		id: "zulip",
		name: "Zulip",
		website: "https://zulip.com/",
		description: "Zulip is a team chat platform that organizes conversations into topic-based threads to support asynchronous communication for distributed teams.",
		icon: "Zulip.svg",
		categories: [
			"email-messaging",
		],
		rules: [
			{
				id: "zulip:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("zulip\\.futo\\.org"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"freemium",
				"recurring",
			],
			cpe: "cpe:2.3:a:zulip:zulip:*:*:*:*:*:*:*:*",
		},
	},
] as const satisfies readonly TechnologyDefinition[];
