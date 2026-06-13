import type { TechnologyDefinition } from '../types';

export const networkHardwareTechnologyDefinitions = [
	{
		id: "amazon-efs",
		name: "Amazon EFS",
		website: "https://aws.amazon.com/efs/",
		description: "Amazon Elastic File System is a cloud storage service provided by Amazon Web Services.",
		icon: "Amazon EFS.svg",
		categories: [
			"network-hardware",
		],
		rules: [],
		metadata: {
			saas: true,
		},
		implies: [
			"amazon-web-services",
		],
	},
	{
		id: "atera",
		name: "Atera",
		website: "https://www.atera.com",
		description: "Atera is a software solution for RMM network discovery, PSA, and remote access.",
		icon: "Atera.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "atera:jsGlobal:0",
				kind: "jsGlobal",
				property: "ateraAnalyticsFirstLoad",
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
			cpe: "cpe:2.3:a:atera:atera:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "cardina",
		name: "Cardina",
		website: "https://cardina.com",
		description: "Cardina is a screen-sharing and cobrowsing tool that enables agents to see, draw on, and guide a customer’s screen during phone or live chat interactions without requiring customer actions.",
		icon: "Cardina.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "cardina:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.cohere\\.so"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "cardina:jsGlobal:1",
				kind: "jsGlobal",
				property: "Cohere.addCallStatusListener",
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
		id: "cargoserver",
		name: "CargoServer",
		website: "https://cargoserver.ch",
		description: "CargoServer is a platform that enables secure data transfer.",
		icon: "CargoServer.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "cargoserver:meta:0",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^CargoServer$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "cargoserver:meta:1",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("^cargoserver$", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "chaser",
		name: "Chaser",
		website: "https://chaser.ru",
		description: "Chaser is a telephone callback system designed to connect users by initiating return calls through a central server.",
		icon: "Chaser.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "chaser:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\/\\/chaser\\.ru'"),
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
		id: "citrix",
		name: "Citrix",
		website: "https://www.citrix.com",
		description: "Citrix is a people-centric solutions provider offering software that enables employees to work and collaborate remotely, irrespective of their device or network.",
		icon: "Citrix.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "citrix:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\/ctxs\\.core\\.min\\.js"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "citrix:jsGlobal:1",
				kind: "jsGlobal",
				property: "AddHeaderAndBarForCitrix",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "citrix:jsGlobal:2",
				kind: "jsGlobal",
				property: "CTXS.AccessGateway",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "citrix:jsGlobal:3",
				kind: "jsGlobal",
				property: "CTXS.WebApiClient",
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
		id: "glance",
		name: "Glance",
		website: "https://www.glance.cx",
		description: "Glance is a screen sharing and co-browsing solution for sales, service, and support.",
		icon: "Glance.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "glance:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("www\\.glancecdn\\.net"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "impero",
		name: "Impero",
		website: "https://www.imperosoftware.com",
		description: "Impero offers educational and corporate customers the most secure way of remotely accessing devices.",
		icon: "Impero.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "impero:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.netop\\.com"),
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
		id: "ipfs",
		name: "IPFS",
		website: "https://ipfs.tech/",
		description: "IPFS is a peer-to-peer hypermedia protocol that provides a distributed hypermedia web.",
		icon: "IPFS.svg",
		categories: [
			"network-hardware",
		],
		rules: [],
	},
	{
		id: "logmein",
		name: "LogMeIn",
		website: "https://www.logmein.com",
		description: "LogMeIn (now part of GoTo) provides remote access, remote support, and identity and collaboration software for individuals and businesses.",
		icon: "LogMeIn.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "logmein:dns:0",
				kind: "dns",
				valuePattern: new RegExp("logmein-verification-code=", "i"),
				recordType: "TXT",
				description: "DNS record matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "maptrack",
		name: "MapTrack",
		website: "https://maptrack.com",
		description: "MapTack is a platform to audit and manage assets from a single interface.",
		icon: "MapTrack.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "maptrack:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("app\\.maptrackpro\\.com"),
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
		id: "milvus",
		name: "Milvus",
		website: "https://milvus.com.br",
		description: "Milvus is an intelligent system designed to manage IT operations and provide help desk support.",
		icon: "Milvus.svg",
		categories: [
			"network-hardware",
			"business-tools",
		],
		rules: [
			{
				id: "milvus:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.api\\.milvus\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:milvus:milvus:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "netop",
		name: "Netop",
		website: "https://netop.com",
		description: "Netop is a platform that provides remote support and chat solutions for secure communication and technical assistance.",
		icon: "Netop.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "netop:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.netop\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "paessler",
		name: "Paessler",
		website: "https://www.paessler.com",
		description: "Paessler is a network monitoring platform that provides complete visibility into IT infrastructure through a single solution, helping detect, analyze, and resolve performance issues across systems and devices.",
		icon: "Paessler.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "paessler:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.paessler\\.com"),
				description: "Script content contains a bounded technology signature.",
			},
			{
				id: "paessler:dom:1",
				kind: "dom",
				selector: "span[class*='paesslerlogo'] > a[href*='www.paessler.com']",
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
		id: "palo-alto-networks-globalprotect",
		name: "Palo Alto Networks - GlobalProtect",
		website: "https://www.paloaltonetworks.com/sase/globalprotect",
		description: "GlobalProtect is a web-based portal that enables connection to a VPN, providing secure access to enterprise networks and resources.",
		icon: "GlobalProtect.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "palo-alto-networks-globalprotect:dom:0",
				kind: "dom",
				selector: "link[href*='/global-protect/portal/css/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "pulse-secure",
		name: "Pulse Secure",
		website: "https://www.pulsesecure.net/products/remote-access-overview/",
		description: "Pulse Secure allows users to deploy VPNs to securely to your internal resources.",
		icon: "PulseSecure.png",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "pulse-secure:url:0",
				kind: "url",
				pattern: new RegExp("\\/dana-na\\/auth\\/"),
				description: "Page URL matches a known technology marker.",
			},
			{
				id: "pulse-secure:cookie:1",
				kind: "cookie",
				keyPattern: new RegExp("^DSSIGNIN$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
			{
				id: "pulse-secure:cookie:2",
				kind: "cookie",
				keyPattern: new RegExp("^dssignin$", "i"),
				description: "Cookie name matches a known technology marker.",
			},
		],
		metadata: {
			cpe: "cpe:2.3:a:pulsesecure:pulse_connect_secure:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "red-hat-gluster",
		name: "Red Hat Gluster",
		website: "https://www.gluster.org",
		description: "Gluster is a free and open source scalable network filesystem.",
		icon: "gluster.png",
		categories: [
			"network-hardware",
		],
		rules: [],
		metadata: {
			saas: true,
		},
	},
	{
		id: "sedna-system",
		name: "Sedna System",
		website: "https://sednasystem.io",
		description: "Sedna System is a real-time yacht management platform designed to monitor operations, track vessel status, and optimize onboard resources.",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "sedna-system:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("client\\.sednasystem\\.com"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "sedna-system:dom:1",
				kind: "dom",
				selector: "iframe[src*='client.sednasystem.com/']",
				description: "DOM selector matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
		},
	},
	{
		id: "shellinabox",
		name: "ShellInABox",
		website: "https://shellinabox.com",
		description: "Shell In A Box implements a web server that can export arbitrary command line tools to a web based terminal emulator.",
		icon: "ShellInABox.png",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "shellinabox:html:0",
				kind: "html",
				pattern: new RegExp("<title>Shell In A Box<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "shellinabox:html:1",
				kind: "html",
				pattern: new RegExp("must be enabled for ShellInABox<\\/noscript>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "shellinabox:jsGlobal:2",
				kind: "jsGlobal",
				property: "ShellInABox",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "shellinabox:html:3",
				kind: "html",
				pattern: new RegExp("<title>shell in a box<\\/title>"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "shellinabox:html:4",
				kind: "html",
				pattern: new RegExp("must be enabled for shellinabox<\\/noscript>"),
				description: "HTML contains a known technology signature.",
			},
		],
	},
	{
		id: "synology-diskstation",
		name: "Synology DiskStation",
		website: "https://synology.com",
		description: "DiskStation provides a full-featured network attached storage.",
		icon: "Synology DiskStation.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "synology-diskstation:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("webapi\\/entry\\.cgi\\?api=SYNO\\.(?:Core|Filestation)\\.Desktop\\."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "synology-diskstation:html:1",
				kind: "html",
				pattern: new RegExp("<noscript><div class='syno-no-script'"),
				description: "HTML contains a known technology signature.",
			},
			{
				id: "synology-diskstation:meta:2",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("Synology DiskStation", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "synology-diskstation:meta:3",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^DiskStation provides a full-featured network attached storage", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "synology-diskstation:dom:4",
				kind: "dom",
				selector: "noscript > div[class*='syno-no-script']",
				description: "DOM selector matches a known technology marker.",
			},
			{
				id: "synology-diskstation:scriptSrc:5",
				kind: "scriptSrc",
				pattern: new RegExp("webapi\\/entry\\.cgi\\?api=syno\\.(?:core|filestation)\\.desktop\\."),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "synology-diskstation:meta:6",
				kind: "meta",
				key: "application-name",
				valuePattern: new RegExp("synology diskstation", "i"),
				description: "Meta tag matches a known technology marker.",
			},
			{
				id: "synology-diskstation:meta:7",
				kind: "meta",
				key: "description",
				valuePattern: new RegExp("^diskstation provides a full-featured network attached storage", "i"),
				description: "Meta tag matches a known technology marker.",
			},
		],
	},
	{
		id: "teamviewer",
		name: "TeamViewer",
		website: "https://monitis.com",
		description: "TeamViewer is a network and IT systems uptime monitoring service, formerly known as Monitis.",
		icon: "TeamViewer.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "teamviewer:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("rum\\.monitis\\.com\\/"),
				description: "Script source URL matches a known technology marker.",
			},
		],
		metadata: {
			saas: true,
			pricing: [
				"low",
				"recurring",
			],
			cpe: "cpe:2.3:a:teamviewer:teamviewer:*:*:*:*:*:*:*:*",
		},
	},
	{
		id: "upscope",
		name: "Upscope",
		website: "https://upscope.com",
		description: "Upscope is a cobrowsing software enabling real-time website navigation with others, facilitating seamless teamwork and improved customer support.",
		icon: "Upscope.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "upscope:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("js\\.upscope\\.io\\/"),
				description: "Script source URL matches a known technology marker.",
			},
			{
				id: "upscope:jsGlobal:1",
				kind: "jsGlobal",
				property: "Upscope",
				description: "Page-owned global matches a known technology marker.",
			},
			{
				id: "upscope:jsGlobal:2",
				kind: "jsGlobal",
				property: "Upscope._version",
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
				"recurring",
			],
		},
	},
	{
		id: "voetbalassist",
		name: "VoetbalAssist",
		website: "https://www.voetbalassist.nl",
		description: "VoetbalAssist is a club management software platform that supports administrative tasks, member registration, scheduling, communication, and performance tracking for sports organizations.",
		icon: "VoetbalAssist.svg",
		categories: [
			"network-hardware",
		],
		rules: [
			{
				id: "voetbalassist:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("cache\\.voetbalassist\\.nl\\/"),
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
		},
	},
] as const satisfies readonly TechnologyDefinition[];
